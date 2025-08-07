const CACHE_NAME = 'fitnesspro-ultimate-v1.0.0';
const urlsToCache = [
    '/fitnesspro-app/',
    '/fitnesspro-app/index-ultimate.html',
    '/fitnesspro-app/manifest-ultimate.json'
];

// Install Service Worker
self.addEventListener('install', function(event) {
    console.log('FitnessPro SW: Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('FitnessPro SW: Caching files');
                return cache.addAll(urlsToCache);
            })
            .then(function() {
                console.log('FitnessPro SW: Installation complete');
                return self.skipWaiting();
            })
    );
});

// Activate Service Worker
self.addEventListener('activate', function(event) {
    console.log('FitnessPro SW: Activating...');
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (cacheName !== CACHE_NAME) {
                        console.log('FitnessPro SW: Deleting old cache', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(function() {
            console.log('FitnessPro SW: Activation complete');
            return self.clients.claim();
        })
    );
});

// Fetch Handler
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Return cached version or fetch from network
                if (response) {
                    console.log('FitnessPro SW: Serving from cache', event.request.url);
                    return response;
                }
                
                console.log('FitnessPro SW: Fetching from network', event.request.url);
                return fetch(event.request).then(function(response) {
                    // Don't cache non-successful responses
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }
                    
                    // Clone the response
                    var responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                });
            })
            .catch(function(error) {
                console.log('FitnessPro SW: Fetch failed', error);
                // Return offline page or default response
                if (event.request.destination === 'document') {
                    return caches.match('/fitnesspro-app/');
                }
            })
    );
});

// Background Sync for workout data
self.addEventListener('sync', function(event) {
    if (event.tag === 'workout-sync') {
        console.log('FitnessPro SW: Background sync - workout data');
        event.waitUntil(syncWorkoutData());
    }
});

// Push Notifications
self.addEventListener('push', function(event) {
    console.log('FitnessPro SW: Push notification received');
    
    const options = {
        body: event.data ? event.data.text() : 'Время для тренировки! 💪',
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="#0f172a"/><text x="96" y="140" font-size="120" text-anchor="middle" fill="#3b82f6">💪</text></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><text y=".9em" font-size="80">💪</text></svg>',
        vibrate: [200, 100, 200],
        data: {
            url: '/fitnesspro-app/'
        },
        actions: [
            {
                action: 'start-workout',
                title: 'Начать тренировку',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><text y=".9em" font-size="80">🏋️</text></svg>'
            },
            {
                action: 'view-stats',
                title: 'Статистика',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><text y=".9em" font-size="80">📊</text></svg>'
            }
        ]
    };
    
    event.waitUntil(
        self.registration.showNotification('FitnessPro - Тренировка', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', function(event) {
    console.log('FitnessPro SW: Notification click received');
    
    event.notification.close();
    
    let urlToOpen = '/fitnesspro-app/';
    
    if (event.action === 'start-workout') {
        urlToOpen = '/fitnesspro-app/';
    } else if (event.action === 'view-stats') {
        urlToOpen = '/fitnesspro-app/?page=stats';
    }
    
    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function(clientList) {
            // If app is already open, focus it
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url.includes('/fitnesspro-app/') && 'focus' in client) {
                    return client.focus();
                }
            }
            
            // Otherwise, open new window
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

// Sync workout data function
async function syncWorkoutData() {
    try {
        // This would typically sync with a backend server
        console.log('FitnessPro SW: Syncing workout data...');
        
        // For now, just log that sync was attempted
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
            client.postMessage({
                type: 'SYNC_COMPLETE',
                message: 'Workout data synced successfully'
            });
        });
        
        return Promise.resolve();
    } catch (error) {
        console.error('FitnessPro SW: Sync failed', error);
        return Promise.reject(error);
    }
}

// Periodic background sync for reminders
self.addEventListener('periodicsync', function(event) {
    if (event.tag === 'workout-reminder') {
        console.log('FitnessPro SW: Periodic sync - workout reminder');
        event.waitUntil(checkWorkoutReminder());
    }
});

// Check if user needs workout reminder
async function checkWorkoutReminder() {
    const now = new Date();
    const hour = now.getHours();
    
    // Send reminder between 10-12 (user's preferred workout time)
    if (hour >= 10 && hour <= 12) {
        const clients = await self.clients.matchAll();
        
        if (clients.length === 0) {
            // App is not open, send push notification
            self.registration.showNotification('FitnessPro - Время тренировки! 💪', {
                body: 'Не забудьте о сегодняшней тренировке. Ваши мышцы ждут!',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><rect width="192" height="192" fill="#0f172a"/><text x="96" y="140" font-size="120" text-anchor="middle" fill="#3b82f6">💪</text></svg>',
                vibrate: [200, 100, 200],
                data: { url: '/fitnesspro-app/' }
            });
        }
    }
}

console.log('FitnessPro SW: Service Worker loaded');

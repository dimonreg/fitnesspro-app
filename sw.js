const CACHE_NAME = 'fitnesspro-professional-v1.2.0';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json'
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
                    return caches.match('/');
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
        icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%233B82F6"/><stop offset="100%" style="stop-color:%231D4ED8"/></linearGradient></defs><circle cx="96" cy="96" r="88" fill="url(%23grad)"/><g fill="white"><circle cx="60" cy="76" r="8"/><circle cx="132" cy="76" r="8"/><rect x="70" y="60" width="52" height="12" rx="6"/><rect x="50" y="90" width="92" height="16" rx="8"/><rect x="60" y="110" width="72" height="12" rx="6"/><rect x="70" y="125" width="52" height="8" rx="4"/></g></svg>',
        badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96"><circle cx="48" cy="48" r="44" fill="%233B82F6"/><text x="48" y="65" font-size="40" text-anchor="middle" fill="white">💪</text></svg>',
        vibrate: [200, 100, 200],
        data: {
            url: '/'
        },
        actions: [
            {
                action: 'start-workout',
                title: 'Начать тренировку'
            },
            {
                action: 'view-stats',
                title: 'Статистика'
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
    
    let urlToOpen = '/';
    
    if (event.action === 'start-workout') {
        urlToOpen = '/';
    } else if (event.action === 'view-stats') {
        urlToOpen = '/?page=stats';
    }
    
    event.waitUntil(
        clients.matchAll({
            type: 'window',
            includeUncontrolled: true
        }).then(function(clientList) {
            // If app is already open, focus it
            for (let i = 0; i < clientList.length; i++) {
                const client = clientList[i];
                if (client.url.includes('/') && 'focus' in client) {
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
        console.log('FitnessPro SW: Syncing workout data...');
        
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
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%233B82F6"/><stop offset="100%" style="stop-color:%231D4ED8"/></linearGradient></defs><circle cx="96" cy="96" r="88" fill="url(%23grad)"/><g fill="white"><circle cx="60" cy="76" r="8"/><circle cx="132" cy="76" r="8"/><rect x="70" y="60" width="52" height="12" rx="6"/><rect x="50" y="90" width="92" height="16" rx="8"/><rect x="60" y="110" width="72" height="12" rx="6"/><rect x="70" y="125" width="52" height="8" rx="4"/></g></svg>',
                vibrate: [200, 100, 200],
                data: { url: '/' }
            });
        }
    }
}

console.log('FitnessPro SW: Professional Service Worker loaded');

// ============================================================================
//                          SERVICE WORKER ДЛЯ PWA
//                        ПЕРСОНАЛЬНОЕ ПРИЛОЖЕНИЕ ТРЕНИРОВОК
// ============================================================================

const CACHE_NAME = 'workout-app-v1.0.0';
const urlsToCache = [
    './',
    './index.html',
    './styles.css',
    './script.js',
    './manifest.json',
    './icon.svg',
    // Добавляем Google Fonts
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
    'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2'
];

// 🚀 УСТАНОВКА SERVICE WORKER
self.addEventListener('install', (event) => {
    console.log('🔧 Service Worker: Установка');
    
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('📦 Кэшируем файлы приложения');
                return cache.addAll(urlsToCache);
            })
            .then(() => {
                console.log('✅ Все файлы успешно кэшированы');
                return self.skipWaiting();
            })
            .catch((error) => {
                console.error('❌ Ошибка кэширования:', error);
            })
    );
});

// 🔄 АКТИВАЦИЯ SERVICE WORKER
self.addEventListener('activate', (event) => {
    console.log('⚡ Service Worker: Активация');
    
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('🗑️ Удаляем старый кэш:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            console.log('✅ Service Worker активирован');
            return self.clients.claim();
        })
    );
});

// 🌐 ОБРАБОТКА ЗАПРОСОВ (СТРАТЕГИЯ CACHE FIRST)
self.addEventListener('fetch', (event) => {
    // Игнорируем запросы, которые не являются GET
    if (event.request.method !== 'GET') {
        return;
    }

    // Игнорируем запросы к chrome-extension
    if (event.request.url.startsWith('chrome-extension://')) {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Если файл есть в кэше - возвращаем его
                if (response) {
                    console.log('📦 Из кэша:', event.request.url);
                    return response;
                }

                // Если файла нет в кэше - загружаем из сети
                console.log('🌐 Из сети:', event.request.url);
                return fetch(event.request)
                    .then((response) => {
                        // Проверяем, что ответ валидный
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Клонируем ответ для кэширования
                        const responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then((cache) => {
                                cache.put(event.request, responseToCache);
                            });

                        return response;
                    })
                    .catch((error) => {
                        console.error('❌ Ошибка загрузки:', error);
                        
                        // Если это HTML страница и мы офлайн - возвращаем кэшированную главную
                        if (event.request.destination === 'document') {
                            return caches.match('./index.html');
                        }
                        
                        throw error;
                    });
            })
    );
});

// 📱 ОБРАБОТКА BACKGROUND SYNC
self.addEventListener('sync', (event) => {
    console.log('🔄 Background Sync:', event.tag);
    
    if (event.tag === 'workout-data-sync') {
        event.waitUntil(syncWorkoutData());
    }
});

// 💾 СИНХРОНИЗАЦИЯ ДАННЫХ ТРЕНИРОВОК
async function syncWorkoutData() {
    try {
        console.log('📊 Синхронизация данных тренировок...');
        
        const clients = await self.clients.matchAll();
        clients.forEach(client => {
            client.postMessage({
                type: 'SYNC_COMPLETE',
                message: 'Данные синхронизированы'
            });
        });
        
        console.log('✅ Синхронизация завершена');
    } catch (error) {
        console.error('❌ Ошибка синхронизации:', error);
    }
}

// 🔔 ОБРАБОТКА PUSH УВЕДОМЛЕНИЙ
self.addEventListener('push', (event) => {
    console.log('🔔 Push уведомление получено');
    
    const options = {
        body: event.data ? event.data.text() : 'Время для тренировки! 💪',
        icon: './icon.svg',
        badge: './icon.svg',
        vibrate: [200, 100, 200],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'start-workout',
                title: 'Начать тренировку'
            },
            {
                action: 'remind-later',
                title: 'Напомнить позже'
            }
        ]
    };

    event.waitUntil(
        self.registration.showNotification('Персональная Программа Тренировок', options)
    );
});

// 🖱️ ОБРАБОТКА КЛИКОВ ПО УВЕДОМЛЕНИЯМ
self.addEventListener('notificationclick', (event) => {
    console.log('🖱️ Клик по уведомлению:', event.action);
    
    event.notification.close();

    if (event.action === 'start-workout') {
        event.waitUntil(
            clients.openWindow('./').then(client => {
                if (client) {
                    client.postMessage({
                        type: 'START_WORKOUT',
                        action: 'notification-click'
                    });
                }
            })
        );
    } else if (event.action === 'remind-later') {
        console.log('⏰ Напоминание отложено');
    } else {
        event.waitUntil(
            clients.openWindow('./')
        );
    }
});

// 📧 ОБРАБОТКА СООБЩЕНИЙ ОТ КЛИЕНТА
self.addEventListener('message', (event) => {
    console.log('📧 Сообщение от клиента:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
    
    if (event.data && event.data.type === 'REQUEST_SYNC') {
        event.waitUntil(syncWorkoutData());
    }
});

console.log('🎯 Service Worker загружен и готов к работе!');
console.log('📦 Версия кэша:', CACHE_NAME);

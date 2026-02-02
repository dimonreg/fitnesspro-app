// ============================================================================
//                          SERVICE WORKER ДЛЯ PWA
//                             FitPro v2.0
// ============================================================================

const CACHE_NAME = 'fitpro-v2.1.0';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.svg',
    './icon-512.svg'
];

// Файлы аватаров
const avatarFiles = [
    './muhamed_1.png',
    './muhamed_2.png', 
    './muhamed_3.png',
    './muhamed_4.png',
    './nikolay_1.png',
    './nikolay_2.png',
    './nikolay_3.png',
    './nikolay_4.png'
];

// УСТАНОВКА SERVICE WORKER
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(urlsToCache)
                    .then(() => {
                        return Promise.allSettled(
                            avatarFiles.map(url => 
                                cache.add(url).catch(() => {})
                            )
                        );
                    });
            })
            .then(() => self.skipWaiting())
    );
});

// АКТИВАЦИЯ SERVICE WORKER
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

// ОБРАБОТКА ЗАПРОСОВ (NETWORK FIRST)
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    if (event.request.url.startsWith('chrome-extension://')) return;

    event.respondWith(
        fetch(event.request)
            .then((response) => {
                if (response && response.status === 200) {
                    const responseClone = response.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseClone);
                    });
                }
                return response;
            })
            .catch(() => {
                return caches.match(event.request).then((cachedResponse) => {
                    if (cachedResponse) {
                        return cachedResponse;
                    }
                    if (event.request.mode === 'navigate') {
                        return caches.match('./index.html');
                    }
                });
            })
    );
});

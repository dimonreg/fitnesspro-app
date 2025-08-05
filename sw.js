// Service Worker для FitnessPro
const CACHE_NAME = 'fitnesspro-v1';
const urlsToCache = [
  '/fitnesspro-app/',
  '/fitnesspro-app/index.html',
  '/fitnesspro-app/manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Возвращаем кешированную версию или делаем сетевой запрос
        return response || fetch(event.request);
      }
    )
  );
});

// Обработка ошибок навигации для SPA
self.addEventListener('fetch', function(event) {
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request).catch(() => {
        return caches.match('/fitnesspro-app/index.html');
      })
    );
  }
});

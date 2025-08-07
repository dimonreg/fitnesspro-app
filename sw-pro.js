// FitnessPro Professional Service Worker
const CACHE_NAME = 'fitnesspro-professional-v1';
const urlsToCache = [
  '/fitnesspro-app/',
  '/fitnesspro-app/index-pro.html',
  '/fitnesspro-app/manifest-pro.json',
  '/fitnesspro-app/js/fitness-pro.js'
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
        return caches.match('/fitnesspro-app/index-pro.html');
      })
    );
  }
});

// Фоновая синхронизация для сохранения тренировок
self.addEventListener('sync', function(event) {
  if (event.tag === 'workout-sync') {
    event.waitUntil(syncWorkoutData());
  }
});

async function syncWorkoutData() {
  // Синхронизация данных тренировок в фоне
  console.log('Syncing workout data...');
}

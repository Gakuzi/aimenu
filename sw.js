const CACHE_NAME = 'family-menu-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  // Основные JS модули будут кэшироваться при первом запросе
];

// Установка Service Worker и кэширование основных ресурсов
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Активация Service Worker и очистка старых кэшей
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Обработка запросов: сначала из кэша, потом из сети (Cache-First)
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Если ресурс есть в кэше, возвращаем его
        if (response) {
          return response;
        }

        // Если нет, делаем запрос к сети
        return fetch(event.request).then(
          response => {
            // Если ответ невалидный, просто возвращаем его
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Клонируем ответ, так как его можно использовать только один раз
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});


// Обработка клика по уведомлению
self.addEventListener('notificationclick', event => {
  event.notification.close();
  // Фокусируется на существующем окне приложения или открывает новое
  event.waitUntil(clients.matchAll({
    type: "window"
  }).then(clientList => {
    for (const client of clientList) {
      if (client.url === '/' && 'focus' in client)
        return client.focus();
    }
    if (clients.openWindow)
      return clients.openWindow('/');
  }));
});

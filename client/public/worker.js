const FILES_TO_CACHE = [
  '/',
  '/home',
  '/menu',
  '/employees',
  '/inventory',
  '/shifts',
  '/FOH',
  '/BOH',
  '/floorplans',
  `/manifest.webmanifest`,
  `./placeholderLogo.png`
];
const STATIC_CACHE = `static-cache-v1`;
const RUNTIME_CACHE = `runtime-cache`;
self.addEventListener(`install`, event => {
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then(cache => cache.addAll(FILES_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', event => {
  var cacheWhitelist = ['pwa-task-manager'];
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

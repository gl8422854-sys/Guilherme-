const CACHE_NAME = 'arcade-space-invaders-v1';
const urlsToCache = [
  './index.html',
  './manifest.json'
];

// Instala o Service Worker e guarda os arquivos em cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercepta as requisições para carregar o app offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});

const CACHE_NAME = 'sleep-opt-v1';
const ASSETS = [
  '/',
  '/index.html',
  // Tambahkan file css atau js lain jika ada
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Assets (Agar bisa offline)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});

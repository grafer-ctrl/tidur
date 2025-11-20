// Nama cache yang akan digunakan
const CACHE_NAME = 'grafer-ctrl-v1';

// Daftar file yang akan di-cache
const URLS_TO_CACHE = [
  '/',
  '/game.html', // Ganti dengan index.html jika itu file utama Anda
  '/manifest.json',
  '/192.png',
  // Tambahkan file lainnya seperti CSS, JS, dan ikon lainnya
  // '/js/main.js',
  // '/css/style.css'
];

// Event install: Mendaftarkan file-file ke cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(URLS_TO_CACHE);
      })
  );
});

// Event fetch: Melayani request dari cache jika tersedia
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

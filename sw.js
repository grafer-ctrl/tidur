// sw.js
const CACHE_NAME = 'grafer-ctrl-v1';

// Pastikan '/' dan '/index.html' ada di daftar ini
const URLS_TO_CACHE = [
  '/',          // Ini biasanya merujuk ke index.html
  '/index.html', // Lebih eksplisit untuk menyertakannya
  '/manifest.json',
  '/192.png',
  // Tambahkan semua file lain yang dibutuhkan (CSS, JS, gambar, dll)
];

// ... sisanya kode sw.js tetap sama ...

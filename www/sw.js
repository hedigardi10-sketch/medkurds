importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyDUuAktxmXzwqd-c1HJSsswyhCkQz2ZSx4",
  authDomain: "parstary-9abd3.firebaseapp.com",
  projectId: "parstary-9abd3",
  storageBucket: "parstary-9abd3.firebasestorage.app",
  messagingSenderId: "521250017077",
  appId: "1:521250017077:web:9dc6bbc6a04e54c000867c",
  measurementId: "G-SVLFL18SXK"
});

const messaging = firebase.messaging();

const CACHE_NAME = 'medkurds-v33';
const ASSETS = [
    './',
    './index.html',
    './css/style.css?v=69',
    './js/firebase-config.js',
    './js/3d-body.js',
    './js/data.js',
    './js/app.js',
    './js/data/drugs.js',
    './js/data/nursing.js',
    './js/data/emergency.js',
    './js/data/body.js',
    './js/data/lab.js',
    './js/data/others.js',
    './js/data/nutrition.js',
    './js/data/dictionary.js',
    './js/data/herbal.js',
    './js/data/maternal.js',
    './js/data/poisoning.js',
    './manifest.json',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100..900&family=Vazirmatn:wght@100..900&family=Outfit:wght@300..800&display=swap'
];

// Install Event - Pre-cache critical static assets
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Pre-caching static assets');
            return cache.addAll(ASSETS);
        })
    );
    self.skipWaiting();
});

// Activate Event - Clean up older caches
self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.map((key) => {
                    if (key !== CACHE_NAME) {
                        console.log('[Service Worker] Deleting old cache:', key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch Event - Serve cached assets or fetch and dynamically cache
self.addEventListener('fetch', (e) => {
    // Offline caching removed as requested. Always fetch fresh from network.
    e.respondWith(fetch(e.request));
});

// Handle Background Messaging
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    
    const notificationTitle = payload.notification?.title || 'MedKurds ئاگاداری';
    const notificationOptions = {
        body: payload.notification?.body || '',
        icon: 'https://cdn-icons-png.flaticon.com/512/2864/2864448.png',
        badge: 'https://cdn-icons-png.flaticon.com/512/2864/2864448.png'
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

// this = serviceWorker
const self = this;

// Install Service Worker
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch((error) =>
        caches.match("offline.html")
      );
    })
  );
});

// Activate the Service Worker
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  // things we want to keep
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

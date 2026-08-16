/* Offline cache. Bump CACHE when you deploy content changes — the old cache is
   then dropped on activate and everything is fetched fresh. */

const CACHE = "visit-forde-v1";

const SHELL = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "i18n.js",
  "data.js",
  "data.it.js",
  "data.no.js",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Serve from cache immediately, refresh in the background. A phone in a tunnel
   gets the guide; a phone with signal gets yesterday's copy and tomorrow's update. */
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    caches.match(req).then((hit) => {
      const fresh = fetch(req)
        .then((res) => {
          if (res.ok) caches.open(CACHE).then((c) => c.put(req, res.clone()));
          return res;
        })
        .catch(() => hit || caches.match("index.html"));
      return hit || fresh;
    })
  );
});

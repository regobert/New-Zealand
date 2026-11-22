// Service worker: maakt de app offline bruikbaar.
// Verhoog CACHE_VERSION bij elke nieuwe versie van de app, dan halen telefoons de update op.
const CACHE_VERSION = 'nz-reis-v2';
const APP_SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png'];
// Externe bibliotheken en lettertypen die na het eerste bezoek offline beschikbaar blijven.
// upload.wikimedia.org: de dagfoto's, zodat ze na één keer bekijken ook offline te zien zijn.
const RUNTIME_HOSTS = ['unpkg.com', 'fonts.googleapis.com', 'fonts.gstatic.com', 'www.gstatic.com', 'upload.wikimedia.org'];
const PRECACHE_EXTERNAL = [
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
  'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_VERSION);
    await cache.addAll(APP_SHELL);
    // Externe bestanden mogen mislukken zonder de installatie te blokkeren.
    await Promise.all(PRECACHE_EXTERNAL.map(url => cache.add(url).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === self.location.origin;

  // De app zelf: eerst het netwerk (voor updates), bij geen bereik de opgeslagen versie.
  if (sameOrigin) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_VERSION);
      try {
        const fresh = await fetch(req);
        if (fresh.ok) cache.put(req, fresh.clone());
        return fresh;
      } catch (e) {
        return (await cache.match(req, { ignoreSearch: true })) || (await cache.match('index.html')) || Response.error();
      }
    })());
    return;
  }

  // Bibliotheken en lettertypen: eerst de opgeslagen versie, anders ophalen en bewaren.
  if (RUNTIME_HOSTS.includes(url.hostname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_VERSION);
      const hit = await cache.match(req);
      if (hit) return hit;
      const fresh = await fetch(req);
      if (fresh.ok || fresh.type === 'opaque') cache.put(req, fresh.clone());
      return fresh;
    })());
  }
});

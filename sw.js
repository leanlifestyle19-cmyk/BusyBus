// BusyBus Service Worker
// ⚠️ Bump CACHE name on every index.html deploy
const CACHE = 'busybus-v1';

// All external API calls — never cache these
const BYPASS = [
  'generativelanguage.googleapis.com',  // Gemini AI
  'arrivelah2.busrouter.sg',            // Live bus arrivals
  'busrouter.sg',                       // Bus stop directory
];

self.addEventListener('install', e => {
  e.waitUntil(
    fetch('./index.html')
      .then(res => caches.open(CACHE).then(c => c.put('./index.html', res)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const { hostname } = new URL(e.request.url);
  if (BYPASS.some(h => hostname.includes(h))) return;

  if (e.request.mode === 'navigate') {
    e.respondWith(caches.match('./index.html').then(r => r || fetch(e.request)));
    return;
  }

  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      if (res && res.ok) caches.open(CACHE).then(c => c.put(e.request, res.clone()));
      return res;
    }))
  );
});
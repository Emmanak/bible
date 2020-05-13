const staticCacheName = 'site-static-login';
const assets = [
    '/',
    '/index.html',
    '/grunge_patterns.jpg'

];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
      /*for(var i = 0; i < assets.length; i++){
          console.log("caching:"+assets[i]);
          cache.add(assets[i]);  
      }*/
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    //console.log('fetch event', evt);
    evt.respondWith(
      caches.match(evt.request).then(cacheRes => {
        return cacheRes || fetch(evt.request);
      })
    );
  });
const staticCacheName = 'site-content';
const assets = [
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/index.html',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/frames.htm',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-128x128.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-144x144.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-152x152.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-192x192.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-384x384.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-512x512.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-72x72.png',
'https://emmanak.github.io/bible/4ca70a9115ceec7a70a3a26e85c32caf492af4f9/icons/icon-96x96.png',


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
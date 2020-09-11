const cacheName = 'siteStatic';
const resources = [
'',
'index.html',
'style.css',
'main.js',
'manifest.json',
'icon-144×144.png',
'icon-152×152.png',
'icon-192×192.png',
'icon-384×384.png',
'icon-512×512.png',
'images (1).jpeg',
];

// INSTALL SERVICE WORKER
self.addEventListener('install', event => {
  //console.log('Service worker has been installed');
  event.waitUntil(
   caches.open(cacheName).then(cache => {
    console.log('caching resources');
    cache.addAll(resources); 
     })
   );
});

//Activate Event
self.addEventListener('activate', event => {
      //console.log('Service worker is active');
});

//Fetch event
self.addEventListener("fetch", event => {
  //console.log("fetch event", event);
});
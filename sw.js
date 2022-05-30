const cacheName = 'apv-v8';
const files = [
    '/',
    '/index.html',
    '/error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js',
];

// WHEN INSTALL SERVICE WORKER
self.addEventListener('install', e =>{
    e.waitUntil(
        caches.open(cacheName).
        then(cache => {
            cache.addAll(files)
        }).
        catch(error => console.log(error))
    );
})

// WHEN ACTIVATING SERVICE WORKER
self.addEventListener('active', e => {
    e.waitUntil(
        caches.keys()
              .then( keys => {
                  return Promise.all(
                      keys.filter(key => key !== cacheName)
                          .map(key => cache.delete(key)) // DELETE OLDER VERSIONS
                  );
              })
    );
});

// FETCH EVENT FOR STATIC FILES
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).
        then(cacheResponse => (cacheResponse ? cacheResponse : caches.match('error.html')))
    )
});
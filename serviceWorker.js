// Cache names

var dataCacheName = 'catchaData-v1.1.6'

var cacheName = 'catchaPWA-1.6'

// Application shell files to be cached

var filesToCache = [

       '/',
       '/manifest.json',
       '/serviceWorker.js',
       '/scripts/app.js',
       '/index.html',

       '/images/favicon.ico',

       '/uikit/css/uikit.almost-flat.min.css',
       'public/package/font-awesome/css/font-awesome.min.css',
       '/css/style.css',

       '/public/package/jquery-1.12.4.min.js',
       '/uikit/js/uikit.min.js',

       '/images/emoji/in-love.png',
       '/images/emoji/smiling.png',
       '/images/emoji/unhappy.png',
       '/images/brand/inapp.png',
       '/images/topic/chef.png',
       '/images/icon/checked_blue_28.png',
       '/images/topic/burger-flat.png',
       '/images/topic/grocery.png',
       '/images/topic/more.png',

]

       



self.addEventListener('install', function (e) {

      console.log('[ServiceWorker] Install')

      e.waitUntil(

             caches.open(cacheName).then(function (cache) {

                     console.log('[ServiceWorker] Caching app shell')

                     return cache.addAll(filesToCache)

              })

      )

})

self.addEventListener('activate', function (e) {

      console.log('[ServiceWorker] Activate')

      e.waitUntil(

              caches.keys().then(function (keyList) {

                       return Promise.all(keyList.map(function (key) {

                               if (key !== cacheName && key !== dataCacheName) {

                                    console.log('[ServiceWorker] Removing old cache', key)

                                    return caches.delete(key)

                               }

                        }))

              })

      )

      return self.clients.claim()

})

self.addEventListener('fetch', function (e) {

      console.log('[ServiceWorker] Fetch', e.request.url)

      e.respondWith(

             caches.match(e.request).then(function (response) {

                     return response || fetch(e.request)

             })
       )
})
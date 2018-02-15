//service worker
self.addEventListener('install', function (event) {
    event.waitUntill(
        //after service worker is installed 
        //open a new cache
        caches.open('photomaster-cache').then(function (cache) {
            //add all urls of resources we want to cache
            return cache.addAll([
                '/'
                , '/index.html'
                , '/about-us.html'
                , '/css/app_min.css'
                , '/css/nav.css'
                , '/css/pricing.css'
                '/js/app.js'
                , '/js/sw.js'
                , '/img'
            ]);
        }));
});
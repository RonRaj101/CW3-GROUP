var cacheName = "Course App";
var cacheFiles = [
"index.html",
"courses.js"
];
self.addEventListener("install", function(e) {
console.log("[Service Worker] Install");
e.waitUntil(
caches.open(cacheName).then(function(cache) {
console.log("[Service Worker] Caching files");
return cache.addAll(cacheFiles);
})
);
});

self.addEventListener('fetch',() => console.log("fetch"));

self.addEventListener('fetch', function (e) {
    e.respondWith(
        // check if the cache has the file        
        caches.match(e.request).then(function (r) {
            // download file if not in the cache
            return r || fetch(e.request).then(function(response){
                // add the new file to cache
                return caches.open(cacheName).then(function(cache){
                    cache.put(e.request, response.clone());
                    return response;
                })
            })
        })
)});

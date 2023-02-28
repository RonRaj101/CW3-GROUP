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
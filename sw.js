self.addEventListener("install", event => {
    // cache static assets
    event.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./assets/battery.png",
                "./css/style.css",
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    console.log(`Intercepted fetch request for: ${event.request.url}`);
});
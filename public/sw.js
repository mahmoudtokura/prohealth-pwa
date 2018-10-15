var cacheName = "prohealt-pwa";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache =>
        cache.addAll([
          "/materialize.min.css",
          "/materialize.min.js",
          "/jquery-3.2.1.min.js",
          "/static/js/bundle.js",
          "/static/js/main.chunk.js",
          "/static/js/0.chunk.js",
          "/index.html",
          "/"
        ])
      )
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(responce) {
      if (responce) return responce;
    })
  );
});

var cacheName = "prohealt-pwa";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache =>
        cache.addAll([
          "/materialize.min.css",
          "/materialize.min.js",
          "/google-font-icons.css",
          "/google-font-icons.woff2",
          "/jquery-3.2.1.min.js",
          "/static/js/bundle.js",
          "/static/js/main.chunk.js",
          "/static/js/0.chunk.js",
          "/static/media/post_place_holder.ebc88f19.jpg",
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

      var fetchRequest = event.request.clone();
      return fetch(fetchRequest).then(fetchResponce => {
        if (fetchResponce || fetchResponce.status !== 0) {
          return fetchResponce;
        } else {
          var responceToCache = fetchResponce.clone();
          caches.open(cacheName).then(function(cache) {
            cache.put(event.request, responceToCache);
          });

          return fetchResponce;
        }
      });
    })
  );
});

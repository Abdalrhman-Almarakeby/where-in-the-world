/* eslint-disable no-undef */
importScripts("https://storage.googleapis.com/workbox-cdn/releases/6.5.4/workbox-sw.js");

workbox.routing.registerRoute(
  new RegExp(
    "https://restcountries.com/v3.1/all\\?fields=name,capital,flags,languages,region,population,cca3,cca2"
  ),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "all-countries-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 1,
        maxAgeSeconds: 60 * 60 * 24 * 7, // 7 days
      }),
    ],
  })
);

workbox.routing.registerRoute(
  new RegExp(
    "https://restcountries.com/v3.1/alpha/.*\\?fields=name,region,subregion,capital,population,currencies,languages,tld,borders,flags,maps,cca2"
  ),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "country-details-cache",
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 250,
        maxAgeSeconds: 60 * 60 * 24 * 7, //  7 days
      }),
    ],
  })
);

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

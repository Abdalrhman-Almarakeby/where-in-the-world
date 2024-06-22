if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("service worker registered successfully!"))
    .catch(console.error);
}

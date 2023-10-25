const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator) {
    try {
      const registration = await navigator.serviceWorker.register("/servive_worker.js", {
        scope: "/",
      });
      if (registration.installing) {
        console.log("Service worker installing");
        alert('Service worker installing')
      } else if (registration.waiting) {
        console.log("Service worker waiting");
        alert('Service worker waiting')
      } else if (registration.active) {
        console.log("Service worker active");
        alert('Service worker active')
      }
    } catch (error) {
      console.error(`Registration failed with ${error}`);
      alert(`Registration failed with ${error}`)
    }
  }
};

registerServiceWorker();

// self.addEventListener("activate", Event => Handle_activate(Event));
// self.addEventListener("fetch", Event => Handle_fetch(Event));
// self.addEventListener("install", Event => Handle_install(Event));

// function Handle_activate(Event){
//  console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1] + ' ' + Event);
// }

// function Handle_fetch(Event){
//  console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1] + ' ' + Event);
// }

// function Handle_install(Event){
//  console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1] + ' ' + Event);
// }

export async function registerServiceWorker(){
	if ("serviceWorker" in navigator) {
		try {
			const registration = await navigator.serviceWorker.register("/servive_worker.js", {
				scope: "/",
			});
			if (registration.installing) {
				alert('Service worker installin---g')
			} else if (registration.waiting) {
				alert('Service worker ---waiting')
			} else if (registration.active) {
				alert('Service worker act--ive')
			}
		} catch (error) {
			alert(`Registration failed with ${error}`)
		}
	}
}

export async function Start(){
  ShowContent('welcome');
}

async function ShowContent(ContentName){
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();
}

// service-worker 등록.
async function registerServiceWorker(){
	if ("serviceWorker" in navigator) {
		try {
			const registration = await navigator.serviceWorker.register("/servive_worker.js", {
				scope: "/",
			});
			if (registration.installing) {
				alert('Service worker installing')
			} else if (registration.waiting) {
				alert('Service worker waiting')
			} else if (registration.active) {
				alert('Service worker active')
			}
		} catch (error) {
			alert(`Registration failed with ${error}`)
		}
	}
}
registerServiceWorker();

// window onload 후 함수 실행
export async function Start(){
	alert('ddd')

	// check if not PWA
	if (window.matchMedia('display-mode: standalone').matches == false){
		alert('PWA를 설치하세요', window.matchMedia('display-mode: standalone').matches)
	} else { alert('PWA설치했다')}
	
  // ShowContent('welcome');
}

async function ShowContent(ContentName){
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();
}

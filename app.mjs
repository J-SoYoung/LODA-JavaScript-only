// service-worker 등록.
async function registerServiceWorker()
{
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

export async function Start()
{
	// check if not PWA
	if (window.matchMedia('display-mode: standalone').matches == false){
		ShowContent('welcome');
		return;
	} 
	ShowContent('config');
}

async function ShowContent(ContentName)
{
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();

	// do things
	switch(ContentName){
		case 'config':
			document.getElementById('loginpage_move_btn').addEventListener('click',El_Click);
			break;

		case 'loginPage':
			document.getElementById('homepage_move').addEventListener('click',El_Click);
			break;
	}
}

function El_Click(event)
{
	switch(event.target.id)
	{
		case'loginpage_move_btn':
			ShowContent('loginPage');
			break;

		case'homepage_move':
			ShowContent('homePage');
			break;
	}
}
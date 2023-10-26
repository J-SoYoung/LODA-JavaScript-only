// // service-worker 등록.
// async function registerServiceWorker()
// {
// 	if ("serviceWorker" in navigator) {
// 		try {
// 			const registration = await navigator.serviceWorker.register("/servive_worker.js", {
// 				scope: "/",
// 			});
// 			if (registration.installing) {
// 				alert('Service worker installing')
// 			} else if (registration.waiting) {
// 				alert('Service worker waiting')
// 			} else if (registration.active) {
// 				alert('Service worker active')
// 			}
// 		} catch (error) {
// 			alert(`Registration failed with ${error}`)
// 		}
// 	}
// }
// registerServiceWorker();

export async function Start()
{
	// check if not PWA
	if (window.matchMedia('(display-mode: standalone)').matches == false){
		ShowContent('welcome');
		return;
	} 
	ShowContent('config');
}

async function ShowContent(ContentName)
{
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();
	//homeapge의 header, footer 사이의 content에 데이터를 넣고싶다. 위랑 비슷하게 할 수 있을 것 같은데

	// do things
	switch(ContentName){
		case 'config':
			document.getElementById('loginpage_move_btn').addEventListener('click',El_Click);
			break;

		case 'loginPage':
			document.getElementById('homepage_move').addEventListener('click',El_Click);
			break;

		case 'homePage':
			document.getElementById('postpage_move_btn').addEventListener('click',El_Click);
			document.getElementById('calendar_view_btn').addEventListener('click',El_Click);
			document.getElementById('list_view_btn').addEventListener('click',El_Click);
			break;
	}
}

function El_Click(event)
{
	switch(event.target.id)
	{
		case'loginpage_move_btn':
			alert('왜안넘어가지')
			ShowContent('loginPage');
			break;

		case'homepage_move':
			ShowContent('homePage');
			break;

		case'postpage_move_btn':
			ShowContent('postPage');
			break;

		case'calendar_view_btn':
			ShowContent('calendar');
			break;

		case'list_view_btn':
			ShowContent('homePage');
			break;
	}
}
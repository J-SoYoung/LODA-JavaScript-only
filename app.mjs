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
	ShowContent('p_config');
}

async function ShowContent(ContentName)
{
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();
	//homeapge의 header, footer 사이의 content에 데이터를 넣고싶다. 위랑 비슷하게 할 수 있을 것 같은데

	// do things
	switch(ContentName){
		case 'p_config':
			document.getElementById('loginpage_move_btn').addEventListener('click',El_Click);
			break;

		case 'p_login':
			document.getElementById('homepage_move').addEventListener('click',El_Click);
			break;

		case 'p_home':
			document.getElementById('postpage_move_btn').addEventListener('click',El_Click);
			document.getElementById('calendar_view_btn').addEventListener('click',El_Click);
			document.getElementById('list_view_btn').addEventListener('click',El_Click);
			break;
	}
}

async function ShowSubContent(SubContentName)
{
	document.getElementById('main_contents').innerHTML = await (await fetch('/contents/' + SubContentName + '.html')).text();
}

function El_Click(event)
{
	switch(event.target.id)
	{
		case'loginpage_move_btn':
			ShowContent('p_login');
			break;

		case'homepage_move':
			ShowContent('p_home');
			break;

		case'postpage_move_btn':
			ShowSubContent('c_post');
			break;

		case'calendar_view_btn':
			ShowSubContent('c_calendar');
			break;

		case'list_view_btn':
			ShowContent('p_home');
			break;
	}
}
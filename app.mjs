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

	// do things
	switch(ContentName){
		case 'config':
			document.getElementById('loginpage_move_btn').addEventListener('click',El_Click);
			break;

		case 'loginpage':
			document.getElementById('homepage_move').addEventListener('click',El_Click);
			break;

		case 'homepage':
			document.getElementById('main_logo_btn').addEventListener('click',El_Click);
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
			ShowContent('loginpage');
			break;

		case'homepage_move':
			ShowContent('homepage');
			break;

		case'main_logo_btn':
			alert('메인로고 메인으로가라')
			document.getElementById('home_section').style.display = 'block';
			document.getElementById('post_section').style.display = 'none';
			document.getElementById('calendar_section').style.display = 'none';
			break;

		case'postpage_move_btn':
			alert('postv보여ㅜ저라')
			document.getElementById('home_section').style.display = 'none';
			document.getElementById('post_section').style.display = 'block';
			document.getElementById('calendar_section').style.display = 'none';
			break;

		case'calendar_view_btn':
			alert('캘린더보여주라')
			document.getElementById('home_section').style.display = 'none';
			document.getElementById('post_section').style.display = 'none';
			document.getElementById('calendar_section').style.display = 'block';
			break;

		case'list_view_btn':
			document.getElementById('home_section').style.display = 'block';
			document.getElementById('post_section').style.display = 'none';
			document.getElementById('calendar_section').style.display = 'none';
			break;
	}
}
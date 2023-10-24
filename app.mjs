export async function Start()
{
    // check if not PWA
    if (window.matchMedia('(display-mode: standalone)').matches == false)
    {
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
    switch(ContentName)
    {
        case 'config':
            document.getElementById('loginpage_button').addEventListener('click', EL_Click);
            break;

        case 'login':
            document.getElementById('homepage_move').addEventListener('click',EL_Click);
            break;
    }
}



function EL_Click(Event)
{
    switch(Event.target.id)
    {
        case'loginpage_button':

            ShowContent('login');

            break;

        case'homepage_move':

            ShowContent('home');

            break;
    }
}
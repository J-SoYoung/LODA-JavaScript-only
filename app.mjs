
export async function Start(){
  ShowContent('welcome');
}

async function ShowContent(ContentName){
  // fill body
  window.document.body.innerHTML = await (await fetch('/contents/' + ContentName + '.html')).text();
}

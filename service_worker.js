self.addEventListener("activate", Event => Handle_activate(Event));
self.addEventListener("fetch", Event => Handle_fetch(Event));
self.addEventListener("install", Event => Handle_install(Event));

function Handle_activate(Event)
{
 console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1] + ' ' + Event);



}

function Handle_fetch(Event)
{
 console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1] + ' ' + Event);



}

function Handle_install(Event)
{
 console.log(arguments.callee.toString().match(/function ([^\(]+)/)[1] + ' ' + Event);





}





self.addEventListener("push", Event => Handle_push(Event));

function Handle_push(Event)
{
  ThePush = Event.data.json().notification;

  Event.waitUntil(self.registration.showNotification(ThePush.title, {body: ThePush.body, icon: ThePush.icon, data: ThePush.click_action}));
}
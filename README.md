# log-diary
### 😍 https://logdiary.netlify.app/<br>
Javascript를 사용해 PWA를 SPA로 구현하는 프로젝트입니다. <br>
#### ✅PWA (Progressive Web App)
PWA는 표준 웹 플랫폼 기술을 사용하여 만든 앱이다. 표준 웹 플랫폼 기술이란 [ HTML, CSS, Javascript, Service-Worker, Web-App-Manifest ]등을 뜻하며 이를 사용하여 만든 앱을 PWA라고 한다. PWA는 표준 웹 플랫폼 기술을 사용하였기 때문에 웹브라우저, 모바일 기기의 설치 및 사용에 유연함을 가진다.  
#### ✅SPA (Single Page Application)
SPA는 하나의 페이지를 가진 애플리케이션을 뜻한다. 모바일 기기에서 앱을 잘 동작하게 하기 위해서 고안된 방법이다. 앱은 하나의 페이지를 두고 프로그램이 실행되며, 사용자와 인터렉션이 필요한 부부만 Ajax(비동기적으로 데이터를 교환)를 통해 업데이트 하게 된다. Ajax를 구현하는 방식은 주로 fetch API를 사용하였다. 
<br>
<br>

## 프로젝트 기본 구성
![image](https://github.com/thdud2262/logdiary/assets/85012454/4989f641-0c69-4883-81c8-22a9be24f390)
- contents : markup의 내용이 들어 있는 폴더이다. contents안에 있는 html은 index.html의 body에 들어갈 내용의 html이다. 
- app.mjs  : 프로젝트의 js파일로, 모듈로 import하는 .mjs확장자를 사용하였다.
- index.html : SPA구현을 위한 프로젝트의 하나의 html파일이다.
- manifest.json : PWA의 기본 설정을 기술한 json파일이다. 
- servise_worker.js : PWA의 오프라인 기능을 구현할 수 있게 해 주는 파일이다. service_worker로 인해 PWA가 앱처럼 동작할 수 있게 된다.
- PWA의 기본 설정파일에 대한 추가설명 : https://www.notion.so/fun-blog/PWA-info-7c902901ed294e33b6aae7aafad11d2b
<br>
<br>

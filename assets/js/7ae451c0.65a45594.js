"use strict";(self.webpackChunknave_docs=self.webpackChunknave_docs||[]).push([[474],{3905:function(e,a,n){n.d(a,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,i=function(e,a){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(i[n]=e[n]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),l=function(e){var a=t.useContext(u),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},c=function(e){var a=l(e.components);return t.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(g,r(r({ref:a},c),{},{components:n})):t.createElement(g,r({ref:a},c))}));function m(e,a){var n=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var u in a)hasOwnProperty.call(a,u)&&(s[u]=a[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7964:function(e,a,n){n.r(a),n.d(a,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var t=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={},u="WebView Debugging",l={unversionedId:"mobile/guides/webviewDebugging",id:"mobile/guides/webviewDebugging",isDocsHomePage:!1,title:"WebView Debugging",description:"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Introdu\xe7\xe3o",source:"@site/docs/mobile/guides/webviewDebugging.md",sourceDirName:"mobile/guides",slug:"/mobile/guides/webviewDebugging",permalink:"/nave-docs/mobile/guides/webviewDebugging",editUrl:"https://github.com/naveteam/nave-docs/docs/mobile/guides/webviewDebugging.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"SnackBar",permalink:"/nave-docs/mobile/use-cases/components/snackBar"},next:{title:"Push Notification com Amazon SNS",permalink:"/nave-docs/mobile/guides/pushNotificationSNS"}},c=[{value:"\xa0\xa0\xa0\xa0\xa0 Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"\xa0\xa0\xa0\xa0\xa0 iOS",id:"ios",children:[]},{value:"\xa0\xa0\xa0\xa0\xa0 Android",id:"android",children:[]}],d={toc:c};function p(e){var a=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,t.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webview-debugging"},"WebView Debugging"),(0,o.kt)("h2",{id:"introdu\xe7\xe3o"},"\xa0","\xa0","\xa0","\xa0","\xa0"," Introdu\xe7\xe3o"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0"," Como forma de auxiliar no processo de desenvolvimento de aplicativos que utilizam internamente webviews, independente da tecnologia utilizada, este material foca no processo de debugging destas implementa\xe7\xf5es, tendo em vista suas dificuldades e desafios dentre os quais muitas das vezes n\xe3o possu\xedmos nenhum controle da execu\xe7\xe3o do c\xf3digo e alguns comportamentos que ocorrem na pr\xf3pria webview. Abaixo est\xe3o discriminadas em t\xf3picos as configura\xe7\xf5es."),(0,o.kt)("h2",{id:"ios"},"\xa0","\xa0","\xa0","\xa0","\xa0"," iOS"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0"," Para debugar webviews no ambiente de desenvolvimento OSX, seja em um aplicativo executando em dispositivo f\xedsico ou emulador, faz-se necess\xe1rio o uso do navegador Safari. Para isto, deve-se seguir os seguintes passos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},'Abrir o Safari > Acessar Prefer\xeancias > Avan\xe7ado > Habilitar o checkbox "Mostrar menu Desenvolvedor na barra de menus"'))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"safari example",src:n(8974).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Abrir o aplicativo com a webview, seja no emulador ou no dispositivo f\xedsico.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Para debugar no dispositivo f\xedsico, o Web Inspector deve estar habilitado. Para isto v\xe1 em ",(0,o.kt)("strong",{parentName:"li"},"Configura\xe7\xf5es > Safari > Avan\xe7ado > Web Inspector"))))),(0,o.kt)("img",{src:"../../../static/img/webviewDebuging/emulator.png",alt:"drawing",width:"400"}),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Voltar no Safari > Desenvolvedor > ","[Nome do dispositivo]"," > ","[Nome do App]"," > ","[URL -t\xedtulo]")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Se estas informa\xe7\xf5es n\xe3o forem exibidas como na imagem acima, provavelmente o Safari estava aberto antes do app, ent\xe3o basta reiniciar o Safari.")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"safari example",src:n(9784).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"O debugger \xe9 bem parecido com o debugger que estamos acostumados a utilizar para aplica\xe7\xf5es web front-end.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"safari example",src:n(9728).Z})),(0,o.kt)("h2",{id:"android"},"\xa0","\xa0","\xa0","\xa0","\xa0"," Android"),(0,o.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0"," Para debugar webviews em ambientes de desenvolvimento Android (Windows, Linux, OSX) seja no emulador ou em um dispositivo f\xedsico, algumas configura\xe7\xf5es no pr\xf3prio aplicativo se fazem  necess\xe1rias, dentre elas:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"No arquivo ",(0,o.kt)("strong",{parentName:"li"},"MainApplication.java"),", adicione as seguintes linhas, e re-compile o aplicativo.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"safari example",src:n(4084).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Acesse o endere\xe7o ",(0,o.kt)("strong",{parentName:"li"},"chrome://inspect#devices"),", selecione a op\xe7\xe3o inspect do dispositivo que possui o aplicativo com a webview. No caso, para quem utiliza algum navegador diferente do Chrome, a rota de inspect \xe9 diferente, como neste caso com o uso do Brave browser.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"safari example",src:n(7893).Z})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'O debugger al\xe9m das ferramentas b\xe1sicas do debugger padr\xe3o do navegador, possui tamb\xe9m uma visualiza\xe7\xe3o "embedada" da webview que est\xe1 sendo acessada.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"safari example",src:n(2201).Z})))}p.isMDXComponent=!0},7893:function(e,a,n){a.Z=n.p+"assets/images/chromeDevices-76dab5e0d3e5700644b393e68d95ec46.png"},9728:function(e,a,n){a.Z=n.p+"assets/images/debugger-da05949fd4f70da9571fd344499fe65b.png"},2201:function(e,a,n){a.Z=n.p+"assets/images/debugger2-d0f835ca0a987ea1e06f38e29481fca8.png"},4084:function(e,a,n){a.Z=n.p+"assets/images/mainApplication-5085a23730c65d856b2a0f7798706794.png"},8974:function(e,a,n){a.Z=n.p+"assets/images/safariExample-1e4f6a3fd08858da61125a8f31409f0f.png"},9784:function(e,a,n){a.Z=n.p+"assets/images/safariExample2-1eca8cb8407abdcd2216b2746e5dc693.png"}}]);
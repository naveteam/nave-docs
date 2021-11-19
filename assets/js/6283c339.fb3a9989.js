"use strict";(self.webpackChunknave_docs=self.webpackChunknave_docs||[]).push([[809],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,b=u["".concat(c,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(b,i(i({ref:t},m),{},{components:a})):n.createElement(b,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7402:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],s={},c="SnackBar",l={unversionedId:"mobile/use-cases/components/snackBar",id:"mobile/use-cases/components/snackBar",isDocsHomePage:!1,title:"SnackBar",description:"O Modal \xe9 com certeza um dos componentes mais utilizados nos aplicativos hoje em dia. Por\xe9m, as vezes ele pode ser invasivo demais caso n\xe3o seja uma informa\xe7\xe3o de grande import\xe2ncia. Para isso o Snackbar \xe9 utilizado, sendo um componente mais discreto e ideal para mostrar informa\xe7\xf5es das quais o usu\xe1rio n\xe3o precise confirmar. Nesse exemplo, temos um Snackbar animado com Animated do pr\xf3prio react-native. \xc9 poss\xedvel customizar cores (backgroundColor), velocidade de anima\xe7\xe3o (animationDuration), tempo de perman\xeancia da Snackbar (duration) e claro, a mensagem (message).",source:"@site/docs/mobile/use-cases/components/snackBar.md",sourceDirName:"mobile/use-cases/components",slug:"/mobile/use-cases/components/snackBar",permalink:"/nave-docs/mobile/use-cases/components/snackBar",editUrl:"https://github.com/naveteam/nave-docs/docs/mobile/use-cases/components/snackBar.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Progress Bar",permalink:"/nave-docs/mobile/use-cases/components/progressBar"},next:{title:"WebView Debugging",permalink:"/nave-docs/mobile/guides/webviewDebugging"}},m=[{value:"Props",id:"props",children:[]}],p={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"snackbar"},"SnackBar"),(0,o.kt)("p",null,"O Modal \xe9 com certeza um dos componentes mais utilizados nos aplicativos hoje em dia. Por\xe9m, as vezes ele pode ser invasivo demais caso n\xe3o seja uma informa\xe7\xe3o de grande import\xe2ncia. Para isso o ",(0,o.kt)("strong",{parentName:"p"},"Snackbar")," \xe9 utilizado, sendo um componente mais discreto e ideal para mostrar informa\xe7\xf5es das quais o usu\xe1rio n\xe3o precise confirmar. Nesse exemplo, temos um Snackbar animado com Animated do pr\xf3prio react-native. \xc9 poss\xedvel customizar cores ",(0,o.kt)("strong",{parentName:"p"},"(backgroundColor)"),", velocidade de anima\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},"(animationDuration)"),", tempo de perman\xeancia da Snackbar ",(0,o.kt)("strong",{parentName:"p"},"(duration)")," e claro, a mensagem ",(0,o.kt)("strong",{parentName:"p"},"(message)"),"."),(0,o.kt)("br",null),(0,o.kt)("div",{"data-snack-id":"@guiwm/snackbar",false:"",className:"snack-player","data-snack-platform":"web","data-snack-supported-platforms":"android%2Cios","data-snack-loading":"lazy",style:{overflow:"hidden",border:"1px solid rgba(0,0,0,.08)",borderRadius:"4px",height:"705px",width:"100%"}}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("br",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Prop"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"message"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"true")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"animationDuration"),(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"duration"),(0,o.kt)("td",{parentName:"tr",align:null},"Number"),(0,o.kt)("td",{parentName:"tr",align:null},"false")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"backgroundColor"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"false")))))}u.isMDXComponent=!0}}]);
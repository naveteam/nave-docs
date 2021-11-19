"use strict";(self.webpackChunknave_docs=self.webpackChunknave_docs||[]).push([[961],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?o.createElement(f,l(l({ref:t},u),{},{components:n})):o.createElement(f,l({ref:t},u))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<a;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1362:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var o=n(7462),r=n(3366),a=(n(7294),n(3905)),l=["components"],s={},c="Modal",i={unversionedId:"mobile/use-cases/components/modal",id:"mobile/use-cases/components/modal",isDocsHomePage:!1,title:"Modal",description:"Umas das funcionalidades esperadas de um modal \xe9 o seu fechamento ao clicar fora dele. Dessa forma, foi desenvolvido um modal com um TouchableWithoutFeedback que engloba o children e sobrescreve o evento de toque do TouchableWithoutFeedback mais externo, fazendo com que seja poss\xedvel fechar o modal clicando fora dele, mas impossibilitando fecha-lo ao clicar nele mesmo.",source:"@site/docs/mobile/use-cases/components/modal.md",sourceDirName:"mobile/use-cases/components",slug:"/mobile/use-cases/components/modal",permalink:"/nave-docs/mobile/use-cases/components/modal",editUrl:"https://github.com/naveteam/nave-docs/docs/mobile/use-cases/components/modal.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Horizontal Animated FlatList",permalink:"/nave-docs/mobile/use-cases/components/horizontalFlatList"},next:{title:"Progress Bar",permalink:"/nave-docs/mobile/use-cases/components/progressBar"}},u=[{value:"Props",id:"props",children:[]}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modal"},"Modal"),(0,a.kt)("p",null,"Umas das funcionalidades esperadas de um modal \xe9 o seu fechamento ao clicar fora dele. Dessa forma, foi desenvolvido um modal com um ",(0,a.kt)("strong",{parentName:"p"},"TouchableWithoutFeedback")," que engloba o ",(0,a.kt)("strong",{parentName:"p"},"children")," e sobrescreve o evento de toque do ",(0,a.kt)("strong",{parentName:"p"},"TouchableWithoutFeedback")," mais externo, fazendo com que seja poss\xedvel fechar o modal clicando fora dele, mas impossibilitando fecha-lo ao clicar nele mesmo."),(0,a.kt)("br",null),(0,a.kt)("div",{"data-snack-id":"@guiwm/modal",false:"",className:"snack-player","data-snack-platform":"web","data-snack-supported-platforms":"android%2Cios","data-snack-loading":"lazy",style:{overflow:"hidden",border:"1px solid rgba(0,0,0,.08)",borderRadius:"4px",height:"705px",width:"100%"}}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("br",null),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Prop"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"open"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"handleClose"),(0,a.kt)("td",{parentName:"tr",align:null},"Function"),(0,a.kt)("td",{parentName:"tr",align:null},"true")))))}m.isMDXComponent=!0}}]);
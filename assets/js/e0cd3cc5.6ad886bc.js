"use strict";(self.webpackChunknave_docs=self.webpackChunknave_docs||[]).push([[887],{3905:function(e,a,o){o.d(a,{Zo:function(){return l},kt:function(){return m}});var i=o(7294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,i,n=function(e,a){if(null==e)return{};var o,i,n={},t=Object.keys(e);for(i=0;i<t.length;i++)o=t[i],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)o=t[i],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=i.createContext({}),p=function(e){var a=i.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},l=function(e){var a=p(e.components);return i.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},u=i.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(o),m=n,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||t;return o?i.createElement(f,r(r({ref:a},l),{},{components:o})):i.createElement(f,r({ref:a},l))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,r=new Array(t);r[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var p=2;p<t;p++)r[p]=o[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4938:function(e,a,o){o.r(a),o.d(a,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var i=o(7462),n=o(3366),t=(o(7294),o(3905)),r=["components"],c={},s="Push Notification com Amazon SNS",p={unversionedId:"mobile/guides/pushNotificationSNS",id:"mobile/guides/pushNotificationSNS",isDocsHomePage:!1,title:"Push Notification com Amazon SNS",description:"Introdu\xe7\xe3o",source:"@site/docs/mobile/guides/pushNotificationSNS.md",sourceDirName:"mobile/guides",slug:"/mobile/guides/pushNotificationSNS",permalink:"/nave-docs/mobile/guides/pushNotificationSNS",editUrl:"https://github.com/naveteam/nave-docs/docs/mobile/guides/pushNotificationSNS.md",version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"WebView Debugging",permalink:"/nave-docs/mobile/guides/webviewDebugging"}},l=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Instala\xe7\xf5es das bibliotecas para React Native",id:"instala\xe7\xf5es-das-bibliotecas-para-react-native",children:[{value:"Download das bibliotecas",id:"download-das-bibliotecas",children:[]}]},{value:"Configura\xe7\xe3o da biblioteca no Android",id:"configura\xe7\xe3o-da-biblioteca-no-android",children:[{value:"Configura\xe7\xe3o para notifica\xe7\xf5es remotas",id:"configura\xe7\xe3o-para-notifica\xe7\xf5es-remotas",children:[]}]},{value:"Configura\xe7\xe3o da biblioteca no iOS",id:"configura\xe7\xe3o-da-biblioteca-no-ios",children:[]},{value:"\xcdcones para as notifica\xe7\xf5es",id:"\xedcones-para-as-notifica\xe7\xf5es",children:[]},{value:"Configura\xe7\xe3o no React Native",id:"configura\xe7\xe3o-no-react-native",children:[]},{value:"Configura\xe7\xe3o do Firebase com Amazon SNS",id:"configura\xe7\xe3o-do-firebase-com-amazon-sns",children:[{value:"Android",id:"android-1",children:[]},{value:"iOS",id:"ios-1",children:[]}]}],d={toc:l};function u(e){var a=e.components,c=(0,n.Z)(e,r);return(0,t.kt)("wrapper",(0,i.Z)({},d,c,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"push-notification-com-amazon-sns"},"Push Notification com Amazon SNS"),(0,t.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,t.kt)("p",null,"\xa0","\xa0","\xa0","\xa0","\xa0"," A configura\xe7\xe3o de bibliotecas de Push Notification em contato com a Amazon SNS, utilizando um SDK no back-end para realizar disparo de notifica\xe7\xf5es remotas para o dispositivo Android e iOS. Essa documenta\xe7\xe3o visa explicar al\xe9m da configura\xe7\xe3o, alguns pontos que n\xe3o est\xe3o t\xe3o bem explicados ou f\xe1cil de encontrar pesquisando na internet. Abaixo segue dividido em t\xf3picos a configura\xe7\xe3o do Android e iOS e como realizar a configura\xe7\xe3o na Amazon para um simples disparo de uma notifica\xe7\xe3o remota."),(0,t.kt)("h2",{id:"instala\xe7\xf5es-das-bibliotecas-para-react-native"},"Instala\xe7\xf5es das bibliotecas para React Native"),(0,t.kt)("p",null,"Para come\xe7ar com o push notification no aplicativo feito com React Native, ser\xe1 necess\xe1rio a instala\xe7\xe3o de duas bibliotecas, uma para android e a outra para iOS."),(0,t.kt)("p",null,"Para essa documenta\xe7\xe3o foi utilizada as seguintes vers\xf5es de bibliotecas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"RN: v0.61.5"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/zo0r/react-native-push-notification"},"zoOr/react-native-push-notification"),": v7.4.0"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/react-native-push-notification/ios"},"react-native-community/push-notification-ios"),": v1.10.1")),(0,t.kt)("h3",{id:"download-das-bibliotecas"},"Download das bibliotecas"),(0,t.kt)("h4",{id:"android"},"Android"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add react-native-push-notification\n")),(0,t.kt)("h4",{id:"ios"},"iOS"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"yarn add @react-native-community/push-notification-ios\n")),(0,t.kt)("h2",{id:"configura\xe7\xe3o-da-biblioteca-no-android"},"Configura\xe7\xe3o da biblioteca no Android"),(0,t.kt)("p",null,"No arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," dentro da pasta ",(0,t.kt)("inlineCode",{parentName:"p"},"android"),", adiciona as seguintes linhas para habilitar permiss\xf5es para o aplicativo e vincular os m\xf3dulos da biblioteca ",(0,t.kt)("inlineCode",{parentName:"p"},"react-native-push-notification"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- android/app/src/main/AndroidManifest.xml --\x3e\n...\n\x3c!-- adiciona as duas linhas abaixo fora do application --\x3e\n<uses-permission android:name="android.permission.VIBRATE" />\n<uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED"/>\n\u2026\n<application ...>\n\x3c!-- dentro do application adicione as linhas abaixo --\x3e\n <meta-data android:name="com.dieam.reactnativepushnotification.notification_foreground" android:value="true"/>\n <meta-data android:name="com.dieam.reactnativepushnotification.channel_create_default" android:value="false"/>\n <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationActions" />\n <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationPublisher" />\n <receiver android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationBootEventReceiver">\n   <intent-filter>\n     <action android:name="android.intent.action.BOOT_COMPLETED" />\n     <action android:name="android.intent.action.QUICKBOOT_POWERON" />\n     <action android:name="com.htc.intent.action.QUICKBOOT_POWERON"/>\n   </intent-filter>\n </receiver>\n <service android:name="com.dieam.reactnativepushnotification.modules.RNPushNotificationListenerService" android:exported="false" >\n  <intent-filter>\n   <action android:name="com.google.firebase.MESSAGING_EVENT" />\n  </intent-filter>\n </service>\n...\n')),(0,t.kt)("p",null,"Agora \xe9 necess\xe1rio adicionar nas configura\xe7\xf5es do android o link com os arquivos da ",(0,t.kt)("inlineCode",{parentName:"p"},"node_modules"),", isso d\xe1 para fazer com autolink do ",(0,t.kt)("inlineCode",{parentName:"p"},"react-native link")," ou manualmente para funcionar corretamente o Push Notification:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// android/settings.gradle\n...\ninclude ':react-native-push-notification'\nproject(':react-native-push-notification').projectDir = file('../node_modules/react-native-push-notification/android')\n")),(0,t.kt)("p",null,"E para o arquivo android/app/build.gradle a implementa\xe7\xe3o da biblioteca:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// android/app/build.gradle\ndependencies {\n  ...\n  implementation project(':react-native-push-notification')\n  ...\n}\n")),(0,t.kt)("p",null,"Importe o pacote da biblioteca dentro do arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"MainApplication.java"),", no final da linha de import's:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// MainApplication.java\n...\nimport com.dieam.reactnativepushnotification.ReactNativePushNotificationPackage;\n")),(0,t.kt)("h3",{id:"configura\xe7\xe3o-para-notifica\xe7\xf5es-remotas"},"Configura\xe7\xe3o para notifica\xe7\xf5es remotas"),(0,t.kt)("p",null,"Para o disparo de notifica\xe7\xf5es remotas, \xe9 necess\xe1rio que o dispositivo se comunique com o firebase. Basta ter realizado a configura\xe7\xe3o inicial do Firebase. Isso pode ser validado com as suas configura\xe7\xf5es com este link: ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/zo0r/react-native-push-notification#if-you-use-remote-notifications"},"react-native-push-notification#if-you-use-remote-notifications")),(0,t.kt)("h2",{id:"configura\xe7\xe3o-da-biblioteca-no-ios"},"Configura\xe7\xe3o da biblioteca no iOS"),(0,t.kt)("p",null,"Com iOS, para a vers\xe3o do RN >= 0.60, tamb\xe9m funciona com o autolink, mas caso queira realizar manualmente ou est\xe1 em vers\xf5es do RN anteriores a 0.60, rode o comando abaixo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-shell"},"react-native link @react-native-community/push-notification-ios\n")),(0,t.kt)("p",null,"Agora na pasta iOS dentro do seu projeto, \xe9 preciso adicionar m\xe9todos nativos para o suporte de notifica\xe7\xf5es acontecer dentro do RN, primeiro no arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"AppDelegate.h"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// AppDelegate.h\n...\n// Adicione o import abaixo no final do import's\n#import <UserNotifications/UNUserNotificationCenter.h>\n\n// altere a linha com @interface para a linha abaixo:\n@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, UNUserNotificationCenterDelegate>\n\n")),(0,t.kt)("p",null,"No arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"AppDelegate.m")," adicione os import's no topo do arquivo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// AppDelegate.m\n#import <UserNotifications/UserNotifications.h>\n#import <RNCPushNotificationIOS.h>\n\n")),(0,t.kt)("p",null,"Dentro do escopo do ",(0,t.kt)("inlineCode",{parentName:"p"},"application didFinishLaunchingWithOptions")," antes do ",(0,t.kt)("inlineCode",{parentName:"p"},"return Yes;")," adicionar a seguinte linha explicit\xe1 com o coment\xe1rio:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// AppDelegate.m\n- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions\n{\n  ...\n  // Adicione esta duas linhas abaixo: UNUserNotificationCenter\n  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];\n  center.delegate = self;\n\n  return YES;\n}\n\n")),(0,t.kt)("p",null,"Adicionar a fun\xe7\xe3o abaixo para receber a notifica\xe7\xf5es em primeiro plano:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// AppDelegate.m\n-(void)userNotificationCenter:(UNUserNotificationCenter *)center willPresentNotification:(UNNotification *)notification withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler\n{\n  completionHandler(UNNotificationPresentationOptionSound |  UNNotificationPresentationOptionAlert | UNNotificationPresentationOptionBadge);\n}\n\n")),(0,t.kt)("p",null,"E para finalizar a configura\xe7\xe3o dentro do arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"AppDelegate.m"),", antes da fun\xe7\xe3o ",(0,t.kt)("inlineCode",{parentName:"p"},"- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge"),", adicionar todo o c\xf3digo abaixo, para funcionar o registro do token do dispositivo e para notifica\xe7\xf5es locais:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},"// AppDelegate.m\n- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken\n{\n [RNCPushNotificationIOS didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];\n}\n- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo\nfetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler\n{\n  [RNCPushNotificationIOS didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];\n}\n- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error\n{\n [RNCPushNotificationIOS didFailToRegisterForRemoteNotificationsWithError:error];\n}\n- (void)userNotificationCenter:(UNUserNotificationCenter *)center\ndidReceiveNotificationResponse:(UNNotificationResponse *)response\n  withCompletionHandler:(void (^)(void))completionHandler\n{\n  [RNCPushNotificationIOS didReceiveNotificationResponse:response];\n}\n\n")),(0,t.kt)("p",null,"Arquivos configurados para o iOS, ent\xe3o agora \xe9 preciso adicionar o Capabilities para o dispositivo, abra o XCode com o seu workspace, e em target, v\xe1 em ",(0,t.kt)("inlineCode",{parentName:"p"},"+ Capability"),", adicione o Push Notifications e Background Modes (com as op\xe7\xf5es: Remote Notifications e Background Fetch)."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"xcode target capabilities",src:o(5503).Z})),(0,t.kt)("h2",{id:"\xedcones-para-as-notifica\xe7\xf5es"},"\xcdcones para as notifica\xe7\xf5es"),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"AVISO"),": iOS n\xe3o ser\xe1 necess\xe1rio nenhuma configura\xe7\xe3o a mais com o push notification, ele j\xe1 coloca o pr\xf3prio \xedcone do aplicativo")),(0,t.kt)("p",null,"Para configurar no android \xe9 preciso entender que os \xedcones precisam ser totalmente brancos e com detalhes em transpar\xeancia, de acordo com a documenta\xe7\xe3o do Android, com a cor selecionada no arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml"),", igual a linha de c\xf3digo abaixo, cor esta cor selecionado ela atinge os pixels brancos, para entender melhor leia a issue da biblioteca do push notification e/ou a regras de \xedcones da Material Design:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://github.com/zo0r/react-native-push-notification/issues/730#issuecomment-389545259"},"React-native-push-notification #issue Icons")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"https://material.io/design/iconography/product-icons.html#design-principles"},"Material Design - Design Principles"))),(0,t.kt)("p",null,"A cor dever\xe1 ser adicionado em ",(0,t.kt)("inlineCode",{parentName:"p"},"colors.xml")," na pasta ",(0,t.kt)("inlineCode",{parentName:"p"},"res/values"),", caso n\xe3o exista esse arquivo, dever\xe1 ser criado no mesmo caminho informado:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- android/app/src/values/colors.xml --\x3e\n<?xml version="1.0" encoding="utf-8"?>\n<resources>\n <color name="colorNotification">#000000</color>\n</resources>\n\n')),(0,t.kt)("p",null,"E dentro do ",(0,t.kt)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," dentro do escopo de ",(0,t.kt)("inlineCode",{parentName:"p"},"application"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- android/app/src/main/AndroidManifest.xml --\x3e\n<application ...>\n...\n\x3c!-- Adicionar as duas linhas abaixo --\x3e\n<meta-data android:name="com.google.firebase.messaging.default_notification_icon" android:resource="@mipmap/ic_notification" />\n<meta-data android:name="com.dieam.reactnativepushnotification.notification_color" android:resource="@color/colorNotification"/>\n...\n</application>\n\n')),(0,t.kt)("p",null,"\xc9 preciso gerar as imagens em formatos diferentes, que s\xe3o necess\xe1rios para o Android, o seguinte link faz essa transforma\xe7\xe3o para o tamanho corretos: ",(0,t.kt)("a",{parentName:"p",href:"http://romannurik.github.io/AndroidAssetStudio/icons-notification.html#source.type=clipart&source.clipart=ac_unit&source.space.trim=1&source.space.pad=0&name=ic_stat_ac_unit"},"Android Assets Studio")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"AVISO"),": A imagem dever\xe1 ser gerada com o nome de arquivo ",(0,t.kt)("inlineCode",{parentName:"p"},"ic_notification"),", como realizado na configura\xe7\xe3o do xml acima.")),(0,t.kt)("p",null,"Colocar as imagens geradas dentro ",(0,t.kt)("inlineCode",{parentName:"p"},"android/src/res/@mipmap-*"),", cada imagem em sua pasta correta."),(0,t.kt)("h2",{id:"configura\xe7\xe3o-no-react-native"},"Configura\xe7\xe3o no React Native"),(0,t.kt)("p",null,"Dentro do projeto e dos arquivos do React Native, \xe9 preciso configurar o Push Notification para funcionar no modo que voc\xea gostaria, e para isso possui alguns m\xe9todos que podem ser adaptados, \xe9 necess\xe1rio que a configura\xe7\xe3o seja feita fora de um componente React para funcionar adequadamente, o melhor \xe9 ser adicionado dentro do ",(0,t.kt)("inlineCode",{parentName:"p"},"index.js")," fora da ",(0,t.kt)("inlineCode",{parentName:"p"},"src")," do projeto."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'// ./index.js\nimport PushNotification, { Importance } from "react-native-push-notification";\nimport PushNotificationIOS from "@react-native-community/push-notification-ios";\n\nPushNotification.configure({\n  onRegister: (notificationData) => {\n    // met\xf3do para registrar o token do dispositivo\n  },\n  onNotification: (notification) => {\n    // m\xe9todo que recebe as notifica\xe7\xf5es remotas\n    // necess\xe1rio a linha abaixo para o iOS\n    notification.finish(PushNotificationIOS.FetchResult.NoData);\n  },\n  // NECESS\xc1RIO PARA O ANDROID OBTER COMUNICA\xc7\xc3O COM O FIREBASE\n  senderID: FIREBASE_SENDER_ID,\n  permissions: {\n    alert: true,\n    badge: true,\n    sound: true,\n  },\n  popInitialNotification: true,\n  requestPermissions: true,\n  smallIcon: "ic_notification",\n  largeIcon: "ic_launcher",\n});\n')),(0,t.kt)("p",null,"Para android \xe9 necess\xe1rio criar um canal de notifica\xe7\xe3o, com o ",(0,t.kt)("inlineCode",{parentName:"p"},"PushNotification")," pode chamar o m\xe9todo ",(0,t.kt)("inlineCode",{parentName:"p"},"createChannel"),", isso tamb\xe9m pode ser feito dentro do ",(0,t.kt)("inlineCode",{parentName:"p"},"index.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-javascript"},'PushNotification.createChannel({\n  channelId: "channelId",\n  channelName: "channelName",\n  playSound: false,\n  soundName: "default",\n  importance: Importance.HIGH,\n  vibrate: true,\n});\n')),(0,t.kt)("p",null,"Neste link, explica o por que \xe9 necess\xe1rio criar canais de notifica\xe7\xf5es para o android:\n",(0,t.kt)("a",{parentName:"p",href:"https://developer.android.com/training/notify-user/channels"},"Android Developer - #notify-user - channels")),(0,t.kt)("p",null,"Com essas configura\xe7\xf5es j\xe1 funcionar\xe1 para iOS e para Android as notifica\xe7\xf5es remotas, s\xf3 precisar\xe1 criar a l\xf3gica de envio para o back-end armazenar as informa\xe7\xf5es de token e sistema operacional do dispositivo do qual est\xe1 sendo enviado para conseguir criar uma comunica\xe7\xe3o entre Amazon SNS e o dispositivo do usu\xe1rio."),(0,t.kt)("h2",{id:"configura\xe7\xe3o-do-firebase-com-amazon-sns"},"Configura\xe7\xe3o do Firebase com Amazon SNS"),(0,t.kt)("h3",{id:"android-1"},"Android"),(0,t.kt)("p",null,"Ent\xe3o para o Android vai ser necess\xe1rio estar configurado inicialmente o Firebase com o arquivo do ",(0,t.kt)("inlineCode",{parentName:"p"},"google-services.json")," dentro da pasta ",(0,t.kt)("inlineCode",{parentName:"p"},"android/app"),", no link abaixo explica melhor como realizar a instala\xe7\xe3o completa: ",(0,t.kt)("a",{parentName:"p",href:"https://rnfirebase.io/#installation"},"RN Firebase")),(0,t.kt)("p",null,"Ap\xf3s a configura\xe7\xe3o inicial ser\xe1 preciso adquirir a ",(0,t.kt)("inlineCode",{parentName:"p"},"serverKey")," que se encontra nas configura\xe7\xf5es do projeto do firebase na aba Cloud Messaging, e copiar o valor desta chave, caso n\xe3o exista ser\xe1 necess\xe1rio adicionar:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"firebase server key",src:o(5516).Z})),(0,t.kt)("p",null,"Agora no console da Amazon AWS no servi\xe7o de SNS (Simple Notification Service), no menu de notifica\xe7\xf5es por push, dever\xe1 criar um aplicativo de plataforma para o android"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"amazon sns android",src:o(8547).Z})),(0,t.kt)("p",null,"Para criar o aplicativo de plataforma, dever\xe1 ser escolhido um nome para o aplicativo e a plataforma dever\xe1 ser Firebase Cloud Messaging (FCM), para que seja adicionada a chave de servidor do Firebase que mostrei logo acima:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"amazon sns fcm",src:o(4802).Z})),(0,t.kt)("p",null,"Com isso feito, j\xe1 \xe9 poss\xedvel disparar mensagens por push notification atrav\xe9s do Amazon SNS, s\xf3 precisando ter o token de um dispositivo android."),(0,t.kt)("h3",{id:"ios-1"},"iOS"),(0,t.kt)("p",null,"Para iniciar a configura\xe7\xe3o da Apple, certifique-se que j\xe1 est\xe1 o projeto configurado dentro da loja Apple Store e que j\xe1 possui perfil para o aplicativo na Apple Developer Account."),(0,t.kt)("p",null,"Em Apple Developer no menu Account entrar em Certificates, Identifiers e Profiles, e logo em seguida acessar Identifiers e selecionar o aplicativo que ir\xe1 receber o push notification. Agora basta marcar a op\xe7\xe3o Push Notification na lista de Capabilities, e configurar os certificados:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"amazon sns fcm",src:o(4158).Z})),(0,t.kt)("p",null,"Para funcionar o certificado precisa ser de produ\xe7\xe3o e coloque o nome de ",(0,t.kt)("inlineCode",{parentName:"p"},"aps_production"),", o link abaixo explica como criar o arquivo CSR da apple no aplicativo KeyChains do mac book (S\xf3 h\xe1 possibilidade de criar com um mac book ou hackinthosh):\n",(0,t.kt)("a",{parentName:"p",href:"https://help.apple.com/developer-account/#/devbfa00fef7"},"Apple Developer Account - Help")),(0,t.kt)("p",null,"Com arquivo adicionado, nas configura\xe7\xf5es do Push Notification, adicionar na se\xe7\xe3o de Production SSL Certificate o arquivo que acabou de gerar no formato CSR:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Apple Push Notification SSL Certificates",src:o(89).Z})),(0,t.kt)("p",null,"Agora vamos a etapa para configurar a Amazon SNS, antes dessa etapa vamos converter o arquivo CSR para .p12, que ser\xe1 utilizado no SNS. Para isso adicione seu arquivo CSR no aplicativo KeyChain do mac book (pode simplesmente arrastar o arquivo at\xe9 o programa), e assim que adicionado, clique com o bot\xe3o direito do mouse em cima do certificado e selecione a op\xe7\xe3o Exportar para criar o arquivo .p12:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"MacBook KeyChains",src:o(9984).Z})),(0,t.kt)("p",null,"Agora com o arquivo .p12 em m\xe3os, basta adicionar um aplicativo de plataforma na SNS para iOS, ent\xe3o na Plataforma de notifica\xe7\xf5es, selecione a op\xe7\xe3o Apple iOS, em seguida selecione Servi\xe7o Push para iOS e adicione o arquivo .p12 e caso tenha senha adicione tamb\xe9m:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Amazon SNS iOS",src:o(4833).Z})),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"AVISO"),": N\xe3o deve selecionar a op\xe7\xe3o de Sandbox, pois visto em testes com estes tipos de certificados foi imposs\xedvel fazer funcionar, somente com a produ\xe7\xe3o efetuamos com sucesso o funcionamento.")),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"IMPORTANTE"),"\nPontos de aten\xe7\xe3o sobre o funcionamento do Push Notification para android e ios:"),(0,t.kt)("ul",{parentName:"blockquote"},(0,t.kt)("li",{parentName:"ul"},"Somente para o android \xe9 poss\xedvel testar com emulador notifica\xe7\xf5es remotas e locais, e com iOS \xe9 poss\xedvel ver notifica\xe7\xf5es locais, mas n\xe3o consegue gerar token no emulador para notifica\xe7\xf5es remotas."),(0,t.kt)("li",{parentName:"ul"},"Para testes no iOS s\xf3 funcionar\xe1 com certificados de produ\xe7\xe3o, para o TestFlight e para a loja da Apple Store."))))}u.isMDXComponent=!0},8547:function(e,a,o){a.Z=o.p+"assets/images/amazonSNSAndroid-8bf3376ab32c43f5e389a0963e1074b6.png"},4802:function(e,a,o){a.Z=o.p+"assets/images/amazonSNSFCM-7f91cc583bd2c89ec7b7b1509616e1a4.png"},4833:function(e,a,o){a.Z=o.p+"assets/images/amazonSNSiOS-b9311cd028e5d65161ea103bd720576b.png"},4158:function(e,a){a.Z="data:image/png;base64,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"},89:function(e,a,o){a.Z=o.p+"assets/images/appleDeveloperSSLPush-ace1312e20ca65f8c8488040e7acddc9.png"},5516:function(e,a,o){a.Z=o.p+"assets/images/firebaseServerKey-b9a41641920e4a8cce998552defea2d1.png"},9984:function(e,a,o){a.Z=o.p+"assets/images/macBookKeyChains-b4da427b4acaf7fbec53a9f64ab097f8.png"},5503:function(e,a,o){a.Z=o.p+"assets/images/xcodeTargetCapabilities-8743ffd1a99c444b2cac7d27a06e0957.png"}}]);
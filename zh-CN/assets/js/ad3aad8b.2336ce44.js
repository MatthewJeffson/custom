"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59018],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=i,y=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28816:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const a={description:"Keyboard",title:"Keyboard",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Keyboard",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Using Wio Terminal as a Keyboard",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard",title:"Keyboard",description:"Keyboard",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-USBCLIENT-Keyboard",permalink:"/custom/zh-CN/Wio-Terminal-USBCLIENT-Keyboard",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Keyboard.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",frontMatter:{description:"Keyboard",title:"Keyboard",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Keyboard",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/zh-CN/Wio-Terminal-USBCLIENT-Overview"},next:{title:"Mouse",permalink:"/custom/zh-CN/Wio-Terminal-USBCLIENT-Mouse"}},s={},d=[{value:"Installing Libraries",id:"installing-libraries",level:2},{value:"Complete Code",id:"complete-code",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-wio-terminal-as-a-keyboard"},"Using Wio Terminal as a Keyboard"),(0,i.kt)("p",null,"This wiki introduces how to use the Wio Terminal as a simple keyboard. It has assigned the 3 keys ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"d")," to the 3 buttons on the Wio Terminal. This can be easily implemented into your design for more challenging tasks."),(0,i.kt)("h2",{id:"installing-libraries"},"Installing Libraries"),(0,i.kt)("p",null,"This example also requires an additional Arduino keyboard library:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arduino-libraries/Keyboard"},"Arduino Keyboard Library")," repository and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Keyboard-master")," file that you have just downloaded."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.kt)("h2",{id:"complete-code"},"Complete Code"),(0,i.kt)("p",null,"For more functionality, please refer the official ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/usb/keyboard/"},"keyboard functions")," from Arduino."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include \"Keyboard.h\" //keyboard library \n\nvoid setup() { \n  //set button pins as inputs\n  pinMode(WIO_KEY_A, INPUT);\n  pinMode(WIO_KEY_B, INPUT);\n  pinMode(WIO_KEY_C, INPUT);\n  \n  Keyboard.begin(); //start keyboard communication\n}\n\nvoid loop() {  \n  if (digitalRead(WIO_KEY_A) == LOW) { //detect button press\n    Keyboard.write('s'); //single key is pressed (character) \n  }\n  if (digitalRead(WIO_KEY_B) == LOW) {   \n    Keyboard.write('e'); \n  }  \n  if (digitalRead(WIO_KEY_C) == LOW) {        \n    Keyboard.write('d');  \n  } \n  \n  delay(200); //delay between keypresses\n  \n}\n")))}u.isMDXComponent=!0}}]);
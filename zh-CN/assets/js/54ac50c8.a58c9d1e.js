"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33668],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),u=i,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal Infrared_Emitter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Infrared-Emitter",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Getting Started with Infrared Emitter",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/Wio-Terminal-Infrared-Emitter",id:"Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/Wio-Terminal-Infrared-Emitter",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/Wio-Terminal-Infrared-Emitter.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter",slug:"/Wio-Terminal-Infrared-Emitter",permalink:"/custom/zh-CN/Wio-Terminal-Infrared-Emitter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Infrared_Emitter/Wio-Terminal-Infrared-Emitter.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Infrared_Emitter"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Infrared-Emitter",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/zh-CN/Wio-Terminal-Light"},next:{title:"Overview",permalink:"/custom/zh-CN/Wio-Terminal-Mic"}},d={},s=[{value:"Installing the Infrared Library For Wio Terminal",id:"installing-the-infrared-library-for-wio-terminal",level:2},{value:"Example Code",id:"example-code",level:2}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-infrared-emitter"},"Getting Started with Infrared Emitter"),(0,i.kt)("p",null,"This repo demonstrates how to use the built-in Infrared Emitter as component in Wio Terminal. The Infrared Emitter is a Digital Interface and can be used to send IR signal, just like what a remote control does!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-IR.gif",alt:null})),(0,i.kt)("h2",{id:"installing-the-infrared-library-for-wio-terminal"},"Installing the Infrared Library For Wio Terminal"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IR"},"Seeed_Arduino_IR")," repositories and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, the Infrared library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_IR")," file that you've have just downloaded."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.kt)("h2",{id:"example-code"},"Example Code"),(0,i.kt)("p",null,"Navigate to ",(0,i.kt)("strong",{parentName:"p"},"Files")," -> ",(0,i.kt)("strong",{parentName:"p"},"Examples")," -> ",(0,i.kt)("strong",{parentName:"p"},"IRLib2")," -> ",(0,i.kt)("strong",{parentName:"p"},"Send"),". The send example will appear and should look like below. To test the IR signal from Wio Terminal, you can use a ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Infrared_Receiver/"},"Grove - Infrared Receiver"),". This can be easily modified to use Wio Terminal as your TV remote control!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WIO_IR"))," is defined for the builtin Infrared Emitter(Already defined in the header file of this library so no need to defined in ino file)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/* send.ino Example sketch for IRLib2\n *  Illustrates how to send a code.\n */\n#include <IRLibSendBase.h>    // First include the send base\n//Now include only the protocols you wish to actually use.\n//The lowest numbered protocol should be first but remainder \n//can be any order.\n#include <IRLib_P01_NEC.h>\n#include <IRLib_P02_Sony.h>\n#include <IRLibCombo.h>     // After all protocols, include this\n// All of the above automatically creates a universal sending\n// class called "IRsend" containing only the protocols you want.\n// Now declare an instance of that sender.\n\nIRsend mySender;\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(2000); while (!Serial); //delay for Leonardo\n  Serial.println(F("Every time you press a key is a serial monitor we will send."));\n}\n\nvoid loop() {\n  if (Serial.read() != -1) {\n  //   send a code every time a character is received from the \n  //   serial port. You could modify this sketch to send when you\n  //   push a button connected to an digital input pin.\n  //   Substitute values and protocols in the following statement\n  //   for device you have available.\n  //  mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits\n    mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f\n    Serial.println(F("Sent signal."));\n  }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The Infrared Emitter is at the back of the Wio Terminal, to the left of the SD card slot."))}m.isMDXComponent=!0}}]);
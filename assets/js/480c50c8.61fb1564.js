"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16572],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=i.createContext({}),s=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?i.createElement(f,o(o({ref:t},p),{},{components:r})):i.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},88054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=r(87462),n=(r(67294),r(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Overview",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Overview",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-USBCLIENT-Overview",permalink:"/custom/Wio-Terminal-USBCLIENT-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Overview.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Overview",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Xbox",permalink:"/custom/Wio-Terminal-USBH-Xbox"},next:{title:"Keyboard",permalink:"/custom/Wio-Terminal-USBCLIENT-Keyboard"}},u={},s=[{value:"Installing the Adafruit TinyUSB Library for Arduino",id:"installing-the-adafruit-tinyusb-library-for-arduino",level:2}],p={toc:s},d="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This repo introduce how to use the Wio Terminal as USB-Client, including using it for Human Interface Device(HID) such as keyboard, mouse and etc. It also supports Musical Instrument Digital Interface(MIDI)."),(0,n.kt)("p",null,"This functionality is dependent on ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"Adafruit TinyUSB Library for Arduino"),". The library has been tested with Wio Terminal(SAMD51) and working properly."),(0,n.kt)("h2",{id:"installing-the-adafruit-tinyusb-library-for-arduino"},"Installing the Adafruit TinyUSB Library for Arduino"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},"Adafruit TinyUSB Library for Arduino")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Adafruit_TinyUSB_Arduino")," file that you've have just downloaded."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})))}c.isMDXComponent=!0}}]);
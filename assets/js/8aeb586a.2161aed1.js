"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[20232],{3905:(t,e,l)=>{l.d(e,{Zo:()=>d,kt:()=>m});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),s=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},d=function(t){var e=s(t.components);return n.createElement(u.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=s(l),k=r,m=p["".concat(u,".").concat(k)]||p[k]||c[k]||a;return l?n.createElement(m,o(o({ref:e},d),{},{components:l})):n.createElement(m,o({ref:e},d))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i[p]="string"==typeof t?t:r,o[1]=i;for(var s=2;s<a;s++)o[s]=l[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}k.displayName="MDXCreateElement"},92827:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=l(87462),r=(l(67294),l(3905));const a={title:"DSO Nano",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano/",slug:"/DSO_Nano",last_update:{date:"02/03/2022",author:"gunengyu"}},o=void 0,i={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano",title:"DSO Nano",description:"The DSO Nano is a one-channel handheld oscilloscope, suitable for quick field measurements and more. You will find it very simple to use, but it is nonetheless a quite amazing little tool.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Nano",permalink:"/custom/DSO_Nano",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"DSO Nano",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano/",slug:"/DSO_Nano",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth Multimeter",permalink:"/custom/Bluetooth_Multimeter"},next:{title:"Dfu-util",permalink:"/custom/Dfu-util"}},u={},s=[{value:"Hardware details",id:"hardware-details",level:2},{value:"Upgrading the firmware",id:"upgrading-the-firmware",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function p(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The DSO Nano is a one-channel handheld oscilloscope, suitable for quick field measurements and more. You will find it very simple to use, but it is nonetheless a quite amazing little tool."),(0,r.kt)("p",null,"Being a new and dynamic open-hardware and open-source project, the information tends to be scattered around quite a bit. This page will try to collect the most relevant information in a single place, in order to help newcomers find their way through the wealth of unorganized material already available."),(0,r.kt)("p",null,"Click the image to get to different version of DSO Nano."),(0,r.kt)("p",null,"|",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanointro.jpg",alt:null})),"|",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DSO-Nano-v2-p-681.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/DSO_Nano/img/Dsonanov2intro.jpg",alt:null})),"|",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/DSO_Nano/img/Nano_v3.jpg",alt:null})),"|"),(0,r.kt)("div",null,"|:---:|:---:|:---:| |[DSO Nano v1](https://www.seeedstudio.com/DSO-nano-Pocket-size-digital-storage-oscilloscope-p-512.html)",(0,r.kt)("br",null),"**(Discontinued)**|[DSO Nano v2](https://www.seeedstudio.com/DSO-Nano-v2-p-681.html)",(0,r.kt)("br",null),"**(Discontinued)**|[DSO Nano v3](https://www.seeedstudio.com/DSO-Nano-v3-p-1358.html)"),(0,r.kt)("h2",{id:"hardware-details"},"Hardware details"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"So far there have been three major versions of the DSO Nano, the original one in 2009, and the DSO Nano V2 in 2010. (A significant hardware upgrade including dual channels was introduced with the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/DSO_Quad"},"DSO Quad"),".) Apart from the improved charging unit in V2, and a redesigned PCB, the specifications are pretty much the same. They can use the same firmware."),(0,r.kt)("p",null,"A photo from inside the V2 was posted to the ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=DSO"},"forum"),"."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," CPU"),(0,r.kt)("td",null," ARM Cortex\u2122-M3 (STM32F103VBT6)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," RAM"),(0,r.kt)("td",null," 20k")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Flash ROM"),(0,r.kt)("td",null," 128k")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Clock frequency"),(0,r.kt)("td",null," 72MHz")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Display"),(0,r.kt)("td",null," 2.8\u2033 Color TFT LCD")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Display Resolution"),(0,r.kt)("td",null," 320\xd7240")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Display Color"),(0,r.kt)("td",null," 65K")),(0,r.kt)("tr",null,(0,r.kt)("td",null," PC connection via USB"),(0,r.kt)("td",null," as SD card reader")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Upgrade"),(0,r.kt)("td",null," by bootloader via USB")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Power supply"),(0,r.kt)("td",null," 3.7V Chargeable lithium battery / USB (LTC4054 charger controller)"))),(0,r.kt)("h2",{id:"upgrading-the-firmware"},"Upgrading the firmware"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The DSO Nano you hold in your hand took some time to reach you; it is more than likely that a newer version of the firmware is already available."),(0,r.kt)("p",null,"The newest firmware from BenF is available from the ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=12&t=1793"},"Tech Support"),"(This link is broken, if you are looking for the firmware please refer to the wiki of ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/DSO_Nano_v3/"},"DSO Nano V3"),") forum. Inside the ZIP file you will also find the operating manual for this firmware release."),(0,r.kt)("p",null,"To upgrade the firmware to the latest version, you have a few options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you work with Windows, follow the instructions contained in the official ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/DSO_Nano/res/DSO%20Nano%20v2%20Manual.pdf"},"v2 User Manual")," (pages 8-10). The required utility DfuSeDemo.exe is also available ",(0,r.kt)("a",{parentName:"li",href:"http://dsonano.googlecode.com/files/um0412.zip"},"here"),"."),(0,r.kt)("li",{parentName:"ul"},"On Linux and Mac OS X you can use ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Dfu-util"},"Dfu-util")," (0.5 or newer).")),(0,r.kt)("h2",{id:"capabilities"},"Capabilities"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null," Analog bandwidth"),(0,r.kt)("td",null," 0 - 1MHz")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Max sample rate"),(0,r.kt)("td",null," 1Msps 12Bits")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Sample memory depth"),(0,r.kt)("td",null," 4096 Point")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Horizontal sensitivity"),(0,r.kt)("td",null," 1\u03bcS/Div\uff5e10S/Div (1-2-5 Step)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Horizontal position"),(0,r.kt)("td",null," adjustable with indicator")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Vertical sensitivity"),(0,r.kt)("td",null," 10mV/Div\uff5e10V/Div (with \xd71 probe)")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," 0.5V/Div\uff5e100V/Div (with \xd710 probe)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Vertical position"),(0,r.kt)("td",null," adjustable with indicator")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Input impedance"),(0,r.kt)("td",null," >500K\u03a9")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Max input voltage"),(0,r.kt)("td",null," 80Vpp (by \xd71 probe)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Coupling"),(0,r.kt)("td",null," DC")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Trig modes"),(0,r.kt)("td",null," Auto, Normal, Single, None and Scan")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Functionalities:"),(0,r.kt)("td",null," Automatic measurement: frequency, cycle, duty,")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," V",(0,r.kt)("sub",null,"pp"),", V",(0,r.kt)("sub",null,"ram"),", V",(0,r.kt)("sub",null,"avg")," and DC voltage")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," Precise vertical measurement with markers")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," Precise horizontal measurement with markers")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," Rising/falling edge trigger")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," Trig level adjustable with indicator")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," Trig sensitivity adjustable with indicator")),(0,r.kt)("tr",null,(0,r.kt)("td",null),(0,r.kt)("td",null," Hold/run feature")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Test signal"),(0,r.kt)("td",null," Built-in 10Hz\uff5e1MHz (1-2-5 Step)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Waveform storage"),(0,r.kt)("td",null," SD card")),(0,r.kt)("tr",null,(0,r.kt)("td",null," PC connection via USB"),(0,r.kt)("td",null," as SD card reader"))),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please visit our ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=DSO"},"DSO Nano forum")," for prompt technical support and usage discussion.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://code.google.com/p/dsonano/"},"Official firmware, schematics and development documentation"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://gitlab.com/dsonano/dso-firmware"},"Community firmware source git tree")," (for gcc and IAR)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Nano/res/DSOUI.pdf"},"MOD your DSO nano UI"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://www.awanirentcar.com"},"Sewa Mobil Jakarta"),", ",(0,r.kt)("a",{parentName:"p",href:"http://kiosauto.com"},"Aksesoris mobil")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
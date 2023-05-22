"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91159],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var i=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,l=function(e,t){if(null==e)return{};var r,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var c=i.createContext({}),u=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=u(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),m=l,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return r?i.createElement(k,a(a({ref:t},s),{},{components:r})):i.createElement(k,a({ref:t},s))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,a=new Array(n);a[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26470:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var i=r(87462),l=(r(67294),r(3905));const n={description:"Matrix Clock",title:"Matrix Clock",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Matrix_Clock",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,o={unversionedId:"Seeed_Elderly/Discrete Product/Matrix_Clock",id:"Seeed_Elderly/Discrete Product/Matrix_Clock",title:"Matrix Clock",description:"Matrix Clock",source:"@site/docs/Seeed_Elderly/Discrete Product/Matrix_Clock.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Matrix_Clock",permalink:"/Matrix_Clock",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Matrix_Clock.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Matrix Clock",title:"Matrix Clock",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Matrix_Clock",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LoNet 808 - Mini GSM/GPRS Plus GPS Breakout",permalink:"/LoNet_808-Mini_GSM_GPRS_Plus_GPS_Breakout"},next:{title:"Bugduino",permalink:"/Bugduino"}},c={},u=[{value:"Features",id:"features",level:2},{value:"Instructions",id:"instructions",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Schematic",id:"schematic",level:2},{value:"PCB",id:"pcb",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function p(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,i.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-ProductImagePlain.jpg",alt:null})),(0,l.kt)("p",null,"The Matrix clock is a single board, highly compact, Arduino compatible clock that displays the time on an LED matrix display. The display and rich firmware library allow for animated transitions between minutes."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClockRear.jpg",alt:null}),(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Buttons.jpg",alt:null})),(0,l.kt)("p",null,"Based on the Arduino Leonardo, the Matrix Clock is fully compatible with the Arduino IDE and can be easily updated or customised with new sketches, uploaded via a USB Micro cable. A coin cell powered Real Time Clock Calendar keeps track of the time and date when the unit is not powered. The Matrix Clock can also play musical alarms that can be easily reprogrammed with different tunes. Due to its compact form factor the Matrix clock could be fitted in any number of housings - even a pocket watch style housing. If portability is desirable then the unit can be battery powered and a sleep function is available (by taking one of the expansion pins to ground) in order to extend battery life."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Matrix-Clock-p-1824.html"},(0,l.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"16x8 LED Matrix display"),(0,l.kt)("li",{parentName:"ul"},"ATMEGA32U4 microcontroller"),(0,l.kt)("li",{parentName:"ul"},"Coin cell powered Real Time Clock Calendar"),(0,l.kt)("li",{parentName:"ul"},"Texas Instruments TLC5920 LED driver"),(0,l.kt)("li",{parentName:"ul"},"4 Buttons"),(0,l.kt)("li",{parentName:"ul"},"Piezo speaker output"),(0,l.kt)("li",{parentName:"ul"},"Sleep mode input"),(0,l.kt)("li",{parentName:"ul"},"2 power inputs, USB Micro connector or  6V - 9V DC in. (Normal powered by Vin switches when USB power is present).")),(0,l.kt)("h2",{id:"instructions"},"Instructions"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Matrix_Clock/img/MC-Mode.jpg",alt:null})),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",null," Microcontroller "),(0,l.kt)("td",null," Atmel ATmega32u4 in TQFP-44 package")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Operating Voltage "),(0,l.kt)("td",null," 5V USB powered or 6V to 9V")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Power and communications "),(0,l.kt)("td",null," USB Micro B")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Current "),(0,l.kt)("td",null," Approx 90mA average during normal operation  Max. 300mA")),(0,l.kt)("tr",null,(0,l.kt)("td",null," LED Matrix "),(0,l.kt)("td",null," 2x 8x8 3mm green  LEDs")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Clock speed "),(0,l.kt)("td",null," Microcontroler 16MHz, RTCC 32.7")),(0,l.kt)("tr",null,(0,l.kt)("td",null," SRAM "),(0,l.kt)("td",null," 2.5 KB")),(0,l.kt)("tr",null,(0,l.kt)("td",null," EEPROM "),(0,l.kt)("td",null," 1 KB")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Flash Memory "),(0,l.kt)("td",null," 32 KB")),(0,l.kt)("tr",null,(0,l.kt)("td",null," Expansion Header "),(0,l.kt)("td",null," Gnd, Vin, 5V, Sleep, Piezo-, Pezo+"))),(0,l.kt)("h2",{id:"schematic"},"Schematic"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/c/c3/MatrixClock-Schematic-MC201V1-Rev1.pdf"},"MatrixClock-Schematic-MC201V1-Rev1.pdf"))),(0,l.kt)("h2",{id:"pcb"},"PCB"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Matrix_Clock/img/MatrixClock-PCB.jpg",alt:null})),(0,l.kt)("h2",{id:"licensing"},"Licensing"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://i.creativecommons.org/l/by-sa/4.0/88x31.png"},"http://i.creativecommons.org/l/by-sa/4.0/88x31.png")),(0,l.kt)("p",null,"Matrix Clock V1 by Dan Hamer  is licensed under a ",(0,l.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/4.0/deed.en_US"},"Creative Commons Attribution-ShareAlike 4.0 International License")),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
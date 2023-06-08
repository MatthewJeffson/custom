"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=u(r),c=a,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||i;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},15563:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={description:"BLE Nitrogen",title:"BLE Nitrogen",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BLE_Nitrogen",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Seeed_Elderly/Discrete Product/BLE_Nitrogen",id:"Seeed_Elderly/Discrete Product/BLE_Nitrogen",title:"BLE Nitrogen",description:"BLE Nitrogen",source:"@site/docs/Seeed_Elderly/Discrete Product/BLE_Nitrogen.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/BLE_Nitrogen",permalink:"/custom/BLE_Nitrogen",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/BLE_Nitrogen.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"BLE Nitrogen",title:"BLE Nitrogen",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BLE_Nitrogen",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"BLE Micro",permalink:"/custom/BLE_Micro"},next:{title:"Fubarino SD",permalink:"/custom/Fubarino_SD"}},p={},u=[{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/cover.png",alt:"enter image description here"})),(0,a.kt)("p",null,"Zephyr applications use the nrf52_nitrogen configuration to run on the nRF52 Nitrogen hardware. It provides support for the Nordic Semiconductor nRF52832 ARM Cortex-M4F CPU and the following devices:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NVIC (Nested Vectored Interrupt Controller)"),(0,a.kt)("li",{parentName:"ul"},"SYSTICK (System Tick System Clock)"),(0,a.kt)("li",{parentName:"ul"},"UART"),(0,a.kt)("li",{parentName:"ul"},"GPIO"),(0,a.kt)("li",{parentName:"ul"},"FLASH")),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"http://infocenter.nordicsemi.com/"},"Nordic Semiconductor Infocenter")," contains the processor's information and the datasheet."),(0,a.kt)("p",null,"It is strongly recommended that you update your development environment with the latest ",(0,a.kt)("a",{parentName:"p",href:"https://www.zephyrproject.org/downloads/tools"},"SDK")," since new functionality is tested against the latest releases."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/BLE-Nitrogen-p-2711.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("p",null,"##Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"nRF52832 microcontroller with 512kB Flash, 64kB ram",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Cortex M4"),(0,a.kt)("li",{parentName:"ul"},"BLE"),(0,a.kt)("li",{parentName:"ul"},"NFC"))),(0,a.kt)("li",{parentName:"ul"},"USB power supply with fuse protect"),(0,a.kt)("li",{parentName:"ul"},"Battery management",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On board battery charger"),(0,a.kt)("li",{parentName:"ul"},"Battery connector"),(0,a.kt)("li",{parentName:"ul"},"Battery charge indicate LED"))),(0,a.kt)("li",{parentName:"ul"},"LPC11U35 on board SWD debugger",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SWD debugger firmware"),(0,a.kt)("li",{parentName:"ul"},"USB to Uart"),(0,a.kt)("li",{parentName:"ul"},"Drag and Drop firmware upgrade"),(0,a.kt)("li",{parentName:"ul"},"Auto reset and run after firmware upgraded"))),(0,a.kt)("li",{parentName:"ul"},"BLE power consumption measurement",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On board current measure circuit"),(0,a.kt)("li",{parentName:"ul"},"1uA measurement capability"),(0,a.kt)("li",{parentName:"ul"},"Upto 150mA current measure"))),(0,a.kt)("li",{parentName:"ul"},"7 LEDs",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"USR1, BT, PWR, CDC, DAP, MSD, Battery charge"))),(0,a.kt)("li",{parentName:"ul"},"Two push buttons",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"USR and RESET(also for LPC11U35 firmware upgrade)"))),(0,a.kt)("li",{parentName:"ul"},"SWD debug connectors",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"nRF52832 SWD connector"),(0,a.kt)("li",{parentName:"ul"},"nRF52832 Uart connector"))),(0,a.kt)("li",{parentName:"ul"},"On board chip antenna"),(0,a.kt)("li",{parentName:"ul"},"1.8V work voltage"),(0,a.kt)("li",{parentName:"ul"},"2x20pin 2.0mm pitch Low speed connector"),(0,a.kt)("li",{parentName:"ul"},"Fully compatible with 96Boards IoT standards")),(0,a.kt)("p",null,"##Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chipset"),(0,a.kt)("td",{parentName:"tr",align:null},"nRF52832")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,a.kt)("td",{parentName:"tr",align:null},"64MHz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flash"),(0,a.kt)("td",{parentName:"tr",align:null},"512KB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,a.kt)("td",{parentName:"tr",align:null},"96KB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Digital Output Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"1.8V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Analog Pins"),(0,a.kt)("td",{parentName:"tr",align:null},"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Analog Input Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"1.8V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,a.kt)("td",{parentName:"tr",align:null},"60x30mm")))),(0,a.kt)("p",null,"##Hardware Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/hardware_ov.png",alt:"enter image description here"})),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Micro USB")," - for debug, programming, power and battery charge."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"LED Indicators")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"USR1"))," - User controlled led, connected to P0.29"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"BT"))," - Bluetooth indicator. This led will light up when connect to a device."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"PWR"))," - Light up when USB or battery inserted."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"CDC"))," - Uart data indicator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"DAP"))," - SWD indicator."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("em",{parentName:"strong"},"MSD"))," - Mass Storage/Drag&Drop indicator;")),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Battery Connector")," - A JST-1.0 connector for 3.7V lithium battery"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Charge Indicator"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BLINK: No battery inserted"),(0,a.kt)("li",{parentName:"ul"},"ON: Charging"),(0,a.kt)("li",{parentName:"ul"},"OFF: Charged done")))),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Reset Button")," - Press to reset the system"),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"User Button")," - User button, connect to P0.27, pull-up"),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"UART for Debug")),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"BT Chip antenna")),(0,a.kt)("p",null,"8.",(0,a.kt)("strong",{parentName:"p"},"NFC antenna UFL connector")),(0,a.kt)("p",null,"9.",(0,a.kt)("strong",{parentName:"p"},"Pins")," - Details refer to Pin map"),(0,a.kt)("p",null,"A.IC - ",(0,a.kt)("strong",{parentName:"p"},"NRF52832")),(0,a.kt)("p",null,"B.IC - ",(0,a.kt)("strong",{parentName:"p"},"LPC11U35")),(0,a.kt)("p",null,"C.IC - ",(0,a.kt)("strong",{parentName:"p"},"ETA6003")),(0,a.kt)("p",null,"##PinMap"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/pin_map.png",alt:"enter image description here"}))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Click to view larger image.\n"))),(0,a.kt)("p",null,"##Sostware"),(0,a.kt)("p",null,"###Install the Driver"),(0,a.kt)("p",null,"Click to download the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe"},"driver for Mbed"),"."),(0,a.kt)("p",null,"Insert the board to PC via a micro USB cable, and double click mbedWinSerial_16466.exe to install it, then you will find a new device at your device manager."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/install_driver.png",alt:"enter image description here"})),(0,a.kt)("p",null,"###Advanced Guide"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.zephyrproject.org/"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/img/guide.png",alt:"enter image description here"}))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE_Nitrogen_Eagle_File.zip"},"Schematics in Eagle File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/BLE-Nitrogen/res/BLE%20Nitrogen%20v1.0_SCH.pdf"},"Schematics in PDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mbed.org/media/downloads/drivers/mbedWinSerial_16466.exe"},"Driver for Mbed"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}s.isMDXComponent=!0}}]);
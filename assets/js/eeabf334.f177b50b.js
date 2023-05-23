"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[58365],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>p});var s=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,s,l=function(t,e){if(null==t)return{};var a,s,l={},n=Object.keys(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(s=0;s<n.length;s++)a=n[s],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var i=s.createContext({}),u=function(t){var e=s.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},d=function(t){var e=u(t.components);return s.createElement(i.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return s.createElement(s.Fragment,{},e)}},c=s.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,i=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=u(a),c=l,p=m["".concat(i,".").concat(c)]||m[c]||k[c]||n;return a?s.createElement(p,r(r({ref:e},d),{},{components:a})):s.createElement(p,r({ref:e},d))}));function p(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,r=new Array(n);r[0]=c;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[m]="string"==typeof t?t:l,r[1]=o;for(var u=2;u<n;u++)r[u]=a[u];return s.createElement.apply(null,r)}return s.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60637:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var s=a(87462),l=(a(67294),a(3905));const n={title:"LTE Cat 1 Pi HAT",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/LTE_Cat_1_Pi_HAT/",slug:"/LTE_Cat_1_Pi_HAT",last_update:{date:"01/11/2022",author:"gunengyu"}},r=void 0,o={unversionedId:"Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT",id:"Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT",title:"LTE Cat 1 Pi HAT",description:"Seeed\u2019s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker",slug:"/LTE_Cat_1_Pi_HAT",permalink:"/custom/LTE_Cat_1_Pi_HAT",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker/LTE_Cat_1_Pi_HAT.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"LTE Cat 1 Pi HAT",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/LTE_Cat_1_Pi_HAT/",slug:"/LTE_Cat_1_Pi_HAT",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible",permalink:"/custom/wio_gps_board"},next:{title:"Wio LTE Cat M1/NB-IoT Tracker",permalink:"/custom/Wio_LTE_Cat_M1_NB-IoT_Tracker"}},i={},u=[{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"FAQ",id:"faq",level:2},{value:"Resource",id:"resource",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,s.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/overview.JPG",alt:null})),(0,l.kt)("p",null,"Seeed\u2019s LTE CAT.1 Pi HAT is an open sourcecellular extension modem for Raspberry Pi,\nbased on u-blox LARA-R2xx series. Itcompatible with Raspberry Pi 1 Model B+ and later versions."),(0,l.kt)("p",null,"LTE CAT.1 Pi HAT is designed for LTE Category 1 networks and with 2G fallback(EU version only). Embedding common protocols, like TCP/UDP, HTTP."),(0,l.kt)("p",null,"LTE CAT.1 Pi HAT supports UART and USB interfaces. By UART, Raspberry Pi communicate with LTE CAT.1 Pi HAT via AT command without any special driver. It\u2019s well suited for building prototyping rapidly."),(0,l.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/nQmORk9_EQM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Links"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Europe",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",{style:{}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/TE-Cat-1-Pi-HAT-%28Europe%29-p-3060.html",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png"}))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA-AT&T",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",{style:{}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-AT%26T%29-p-3056.html",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png"}))))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA-VZW",(0,l.kt)("br",null)),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("p",{style:{}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/LTE-Cat-1-Pi-HAT-%28USA-VZW%29-p-3061.html",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png"}))))))),(0,l.kt)("h2",{id:"version"},"Version"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Changes"),(0,l.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LTE Cat 1 Pi HAT(USA-AT&T)"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial"),(0,l.kt)("td",{parentName:"tr",align:null},"Dec 2017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LTE Cat 1 Pi HAT(USA-VZW)"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial"),(0,l.kt)("td",{parentName:"tr",align:null},"Dec 2017")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"LTE Cat 1 Pi HAT(Europe)"),(0,l.kt)("td",{parentName:"tr",align:null},"Initial"),(0,l.kt)("td",{parentName:"tr",align:null},"Dec 2017")))),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Compatible with Raspberry Pi 1 Model\nB+ and later versions\n"),(0,l.kt)("li",{parentName:"ul"},"LTE CAT.1 and support 2G fallback(EU\nversion only)\n"),(0,l.kt)("li",{parentName:"ul"},"UART and USB interface for\ncommunicate\n"),(0,l.kt)("li",{parentName:"ul"},"Support Grove I2C and Digital\nconnector\n"),(0,l.kt)("li",{parentName:"ul"},"Protocols on cellular module\n"),(0,l.kt)("li",{parentName:"ul"},"Embed TCP/UDP stack\n"),(0,l.kt)("li",{parentName:"ul"},"Embed HTTP, FTP, SSL\n"),(0,l.kt)("li",{parentName:"ul"},"Dual stack IPV4/IPV6\n"),(0,l.kt)("li",{parentName:"ul"},"3GPP TS 27.007 ","[8]",", TS 27.005 ","[9]","standard AT command")),(0,l.kt)("h2",{id:"applications"},"Applications"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"IoT gateway"),(0,l.kt)("li",{parentName:"ul"},"Data logger"),(0,l.kt)("li",{parentName:"ul"},"Vending machine"),(0,l.kt)("li",{parentName:"ul"},"POS"),(0,l.kt)("li",{parentName:"ul"},"Smart home devices"),(0,l.kt)("li",{parentName:"ul"},"Robot"),(0,l.kt)("li",{parentName:"ul"},"Advertising"),(0,l.kt)("li",{parentName:"ul"},"Other scenario need cellular networks")),(0,l.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Interfaces")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces1.png",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/interfaces2.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"LTE CAT.1"),": U-blox LARA-R2xx series LTE CAT.1\nmodule, please refer to ",(0,l.kt)("a",{parentName:"li",href:"https://www.u-blox.com/en/product/lara-r2-series"},"u-blox LARA-R2 series product page")," for more information."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Grove Port"),": 2 Grove I2C/Digital Port, connected to SDA_RPI, SCL_RPI, it can be used as I2C or GPIO port."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Switcher"),": Control Grove port voltage as 5V or 3.3V"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"USB Interface"),": It can be used to power up the LTE Cat.1 Pi HAT and raspberry together, and used for debug port as well. Please refer to FAQ Q1 about how to use as debug port."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Battery Holder"),": MP2617 is used for battery power management. If the battery is not connected, the CHG led will flash by 6HZ frequency. It will be off when under charging and on when finish charging. The connector is JST2.0 standard. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Lara-R2XX Reset button"),": Reset Lara-R2xx module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Lara-R2XX Power on button"),": Press 2 seconds to power on the Lara-R2xx module."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Antenna"),": It includes 2 antennas, one is main and other is div. The main antenna is used for both sending and receiving signals. It must be connected. The div antenna is used for the receving only and to improve receiver sensitivity. It is optional. "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Rpi 40 pins"),": Refer to pinout."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"SIM card slot"),": Follow silk screen direction to plug LTE SIM card.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"For the battery, we suggest 3.7V Li-ion battery and connect to JST2.0. Especially for Lara-R211(Europe) Pi HAT, it includes the GSM function with high power consumption. If there is no LTE signal around, the LTE CAT.1 Pi HAT also consumes a lot of power supply. So we highly suggest attach the battery.\n"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Pinout")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/pinout.jpg",alt:null})),(0,l.kt)("div",null,(0,l.kt)("style",{type:"text/css",dangerouslySetInnerHTML:{__html:"\n.tg  {border-collapse:collapse;border-spacing:0;}\n.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}\n.tg .tg-us36{border-color:inherit;vertical-align:top}\n"}}),(0,l.kt)("table",{className:"tg"},(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",{className:"tg-us36"},"Pin Used"),(0,l.kt)("th",{className:"tg-us36"},"Python (BCM)"),(0,l.kt)("th",{className:"tg-us36"},"WiringPi GPIO"),(0,l.kt)("th",{className:"tg-us36"},"Name"),(0,l.kt)("th",{className:"tg-us36",colSpan:2},"P1 Pin Number"),(0,l.kt)("th",{className:"tg-us36"},"Name"),(0,l.kt)("th",{className:"tg-us36"},"WiringPi GPIO"),(0,l.kt)("th",{className:"tg-us36"},"Python (BCM)"),(0,l.kt)("th",{className:"tg-us36"},"Pin Used")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"3V3_RPI"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"3.3v DC Power"),(0,l.kt)("td",{className:"tg-us36"},"1"),(0,l.kt)("td",{className:"tg-us36"},"2"),(0,l.kt)("td",{className:"tg-us36"},"5v DC Power"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"5V_RPI")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"SDA_RPI"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"8"),(0,l.kt)("td",{className:"tg-us36"},"GPIO02 (SDA1, I2C)"),(0,l.kt)("td",{className:"tg-us36"},"3"),(0,l.kt)("td",{className:"tg-us36"},"4"),(0,l.kt)("td",{className:"tg-us36"},"5v DC Power"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"5V_RPI")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"SCL_RPI"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"9"),(0,l.kt)("td",{className:"tg-us36"},"GPIO03 (SCL1, I2C)"),(0,l.kt)("td",{className:"tg-us36"},"5"),(0,l.kt)("td",{className:"tg-us36"},"6"),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"GND")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"},"4"),(0,l.kt)("td",{className:"tg-us36"},"7"),(0,l.kt)("td",{className:"tg-us36"},"GPIO04"),(0,l.kt)("td",{className:"tg-us36"},"7"),(0,l.kt)("td",{className:"tg-us36"},"8"),(0,l.kt)("td",{className:"tg-us36"},"GPIO14 (TXD0)"),(0,l.kt)("td",{className:"tg-us36"},"15"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"TX_RPI")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"GND"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"},"9"),(0,l.kt)("td",{className:"tg-us36"},"10"),(0,l.kt)("td",{className:"tg-us36"},"GPIO15 (RXD0)"),(0,l.kt)("td",{className:"tg-us36"},"16"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"RX_RPI")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"RTS_RPI"),(0,l.kt)("td",{className:"tg-us36"},"17"),(0,l.kt)("td",{className:"tg-us36"},"0"),(0,l.kt)("td",{className:"tg-us36"},"GPIO17"),(0,l.kt)("td",{className:"tg-us36"},"11"),(0,l.kt)("td",{className:"tg-us36"},"12"),(0,l.kt)("td",{className:"tg-us36"},"GPIO18"),(0,l.kt)("td",{className:"tg-us36"},"1"),(0,l.kt)("td",{className:"tg-us36"},"18"),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"},"27"),(0,l.kt)("td",{className:"tg-us36"},"2"),(0,l.kt)("td",{className:"tg-us36"},"GPIO27"),(0,l.kt)("td",{className:"tg-us36"},"13"),(0,l.kt)("td",{className:"tg-us36"},"14"),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"GND")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"},"22"),(0,l.kt)("td",{className:"tg-us36"},"3"),(0,l.kt)("td",{className:"tg-us36"},"GPIO22"),(0,l.kt)("td",{className:"tg-us36"},"15"),(0,l.kt)("td",{className:"tg-us36"},"16"),(0,l.kt)("td",{className:"tg-us36"},"GPIO23"),(0,l.kt)("td",{className:"tg-us36"},"4"),(0,l.kt)("td",{className:"tg-us36"},"23"),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"3V3_RPI"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"3.3v DC Power"),(0,l.kt)("td",{className:"tg-us36"},"17"),(0,l.kt)("td",{className:"tg-us36"},"18"),(0,l.kt)("td",{className:"tg-us36"},"GPIO24"),(0,l.kt)("td",{className:"tg-us36"},"5"),(0,l.kt)("td",{className:"tg-us36"},"24"),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"12"),(0,l.kt)("td",{className:"tg-us36"},"GPIO10 (SPI0_MOSI)"),(0,l.kt)("td",{className:"tg-us36"},"19"),(0,l.kt)("td",{className:"tg-us36"},"20"),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"GND")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"13"),(0,l.kt)("td",{className:"tg-us36"},"GPIO09 (SPI0_MISO)"),(0,l.kt)("td",{className:"tg-us36"},"21"),(0,l.kt)("td",{className:"tg-us36"},"22"),(0,l.kt)("td",{className:"tg-us36"},"GPIO25 "),(0,l.kt)("td",{className:"tg-us36"},"6"),(0,l.kt)("td",{className:"tg-us36"},"25"),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"14"),(0,l.kt)("td",{className:"tg-us36"},"GPIO11 (SPI0 SCLK)"),(0,l.kt)("td",{className:"tg-us36"},"23"),(0,l.kt)("td",{className:"tg-us36"},"24"),(0,l.kt)("td",{className:"tg-us36"},"GPIO08 (SPI0_CS0)"),(0,l.kt)("td",{className:"tg-us36"},"10"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"GND"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"},"25"),(0,l.kt)("td",{className:"tg-us36"},"26"),(0,l.kt)("td",{className:"tg-us36"},"GPIO07 (SPI0_CS1)"),(0,l.kt)("td",{className:"tg-us36"},"11"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"30"),(0,l.kt)("td",{className:"tg-us36"},"Reserved"),(0,l.kt)("td",{className:"tg-us36"},"27"),(0,l.kt)("td",{className:"tg-us36"},"28"),(0,l.kt)("td",{className:"tg-us36"},"Reserved"),(0,l.kt)("td",{className:"tg-us36"},"31"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"LARA_PWR"),(0,l.kt)("td",{className:"tg-us36"},"5"),(0,l.kt)("td",{className:"tg-us36"},"21"),(0,l.kt)("td",{className:"tg-us36"},"GPIO05"),(0,l.kt)("td",{className:"tg-us36"},"29"),(0,l.kt)("td",{className:"tg-us36"},"30"),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"GND")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"LARA_RST"),(0,l.kt)("td",{className:"tg-us36"},"6"),(0,l.kt)("td",{className:"tg-us36"},"22"),(0,l.kt)("td",{className:"tg-us36"},"GPIO06"),(0,l.kt)("td",{className:"tg-us36"},"31"),(0,l.kt)("td",{className:"tg-us36"},"32"),(0,l.kt)("td",{className:"tg-us36"},"GPIO12"),(0,l.kt)("td",{className:"tg-us36"},"26"),(0,l.kt)("td",{className:"tg-us36"},"12"),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"},"13"),(0,l.kt)("td",{className:"tg-us36"},"23"),(0,l.kt)("td",{className:"tg-us36"},"GPIO13"),(0,l.kt)("td",{className:"tg-us36"},"33"),(0,l.kt)("td",{className:"tg-us36"},"34"),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"GND")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"},"19"),(0,l.kt)("td",{className:"tg-us36"},"24"),(0,l.kt)("td",{className:"tg-us36"},"GPIO19(SPI1 MISO)"),(0,l.kt)("td",{className:"tg-us36"},"35"),(0,l.kt)("td",{className:"tg-us36"},"36"),(0,l.kt)("td",{className:"tg-us36"},"GPIO16(SPI1 CS0)"),(0,l.kt)("td",{className:"tg-us36"},"27"),(0,l.kt)("td",{className:"tg-us36"},"16"),(0,l.kt)("td",{className:"tg-us36"},"CTS_RPI")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"FREE"),(0,l.kt)("td",{className:"tg-us36"},"26"),(0,l.kt)("td",{className:"tg-us36"},"25"),(0,l.kt)("td",{className:"tg-us36"},"GPIO26"),(0,l.kt)("td",{className:"tg-us36"},"37"),(0,l.kt)("td",{className:"tg-us36"},"38"),(0,l.kt)("td",{className:"tg-us36"},"GPIO20(SPI1 MOSI)"),(0,l.kt)("td",{className:"tg-us36"},"28"),(0,l.kt)("td",{className:"tg-us36"},"20"),(0,l.kt)("td",{className:"tg-us36"},"FREE")),(0,l.kt)("tr",null,(0,l.kt)("td",{className:"tg-us36"},"GND"),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"}),(0,l.kt)("td",{className:"tg-us36"},"Ground"),(0,l.kt)("td",{className:"tg-us36"},"39"),(0,l.kt)("td",{className:"tg-us36"},"40"),(0,l.kt)("td",{className:"tg-us36"},"GPIO21(SPI1 SCLK)"),(0,l.kt)("td",{className:"tg-us36"},"29"),(0,l.kt)("td",{className:"tg-us36"},"21"),(0,l.kt)("td",{className:"tg-us36"},"FREE"))))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Dimensions")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Hard01.png",alt:null})),(0,l.kt)("iframe",{src:"https://3dwarehouse.sketchup.com/embed.html?mid=eeee1715-69fe-4e5e-a643-15a3c1f3510d",frameborder:"0",scrolling:"no",marginheight:"0",marginwidth:"0",width:"800",height:"450",allowfullscreen:!0}),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Versions")),(0,l.kt)("p",null,"Now we have made three versions of the LTE Cat 1 Pi HAT. In addition to supporting different networks, they are almost the same. And you may pay attention that the only the Europe version support 2G net."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:null},"Module"),(0,l.kt)("th",{parentName:"tr",align:null},"Network"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Europe"),(0,l.kt)("td",{parentName:"tr",align:null},"LARA-R211"),(0,l.kt)("td",{parentName:"tr",align:null},"2G/4G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA-AT&T"),(0,l.kt)("td",{parentName:"tr",align:null},"LARA-R203"),(0,l.kt)("td",{parentName:"tr",align:null},"4G")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USA-VZW"),(0,l.kt)("td",{parentName:"tr",align:null},"LARA-R204"),(0,l.kt)("td",{parentName:"tr",align:null},"4G")))),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"hardware"},"Hardware"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"We use the Raspberry Pi3 with 2018-04-18 [RASPBIAN STRETCH WITH DESKTOP](https://www.raspberrypi.org/downloads/raspbian/) for below demo.\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 1. Stack LTE Cat 1 Pi HAT on top of Raspberrry and connect the 2 antennas. ")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/Rasp_Pi_HAT.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 2. Connect the mouse, keyboard and monitor as well."),(0,l.kt)("li",{parentName:"ul"},"Step 3. Power the Raspberry Pi.")),(0,l.kt)("h3",{id:"software"},"Software"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 1. Use dtoverlay=pi3-disable-bt to enable Raspberry Pi3/Pi4 UART0.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo nano /boot/config.txt\n")),(0,l.kt)("p",null,"Then add ",(0,l.kt)("inlineCode",{parentName:"p"},"dtoverlay=pi3-disable-bt")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"enable_uart=1")," to bottom of the config.txt. it should look like this."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"[all]\n#dtoverlay=vc4-fkms-v3d\ndtoverlay=pi3-disable-bt\nenable_uart=1\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 2. Disable the system serivce to use the UART0.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo systemctl disable hciuart \n")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"Pi3-disable-bt disables the Bluetooth device and restores UART0/ttyAMA0 to GPIOs 14 and 15. It is also necessary to disable the system service that initialises the modem so it doesn't use the UART: sudo systemctl disable hciuart.\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 3. Delete the console=serial0,115200 in cmdline.txt.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo nano /boot/cmdline.txt\n")),(0,l.kt)("p",null,"Then delete console=serial0,115200 from the string. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 4. Reboot the Raspberry Pi3/Pi4")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 5. Run below commands to run the demo")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/ublox_lara_r2_pi_hat.git\ncd ublox_lara_r2_pi_hat\nsudo python setup.py install\ncd test\nsudo python test01.py\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Step 6. Here is the output from terminal. ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"pi@raspberrypi:~/Desktop/ublox_lara_r2_pi_hat/examples $ sudo python test01.py\n40-pin GPIO header detected\nEnabling CTS0 and RTS0 on GPIOs 16 and 17\nrts cts on\nwaking up...\nmodule name:  LARA-R211\nRSSI:  3\n")),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q1: Can we communicate with LTE Cat 1 Pi HAT directly with PC?")),(0,l.kt)("p",null,"A1: Yes, there are 2 ways. One is USB and other is UART port. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For USB, Please use the USB cable to connect the Pi HAT with PC directly. Then download and install the ",(0,l.kt)("a",{parentName:"li",href:"https://www.u-blox.com/sites/default/files/ubloxCell_usbcdc_windows_3264_v2.0.0.0.exe.zip"},"u-blox Cellular USB_Windows Driver, v2.0"),". The COM3 and COM4 are used for AT command in device manager. We can use any Serial COM monitor tool to run AT commands or use\nevaluation software ",(0,l.kt)("a",{parentName:"li",href:"https://www.u-blox.com/sites/default/files/products/tools/m-center-01.11.00.exe"},"m-center for Windows, version 1.11.0")," for windows. ")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/device_manager.png",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"For the UART port,\u3000Please use the ",(0,l.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/UartSBee-V5-p-1752.html"},"usb to serial adaptor"),", follow below connection and use the baudrate as 115200. We can use any Serial COM monitor tool to run AT commands.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"USB to UART Adaptor"),(0,l.kt)("th",{parentName:"tr",align:null},"LTE Cat1 Pi HAT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"GND"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin6-GND")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"TX"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin8-TX_RPI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"RX"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin10-RX_RPI")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"NA"),(0,l.kt)("td",{parentName:"tr",align:null},"Pin11-RTS_RPI Connect to Pin9-GND")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/Img/UART.png",alt:null})),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"Please do connect the RTS_RPI to GND as marked as red at above picture if we use the UART port for communication.\n"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q2: Do you have AT command list?")),(0,l.kt)("p",null,"A2: Here is ",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf"},"u-blox-CEL_ATCommands"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q3: What is differences between the Lara-R203/204/211?")),(0,l.kt)("p",null,"A3: Please refer to ",(0,l.kt)("a",{parentName:"p",href:"https://www.u-blox.com/en/product/lara-r2-series"},"u-blox LARA-R2 series product page"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q4: How to register to AT&T network for LARA-203?")),(0,l.kt)("p",null,"A4: Please run below commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AT+COPS=2\nAT+UMNOCONF=2\nAT+COPS=0\n")),(0,l.kt)("p",null,"You can try below command to verify AT&T network connection. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+UPSD=0,1,"AT&T"\nAT+UPSDA=0,3\nAT+UPING="www.google.com"\n')),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Q5: How to register to Verizon network for LARA-204?")),(0,l.kt)("p",null,"A5: Please run below commands."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"AT+COPS=2\nAT+UMNOCONF=3\nAT+COPS=0\n")),(0,l.kt)("p",null,"You can try below command to verify Verizon network connection. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'AT+UPSD=0,1,"vzwinternet"\nAT+UPSDA=0,3\nAT+UPING="www.google.com"\n')),(0,l.kt)("h2",{id:"resource"},"Resource"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LTE%20CAT.1%20Pi%20HAT%20v1.0.pdf"},"LTE Cat.1 Pi HAT Schematic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/u-blox-CEL_ATCommands_(UBX-13002752).pdf"},"u-blox-CEL_ATCommands")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_DataSheet_(UBX-16005783).pdf"},"LARA-R2_DataSheet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/LARA-R2_SysIntegrManual_(UBX-16010573).pdf"},"LARA-R2_SysIntegrManual")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/LTE_Cat_1_Pi_HAT/res/AT-CommandsExamples_AppNote_(UBX-13001820).pdf"},"AT-Commands Examples AppNote"))),(0,l.kt)("p",null,"We have this part available in ",(0,l.kt)("a",{parentName:"p",href:"https://geppetto.seeedstudio.com/"},"geppetto"),", easy modular electronic design with Seeed and Geppeto. Build it Now. ",(0,l.kt)("a",{parentName:"p",href:"https://geppetto.seeedstudio.com/"},"geppetto.seeedstudio.com")),(0,l.kt)("h2",{id:"projects"},"Projects"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Face Recognization Smart Lock with LTE Pi HAT"),": Face recognition is becoming more and more widely used, we can use it to make a smart lock."),(0,l.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://project.seeedstudio.com/SeeedStudio/face-recognization-smart-lock-with-lte-pi-hat-abcec9/embed",width:"350"}),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,l.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,l.kt)("div",null,(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
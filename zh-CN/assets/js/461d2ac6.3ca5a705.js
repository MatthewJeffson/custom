"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12632],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50882:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={description:"Xadow - Main Board",title:"Xadow - Main Board",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Main_Board",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Main_Board",id:"Seeed_Elderly/Xadow/Xadow_Main_Board",title:"Xadow - Main Board",description:"Xadow - Main Board",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Main_Board.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Main_Board",permalink:"/custom/zh-CN/Xadow_Main_Board",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Main_Board.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - Main Board",title:"Xadow - Main Board",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Main_Board",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - M0",permalink:"/custom/zh-CN/Xadow_M0"},next:{title:"Xadow - Multichannel Gas Sensor",permalink:"/custom/zh-CN/Xadow_Multichannel_Gas_Sensor"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Pins Description",id:"pins-description",level:2},{value:"Board Revisions and Changes",id:"board-revisions-and-changes",level:2},{value:"Get Start with Xadow Main Board",id:"get-start-with-xadow-main-board",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_00V1.jpg",alt:null})),(0,n.kt)("p",null,"The Xadow Main board module is based on the controller ",(0,n.kt)("strong",{parentName:"p"},"ATmega32U4"),". It features high performance and low power consumption, which makes your project small and portable, especially suitable for wearable projects."),(0,n.kt)("p",null,"The on-board controller ",(0,n.kt)("strong",{parentName:"p"},"ATmega32U4")," has 32K Flash and 2.5K SRAM and 1K EEPROM, it can be also used as a USB slave module, same as the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/seeeduino-lite-p-1487.html?cPath=6_7"},"Seeeduino Lite"),", that you can make much more projects with this. This Board can be powered either from the on-board USB connection or a Lithium battery. Also, there is charge circuit on this module that you can charge for the Lithium battery through the USB port."),(0,n.kt)("p",null,"The first time you use this Xadow main board, please install the related driver and make little modification as Here."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Main-Board-p-1524.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Microcontroller: ATmega32u4"),(0,n.kt)("li",{parentName:"ul"},"Work Voltage: 3.3V"),(0,n.kt)("li",{parentName:"ul"},"DC Current per IO pin :40mA"),(0,n.kt)("li",{parentName:"ul"},"Digital I/O Pins: 20"),(0,n.kt)("li",{parentName:"ul"},"PWM Channels: 7"),(0,n.kt)("li",{parentName:"ul"},"Analog Input Channels: 12"),(0,n.kt)("li",{parentName:"ul"},"Operating Temperature: -20~70 \u2103"),(0,n.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,n.kt)("h2",{id:"interface-function"},"Interface Function"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/XadowMainBoardScreen.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"J1: Micro USB. can be used for charging for Lithium battery and uploading code."),(0,n.kt)("li",{parentName:"ul"},"U2: ATmega32U4 IC, 8-bit AVR Microcontroller with 32K Bytes of ISP Flash and USB Controller."),(0,n.kt)("li",{parentName:"ul"},"RST: Reset Button. Can reset all system when it connects several Xadow modules."),(0,n.kt)("li",{parentName:"ul"},"J2,J3: FPC interface."),(0,n.kt)("li",{parentName:"ul"},"U1: CN3065 IC, charge management chip."),(0,n.kt)("li",{parentName:"ul"},"BAT: Battery socket, used to hook up LiPo battery,the interface is JST 1.0."),(0,n.kt)("li",{parentName:"ul"},"U4: MIC5205-3.3YM5,Voltage Regulators.")),(0,n.kt)("h2",{id:"pins-description"},"Pins Description"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Pins on both sides of Xadow modules are symmetrical, here are pins descriptions about J2 Interface from top to bottom."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Pins.jpg",alt:null})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Xadow Pins"),(0,n.kt)("th",{parentName:"tr",align:null},"Microcontroller Pins"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"(PCINT1/SCLK)PB1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"(PDI/PCINT2/MOSI)PB2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"(PDO/PCINT3/MISO)PB3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"38"),(0,n.kt)("td",{parentName:"tr",align:null},"PF5(ADC5/TMS)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"14,34,24,44"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"5,23,35,43"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"5,23,35,43"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"14,34,24,44"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"18"),(0,n.kt)("td",{parentName:"tr",align:null},"(OC0B/SCL/INT0 )PD0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"19"),(0,n.kt)("td",{parentName:"tr",align:null},"(SDA/INT1)PD1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"20"),(0,n.kt)("td",{parentName:"tr",align:null},"(RXD/INT2)PD2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"21"),(0,n.kt)("td",{parentName:"tr",align:null},"(TXD/INT3)PD3")))),(0,n.kt)("h2",{id:"board-revisions-and-changes"},"Board Revisions and Changes"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_-_Main_board_v1.3.JPG",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Revision 1.3")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"This version replaces the J2 and J3 FPC connector to a Flip type. It makes users more easier to connect or disconnect peripherals."),(0,n.kt)("li",{parentName:"ol"},"Optimize the charge circuit with path control function."),(0,n.kt)("li",{parentName:"ol"},"Separated the power supply for MCU and peripherals. It makes the MCU working more stable.")),(0,n.kt)("h2",{id:"get-start-with-xadow-main-board"},"Get Start with Xadow Main Board"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Similar to the Arduino, the Xadow Main Board uses only a single microcontroller (the Atmel ATmega32U4) to both run your sketches and communicate over USB with the computer. This means that you only need a USB cable to program the Xadow. The specific steps are as follows:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Download the driver files from ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver"},"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver")),(0,n.kt)("li",{parentName:"ul"},"Connect the Micro-USB cable to the Xadow Main Board."),(0,n.kt)("li",{parentName:"ul"},"Connect the other side of the Micro-USB connector to the computer's USB port."),(0,n.kt)("li",{parentName:"ul"},"Then install the Xadow Driver. You can refer to ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Guide_to_use_demos_downloaded_from_Seeed-s_Github/"},"Download Arduino and install Arduino driver")," to learn how to install the Xadow driver.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Main_Board/img/Xadow_Main_Board_Driver_step4.jpg",alt:null})),(0,n.kt)("p",null," Now, you can program and use the Xadow as you use other Arduino boards."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/freespace/Files_For_Seeed_Main_Board"},"Boards.txt and USBCore.cpp")," for Arduino IDE v1.6.3"),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Main_Board/res/Xadow_Main_Board.zip"},"Xadow Main Board eagle file.zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Xadow_MainBoard"},"Library of Xadow Main Board"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
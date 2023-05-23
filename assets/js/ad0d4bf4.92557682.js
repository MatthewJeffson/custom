"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74793],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||l;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},49079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={description:"CAN-BUS_Shield_V2.0",title:"CAN-BUS Shield V2.0",tags:["Shield","CAN-BUS"],keywords:["Shield","CAN-BUS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/CAN-BUS_Shield_V2.0",last_update:{date:"01/10/2023",author:"Eico"},no_comments:!1},r=void 0,o={unversionedId:"Top_Brand/Arduino/shield/CAN-BUS_Shield_V2.0",id:"Top_Brand/Arduino/shield/CAN-BUS_Shield_V2.0",title:"CAN-BUS Shield V2.0",description:"CAN-BUS_Shield_V2.0",source:"@site/docs/Top_Brand/Arduino/shield/CAN-BUS_Shield_V2.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/CAN-BUS_Shield_V2.0",permalink:"/custom/CAN-BUS_Shield_V2.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/CAN-BUS_Shield_V2.0.md",tags:[{label:"Shield",permalink:"/custom/tags/shield"},{label:"CAN-BUS",permalink:"/custom/tags/can-bus"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1673308800,formattedLastUpdatedAt:"Jan 10, 2023",frontMatter:{description:"CAN-BUS_Shield_V2.0",title:"CAN-BUS Shield V2.0",tags:["Shield","CAN-BUS"],keywords:["Shield","CAN-BUS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/CAN-BUS_Shield_V2.0",last_update:{date:"01/10/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Base Shield V2",permalink:"/custom/Base_Shield_V2"},next:{title:"Camera Shield",permalink:"/custom/Camera_Shield"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"APIs",id:"apis",level:2},{value:"1.Set the Baud rate",id:"1set-the-baud-rate",level:3},{value:"2.Set Receive Mask and Filter",id:"2set-receive-mask-and-filter",level:3},{value:"3.Check Receive",id:"3check-receive",level:3},{value:"4.Get CAN ID",id:"4get-can-id",level:3},{value:"5.Send Data",id:"5send-data",level:3},{value:"6.Receive Data",id:"6receive-data",level:3},{value:"7.init_CS",id:"7init_cs",level:3},{value:"Generate a New BaudRate",id:"generate-a-new-baudrate",level:2},{value:"Projects",id:"projects",level:2},{value:"Volkswagen CAN BUS Gaming",id:"volkswagen-can-bus-gaming",level:3},{value:"Hack your vehicle CAN-BUS",id:"hack-your-vehicle-can-bus",level:3},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/shiyitu1.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CAN-BUS")," is a common industrial bus because of its long travel distance, medium communication speed and high reliability. It is commonly found on modern machine tools, such as an automotive diagnostic bus."),(0,i.kt)("p",null,"This CAN-BUS Shield adopts ",(0,i.kt)("strong",{parentName:"p"},"MCP2515")," CAN Bus controller with SPI interface and ",(0,i.kt)("strong",{parentName:"p"},"MCP2551")," CAN transceiver to give your Arduino/Seeeduino CAN-BUS capability. With an ",(0,i.kt)("strong",{parentName:"p"},"OBD-II")," converter cable added on and the OBD-II library imported, you are ready to build an onboard diagnostic device or data logger."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/vehicle-hacking-tools",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_Car_Hacking.png"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Version")),(0,i.kt)("p",null,"This document applies to the following version of products:"),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h3",null,"Version")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Released Date")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"How to Buy"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"CAN BUS Shield V1.0")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Oct 14, 2012")),(0,i.kt)("td",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png",alt:"pir",width:200,height:"auto"})))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"CAN BUS Shield V1.1")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Aug 10, 2013")),(0,i.kt)("td",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png",alt:"pir",width:200,height:"auto"})))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"CAN BUS Shield V1.2")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Jan 5, 2015")),(0,i.kt)("td",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png",alt:"pir",width:200,height:"auto"})))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"CAN BUS Shield V2.0")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Aug 01,2017")),(0,i.kt)("td",null,(0,i.kt)("div",{class:"document"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html",target:"_blank",rel:"noopener"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",alt:"",width:200,height:"auto"}))))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alternative Choice")),(0,i.kt)("p",null,"If your project is space limited and also don't need other fuctions except CAN-BUS, here is a Grove CAN-BUS module which is Arduino compatible, more compact and cost effective, please click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html"},"here")," to visit its page."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What if I want to connect this shield to my car")),(0,i.kt)("p",null,"If you want to read data or control your car, there's an OBD>DB9 cable available for you, ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html"},"this cable")," make easier to connect to OBD-connector and DB9-connector. This cable will also work with anything that has a OBD-connector. Add a power switch makes such a satisfying click."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"USB-CAN Analyzer")),(0,i.kt)("p",null,"If you want a CAN Bus Analyzer to debug your CAN Bus, this ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},"USB-CAN Analyzer")," is recommended."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg"}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implements CAN V2.0B speed up to ",(0,i.kt)("strong",{parentName:"li"},"1 Mb/s")),(0,i.kt)("li",{parentName:"ul"},"SPI Interface speed up to ",(0,i.kt)("strong",{parentName:"li"},"10 MHz")),(0,i.kt)("li",{parentName:"ul"},"Standard (",(0,i.kt)("strong",{parentName:"li"},"11 bit"),") and extended (",(0,i.kt)("strong",{parentName:"li"},"29 bit"),") data and remote frames"),(0,i.kt)("li",{parentName:"ul"},"Two receive buffers with prioritized message storage"),(0,i.kt)("li",{parentName:"ul"},"Industrial standard DB-9 connector"),(0,i.kt)("li",{parentName:"ul"},"LED indicators")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"CAN BUS Shield Work well with Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) as well as Arduino Leonardo (ATmega32U4).")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"DB9 Interface")," - to connect to OBDII Interface via a DBG-OBD Cable."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"V_OBD")," - It gets power from OBDII Interface (from DB9)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Led Indicator"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PWR"),": power"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TX"),": blink when the data is sending"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RX"),": blink when there's data receiving"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"INT"),": data interrupt"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Terminal")," - CAN_H and CAN_L"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Arduino UNO pin out")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Serial Grove connector")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"I2C Grove connector")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ICSP pins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"IC")," - MCP2551, a high-speed CAN transceiver (",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf"},"datasheet"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"IC")," - MCP2515, stand-alone CAN controller with SPI interface (",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf"},"datasheet"),")")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"When you use more than two CAN Bus Shield in one net, you should take the impedance into consideration.\nYou should either cut P1 in the PCB with a knife, or just remove R3 on the PCB.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pin map")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The FREE pin is available for the other usages.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DB9&OBDii Interface")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CS pin")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When we produced the new batch of CAN-BUS Shield V2, the wire of the back pads was embedded inside the PCB, although the wire between the pads is now not visible on the outside, the inside is still connected, if you want to change the wiring of the pads, you still need to cut the wiring in the PCB first.")),(0,i.kt)("p",null,"SPI_CS pin of V1.2 is connected to ",(0,i.kt)("strong",{parentName:"p"},"D9")," by default. If you want to change to ",(0,i.kt)("strong",{parentName:"p"},"D10"),", please follow below instructions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step1: Take a look at the backside of the PCBA, you will find a pad named CS.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu1.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step2: Cut the wire between pad9 and the middle pad.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu2.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step3:Solder the middle pad and pad 10.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/zhanshitu3.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be careful with the box cutter, it's easy to hurt yourself or the PCBA.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SPI pins")),(0,i.kt)("p",null,"The SPI pins (SCK, MISO, MOSI) are routed to the ICSP pins by default. But for some boards, the SPI pins are located at D11~D13. if this happens, you need make some change to the PCBA. Take a look at the backside of the PCBA, there're three pads, MOSI, MISO and SCK, they are connected to A by default. You can change them to B if needed."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For Arduino UNO, Arduino Mega, Arduino Leonardo and any others AVR based Arduino boards, it works well by default setting.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Be careful when you are going to change SPI pins, it's easy to hurt yourself or the PCBA.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Here's a simple example to show you how CAN-BUS Shield works. In this example we need 2 pieces of CAN-BUS Shields as well as Arduino or Seeeduino."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This example is built under ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip"},"Arduino IDE version 1.6.9"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP1: What do we need")),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h3",null,"Name")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Function")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Qty")),(0,i.kt)("td",null,(0,i.kt)("h3",null,"Link"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"CAN-BUS Shield")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"CAN Bus communication")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"2")),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html",target:"_blank"},(0,i.kt)("span",null,"Link")))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("h4",null,"Seeeduino V4.2")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"Controller")),(0,i.kt)("td",null,(0,i.kt)("h4",null,"2")),(0,i.kt)("td",null,(0,i.kt)("a",{href:"https://www.seeedstudio.com/item_detail.html?p_id=2517",target:"_blank"},(0,i.kt)("span",null,"Link")))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP2: Hardware Connection")),(0,i.kt)("p",null,"Insert each CAN-BUS Shield into Seeeduino V4.2, and connect the 2 CAN-BUS Shield together via 2 jumper wires. Shown as below images."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"CAN_H to CAN_H, CAN_L to CAN_L")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP3: Software")),(0,i.kt)("p",null,"Please follow ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an arduino library")," procedures to install CAN BUS shield library."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_CAN"},(0,i.kt)("strong",{parentName:"a"},"Seeed_Arduino_CAN"))," Arduino library here.")),(0,i.kt)("p",null,"Install the library to your Arduino IDE when it is downloaded."),(0,i.kt)("p",null,"One of the node (a node means Seeeduino + CAN_BUS Shield) acts as master, the other acts as slaver. The master will send data to slaver constantly."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each node can act as master before the code being uploaded.")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("strong",{parentName:"p"},"send")," example (",(0,i.kt)("strong",{parentName:"p"},"File > Examples > Seeed_Arduino_CAN > send"),") and upload to the ",(0,i.kt)("strong",{parentName:"p"},"master"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/example.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Or copy the following to the Arduino IDE and upload:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include "mcp2515_can.h"\n\n/*SAMD core*/\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n    #define SERIAL SerialUSB\n#else\n    #define SERIAL Serial\n#endif\n\nconst int SPI_CS_PIN = 9;\nmcp2515_can CAN(SPI_CS_PIN); // Set CS pin\n\nvoid setup() {\n    SERIAL.begin(115200);\n    while(!Serial){};\n\n    while (CAN_OK != CAN.begin(CAN_500KBPS)) {             // init can bus : baudrate = 500k\n        SERIAL.println("CAN BUS Shield init fail");\n        SERIAL.println(" Init CAN BUS Shield again");\n        delay(100);\n    }\n    SERIAL.println("CAN BUS Shield init ok!");\n}\n\nunsigned char stmp[8] = {0, 0, 0, 0, 0, 0, 0, 0};\nvoid loop() {\n    // send data:  id = 0x00, standrad frame, data len = 8, stmp: data buf\n    stmp[7] = stmp[7] + 1;\n    if (stmp[7] == 100) {\n        stmp[7] = 0;\n        stmp[6] = stmp[6] + 1;\n\n        if (stmp[6] == 100) {\n            stmp[6] = 0;\n            stmp[5] = stmp[6] + 1;\n        }\n    }\n\n    CAN.sendMsgBuf(0x00, 0, 8, stmp);\n    delay(100);                       // send data per 100ms\n    SERIAL.println("CAN BUS sendMsgBuf ok!");\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP4: View Result")),(0,i.kt)("p",null,"Open the Serial Monitor of Arduino IDE(",(0,i.kt)("strong",{parentName:"p"},"slaver"),"), you will get the data sent from the master."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("h3",{id:"1set-the-baud-rate"},"1.Set the Baud rate"),(0,i.kt)("p",null,"This function is used to initialize the baud rate of the CAN Bus system."),(0,i.kt)("p",null,"The available baud rates are listed as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define CAN_5KBPS    1\n#define CAN_10KBPS   2\n#define CAN_20KBPS   3\n#define CAN_25KBPS   4\n#define CAN_31K25BPS 5\n#define CAN_33KBPS   6\n#define CAN_40KBPS   7\n#define CAN_50KBPS   8\n#define CAN_80KBPS   9\n#define CAN_83K3BPS  10\n#define CAN_95KBPS   11\n#define CAN_100KBPS  12\n#define CAN_125KBPS  13\n#define CAN_200KBPS  14\n#define CAN_250KBPS  15\n#define CAN_500KBPS  16\n#define CAN_666kbps  17\n#define CAN_1000KBPS 18\n")),(0,i.kt)("h3",{id:"2set-receive-mask-and-filter"},"2.Set Receive Mask and Filter"),(0,i.kt)("p",null,"There are ",(0,i.kt)("strong",{parentName:"p"},"2")," receive mask registers and ",(0,i.kt)("strong",{parentName:"p"},"5")," filter registers on the controller chip that guarantee you getting data from the target device. They are useful especially in a large network  consisting of numerous nodes."),(0,i.kt)("p",null,"We provide two functions for you to utilize these mask and filter registers. They are:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mask:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Filter:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"num")," represents which register to use. You can fill 0 or 1 for mask and 0 to 5 for filter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ext")," represents the status of the frame. 0 means it's a mask or filter for a standard frame. 1 means it's for a extended frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ulData")," represents the content of the mask of filter.")),(0,i.kt)("h3",{id:"3check-receive"},"3.Check Receive"),(0,i.kt)("p",null,"The MCP2515 can operate in either a polled mode, where the software checks for a received frame, or using additional pins to signal that a frame has been received or transmit completed."),(0,i.kt)("p",null,"Use the following function to poll for received frames."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"INT8U MCP_CAN::checkReceive(void);\n")),(0,i.kt)("p",null,"The function will return 1 if a frame arrives, and 0 if nothing arrives."),(0,i.kt)("h3",{id:"4get-can-id"},"4.Get CAN ID"),(0,i.kt)("p",null,'When some data arrive, you can use the following function to get the CAN ID of the "send" node.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"INT32U MCP_CAN::getCanId(void)\n")),(0,i.kt)("h3",{id:"5send-data"},"5.Send Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);\n")),(0,i.kt)("p",null,"It is a function to send data onto the bus. In which:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," represents where the data comes from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ext")," represents the status of the frame. '0' means standard frame. '1' means extended frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"len")," represents the length of this frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data_buf")," is the content of this message.")),(0,i.kt)("p",null,"For example, In the 'send' example, we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};\nCAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.\n")),(0,i.kt)("h3",{id:"6receive-data"},"6.Receive Data"),(0,i.kt)("p",null,"The following function is used to receive data on the 'receive' node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"CAN.readMsgBuf(unsigned char len, unsigned char buf);\n")),(0,i.kt)("p",null,"In conditions that masks and filters have been set. This function can only get frames that meet the requirements of masks and filters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"len")," represents the data length."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"buf")," is where you store the data.")),(0,i.kt)("h3",{id:"7init_cs"},"7.init_CS"),(0,i.kt)("p",null,"it is very usefule for you to use two CAN-BUS shields with one Arduino.we provide CS_CAN pin to select for you.if you cannot kown how to use CS_CAN pin , you can go to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/CAN-BUS_Shield_V2.0/#cs_can-pin"},"CS_CAN pin")," to learn."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void MCP_CAN::init_CS(byte _CS)\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"_CS")," represents what you select pin.(9 or 10)")),(0,i.kt)("h2",{id:"generate-a-new-baudrate"},"Generate a New BaudRate"),(0,i.kt)("p",null,"We had provided many frequently-used baud rates, as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define CAN_5KBPS    1\n#define CAN_10KBPS   2\n#define CAN_20KBPS   3\n#define CAN_25KBPS   4\n#define CAN_31KBPS   5\n#define CAN_33KBPS   6\n#define CAN_40KBPS   7\n#define CAN_50KBPS   8\n#define CAN_80KBPS   9\n#define CAN_83KBPS   10\n#define CAN_95KBPS   11\n#define CAN_100KBPS  12\n#define CAN_125KBPS  13\n#define CAN_200KBPS  14\n#define CAN_250KBPS  15\n#define CAN_500KBPS  16\n#define CAN_666KBPS  17\n#define CAN_1000KBPS 18\n")),(0,i.kt)("p",null,"Yet you may still can't find the rate you want. Here we provide a software to help you to calculate the baud rate you need."),(0,i.kt)("p",null,"Click ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip"},"here")," to download the software, it's in Chinese, but never mind, it's easy to use."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg",alt:"pir",width:200,height:"auto"})),(0,i.kt)("p",null,"Open the software, what you need to do is to set the baud rate you want, and then do some simple setting, then click ",(0,i.kt)("strong",{parentName:"p"},"calculate"),"."),(0,i.kt)("p",null,"Then you will get some data, cfg1, cfg2 and cfg3."),(0,i.kt)("p",null,"You need to add some code to the library."),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"mcp_can_dfs.h"),", you need to add below code at about line 272:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx is the baud rate you need\n#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)\n#define MCP_16MHz_xxxkBPS_CFG3 (cfg2)\n")),(0,i.kt)("p",null,"Then let's go to about line 390, add below code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#define CAN_xxxKBPS NUM       // xxx is the baudrate you need, and NUM is a number, you need to get a different from the other rates.\n")),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"mcp_can.cpp"),", goto the function ",(0,i.kt)("strong",{parentName:"p"},"mcp2515_configRate"),"(at about line 190), then add below code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"case (CAN_xxxKBPS):\n    cfg1 = MCP_16MHz_xxxkBPS_CFG1;\n    cfg2 = MCP_16MHz_xxxkBPS_CFG2;\n    cfg3 = MCP_16MHz_xxxkBPS_CFG3;\n    break;\n")),(0,i.kt)("p",null,"Then you can use the baud rate you need. And please give me a pull request at github when you use a new rate, so I can add it to the library to help other guys."),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,"If you want to make some awesome projects with CAN-BUS shield, here are some projects for reference."),(0,i.kt)("h3",{id:"volkswagen-can-bus-gaming"},"Volkswagen CAN BUS Gaming"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG",alt:"pir",width:600,height:"auto"})),"Ever wanted to play a car/truck simulator with a real dashboard on your PC? Me too! I'm trying to control a VW Polo 6R dashboard via CAN Bus with an Arduino Uno and a Seeed CAN Bus Shield. Inspired by Silas Parker. Thanks Sepp and Is0-Mick for their great support!",(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://community.seeedstudio.com/project_detail.html?id=291",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png"}))),(0,i.kt)("h3",{id:"hack-your-vehicle-can-bus"},"Hack your vehicle CAN-BUS"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg",alt:"pir",width:600,height:"auto"})),"Modern Vehicles all come equipped with a CAN-BUS Controller Area Network, Instead of having a million wires running back and forth from various devices in your car to the battery, its making use of a more clever system.",(0,i.kt)("p",null,"All electronic functions are connected to the TIPM, (Totally integrated Power Module), such as solenoids/relays to lock the doors or mini motors to wind the windows etc."),(0,i.kt)("p",null,"From each node (IE Switch pod that controls your windows or electric door locks) it broadcasts a message across the CAN. When the TIPM detects a valid message it will react accordingly like, lock the doors, switch on lights and so on."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png"}))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1: I can't get data from other CAN device.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if the connection is right"),(0,i.kt)("li",{parentName:"ul"},"Check if the baud rate setting is right")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q2: The serial monitor print Init Fail.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if the CS pin setting is matched with the code. For CAN Bus Shield V1.1/1.2, CS pin is connected to D9, others are to D10.")),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.pdf"},"CAN-BUS Shield V2.0 Schmatics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%20Shield%20%20v2.0.rar"},"Schematic & PCB of CAN-BUS Shield V2.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/CAN_BUS_Shield"},"Arduino Library for CAN-BUS Shield")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf"},"MCP2515 datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf"},"MCP2551 datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Demo]"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE"},"An OBD Demo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Tool]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip"},"MCP2515 Baud Rate Tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Tool]"),(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},"USB-CAN Analyzer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Cable]"),(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html"},"DB9 to OBD2 Cable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Drawing]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.pdf"},"CAN BUS Shield v2.0 Drawing in PDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Drawing]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/res/CAN-BUS%C2%A0SHIELD%C2%A0V2.0.dxf.zip"},"CAN BUS Shield v2.0 Drawing in DXF"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}h.isMDXComponent=!0}}]);
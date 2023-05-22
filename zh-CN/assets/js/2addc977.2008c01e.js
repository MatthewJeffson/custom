"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15266],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),h=i,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||r;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},45137:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={description:"CAN-BUS Shield V1.2",title:"CAN-BUS Shield V1.2",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/CAN-BUS_Shield_V1.2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/CAN-BUS_Shield_V1.2",id:"Top_Brand/Arduino/shield/CAN-BUS_Shield_V1.2",title:"CAN-BUS Shield V1.2",description:"CAN-BUS Shield V1.2",source:"@site/docs/Top_Brand/Arduino/shield/CAN-BUS_Shield_V1.2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/CAN-BUS_Shield_V1.2",permalink:"/custom/zh-CN/CAN-BUS_Shield_V1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/CAN-BUS_Shield_V1.2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676476800,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"CAN-BUS Shield V1.2",title:"CAN-BUS Shield V1.2",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/CAN-BUS_Shield_V1.2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Shield Bot V1.2",permalink:"/custom/zh-CN/Shield_Bot_V1.2"},next:{title:"EL Shield",permalink:"/custom/zh-CN/EL_Shield"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"APIs",id:"apis",level:2},{value:"1. Set the Baud rate",id:"1-set-the-baud-rate",level:3},{value:"2. Set Receive Mask and Filter",id:"2-set-receive-mask-and-filter",level:3},{value:"3. Check Receive",id:"3-check-receive",level:3},{value:"4. Get CAN ID",id:"4-get-can-id",level:3},{value:"5. Send Data",id:"5-send-data",level:3},{value:"6. Receive Data",id:"6-receive-data",level:3},{value:"Generate a New BaudRate",id:"generate-a-new-baudrate",level:2},{value:"Projects",id:"projects",level:2},{value:"Volkswagen CAN BUS Gaming",id:"volkswagen-can-bus-gaming",level:3},{value:"Hack your vehicle CAN-BUS",id:"hack-your-vehicle-can-bus",level:3},{value:"FAQ",id:"faq",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Can_bus_shield_all.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CAN-BUS")," is a common industrial bus because of its long travel distance, medium communication speed and high reliability. It is commonly found on modern machine tools, such as an automotive diagnostic bus."),(0,i.kt)("p",null,"This CAN-BUS Shield adopts ",(0,i.kt)("strong",{parentName:"p"},"MCP2515")," CAN Bus controller with SPI interface and ",(0,i.kt)("strong",{parentName:"p"},"MCP2551")," CAN transceiver to give your Arduino/Seeeduino CAN-BUS capability. With an ",(0,i.kt)("strong",{parentName:"p"},"OBD-II")," converter cable added on and the OBD-II library imported, you are ready to build an onboard diagnostic device or data logger."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Version")),(0,i.kt)("p",null,"This document applies to the following version of products:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Released Date"),(0,i.kt)("th",{parentName:"tr",align:null},"How to Buy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CAN BUS Shield V1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Oct 14, 2012"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png",alt:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CAN BUS Shield V1.1"),(0,i.kt)("td",{parentName:"tr",align:null},"Aug 10, 2013"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png",alt:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CAN BUS Shield V1.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Jan 5, 2015"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/EOL.png",alt:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CAN BUS Shield V2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Aug 01,2017"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/CAN-BUS-Shield-V2-p-2921.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:200,height:38,border:0})))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What's new in CAN BUS Shield V1.2")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pads on the backside of PCBA"),(0,i.kt)("li",{parentName:"ul"},"Change terminal resistor to 120 Ohm")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Alternative Choice")),(0,i.kt)("p",null,"If your project is space limited and also don't need other fuctions except CAN-BUS, here is a Grove CAN-BUS module which is Arduino compatible, more compact and cost effective, please click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html"},"here")," to visit its page."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Serial-CAN-BUS-Module-based-on-MCP2551-and-MCP2515-p-2924.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/CAN-BUS-Shield-V2.0/img/canbus_arduino.png",alt:null}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What if I want to connect this shield to my car")),(0,i.kt)("p",null,"If you want to read data or control your car, there's an OBD>DB9 cable available for you, ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html"},"this cable")," make easier to connect to OBD-connector and DB9-connector. This cable will also work with anything that has a OBD-connector. Add a power switch makes such a satisfying click."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/obd_cable.jpg",alt:null}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"USB-CAN Analyzer")),(0,i.kt)("p",null,"If you want a CAN Bus Analyzer to debug your CAN Bus, this ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},"USB-CAN Analyzer")," is recommended."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/usb_can.jpg",alt:null}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Implements CAN V2.0B speed up to ",(0,i.kt)("strong",{parentName:"li"},"1 Mb/s")),(0,i.kt)("li",{parentName:"ul"},"SPI Interface speed up to ",(0,i.kt)("strong",{parentName:"li"},"10 MHz")),(0,i.kt)("li",{parentName:"ul"},"Standard (",(0,i.kt)("strong",{parentName:"li"},"11 bit"),") and extended (",(0,i.kt)("strong",{parentName:"li"},"29 bit"),") data and remote frames"),(0,i.kt)("li",{parentName:"ul"},"Two receive buffers with prioritized message storage"),(0,i.kt)("li",{parentName:"ul"},"Industrial standard DB-9 connector"),(0,i.kt)("li",{parentName:"ul"},"LED indicators")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"CAN BUS Shield Work well with Arduino UNO (ATmega328), Arduino Mega (ATmega1280/2560) as well as Arduino Leonardo (ATmega32U4).")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_1.png",alt:null})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"DB9 Interface")," - to connect to OBDII Interface via a DBG-OBD Cable."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"V_OBD")," - It gets power from OBDII Interface (from DB9)"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Led Indicator"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PWR"),": power"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TX"),": blink when the data is sending"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"RX"),": blink when there's data receiving"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"INT"),": data interrupt"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Terminal")," - CAN_H and CAN_L"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Arduino UNO pin out")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Serial Grove connector")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"I2C Grove connector")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"ICSP pins")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"IC")," - MCP2551, a high-speed CAN transceiver (",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf"},"datasheet"),")"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"IC")," - MCP2515, stand-alone CAN controller with SPI interface (",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf"},"datasheet"),")")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"When you use more than two CAN Bus Shield in one net, you should take the impedance into consideration.\nYou should either cut P1 in the PCB with a knife, or just remove R3 on the PCB.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pin map")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/PINMAP.png",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The FREE pin is available for the other usages.\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DB9&OBDii Interface")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/OBD.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"CS pin")),(0,i.kt)("p",null,"SPI_CS pin of V1.2 is connected to ",(0,i.kt)("strong",{parentName:"p"},"D9")," by default. If you want to change to ",(0,i.kt)("strong",{parentName:"p"},"D10"),", please follow below instructions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step1: Take a look at the backside of the PCBA, you will find a pad named CS.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/hardware_overview_pins_setting.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step2: Cut the wire between pad9 and the middle pad.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/cut%20this%20wire%20with%20box%20cutter.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step3:Solder the middle pad and pad 10.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/sodder%20the%20middle%20pad%20and%20pad%2010.png",alt:null})),(0,i.kt)("admonition",{title:"warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be careful with the box cutter, it's easy to hurt yourself or the PCBA.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SPI pins")),(0,i.kt)("p",null,"The SPI pins (SCK, MISO, MOSI) are routed to the ICSP pins by default. But for some boards, the SPI pins are located at D11~D13. if this happens, you need make some change to the PCBA. Take a look at the backside of the PCBA, there're three pads, MOSI, MISO and SCK, they are connected to A by default. You can change them to B if needed."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For Arduino UNO, Arduino Mega, Arduino Leonardo and any others AVR based Arduino boards, it works well by default setting.")),(0,i.kt)("admonition",{title:"warning",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Be careful when you are going to change SPI pins, it's easy to hurt yourself or the PCBA.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Here's a simple example to show you how CAN-BUS Shield works. In this example we need 2 pieces of CAN-BUS Shields as well as Arduino or Seeeduino."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This example is built under ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/download_handler.php?f=/arduino-1.6.9-windows.zip"},"Arduino IDE version 1.6.9"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP1: What do we need")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Qty"),(0,i.kt)("th",{parentName:"tr",align:null},"Link"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CAN-BUS Shield"),(0,i.kt)("td",{parentName:"tr",align:null},"CAN Bus communication"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/CANBUS-Shield-V12-p-2256.html"},"link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Controller"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/item_detail.html?p_id=2517"},"link"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Jumper Wire"),(0,i.kt)("td",{parentName:"tr",align:null},"connection"),(0,i.kt)("td",{parentName:"tr",align:null},"2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/item_detail.html?p_id=234"},"link"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP2: Hardware Connection")),(0,i.kt)("p",null,"Insert each CAN-BUS Shield into Seeeduino V4.2, and connect the 2 CAN-BUS Shield together via 2 jumper wires. Shown as below images."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/connection.png",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"CAN_H to CAN_H, CAN_L to CAN_L\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP3: Software")),(0,i.kt)("p",null,"Please follow ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an arduino library")," procedures to install CAN BUS shield library."),(0,i.kt)("p",null,"Click on below button to download the library."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/CAN_BUS_Shield"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/download_library.png",alt:null}))),(0,i.kt)("p",null,"Install the library to your Arduino IDE when it is downloaded."),(0,i.kt)("p",null,"One of the node (a node means Seeeduino + CAN_BUS Shield) acts as master, the other acts as slaver. The master will send data to slaver constantly."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each node can act as master before the code being uploaded.")),(0,i.kt)("p",null,"Open the ",(0,i.kt)("strong",{parentName:"p"},"send")," example (",(0,i.kt)("strong",{parentName:"p"},"File > Examples > CAN_BUS_Shield-master > send"),") and upload to the ",(0,i.kt)("strong",{parentName:"p"},"master"),".\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/send%20example.png",alt:null}),"\nOpen the ",(0,i.kt)("strong",{parentName:"p"},"receive_check")," example (",(0,i.kt)("strong",{parentName:"p"},"File > Examples > CAN_BUS_Shield-master > receive_check"),") and upload to the ",(0,i.kt)("strong",{parentName:"p"},"slaver"),".\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/receive%20check%20example.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"STEP4: View Result")),(0,i.kt)("p",null,"Open the Serial Monitor of Arduino IDE(",(0,i.kt)("strong",{parentName:"p"},"slaver"),"), you will get the data sent from the master."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/serial_monitor.png",alt:null})),(0,i.kt)("h2",{id:"apis"},"APIs"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"1-set-the-baud-rate"},"1. Set the Baud rate"),(0,i.kt)("p",null,"This function is used to initialize the baud rate of the CAN Bus system."),(0,i.kt)("p",null,"The available baud rates are listed as follows:"),(0,i.kt)("p",null," #define CAN_5KBPS    1\n#define CAN_10KBPS   2\n#define CAN_20KBPS   3\n#define CAN_25KBPS   4\n#define CAN_31K25BPS 5\n#define CAN_33KBPS   6\n#define CAN_40KBPS   7\n#define CAN_50KBPS   8\n#define CAN_80KBPS   9\n#define CAN_83K3BPS  10\n#define CAN_95KBPS   11\n#define CAN_100KBPS  12\n#define CAN_125KBPS  13\n#define CAN_200KBPS  14\n#define CAN_250KBPS  15\n#define CAN_500KBPS  16\n#define CAN_666kbps  17\n#define CAN_1000KBPS 18"),(0,i.kt)("h3",{id:"2-set-receive-mask-and-filter"},"2. Set Receive Mask and Filter"),(0,i.kt)("p",null,"There are ",(0,i.kt)("strong",{parentName:"p"},"2")," receive mask registers and ",(0,i.kt)("strong",{parentName:"p"},"5")," filter registers on the controller chip that guarantee you getting data from the target device. They are useful especially in a large network  consisting of numerous nodes."),(0,i.kt)("p",null,"We provide two functions for you to utilize these mask and filter registers. They are:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mask:")),(0,i.kt)("p",null," init_Mask(unsigned char num, unsigned char ext, unsigned char ulData);"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Filter:")),(0,i.kt)("p",null," init_Filt(unsigned char num, unsigned char ext, unsigned char ulData);"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"num")," represents which register to use. You can fill 0 or 1 for mask and 0 to 5 for filter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ext")," represents the status of the frame. 0 means it's a mask or filter for a standard frame. 1 means it's for a extended frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ulData")," represents the content of the mask of filter.")),(0,i.kt)("h3",{id:"3-check-receive"},"3. Check Receive"),(0,i.kt)("p",null,"The MCP2515 can operate in either a polled mode, where the software checks for a received frame, or using additional pins to signal that a frame has been received or transmit completed."),(0,i.kt)("p",null,"Use the following function to poll for received frames."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INT8U MCP_CAN::checkReceive(void);\n")),(0,i.kt)("p",null,"The function will return 1 if a frame arrives, and 0 if nothing arrives."),(0,i.kt)("h3",{id:"4-get-can-id"},"4. Get CAN ID"),(0,i.kt)("p",null,'When some data arrive, you can use the following function to get the CAN ID of the "send" node.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"INT32U MCP_CAN::getCanId(void)\n")),(0,i.kt)("h3",{id:"5-send-data"},"5. Send Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CAN.sendMsgBuf(INT8U id, INT8U ext, INT8U len, data_buf);\n")),(0,i.kt)("p",null,"It is a function to send data onto the bus. In which:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"id")," represents where the data comes from."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ext")," represents the status of the frame. '0' means standard frame. '1' means extended frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"len")," represents the length of this frame."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"data_buf")," is the content of this message.")),(0,i.kt)("p",null,"For example, In the 'send' example, we have:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unsigned char stmp[8] = {0, 1, 2, 3, 4, 5, 6, 7};\nCAN.sendMsgBuf(0x00, 0, 8, stmp); //send out the message 'stmp' to the bus and tell other devices this is a standard frame from 0x00.\n")),(0,i.kt)("h3",{id:"6-receive-data"},"6. Receive Data"),(0,i.kt)("p",null,"The following function is used to receive data on the 'receive' node:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CAN.readMsgBuf(unsigned char len, unsigned char buf);\n")),(0,i.kt)("p",null,"In conditions that masks and filters have been set. This function can only get frames that meet the requirements of masks and filters."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"len")," represents the data length."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"buf")," is where you store the data.")),(0,i.kt)("h2",{id:"generate-a-new-baudrate"},"Generate a New BaudRate"),(0,i.kt)("p",null,"We had provided many frequently-used baud rates, as below:"),(0,i.kt)("p",null," #define CAN_5KBPS    1\n#define CAN_10KBPS   2\n#define CAN_20KBPS   3\n#define CAN_25KBPS   4\n#define CAN_31KBPS   5\n#define CAN_33KBPS   6\n#define CAN_40KBPS   7\n#define CAN_50KBPS   8\n#define CAN_80KBPS   9\n#define CAN_83KBPS   10\n#define CAN_95KBPS   11\n#define CAN_100KBPS  12\n#define CAN_125KBPS  13\n#define CAN_200KBPS  14\n#define CAN_250KBPS  15\n#define CAN_500KBPS  16\n#define CAN_666KBPS  17\n#define CAN_1000KBPS 18"),(0,i.kt)("p",null,"Yet you may still can't find the rate you want. Here we provide a software to help you to calculate the baud rate you need."),(0,i.kt)("p",null,"Click ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip"},"here")," to download the software, it's in Chinese, but never mind, it's easy to use."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/CAN_BUS_Shield_SetBaud.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This software supports Windows system only. If you can't open it, please feel free to contact ",(0,i.kt)("a",{parentName:"p",href:"mailto:loovee@seeed.cc"},"loovee@seeed.cc")," for support.")),(0,i.kt)("p",null,"Open the software, what you need to do is to set the baud rate you want, and then do some simple setting, then click ",(0,i.kt)("strong",{parentName:"p"},"calculate"),"."),(0,i.kt)("p",null,"Then you will get some data, cfg1, cfg2 and cfg3."),(0,i.kt)("p",null,"You need to add some code to the library."),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"mcp_can_dfs.h"),", you need to add below code at about line 272:"),(0,i.kt)("p",null," #define MCP_16MHz_xxxkBPS_CFG1 (cfg1)    // xxx is the baud rate you need\n#define MCP_16MHz_xxxkBPS_CFG2 (cfg2)\n#define MCP_16MHz_xxxkBPS_CFG3 (cfg2)"),(0,i.kt)("p",null,"Then let's go to about line 390, add below code:"),(0,i.kt)("p",null," #define CAN_xxxKBPS NUM       // xxx is the baudrate you need, and NUM is a number, you need to get a different from the other rates."),(0,i.kt)("p",null,"Open ",(0,i.kt)("strong",{parentName:"p"},"mcp_can.cpp"),", goto the function ",(0,i.kt)("strong",{parentName:"p"},"mcp2515_configRate"),"(at about line 190), then add below code:"),(0,i.kt)("p",null," case (CAN_xxxKBPS):\ncfg1 = MCP_16MHz_xxxkBPS_CFG1;\ncfg2 = MCP_16MHz_xxxkBPS_CFG2;\ncfg3 = MCP_16MHz_xxxkBPS_CFG3;\nbreak;"),(0,i.kt)("p",null,"Then you can use the baud rate you need. And please give me a pull request at github when you use a new rate, so I can add it to the library to help other guys."),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"If you want to make some awesome projects with CAN-BUS shield, here are some projects for reference."),(0,i.kt)("h3",{id:"volkswagen-can-bus-gaming"},"Volkswagen CAN BUS Gaming"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project1.JPG",alt:null})),(0,i.kt)("p",null,"Ever wanted to play a car/truck simulator with a real dashboard on your PC? Me too! I'm trying to control a VW Polo 6R dashboard via CAN Bus with an Arduino Uno and a Seeed CAN Bus Shield. Inspired by Silas Parker. Thanks Sepp and Is0-Mick for their great support!"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/project_detail.html?id=291"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png",alt:null}))),(0,i.kt)("h3",{id:"hack-your-vehicle-can-bus"},"Hack your vehicle CAN-BUS"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/project2.jpg",alt:null})),(0,i.kt)("p",null,"Modern Vehicles all come equipped with a CAN-BUS Controller Area Network, Instead of having a million wires running back and forth from various devices in your car to the battery, its making use of a more clever system."),(0,i.kt)("p",null,"All electronic functions are connected to the TIPM, (Totally integrated Power Module), such as solenoids/relays to lock the doors or mini motors to wind the windows etc."),(0,i.kt)("p",null,"From each node (IE Switch pod that controls your windows or electric door locks) it broadcasts a message across the CAN. When the TIPM detects a valid message it will react accordingly like, lock the doors, switch on lights and so on."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.instructables.com/id/Hack-your-vehicle-CAN-BUS-with-Arduino-and-Seeed-C/"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/image/Wiki_makeitnow_logo.png",alt:null}))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1: I can't get data from other CAN device.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if the connection is right"),(0,i.kt)("li",{parentName:"ul"},"Check if the baud rate setting is right")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q2: The serial monitor print Init Fail.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check if the CS pin setting is matched with the code. For CAN Bus Shield V1.1/1.2, CS pin is connected to D9, others are to D10.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q3. Where can I find technical support if I have some other issues.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can post a question to ",(0,i.kt)("a",{parentName:"li",href:"https://forum.seeedstudio.com/"},"Seeed Forum"),".")),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010PDF\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2.pdf"},"CAN-BUS Shield V1.2 Schmatics")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Eagle\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN-BUS_Shield_v1.2_sch_pcb.zip"},"Schematic of CAN-BUS Shield V1.2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Library\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/CAN_BUS_Shield"},"Arduino Library for CAN-BUS Shield")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Datasheet\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/MCP2515.pdf"},"MCP2515 datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Datasheet\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/Mcp2551.pdf"},"MCP2551 datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Demo\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/CANBUS_SHIELD_OBD_RECIPLE"},"An OBD Demo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Tool\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/CAN_BUS_Shield/resource/CAN_Baudrate_CalcV1.3.zip"},"MCP2515 Baud Rate Tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Tool\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},"USB-CAN Analyzer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u3010Cable\u3011"),(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/DB9-to-OBD2-Cable-With-Switch-p-2872.html"},"DB9 to OBD2 Cable"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
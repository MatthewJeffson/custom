"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=m(n),c=r,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var m=2;m<l;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72624:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const l={description:"Rephone Core 2G-AtmelSAMD21",title:"Rephone Core 2G-AtmelSAMD21",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Rephone_core_2G-AtmelSAMD21",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,i={unversionedId:"Seeed_Elderly/rePhone/Rephone_core_2G-AtmelSAMD21",id:"Seeed_Elderly/rePhone/Rephone_core_2G-AtmelSAMD21",title:"Rephone Core 2G-AtmelSAMD21",description:"Rephone Core 2G-AtmelSAMD21",source:"@site/docs/Seeed_Elderly/rePhone/Rephone_core_2G-AtmelSAMD21.md",sourceDirName:"Seeed_Elderly/rePhone",slug:"/Rephone_core_2G-AtmelSAMD21",permalink:"/custom/zh-CN/Rephone_core_2G-AtmelSAMD21",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Rephone_core_2G-AtmelSAMD21.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Rephone Core 2G-AtmelSAMD21",title:"Rephone Core 2G-AtmelSAMD21",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Rephone_core_2G-AtmelSAMD21",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Rephone Core 2G-Atmel32u4",permalink:"/custom/zh-CN/RePhone_core_2G-Atmel32u4"},next:{title:"Retro Phone Kit",permalink:"/custom/zh-CN/Retro Phone Kit"}},p={},m=[{value:"Features",id:"features",level:2},{value:"Arduino/Processor",id:"arduinoprocessor",level:3},{value:"SIM800H",id:"sim800h",level:3},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Install the Driver (For Windows)",id:"install-the-driver-for-windows",level:3},{value:"AT Command Mode",id:"at-command-mode",level:2},{value:"Examples",id:"examples",level:2},{value:"RePhone Family",id:"rephone-family",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:m};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cover.jpg",alt:null})),(0,r.kt)("p",null,"RePhone is one of the most unique and interesting development board platform that created by Seeed Studio, ever since its first show on the stage of KickStarter, it has received tons of attention and support from makers all over the world because with RePhone you can not only DIY a special phone for yourself, but also enchant things around you with cellular connectivity."),(0,r.kt)("p",null,"The RePhone Core 2G-AtmelSAMD21 v1.0 is a new Arduino compatible RePhone core 2G board, which is based on Atmel\u2019s SAMD21 and SIM800H, Most features of RePhone Core 2G-AtmelSAMD21 v1.0 is the same as Xadow \u2013 GSM+BLE, such as offering rich range of communication protocols \u2013 GSM, GPRS, and Bluetooth, supporting quad-band 850/900/1800/1900Mz, and supporting 2G Nano SD card. But the solution of Atmel\u2019s SAMD21 plus SIM800H has dropped power consumption a lot comparing to Xadow \u2013 GSM+BLE. If you are looking for a high-performance and low power consumption Rephone core to enchant the world, the this new RePhone core 2G module is the best choice."),(0,r.kt)("admonition",{title:":",type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"The RePhone Core 2G-AtmelSAMD21 v1.0 is compatible with all the Xadow v2.0 except the Xadow 1.54 inch Touchscreen\nPlease connect a battery to the board if you want to use the GSM or GPRS function in case the power form USB is not enough and fail to communicate.\n"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"This product **DOESN'T** include a lopo-battery, and there's no lipo-battery sold at our Bazaar as well, any 3.7V lipo-battery will work.\n\nThis product **DOESN'T** include a Mic, Speaker and 3.5mm handset input, you need to buy a [Xadow Audio](https://www.seeedstudio.com/Xadow-Audio-p-2554.html) for those function.\n"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"arduinoprocessor"},"Arduino/Processor"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ATSAMD21G18 @ 48MHz with 3.3V logic/power"),(0,r.kt)("li",{parentName:"ul"},"Arduino compatible (based on Arduino Zero bootloader)"),(0,r.kt)("li",{parentName:"ul"},"Embedded with lithium battery management chip"),(0,r.kt)("li",{parentName:"ul"},"User button")),(0,r.kt)("h3",{id:"sim800h"},"SIM800H"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quad band850/900/1800/1900MHz"),(0,r.kt)("li",{parentName:"ul"},"GPRS multi-slot class 12/10"),(0,r.kt)("li",{parentName:"ul"},"GPRS mobile station class B"),(0,r.kt)("li",{parentName:"ul"},"Meet the GSM 2/2 + standard",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Class 4 (2 W @850/900MHz)"),(0,r.kt)("li",{parentName:"ul"},"Class 1 (1 W @1800/1900MHz)"))),(0,r.kt)("li",{parentName:"ul"},"bluetooth:compatible3.0+EDR"),(0,r.kt)("li",{parentName:"ul"},"FM:band limits 76~109MHz,Tuning step by step 50KHz"),(0,r.kt)("li",{parentName:"ul"},"Via ATcommand control 3GPP TS 27.007, 27.005 and SIMCOM enhance ATcommand set"),(0,r.kt)("li",{parentName:"ul"},"SIM USAT"),(0,r.kt)("li",{parentName:"ul"},"Low power"),(0,r.kt)("li",{parentName:"ul"},"Operating temperature range : -40 ~+85 \xb0C")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.kt)("td",{parentName:"tr",align:null},"ATSAMD21G18, 32-Bit ARM Cortex M0+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,r.kt)("td",{parentName:"tr",align:null},"7 mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,r.kt)("td",{parentName:"tr",align:null},"256 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,r.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EEPROM"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,r.kt)("td",{parentName:"tr",align:null},"48 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Lenght"),(0,r.kt)("td",{parentName:"tr",align:null},"68 mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Width"),(0,r.kt)("td",{parentName:"tr",align:null},"30 mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"12 gr.")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hw.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"1- "),"11pin Xadow Connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"2- "),"User Button(D3)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"3- "),"Micro USB connector for programming and power"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"4- "),"35pin Xadow Connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"5- "),"Jst1.0 Battery Connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"6- "),"Nano Sim Card (same to iPhone 5/6/7)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"7- "),"ATSAMD21G18 IC"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"8- "),"Charge status monitor LED",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"blink - no battery insert"),(0,r.kt)("li",{parentName:"ul"},"on - charging"),(0,r.kt)("li",{parentName:"ul"},"off - charge done"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"9- "),"IC - ETA6003(",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf"},"datasheet"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A- "),"SWD Debug port"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"B- "),"Antenna Connector"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"C- "),"I/O PIN pad"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"D- "),"SIM800H")),(0,r.kt)("p",null,"##Pin map"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png",alt:null}))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"[Click](https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/pinmap.png) to view larger image.\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"* INT1 connect to D7\n* INT2 connect to D12\n"))),(0,r.kt)("p",null,"##Arduino IDE"),(0,r.kt)("p",null,"After you download and install the ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},"latest Arduino IDE"),", there's something need to set up.\nOpen your Arduino IDE, and click on ",(0,r.kt)("strong",{parentName:"p"},"File > Preferences"),"\nCopy blow code to ",(0,r.kt)("strong",{parentName:"p"},"Additional Boards Manager URLs"),", and then ",(0,r.kt)("strong",{parentName:"p"},"OK")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/setting.png",alt:null})),(0,r.kt)("p",null,"Then let's go to ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board > Boards Manager")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/boards_manager.png",alt:null})),(0,r.kt)("p",null,"Click on the ",(0,r.kt)("strong",{parentName:"p"},"Install")," button and wait for minutes before the board is installed."),(0,r.kt)("p",null,"After the install is completed, you can find RePhone core 2G-AtmelSAMD21 at the bottom of ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/board_r2.png",alt:null})),(0,r.kt)("h3",{id:"install-the-driver-for-windows"},"Install the Driver (For Windows)"),(0,r.kt)("p",null,"When the first time to insert the board, you should get a USB COM device name RePhone 2G SAMD21 that need to install a driver. Click on the below button to download driver for the board."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/driver.png",alt:null}))),(0,r.kt)("p",null,"To make sure the driver was installed successful, open your Device Manager to see if ",(0,r.kt)("strong",{parentName:"p"},"RePhone 2G SAMD21")," exists."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/device_manager.png",alt:null})),(0,r.kt)("p",null,"###Hello World\nNow we can upload our first demo - Hello World to the board."),(0,r.kt)("p",null,"Open your Arduino IDE copy the blow code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'void setup()\n{\n    SerialUSB.begin(115200);\n}\n\nvoid loop()\n{\n    SerialUSB.println("Hello world!");\n    delay(1000);\n}\n')),(0,r.kt)("p",null,"And Then,"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Tools > Board > RePhone core 2G-AtmelSAMD21")),(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Tools > Port")," to select a right port number. (",(0,r.kt)("em",{parentName:"li"},"Don't choose COM1"),")")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/arduino_ide.png",alt:null})),(0,r.kt)("p",null,"Then click on the ",(0,r.kt)("strong",{parentName:"p"},"Upload")," button on the left-top of Arduino IDE, seconds later the sketch was uploaded successful."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload.png",alt:null})),(0,r.kt)("p",null,"If the uploading is success, you should the some info in red."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/upload_done.png",alt:null})),(0,r.kt)("p",null,'Open Serial Monitor of your Arduino IDE and you will get "Hello World" printed per seconds.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/hello_world.png",alt:null})),(0,r.kt)("h2",{id:"at-command-mode"},"AT Command Mode"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"RePhone core 2G board support AT command mode. TX/RX of SIM800H is connected to Serial1(D0/D1) of AtemlSAMD21."),(0,r.kt)("p",null,"Copy the below code and upload to your board."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include "atmelsamd21_gprs.h"\n\nvoid setup()\n{\n    SerialUSB.begin(115200);\n    while(!SerialUSB);\n\n    SerialUSB.println("RePhone core 2G - AtmelSAMD21 AT Command Test");\n    gsm.preInit();                  // power on\n\n    while(0 != gsm.init())\n    {\n        SerialUSB.println("GSM init error.");\n        delay(2000);\n    }\n\n    SerialUSB.println("GSM init ok.");\n}\n\nvoid loop()\n{\n    while(SerialUSB.available())Serial1.write(SerialUSB.read());\n    while(Serial1.available())SerialUSB.write(Serial1.read());\n}\n\n')),(0,r.kt)("p",null,"Open your Serial monitor and wait for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"GSM init ok.")),' printed on the monitor, then you can input a command.\nTry to input an "AT" to get an "OK".'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/cmd.png",alt:null})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"All command must be end with a new line(\\r\\n).\n"))),(0,r.kt)("p",null,"Click on below button to get detailed AT command documentation."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/img/at_cmd.png",alt:null}))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We had made many examples to show you how this module work.\nAt the every beginning, please"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Insert a nano SIM card"),(0,r.kt)("li",{parentName:"ol"},"Insert the antenna"),(0,r.kt)("li",{parentName:"ol"},"If you got a lipo-battery, insert it to the board as well")),(0,r.kt)("p",null,"Click on ",(0,r.kt)("strong",{parentName:"p"},"File > Examples")," then you can open those examples.\n###AtmelSAMD21_SIM800"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Bluetooth_AT_Command_And_Music_Play"),": Play music via bluetooth"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GSM_GPRS_HTTP_GET"),": Http get hello.txt from ",(0,r.kt)("a",{parentName:"li",href:"http://mbed.org"},"mbed.org")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GSM_Receive_SMS"),": Receive SMS"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GSM_Voice_Call"),": Receive voice call")),(0,r.kt)("p",null,"###RePhone_API_for_Arduino"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"gps_test"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html"},"Xadow GPS v2")," example"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ledmatrix_test"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html"},"Xadow LED 5x7")," example"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"nfc_test"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html"},"Xadow NFC v2")," example"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"sensorhub_test"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html"},"Xadow Basic Sensors")," example"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ws2812_test"),": ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Xadow-Duino-p-2556.html"},"Xadow Duino")," example")),(0,r.kt)("p",null,"###rephone_button"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"button_test"),": On-board button test")),(0,r.kt)("p",null,"###rephone_lcm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"lcm_display_test"),": LCD display exampledkdsafdfds")),(0,r.kt)("p",null,"###rephone_menu_all"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"rephone_menu_test"))),(0,r.kt)("p",null,"###TwilioMessage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"message_test"),": Twilio Message Send/Receive")),(0,r.kt)("h2",{id:"rephone-family"},"RePhone Family"),(0,r.kt)("p",null,"There are several chainable add-on modules to extend the features and functionalities \u2013 Xadow Audio, Xadow LED 5x7, Xadow Basic Sensors, Xadow Duino, Xadow GPS v2 and Xadow NFC v2."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"GPS v2"),(0,r.kt)("th",{parentName:"tr",align:null},"Basic Sensors"),(0,r.kt)("th",{parentName:"tr",align:null},"NFC v2"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Rephone/image/product1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Rephone/image/product2.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Rephone/image/product3.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Xadow-GPS-v2-p-2557.html"},"Get More Details")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Xadow-Basic-Sensors-p-2555.html"},"Get More Details")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html"},"Get More Details"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"LED 5 x 7"),(0,r.kt)("th",{parentName:"tr",align:null},"Audio"),(0,r.kt)("th",{parentName:"tr",align:null},"Xadow GSM Breakout"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Rephone/image/product4.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Rephone/image/product7.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Rephone/image/product8.jpg",alt:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Xadow-LED-5-x-7-p-2561.html"},"Get More Details")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Xadow-Audio-p-2554.html"},"Get More Details")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Xadow-GSM-Breakout-p-2559.html"},"Get More Details"))))),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/pdf_sch_rephone_2g.pdf"},"Schematics in PDF")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/eagle.zip"},"Schematics in EAGLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/driver.zip"},"Driver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/ETA6003.pdf"},"Datasheet of ETA6003")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/RePhone-core-2G-AtmelSAMD21/res/SIM800_AT.pdf"},"AT Command of SIM800H")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/SeeedDocument/RePhone-core-2G-AtmelSAMD21/archive/master.zip"},"Download ALL Above"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
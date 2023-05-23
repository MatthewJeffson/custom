"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55435],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),k=n,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return a?r.createElement(c,i(i({ref:t},d),{},{components:a})):r.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},10491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={title:"Grove - Long Range 868MHz",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove_LoRa_Radio/",slug:"/Grove_LoRa_Radio",last_update:{date:"01/06/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors_Network/RF/Grove_LoRa_Radio",id:"Sensor/Grove/Grove_Sensors_Network/RF/Grove_LoRa_Radio",title:"Grove - Long Range 868MHz",description:"Grove is a very powerful platform developed by Seeed Studio to simplify your IoT projects.We have integrated the grove connector to most boards produced by Seeed to make them become a system. This time, we combined Grove with LoRa to provide an ultra-long-range wireless module for you.",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/RF/Grove_LoRa_Radio.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/RF",slug:"/Grove_LoRa_Radio",permalink:"/custom/Grove_LoRa_Radio",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/RF/Grove_LoRa_Radio.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"Jan 6, 2022",frontMatter:{title:"Grove - Long Range 868MHz",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove_LoRa_Radio/",slug:"/Grove_LoRa_Radio",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 433MHz Simple RF Link Kit",permalink:"/custom/Grove-433MHz_Simple_RF_Link_Kit"},next:{title:"Grove - Serial RF Pro",permalink:"/custom/Grove-Serial_RF_Pro"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Connecting hardware",id:"connecting-hardware",level:3},{value:"Download Library",id:"download-library",level:3},{value:"Open the example",id:"open-the-example",level:3},{value:"Review Results",id:"review-results",level:3},{value:"Data Rate",id:"data-rate",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/cover.jpg",alt:null})),(0,n.kt)("p",null,"Grove is a very powerful platform developed by Seeed Studio to simplify your IoT projects.We have integrated the grove connector to most boards produced by Seeed to make them become a system. This time, we combined Grove with LoRa to provide an ultra-long-range wireless module for you."),(0,n.kt)("p",null,"The main functional module in Grove - LoRa Radio 433MHz is RFM98, which is a transceiver features the LoRa long range modem that provides ultra-long range spread spectrum communication and high interference immunity whilst mini-missing current consumption. The heart of Grove - LoRa Radio 433MHz is ATmega168, a widely used chip with very high-performance and low power consumption, especially suitable for this grove module."),(0,n.kt)("p",null,"There we already integrated a simple wire antenna to receive signal, if the signal is too weak to receive, don\u2019t worry, the MHF connector next to the antenna is for adding a second antenna which has MHF interface to gain more signal."),(0,n.kt)("p",null,"This is the 433MHz version, which can be used for 433MHz communication. You can also find the version for 868MHz at Grove - LoRa Radio 868MHz."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"),(0,n.kt)("th",{parentName:"tr",align:null},"How to Buy"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - LoRa Radio 433 MHz"),(0,n.kt)("td",{parentName:"tr",align:null},"Dec 10, 2016"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",alt:null})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - LoRa Radio 868 MHz"),(0,n.kt)("td",{parentName:"tr",align:null},"Dec 10, 2016"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LoRa-Radio-868MHz-p-2776.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",alt:null})))))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Using RFM95 module based on SX1276 LoRa\xae"),(0,n.kt)("li",{parentName:"ul"},"Working Voltage:5V/3.3V"),(0,n.kt)("li",{parentName:"ul"},"~28mA(Avg) @+20dBm continuous transmit"),(0,n.kt)("li",{parentName:"ul"},"~8.4mA(Avg)@standby mode"),(0,n.kt)("li",{parentName:"ul"},"~20mA(Avg) @receive mode, BW-500kHz"),(0,n.kt)("li",{parentName:"ul"},"Working Temperature:-20 \u2013 70\u2103"),(0,n.kt)("li",{parentName:"ul"},"Interface:Grove - UART(RX,TX,VCC,GND)"),(0,n.kt)("li",{parentName:"ul"},"Simple wire antenna or MHF Connector for external high gain antenna"),(0,n.kt)("li",{parentName:"ul"},"Working Frequency:868MHz/433MHz"),(0,n.kt)("li",{parentName:"ul"},"+20dBm 100 mW Power Output Capability"),(0,n.kt)("li",{parentName:"ul"},"Size:20*40mm"),(0,n.kt)("li",{parentName:"ul"},"Rate:0.3kps~50kps"),(0,n.kt)("li",{parentName:"ul"},"Ready-to-go Arduino libraries"),(0,n.kt)("li",{parentName:"ul"},"Resered MHF antenna connector")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/hardware.png",alt:null})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"ATMega168 MCU (",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf"},"datasheet"),")"),(0,n.kt)("li",{parentName:"ol"},"MHF Connector"),(0,n.kt)("li",{parentName:"ol"},"Wire Antenna"),(0,n.kt)("li",{parentName:"ol"},"RFM95 Module (",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf"},"datesheet"),")"),(0,n.kt)("li",{parentName:"ol"},"Grove Interface")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PIN"),(0,n.kt)("th",{parentName:"tr",align:null},"NAME"),(0,n.kt)("th",{parentName:"tr",align:null},"FUNCTION"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"TX"),(0,n.kt)("td",{parentName:"tr",align:null},"TX of UART")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"RX"),(0,n.kt)("td",{parentName:"tr",align:null},"RX of UART")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"Power supply, 3.3V or 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Connect Ground")))),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Internet of Things"),(0,n.kt)("li",{parentName:"ul"},"Smart Home"),(0,n.kt)("li",{parentName:"ul"},"Sensor Hub"),(0,n.kt)("li",{parentName:"ul"},"Long distance wireless communication")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"After this section, you can make ",(0,n.kt)("strong",{parentName:"p"},"Grove - LoRa Radio")," run with only few steps."),(0,n.kt)("h3",{id:"preparations"},"Preparations"),(0,n.kt)("p",null,"Now we are making a demo for P2P(point to point) communication with the Grove - Lora Radio 433MHz, the Grove - LoRa Radio 868MHz is the same way to use."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"Grove - LoRa Radio 433MHz can't talk to Grove - LoRa Radio 868MHz.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Qty"),(0,n.kt)("th",{parentName:"tr",align:null},"Link"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Seeeduino Lotus"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"GET ONE NOW!"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - LoRa Radio 433MHz"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LoRa-Radio-433MHz-p-2777.html"},"GET ONE NOW!"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Micro USB Cable"),(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"GET ONE NOW!"))))),(0,n.kt)("p",null,"If this is your first time using ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"Seeeduino Lotus"),", please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus/"},"Seeeduino Lotus's wiki"),"."),(0,n.kt)("p",null,"Seeeduino Lotus is fully compatible with Arduino which works as simple as Arduino."),(0,n.kt)("p",null,"If this is your first time using Arduino, Please put hand on ",(0,n.kt)("a",{parentName:"p",href:"https://arduino.cc"},"here")," to start your Arduino journey."),(0,n.kt)("h3",{id:"connecting-hardware"},"Connecting hardware"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"Seeeduino Lotus")," is a combination of Seeeduino and Base Shield. We can connect the LoRa Radio module to the D5 socket directly as the below picture shows."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/demo.jpg",alt:"enter image description here"})),(0,n.kt)("h3",{id:"download-library"},"Download Library"),(0,n.kt)("p",null,"Click to download the library and install it (",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install an Arduino Library"),")"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/archive/master.zip"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library.png",alt:null}))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The library supports AVR/SAMD/STM32F4 devices, both hardware and software serial as well.\n"))),(0,n.kt)("p",null,"There are 2 kinds of serial ports. One is COMSerial, stands for communication port(connecting with Grove-LoRa Radio). The other is ShowSerial, stands for serial info display port(connectiong with PC)."),(0,n.kt)("p",null,"Most of arduino boards have at least one Serial, some have multiple serials(Arduino Mega has 4 Serials). It communicates on digital pins 0 (RX) and 1 (TX) as well as with the computer via USB. So if you connect UART device on pin D0 and pin D1, you have to remove them before downloading program through USB. Or else it will cause upload fails. Sometimes you need more serial ports than the number of hardware serial ports available. If this is the case, you can use an Software Serial that uses software to emulate serial hardware. Software serial requires a lot of help from the Arduino controller to send and receive data, so it\u2019s not as fast or efficient as hardware serial. For more info about the Serial, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Serial/"},"Seeed Arduino Serial"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"AVR:")," For the below example, We define Software Serial as SSCOM(connectiong with PC), you need USB to TTL adapter to connect with PC. NOT all the digital pins can be used for software serial. You can refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/SoftwareSerial"},"Software Serial")," for detail pins. We define hardware Serial as COMSerial(connecting with Grove-LoRa Radio). If you want to use the hardware serial as COMSerial and software serial as ShowSerial, you can define as ",(0,n.kt)("strong",{parentName:"p"},"#define ShowSerial Serial")," and ",(0,n.kt)("strong",{parentName:"p"},"#define COMSerial SSerial"),". If you use Arduino Mega, you can connect the hardware Serial to ShowSerial and the other Serial1/Serial2/Serial3 to COMSerial. So you can refer to AVR Mega setting.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SAMD:")," For the below example, The SAMD does not support software serial. We use the hardware serial ",(0,n.kt)("strong",{parentName:"p"},"Serial1")," to commuincate with Grove-LoRa Radio and ",(0,n.kt)("strong",{parentName:"p"},"SerialUSB")," to print message on PC.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"STM32F4:")," For the below example, We use the hardware serial ",(0,n.kt)("strong",{parentName:"p"},"Serial")," to commuincate with Grove-LoRa Radio and ",(0,n.kt)("strong",{parentName:"p"},"SerialUSB")," to print message on PC."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"For more info about the Serial, please refer to [Seeed Arduino Serial](https://wiki.seeedstudio.com/Seeed_Arduino_Serial/).\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#include <RH_RF95.h>\n\n#################### AVR #######################\n\n#ifdef __AVR__\n\n#include <SoftwareSerial.h>\nSoftwareSerial  SSerial(10, 11); // RX, TX\n\n#define COMSerial Serial\n#define ShowSerial SSerial \n\nRH_RF95<HardwareSerial> rf95(COMSerial);\n\n#endif\n\n#################### AVR Mega ###################\n\n#ifdef __AVR__\n\n#define COMSerial Serial1\n#define ShowSerial Serial \n\nRH_RF95<HardwareSerial> rf95(COMSerial);\n\n#endif\n\n#################### SAMD ######################\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n\n#define COMSerial Serial1\n#define ShowSerial SerialUSB \n\nRH_RF95<Uart> rf95(COMSerial);\n\n#endif\n\n#################### STM32F4 ###################\n\n#ifdef ARDUINO_ARCH_STM32F4\n\n#define COMSerial Serial\n#define ShowSerial SerialUSB \n\nRH_RF95<HardwareSerial> rf95(COMSerial);\n\n#endif\n")),(0,n.kt)("h3",{id:"open-the-example"},"Open the example"),(0,n.kt)("p",null,"Open your Arduino IDE, click ",(0,n.kt)("strong",{parentName:"p"},"File > Examples>Grove_LoRa_433MHz_and_915MHz_RF-master")," you will get many examples for the module."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/library_2.png",alt:null})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Node"),(0,n.kt)("th",{parentName:"tr",align:null},"Example Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sender"),(0,n.kt)("td",{parentName:"tr",align:null},"rf95_client"),(0,n.kt)("td",{parentName:"tr",align:null},'Send "Hello World" every 1s')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Receiver"),(0,n.kt)("td",{parentName:"tr",align:null},"rf95_server"),(0,n.kt)("td",{parentName:"tr",align:null},"Receive data and print it")))),(0,n.kt)("p",null,"Click ",(0,n.kt)("strong",{parentName:"p"},"Tools>Board"),' to choose "Seeeduino Lotus" and select respective serial port then click on Upload button to finish the steps.'),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If you're using Grove - LoRa Radio 868MHz module change the following code.\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"//rf95.setFrequency(434.0);\nrf95.setFrequency(868.0);\n")),(0,n.kt)("h3",{id:"review-results"},"Review Results"),(0,n.kt)("p",null,"After upload completed, you can open the serial monitor to see the result."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/result.jpg",alt:"enter image description here"})),(0,n.kt)("h3",{id:"data-rate"},"Data Rate"),(0,n.kt)("p",null,"The below chart shows the relationships between the band rate signal band width spreding factor and sensitivity."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/img/DateRate.png",alt:"enter image description here"})),(0,n.kt)("h1",{id:"433mhz"},"433MHz"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"868mhz"},"868MHz"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Schematics"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_eagle.zip"},"Grove - LoRa Radio 433MHz v1.0 Schematics (Eagle files)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/433_sch.pdf"},"Grove - LoRa Radio 433MHz v1.0 Schematics (PDF files)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_eagle.zip"},"Grove - LoRa Radio 868MHz v1.0 Schematics (Eagle files)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/868_sch.pdf"},"Grove - LoRa Radio 868MHz v1.0 Schematics (PDF files)")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Datasheet"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/RFM95_96_97_98_DataSheet.pdf"},"RFM95/96/97 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/Atmel-2545-8-bit-AVR-Microcontroller-ATmega48-88-168_Datasheet.pdf"},"Atmega168 Datasheet")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"References"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.lora-alliance.org/"},"LoRa Alliance")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Library"))),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_LoRa_433MHz_and_915MHz_RF/"},"Grove - LoRa Radio Library and Examples")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/matthijskooijman/arduino-lmic"},"LMIC Library")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove_LoRa_Radio/res/res.zip"},(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("em",{parentName:"strong"},"Download ALL Above")))))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84421],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},31954:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={description:"Seeeduino Stalker v1.0",title:"Seeeduino Stalker v1.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Stalker_v1.0",last_update:{date:"1/31/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino Stalker/Seeeduino_Stalker_v1.0",id:"Sensor/Seeeduino Series/Seeeduino Stalker/Seeeduino_Stalker_v1.0",title:"Seeeduino Stalker v1.0",description:"Seeeduino Stalker v1.0",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino Stalker/Seeeduino_Stalker_v1.0.md",sourceDirName:"Sensor/Seeeduino Series/Seeeduino Stalker",slug:"/Seeeduino_Stalker_v1.0",permalink:"/custom/zh-CN/Seeeduino_Stalker_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino Stalker/Seeeduino_Stalker_v1.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Seeeduino Stalker v1.0",title:"Seeeduino Stalker v1.0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Stalker_v1.0",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Stalker v3 enclosure",permalink:"/custom/zh-CN/Seeeduino_Stalker_v3_enclosure"},next:{title:"Seeeduino Stalker v2.3",permalink:"/custom/zh-CN/Seeeduino_Stalker_v2.3"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Block Diagram",id:"block-diagram",level:2},{value:"Schematics",id:"schematics",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Key Technical Specifications",id:"key-technical-specifications",level:3},{value:"Electrical Characterstics",id:"electrical-characterstics",level:3},{value:"Usage",id:"usage",level:2},{value:"Application Notes",id:"application-notes",level:3},{value:"Connection Notes",id:"connection-notes",level:3},{value:"Datasheets of Components",id:"datasheets-of-components",level:2},{value:"Source Code Examples",id:"source-code-examples",level:2},{value:"Demo 1 - SD card usage",id:"demo-1---sd-card-usage",level:3},{value:"Demo 2 \u2013 Logging timestamped sensor data",id:"demo-2--logging-timestamped-sensor-data",level:3},{value:"Demo 3 Operating the Seeeduino Stalker as a Shield",id:"demo-3-operating-the-seeeduino-stalker-as-a-shield",level:3},{value:"Support",id:"support",level:2},{value:"Revision History",id:"revision-history",level:2},{value:"Bug Tracker",id:"bug-tracker",level:2},{value:"Additional Ideas",id:"additional-ideas",level:2},{value:"Resources",id:"resources",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"See Also",id:"see-also",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Seeeduino-stalker-168.jpg",alt:"enter image description here"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This is not the latest version of Seeeduino Stalker and has been discontinued.\nThe latest version can be found here: ",(0,r.kt)("a",{parentName:"strong",href:"https://seeeddoc.github.io/Seeeduino_Stalker_v2.1/"},"Seeeduino Stalker v2.1"),"\nLook ",(0,r.kt)("a",{href:"/Seeeduino_Stalker#Comparison_between_various_versions_of_Seeeduino_Stalker"},(0,r.kt)("span",null,(0,r.kt)("font",{size:"3"}," Arduino "))),"  for comparison between v1.0, v2.0 and v2.1.")),(0,r.kt)("p",null,"Link to product page for this device (follow this link to buy):\n",(0,r.kt)("strong",{parentName:"p"},"Seeeduino Stalker Atmega 168P v1.0Model: ",(0,r.kt)("a",{parentName:"strong",href:"https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-168-p-639.html?cPath=79_80"},"ARD125B5P"))),(0,r.kt)("p",null,"Seeeduino Stalker is a feature rich Arduino compatible Wireless Sensor Network node. It's modular structure and onboard peripherals makes it convenient to log time stamp sensor data on a periodic basis. The Seeeduino Stalker is a good candidate for all your tracking, monitoring and control projects."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Arduino"),"  compatible, based on ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_V2.2/"},"Seeeduino"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Onboard microcontroller: ATmega168P or ATmega328P (both variants available for purchase)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Dual mode of operation: As a standalone Arduino or as a Shield stacked ontop of Arduino. (Pinheader locations are Arduino Duemilanove compatible)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Onboard Real Time Clock chip with CR2032 coin cell as backup power source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Serial interface with DTR for auto reset during programming when operating in standalone mode. (For programming, ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/UartSBee/"},"UartSBee"),"  must be bought separately)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"microSD card socket")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2C Pin header (operation voltage is selectable: 5.0V or 3.3V)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User defined switch and LED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bee series socket")," - 2*10 pin 2.0mm pitch (which will mate with - one at a time - any of the wireless modules: ",(0,r.kt)("strong",{parentName:"p"},"XBee")," , ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Bluetooth_Bee/"},"BluetoothBee")," , ",(0,r.kt)("strong",{parentName:"p"},"GPSBee")," or ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/"},"RFBee")," . Please note that ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/UartSBee/"},"UartSBee"),"  is incompatible with this socket - a separate serial interface connector (as mentioned above) is provided for ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/UartSBee/"},"UartSBee")))),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wireless Sensor Network (using ",(0,r.kt)("strong",{parentName:"p"},"XBee")," - bought seperately)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GPS Logging (using ",(0,r.kt)("strong",{parentName:"p"},"GPSBee")," - bought seperately)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Acquisition System capable of communicating with an App running on iPhone/Android Phone/Nokia Phone (using ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Bluetooth_Bee/"},"BluetoothBee"),"  - bought seperately)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RF Remote Control (using ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/"},"RFBee")," (title=undefined) - bought seperately)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"As a simple standalone Arduino compatible physical computing platform (",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/UartSBee/"},"UartSBee"),"  must be bought seperately for programming)"))),(0,r.kt)("h2",{id:"cautions"},"Cautions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The product is provided as is. Please observe ESD precautions specially in dry (low humidity) weather.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please disable bluetooth serial ports when using a Windows based development machine to prevent the Arduino IDE from freezing."))),(0,r.kt)("h2",{id:"block-diagram"},"Block Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-Block.jpg",alt:"enter image description here"})),(0,r.kt)("h2",{id:"schematics"},"Schematics"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/datasheet/Seeedstalker_V1.0.pdf"},"Schematics for Seeeduino Stalker v1.0 (PDF)")),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("h3",{id:"key-technical-specifications"},"Key Technical Specifications"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Microprocessor:"),(0,r.kt)("th",{parentName:"tr",align:null},"ATMega168P or ATmega328P"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCB size:"),(0,r.kt)("td",{parentName:"tr",align:null},"6.8cm x 5.5cm x 0.16cm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Indicators:"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset, Power, LED on PB5 (Arduino Pin 13)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power supply:"),(0,r.kt)("td",{parentName:"tr",align:null},"5V or 7-12V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power Connector:"),(0,r.kt)("td",{parentName:"tr",align:null},"2 pin JST/ USB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I/O counts:"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ADC input:"),(0,r.kt)("td",{parentName:"tr",align:null},"Dedicated 2 channel (10 bit resolution)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connectivity:"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C, UART, SPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RoHS:"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,r.kt)("h3",{id:"electrical-characterstics"},"Electrical Characterstics"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specifications"),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Norm"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"),(0,r.kt)("th",{parentName:"tr",align:null},"Units"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Input voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"Volts (DC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Global Current Consumption"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3.3V I2C voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.2"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5"),(0,r.kt)("td",{parentName:"tr",align:null},"Volts (DC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5.0V I2C voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"4.6"),(0,r.kt)("td",{parentName:"tr",align:null},"4.7"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"Volts (DC)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UART Baud Rate(while programming)"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"115200"),(0,r.kt)("td",{parentName:"tr",align:null},"bps")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"application-notes"},"Application Notes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-applications.jpg",alt:"enter image description here"})),(0,r.kt)("h3",{id:"connection-notes"},"Connection Notes"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_v1.0/img/Stalker-V1-hardware.jpg",alt:"enter image description here"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Bee series")," socket - 2*10 pin 2.0mm pitch (which will mate with - one at a time - any of the ",(0,r.kt)("strong",{parentName:"p"},"wireless modules"),": ",(0,r.kt)("strong",{parentName:"p"},"XBee"),", ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Bluetooth_Bee/"},"BluetoothBee")," , ",(0,r.kt)("strong",{parentName:"p"},"GPSBee"),"or ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/"},"RFBee")," .) Communication with these modules are done through UART.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Serial interface \u2013 To save space and lower costs, USB<->Serial connectivity is not provided by default. You may use the FT232 based UartSBee (title=undefined) or other USB to serial adapter to do the programming or communicate with the PC.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"User LED and Switch \u2013 An LED and a Switch have been provided onboard for use in your application as desired.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Master switch \u2013 Removes power from the Seeeduino Stalker board. RTC will remain working if a CR2032 battery has been installed.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interrupt Jumper \u2013 Mount this jumper if you want to allow the module inserted in the Bee series socket to interrupt the microcontroller on any data reception event. This is useful in sensor network application to wake up the microcontroller from sleep mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2C Interface: Onboard I2C level shifter IC provides voltage translation between 3.3V and 5V devices. This allows you to connect 5.0 Volt I2 ICs to you microcontroller when its operating on 3.3 Volts."))),(0,r.kt)("h2",{id:"datasheets-of-components"},"Datasheets of Components"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://www.atmel.com/dyn/resources/prod_documents/doc2545.pdf"},"ATmega168")," - 8-bit AVR Microcontroller present onboard Seeeduino Stalker.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://www.nxp.com/documents/data_sheet/PCA9306.pdf"},"PCA9306")," - Dual bidirectional I2C-bus and SMBus voltage-level translator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://pdfserv.maxim-ic.com/en/ds/DS1307.pdf"},"DS1307")," - I2C Real Time Clock chip.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"http://www.national.com/ds/LM/LM1117.pdf"},"LM1117")," - Low Drop Out linear voltage regulator used in the power supply section."))),(0,r.kt)("h2",{id:"source-code-examples"},"Source Code Examples"),(0,r.kt)("p",null,"Programming Seeeduino Stalker is made easy through the use of Arduino and its libraries. A few code snippets provided below will help you kickstart the coding for your project. A RAR archive containing all of the following sketches is available ",(0,r.kt)("strong",{parentName:"p"},"here"),"."),(0,r.kt)("p",null,"Please note that all of the Demo sketches presented below make use of the FileLogger library. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1240704747/all"},"this")," thread at the Arduino Forum and download the library from its ",(0,r.kt)("a",{parentName:"p",href:"http://code.google.com/p/arduino-filelogger/"},"project page")," at Google Code."),(0,r.kt)("p",null,"Also, a few Seeeduino Stalker users have shared some of the code developed by them in a ",(0,r.kt)("a",{parentName:"p",href:"https://arduino.cc/cgi-bin/yabb2/YaBB.pl?num=1273413449%20"},"thread")," at the Arduino Forum."),(0,r.kt)("h3",{id:"demo-1---sd-card-usage"},"Demo 1 - SD card usage"),(0,r.kt)("p",null,"Using a FileLogger library to store all the data from GPSBee on to the SD Card."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <SD.h>constint chipSelect =10;\nString buffer ="";unsignedchar ptr;\nFile myFile;\nbyte val;voidsetup(){Serial.begin(19200);pinMode(chipSelect,OUTPUT);if(!SD.begin(chipSelect)){return;}\n  File myFile = SD.open("data.log",FILE_WRITE);\n   myFile.close();}voidloop(){if(Serial.available()>0){\n    val =Serial.read();\n    buffer = String(val);\n    myFile = SD.open("data.log",FILE_WRITE);\n    myFile.print(buffer);\n    myFile.close();}}\n')),(0,r.kt)("h3",{id:"demo-2--logging-timestamped-sensor-data"},"Demo 2 \u2013 Logging timestamped sensor data"),(0,r.kt)("p",null,"The onboard Real Time Clock module can be used for adding timestamp to the periodically read sensor data."),(0,r.kt)("p",null,"The Arduino sketch presented below illustrates how to take sensor readings from Analog Pin 0 and save it to SD Card along with timestamps."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#include \"FileLogger.h\"#include \"DS1307.h\"#include <WProgram.h>#include <Wire.h>#define Timing 0#define Accept 1#define Record 2\n\xa0\nbyte start[7]={'B','e','g','i','n',0x0D,0x0A};\nbyte buffer[20];int temp;\nbyte ASCII[10]={'0','1','2','3','4','5','6','7','8','9'};unsignedchar result;unsignedchar state;inttime=0;int oldtime=0;voidsetup(void){\n    result = FileLogger::append(\"data.log\", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append(\"data.log\", start, 7);\n    RTC.stop();\n    RTC.set(DS1307_MIN,30);//set the minutes\n    RTC.set(DS1307_HR,10);//set the hours\n    RTC.set(DS1307_DATE,22);//set the date\n    RTC.set(DS1307_MTH,12);//set the month\n    RTC.set(DS1307_YR,9);//set the year\n    RTC.start();}voidloop(void){switch(state){case Timing:time=RTC.get(DS1307_SEC,true);delay(200);if(time!=oldtime){\n            oldtime=time;\n            temp=RTC.get(DS1307_MTH,false);\n            buffer[0]=ASCII[(temp/10)];\n            buffer[1]=ASCII[(temp%10)];\n            buffer[2]='-';\n            temp=RTC.get(DS1307_DATE,false);\n            buffer[3]=ASCII[(temp/10)];\n            buffer[4]=ASCII[(temp%10)];\n            buffer[5]='-';\n            temp=RTC.get(DS1307_HR,false);\n            buffer[6]=ASCII[(temp/10)];\n            buffer[7]=ASCII[(temp%10)];\n            buffer[8]='-';\n            temp=RTC.get(DS1307_MIN,false);\n            buffer[9]=ASCII[(temp/10)];\n            buffer[10]=ASCII[(temp%10)];\n            buffer[11]='-';//temp=RTC.get(DS1307_SEC,false);\n            buffer[12]=ASCII[(time/10)];\n            buffer[13]=ASCII[(time%10)];\n            buffer[14]=':';\n            state=Accept;}break;case Accept:\n        temp=analogRead(0);\n        buffer[15]=ASCII[(temp/100)];\n        buffer[16]=ASCII[((temp%100)/10)];\n        buffer[17]=ASCII[(temp%10)];\n        buffer[18]=0x0D;\n        buffer[19]=0x0A;\n        state=Record;break;case Record:\n        result = FileLogger::append(\"data.log\", buffer, 20);if(result==0){\n            state=Timing;}break;default:\n        state=Timing;break;}}\n")),(0,r.kt)("h3",{id:"demo-3-operating-the-seeeduino-stalker-as-a-shield"},"Demo 3 Operating the Seeeduino Stalker as a Shield"),(0,r.kt)("p",null,"The Seeeduino Stalker can be mounted as a shield on another Arduino Duemilanove/UNO compatible board."),(0,r.kt)("p",null,"The following sketch illustrates how to receive data from the microcontroller below via I2C and save it onto the SD Card."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#include \"FileLogger.h\"#include <Wire.h>\n\xa0\nbyte start[7]={'B','e','g','i','n',0x0D,0x0A};unsignedchar buffer[10];unsignedchar result;unsignedchar state;voidsetup(){\n    result = FileLogger::append(\"data.log\", start, 7);//Initial the SD Cardwhile(result) result = FileLogger::append(\"data.log\", start, 7);Wire.begin(4);// join i2c bus with address #4Wire.onReceive(receiveEvent);// register event}voidloop(){}void receiveEvent(int howMany){unsignedchar i=0;while(Wire.available()>0){\n        buffer[i]=Wire.receive();// receive byte as a character\n        i++;}\n    result = FileLogger::append(\"data.log\", buffer, i);while(result) result = FileLogger::append(\"data.log\", start, 7);}\n")),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"forum")," or ",(0,r.kt)("strong",{parentName:"p"},"wish")," to discuss."),(0,r.kt)("h2",{id:"revision-history"},"Revision History"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Revision"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,r.kt)("th",{parentName:"tr",align:null},"Release Date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Seeeduino Stalker v1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial public release"),(0,r.kt)("td",{parentName:"tr",align:null},"Dec 23, 2009")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Seeeduino Stalker v2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"New and improved version with more features"),(0,r.kt)("td",{parentName:"tr",align:null},"Dec 17, 2010")))),(0,r.kt)("h2",{id:"bug-tracker"},"Bug Tracker"),(0,r.kt)("p",null,"Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products."),(0,r.kt)("h2",{id:"additional-ideas"},"Additional Ideas"),(0,r.kt)("p",null,"The Additional Ideas is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/images/4/40/Stalker.zip"},"Stalker Eagle Design Files")),(0,r.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,r.kt)("p",null,"Seeeduino Stalker v1.0 is already out of stock (Product page ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-stalker-atmega-328-p-600.html?cPath=80"},"here"),", instead please checkout Seeeduino Stalker v2.0: ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/"},"Wiki page"),"  | ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-stalker-v2b-p-727.html?cPath=80"},"Product Page")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Seeeduino_Stalker_v2.0/"},"Seeeduino Stalker v2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Seeeduino_Stalker/#Comparison_between_various_versions_of_Seeeduino_Stalker"},"Comparison between various versions of Seeeduino Stalker"))),(0,r.kt)("h2",{id:"licensing"},"Licensing"),(0,r.kt)("p",null,"This documentation is licensed under the Creative Commons ",(0,r.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0")," Source code and libraries are licensed under ",(0,r.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl.html"},"GPL/LGPL"),", see source code files for details."),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"  Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
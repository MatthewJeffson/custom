"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>N});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,N=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(N,o(o({ref:t},d),{},{components:a})):r.createElement(N,o({ref:t},d))}));function N(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},11e3:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={title:"Grove - NFC Tag",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove_NFC/",slug:"/Grove_NFC",last_update:{date:"01/06/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors_Network/NFC/Grove_NFC",id:"Sensor/Grove/Grove_Sensors_Network/NFC/Grove_NFC",title:"Grove - NFC Tag",description:"Near Field Communication (NFC) is a set of short-range wireless technologies. It is behind daily applications such as access control system and mobile payment system.",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/NFC/Grove_NFC.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/NFC",slug:"/Grove_NFC",permalink:"/custom/zh-CN/Grove_NFC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/NFC/Grove_NFC.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641398400,formattedLastUpdatedAt:"2022\u5e741\u67085\u65e5",frontMatter:{title:"Grove - NFC Tag",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove_NFC/",slug:"/Grove_NFC",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - NFC(ST25DV64)",permalink:"/custom/zh-CN/grove-nfc-st25dv64"},next:{title:"Grove - NFC",permalink:"/custom/zh-CN/Grove_NFC_Tag"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware overview",id:"hardware-overview",level:2},{value:"Grove NFC v1.0",id:"grove-nfc-v10",level:3},{value:"Grove NFC v1.1",id:"grove-nfc-v11",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Seeeduino Lite(UART)",id:"play-with-seeeduino-liteuart",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Seeedunio V4.2 (I2C)",id:"play-with-seeedunio-v42-i2c",level:3},{value:"Hardware",id:"hardware-1",level:3},{value:"Software",id:"software-1",level:4},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("table",null,(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_01.jpg"})),(0,n.kt)("td",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/Grove-NFC_02.jpg"}))))),(0,n.kt)("p",null,"Near Field Communication (NFC) is a set of short-range wireless technologies. It is behind daily applications such as access control system and mobile payment system.\nGrove NFC features a highly integrated transceiver module PN532 which handles contactless communication at 13.56MHz. You can read and write a 13.56MHz tag with this module or implement point to point data exchange with two NFCs. Grove NFC is designed to use I2C or UART communication protocols, and UART is the default mode. In addition, we assign an independent PCB antenna which can easily stretch out of any enclosure you use, leaving more room for you to design the exterior of your project."),(0,n.kt)("p",{style:{}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-NFC-p-1804.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Data"),(0,n.kt)("th",{parentName:"tr",align:null},"Change"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove NFC V1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"December 11,2015"),(0,n.kt)("td",{parentName:"tr",align:null},"inital")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove NFC V1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"Augest 31,2016"),(0,n.kt)("td",{parentName:"tr",align:null},"Add TP2/TP3 Pad on the back of the PCB, to switch the I2C and UART")))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Working Voltage: 3.3V"),(0,n.kt)("li",{parentName:"ul"},"Working Current:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Static Mode: 73mA"),(0,n.kt)("li",{parentName:"ul"},"Write/Read Mode: 83mA"))),(0,n.kt)("li",{parentName:"ul"},"Support host interface: I2C, UART(default)."),(0,n.kt)("li",{parentName:"ul"},"Serve for contactless communication at 13.56MHz."),(0,n.kt)("li",{parentName:"ul"},"Support ISO14443 Type A and Type B protocols."),(0,n.kt)("li",{parentName:"ul"},"Max operating distance for detecting NFC tags is 28mm depending on current antenna size."),(0,n.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("p",null,"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware overview"),(0,n.kt)("h3",{id:"grove-nfc-v10"},"Grove NFC v1.0"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC_cutAndsolder.jpg",alt:null}),"  "),(0,n.kt)("p",null,"The default setting is UART, if you need to change it into I2C, then you should do some soldering at first."),(0,n.kt)("p",null,"Cut following connections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TP1 to UART"),(0,n.kt)("li",{parentName:"ul"},"TP2 to RX"),(0,n.kt)("li",{parentName:"ul"},"TP3 to TX")),(0,n.kt)("p",null,"Solder following connections:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TP1 to I2C"),(0,n.kt)("li",{parentName:"ul"},"TP2 to SCL"),(0,n.kt)("li",{parentName:"ul"},"TP3 to SDA")),(0,n.kt)("h3",{id:"grove-nfc-v11"},"Grove NFC v1.1"),(0,n.kt)("p",null,"The default setting is UART, if you need to change it into I2C, then you should cut the UART connection and then solder the I2C pins as below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/v1.1%20hardware%20connection.png",alt:null})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("p",null,"The Grove - NFC supports I2C and UART, ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_NFC"},"Seeed Arduino NFC Library")," supports Arduino Uno/Seeeduino v4.2, Arduino Mega/Seeeduino Mega, Arduino Zero/Seeeduino Lorawan and Arduino Leonardo/Seeeduino Lite."),(0,n.kt)("h3",{id:"play-with-seeeduino-liteuart"},"Play with Seeeduino Lite(UART)"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino Lite"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - NFC"),(0,n.kt)("th",{parentName:"tr",align:null},"NFC Tags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/lite.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-Lite-p-1487.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-NFC-p-1804.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},"Please Prepare yourself")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - NFC to port ",(0,n.kt)("strong",{parentName:"p"},"UART")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino Lite.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino Lite to PC via a USB cable"))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1."),"  Download ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_NFC"},"Seeed Arduino NFC Library"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2."),"  Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install ",(0,n.kt)("strong",{parentName:"p"},"Seeed Arduino NFC")," library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3."),"  Download ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/PN532"},"PN532 Library")," and put it under ",(0,n.kt)("strong",{parentName:"p"},"C:\\Program Files (x86)\\Arduino\\libraries\\Seeed_Arduino_NFC-master\\src"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4."),"  Open \u201cReadTag\u201d code via the path: ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e ReadTag"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5."),"  Modify the code as below to enable UART communication."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#if 0 // use SPI\n#include <SPI.h>\n#include <PN532/PN532_SPI/PN532_SPI.h>\nPN532_SPI pn532spi(SPI, 9);\nNfcAdapter nfc = NfcAdapter(pn532spi);\n#elif 1 // use hardware serial\n\n#include <PN532/PN532_HSU/PN532_HSU.h>\nPN532_HSU pn532hsu(Serial1);\nNfcAdapter nfc(pn532hsu);\n#elif 0  // use software serial\n\n#include <PN532/PN532_SWHSU/PN532_SWHSU.h>\n#include "SoftwareSerial.h"\nSoftwareSerial SWSerial(2, 3);\nPN532_SWHSU pn532swhsu(SWSerial);\nNfcAdapter nfc(pn532swhsu);\n#else //use I2C\n\n#include <Wire.h>\n#include <PN532/PN532_I2C/PN532_I2C.h>\n\nPN532_I2C pn532_i2c(Wire);\nNfcAdapter nfc = NfcAdapter(pn532_i2c);\n#endif\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," Upload the code. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud Rate ",(0,n.kt)("strong",{parentName:"p"},"9600"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 9.")," Use the Grove - NFC to get close to an NFC Tag. If everything goes well, you will get the NFC Tag information in the Serial Monitor."))),(0,n.kt)("admonition",{type:"warning"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If you want to connect to Arduino Mega UART ports, You can change the PN532_HSU pn532hsu(Serial1) to PN532_HSU pn532hsu(SerialX). X stands for the arduino mega serial port you use. If you want to connect Grove-NFC sensors to Arduino Uno, you can use the software serial. Please follow below to configure [software serial](https://www.arduino.cc/en/Reference/softwareSerial).\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#if 0 // use SPI\n#include <SPI.h>\n#include <PN532/PN532_SPI/PN532_SPI.h>\nPN532_SPI pn532spi(SPI, 9);\nNfcAdapter nfc = NfcAdapter(pn532spi);\n#elif 0 // use hardware serial\n\n#include <PN532/PN532_HSU/PN532_HSU.h>\nPN532_HSU pn532hsu(Serial1);\nNfcAdapter nfc(pn532hsu);\n#elif 1  // use software serial\n\n#include <PN532/PN532_SWHSU/PN532_SWHSU.h>\n#include "SoftwareSerial.h"\nSoftwareSerial SWSerial(2, 3);\nPN532_SWHSU pn532swhsu(SWSerial);\nNfcAdapter nfc(pn532swhsu);\n#else //use I2C\n\n#include <Wire.h>\n#include <PN532/PN532_I2C/PN532_I2C.h>\n\nPN532_I2C pn532_i2c(Wire);\nNfcAdapter nfc = NfcAdapter(pn532_i2c);\n#endif\n')),(0,n.kt)("h3",{id:"play-with-seeedunio-v42-i2c"},"Play with Seeedunio V4.2 (I2C)"),(0,n.kt)("h3",{id:"hardware-1"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - NFC"),(0,n.kt)("th",{parentName:"tr",align:null},"NFC Tags"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/thumbnail.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-NFC/img/NFC-for-Marketing-Header.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-NFC-p-1804.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},"Please Prepare yourself")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"**1** Please choose 13.5MHZ, ISO14443 NFC Tags, or the Grove - NFC module may can not read the tag.\n\n**2** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**3** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n\n**4** For this demo, you can work without the baseshild, for the Seeeduino V4.2 has a on-board Grove I2C connector. \n")),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - NFC to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield. Please make sure you follow hardware overview to change the default UART setting to I2C.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino V4.2.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino V4.2 to PC via a USB cable")))),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1."),"  Download ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_NFC"},"Seeed Arduino NFC Library"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2."),"  Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install ",(0,n.kt)("strong",{parentName:"p"},"Seeed Arduino NFC")," library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3."),"  Download ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/PN532"},"PN532 Library")," and put it under ",(0,n.kt)("strong",{parentName:"p"},"C:\\Program Files (x86)\\Arduino\\libraries\\Seeed_Arduino_NFC-master\\src"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4."),"  Open \u201cReadTag\u201d code via the path: ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e ReadTag"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5."),"  Modify the code as below to enable I2C communication."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#if 0 // use SPI\n#include <SPI.h>\n#include <PN532/PN532_SPI/PN532_SPI.h>\nPN532_SPI pn532spi(SPI, 9);\nNfcAdapter nfc = NfcAdapter(pn532spi);\n#elif 0 // use hardware serial\n\n#include <PN532/PN532_HSU/PN532_HSU.h>\nPN532_HSU pn532hsu(Serial1);\nNfcAdapter nfc(pn532hsu);\n#elif 0  // use software serial\n\n#include <PN532/PN532_SWHSU/PN532_SWHSU.h>\n#include "SoftwareSerial.h"\nSoftwareSerial SWSerial(2, 3);\nPN532_SWHSU pn532swhsu(SWSerial);\nNfcAdapter nfc(pn532swhsu);\n#else //use I2C\n\n#include <Wire.h>\n#include <PN532/PN532_I2C/PN532_I2C.h>\n\nPN532_I2C pn532_i2c(Wire);\nNfcAdapter nfc = NfcAdapter(pn532_i2c);\n#endif\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Upload the code. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud Rate ",(0,n.kt)("strong",{parentName:"p"},"9600"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8.")," Use the Grove - NFC to get close to an NFC Tag. If everything goes well, you will get the NFC Tag information in the Serial Monitor."))),(0,n.kt)("h1",{id:"grove---nfc-v10"},"Grove - NFC v1.0"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"grove---nfc-v11"},"Grove - NFC v1.1"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC.zip"},"Grove - NFC v1.0 EAGLE (schematic and board) files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-NFC/res/Grove-NFC_v1.1.zip"},"Grove - NFC v1.1 EAGLE (schematic and board) files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-NFC/res/PN532.pdf"},"PN532 Datasheet PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_NFC"},"Seeed Arduino NFC Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/PN532"},"PN532 Library"))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Particle Photon + Grove NFC + Grove LCD via I2C")," Use Particle Photon to read UID of a NFC Card and display on LCD, all with I2C."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/peacemoon/particle-photon-grove-nfc-grove-lcd-via-i2c-7e7d36/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
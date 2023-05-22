"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85438],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return a?r.createElement(c,o(o({ref:t},p),{},{components:a})):r.createElement(c,o({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},45169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Grove - 125KHz RFID Reader",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-125KHz_RFID_Reader/",slug:"/Grove-125KHz_RFID_Reader",last_update:{date:"01/06/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors_Network/RF/Grove-125KHz_RFID_Reader",id:"Sensor/Grove/Grove_Sensors_Network/RF/Grove-125KHz_RFID_Reader",title:"Grove - 125KHz RFID Reader",description:"This Grove-125KHz RFID Reader is a module used to read uem4100 RFID card information with two output formats: Uart and Wiegand. It has a sensitivity with maximum 7cm sensing distance. There is also the electronic brick version of this module. It can help you with project like internet of thing and access control system.",source:"@site/docs/Sensor/Grove/Grove_Sensors_Network/RF/Grove-125KHz_RFID_Reader.md",sourceDirName:"Sensor/Grove/Grove_Sensors_Network/RF",slug:"/Grove-125KHz_RFID_Reader",permalink:"/zh-CN/Grove-125KHz_RFID_Reader",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors_Network/RF/Grove-125KHz_RFID_Reader.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641398400,formattedLastUpdatedAt:"2022\u5e741\u67085\u65e5",frontMatter:{title:"Grove - 125KHz RFID Reader",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-125KHz_RFID_Reader/",slug:"/Grove-125KHz_RFID_Reader",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - GPS (Air530)",permalink:"/zh-CN/Grove-GPS-Air530"},next:{title:"Grove - 315MHz RF Kit",permalink:"/zh-CN/Grove-315MHz_RF_Kit"}},d={},s=[{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Wiegand Mode",id:"wiegand-mode",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Grove-125KHz_RFID_Reader.jpg",alt:null})),(0,n.kt)("p",null,"This Grove-125KHz RFID Reader is a module used to read uem4100 RFID card information with two output formats: Uart and Wiegand. It has a sensitivity with maximum 7cm sensing distance. There is also ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/electronic-brick-125khz-rfid-card-reader-p-702.html?cPath=52"},"the electronic brick version")," of this module. It can help you with project like internet of thing and access control system."),(0,n.kt)("p",null,"And you should use the module below while using RFID reader:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/rfid-tag-combo-125khz-5-pcs-p-700.html?cPath=19_24"},"RFID tag combo (125khz)"))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - 125KHz RFID Reader V1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 2015")))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value/Range"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Voltage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"4.75-5.25V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Working Frequency"),(0,n.kt)("td",{parentName:"tr",align:"left"},"125 KHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Sensing Distance(Max)"),(0,n.kt)("td",{parentName:"tr",align:"left"},"70mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TTL Output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9600 baudrate, 8 data bits, 1 stop bit, and no verify bit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Wiegand Output"),(0,n.kt)("td",{parentName:"tr",align:"left"},"26 bits Wiegand format, 1 even verify bit, 24 data bits, and 1 odd verify bit")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - 125KHz RFID Reader"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/gr125k_01.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/grove-125khz-rfid-reader-p-1008.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - 125KHz RFID Reader to port ",(0,n.kt)("strong",{parentName:"li"},"D2")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/RFID_reader.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove_Ultrasonic_Ranger to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - 125KHz RFID Reader"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D3"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D2"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"/*\n  link between the computer and the SoftSerial Shield\n  at 9600 bps 8-N-1\n  Computer is connected to Hardware UART\n  SoftSerial Shield is connected to the Software UART:D2&D3\n*/\n\xa0\n#include <SoftwareSerial.h>\n\xa0\nSoftwareSerial SoftSerial(2, 3);\nunsigned char buffer[64];       // buffer array for data receive over serial port\nint count = 0;                    // counter for buffer array\n\xa0\nvoid setup()\n{\n    SoftSerial.begin(9600);     // the SoftSerial baud rate\n    Serial.begin(9600);         // the Serial port of Arduino baud rate.\n}\n\xa0\nvoid loop()\n{\n    // if date is coming from software serial port ==> data is coming from SoftSerial shield\n    if (SoftSerial.available())              \n    {\n        while(SoftSerial.available())               // reading data into char array\n        {\n            buffer[count++] = SoftSerial.read();      // writing data into array\n            if(count == 64)break;\n        }\n        Serial.write(buffer, count);     // if no data transmission ends, write buffer to hardware serial port\n        clearBufferArray();             // call clearBufferArray function to clear the stored data from the array\n        count = 0;                      // set counter of while loop to zero\n    }\n    if (Serial.available())             // if data is available on hardware serial port ==> data is coming from PC or notebook\n    SoftSerial.write(Serial.read());    // write it to the SoftSerial shield\n}\nvoid clearBufferArray()                 // function to clear buffer array\n{\n    // clear all index of array with command NULL\n    for (int i=0; i<count; i++)\n    {\n        buffer[i]=NULL;\n    }                  \n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Open the Serial Monitor, the card information can be displayed as shown below:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/img/Read_Data_.jpg",alt:null})),(0,n.kt)("h2",{id:"wiegand-mode"},"Wiegand Mode"),(0,n.kt)("p",null,'(Jumper Set to the Right two Pins)\nYou would need to select the jumper to "W" to enter this mode.\nThe ',(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip"},"Wiegand demo code")," for Seeeduino is designed to read Wiegand data in interrupt mode."),(0,n.kt)("p",null,"In Wiegand Mode, output data is formatted with 26bits including 24bits card info and 2 bits parity."),(0,n.kt)("table",{border:1},(0,n.kt)("tbody",null,(0,n.kt)("tr",{style:{fontWeight:"bold"}},(0,n.kt)("td",{width:20},"bit"),(0,n.kt)("td",{width:20},"0"),(0,n.kt)("td",{width:20},"1"),(0,n.kt)("td",{width:20},"2"),(0,n.kt)("td",{width:20},"3"),(0,n.kt)("td",{width:20},"4"),(0,n.kt)("td",{width:20},"5"),(0,n.kt)("td",{width:20},"6"),(0,n.kt)("td",{width:20},"7"),(0,n.kt)("td",{width:20},"8"),(0,n.kt)("td",{width:20},"9"),(0,n.kt)("td",{width:20},"10"),(0,n.kt)("td",{width:20},"11"),(0,n.kt)("td",{width:20},"12"),(0,n.kt)("td",{width:20},"13"),(0,n.kt)("td",{width:20},"14"),(0,n.kt)("td",{width:20},"15"),(0,n.kt)("td",{width:20},"16"),(0,n.kt)("td",{width:20},"17"),(0,n.kt)("td",{width:20},"18"),(0,n.kt)("td",{width:20},"19"),(0,n.kt)("td",{width:20},"20"),(0,n.kt)("td",{width:20},"21"),(0,n.kt)("td",{width:20},"22"),(0,n.kt)("td",{width:20},"23"),(0,n.kt)("td",{width:20},"24"),(0,n.kt)("td",{width:20},"25")),(0,n.kt)("tr",{style:{fontSize:"90%"},align:"center"},(0,n.kt)("td",null,"-"),(0,n.kt)("td",null,"PE"),(0,n.kt)("td",{colSpan:24,rowSpan:1},"D"),(0,n.kt)("td",null,"P0")),(0,n.kt)("tr",{style:{fontSize:"90%"},align:"center"},(0,n.kt)("td",null,"-"),(0,n.kt)("td",null,"-"),(0,n.kt)("td",{colSpan:12,rowSpan:1},"E"),(0,n.kt)("td",{colSpan:12,rowSpan:1},"0"),(0,n.kt)("td",null,"-")),(0,n.kt)("tr",{style:{fontSize:"90%"},align:"center"},(0,n.kt)("td",null,"-"),(0,n.kt)("td",null,"-"),(0,n.kt)("td",{colSpan:8,rowSpan:1},"D2[7..0]"),(0,n.kt)("td",{colSpan:8,rowSpan:1},"D1[7..0]"),(0,n.kt)("td",{colSpan:8,rowSpan:1},"D0[7..0]"),(0,n.kt)("td",null,"-")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PE is even bit, PO is odd bit;"),(0,n.kt)("li",{parentName:"ul"},"E is the data bit which was involved in even, O is the data bit which was involved in odd;"),(0,n.kt)("li",{parentName:"ul"},"DX","[","7..0","]"," is the data bit which correspond to Mifare@ Standard & Light card read only ID;")),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1: How to convert the output to Card Number?")),(0,n.kt)("p",null,"A1: Please follow below steps."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Take ID: 0009776930 for example:"),(0,n.kt)("li",{parentName:"ul"},"Card Number ID: 0009776930 ------- Decimalism ","[Start Bit(00) + Card Number(8 numbers)]"),(0,n.kt)("li",{parentName:"ul"},"Output: 0700952F229F ------------- Hex [","[Start Bit(07h) + Card Number(8 numbers) + Checksum]"),(0,n.kt)("li",{parentName:"ul"},"The calculator for decimal and hex numbers is available online.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q2: How to read tags continuously?")),(0,n.kt)("p",null,"A2: The RFID reader can read tags continuously without any setting. Keep the tag 2.5-4 cm from the antenna, and the reader can read data continuously. And if the distance is below 2.5cm, the reader reads data once if not moving tags away."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Demo]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/RFID_Wiegand_INT.zip"},"Grove - 125KHz RFID Reader Demo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_Declaration%20of%20conformity.pdf"},"Declaration of conformity")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-125KHz_RFID_Reader/res/CSTR140821808_test%20report.pdf"},"Test Report"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arduino Based Security Project Using Cayenne"),": Arduino based Home Security Project. SMS/email alerts when intruder detected. Personalized messages for authorized personnel."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ArduinoBasics/arduino-based-security-project-using-cayenne-eb379b/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
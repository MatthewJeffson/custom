"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24463],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=i,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1261:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={description:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",title:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-",last_update:{date:"1/19/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Touch/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-",id:"Sensor/Grove/Grove_Sensors/Touch/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-",title:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",description:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Touch",slug:"/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-",permalink:"/custom/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674086400,formattedLastUpdatedAt:"Jan 19, 2023",frontMatter:{description:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",title:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-",last_update:{date:"1/19/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",permalink:"/custom/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121"},next:{title:"Grove - Capacitive Touch Slide Sensor(CY8C4014LQI)",permalink:"/custom/Grove-Capacitive_Touch_Slide_Sensor-CY8C4014LQI"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Play with Raspberry pi",id:"play-with-raspberry-pi",level:3},{value:"Software",id:"software-1",level:4},{value:"UART Setting",id:"uart-setting",level:5},{value:"Raspberry Pi Demo",id:"raspberry-pi-demo",level:5},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"The Grove 12 button Capacitive Touch Keypad is built around the ATtiny1616, an AVR\xae 8-bit processor running at up to 16 MHz. ATtiny1616 is a low-power, high-performance chip integrated QTouch\xae peripheral touch controller which supports capacitive touch interfaces with proximity sensing and driven shield. With this module, you can easily create an arduino password keypad or a DIY phone keypad.  "),(0,i.kt)("p",null,"We made this keypad into a 3x4 form, just like the layout of a mobile phone keyboard. The traditional keypad requires 3 vertical lines and 4 horizontal lines to scan, which will occupy 7 I/O pins of the microcontroller. With the help of ATtiny1616 and Grove connector, only RX and TX two pins are enough for Grove - 12-Channel Capacitive Touch Keypad. You can easily use this module with a microcontroller with a hardware UART interface, or you can use the software UART to read the button input with two normal I/O pins."),(0,i.kt)("p",null,"All in all, the Grove 12 button Capacitive Touch Keypad is an easy-to-use module that requires very little code, especially when you use it with ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/seeeduino-boards-c-987.html"},"Grove compatible mainboards"),", no soldering, just plug and play."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Low Power ATtiny1616 controller"),(0,i.kt)("li",{parentName:"ul"},"3.3V / 5V compatible"),(0,i.kt)("li",{parentName:"ul"},"Capacitive touch, high sensitivity"),(0,i.kt)("li",{parentName:"ul"},"12 button keypad"),(0,i.kt)("li",{parentName:"ul"},"4 pin Grove UART connector"),(0,i.kt)("li",{parentName:"ul"},"On-board LED indicator")),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Phone keypad"),(0,i.kt)("li",{parentName:"ul"},"Password access"),(0,i.kt)("li",{parentName:"ul"},"Extended input interface")),(0,i.kt)("h2",{id:"pinout"},"Pinout"),(0,i.kt)("div",{align:"center"},(0,i.kt)("figure",null,(0,i.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pinmap.jpg",alt:"Touch Keypad hardware",title:"hardware overview"}),(0,i.kt)("figcaption",null,(0,i.kt)("b",null,"Figure 1"),". ",(0,i.kt)("i",null,"Hardware overview"))))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CPU"),(0,i.kt)("td",{parentName:"tr",align:null},"AVR\xae 8-bit CPU @ 16MHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sensor type"),(0,i.kt)("td",{parentName:"tr",align:null},"Capacitive Touch Keypad")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Button Quantity"),(0,i.kt)("td",{parentName:"tr",align:null},"12")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operate temperature Range"),(0,i.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 105\xb0C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"UART")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Firmware Download Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"UPDI")))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove 12 button Capacitive Touch Keypad"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html"},"Get ONE Now"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,i.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Connect the Grove 12 Channel Capacitive Touch Keypad to the ",(0,i.kt)("strong",{parentName:"li"},"D2")," port of the Base Shield.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are using a SAM board, then you should connect to the ",(0,i.kt)("strong",{parentName:"p"},"UART")," port. Please refer to table 1 for more detail")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Board"),(0,i.kt)("th",{parentName:"tr",align:null},"UART Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Connect Port"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"AVR Board(like Seeeduino V4.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Soft UART"),(0,i.kt)("td",{parentName:"tr",align:null},"D2,D3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SAM Board(like Seeeduino Lotus M0+"),(0,i.kt)("td",{parentName:"tr",align:null},"Hardware UART"),(0,i.kt)("td",{parentName:"tr",align:null},"UART")))),(0,i.kt)("div",{align:"center"},(0,i.kt)("b",null,"Table 1."),(0,i.kt)("i",null,"UART Port Selection")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/wiki-connect.jpg",alt:null})),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_ATtiny1616/blob/master/12_Channel_Keypad.ino"},"12_Channel_Keypad.ino")," from Github.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2"),". Then open ",(0,i.kt)("inlineCode",{parentName:"p"},"12_Channel_Keypad.ino"),", or you can just copy the following code into a new Arduino sketch."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include "SoftwareSerial.h"\n\n#if defined(ARDUINO_ARCH_AVR)\n#define SERIAL Serial\nSoftwareSerial mySerial(2,3);\n#define TRANS_SERIAL  mySerial\n#elif defined(ARDUINO_ARCH_SAMD)\n#define SERIAL SerialUSB\n#define TRANS_SERIAL  Serial\n#else\n\n#endif\n\n\n//RX=2,TX=3(D2) Software Serial Port\n\nvoid setup() {\n TRANS_SERIAL.begin(9600); \n\n    SERIAL.begin(9600);  // start serial for output\n    SERIAL.println("Version:v1.0");\n}\n\nvoid loop() {\n    printData();\n}\n\n/*\n* data mapping:E1---1\uff1bE2---2\uff1bE3---3\uff1bE4---4\uff1bE5---5\uff1bE6---6\uff1b\n*              E7---7\uff1bE8---8\uff1bE9---9\uff1bEA---*\uff1bEB---0\uff1bEC---#\uff1b\n*/\nvoid printData() {\n    while(TRANS_SERIAL.available()) {\n        uint8_t data = TRANS_SERIAL.read();\n        switch(data) {\n                case 0xE1 :\n                    SERIAL.println("1");\n                    break;\n                case 0xE2 :\n                    SERIAL.println("2");\n                    break;\n                case 0xE3 :\n                    SERIAL.println("3");\n                    break;\n                case 0xE4 :\n                    SERIAL.println("4");\n                    break;\n                case 0xE5 :\n                    SERIAL.println("5");\n                    break;\n                case 0xE6 :\n                    SERIAL.println("6");\n                    break;\n                case 0xE7 :\n                    SERIAL.println("7");\n                    break;\n                case 0xE8 :\n                    SERIAL.println("8");\n                    break;\n                case 0xE9 :\n                    SERIAL.println("9");\n                    break;\n                case 0xEA :\n                    SERIAL.println("*");\n                    break;\n                case 0xEB :\n                    SERIAL.println("0");\n                    break;\n                case 0xEC :\n                    SERIAL.println("#");\n                    break;\n                default:\n                    break;\n            }\n    }\n\n}\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Open the ",(0,i.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,i.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"m")," key at the same time. Set the baud rate to ",(0,i.kt)("strong",{parentName:"p"},"9600"),"."))),(0,i.kt)("admonition",{title:"success",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Now, touch the keypad, then the monitor will output the corresponding key.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("figure",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/arduino-output.jpg",alt:"grove keypad demo",title:"output"}))),(0,i.kt)("h3",{id:"play-with-raspberry-pi"},"Play with Raspberry pi"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove 12 button Capacitive Touch Keypad"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/Grove---12-Channel-Capacitive-Touch-Keypad-ATtiny1616-thumbnail.png",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-p-4068.html"},"Get ONE Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1"),". Plug the Grove Base Hat into Raspberry.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2"),". Connect the Grove 12 button Capacitive Touch Keypad to ",(0,i.kt)("strong",{parentName:"p"},"UART")," port of the Base Hat.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3"),". Power on the Raspberry Pi."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/pii-connect.jpg",alt:null})),(0,i.kt)("h4",{id:"software-1"},"Software"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If you are using ",(0,i.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,i.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,i.kt)("h5",{id:"uart-setting"},"UART Setting"),(0,i.kt)("p",null,"Before start, we need to configure the Raspberry Pi UART."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1. Enable Raspberry Pi3 ",(0,i.kt)("strong",{parentName:"li"},"UART0"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo nano /boot/config.txt\n")),(0,i.kt)("p",null,"Then add the content ",(0,i.kt)("inlineCode",{parentName:"p"},"dtoverlay=pi3-disable-bt")," to the end of the ",(0,i.kt)("strong",{parentName:"p"},"config.txt")),(0,i.kt)("p",null,"Tap ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"x")," to quit nano, and tap ",(0,i.kt)("inlineCode",{parentName:"p"},"y")," to save the modification."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 2. Disable the system serivce to use the UART0.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo systemctl disable hciuart\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Pi3-disable-bt disables the Bluetooth device and restores UART0/ttyAMA0 to GPIOs 14 and 15. It is also necessary to disable the system service that initialises the modem so it doesn't use the UART: sudo systemctl disable hciuart.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 3. Delete the ",(0,i.kt)("inlineCode",{parentName:"li"},"console=serial0,115200")," in ",(0,i.kt)("strong",{parentName:"li"},"cmdline.txt"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo nano /boot/cmdline.txt\n")),(0,i.kt)("p",null,"Then delete ",(0,i.kt)("inlineCode",{parentName:"p"},"console=serial0,115200")," in this file."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If you can not find `console=serial0,115200` in this txt file, just skip this step.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 4. Reboot the Raspberry Pi")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo reboot\n")),(0,i.kt)("p",null,"For more detial, please check the official ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/configuration/uart.md"},"Raspberry Pi UART Config")),(0,i.kt)("h5",{id:"raspberry-pi-demo"},"Raspberry Pi Demo"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment.")),(0,i.kt)("p",null,"After the system environment is successfully configured, you can see a prompt like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},"Running setup.py install for grove.py ... done\nSuccessfully installed grove.py-0.6\n#######################################################\n  Lastest Grove.py from github install complete   !!!!!\n#######################################################\n\n")),(0,i.kt)("p",null,"Now, tap 'ls', you can find the ",(0,i.kt)("strong",{parentName:"p"},"grove.py")," folder under the root directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"pi@raspberrypi:~ $ ls\n01_HelloRPi            Desktop    MagPi         rpi_apa102driver\n01_HelloRPi.cpp        Documents  Music         Templates\n4mics_hat              Downloads  ofxGPIO       Videos\napa102_led.c           env        Pictures      wiringpi_apa102\nbcm2835-1.50           grove.py   Public        wiringpi_apa102.cpp\nbcm2835-1.50.tar.gz    led        python_games\nbcm2835-1.50.tar.gz.1  led1       respeaker\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Excute the following commands to run the demo.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython grove_12_channel_touch_keypad.py\n\n")),(0,i.kt)("admonition",{title:"success",type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"Then touch the keycap, the terminal will output the corresponding key.\n"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/img/grove-py-result.jpg",alt:null})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/Grove%20-%2012-Channel%20Capacitive%20Touch%20Keypad%20(ATtiny1616).zip"},"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616) Schematic file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616/res/ATtiny1616-1617_Datasheet.pdf"},"ATtiny1616 Datasheet"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
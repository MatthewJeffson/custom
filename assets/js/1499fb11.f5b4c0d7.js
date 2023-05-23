"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3817],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},16100:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"Shield MaTrix V0.9",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Shield-MaTrix-V0.9b/",slug:"/Shield-MaTrix-V0.9b",last_update:{date:"02/03/2022",author:"gunengyu"}},l=void 0,o={unversionedId:"Sensor/Beyond_Grove/Accessories/Case/Shield-MaTrix-V0.9b",id:"Sensor/Beyond_Grove/Accessories/Case/Shield-MaTrix-V0.9b",title:"Shield MaTrix V0.9",description:"Shield MaTrix is a stackable Shield for Arduino, which makes it possible to learn programming using the most simple sensors on board.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Case/Shield-MaTrix-V0.9b.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Case",slug:"/Shield-MaTrix-V0.9b",permalink:"/custom/Shield-MaTrix-V0.9b",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Case/Shield-MaTrix-V0.9b.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"Shield MaTrix V0.9",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Shield-MaTrix-V0.9b/",slug:"/Shield-MaTrix-V0.9b",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Bracket for Infrared Proximity Sensor",permalink:"/custom/Bracket_for_Infrared_Proximity_Sensor"},next:{title:"FSM-55",permalink:"/custom/FSM-55"}},p={},s=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Feature",id:"feature",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"The principle of data display",id:"the-principle-of-data-display",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Necessary libraries",id:"necessary-libraries",level:2},{value:"Features using libraries",id:"features-using-libraries",level:2},{value:"IR receiver",id:"ir-receiver",level:3},{value:"nRF24L01+",id:"nrf24l01",level:3},{value:"Library functions MaTrix",id:"library-functions-matrix",level:2},{value:"Variables",id:"variables",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Main function",id:"main-function",level:2},{value:"Auxiliary functions",id:"auxiliary-functions",level:2},{value:"References",id:"references",level:2},{value:"Schematic",id:"schematic",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield_matrix.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Shield-Matrix-p-1773.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("p",null,"Shield MaTrix is a stackable Shield for Arduino, which makes it possible to learn programming using the most simple sensors on board."),(0,r.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Revision"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,r.kt)("th",{parentName:"tr",align:null},"Release"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.9"),(0,r.kt)("td",{parentName:"tr",align:null},"Prototype"),(0,r.kt)("td",{parentName:"tr",align:null},"11th-April-2013")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0.9b"),(0,r.kt)("td",{parentName:"tr",align:null},"Public version"),(0,r.kt)("td",{parentName:"tr",align:null},"27th-October-2013")))),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Arduino Mega compatible (recommended Freaduino Mega V1.4 (ATMega 2560 ) )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for Arduino Shield")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support for wireless devices based on the nRF24L01+, xBee")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Support Matrix LED 60mm 8X8 ( bright red , bright green , yellow)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IR control ( remote control )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RGB LED ( to indicate the various parameters)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clock button ( on / off various settings )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Buzzer ( Alarm or pressing the remote control buttons )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Light sensor (automatic illumination matrices )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RTC ( real time clock )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2C- interface (optional I / O)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Voltage 9-24 V or USB controller (recommended 12V 2A)"))),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Digital clock (synchronization NTP) with alarm"),(0,r.kt)("li",{parentName:"ul"},"Weather station (temperature-house street-cellar, pressure, humidity)"),(0,r.kt)("li",{parentName:"ul"},"Marquee (reading e-mail, social networks, etc.)"),(0,r.kt)("li",{parentName:"ul"},"Data transfer (on a similar device)")),(0,r.kt)("h2",{id:"the-principle-of-data-display"},"The principle of data display"),(0,r.kt)("p",null,"To display different information on the LED matrix display uses dynamic .\nAt the same time information is displayed only one line ( corresponding LED lights (red and (or ) green ) ) , all other lines - repaid. The next step - the previous line is extinguished and ignited the next line ( for her current LEDs). Switching rows is very fast and eyes perceive this switch as a single image ."),(0,r.kt)("p",null,"To minimize the number of pins involved are two different types of chips: the shift registers (used for control columns) and a demultiplexer ( control lines)."),(0,r.kt)("p",null,"Shift registers included chain and connected via SPI ( pins involved are described below)."),(0,r.kt)("p",null,'Demultiplexer has three address inputs (DA0, DA1, DA2) - a combination of "0" and "1" at the entrances clearly points to one of the 8 outputs, which will be active level . Additionally the demultiplexer has control inputs (E1, E2, E3) - with the first two (E1 and E2, they are connected in our scheme ) organized a complete quenching of the matrix , and with the input E3 - organized brightness adjustment (using PWM) .'),(0,r.kt)("h2",{id:"interfaces"},"Interfaces"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface for 4 bicolor LED matrix"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set shift registers (74HC595 - 8 pcs.) To control the columns of LEDs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Demultiplexer 74HC138 to control the rows of LEDs and their brightness (via PWM)")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Built-in clock (RTC) - based on the DS1307 with battery backup battery (CR1220 or CR1226)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface for RF- module nRF24L01 +")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clock button (for example, to turn off the alarm sound )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IR receiver at 38kHz ( for remote control )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wiring for connecting RGB- LED with common cathode or anode (selected by jumper )")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Light sensor ( for example, to automatically adjust the brightness)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Piezo transducer " beeper "')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2C- interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"xBee- interface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface for Arduino- Shield")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Pins on the board, involved on Arduino Mega"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D5 - IR receiver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D24 - clock button")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"xBee"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D16 - DIN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D17 - DOUT")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2C (DS1307)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D20 - SDA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D21 - SCL")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RGB-LED (check)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D34 - red")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D35 - Green")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D36 - Blue")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"nRF24L01 +"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D19 - RF_IRQ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D37 - RF_SCK")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D38 - RF_MISO")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D39 - RF_MOSI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D40 - RF_NSS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D41 - RF_CE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D45 - squeaker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A7 - light sensor")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Shift Registers"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D42 - SS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D51 - MOSI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D52 - SCK")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Demultiplex"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D49 - DA0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D48 - DA1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D47 - DA2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D44 - E3 (brightness)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"D43 - E1, E2 (quenching)"))))),(0,r.kt)("h2",{id:"necessary-libraries"},"Necessary libraries"),(0,r.kt)("p",null,"To use the various components Shield MaTrix requires the following libraries:"),(0,r.kt)("p",null,"Displays information on the matrix - MaTrix - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stepanovalex/MaTrix/archive/master.zip"},"MaTrix")," (including a simple display test and two real time display sketches.)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Real-time clock (RTC) - RTClib - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adafruit/RTClib/archive/master.zip"},"RTClib"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IR-receiver - IRremote ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/shirriff/Arduino-IRremote/archive/master.zip"},"IRremote")," (With this library, you can control the display using an IR remoter)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"nRF24L01 + - iBoardRF24 - ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/andykarpov/iBoardRF24/archive/master.zip"},"iBoardRF24")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/DevDuino-Sensor-Node-V13-ATmega-328-RC2032-battery-holder-p-1774.html?cPath=19_22"},"DevDuino Sensor Node 2.4G nRF24L01+")," remote control library)"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/Shield-matrix_nRF24L01Plus.jpg",alt:null})),(0,r.kt)("p",null,"Additionally required libraries that are used during operation of libraries:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Wire")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SPI")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://code.google.com/p/digitalwritefast/downloads/detail?name=digitalWriteFast.zip&can=2&q="},"digitalWriteFast")))),(0,r.kt)("h2",{id:"features-using-libraries"},"Features using libraries"),(0,r.kt)("p",null,"Only two libraries require little comment on their use:"),(0,r.kt)("h3",{id:"ir-receiver"},"IR receiver"),(0,r.kt)("p",null,"Since the IR receiver connected to digital pin of 5 must file / IRremote / IRremoteInt.h correct code as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n// Arduino Mega\n#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__)\n  //#define IR_USE_TIMER1   // tx = pin 11\n  //#define IR_USE_TIMER2     // tx = pin 9\n  #define IR_USE_TIMER3   // tx = pin 5\n  //#define IR_USE_TIMER4   // tx = pin 6\n  //#define IR_USE_TIMER5   // tx = pin 46\n\n")),(0,r.kt)("h3",{id:"nrf24l01"},"nRF24L01+"),(0,r.kt)("p",null,"Initialize the module as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n\n//iBoardRF24 radio(CE,CSN,MOSI,MISO,SCK,IRQ);\niBoardRF24 radio(41,40,39,38,37,19);\n\n\n\n")),(0,r.kt)("h2",{id:"library-functions-matrix"},"Library functions MaTrix"),(0,r.kt)("p",null,"To use the library in your sketch MaTrix need to declare a function void setup () to enter the following line of code:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-#include",metastring:"<SPI.h>","<SPI.h>":!0}," #include &lt;MaTrix.h&gt;  //connection library MaTrix\n\n MaTrix mymatrix;       //object creation mymatrix\n")),(0,r.kt)("h2",{id:"variables"},"Variables"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"byte array","[8][8]")," - main array.\nThe data from this array is determined that the currently displayed on the LED matrix"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," byte array[8][8] = { // An array of 64 bytes\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 7\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 6\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 5\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 4\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 3\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 2\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 1\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // \u0441\u0442\u0440\u043e\u043a\u0430 0\n   // red3      green3      red2      green2      red1      green1       red0      green0\n };\n")),(0,r.kt)("p",null,'Each bit corresponds to the corresponding LED in the matrix. 0 - LED "extinguished", 1 - LED "lit"'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"byte shadow","[8][8]"),' - additional ("shadow") array.\nLibrary functions used for organizing various effects and scrolling text (data from the shadow of the array for a particular effect rewritten the rule of the "shadow" of the array in the main).\n',(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," byte shadow[8][8] = { //An array of 64 bytes\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 7\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 6\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 5\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 4\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 3\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 2\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000},  // \u0441\u0442\u0440\u043e\u043a\u0430 1\n   {B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000, B00000000}   // \u0441\u0442\u0440\u043e\u043a\u0430 0\n   // red3      green3      red2      green2      red1      green1       red0      green0\n };\n")),(0,r.kt)("h2",{id:"definitions"},"Definitions"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," // Color\n #define RED    0\n #define GREEN  1\n #define YELLOW 2\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' // delay iteration in "drawing" effects (ms)\n #define VSLOW  500\n #define SLOW   150\n #define MID    100\n #define FAST   50\n #define VFAST  25\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," // effects\n #define FADE   4\n #define LEFT   3\n #define UP     1\n #define DOWN   2\n #define NONE   0\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," // hardware data\n #define BRIGHT 44    // brightness (pin 44 - PWM)\n #define LightSENS A7 // light sensor\n")),(0,r.kt)("h2",{id:"main-function"},"Main function"),(0,r.kt)("u",null," **mymatrix.init();**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: nitialization module.")),(0,r.kt)("u",null," **mymatrix.clearLed();**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_:cleaning the display.")),(0,r.kt)("u",null," **mymatrix.brightness(byte brightLevel);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: sets the display brightness."),(0,r.kt)("dd",null,"_brightLevel_:brightness level (byte), a value of 255 - set to maximum brightness.")),(0,r.kt)("p",null,"Example of use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," mymatrix.brightness(177);\n")),(0,r.kt)("u",null," **mymatrix.get Brightness();**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: returns the current display brightness.")),(0,r.kt)("p",null,"Example of use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," Serial.println(mymatrix.getBrightness());\n")),(0,r.kt)("u",null," **printString(String s, byte pos, byte color, unsigned char *Font, char effect, int speed);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: displays the specified string."),(0,r.kt)("dd",null,"_pos_: starting position of the first character (byte). Counting from the right edge of the matrix, starting with 0."),(0,r.kt)("dd",null,"_color_: color (byte). Three predefined values - RED, GREEN, YELLOW"),(0,r.kt)("dd",null,"_*Font_: a pointer to the font (unsigned char). Fonts available at the library: character - font5x8 (Latin), font6x8 (Latin and Cyrillic); digital - digit6x8bold, digit6x8future. Details about fonts, see the file fonts.c of the library archive MaTrix."),(0,r.kt)("dd",null,"_effect_: the effect of the inscription (char). Available predefined values: LEFT, UP, DOWN (shift in the corresponding direction), FADE (manifestation), NONE (No effect - instantly). Default value - NONE."),(0,r.kt)("dd",null,'_speed_: playback speed effect (int). Available predefined values: VSLOW, SLOW, MID,  FAST, VFAST (from "very slow" to "very quickly"), default value - MID.')),(0,r.kt)("p",null,"Example of use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' mymatrix.printString("123", 3, GREEN, font6x8, UP, SLOW);\n')),(0,r.kt)("u",null," **printRunningString(String s, byte color, unsigned char *Font, int speed);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,'_Description_: displays the defined "running" line.'),(0,r.kt)("dd",null,"_color_: color (byte). Three predefined values - RED, GREEN, YELLOW"),(0,r.kt)("dd",null,"_*Font_: a pointer to the font (unsigned char). Fonts available at the library: character - font5x8 (Latin), font6x8 (Latin and Cyrillic); digital - digit6x8bold, digit6x8future. Details about fonts, see the file fonts.c of the library archive MaTrix."),(0,r.kt)("dd",null,'_speed_: playback speed effect (int). Available predefined values: VSLOW, SLOW, MID,  FAST, VFAST (from "very slow" to "very quickly"), default value - MID.')),(0,r.kt)("p",null,"Example of use:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' mymatrix.printRunningString("MaTrix test!", RED, font6x8, FAST);\n')),(0,r.kt)("h2",{id:"auxiliary-functions"},"Auxiliary functions"),(0,r.kt)("u",null," **printArray();**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: displays the serial port the current state of the main array (array).")),(0,r.kt)("u",null," **printShadow();**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,'_Description_: displays the serial port the current state of the "shadow" of the array (shadow).')),(0,r.kt)("u",null," **printChar(unsigned char sym, byte pos, byte color);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: function changes the bulk (array)so that when displayed in the matrix in a predetermined position of the desired output color desired symbol."),(0,r.kt)("dd",null,"_pos_:starting character position (byte). Counting from the right edge of the matrix, starting with 0."),(0,r.kt)("dd",null,"_color_: color (byte). Three predefined values - RED, GREEN, YELLOW")),(0,r.kt)("p",null,"Attention! Font that is used when calling the function must be defined using the setFont."),(0,r.kt)("u",null," **printCharShadow(unsigned char sym, byte pos, byte color);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,'_Description_: function similar printChar, but is subject to modification "shadow" array (shadow).')),(0,r.kt)("u",null," **printStr(unsigned char *s, byte pos, byte color);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,"_Description_: function changes the bulk (array) so that when displayed on a matrix with a predetermined desired position of the array of characters displayed the color desired."),(0,r.kt)("dd",null,"_*s_: a pointer to an array of characters (unsigned char)."),(0,r.kt)("dd",null,"_pos_: starting position of the first character (byte). Counting from the right edge of the matrix, starting with 0."),(0,r.kt)("dd",null,"_color_: color (byte). Three predefined values - RED, GREEN, YELLOW")),(0,r.kt)("p",null,"Attention! Font that is used when calling the function must be defined using the setFont."),(0,r.kt)("u",null," **printStrShadow(unsigned char *s, byte pos, byte color);**"),(0,r.kt)("dl",null,(0,r.kt)("dd",null,'_Description_: function similar printChar, but is subject to modification "shadow" array (shadow).')),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,"[ ",(0,r.kt)("strong",{parentName:"p"},"ZIP")," ]"," Current version of the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/stepanovalex/MaTrix/archive/master.zip"},"MaTrix"),"."),(0,r.kt)("h2",{id:"schematic"},"Schematic"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MFull.JPG",alt:null})),(0,r.kt)("p",null,"The right side of the board (when viewed from the matrix) are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Clock button")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface for nRF24l01 +")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Place mounting RGB-LED")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Select jumper type LEDs (common anode or common cathode)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"IR receiver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2C - Interface"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MRight.JPG",alt:null})),(0,r.kt)("p",null,"On the left side of the board are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Light sensor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Piezo buzzer (beeper)"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/img/MLeft.JPG",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Shield-MaTrix-V0.9b/res/SM09b_scheme.jpg"},"Schematic of the device")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
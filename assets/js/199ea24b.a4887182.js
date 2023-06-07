"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80896],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>S});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),d=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},u=function(t){var e=d(t.components);return o.createElement(s.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),p=d(n),m=a,S=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?o.createElement(S,r(r({ref:e},u),{},{components:n})):o.createElement(S,r({ref:e},u))}));function S(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[p]="string"==typeof t?t:a,r[1]=l;for(var d=2;d<i;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16013:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={description:"Mini GSM/GPRS GPS Breakout SIM808",title:"Mini GSM/GPRS GPS Breakout SIM808",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Mini_GSM_GPRS_GPS_Breakout_SIM808",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Seeed_Elderly/Discrete Product/Mini_GSM_GPRS_GPS_Breakout_SIM808",id:"Seeed_Elderly/Discrete Product/Mini_GSM_GPRS_GPS_Breakout_SIM808",title:"Mini GSM/GPRS GPS Breakout SIM808",description:"Mini GSM/GPRS GPS Breakout SIM808",source:"@site/docs/Seeed_Elderly/Discrete Product/Mini_GSM_GPRS_GPS_Breakout_SIM808.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Mini_GSM_GPRS_GPS_Breakout_SIM808",permalink:"/custom/Mini_GSM_GPRS_GPS_Breakout_SIM808",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Mini_GSM_GPRS_GPS_Breakout_SIM808.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Mini GSM/GPRS GPS Breakout SIM808",title:"Mini GSM/GPRS GPS Breakout SIM808",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Mini_GSM_GPRS_GPS_Breakout_SIM808",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Edison_4WD_Auto_Robotic_Platform",permalink:"/custom/Edison_4WD_Auto_Robotic_Platform"},next:{title:"Nose LED Kit",permalink:"/custom/Nose_LED_Kit"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"GPS Specifications",id:"gps-specifications",level:2},{value:"Functional Block",id:"functional-block",level:2},{value:"Pin Definitions",id:"pin-definitions",level:3},{value:"Indicator LEDs",id:"indicator-leds",level:3},{value:"Usage",id:"usage",level:2},{value:"Related Product",id:"related-product",level:3},{value:"Reference Circuit",id:"reference-circuit",level:3},{value:"Getting Started with AT Command",id:"getting-started-with-at-command",level:3}],u={toc:d},p="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This board based on the latest SIMCOM SIM808 GSM/GPS module, it offers cellular GSM and GPRS data along with GPS technology for satellite navigation."),(0,a.kt)("p",null,"The board features ultra-low power consumption in sleep mode, giving the project incredibly long standby times. Furthermore there's an onboard battery charging circuit that can be used with LiPo batteries."),(0,a.kt)("p",null,"The GPS receiver is incredibly sensitive with 22 tracking and 66 acquisition channels, and also supports assisted-GPS (A-GPS) for indoor localisation. The board is controlled by AT command via UART and supports 3.3V and 5V logical level. It comes with a mini GPS and GSM antenna, however a battery is optional."),(0,a.kt)("p",null,"The board uses the 2G (not 3G or LTE) GSM networks."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Quad-band 850/900/1800/1900MHz")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GPRS multi-slot class12 connectivity: max. 85.6kbps(down-load/up-load)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GPRS mobile station class B")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Controlled by AT Command (3GPP TS 27.007, 27.005 and SIMCOM enhanced AT Commands)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supports charging control for Li-Ion battery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supports Real Time Clock")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supply voltage range 3.4V ~ 4.4V")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integrated GPS/CNSS and supports A-GPS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supports 3.0V to 5.0V logic level")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Low power consumption, 1mA in sleep mode")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Supports GPS NMEA protocol")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compact size 27mm x 46mm x 10mm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Standard SIM Card"))),(0,a.kt)("h2",{id:"gps-specifications"},"GPS Specifications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Receiver channels: 22 tracking / 66 acquisition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Coarse/Acquisition code: GPS L1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Tracking sensitivity: -165dBm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Cold start time: 30s (typ.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hot start time: 1s (typ.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Warm start time: 28s (typ.)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Horizontal position accuracy: ","<"," 2.5m CEP")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Power consumption - Acquisition: 42mA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Power consumption - Continuous tracking: 24mA")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Update rate: 5Hz"))),(0,a.kt)("h2",{id:"functional-block"},"Functional Block"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Lonet_pcb_top.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GPS Antenna: this is an uFL GPS antenna connector. You can connect either passive or active GPS antenna to it. Active GPS antenna runs at 2.8V voltage.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MicroUSB: the charging interface for Li-Ion battery, of input voltage range from 5V to 7V.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Power Button: this is the hard power switch for the module. When the module is power up, you can turn on or turn off the module by pressing the button for 2s.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Net Indicator: Red LED, it will tell the what status is about the module linking to network. It can be turned off by LEDs_EN jumper pad.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Status Indicator: Green LED, it will tell whether the module is on, light when the module is running. It can be turned off by LEDs_EN jumper pad.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Li-ion Battery: this is power supply for the module, input voltage is from 3.4V to 4.4V. It uses the JST-2.0mm connector, that make it convenient to connect to 3.7V Li-Po Battery.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"GSM Antenna: this is an uFL GSM antenna connector, just connect it to a GSM antenna for receiving GSM signal.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SIM - Card Holder: SIM card holder for standard SIM card"))),(0,a.kt)("h3",{id:"pin-definitions"},"Pin Definitions"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"col"}," **Name**"),(0,a.kt)("th",{scope:"col"}," **I/O**"),(0,a.kt)("th",{scope:"col"}," **Description**"),(0,a.kt)("th",{scope:"col"}," **Note**")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," BAT"),(0,a.kt)("td",null),(0,a.kt)("td",null," Power input / output"),(0,a.kt)("td",null," 3.4V - 4.4V DC")),(0,a.kt)("tr",null,(0,a.kt)("td",null," GND"),(0,a.kt)("td",null),(0,a.kt)("td",null," Power ground / logic ground"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null," VIO"),(0,a.kt)("td",null," I"),(0,a.kt)("td",null," Logic level reference"),(0,a.kt)("td",null," 3.0V - 5.0V DC")),(0,a.kt)("tr",null,(0,a.kt)("td",null," DTR"),(0,a.kt)("td",null," I"),(0,a.kt)("td",null," Wake up pin for module in sleep mode"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null," PWR"),(0,a.kt)("td",null," O"),(0,a.kt)("td",null," Power switch"),(0,a.kt)("td",null," Low level pulse")),(0,a.kt)("tr",null,(0,a.kt)("td",null," RI"),(0,a.kt)("td",null," O"),(0,a.kt)("td",null," Event/ message pin"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null," TXD"),(0,a.kt)("td",null," O"),(0,a.kt)("td",null," Transmit data"),(0,a.kt)("td",null," UART output from SIM808")),(0,a.kt)("tr",null,(0,a.kt)("td",null," RXD"),(0,a.kt)("td",null," I"),(0,a.kt)("td",null," Receive data"),(0,a.kt)("td",null," UART Input to SIM808")),(0,a.kt)("tr",null,(0,a.kt)("td",null," RST"),(0,a.kt)("td",null," I"),(0,a.kt)("td",null," Module rest"),(0,a.kt)("td",null))),(0,a.kt)("h3",{id:"indicator-leds"},"Indicator LEDs"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"col"}," **Indicator LEDs**"),(0,a.kt)("th",{scope:"col"}," **Status**"),(0,a.kt)("th",{scope:"col"}," **Behavior**")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Operating Status (Green)"),(0,a.kt)("td",null," Off"),(0,a.kt)("td",null," SIM808 is not running")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null," On"),(0,a.kt)("td",null," SIM808 is running")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Network Status (Red)"),(0,a.kt)("td",null," Off"),(0,a.kt)("td",null," SIM808 is not running")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null," 64ms on/ 800ms Off"),(0,a.kt)("td",null," SIM808 not registered to the network")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null," 64ms On/ 3000ms Off"),(0,a.kt)("td",null," SIM808 registered to the network")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null," 64ms On/ 300ms Off"),(0,a.kt)("td",null," PPP GPRS communication is established"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"related-product"},"Related Product"),(0,a.kt)("p",null,"The module comes with a mini GPS and GSM antenna, but not includes Li-Po battery. In addition, to use this module, you still need a unlock SIM-Card that supports GPRS service."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"3.7 V Li-ion Battery"),(0,a.kt)("li",{parentName:"ul"},"SIM-Card"),(0,a.kt)("li",{parentName:"ul"},"USB to UART Tool")),(0,a.kt)("h3",{id:"reference-circuit"},"Reference Circuit"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Rerfer_Circuit_SIM808.png",alt:null})),(0,a.kt)("h3",{id:"getting-started-with-at-command"},"Getting Started with AT Command"),(0,a.kt)("p",null,"The module is controlled by AT command via serial port, here we use Arduino as USB to serial tool. Upload the following code to Arduino and open the serial monitor. If you use other USB to serial tools, you can use ",(0,a.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/AT_Command_Tester_Application/"},"AT Command Tester")," or ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/Sscom32E.zip"},"SSCOM32")," to test AT commands."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// this sketch is used for testing LoNet with Arduino\n\n// Connect VIO to +5V\n// Connect GND to Ground\n// Connect RX (data into SIM808) to Digital 11\n// Connect TX (data out from SIM808) to Digital 10\n\n#include &lt;SoftwareSerial.h&gt;\n\nSoftwareSerial mySerial(10, 11); // RX, TX\n\nvoid setup()  \n{\n  // Open serial communications and wait for port to open:\n  Serial.begin(9600);\n  mySerial.begin(9600);\n\n}\n\nvoid loop() // run over and over\n{\n  if (mySerial.available())\n    Serial.write(mySerial.read());\n\n  if (Serial.available())\n  {\n    while(Serial.available())\n    {\n      mySerial.write(Serial.read());\n    }\n    mySerial.println();\n  }\n}\n```\n\n####   Set Baud and Enable Charging Function\n\nIt is recommended to execute this process when first time to use the module. In the Serial Monitor columns of following tables, input of AT commands are in back, module returns values are in orange.\n\n<table cellpadding="0">\n<tr>\n<th scope="col" width="50"> Serial Monitor\n</th>\n<th scope="col" width="100"> Description\n</th></tr>\n<tr>\n<td> AT\n<span style="color: rgb(242,133,0)">OK</span> </td>\n<td> Send command \u201cAT\u201d to synchronize baud rate. Serial port of module is by default set at auto-baud mode, and in this mode, it will not output any indications when the module is on.\n</td></tr>\n<tr>\n<td> AT+IPR=9600\n<span style="color: rgb(242,133,0)">OK</span></td>\n<td> Set baud rate at 9600bps, supports baud rate from 1200bps to 115200bps.\n</td></tr>\n<tr>\n<td> AT+ECHARGE=1\n<span style="color: rgb(242,133,0)">OK</span></td>\n<td> Send command \u201cAT+ECHARGE=1\u201d to enable battery charging function. By default the charging function is closed.\n</td></tr>\n<tr>\n<td> AT&amp;W\n<span style="color: rgb(242,133,0)">OK</span></td>\n<td> Save parameter setting.\n</td></tr>\n<tr>\n<td> AT+CPOWD=1\n<span style="color: rgb(242,133,0)">NORMAL POWER DOWN</span></td>\n<td>Power down the module.\n</td></tr>\n<tr>\n<td> <span style="color: rgb(242,133,0)">RDY\n+CFUN: 1\nGPS Ready\n+CPIN: READY\nCall Ready\nSMS Ready</span></td>\n<td>Turn on the module again by the power button, it will response status about GPS and GSM.\n</td></tr>\n<tr>\n<td> AT+CBC\n<span style="color: rgb(242,133,0)"> +CBC: 1,96,4175\n OK</span></td>\n<td>Inquire charging status and remaining battery capacity.\n</td></tr>\n<tr>\n<td> AT+CSQ\n<span style="color: rgb(242,133,0)"> +CSQ: 14,0\n OK</span></td>\n<td>Inquire GSM signal quality.\n</td></tr>\n</table>\n\n####   Get location with GPS\n\n<table cellpadding="0">\n<tr>\n<th scope="col" width="11"> Serial Monitor\n</th>\n<th scope="col" width="700"> Description\n</th></tr>\n<tr>\n<td> AT+CGPSPWR=1\n<span style="color: rgb(242,133,0)">OK</span> </td>\n<td> Open GPS\n</td></tr>\n<tr>\n<td> AT+CGPSSTATUS?\n<span style="color: rgb(242,133,0)"> +CGPSSTATUS: Location Not Fix\nOK</span></td>\n<td> Read GPS fix status, \u201cLocation Not Fix\u201d means that positioning is not successful. For the first time to start, it will take at least 30s. _**GPS must be tested by the window or outdoor.**_\n</td></tr>\n<tr>\n<td> AT+CGPSSTATUS?\n<span style="color: rgb(242,133,0)"> +CGPSSTATUS: Location 3D Fix\nOK</span></td>\n<td> GPS has fixed with 3D status.\n</td></tr>\n<tr>\n<td> AT+CGPSINF=0\n<span style="color: rgb(242,133,0)"> +CGPSINF:\n 0,2234.931817,11357.122485,\n92.461185,20141031041141.000,\n88,12,0.000000,0.000000 </span></td>\n<td> Get the current GPS location information. Parameters formate: &lt;mode&gt;, &lt;altitude&gt;, &lt;longitude&gt;, &lt;UTC time&gt;, &lt;TTFF&gt;, &lt;num&gt;, &lt;speed&gt;, &lt;course&gt;\n</td></tr>\n<tr>\n<td> AT+CGPSOUT=32\n<span style="color: rgb(242,133,0)">OK\n$GPRMC,043326.000,A,\n2234.9414,N,11357.1187,E,\n0.000,143.69,311014,,,A*50 </span></td>\n<td> Read NMEA $GPRMC data, of which, \u201c2234.9414 N, 11357.1187 E\u201d is the location coordinates. For more details about NMEA sentences, [check this site](http://www.gpsinformation.org/dale/nmea.htm).\n</td></tr>\n<tr>\n<td> AT+CGPSRST=0\n<span style="color: rgb(242,133,0)"> OK</span></td>\n<td>Reset GPS in Cold Start Mode.\n</td></tr>\n<tr>\n<td> AT+CGPSRST=1\n<span style="color: rgb(242,133,0)"> OK</span></td>\n<td>Reset GPS in Hot Start Mode.\n</td></tr>\n<tr>\n<td> AT+CGPSPWR=0\n<span style="color: rgb(242,133,0)"> OK</span></td>\n<td>Close GPS.\n</td></tr>\n</table>\n\n##   Resource  \n\n- **[PDF]**   [LoNet_DesignSchematic](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/LoNet_DesignSchematic.pdf)\n\n- **[PDF]**    [SIM800_ATCommand_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM800_ATCommand_Manual_V1.02.pdf)\n\n- **[PDF]**   [SIM808_HardwareDesign_Manual](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_Hardware_Design_V1.00.pdf)\n\n- **[PDF]**   [SIM808_GPSApplication_Note](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/res/SIM808_GPS_Application_Note_V1.00.pdf)\n\n- **[Library]**    [GPRS_Shield library on gitHub](https://github.com/Seeed-Studio/GPRS_Shield_Suli)\n\n- **[Library]**   [Adafruit_FONA_Library](https://github.com/adafruit/Adafruit_FONA_Library/)\n\n##   Related Projects\n\nIt\'s a pity that we don\'t have any demo about LoNet-GSM/GPRS/GPS Breakout in the [Recipe](https://www.seeedstudio.com/recipe/) yet.\n\nPost your awesome project about LoNet-GSM/GPRS/GPS Breakout to <font color="#FF0000">win $100 Coupon!</font>. Please feel free to contact us: **recipe@seeed.cc**\n\nHere we introduce some projects about [GPRS Shield](https://www.seeedstudio.com/depot/GPRS-Shield-V30-p-2333.html) as a reference.\n\n###  What is GPRS shield\n\n![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/113030009_1.jpg)\n\nFeatures:\n\n*   Compatible with standard Arduino and Arduino Mega\n\n*   Quad band support: 850/900/1800/1900MHz\n\n*   Full control via AT commands set: Standard - GSM 07.07 &amp; 07.05 and Enhanced - SIMCOM AT Commands\n\n*   Support TCP/UDP protocols\n\n###   SMS Remote Control\n\n![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/54c720959dae7.JPG)\n\nThis project describes how to turn your hot water heater on and off via SMS and check if it is on or off.\n\nIt is reliable, secure, easy and flexible because of the reasons below:\n\n*   Commands are always responded to and lost messages are re-requested\n\n*   It uses 128 bit password protection\n\n*   The pfodDesigner generates all the code, and you can use it to create you own custom menu.\n\n*   All the pfod screens are available via SMS, like sub-menus, multi and single selection list, text input, data logging and plotting.\n\n[**I want to make it.**](https://www.seeedstudio.com/recipe/98-sms-remote-control.html)\n\n###   Arduino Phone\n\n![](https://files.seeedstudio.com/wiki/Mini-GSM-GPRS-GPS-Breakout-SIM808/img/Recipe-arduinophone.png)\n\nArduino phone is a cell phone made by ourselves via combining Arduino and other shield modules.\n\nThis project tells us what you need to do when Arduino Phone apps can\'t fit your needs.\n\nThis Arduino Phone contains the following main functions.\n\n*   receive &amp; send message, letter input\n\n*   dial &amp; answer calls\n\n*   real time clock display\n\n*   A convenient and concise UI\n\n[**I want to make it.**](https://www.seeedstudio.com/recipe/37-arduinophone.html)\n\n[**More Awesome Projects by GPRS**](https://www.seeedstudio.com/recipe/index.php?query=GPRS)\n\n###   Share Your Awesome Projects with Us\n\nBorn with the spirit of making and sharing, that is what we believe makes a maker.\n\nAnd only because of this, the open source community can be as prosperous as it is today.\n\nIt does not matter what you are and what you have made, hacker, maker, artist or engineers.\n\nAs long as you start sharing your works with others, you are being part of the open source community and you are making your contributions.\n\nNow share your awesome projects with us on [Recipe](https://www.seeedstudio.com/recipe/), and win a chance to become the Core User of Seeed.\n\n*   Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.\n*   We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we\'ll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.\n\n<font color="#FF0000">Get more information about Core User, please email to:</font> **recipe@seeed.cc**\n\n##   Support\n\nAny tech support, please contact [_support@deegou.com_](http://www.deegou.com)\n\n## Tech Support\n<div>\n  Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). <br /><p style={{textAlign: \'center\'}}><a href="https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts" target="_blank"><img src="https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg" /></a></p>\n</div>\n')))}c.isMDXComponent=!0}}]);
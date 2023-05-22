"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18023],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>m});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,s=u(t,["components","mdxType","originalType","parentName"]),p=d(l),c=r,m=p["".concat(i,".").concat(c)]||p[c]||k[c]||a;return l?n.createElement(m,o(o({ref:e},s),{},{components:l})):n.createElement(m,o({ref:e},s))}));function m(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=c;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u[p]="string"==typeof t?t:r,o[1]=u;for(var d=2;d<a;d++)o[d]=l[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},22142:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var n=l(87462),r=(l(67294),l(3905));const a={description:"Bluetooth V4.0 HM-11 BLE Module",title:"Bluetooth V4.0 HM-11 BLE Module",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_V4.0_HM_11_BLE_Module",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,u={unversionedId:"Seeed_Elderly/Bee/Bluetooth_V4.0_HM_11_BLE_Module",id:"Seeed_Elderly/Bee/Bluetooth_V4.0_HM_11_BLE_Module",title:"Bluetooth V4.0 HM-11 BLE Module",description:"Bluetooth V4.0 HM-11 BLE Module",source:"@site/docs/Seeed_Elderly/Bee/Bluetooth_V4.0_HM_11_BLE_Module.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Bluetooth_V4.0_HM_11_BLE_Module",permalink:"/custom/zh-CN/Bluetooth_V4.0_HM_11_BLE_Module",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/Bluetooth_V4.0_HM_11_BLE_Module.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Bluetooth V4.0 HM-11 BLE Module",title:"Bluetooth V4.0 HM-11 BLE Module",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_V4.0_HM_11_BLE_Module",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Atom Node",permalink:"/custom/zh-CN/Atom_Node"},next:{title:"GPS Bee kit",permalink:"/custom/zh-CN/GPS_Bee_kit"}},i={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Electrical Characteristics",id:"electrical-characteristics",level:2},{value:"Pin definition",id:"pin-definition",level:2},{value:"AT commands &amp; Configuration",id:"at-commands--configuration",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"What is Grove-Serial Bluetooth",id:"what-is-grove-serial-bluetooth",level:3},{value:"IR Remote",id:"ir-remote",level:3},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function p(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11%20BLE%20Module.jpg",alt:null})),(0,r.kt)("p",null,"This is a SMD BLE module used in our BLE Bee and Xadow BLE. It is based on TI CC2541 chip, enables robust network nodes to be built with low total bill-of-material costs and highly suited for ultralow power consumption systems. The module is small and easy to use, with the preprogrammed firmware of manufacturer, you could quickly build BLE communications via its AT command. Supporting BLE communications with iphone, ipad and Android 4.3."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Bluetooth-V4.0-HM-11-BLE-Module-p-1803.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Bluetooth protocol: Bluetooth Specification V4.0 BLE")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Working frequency: 2.4 GHz ISM band")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface way: a serial port")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open environment within 30 meters can realize communication between modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"To send and receive no byte limit between modules")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Modulation method: GFSK (Gaussian Frequency Shift Keying)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transmission power: - DBM, 23-6 DBM, 0 DBM, 6 DBM, can be modified by the AT command")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"use TI CC2541 chip, configuration space of 256 KB, support the AT command, the user can according to need to change the role (master, slave mode) and the serial port baud rate, name of equipment, matching parameters such as passwords, use agile.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"power supply: + 3.3 VDC 50 mA")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"working temperature: - 5 ~ + 65 Centigrade"))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," Specification"),(0,r.kt)("th",null," Value")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"200px"}," Microprocessor"),(0,r.kt)("td",{width:"200px"}," CC2541")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Resources"),(0,r.kt)("td",null," Support the AT command, the user can according to need to change the role (master, slave mode) and the serial port baud rate,name of equipment,Matching parameters such as password, the use of flexible.")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Outline Dimension"),(0,r.kt)("td",null," 13.5mm x 18.5mm x 2.3mm")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Power supply"),(0,r.kt)("td",null," 3.3V")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Communication Protocol"),(0,r.kt)("td",null," Uart(3.3V LVTTL)")),(0,r.kt)("tr",null,(0,r.kt)("td",null," IO counts"),(0,r.kt)("td",null," 2")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Key input IO"),(0,r.kt)("td",null," 1")),(0,r.kt)("tr",null,(0,r.kt)("td",null," LED Indicators IO"),(0,r.kt)("td",null," 1")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Connectivity"),(0,r.kt)("td",null," Socket compatible with XBee"))),(0,r.kt)("h2",{id:"electrical-characteristics"},"Electrical Characteristics"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," Specification"),(0,r.kt)("th",null," Min"),(0,r.kt)("th",null," Typ"),(0,r.kt)("th",null," Max"),(0,r.kt)("th",null," Unit")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"400px"}," Max Input Voltage"),(0,r.kt)("td",{width:"150px"}," -0.3"),(0,r.kt)("td",{width:"150px"}),(0,r.kt)("td",{width:"150px"}," 3.6"),(0,r.kt)("td",{width:"150px"}," V")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Working Input Voltage"),(0,r.kt)("td",null," 2.0"),(0,r.kt)("td",null," 3.3"),(0,r.kt)("td",null," 3.6"),(0,r.kt)("td",null," V")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Transmit Current"),(0,r.kt)("td",null),(0,r.kt)("td",null," 15"),(0,r.kt)("td",null),(0,r.kt)("td",null," mA")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Receive Current"),(0,r.kt)("td",null),(0,r.kt)("td",null," 8.5"),(0,r.kt)("td",null),(0,r.kt)("td",null," mA")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Deep Sleep Current"),(0,r.kt)("td",null),(0,r.kt)("td",null," 600"),(0,r.kt)("td",null),(0,r.kt)("td",null," uA")),(0,r.kt)("tr",null,(0,r.kt)("td",null," Operating Temperature"),(0,r.kt)("td",null," -40"),(0,r.kt)("td",null),(0,r.kt)("td",null," +65"),(0,r.kt)("td",null," \xb0C"))),(0,r.kt)("h2",{id:"pin-definition"},"Pin definition"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/HM-11_Pinout.jpg",alt:null})),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," Pin"),(0,r.kt)("th",null," Name"),(0,r.kt)("th",null," Description")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"100px"}," 1"),(0,r.kt)("td",{width:"200px"}," UART_RTS"),(0,r.kt)("td",{width:"350px"}," UART")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 2"),(0,r.kt)("td",null," UART_TX"),(0,r.kt)("td",null," UART")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 3"),(0,r.kt)("td",null," UART_CTS"),(0,r.kt)("td",null," UART")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 4"),(0,r.kt)("td",null," UART_RX"),(0,r.kt)("td",null," UART")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 5"),(0,r.kt)("td",null," NC"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null," 6"),(0,r.kt)("td",null," NC"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null," 7"),(0,r.kt)("td",null," NV"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null," 8"),(0,r.kt)("td",null," NV"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null," 9"),(0,r.kt)("td",null," VCC"),(0,r.kt)("td",null," Power supply 3.3V")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 10"),(0,r.kt)("td",null," NC"),(0,r.kt)("td",null)),(0,r.kt)("tr",null,(0,r.kt)("td",null," 11"),(0,r.kt)("td",null," RESETB"),(0,r.kt)("td",null," Reset, active low at least in 5ms")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 12"),(0,r.kt)("td",null," GND"),(0,r.kt)("td",null," GND")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 13"),(0,r.kt)("td",null," PIO3"),(0,r.kt)("td",null," IO port, used for connect to DHT11/DS18B20")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 14"),(0,r.kt)("td",null," PIO2"),(0,r.kt)("td",null," Digital input, output")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 15"),(0,r.kt)("td",null," PIO1"),(0,r.kt)("td",null," LED indicator")),(0,r.kt)("tr",null,(0,r.kt)("td",null," 16"),(0,r.kt)("td",null," PIO0"),(0,r.kt)("td",null," Button pin"))),(0,r.kt)("h2",{id:"at-commands--configuration"},"AT commands ","&"," Configuration"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\uff09\tQuery the native MAC address\n"),"\nSend: AT+ADDR?"),(0,r.kt)("p",null,"Send after a successful return: OK+LADD: MAC address (address for 12 string)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\uff09\tQuery the baud rate\n"),"\nSend: AT+BAUD?"),(0,r.kt)("p",null,"Send after a successful return: OK+Get: ","[para1]"),(0,r.kt)("p",null,"Scope of para1:0 ~ 8. The parameters corresponding lists as below:"),(0,r.kt)("p",null,"0 -------- 9600"),(0,r.kt)("p",null,"1 -------- 19200"),(0,r.kt)("p",null,"2 -------- 38400"),(0,r.kt)("p",null,"3 -------- 57600"),(0,r.kt)("p",null,"4 -------- 115200"),(0,r.kt)("p",null,"5 -------- 4800"),(0,r.kt)("p",null,"6 -------- 2400"),(0,r.kt)("p",null,"7 -------- 1200"),(0,r.kt)("p",null,"8 -------- 230400"),(0,r.kt)("p",null,"Default: 0(9600)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\uff09\tSet the baud rate\n"),"\nSend: AT+BAUD","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK+Set:","[para1]"),(0,r.kt)("p",null,"Example: send: AT + BAUD1, return: OK+Set: 2.The baud rate is set to 19200."),(0,r.kt)("p",null,"Note: after the switch to the 1200, module will no longer support the configurations of the AT command, and press the PIO0 under standby, module can restore the factory Settings.Do not recommend using the baud rate.After setting the baud rate, modules should be on electricity, anew set parameters can take effect."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4\uff09\tfrom the device connected to the bluetooth address specified\n"),"\nSend: AT+CON","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK+CONN","[para2]"),(0,r.kt)("p",null,"Para2 range is: A, E, F"),(0,r.kt)("p",null,"Example: from the bluetooth address is: 0017EA0943AE, sending the AT+CON0017EA0943AE, module returns: OK+CONNA or OK+CONNF CONNE or OK."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5\uff09\tremoval equipment matching information\n"),"\nSend: AT+CLEAR"),(0,r.kt)("p",null,"Send after a successful return: OK+CLEAR"),(0,r.kt)("p",null,"Clear success had connected device address code information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6\uff09\tquery module working mode\n"),"\nSend: AT+MODE?"),(0,r.kt)("p",null,"Send after a successful return: OK+Get: ","[para]"),(0,r.kt)("p",null,"Para: the range of 0 ~ 2. 0 represents passthrough mode, on behalf of the PIO acquisition + remote control + 1 passthrough, 2 representative passthrough + remote control mode.The default is 0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7\uff09\tset module working mode:\n"),"\nSend: AT+MODE []"),(0,r.kt)("p",null,"Send after a successful return: OK+Set: ","[para]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8\uff09\tquery device name\n"),"\nSend: AT+NAME?"),(0,r.kt)("p",null,"Send after a successful return: OK+NAME ","[para1]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9\uff09\tset the device name\n"),"\nSend: AT+NAME ","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK+Set: ","[para1]"),(0,r.kt)("p",null,"Example: Set the device name to Seeed, sending the AT + NAMESeeed, return OK + Set: Seeed AT this time, the name of the bluetooth module has been changed to Seeed.\nNote: after the instruction execution, required to electricity, set the parameters of the approval."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10\uff09\tquery matching password\n"),"\nSend: AT+PASS?"),(0,r.kt)("p",null,"Send after a successful return: OK+PASS: ","[para1]"),(0,r.kt)("p",null,"Para1 range is 000000 ~ 999999, the default is 000000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11\uff09\tpairing set password\n"),"\nSend the AT+PASS ","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK+Set: ","[para1]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"12\uff09\trestore factory Settings\n"),"\nThe AT+RENEW send"),(0,r.kt)("p",null,"Send after a successful return: OK+RENEW"),(0,r.kt)("p",null,"Restore the default factory Settings module, the module Settings will be reset so, back to the factory with the status of the factory default, delay module 500 ms after the restart.If no need, please be careful."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"13\uff09\tmodule reset\n"),"\nSend: AT+RESET"),(0,r.kt)("p",null,"Send after a successful return: OK+RESET"),(0,r.kt)("p",null,"After the instruction execution module will delay 500 ms after the restart."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"14\uff09\tset the master-slave mode\n"),"\nSend: AT + ROLE ","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK+Set: ","[para1]"),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"//master"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/*\n\n This example code is in the public domain.\n\n */\n#include <SoftwareSerial.h>\n\nSoftwareSerial mySerial(2, 3); // RX, TX\n\nvoid setup()\n{\n    // Open serial communications and wait for port to open:\n    Serial.begin(9600);\n    while (!Serial) {\n        ; // wait for serial port to connect. Needed for Leonardo only\n    }\n\n\n    Serial.println("Goodnight moon!");\n\n    // set the data rate for the SoftwareSerial port\n    mySerial.begin(9600);\n    // set master\n    mySerial.print("AT+ROLE1");\n    delay(10000);\n\n\n}\n\nvoid loop() // run over and over\n{\n\n    // set the data rate for the SoftwareSerial port\n    mySerial.print("test I am master  ");\n    delay(10000);\n    if (mySerial.available())\n    Serial.write(mySerial.read());\n    if (Serial.available())\n    mySerial.write(Serial.read());\n}\n')),(0,r.kt)("p",null,"//slave"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'/*\n\n This example code is in the public domain.\n\n */\n#include <SoftwareSerial.h>\n\nSoftwareSerial mySerial(2, 3); // RX, TX\n\nvoid setup()\n{\n    // Open serial communications and wait for port to open:\n    Serial.begin(9600);\n    while (!Serial) {\n        ; // wait for serial port to connect. Needed for Leonardo only\n    }\n\n\n    Serial.println("Goodnight moon!");\n\n    // set the data rate for the SoftwareSerial port\n    mySerial.begin(9600);\n    // set slave\n    mySerial.print("AT+ROLE0");\n    delay(10000);\n\n\n}\n\nvoid loop() // run over and over\n{\n\n    // set the data rate for the SoftwareSerial port\n    mySerial.print("test I am slave ");\n    delay(10000);\n    if (mySerial.available())\n    Serial.write(mySerial.read());\n    if (Serial.available())\n    mySerial.write(Serial.read());\n}\n')),(0,r.kt)("h2",{id:"related-projects"},"Related Projects"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"what-is-grove-serial-bluetooth"},"What is Grove-Serial Bluetooth"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/7be197fcaee35992babbffd47462bbc0.image.530x397.jpg",alt:null})),(0,r.kt)("p",null,"Serial Bluetooth is designed for transparent wireless serial connection setup."),(0,r.kt)("p",null,"Serial port Bluetooth module is fully qualified Bluetooth V2.0+EDR(Enhanced Data Rate) 3Mbps Modulation with complete 2.4GHz radio transceiver and baseband."),(0,r.kt)("p",null,"It uses CSR Bluecore 04-External single chip Bluetooth system with CMOS technology and with AFH (Adaptive Frequency Hopping Feature)."),(0,r.kt)("h3",{id:"ir-remote"},"IR Remote"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_V4.0_HM_11_BLE_Module/img/Seeed-recipe-66-20140625115150.jpg",alt:null})),(0,r.kt)("p",null,"This project uses Grove - Water Sensor to create a simple but effective solution to watering plants."),(0,r.kt)("p",null,"With this demo, we can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Integrate all the remote commands into one Android device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Talk between Seeeduino and the Android panel via Bluetooth.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Remote control via IR"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/66-ir-remote.html"},(0,r.kt)("strong",{parentName:"a"},"I want to make it."))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/index.php?query=bluetooth"},(0,r.kt)("strong",{parentName:"a"},"More Awesome Projects by Bluetooth"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
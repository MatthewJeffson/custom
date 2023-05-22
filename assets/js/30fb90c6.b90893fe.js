"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28633],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},31415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={description:"Seeeduino GPRS",title:"Seeeduino GPRS",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_GPRS",last_update:{date:"1/31/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino_GPRS",id:"Sensor/Seeeduino Series/Seeeduino_GPRS",title:"Seeeduino GPRS",description:"Seeeduino GPRS",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_GPRS.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_GPRS",permalink:"/custom/Seeeduino_GPRS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_GPRS.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Seeeduino GPRS",title:"Seeeduino GPRS",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_GPRS",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Ethernet",permalink:"/custom/Seeeduino_Ethernet"},next:{title:"Seeeduino Lite",permalink:"/custom/Seeeduino_Lite"}},p={},s=[{value:"Application Ideas",id:"application-ideas",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Install the Driver",id:"install-the-driver",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started on Linux",id:"getting-started-on-linux",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_cover.jpg",alt:"enter image description here"})),(0,r.kt)("p",null,"Seeeduino GPRS is a IoT panel, you can connect to the internet through GPRS wireless network with it. Making/answering voice calls and sending/receiving SMS messages are also supported. Meanwhile, Seeeduino GPRS supports FM radio function and bluetooth communication. Seeeduino GPRS is base on Atmage32U4 and SIM800H. Atmage32U4 is a microcontroller and it is compatible with Arduino. SIM800H support Quad-band 850/900/1800/1900MHz, it can transmit Voice, SMS and data information with low power consumption. SIM800H also brings some extra features like for example Bluetooth and FM radio. It is designed with power saving technique so that the current consumption is as low as 0.1mA in sleep mode."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-GPRS-p-1909.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:"enter image description here"}))),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Internet of Things  "),(0,r.kt)("li",{parentName:"ul"},"Smart House"),(0,r.kt)("li",{parentName:"ul"},"Wearable Designed"),(0,r.kt)("li",{parentName:"ul"},"DIY Phone"),(0,r.kt)("li",{parentName:"ul"},"Industrial")),(0,r.kt)("p",null,"Here is some funny project for your reference."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino GPS/GSM Tracker"),(0,r.kt)("th",{parentName:"tr",align:null},"Arduino Phone 2.0"),(0,r.kt)("th",{parentName:"tr",align:null},"Arduino GPRS Weather Station"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_2.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/example_3.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Arduino-GPSGSM-Tracker/"},"Make it Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/ArduinoPhone-20-an-Open-Source-Mobile-Phone-Based-/"},"Make it Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Arduino-GPRS-Weather-Station-Part-1/"},"Make it Now"))))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatible with standard Arduino Leonardo"),(0,r.kt)("li",{parentName:"ul"},"Quad-Band 850/900/1800/1900MHz"),(0,r.kt)("li",{parentName:"ul"},"Headset jack"),(0,r.kt)("li",{parentName:"ul"},"Convenient external SIM card holder"),(0,r.kt)("li",{parentName:"ul"},"Control via AT commands"),(0,r.kt)("li",{parentName:"ul"},"Supports Bluetooth"),(0,r.kt)("li",{parentName:"ul"},"Supports FM Radio"),(0,r.kt)("li",{parentName:"ul"},"Current < 2A"),(0,r.kt)("li",{parentName:"ul"},"Arduino Leonardob Bootloader")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SIM800H Model")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPRS Model"),(0,r.kt)("td",{parentName:"tr",align:null},"SIM800H")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Quad-Band"),(0,r.kt)("td",{parentName:"tr",align:null},"850/900/1800/1900MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPRS multi-slot class"),(0,r.kt)("td",{parentName:"tr",align:null},"12/10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPRS mobile station class"),(0,r.kt)("td",{parentName:"tr",align:null},"B")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Standard GSM phase"),(0,r.kt)("td",{parentName:"tr",align:null},"2/2+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"FM"),(0,r.kt)("td",{parentName:"tr",align:null},"76~109MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bluetooth"),(0,r.kt)("td",{parentName:"tr",align:null},"Compliant with 3.0+EDR")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supply voltage range"),(0,r.kt)("td",{parentName:"tr",align:null},"3.4 ~ 4.4V")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AVR Arduino Microcontroller")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.kt)("td",{parentName:"tr",align:null},"ATmega32u4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,r.kt)("td",{parentName:"tr",align:null},"32KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5kB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EEPROM"),(0,r.kt)("td",{parentName:"tr",align:null},"1kB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,r.kt)("td",{parentName:"tr",align:null},"16MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PWM Channels"),(0,r.kt)("td",{parentName:"tr",align:null},"7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Analog Input Channels"),(0,r.kt)("td",{parentName:"tr",align:null},"12")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("p",null,"The images below show an overview of Seeeduino GPRS hardware features. The pin-out and alternate functions of various pins of Seeeduino GPRS are shown in the pin-out diagram. This could be used as a quick reference."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_hardware2.png",alt:"enter image description here"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Power Switch"),"\nSlide switch used to change the logic level and power output of the board to either 5V or 3.3V.\nNowadays many new and great sensors are being develop to work with 3.3V, with other duino boards you would need to place a logic level converter between the board and these sensor(s), with the Seeeduino GPRS board all you have to do is slide the switch!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DC Input"),"\nThe DC Input allows your Seeeduino GPRS board to be powered from a wall adapter so that you can supply more power to your project if needed, for example when using DC motors or other high power devices. The DC input can be 9V-12V and peak current is 2A.\nBut there's a hardware bug in Seeeduino GPRS that you have to notice. When an external power input, there's very short 6V at the 5V pin, last about 2ms. ",(0,r.kt)("strong",{parentName:"p"},"It is risk to destroy the device that connected to 5V.")," So we recommend that don't use the DC Input to power the system. And we had considered to fix the bug already, but will not come out very soon.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Breakout for SIM800h"),"\nYou can debug Sim800h by this interface.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ICSP"),"\nThis is the ICSP connection for the ATMEGA32U4-MUR, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, please note that those pins DIDN'T connect to D11~D13.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LED PWR2"),"\nSIM800H Power Indication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LED STA"),"\nOperating Status Indication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LED NET")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"SIM800H Behavior"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Off"),(0,r.kt)("td",{parentName:"tr",align:null},"SIM800H is not running")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64ms on/800ms off"),(0,r.kt)("td",{parentName:"tr",align:null},"SIM800H not registered the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64ms on/3000ms off"),(0,r.kt)("td",{parentName:"tr",align:null},"SIM800H registered the network")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64ms on/300ms off"),(0,r.kt)("td",{parentName:"tr",align:null},"SIM800H communication is established")))),(0,r.kt)("h2",{id:"install-the-driver"},"Install the Driver"),(0,r.kt)("p",null,"First of all, you need to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Get a Micro-USB cable"),"\nYou need a Micro-USB cable first; the data cable of an Android Phone will do fine.\nIf you can't find one, you can buy one ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Connect the board"),"\nConnect the Arduino board to your computer using the USB cable. The green power LED (labelled ",(0,r.kt)("strong",{parentName:"p"},"PWR"),") should go on."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Windows")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This drive is available for Windows XP, Windows Vista, Windows 7, Windows 8/8.1 and Windows 10.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Mega/img/download_driver.png",alt:"enter image description here"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail, despite best efforts."),(0,r.kt)("li",{parentName:"ul"},"Click on the Start Menu, and open up the Control Panel."),(0,r.kt)("li",{parentName:"ul"},"While in the Control Panel, navigate to System and Security. Next, click on System. Once the System window is up, open the ",(0,r.kt)("strong",{parentName:"li"},"Device Manager"),"."),(0,r.kt)("li",{parentName:"ul"},'Look under Ports (COM & LPT). You should find an open port named "Seeeduino GPRS". If there is no COM & LPT section, look under "Other Devices" for "Unknown Device".'),(0,r.kt)("li",{parentName:"ul"},'Right click on the "Seeeduino GPRS" port and choose the "Update Driver Software" option.'),(0,r.kt)("li",{parentName:"ul"},'Next, choose the "Browse my computer for Driver software" option.'),(0,r.kt)("li",{parentName:"ul"},'Finally, navigate to and select the driver file named "seeed_usb_serial.inf"'),(0,r.kt)("li",{parentName:"ul"},"Windows will finish up the driver installation from there.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"For Mac OSX")),(0,r.kt)("p",null,"You don't need to install any drivers."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino"},"Getting Started with Arduino"))),(0,r.kt)("p",null,"First of all, you need to Install an Arduino Software."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"enter image description here"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Launch the Arduino application")),(0,r.kt)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Environment#languages"},"Arduino Software (IDE) page")," for details.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Open the Blink example")),(0,r.kt)("p",null,"Open the LED blink example sketch: ",(0,r.kt)("strong",{parentName:"p"},"File > Examples >01.Basics > Blink"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png",alt:"enter image description here"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select your board")),(0,r.kt)("p",null,"You'll need to select the entry in the ",(0,r.kt)("strong",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino.\nSelecting a ",(0,r.kt)("strong",{parentName:"p"},"Arduino Leonardo"),". If you can not find the Arduino Leonardo, please check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"How to Add Seeed boards to Arduino IDE")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_board.png",alt:"enter image description here"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select your serial port")),(0,r.kt)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,r.kt)("strong",{parentName:"p"},"COM1")," and ",(0,r.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/seeeduino_gprs_select_com.png",alt:"enter image description here"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"On the Mac, this should be something with ",(0,r.kt)("strong",{parentName:"p"},"/dev/tty.USBmodem"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upload the program")),(0,r.kt)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png",alt:"enter image description here"})),(0,r.kt)("p",null,"A few seconds after the upload finishes, you should see the pin 13 (LED Pin 13) LED on the board start to blink (in green). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,r.kt)("h2",{id:"getting-started-on-linux"},"Getting Started on Linux"),(0,r.kt)("p",null,"For using on Linux, please go to ",(0,r.kt)("a",{parentName:"p",href:"http://playground.arduino.cc/Learning/Linux"},"Installing Arduino on Linux")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"GPRS Function")),(0,r.kt)("p",null,"Seeeduino GPRS offers the function of a mobile phone such as making/receiving voice calls, sending/receiving SMSes, make a TCP connection etc. Here are the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeeduino_GPRS"},"Seeeduino GPRS Library"),", please download it to your computer to use Seeeduino GPRS. Here is a brief introduction."),(0,r.kt)("p",null,"To start to play with the Seeeduino GPRS, a headphone and a SIM card are required."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_t.jpg",alt:"enter image description here"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/500px-Seeeduino_gprs_b.jpg",alt:"enter image description here"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To make a call")),(0,r.kt)("p",null,"Open the example sketch ",(0,r.kt)("strong",{parentName:"p"},"GPRS_CallUp")," in libraries/Seeeduino_GPRS/example/GPRS_CallUp/, replace the phone number in callUp function, then compile the sketch and upload it to your board. Seeeduino GPRS will call the number specified in the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <gprs.h>\n#include <SoftwareSerial.h>\n\nGPRS gprs;\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("GPRS - Call up Test...");\n    gprs.preInit();//power on SIM800\n    delay(1000);\n    while(0 != gprs.init()) { //gprs init\n        delay(1000);\n        Serial.print("init error\\r\\n");\n    }\n    Serial.println("Init success, start to call...");\n    gprs.callUp("150****9566");\n}\n\nvoid loop() {\n    //nothing to do\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To send an SMS")),(0,r.kt)("p",null,"Just like calling, an SMS can be sent with Seeeduino GPRS. Open the example sketch ",(0,r.kt)("strong",{parentName:"p"},"GPRS_SendSMS")," in libraries/Seeeduino_GPRS/example/GPRS_SendSMS/, and replace the phone number and message in sendSMS function, then compile the sketch and upload it to your board. Seeeduino GPRS will send the message to the number specified in the code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <gprs.h>\n#include <SoftwareSerial.h>\n\nGPRS gprs;\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("GPRS - Send SMS Test ...");\n    gprs.preInit();\n    delay(1000);\n    while(0 != gprs.init()) {\n        delay(1000);\n        Serial.print("init error\\r\\n");\n    }\n    Serial.println("Init success, start to send SMS message...");\n    gprs.sendSMS("130****3364","hello,world"); //define phone number and text\n}\n\nvoid loop() {\n    //nothing to do\n}\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"To answer a Call & read an SMS")),(0,r.kt)("p",null,"If someone calls or send a message to you, Seeeduino GPRS can also answer the call or read the message out. Open the example sketch ",(0,r.kt)("strong",{parentName:"p"},"GPRS_LoopHandle")," in libraries/Seeeduino_GPRS/example/GPRS_LoopHandle/, then compile the sketch and upload it to your board, the Seeeduino GPRS will poll to check if there is an incoming call or SMS. If there is an incoming call, Seeeduino GPRS will answer the call automatically. If there is an incoming SMS, Seeeduino GPRS will show the message in Serial Monitor."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <gprs.h>\n#include <SoftwareSerial.h>\n#include <stdio.h>\n\nchar gprsBuffer[64];\nint i = 0;\nchar *s = NULL;\nint inComing = 0;\n\nGPRS gprs;\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("GPRS - LoopHandle Test...");\n    gprs.preInit();\n    while(0 != gprs.init()) {\n        delay(1000);\n        Serial.print("init error\\r\\n");\n    }\n    Serial.println("Init success, start to monitor your call or message...");\n}\n\nvoid loop() {\n    if(gprs.serialSIM800.available()) {\n        inComing = 1;\n    }else{\n        delay(100);\n    }\n\n    if(inComing){\n        gprs.readBuffer(gprsBuffer,32,DEFAULT_TIMEOUT);\n        Serial.print(gprsBuffer);\n\n        if(NULL != strstr(gprsBuffer,"RING")) {\n            gprs.answer();\n        }else if(NULL != (s = strstr(gprsBuffer,"+CMTI: \\"SM\\""))) { //SMS: $$+CMTI: "SM",24$$\n            char message[MESSAGE_LENGTH];\n            int messageIndex = atoi(s+12);\n            gprs.readSMS(messageIndex, message,MESSAGE_LENGTH);\n            Serial.print(message);\n        }\n        gprs.cleanBuffer(gprsBuffer,32);\n        inComing = 0;\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"FM Radio Function")),(0,r.kt)("p",null,"Seeeduino GPRS has a FM radio function. Open the example sketch ",(0,r.kt)("strong",{parentName:"p"},"FM_Test")," in libraries/Seeeduino_GPRS/example/FM_Test/, and connect a button to your board, then compile the sketch and upload it to your board, Seeeduino GPRS functions like an FM radio. Even the channel can be changed with the button."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <fm.h>\n#include <SoftwareSerial.h>\n\nint channelButton = 5; //used for changing channel\nFM fm;\n\nvoid setup() {\n    pinMode(channelButton,INPUT);\n    Serial.begin(9600);\n    Serial.println("FM Test...");\n    fm.preInit();\n    while(0 != fm.powerOn()){\n        Serial.println("FM power on failed, try again...");\n        delay(2000);\n    }\n    fm.setVolume(6); //0,1,2,3,4,5,6\n    fm.scanChannel();\n    Serial.println("FM init success");\n}\n\nvoid loop() {\n    while(HIGH == digitalRead(channelButton)){\n        delay(50);\n    }\n    Serial.print("change Channel\\r\\n");\n    fm.channelNext();\n    while(LOW == digitalRead(channelButton)){\n        delay(50);\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bluetooth Function")),(0,r.kt)("p",null,"Seeeduino GPRS can be used as a bluetooth device, but it is still not very stable yet. There are two examples sketches in library. The first one is ",(0,r.kt)("strong",{parentName:"p"},"Bluetooth AT Command"),", you can send AT command to Seeeduino GPRS through it, and the other one is ",(0,r.kt)("strong",{parentName:"p"},"Bluetooth_Communicate"),", you can communicate with Seeeduino GPRS in SPP profile with it, but it may go wrong while connecting to your bluetooth device or mobile. Below is the code of Bluetooth AT Command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#include <bluetooth.h>\n#include <SoftwareSerial.h>\n\n#define DEFAULT_TIMEOUT 5\n#define BT_BUF_LEN      32\nBlueTooth bluetooth;\n\nchar bluetoothBuffer[BT_BUF_LEN];\nint start = 0;\n\nvoid setup() {\n    Serial.begin(9600);\n    Serial.println("Bluetooth AT Command Test...");\n    bluetooth.preInit();\n    delay(3*1000);\n    while(0 != bluetooth.powerOn()){ //bluetooth PowerOn\n        Serial.println("bluetooth power on failed, try again...");\n        delay(2000);\n    }\n}\n\nvoid loop() {\n    if(bluetooth.serialSIM800.available()) {\n        start = 1;\n    }else{\n        delay(500);\n    }\n\n    if(start){\n        //bluetooth.cleanBuffer(bluetoothBuffer,64);\n        bluetooth.readBuffer(bluetoothBuffer,BT_BUF_LEN,DEFAULT_TIMEOUT);\n        if(NULL != strstr(bluetoothBuffer,"+BTPAIRING:")){\n            bluetooth.acceptPairing();\n        }\n        if(NULL != strstr(bluetoothBuffer,"+BTCONNECTING:")){\n            bluetooth.acceptConnect();\n        }\n        start = 0;\n    }\n}\n')),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Schematic")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Eagle.zip"},"Seeeduino GPRS Eagle file")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Seeeduino_GPRS_v1.0_Schematic.pdf"},"Seeeduino GPRS PDF file"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Firmware")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/Firmware_update_for_Seeeduino_GPRS_v1.0.zip"},"Seeeduino GPRS Firmware & Update Guide"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SIM800 AT Command")),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/res/SIM800_Series_AT_Command_Manual_V1.01%20(2).pdf"},"SIM800 Series AT Command PDF"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Seeeduino GPRS Library"),"  "),(0,r.kt)("p",{parentName:"li"},"  ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeeduino_GPRS"},"Seeeduino GPRS Library on GitHub")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"  Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
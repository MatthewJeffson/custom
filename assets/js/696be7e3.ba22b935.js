"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94797],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=i,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},45416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={description:"Seeeduino Lotus",title:"Seeeduino Lotus",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Lotus",last_update:{date:"1/31/2023",author:"shuxu hu"}},r=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino_Lotus",id:"Sensor/Seeeduino Series/Seeeduino_Lotus",title:"Seeeduino Lotus",description:"Seeeduino Lotus",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_Lotus.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_Lotus",permalink:"/Seeeduino_Lotus",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_Lotus.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Seeeduino Lotus",title:"Seeeduino Lotus",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Lotus",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino LoRaWAN",permalink:"/Seeeduino_LoRAWAN"},next:{title:"Seeeduino Lotus Cortex-M0+",permalink:"/Seeeduino_Lotus_Cortex-M0-"}},s={},u=[{value:"Version",id:"version",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Install the Driver",id:"install-the-driver",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Seeeduino Lotus v1.0 Schematic Online Viewer",id:"seeeduino-lotus-v10-schematic-online-viewer",level:2},{value:"Seeeduino Lotus v1.1 Schematic Online Viewer",id:"seeeduino-lotus-v11-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"FAQ",id:"faq",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Seeeduino_Lotus_Cover.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,"Seeeduino Lotus is an ATMEGA328 Microcontroller development board. It is a combination of Seeeduino and Base Shield. Seeeduino Lotus v1.0 uses an Atmel ATMEGA328P-MU and CH340. ATMEGA328P-MU is a high performance, low power AVR 8-Bit Microcontroller. CH340 is a USB bus converter chip that can realize a USB to serial interface. Seeeduino Lotus v1.1 replace CH340 with CP2102N to enable the compatibilty with MAC, there is nothing other change compared to Seeeduino Lotus v1.0. Seeeduino Lotus has 14 digital input/outputs (6 of which can output PWM) and 7 analog input/outputs, a micro USB connection, an ICSP header, 12 Grove connections, a reset button."),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Seeeduino Lotus 1.0 works at Windows Operating System ONLY. Seeeduino Lotus 1.1 works with Window and Mac.")),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Revision"),(0,i.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Release"),(0,i.kt)("th",{parentName:"tr",align:null},"How to buy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial public release (beta)"),(0,i.kt)("td",{parentName:"tr",align:null},"Jul 22, 2014"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",alt:"enter image description here"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v1.1"),(0,i.kt)("td",{parentName:"tr",align:null},"Replace CH340 with CP2102N to enable the compatibilty with MAC"),(0,i.kt)("td",{parentName:"tr",align:null},"Dec 22,2016"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Lotus-V1.1-ATMega328-Board-with-Grove-Interface-p-2917.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",alt:"enter image description here"})))))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DIY"),(0,i.kt)("li",{parentName:"ul"},"IoT and Smart Home"),(0,i.kt)("li",{parentName:"ul"},"Robot"),(0,i.kt)("li",{parentName:"ul"},"Learning"),(0,i.kt)("li",{parentName:"ul"},"Toy")),(0,i.kt)("p",null,"Here is some funny project for your reference."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Car Controlled by Track Ball"),(0,i.kt)("th",{parentName:"tr",align:null},"FM Receiver"),(0,i.kt)("th",{parentName:"tr",align:null},"Make a Wooden Gun"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/example_1.png",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/Fm%20demo.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://community.seeedstudio.com/A-Car-Controlled-by-Track-Ball-p-1132.html"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"/FM_Receiver"},(0,i.kt)("span",null,(0,i.kt)("font",{size:"3"}," Make it Now ")))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/"},"Make it Now"))))),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fully compatible with Arduino UNO"),(0,i.kt)("li",{parentName:"ul"},"ATmega328 microcontroller"),(0,i.kt)("li",{parentName:"ul"},"12 on-board Grove connectors"),(0,i.kt)("li",{parentName:"ul"},"14 Digital I/O Pins (6 PWM outputs)"),(0,i.kt)("li",{parentName:"ul"},"6 Analog Inputs"),(0,i.kt)("li",{parentName:"ul"},"ISP Header"),(0,i.kt)("li",{parentName:"ul"},"Arduino UNO-R3 Shield Compatible"),(0,i.kt)("li",{parentName:"ul"},"Micro USB programming and power supply"),(0,i.kt)("li",{parentName:"ul"},"5V Operating Voltage")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,i.kt)("td",{parentName:"tr",align:null},"ATmega328P-MU")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,i.kt)("td",{parentName:"tr",align:null},"14")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PWM Channels"),(0,i.kt)("td",{parentName:"tr",align:null},"6")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Analog Input Channels"),(0,i.kt)("td",{parentName:"tr",align:null},"7")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,i.kt)("td",{parentName:"tr",align:null},"40 mA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,i.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RAM"),(0,i.kt)("td",{parentName:"tr",align:null},"2 KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EEPROM"),(0,i.kt)("td",{parentName:"tr",align:null},"1 KB")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clock Speed"),(0,i.kt)("td",{parentName:"tr",align:null},"16 MHz")))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,"The images below show an overview of Seeeduino Lotus hardware features. The pin-out and alternate functions of various pins of Seeeduino Lotus are shown in the pin-out diagram. This could be used as a quick reference."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/seeeduino_lotus_hardware_overview.jpg",alt:"enter image description here"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"LED-D13"),"\nAn LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"USB Input"),"\nUSB Port is used to connect the board to your PC for programming and for powering up. Micro USB is the ubiquitous version of USB, found in most Android phones, and other devices. You probably have dozens of these cables laying around your house."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reset"),"\nThis button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. This is not the case in other Arduino boards where the button is placed on top making it hard to access."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Power Pins & Analog Pins"),"\nJust like the extra Digital header pads, these extra connections are something we have personally come to realize people need in their projects, especially the power connections if you want to power more than one sensor/device without the use of a breadboard."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Grove Connectors"),"\nSeeedStudio has a variety of sensors/devices that can make use of this Analog, Digital,I2C and UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ICSP"),"\nThis is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"USB 2 Uart"),"\nPinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino Lotus to be used a USB2UART utility board.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Take gentle care in handling micro USB socket, or you might break the socket off.")),(0,i.kt)("h2",{id:"install-the-driver"},"Install the Driver"),(0,i.kt)("p",null,"First of all, you need to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Get a Micro-USB cable"),"\nYou need a Micro-USB cable first; the data cable of an Android Phone will do fine.\nIf you can't find one, you can buy one ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Micro-USB-Cable-48cm-p-1475.html?cPath=98_100"},"here"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Connect the board"),"\nConnect the Arduino board to your computer using the USB cable. The green power LED (labelled ",(0,i.kt)("strong",{parentName:"p"},"PWR"),") should go on."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This CH340 driver (Seeeduino_Lotus V1.0) is available for Windows XP, Windows Vista, Windows 7, Windows 8/8.1 and Windows 10.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/CH341SER.EXE"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png",alt:"enter image description here"}))),(0,i.kt)("p",null,"Double click on the driver and Install it."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/driver_install.png",alt:"enter image description here"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This CP2102N driver (Seeeduino_Lotus V1.1) is available for Windows XP, Windows Vista, Windows 7, Windows 8/8.1, Windows 10 and Mac.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/download_driver_for_seeeduino_lotus.png",alt:"enter image description here"})),"  "),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"This part is based on Arduino 1.6.9 under Windows 10.\n"))),(0,i.kt)("p",null,"First of all, you need to Install an Arduino Software."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"enter image description here"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Launch the Arduino application")),(0,i.kt)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Environment#languages"},"Arduino Software (IDE) page")," for details.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Open the Blink example")),(0,i.kt)("p",null,"Open the LED blink example sketch: ",(0,i.kt)("strong",{parentName:"p"},"File > Examples >01.Basics > Blink"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Add Seeeduino Lite to your Arduino IDE")),(0,i.kt)("p",null,"There is no ",(0,i.kt)("em",{parentName:"p"},"Seeeduino Lite")," option in the boards of your Arduino IDE, click on ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"How to Add Seeed boards to Arduino IDE")," for the instruction."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Select your board"),"\nYou'll need to select the entry in the ",(0,i.kt)("strong",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino.\nSelecting a ",(0,i.kt)("strong",{parentName:"p"},"Seeeduino Lotus"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_seeeduino_lotus.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Select your serial port"),"\nSelect the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,i.kt)("strong",{parentName:"p"},"COM1")," and ",(0,i.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/select_com.jpg",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upload the program"),'\nNow, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png",alt:"enter image description here"})),(0,i.kt)("p",null,"A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,i.kt)("h2",{id:"seeeduino-lotus-v10-schematic-online-viewer"},"Seeeduino Lotus v1.0 Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"seeeduino-lotus-v11-schematic-online-viewer"},"Seeeduino Lotus v1.1 Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Schematic")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_Sch.zip"},"Seeeduino Lotus Eagle file V1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.1.zip"},"Seeeduino Lotus Eagle file V1.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_SCH.pdf"},"Seeeduino Lotus SCH PDF file V1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20SCH.pdf"},"Seeeduino Lotus SCH PDF file V1.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino_Lotus_v1.0_PCB.pdf"},"Seeeduino Lotus PCB PDF file V1.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/res/Seeeduino%20Lotus%20v1.1%20PCB.pdf"},"Seeeduino Lotus PCB PDF file V1.1")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Datasheet")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf"},"ATmega328P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf"},"ATmega16U2")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"References")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/HomePage"},"Getting Started with Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/HomePage"},"Arduino Language Reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/Software"},"Download the Arduino Software(IDE)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/FAQ"},"Arduino FAQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/guide/introduction"},"Arduino Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Arduino"},"Wikipedia page for Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"Seeeduino Lotus V1.1 USB Driver"))))),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1. What's the different between Arduino UNO and Seeeduino Lotus")),(0,i.kt)("p",null,"Seeeduino Lotus is fully compatible with Arduino UNO. And Seeeduino Lotus has 12 Grove connectors, which makes it convenient to create your demo with Seeed Studio Grove Modules. What's more, Seeeduino Lotus uses a micro USB to power and program."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q2. I can't upload my sketch to Seeeduino Lotus")),(0,i.kt)("p",null,"Please check,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the Power LED on"),(0,i.kt)("li",{parentName:"ul"},"If you choose the right Port and Board (Seeeduino Lotus)"),(0,i.kt)("li",{parentName:"ul"},"Close and reopen Arduino IDE and try again")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q3. Where can I find technical support if I have some other issue.")),(0,i.kt)("p",null,"You can post a question to ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")," ."),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Da Vinci Code")," The work combines art and electronics. The art part makes the skeleton and consists of 11 layers of medium density fiberboard."),(0,i.kt)("iframe",{frameBorder:0,height:"327.5",scrolling:"no",src:"https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed",width:350}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"The Little Universe, a Gesture-Controlled Floor Lamp")," The Little Universe is a gesture-controlled floor lamp with three wooden legs and an artistic lamp head."),(0,i.kt)("iframe",{frameBorder:0,height:"327.5",scrolling:"no",src:"https://www.hackster.io/100385/the-little-universe-a-gesture-controlled-floor-lamp-323503/embed",width:350}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
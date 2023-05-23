"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92527],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const r={description:"Seeeduino v4.2",title:"Seeeduino v4.2",keywords:["Seeeduino_Series"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_v4.2",last_update:{date:"1/12/2022",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.2",id:"Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.2",title:"Seeeduino v4.2",description:"Seeeduino v4.2",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.2.md",sourceDirName:"Sensor/Seeeduino Series/Seeeduino",slug:"/Seeeduino_v4.2",permalink:"/custom/Seeeduino_v4.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino/Seeeduino_v4.2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1641945600,formattedLastUpdatedAt:"Jan 12, 2022",frontMatter:{description:"Seeeduino v4.2",title:"Seeeduino v4.2",keywords:["Seeeduino_Series"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_v4.2",last_update:{date:"1/12/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Buying Guide",permalink:"/custom/Seeeduino_Buying_Guide"},next:{title:"Seeeduino v4.0",permalink:"/custom/Seeeduino_v4.0"}},s={},d=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Application Ideas",id:"application-ideas",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Seeeduino V4.2 Schematic Online Viewer",id:"seeeduino-v42-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/cover.JPG",alt:"enter image description here"})),(0,i.kt)("p",null,"Seeeduino v4.2 is an Open Source, Arduino-compatible ATmega328 MCU development board. We think Seeeduino v4.2 is one of the best Arduino derivatives/compatibles available. Seeeduino v4.2 is feature rich, much more stable, easy-to-use and even good looking."),(0,i.kt)("p",null,'Seeeduino v4.2 is based the Arduino UNO bootloader, an ATmega16U2 as a UART-to-USB converter (basically work like an FTDI USB2UART chip). The board comes with an additional set of through-hole pads for all pins. These pads are aligned to 0.1" grid. This makes it easy to solder additional pin-headers to plug into breadboard or create your own attachment/shield with 0.1" dot-matrix general purpose PCBs.'),(0,i.kt)("p",null,"You can program the board via a micro-USB cable. Also, you can power the board via a DC Jack input (7 to 15V DC) is acceptable. There is a switch to choose the system's supply voltage either 3.3V or 5V, which is very useful if you want to set the system to 3.3V to interact with low voltage sensors."),(0,i.kt)("p",null,"Finally, the three on-board Grove interfaces can make your board connect to Grove modules easily. Want to make something awesome, maybe just a Seeeduino v4.2 and some Groves is enough."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png"}))),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("table",{className:"tg",align:"center",width:"100%"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{className:"tg-yw4l"},"Product Version"),(0,i.kt)("th",{className:"tg-yw42"},"Changes"),(0,i.kt)("th",{className:"tg-yw4l"},"Released Date")),(0,i.kt)("tr",null,(0,i.kt)("td",{className:"tg-4eph"},"Seeeduino V4.0"),(0,i.kt)("td",{className:"tg-4eph"},"Initial"),(0,i.kt)("td",{className:"tg-b7b8"},"Aug 15, 2014")),(0,i.kt)("tr",null,(0,i.kt)("td",{className:"tg-031e"},"Seeeduino V4.2"),(0,i.kt)("td",{className:"tg-031e"},"1.Cancel some pad on the top left corner.",(0,i.kt)("br",null),(0,i.kt)("br",null),"2.Change the usb location to middle",(0,i.kt)("br",null),(0,i.kt)("br",null),"3.Improve DCDC circuit to get a better performance",(0,i.kt)("br",null),(0,i.kt)("br",null),"4.Add an I2C Grove connector",(0,i.kt)("br",null),(0,i.kt)("br",null),"5.Change some silkscreen and part location"),(0,i.kt)("td",{className:"tg-yw4l"},"Aug 24, 2015")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Seeeduino V4.3"),(0,i.kt)("td",null,"Change from ",(0,i.kt)("strong",null,"ATMEGA328P-MU")," to ATMEGA328P-AU in V4.2",(0,i.kt)("br",null),"Replace the serial chip to ",(0,i.kt)("strong",null,"cp2102")),(0,i.kt)("td",null,"Nov. 2022")))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Fully compatible with Arduino UNO"),(0,i.kt)("li",{parentName:"ul"},"ATmega328 microcontroller"),(0,i.kt)("li",{parentName:"ul"},"14 Digital I/O Pins (6 PWM outputs)"),(0,i.kt)("li",{parentName:"ul"},"6 Analog Inputs"),(0,i.kt)("li",{parentName:"ul"},"ISP Header"),(0,i.kt)("li",{parentName:"ul"},"Arduino UNO-R3 Shield Compatible"),(0,i.kt)("li",{parentName:"ul"},"Micro USB programming and power supply"),(0,i.kt)("li",{parentName:"ul"},"On-board Grove connectors"),(0,i.kt)("li",{parentName:"ul"},"3.3/5V system operation power switch"),(0,i.kt)("li",{parentName:"ul"},'Additional pads aligned to 0.1" grid')),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",{class:"tg",align:"center",width:"100%"},(0,i.kt)("tr",null,(0,i.kt)("th",{class:"tg-yw4l"},"  Parameter"),(0,i.kt)("th",{class:"tg-yw4l"},"  Value/Range")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-vn4c"},"  DC Jack Input "),(0,i.kt)("td",{class:"tg-vn4c"},"  7-12V")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-031e",rowspan:"2"},"  DC Output Current-5V Pin "),(0,i.kt)("td",{class:"tg-031e"},"  With Micro USB 500mA Max")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-vn4c"},"  With DC Jack Power 2000mA Max  ")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-031e"},"  DC Output Current-3V3 Pin  "),(0,i.kt)("td",{class:"tg-031e"},"  500mA Max")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-vn4c"},"  DC Current per I/O Pin"),(0,i.kt)("td",{class:"tg-vn4c"},"  40mA")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-031e"},"  Flash Memory"),(0,i.kt)("td",{class:"tg-031e"},"  32 KB")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-vn4c"},"  RAM"),(0,i.kt)("td",{class:"tg-vn4c"},"  2 KB")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-yw4l"},"  EEPROM"),(0,i.kt)("td",{class:"tg-yw4l"},"  1 KB")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-6k2t"},"  Clock Speed"),(0,i.kt)("td",{class:"tg-6k2t"},"  16 MHz")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-yw4l"},"  Dimension"),(0,i.kt)("td",{class:"tg-yw4l"},"  68.6mm x 53.4mm")),(0,i.kt)("tr",null,(0,i.kt)("td",{class:"tg-6k2t"},"  Weight"),(0,i.kt)("td",{class:"tg-6k2t"},"  26g"))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,"The images below show an overview of Seeeduino v4.2 hardware features. The pin-out and alternate functions of various pins of Seeeduino v4.2 are shown in the pin-out diagram. This could be used as a quick reference."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/hardware_seeed.png",alt:"enter image description here"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u2776")," USB Input:"),"\nUSB Port is used to connect the board to your PC for programming and for powering up.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u2777")," DC Input:"),"\nThe DC power jack allows your Seeeduino board to be powered from a wall adapter so that you can supply more power to your project if needed. For example, when using DC motors or other high power devices. The DC input can be 7V-15V.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u2778")," Grove Connectors:"),"\nSeeedStudio has a variety of sensors/devices that can make use of this I2C or UART connection. In addition, we sell independent Grove connectors to help you make our own sensor connections. The I2C Grove connector is also connected to analog pin A4 and A5 for SDA and SCL respectively if you would like to use those pins instead. The UART Grove connector is connected to digital pins 0 and 1 for RX and TX respectively.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u2779")," ICSP:"),"\nThis is the ICSP connection for the ATmega328P, it is located in the standard ICSP/SPI position for Arduino Uno, Due, Mega, and Leonardo compatible hardware (e.g. shields) that may use this connector. The SPI pins in this port: MISO, SCK, and MOSI, are also connected to digital pins 12, 13, and 11 respectively just like those of the Arduino Uno.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u277a")," USB 2 Uart:"),"\nPinout of USB-2-Uart. These pads can be used to interact with other UART devices by putting the on-board ATmega328 in reset mode. This makes Seeeduino V4.2 to be used a USB2UART utility board.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u277b")," System Power Switch:"),"\nSlide switch is used to change the logic level and operating voltage of the board to either 5V or 3.3V.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u277c")," Reset:"),"\nThis button is conveniently placed on the side to allow you to reset the Seeeduino board even when a shield is placed on top. This is not the case in other Arduino boards where the button is placed on top making it hard to access.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u277d")," LED-D13:"),"\nThe LED is connected to D13 pin of the board. This can be used as an on-board LED indicator for programs/sketches.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{face:"",size:"5",font:!0,color:"00b0f0"},"\u277e")," RX/TX Indicator:"),"\nThe TX and RX LED indicators are connected to TX and RX of USB-to-UART chip. They work automatically, they let you know when the board is sending or receiving data respectively."))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1. Prepare a Seeeduino V4.2 and a Micro-USB cable."),(0,i.kt)("li",{parentName:"ul"},"Step 2. Connect the Seeeduino V4.2 to your computer with the Micro-USB Cable.\nThen the green power LED (labeled PWR) should go on.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/connect.jpg",alt:null})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please plug the USB cable gently, otherwise you may damage the interface.Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy.")),(0,i.kt)("h3",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino"},"Getting Started with Arduino"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1. Install the Driver")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Seeeduino V4.2"))),(0,i.kt)("p",null,"For Windows"),(0,i.kt)("p",null,"This drive is available for Windows XP, Windows Vista, Windows 7, Windows 8/8.1."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The driver will install automatically when we install arduino IDE at windows 10.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Signed_USB_Serial_Driver/archive/master.zip"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/download_driver.png",alt:"enter image description here"}))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plug in your board and wait for Windows to begin its driver installation process. After a few moments, the process will fail, despite best efforts."),(0,i.kt)("li",{parentName:"ul"},"Click on the Start Menu, and open up the Control Panel."),(0,i.kt)("li",{parentName:"ul"},"While in the Control Panel, navigate to System and Security. Next, click on System. Once the System window is up, open the ",(0,i.kt)("strong",{parentName:"li"},"Device Manager"),"."),(0,i.kt)("li",{parentName:"ul"},'Look under Ports (COM & LPT). You should find an open port named "Seeeduino v4.2". If there is no COM & LPT section, look under "Other Devices" for "Unknown Device".'),(0,i.kt)("li",{parentName:"ul"},'Right click on the "Seeeduino v4.2" port and choose the "Update Driver Software" option.'),(0,i.kt)("li",{parentName:"ul"},'Next, choose the "Browse my computer for Driver software" option.'),(0,i.kt)("li",{parentName:"ul"},'Finally, navigate to and select the driver file named "seeed_usb_serial.inf"'),(0,i.kt)("li",{parentName:"ul"},"Windows will finish up the driver installation from there.")),(0,i.kt)("p",null,"For Mac OSX and Linux, You don't need to install any drivers."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"For Seeeduino v4.3"))),(0,i.kt)("p",null,"You need to install the cp2102 driver to use the serial port of Seeeduino V4.3."),(0,i.kt)("p",null,"You can click ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/CP210x_Universal_Windows_Driver.zip"},"here")," to download and unzip the Windows driver for cp2102."),(0,i.kt)("p",null,"If you are using another operating system, you can get the driver on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.silabs.com/developers/usb-to-uart-bridge-vcp-drivers?tab=downloads"},"official website"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2. Launch the Arduino application.")),(0,i.kt)("p",null,"Double-click the Arduino application (arduino.exe) you have previously installed."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Environment#languages"},"Arduino Software (IDE) page")," for details.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3. Open the Blink example.")),(0,i.kt)("p",null,"Find the LED blink example sketch: ",(0,i.kt)("strong",{parentName:"p"},"File > Examples >01.Basics > Blink"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/blink.png",alt:"enter image description here"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4. Select your board.")),(0,i.kt)("p",null,"You'll need to select the entry in the ",(0,i.kt)("strong",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino.Select the ",(0,i.kt)("strong",{parentName:"p"},"Seeeduino v4.2"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_board.png",alt:"enter image description here"})),(0,i.kt)("p",null,"If you can not find the Seeeduino v4.2, please check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"How to Add Seeed boards to Arduino IDE")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5. Select your serial port.")),(0,i.kt)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,i.kt)("strong",{parentName:"p"},"COM1")," and ",(0,i.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/select_port.png",alt:"enter image description here"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"On the Mac or Linux, this should be something with ",(0,i.kt)("strong",{parentName:"p"},"/dev/tty.USBmodem"),".")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6. Upload the program.")),(0,i.kt)("p",null,'Now, simply click the "Upload" button in the environment. Wait a few seconds - you should see the RX and TX LED indicators on the board flashing. If the upload is successful, the message "Done uploading."'),(0,i.kt)("p",null,"A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink (in orange). If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/Seeeduino_v4_2_L.jpg",alt:"enter image description here"})),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"DIY"),(0,i.kt)("li",{parentName:"ul"},"IoT and Smart Home"),(0,i.kt)("li",{parentName:"ul"},"Robot"),(0,i.kt)("li",{parentName:"ul"},"Learning")),(0,i.kt)("p",null,"Here is some funny project for your reference."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Paper Man"),(0,i.kt)("th",{parentName:"tr",align:null},"Fingerprint Lock"),(0,i.kt)("th",{parentName:"tr",align:null},"Monitor Stand"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project1.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project2.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project3.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Paper-Man-a-machine-created-by-Arduino-and-NFC/"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Door-to-Open-Source-Hardware-A-fingerprint-lock-so/"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/DIY-a-Programmable-Acrylic-Monitor-Stand/"},"Make it Now"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Desk Promo"),(0,i.kt)("th",{parentName:"tr",align:null},"Tiger Machine"),(0,i.kt)("th",{parentName:"tr",align:null},"Colorful Pyramid"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project4.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project5.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/SeeeduinoV4/images/project6.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Desk-promo/"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/How-to-Make-Your-Tiny-Tiger-Machine/"},"Make it Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/DIY-a-colorful-pyramid/"},"Make it Now"))))),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1\uff1aIn Ubuntu, I get the error 'avrdue: ser_open(): can't open device \"dev/tty/ACM0\": Permission denied'. How do I connect Seeeduino V4 to a Linux PC?")),(0,i.kt)("p",null,"A1\uff1a Please read the instuction ",(0,i.kt)("a",{parentName:"p",href:"http://playground.arduino.cc/Linux/Debian"},"here")," to make Arduino IDE work without root permission in Ubuntu. Please find below the relevant part."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q2: What's the difference between Arduino UNO and Seeeduino v4.2?")),(0,i.kt)("p",null,"A2: Seeeduino v4.2 is fully compatible with Arduino UNO. The mainly difference list below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Use a micro USB to power and program the board"),(0,i.kt)("li",{parentName:"ul"},"3 on-board Grove connector"),(0,i.kt)("li",{parentName:"ul"},"3.3/5V system power switch"),(0,i.kt)("li",{parentName:"ul"},"DCDC circuit instead of LDO, more efficiency"),(0,i.kt)("li",{parentName:"ul"},"Others circuit improve")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q3: Error downloading ",(0,i.kt)("a",{parentName:"strong",href:"http://downloads.arduino.cc/packages/package_index.json"},"http://downloads.arduino.cc/packages/package_index.json"))),(0,i.kt)("p",null,"A3: Please follow below steps to solve the issue."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click File -> Preferences"),(0,i.kt)("li",{parentName:"ul"},"Click  in the url C:\\Users",".","..\\AppData\\Local\\Arduino15\\preferences.txt at the bottom of the Preferences window."),(0,i.kt)("li",{parentName:"ul"},"Delete all the files except preferences.txt, staging and packages."),(0,i.kt)("li",{parentName:"ul"},"Close and reopen an IDE window and it shall work.")),(0,i.kt)("h2",{id:"seeeduino-v42-schematic-online-viewer"},"Seeeduino V4.2 Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2.pdf"},"Download Wiki PDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/SeeeduinoV4.2.zip"},"Seeeduino V4.2 in EAGLE file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.2_sch.pdf"},"Seeeduino V4.2 in PDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf"},"Seeeduino V4.0 in EAGLE file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/Seeeduino_v4.0_sch.pdf"},"Seeeduino V4.0 in PDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega328.pdf"},"ATmega328P")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SeeeduinoV4/resources/ATmega16u2.pdf"},"ATmega16U2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Guide/HomePage"},"Getting Started with Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/HomePage"},"Arduino Language Reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/Software"},"Download the Arduino Software(IDE)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Main/FAQ"},"Arduino FAQ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/guide/introduction"},"Arduino Introduction")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Arduino"},"Wikipedia page for Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,i.kt)("a",{parentName:"li",href:"http://j3.rf-explorer.com/60-rfe/specifications/184-rf-explorer-3g-iot-for-seeeduino"},"How to fit RF Explorer 3G+ IoT modules on Seeeduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Firmware]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/forum_doc/reg/seeeduino_boot.zip"},"How to burn the bootloader"))),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hacking the Stairs at Seeed's New Office"),': Turn the stairs at the office into an interactive installation, and even a cool way to convey the message "STAFF ONLY" to visitors.'),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/stairs-hackers/hacking-the-stairs-at-seeed-s-new-office-9ef30b/embed",width:"350"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Make an Interactive Color Matrix with Seeeduino/Arduino"),": This is an interactive art project made by a Seeeduino 4.2 boards, looking good and easy to do!"),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/78141/make-an-interactive-color-matrix-with-seeeduino-arduino-f9f3c0/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6504],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),c=a,h=s["".concat(u,".").concat(c)]||s[c]||m[c]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={description:"Seeeduino Cortex M0",title:"Seeeduino Cortex M0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-Cortex-M0",last_update:{date:"1/31/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Seeeduino Series/Seeeduino-Cortex-M0",id:"Sensor/Seeeduino Series/Seeeduino-Cortex-M0",title:"Seeeduino Cortex M0",description:"Seeeduino Cortex M0",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino-Cortex-M0.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino-Cortex-M0",permalink:"/zh-CN/Seeeduino-Cortex-M0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino-Cortex-M0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Seeeduino Cortex M0",title:"Seeeduino Cortex M0",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-Cortex-M0",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Cloud",permalink:"/zh-CN/Seeeduino_Cloud"},next:{title:"Seeeduino Ethernet",permalink:"/zh-CN/Seeeduino_Ethernet"}},u={},d=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"UART",id:"uart",level:3},{value:"Pinout",id:"pinout",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-wiki.jpg",alt:"enter image description here"})),(0,a.kt)("p",null,"The Seeeduino Cortex-M0+ features an Atmel SAMD21 MCU which is based on a 32-bit ARM\xae Cortex\xae-M0+ processor. With the help of this powerful core, SAMD21 is much more powerful than AVR and can achieve many functions and more complex calculations that cannot be implemented on AVR chips."),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/Seeeduino-M0%2B.html"},"Seeeduino M0+")," is a brand new product line that is fully compatible with Arduino Zero and we currently have Seeeduino Cortex-M0+ and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus Cortex-M0+")," in this serial."),(0,a.kt)("p",null,"The Seeeduino Cortex-M0+ has the same header pinout as the Seeeduino Lotus Cortex-M0+, including 14 digital I/O (10 PWM output) and 6 analog I/O. On the meantime, it provides 3 on-board Grove connector: two I2C and 1 UART. If you want to use more grove port, you can use a ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Base-Shield-V2.html"},"Base Shield V2")," to work with this board."),(0,a.kt)("p",null,"On top of that, Seeeduino Cortex-M0+ is the first Seeeduino development board with a USB type C interface. USB Type C is the future trend: the plugs are reversible, higher data transfer rate, and more scalable functions. We will introduce more development boards with Type C. You can use type C to supply power and transmit data or use the 7~15V DC jack to supply power for this board."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"feature"},"Feature"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ARM Cortex-M0+ CPU running at up to 48MHz"),(0,a.kt)("li",{parentName:"ul"},"256KB in-system self-programmable Flash"),(0,a.kt)("li",{parentName:"ul"},"32KB SRAM Memory"),(0,a.kt)("li",{parentName:"ul"},"Compatible with Arduino Zero"),(0,a.kt)("li",{parentName:"ul"},"10-bit, 350ksps Digital-to-Analog Converter (DAC)"),(0,a.kt)("li",{parentName:"ul"},"One 12-bit, 350ksps Analog-to-Digital Converter (ADC) with up to 20 channels"),(0,a.kt)("li",{parentName:"ul"},"USB type C for power and data")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,a.kt)("td",{parentName:"tr",align:null},"SAM D21")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power Input"),(0,a.kt)("td",{parentName:"tr",align:null},"USB Type C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"USB:5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Digital I/O Pins"),(0,a.kt)("td",{parentName:"tr",align:null},"14")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PWM Channels"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Analog Input Channels"),(0,a.kt)("td",{parentName:"tr",align:null},"6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DC Current per I/O Pin"),(0,a.kt)("td",{parentName:"tr",align:null},"40 mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IO Input Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,a.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Flash Memory"),(0,a.kt)("td",{parentName:"tr",align:null},"256KB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum CPU frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"48 MHz")))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/hardware.png",alt:"enter image description here"})," "),(0,a.kt)("h3",{id:"uart"},"UART"),(0,a.kt)("p",null,"For the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/SEEEDUINO-M0%2B.html"},"Seeed M0 serial board"),", there are 3 UART port as the following picture shown. When you code with Arduino IDE, you should use the corresponding port name, which is:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"SerialUSB or Serial\n")),(0,a.kt)("p",null,"for type C port;"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Serial1\n")),(0,a.kt)("p",null,"for Grove UART port;"),(0,a.kt)("p",null,"and "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Serial2\n")),(0,a.kt)("p",null,"for UART pins in the header"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/UART(1).jpg",alt:"enter image description here"})),(0,a.kt)("h3",{id:"pinout"},"Pinout"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/img/102010248-pinout.jpg",alt:"enter image description here"})),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials required")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Seeeduino Cortex-M0+ x1 "),(0,a.kt)("li",{parentName:"ul"},"Computer x1"),(0,a.kt)("li",{parentName:"ul"},"USB typc cable x1")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Some USB cables can only supply power and cannot transfer data. If you don't have a usb cable or don't know if your usb cable can transmit data, you can check [seeed USB type C support USB 3.1 ](https://www.seeedstudio.com/USB-Type-C-to-A-Cable-1Meter-p-4085.html).\n"))),(0,a.kt)("p",null,"Connect the Seeeduino Cortex-M0+ to your computer using the USB cable. The blue power LED (labelled ",(0,a.kt)("strong",{parentName:"p"},"PWR"),") should light on."),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1. You need to Install an Arduino Software."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:"enter image description here"}))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Launch the Arduino application")),(0,a.kt)("p",null,"Double-click the Arduino application (arduino.exe) you have previously downloaded."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If the Arduino Software loads in a different language, you can change it in the preferences dialog. See the [Arduino Software (IDE) page](https://www.arduino.cc/en/Guide/Environment#languages) for details.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2. Open the Blink example"),(0,a.kt)("br",{parentName:"li"}),"Open the LED blink example sketch: ",(0,a.kt)("strong",{parentName:"li"},"File > Examples >01.Basics > Blink"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/select_blink.png"}),(0,a.kt)("figcaption",null,(0,a.kt)("i",null,"Blink Path")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3. Add the Seeed Board"),(0,a.kt)("br",{parentName:"li"}),"Please follow the ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeed_Arduino_Boards/"},"Seeed Board Intallation Guide")," and serch the key word ",(0,a.kt)("strong",{parentName:"li"},"Seeeduino samd")," to add the ",(0,a.kt)("strong",{parentName:"li"},"Seeeduino Zero")," into your Arduino IDE. ")),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board2.png"}),(0,a.kt)("figcaption",null,(0,a.kt)("i",null,"The key word is ",(0,a.kt)("b",null,"samd_zero")," ")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4. Select your board and port"),(0,a.kt)("br",{parentName:"li"}),"You'll need to select the entry in the ",(0,a.kt)("strong",{parentName:"li"},"Tools > Board")," menu that corresponds to your Arduino.\nSelecting the ",(0,a.kt)("strong",{parentName:"li"},"Seeeduino zero"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/board1.png"}),(0,a.kt)("figcaption",null," ",(0,a.kt)("i",null,"Choose the right board")))),(0,a.kt)("p",null,"Select the serial device of the Arduino board from the Tools | Serial Port menu. This is likely to be COM3 or higher (",(0,a.kt)("strong",{parentName:"p"},"COM1")," and ",(0,a.kt)("strong",{parentName:"p"},"COM2")," are usually reserved for hardware serial ports). To find out, you can disconnect your Arduino board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus_Cortex-M0-/img/port.png"}),(0,a.kt)("figcaption",null,(0,a.kt)("i",null,"Choose the right port")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.Upload the program"),(0,a.kt)("br",{parentName:"li"}),'Now, simply click the "Upload" button in the environment. Wait a few seconds and if the upload is successful, the message "Done uploading." will appear in the status bar.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino_GPRS/img/upload_image.png"}),(0,a.kt)("figcaption",null,(0,a.kt)("i",null,"Upload the code")))),(0,a.kt)("p",null,"A few seconds after the upload finishes, you should see the pin 13 (L) LED on the board start to blink. If it does, congratulations! You've gotten Arduino up-and-running. If you have problems, please see the troubleshooting suggestions."),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/Seeeduino%20Cortex-M0%2B%20v1.0.zip"},"Seeeduino Cortex-M0+ v1.0 Eagle file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Seeeduino-Cortex-M0-/res/SAM-D21-Datasheet.pdf"},"SAMD21-Datasheet"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    To use the UART of Seeeduino Cortex-M0+, you need to use ``\n"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/).",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))),"`"))}s.isMDXComponent=!0}}]);
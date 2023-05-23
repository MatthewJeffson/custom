"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91861],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),s=u(n),k=o,m=s["".concat(p,".").concat(k)]||s[k]||c[k]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=k;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[s]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},96424:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={description:"Seeeduino Arch",title:"Seeeduino Arch",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Arch",last_update:{date:"1/31/2023",author:"shuxu hu"}},i=void 0,a={unversionedId:"Sensor/Seeeduino Series/Seeeduino_Arch",id:"Sensor/Seeeduino Series/Seeeduino_Arch",title:"Seeeduino Arch",description:"Seeeduino Arch",source:"@site/docs/Sensor/Seeeduino Series/Seeeduino_Arch.md",sourceDirName:"Sensor/Seeeduino Series",slug:"/Seeeduino_Arch",permalink:"/custom/zh-CN/Seeeduino_Arch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Seeeduino Series/Seeeduino_Arch.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Seeeduino Arch",title:"Seeeduino Arch",keywords:["Seeeduino"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino_Arch",last_update:{date:"1/31/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeeduino Crypto (ATmega4809 ECC608)",permalink:"/custom/zh-CN/Seeeduino-Crypto-ATmega4809-ECC608"},next:{title:"Seeeduino Arch V1.0",permalink:"/custom/zh-CN/Seeeduino_Arch_V1.0"}},p={},u=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Compare Seeeduino Arch  with Arduino",id:"compare-seeeduino-arch--with-arduino",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Demo: Water Lights",id:"demo-water-lights",level:3},{value:"Programming Seeeduino Arch on Windows, Linux or Mac",id:"programming-seeeduino-arch-on-windows-linux-or-mac",level:2},{value:"Multifunction for on-board button",id:"multifunction-for-on-board-button",level:2},{value:"Applications",id:"applications",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_01.jpg",alt:"enter image description here"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Seeeduino Arch")," is an ",(0,o.kt)("a",{parentName:"p",href:"http://mbed.org/handbook/mbed-SDK"},"mbed")," enabled development board which combines the advantages of mbed SDK and Arduino formfactor. With Seeeduino Arch, you can use mbed C/C++ SDK, libraries and optimizing online development tools to rapidly build a prototype.\nSeeeduino Arch has standard Arduino appearance and Grove connectors. It\u2019s convenient to connect existing Shields and Grove products to Seeeduino Arch."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/seeeduino-arch-p-1561.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:"enter image description here"})),"  "),(0,o.kt)("h2",{id:"feature"},"Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"mbed enabled"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"}," 1.online development tools\n\n 2.easy to use C/C++ SDK\n\n 3.lots of published libraries, projects\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Standard Arduino Appearance, two Grove connectors"),(0,o.kt)("p",{parentName:"li"},"  1.available with 3.3V compatible shields"),(0,o.kt)("p",{parentName:"li"},"  2.a large number of grove modules")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Drag-n-drop programming")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NXP LPC11U24 MCU"),(0,o.kt)("p",{parentName:"li"},"   1.Low power ARM Cortex-M0 Core"),(0,o.kt)("p",{parentName:"li"},"   2.48MHz, 32KB Flash, 8KB RAM, 4KB EEPROM"),(0,o.kt)("p",{parentName:"li"},"   3.USB Device, 2xSPI, UART, I2C"))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("table",{cellspacing:"0",width:"100%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"}," Item"),(0,o.kt)("th",{scope:"col"}," Typical")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Work Voltage"),(0,o.kt)("td",null," 7 ~ 12V")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Microcontroller"),(0,o.kt)("td",null," LPC11U24")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Flash Momery"),(0,o.kt)("td",null," 32kB")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," EEPROM"),(0,o.kt)("td",null," 4kB")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," RAM"),(0,o.kt)("td",null," 8kB")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," UART"),(0,o.kt)("td",null," 1")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," I2C"),(0,o.kt)("td",null," 1")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," ADC Channels"),(0,o.kt)("td",null," 8")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," I/O pins"),(0,o.kt)("td",null,"40")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Digital I/O Max Input Voltage"),(0,o.kt)("td",null," 5.0V"))),(0,o.kt)("h2",{id:"pinout"},"Pinout"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Arch_Pinout.png",alt:"enter image description here"})),(0,o.kt)("p",null,"There is ",(0,o.kt)("strong",{parentName:"p"},"a monochrome version]")," for you to print."),(0,o.kt)("h2",{id:"compare-seeeduino-arch--with-arduino"},"Compare Seeeduino Arch  with Arduino"),(0,o.kt)("p",null,"Both Seeedduino and Arduino are platforms used for creating rapid prototyping. However, there are still differences between them. We can get more information about them by comparing from the following form."),(0,o.kt)("center",null,(0,o.kt)("table",{cellspacing:"0",width:"100%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"}," Item"),(0,o.kt)("th",{scope:"col"}," Seeeduino Arch"),(0,o.kt)("th",{scope:"col"}," Arduino")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Microcontroller"),(0,o.kt)("td",null," ARM Cortex-M series MCU"),(0,o.kt)("td",null," Mainly AVR 8-bit MCU, using the new Due Cortex-M3 MCU family.")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Hardware specification"),(0,o.kt)("td",null," Standardized size and pin for easy modular build prototypes"),(0,o.kt)("td",null," Standardized size and pin for easy modular build prototypes")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  Development Environment"),(0,o.kt)("td",null," Online development tool for collaborating and sharing easily, can export project to local for development and debugging. Powerful, yet also simple."),(0,o.kt)("td",null," Arduino IDE, easy to use, simple but functional.")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," Develop and debug"),(0,o.kt)("td",null," Support library import, export projects, version control, debugging and other functions."),(0,o.kt)("td",null," Libraries and application code are separate, suitable for writing simple code, without debugging function.")))," "),"The Seeeduino Arch is compatibility with Arduino in hardware. Now we share their pins destribution. ",(0,o.kt)("center",null,(0,o.kt)("table",{cellspacing:"0",width:"100%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"}," Arduino"),(0,o.kt)("th",{scope:"col"}," Seeeduino Arch"),(0,o.kt)("th",{scope:"col"}," Description")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D0"),(0,o.kt)("td",null," P0_18"),(0,o.kt)("td",{rowspan:"14"}," Digital I/O")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D1"),(0,o.kt)("td",null," P0_19")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D2"),(0,o.kt)("td",null," P0_17")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D3"),(0,o.kt)("td",null," P1_17")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D4"),(0,o.kt)("td",null," P1_18")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D5"),(0,o.kt)("td",null," P1_24")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D6"),(0,o.kt)("td",null," P1_25")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D7"),(0,o.kt)("td",null," P1_5")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D8"),(0,o.kt)("td",null," P1_26")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D9"),(0,o.kt)("td",null," P1_27")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D10"),(0,o.kt)("td",null," P0_2")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D11"),(0,o.kt)("td",null," P1_29")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D12"),(0,o.kt)("td",null," P0_8")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  D13"),(0,o.kt)("td",null," P0_9")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  SDA"),(0,o.kt)("td",null," P0_5"),(0,o.kt)("td",{rowspan:"2"}," I2C")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," SCL"),(0,o.kt)("td",null," P0_4")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," A0"),(0,o.kt)("td",null," P0_11"),(0,o.kt)("td",{rowspan:"7"}," Analog")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  A1"),(0,o.kt)("td",null," P0_12")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  A2"),(0,o.kt)("td",null," P0_13")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," A3"),(0,o.kt)("td",null," P0_14")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  A4"),(0,o.kt)("td",null," P0_16")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  A5"),(0,o.kt)("td",null," P0_22")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  A6"),(0,o.kt)("td",null," P0_23")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  1-MISO1"),(0,o.kt)("td",null," P1_21"),(0,o.kt)("td",{rowspan:"6"}," SPI1")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 2-SCK"),(0,o.kt)("td",null," P1_20")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 3-RESET"),(0,o.kt)("td",null," P1_23")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 4-GND"),(0,o.kt)("td",null," /")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  5-MOSI"),(0,o.kt)("td",null," P1_22")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  6-VCC"),(0,o.kt)("td",null," /")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 1-SWDIO"),(0,o.kt)("td",null," P0_15"),(0,o.kt)("td",{rowspan:"6"}," 2X3 SWD Interface")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 2-VCC"),(0,o.kt)("td",null," /")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 3-SWCLK"),(0,o.kt)("td",null," P0_10")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," 4-"),(0,o.kt)("td",null," P1_4")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  5-nRET"),(0,o.kt)("td",null," P0_0")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  6-GND"),(0,o.kt)("td",null," /")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D+"),(0,o.kt)("td",null," USB_DP"),(0,o.kt)("td",{rowspan:"5"}," USB&ISP")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," D-"),(0,o.kt)("td",null," USB_DM")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," VBUS"),(0,o.kt)("td",null," P0_3")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  CONNECT"),(0,o.kt)("td",null," P0_6")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"}," ISP"),(0,o.kt)("td",null," P0_1")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"  RX"),(0,o.kt)("td",null," P1_14"),(0,o.kt)("td",{rowspan:"2"}," UART Grove")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"TX"),(0,o.kt)("td",null," P1_13")),(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"row"},"AREF"),(0,o.kt)("td",null," P0_7"),(0,o.kt)("td",null," /")))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Seeeduino Arch")," is compatible with ",(0,o.kt)("strong",{parentName:"p"},"mbed")," in software. You can use the comprehensive firmware library and plenty of sample code which is offered by mbed SDK. If you are not familiar with ",(0,o.kt)("strong",{parentName:"p"},"mbed")," platform and ",(0,o.kt)("strong",{parentName:"p"},"mbed")," SDK, please click ",(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/handbook/mbed-NXP-LPC11U24-Getting-Started"},"here")," to have a good understanding."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Seeeduino Arch")," can use the free online IDE and C++ compiler from mbed. This compiler is built on optimizing ARMCC compiler engine which. This helps you get your program up and running quickly, and no software installation is required. Downloading programs is as simple as using a USB flash drive (no external programmer is necessary).  "),(0,o.kt)("p",null,"In addition to online IDE and compiler, users can make use of many offline compiler/IDE available for ARM Cortex M micro-controllers ARM Embedded GCC, Keil MDK ARM IAR Embedded Workbench, etc.."),(0,o.kt)("p",null,"In addition, Writing a library is not a difficult task for beginners. You can click ",(0,o.kt)("a",{parentName:"p",href:"http://mbed.org/cookbook/Writing-a-Library"},"here")," to learn how to write an mbed Library."),(0,o.kt)("p",null,"Here we show you an easy demo: ",(0,o.kt)("strong",{parentName:"p"},"water lights")," using Seeeduino Arch to get you started."),(0,o.kt)("h3",{id:"demo-water-lights"},"Demo: Water Lights"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click the "mbed Enabled" logo to register an account for Seeeduino Arch.\n',(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/account/login/?next=/start?auth=104000000000000000000002F7F0F640e640d504b45e111da24094a9d300da46&firmware=999999"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Mbedenabled.jpg",alt:"enter image description here"})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Open ",(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/compiler/"},"https://mbed.org/compiler/")," and you will get mbed online IDE. Before programming, you'd better read mbed Complier Getting started.\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Open_Compiler.jpg",alt:"enter image description here"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Click "New" to creat new program and select the device "mbed NXP LPC11U24". I believe that this picture explains better.\n',(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Compiler.jpg",alt:"enter image description here"})))),(0,o.kt)("p",null,"The below is my code to control the four leds of seeeduino arch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\nDigitalOut  led1(LED1);\nDigitalOut  led2(LED2);\nDigitalOut  led3(LED3);\nDigitalOut  led4(LED4);\n\n\nint main() {\nwhile(1) {\nled1 = !led1;\nwait(0.5);\nled2 = !led2;\nwait(0.5);\nled3 = !led3;\nwait(0.5);\nled4 = !led4;\nwait(0.5);\n\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now you can compile the code. If the code has errors, it will prompt you and give you help. And you may find the helps are just what you need.\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/Error_prompt.jpg",alt:"enter image description here"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After successfully compiling the code, save the bin file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now you need long press the reset button, it will automatically appear as a USB driver named CRP DISABLD."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/img/A_usb_device.jpg",alt:"enter image description here"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Go to the CRP DISABLD. Now you need delete the firmware file and add the waterLights_LPC11U24 bin file to CRP DISABLD. Remember to reset the Microcontroller to start it running after you download a new program , now the seeeduino arch will run the waterLight program. You can have a try.")),(0,o.kt)("p",null,"The mbed C/C++ SDK provides the software platform and ",(0,o.kt)("a",{parentName:"p",href:"http://mbed.org/cookbook/Homepage"},"libraries")," which also can apply to seeeduino Arch. So you can use this available resource to build your applications. And we are looking forward to sharing your more programs combining Seeeduino arch,Shiled and Grove modules."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("p",null,"If you use Seeeduino Arch on MAC or Linux, please read the application note --- ",(0,o.kt)("a",{parentName:"p",href:"http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x"},"USB ISP programming"),"."),(0,o.kt)("h2",{id:"programming-seeeduino-arch-on-windows-linux-or-mac"},"Programming Seeeduino Arch on Windows, Linux or Mac"),(0,o.kt)("p",null,"Seeeduino Arch doesn't have an mbed interface. It uses USB In-System-Programming(ISP) to upgrade the firmware."),(0,o.kt)("p",null,'To enter the USB ISP mode, connect the Arch with your computer and long press its button, and then a disk named "CRP DISABLD" will appear.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on windows")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'delete firmware.bin in the "CRP DISABLD" disk.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"copy a new firmware into the disk."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on linux")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"if the disk is not mounted, mount the disk at ",(0,o.kt)("strong",{parentName:"p"},"{mnt_dir}"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc")))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"on mac you'll need to use Terminal to run the following script to copy you're .bin file to your Arch")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"dd if={new_firmare.bin} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc")),(0,o.kt)("p",{parentName:"li"}," If you're so inclined, you can also create an ",(0,o.kt)("strong",{parentName:"p"},"Automator"),' application to support drag-and-drop of the file to your board.  Just create a "',(0,o.kt)("em",{parentName:"p"},"Run Shell Script"),'" with the following command:'),(0,o.kt)("p",{parentName:"li"},"if=$* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc"),(0,o.kt)("p",{parentName:"li"}," You will also need to change the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Pass Input"')," option from ",(0,o.kt)("inlineCode",{parentName:"p"},'"to stdin"')," to ",(0,o.kt)("inlineCode",{parentName:"p"},'"as arguments"'),"--without this you will get an error ",(0,o.kt)("inlineCode",{parentName:"p"},"\"The action 'Run Shell Script' encountered an error\"")," or ",(0,o.kt)("inlineCode",{parentName:"p"},'"dd: no value specified for if (1)"')," in the log."),(0,o.kt)("p",{parentName:"li"},"Also, an improved form of the script is:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},'dd if="${1}" of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc'))),(0,o.kt)("p",{parentName:"li"},"Which should handle spaces in the file path and only uses the first file supplied."))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Very")," quick press the button to run the new firmware."),(0,o.kt)("h2",{id:"multifunction-for-on-board-button"},"Multifunction for on-board button"),(0,o.kt)("p",null,"By default, the on-board button has two functions: quick press to reset, long press to enter ISP mode. We can add more functions!"),(0,o.kt)("p",null,"For example, use ",(0,o.kt)("a",{parentName:"p",href:"http://developer.mbed.org/users/yihui/code/multifunction_for_reset_button/"},"multifunction_for_reset_button")," to get:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"single click - turn on LED1")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"double click - turn on LED2")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"long click   - reset")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"click and then power on - enter ISP mode"))),(0,o.kt)("h2",{id:"applications"},"Applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/users/yihui/notebook/debug-seeeduino-arch-using-cmsis-dap/"},"Use Seeeduino Arch as a debug adapter to debug another Seeeduino Arch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/users/yihui/notebook/sense-environment/"},"Sense environment"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/cookbook/seeed-grove-RTC"},"Play with Grove RTC"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://mbed.org/cookbook/Seeed-grove-ultrasonic-ranger"},"Play with Grove - Ultrasonic ranger")))),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resource"},"Resource"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[Eagle]"),"   ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_Eagle_files.zip"},"Seeeduino Arch Eagle files"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[PDF]"),(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/Seeeduino_Arch_V1.0.pdf"},"Seeeduino_Arch_V1.0 pdf"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[Datasheet]"),"  ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11U2x_datasheet.pdf"},"LPC11U2x datasheet"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"[PDF]"),"   ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Seeeduino_Arch/res/LPC11UxxUserManual.pdf"},"LPC11Uxx User Manaul")))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}s.isMDXComponent=!0}}]);
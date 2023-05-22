"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||o;return r?a.createElement(k,i(i({ref:t},u),{},{components:r})):a.createElement(k,i({ref:t},u))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},31788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={description:"MT3620 Mini Dev Board",title:"MT3620 Mini Dev Board",keywords:["Azure_Sphere_MT3620_Development_Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/MT3620_Mini_Dev_Board",last_update:{date:"1/13/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Azure Sphere MT3620/MT3620_Mini_Dev_Board",id:"Sensor/Azure Sphere MT3620/MT3620_Mini_Dev_Board",title:"MT3620 Mini Dev Board",description:"MT3620 Mini Dev Board",source:"@site/docs/Sensor/Azure Sphere MT3620/MT3620_Mini_Dev_Board.md",sourceDirName:"Sensor/Azure Sphere MT3620",slug:"/MT3620_Mini_Dev_Board",permalink:"/custom/MT3620_Mini_Dev_Board",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Azure Sphere MT3620/MT3620_Mini_Dev_Board.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"MT3620 Mini Dev Board",title:"MT3620 Mini Dev Board",keywords:["Azure_Sphere_MT3620_Development_Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/MT3620_Mini_Dev_Board",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"MT3620 Ethernet Shield v1.0",permalink:"/custom/MT3620_Ethernet_Shield_v1.0"},next:{title:"MT3620 Grove Breakout",permalink:"/custom/MT3620_Grove_Breakout"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Sopports",id:"sopports",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Applications",id:"applications",level:2},{value:"Install Azure Sphere",id:"install-azure-sphere",level:2},{value:"MT3620 Mini Dev Board Demos",id:"mt3620-mini-dev-board-demos",level:2},{value:"Demo#1 Digital and UART",id:"demo1-digital-and-uart",level:3},{value:"Demo#2 Analog",id:"demo2-analog",level:3},{value:"Demo#3 I2C",id:"demo3-i2c",level:3},{value:"Door Remote Control Project",id:"door-remote-control-project",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product.png",alt:"enter image description here"})),(0,n.kt)("p",null,"MT3620 Mini Dev Board is a lite version of Seeed previous ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html"},"Azure Sphere MT3620 Development Kit"),". For an introduction to Azure sphere, please refer to this link ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/azure-sphere/"},"Azure Sphere"),"."),(0,n.kt)("p",null,"We developed this board to meet the needs of developers who need smaller sizes, are more scalable, and have lower costs. This development board is based on the MT3620 module, which greatly simplifies the difficulty of hardware design. The ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/MT3620-Module-AI-Link-WF-M620-RSC1-p-2920.html"},"MT3620 module")," is developed by our partner ",(0,n.kt)("a",{parentName:"p",href:"http://www.ilinkthings.com/microsoft"},"AI-Link"),". Developers can easily reuse this design into their own projects. The development board uses two single-row pin headers for easy plug-in on other motherboards or expansion boards. Unlike the full-featured Azure Sphere MT3620 Development Kit, this development board optimizes the design by reducing some system hardware peripheral resources, and only provides the necessary hardware resources to developers. In terms of hardware specifications, we only support 2.4G Wi-Fi and reduce I2S and some GPIO ports.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"What\u2019s new of the MT3620 Mini Dev Board?")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Based on MT3620 module (WF-M620-RSA1)"),(0,n.kt)("li",{parentName:"ul"},"Reduce the board size from 50mm",(0,n.kt)("em",{parentName:"li"},"80mm"),"16mm to 34mm",(0,n.kt)("em",{parentName:"li"},"60mm"),"19mm"),(0,n.kt)("li",{parentName:"ul"},"Keep the necessary LED indicator and buttons"),(0,n.kt)("li",{parentName:"ul"},"The board form factor is more easier for add-on usage")),(0,n.kt)("p",null,"The figure shows the full-feature dev board and new mini dev board size comparison:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/compare.png",alt:null})),(0,n.kt)("p",null,"The Azure Sphere operating system is pre-installed on the MT3620 and is designed to work with the Azure Sphere Security Service to create a secured IoT platform. Together the Azure Sphere OS and security service deliver:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"certificate-based device authentication to any web service"),(0,n.kt)("li",{parentName:"ul"},"software attestation and secure boot"),(0,n.kt)("li",{parentName:"ul"},"threat detection via failure reporting"),(0,n.kt)("li",{parentName:"ul"},"ongoing security updates"),(0,n.kt)("li",{parentName:"ul"},"an integrated, secured end-to-end IoT solution")),(0,n.kt)("p",null,"MT3620 software development is supported using the powerful Microsoft Visual Studio IDE: Install Visual Studio and the Azure Sphere extension, plug the development board into a PC over USB, and start developing IoT applications with unprecedented levels of security."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Return policy: This product can only be activated once. Seeed will not accept return once the package has been opened. Check Warranty & Returns here. If there are any quality issues after opening the package, please contact Seeed Support Team ",(0,n.kt)("a",{parentName:"p",href:"mailto:support@seeed.cc"},"support@seeed.cc"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open Source Licenses: The software included in this product contains copyrighted software that is licensed under the GPL, LGPL or other open source licenses, listed ataka.ms/AzureSphereSDK. You may obtain the source code for applicable software from aka.ms/AzureSphereSDK or by sending an email to ",(0,n.kt)("a",{parentName:"p",href:"mailto:order@seeed.cc"},"order@seeed.cc"),".")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Azure Sphere: End-to-end security for IoT devices."),(0,n.kt)("li",{parentName:"ul"},"Wi-Fi 802.11 b/g/n."),(0,n.kt)("li",{parentName:"ul"},"Tri-core microcontroller with on-chip RAM & flash."),(0,n.kt)("li",{parentName:"ul"},"Microsoft Visual Studio development environment."),(0,n.kt)("li",{parentName:"ul"},"Online authentication & updates for device lifetime."),(0,n.kt)("li",{parentName:"ul"},"Expand UART, I2C, SPI, ADC, GPIO resource on pin header.")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("table",{class:"tg"},(0,n.kt)("tr",null,(0,n.kt)("th",{class:"tg-0pky"},"Description"),(0,n.kt)("th",{class:"tg-0pky"},"Value")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-c3ow",rowspan:"2"},"MCU",(0,n.kt)("br",null),"(using MT3620 module)"),(0,n.kt)("td",{class:"tg-0pky"},"1 *ARM Cortex A7 core @500MHz , 4MB RAM")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"2* ARM Cortex M4 core @200MHz , 64KB RAM")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-c3ow",rowspan:"4"},"ISU"),(0,n.kt)("td",{class:"tg-0pky"},"ISU 0 configured as SPI0 or UART0 or I2C0, ISU 1 configured as SPI1 or UART1 or I2C1")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"- I2C runs at up to 1MHz")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"- SPI runs at up to 40MHz")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"- UART runs at up to 3Mbps")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"Connectivity"),(0,n.kt)("td",{class:"tg-0pky"},"802.11 b/g/n Wi-Fi")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"ADC"),(0,n.kt)("td",{class:"tg-0pky"},"3 *12-bit ADC input I/O")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"RTC"),(0,n.kt)("td",{class:"tg-0pky"},"1* RTC with CR1220 3V battery holder")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"USB"),(0,n.kt)("td",{class:"tg-0pky"},"1 *Micro USB port for power supply and debugging, 5V/1A")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky",rowspan:"3"},"LED"),(0,n.kt)("td",{class:"tg-0pky"},"1* RED LED -> Power")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0lax"},"1 *GREEN LED -> FTDI status")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0lax"},"1* GREEN LED -> user controlled (can be configured as Wi-Fi status or other usage)")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0lax"},"Button"),(0,n.kt)("td",{class:"tg-0lax"},"1*Reset Button")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"Operating Temperature"),(0,n.kt)("td",{class:"tg-0pky"},"-40~85\xb0C")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"Dimensions"),(0,n.kt)("td",{class:"tg-0pky"},"L:34mm*W:60mm*H:19mm",(0,n.kt)("br",null))),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"Certification"),(0,n.kt)("td",{class:"tg-0pky"},"CE / FCC / MIC / RoHS",(0,n.kt)("br",null)))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("table",{class:"tg"},(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0pky"},"IDE"),(0,n.kt)("td",{class:"tg-0pky"},"Visual Studio")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0lax"},"System"),(0,n.kt)("td",{class:"tg-0lax"},"Windows10")),(0,n.kt)("tr",null,(0,n.kt)("td",{class:"tg-0lax"},"Programming Language"),(0,n.kt)("td",{class:"tg-0lax"},"C"))),(0,n.kt)("h2",{id:"sopports"},"Sopports"),(0,n.kt)("p",null,"It is now possible to program all of the followings if building a real-time app."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"I2C"),(0,n.kt)("li",{parentName:"ul"},"2xARM Cortex-M4 with FPU"),(0,n.kt)("li",{parentName:"ul"},"ADC"),(0,n.kt)("li",{parentName:"ul"},"PWM"),(0,n.kt)("li",{parentName:"ul"},"I2S \uff08please refer to ",(0,n.kt)("a",{parentName:"li",href:"https://d86o2zu8ugzlg.cloudfront.net/mediatek-craft/documents/MT3620-M4-User-Manual.pdf"},"M4 with FPU"),"\uff09")),(0,n.kt)("p",null,"If building a high-level OS app,it is possible to use ADC and PWM."),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Board Diagram")),(0,n.kt)("a",{href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/sys.jpg"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Board Pinmap")),(0,n.kt)("a",{href:"https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102110267/img/MT3620 Mini Dev Board Pinmap-20200331.jpg"})),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Home/Building/Facilities"),(0,n.kt)("li",{parentName:"ul"},"Automation"),(0,n.kt)("li",{parentName:"ul"},"Security"),(0,n.kt)("li",{parentName:"ul"},"Equipment Management"),(0,n.kt)("li",{parentName:"ul"},"Utilities"),(0,n.kt)("li",{parentName:"ul"},"Public Safety")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To understand how Azure Sphere works in a real-world setting, consider ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere"},"Contoso, Ltds cenario"),".")),(0,n.kt)("h2",{id:"install-azure-sphere"},"Install Azure Sphere"),(0,n.kt)("p",null,"If you have MT3620 Mini Dev Board that has not yet been used, complete ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/install/overview"},"these steps")," first to get up and running."),(0,n.kt)("h2",{id:"mt3620-mini-dev-board-demos"},"MT3620 Mini Dev Board Demos"),(0,n.kt)("p",null,"We build there demoes which combine MT3620 Mini Dev Board and ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Seeed Grove system"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo#1"),': MT3620 Mini Dev Board performs as an MCU, which connects with Grove-Button and USB to TTL adapter. Then you connect MT3620 Mini Dev Board and the USB to TTL adapter to PC usb ports. After you downloading the code, press Grove-Button and enter "Hello World!" from USB to TTL adapter, you can receive "Hello World!" from Visual Studio Output window.  '),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo#2"),": MT3620 Mini Dev Board performs as an MCU, which connects with Grove-Light Sensor and USB to Grove-Rotary Sensor. Then you connect MT3620 Mini Dev Board to PC usb ports.  After you downloading the code, you move your hand on top of the Grove-Light Sensor or rotate the Grove-Rotary Sensor, you can see analog outputs for both sensors from Visual Studio Output window.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo#3"),': MT3620 Mini Dev Board performs as an MCU, which connects with Grove - OLED Display 1.12". Then you connect MT3620 Mini Dev Board to PC usb ports.  After you downloading the code, you press Grove-Button and enter "Hello World!" from USB to TTL adapter, you can receive "Hello World!" from Visual Studio Output window.'),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MT3620 Grove Breakout"),"\uff1aMT3620 Mini Dev Board supports SPI, UART, I2C, Digital functions, but does not support the ADC function. So the MT3620 Grove Breakout includes ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf"},"AD7992")," chip, which is a 12-bit, low power, successive approximation ADC with an I2C-compatible interface. Then connect to I2C interface of MT3620 Mini Dev Board."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/adc_i2c.png",alt:null})),(0,n.kt)("h3",{id:"demo1-digital-and-uart"},"Demo#1 Digital and UART"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Mini Dev Board"),(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Grove Breakout"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Button"),(0,n.kt)("th",{parentName:"tr",align:null},"USB To Uart 5V&3V3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Button-p-766.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html"},"Get One Now"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Connect Grove-Button to D1 of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Connect USB To Uart adapter to UART0 of MT3620 Grove Breakout through ",(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html"},"Grove-Cable"),"."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect MT3620 Mini Dev Board and the USB to TTL adapter to PC usb ports.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure the voltage switch on USB to TTL adapter is turned to ",(0,n.kt)("strong",{parentName:"p"},"5v"),". You connect the RX of the USB to ttl adapter to TX of MT3620 Grove Breakout, the TX of the USB to ttl adapter to RX of MT3620 Grove Breakout and GND as well. Do not connect the 5V.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo")),(0,n.kt)("li",{parentName:"ul"},"Step 2. Open the ",(0,n.kt)("strong",{parentName:"li"},"Samples\\UART0")," under Azure_Sphere_Demo"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Double click ",(0,n.kt)("strong",{parentName:"li"},"UART0.sln")),(0,n.kt)("li",{parentName:"ul"},"Step 4. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"Properties > C/C++ > General > Additional Include Directories")),(0,n.kt)("li",{parentName:"ul"},"Step 5. Click the ",(0,n.kt)("strong",{parentName:"li"},"down arraw >  Edit... > New Line")," icons, modify the path of  ",(0,n.kt)("strong",{parentName:"li"},"UART0"),", click ",(0,n.kt)("strong",{parentName:"li"},"Select Folder")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 6. Go to the application project Right-Click ",(0,n.kt)("strong",{parentName:"li"},"References")," > ",(0,n.kt)("strong",{parentName:"li"},"Add References"),", select ",(0,n.kt)("strong",{parentName:"li"},"Projets"),", click the check box of ",(0,n.kt)("strong",{parentName:"li"},"UART0"),", then click ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 7. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"General")," > ",(0,n.kt)("strong",{parentName:"li"},"Target API Set"),", click the check box and set as ",(0,n.kt)("strong",{parentName:"li"},"1+Beta1902")," if you use the ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Community version")," and please skip this step if you use the Enterprise version."),(0,n.kt)("li",{parentName:"ul"},"Step 8. Click the ",(0,n.kt)("strong",{parentName:"li"},"Remote GDB Debugger"),"."),(0,n.kt)("li",{parentName:"ul"},"Step 9. Open the COM monitor tool and select USB to TTL adapter serial port"),(0,n.kt)("li",{parentName:"ul"},'Step 10, Press the Grove-Button and send "Hello World!" from COM monitor tool.'),(0,n.kt)("li",{parentName:"ul"},"Step 11, You can see the below message from Visual Studio output window.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"UART received 12 bytes: 'Hello World!'.\nUART received 2 bytes: '\n'.\nUART received 12 bytes: 'Hello World!'.\nUART received 2 bytes: '\n'.\nUART received 12 bytes: 'Hello World!'.\nUART received 2 bytes: '\n")),(0,n.kt)("h3",{id:"demo2-analog"},"Demo#2 Analog"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Mini Dev Board"),(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Grove Breakout"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Light Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Rotary Angle Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html"},"Get One Now"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Connect Grove-Rotary Angle Sensor to A0 of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Connect Grove-Light Sensor to A1 of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect MT3620 Mini Dev Board to PC usb port.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo")),(0,n.kt)("li",{parentName:"ul"},"Step 2. Open the ",(0,n.kt)("strong",{parentName:"li"},"Samples\\AD7991_I2C")," under Azure_Sphere_Demo"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Double click ",(0,n.kt)("strong",{parentName:"li"},"AD7991_I2C.sln")),(0,n.kt)("li",{parentName:"ul"},"Step 4. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"Properties > C/C++ > General > Additional Include Directories")),(0,n.kt)("li",{parentName:"ul"},"Step 5. Click the ",(0,n.kt)("strong",{parentName:"li"},"down arraw >  Edit... > New Line")," icons, modify the path of  ",(0,n.kt)("strong",{parentName:"li"},"AD7991_I2C"),", click ",(0,n.kt)("strong",{parentName:"li"},"Select Folder")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 6. Go to the application project Right-Click ",(0,n.kt)("strong",{parentName:"li"},"References")," > ",(0,n.kt)("strong",{parentName:"li"},"Add References"),", select ",(0,n.kt)("strong",{parentName:"li"},"Projets"),", click the check box of ",(0,n.kt)("strong",{parentName:"li"},"AD7991_I2C"),", then click ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 7. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"General")," > ",(0,n.kt)("strong",{parentName:"li"},"Target API Set"),", click the check box and set as ",(0,n.kt)("strong",{parentName:"li"},"1+Beta1902")," if you use the ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Community version")," and please skip this step if you use the Enterprise version."),(0,n.kt)("li",{parentName:"ul"},"Step 8. Click the ",(0,n.kt)("strong",{parentName:"li"},"Remote GDB Debugger"),", you move your hand on top of the Grove-Light Sensor or rotate the Grove-Rotary Angle Sensor, you can see analog outputs for both sensors from Visual Studio Output window.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nA0: 192 A1: 2646\nA0: 162 A1: 2644\nA0: 1489 A1: 2647\nA0: 621 A1: 2644\nA0: 227 A1: 2648\nA0: 33 A1: 2644\nA0: 0 A1: 2647\nA0: 0 A1: 2647\nA0: 0 A1: 2647\nA0: 0 A1: 2644\nA0: 373 A1: 2643\nA0: 885 A1: 2646\nA0: 1717 A1: 2647\nA0: 2057 A1: 2647\n")),(0,n.kt)("h3",{id:"demo3-i2c"},"Demo#3 I2C"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Mini Dev Board"),(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Grove Breakout"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-OLED Display 1.12'' V2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html"},"Get One Now"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Connect Grove-OLED Display 1.12'' V2 to I2C of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Connect MT3620 Mini Dev Board to PC usb port.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo")),(0,n.kt)("li",{parentName:"ul"},"Step 2. Open the ",(0,n.kt)("strong",{parentName:"li"},"Samples\\SeeedOLED_I2C")," under Azure_Sphere_Demo"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Double click ",(0,n.kt)("strong",{parentName:"li"},"SeeedOLED_I2C.sln")),(0,n.kt)("li",{parentName:"ul"},"Step 4. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"Properties > C/C++ > General > Additional Include Directories")),(0,n.kt)("li",{parentName:"ul"},"Step 5. Click the ",(0,n.kt)("strong",{parentName:"li"},"down arraw >  Edit... > New Line")," icons, modify the path of  ",(0,n.kt)("strong",{parentName:"li"},"SeeedOLED_I2C"),", click ",(0,n.kt)("strong",{parentName:"li"},"Select Folder")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 6. Go to the application project Right-Click ",(0,n.kt)("strong",{parentName:"li"},"References")," > ",(0,n.kt)("strong",{parentName:"li"},"Add References"),", select ",(0,n.kt)("strong",{parentName:"li"},"Projets"),", click the check box of ",(0,n.kt)("strong",{parentName:"li"},"SeeedOLED_I2C"),", then click ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 7. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"General")," > ",(0,n.kt)("strong",{parentName:"li"},"Target API Set"),", click the check box and set as ",(0,n.kt)("strong",{parentName:"li"},"1+Beta1902")," if you use the ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Community version")," and please skip this step if you use the Enterprise version."),(0,n.kt)("li",{parentName:"ul"},"Step 8. Click the ",(0,n.kt)("strong",{parentName:"li"},"Remote GDB Debugger"),", you will see the info display on oled.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Remote debugging from host 192.168.35.1\nSeeed oled 96*96 demo.\n")),(0,n.kt)("h2",{id:"door-remote-control-project"},"Door Remote Control Project"),(0,n.kt)("p",null,"This is the Azure Sphere Secure Lock Demo. We build this Box with the new MT3620 Mini Dev Board and its Grove Breakout board. The MT3620 works as a device micro-controller and provides secure access to the cloud."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure_Sphere_Demo_Secure_Lock.jpg",alt:null})),(0,n.kt)("div",{align:"center"},"Secure Lock Diagram",(0,n.kt)("b",null),(0,n.kt)("i",null)),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Let's find out how the hardware works:")),(0,n.kt)("p",null,"On top of the box , there is a warning light ,which will flash when the door is open. The MT3620 reads the micro switch status and knows the door is open or not. The door is locked by an electromagnet switch. There are two relays, they are both driven by MT3620\u2018s GPIOs. One relay controls the electromagnet power source, by opening the relay, the electromagnet will be opened. The other relay controls the warning light."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo4.jpg",alt:null})),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Front View"),(0,n.kt)("i",null)),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo2.jpg",alt:null})),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Top View"),(0,n.kt)("i",null)),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Azure%20Sphere%20Mini%20Dev%20Board%20Demo5.jpg",alt:null})),(0,n.kt)("div",{align:"center"},(0,n.kt)("b",null,"Side View"),(0,n.kt)("i",null)),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. MT3620 Mini Dev Board")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo"),"."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Follow Quickstarts for Azure Sphere to open the ",(0,n.kt)("strong",{parentName:"li"},"Azure_Sphere_Demo\\Demostrations\\RemoteControlDoor\\RemoteControlDoor.sln")," project."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Open the main.c under Source Files."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Modify wifiSsid and wifiPsk @line28 and 29."),(0,n.kt)("li",{parentName:"ul"},"Step 5. Connect the demo to Azure IoT."),(0,n.kt)("li",{parentName:"ul"},"Step 6. Click Build -> Rebuild Solution directly to the device."),(0,n.kt)("li",{parentName:"ul"},"Step 7. Use the Remote Debug Tool to access the device.  "),(0,n.kt)("li",{parentName:"ul"},"Step 8. Follow the video to operate the example in 3 different ways.")),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/NgH3Ot9pM1Y",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Product]")," ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure-sphere/"},"Welcome to Azure Sphere")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MT3620%20Dev%20Board%20V2.pdf"},"MT3620 Mini Dev Board Schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[DataSheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/MediaTek%20MT3620%20Product%20Brief.pdf"},"MediaTek MT3620 Product Brief")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[DataSheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf"},"WF-M620 RSC1 datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[FAQ Web]")," ",(0,n.kt)("a",{parentName:"li",href:"https://social.msdn.microsoft.com/Forums/en-US/home?forum=azuresphere"},"Azure Sphere Forum")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[FAQ Web]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/MicrosoftDocs/azure-sphere-issues/issues?utf8=%E2%9C%93&q=is%3Aissue"},"Azure Sphere Github issues"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||o;return r?a.createElement(c,i(i({ref:t},u),{},{components:r})):a.createElement(c,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},18057:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={description:"MT3620 Grove Breakout",title:"MT3620 Grove Breakout",keywords:["Azure_Sphere_MT3620_Development_Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/MT3620_Grove_Breakout",last_update:{date:"1/13/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Azure Sphere MT3620/MT3620_Grove_Breakout",id:"Sensor/Azure Sphere MT3620/MT3620_Grove_Breakout",title:"MT3620 Grove Breakout",description:"MT3620 Grove Breakout",source:"@site/docs/Sensor/Azure Sphere MT3620/MT3620_Grove_Breakout.md",sourceDirName:"Sensor/Azure Sphere MT3620",slug:"/MT3620_Grove_Breakout",permalink:"/custom/MT3620_Grove_Breakout",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Azure Sphere MT3620/MT3620_Grove_Breakout.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"MT3620 Grove Breakout",title:"MT3620 Grove Breakout",keywords:["Azure_Sphere_MT3620_Development_Kit"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/MT3620_Grove_Breakout",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"MT3620 Mini Dev Board",permalink:"/custom/MT3620_Mini_Dev_Board"},next:{title:"SEEED IOT BUTTON FOR AWS",permalink:"/custom/SEEED-IOT-BUTTON-FOR-AWS"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Applications",id:"applications",level:2},{value:"Install Azure Sphere",id:"install-azure-sphere",level:2},{value:"MT3620 Mini Dev Board Demos",id:"mt3620-mini-dev-board-demos",level:2},{value:"Demo#1 Digital and UART",id:"demo1-digital-and-uart",level:3},{value:"Demo#2 Analog",id:"demo2-analog",level:3},{value:"Demo#3 I2C",id:"demo3-i2c",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-front.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/MT3620-Grove-Breakout-back.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Azure-Sphere-MT3620-Development-Kit-US-Version-p-3052.html"},"Azure Sphere MT3620 Development Kit")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"MT3620 Mini Dev Board")," are both enabled by ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/azure-sphere/"},"Microsoft Azure Sphere")," technology, MT3620 Grove breakout is an expansion breakout board designed for the brand new MT3620 Mini Dev Board.\nMT3620 Grove breakout enable users to quickly apply sensors modules -",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove.html"},"SeeedStudio Groves")," into rapid prototyping application which is built based on MT3620 Mini Dev Board."),(0,n.kt)("p",null,"Since ",(0,n.kt)("a",{parentName:"p",href:"http://aka.ms/AzureSphereSDK"},"Azure Sphere SDK")," has not yet supported ADC on MT3620, this breakout serves as an interface between MT3620 I2C port and external ADC, which provide a way to read the analog data from analog port. Besides the analog port , this breakout has UART,SPI,I2C,GPIO ports."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"12-bit ADC, I2C-compatible serial interface"),(0,n.kt)("li",{parentName:"ul"},"8 Grove connectors",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"2 x UART"),(0,n.kt)("li",{parentName:"ul"},"2 x I2C"),(0,n.kt)("li",{parentName:"ul"},"2 x Analog"),(0,n.kt)("li",{parentName:"ul"},"2 x Digtal(4 GPIO)")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interface")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/103100123_hardware_overview.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2460")," Extention Header 1:"),"\n24 pins, please refer to board pin map for the detail pin defination.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2461")," Analog:"),"\n2 Grove Analog ports, the input signal voltage must less than 3.3v."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/Analog.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2462")," I2C:"),"\n2 Grove I2C ports, the I2C port shares the same pin with UART1, so you only can choose I2C or UART1 at one time.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2463")," UART:"),"\n2 Grove UART ports, the I2C port shares the same pin as UART1, so you only can choose I2C or UART1 at one time. The SPI0 port shares the same pin with UART0,so you only can choose SPI0 or UART0 at one time.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/UART.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2464")," Digital:"),"\n4 digital GPIO ports, the working voltage is 3.3v.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/GPIO.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2465")," Extention Header 2:"),"\nIt is duplication of Extention Header 1. You can solder wires to header. There are 2 pins not connecting with Extention Header 1. Pin1 of J5 is connected to 3.3v directly and Pin6 of J5 is not connected.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/extention_header_1.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2466")," SPI:")," The SPI0 port shares the same pin with UART0,so you only can choose SPI0 or UART0 at one time.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/SPI.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2467")," AD7992BRMZ-1:")," MT3620 Mini Dev Board supports SPI, UART, I2C, Digital functions, but does not support the ADC function. So the MT3620 Grove Breakout includes ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/AD7992.pdf"},"AD7992")," chip, which is a 12-bit, low power, successive approximation ADC with an I2C-compatible interface. Then connect to I2C interface of MT3620 Mini Dev Board.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/I2C_ADC.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("font",{face:"",size:"3",font:!0,color:"ff0000"},"\u2468")," I2C Address Select:"),"\nAs is logic Input. Address select input that selects one of three I2C addresses for the AD7992, If it is connect to GND, the I2C address is 0x23. If it is connected to 3.3v, the I2C address is 0x24.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Board Pinmap")),(0,n.kt)("a",{href:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/img/pinmap2.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Board Dimensions")),(0,n.kt)("p",null,"L: 57mm W: 52mm H: 10mm"),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Home/Building/Facilities"),(0,n.kt)("li",{parentName:"ul"},"Automation"),(0,n.kt)("li",{parentName:"ul"},"Security"),(0,n.kt)("li",{parentName:"ul"},"Equipment Management"),(0,n.kt)("li",{parentName:"ul"},"Utilities"),(0,n.kt)("li",{parentName:"ul"},"Public Safety")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"To understand how Azure Sphere works in a real-world setting, consider ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure-sphere/product-overview/what-is-azure-sphere"},"Contoso, Ltds cenario"),".")),(0,n.kt)("h2",{id:"install-azure-sphere"},"Install Azure Sphere"),(0,n.kt)("p",null,"If you have MT3620 Mini Dev Board that has not yet been used, complete ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure-sphere/install/overview"},"these steps")," first to get up and running."),(0,n.kt)("h2",{id:"mt3620-mini-dev-board-demos"},"MT3620 Mini Dev Board Demos"),(0,n.kt)("p",null,"We build there demoes which combine MT3620 Mini Dev Board and ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Seeed Grove system"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo#1"),': MT3620 Mini Dev Board performs as an MCU, which connects with Grove-Button and USB to TTL adapter. Then you connect MT3620 Mini Dev Board and the USB to TTL adapter to PC usb ports. After you downloading the code, press Grove-Button and enter "Hello World!" from USB to TTL adapter, you can receive "Hello World!" from Visual Studio Output window.  '),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo#2"),": MT3620 Mini Dev Board performs as an MCU, which connects with Grove-Light Sensor and USB to Grove-Rotary Sensor. Then you connect MT3620 Mini Dev Board to PC usb ports.  After you downloading the code, you move your hand on top of the Grove-Light Sensor or rotate the Grove-Rotary Sensor, you can see analog outputs for both sensors from Visual Studio Output window.  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Demo#3"),': MT3620 Mini Dev Board performs as an MCU, which connects with Grove - OLED Display 1.12". Then you connect MT3620 Mini Dev Board to PC usb ports.  After you downloading the code, you press Grove-Button and enter "Hello World!" from USB to TTL adapter, you can receive "Hello World!" from Visual Studio Output window.'),(0,n.kt)("h3",{id:"demo1-digital-and-uart"},"Demo#1 Digital and UART"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Mini Dev Board"),(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Grove Breakout"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Button"),(0,n.kt)("th",{parentName:"tr",align:null},"USB To Uart 5V&3V3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/button_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/usb_2_ttl_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Button-p-766.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/USB-To-Uart-5V-3V3-p-1832.html"},"Get One Now"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo1_connection.png",alt:null})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure the plug the MT3620 Mini Dev Board into MT3620 Grove Breakout in the correct way. There is USB silk screen on the MT3620 Grove Breakout and make sure it at the same side as USB port of MT3620 Mini Dev Board.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Connect Grove-Button to D1 of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Connect USB To Uart adapter to UART0 of MT3620 Grove Breakout through ",(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck.html"},"Grove-Cable"),"."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect MT3620 Mini Dev Board and the USB to TTL adapter to PC usb ports.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure the voltage switch on USB to TTL adapter is turned to ",(0,n.kt)("strong",{parentName:"p"},"5v"),". You connect the RX of the USB to ttl adapter to TX of MT3620 Grove Breakout, the TX of the USB to ttl adapter to RX of MT3620 Grove Breakout and GND as well. Do not connect the 5V.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo")),(0,n.kt)("li",{parentName:"ul"},"Step 2. Open the ",(0,n.kt)("strong",{parentName:"li"},"Samples\\UART0")," under Azure_Sphere_Demo"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Double click ",(0,n.kt)("strong",{parentName:"li"},"UART0.sln")),(0,n.kt)("li",{parentName:"ul"},"Step 4. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"Properties > C/C++ > General > Additional Include Directories")),(0,n.kt)("li",{parentName:"ul"},"Step 5. Click the ",(0,n.kt)("strong",{parentName:"li"},"down arraw >  Edit... > New Line")," icons, modify the path of  ",(0,n.kt)("strong",{parentName:"li"},"UART0"),", click ",(0,n.kt)("strong",{parentName:"li"},"Select Folder")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 6. Go to the application project Right-Click ",(0,n.kt)("strong",{parentName:"li"},"References")," > ",(0,n.kt)("strong",{parentName:"li"},"Add References"),", select ",(0,n.kt)("strong",{parentName:"li"},"Projets"),", click the check box of ",(0,n.kt)("strong",{parentName:"li"},"UART0"),", then click ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 7. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"General")," > ",(0,n.kt)("strong",{parentName:"li"},"Target API Set"),", click the check box and set as ",(0,n.kt)("strong",{parentName:"li"},"1+Beta1902")," if you use the ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Community version")," and please skip this step if you use the Enterprise version."),(0,n.kt)("li",{parentName:"ul"},"Step 8. Click the ",(0,n.kt)("strong",{parentName:"li"},"Remote GDB Debugger"),"."),(0,n.kt)("li",{parentName:"ul"},"Step 9. Open the COM monitor tool and select USB to TTL adapter serial port"),(0,n.kt)("li",{parentName:"ul"},'Step 10, Press the Grove-Button and send "Hello World!" from COM monitor tool.'),(0,n.kt)("li",{parentName:"ul"},"Step 11, You can see the below message from Visual Studio output window.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"UART received 12 bytes: 'Hello World!'.\nUART received 2 bytes: '\n'.\nUART received 12 bytes: 'Hello World!'.\nUART received 2 bytes: '\n'.\nUART received 12 bytes: 'Hello World!'.\nUART received 2 bytes: '\n")),(0,n.kt)("h3",{id:"demo2-analog"},"Demo#2 Analog"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Mini Dev Board"),(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Grove Breakout"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Light Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Rotary Angle Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/light_sensor_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/Rotary_Angle_Sensor_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html"},"Get One Now"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo2_connection.png",alt:null})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure the plug the MT3620 Mini Dev Board into MT3620 Grove Breakout in the correct way. There is USB silk screen on the MT3620 Grove Breakout and make sure it at the same side as USB port of MT3620 Mini Dev Board.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Connect Grove-Rotary Angle Sensor to A0 of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Connect Grove-Light Sensor to A1 of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board."),(0,n.kt)("li",{parentName:"ul"},"Step 4. Connect MT3620 Mini Dev Board to PC usb port.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo")),(0,n.kt)("li",{parentName:"ul"},"Step 2. Open the ",(0,n.kt)("strong",{parentName:"li"},"Samples\\AD7991_I2C")," under Azure_Sphere_Demo"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Double click ",(0,n.kt)("strong",{parentName:"li"},"AD7991_I2C.sln")),(0,n.kt)("li",{parentName:"ul"},"Step 4. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"Properties > C/C++ > General > Additional Include Directories")),(0,n.kt)("li",{parentName:"ul"},"Step 5. Click the ",(0,n.kt)("strong",{parentName:"li"},"down arraw >  Edit... > New Line")," icons, modify the path of  ",(0,n.kt)("strong",{parentName:"li"},"AD7991_I2C"),", click ",(0,n.kt)("strong",{parentName:"li"},"Select Folder")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 6. Go to the application project Right-Click ",(0,n.kt)("strong",{parentName:"li"},"References")," > ",(0,n.kt)("strong",{parentName:"li"},"Add References"),", select ",(0,n.kt)("strong",{parentName:"li"},"Projets"),", click the check box of ",(0,n.kt)("strong",{parentName:"li"},"AD7991_I2C"),", then click ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 7. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"General")," > ",(0,n.kt)("strong",{parentName:"li"},"Target API Set"),", click the check box and set as ",(0,n.kt)("strong",{parentName:"li"},"1+Beta1902")," if you use the ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Community version")," and please skip this step if you use the Enterprise version."),(0,n.kt)("li",{parentName:"ul"},"Step 8. Click the ",(0,n.kt)("strong",{parentName:"li"},"Remote GDB Debugger"),", you move your hand on top of the Grove-Light Sensor or rotate the Grove-Rotary Angle Sensor, you can see analog outputs for both sensors from Visual Studio Output window.  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\nA0: 192 A1: 2646\nA0: 162 A1: 2644\nA0: 1489 A1: 2647\nA0: 621 A1: 2644\nA0: 227 A1: 2648\nA0: 33 A1: 2644\nA0: 0 A1: 2647\nA0: 0 A1: 2647\nA0: 0 A1: 2647\nA0: 0 A1: 2644\nA0: 373 A1: 2643\nA0: 885 A1: 2646\nA0: 1717 A1: 2647\nA0: 2057 A1: 2647\n")),(0,n.kt)("h3",{id:"demo3-i2c"},"Demo#3 I2C"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Part List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Mini Dev Board"),(0,n.kt)("th",{parentName:"tr",align:null},"MT3620 Grove Breakout"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-OLED Display 1.12'' V2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/product_s.png",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/breakout_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/oled_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Mini-Dev-Board-p-2919.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/MT3620-Grove-Breakout-p-4043.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-V2.html"},"Get One Now"))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Connection")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/img/demo3_connection.png",alt:null})),(0,n.kt)("admonition",{title:"warning",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please make sure the plug the MT3620 Mini Dev Board into MT3620 Grove Breakout in the correct way. There is USB silk screen on the MT3620 Grove Breakout and make sure it at the same side as USB port of MT3620 Mini Dev Board.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Connect Grove-OLED Display 1.12'' V2 to I2C of MT3620 Grove Breakout."),(0,n.kt)("li",{parentName:"ul"},"Step 2. Plug MT3620 Grove Breakout to MT3620 Mini Dev Board."),(0,n.kt)("li",{parentName:"ul"},"Step 3. Connect MT3620 Mini Dev Board to PC usb port.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step 1. Download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo")),(0,n.kt)("li",{parentName:"ul"},"Step 2. Open the ",(0,n.kt)("strong",{parentName:"li"},"Samples\\SeeedOLED_I2C")," under Azure_Sphere_Demo"),(0,n.kt)("li",{parentName:"ul"},"Step 3. Double click ",(0,n.kt)("strong",{parentName:"li"},"SeeedOLED_I2C.sln")),(0,n.kt)("li",{parentName:"ul"},"Step 4. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"Properties > C/C++ > General > Additional Include Directories")),(0,n.kt)("li",{parentName:"ul"},"Step 5. Click the ",(0,n.kt)("strong",{parentName:"li"},"down arraw >  Edit... > New Line")," icons, modify the path of  ",(0,n.kt)("strong",{parentName:"li"},"SeeedOLED_I2C"),", click ",(0,n.kt)("strong",{parentName:"li"},"Select Folder")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")," > ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 6. Go to the application project Right-Click ",(0,n.kt)("strong",{parentName:"li"},"References")," > ",(0,n.kt)("strong",{parentName:"li"},"Add References"),", select ",(0,n.kt)("strong",{parentName:"li"},"Projets"),", click the check box of ",(0,n.kt)("strong",{parentName:"li"},"SeeedOLED_I2C"),", then click ",(0,n.kt)("strong",{parentName:"li"},"OK")),(0,n.kt)("li",{parentName:"ul"},"Step 7. Right-Click the project name of your application, select ",(0,n.kt)("strong",{parentName:"li"},"General")," > ",(0,n.kt)("strong",{parentName:"li"},"Target API Set"),", click the check box and set as ",(0,n.kt)("strong",{parentName:"li"},"1+Beta1902")," if you use the ",(0,n.kt)("strong",{parentName:"li"},"Visual Studio Community version")," and please skip this step if you use the Enterprise version."),(0,n.kt)("li",{parentName:"ul"},"Step 8. Click the ",(0,n.kt)("strong",{parentName:"li"},"Remote GDB Debugger"),", you will see the info display on oled.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Remote debugging from host 192.168.35.1\nSeeed oled 96*96 demo.\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Product]")," ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure-sphere/"},"Welcome to Azure Sphere")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Azure_Sphere_Demo"},"Azure Sphere Demo Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.sch.zip"},"MT3620 Grove Breakout Schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/MT3620%20grove%20breakout%20v1.0.pdf"},"MT3620 Grove Breakout Schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[DataSheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Mini_Dev_Board/res/WF-M620-RSC1_datasheet_20190314.pdf"},"WF-M620 RSC1 datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[DataSheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/MT3620_Grove_Breakout/res/AD7992.pdf"},"AD7992 datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
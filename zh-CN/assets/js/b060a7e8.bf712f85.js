"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43005],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},14079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={description:"Getting Started with balenaOS on ODYSSEY-X86",title:"BalenaOS Installation",keywords:["Edge Quantum_Development_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Quantum-Mini-Linux-Development-Kit",last_update:{date:"2/1/2023",author:"jianjing Huang"}},i="Quantum Mini Linux Development Kit",l={unversionedId:"Edge/Quantum_Development_Board/Quantum-Mini-Linux-Development-Kit",id:"Edge/Quantum_Development_Board/Quantum-Mini-Linux-Development-Kit",title:"BalenaOS Installation",description:"Getting Started with balenaOS on ODYSSEY-X86",source:"@site/docs/Edge/Quantum_Development_Board/Quantum-Mini-Linux-Development-Kit.md",sourceDirName:"Edge/Quantum_Development_Board",slug:"/Quantum-Mini-Linux-Development-Kit",permalink:"/zh-CN/Quantum-Mini-Linux-Development-Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/Quantum_Development_Board/Quantum-Mini-Linux-Development-Kit.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675180800,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Getting Started with balenaOS on ODYSSEY-X86",title:"BalenaOS Installation",keywords:["Edge Quantum_Development_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Quantum-Mini-Linux-Development-Kit",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Seeed Studio SOM STM32MP157C",permalink:"/zh-CN/SEEED-SOM-STM32MP157C"},next:{title:"Dashboard Basics",permalink:"/zh-CN/Cloud_Chain/SenseCAP_Dashboard/Dashboard_Basics"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Download the Latest System Image",id:"download-the-latest-system-image",level:3},{value:"Step.1 - Prepare your Bootable MicroSD Card",id:"step1---prepare-your-bootable-microsd-card",level:3},{value:"Step.2 - Download Flash Burner",id:"step2---download-flash-burner",level:3},{value:"Step 3 - Writing the OS Image into USB",id:"step-3---writing-the-os-image-into-usb",level:3},{value:"Booting into the System",id:"booting-into-the-system",level:3},{value:"System Default Users and Password",id:"system-default-users-and-password",level:3},{value:"System Configurations",id:"system-configurations",level:2},{value:"Wi-Fi",id:"wi-fi",level:2},{value:"Software Updates (Optional)",id:"software-updates-optional",level:3},{value:"Remote Desktop Connection",id:"remote-desktop-connection",level:2},{value:"Bluetooth",id:"bluetooth",level:2},{value:"LCD",id:"lcd",level:2},{value:"Microphone",id:"microphone",level:2},{value:"GPIO",id:"gpio",level:2},{value:"OpenCV",id:"opencv",level:2},{value:"Others",id:"others",level:2},{value:"FAQ",id:"faq",level:2},{value:"Q1: How can I install a fan to cool down the board",id:"q1-how-can-i-install-a-fan-to-cool-down-the-board",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quantum-mini-linux-development-kit"},"Quantum Mini Linux Development Kit"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Quantum-Mini-Linux-Dev-Kit.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Quantum Mini Linux Dev. Kit")," is possibly the smallest Linux development board on the market, a highly integrated kit with quad-core CPU that can run Linux at only ",(0,a.kt)("strong",{parentName:"p"},"40mm x 35mm"),", which also includes network connectivity. It is suitable for scenarios such as as a personal server, intelligent voice assistant, and for robotic development.  "),(0,a.kt)("p",null,"The SoM is called ",(0,a.kt)("strong",{parentName:"p"},"Quark-N, based on Allwinner H3, Quad-core Cortex-A7, and ARM Mali400 MP2 GPU"),". The 6-layer high-density gold PCB design integrates a complete ARM-Linux system (CPU, DDR, eMMC) in a 2x3cm space. Also, most of the GPIO is led out by the board through the M.2 Key-A golden finger interface to minimize the bottom board design difficulty. You can easily design your own base plate with two-layer boards to realize your interesting ideas."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114992462/connection.png"})),(0,a.kt)("p",null,"The carrier board is called ",(0,a.kt)("strong",{parentName:"p"},"Atom-N, and Quark-N is connected to Atom-N through the M.2 interface"),". Atom-N leads out a row of golden finger pins to realize I/O expansion, ",(0,a.kt)("strong",{parentName:"p"},"expand SPI, I2C, UART, GPIO, and other interfaces to facilitate the completion of your own design"),". Also, it is equipped with ",(0,a.kt)("strong",{parentName:"p"},"a microphone, MPU6050 motion sensor (accelerometer and gyroscope), onboard 4 buttons (GPIO-KEY, Uboot, Recovery, Reset), IPS display, Wi-Fi/Bluetooth connectivity which greatly expands the possibilities with this product"),"."),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Quantum-Mini-Linux-Development-Kit-p-4749.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ultra-small (",(0,a.kt)("strong",{parentName:"p"},"31mmx22mm"),") and highly integrated Quad-core Cortex-A7 Linux SoM (System on Module).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Carrier board (",(0,a.kt)("strong",{parentName:"p"},"40mmx35mm"),") with rich peripherals and interfaces: Microphone, Gyroscope, Accelerometer,4 x Buttons (GPIO-KEY, Uboot, Recovery, Reset) and a TFT display.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Integrates a complete ARM-Linux system for advanced development.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Wireless Connectivity (Wi-Fi + Bluetooth)."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Ability to design your own baseboard due to the M.2 interface.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wide range of applications such as a personal server, intelligent voice assistant, and robotic development.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pre-installed ",(0,a.kt)("strong",{parentName:"p"},"xrdp Remote Desktop Server"),", easy monitor control without the need of HDMI cable."))),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",{style:{borderCollapse:"collapse",borderSpacing:0},className:"tg"},(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,fontWeight:"normal",overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Specification"),(0,a.kt)("th",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,fontWeight:"normal",overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Details")))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{style:{backgroundColor:"#c0c0c0",borderColor:"black",borderStyle:"solid",borderWidth:1,color:"#ffffff",fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"},colSpan:2},(0,a.kt)("span",{style:{fontWeight:700,fontStyle:"normal"}},"Quark-N SoM"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"CPU"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Allwinner H3, Quad-core Cortex-A7 @ 1GHz")),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"GPU"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:"inherit",fontStyle:"inherit"}},"ARM Mali400 MP2 GPU"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Memory"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"512MB LPDDR3 RAM"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Storage"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"16GB eMMC"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Interface"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Ethernet, SPI, I2C, UART, Reusable GPIO, MIC, LINEOUT"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"GPIO"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:"inherit",fontStyle:"inherit"}},"2.0mm pitch 26 pin-header, USB-Serial, I2C, UART, SPI, I2S, GPIO"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"PCB"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"6-layer high-density immersion gold design"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Working Temperature"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"0-80\xb0C"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Size"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"31mmx22mm"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{backgroundColor:"#c0c0c0",borderColor:"black",borderStyle:"solid",borderWidth:1,color:"#ffffff",fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"},colSpan:2},(0,a.kt)("span",{style:{fontWeight:"bold"}},"Atom-N Carrier Board"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Slot"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"m.2 interface for Quark-N"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"USB"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"USB 2.0\xd72 USB Type-C\xd71"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},"Wireless Connectivity"),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"RTL8723BU:"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Wi-Fi: IEEE 802.11 b/g/n @2.4GHz"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Bluetooth: BT V2.1/ BT V3.0/ BT V4.0"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Onboard Peripherals")),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"1 x Microphone"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"1 x MPU6050 motion sensor (gyroscope + accelerometer)"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"4 x Buttons (GPIO-KEY, Uboot, Recovery, Reset)"),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"1 x TFT display"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"External Storage")),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Micro-SD card slot"))),(0,a.kt)("tr",null,(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"Size")),(0,a.kt)("td",{style:{borderColor:"black",borderStyle:"solid",borderWidth:1,fontFamily:"Arial, sans-serif",fontSize:14,overflow:"hidden",padding:"10px 5px",textAlign:"left",verticalAlign:"top",wordBreak:"normal"}},(0,a.kt)("span",{style:{fontWeight:400,fontStyle:"normal"}},"40mm*35mm"))))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/hardwareoverview1.png"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Quantum has now been updated with a new version, which adjusts the antenna type for better wireless performance compared to the old one. In addition to this it also optimizes the PCB layout by moving the fan solder joints to the top. The Uboot and Recovery buttons have also been removed.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Working Computer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/micro-SD-Card-with-Card-Reader-32GB-Class-10-p-4082.html"},"A MicroSD Card")," (>= 16GB is recommended)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Keyboard and Mouse"))),(0,a.kt)("h3",{id:"download-the-latest-system-image"},"Download the Latest System Image"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download the ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/quark-n-21-1-11.zip"},"Latest System Image"))," here.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Latest Build"),":  2021-1-11"),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"sha256"),": 8f466adf56468b05d622eba27eb7b1a11ef6d4b943272984730a73ddff7cf59a  ")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The system image of Quantum Mini Linux dev board is modified from Nano Pi's image.")),(0,a.kt)("h3",{id:"step1---prepare-your-bootable-microsd-card"},"Step.1 - Prepare your Bootable MicroSD Card"),(0,a.kt)("p",null,"Format the MicroSD Card. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select Format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,a.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,a.kt)("h3",{id:"step2---download-flash-burner"},"Step.2 - Download Flash Burner"),(0,a.kt)("p",null,"Download the Open Source Flash burner ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,a.kt)("h3",{id:"step-3---writing-the-os-image-into-usb"},"Step 3 - Writing the OS Image into USB"),(0,a.kt)("p",null,"Select the downloaded System Image, select the formatted MicroSD card and Flash! Now, the bootable MicroSD card is all set to go."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/flash-img.png"})),(0,a.kt)("h3",{id:"booting-into-the-system"},"Booting into the System"),(0,a.kt)("p",null,"Now, plug the MicroSD card to the MicroSD Slot of the Atom-N and ",(0,a.kt)("strong",{parentName:"p"},"plug in the USB Type-C for power (USB Serial direction)"),"."),(0,a.kt)("p",null,"And now you can open the USB serial using any type of Serial software from your PC! You should be able system status LED starts to blink on the ",(0,a.kt)("strong",{parentName:"p"},"Quark-N"),"(SoM) and messages are printed to the Serial."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/bootup-n.png"})),(0,a.kt)("h3",{id:"system-default-users-and-password"},"System Default Users and Password"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Normal User"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"users: pi\npassword: quark\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Root User"),":")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"users: pi\npassword: quark\n")),(0,a.kt)("h2",{id:"system-configurations"},"System Configurations"),(0,a.kt)("p",null,"You may use ",(0,a.kt)("inlineCode",{parentName:"p"},"npi-config")," to configure the settings for the system image such as users, system languages, time zone, ssh and etc."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/npi-config.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The settings by default is configured, if you don't know what you're configuring please leave it as default.")),(0,a.kt)("h2",{id:"wi-fi"},"Wi-Fi"),(0,a.kt)("p",null,"Here we use NetworkManager to manager network, please follow though to connect to Wi-Fi:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Switch to root user:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"su root\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Turn on the Wi-Fi:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nmcli r wifi on\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scan the nearby Wi-Fi:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"nmcli dev wifi\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect to a specifc Wi-Fi:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'nmcli dev wifi connect "SSID" password "PASSWORD" ifname wlan0\n')),(0,a.kt)("p",null,"where change ",(0,a.kt)("inlineCode",{parentName:"p"},"SSID")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PASSWORD")," is your Wi-Fi credentials. Once connected, it will auto-connect the next time."),(0,a.kt)("p",null,"For more reference about NetworkManager, please read ",(0,a.kt)("a",{parentName:"p",href:"http://wiki.friendlyarm.com/wiki/index.php/Use_NetworkManager_to_configure_network_settings"},"here"),"."),(0,a.kt)("h3",{id:"software-updates-optional"},"Software Updates (Optional)"),(0,a.kt)("p",null,"Once connected to network, it is best practice to update the software:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,a.kt)("h2",{id:"remote-desktop-connection"},"Remote Desktop Connection"),(0,a.kt)("p",null,"As mentioned earlier, the system image has the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/neutrinolabs/xrdp"},(0,a.kt)("inlineCode",{parentName:"a"},"xrdp"))," server running at default so that you can establish remote desktop connection using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.microsoft.com/en-us/p/microsoft-remote-desktop/9wzdncrfj3ps?activetab=pivot:overviewtab"},"Microsoft Remote Desktop")),"(Supports Windows/macOS) within the same network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ifconfig")," to find out the ip address of the dev board.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"From the same network, type in the the dev board's ip address and log in"),". Now you have remote desktop control over the desktop!"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/remote-desk.png"})),(0,a.kt)("h2",{id:"bluetooth"},"Bluetooth"),(0,a.kt)("p",null,"The system image has built-in Bluetooth driver and you may follow the following steps to get Bluetooth started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"bluetoothctl\n")),(0,a.kt)("p",null,"Once within the ",(0,a.kt)("inlineCode",{parentName:"p"},"bluetoothctl")," interface. run scan on to list all nearby bluetooth device:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"scan on\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-scan.png"})),(0,a.kt)("p",null,"Copy the device MAC address, then connect to the device with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pair A4:xx:xx:xx:xx:30\ntrust A4:xx:xx:xx:xx:30\nconnect A4:xx:xx:xx:xx:30\n")),(0,a.kt)("p",null,"Now your dev board is connected to your bluetooth device. Type ",(0,a.kt)("inlineCode",{parentName:"p"},"quit")," back to the terminal. Play music on dev board, then you will hear music on your bluetooth speaker device!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/ble-connect.png"})),(0,a.kt)("h2",{id:"lcd"},"LCD"),(0,a.kt)("p",null,"The driver for the LCD screen uses ",(0,a.kt)("strong",{parentName:"p"},"SPI")," to communicate with the CPU and its driver is builtin with the system image hence the reason you should be able to see the system's message log when it booted up:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/LCD.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you connect USB keyboard and mouse to the dev board, this becomes the smallest build of a PC!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"There is a simple pygame example that demonstrate the LCD usage from Python.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Navigate to the project location:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd WorkSpace/PyGame\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo python hello_world.py\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/pygame.png"})),(0,a.kt)("h2",{id:"microphone"},"Microphone"),(0,a.kt)("p",null,"There is also a built-in microphone on the Atom-N (carrier board) which makes it Machine Learning capable! For simple testing, it is easy to use the ",(0,a.kt)("strong",{parentName:"p"},"Audacity")," software which is pre-installed with the image."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Log in the dev board using remote desktop.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("strong",{parentName:"p"},"Audacity")," software.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Starts recording and talk to the microphone, you should see the sound waves!"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"You may also use `arecord -l` in terminal to find out about the microphone.\n"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/mic.png"})),(0,a.kt)("p",null,"For further development based on the microphone, please check the path ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkSpace/WuKong")," for the examples using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/wzpan/wukong-robot"},"WuKong Robot"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kitt-AI/snowboy"},(0,a.kt)("strong",{parentName:"a"},"snowboy")),"."),(0,a.kt)("h2",{id:"gpio"},"GPIO"),(0,a.kt)("p",null,"For GPIO access, this is very convenient as linux based system and can be easily controlled using Python."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to the project location:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd WorkSpace/GPIO\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the GPIO example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo python gpio_key_led.py\n")),(0,a.kt)("p",null,"Now you can press the user button and you should be able to see the output in serial and the LED on the Quark-N (SoM) dims!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/gpio.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The LED is on Quark-N(SoM) and did not lead out on the Atom-N(Carrier Board).\n"))),(0,a.kt)("h2",{id:"opencv"},"OpenCV"),(0,a.kt)("p",null,"The system image has also implemented ",(0,a.kt)("strong",{parentName:"p"},"OpenCV")," into it and prepared a face detect demo using USB camera."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You will need a USB camera. Connect the USB camera to the USB port A of the dev board.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Navigate to the project location:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd WorkSpace/OpenCV\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Run the demo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"python FaceDetectOnTft.py\n")),(0,a.kt)("p",null,"You should see the video stream on the LCD screen of the dev board!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/facedetect.png"})),(0,a.kt)("h2",{id:"others"},"Others"),(0,a.kt)("p",null,"There are also more example usages of the dev board in the ",(0,a.kt)("inlineCode",{parentName:"p"},"WorkSpace")," such as ",(0,a.kt)("strong",{parentName:"p"},"TensorFlow Lite"),", ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/wzpan/wukong-robot"},"WuKong Robot")),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Kitt-AI/snowboy"},(0,a.kt)("strong",{parentName:"a"},"snowboy"))," and etc. Please navigate to the path and find out more!"),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("h3",{id:"q1-how-can-i-install-a-fan-to-cool-down-the-board"},"Q1: How can I install a fan to cool down the board"),(0,a.kt)("p",null,"We are planning to release a fan and a fan holder for this product in the near future. However, for now we have released ",(0,a.kt)("a",{parentName:"p",href:"#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip"},"fan holder DXF files")," for your reference. You can install a 20x20x6mm fan to this fan holder."),(0,a.kt)("p",null,"The fan holder can be installed as follows:"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"http://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/connection-diagram.jpg",alt:"pir",width:"500",height:"auto"})),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/Atom-Shield-N-AD-files.zip"},(0,a.kt)("strong",{parentName:"a"},"Atom Shield N AD"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/3D%20Files.zip"},(0,a.kt)("strong",{parentName:"a"},"Heat sink and Stand 3D file"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,a.kt)("a",{parentName:"li",href:"#files.seeedstudio.com/wiki/Quantum-Mini-Linux-Dev-Kit/cooling-case-202006-fan.zip"},(0,a.kt)("strong",{parentName:"a"},"Fan holder")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
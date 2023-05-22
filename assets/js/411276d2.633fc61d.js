"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39589],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||k[d]||l;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},37267:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={description:"reTerminal DM Flash OS",title:"reTerminal DM Flash OS",keywords:["Edge","reTerminal-DM","Flash OS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-dm-flash-OS",last_update:{date:"04/23/2023",author:"Peter Pan"}},i="reTerminal DM Flash Raspbian OS to eMMC",o={unversionedId:"Edge/reTerminal-DM/reterminal-dm-flash-OS",id:"Edge/reTerminal-DM/reterminal-dm-flash-OS",title:"reTerminal DM Flash OS",description:"reTerminal DM Flash OS",source:"@site/docs/Edge/reTerminal-DM/reterminal-dm-flash-OS.md",sourceDirName:"Edge/reTerminal-DM",slug:"/reterminal-dm-flash-OS",permalink:"/reterminal-dm-flash-OS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal-DM/reterminal-dm-flash-OS.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1682179200,formattedLastUpdatedAt:"Apr 22, 2023",frontMatter:{description:"reTerminal DM Flash OS",title:"reTerminal DM Flash OS",keywords:["Edge","reTerminal-DM","Flash OS"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reterminal-dm-flash-OS",last_update:{date:"04/23/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Getting Started",permalink:"/reterminal-dm"},next:{title:"reTerminal DM Warranty",permalink:"/reterminal-dm-warranty"}},s={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Software Requirements",id:"software-requirements",level:2},{value:"Steps for Flashing Raspbian OS",id:"steps-for-flashing-raspbian-os",level:2},{value:"For Windows",id:"for-windows",level:3},{value:"For MAC",id:"for-mac",level:3},{value:"For Linux",id:"for-linux",level:3},{value:"Install Drivers",id:"install-drivers",level:2},{value:"For Windows",id:"for-windows-1",level:5},{value:"For Mac/Linux",id:"for-maclinux",level:5},{value:"Install reTerminal drivers after flashing new Raspbian OS",id:"install-reterminal-drivers-after-flashing-new-raspbian-os",level:3}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"reterminal-dm-flash-raspbian-os-to-emmc"},"reTerminal DM Flash Raspbian OS to eMMC"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/-/1-114070201-reterminal-dm-first_one_.jpg",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,'reTerminal DM is A 10.1" open-source industrial HMI - an Integrated Device Master to unify data flow and manage the onsite device.'),(0,r.kt)("p",null,"Based on Raspberry Pi CM4, and as a Panel PC, HMI, PLC, IIoT Gateway all-in-one device, reTerminal DM is a new generation of interactive sensing hub with an IP65 industrial-grade large screen."),(0,r.kt)("p",null,"It is equipped with rich scalability and hybrid connectivity, supporting CAN bus, RS485, RS232, Gigabit Ethernet port, and other interfaces, as well as powerful wireless communication capabilities such as 4G, LoRa\xae, WiFi, and BLE."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"*","4G and LoRa\xae modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly, for\n",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/reTerminal-DM-LTE-Cat-4-EC25-Bundle-p-5675.html"},"4G bundle"))),(0,r.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"You need to prepare the following hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"reTerminal DM x 1"),(0,r.kt)("li",{parentName:"ul"},"Host Computer (Windows/Mac/Linux) x 1"),(0,r.kt)("li",{parentName:"ul"},"Ethernet cable x 1"),(0,r.kt)("li",{parentName:"ul"},"Power adapter (12V-24V) BYO"),(0,r.kt)("li",{parentName:"ul"},"USB Type-C cable x 1 ")),(0,r.kt)("h2",{id:"software-requirements"},"Software Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/raspberrypi/usbboot"},"usbboot tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.raspberrypi.com/software/"},"Raspberry Pi Imager APP"))),(0,r.kt)("h2",{id:"steps-for-flashing-raspbian-os"},"Steps for Flashing Raspbian OS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Flip the ",(0,r.kt)("inlineCode",{parentName:"p"},"boot mode switch")," located next to the USB Type-C port, make sure switch is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"disable eMMC boot mode")," according to the diagram below:"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/flash.png",alt:"pir",width:"800",height:"auto"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Please use the USB Type-C data cable connect to the Type-C port on the reTerminal DM, as shown in the above image,")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Please connect the Power Cord from the power supply to the reTerminal DM power port."))),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Please make sure you have connected the power cord in the right polarity. ")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/power.png",alt:"pir",width:"800",height:"auto"})),(0,r.kt)("p",null,"Now let's move on to software set up on your host computer. Please follow the steps according to your desired operating system"),(0,r.kt)("h3",{id:"for-windows"},"For Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.kt)("strong",{parentName:"p"},"rpiboot setup installer")," by click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe"},"here"))," to install the necessary drivers and the boot tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Connect reTerminal DM to the PC via USB Type-C cable"))),(0,r.kt)("p",null,"Windows will now find the hardware and install the necessary drivers"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Search for ",(0,r.kt)("strong",{parentName:"p"},"rpiboot")," tool that we installed before and open it")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Open ",(0,r.kt)("strong",{parentName:"p"},"file explorer")," and you will see the eMMC of the Computer Module 4 shown as a ",(0,r.kt)("strong",{parentName:"p"},"USB mass storage device"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Download ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," software from ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.raspberrypi.org/software/"},"here")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 6.")," Open Raspberry Pi Imager software"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 7.")," Press ",(0,r.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,r.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,"Here you can ",(0,r.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wiFi, set locale settings")," and more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 8.")," Click ",(0,r.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You can select other OS such as ",(0,r.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,r.kt)("strong",{parentName:"p"},"Other general purpose OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 9.")," Click ",(0,r.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 10.")," Finally, click ",(0,r.kt)("strong",{parentName:"p"},"WRITE")))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 11.")," Flip the ",(0,r.kt)("strong",{parentName:"li"},"Boot Mode switch")," back to the original position")),(0,r.kt)("p",null,"Now you can skip to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#install-drivers"},"here"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Once the above steps finished and you have reapply the power to the reTerminal DM, the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the ",(0,r.kt)("a",{parentName:"p",href:"#install-drivers"},"install drivers")," steps to revive the screen.")),(0,r.kt)("h3",{id:"for-mac"},"For MAC"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"You need to install ",(0,r.kt)("a",{parentName:"strong",href:"https://brew.sh/"},"homebrew")," before proceed the following steps."),"\nPlease open a terminal and type ",(0,r.kt)("inlineCode",{parentName:"p"},"brew -V")," to check if you have setup the correct homebrew environment, you should see the version of the homebrew environment you have installed.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Clone the ",(0,r.kt)("strong",{parentName:"li"},"usbboot")," repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Install ",(0,r.kt)("strong",{parentName:"li"},"libusb"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install libusb\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Install ",(0,r.kt)("strong",{parentName:"li"},"pkg-config"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install pkg-config\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Build using make")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Run the binary")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 6.")," Connect reTerminal to the your Mac computer via USB Type-C cable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 7.")," Download and Install ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 8.")," Open the ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," Application"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 9.")," Press ",(0,r.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,r.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,"Here you can ",(0,r.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 10.")," Click ",(0,r.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You can select OS such as ",(0,r.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,r.kt)("strong",{parentName:"p"},"Other general purpose OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 11.")," Click ",(0,r.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 12.")," Finally, click ",(0,r.kt)("strong",{parentName:"p"},"WRITE")))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 13.")," Flip the ",(0,r.kt)("strong",{parentName:"li"},"Boot Mode switch")," back to the original position")),(0,r.kt)("p",null,"Now you can skip to ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"#install-drivers"},"here"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Once the above steps finished and you have reapply the power to the reTerminal DM, you should experience that the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the ",(0,r.kt)("a",{parentName:"p",href:"#install-drivers"},"install drivers")," steps to revive the screen.")),(0,r.kt)("h3",{id:"for-linux"},"For Linux"),(0,r.kt)("p",null,"We will use Git to obtain the ",(0,r.kt)("strong",{parentName:"p"},"rpiboot")," source code, so make sure Git is installed"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Open a ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," window and type the following to update the ",(0,r.kt)("strong",{parentName:"li"},"packages list"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Install ",(0,r.kt)("strong",{parentName:"li"},"Git")," by the following command")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git pkg-config make gcc libusb-1.0-0-dev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Git might produce an error if the date is not set properly. Type the following to correct this")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo date MMDDhhmm\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," Where ",(0,r.kt)("strong",{parentName:"p"},"MM")," is the month, ",(0,r.kt)("strong",{parentName:"p"},"DD")," is the date, and ",(0,r.kt)("strong",{parentName:"p"},"hh")," and ",(0,r.kt)("strong",{parentName:"p"},"mm")," are hours and minutes respectively."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Clone the ",(0,r.kt)("strong",{parentName:"li"},"usbboot")," tool repository")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone --depth=1 https://github.com/raspberrypi/usbboot\ncd usbboot\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 5.")," Build and install the usbboot tool")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"make\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 6.")," Run the usbboot tool and it will wait for a connection")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./rpiboot\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 7.")," Connect reTerminal to the PC via USB Type-C cable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 8.")," Download ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi Imager")," software by visiting ",(0,r.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/software/"},"this link"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 9.")," Open Raspberry Pi Imager software"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 10.")," Press ",(0,r.kt)("strong",{parentName:"li"},"CTRL + SHIFT + X")," on the keyboard to open ",(0,r.kt)("strong",{parentName:"li"},"Advanced options")," window")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/rpi-imager-advanced.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,"Here you can ",(0,r.kt)("strong",{parentName:"p"},"set a hostname, enable SSH, set a password, configure wifi, set locale settings")," and more"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 11.")," Click ",(0,r.kt)("strong",{parentName:"li"},"CHOOSE OS")," and select your preferred OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/OS-select.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," You can select OS such as ",(0,r.kt)("strong",{parentName:"p"},"64-bit Ubuntu")," by navigating into ",(0,r.kt)("strong",{parentName:"p"},"Other general purpose OS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Ubuntu-select.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 12.")," Click ",(0,r.kt)("strong",{parentName:"p"},"CHOOSE STORAGE")," and select the connected eMMC drive")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 13.")," Finally, click ",(0,r.kt)("strong",{parentName:"p"},"WRITE")))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/RPI_Imager_Final.png",alt:"pir",width:"600",height:"auto"})),(0,r.kt)("p",null,"Please wait a few minutes until the flashing process is complete."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 14.")," Flip the ",(0,r.kt)("strong",{parentName:"li"},"Boot Mode Switch")," back to the original position")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Once the above steps finished and you have reapply the power to the reTerminal DM, you should experience that the Power LED should turn on yellow color and the ACT LED should flashing green color, but the screen is blank and no backlight. please do not panic, you just need to following the ",(0,r.kt)("a",{parentName:"p",href:"#install-drivers"},"install drivers")," steps to revive the screen.")),(0,r.kt)("h2",{id:"install-drivers"},"Install Drivers"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The following steps require some basic Linux command line knowledge, Please prepare yourself a cup of coffee and getting ready.")),(0,r.kt)("p",null,"As following the above flashing OS steps, the reTerminal DM should have SSH enabled with the hostname of ",(0,r.kt)("inlineCode",{parentName:"p"},"raspberrypi.local"),"."),(0,r.kt)("p",null,"Now please connect the Ethernet cable to the reTerminal DM and a router which is on the same network as your host computer."),(0,r.kt)("admonition",{title:"s",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To test if your reTerminal DM is on the same network with host computer, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"ping raspberrypi.local")),(0,r.kt)("p",{parentName:"admonition"},"if you see the following output after the ping command which means both devices are on the same network:"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/ping.png",alt:"pir",width:"600",height:"auto"}))),(0,r.kt)("h5",{id:"for-windows-1"},"For Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Open ",(0,r.kt)("strong",{parentName:"li"},"Command Prompt")," and type the following")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi@raspberrypi.local\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Type ",(0,r.kt)("strong",{parentName:"li"},"yes")," for the prompt")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows-prompt.png",alt:"pir",width:"750",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Enter the password as follows")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"http://files.seeedstudio.com/wiki/ReTerminal/ssh-windows.png",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("h5",{id:"for-maclinux"},"For Mac/Linux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Open ",(0,r.kt)("strong",{parentName:"li"},"Terminal")," on the computer and type the following")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi@raspberrypi.local\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Type ",(0,r.kt)("strong",{parentName:"li"},"yes")," for the following message")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"ECDSA key fingerprint is SHA256:XXXXXXX.\nAre you sure you want to continue connecting (yes/no/[fingerprint])?\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," When it asks for the password, type the following")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"raspberry\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," If you have sucessfully logged into the Raspberry Pi OS, you will see the following output")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/102110497/SSH_WiFi_Linux.png",alt:"pir",width:"900",height:"auto"})),(0,r.kt)("h3",{id:"install-reterminal-drivers-after-flashing-new-raspbian-os"},"Install reTerminal drivers after flashing new Raspbian OS"),(0,r.kt)("p",null,"reTerminal DM comes with the necessary drivers pre-installed out-of-the-box so you don't need to install any additional drivers. However, if you flash new OS by yourself, you need to install the necessary drivers separately."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Clone the following repo in the ssh shell you have connected to reTerminal DM from the above steps")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install git -y\ngit clone --depth 1 https://github.com/Seeed-Studio/seeed-linux-dtoverlays\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Enter the repo")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd seeed-linux-dtoverlays\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Type the following to install the drivers")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./scripts/reTerminal.sh --device reTerminal-plus\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Reboot the reTerminal DM")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,r.kt)("p",null,"Now your screen should light up and run normally."),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
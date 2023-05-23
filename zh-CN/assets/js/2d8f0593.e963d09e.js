"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71875],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),d=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,i[1]=s;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={description:"J101 Enable SD Card",title:"J101 Enable SD Card",tags:["Nvidia","reComputer"],keywords:["Nvidia","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/J101_Enable_SD_Card",last_update:{date:"01/05/2022",author:"w0x7ce"},no_comments:!1},i=void 0,s={unversionedId:"Edge/reComputer/Tutorials/J101_Enable_SD_Card",id:"Edge/reComputer/Tutorials/J101_Enable_SD_Card",title:"J101 Enable SD Card",description:"J101 Enable SD Card",source:"@site/docs/Edge/reComputer/Tutorials/J101_Enable_SD_Card.md",sourceDirName:"Edge/reComputer/Tutorials",slug:"/J101_Enable_SD_Card",permalink:"/custom/zh-CN/J101_Enable_SD_Card",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Tutorials/J101_Enable_SD_Card.md",tags:[{label:"Nvidia",permalink:"/custom/zh-CN/tags/nvidia"},{label:"reComputer",permalink:"/custom/zh-CN/tags/re-computer"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1641340800,formattedLastUpdatedAt:"2022\u5e741\u67085\u65e5",frontMatter:{description:"J101 Enable SD Card",title:"J101 Enable SD Card",tags:["Nvidia","reComputer"],keywords:["Nvidia","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/J101_Enable_SD_Card",last_update:{date:"01/05/2022",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"J1010 Boot From SD Card",permalink:"/custom/zh-CN/J1010_Boot_From_SD_Card"},next:{title:"reComputer for Jetson Tutorials and Exercise",permalink:"/custom/zh-CN/reComputer_Jetson_Series_Tutorials_Exercise"}},l={},d=[{value:"Driver Configuration",id:"driver-configuration",level:2},{value:"Step 1 . Clone the repo",id:"step-1--clone-the-repo",level:3},{value:"Step 2. Compile jetson-sdmmc-overlay",id:"step-2-compile-jetson-sdmmc-overlay",level:3},{value:"Step 3. Make sure the sd card can be recognized",id:"step-3-make-sure-the-sd-card-can-be-recognized",level:3},{value:"Step 4. Name our device and Finish driver installation",id:"step-4-name-our-device-and-finish-driver-installation",level:3},{value:"More",id:"more",level:2},{value:"Change SD card I/O speed",id:"change-sd-card-io-speed",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"j101-enable-sd-card"},"J101 Enable SD Card"),(0,n.kt)("p",null,"The method is flashing NVIDIA JetPack OS to the SD card on J101 Carrier Board which is operated on the reComputer J1010. So ",(0,n.kt)("a",{href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/",target:"_blank"},(0,n.kt)("span",null,"Flash JetPack OS into reComputer J1010"))," first is required."),(0,n.kt)("h2",{id:"driver-configuration"},"Driver Configuration"),(0,n.kt)("p",null,"At the beginning, we need to power on the reComputer and go to the desktop like below:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/S.png"})),(0,n.kt)("h3",{id:"step-1--clone-the-repo"},"Step 1 . Clone the repo"),(0,n.kt)("p",null,"Right click and open the Terminal, and then execute the command below to download the relevant code:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays.git\n")),(0,n.kt)("h3",{id:"step-2-compile-jetson-sdmmc-overlay"},"Step 2. Compile jetson-sdmmc-overlay"),(0,n.kt)("p",null,"Access to the workspace location:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd seeed-linux-dtoverlays\n")),(0,n.kt)("p",null,'For J101 Carrier board , We need to change the "compatible" value in this file "overlays\\jetsonnano\\jetson-sdmmc-overlay.dts".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'sed -i \'17s#JETSON_COMPATIBLE#\\"nvidia,p3449-0000-b00+p3448-0002-b00\\"\\, \\"nvidia\\,jetson-nano\\"\\, \\"nvidia\\,tegra210\\"#\' overlays/jetsonnano/jetson-sdmmc-overlay.dts\n')),(0,n.kt)("p",null,"And then we compile the file we changed to make sure they are correctly modified."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"make overlays/jetsonnano/jetson-sdmmc-overlay.dtbo\n")),(0,n.kt)("h3",{id:"step-3-make-sure-the-sd-card-can-be-recognized"},"Step 3. Make sure the sd card can be recognized"),(0,n.kt)("p",null,"Insert the SD card to the ",(0,n.kt)("strong",{parentName:"p"},"J101 Carrier board"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"sudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/\ncd /boot/\nsudo /opt/nvidia/jetson-io/config-by-hardware.py -l\n")),(0,n.kt)("p",null,"After executing these command above, we should get the output ",(0,n.kt)("strong",{parentName:"p"},"similar")," (",(0,n.kt)("strong",{parentName:"p"},"It may not be exactly the same. Depends on the peripheral and the drivers already installed"),") to the following and we know the SD card have been regognized:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-txt"},"    Header 1 [default]: Jetson 40pin Header\n    Available hardware modules:\n    1. Adafruit SPH0645LM4H\n    2. Adafruit UDA1334A\n    3. FE-PI Audio V1 and Z V2\n    4. MCP251x CAN Controller\n    5. ReSpeaker 4 Mic Array\n    6. ReSpeaker 4 Mic Linear Array\n    7. reComputer sdmmc\n    Header 2: Jetson Nano CSI Connector\n\n\n    Available hardware modules:\n    1. Camera IMX219 Dual\n    2. Camera IMX477 Dual\n    3. Camera IMX477-A and IMX219-B\n    Header 3: Jetson M.2 Key E Slot\n    No hardware configurations found!\n")),(0,n.kt)("h3",{id:"step-4-name-our-device-and-finish-driver-installation"},"Step 4. Name our device and Finish driver installation"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'sudo /opt/nvidia/jetson-io/config-by-hardware.py -n "reComputer sdmmc"\n')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/fix01.png"})),(0,n.kt)("p",null,"!!!Note\nYou may need to ",(0,n.kt)("strong",{parentName:"p"},"reboot")," to run jtop after completing the installation for the first time."),(0,n.kt)("h2",{id:"more"},"More"),(0,n.kt)("h3",{id:"change-sd-card-io-speed"},"Change SD card I/O speed"),(0,n.kt)("p",null,"We provide SD card function on ",(0,n.kt)("a",{href:"https://wiki.seeedstudio.com/install_NVIDIA_software_to_Jetson-101",target:"_blank"},(0,n.kt)("span",null,"reComputer J101 carrier board")),", which supports CLK Frequency 48MHz. The CLK here is designed to achieve certificates (such as CE/FCC). If you want to increase CLK by yourself, you can use the instruction below."),(0,n.kt)("div",null,(0,n.kt)("p",{style:{}},(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts",target:"_blank"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/seeed-linux-dtoverlays/blob/master/overlays/jetsonnano/jetson-sdmmc-overlay.dts",target:"_blank"},(0,n.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,n.kt)("p",null)),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1"),". Clone this repository and modify the the code below."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/Seeed-Studio/seeed-linux-dtoverlays\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2"),". Modify and Compile max-clk-limit value"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd seeed-linux-dtoverlays\nsed -i '10s#48000000#208000000#' overlays/jetsonnano/jetson-sdmmc-overlay.dts\nmake overlays/jetsonnano/jetson-sdmmc-overlay.dtbo\nsudo cp overlays/jetsonnano/jetson-sdmmc-overlay.dtbo /boot/\nsudo /opt/nvidia/jetson-io/config-by-hardware.py -n \"reComputer sdmmc\"\n"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3"),". Reboot"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"reboot\n")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
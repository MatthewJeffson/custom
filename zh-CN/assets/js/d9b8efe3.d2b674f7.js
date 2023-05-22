"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72426],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(o),p=n,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return o?r.createElement(h,a(a({ref:t},c),{},{components:o})):r.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}p.displayName="MDXCreateElement"},65582:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=o(87462),n=(o(67294),o(3905));const i={description:"J1010 Boot From SD Card",title:"J1010 Boot From SD Card",tags:["Nvidia","reComputer"],keywords:["Nvidia","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/J1010_Boot_From_SD_Card",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},a="J1010 Boot From SD Card",s={unversionedId:"Edge/reComputer/Tutorials/J1010_Boot_From_SD_Card",id:"Edge/reComputer/Tutorials/J1010_Boot_From_SD_Card",title:"J1010 Boot From SD Card",description:"J1010 Boot From SD Card",source:"@site/docs/Edge/reComputer/Tutorials/J1010_Boot_From_SD_Card.md",sourceDirName:"Edge/reComputer/Tutorials",slug:"/J1010_Boot_From_SD_Card",permalink:"/zh-CN/J1010_Boot_From_SD_Card",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Tutorials/J1010_Boot_From_SD_Card.md",tags:[{label:"Nvidia",permalink:"/zh-CN/tags/nvidia"},{label:"reComputer",permalink:"/zh-CN/tags/re-computer"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672848e3,formattedLastUpdatedAt:"2023\u5e741\u67084\u65e5",frontMatter:{description:"J1010 Boot From SD Card",title:"J1010 Boot From SD Card",tags:["Nvidia","reComputer"],keywords:["Nvidia","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/J1010_Boot_From_SD_Card",last_update:{date:"01/05/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Memory Expansion",permalink:"/zh-CN/reComputer_Jetson_Memory_Expansion"},next:{title:"J101 Enable SD Card",permalink:"/zh-CN/J101_Enable_SD_Card"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Flashing System from J101 to SD Card",id:"flashing-system-from-j101-to-sd-card",level:2},{value:"Boot Configuration",id:"boot-configuration",level:2},{value:"Change boot device",id:"change-boot-device",level:3},{value:"Tech Support",id:"tech-support",level:2}],c={toc:d};function m(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"j1010-boot-from-sd-card"},"J1010 Boot From SD Card"),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"We need to read these two articles before we start. Make sure the J1010 system is burned in correctly and that the sd card driver is installed properly."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack/"},"J1010/J101 Flash Jetpack")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/J101_Enable_SD_Card/"},"J101_Enable_SD_Card"))),(0,n.kt)("h2",{id:"flashing-system-from-j101-to-sd-card"},"Flashing System from J101 to SD Card"),(0,n.kt)("p",null,"First, we need to clone the script include the tools we need."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/limengdu/bootFromUSB\n")),(0,n.kt)("p",null,'Second , We need to make sure the sd card is in ext4 format, which can be seen visually in the "disk" tool, if it is not ext4 we need to format it and change it to ext4 format.'),(0,n.kt)("p",null,'Click blue are and then click on green area to select "Format Partiton"'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_1.jpg"})),(0,n.kt)("p",null,'Click on green area to select "Internal disk for use with Linux systems only (Ext4)"\nFill the name want you wannt in "Volume Name" in the yellow area.'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_fix_2.jpg"})),(0,n.kt)("p",null,"So we can find the format of the sd card has been changed to ext4."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/disk_view_1.png"})),(0,n.kt)("p",null,"And then , go to the script directory , execute the following command like this"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd bootFromUSB\n./copyRootToUSB.sh -p /dev/mmcblk1p1\n")),(0,n.kt)("p",null,"Wait a while, only until it finishes automatically, if no error is reported, the burning is done"),(0,n.kt)("h2",{id:"boot-configuration"},"Boot Configuration"),(0,n.kt)("p",null,'Once the driver has been successfully installed and configured,we can simply view it via the command like "lsblk" or view device in "/dev".'),(0,n.kt)("h3",{id:"change-boot-device"},"Change boot device"),(0,n.kt)("p",null,'We are supposed to change the configuration in "/boot/extlinux/extlinux.conf".'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Boot from sd card"),(0,n.kt)("p",{parentName:"li"},"  After we boot from the emmc on the carrier board, we want to modify it to boot from the SD card. We need to make sure that the previous process, including the system burn to the sd card, and the sd card drivers are installed properly. Modify the parameters after root to the address of the device we are booting from. When we have completed our changes, reboot the system."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("strong",{parentName:"p"},'Before reboot Modify "/boot/extlinux/extlinux.conf" After reboot view "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf"')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_3.png"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'!!!Note\n    Our configuration file after booting the system from the sd card is "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" and the configuration file after booting the system from the onboard emmc is in "/boot/extlinux/extlinux.conf" . They are the same files from which the device reads the configuration and chooses where to boot the system after power-up, and the relative paths change when the system has finished booting.\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Boot from board emmc"),(0,n.kt)("p",{parentName:"li"},"  We want to change back to booting from emmc after booting from an SD card or we need to change the SD card for some purpose. Then we need to change the device back to boot from emmc first. We should make the following changes."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("strong",{parentName:"p"},'Before reboot Modify "/media/seeed/{xxx-xxx}/boot/extlinux/extlinux.conf" After reboot view "/boot/extlinux/extlinux.conf"')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/config_4.png"})))),(0,n.kt)("p",null,"Finally, we find it really works well."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Boot from emmc"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_emmc.png"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Boot from sd card"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Boot_NVIDIA_System_from_SD_card_for_Jetson101/lsblk_sd.png"})))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
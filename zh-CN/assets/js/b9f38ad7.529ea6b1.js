"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88968],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",S={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),c=r,m=d["".concat(s,".").concat(c)]||d[c]||S[c]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={description:"ODYSSEY - X86J41x5",title:"Original OS",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Installing-OS",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,l={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS",title:"Original OS",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-Installing-OS",permalink:"/custom/zh-CN/ODYSSEY-X86J4105-Installing-OS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-Installing-OS.md",tags:[{label:"ODYSSEY",permalink:"/custom/zh-CN/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672675200,formattedLastUpdatedAt:"2023\u5e741\u67082\u65e5",frontMatter:{description:"ODYSSEY - X86J41x5",title:"Original OS",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Installing-OS",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Frigate",permalink:"/custom/zh-CN/ODYSSEY-X86J4105-Frigate"},next:{title:"Firmware Upgrade",permalink:"/custom/zh-CN/ODYSSEY-X86J4105-Updating-Firmware"}},s={},u=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Creating a Bootable USB",id:"creating-a-bootable-usb",level:2},{value:"Step 1 - Download the Operating System Image",id:"step-1---download-the-operating-system-image",level:3},{value:"Step 2 - Prepare your Bootable USB",id:"step-2---prepare-your-bootable-usb",level:3},{value:"Step 3 - Download Flash Burner",id:"step-3---download-flash-burner",level:3},{value:"Step 4 - Writing the OS Image into USB",id:"step-4---writing-the-os-image-into-usb",level:3},{value:"Installing Operating System (Ubuntu)",id:"installing-operating-system-ubuntu",level:2},{value:"Step 1 - Selecting Bootable USB as Boot Device",id:"step-1---selecting-bootable-usb-as-boot-device",level:3},{value:"Step 2 - Installing the OS",id:"step-2---installing-the-os",level:3},{value:"Step 3 - Reboot and Enjoy New OS",id:"step-3---reboot-and-enjoy-new-os",level:3},{value:"Notes",id:"notes",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial demonstrates how to create a bootable USB drive and install Linux OS(Ubuntu Desktop 18.04) onto the ODYSSEY - X86J41x5."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Working Computer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A USB Drive(>= 8GB is recommended)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A Monitor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Keyboard and Mouse"))),(0,r.kt)("h2",{id:"creating-a-bootable-usb"},"Creating a Bootable USB"),(0,r.kt)("h3",{id:"step-1---download-the-operating-system-image"},"Step 1 - Download the Operating System Image"),(0,r.kt)("p",null,"Download your required OS Image to your local drive. In this tutorial, ",(0,r.kt)("em",{parentName:"p"},"Ubuntu Desktop 18.04")," is used to demonstrate to install into the ODYSSEY - X86J41x5."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can download ",(0,r.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/desktop"},"Ubuntu")," OS Image from here.")),(0,r.kt)("h3",{id:"step-2---prepare-your-bootable-usb"},"Step 2 - Prepare your Bootable USB"),(0,r.kt)("p",null,"Format the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Format"),".  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,r.kt)("h3",{id:"step-3---download-flash-burner"},"Step 3 - Download Flash Burner"),(0,r.kt)("p",null,"Download the Open Source Flash burner ",(0,r.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,r.kt)("h3",{id:"step-4---writing-the-os-image-into-usb"},"Step 4 - Writing the OS Image into USB"),(0,r.kt)("p",null,"Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"})),(0,r.kt)("h2",{id:"installing-operating-system-ubuntu"},"Installing Operating System (Ubuntu)"),(0,r.kt)("h3",{id:"step-1---selecting-bootable-usb-as-boot-device"},"Step 1 - Selecting Bootable USB as Boot Device"),(0,r.kt)("p",null,"Plug in your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"F7"))," to enter the Boot Manager Screen. And use  ","\u2191"," and ","\u2193"," Key on keyboard to select your bootable USB."),(0,r.kt)("p",null,"In this Tutorial, ",(0,r.kt)("inlineCode",{parentName:"p"},"UEFI: Mass Storage Device 1.00")," is the bootable USB."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/bios.png"})),(0,r.kt)("h3",{id:"step-2---installing-the-os"},"Step 2 - Installing the OS"),(0,r.kt)("p",null,"Select the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Install ubuntu"))," and press Enter. Follow through the installing instructions on the screen, i.e. system language, user name, location and etc."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For detail steps of Installing ubuntu, you can follow ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=vt5Lu_ltPkU"},"this")," video for more information. ",(0,r.kt)("em",{parentName:"p"},"The Installing part starts at 3:20 in the video.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/install.png"})),(0,r.kt)("h3",{id:"step-3---reboot-and-enjoy-new-os"},"Step 3 - Reboot and Enjoy New OS"),(0,r.kt)("p",null,"If everything goes well, ubuntu should be installed on the ODYSSEY - X86J41x5 and you can start enjoying your new OS!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/result.jpg"})),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ubuntu 16 is not supported by ODYSSEY - X86J41x5"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
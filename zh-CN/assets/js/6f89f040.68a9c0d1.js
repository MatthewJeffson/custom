"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(l,".").concat(c)]||u[c]||g[c]||s;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:a,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},83150:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const s={description:"ODYSSEY - X86J41x5",title:"pfSense Installation",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-pfSense",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,r={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-pfSense",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-pfSense",title:"pfSense Installation",description:"ODYSSEY - X86J41x5",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-pfSense.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation",slug:"/ODYSSEY-X86J4105-pfSense",permalink:"/zh-CN/ODYSSEY-X86J4105-pfSense",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/OS_Installation/ODYSSEY-X86J4105-pfSense.md",tags:[{label:"ODYSSEY",permalink:"/zh-CN/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672675200,formattedLastUpdatedAt:"2023\u5e741\u67082\u65e5",frontMatter:{description:"ODYSSEY - X86J41x5",title:"pfSense Installation",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-pfSense",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"OPNsense Installation",permalink:"/zh-CN/ODYSSEY-X86-OPNsense"},next:{title:"TrueNAS Installation",permalink:"/zh-CN/ODYSSEY-X86-TrueNAS"}},l={},p=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Download the pfSense OS Image",id:"download-the-pfsense-os-image",level:2},{value:"Creating a Bootable USB",id:"creating-a-bootable-usb",level:2},{value:"Step 1 - Prepare your Bootable USB",id:"step-1---prepare-your-bootable-usb",level:3},{value:"Step 2 - Download Flash Burner",id:"step-2---download-flash-burner",level:3},{value:"Step 3 - Writing the OS Image into USB",id:"step-3---writing-the-os-image-into-usb",level:3},{value:"Installing the pfSense OS",id:"installing-the-pfsense-os",level:2},{value:"Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5",id:"step-1---enabling-csm-mode-in-odyssey---x86j41x5",level:3},{value:"Step 2 - Install the OS",id:"step-2---install-the-os",level:3},{value:"Step 3 - Installing process",id:"step-3---installing-process",level:3},{value:"Configurations of pfSense",id:"configurations-of-pfsense",level:2},{value:"Changing pfSense WebGUI protocol (optional)",id:"changing-pfsense-webgui-protocol-optional",level:3},{value:"pfSense Web GUI Configurations",id:"pfsense-web-gui-configurations",level:2},{value:"Installing packages",id:"installing-packages",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This tutorial demonstrates how to install the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.pfsense.org/"},"pfSense"))," onto the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4105800-p-4445.html"},"ODYSSEY-X86J41x5"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://www.pfsense.org/"},"pfSense"))," is an open source firewall/router computer software distribution based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.freebsd.org/"},"FreeBSD"),". It is installed on a physical computer or a virtual machine to make a dedicated firewall/router for a network."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-04-n.png"})),(0,a.kt)("p",null,"For more, you also visit the official ",(0,a.kt)("a",{parentName:"p",href:"https://docs.netgate.com/pfsense/en/latest/"},"pfSense documents")," to get more insight!"),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Working Computer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"USB Drive x 2 (<8GB is recommended)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Monitor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Keyboard")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Internet & Ethernet Cable"))),(0,a.kt)("h2",{id:"download-the-pfsense-os-image"},"Download the pfSense OS Image"),(0,a.kt)("p",null,"First, download the ",(0,a.kt)("a",{parentName:"p",href:"https://www.pfsense.org/download/"},"pfSense OS Image")," into your drive."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/Download.png"})),(0,a.kt)("p",null,"For ODYSSEY-X86J41x5, choose the settings as above and click download."),(0,a.kt)("h2",{id:"creating-a-bootable-usb"},"Creating a Bootable USB"),(0,a.kt)("h3",{id:"step-1---prepare-your-bootable-usb"},"Step 1 - Prepare your Bootable USB"),(0,a.kt)("p",null,"Format one of the USB drive. If you are a Windows user, you can format the USB drive by right-clicking the USB Drive and select ",(0,a.kt)("inlineCode",{parentName:"p"},"Format"),".  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Choose ",(0,a.kt)("inlineCode",{parentName:"p"},"FAT32")," for the File System."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/formatUSB.png"})),(0,a.kt)("h3",{id:"step-2---download-flash-burner"},"Step 2 - Download Flash Burner"),(0,a.kt)("p",null,"Download the Open Source Flash burner ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher"),". Download the version according to your operating system(Windows/macOS/Linux)."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcher.jpg"})),(0,a.kt)("h3",{id:"step-3---writing-the-os-image-into-usb"},"Step 3 - Writing the OS Image into USB"),(0,a.kt)("p",null,"Select the downloaded Operating System Image, select the formatted USB Drive and Flash! Now, the bootable USB is all set to go."),(0,a.kt)("div",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/InstallingOS/etcherDone.png"})),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If a warning states that it does not contain a partition table appear, you can simply click ",(0,a.kt)("strong",{parentName:"p"},"continue")," to ignore the message."),(0,a.kt)("h2",{id:"installing-the-pfsense-os"},"Installing the pfSense OS"),(0,a.kt)("h3",{id:"step-1---enabling-csm-mode-in-odyssey---x86j41x5"},"Step 1 - Enabling CSM Mode in ODYSSEY - X86J41x5"),(0,a.kt)("p",null,"Plugin your bootable USB, Monitor and keyboard to ODYSSEY - X86J41x5, and power up. When booting up, keep pressing ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"DEL"))," key to enter the setup screen. Navigate to ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"Advanced"))," -> ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"CSM Support"))," and press Enter to enable it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetting.jpg"})),(0,a.kt)("h3",{id:"step-2---install-the-os"},"Step 2 - Install the OS"),(0,a.kt)("p",null,"Reboot your ODYSSEY - X86J41x5 and keep pressing ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"F7"))," to enter the boot manager screen. Select the bootable USB (Installer) and press Enter."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Remember to choose the one that has the pfSense iso image on it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/OpenWRT/biosSetup.jpg"})),(0,a.kt)("h3",{id:"step-3---installing-process"},"Step 3 - Installing process"),(0,a.kt)("p",null,"A boot screen like above should appear. Press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," to select the Boot Multi User (pfSense Installer)."),(0,a.kt)("div",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSenseBIOS.png"})),(0,a.kt)("br",null)),(0,a.kt)("p",null,"Enters the Installer, and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," to ",(0,a.kt)("strong",{parentName:"p"},"accept"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-1.png"})),(0,a.kt)("p",null,"An options menu should appear as follow, select ",(0,a.kt)("strong",{parentName:"p"},"Install")," and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-2.png"})),(0,a.kt)("p",null,"Now, choose the correct keymap for your keyboard, or just select ",(0,a.kt)("strong",{parentName:"p"},"Continue with default keymap")," and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-3.png"})),(0,a.kt)("p",null,"Here you can choose Auto to automatic install the pfSense on to the ODYSSEY-X86J41x5, but it's better to use ",(0,a.kt)("strong",{parentName:"p"},"Manual")," to choose exactly where you want to install the pfSense."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In this tutorial, pfSense is installed onto a USB drive for convenience. Hence another good reason to choose ",(0,a.kt)("strong",{parentName:"p"},"Manual")," other than Auto."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-4.png"})),(0,a.kt)("p",null,"Here you can see all the hard drives as well as the partitions here. Choose the hard drive that you want to install pfSense on. Select the hard drive using arrow keys. Here, ",(0,a.kt)("inlineCode",{parentName:"p"},"da1")," is my second USB drive and will be used to install pfSense. Select ",(0,a.kt)("strong",{parentName:"p"},"Auto")," here to automatic partition for pfSense in this hard drive."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-5.png"})),(0,a.kt)("p",null,"Under the correct hard drive, select ",(0,a.kt)("strong",{parentName:"p"},"OK"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-6.png"})),(0,a.kt)("p",null,"Now, the installing process will take place."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-7.png"})),(0,a.kt)("p",null,"After installing, the following window will appear, select ",(0,a.kt)("strong",{parentName:"p"},"No"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-8.png"})),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"Reboot")," and pfSense is successfully installed!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:350,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-Install-9.png"})),(0,a.kt)("h2",{id:"configurations-of-pfsense"},"Configurations of pfSense"),(0,a.kt)("p",null,"Reboot ODYSSEY-X86J41x5, and choose the correct hard drive to boot pfSense OS. Plug in the ethernet cable into one of Ethernet ports from ODYSSEY-X86J41x5. The pfSense should booted properly and shows the following screen."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you see LAN already configured, you can choose ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"1"))," to assign interfaces and choose the right port for ",(0,a.kt)("strong",{parentName:"p"},"WAN")," and get rid of ",(0,a.kt)("strong",{parentName:"p"},"LAN"),". For example, in the below picture, LAN is removed for now."),(0,a.kt)("p",null,"Along side with the ",(0,a.kt)("strong",{parentName:"p"},"WAN"),", you should see an IP assigned to the device, and this IP will be used later. Now you can try to log on the Web GUI using another PC connected in the same network!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-1.png"})),(0,a.kt)("h3",{id:"changing-pfsense-webgui-protocol-optional"},"Changing pfSense WebGUI protocol (optional)"),(0,a.kt)("p",null,"For some reasons, pfSense use https protocol for Web GUI and may cause failure when logging to the Web GUI. If you failed to log in Web GUI, follow this to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," protocol to ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," protocol."),(0,a.kt)("p",null,"Choose ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"8"))," to enter shell in pfSense. Type the following to configure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"viconfig\n")),(0,a.kt)("p",null,"A config file as shown will appear and find ",(0,a.kt)("inlineCode",{parentName:"p"},"<webgui>")," session and change the ",(0,a.kt)("inlineCode",{parentName:"p"},"https")," protocol to ",(0,a.kt)("inlineCode",{parentName:"p"},"http"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," this is using vim editor, use ",(0,a.kt)("strong",{parentName:"p"},"x")," key from keyboard to delete. Then, press ",(0,a.kt)("strong",{parentName:"p"},"Esc")," and type ",(0,a.kt)("inlineCode",{parentName:"p"},":wq!")," to save and quit and changes."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/pfSense-config-2.png"})),(0,a.kt)("p",null,"Now, try to log in pfSense Web GUI using the IP address again."),(0,a.kt)("h2",{id:"pfsense-web-gui-configurations"},"pfSense Web GUI Configurations"),(0,a.kt)("p",null,"Now you can log into the pfSense Web GUI from another PC using the IP address shown before."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," default login is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"admin"))," and default passsword is ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"pfsense"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/WebGUI.png"})),(0,a.kt)("p",null,"Now you can easily manage your pfSense running on ODYSSEY-X86J41x5!"),(0,a.kt)("h3",{id:"installing-packages"},"Installing packages"),(0,a.kt)("p",null,"To install packages, you can simply navigate to ",(0,a.kt)("strong",{parentName:"p"},"System")," -> ",(0,a.kt)("strong",{parentName:"p"},"Package manager")," and search for the packages that you like!"),(0,a.kt)("div",null,(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/pfSense/packages.png"})),(0,a.kt)("br",null)),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For more about pfSense, please also visit the official ",(0,a.kt)("a",{parentName:"em",href:"https://forum.netgate.com/"},"pfSense Forum"),"!")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("p",null,"Other useful applications:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.pfsense.org/getting-started/"},"Getting Started with pfSense"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,c=u["".concat(o,".").concat(m)]||u[m]||k[m]||n;return r?a.createElement(c,l(l({ref:t},d),{},{components:r})):a.createElement(c,l({ref:t},d))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[u]="string"==typeof e?e:i,l[1]=p;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},28286:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>p,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={description:"reServer X86",title:"Upgrading BIOS and Installing Drivers",tags:["reServer"],keywords:["reServer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reServer-Update-BIOS-Install-Drivers",last_update:{date:"01/03/2023",author:"w0x7ce"}},l=void 0,p={unversionedId:"Edge/reServer/reServer_X86/reServer-Update-BIOS-Install-Drivers",id:"Edge/reServer/reServer_X86/reServer-Update-BIOS-Install-Drivers",title:"Upgrading BIOS and Installing Drivers",description:"reServer X86",source:"@site/docs/Edge/reServer/reServer_X86/reServer-Update-BIOS-Install-Drivers.md",sourceDirName:"Edge/reServer/reServer_X86",slug:"/reServer-Update-BIOS-Install-Drivers",permalink:"/zh-CN/reServer-Update-BIOS-Install-Drivers",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reServer/reServer_X86/reServer-Update-BIOS-Install-Drivers.md",tags:[{label:"reServer",permalink:"/zh-CN/tags/re-server"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672675200,formattedLastUpdatedAt:"2023\u5e741\u67082\u65e5",frontMatter:{description:"reServer X86",title:"Upgrading BIOS and Installing Drivers",tags:["reServer"],keywords:["reServer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reServer-Update-BIOS-Install-Drivers",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with reServer",permalink:"/zh-CN/reServer-Getting-Started"},next:{title:"Getting Started with reServer J2032",permalink:"/zh-CN/reServer_J2032_Getting_Started"}},o={},s=[{value:"Upgrading BIOS",id:"upgrading-bios",level:2},{value:"Latest BIOS Firmware",id:"latest-bios-firmware",level:3},{value:"Steps to Upgrade",id:"steps-to-upgrade",level:3},{value:"Installing Drivers",id:"installing-drivers",level:2},{value:"Realtek High Definition Audio Driver",id:"realtek-high-definition-audio-driver",level:3},{value:"Intel\xae Chipset Device Software",id:"intel-chipset-device-software",level:3},{value:"Intel\xae Graphics Driver",id:"intel-graphics-driver",level:3},{value:"Intel\xae HID Event Filter Driver",id:"intel-hid-event-filter-driver",level:3},{value:"Intel\xae Converged Security and Management Engine Driver",id:"intel-converged-security-and-management-engine-driver",level:3},{value:"Intel\xae Serial IO Host Controller Driver",id:"intel-serial-io-host-controller-driver",level:3},{value:"WiFi Driver",id:"wifi-driver",level:3},{value:"Ethernet Driver",id:"ethernet-driver",level:3},{value:"Bluetooth Driver",id:"bluetooth-driver",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"tips",style:{display:"table",tableLayout:"fixed",backgroundColor:"#fbd373",height:"auto",width:"100%"}},(0,i.kt)("div",{className:"left-icon",style:{display:"table-cell",verticalAlign:"middle",backgroundColor:"#FC4A1A",paddingTop:10,boxSizing:"border-box",height:"auto",width:38,textAlign:"center"}},(0,i.kt)("img",{style:{width:26,verticalAlign:"middle"},src:"https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg",alt:"attention icon"})),(0,i.kt)("div",{className:"right-desc",style:{display:"table-cell",verticalAlign:"middle",paddingLeft:15,boxSizing:"border-box",width:"calc(95% - 38px)"}},(0,i.kt)("p",{style:{color:"#000000",fontWeight:"bold",marginTop:10}},"Important Notes"),(0,i.kt)("p",{style:{color:"#000000",fontSize:14}}," It ",(0,i.kt)("b",null,"wipes the old BIOS settings"),", so you would need to ",(0,i.kt)("b",null,"re-activate")," your Windows(if using Windows) again (wipes the activation key, needs Internet to activate again). ",(0,i.kt)("br",null)))),(0,i.kt)("h2",{id:"upgrading-bios"},"Upgrading BIOS"),(0,i.kt)("p",null,"It is recommended to keep your reServer BIOS firmware up-to-date in order to get the best performance with all bug fixes. Please follow the below steps to upgrade the BIOS"),(0,i.kt)("h3",{id:"latest-bios-firmware"},"Latest BIOS Firmware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/reServer/ODYSSEY-TGL-A_v2.0a.zip"},"ODYSSEY-TGL-A_v2.0a 7/7/2022 16:00:00"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SHA256:")," 58971f80fa26b35bc205baeabacf7b9b262a6075f6b3fbb689af3557ac97f8f7")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-main.png"})),(0,i.kt)("h3",{id:"steps-to-upgrade"},"Steps to Upgrade"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Format flash drive as FAT32")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"ODYSSEY-TGL-A_v1.7a.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Copy the 3 files included inside ODYSSEY-TGL-A_v1.1a to the root of the Flash Drive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Shutdown reServer if it is already ON")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5.")," Plug the Flash Drive to reServer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 6.")," Turn ON reServer and then press ",(0,i.kt)("strong",{parentName:"p"},"DELETE")," key to enter the BIOS setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 7.")," Choose ",(0,i.kt)("strong",{parentName:"p"},"Save & Exit -> Boot Override -> UEFI:Built-in EFI shell"),", then ",(0,i.kt)("strong",{parentName:"p"},"ENTER")))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/BIOS-EFI-start.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 8.")," The board will enter shell environment (just wait, do nothing)")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-2.jpg"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 9.")," Type ",(0,i.kt)("strong",{parentName:"li"},"fs0:"))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:260,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-3.jpg"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 10.")," Type ",(0,i.kt)("strong",{parentName:"li"},"dir"),", and make sure the file is right. If not right, try to type ",(0,i.kt)("strong",{parentName:"li"},"fs1:")," or ",(0,i.kt)("strong",{parentName:"li"},"fs2:")," or ",(0,i.kt)("strong",{parentName:"li"},"fs3:")," then ",(0,i.kt)("strong",{parentName:"li"},"dir")," to list the files inside")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/dir-1.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 11.")," Type ",(0,i.kt)("strong",{parentName:"li"},"update.nsh")," to flash the BIOS")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:260,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update.nsh.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 12.")," If the BIOS update was successful, you will see the following message")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:450,src:"https://files.seeedstudio.com/wiki/reServer/update-bios-pics/update-bios-6.jpg"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 13.")," Press the power button to turn OFF the board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 14.")," Unplug the DC power and CMOS battery from the board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 15.")," Wait a few minutes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 16.")," Plug the DC power and CMOS battery back to the board")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 17.")," Finally turn ON the board by pressing the power button again")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 18.")," Please wait patiently and ",(0,i.kt)("strong",{parentName:"p"},"DO NOT")," unplug power (or the hardware) to corrupt the updating process. The process will take 6 ~ 8 minutes, feel free for a coffee break!"))),(0,i.kt)("div",{className:"tips",style:{display:"table",tableLayout:"fixed",backgroundColor:"#F5A9A9",height:"auto",width:"100%"}},(0,i.kt)("div",{className:"left-icon",style:{display:"table-cell",verticalAlign:"middle",backgroundColor:"#DF0101",paddingTop:10,boxSizing:"border-box",height:"auto",width:38,textAlign:"center"}},(0,i.kt)("img",{style:{width:26,verticalAlign:"middle"},src:"https://s3-us-west-2.amazonaws.com/static.seeed.cc/seeed/icon/Danger.svg",alt:"attention icon"})),(0,i.kt)("div",{className:"right-desc",style:{display:"table-cell",verticalAlign:"middle",paddingLeft:15,boxSizing:"border-box",width:"calc(95% - 38px)"}},(0,i.kt)("p",{style:{color:"#000000",fontWeight:"bold",marginTop:10}},"Attention"),(0,i.kt)("p",{style:{color:"#000000",fontSize:14}},"The first boot up from the BIOS upgrade is ",(0,i.kt)("b",null,"relatively long"),", please be patient to wait, and the installed OS will launch eventually. It will take ",(0,i.kt)("b",null,"around 6 ~ 8 minutes"),"."))),(0,i.kt)("h2",{id:"installing-drivers"},"Installing Drivers"),(0,i.kt)("p",null,"If you are using Windows on the reServer, it is recommended to install the relevant drivers for better functionality of the system."),(0,i.kt)("p",null,"The drivers include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Realtek High Definition Audio Driver"),(0,i.kt)("li",{parentName:"ul"},"Intel\xae Chipset Device Software"),(0,i.kt)("li",{parentName:"ul"},"Intel\xae Graphics Driver"),(0,i.kt)("li",{parentName:"ul"},"Intel\xae HID Event Filter driver"),(0,i.kt)("li",{parentName:"ul"},"Intel\xae Converged Security and Management Engine Driver"),(0,i.kt)("li",{parentName:"ul"},"Intel\xae Serial IO Host Controller Driver"),(0,i.kt)("li",{parentName:"ul"},"WiFi Driver"),(0,i.kt)("li",{parentName:"ul"},"Ethernet Driver"),(0,i.kt)("li",{parentName:"ul"},"Bluetooth Driver")),(0,i.kt)("p",null,"Please follow the below steps to install the above drivers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/reServer/reServer-Drivers.zip"},"this file")," and extract the ",(0,i.kt)("strong",{parentName:"p"},"reServer-drivers.zip")," file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Proceed to the steps below"))),(0,i.kt)("h3",{id:"realtek-high-definition-audio-driver"},"Realtek High Definition Audio Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"audio_realtek_6.0.9057.1_w1064.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Open ",(0,i.kt)("strong",{parentName:"p"},"audio_realtek_6.0.9057.1_w1064"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"Setup.exe")))),(0,i.kt)("h3",{id:"intel-chipset-device-software"},"Intel\xae Chipset Device Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"chipset-10.1.18460.8229-public-mup.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Open ",(0,i.kt)("strong",{parentName:"p"},"1_chipset-10.1.18460.8229-public-mup"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"SetupChipset.exe")))),(0,i.kt)("h3",{id:"intel-graphics-driver"},"Intel\xae Graphics Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"Graphics Driver.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"igfx_win_101.1069.exe")))),(0,i.kt)("h3",{id:"intel-hid-event-filter-driver"},"Intel\xae HID Event Filter Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Intel(R)_HIDEventFilterDriver-2.2.1.384_20H1Certified > Installer"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"Setup.exe")))),(0,i.kt)("h3",{id:"intel-converged-security-and-management-engine-driver"},"Intel\xae Converged Security and Management Engine Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"intel_(r)_csme_15.0.0.1318v3_b0_cons.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"4_intel_(r)_csme_15.0.0.1318v3_b0_cons > intel_(r)_csme_15.0.0.1318v3_b0_cons > MEI-Only Installer MSI"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"MEISetup.exe")))),(0,i.kt)("h3",{id:"intel-serial-io-host-controller-driver"},"Intel\xae Serial IO Host Controller Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"SerialIO-Win10-30.100.2129.8.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"SetupSerialIO.exe")))),(0,i.kt)("h3",{id:"wifi-driver"},"WiFi Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"WiFi-22.90.0-Driver64-Win10-Win11.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"WiFi-22.90.0-Driver64-Win10-Win11.exe")))),(0,i.kt)("h3",{id:"ethernet-driver"},"Ethernet Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"Wired_driver_26.6_x64.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"Wired_driver_26.6_x64.exe")))),(0,i.kt)("h3",{id:"bluetooth-driver"},"Bluetooth Driver"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Extract ",(0,i.kt)("strong",{parentName:"p"},"Wireless Bluetooth.zip"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Double click ",(0,i.kt)("strong",{parentName:"p"},"BT-22.90.2-32-64UWD-Win10-Win11.exe")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
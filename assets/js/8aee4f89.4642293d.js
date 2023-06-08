"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82542],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>k});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(o),h=n,k=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return o?r.createElement(k,i(i({ref:t},m),{},{components:o})):r.createElement(k,i({ref:t},m))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=o[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},24241:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=o(87462),n=(o(67294),o(3905));const a={description:"Arduino IDE for RePhone Kit",title:"Arduino IDE for RePhone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino_IDE_for_RePhone_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/rePhone/Program with rePhone/Arduino_IDE_for_RePhone_Kit",id:"Seeed_Elderly/rePhone/Program with rePhone/Arduino_IDE_for_RePhone_Kit",title:"Arduino IDE for RePhone Kit",description:"Arduino IDE for RePhone Kit",source:"@site/docs/Seeed_Elderly/rePhone/Program with rePhone/Arduino_IDE_for_RePhone_Kit.md",sourceDirName:"Seeed_Elderly/rePhone/Program with rePhone",slug:"/Arduino_IDE_for_RePhone_Kit",permalink:"/custom/Arduino_IDE_for_RePhone_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Program with rePhone/Arduino_IDE_for_RePhone_Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Arduino IDE for RePhone Kit",title:"Arduino IDE for RePhone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino_IDE_for_RePhone_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Retro Phone Kit",permalink:"/custom/Retro Phone Kit"},next:{title:"Eclipse IDE for RePhone Kit",permalink:"/custom/Eclipse_IDE_for_RePhone_Kit"}},s={},p=[{value:"Download Arduino IDE for RePhone",id:"download-arduino-ide-for-rephone",level:2},{value:"Install the Driver",id:"install-the-driver",level:2},{value:"Disable Driver Signature Enforcement under Windows 8 / 8.1",id:"disable-driver-signature-enforcement-under-windows-8--81",level:3},{value:"Normal Driver Installation",id:"normal-driver-installation",level:3},{value:"Install the Driver Manually",id:"install-the-driver-manually",level:3},{value:"Install the Driver with LinkIt Assist 2502 SDK 2.0.46",id:"install-the-driver-with-linkit-assist-2502-sdk-2046",level:3},{value:"Update/Flash the Firmware",id:"updateflash-the-firmware",level:2},{value:"Reset to default",id:"reset-to-default",level:2},{value:"A demo: Hello World",id:"a-demo-hello-world",level:2},{value:"More Example Code",id:"more-example-code",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"More",id:"more",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG",alt:null})),(0,n.kt)("p",null,"RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environments and development languages, you can build applications either with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript."),(0,n.kt)("p",null,"This wiki is a User Guide to help you start your RePhone project with Arduino IDE."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Order"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/"},"RePhone core 2G-Atmel32u4 v1.0")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html"},"Buy Now"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Rephone_core_2G-AtmelSAMD21/"},"RePhone core 2G-AtmelSAMD21")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html"},"Buy Now"))))),(0,n.kt)("h2",{id:"download-arduino-ide-for-rephone"},"Download Arduino IDE for RePhone"),(0,n.kt)("p",null,"Before you download the Arduino IDE for RePhone, make sure you have an operation system as follows:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Windows XP/Vista/7/8/8.1")),(0,n.kt)("p",null,"We have put the Arduino IDE for RePhone on our GitHub, and you are quite welcome to send us a 'pull request' to help us optimize and improve it."),(0,n.kt)("p",null,"If you ever used the Arduino IDE before, then this should be just a piece of cake. If you are not familiar with Arduino, which is fine as well, just follow the instructions, and you will be getting started with Arduino IDE easily and quickly."),(0,n.kt)("p",null,"Now click on"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Arduino_IDE_for_RePhone"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Download_Arduino_IDE_for_RePhone.png",alt:null}))),(0,n.kt)("p",null,"On the Github page, click the ",(0,n.kt)("strong",{parentName:"p"},"Download ZIP")," to download the file as shown in the image below:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Click_to_download_Arduino_IDE_for_RePhone.png",alt:null})),(0,n.kt)("p",null,"When the download is complete, unzip the file to a proper location."),(0,n.kt)("h2",{id:"install-the-driver"},"Install the Driver"),(0,n.kt)("h3",{id:"disable-driver-signature-enforcement-under-windows-8--81"},"Disable Driver Signature Enforcement under Windows 8 / 8.1"),(0,n.kt)("p",null,"If you are using the Windows8/8.1, you would need to disable ",(0,n.kt)("strong",{parentName:"p"},"Driver Signature Enforcement")," first to be able to install the driver."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"You should save the files you are editing before trying to turn off the 'Driver Signature Enforcement' as your system will be shut down during the operation.")),(0,n.kt)("p",null,"Now follow the instructions below to disable the 'Driver Signature Enforcement.'"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Press \u201cWindows Key\u201d +"R"'),(0,n.kt)("li",{parentName:"ol"},"Enter shutdown.exe /r /o /f /t 00"),(0,n.kt)("li",{parentName:"ol"},'Click the "OK" button.'),(0,n.kt)("li",{parentName:"ol"},'System will restart to a "Choose an option" screen'),(0,n.kt)("li",{parentName:"ol"},'Select "Troubleshoot" from "Choose an option" screen'),(0,n.kt)("li",{parentName:"ol"},'Select "Advanced options" from "Troubleshoot" screen'),(0,n.kt)("li",{parentName:"ol"},'Select "Windows Startup Settings" from "Advanced options" screen'),(0,n.kt)("li",{parentName:"ol"},'Click "Restart" button'),(0,n.kt)("li",{parentName:"ol"},'System will restart to "Advanced Boot Options" screen'),(0,n.kt)("li",{parentName:"ol"},'Select "Disable Driver Signature Enforcement"'),(0,n.kt)("li",{parentName:"ol"},"Once the system starts, you can install the Arduino drivers as same as Windows")),(0,n.kt)("h3",{id:"normal-driver-installation"},"Normal Driver Installation"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"First, power up your RePhone by ",(0,n.kt)("strong",{parentName:"p"},"plugging in the battery")," or ",(0,n.kt)("strong",{parentName:"p"},"power it with external power sources (3.3 ~ 4.2V(no SIM)/3.5 ~ 4.2V(with SIM)) "),"to the battery socket on the Xadow GSM+BLE, ",(0,n.kt)("strong",{parentName:"p"},"press and hold the power key (PWR) for 2 seconds to")," ",(0,n.kt)("strong",{parentName:"p"},"turn it ON")," (LED indicator shows ",(0,n.kt)("strong",{parentName:"p"},"GREEN"),"), then connect your RePhone to PC with a Micro USB cable."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Device Manager")," by clicking the ",(0,n.kt)("strong",{parentName:"p"},"Start")," button, clicking ",(0,n.kt)("strong",{parentName:"p"},"Control Panel"),", clicking ",(0,n.kt)("strong",{parentName:"p"},"System and Security"),", and then, under ",(0,n.kt)("strong",{parentName:"p"},"System"),", clicking ",(0,n.kt)("strong",{parentName:"p"},"Device Manager"),". If you're prompted for an administrator password or confirmation, type the password or provide confirmation.\nIn the ",(0,n.kt)("strong",{parentName:"p"},"Device Manager"),", you will be seeing unknown devices as shown below:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Unknown_Devices.png)\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Right click on one of the unknown devices, choose ",(0,n.kt)("strong",{parentName:"p"},"Update Driver Software"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Update_Driver_Software.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Choose ",(0,n.kt)("strong",{parentName:"p"},"Browse my computer for driver software"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Browse_my_computer_for_driver_software.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Browse")," and the locate the folder which you've unzipped the Arduino IDE for RePhone .. ","\\","Arduino","_","IDE","_","for","_","RePhone","\\","drivers","\\","mtk . Click ",(0,n.kt)("strong",{parentName:"p"},"Next")," to start the driver installation."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_Locate_Driver.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"When the driver software is successfully installed, you will be able to see the following ",(0,n.kt)("strong",{parentName:"p"},"complete")," page, click ",(0,n.kt)("strong",{parentName:"p"},"Close")," and ",(0,n.kt)("strong",{parentName:"p"},"start over from step 1 to 6 to install the driver for another unknown device"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Driver_Installation_complete_page.png",alt:null})))),(0,n.kt)("h3",{id:"install-the-driver-manually"},"Install the Driver Manually"),(0,n.kt)("p",null,"You can also install the driver manually:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'In "',(0,n.kt)("strong",{parentName:"p"},"Browse for driver software on your computer"),'" window, click ',(0,n.kt)("strong",{parentName:"p"},'"Let me pick from a list of device drivers on my computer'),'"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Then click "',(0,n.kt)("strong",{parentName:"p"},"Ports(COM&LPT)"),'" and go "',(0,n.kt)("strong",{parentName:"p"},"next"),'"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Click "',(0,n.kt)("strong",{parentName:"p"},"Have Disk"),'"')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Afterwards,"))),(0,n.kt)("p",null,"-- if you are using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("big",null,"Windows Vista 64bit")),', locate "',(0,n.kt)("strong",{parentName:"p"},"Arduino","_","IDE","_","for","_","RePhone-master","\\","drivers","\\","mtk","\\","Vista","\\","usb2ser","_","Vista64.inf","\\"),'"'),(0,n.kt)("p",null,"-- if you are using ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("big",null,"Windows 7 or higher with 64bit")),', locate "',(0,n.kt)("strong",{parentName:"p"},"Arduino","_","IDE","_","for","_","RePhone-master","\\","drivers","\\","mtk","\\","Win7","\\","usb2ser","_","Win764.inf"),'"'),(0,n.kt)("h3",{id:"install-the-driver-with-linkit-assist-2502-sdk-2046"},"Install the Driver with LinkIt Assist 2502 SDK 2.0.46"),(0,n.kt)("p",null,"LinkIt Assist 2502 SDK 2.0.46 also provides a driver installation program."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png",alt:null}))),(0,n.kt)("p",null,"Then find the driver installer in the path ",(0,n.kt)("strong",{parentName:"p"},'"MediaTek',"_","LinkIt","_","Assist","_","2502","_","SDK","_","2","_","0","_","46","\\","LINKIT","_","ASSIST","_","SDK","\\","Driver","\\",'InstallMTKUSBCOMPortDriver.exe"')),(0,n.kt)("h2",{id:"updateflash-the-firmware"},"Update/Flash the Firmware"),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"Please note that flashing the firmware will delete all the settings and files(images, musics) stored in the RePhone. Take a data backup before you flash/update the firmware."),(0,n.kt)("p",null,"To make use of the Arduino IDE for RePhone, you have to update/flash the firmware as well. The process is as simple as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Disconnect your RePhone with PC"),", ",(0,n.kt)("strong",{parentName:"p"},"press and hold the power key(PWR) for 2 seconds to turn it OFF")," (LED indicator turn ",(0,n.kt)("strong",{parentName:"p"},"RED")," and then goes out)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"FirmwareUpdater.exe")," under the path ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"...Arduino","_","IDE","_","for","_","RePhone","\\","hardware","\\","tools","\\","mtk","\\","FirmwareUpdater.exe")),', be sure your platform on the Firmware Updater is "',(0,n.kt)("strong",{parentName:"p"},"RePhone"),'" as showing below, if not, click "',(0,n.kt)("strong",{parentName:"p"},"Others"),'" and locate to ',(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"...Arduino","_","IDE","_","for","_","RePhone","\\","hardware","\\","tools","\\","mtk","\\","firmware","\\","LinkIt","_","Device","\\","RePhone","\\","W15.19.p2-uart","\\","SEEED02A","_","DEMO","_","BB.cfg")),", then click ",(0,n.kt)("strong",{parentName:"p"},"Download (The Green Button)"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now you will be asked to connect your RePhone to PC via USB cable, make sure your RePhone has been turned ",(0,n.kt)("strong",{parentName:"p"},"OFF")," and meantime a functional battery should be always connected ( Powered Up)."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_pluginrephone.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Wait until the downloading finishes. This might take about 1min, so it may remain stuck at 50% for quite a while, please ",(0,n.kt)("strong",{parentName:"p"},"be patient"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_downloading.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"In the ",(0,n.kt)("strong",{parentName:"p"},"Complete")," page click ",(0,n.kt)("strong",{parentName:"p"},"OK")," to finish the firmware update."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Updatefirmware_complete.png",alt:null})))),(0,n.kt)("h2",{id:"reset-to-default"},"Reset to default"),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"Please note that resetting your Rephone to default will delete all the settings and files(images, musics) in the RePhone. Take a data backup before you reset it to default.**"),(0,n.kt)("p",null,"To reset your RePhone to ",(0,n.kt)("strong",{parentName:"p"},"DEFAULT"),":"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Follow the instructions in "Update/Flash the Firmware" section to flash the firmware')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the RePhone","_","Create","_","Kit","_","VXP file"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/WayenWeng/RePhone_Create_Kit_VXP/"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png",alt:null}))))),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Copy everything under the file named "RePhone Create Kit VXP" into the RePhone 5MB mass storage.')),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Restart your RePhone then its done. As reset would have deleted all the files, you would have to put an mp3 file in the mass storage as well for the use of ringtone."))),(0,n.kt)("h2",{id:"a-demo-hello-world"},"A demo: Hello World"),(0,n.kt)("p",null,"Now you have prepared things required, we are ready to rock on with RePhone."),(0,n.kt)("p",null,"Let us start with a simple program ",(0,n.kt)("strong",{parentName:"p"},"Hello World")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Press and hold the power key (PWR) for 2 seconds to turn it ON (LED indicator shows GREEN)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open the ",(0,n.kt)("strong",{parentName:"p"},"Arduino","_","IDE","_","for","_","RePhone.exe")," in the folder where you unzipped the Arduino IDE for RePhone, the software interface is as follows:"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_interface.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("strong",{parentName:"p"},"Device Manager")," to check for the COM ports. There will be ",(0,n.kt)("strong",{parentName:"p"},"two COM ports"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MTK USB Debug Port is used for uploading code"),(0,n.kt)("li",{parentName:"ul"},"MTK USB Modem Port is used for logs, like printing messages in the serial monitor with ",(0,n.kt)("strong",{parentName:"li"},"Serial.println()"))),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_COM_Ports.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Arduino IDE window, click ",(0,n.kt)("strong",{parentName:"p"},"Tool => Port"),", select ",(0,n.kt)("strong",{parentName:"p"},"MTK USB Debug Port"),", which is ",(0,n.kt)("strong",{parentName:"p"},"COM20")," in this case, the COM number might be different in your PC, just make sure it corresponds to the Debug Port."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Debug_Port.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Arduino IDE window, click ",(0,n.kt)("strong",{parentName:"p"},"Tool => Board"),", select ",(0,n.kt)("strong",{parentName:"p"},"RePhone")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Board.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now copy the following code to your Arduino IDE:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'// hello world for test RePhone\n// loovee@10-18-2015\n\nvoid setup() {\n    Serial.begin(115200);\n}\n\xa0\nvoid loop() {\n    // put your main code here, to run repeatedly:\n    Serial.println("Hello World, Hello RePhone!");\n    delay(100);\n}\n')))),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now press the ",(0,n.kt)("strong",{parentName:"p"},"Upload")," button to upload the code to your RePhone. You will see the ",(0,n.kt)("strong",{parentName:"p"},"Done uploading")," when the code is successfully uploaded."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_upload.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"As RePhone uses different COM ports for uploading software and logs, to read the logs, we need to switch the selected COM Port to ",(0,n.kt)("strong",{parentName:"p"},"MTK USB Modem Port"),". On the Arduino IDE window, click ",(0,n.kt)("strong",{parentName:"p"},"Tool => Port"),", select ",(0,n.kt)("strong",{parentName:"p"},"MTK USB Modem Port"),", which is ",(0,n.kt)("strong",{parentName:"p"},"COM48")," in this case."),(0,n.kt)("p",{parentName:"li"},"Then open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Serial_Monitor.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now we can see the ",(0,n.kt)("strong",{parentName:"p"},"Hello World")," we have printed with ",(0,n.kt)("strong",{parentName:"p"},"Serial.println()")," ."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_IDE_for_RePhone_Helloworld.png",alt:null})))),(0,n.kt)("h2",{id:"more-example-code"},"More Example Code"),(0,n.kt)("p",null,"Playing with some example code would be a good start if you are heading into some even more interesting projects."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Simply setup your ",(0,n.kt)("strong",{parentName:"p"},"sketchbook location")," in the ",(0,n.kt)("strong",{parentName:"p"},"preference")," as ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Arduino","_","IDE","_","for","_","RePhone-master","\\","hardware","\\","arduino","\\","mtk"))," (where you install the Arduino IDE for RePhone)"),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_1.png",alt:null})),(0,n.kt)("p",{parentName:"li"},"then restart the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Arduino","_","IDE","_","for","_","RePhone.exe")),", you will be able to see the example codes.\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Arduino_Sketchlocation_2.png",alt:null}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can also find the Arduino example coded manually for all the RePhone modules in the following path:\n",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Arduino","_","IDE","_","for","_","RePhone-master","\\","hardware","\\","arduino","\\","mtk","\\","libraries"))),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"![](https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/Example_code_Arduino_IDE.png)\n")))),(0,n.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arduino_IDE_for_RePhone_Kit/img/RePhone_Community-2.png",alt:null}))),(0,n.kt)("p",null,"We have been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,n.kt)("p",null,"Now join us in the ",(0,n.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"!"),(0,n.kt)("p",null,"Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,n.kt)("h2",{id:"more"},"More"),(0,n.kt)("p",null,"You have done a great job so far! RePhone comes with a big family of modules with different features and functionalities. Go to check the wiki for modules for more applications!"),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
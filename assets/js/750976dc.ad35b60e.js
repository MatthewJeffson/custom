"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,k=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?i.createElement(k,r(r({ref:t},m),{},{components:n})):i.createElement(k,r({ref:t},m))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[u]="string"==typeof e?e:o,r[1]=a;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const l={description:"Eclipse IDE for RePhone Kit",title:"Eclipse IDE for RePhone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Eclipse_IDE_for_RePhone_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},r=void 0,a={unversionedId:"Seeed_Elderly/rePhone/Program with rePhone/Eclipse_IDE_for_RePhone_Kit",id:"Seeed_Elderly/rePhone/Program with rePhone/Eclipse_IDE_for_RePhone_Kit",title:"Eclipse IDE for RePhone Kit",description:"Eclipse IDE for RePhone Kit",source:"@site/docs/Seeed_Elderly/rePhone/Program with rePhone/Eclipse_IDE_for_RePhone_Kit.md",sourceDirName:"Seeed_Elderly/rePhone/Program with rePhone",slug:"/Eclipse_IDE_for_RePhone_Kit",permalink:"/custom/Eclipse_IDE_for_RePhone_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Program with rePhone/Eclipse_IDE_for_RePhone_Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Eclipse IDE for RePhone Kit",title:"Eclipse IDE for RePhone Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Eclipse_IDE_for_RePhone_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Arduino IDE for RePhone Kit",permalink:"/custom/Arduino_IDE_for_RePhone_Kit"},next:{title:"JavaScript for RePhone",permalink:"/custom/JavaScript_for_RePhone"}},s={},p=[{value:"Download Eclipse IDE for RePhone",id:"download-eclipse-ide-for-rephone",level:2},{value:"Install Eclipse Plug-in: LinkIt Assist 2502 SDK 2.0.46",id:"install-eclipse-plug-in-linkit-assist-2502-sdk-2046",level:2},{value:"Update/Flash the Firmware",id:"updateflash-the-firmware",level:2},{value:"<strong>Build-in Firmware Updater of LinkIt Assist SDK</strong>",id:"build-in-firmware-updater-of-linkit-assist-sdk",level:4},{value:"Create Your First Project: Hello World",id:"create-your-first-project-hello-world",level:2},{value:"Reset to defaults",id:"reset-to-defaults",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"More About LinkIt Assist SDK",id:"more-about-linkit-assist-sdk",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Xadow_GSMPlusBLE_pingguo.JPG",alt:null})),(0,o.kt)("p",null,"RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environment and development languages, you can either built applications with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript."),(0,o.kt)("p",null,"This wiki is a User Guide to help you start your RePhone project with Eclipse IDE."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Order"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/RePhone_core_2G-Atmel32u4/"},"RePhone core 2G-Atmel32u4 v1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/RePhone-core-2G-Atmel32u4-v1-0-p-2779.html"},"Buy Now"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Rephone_core_2G-AtmelSAMD21/"},"RePhone core 2G-AtmelSAMD21")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/RePhone-core-2G-AtmelSAMD21-p-2775.html"},"Buy Now"))))),(0,o.kt)("h2",{id:"download-eclipse-ide-for-rephone"},"Download Eclipse IDE for RePhone"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Before you download the Arduino IDE for RePhone, make sure you have a PC with the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Operation system: Microsoft Windows XP, Vista, 7 or 8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Eclipse IDE: Indigo (3.7) with CDT 8.0.2."))),(0,o.kt)("p",null,"Now please click the following icons to download and install the Eclipse IDE for C/C++ Developers from the official Eclipse website. The IDE installation may require an appropriate JAVA SE Development Kit 8 to be installed on your PC."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.eclipse.org/downloads/packages/eclipse-ide-cc-developers-includes-incubating-components/indigosr2"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide-02.png",alt:null}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/JSE-03.png",alt:null}))),(0,o.kt)("h2",{id:"install-eclipse-plug-in-linkit-assist-2502-sdk-2046"},"Install Eclipse Plug-in: LinkIt Assist 2502 SDK 2.0.46"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"To make use of the RePhone and Eclipse IDE, you would need to ",(0,o.kt)("strong",{parentName:"p"},"install the LinkIt Assist 2502 Eclipse plug-in in the same folder as the Eclipse IDE"),", where the \u2018",(0,o.kt)("em",{parentName:"p"},"eclipse.exe"),"\u2019 is located."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://download.labs.mediatek.com/MediaTek_LinkIt_Assist_2502_SDK_2_0_46.zip"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_assist_sdk_2.0.46-04.png",alt:null}))),(0,o.kt)("p",null,"To install the LinkIt Assist 2502 SDK 2.0.46, you need to do the following:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,o.kt)("strong",{parentName:"p"},"LinkIt Assist 2502 SDK 2.0.46")," zip file."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Extract the content of the LinkIt Assist 2502 SDK 2.0.46 zip file. There are tools in addition to the Eclipse plug-in included in the SDK so considering extracting the content to a permanent location. If you extract the content to a temporary location the installer will give you the option to move it to a permanent location."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Make sure that the Eclipse IDE is not running."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Run the LinkIt Assist 2502 SDK 2.0.46 installer \u2018",(0,o.kt)("strong",{parentName:"p"},"InstallPlugins.exe"),"\u2019 as shown in the following figure:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5.")," In the Welcome Page, Click \u2018",(0,o.kt)("strong",{parentName:"p"},"Next"),"\u2019"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_2.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6.")," Now you will be asked to select the Eclipse IDE location. Click \u2018",(0,o.kt)("strong",{parentName:"p"},"Browse"),"\u2019 and locate the folder in which you installed Eclipse IDE (the designated folder where you installed the \u2018",(0,o.kt)("strong",{parentName:"p"},"Eclipse IDE for C/C++ Developer"),"\u2019) Click \u2018",(0,o.kt)("strong",{parentName:"p"},"OK"),"\u2019 and \u2018",(0,o.kt)("strong",{parentName:"p"},"Next"),"\u2019."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_3.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7.")," In Move SDK to permanent location, check \u2018",(0,o.kt)("strong",{parentName:"p"},"Move LinkIt Assist 2502 2.0 package to new folder"),"\u2019 if you have extracted the zip file in a temporary location. Click \u2018",(0,o.kt)("strong",{parentName:"p"},"Browse"),"\u2019 and locate a permanent location in which to store the SDK. Then Click \u2018",(0,o.kt)("strong",{parentName:"p"},"Next"),"\u2019 to the next step."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_4.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8.")," In Ready to install the SDK. Review the selected locations if they are OK click \u2018",(0,o.kt)("strong",{parentName:"p"},"Install"),"\u2019."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_5.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 9.")," At the last step of installation, ",(0,o.kt)("strong",{parentName:"p"},"check")," \u2018",(0,o.kt)("strong",{parentName:"p"},"Install the MediaTek USB Driver"),"\u2019 if this is your first time to install a LinkIt SDK, then click \u2018",(0,o.kt)("strong",{parentName:"p"},"Finish"),"\u2019 to complete the installation."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_6.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 10.")," Once the plug-in installation is finished, there will be a folder named \u2018",(0,o.kt)("strong",{parentName:"p"},"LINKIT_ASSIST_SDK"),"\u2019 in the location where you installed the Eclipse IDE."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/LinkIt_Assist_2502_SDK_2.0.46_installer_77.png",alt:null})),(0,o.kt)("p",null,'You can also find the plug-ins in your Eclipse window once you open the "',(0,o.kt)("strong",{parentName:"p"},"eclipse.exe"),'", see the ',(0,o.kt)("strong",{parentName:"p"},"Step 8"),' in the following section - "',(0,o.kt)("strong",{parentName:"p"},"Create Your First Project: Hello World"),'"'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Plug-ins.png",alt:null})),(0,o.kt)("h2",{id:"updateflash-the-firmware"},"Update/Flash the Firmware"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NB: Please be noticed that flash the firmware will delete all the settings and files(images, musics) stored in the RePhone, please make sure you have been aware of this before you flash/update the firmware.")),(0,o.kt)("p",null,"I know you\u2019ve been agog about your RePhone and can\u2019t wait to start programming, just hold on a second, before you do that, it is essential to make sure the firmware of the core module - Xadow GSM+BLE corresponds to the LinkIt Assist SDK you just installed."),(0,o.kt)("p",null,"Here I\u2019introduce two ways to update/flash the firmware of your RePhone."),(0,o.kt)("h4",{id:"build-in-firmware-updater-of-linkit-assist-sdk"},(0,o.kt)("strong",{parentName:"h4"},"Build-in Firmware Updater of LinkIt Assist SDK")),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Firstly, make sure your Xadow GSM+BLE is disconnected from your PC, then download the ",(0,o.kt)("strong",{parentName:"p"},"latest RePhone SDK")," on our Github, unzip it."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/WayenWeng/RePhone_SDK_Bin_Update//"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Download_RePhone_SDK.png",alt:null}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Launch the ",(0,o.kt)("strong",{parentName:"p"},"\u2018FirmwareUpdater.exe\u2019")," in the SDK folder you just installed, it can be found in the path ",(0,o.kt)("em",{parentName:"p"},"\u2019eclipse\\LINKIT_ASSIST_SDK\\tools\\FirmwareUpdater\\FirmwareUpdater.exe\u2019")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Linkit_firmwareupdater_000.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," In the LinkIt Firmware Updater window, select ",(0,o.kt)("strong",{parentName:"p"},"\u2018Others\u2019")," as the platform in the pull-down list. Then Locate ",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"...\\SEEED02A_DEMO_PCB01_gprs_MT2502_S00.MAUI_11CW1418SP5_W15_29.bin\\SEEED02A_DEMO_BB.cfg"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Click the ",(0,o.kt)("strong",{parentName:"p"},"green update button"),", and follow the 2 step instructions on the screen, ",(0,o.kt)("strong",{parentName:"p"},"make sure the Xadow GSM+BLE is powered (connected to the battery)")," when connect it to PC."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_2.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5.")," Wait until the download finish."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_3.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6.")," When the firmware update complete this will be confirmed in the Download Complete page, click \u2018",(0,o.kt)("strong",{parentName:"p"},"OK"),"\u2019 and exit the updater."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_Firmware_Update_4.png",alt:null})),(0,o.kt)("h2",{id:"create-your-first-project-hello-world"},"Create Your First Project: Hello World"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Almost there! Now launch ",(0,o.kt)("strong",{parentName:"p"},"eclipse.exe"),". If this is your first time using the Eclipse IDE, you will be asked to select a ",(0,o.kt)("strong",{parentName:"p"},"Workspace")," for your eclipse projects. In Workspace Launcher, click ",(0,o.kt)("strong",{parentName:"p"},"Browse")," to find a proper location as your Workspace. I recommend you to set your workspace in the same location you installed the Eclipse IDE."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," To create a new RePhone application - in the Eclipse ",(0,o.kt)("strong",{parentName:"p"},"File")," menu, point to ",(0,o.kt)("strong",{parentName:"p"},"new "),"and click ",(0,o.kt)("strong",{parentName:"p"},"Other"),". Or you can simply use the ",(0,o.kt)("strong",{parentName:"p"},"CTRL+N")," shortcut key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_2.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," In the New window, expand the ",(0,o.kt)("strong",{parentName:"p"},"LinkIt Assist 2502 SDK 2.0")," folder and select ",(0,o.kt)("strong",{parentName:"p"},"Application(*.vxp) ")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_3.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Now you are lead to the",(0,o.kt)("strong",{parentName:"p"},"LinkIt Assist 2502 SDK 2.0 Wizard")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Enter the name for your new project, in this case we name it as "',(0,o.kt)("strong",{parentName:"p"},"hello_world"),'"')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"In the pull-down menu of ",(0,o.kt)("strong",{parentName:"p"},"Hardware Platform")," , choose ",(0,o.kt)("strong",{parentName:"p"},"LinkIt Assist 2502"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check ",(0,o.kt)("strong",{parentName:"p"},"Empty Application"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Finish")," to complete the setup"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_4.png",alt:null})),(0,o.kt)("p",null,'"\n',(0,o.kt)("strong",{parentName:"p"},"Step 5."),' Congrats! XD  You just created your first project! Now open the project from the C/C++ Projects pane and double click "',(0,o.kt)("strong",{parentName:"p"},"hello_world.c"),'" file, as shown below'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_5.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6.")," Before uploading the application,  you need to"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"power up your RePhone by ",(0,o.kt)("strong",{parentName:"p"},"plug in the battery")," to the battery socket on the Xadow GSM+BLE",(0,o.kt)("strong",{parentName:"p"},", press and hold the power key (PWR) for 2 second to")," ",(0,o.kt)("strong",{parentName:"p"},"turn it ON")," (then the LED indicator shows ",(0,o.kt)("strong",{parentName:"p"},"GREEN"),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"then connect your RePhone to PC with a Micro USB cable."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Connect_Xadow_GSMPlusBLE_to_PC.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 7.")," Open ",(0,o.kt)("strong",{parentName:"p"},"Device Manager")," to check for the COM ports. There will be two ",(0,o.kt)("strong",{parentName:"p"},"COM ports")," (the COM number might be different in your PC):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MTK USB Debug Port(COM4)")," is used for logs, like printing messages in the serial monitor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"MTK USB Modem Port(COM5)")," is used for uploading code"))),(0,o.kt)("p",null,"Open ",(0,o.kt)("strong",{parentName:"p"},"Device Manager")," by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Start")," button, clicking ",(0,o.kt)("strong",{parentName:"p"},"Control Panel"),", clicking ",(0,o.kt)("strong",{parentName:"p"},"System and Security"),", and then, under ",(0,o.kt)("strong",{parentName:"p"},"System"),", clicking ",(0,o.kt)("strong",{parentName:"p"},"Device Manager"),". If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Check_ports.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 8."),' Almost there! Put the following code into the "',(0,o.kt)("strong",{parentName:"p"},"hello_world.c"),'":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#include "vmsystem.h"\n#include "vmtype.h"\n#include "vmlog.h"\n#include "vmtimer.h"\n#include "ResID.h"\n#include "hello_world.h"\n\nVM_TIMER_ID_PRECISE sys_timer_id = 0;\n\nvoid sys_timer_callback(VM_TIMER_ID_PRECISE sys_timer_id, void* user_data)\n{\n    vm_log_info("Hello World!");\n}\n\nvoid handle_sysevt(VMINT message, VMINT param)\n{\n    switch (message)\n    {\n        case VM_EVENT_CREATE:\n\n        sys_timer_id = vm_timer_create_non_precise(1000, sys_timer_callback, NULL);\n        break;\n        case VM_EVENT_PAINT:\n        break;\n        case VM_EVENT_QUIT:\n        break;\n    }\n}\n\nvoid vm_main(void)\n{\n    vm_pmng_register_system_event_callback(handle_sysevt);\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Build Application")," to upload the application, as instructed in the image below:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_6.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once the application is successfully uploaded it will be reported in the ",(0,o.kt)("strong",{parentName:"li"},"Console")," at bottom, if it's not showing, reopen it in the ",(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"Window/Show View/Console")))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_7.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 9.")," Open the ",(0,o.kt)("strong",{parentName:"p"},"Monitor")," in the ",(0,o.kt)("em",{parentName:"p"},"LinkIt Assist Plug-in"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_8.png",alt:null})),(0,o.kt)("p",null,"You will be asked to ",(0,o.kt)("strong",{parentName:"p"},"Set Database Path"),", if not, point to ",(0,o.kt)("strong",{parentName:"p"},"Config")," menu and click ",(0,o.kt)("strong",{parentName:"p"},"Set Database Path")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Click the "',(0,o.kt)("strong",{parentName:"li"},"..."),'" icon as indicated in the image below')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_9.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'Locate to "',(0,o.kt)("em",{parentName:"li"},(0,o.kt)("strong",{parentName:"em"},"eclipse\\LINKIT_ASSIST_SDK\\tools\\FirmwareUpdater\\firmware\\LinkIt_Device\\LinkIt_Assist_2502\\W15.19.p2\\database.db")),' ", click ',(0,o.kt)("strong",{parentName:"li"},"Open"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_10.png",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Also select the ",(0,o.kt)("strong",{parentName:"li"},"COM port")," as ",(0,o.kt)("strong",{parentName:"li"},"MTK USB Debug Port(COM4)"),", and ",(0,o.kt)("strong",{parentName:"li"},"Baud Rate")," has a default value of ",(0,o.kt)("strong",{parentName:"li"},"115200"),".")),(0,o.kt)("p",null,"The COM number of the Debug Port might be different on your PC, just make sure it is the ",(0,o.kt)("strong",{parentName:"p"},"MTK USB Debug Port")," listed in ",(0,o.kt)("strong",{parentName:"p"},"Device Manager"),"."),(0,o.kt)("p",null,"If the window is not showing, point to ",(0,o.kt)("strong",{parentName:"p"},"Config")," menu and click ",(0,o.kt)("strong",{parentName:"p"},"Configure RS232...")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_11.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 10."),' You\'ve done a great job!! Now say "Hello" to the world!'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Eclipse_ide_helloworld_12.png",alt:null})),(0,o.kt)("h2",{id:"reset-to-defaults"},"Reset to defaults"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please be noticed that reset your Rephone to defaults will delete all the settings and files(images, musics) in the RePhone, do aware of this before you reset it to defaults.")),(0,o.kt)("p",null,"To reset your RePhone to ",(0,o.kt)("strong",{parentName:"p"},"DEFAULTS"),":"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Follow the instructions in "Update/Flash the Firmware" section to flash the firmware')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the RePhone_Create_Kit_VXP file"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/WayenWeng/RePhone_Create_Kit_VXP/"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Kit_Create_VXP.png",alt:null}))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Copy everything under the file named "RePhone Create Kit VXP" into the RePhone 5MB mass storage.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart your RePhone then its done. As reset have deleted all the files, you would have to put an mp3 file in the mass storage as well for the use of ringtone."))),(0,o.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/RePhone_Community-2.png",alt:null}))),(0,o.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,o.kt)("p",null,"Now join us in the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},"RePhone Community"),"!"),(0,o.kt)("p",null,"Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,o.kt)("h2",{id:"more-about-linkit-assist-sdk"},"More About LinkIt Assist SDK"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As RePhone is mostly developed with the LinkIt Assist SDK, and Mediatek has made a very detailed developer guide for the developers, to find more info you can refer to :"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_Developers_Guide_v1_1.pdf"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_en-06.png",alt:null}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/res/MediaTek_LinkIt_Assist_2502_cn_v1_1.pdf"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Eclipse_IDE_for_RePhone_Kit/img/Developer_guide_cn-07_1.png",alt:null}))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
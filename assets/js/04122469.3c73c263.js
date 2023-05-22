"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53515],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43455:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={description:"reServer J2032",title:"reServer J2032 Flash NVIDIA JetPack\u2122 OS",tags:["reServer"],keywords:["reServer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reServer_J2032_Flash_Jetpack",last_update:{date:"01/03/2023",author:"w0x7ce"}},i=void 0,s={unversionedId:"Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack",id:"Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack",title:"reServer J2032 Flash NVIDIA JetPack\u2122 OS",description:"reServer J2032",source:"@site/docs/Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack.md",sourceDirName:"Edge/reServer/reServer_Nvidia_Jetson",slug:"/reServer_J2032_Flash_Jetpack",permalink:"/custom/reServer_J2032_Flash_Jetpack",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reServer/reServer_Nvidia_Jetson/reServer_J2032_Flash_Jetpack.md",tags:[{label:"reServer",permalink:"/custom/tags/re-server"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"reServer J2032",title:"reServer J2032 Flash NVIDIA JetPack\u2122 OS",tags:["reServer"],keywords:["reServer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reServer_J2032_Flash_Jetpack",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with reServer J2032",permalink:"/custom/reServer_J2032_Getting_Started"},next:{title:"Codesys for Edge Box RPi 200",permalink:"/custom/Edgebox-rpi-200-codesys"}},l={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Software Preparation",id:"software-preparation",level:3},{value:"Hardware Preparation (Force Recovery Mode)",id:"hardware-preparation-force-recovery-mode",level:3},{value:"Flashing JetPack OS via NVIDIA SDK Manager",id:"flashing-jetpack-os-via-nvidia-sdk-manager",level:2},{value:"Step 1.  Install NVIDIA SDK Manager on the Linux Host PC.",id:"step-1--install-nvidia-sdk-manager-on-the-linux-host-pc",level:3},{value:"Step 2.  Open NVIDIA SDK Manager and login.",id:"step-2--open-nvidia-sdk-manager-and-login",level:3},{value:"Step 3.  Select the target device.",id:"step-3--select-the-target-device",level:3},{value:"Step 4.  Review wanted components.",id:"step-4--review-wanted-components",level:3},{value:"Step 5. Install the system.",id:"step-5-install-the-system",level:3},{value:"(Optional)Step 6. Install the SDK components.",id:"optionalstep-6-install-the-sdk-components",level:3},{value:"Flashing JetPack OS via Command Line",id:"flashing-jetpack-os-via-command-line",level:2},{value:"Step 1. Download the proper NVIDIA Linux Driver Package",id:"step-1-download-the-proper-nvidia-linux-driver-package",level:3},{value:"Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line",id:"step-2--unzip-package-files-and-assemble-the-rootfs-via-command-line",level:3},{value:"Step 3.  Flash the System to reComputer",id:"step-3--flash-the-system-to-recomputer",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In this wiki, we will show you how to flash NVIDIA Jetpack Operating System on to the Jetson Xavier NX module with reServer J2032."),(0,o.kt)("p",null,"Here is the overview of the reServer J2030 carrier board for reference:  "),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",{style:{fontSize:"x-large",fontWeight:"bold"}},"reServer J2030 carrier board overview"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Front"),(0,o.kt)("td",{align:"center"},"Back")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware1.png",alt:!0})),(0,o.kt)("td",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/reComputer/reComputerJ2032hardware2.png",alt:!0})))))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"We can use ",(0,o.kt)("strong",{parentName:"p"},"NVIDIA SDK manager")," to flash the system, or we can easily do this by using the ",(0,o.kt)("strong",{parentName:"p"},"Command Line Script"),". For people who have Linux knowledge base, we highly recommend using ",(0,o.kt)("strong",{parentName:"p"},"Command Line Script")," which provides much more functionality."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#flashing-jetpack-os-via-nvidia-sdk-manager"},"Flashing JetPack OS via NVIDIA SDK manager and Linux terminal")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#flashing-jetpack-os-via-command-line"},"Flashing JetPack OS via Linux terminal"))),(0,o.kt)("p",null,"There are still some preparation that needed:"),(0,o.kt)("h3",{id:"software-preparation"},"Software Preparation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"https://developer.nvidia.com/login",target:"_blank"},(0,o.kt)("span",null,"NVIDIA account"))),(0,o.kt)("li",{parentName:"ul"},"Linux Host Computer with Ubuntu 18.04 OS (or above)")),(0,o.kt)("p",null,"!!!note\nIn this tutorial, we will use Ubuntu 18.04 LTS based system to complete the installation."),(0,o.kt)("h3",{id:"hardware-preparation-force-recovery-mode"},"Hardware Preparation (Force Recovery Mode)"),(0,o.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the reServer J2032 is put in the force recovery mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Before you start, you need to disconnect power of the reServer J2032."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," To enter recovery mode, you need to connect ",(0,o.kt)("strong",{parentName:"p"},"FC REC")," and ",(0,o.kt)("strong",{parentName:"p"},"GND")," pins using jumpers. The pins can be located as shown below: "),(0,o.kt)("div",{align:"center"},(0,o.kt)("p",{style:{fontSize:"x-large",fontWeight:"bold"}},"Force Recovery Jumper Setting Guide"),(0,o.kt)("table",null,(0,o.kt)("tbody",null,(0,o.kt)("tr",null),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/reServerJ2032/force_recover.png"}))),(0,o.kt)("td",{align:"center"},(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reServerJ2032/debugheader_REC.png"})),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reServerJ2032/j2032jumper.png"}))))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Using a Tpye-C cable to connect to the Linux Host PC with the ",(0,o.kt)("inlineCode",{parentName:"p"},"NX USB")," (as shown in the image below) usb type C port on the reServer J2032, plug in the 12V/5A DC cable and then press the power button from the front to turn the the power for reServer J2032."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reServerJ2032/back_type_c.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Now on the ",(0,o.kt)("strong",{parentName:"p"},"Host computer(Ubuntu 18.04)")," open ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal"),", enter command ",(0,o.kt)("inlineCode",{parentName:"p"},"lsusb"),". When the returned content has the ",(0,o.kt)("inlineCode",{parentName:"p"},"ID 0955:7e19 NVidia Corp.")," in it, it means that the reServer J2032 is in the force recovery mode and we can proceed to the next step."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Jetson Xavier NX: ",(0,o.kt)("strong",{parentName:"li"},"0955:7e19 NVidia Corp"))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/A203E/NX_lsusb.png"})),(0,o.kt)("h2",{id:"flashing-jetpack-os-via-nvidia-sdk-manager"},"Flashing JetPack OS via NVIDIA SDK Manager"),(0,o.kt)("p",null,"Next we will go through the tutorial about installing the system via NVIDIA SDK Manager. The an NVIDIA SDK Manager all-in-one tool that bundles developer software and provides an end-to-end development environment setup solution for NVIDIA SDKs. Thus, it is recommanded for the beginners."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/5_3.png"})),(0,o.kt)("h3",{id:"step-1--install-nvidia-sdk-manager-on-the-linux-host-pc"},"Step 1.  Install NVIDIA SDK Manager on the Linux Host PC."),(0,o.kt)("p",null,"We need to open the browser on the Linux Host PC and ",(0,o.kt)("a",{href:"https://developer.nvidia.com/nvidia-sdk-manager",target:"_blank"},(0,o.kt)("span",null,"download the NVIDIA SDK Manager"))," from the NVIDIA official website."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_Jetson_Series_sdk.png"})),(0,o.kt)("h3",{id:"step-2--open-nvidia-sdk-manager-and-login"},"Step 2.  Open NVIDIA SDK Manager and login."),(0,o.kt)("p",null,"On the Linux host PC screen, we can right click the mouse and open a ",(0,o.kt)("inlineCode",{parentName:"p"},"Terminal"),". Then we can type the command below to start the SDK Manager:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"sdkmanager")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/reComputer_flash_system/reComputer_system_installation1.png"})),(0,o.kt)("p",null,"The first time you use NVIDIA SDK Manager, a web page will pop up prompting you to log in with your previously registered NVIDIA account."),(0,o.kt)("h3",{id:"step-3--select-the-target-device"},"Step 3.  Select the target device."),(0,o.kt)("p",null,"After logging in, you will be taken to the first screen where the first step of installing. Since we have already connected the reServer J2032, there will be a window pop up to let you select the hardware device. "),(0,o.kt)("p",null,"The reServer J2032 has equipped with ",(0,o.kt)("strong",{parentName:"p"},"NVIDIA Jetson NX module"),", so we can choose the first one."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/6.jpg"})),(0,o.kt)("p",null,"There are more selections for you to choose in the first screen:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("strong",{parentName:"li"},"Jetson")," in the Product Category panel need to be selected."),(0,o.kt)("li",{parentName:"ul"},"In the Hardware Configuration panel, we recommend that you ",(0,o.kt)("strong",{parentName:"li"},"do not select Host Machine"),". This will take more time to install the NVIDIA components for your current Ubuntu host. You can choose it if you need."),(0,o.kt)("li",{parentName:"ul"},"In the Target Operating System panel, we can select different ",(0,o.kt)("strong",{parentName:"li"},"operating system")," and ",(0,o.kt)("strong",{parentName:"li"},"JetPack version"),'. But be careful the version of JetPack, different modules may support different type of JetPack. We recommand "JetPack 4.6.1" here.'),(0,o.kt)("li",{parentName:"ul"},"In the Additional SDKs, since the storage space of eMMC is only 16GB, it will be out of memory if we install DeepStream here.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/7.png"})),(0,o.kt)("p",null,"Click Continue to proceed to the next step."),(0,o.kt)("h3",{id:"step-4--review-wanted-components"},"Step 4.  Review wanted components."),(0,o.kt)("p",null,"From ",(0,o.kt)("strong",{parentName:"p"},"Details and License"),", you can expand the host components and target components panels to review the components that will be installed on your system."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8.png"})),(0,o.kt)("p",null,"If you only need to install the system, you can uncheck the SDK component."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/8_1.png"})),(0,o.kt)("p",null,"!!!Tip\nWhen choosing which components to install, you may want to keep an eye on the capacity used. The built-in eMMC size is only 16GB, please allocate and use this space wisely according to your actual needs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/9.png" /></div>\n\nAfter actual testing, there is only about 500MB of eMMC space left after installing the full set of SDK components.\n\n<div align="center"><img width={800} src="https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/10_1.jpg" /></div>\n\n\nIf you want to check how to solve the problem of insufficient capacity, please refer to [Troubleshooting](https://wiki.seeedstudio.com/reComputer_Jetson_Series_Initiation/#q1-the-remaining-space-in-the-emmc-in-the-received-recomputer-jetson-is-only-about-2gb-how-can-i-solve-the-problem-of-insufficient-space).\n')),(0,o.kt)("p",null,"If you want SDK Manager to download all the files to a location other than the default path, go to the Download & Install Options located at the bottom of the screen, then select the path you wish to use."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/11.png"})),(0,o.kt)("p",null,"Select Continue to proceed to the next step."),(0,o.kt)("h3",{id:"step-5-install-the-system"},"Step 5. Install the system."),(0,o.kt)("p",null,"Before the installation begins, SDK Manager prompts you to enter your ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo")," password."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/12.png"})),(0,o.kt)("p",null,"After a while, we will be asked to set up the new system for our reServer J2032. Since we manually force into recovery mode, we select ",(0,o.kt)("inlineCode",{parentName:"p"},"Manual setup: set the target to Force Recovery Mode via manual operations")," here. Meanwhile, we choose the default ",(0,o.kt)("strong",{parentName:"p"},"Pre-Config"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/13.png"})),(0,o.kt)("p",null,"After that, we need to enter the name and password of our new Jetson system to our reServer J2032, it is set by yourself."),(0,o.kt)("p",null,"When ready, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Flash")," to continue."),(0,o.kt)("p",null,"The display shows the progress of the download and installation of the software. Please wait patiently for the installation to complete."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/14.png"})),(0,o.kt)("h3",{id:"optionalstep-6-install-the-sdk-components"},"(Optional)Step 6. Install the SDK components."),(0,o.kt)("p",null,"If you checked the installation of the component in the previous ",(0,o.kt)("strong",{parentName:"p"},"step 4"),", you will need to go through this step."),(0,o.kt)("p",null,"After a moment, you will be able to see a new window pop up in the NVIDIA SDK Manager, prompting you that you need to connect to your device via IP address. It means the system has been alreadly installed and the components installing will be proceeded."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/15.png"})),(0,o.kt)("p",null,"In this case, we can ",(0,o.kt)("strong",{parentName:"p"},"pull out the jumper")," and restart the reServer J2032. Then we need to connect the reServer J2032 to a monitor via HDMI/Display Port, enter the password you entered in ",(0,o.kt)("strong",{parentName:"p"},"step 4"),", and log in to the main interface."),(0,o.kt)("p",null,"At this point you need to connect the reServer J2032 to the same LAN as the Linux host PC and determine the ",(0,o.kt)("strong",{parentName:"p"},"IP address")," of the Jetson by using the command ",(0,o.kt)("inlineCode",{parentName:"p"},"ifconfig"),"."),(0,o.kt)("p",null,"Go back to the Linux host PC and enter the IP address you just obtained. NVIDIA SDK Manager will try to connect to the Jetson device and proceed to complete the installation of the next SDK components."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/16.png"})),(0,o.kt)("p",null,"When you see the following window appear, the installation has been done. You can start using Jetson or continue to follow the steps below to complete some basic configuration of your new system."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17.png"})),(0,o.kt)("p",null,"!!!Attention\nBe sure to unplug the jumper and exit force recovery mode before re-powering into the system."),(0,o.kt)("h2",{id:"flashing-jetpack-os-via-command-line"},"Flashing JetPack OS via Command Line"),(0,o.kt)("p",null,"Thanks to the freedom to customize the BSP(NVIDIA Linux Driver Package), flashing JetPack OS via command line can be very easy for the Linux knowledge base users."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/17_3.png"})),(0,o.kt)("h3",{id:"step-1-download-the-proper-nvidia-linux-driver-package"},"Step 1. Download the proper NVIDIA Linux Driver Package"),(0,o.kt)("p",null,"On the ",(0,o.kt)("strong",{parentName:"p"},"Linux host PC"),", we need to open a browser and go the ",(0,o.kt)("a",{href:"https://developer.nvidia.com/embedded/jetson-linux-archive",target:"_blank"},(0,o.kt)("span",null,"Jetson Linux Archive")),". First we should check if the version of Jetson Linux is supported our reServer J2032 Jetson module."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reServerJ2032/select_L4T.png"})),(0,o.kt)("p",null,'Once you find the proper version, click to go to the downloaded page. Find and click the "L4T Driver Package (BSP)" and "Sample Root Filesystem" to download the driver files. The names of the files are like ',(0,o.kt)("inlineCode",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_Rxx.x.x_aarch64.tbz2")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Jetson-210_Linux_Rxx.x.x_aarch64.tbz2"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reServerJ2032/download_file.png"})),(0,o.kt)("p",null,"As the example, we choose the NVIDIA L4T 32.7.1 version since it is included as part of JetPack4.6.1 and supports the Jetson Nano module. The names of the files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2"),(0,o.kt)("li",{parentName:"ul"},"Jetson_Linux_R32.7.1_aarch64.tbz2")),(0,o.kt)("h3",{id:"step-2--unzip-package-files-and-assemble-the-rootfs-via-command-line"},"Step 2.  Unzip Package Files and Assemble the Rootfs via Command Line"),(0,o.kt)("p",null,"On the Linux host PC, we should find a folder and store the package files we download before. Then open a command line window(Terminal) at the folder and use the command line below to unzip the files and assemble the rootfs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ tar xf ${L4T_RELEASE_PACKAGE}\n$ cd Linux_for_Tegra/rootfs/\n$ sudo tar xpf ../../${SAMPLE_FS_PACKAGE}\n$ cd ..\n$ sudo ./apply_binaries.sh\n")),(0,o.kt)("p",null,"!!!Note\n",(0,o.kt)("inlineCode",{parentName:"p"},"${}")," is where you put the names of the files."),(0,o.kt)("p",null,"*As the example of ",(0,o.kt)("strong",{parentName:"p"},"NVIDIA L4T 32.7.1"),", the downloaded files are stored in ",(0,o.kt)("inlineCode",{parentName:"p"},"/Desktop/L4T_Drivers"),", so under the '/Desktop/L4T_Drivers' path we open the command line window(Terminal) and execute the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ tar xf Jetson_Linux_R32.7.1_aarch64.tbz2\n$ cd Linux_for_Tegra/rootfs/\n$ sudo tar xpf ../../Tegra_Linux_Sample-Root-Filesystem_R32.7.1_aarch64.tbz2\n$ cd ..\n$ sudo ./apply_binaries.sh\n")),(0,o.kt)("p",null,"The output should be like:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/18.png"})),(0,o.kt)("h3",{id:"step-3--flash-the-system-to-recomputer"},"Step 3.  Flash the System to reComputer"),(0,o.kt)("p",null,"Since we alreadly force the reComputer J1020 into the recovery mode and the module is Jetson Nano. We can directly flash the system into the reComputer execute following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./flash.sh -r jetson-xavier-nx-devkit-emmc mmcblk0p1\n")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/19.png"})),(0,o.kt)("p",null,"!!!Tip\nFlashing L4T takes about 10 minutes, or more under a slow host computer."),(0,o.kt)("p",null,"At this moment, we can unplug the jumper and then power up the reComputer again to use it."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
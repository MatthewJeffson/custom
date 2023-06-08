"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81454],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),c=o,k=u["".concat(i,".").concat(c)]||u[c]||h[c]||a;return r?n.createElement(k,s(s({ref:t},d),{},{components:r})):n.createElement(k,s({ref:t},d))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},96608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"A607 Carrier Board",title:"A607 Carrier Board",keywords:["Edge","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A607_Flash_System",last_update:{date:"04/17/2023",author:"Lakshantha"}},s="Flash JetPack OS to A607 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)",l={unversionedId:"Top_Brand/NVIDIA/NVIDIA_Jetson_Alternative/A607_Flash_JetPack",id:"Top_Brand/NVIDIA/NVIDIA_Jetson_Alternative/A607_Flash_JetPack",title:"A607 Carrier Board",description:"A607 Carrier Board",source:"@site/docs/Top_Brand/NVIDIA/NVIDIA_Jetson_Alternative/A607_Flash_JetPack.md",sourceDirName:"Top_Brand/NVIDIA/NVIDIA_Jetson_Alternative",slug:"/reComputer_A607_Flash_System",permalink:"/custom/reComputer_A607_Flash_System",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/NVIDIA/NVIDIA_Jetson_Alternative/A607_Flash_JetPack.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1681689600,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{description:"A607 Carrier Board",title:"A607 Carrier Board",keywords:["Edge","reComputer"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/reComputer_A607_Flash_System",last_update:{date:"04/17/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"NVIDIA\xae Jetson AGX Orin 32GB H01 Kit",permalink:"/custom/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack"},next:{title:"A603 Carrier Board",permalink:"/custom/reComputer_A603_Flash_System"}},i={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Enter Force Recovery Mode",id:"enter-force-recovery-mode",level:2},{value:"Download the peripheral drivers",id:"download-the-peripheral-drivers",level:2},{value:"Flash to Jetson",id:"flash-to-jetson",level:2},{value:"Jetson Orin NX",id:"jetson-orin-nx",level:3},{value:"NVMe SSD",id:"nvme-ssd",level:4},{value:"USB Flash drive",id:"usb-flash-drive",level:4},{value:"Jetson Orin Nano",id:"jetson-orin-nano",level:3},{value:"NVMe SSD",id:"nvme-ssd-1",level:4},{value:"USB Flash drive",id:"usb-flash-drive-1",level:4},{value:"Configure WiFi and Bluetooth",id:"configure-wifi-and-bluetooth",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"flash-jetpack-os-to-a607-carrier-board-nvidia-jetson-orin-nxnano-supported"},"Flash JetPack OS to A607 Carrier Board (NVIDIA Jetson Orin NX/Nano supported)"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A607/1.png"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/A607-Carrier-Board-for-Jetson-Orin-NX-Nano-p-5634.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("p",null,"In this wiki, we will show you how to flash ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"Jetpack")," to an NVMe SSD connected to the A607 Carrier Board which supports both NVIDIA Jetson Orin NX module and NVIDIA Jetson Orin Nano module"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ubuntu Host PC (native or VM using VMware Workstation Player)"),(0,o.kt)("li",{parentName:"ul"},"A607 Carrier Board with Jetson Orin NX or Jetson Orin Nano module"),(0,o.kt)("li",{parentName:"ul"},"USB Type-C data transmission cable")),(0,o.kt)("h2",{id:"enter-force-recovery-mode"},"Enter Force Recovery Mode"),(0,o.kt)("p",null,"Before we can move on to the installation steps, we need to make sure that the board is in force recovery mode."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect a USB cable between the Type-C connector on the board and the Linux host PC"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A607/3.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Press the RECOVERY button and while holding down that button, connect power adapter to the DC JACK on the board to power on the board"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/A607/2.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," On the Linux host PC, open a Terminal window and enter the command ",(0,o.kt)("inlineCode",{parentName:"p"},"lsusb"),". If the returned content has one of the following outputs according to the Jetson SoM you use, then the board is in force recovery mode."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"For Orin NX 16GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7323 NVidia Corp")),(0,o.kt)("li",{parentName:"ul"},"For Orin NX 8GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7423 NVidia Corp")),(0,o.kt)("li",{parentName:"ul"},"For Orin Nano 8GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7523 NVidia Corp")),(0,o.kt)("li",{parentName:"ul"},"For Orin Nano 4GB: ",(0,o.kt)("strong",{parentName:"li"},"0955:7623 NVidia Corp"))),(0,o.kt)("p",null,"The below image is for Orin NX 16GB"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"{700}",src:"https://files.seeedstudio.com/wiki/A607/4.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Remove the jumper wire"),(0,o.kt)("h2",{id:"download-the-peripheral-drivers"},"Download the peripheral drivers"),(0,o.kt)("p",null,"First of all, you need to install the peripheral drivers for this board. These are needed for some hardware peripherals to function on the board. Click the below links to download the drivers according to the Jetson module"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Jetson Module"),(0,o.kt)("th",null,"JetPack Version"),(0,o.kt)("th",null,"L4T Version"),(0,o.kt)("th",null,"Download Link"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{rowSpan:2},"Jetson Orin NX 8GB/ 16GB"),(0,o.kt)("td",null,"5.1"),(0,o.kt)("td",null,"35.2.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"5.1.1"),(0,o.kt)("td",null,"35.3.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-NX-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Jetson Orin Nano 4GB"),(0,o.kt)("td",{rowSpan:2},"5.1.1"),(0,o.kt)("td",{rowSpan:2},"35.3.1"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-4GB-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"Jetson Orin Nano 8GB"),(0,o.kt)("td",null,(0,o.kt)("a",{href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/Orin-NX/A607-Orin-Nano-8GB-JP5.1.1.zip/download",target:"_blank",rel:"noopener noreferrer"},"Download"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Currently we provide the above drivers. We will keep updating the drivers in the future with the release of new JetPack versions."),(0,o.kt)("h2",{id:"flash-to-jetson"},"Flash to Jetson"),(0,o.kt)("p",null,"!!!note\nBefore moving onto flashing, it should be noted that Jetson Orin NX module only supports JetPack 5.1 and above, while Jetson Orin Nano module only supports JetPack 5.1.1 and above."),(0,o.kt)("h3",{id:"jetson-orin-nx"},"Jetson Orin NX"),(0,o.kt)("p",null,"Here we will use NVIDIA L4T ",(0,o.kt)("strong",{parentName:"p"},"35.3.1")," to install ",(0,o.kt)("strong",{parentName:"p"},"Jetpack 5.1.1")," on the A607 Carrier Board with Jetson Orin NX module"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A607/5.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64.tbz2")," and ",(0,o.kt)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"A607-Orin-NX-JP5.1.1.zip"),". Here we additionally install the ",(0,o.kt)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \nunzip A607-Orin-NX-JP5.1.1.zip\n")),(0,o.kt)("p",null,"Here it will ask whether to replace the files. Type ",(0,o.kt)("strong",{parentName:"p"},"A")," and press ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A607/7.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,o.kt)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:")," Flash the system to either NVMe SSD or USB Flash drive"),(0,o.kt)("h4",{id:"nvme-ssd"},"NVMe SSD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,o.kt)("h4",{id:"usb-flash-drive"},"USB Flash drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 p3509-a02+p3767-0000 internal\n')),(0,o.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"})),(0,o.kt)("h3",{id:"jetson-orin-nano"},"Jetson Orin Nano"),(0,o.kt)("p",null,"Here we will use NVIDIA L4T ",(0,o.kt)("strong",{parentName:"p"},"35.3.1")," to install ",(0,o.kt)("strong",{parentName:"p"},"Jetpack 5.1.1")," on the A607 Carrier Board with Jetson Orin Nano module. Note that 4GB and 8GB Orin Nano modules use different driver files and the instructions are a little different."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetson-linux-r3531"},"Download")," the NVIDIA drivers on the host PC. The required drivers are shown below:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Jetson-AGX-Orin-32GB-H01-Kit/2.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Move the downloaded peripheral drivers from before into the same folder with NVIDIA drivers. Now you will see three compressed files in the same folder."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/A607/8.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"Jetson_Linux_R35.3.1_aarch64.tbz2")," and ",(0,o.kt)("strong",{parentName:"p"},"Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2")," by navigating to the folder containing these files, apply the changes and install the necessary prerequisites"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"tar xf Jetson_Linux_R35.3.1_aarch64.tbz2\nsudo tar xpf Tegra_Linux_Sample-Root-Filesystem_R35.3.1_aarch64.tbz2 -C Linux_for_Tegra/rootfs/\ncd Linux_for_Tegra/\nsudo ./apply_binaries.sh\nsudo ./tools/l4t_flash_prerequisites.sh\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Extract ",(0,o.kt)("strong",{parentName:"p"},"A607-Orin-Nano-8GB-JP5.1.1.zip")," for 8GB version and ",(0,o.kt)("strong",{parentName:"p"},"A607-Orin-Nano-4GB-JP5.1.1.zip")," for 4GB version. Here we additionally install the ",(0,o.kt)("strong",{parentName:"p"},"unzip")," package which is needed to decompress the .zip file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ..\nsudo apt install unzip \n# for 8GB version\nunzip A607-Orin-Nano-8GB-JP5.1.1.zip\n# for 4GB version\nunzip A607-Orin-Nano-4GB-JP5.1.1.zip\n")),(0,o.kt)("p",null,"Here it will ask whether to replace the files. Type ",(0,o.kt)("strong",{parentName:"p"},"A")," and press ",(0,o.kt)("strong",{parentName:"p"},"ENTER")," to replace the necessary files"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A607/10.jpg"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," Configure your username, password & hostname so that you do not need to enter the Ubuntu installation wizard after the device finishes booting"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u {USERNAME} -p {PASSWORD} -a -n {HOSTNAME} --accept-license\n")),(0,o.kt)("p",null,'For example (username:"nvidia", password:"nvidia", device-name:"nvidia-desktop"):'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo tools/l4t_create_default_user.sh -u nvidia -p nvidia -a -n nvidia-desktop --accept-license\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:")," Flash the system to either NVMe SSD or USB Flash drive"),(0,o.kt)("h4",{id:"nvme-ssd-1"},"NVMe SSD"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device nvme0n1p1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,o.kt)("h4",{id:"usb-flash-drive-1"},"USB Flash drive"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'cd Linux_for_Tegra\nsudo ./tools/kernel_flash/l4t_initrd_flash.sh --external-device sda1 \\\n  -c tools/kernel_flash/flash_l4t_external.xml -p "-c bootloader/t186ref/cfg/flash_t234_qspi.xml" \\\n  --showlogs --network usb0 jetson-orin-nano-devkit internal\n')),(0,o.kt)("p",null,"You will see the following output if the flashing process is successful"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/A603/10.jpg"})),(0,o.kt)("h2",{id:"configure-wifi-and-bluetooth"},"Configure WiFi and Bluetooth"),(0,o.kt)("p",null,"After flashing is successful, the Jetson will boot into the OS. Now you need to additionally configure WiFi and Bluetooth."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Visit ",(0,o.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/nvidia-jetson/files/A607-Carrier-Board/WiFi-BT-Driver"},"this page")," and click on ",(0,o.kt)("strong",{parentName:"p"},"8723du.ko")," to download the WiFi/ Bluetooth driver file needed and copy them to the device"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Create a new directory for the driver"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/\nsudo mkdir rtl8723du\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Copy the previously downloaded ",(0,o.kt)("strong",{parentName:"p"},"8723du.ko")," file to the newly created directory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\nsudo cp 8723du.ko /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Enable the driver"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo modprobe cfg80211\nsudo insmod /lib/modules/5.10.104-tegra/kernel/drivers/net/wireless/realtek/rtl8723du/8723du.ko\nsudo depmod -a\nsudo modprobe 8723du\nsudo echo 8723du >> /etc/modules\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," Reboot the device "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit issues into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
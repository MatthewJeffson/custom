"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28303],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>h});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(o),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return o?n.createElement(h,a(a({ref:t},d),{},{components:o})):n.createElement(h,a({ref:t},d))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},54404:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(87462),i=(o(67294),o(3905));const r={description:"How to Build a Home Soft Router and NAS with ReComputer",title:"How to Build a Home Soft Router and NAS with ReComputer",keywords:["ReComputer_Alpha"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How-to-build-a-home-soft-router-and-NAS-With-ReComputer",last_update:{date:"01/20/2023",author:"jianjing Huang"}},a="How to Build a Home Soft Router and NAS with ReComputer",l={unversionedId:"Seeed_Elderly/reComputer_Alpha/How-to-build-a-home-soft-router-and-NAS-With-ReComputer",id:"Seeed_Elderly/reComputer_Alpha/How-to-build-a-home-soft-router-and-NAS-With-ReComputer",title:"How to Build a Home Soft Router and NAS with ReComputer",description:"How to Build a Home Soft Router and NAS with ReComputer",source:"@site/docs/Seeed_Elderly/reComputer_Alpha/How-to-build-a-home-soft-router-and-NAS-With-ReComputer.md",sourceDirName:"Seeed_Elderly/reComputer_Alpha",slug:"/How-to-build-a-home-soft-router-and-NAS-With-ReComputer",permalink:"/custom/zh-CN/How-to-build-a-home-soft-router-and-NAS-With-ReComputer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/reComputer_Alpha/How-to-build-a-home-soft-router-and-NAS-With-ReComputer.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674172800,formattedLastUpdatedAt:"2023\u5e741\u670820\u65e5",frontMatter:{description:"How to Build a Home Soft Router and NAS with ReComputer",title:"How to Build a Home Soft Router and NAS with ReComputer",keywords:["ReComputer_Alpha"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How-to-build-a-home-soft-router-and-NAS-With-ReComputer",last_update:{date:"01/20/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Rainbowduino",permalink:"/custom/zh-CN/Rainbowduino"},next:{title:"Air602 WiFi Development Board",permalink:"/custom/zh-CN/Air602_WiFi_Development_Board"}},s={},p=[{value:"1. Hardware Preparation",id:"1-hardware-preparation",level:2},{value:"2. Assembly",id:"2-assembly",level:2},{value:"3. Installation and Configuration of Proxmox VE Virtual Environment",id:"3-installation-and-configuration-of-proxmox-ve-virtual-environment",level:2},{value:"4. Arduino Programs",id:"4-arduino-programs",level:2},{value:"4.1 Compilation",id:"41-compilation",level:3},{value:"4.2 Flashing",id:"42-flashing",level:3},{value:"5. Installing Soft Routing System",id:"5-installing-soft-routing-system",level:2},{value:"6. Installing NAS system",id:"6-installing-nas-system",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-build-a-home-soft-router-and-nas-with-recomputer"},"How to Build a Home Soft Router and NAS with ReComputer"),(0,i.kt)("h2",{id:"1-hardware-preparation"},"1. Hardware Preparation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"ReComputer motherboard:")," 8GB RAM + 64GB eMMC in this case.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"SSD:")," To build an NAS, we need high-capacity disk drives besides the original 64GB eMMC. It's recommended to use SSDs which have a much longer life than HDDs and there's no need to consider about RAID. We can choose m.2 SATA SSD, m.2 NVMe SSD, 2.5\" SATA SSD, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"An 8cm 4-pin cooling fan:")," It's not enough to use passive heat sink fins in hot summer. We need a bigger fan because it's quieter and choose 8010 instead of 9015 for a thinner enclosure.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"An enclosure:")," Don't worry, design documents are available for everyone and you can copy one as you like.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'Grove - OLED Display 0.96":')," There's a micro controller for Arduino on ReComputer motherboard. Why not do something interesting with it?")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Some cables,")," such as SATA data cables, SSD cables, fan cables, Grove cables, etc. Some of them may need to be re-wired but it's not difficult.  "),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/10.jpg",alt:null})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/11.jpg",alt:null})),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/12.jpg",alt:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enclosure"),"  "),(0,i.kt)("p",null,"It's recommended to choose acrylic sheets thinner than 3mm. More details are in the attached file ",(0,i.kt)("inlineCode",{parentName:"p"},"ReComputer_DarkBox.dxf"),".  "),(0,i.kt)("p",null,"Support pillars: 25mm x 4 and 27mm x 4.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cables"),"  "),(0,i.kt)("p",null,"Please note the definition of HDD_PWR pin when making cables because cooling fan can be powered by 12V power supply in HDD_PWR pin.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/13.jpg",alt:null})),(0,i.kt)("h2",{id:"2-assembly"},"2. Assembly"),(0,i.kt)("p",null,'Step 1: Installing Grove - OLED Display 0.96" onto the enclosure.  '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/21.jpg",alt:null})),(0,i.kt)("p",null,"Step 2: Installing the cooling fan onto the enclosure.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/22.jpg",alt:null})),(0,i.kt)("p",null,'Step 3: Installing 2.5" SSD onto the enclosure.  '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/23.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/24.jpg",alt:null})),(0,i.kt)("p",null,"Step 4: Wiring.  "),(0,i.kt)("p",null,"As the pinout diagram of the 4-pin cooling fan shows, it has a tach-detect pin ",(0,i.kt)("inlineCode",{parentName:"p"},"TACH")," and a tach-control pin ",(0,i.kt)("inlineCode",{parentName:"p"},"PWM")," connected with 12 pin and 13 pin of micro controller for Arduino (Actually it depends on the definition in the program).  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25fan_pinout.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25.jpg",alt:null})),(0,i.kt)("p",null,'Connect Grove - OLED Display 0.96" with I2C as well as PWR and GND.  '),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/26.jpg",alt:null})),(0,i.kt)("p",null,"Connect serial port of SAMD21 with serial port of Intel CPU.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/25uart.jpg",alt:null})),(0,i.kt)("p",null,"Step 5: Install front and rear lids and tighten the screws.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/27.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/28.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Heat removal"),"  "),(0,i.kt)("p",null,"Cold wind provided by the fan flows through CPU cooling fins and SSD, thus removing heat effectively.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/29.jpg",alt:null})),(0,i.kt)("h2",{id:"3-installation-and-configuration-of-proxmox-ve-virtual-environment"},"3. Installation and Configuration of Proxmox VE Virtual Environment"),(0,i.kt)("p",null,"We need a USB stick no less than 8GB for installation. Here is latest released ",(0,i.kt)("a",{parentName:"p",href:"https://www.proxmox.com/en/downloads"},"Proxmox VE ISO"),".  "),(0,i.kt)("p",null,"Flash it into USB stick with Etcher.  "),(0,i.kt)("p",null,"Plug in keyboard, mouse, display and USB stick. Boot ReComputer and press the ",(0,i.kt)("inlineCode",{parentName:"p"},"F7")," key continuously to enter the boot device selection interface. Select U disk boot.  "),(0,i.kt)("p",null,"Installation of PVE is very simple but NOTE that:",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"PVE CAN NOT be installed into eMMC!"),"  "),(0,i.kt)("p",null,"That's because PVE team believes that eMMC doesn't have a life longer than SSD and it's not allowed to install PVE into eMMC.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/pve-grub-menu.png",alt:null})),(0,i.kt)("p",null,"(Picture was downloaded from PVE website. My PVE is 6.0 ver.)  "),(0,i.kt)("p",null,"Check the ",(0,i.kt)("a",{parentName:"p",href:"https://pve.proxmox.com/wiki/Installation"},"installation document")," if you have problems with it.  "),(0,i.kt)("p",null,"ReComputer has two network ports. Set anyone of the two to management network of PVE and the other to WAN port of soft router system.  "),(0,i.kt)("h2",{id:"4-arduino-programs"},"4. Arduino Programs"),(0,i.kt)("p",null,"SAMD21 (Compatible with Seeeduino Cortex-M0+) on ReComputer board is used to control fan tach dynamically according to CPU temperature. Some information of PVE system is displayed on the OLED screen simultaneously.  "),(0,i.kt)("p",null,"My design ideas:  "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PVE is a Debian Linux Box so that we can obtain CPU temperature by programming flexibly."),(0,i.kt)("li",{parentName:"ul"},"It is possible to flash program via the USB port of SAMD21 with it connected to the USB port of Intel CPU already."),(0,i.kt)("li",{parentName:"ul"},"Another serial port of SAMD21, Serial1, has been connected to the serial port of Intel CPU so that it's possible to communicate via it. ( I believe that hardware serial port is more reliable than USB port. )"),(0,i.kt)("li",{parentName:"ul"},"Write a simple Arduino program to read CPU temperature via Serial1, control fan tach and drive to refresh the OLED display.  ")),(0,i.kt)("p",null,"Really simple, isn't it? Here's the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/KillingJacky/DarkBox"},"Arduino program"),".  "),(0,i.kt)("h3",{id:"41-compilation"},"4.1 Compilation"),(0,i.kt)("p",null,"What we do first is to open the program in Arduino IDE. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Seeeduino Cortex-M0+")," and find the bin file with compilation log.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/401.png",alt:"image-20191112210126228"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/402.png",alt:"image-20191112210342437"})),(0,i.kt)("h3",{id:"42-flashing"},"4.2 Flashing"),(0,i.kt)("p",null,"Use command ",(0,i.kt)("inlineCode",{parentName:"p"},"scp")," copy ",(0,i.kt)("inlineCode",{parentName:"p"},"ReComputer.ino.bin")," generated by Arduino IDE and paste into PVE.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scp ReComputer.ino.bin root@192.168.1.x:~\n")),(0,i.kt)("p",null,"Run SSH."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh root@192.168.1.x\n")),(0,i.kt)("p",null,"Download the flash tool ",(0,i.kt)("inlineCode",{parentName:"p"},"bosaac"),"  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget http://downloads.arduino.cc/tools/bossac-1.7.0-x86_64-linux-gnu.tar.gz\ntar zxvf bossac-1.7.0-x86_64-linux-gnu.tar.gz\ncp bossac-1.7.0/bossac /usr/bin/\nchmod a+x /usr/bin/bossac\n")),(0,i.kt)("p",null,"Make Arduino enter bootloader mode by short-circuiting Reset and Gnd twice.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/resetArduino.png",alt:"image-20191113230804316"})),(0,i.kt)("p",null,"Flash Arduino program with the flash tool.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bossac -i -d --port=/dev/ttyACM0 -U true -e -w -v ReComputer.ino.bin -R\n")),(0,i.kt)("p",null,"You will see this displayed on the screen:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/oled_gui.jpg",alt:null}),"  "),(0,i.kt)("p",null,"CPU temperature and fan tach are displayed on the screen. The fan will stop working if temperature is lower than 45\u2103.  "),(0,i.kt)("p",null,"History of system load and current memory usage are displayed as well.  "),(0,i.kt)("p",null,"BTW, do not forget to install the script in PVE. Check ",(0,i.kt)("inlineCode",{parentName:"p"},"README")," for more details in the Github repository.  "),(0,i.kt)("p",null,"Now we have already completed our work on hardware and built a small PVE server with a smart cooling system and a disk drive of 2TB which is enough for several virtual machines and NAS storage.  "),(0,i.kt)("h2",{id:"5-installing-soft-routing-system"},"5. Installing Soft Routing System"),(0,i.kt)("p",null,"The ReComputer motherboard has two Gigabit Ethernet ports, which makes it easy to build a soft routing system. Soft routing system has stronger fuctions than normal routers, providing you with a more professional home network environment.  "),(0,i.kt)("p",null,"I choosed ",(0,i.kt)("inlineCode",{parentName:"p"},"lede(OpenWrt)")," system common in the community and not difficult to use.  "),(0,i.kt)("p",null,"Here is the network topology diagram:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/500networkArch.png",alt:"image-20191116233322566"})),(0,i.kt)("p",null,"Step 1: Download and install the image from ",(0,i.kt)("a",{parentName:"p",href:"https://drive.google.com/file/d/1-R5mJOu43bKWHv8ViK2V1dtE4zBLDYyU/view?usp=sharing"},"here"),".  "),(0,i.kt)("p",null,"This is from lede third-party modified source code.  "),(0,i.kt)("p",null,"Step 2: Upload the image to PVE.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scp /PATH/TO/openwrt-x86-64-combined-squashfs.qcow2 root@192.168.32.222:~\n")),(0,i.kt)("p",null,"The .qcow2 file was exported when I compiled the image. If you have downloaded the .img file, use this command to transform it.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"qemu-img convert -f raw -O qcow2 lede-xxxxxxx-combined-ext4.img vm-100-disk-1.qcow2\n")),(0,i.kt)("p",null,"Step 3: Create a virtual machine and import the image.  "),(0,i.kt)("p",null,"Create a WAN network port and reboot PVE to enable the added WAN.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503createWanBridge.png",alt:"image-20191117161646454"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/503wanActive.png",alt:"image-20191117164131776"})),(0,i.kt)("p",null,"Create a virtual machine and configure it as below (After the wizard, add the 2nd network card manually and delete the hard disk) .  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/504ledeSummary.png",alt:"image-20191117161819910"})),(0,i.kt)("p",null,"Import lede disk image.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'root@pve-home:~# qemu-img check openwrt-x86-64-combined-squashfs.qcow2\nNo errors were found on the image.\n685/2824 = 24.26% allocated, 0.00% fragmented, 0.00% compressed clusters\nImage end offset: 45219840\nroot@pve-home:~# qemu-img info openwrt-x86-64-combined-squashfs.qcow2\nimage: openwrt-x86-64-combined-squashfs.qcow2\nfile format: qcow2\nvirtual size: 177M (185073664 bytes)\ndisk size: 43M\ncluster_size: 65536\nFormat specific information:\n    compat: 1.1\n    lazy refcounts: false\n    refcount bits: 16\n    corrupt: false\nroot@pve-home:~# qm importdisk 100 openwrt-x86-64-combined-squashfs.qcow2 local-lvm\n  Rounding up size to full physical extent 180.00 MiB\n  Logical volume "vm-100-disk-0" created.\n    (100.00/100%)\n')),(0,i.kt)("p",null,"Note that 100 is the id number of the created virtual machine. It can be modified in your computer.  "),(0,i.kt)("p",null,"Then we can see the disk we imported just now in ",(0,i.kt)("inlineCode",{parentName:"p"},"local-lvm"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/505diskImported.png",alt:"image-20191117163326117"})),(0,i.kt)("p",null,"The disk is shown in the hardware list of the virtual machine simultaneously.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/506diskImported2.png",alt:"image-20191117163523743"})),(0,i.kt)("p",null,"Double click to add it.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/507addDisk.png",alt:"image-20191117163625885"})),(0,i.kt)("p",null,"The disk list should be like this:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/508finalHardwareSummary.png",alt:"image-20191117163718793"})),(0,i.kt)("p",null,"Boot the virtual machine, open Console and check Kernel log. When ",(0,i.kt)("inlineCode",{parentName:"p"},"random: crng init done")," is printed, click Enter. Seeing ",(0,i.kt)("inlineCode",{parentName:"p"},"shell")," means booting successfully.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/509ledeBootup.png",alt:"image-20191117164609593"})),(0,i.kt)("p",null,"The intranet IP of lede is ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.1")," . We need our computer connected to LAN network port of ReComputer to access this IP by setting IP address to static IP 192.168.1.x .  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/510configLaptopNetwork.png",alt:"image-20191117165532300"})),(0,i.kt)("p",null,"Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.1.1")," in the browser to access OpenWrt login interface. User name is ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," and password is ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," by default.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/20191220134207.png",alt:"image-20191117165632253"})),(0,i.kt)("p",null,"How to play with OpenWrt is beyond the scope of this artical. Just study and enjoy!  "),(0,i.kt)("h2",{id:"6-installing-nas-system"},"6. Installing NAS system"),(0,i.kt)("p",null,"NAS has become one of services which are more and more important in home network. It can be easily installed in PVE virtual environment. In this case, the open source NAS system ",(0,i.kt)("inlineCode",{parentName:"p"},"openmediavault")," is selected.  "),(0,i.kt)("p",null,"Step 1: Download and install the image from ",(0,i.kt)("a",{parentName:"p",href:"https://sourceforge.net/projects/openmediavault/files/5.0.5/openmediavault_5.0.5-amd64.iso/download"},"here"),".  "),(0,i.kt)("p",null,"Step 2: Upload the image to PVE.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/602uploadInstaller.png",alt:"image-20191114152513579"})),(0,i.kt)("p",null,"Step 3: Create a virtual machine and configure it as below:  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/603omvConfig.png",alt:"image-20191117110324189"})),(0,i.kt)("p",null,"Step 4: Boot the virtual machine created just now and install openmediavault. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Continue")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"OK")," until installation is completed.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/604installOMV.png",alt:"image-20191117110717036"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/605installOMVDone.png",alt:"image-20191117111323934"})),(0,i.kt)("p",null,"After installation is finished, the window above will be displayed on your screen. Now the ISO image in the virtual machine should be removed.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/606removeCDROM.png",alt:"image-20191117111506366"})),(0,i.kt)("p",null,"Go back to Console and click Enter to reboot your virtual machine.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/607omvFirstBoot.png",alt:"image-20191117111854853"})),(0,i.kt)("p",null,"Copy the IP address shown on the screen and enter it in the browser to access OpenWrt login interface. User name is ",(0,i.kt)("inlineCode",{parentName:"p"},"admin")," and password is ",(0,i.kt)("inlineCode",{parentName:"p"},"openmediavault")," by default.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/608loginOMV.png",alt:"image-20191117112155601"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/609omvWebUIFirstView.png",alt:"image-20191117112400979"})),(0,i.kt)("p",null,"Installation of openmediavault system has been completed already. What we should do next is passing through the SSD to improve read and write efficiency of the OMV system.  "),(0,i.kt)("p",null,"Step 5: Hard disk pass-through.  "),(0,i.kt)("p",null,"IOMMU needs to be enabled first according to PVE document. After accessing PVE using SSH, run:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@pve-home:~# vim /etc/default/grub\n")),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"intel_iommu=on")," following ",(0,i.kt)("inlineCode",{parentName:"p"},"1GRUB_CMDLINE_LINUX_DEFAULT")," ."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'GRUB_CMDLINE_LINUX_DEFAULT="quiet intel_iommu=on"\n')),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"update-grub")," .  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@pve-home:~# update-grub\nGenerating grub configuration file ...\nFound linux image: /boot/vmlinuz-5.0.15-1-pve\nFound initrd image: /boot/initrd.img-5.0.15-1-pve\nFound memtest86+ image: /boot/memtest86+.bin\nFound memtest86+ multiboot image: /boot/memtest86+_multiboot.bin\nAdding boot menu entry for EFI firmware configuration\ndone\n")),(0,i.kt)("p",null,"You have to make sure the following modules are loaded. This can be achieved by adding them to \u2018",(0,i.kt)("em",{parentName:"p"},"/etc/modules"),"\u2019"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"vfio\n vfio_iommu_type1\n vfio_pci\n vfio_virqfd\n")),(0,i.kt)("p",null,"After changing anything modules related, you need to refresh your ",(0,i.kt)("inlineCode",{parentName:"p"},"initramfs"),". On Proxmox VE this can be done by executing:  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@pve-home:~# update-initramfs -u -k all\n")),(0,i.kt)("p",null,"Finally reboot to bring the changes into effect and check that it is indeed enabled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[    1.810500] DMAR: Setting RMRR:\n[    1.810644] DMAR: Setting identity map for device 0000:00:02.0 [0x77800000 - 0x7fffffff]\n[    1.810794] DMAR: Setting identity map for device 0000:00:15.0 [0x75935000 - 0x75954fff]\n[    1.810805] DMAR: Prepare 0-16MiB unity mapping for LPC\n[    1.810891] DMAR: Setting identity map for device 0000:00:1f.0 [0x0 - 0xffffff]\n[    1.810959] DMAR: Intel(R) Virtualization Technology for Directed I/O\n")),(0,i.kt)("p",null,"If you see the outputs above, IOMMU is enabled.  "),(0,i.kt)("p",null,"Check which PCI interface the hard disk we want to pass through is on. The SATA controller connected to the SATA3 interface is on the 00: 12.0 interface.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"root@pve-home:~# lspci -nn\n00:00.0 Host bridge [0600]: Intel Corporation Device [8086:31f0] (rev 03)\n00:02.0 VGA compatible controller [0300]: Intel Corporation Device [8086:3185] (rev 03)\n00:0c.0 Network controller [0280]: Intel Corporation Device [8086:31dc] (rev 03)\n00:0e.0 Audio device [0403]: Intel Corporation Device [8086:3198] (rev 03)\n00:0f.0 Communication controller [0780]: Intel Corporation Celeron/Pentium Silver Processor Trusted Execution Engine Interface [8086:319a] (rev 03)\n00:12.0 SATA controller [0106]: Intel Corporation Device [8086:31e3] (rev 03)\n00:13.0 PCI bridge [0604]: Intel Corporation Device [8086:31d8] (rev f3)\n00:14.0 PCI bridge [0604]: Intel Corporation Device [8086:31d6] (rev f3)\n00:14.1 PCI bridge [0604]: Intel Corporation Device [8086:31d7] (rev f3)\n00:15.0 USB controller [0c03]: Intel Corporation Device [8086:31a8] (rev 03)\n00:17.0 Signal processing controller [1180]: Intel Corporation Device [8086:31b4] (rev 03)\n00:17.1 Signal processing controller [1180]: Intel Corporation Device [8086:31b6] (rev 03)\n00:17.2 Signal processing controller [1180]: Intel Corporation Device [8086:31b8] (rev 03)\n00:18.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31bc] (rev 03)\n00:18.1 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31be] (rev 03)\n00:18.2 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31c0] (rev 03)\n00:18.3 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO UART Host Controller [8086:31ee] (rev 03)\n00:19.0 Signal processing controller [1180]: Intel Corporation Celeron/Pentium Silver Processor Serial IO SPI Host Controller [8086:31c2] (rev 03)\n00:1c.0 SD Host controller [0805]: Intel Corporation Celeron/Pentium Silver Processor SDA Standard Compliant SD Host Controller [8086:31cc] (rev 03)\n00:1e.0 SD Host controller [0805]: Intel Corporation Device [8086:31d0] (rev 03)\n00:1f.0 ISA bridge [0601]: Intel Corporation Device [8086:31e8] (rev 03)\n00:1f.1 SMBus [0c05]: Intel Corporation Celeron/Pentium Silver Processor Gaussian Mixture Model [8086:31d4] (rev 03)\n01:00.0 Non-Volatile memory controller [0108]: Samsung Electronics Co Ltd NVMe SSD Controller SM961/PM961 [144d:a804]\n02:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)\n03:00.0 Ethernet controller [0200]: Intel Corporation I211 Gigabit Network Connection [8086:1539] (rev 03)\n")),(0,i.kt)("p",null,"Go back to Web UI in PVE. Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Hardware -> Add PCI Device")," in OMV virtual machine.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/610pciPassthrough.png",alt:"image-20191117114829217"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/611selectPCI.png",alt:"image-20191117155102090"})),(0,i.kt)("p",null,"After that, reboot the virtual machine and we will find hard disk been identified in OMV.  "),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How-to-build-a-home-soft-router-and-NAS/612seeTheNewDisk.png",alt:"image-20191117155433087"})),(0,i.kt)("p",null,"Check openmediavault docunment for more details and enjoy it!"))}u.isMDXComponent=!0}}]);
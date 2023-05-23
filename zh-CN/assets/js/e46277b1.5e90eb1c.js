"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91960],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,h=d["".concat(s,".").concat(c)]||d[c]||u[c]||n;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={description:"reTerminal and Pi camera modules intergration",title:"reTerminal and Pi camera modules",keywords:["Edge","reTerminal","piCamera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-piCam",last_update:{date:"5/17/2023",author:"Kasun Thushara"}},o="reTerminal and Pi camera modules",l={unversionedId:"Edge/reTerminal/reTerminal-piCam",id:"Edge/reTerminal/reTerminal-piCam",title:"reTerminal and Pi camera modules",description:"reTerminal and Pi camera modules intergration",source:"@site/docs/Edge/reTerminal/reTerminal-piCam.md",sourceDirName:"Edge/reTerminal",slug:"/reTerminal-piCam",permalink:"/custom/zh-CN/reTerminal-piCam",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/reTerminal-piCam.md",tags:[],version:"current",lastUpdatedBy:"Kasun Thushara",lastUpdatedAt:1684281600,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",frontMatter:{description:"reTerminal and Pi camera modules intergration",title:"reTerminal and Pi camera modules",keywords:["Edge","reTerminal","piCamera"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-piCam",last_update:{date:"5/17/2023",author:"Kasun Thushara"}},sidebar:"ProductSidebar",previous:{title:"FAQs for reTerminal Usage",permalink:"/custom/zh-CN/reTerminal-FAQ"},next:{title:"Qt for reTerminal with Python",permalink:"/custom/zh-CN/reTerminal-build-UI-using-Qt-for-Python"}},s={},p=[{value:"Using pre-built raspberry pi Images.",id:"using-pre-built-raspberry-pi-images",level:2},{value:"For fresh raspberry pi OS",id:"for-fresh-raspberry-pi-os",level:2}],m={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reterminal-and-pi-camera-modules"},"reTerminal and Pi camera modules"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/cam_images.jpg",alt:"pir",width:"600",height:"auto"})),(0,i.kt)("p",null,"The Raspberry Pi Camera, commonly referred to as PiCam, is a camera module specifically designed for the Raspberry Pi single-board computers. It offers a compact and convenient solution for capturing images and recording videos directly from your Raspberry Pi device."),(0,i.kt)("p",null,"Here are the specifications for each version of the PiCam:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PiCam v1 (Camera Module v1.3):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sensor: OmniVision OV5647"),(0,i.kt)("li",{parentName:"ul"},"Resolution: 5 megapixels"),(0,i.kt)("li",{parentName:"ul"},"Video Modes: 1080p30, 720p60, 640x480p60/90")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PiCam v2 (Camera Module v2):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sensor: Sony IMX219"),(0,i.kt)("li",{parentName:"ul"},"Resolution: 8 megapixels (3280 x 2464 pixels)"),(0,i.kt)("li",{parentName:"ul"},"Video Modes: 1080p30, 720p60, 640x480p90")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PiCam v3 (Camera Module 3):")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sensor: Sony IMX708"),(0,i.kt)("li",{parentName:"ul"},"Resolution: 12 megapixels (4056 x 3040 pixels)"),(0,i.kt)("li",{parentName:"ul"},"Video Modes: 1080p30, 720p60, 640x480p90")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Camera Module V1"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Camera Module V2"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Camera Module 3"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam1.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam2.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/pi_cam3.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-p-1659.html?queryID=9e37f656a0eb0086c424e93bcfffadf4&objectID=1242&indexName=bazaar_retailer_products"},"BUY ONE NOW!")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-Module-V2.html"},"BUY ONE NOW!")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-3-p-5574.html?queryID=11243e5e9f95c4f4f0716b229dd8dcf0&objectID=5574&indexName=bazaar_retailer_products"},"BUY ONE NOW!"))))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Camera Module 3 Wide NoIR"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Camera Module 3 NoIR"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Camera Module 3 Wide"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamWN.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picamnoir.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/picam3w.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-NoIR-p-5577.html?queryID=f7e448b5e2e91156540a55c164fe9806&objectID=5577&indexName=bazaar_retailer_products"},"BUY ONE NOW!")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-3-NoIR-p-5575.html?queryID=580ed0215d20c7d125b592090e007ba6&objectID=5575&indexName=bazaar_retailer_products"},"BUY ONE NOW!")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-Camera-3-Wide-p-5576.html?queryID=b165ed9d2e2ff82f45003dbb7c921182&objectID=5576&indexName=bazaar_retailer_products"},"BUY ONE NOW!"))))),(0,i.kt)("p",null,"All versions of the PiCam connect to the Raspberry Pi via the MIPI CSI-2 interface, providing a direct and high-speed connection for transmitting image and video data."),(0,i.kt)("p",null,"The PiCam offers a range of features and capabilities that make it suitable for various applications, ",(0,i.kt)("strong",{parentName:"p"},"including photography, videography, computer vision projects, surveillance, and more"),". Its small form factor and easy integration with the Raspberry Pi make it a popular choice among hobbyists, makers, and professionals."),(0,i.kt)("p",null,"Note that the specifications mentioned above are for the standard PiCam modules, and there may be variations or alternative camera modules available from third-party manufacturers."),(0,i.kt)("p",null,"When it comes to installing the PiCam, you have two options. The first option is to use pre-built images provided by Seeed Studio, which can be found on our wiki page. These pre-built images are specifically configured for the PiCam, ensuring compatibility and ease of use. However, please note that these images only work with PiCam v1 (OmniVision OV5647 sensor)."),(0,i.kt)("p",null,"Alternatively, you can choose to install the latest version of the Raspberry Pi OS from the official website. By doing so, you'll have access to the most recent features and improvements. Seeed Studio recommends this approach and provides instructions on our wiki page for installing the necessary drivers and related components to ensure proper functionality of the PiCam on the fresh Raspberry Pi OS installation."),(0,i.kt)("h2",{id:"using-pre-built-raspberry-pi-images"},"Using pre-built raspberry pi Images."),(0,i.kt)("p",null,"To install the PiCam for Seeed Studio reTerminal, you have the option of using pre-built images provided by Seeed Studio. These images are available on our wiki page and are specifically designed for the reTerminal."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"It's important to note that the pre-built images currently support ",(0,i.kt)("strong",{parentName:"p"},"only the PiCam v1, which utilizes the OmniVision OV5647 sensor"),". This means you can capture images or record videos using the ",(0,i.kt)("inlineCode",{parentName:"p"},"raspistill")," command.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1")," Visit the Seeed Studio wiki page dedicated to reTerminal and navigate to the section providing the pre-built images.( you can refer this link to get images and acknowledge installation procedure. if you have already done please skip this step. ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal"},"This Link"),")")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2")," \tPower off the reTerminal and connect the PiCam v1 module to the camera interface on the reTerminal. Ensure it is securely attached."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/reterminal_inside.png",alt:"pir",width:"600",height:"auto"}))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3")," Assemble the reTerminal and boot the reTerminal. Go to reTerminal icon which you can find in the desktop and enable camera and reboot. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4")," Open a terminal or SSH into the reTerminal to access the command line interface. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5")," Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"raspistill")," command to capture images. You can visit this site for more commands. ",(0,i.kt)("a",{parentName:"p",href:"https://projects.raspberrypi.org/en/projects/getting-started-with-picamera/3"},"Link")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"raspistill -o Desktop/image.jpg\n")),(0,i.kt)("h2",{id:"for-fresh-raspberry-pi-os"},"For fresh raspberry pi OS"),(0,i.kt)("p",null,"We recommend Raspbian Bullseye 64-bit fresh image from raspberry pi official web-site for Seeed Studio reTerminal:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1")," Seeed Studio provides detailed instructions on how to install the drivers after flashing a new Raspberry Pi OS or other OS. Refer to the Seeed Studio wiki page for reTerminal and follow the instructions provided in the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},'"Flash new Raspberry Pi OS" ')," section and ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#install-reterminal-drivers-after-flashing-new-raspberry-pi-os-ubuntu-os-or-other-os"},'"How to install reTerminal drivers"')," section If you already have done please skip this step.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2")," Power off the reTerminal and connect the PiCam module to the camera interface on the reTerminal. Ensure it is securely attached.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3")," Open a terminal or SSH into your reTerminal and execute the following command to edit the config.txt file:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano /boot/config.txt \n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4")," Within the config.txt file, you need to make specific changes to enable the PiCam. Follow these steps:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Locate the line camera_auto_detect=1 and comment it out by adding a "#" at the beginning of the line. This step is necessary to disable the auto-detection of the camera module.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Add the following lines to the config.txt file:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"dtoverlay=ov5647,cam0 "),(0,i.kt)("li",{parentName:"ul"},"dtoverlay=camera-mux-2port ")))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are using PiCam v3 NoIR wide instead of PiCam v1, use ",(0,i.kt)("strong",{parentName:"p"},"dtoverlay=imx708,cam0")," instead of ",(0,i.kt)("strong",{parentName:"p"},"dtoverlay=ov5647,cam0"),". The dtoverlay configuration specifies the camera module being used and the camera multiplexer.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/muxcam.PNG",alt:"pir",width:"600",height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5")," : Save the changes made to the config.txt file by pressing Ctrl + X, followed by Y, and then Enter to confirm. Finally, reboot the reTerminal to apply the modifications:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,i.kt)("p",null," After the reboot, the PiCam should be configured and ready to use with your Seeed Studio reTerminal. You can now proceed with capturing images or recording videos using the libcamera."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6")," :Open the terminal and write following code to test everything is work. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo libcamera-hello\n")),(0,i.kt)("p",null,'libcamera-hello is the equivalent of a "hello world" application for the camera. It starts the camera, displays a preview window, and does nothing else.'),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/Picam/imx708.PNG",alt:"pir",width:"600",height:"auto"})),(0,i.kt)("p",null,"you can refer the following documents for more details about ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/camera_software.html"},"libcamera")))}d.isMDXComponent=!0}}]);
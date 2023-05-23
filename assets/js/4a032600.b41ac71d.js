"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47554],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(o),h=r,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||i;return o?n.createElement(m,a(a({ref:t},c),{},{components:o})):n.createElement(m,a({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},75449:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(87462),r=(o(67294),o(3905));const i={description:"No code Edge AI Tool",title:"No code Edge AI Tool",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/No-code-Edge-AI-Tool",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},a="No code Edge AI Tool",s={unversionedId:"Edge/reComputer/Application/No-code-Edge-AI-Tool",id:"Edge/reComputer/Application/No-code-Edge-AI-Tool",title:"No code Edge AI Tool",description:"No code Edge AI Tool",source:"@site/docs/Edge/reComputer/Application/No-code-Edge-AI-Tool.md",sourceDirName:"Edge/reComputer/Application",slug:"/No-code-Edge-AI-Tool",permalink:"/custom/No-code-Edge-AI-Tool",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Application/No-code-Edge-AI-Tool.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"No code Edge AI Tool",title:"No code Edge AI Tool",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/No-code-Edge-AI-Tool",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Hard Hat Detection",permalink:"/custom/HardHat"},next:{title:"DashCamNet with Jetson Xavier NX Multicamera",permalink:"/custom/DashCamNet-with-Jetson-Xavier-NX-Multicamera"}},l={},d=[{value:"Demo Video",id:"demo-video",level:2},{value:"Preliminary Preparation",id:"preliminary-preparation",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:3},{value:"Software Requirements",id:"software-requirements",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Download and deploy",id:"step-1-download-and-deploy",level:3},{value:"Step 2. Place blocks",id:"step-2-place-blocks",level:3},{value:"Step 3. Show results",id:"step-3-show-results",level:3},{value:"In-depth Operation",id:"in-depth-operation",level:2},{value:"Blocks Download",id:"blocks-download",level:3},{value:"Importing others projects",id:"importing-others-projects",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"What should I do if docker does not start successfully and if there is no seed recomputer in the blocks?",id:"what-should-i-do-if-docker-does-not-start-successfully-and-if-there-is-no-seed-recomputer-in-the-blocks",level:3},{value:"What should I do if I can&#39;t observe the results or if there are errors in the debug?",id:"what-should-i-do-if-i-cant-observe-the-results-or-if-there-are-errors-in-the-debug",level:3},{value:"Tech Support",id:"tech-support",level:2}],c={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"no-code-edge-ai-tool"},"No code Edge AI Tool"),(0,r.kt)("p",null,"We are pleased to bring you our new experience on the reComputer built with Jetson Nano for quick and easy object recognition."),(0,r.kt)("p",null,"With just a few simple commands, the environment can be downloaded and deployed, and the process of monitoring, identifying and outputting results from a live screen can't be simpler than three blocks."),(0,r.kt)("h2",{id:"demo-video"},"Demo Video"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Warehouse Security Demo")),(0,r.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/QI_3g5kkh0I",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Farm Guards Demo")),(0,r.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/Jt66IG4E6uM",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("h2",{id:"preliminary-preparation"},"Preliminary Preparation"),(0,r.kt)("p",null,"In this example, we'll go over how to download and install what we need under a fresh NVIDIA Jetson system, then open the Edge AI Tool and perform object detection with a live camera. Below is an overview of the steps."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/node-red/step.png"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download and deploy"),(0,r.kt)("li",{parentName:"ol"},"Place blocks"),(0,r.kt)("li",{parentName:"ol"},"Show results")),(0,r.kt)("h3",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"Before you start, you will need to have the following hardware ready."),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Hardware Image"),(0,r.kt)("th",null,"Hardware Name"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/node-red/reComputer-Jetson-Nano.jpg",width:210})),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-A0-p-5336.html"},"reComputer J1010 with Jetson Nano module"),(0,r.kt)("br",null),"or ",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://www.seeedstudio.com/Jetson-10-1-H0-p-5335.html"},"reComputer J1020 with Jetson Nano module"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/node-red/3.png",width:210})),(0,r.kt)("td",null,"Logitech C270 HD Webcam",(0,r.kt)("br",null),"or",(0,r.kt)("br",null),(0,r.kt)("a",{href:"https://developer.nvidia.com/embedded/jetson-partner-supported-cameras?t1_camera-interface=USB&t1_max-resolution=4K&t1_supported-jetson-products=Nano",target:"_blank",rel:"noopener noreferrer"},"other V4L2 USB Camera supported by Jetson"))))),(0,r.kt)("p",null,"!!!Attention\nThis example will only run on the reComputer built with Jetson Nano. Note that the reComputer built with Jetson Xavier NX is not supported to work at this time, but it will be supported in the future."),(0,r.kt)("h3",{id:"software-requirements"},"Software Requirements"),(0,r.kt)("p",null,"Before you start, make sure your device is flashed with ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack-sdk-461"},"JetPack 4.6.1"),". If you want to reflash the Jetson Nano eMMC with JetPack 4.6.1, please refer ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/sdk-manager/install-with-sdkm-jetson/index.html"},"here"),"."),(0,r.kt)("p",null,"You can check the installed JetPack version by typing the following on the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cat /etc/nv_tegra_release\n")),(0,r.kt)("p",null,"And the output should look like this"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/node-red/check-jp-version.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," R32.7.1 corresponds to JetPack 4.6.1"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Once the hardware and software are ready as described above, let's move on to the Edge AI Tool experience. In this example, please connect your display, mouse or keyboard as required, you can also control your NVIDIA Jetson remotely via SSH or VNC."),(0,r.kt)("h3",{id:"step-1-download-and-deploy"},"Step 1. Download and deploy"),(0,r.kt)("p",null,"Open a command line window in NVIDIA Jetson and enter the following command to download the required files to Jetson."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/Seeed-Studio/node-red-contrib-ml.git\n")),(0,r.kt)("p",null,"Once the download is complete, run the following command to start the required docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd node-red-contrib-ml\nsudo ./docker-ubuntu.sh\n")),(0,r.kt)("p",null,"The whole installation and start-up process will take about 7 to 9 minutes."),(0,r.kt)("h3",{id:"step-2-place-blocks"},"Step 2. Place blocks"),(0,r.kt)("p",null,"Once the installation is complete, use the Google Chrome browser that comes with your NVIDIA Jetson system to enter the following URL to access the operating interface."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"127.0.0.1:1880\n")),(0,r.kt)("p",null,"You can also enter the IP address plus the port number (1880) in the address bar to access the action page."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/6.png"})),(0,r.kt)("p",null,"We can see the distribution of Edge AI Tool operations in the diagram below."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/8.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Block Area:")," This area is home to a number of blocks that can be manipulated by the user.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Programming Area:")," This area is the user's Programming Area. The user can drag and drop blocks from the Block Area to the Programming Area to complete the program.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Setup Area:")," On the far right is the Setup Area. Here we can see the flow of the Programming Area and can complete some necessary settings or set up operations on blocks etc. in this area."))),(0,r.kt)("p",null,"In the Block Area, there is a section called ",(0,r.kt)("strong",{parentName:"p"},"seeed recomputer")," where we will focus on the use of these three blocks."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/node-red/7.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"video input:")," This lock is used to get the video stream from the camera input. This block can be set up to select a webcam or a local V4L2 USB camera etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"detection:")," This block is used to select the model to be recognised. The input video stream will be recognised using the model you have selected. For the time being, only the ",(0,r.kt)("strong",{parentName:"p"},"COCO dataset")," can be used under this version.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"video view:")," This block is used to output the processed video stream on the screen."))),(0,r.kt)("p",null,"Next we can take a look at the composition of the blocks. Take the building block ",(0,r.kt)("strong",{parentName:"p"},"video input")," as an example."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/node-red/12.png"})),(0,r.kt)("p",null,"To the left of this block there is a square blue area. When this area is hidden, it means that the video streaming input is turned off."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/node-red/11.png"})),(0,r.kt)("p",null,"When this area is displayed, it means that the video streaming input is switched on."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/node-red/13.png"})),(0,r.kt)("p",null,"Similarly, the video view block has a square block like this on the right side. Hide turns off the display of the video stream output, the opposite is true."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/node-red/14.png"})),(0,r.kt)("p",null,"If there is a blue dot in the top right of the block, this is a reminder that the block has been edited, but not deployed. By the way, the whole project runs and needs to be programmed with blocks and deployed before the results are shown."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/node-red/15.png"})),(0,r.kt)("p",null,"The grey square to the right of the block is where the blocks are connected. Left mouse click here and drag it to the next block to the left of the connection, then you can connect the two blocks to form a program flow."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/node-red/16.png"})),(0,r.kt)("p",null,"It should be noted that the program flow is executed from ",(0,r.kt)("strong",{parentName:"p"},"left to right")," in this order, and that the left-hand join can only be connected to the right-hand join."),(0,r.kt)("p",null,"If there is no join to the left of the block, it should be used as the start node of the program flow. If the right-hand side of the block has no connections, then it should be used as the end node of the entire program flow."),(0,r.kt)("p",null,"A block with two joints, like ",(0,r.kt)("strong",{parentName:"p"},"object detection"),", means that several different contents can be output to the block. It is then possible to output both video streams and logs."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/node-red/17.png"})),(0,r.kt)("p",null,"The blocks are also very easy and quick to use. You can drag the block you want to use by long pressing the left mouse button and then drag it to the Programming Area of the main screen."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/9.png"})),(0,r.kt)("p",null,"Based on the above description of the blocks, we can design a simple block procedure as follows."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/18.png"})),(0,r.kt)("p",null,"The program shown above is the one that takes the input video stream from the camera and then uses model detection to input the result of recognising the object."),(0,r.kt)("h3",{id:"step-3-show-results"},"Step 3. Show results"),(0,r.kt)("p",null,"Once the blocks have been placed, we still need to make a simple configuration of the blocks before they can be used. If you want to set up a particular block, you can double click on it and the corresponding settings box will pop up on the right hand side."),(0,r.kt)("p",null,"Let's start by setting up the ",(0,r.kt)("strong",{parentName:"p"},"video input")," block."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/19.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Device type:")," Here you can set the type of camera you have, currently two types of camera are supported, webcam and local camera.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Video:")," Select your camera here. If there is no camera available here, please double check that the camera is supported or that it is connected successfully.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"URL:")," If you have selected a webcam, the Video field will become a URL. Here please fill in the input source of the webcam."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/20.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Resolution:")," Select your camera resolution here. Selecting the wrong resolution may result in a runtime error.")),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"object detection")," block, the settings are as follows."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/21.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Model name:")," Here you select the model name for object recognition, currently only the COCO dataset is supported.")),(0,r.kt)("p",null,"!!!Note\nCOCO is a large-scale object detection, segmentation, and captioning dataset. COCO has several features:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'- Object segmentation\n- Recognition in context\n- Superpixel stuff segmentation\n- 330K images (>200K labeled)\n- 1.5 million object instances\n- 80 object categories\n- 91 stuff categories\n- 5 captions per image\n- 250,000 people with keypoints\n\n<div align=center><img width = 700 src="https://files.seeedstudio.com/wiki/node-red/22.png"/></div>\n')),(0,r.kt)("p",null,"Once you have done so, click on the ",(0,r.kt)("strong",{parentName:"p"},"deploy")," button in the top right hand corner of the interface and the program stream will start running."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/node-red/23.png"})),(0,r.kt)("p",null,"If everything is OK, you can see that the objects identified by the video stream are circled by boxes and given confidence values."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/24.png"})),(0,r.kt)("h2",{id:"in-depth-operation"},"In-depth Operation"),(0,r.kt)("p",null,"We experienced the Edge AI Tool program in its simplest form in the previous chapter. In this section we will take you through more extensions to Edge AI Tool."),(0,r.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/QI_3g5kkh0I",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,r.kt)("h3",{id:"blocks-download"},"Blocks Download"),(0,r.kt)("p",null,"In addition to the blocks in the blocks section, we can download as many blocks as we need to complete more complex projects."),(0,r.kt)("p",null,"In the Setup Area on the right, there is a button for more options, we select ",(0,r.kt)("strong",{parentName:"p"},"Manage palette"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/node-red/25.png"})),(0,r.kt)("p",null,"On the pop-up page, you can see the installed blocks and select ",(0,r.kt)("strong",{parentName:"p"},"Install")," to download more blocks. Here, we take the example of the mailbox block."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/27.png"})),(0,r.kt)("p",null,"After installation, the newly installed blocks can be seen at the bottom of the blocks section."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/30.png"})),(0,r.kt)("h3",{id:"importing-others-projects"},"Importing others projects"),(0,r.kt)("p",null,"There are times when perhaps you would like to share your interesting projects for others to experience. Or maybe it is someone else's project that you would like to use yourself, then you can refer to the following ways."),(0,r.kt)("p",null,"In the Setup Area on the right, there is a button for more options, we select ",(0,r.kt)("strong",{parentName:"p"},"Import"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/node-red/33.png"})),(0,r.kt)("p",null,"Next we can paste the code we have shared or obtained in the pop-up window."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/34.png"})),(0,r.kt)("p",null,"In this example, we will share with you a wonderful project that focuses on the ability to detect, in real time, whether someone has entered the environment through a camera and send an email notification if a person is detected."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "7963f97f362cdfc6",\n        "type": "tab",\n        "label": "warning email",\n        "disabled": false,\n        "info": "",\n        "env": []\n    },\n    {\n        "id": "41a8f267df4eb722",\n        "type": "video input",\n        "z": "7963f97f362cdfc6",\n        "name": "",\n        "deviceType": "rtsp",\n        "rtsp": "",\n        "local": "video0",\n        "resolution": "2560",\n        "frequency": "60",\n        "senderr": true,\n        "active": false,\n        "x": 160,\n        "y": 140,\n        "wires": [\n            [\n                "c5fef75b0ab418c6"\n            ]\n        ]\n    },\n    {\n        "id": "c5fef75b0ab418c6",\n        "type": "detection",\n        "z": "7963f97f362cdfc6",\n        "name": "",\n        "modelName": "coco_dataset",\n        "showResult": true,\n        "senderr": true,\n        "x": 380,\n        "y": 200,\n        "wires": [\n            [\n                "40523cc8b61cfcc9"\n            ],\n            [\n                "689c67f6610be9e2"\n            ]\n        ]\n    },\n    {\n        "id": "40523cc8b61cfcc9",\n        "type": "video view",\n        "z": "7963f97f362cdfc6",\n        "name": "",\n        "width": 640,\n        "data": "payload",\n        "dataType": "msg",\n        "thumbnail": false,\n        "active": false,\n        "pass": false,\n        "outputs": 0,\n        "x": 650,\n        "y": 140,\n        "wires": []\n    },\n    {\n        "id": "689c67f6610be9e2",\n        "type": "switch",\n        "z": "7963f97f362cdfc6",\n        "name": "person intrusion detected",\n        "property": "payload.labels",\n        "propertyType": "msg",\n        "rules": [\n            {\n                "t": "eq",\n                "v": "person",\n                "vt": "str"\n            }\n        ],\n        "checkall": "true",\n        "repair": false,\n        "outputs": 1,\n        "x": 410,\n        "y": 540,\n        "wires": [\n            [\n                "40f6ca0fbb322dd5"\n            ]\n        ]\n    },\n    {\n        "id": "40f6ca0fbb322dd5",\n        "type": "e-mail",\n        "z": "7963f97f362cdfc6",\n        "server": "",\n        "port": "465",\n        "secure": true,\n        "tls": true,\n        "name": "",\n        "dname": "warning email",\n        "credentials": {\n            "userid": "",\n            "password": ""\n        },\n        "x": 720,\n        "y": 620,\n        "wires": []\n    },\n    {\n        "id": "80a51065a9ee835e",\n        "type": "ui_spacer",\n        "z": "7963f97f362cdfc6",\n        "name": "spacer",\n        "group": "529bf2dedebe9911",\n        "order": 2,\n        "width": 12,\n        "height": 1\n    },\n    {\n        "id": "529bf2dedebe9911",\n        "type": "ui_group",\n        "name": "Default",\n        "tab": "ad4ccf9922566f44",\n        "order": 1,\n        "disp": true,\n        "width": 20,\n        "collapse": false,\n        "className": ""\n    },\n    {\n        "id": "ad4ccf9922566f44",\n        "type": "ui_tab",\n        "name": "Home",\n        "icon": "dashboard",\n        "disabled": false,\n        "hidden": false\n    }\n]\n')),(0,r.kt)("p",null,"Note that the code is not directly usable, you will need to fill in ",(0,r.kt)("inlineCode",{parentName:"p"},'"rtsp": "",')," with the input source of your webcam. Fill in ",(0,r.kt)("inlineCode",{parentName:"p"},'"server": "",')," with your email server address and ",(0,r.kt)("inlineCode",{parentName:"p"},'"credentials": {\n            "userid": "",\n            "password": ""\n        },')," fill in your username and password."),(0,r.kt)("p",null,"When everything is ready, the block program works and pushes you an email when it detects activity."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/36.png"})),(0,r.kt)("p",null,"In this project, two new blocks are used, ",(0,r.kt)("strong",{parentName:"p"},"switch")," and ",(0,r.kt)("strong",{parentName:"p"},"email"),"."),(0,r.kt)("p",null,"The switch building block is where you feel the program is going based on the judgement information you set. For example, in this program I have named the switch block ",(0,r.kt)("strong",{parentName:"p"},"person intrusion detected")," and filled in the property ",(0,r.kt)("strong",{parentName:"p"},"payload.labels"),". ",(0,r.kt)("strong",{parentName:"p"},"payload.labels")," is the key value of the previous block ",(0,r.kt)("strong",{parentName:"p"},"object detection"),". When the value of the property is equal to ",(0,r.kt)("strong",{parentName:"p"},"person"),", the block connected after switch is executed."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/31.png"})),(0,r.kt)("p",null,"The email block is a little easier to set up, you just need to fill in the email address and server address that you want to receive messages from, depending on the protocol your mailbox supports."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/32.png"})),(0,r.kt)("p",null,"Of course, if you copy the code directly and complete the code changes, you can make no further changes to the blocks. If you are more comfortable using the graphical interface, you can also complete the configuration of these elements in the block settings."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"what-should-i-do-if-docker-does-not-start-successfully-and-if-there-is-no-seed-recomputer-in-the-blocks"},"What should I do if docker does not start successfully and if there is no seed recomputer in the blocks?"),(0,r.kt)("p",null,"We can shut down docker and restart it with the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd node-red-contrib-ml/\nsudo docker-compose --file docker-compose.yaml down\nsudo docker-compose --file docker-compose.yaml up\n")),(0,r.kt)("h3",{id:"what-should-i-do-if-i-cant-observe-the-results-or-if-there-are-errors-in-the-debug"},"What should I do if I can't observe the results or if there are errors in the debug?"),(0,r.kt)("p",null,"Please use the following command to see if the docker installation is correct. You should get the three dockers shown in the diagram. if any of them are missing, go back to the first step in ",(0,r.kt)("strong",{parentName:"p"},"Getting Started")," and reinstall the docker."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker image ls\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/37.png"})),(0,r.kt)("p",null,"If the installation matches the image, then check the running status of the launched docker using the following command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker ps\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/node-red/38.png"})),(0,r.kt)("p",null,"If there is no docker started as in the picture above, try restarting the docker or check if the model and system version of the device match the requirements."),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
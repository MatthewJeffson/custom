"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4951],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>g});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(i),c=r,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||n;return i?o.createElement(g,a(a({ref:t},p),{},{components:i})):o.createElement(g,a({ref:t},p))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,a[1]=l;for(var d=2;d<n;d++)a[d]=i[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}c.displayName="MDXCreateElement"},35856:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var o=i(87462),r=(i(67294),i(3905));const n={description:"Train and Deploy Your Own AI Model with Edge Impulse",title:"Train and Deploy Your Own AI Model with Edge Impulse",keywords:["Sensor Vision_AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/edge-impulse-vision-ai",last_update:{date:"1/31/2023",author:"jianjing Huang"}},a="Fast training of models for Grove Vision AI using Edge Impulse",l={unversionedId:"Sensor/Grove/Grove_Sensors/Vision_AI/edge-impulse-vision-ai",id:"Sensor/Grove/Grove_Sensors/Vision_AI/edge-impulse-vision-ai",title:"Train and Deploy Your Own AI Model with Edge Impulse",description:"Train and Deploy Your Own AI Model with Edge Impulse",source:"@site/docs/Sensor/Grove/Grove_Sensors/Vision_AI/edge-impulse-vision-ai.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Vision_AI",slug:"/edge-impulse-vision-ai",permalink:"/custom/zh-CN/edge-impulse-vision-ai",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Vision_AI/edge-impulse-vision-ai.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Train and Deploy Your Own AI Model with Edge Impulse",title:"Train and Deploy Your Own AI Model with Edge Impulse",keywords:["Sensor Vision_AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/edge-impulse-vision-ai",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Train and Deploy Your Own AI Model with Roboflow, YOLOv5, TensorFlow Lite",permalink:"/custom/zh-CN/Train-Deploy-AI-Model-Grove-Vision-AI"},next:{title:"Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor",permalink:"/custom/zh-CN/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor"}},s={},d=[{value:"Installing dependencies",id:"installing-dependencies",level:2},{value:"Connecting to Edge Impulse",id:"connecting-to-edge-impulse",level:2},{value:"Step 1. Update BL702 chip firmware",id:"step-1-update-bl702-chip-firmware",level:3},{value:"Step 2. Update Edge Impulse firmware",id:"step-2-update-edge-impulse-firmware",level:3},{value:"Step 3. Setting keys",id:"step-3-setting-keys",level:3},{value:"Step 4. Verifying that the device is connected",id:"step-4-verifying-that-the-device-is-connected",level:3},{value:"Collecting data from Grove - Vision AI",id:"collecting-data-from-grove---vision-ai",level:2},{value:"Deploy model to Grove - Vision AI",id:"deploy-model-to-grove---vision-ai",level:2},{value:"Compile Edge Impulse firmware from the source",id:"compile-edge-impulse-firmware-from-the-source",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fast-training-of-models-for-grove-vision-ai-using-edge-impulse"},"Fast training of models for Grove Vision AI using Edge Impulse"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Vision-AI-Module"},"Grove - Vision AI Module")," is a thumb-sized board based on Himax HX6537-A processor which is equipped with a 2-Megapixel OV2640 camera, microphone, 3-axis accelerometer and 3-axis gyroscope. It offers storage with 32 MB SPI flash, comes pre-installed with ML algorithms for face recognition and people detection and supports customized models as well. It is compatible with the XIAO ecosystem and Arduino, all of which makes it perfect for getting started with AI-powered camera projects!"),(0,r.kt)("p",null,"It is fully supported by Edge Impulse which means you will be able to sample raw data from the camera, build models, and deploy trained machine learning models to the module directly from the studio without any programming required. Grove - Vision AI Module is available for purchase directly from ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Vision-AI-Module-p-5457.html"},"Seeed Studio Bazaar"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/1.jpg"})),(0,r.kt)("p",null,"The Edge Impulse firmware for this board is open source and hosted on GitHub: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/edgeimpulse/firmware-seeed-vision-ai-internal/tree/edge-impulse-firmware"},"edgeimpulse/firmware-seeed-vision-ai-internal")),(0,r.kt)("p",null,"Quick links access:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Firmware source code: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai"},"GitHub repository")),(0,r.kt)("li",{parentName:"ul"},"Pre-compiled firmware: ",(0,r.kt)("a",{parentName:"li",href:"https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip"},"seeed-grove-vision-ai.zip"))),(0,r.kt)("h2",{id:"installing-dependencies"},"Installing dependencies"),(0,r.kt)("p",null,"To set this board up in Edge Impulse, you will need to install the following software:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"},"Edge Impulse CLI"),"."),(0,r.kt)("li",{parentName:"ol"},"On Linux:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GNU Screen: install for example via ",(0,r.kt)("inlineCode",{parentName:"li"},"sudo apt install screen"),"."))),(0,r.kt)("li",{parentName:"ol"},"Download the latest ",(0,r.kt)("a",{parentName:"li",href:"https://dev.bouffalolab.com/download"},"Bouffalo Lab Dev Cube"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Problems installing the Edge Impulse CLI?"),"\nSee the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation"},"Installation and troubleshooting guide"),".")),(0,r.kt)("h2",{id:"connecting-to-edge-impulse"},"Connecting to Edge Impulse"),(0,r.kt)("p",null,"With all the software in place it's time to connect the board to Edge Impulse."),(0,r.kt)("h3",{id:"step-1-update-bl702-chip-firmware"},"Step 1. Update BL702 chip firmware"),(0,r.kt)("p",null,"BL702 is the USB-UART chip which enables the communication between the PC and the Himax chip. You need to update this firmware in order for the Edge Impulse firmware to work properly."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"download the latest version of the BootLoader file in the link below. The name of the BootLoader is usually ",(0,r.kt)("inlineCode",{parentName:"li"},"tinyuf2-grove_vision_ai_vx.x.x.bin"),".")),(0,r.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,r.kt)("a",{class:"github_item",href:"https://github.com/Seeed-Studio/Seeed_Arduino_GroveAI/releases"},(0,r.kt)("strong",null,(0,r.kt)("span",null,(0,r.kt)("font",{color:"FFFFFF",size:"4"}," Download the Firware")))," ",(0,r.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,r.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"})))),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Connect the board to the PC via a USB Type-C cable while holding down the ",(0,r.kt)("strong",{parentName:"li"},"Boot")," button on the board.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/2.jpg"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Open previously installed Bouffalo Lab Dev Cube software, select ",(0,r.kt)("strong",{parentName:"li"},"BL702/704/706"),", and then click ",(0,r.kt)("strong",{parentName:"li"},"Finish"),".")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/3.png"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"MCU")," tab. Under ",(0,r.kt)("strong",{parentName:"li"},"Image file"),", click ",(0,r.kt)("strong",{parentName:"li"},"Browse")," and select the firmware you just downloaded.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/4.png"})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Refresh"),", choose the ",(0,r.kt)("strong",{parentName:"li"},"Port")," related to the connected board, set ",(0,r.kt)("strong",{parentName:"li"},"Chip Erase")," to ",(0,r.kt)("strong",{parentName:"li"},"True"),", click ",(0,r.kt)("strong",{parentName:"li"},"Open UART"),", click ",(0,r.kt)("strong",{parentName:"li"},"Creat & Download")," and wait for the process to be completed .")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/5.png"})),(0,r.kt)("p",null,"You will see the output as ",(0,r.kt)("strong",{parentName:"p"},"All Success")," if it went well."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/6.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the flashing throws an error, try to click ",(0,r.kt)("strong",{parentName:"p"},"Create & Download")," multiple times until you see the ",(0,r.kt)("strong",{parentName:"p"},"All Success")," message.")),(0,r.kt)("h3",{id:"step-2-update-edge-impulse-firmware"},"Step 2. Update Edge Impulse firmware"),(0,r.kt)("p",null,"The board does not come with the right Edge Impulse firmware yet. To update the firmware:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://cdn.edgeimpulse.com/firmware/seeed-grove-vision-ai.zip"},"Download the latest Edge Impulse firmware")," and extract it to obtain ",(0,r.kt)("strong",{parentName:"p"},"firmware.uf2")," file.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect the board again to the PC via USB Type-C cable and double-click the ",(0,r.kt)("strong",{parentName:"p"},"Boot")," button on the board to enter ",(0,r.kt)("strong",{parentName:"p"},"mass storage mode"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After this you will see a new storage drive shown on your file explorer as ",(0,r.kt)("strong",{parentName:"p"},"GROVEAI"),". Drag and drop the ",(0,r.kt)("strong",{parentName:"p"},"firmware.uf2")," file to GROVEAI drive."))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/7.jpg"})),(0,r.kt)("p",null,"Once the copying is finished ",(0,r.kt)("strong",{parentName:"p"},"GROVEAI")," drive will disapper. This is how we can check whether the copying is successful or not."),(0,r.kt)("h3",{id:"step-3-setting-keys"},"Step 3. Setting keys"),(0,r.kt)("p",null,"From a command prompt or terminal, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"edge-impulse-daemon\n")),(0,r.kt)("p",null,"This will start a wizard which will ask you to log in, and choose an Edge Impulse project. If you want to switch projects run the command with ",(0,r.kt)("inlineCode",{parentName:"p"},"--clean"),"."),(0,r.kt)("p",null,"Alternatively, recent versions of Google Chrome and Microsoft Edge can collect data directly from your board, without the need for the Edge Impulse CLI. See ",(0,r.kt)("a",{parentName:"p",href:"https://www.edgeimpulse.com/blog/collect-sensor-data-straight-from-your-web-browser"},"this blog post")," for more information."),(0,r.kt)("h3",{id:"step-4-verifying-that-the-device-is-connected"},"Step 4. Verifying that the device is connected"),(0,r.kt)("p",null,"That's all! Your device is now connected to Edge Impulse. To verify this, go to ",(0,r.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/studio/select-project?autoredirect=1"},"your Edge Impulse project"),", and click ",(0,r.kt)("strong",{parentName:"p"},"Devices"),". The device will be listed here."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/8.png"})),(0,r.kt)("h2",{id:"collecting-data-from-grove---vision-ai"},"Collecting data from Grove - Vision AI"),(0,r.kt)("p",null,"With everything set up you can now build and run your first machine learning model with these tutorials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/tutorials/image-classification"},"Adding sight to your sensors"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/tutorials/object-detection"},"Object detection"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/tutorials/detect-objects-using-fomo"},"Counting objects using FOMO"),".")),(0,r.kt)("p",null,"Frames from the onboard camera can be directly captured from the studio:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/9.png"})),(0,r.kt)("p",null,"Finally, once a model is trained, it can be easily deployed to the Grove \u2013 Vision AI Module to start inferencing!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/edge-impulse-visionai/10.png"})),(0,r.kt)("h2",{id:"deploy-model-to-grove---vision-ai"},"Deploy model to Grove - Vision AI"),(0,r.kt)("p",null,"After building the machine learning model and downloading the Edge Impulse firmware from Edge Impulse Studio, deploy the model uf2 to Grove - Vision AI by following steps 1 and 2 under ",(0,r.kt)("a",{parentName:"p",href:"https://docs.edgeimpulse.com/docs/development-platforms/officially-supported-mcu-targets/seeed-grove-vision-ai#2.-update-edge-impulse-firmware"},"Update Edge Impulse firmware section"),"."),(0,r.kt)("h2",{id:"compile-edge-impulse-firmware-from-the-source"},"Compile Edge Impulse firmware from the source"),(0,r.kt)("p",null,"If you want to compile the Edge Impulse firmware from source code, you can visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/edgeimpulse/firmware-seeed-grove-vision-ai"},"this GitHub repo")," and follow the instructions included in the README. The model used for the official firmware can be found in this ",(0,r.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/87291/latest"},"public project"),"."),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
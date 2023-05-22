"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>S});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,S=u["".concat(d,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(S,l(l({ref:t},p),{},{components:n})):a.createElement(S,l({ref:t},p))}));function S(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={description:"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3.",title:"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3 (Sense)",keywords:["esp32s3","xiao","tinyml","edgelab"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_edgelab",last_update:{date:"10/04/2023",author:"LynnL4"}},l="EdgeLab Getting Start with Seeed Studio XIAO ESP32S3",o={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab",title:"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3 (Sense)",description:"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3",slug:"/xiao_esp32s3_edgelab",permalink:"/custom/xiao_esp32s3_edgelab",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3/XIAO_ESP32S3_EdgeLab.md",tags:[],version:"current",lastUpdatedBy:"LynnL4",lastUpdatedAt:1696377600,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{description:"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3.",title:"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3 (Sense)",keywords:["esp32s3","xiao","tinyml","edgelab"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_edgelab",last_update:{date:"10/04/2023",author:"LynnL4"}},sidebar:"ProductSidebar",previous:{title:"Camera Usage in Seeed Studio XIAO ESP32S3 Sense",permalink:"/custom/xiao_esp32s3_camera_usage"},next:{title:"Getting Started with Seeed Studio Round Display for XIAO",permalink:"/custom/get_start_round_display"}},d={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Required",id:"hardware-required",level:2},{value:"Software Required",id:"software-required",level:2},{value:"How to Install",id:"how-to-install",level:2},{value:"Install ESP-IDF",id:"install-esp-idf",level:3},{value:"Install the ESP IDF",id:"install-the-esp-idf",level:3},{value:"get submodules",id:"get-submodules",level:3},{value:"How to Use",id:"how-to-use",level:2},{value:"Build the example",id:"build-the-example",level:3},{value:"Load and run the example",id:"load-and-run-the-example",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"edgelab-getting-start-with-seeed-studio-xiao-esp32s3"},"EdgeLab Getting Start with Seeed Studio XIAO ESP32S3"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://edgelab.readthedocs.io/en/latest/"},"EdgeLab")," is an open-source project focused on embedded AI. We have optimized excellent algorithms from OpenMMLab for real-world scenarios and made implemention more user-friendly, achieving faster and more accurate inference on embedded devices."),(0,i.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},"Seeed Studio XIAO ESP32S3 Sense")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-Studio-Round-Display-for-XIAO-p-5638.html"},"Seeed Studio Round Display for XIAO")),(0,i.kt)("li",{parentName:"ul"},"Type-C Cable")),(0,i.kt)("h2",{id:"software-required"},"Software Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ESP-IDF v4.4"),(0,i.kt)("li",{parentName:"ul"},"EdgeLab v0.1.0"),(0,i.kt)("li",{parentName:"ul"},"Example Code: ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/edgelab-example-esp32"},"edgelab-example-esp32"))),(0,i.kt)("h2",{id:"how-to-install"},"How to Install"),(0,i.kt)("h3",{id:"install-esp-idf"},"Install ESP-IDF"),(0,i.kt)("h3",{id:"install-the-esp-idf"},"Install the ESP IDF"),(0,i.kt)("p",null,"Follow the instructions of the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html"},"ESP-IDF get started guide"),"\nto setup the toolchain and the ESP-IDF itself."),(0,i.kt)("p",null,"The next steps assume that this installation is successful and the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/index.html#step-4-set-up-the-environment-variables"},"IDF environment variables are set"),". Specifically,"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"IDF_PATH")," environment variable is set"),(0,i.kt)("li",{parentName:"ul"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"idf.py")," and Xtensa-esp32 tools (e.g., ",(0,i.kt)("inlineCode",{parentName:"li"},"xtensa-esp32-elf-gcc"),") are in ",(0,i.kt)("inlineCode",{parentName:"li"},"$PATH"))),(0,i.kt)("h3",{id:"get-submodules"},"get submodules"),(0,i.kt)("p",null,"cd to the root directory of the project and run the following command to get the submodules:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/edgelab-example-esp32 && cd edgelab-example-esp32\ngit submodule init\ngit submodule update\n")),(0,i.kt)("h2",{id:"how-to-use"},"How to Use"),(0,i.kt)("h3",{id:"build-the-example"},"Build the example"),(0,i.kt)("p",null,"Go to example directory (",(0,i.kt)("inlineCode",{parentName:"p"},"examples/<example_name>"),") and build the example."),(0,i.kt)("p",null,"Set the IDF_TARGET (For ESP32-S3 target, IDF version ",(0,i.kt)("inlineCode",{parentName:"p"},"release/v4.4")," is needed)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idf.py set-target esp32s3\n")),(0,i.kt)("p",null,"Configure the example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idf.py menuconfig\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the Camera Module in ",(0,i.kt)("inlineCode",{parentName:"li"},"Component config")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Edgelab Configuration")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Camera Configuration")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Select Camera Pinout"),(0,i.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/Seeed-Studio/edgelab-example-esp32/main/docs/_static/esp32/images/esp32s3-xiao-camera.png",alt:"img"})),(0,i.kt)("li",{parentName:"ul"},"Select the LCD Module in ",(0,i.kt)("inlineCode",{parentName:"li"},"Component config")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Edgelab Configuration")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"LCD Configuration")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Select LCD Pinout"),(0,i.kt)("img",{parentName:"li",src:"https://raw.githubusercontent.com/Seeed-Studio/edgelab-example-esp32/main/docs/_static/esp32/images/esp32s3-xiao-lcd.png",alt:"img"}))),(0,i.kt)("p",null,"To build this, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idf.py build\n")),(0,i.kt)("h3",{id:"load-and-run-the-example"},"Load and run the example"),(0,i.kt)("p",null,"To flash (replace ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/ttyUSB0")," with the device serial port):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idf.py --port /dev/ttyUSB0 flash\n")),(0,i.kt)("p",null,"Monitor the serial output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"idf.py --port /dev/ttyUSB0 monitor\n")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issues into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
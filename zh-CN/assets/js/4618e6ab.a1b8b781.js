"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45695],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,k=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42797:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={title:"Codecraft connecting Azure IoT with Wio Terminal",nointro:null,keywords:["Wio_terminal Tutorial"],image:"https://wiki.seeedstudio.com/Azure_IoT_CC/",slug:"/Azure_IoT_CC",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Codecraft connecting Azure IoT with Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Azure_IoT_CC",id:"Sensor/Wio_Terminal/Tutorial/Azure_IoT_CC",title:"Codecraft connecting Azure IoT with Wio Terminal",description:"Introduction",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Azure_IoT_CC.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Azure_IoT_CC",permalink:"/custom/zh-CN/Azure_IoT_CC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Azure_IoT_CC.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Codecraft connecting Azure IoT with Wio Terminal",nointro:null,keywords:["Wio_terminal Tutorial"],image:"https://wiki.seeedstudio.com/Azure_IoT_CC/",slug:"/Azure_IoT_CC",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal Retro Gaming Firmware",permalink:"/custom/zh-CN/Wio-Terminal-Firmware"},next:{title:"Edge Impulse on CodeCraft",permalink:"/custom/zh-CN/Edge_Impulse_CC"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Tutorial",id:"tutorial",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"codecraft-connecting-azure-iot-with-wio-terminal"},"Codecraft connecting Azure IoT with Wio Terminal"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Here we gonna show you how to connect Codecraft with Azure IoT based on Wio Terminal and apply sensors to IoT projects. ",(0,i.kt)("a",{parentName:"p",href:"https://ide.tinkergen.com/"},"Codecraft")," is a graphical programmable application that can be used online and offline produced by Seeed. ",(0,i.kt)("a",{parentName:"p",href:"https://apps.azureiotcentral.com/"},"Azure IoT")," is a hosted IoT app platform that\u2019s secure, scales with you as your business grows, and integrates with your existing business apps produced by Microsoft."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/CCandAzure/jihe.png"})),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Required")),(0,i.kt)("p",null,"In this demo you will need the devices listed as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"WioTerminal")," x1"),(0,i.kt)("li",{parentName:"ul"},"Tpye-C Cable x1"),(0,i.kt)("li",{parentName:"ul"},"Computer x1")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Connect")),(0,i.kt)("p",null,"It is connected to a computer through the Type-C cable."),(0,i.kt)("h3",{id:"software"},"Software"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Software Required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://ide.tinkergen.com/"},"Codecraft")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apps.azureiotcentral.com/"},"Azure IoT"))),(0,i.kt)("h3",{id:"tutorial"},"Tutorial"),(0,i.kt)("p",null,"Here we gonna show you how to apply Wio Terminal in Codecraft and then connect Codecraft with Azure IoT to train a Machine Learning model and use it. The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1")," Connect the Wio Terminal with PC."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2")," Open the ",(0,i.kt)("a",{parentName:"li",href:"https://ide.tinkergen.com/"},"Codecraft website")," and connect with the Wio Terminal")),(0,i.kt)("p",null,'Select "Wio Terminal"'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc1.png",alt:null})),(0,i.kt)("p",null,'Chose "Connect" , it might need to install CodecraftAssistant if it is the first time to use Codecraft for you.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc2.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc3.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3")," Drag the blocks on the left to build a finished program like below:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc5.png",alt:null})),(0,i.kt)("p",null,"As you may see, Wi-Fi and ",(0,i.kt)("strong",{parentName:"p"},"Azure IoT Central scope id")," here we need to set up. The Wi-Fi must be in the same environment of yours and next step we will fill the the Azure IoT information."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/cc6.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4")," Open the ",(0,i.kt)("a",{parentName:"li",href:"https://ide.tinkergen.com/"},"Azure website")," and ",(0,i.kt)("strong",{parentName:"li"},"creat a new app"))),(0,i.kt)("p",null,"Click the ",(0,i.kt)("strong",{parentName:"p"},'"Build"')," on the left side, the information here is customized and not very important."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5")," Click ",(0,i.kt)("strong",{parentName:"li"},'\u201cAdministration\u201d--\x3e"Device connection"--\x3e"SAS-IoT-Device"')," to add the Wio Terminal")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az3.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6")," Copy the information of what we need in Codecraft and paste them to the program we build")),(0,i.kt)("p",null,"Here are the essential information ",(0,i.kt)("strong",{parentName:"p"},'"ID Scope", "Primary key", "Device ID"')," to the Codecraft"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az5.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/az6.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 7")," Upload the program and see the results")),(0,i.kt)("p",null,'Click the "upload" and upload the program'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/ccaz4.png",alt:null})),(0,i.kt)("p",null,"Sometimes it takes pretty long time to upload, please be patient."),(0,i.kt)("p",null,'Move to the Azure IoT page and click "Device" --\x3e "SAS-IoT-Device"'),(0,i.kt)("p",null,"The results should be like:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/CCandAzure/ccaz5.png",alt:null})),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
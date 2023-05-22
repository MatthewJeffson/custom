"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},36419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={description:"Getting Started with SenseCAP Vision AI",title:"Getting Started with SenseCAP Vision AI",keywords:["Sensor Vision_AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP-Vision-AI-Get-Started",last_update:{date:"1/31/2023",author:"Kewei Li"}},r=void 0,s={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/SenseCAP-Vision-AI-Get-Started",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/SenseCAP-Vision-AI-Get-Started",title:"Getting Started with SenseCAP Vision AI",description:"Getting Started with SenseCAP Vision AI",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/SenseCAP-Vision-AI-Get-Started.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101",slug:"/SenseCAP-Vision-AI-Get-Started",permalink:"/custom/SenseCAP-Vision-AI-Get-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_A1101/SenseCAP-Vision-AI-Get-Started.md",tags:[],version:"current",lastUpdatedBy:"Kewei Li",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Getting Started with SenseCAP Vision AI",title:"Getting Started with SenseCAP Vision AI",keywords:["Sensor Vision_AI"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/SenseCAP-Vision-AI-Get-Started",last_update:{date:"1/31/2023",author:"Kewei Li"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with SenseCAP S2120 8-in-1 LoRaWAN Weather Sensor",permalink:"/custom/Getting_Started_with_SenseCAP_S2120_8-in-1_LoRaWAN_Weather_Sensor"},next:{title:"Train and Deploy Your Own AI Model Into SenseCAP A1101",permalink:"/custom/Train-Deploy-AI-Model-A1101"}},l={},d=[{value:"How to Select Gateway and LoraWAN\xae",id:"how-to-select-gateway-and-lorawan",level:2},{value:"How to use the Sensor",id:"how-to-use-the-sensor",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/1/0/101990962-a1101-first-new-10.17.jpg"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/SenseCAP-A1101-LoRaWAN-Vision-AI-Sensor-p-5367.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"SenseCAP A1101 - LoRaWAN Vision AI Sensor is a TinyML Edge AI enabled smart image sensor. It supports a variety of AI models such as image recognition, people counting, target detection, meter recoignition etc. It also supports training models with TensorFlow Lite. ",(0,o.kt)("br",null)),(0,o.kt)("h1",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ultra-Low Power and Powerful Himax Camara: 400Mhz DSP, Maximum camera frame rate 640",(0,o.kt)("em",{parentName:"p"},"480"),"VGA 60 FPS, Local inferencing")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Low Power and Long Range Transmission: Down to 2.3uWh sleep mode power consumption, powered by Wio-E5 LoRaWAN Modules, transfers data up to miles")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"High Data Security by Edge Computing: Local image inferencing and transfers the final result data to the Cloud, suitable for applications that require limited data transmission and high data privacy.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Easy to Visualize Data: Few clicks to display and manage data via SenseCAP Mate App and SenseCAP Dashboard, wide compatibility with other third-party tools")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"High Industrial Protection Grade: -40 ~ 85\u2103 operating temperature and IP66 rating, suitable for indoor and outdoor deployment")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Easy for Scalable Deployment: 1min to add and configure the device by scanning the device QR code, low LoRaWAN network cost and maintenance cost ensure business scalability."))),(0,o.kt)("h1",{id:"specification"},"Specification"),(0,o.kt)("p",null,"Please direct you to ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SenseCAP-A1101/SenseCAP_A1101_spec.pdf"},"specification")," for more details."),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"There are several built-in AI models for A1101, and users can select modelsaccording to their needs. Currently, the following algorithms and models are available:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"Algorithm")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"AI Model")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Object Detection"),(0,o.kt)("td",{parentName:"tr",align:null},"Human Body Detection;User-defined")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Object Counting"),(0,o.kt)("td",{parentName:"tr",align:null},"People Counting;User-defined")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Image Classification"),(0,o.kt)("td",{parentName:"tr",align:null},"Person&Panda Recognition;User-defined")))),(0,o.kt)("p",null,"Model selection and configuration is also done in the Setting interface. First select the Algorithm, different algorithms achieve different functions andshowdifferent results in the APP preview.Clicking on the drop-down triangle behindthealgorithm will bring up the selection box. Then select the AI model, click on the model, the selection box pops up, select themodel."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"If you want to train your own AI model, there are two ways. please refer to:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.",(0,o.kt)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/One-Stop-Model-Training-with-Edge-Impulse"},"One Stop Model Training with Edge Impulse"))," Fsst to follow."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.",(0,o.kt)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Train-Deploy-AI-Model-A1101"},"Train AI Model with Roboflow, YOLOv5, TensorFlow Lite"))," Slow to follow."),(0,o.kt)("h1",{id:"connect-to-the-lorawan"},"Connect to the LoraWAN\xae"),(0,o.kt)("p",null,"LoRaWAN\xae (Long Range Wide Area Network) is a wireless communication protocol designed for low-power, long-range communications between IoT (Internet of Things) devices and gateways. It uses unlicensed radio spectrum in the Industrial, Scientific, and Medical (ISM) band, typically at 868 MHz in Europe and 915 MHz in the United States. LoRaWAN\xae provides a low-cost, energy-efficient solution for connecting IoT devices over long distances. The technology allows for bi-directional communication between devices and gateways, and it supports a range of data rates to accommodate different types of applications. "),(0,o.kt)("h2",{id:"how-to-select-gateway-and-lorawan"},"How to Select Gateway and LoraWAN\xae"),(0,o.kt)("p",null,"LoRaWAN\xae network coverage is required when using sensors, there are two options.\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/4.png",alt:"p21"})),(0,o.kt)("h2",{id:"how-to-use-the-sensor"},"How to use the Sensor"),(0,o.kt)("p",null,"In addition to connecting directly to a computer to view real-time detection data, you can also transmit these data through LoraWAN\xae and finally upload them to the ",(0,o.kt)("a",{parentName:"p",href:"https://sensecap.seeed.cc/"},"SenseCAP cloud platform")," or a third-party cloud platform. On the SenseCAP cloud platform, you can view the data in a cycle and display it graphically through your mobile phone or computer. The SenseCAP cloud platform and SenseCAP Mate App use the same account system."),(0,o.kt)("p",null,"Since our focus here is on describing the model training process, we won't go into the details of the cloud platform data display. But if you're interested, you can always visit the SenseCAP cloud platform to try adding devices and viewing data. It's a great way to get a better understanding of the platform's capabilities!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_LoRaWAN_S210X_Series/11.png",alt:"p22"})),(0,o.kt)("h1",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/channels/862602258452578314/956370118575804467"},"Discord")," and our email: ",(0,o.kt)("a",{parentName:"p",href:"mailto:order@seeed.cc"},"order@seeed.cc"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
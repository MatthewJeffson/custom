"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47397],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>T});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,T=m["".concat(u,".").concat(d)]||m[d]||p[d]||i;return r?o.createElement(T,a(a({ref:t},l),{},{components:r})):o.createElement(T,a({ref:t},l))}));function T(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62991:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={title:"Connecting the Wio Terminal to Microsoft Azure IoT",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Azure-IOT/",slug:"/Wio-Terminal-Azure-IOT",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Connecting the Wio Terminal to Microsoft Azure IoT",s={unversionedId:"Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT",id:"Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT",title:"Connecting the Wio Terminal to Microsoft Azure IoT",description:"This is a document written by @Benjamin Cab\xe9. Thank you Benjamin for the great work! You may also find Benjamin's work here.",source:"@site/docs/Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT.md",sourceDirName:"Sensor/Wio_Terminal/Application/Easy_IoT",slug:"/Wio-Terminal-Azure-IOT",permalink:"/custom/zh-CN/Wio-Terminal-Azure-IOT",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Easy_IoT/Wio-Terminal-Azure-IOT.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"2022\u5e741\u670810\u65e5",frontMatter:{title:"Connecting the Wio Terminal to Microsoft Azure IoT",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Azure-IOT/",slug:"/Wio-Terminal-Azure-IOT",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Connect Wio Terminal to Microsoft Azure IoT Central",permalink:"/custom/zh-CN/Connect-Wio-Terminal-to-Microsoft-Azure-IoT-Central"},next:{title:"Connect Wio Terminal to Google Cloud IoT Core",permalink:"/custom/zh-CN/Connect-Wio-Terminal-to-Google-Cloud-IoT-Core"}},u={},c=[{value:"Connecting to MQTT Server",id:"connecting-to-mqtt-server",level:2},{value:"Tech Support",id:"tech-support",level:2}],l={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"connecting-the-wio-terminal-to-microsoft-azure-iot"},"Connecting the Wio Terminal to Microsoft Azure IoT"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/Wio-terminal-azureiot.jpeg"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This is a document written by ",(0,n.kt)("a",{parentName:"p",href:"https://twitter.com/kartben"},(0,n.kt)("strong",{parentName:"a"},"@Benjamin Cab\xe9")),". Thank you Benjamin for the great work! You may also find ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kartben"},"Benjamin's work")," here.")),(0,n.kt)("p",null,"This sample application shows you how to connect your ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," to ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/services/iot-hub"},"Azure IoT Hub"),". It is built on top of the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-sdk-for-c"},"Azure SDK for Embedded C"),", a small footprint, easy-to-port library for communicating with Azure services."),(0,n.kt)("p",null,"To connect with Microsoft Azure IoT with Wio Terminal, please see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kartben/wioterminal-azureiothub-sample"},(0,n.kt)("strong",{parentName:"a"},"Benjamin's Guide")),"."),(0,n.kt)("h2",{id:"connecting-to-mqtt-server"},"Connecting to MQTT Server"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Azure-IOT/MQTT.png"})),(0,n.kt)("p",null,"If you want to connect Wio Terminal to MQTT servers(such as Microsoft Azure IoT), you may also check ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/kartben/wioterminal-mqtts-sample"},(0,n.kt)("strong",{parentName:"a"},"Benjamin's Guide for MQTT on Wio Terminal")),"!"),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
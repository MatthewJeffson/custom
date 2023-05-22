"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},w=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),w=a,d=u["".concat(s,".").concat(w)]||u[w]||m[w]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=w;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}w.displayName="MDXCreateElement"},36305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={description:"SenseCAP M4 Overview",title:"SenseCAP M4 Overview",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},i="Overview",p={unversionedId:"Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview",id:"Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview",title:"SenseCAP M4 Overview",description:"SenseCAP M4 Overview",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway",slug:"/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview",permalink:"/custom/zh-CN/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Overview.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676304e3,formattedLastUpdatedAt:"2023\u5e742\u670813\u65e5",frontMatter:{description:"SenseCAP M4 Overview",title:"SenseCAP M4 Overview",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP M2 Light Gateway FAQ",permalink:"/custom/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Light_Gateway/SenseCAP_M2_Light_Gateway_FAQ"},next:{title:"SenseCAP M4 Quick Start",permalink:"/custom/zh-CN/Network/SenseCAP_Network/SenseCAP_M4_Square-Flux_gateway/SenseCAP_M4_Quick_Start"}},s={},l=[],c={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h1",{id:"general-information"},(0,a.kt)("strong",{parentName:"h1"},"General Information")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SenseCAP M4 Square")," is a device designed to run multiple web 3.0 applications and help you build decentralized networks. It has excellent hardware features to support the extension of multiple applications while providing easy and friendly methods to deploy ",(0,a.kt)("strong",{parentName:"p"},"CUMULUS FluxNode")," and other ",(0,a.kt)("strong",{parentName:"p"},"web 3.0 Apps")," with SenseCAP Hotspot App."),(0,a.kt)("p",null,"SenseCAP M4 Square runs at a Quad-core Intel\xae Celeron\xae J4125 and RP2040 co-processor, equipping dual 2.5GbE interfaces and multiple wireless connectivities, supporting 4K output, carrying sufficient storage capability, and equipment expandability."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview.png",alt:null})),(0,a.kt)("h1",{id:"features"},(0,a.kt)("strong",{parentName:"h1"},"Features")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Plug and Play"),"\uff1aProvide a no-command experience that enables users to finish deployment CUMULUS FluxNode with 4 steps."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Support Multiple Apps"),": Deploy multiple web 3.0 applications provided by SenseCAP from the dApp center.Cloud Service\uff1aProvide a one-stop cloud service to help users purchase, deploy, manage, and monitor their devices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"High Security"),"\uff1aBuilt-in TPM2.0 cryptographic processor and ECC608 crypto chip, high-security authentication, and reliable connectivity."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Excellent Performance"),"\uff1aPowered by Intel\xae Celeron\xae J4125 (Frequency: 2.0 - 2.7GHz) with 4 cores and 4 threads."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Low Power Consumption")," : 10w low power consumption, 7.2 kWh per month, cost $1.008 per month (global average kWh price of $0.144/per kWh).")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-1.png",alt:null})),(0,a.kt)("h1",{id:"package-contents"},(0,a.kt)("strong",{parentName:"h1"},"Package Contents")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SenseCAP M4 Square x 1"),(0,a.kt)("li",{parentName:"ul"},"International Power Adapter x 1"),(0,a.kt)("li",{parentName:"ul"},"User Manual x1"),(0,a.kt)("li",{parentName:"ul"},"SenseCAP Stickerx2")),(0,a.kt)("h1",{id:"general-overview"},(0,a.kt)("strong",{parentName:"h1"},"General Overview")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-2.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-5.png",alt:null})),(0,a.kt)("h1",{id:"dimensions"},(0,a.kt)("strong",{parentName:"h1"},"Dimensions")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-6.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Device Size(/pcs): 130","*","120","*","55 mm"),(0,a.kt)("li",{parentName:"ul"},"Device Weight(/pcs): 500g"),(0,a.kt)("li",{parentName:"ul"},"Package Size(/pcs): 165","*","150","*","115 mm"),(0,a.kt)("li",{parentName:"ul"},"Package Weight(/pcs): 900g")),(0,a.kt)("h1",{id:"indicator-introduction"},(0,a.kt)("strong",{parentName:"h1"},"Indicator Introduction")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-7.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-8.png",alt:null})),(0,a.kt)("h1",{id:"button-introduction"},(0,a.kt)("strong",{parentName:"h1"},"Button Introduction")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-9.png",alt:null})),(0,a.kt)("h1",{id:"specification"},(0,a.kt)("strong",{parentName:"h1"},"Specification")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/12/Pasted-into-Overview-10.png",alt:null})))}u.isMDXComponent=!0}}]);
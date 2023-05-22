"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36756],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||n;return r?o.createElement(h,a(a({ref:t},u),{},{components:r})):o.createElement(h,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<n;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26866:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=r(87462),i=(r(67294),r(3905));const n={description:"Stepper Motor Driver",title:"Stepper Motor Driver",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Stepper_Motor_Driver",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,s={unversionedId:"Seeed_Elderly/Discrete Product/Stepper_Motor_Driver",id:"Seeed_Elderly/Discrete Product/Stepper_Motor_Driver",title:"Stepper Motor Driver",description:"Stepper Motor Driver",source:"@site/docs/Seeed_Elderly/Discrete Product/Stepper_Motor_Driver.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Stepper_Motor_Driver",permalink:"/Stepper_Motor_Driver",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Stepper_Motor_Driver.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Stepper Motor Driver",title:"Stepper Motor Driver",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Stepper_Motor_Driver",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Sidekick Advanced Kit",permalink:"/Sidekick_Advanced_Kit"},next:{title:"Stepper Motor Driver v2.3",permalink:"/Stepper_Motor_Driver_v2.3"}},p={},l=[{value:"Assembled view",id:"assembled-view",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Stepper_Motor_Driver/img/Motorshield.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Model:",(0,i.kt)("a",{parentName:"strong",href:"https://www.seeedstudio.com/depot/open-source-service-fusion-pcb-pool-c-64_33.html"},"PCB117A4M"))),(0,i.kt)("p",null,"This board allows you to control one stepper motor, as well as receive input from two limit switches. It is based around the Allegro A3982 Stepper Motor Driver with Translator. The A3982 is capable of driving up to 2A per coil. This board was designed to improve upon and replace the v1.x series of stepper drivers which are based upon the venerable L297/L298 stepper drivers. The A3982 offers a number of improvements:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Only one chip to solder, as opposed to the two chip L297/L298 combo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Superior DMOS technology (no heatsink required!)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Built-in diodes and synchronous rectification (no large diode array!)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Much cheaper and smaller than the L297/L298 (about $10 cheaper, total!)"))),(0,i.kt)("p",null,"The downside is that the board is mostly SMT, although we made a conscious design decision to stick with some of the largest and easiest to solder SMT components on the market. We used 1206 sized resistors and the A3982 itself is in a SOIC package. The board is very easy to put together, even for a beginner. Using a technique such as solder paste + hot plate, the board becomes ridiculously easy to solder. I found that it is much easier to solder SMT boards in this fashion than to solder pin after pin manually with through-hole components."),(0,i.kt)("h2",{id:"assembled-view"},"Assembled view"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You'll need a ",(0,i.kt)("strong",{parentName:"p"},"soldering toolkit")," to do most of this.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You'll also need a ",(0,i.kt)("strong",{parentName:"p"},"SMT soldering toolkit")," to construct this board.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Read our ",(0,i.kt)("strong",{parentName:"p"},"Electronics Fabrication Guide")," if you're new."))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
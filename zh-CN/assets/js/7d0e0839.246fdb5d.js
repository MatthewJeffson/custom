"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55614],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,v=c["".concat(s,".").concat(d)]||c[d]||m[d]||n;return r?i.createElement(v,a(a({ref:t},p),{},{components:r})):i.createElement(v,a({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85168:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));const n={title:"Overview",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio-Terminal-IO-Overview",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Overview",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview",title:"Overview",description:"This repo introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem as well as using the 40 pin Raspberry pi compatible GPIO!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-Overview",permalink:"/custom/zh-CN/Wio-Terminal-IO-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Overview.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Overview",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio-Terminal-IO-Overview",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"How to use LvGL Graphics Library",permalink:"/custom/zh-CN/Wio-Terminal-LVGL"},next:{title:"Analog",permalink:"/custom/zh-CN/Wio-Terminal-IO-Analog"}},s={},u=[{value:"Hardware Schematics",id:"hardware-schematics",level:2},{value:"Wio Terminal RPI Pinout",id:"wio-terminal-rpi-pinout",level:3},{value:"<em>For more information, please check <code>variant.h</code> for more information</em>",id:"for-more-information-please-check-varianth-for-more-information",level:4},{value:"Wio Terminal Grove Port Pinout",id:"wio-terminal-grove-port-pinout",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This repo introduce how to use the Grove IOs on the Wio Terminal. This allows you to enjoy the plug and play functionality of the Grove Ecosystem as well as using the 40 pin Raspberry pi compatible GPIO!"),(0,o.kt)("h2",{id:"hardware-schematics"},"Hardware Schematics"),(0,o.kt)("h3",{id:"wio-terminal-rpi-pinout"},"Wio Terminal RPI Pinout"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WioT-Pinout.jpg"})),(0,o.kt)("p",null,"Wio Terminal has 40 pin GPIO breaking out from the SAMD51, which has the same breakout as the Raspberry Pi!"),(0,o.kt)("p",null,"To use them, simply use the defined pin names as above! Some pins are multifunctional so can be referenced by different ways."),(0,o.kt)("h4",{id:"for-more-information-please-check-varianth-for-more-information"},(0,o.kt)("em",{parentName:"h4"},"For more information, please check ",(0,o.kt)("inlineCode",{parentName:"em"},"variant.h")," for more information")),(0,o.kt)("h3",{id:"wio-terminal-grove-port-pinout"},"Wio Terminal Grove Port Pinout"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2020-03-03_12-28-29.jpg"})),(0,o.kt)("p",null,"As you can see, There are two Grove Ports available on Wio Terminal. One is the default ",(0,o.kt)("strong",{parentName:"p"},"I2C Port")," and other one is ",(0,o.kt)("strong",{parentName:"p"},"configurable Digital/Analog Pin"),", it can also be used for PWM outputs. Both Grove ports can be used as Digital."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
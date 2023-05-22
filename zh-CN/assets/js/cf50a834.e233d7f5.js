"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24129],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},16281:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={description:"SenseCAP Portal Quick Start",title:"SenseCAP Portal Quick Start",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},i=void 0,s={unversionedId:"Cloud_Chain/SenseCAP_Portal/QuickStart",id:"Cloud_Chain/SenseCAP_Portal/QuickStart",title:"SenseCAP Portal Quick Start",description:"SenseCAP Portal Quick Start",source:"@site/docs/Cloud_Chain/SenseCAP_Portal/QuickStart.md",sourceDirName:"Cloud_Chain/SenseCAP_Portal",slug:"/Cloud_Chain/SenseCAP_Portal/QuickStart",permalink:"/custom/zh-CN/Cloud_Chain/SenseCAP_Portal/QuickStart",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_Portal/QuickStart.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676304e3,formattedLastUpdatedAt:"2023\u5e742\u670813\u65e5",frontMatter:{description:"SenseCAP Portal Quick Start",title:"SenseCAP Portal Quick Start",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Hotspot Registration",permalink:"/custom/zh-CN/Cloud_Chain/SenseCAP_Dashboard/Hotspot_Registration"},next:{title:"Dashboard",permalink:"/custom/zh-CN/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Website",id:"website",level:2},{value:"Create a new account",id:"create-a-new-account",level:2},{value:"Download the SenseCAP APP",id:"download-the-sensecap-app",level:2},{value:"Bind Device",id:"bind-device",level:2},{value:"Check Data",id:"check-data",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"How to work with SenseCAP Portal? Let\u2019s go!"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"The main function of the SenseCAP Portal is to manage SenseCAP devices and to store data. It is built on Azure, a secure and reliable cloud service from Microsoft. You can apply for an account and bind all devices to this account. SenseCAP provides the web portal and API. The web portal includes Dashboard, Device Management, Data Management, and Access Key Management, while API is open to users for further development."),(0,r.kt)("h2",{id:"website"},"Website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Global Station:\xa0",(0,r.kt)("a",{href:"https://sensecap.seeed.cc/"},(0,r.kt)("a",{parentName:"li",href:"https://sensecap.seeed.cc"},"https://sensecap.seeed.cc")))),(0,r.kt)("h2",{id:"create-a-new-account"},"Create a new account"),(0,r.kt)("p",null,"\u2460 Select register account, enter email information and click \u201cregister\u201d, the registered email will be sent to the user\u2019s mailbox."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-1.jpg",alt:null})),(0,r.kt)("p",null,"\u2461 Open the \u201cSenseCAP\u2026\u201dEmail, click the jump link, fill in the relevant information, and complete the registration.\n",(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-2.jpg",alt:null})),(0,r.kt)("p",null,"\u2462 Return to the login interface and complete the login.\n",(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-register-3.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you can\u2019t find the email, it may be automatically identified as \u201cspam\u201d and put in the \u201ctrash can\u201d.",(0,r.kt)("br",null),"\nIf you forget your password when logging in, you can retrieve it through your email.")),(0,r.kt)("h2",{id:"download-the-sensecap-app"},"Download the SenseCAP APP"),(0,r.kt)("p",null,"Install the SenseCAP App and log on."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Android: Please click\xa0",(0,r.kt)("a",{href:"http://sensecap-app-download.seeed.cn/"},(0,r.kt)("a",{parentName:"li",href:"http://sensecap-app-download.seeed.cn"},"http://sensecap-app-download.seeed.cn")),"\xa0and scan QR code."),(0,r.kt)("li",{parentName:"ul"},"iOS: Search \u201cSenseCAP\u201d in App Store.")),(0,r.kt)("h2",{id:"bind-device"},"Bind Device"),(0,r.kt)("p",null,"The SenseCAP device has a lable on the enclosure and as shown in figure. EUI is the unique code of a SenseCAP device. The Key is an encryption field, and it can be ignore.\nOn the SenseCAP APP main page, you can click the \u201cBind\u201d button, then scan QR code and bind device."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/label.jpg",alt:null})),(0,r.kt)("h2",{id:"check-data"},"Check Data"),(0,r.kt)("p",null,"Log in the SenseCAP Portal, check the device status and basic information in the \u201cDevice/Sensor Node\u201d, and check the sensor data in the \u201cData/Table\u201d.\n",(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/data_overview.jpg",alt:null})))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(h,s(s({ref:t},d),{},{components:a})):n.createElement(h,s({ref:t},d))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61560:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={description:"SenseCAP Portal Dashboard",title:"Dashboard",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},s=void 0,i={unversionedId:"Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard",id:"Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard",title:"Dashboard",description:"SenseCAP Portal Dashboard",source:"@site/docs/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard.md",sourceDirName:"Cloud_Chain/SenseCAP_Portal/Detail_Introduction",slug:"/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard",permalink:"/custom/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Dashboard.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"SenseCAP Portal Dashboard",title:"Dashboard",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP Portal Quick Start",permalink:"/custom/Cloud_Chain/SenseCAP_Portal/QuickStart"},next:{title:"Data Management",permalink:"/custom/Cloud_Chain/SenseCAP_Portal/Detail_Introduction/Data_Management"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Configure Scene",id:"configure-scene",level:2},{value:"Configure Charts",id:"configure-charts",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Dashboard allows you to monitor device status and sensor data in real-time."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-1.jpg",alt:null})),(0,r.kt)("p",null,"\u2460 Add \u201cScene\u201d or \u201cChart\u201d.\n\u2461 Devices Overview: displays the total number of devices.\n\u2462 Monitoring: count all offline devices and low power devices.\n\u2463 Data update interval: sets how and at what time the page (web page) is refreshed.\n\u2464 Announcement: prompt for portal version upgrade and other information.\n\u2465 Scene: the corresponding visual display module is configured according to the sensor area.\n\u2466 Chart: one or more sensors of the same type can be selected to display historical data over a while."),(0,r.kt)("h2",{id:"configure-scene"},"Configure Scene"),(0,r.kt)("p",null,"According to the installation site or application scenario, you can choose to create scene data, by grouping different data and showing the latest data in the form of icons.\nExample: There are several groups under the account: station-1, station-2, station-3\u2026Create a scene for station-1.\n\u2460 Customize the name, create the scene display of \u201cstation-1\u201d, and select \u201cAdd measurement type\u201d."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-2.jpg",alt:null})),(0,r.kt)("p",null,"\u2461 Select the measurement data to be displayed under the group \u201cstation-1\u201d and confirm."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-3.jpg",alt:null})),(0,r.kt)("h2",{id:"configure-charts"},"Configure Charts"),(0,r.kt)("p",null,"You can create charts to show the info such as measurement type, device EUI, time range, etc.\n\u2460 Select \u201cAdd\u201d- \u201cChart\u201d.\n\u2461 Customize the name and select \u201cadd measure type\u201d.\n",(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-4.jpg",alt:null}),"\n\u2462 Select the data type and time to display.\n\u2463 Select a group.\n\u2464 Select the specific sensor node under the group.\n\u2465 Select the measurement type.\n\u2466 Confirm."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Only one measurement type can be added per chart. Add up to 5 curves per chart.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-docs.seeed.cc/images/sensecap_portal/EN-dashboard-5.jpg",alt:null})))}u.isMDXComponent=!0}}]);
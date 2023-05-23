"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7745],{3905:(t,e,o)=>{o.d(e,{Zo:()=>d,kt:()=>m});var n=o(67294);function a(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,n)}return o}function s(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,n,a=function(t,e){if(null==t)return{};var o,n,a={},r=Object.keys(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||(a[o]=t[o]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)o=r[n],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(a[o]=t[o])}return a}var i=n.createContext({}),p=function(t){var e=n.useContext(i),o=e;return t&&(o="function"==typeof t?t(e):s(s({},e),t)),o},d=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},h="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var o=t.components,a=t.mdxType,r=t.originalType,i=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),h=p(o),c=a,m=h["".concat(i,".").concat(c)]||h[c]||u[c]||r;return o?n.createElement(m,s(s({ref:e},d),{},{components:o})):n.createElement(m,s({ref:e},d))}));function m(t,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=o.length,s=new Array(r);s[0]=c;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=t,l[h]="string"==typeof t?t:a,s[1]=l;for(var p=2;p<r;p++)s[p]=o[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},79845:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905));const r={description:"Hotspot Management",title:"Hotspot Management",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},s="**Hotspot Management**",l={unversionedId:"Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management",id:"Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management",title:"Hotspot Management",description:"Hotspot Management",source:"@site/docs/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management.md",sourceDirName:"Cloud_Chain/SenseCAP_Hotspot_APP",slug:"/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management",permalink:"/custom/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_Hotspot_APP/Hotspot_Management.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Hotspot Management",title:"Hotspot Management",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Remote Reboot",permalink:"/custom/Cloud_Chain/SenseCAP_Hotspot_APP/Remote Reboot"},next:{title:"Settings",permalink:"/custom/Cloud_Chain/SenseCAP_Hotspot_APP/APP_settings"}},i={},p=[],d={toc:p};function h(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hotspot-management"},(0,a.kt)("strong",{parentName:"h1"},"Hotspot Management")),(0,a.kt)("h1",{id:"hotspot-information"},(0,a.kt)("strong",{parentName:"h1"},"Hotspot Information")),(0,a.kt)("p",null,"SenseCAP Hotspot App manages hotspots that are both in SenseCAP Dashboard and in your wallet. if your hotspot has been added to the SenseCAP Dashboard account, SenseCAP App gives you all information about your Hotspot, such as rewards, online status, P2P status, witness, location, and so on."),(0,a.kt)("p",null,"There are four statuses that decide the information and operation that SenseCAP App provides to the hotspots."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SenseCAP"),": SenseCAP Hotspot not only has been added to the Dashboard account but also the Helium wallet that the Hotspot belongs to has been added to SenseCAP App"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Only Wallet"),": SenseCAP Hotspot's wallet has been added to SenseCAP App."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Only Dashboard"),": SenseCAP Hotspot has been added to the Dashboard account."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Other Maker"),": Not SenseCAP Hotspot and its wallet has been added to SenseCAP App")),(0,a.kt)("table",{style:{borderCollapse:"collapse",width:"100%",height:105},border:1},(0,a.kt)("tbody",null,(0,a.kt)("tr",{style:{height:21}},(0,a.kt)("td",{style:{width:"33.3333%",height:21}},(0,a.kt)("strong",null,"Status Type")),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},(0,a.kt)("strong",null,"Information")),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},(0,a.kt)("strong",null,"Operation"))),(0,a.kt)("tr",{style:{height:21}},(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"SenseCAP"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"All Info"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"All Operation")),(0,a.kt)("tr",{style:{height:21}},(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"Only Wallet"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"Rewards",(0,a.kt)("br",null),"Scale",(0,a.kt)("br",null),"Location",(0,a.kt)("br",null),"Relayed",(0,a.kt)("br",null),"Witness",(0,a.kt)("br",null),"Helium Online Status"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"All Operation")),(0,a.kt)("tr",{style:{height:21}},(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"Only Dashboard"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"All Info"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"Set Tag",(0,a.kt)("br",null),"Followed",(0,a.kt)("br",null),"Copy Address",(0,a.kt)("br",null),"Add To Dashboard")),(0,a.kt)("tr",{style:{height:21}},(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"Other Maker"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"-"),(0,a.kt)("td",{style:{width:"33.3333%",height:21}},"-")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://www.sensecapmx.com/wp-content/uploads/2022/07/hotspot-app-sensecap.png",alt:"SesneCAP Hotspto App"})),(0,a.kt)("h1",{id:"hotspot-operation"},(0,a.kt)("strong",{parentName:"h1"},"Hotspot Operation")),(0,a.kt)("p",null,"SenseCAP App combines the Helium Hotspot App and SenseCAP Dashboard and provides the following operations to help you manage your hotspots and reward."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update Location"),": Update hotspot location to Helium blockchain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Update Antenna"),": Update hotspot antenna to Helium blockchain"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Pair(Update Wi-Fi or Run Diagnostics)"),": Set up the hotspot's Wi-Fi and run diagnostics by Bluetooth"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Tag"),": Set tag like SenseCAP Dashboard"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Copy Address"),": Copy Hotspot address or owner address"),(0,a.kt)("li",{parentName:"ul"},"etc...")))}h.isMDXComponent=!0}}]);
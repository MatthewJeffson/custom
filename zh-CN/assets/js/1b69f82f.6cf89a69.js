"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6112],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),u=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return r?o.createElement(h,a(a({ref:t},l),{},{components:r})):o.createElement(h,a({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={title:"Wio Tracker Introduction",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_Tracker/",slug:"/Wio_Tracker",last_update:{date:"01/11/2022",author:"gunengyu"}},a=void 0,s={unversionedId:"Sensor/Wio_Series/Wio_Tracker/Wio_Tracker",id:"Sensor/Wio_Series/Wio_Tracker/Wio_Tracker",title:"Wio Tracker Introduction",description:"The WioTracker platform was firstly introduced to the world at the end of 2015 when Wio Link was crowd-founding on Kickstarter. As the second product that we launched at Kickstarter, the result of WioTracker was exceeded our expectation a lot. So not long after that, we released the little brother of Wio link----Wio Node. Both has almost the same function but different in size and grove connector quantity, to accommodate to different situations.",source:"@site/docs/Sensor/Wio_Series/Wio_Tracker/Wio_Tracker.md",sourceDirName:"Sensor/Wio_Series/Wio_Tracker",slug:"/Wio_Tracker",permalink:"/custom/zh-CN/Wio_Tracker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_Tracker/Wio_Tracker.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Wio Tracker Introduction",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_Tracker/",slug:"/Wio_Tracker",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio Link Starter Kit",permalink:"/custom/zh-CN/Wio_Link_Starter_Kit"},next:{title:"Wio LTE Cat.1",permalink:"/custom/zh-CN/Wio_LTE_Cat.1"}},c={},u=[{value:"Product List",id:"product-list",level:2},{value:"Tech Support",id:"tech-support",level:2}],l={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The Wio_Tracker platform was firstly introduced to the world at the end of 2015 when Wio Link was crowd-founding on Kickstarter. As the second product that we launched at Kickstarter, the result of Wio_Tracker was exceeded our expectation a lot. So not long after that, we released the little brother of Wio link----Wio Node. Both has almost the same function but different in size and grove connector quantity, to accommodate to different situations."),(0,n.kt)("p",null,"The most attractive thing about Wio must be the virtualizing plug-n-play modules to RESTful APIs with mobile Apps, by using which people can really get rid of soldering, jump wires, and knowledges like electronic engineering, micro-controller programming, network programming, IoT protocols handling. I am not saying that those elements are bad, If you are a beginner, these steps and knowledges are essentially to practice, but sometimes we just want fast prototyping and quick response, and that\u2019s what the Wio was born for, simplify all the steps and make prototyping easy, even if you know nothing about electronics, it is not exaggerate that you can also build a simple IoT project in about 5 minutes."),(0,n.kt)("p",null,"We have arranged many interesting projects tutorial for you to get started, by using Wio, you are able to water your plant remotely or feed your dog when you aren\u2019t home, wanna dig out what other things you can make with Wio? Check out soon the docs of Wio_Tracker link and Wio_Tracker node, have fun!"),(0,n.kt)("h2",{id:"product-list"},"Product List"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Here is the list of the Wio_Tracker Boards you can find in the Seeed WiKi. The list will be constantly updated."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_LTE_Cat.1/"},"Wio LTE Cat.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/wio_gps_board/"},"Wio Tracker - GPS, BT3.0, GSM, Arduino Compatible"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
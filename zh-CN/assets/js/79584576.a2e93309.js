"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54305],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var o=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,r=function(e,t){if(null==e)return{};var i,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)i=n[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(i),m=r,h=p["".concat(u,".").concat(m)]||p[m]||d[m]||n;return i?o.createElement(h,a(a({ref:t},c),{},{components:i})):o.createElement(h,a({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,a=new Array(n);a[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<n;l++)a[l]=i[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}m.displayName="MDXCreateElement"},65588:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var o=i(87462),r=(i(67294),i(3905));const n={title:"Wio Introduction",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio/",slug:"/Wio",last_update:{date:"01/11/2022",author:"gunengyu"}},a=void 0,s={unversionedId:"Sensor/Wio_Series/Wio",id:"Sensor/Wio_Series/Wio",title:"Wio Introduction",description:"---",source:"@site/docs/Sensor/Wio_Series/Wio.md",sourceDirName:"Sensor/Wio_Series",slug:"/Wio",permalink:"/custom/zh-CN/Wio",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Wio Introduction",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio/",slug:"/Wio",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"LCD 8*2 Characters- Blue back light",permalink:"/custom/zh-CN/LCD_8-2_Characters-Blue_back_light"},next:{title:"Wio-E5 mini",permalink:"/custom/zh-CN/LoRa_E5_mini"}},u={},l=[{value:"Product List",id:"product-list",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:l};function p(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Wio platform was firstly introduced to the world at the end of 2015 when Wio Link was crowd-founding on Kickstarter. As the second product that we launched at Kickstarter, the result of Wio Link was exceeded our expectation a lot. So not long after that, we released the little brother of Wio link----Wio Node. Both has almost the same function but different in size and grove connector quantity, to accommodate to different situations."),(0,r.kt)("p",null,"The most attractive thing about Wio must be the virtualizing plug-n-play modules to RESTful APIs with mobile Apps, by using which people can really get rid of soldering, jump wires, and knowledges like electronic engineering, micro-controller programming, network programming, IoT protocols handling. I am not saying that those elements are bad, If you are a beginner, these steps and knowledges are essentially to practice, but sometimes we just want fast prototyping and quick response, and that\u2019s what the Wio was born for, simplify all the steps and make prototyping easy, even if you know nothing about electronics, it is not exaggerate that you can also build a simple IoT project in about 5 minutes."),(0,r.kt)("p",null,"We have arranged many interesting projects tutorial for you to get started, by using Wio, you are able to water your plant remotely or feed your dog when you aren\u2019t home, wanna dig out what other things you can make with Wio? Check out soon the docs of Wio link and Wio node, have fun!"),(0,r.kt)("h2",{id:"product-list"},"Product List"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here is the list of the Wio Boards you can find in the Seeed WiKi. The list will be constantly updated."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link/"},"Wio Link")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link_Bootcamp_Kit/"},"Wio Link Bootcamp Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link_Deluxe_Kit/"},"Wio Link Deluxe Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link_Deluxe_Plus_Kit/"},"Wio Link Deluxe Plus Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link_Environment_Kit/"},"Wio Link Environment Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link_Event_Kit/"},"Wio Link Event Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Link_Starter_Kit/"},"Wio Link Starter Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio_Node/"},"Wio Node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Starter_Kit_for_Wio_LTE/"},"Grove Starter Kit for Wio LTE"),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
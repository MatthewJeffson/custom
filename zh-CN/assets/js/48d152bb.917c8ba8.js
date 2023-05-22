"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),s=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),m=n,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||a;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},68348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const a={description:"RFID Control LED",title:"RFID Control LED",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RFID_Control_LED",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/RFID_Control_LED",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/RFID_Control_LED",title:"RFID Control LED",description:"RFID Control LED",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/RFID_Control_LED.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/RFID_Control_LED",permalink:"/custom/zh-CN/RFID_Control_LED",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/RFID_Control_LED.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"RFID Control LED",title:"RFID Control LED",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RFID_Control_LED",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"LightView 201k Digital display module",permalink:"/custom/zh-CN/LightView_201k_Digital_display_module"},next:{title:"Relay Control LED",permalink:"/custom/zh-CN/Relay_Control_LED"}},u={},s=[{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"125KHz RFID Reader can read data from RFID tag. It's can use for some IoT or Intelligent Control System."),(0,n.kt)("p",null,"This demo will show you how to Read data from RFID tag, and control a LED."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Required\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arduino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"125KHz RFID Reader")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RFID tag"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,n.kt)("p",null,"RFID Reader connect to D2, D3."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RFID_Control_LED/img/Sidekick_39_1.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Code:")),(0,n.kt)("p",null,"RFID Reader module has internal control IC which make it easy to control. When there's a RFID tag close to the Reader, then it'll output the ID of the tag via UART."),(0,n.kt)("p",null,"You can do some processing in the code for different ID."),(0,n.kt)("p",null,"The folowing code didn't judge the ID, whatever tag close to Reader, it can change the state of the led."),(0,n.kt)("p",null,"Open Arduino IDE, click File -",">"," Sketchbook -",">"," RFID Reader."),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,n.kt)("br",null)),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
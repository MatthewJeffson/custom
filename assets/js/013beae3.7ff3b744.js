"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69514],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>_});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,_=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(_,i(i({ref:t},d),{},{components:r})):n.createElement(_,i({ref:t},d))}));function _(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94367:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={description:"Sound Sensor And LED Bar",title:"Sound Sensor And LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sound_Sensor_And_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,u={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar",title:"Sound Sensor And LED Bar",description:"Sound Sensor And LED Bar",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Sound_Sensor_And_LED_Bar",permalink:"/custom/Sound_Sensor_And_LED_Bar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Sound_Sensor_And_LED_Bar.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Sound Sensor And LED Bar",title:"Sound Sensor And LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sound_Sensor_And_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Relay Control LED",permalink:"/custom/Relay_Control_LED"},next:{title:"Temperature Sensor",permalink:"/custom/temperature_sensor"}},s={},l=[{value:"Tech Support",id:"tech-support",level:2}],d={toc:l},p="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This demo will show you how to use Sound Sensor, to indicate the intensity of sound, we need a LED Bar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Required:\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Arduino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sound Sensor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LED BAR"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,o.kt)("p",null,"The output of sound sensor is analog signal, we connect it to A0 of Seeeduino."),(0,o.kt)("p",null,"LED Bar needs 10 IOs, about the connection, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/BarGraph"},"LED Bar"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Sound_Sensor_And_LED_Bar/img/Sidekick_35_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code:")),(0,o.kt)("p",null,"Open Arduino IDE, click File -",">"," Sketchbook -",">"," sound_sensor."),(0,o.kt)("p",null,"We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger."),(0,o.kt)("p",null,"To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
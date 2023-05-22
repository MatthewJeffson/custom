"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96711],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=s(r),h=o,k=l["".concat(a,".").concat(h)]||l[h]||d[h]||u;return r?n.createElement(k,i(i({ref:t},p),{},{components:r})):n.createElement(k,i({ref:t},p))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,i=new Array(u);i[0]=h;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<u;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},95239:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>u,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const u={title:"Grove - NunChuck",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-NunChuck/",slug:"/Grove-NunChuck",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,c={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-NunChuck",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-NunChuck",title:"Grove - NunChuck",description:'The Grove - NunChuck is a small PCB that adapts the Wii Nunchuck connector to standard Grove connector. The power, ground and two-wire interface of the Nunchuck are all broken out to a 4-pin 0.1" pitch header.',source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-NunChuck.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-NunChuck",permalink:"/zh-CN/Grove-NunChuck",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-NunChuck.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641657600,formattedLastUpdatedAt:"2022\u5e741\u67088\u65e5",frontMatter:{title:"Grove - NunChuck",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-NunChuck/",slug:"/Grove-NunChuck",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Qwiic Hub",permalink:"/zh-CN/Grove-Qwiic-Hub"},next:{title:"Grove - PS/2 Adapter",permalink:"/zh-CN/Grove-PS_2_Adapter"}},a={},s=[{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function l(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-NunChuck/img/Nunchuck_01.jpg",alt:null})),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Grove - NunChuck"),' is a small PCB that adapts the Wii Nunchuck connector to standard Grove connector. The power, ground and two-wire interface of the Nunchuck are all broken out to a 4-pin 0.1" pitch header.\nThis \u201cGrove - NunChuck\u201d, let you play with the Wii Nunchuck and other Wii remote peripherals without needing you to cut cables. Just plug it into the Wii Nunchuck, then into the  Grove - Base Shield.'),(0,o.kt)("p",null,"There is Wiichuck- A Wii-Nunchuck break out board, they are similar."),(0,o.kt)("p",null,"\u2022 Designed to be inserted into the connector of a Nintendo Wii Nunchuck"),(0,o.kt)("p",null,"\u2022 Connects to Base Shield V2"),(0,o.kt)("p",null,"\u2022 Interface Type: I2C"),(0,o.kt)("p",null,"\u2022 Work Voltage: +5 V"),(0,o.kt)("p",null,"Resource File: ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-NunChuck/res/Grove-NunChuck_Eagle_File.zip"},"Grove - NunChuck Eagle File")),(0,o.kt)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"forum")," or ",(0,o.kt)("a",{parentName:"p",href:"http://wish.seeedstudio.com"},"wish")," to discuss."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}l.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92203],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?i.createElement(v,n(n({ref:t},p),{},{components:r})):i.createElement(v,n({ref:t},p))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<a;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24099:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));const a={description:"Grove - NOT",title:"Grove - NOT",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-NOT",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-NOT",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-NOT",title:"Grove - NOT",description:"Grove - NOT",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-NOT.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-NOT",permalink:"/custom/zh-CN/Grove-NOT",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-NOT.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Grove - NOT",title:"Grove - NOT",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-NOT",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 4-Channel 16-bit ADC(ADS1115)",permalink:"/custom/zh-CN/Grove-16-bit-ADC-ADS1115"},next:{title:"Grove - Wrapper",permalink:"/custom/zh-CN/Grove-Wrapper"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"See also",id:"see-also",level:2},{value:"Availability",id:"availability",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/act-4.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove-2-Channel_SPDT_Relay/img/20180823144904.jpg",alt:null}))),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-NOT/img/NOT_photo1.jpg",alt:null})),(0,o.kt)("p",null,"This Grove module provides the function of a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inverter_%28logic_gate%29"},"logical NOT gate"),". It is based on the 74HC1G04GW chip. The 74HC1G04GW is a high-speed Si-gate CMOS device that provides the inverting buffer. The NOT module has one input on the left and one output on the right. When the input signal is HIGH, output signal is LOW. When the input signal is LOW, output signal is HIGH."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Mixer-Pack-V2-(Electronic-blocks%2Cwithout-Arduino%2Cplug-and-play-system)-p-1867.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Simple NOT gate function with one input and one output")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Makes integrating a Logical NOT in your circuit a breeze")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Uses Standard 4-pin Grove Cables to connect to other Grove modules"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"See the  Glow-in-the-dark LED String Lights example on the  Grove Mixer Pack V2 wiki page for how to build a circuit that uses NOT Logic.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Also see Grove - NOT module typical usage"))),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Grove - OR")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Grove - AND"))),(0,o.kt)("h2",{id:"availability"},"Availability"),(0,o.kt)("p",null,"This Grove module is available as part of the following Grove Kit Series:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove Mixer Pack V2")),(0,o.kt)("p",null,"Note that this Grove - NOT module is sold only as part of the above mentioned packs and is not available stand-alone from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/"},"Seeed Studio Bazaar"),"."),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-NOT/res/Grove-NOT_v2.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-NOT/res/Grove-NOT_v2.0_Eagle.zip"},"Grove - NOT v2.0 Source (Eagle files)"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
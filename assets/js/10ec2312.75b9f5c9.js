"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72644],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>w});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,w=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return r?o.createElement(w,a(a({ref:t},d),{},{components:r})):o.createElement(w,a({ref:t},d))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11500:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={description:"Xadow - Buzzer",title:"Xadow - Buzzer",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Buzzer",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Buzzer",id:"Seeed_Elderly/Xadow/Xadow_Buzzer",title:"Xadow - Buzzer",description:"Xadow - Buzzer",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Buzzer.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Buzzer",permalink:"/custom/Xadow_Buzzer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Buzzer.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - Buzzer",title:"Xadow - Buzzer",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Buzzer",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Breakout",permalink:"/custom/Xadow_Breakout"},next:{title:"Xadow - Compass",permalink:"/custom/Xadow_Compass"}},s={},u=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Xadow_buzzer.jpg",alt:null})),(0,n.kt)("p",null,"This is a Xadow module which can emit a tone. To drive it, you need to give control to two pins simultaneously: this is different from Grove - Buzzer which uses one pin to control. It is petite but loud! It can be used for making beeps, tones and alerts."),(0,n.kt)("p",null,"Xadow is a small but perfectly formed Arduino(TM) compatible board series containing several modules. It's a kit extremely suitable for space-sensitive projects such as wearable devices & arts designs, which have higher request on size, weight and flexible cascade connection. You can find more modules here."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Buzzer-p-1599.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Work Voltage: 3.3V"),(0,n.kt)("li",{parentName:"ul"},"FundamentalFrequency: 2700Hz"),(0,n.kt)("li",{parentName:"ul"},"Sound Pressure Level: >75dB"),(0,n.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,n.kt)("h2",{id:"demonstration"},"Demonstration"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"There is an easy demo to show how to drive buzzer sound. If you have successfully used it, then you can apply it to your great projects, such as detecting the battery status: the buzzer will emit a sound when Xadow Main Board is in low battery."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Buzzer/img/Buzzer_Usage.jpg",alt:null})),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"void setup()\n{\n    DDRB |= 0x06;\n}\n\nvoid loop()\n{\n    //turn on the buzzer\n    PORTB |= 0x06;\n    delay(1);\n    //turn off the buzzer\n    PORTB &= ~(0x06);\n    delay(1);\n}\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Buzzer/res/Xadow_Buzzer_eagle_file.zip"},"Xadow Buzzer Eagle File"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
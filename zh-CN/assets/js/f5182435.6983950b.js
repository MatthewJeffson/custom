"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15917],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return r?a.createElement(k,l(l({ref:t},s),{},{components:r})):a.createElement(k,l({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - RS232",title:"Grove - RS232",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RS232",last_update:{date:"2/22/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS232",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS232",title:"Grove - RS232",description:"Grove - RS232",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS232.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-RS232",permalink:"/zh-CN/Grove-RS232",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-RS232.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676995200,formattedLastUpdatedAt:"2023\u5e742\u670821\u65e5",frontMatter:{description:"Grove - RS232",title:"Grove - RS232",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RS232",last_update:{date:"2/22/2023",author:"jianjing Huang"}}},p={},u=[{value:"Version",id:"version",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS232/img/mian.jpg",alt:null})),(0,n.kt)("p",null,"Most of the MCUs use TTL levels, and the computer serial port generally uses 232 levels. If we want the computer to communicate with the MCU, we need this ",(0,n.kt)("strong",{parentName:"p"},"Grove - 232"),". Communication between your Arduino and your computer will be exceptionally convenient with the integrated Grove interface"),(0,n.kt)("p",null,"This module is based on Max3232, it supports multiple baud rate communication and theoretically supports communication up to 230400bps baud."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-RS232-P-2852.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - RS232"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Oct 2018")))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Easy to use"),(0,n.kt)("li",{parentName:"ul"},"Stable, high speed"),(0,n.kt)("li",{parentName:"ul"},"High cost performance"),(0,n.kt)("li",{parentName:"ul"},"\xb115-kV ESD Protection"),(0,n.kt)("li",{parentName:"ul"},"Low power consumption"),(0,n.kt)("li",{parentName:"ul"},"Two Drivers and Two Receivers")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Driver input voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"0V ~ 5.5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Receiver input voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"-25V ~ +25V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply current(No load)"),(0,n.kt)("td",{parentName:"tr",align:null},"0.3mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating free-air temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40\u2103 ~ 85\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage temperature range"),(0,n.kt)("td",{parentName:"tr",align:null},"-65\u2103 ~ 150\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maximum data rate"),(0,n.kt)("td",{parentName:"tr",align:null},"250 Kbit/s")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Support baud rate"),(0,n.kt)("td",{parentName:"tr",align:null},"300bps ~ 230400bps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Length"),(0,n.kt)("td",{parentName:"tr",align:null},"46mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Width"),(0,n.kt)("td",{parentName:"tr",align:null},"42mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Height"),(0,n.kt)("td",{parentName:"tr",align:null},"16.5mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 40mm W: 40mm H: 15mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"13.3g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 90mm H: 15mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"20g")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Hand-Held Equipment"),(0,n.kt)("li",{parentName:"ul"},"Palmtop PCs")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-out"},"Pin Out"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS232/img/pin_out/pin_out.jpg",alt:null})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"This is a simple module that only needs to connect the corresponding interface to the corresponding device to transfer data using the serial port tool. You should note that when connecting a TTL device, the RX pin of the module needs to be connected to the TX pin of the device, and vice versa, the TX pin of the module needs to be connected to the RX pin of the device."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-RS232/img/connect.jpg",alt:null})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-RS232/res/Grove-RS232.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RS232/res/Grove-RS232.zip"},"Grove-RS232 Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RS232/res/Max3232.pdf"},"MAX3232 Datasheet"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/SeeedDocument/Grove-RS232/tree/master/res/Grove-RS232.pdf"},"PDF Format Wiki")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
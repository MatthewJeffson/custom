"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43963],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),d=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(r),c=n,k=p["".concat(u,".").concat(c)]||p[c]||m[c]||l;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},94722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={description:"Xadow - Gesture v1.0",title:"Xadow - Gesture v1.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Gesture_v1.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,o={unversionedId:"Seeed_Elderly/Xadow/Xadow_Gesture_v1.0",id:"Seeed_Elderly/Xadow/Xadow_Gesture_v1.0",title:"Xadow - Gesture v1.0",description:"Xadow - Gesture v1.0",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Gesture_v1.0.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Gesture_v1.0",permalink:"/custom/zh-CN/Xadow_Gesture_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Gesture_v1.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - Gesture v1.0",title:"Xadow - Gesture v1.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Gesture_v1.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - GPS V2",permalink:"/custom/zh-CN/Xadow_GPS_V2"},next:{title:"Xadow - Grove Adaptor",permalink:"/custom/zh-CN/Xadow_Grove_Adaptor"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Pins Description",id:"pins-description",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_3.jpg",alt:null})),(0,n.kt)("p",null,"The sensor on Xadow - Gesture v1.0 is PAJ7620U2 that integrates gesture recognition function with general I2C interface into a single chip. It can recognize 13 gestures including move up, move down, move left, move right, move forward, move backward,circle-clockwise, circle-counter clockwise, up to down ,down to up,left to right ,right to left and wave. These gestures information can be simply accessed via the I2C bus."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Gesture-v1.0-p-2460.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"13 gesture recognition"),(0,n.kt)("li",{parentName:"ul"},"Gesture speed is 60\xb0/s to 600\xb0/s in Normal Mode and 60\xb0/s to 1200\xb0/s in Gaming Mode"),(0,n.kt)("li",{parentName:"ul"},"Ambient light immunity: < 100k Lux"),(0,n.kt)("li",{parentName:"ul"},"Built-in proximity detection"),(0,n.kt)("li",{parentName:"ul"},"I2C interface up to 400 kbit/s"),(0,n.kt)("li",{parentName:"ul"},"Compatible with the Xadow interface")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Sensor:PAJ7620U2"),(0,n.kt)("li",{parentName:"ul"},"Power supply:2.8V to 3.3V and I/O voltage is 1.8V~3.3V"),(0,n.kt)("li",{parentName:"ul"},"Compatible: Xadow interface"),(0,n.kt)("li",{parentName:"ul"},"Interface:IIC"),(0,n.kt)("li",{parentName:"ul"},"Operating Temperature: -40\xb0C to +85\xb0C"),(0,n.kt)("li",{parentName:"ul"},"Dimensions:25 * 20mm;"),(0,n.kt)("li",{parentName:"ul"})),(0,n.kt)("h2",{id:"interface-function"},"Interface Function"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_2.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"P1:Short-circuits,then interrupt signal will be connected with pin PF0/A5 ."),(0,n.kt)("li",{parentName:"ul"},"U1:PAJ7620U2;Integrated Gesture Recognition Sensor."),(0,n.kt)("li",{parentName:"ul"},"J1,J2:FPC interface.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When connect Xadow - Gesture to Xadow Main Board, the connection direction should be cautious. The connection method is that the unfilled corner of one xadow module connect to the right angle of another module(see four corners of each xadow module).")),(0,n.kt)("h2",{id:"pins-description"},"Pins Description"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Pins on both sides of Xadow modules are symmetrical, here are pins descriptions about Interface from top to bottom."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/img/Xadow_-_Gesture_5.jpg",alt:null})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Xadow Pins"),(0,n.kt)("th",{parentName:"tr",align:null},"PAJ7620U2 Pins"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"NC"),(0,n.kt)("td",{parentName:"tr",align:null},"(PCINT1/SCLK)PB1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"NC"),(0,n.kt)("td",{parentName:"tr",align:null},"(PDI/PCINT2/MOSI)PB2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"NC"),(0,n.kt)("td",{parentName:"tr",align:null},"(PDO/PCINT3/MISO)PB3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"3/INT"),(0,n.kt)("td",{parentName:"tr",align:null},"PF5(ADC5/TMS)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"1/VBUS , 11/VLED , 12/VDD"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"6/GND , 10/GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"6/GND , 10/GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"1/VBUS , 11/VLED , 12/VDD"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"5/SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"(OC0B/SCL/INT0 )PD0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"10"),(0,n.kt)("td",{parentName:"tr",align:null},"2/SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"(SDA/INT1)PD1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"11"),(0,n.kt)("td",{parentName:"tr",align:null},"NC"),(0,n.kt)("td",{parentName:"tr",align:null},"(RXD/INT2)PD2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"12"),(0,n.kt)("td",{parentName:"tr",align:null},"NC"),(0,n.kt)("td",{parentName:"tr",align:null},"(TXD/INT3)PD3")))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/Xadow-_Gesture_v1.0_sch_pcb.zip"},"Xadow - Gesture v1.0 sch pcb.zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Gesture_v1.0/res/PAJ7620U2_Datasheet_V0.8_20140611.pdf"},"PAJ7620U2_Datasheet_V0.8_20140611.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Guesture"},"Library of Xadow - Guesture"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34400],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(a),c=n,h=p["".concat(d,".").concat(c)]||p[c]||m[c]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},39272:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const o={description:"Xadow - NFC v2",title:"Xadow - NFC v2",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_NFC_v2",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_NFC_v2",id:"Seeed_Elderly/Xadow/Xadow_NFC_v2",title:"Xadow - NFC v2",description:"Xadow - NFC v2",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_NFC_v2.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_NFC_v2",permalink:"/custom/zh-CN/Xadow_NFC_v2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_NFC_v2.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Xadow - NFC v2",title:"Xadow - NFC v2",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_NFC_v2",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - NFC Tag",permalink:"/custom/zh-CN/Xadow_NFC_tag"},next:{title:"Xadow - Pebble Time Adapter",permalink:"/custom/zh-CN/Xadow_Pebble_Time_Adapter"}},d={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"About Near Field Communication (NFC)",id:"about-near-field-communication-nfc",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2}],u={toc:s};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://seeeddoc.github.io/Xadow_NFC_v2/img/Xadow_NFC_v2.JPG",alt:null})),(0,n.kt)("p",null,"The Xadow NFC v2 features the most popular NFC chipset on the market - a highly integrated transceiver module PN532","."," This chipset is very powerful and can be found in most of the smart phones and NFC devices. It can be used to read and write to tags and cards, acting like NFC tags. Currently, we have developed Arduino libraries to support reading and writing to MIFARE Class and MIFARE Ultralight Card. The board also adopts the new 11 PIN Xadow connector to improve the flexibility of module connections."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-NFC-v2-p-2562.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open source and modular design"),(0,n.kt)("li",{parentName:"ul"},"Slim and small"),(0,n.kt)("li",{parentName:"ul"},"Built-in 11 PIN Xadow Connectors for fully flexible connection with other Xadow Modules"),(0,n.kt)("li",{parentName:"ul"},"Stackable, chain-able and sew-able with other Xadow Modules")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Microcontroller"),(0,n.kt)("th",{parentName:"tr",align:null},"Kinetis KL02"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Core"),(0,n.kt)("td",{parentName:"tr",align:null},"ARM\xae 32-bit Cortex\xae -M0+CPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Power Supply"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3 ~ 6V (via breakout pins)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Flash"),(0,n.kt)("td",{parentName:"tr",align:null},"32 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,n.kt)("td",{parentName:"tr",align:null},"4 KB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Working Current"),(0,n.kt)("td",{parentName:"tr",align:null},"5mA at standby; 55mA when read/write")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Radio Frequency"),(0,n.kt)("td",{parentName:"tr",align:null},"13.56 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supported protocols"),(0,n.kt)("td",{parentName:"tr",align:null},"ISO/IEC 14443 Type A and ISO/IEC 14443 Type B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max Operating Distance"),(0,n.kt)("td",{parentName:"tr",align:null},"~28mm depending on the current antenna size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:null},"25.37mm \xd7 20.30mm / 1\u201d \xd7 0.8\u201d")))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://seeeddoc.github.io/Xadow_NFC_v2/img/Xadow_NFC_v2.png",alt:null})),(0,n.kt)("h2",{id:"about-near-field-communication-nfc"},"About Near Field Communication (NFC)"),(0,n.kt)("p",null,"Near Field Communication (NFC) is the set of protocols for the communication of electronic devices that are proximity to each other (typically 10 cm or less). Full NFC devices usually have three working modes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Card Emulation: typically used in entrance card, or in smart phones to let them acts like smart cards to perform payment process or ticketing"),(0,n.kt)("li",{parentName:"ul"},"Reader/Writer Mode: used to read the information stored in the NFC tags"),(0,n.kt)("li",{parentName:"ul"},"Peer-to-peer Mode: used for data exchanging between devices")),(0,n.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},(0,n.kt)("img",{parentName:"a",src:"https://seeeddoc.github.io/Xadow_NFC_v2/img/RePhone_Community-2.png",alt:null}))),(0,n.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,n.kt)("p",null,"Now join us in the ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,n.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,n.kt)("p",null,"Some frequently asked questions in RePhone Community are collected and answered to the topic ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"http://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753#p23753"},'"Frequently Asked Questions of RePhone (FAQ)"'))," , the topic will be kept updating whenever a new FAQ comes out."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("p",null,"[",(0,n.kt)("strong",{parentName:"p"},"Source"),"][Source Code for Xadow NFC v2]","(",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WayenWeng/Xadow_NFC_v2/"},"https://github.com/WayenWeng/Xadow_NFC_v2/"),")"),(0,n.kt)("p",null,"[",(0,n.kt)("strong",{parentName:"p"},"ZIP"),"][Xadow NFC v2 Schematic Files_]","(",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip"},"https://files.seeedstudio.com/wiki/Xadow_NFC/res/Xadow_NFC_v2.0.zip"),")"),(0,n.kt)("p",null,"[",(0,n.kt)("strong",{parentName:"p"},"PDF"),"][Datasheet of PN532_]","(",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf"},"https://files.seeedstudio.com/wiki/Xadow_NFC/resources/PN532.pdf"),")"),(0,n.kt)("p",null,"[",(0,n.kt)("strong",{parentName:"p"},"PDF"),"][Datasheet of MCU Kinetis KL02_]","(",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_NFC/res/KL02P32M48SF0.pdf"},"https://files.seeedstudio.com/wiki/Xadow_NFC/res/KL02P32M48SF0.pdf"),")"),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
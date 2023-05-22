"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55002],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,k=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(k,o(o({ref:t},p),{},{components:r})):a.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},37106:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={title:"Bus Pirate v3 (assembled)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Bus_Pirate_v3_assembled/",slug:"/Bus_Pirate_v3_assembled",last_update:{date:"02/03/2022",author:"gunengyu"}},o=void 0,s={unversionedId:"Sensor/Beyond_Grove/Accessories/Input_Output/Bus_Pirate_v3_assembled",id:"Sensor/Beyond_Grove/Accessories/Input_Output/Bus_Pirate_v3_assembled",title:"Bus Pirate v3 (assembled)",description:"The BusPirate v3 is a universal bus interface that talks to electronics from a PC serial terminal, eliminating a ton of early prototyping effort when working with new or unknown chips.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Input_Output/Bus_Pirate_v3_assembled.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Input_Output",slug:"/Bus_Pirate_v3_assembled",permalink:"/custom/zh-CN/Bus_Pirate_v3_assembled",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Input_Output/Bus_Pirate_v3_assembled.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"2022\u5e742\u67082\u65e5",frontMatter:{title:"Bus Pirate v3 (assembled)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Bus_Pirate_v3_assembled/",slug:"/Bus_Pirate_v3_assembled",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"USB To Uart 5V",permalink:"/custom/zh-CN/USB_To_Uart_5V"},next:{title:"Codec-Adaptive Wireless Relay",permalink:"/custom/zh-CN/Codec-Adaptive_Wireless_Relay"}},l={},u=[{value:"Features",id:"features",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bus_Pirate_v3_assembled/img/Bus%20Pirate%20v3.6interface.jpg",alt:null})),(0,n.kt)("p",null,"The BusPirate v3 is a universal bus interface that talks to electronics from a PC serial terminal, eliminating a ton of early prototyping effort when working with new or unknown chips."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Protocols:")," 1-Wire, I2C, SPI, JTAG, asynchronous serial (UART), MIDI, PC keyboard, HD44780 LCDs, and generic 2- and 3-wire libraries for custom protocols."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/bus-pirate-v3-assembled-p-609.html?cPath=174"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"USB interface, USB powered")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"0-5.5volt tolerant pins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"0-6volt measurement probe")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1Hz-40MHz frequency measurement")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"1kHz \u2013 4MHz pulse-width modulator, frequency generator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On-board multi-voltage pull-up resistors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"On-board 3.3volt and 5volt power supplies with software reset")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Macros for common operations")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Bus traffic sniffers (SPI, I2C)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A bootloader for easy USB firmware updates")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Transparent USB-",">","serial bridge mode")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"10Hz-1MHz low-speed logic analyzer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Custom support in AVRDUDE, Flashrom")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"AVR STK500 v2 programmer clone")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Scriptable from Perl, Python, etc.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Translations (currently Spanish and Italian)"))),(0,n.kt)("h2",{id:"cautions"},"Cautions"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This open source hardware and software is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. If you can't accept this risk, please do not buy this hardware."),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://dangerousprototypes.com/bus-pirate-manual/"},"Bus Pirate manual"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://dangerousprototypes.com/bus-pirate-manual/#demos"},"Chip demonstrations"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://code.google.com/p/the-bus-pirate/"},"Latest firmware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://whereisian.com/forum/index.php?board=4.0"},"Bus Pirate forum")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
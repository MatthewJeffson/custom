"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35485],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,k=u["".concat(p,".").concat(h)]||u[h]||m[h]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52394:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={description:"Ethernet Shield V1.0",title:"Ethernet Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Ethernet_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},i=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Ethernet_Shield_V1.0",id:"Top_Brand/Arduino/shield/Ethernet_Shield_V1.0",title:"Ethernet Shield V1.0",description:"Ethernet Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/Ethernet_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Ethernet_Shield_V1.0",permalink:"/custom/zh-CN/Ethernet_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Ethernet_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{description:"Ethernet Shield V1.0",title:"Ethernet Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Ethernet_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Energy Monitor Shield V0.9b",permalink:"/custom/zh-CN/Energy_Monitor_Shield_V0.9b"},next:{title:"Ethernet Shield V2.0",permalink:"/custom/zh-CN/Ethernet_Shield_V2.0"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Pins usage on Arduino",id:"pins-usage-on-arduino",level:3},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software",id:"software",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_Shield_Pic.jpg",alt:null})),(0,a.kt)("p",null,"Ethernet Shield instantly enables internet connectivity for Arduino projects. An on-board Wiz5100 ethernet controller handles up to four TCP and UDP connections, just stack it onto an Arduino to create your own networked devices. Easily check connection status with on board indicator lights. Extend your design further with two extra rows of pin header that connect to shields and prototyping boards."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Model:")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/wiznet-ethernet-shield-w5100-p-518.html?cPath=102"},"ARD124B2P")),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Standard Arduino and Arduino Mega compatible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Arduino Ethernet Library compatible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Standard RJ45 ethernet Jack")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"16K byte internal buffer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Indicator LEDs for all functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Easy to access reset button")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Standard pin headers for 0.1" grid prototyping boards')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Up to 4 TCP/UDP network connections"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Voltage")),(0,a.kt)("td",{parentName:"tr",align:null},"3.5"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"5.5"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Current")),(0,a.kt)("td",{parentName:"tr",align:null},"120"),(0,a.kt)("td",{parentName:"tr",align:null},"210"),(0,a.kt)("td",{parentName:"tr",align:null},"350"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Demension")),(0,a.kt)("td",{parentName:"tr",align:null},"72.6x58.4x23.2"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Supported Connection")),(0,a.kt)("td",{parentName:"tr",align:null},"TCP/UDP"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Net Weight")),(0,a.kt)("td",{parentName:"tr",align:null},"24.2"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"g")))),(0,a.kt)("h2",{id:"interface-function"},"Interface Function"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet-hard1.png",alt:null}),"\n",(0,a.kt)("strong",{parentName:"p"},"RJ45")," - Ethernet Port"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Power LED")," - Power"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RST LED(red)")," - Red when Reset"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LINK LED")," - Always ON when link is ok and flashes while in a TX or RX stat"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SPD LED")," - Light indicates the link speed is 100Mbps"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"FDX LED")," - Light indicates the status of full-duplex mode."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Coll LED")," - Light indicates the presence of collision activity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rx LED")," - Light indicates the presence of receiving activity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tx LED")," - Light indicates the presence of transmitting activity"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Reset KEY")," - Reset Ethernet shield and Arduino when pressed"),(0,a.kt)("h3",{id:"pins-usage-on-arduino"},"Pins usage on Arduino"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D0")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D1")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D2")," - Connects the INT pin of the W5100"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D3")," - Contral the reset of the W5100"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D4")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D5")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D6")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D7")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D8")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D9")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D10")," - Used for SPI Chip Select"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D11")," - Used for SPI MOSI"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D12")," - Used for SPI MISO"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D13")," - Used for SPI SCK"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D14(A0)")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D15(A1)")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D16(A2)")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D17(A3)")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D18(A4)")," - Unused"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D19(A5)")," - Unused"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("p",null,"Connect the ethernet shield with internet via RJ45 connector, and Arduino with PC via USB cable. Insert ethernet shield onto Arduion board:\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield_hard.jpg",alt:null})),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the Arduino IDE(1.0), open the ",(0,a.kt)("strong",{parentName:"li"},"WebServer")," example in the Ethernet library:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield1.jpg",alt:null})," ",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield3.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others, in: ",(0,a.kt)("strong",{parentName:"p"},"Tools- Board"),"; Select COM port you are using in: ",(0,a.kt)("strong",{parentName:"p"},"Tools- Serial port"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open your web browser and input the web address:192.168.1.177, you will see the operation result of the arduino board as web server:"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/img/Ethernet_shield2.jpg",alt:null})),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Revision"),(0,a.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,a.kt)("th",{parentName:"tr",align:null},"Release"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"V1.0 Release"),(0,a.kt)("td",{parentName:"tr",align:null},"2012/3/29")))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Getting started]"),(0,a.kt)("a",{parentName:"li",href:"https://arduino.cc/en/Guide/ArduinoEthernetShield"},"Ethernet Shield Getting started")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/Ethernet_Shield.zip"},"Ethernet Shield Eagle Files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield.pdf"},"W5100_ethernet_shield PCB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Ethernet_Shield_V1.0/res/W5100_ethernet_shield%20SCH.pdf"},"W5100_ethernet_shield SCH"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
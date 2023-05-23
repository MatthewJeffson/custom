"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3400],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>c});var l=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function n(e,t){if(null==e)return{};var i,l,o=function(e,t){if(null==e)return{};var i,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var r=l.createContext({}),m=function(e){var t=l.useContext(r),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=m(e.components);return l.createElement(r.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},_=l.forwardRef((function(e,t){var i=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,p=n(e,["components","mdxType","originalType","parentName"]),u=m(i),_=o,c=u["".concat(r,".").concat(_)]||u[_]||d[_]||a;return i?l.createElement(c,s(s({ref:t},p),{},{components:i})):l.createElement(c,s({ref:t},p))}));function c(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=i.length,s=new Array(a);s[0]=_;var n={};for(var r in t)hasOwnProperty.call(t,r)&&(n[r]=t[r]);n.originalType=e,n[u]="string"==typeof e?e:o,s[1]=n;for(var m=2;m<a;m++)s[m]=i[m];return l.createElement.apply(null,s)}return l.createElement.apply(null,i)}_.displayName="MDXCreateElement"},54063:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>n,toc:()=>m});var l=i(87462),o=(i(67294),i(3905));const a={description:"Edison 4WD Auto Robotic Platform 2.0",title:"Edison 4WD Auto Robotic Platform 2.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edison_4WD_Auto_Robotic_Platform_2.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},s=void 0,n={unversionedId:"Seeed_Elderly/Discrete Product/Edison_4WD_Auto_Robotic_Platform_2.0",id:"Seeed_Elderly/Discrete Product/Edison_4WD_Auto_Robotic_Platform_2.0",title:"Edison 4WD Auto Robotic Platform 2.0",description:"Edison 4WD Auto Robotic Platform 2.0",source:"@site/docs/Seeed_Elderly/Discrete Product/Edison_4WD_Auto_Robotic_Platform_2.0.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Edison_4WD_Auto_Robotic_Platform_2.0",permalink:"/custom/Edison_4WD_Auto_Robotic_Platform_2.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Edison_4WD_Auto_Robotic_Platform_2.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Edison 4WD Auto Robotic Platform 2.0",title:"Edison 4WD Auto Robotic Platform 2.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Edison_4WD_Auto_Robotic_Platform_2.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Tiny BLE",permalink:"/custom/Tiny_BLE"},next:{title:"Edison_4WD_Auto_Robotic_Platform",permalink:"/custom/Edison_4WD_Auto_Robotic_Platform"}},r={},m=[{value:"Parts List Check",id:"parts-list-check",level:2},{value:"Product Assembly Guide",id:"product-assembly-guide",level:2},{value:"Getting started: Installation of aluminum frame",id:"getting-started-installation-of-aluminum-frame",level:4},{value:"Assemble bottom board",id:"assemble-bottom-board",level:4},{value:"Assemble motors",id:"assemble-motors",level:4},{value:"Assemble wheels",id:"assemble-wheels",level:4},{value:"Install PCA board on PMMA upper board",id:"install-pca-board-on-pmma-upper-board",level:4},{value:"Integrate PCB Assembly board with aluminum frame",id:"integrate-pcb-assembly-board-with-aluminum-frame",level:4},{value:"IDE installation (On windows)",id:"ide-installation-on-windows",level:2},{value:"Assemble your first Edison board",id:"assemble-your-first-edison-board",level:4},{value:"Driver and development tool installation",id:"driver-and-development-tool-installation",level:4},{value:"Flash latest firmware on windows",id:"flash-latest-firmware-on-windows",level:4},{value:"Preliminary application",id:"preliminary-application",level:2},{value:"Preparations",id:"preparations",level:4},{value:"Burn downloaded image files into Edison",id:"burn-downloaded-image-files-into-edison",level:4},{value:"More development sources",id:"more-development-sources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:m},u="wrapper";function d(e){let{components:t,...i}=e;return(0,o.kt)(u,(0,l.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_82.JPG",alt:null})),(0,o.kt)("p",null,"Edison 4WD Auto Robotic Platform 2.0 is fundamental development platform which is based on Intel Edison and features powerful scalability. It can helps inventors, entrepreneurs, and consumer product designers develop more practical and various robots easily. Right in this page, we will show you a simple and cool application."),(0,o.kt)("h2",{id:"parts-list-check"},"Parts List Check"),(0,o.kt)("p",null,"For your sake, please do ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/res/Parts_List_for_Intel_Edison.pdf"},"parts list")," checking."),(0,o.kt)("h2",{id:"product-assembly-guide"},"Product Assembly Guide"),(0,o.kt)("p",null,"This section cover the content of assembling fundamental development platform quickly.\nCompleted view:"),(0,o.kt)("dl",null,(0,o.kt)("dd",null)),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_82.JPG",alt:null})),(0,o.kt)("dl",null,(0,o.kt)("dd",null)),(0,o.kt)("p",null,"Main steps required required to complete assembly."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/Aluminium_frame.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_11.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_22.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_32.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_42.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_59.jpg",alt:null})))),(0,o.kt)("h4",{id:"getting-started-installation-of-aluminum-frame"},"Getting started: Installation of aluminum frame"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Completed aluminum frame like following figure shows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/Aluminium_frame.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parts required for this step: Bracket",(0,o.kt)("em",{parentName:"p"},"4, long aluminum bar"),"2, short aluminum bar",(0,o.kt)("em",{parentName:"p"},"2, M4 flat head socket cap screw"),"16, hex key *1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_02.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_03.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_04.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_05.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_06.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specific assembly steps are as follows:"))),(0,o.kt)("p",null,"Pick a bracket, a short aluminum bar and join them."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_07.jpg",alt:null}))),(0,o.kt)("p",null,"Note the grooved side of bracket ought to be close to short aluminum bar."),(0,o.kt)("p",null,"After joining, put screw into screw hole from outer side to inner side and fixed it with hex key."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_08.jpg",alt:null}))),(0,o.kt)("p",null,"Pick a long aluminum bar and make grooved side of bracket close to it."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_09.jpg",alt:null}))),(0,o.kt)("p",null,"After joining, put screw into screw hole from outer side to inner side and fixed it with hex key."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_10.jpg",alt:null}))),(0,o.kt)("p",null,"Repeat last two steps for another aluminum bar to complete aluminum frame installation."),(0,o.kt)("h4",{id:"assemble-bottom-board"},"Assemble bottom board"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Results show as follows after completion of this step:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_11.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parts required for this step: PMMA fixing board",(0,o.kt)("em",{parentName:"p"},"1, cross recessed pan washer head screw"),"1, cross recessed flat head screw",(0,o.kt)("em",{parentName:"p"},"4, hexagon nut"),"4, bottom board",(0,o.kt)("em",{parentName:"p"},"4, plate spanner"),"1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_12.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_13.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_14.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_15.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specific assembly steps are as follows:"))),(0,o.kt)("p",null,"Place PMMA fixing bar on the side with more screw hole, then align fixing board with long aluminum bar by screw hole. Then place cross recessed pan washer head screw into remote screw hole and fix them as following image shows."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_16.jpg",alt:null}))),(0,o.kt)("p",null,"Place nylon hinge on the side with more screw hole of bottom board and align them. Then use hexagon nut, plate spanner and cross recessed flat head screw to fix nylon hinge."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_17.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_18.jpg",alt:null}),"\nPlace nylon hinge on PMMA fixing bar and align screw hole for both item. Then put cross recessed flat head screws into hole and fix them.as the picture shows.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_19.jpg",alt:null}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that do not fix them too tight and keep loose for later operations."),(0,o.kt)("p",null,"Fix nylon hinge to fixing bar with cross recessed flat head screw."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_20.jpg",alt:null}))),(0,o.kt)("p",null,"Fix bottom board with three thumb screws."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_21.jpg",alt:null}))),(0,o.kt)("h4",{id:"assemble-motors"},"Assemble motors"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Results show as follows after completion of this step:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_22.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parts required\uff1aMotor",(0,o.kt)("em",{parentName:"p"},"4, m3 cross recessed pan head screw"),"12, shaft coupling*.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_23.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_24.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_25.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specific assembly steps are as follows:"))),(0,o.kt)("p",null,"Place motor's axle up and through bigger hole on long aluminum bar. Then fix motor with M3 cross recessed pan head screw from outer side to inner side."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_26.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_27.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_28.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_29.jpg",alt:null}))),(0,o.kt)("p",null,"Repeat last three steps to install all four motor to aluminum frame.\nPlace M3 cross recessed pan head screws into shaft couplings' hole but don't make it through."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_30.jpg",alt:null}))),(0,o.kt)("p",null,"Put shaft coupling(screw installed) onto motors' axles and align screw to the hole on axles."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_31.jpg",alt:null}))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," the screws must be screwed onto the small pit on motor axles."),(0,o.kt)("h4",{id:"assemble-wheels"},"Assemble wheels"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Results show as follows after completion of this step:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_32.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parts required\uff1awheel",(0,o.kt)("em",{parentName:"p"},"4,M3 cross recessed pan head screw"),"4, screw cap washer*4\uff0cswitch(connected with power cable)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_33.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_34.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specific assembly steps are as follows:"))),(0,o.kt)("p",null,"Put on screw cap washers on M3 cross recessed pan head screw."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_35.jpg",alt:null}))),(0,o.kt)("p",null,"Place and push wheel into shaft coupling (from both side of wheel will be okay). Then fix wheel from outside with m3 cross recessed pan head screw."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_36.jpg",alt:null}))),(0,o.kt)("p",null,"Loose screw cap washer as following figure shows."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_37.jpg",alt:null}))),(0,o.kt)("p",null,"Lead switch through centered two hole on long aluminum bar(left), which have more screw hole on bottom, from inside to outside."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_38.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_39.jpg",alt:null}))),(0,o.kt)("p",null,"Fix switch as order showed by following figure with plate spanner."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_39.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_40.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_41.jpg",alt:null}))),(0,o.kt)("h4",{id:"install-pca-board-on-pmma-upper-board"},"Install PCA board on PMMA upper board"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Results show as follows after completion of this step:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_42.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parts required\uff1aPMMA upper board",(0,o.kt)("em",{parentName:"p"},"1, M3 hexagon nut"),"4, long distance spacer",(0,o.kt)("em",{parentName:"p"},"4, short distance spacer"),"4, cross recessed pan washer head screw",(0,o.kt)("em",{parentName:"p"},"4, heat sink"),"4.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_43.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_44.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_45.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_46.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_47.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_48.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_49.jpg",alt:null})))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Specific assembly steps are as follows:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Place distance spacer into the holes which is marked by red circle on PMMA board.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_50.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fixed long distance spacers with M3 hexagon nut.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_51.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_52.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Assemble heat sink on PCB Assembly board and the location of heat sink is marked with white rectangle mark.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_53.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tear off light blue film on heat sink and stick it on PCB Assembly board.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_54.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Put micro nut in red circle marked on PCB Assembly board and fix short distance spacer which is locate on other side.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_55.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_56.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Place PCB Assembly board assembled before on PMMA upper board and align short distance spacer into red circle marked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_57.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Use M3 cross recessed pan washer head screw to fix PCA board on PMMA upper board.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_58.jpg",alt:null})))),(0,o.kt)("h4",{id:"integrate-pcb-assembly-board-with-aluminum-frame"},"Integrate PCB Assembly board with aluminum frame"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Results show as follows after completion of this step:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_59.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Parts required\uff1aAluminum upper board",(0,o.kt)("em",{parentName:"p"},"1, M4 cross recessed pan washer head screw"),"8, Velcro tape",(0,o.kt)("em",{parentName:"p"},"1, aluminum upper board"),"1."))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_60.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_61.jpg",alt:null})),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_62.jpg",alt:null}))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Specific assembly steps are as follows:")),(0,o.kt)("p",null,"Take power cable out of aluminum frame."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_63.jpg",alt:null}))),(0,o.kt)("p",null,"Place assembled PCB Assembly board on aluminum frame and align both through screw holes marked."),(0,o.kt)("p",null,"Note power connector should be place on the same side with switch."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_64.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_65.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Fix four screw into screw hole marked as follows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_66.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_67.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Detach thumb screw on PMMA bottom board and lead groove wire through holes marked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_68.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_69.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Assemble Velcro tape like following figure shows.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_70.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_71.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_72.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Lead motor-connecting wire out of aluminum frame through hole marked.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_73.jpg",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_74.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_75.jpg",alt:null}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Re-fix thumb screw on PMMA bottom board.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_76.jpg",alt:null})))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Install aluminum upper board. Place aluminum upper board on long distance spacer, and fix it with cross recessed pan washer head screw according to arrow indicates. Now your get robotic platform.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_77.jpg",alt:null})))),(0,o.kt)("h2",{id:"ide-installation-on-windows"},"IDE installation (On windows)"),(0,o.kt)("h4",{id:"assemble-your-first-edison-board"},"Assemble your first Edison board"),(0,o.kt)("p",null,"Thumb of rule: We recommend you don't have to prepare a 7-15 DC power supply for this step, USB cables will meet power-supply demand."),(0,o.kt)("h4",{id:"driver-and-development-tool-installation"},"Driver and development tool installation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe"},"Download integrated tool pack"))),(0,o.kt)("p",null,"Thumb of rule: We recommend you only select drivers and flash tool to be installed for the first if you connection speed to Intel server is not fast enough. Downloading other tool separately will be much quicker."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://downloadmirror.intel.com/25028/eng/edison-image-ww25.5-15.zip"},"Download latest firmware for Edison micro-compute"))),(0,o.kt)("h4",{id:"flash-latest-firmware-on-windows"},"Flash latest firmware on windows"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.intel.com/support/edison/sb/CS-035286.htm"},"Flashing guide on windows"))),(0,o.kt)("h2",{id:"preliminary-application"},"Preliminary application"),(0,o.kt)("p",null,"This section completed a simple application to show its powerful features. You can re-implement quickly by following steps below."),(0,o.kt)("h4",{id:"preparations"},"Preparations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure you have completed preparation works mentioned above.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Get micro SD card with storage bigger 4 GB.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://drive.google.com/open?id=0B44iVZMUKA7-eS1CUXpVRHBTYTg"},"Download compressed file")," required to drive this application.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Tools required: USB OTG cables ",(0,o.kt)("em",{parentName:"p"}," 1, ",(0,o.kt)("a",{parentName:"em",href:"https://www.seeedstudio.com/depot/Multicolor-Tie-Wraps-p-1337.html"},"few cable ties"),", ",(0,o.kt)("a",{parentName:"em",href:"https://www.seeedstudio.com/depot/Intel-Edison-p-2150.html?cPath=6_7"},"Intel Edison chip")," ")," 1, USB webcam*1."))),(0,o.kt)("h4",{id:"burn-downloaded-image-files-into-edison"},"Burn downloaded image files into Edison"),(0,o.kt)("p",null,"Decompress download file and get image file named wifi_car_20150804.img."),(0,o.kt)("p",null,"Copy image file to SD card."),(0,o.kt)("p",null,"Insert your SD card to Arduino expansion board. Note you need to format your SD card before do copying operations."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_78.jpg",alt:null}))),(0,o.kt)("p",null,"Use following command to flash image file to Edison."),(0,o.kt)("p",null,"$: mount /dev/mmcblk1p1"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," that the device displayed may be different. A simple way to find SD card descriptions is plug-in and plug-out to see differences of command ",(0,o.kt)("em",{parentName:"p"},"ls"),"."),(0,o.kt)("p",null,"$: cd /media/sdcard"),(0,o.kt)("p",null,"$: dd if=wifi_car_20150804.img of=/dev/mmcblk0 bs=1M"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After flashing process completed, now play it!")),(0,o.kt)("p",null,"Detach Intel Edison from Arduino expansion board and then install Intel Edison on PCB Assembly board."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_79.jpg",alt:null}),">")),(0,o.kt)("p",null,"Install DC Power supply. and switch on power."),(0,o.kt)("p",null,"Take out your cellphone(in this case we use iPhone) and connect to Wi-Fi named ",(0,o.kt)("em",{parentName:"p"},"EDISON-E9-BB"),", default Wi-Fi password is 11111111."),(0,o.kt)("p",null,"Launch a browser on your phone and input ",(0,o.kt)("em",{parentName:"p"},"edison.local")," in address bar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")," you need to input ",(0,o.kt)("em",{parentName:"p"},"edison.local")," in address bar on iPhone. On windows phone, Android phone and other wireless devices you can only input ",(0,o.kt)("em",{parentName:"p"},"192.168.42.1"),"."),(0,o.kt)("p",null,"Now you can control you robot movement by virtual joystick on your phone."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"<",(0,o.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/img/4WD_Edison_80.jpg",alt:null}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=l4wGzxzov2M"},"View a demo on YouTube.")),(0,o.kt)("h2",{id:"more-development-sources"},"More development sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/res/Pin_mappings.pdf"},"Pin mappings"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Edison_4WD_Auto_Robotic_Platform_2.0/res/4WD_Driver_Platform_V1.0_3400_Modules.jpg"},"Module Interfaces")))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
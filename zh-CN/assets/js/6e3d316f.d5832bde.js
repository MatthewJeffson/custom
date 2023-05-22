"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return r?a.createElement(h,n(n({ref:t},u),{},{components:r})):a.createElement(h,n({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,n[1]=l;for(var d=2;d<o;d++)n[d]=r[d];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64457:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const o={description:"Xadow - IMU 9DOF",title:"Xadow - IMU 9DOF",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IMU_9DOF",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_IMU_9DOF",id:"Seeed_Elderly/Xadow/Xadow_IMU_9DOF",title:"Xadow - IMU 9DOF",description:"Xadow - IMU 9DOF",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_IMU_9DOF.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_IMU_9DOF",permalink:"/custom/zh-CN/Xadow_IMU_9DOF",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_IMU_9DOF.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - IMU 9DOF",title:"Xadow - IMU 9DOF",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IMU_9DOF",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - IMU 6DOF",permalink:"/custom/zh-CN/Xadow_IMU_6DOF"},next:{title:"Xadow - IMU 10DOF",permalink:"/custom/zh-CN/Xadow_IMU_10DOF"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_9dof.jpg",alt:null}),"\nXadow - IMU 9DOF is a high performance 9-axis motion tracking module,which is base on MPU-9150.The MPU-9150 is the world's first integrated 9-axis motion tracking device designed for the low power, low cost, and high performance requirements of consumer electronics equipment including smartphones, tablets and wearable sensors .MPU-9150 features three 16-bit ADC for digitizing the gyroscope outputs and three 16-bit ADCs for digitizing the accelerometer outputs and three 13-bit ADCs for digitizing the magnetometer outputs."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-IMU-9DOF-p-1776.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I2C interface"),(0,i.kt)("li",{parentName:"ul"},"Low cost"),(0,i.kt)("li",{parentName:"ul"},"400kHz Fast Mode I2C for communicating with all registers"),(0,i.kt)("li",{parentName:"ul"},"Digital-output X-, Y-, and Z-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of \xb1250, \xb1500, \xb11000, and \xb12000\xb0/sec"),(0,i.kt)("li",{parentName:"ul"},"Digital-output 3-Axis accelerometer with a programmable full scale range of \xb12g, \xb14g, \xb18g and \xb116g"),(0,i.kt)("li",{parentName:"ul"},"3-axis silicon monolithic Hall-effect magnetic sensor with magnetic concentrator")),(0,i.kt)("h2",{id:"interface-function"},"Interface Function"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/Xadow_-_IMU_9DOF.jpg",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u2460\uff1a12P FPC bottom contact"),(0,i.kt)("li",{parentName:"ul"},"\u2461\uff1aAddress select resistor\uff1aR4,R5\uff08default address is 0x68\uff09",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Address is 0x68: R4 is not soldered."),(0,i.kt)("li",{parentName:"ul"},"Address is 0x69: R5 is not soldered.")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Based on library,we can display value of Accle&Gyro&Magnet on serial monitor.Now let's show how to use the module."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Installation")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/IMU_9DOF.jpg",alt:null})),(0,i.kt)("p",null,"Hardware instration is very easy,It can connect to Xadow - Main Board by FPC cable."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Software Part")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Download the library ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_IMU_9DOF"},"libraries.zip"),";"),(0,i.kt)("li",{parentName:"ol"},"Unzip libraries into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.5\\libraries."),(0,i.kt)("li",{parentName:"ol"},"Unzip IMU_9D0F_Demo file into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.5\\libraries."),(0,i.kt)("li",{parentName:"ol"},"Open the code directly by the path: File -> Example -> IMU_9D0F_Demo"),(0,i.kt)("li",{parentName:"ol"},"Upload the code. Note that you should select the correct board type and COM port."),(0,i.kt)("li",{parentName:"ol"},"You can see :")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/9DOF_Serial_Monitor.jpg",alt:null})),(0,i.kt)("p",null,"In static state\uff0cthe z-Axis output value is about 0.98g\uff0cso you can refer to this to test if your sensor can work normally."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Orientation of Axes ")),(0,i.kt)("p",null,"The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/img/MPU9150.jpg",alt:null})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Xadow-IMU_9DOF_v1.0.zip"},"Xadow_IMU_9DOF_Eagle_File.zip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/Sch_Of_Xadow-IMU_9DOF_v1.0.pdf"},"Xadow_IMU_9DOF_Sch_PDF File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_9DOF/res/MPU-9150.pdf"},"MPU_9150_Datasheet.pdf"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
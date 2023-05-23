"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12139],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=o.createContext({}),d=function(e){var t=o.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(a),m=r,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return a?o.createElement(h,n(n({ref:t},u),{},{components:a})):o.createElement(h,n({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,n[1]=l;for(var d=2;d<i;d++)n[d]=a[d];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=a(87462),r=(a(67294),a(3905));const i={description:"Xadow - IMU 10DOF",title:"Xadow - IMU 10DOF",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IMU_10DOF",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_IMU_10DOF",id:"Seeed_Elderly/Xadow/Xadow_IMU_10DOF",title:"Xadow - IMU 10DOF",description:"Xadow - IMU 10DOF",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_IMU_10DOF.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_IMU_10DOF",permalink:"/custom/Xadow_IMU_10DOF",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_IMU_10DOF.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Xadow - IMU 10DOF",title:"Xadow - IMU 10DOF",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IMU_10DOF",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - IMU 9DOF",permalink:"/custom/Xadow_IMU_9DOF"},next:{title:"Xadow - LED 5x7",permalink:"/custom/Xadow_LED_5x7"}},s={},d=[{value:"Specifications",id:"specifications",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-imu-10dof-shao.JPG",alt:null})),(0,r.kt)("p",null,"Xadow - IMU 10DOF is a combination of ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Xadow_IMU_9DOF"},"Xadow - IMU 9DOF")," and ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Xadow_Barometer_BMP180"},"Xadow - Barometer BMP180"),".This module is base on MPU-9250 and BMP180, the MPU-9250 is a 9-axis MotionTracking device that combines a 3-axis gyroscope, 3-axis accelerometer, 3-axis magnetometer and a Digital Motion Processor(DMP), and BMP180 is a high precision,ultra-low power digital pressure sensors for consumer applications.This module is very suitable for the application of smartphones, tablets and wearable devices"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-IMU-10DOF-p-2446.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I2C interface"),(0,r.kt)("li",{parentName:"ul"},"MPU-9250 I2C address selectable"),(0,r.kt)("li",{parentName:"ul"},"Low Power Consumption"),(0,r.kt)("li",{parentName:"ul"},"400kHz Fast Mode I2C for communicating with all registers"),(0,r.kt)("li",{parentName:"ul"},"Digital-output X-, Y-, and Z-Axis angular rate sensors (gyroscopes) with a user-programmable full-scale range of \xb1250, \xb1500, \xb11000, and \xb12000\xb0/sec"),(0,r.kt)("li",{parentName:"ul"},"Digital-output 3-Axis accelerometer with a programmable full scale range of \xb12g, \xb14g, \xb18g and \xb116g"),(0,r.kt)("li",{parentName:"ul"},"Digital-output magnetometer with a full scale range of \xb14800uT"),(0,r.kt)("li",{parentName:"ul"},"Digital-output barometer with range of 300 ~ 1100hPa(+9000m ~ -500m relating to sea level)"),(0,r.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,r.kt)("h2",{id:"interface-function"},"Interface Function"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_Interface.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2460\uff1aMPU-9250 I2C address select Pad(default 0x68)"),(0,r.kt)("li",{parentName:"ul"},"\u2461\uff1a12P FPC bottom contact")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"We will provide an example here to show you how to use this sensor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Hardware Installation")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Xadow-IMU_10DOF_installation.png",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"When connecting Xadow - IMU 10DOF to Xadow - Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Software Part")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the library from ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/IMU_10DOF"},"https://github.com/Seeed-Studio/Seeed_Arduino_IMU10DOF")),(0,r.kt)("li",{parentName:"ol"},"Unzip it into the libraries file of Arduino IDE by the path"),(0,r.kt)("li",{parentName:"ol"},"Open the code directly by the path: ",(0,r.kt)("strong",{parentName:"li"},"File -> Example -> IMU_10DOF_Test")),(0,r.kt)("li",{parentName:"ol"},"Upload the code. Note that you should select the correct board type and COM port.")),(0,r.kt)("p",null,"You can see :"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-test.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Orientation of Axes")),(0,r.kt)("p",null,"The diagram below shows the orientation of the axes of sensitivity and the polarity of rotation."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/img/Imu-10dof-dir-axes.png",alt:null})),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/Xadow_-_IMU_10DOF_v1.0_sch_pcb.zip"},"Xadow - IMU 10DOF v1.0 eagle file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/IMU_10DOF_Library.zip"},"IMU 10DOF library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/BMP180.pdf"},"BMP180 datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_IMU_10DOF/res/MPU-9250A_Product_Specification.pdf"},"MPU-9250 datasheet"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
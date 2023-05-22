"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?i.createElement(h,n(n({ref:t},p),{},{components:r})):i.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var u=2;u<a;u++)n[u]=r[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49813:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));const a={title:"Grove - High Precision RTC (Real Time Clock)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove_High_Precision_RTC/",slug:"/Grove_High_Precision_RTC",last_update:{date:"01/06/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Time/Grove_High_Precision_RTC",id:"Sensor/Grove/Grove_Accessories/Time/Grove_High_Precision_RTC",title:"Grove - High Precision RTC (Real Time Clock)",description:"Grove - High Precision RTC based on the clock chip PCF85063TP which is a CMOS Real-Time Clock (RTC) and calendar optimized for low power consumption. An offset register allows fine-tuning of the clock. All addresses and data are transferred serially via the I2C bus and the maximum bus speed is 400 kbit/s.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Time/Grove_High_Precision_RTC.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Time",slug:"/Grove_High_Precision_RTC",permalink:"/zh-CN/Grove_High_Precision_RTC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Time/Grove_High_Precision_RTC.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641398400,formattedLastUpdatedAt:"2022\u5e741\u67085\u65e5",frontMatter:{title:"Grove - High Precision RTC (Real Time Clock)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove_High_Precision_RTC/",slug:"/Grove_High_Precision_RTC",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - DS1307 RTC (Real Time Clock) for Arduino",permalink:"/zh-CN/Grove-RTC"},next:{title:"Grove - 10A DC Current Sensor (ACS725)",permalink:"/zh-CN/Grove-10A_DC_Current_Sensor-ACS725"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Connecting hardware",id:"connecting-hardware",level:3},{value:"Download the library",id:"download-the-library",level:3},{value:"Open the example",id:"open-the-example",level:3},{value:"Review Results",id:"review-results",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Grove-High_Precision_RTC.jpg",alt:null})),(0,o.kt)("p",null,"Grove - High Precision RTC based on the clock chip PCF85063TP which is a CMOS Real-Time Clock (RTC) and calendar optimized for low power consumption. An offset register allows fine-tuning of the clock. All addresses and data are transferred serially via the I2C bus and the maximum bus speed is 400 kbit/s."),(0,o.kt)("p",null,"Compared to ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-RTC-p-758.html"},"Grove - RTC"),", this module can provide a more accurate result. And provide a programmable clock output for peripheral devices as well as minute and half minute interrupt."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-High-Precision-RTC-p-2741.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Working Voltage:5V/3.3V"),(0,o.kt)("li",{parentName:"ul"},"Provides year, month, day, weekday, hours, minutes, and seconds based on a 32.768 kHz quartz crystal"),(0,o.kt)("li",{parentName:"ul"},"Low current: typical 0.22 uA at VDD = 3.3 V and Tamb = 25 \u2103"),(0,o.kt)("li",{parentName:"ul"},"400 kHz two-line I2C-bus interface (at VDD = 1.8 V to 5.5 V)"),(0,o.kt)("li",{parentName:"ul"},"Programmable clock output for peripheral devices (32.768 kHz, 16.384 kHz, 8.192 kHz, 4.096 kHz, 2.048 kHz, 1.024 kHz, and 1 Hz)"),(0,o.kt)("li",{parentName:"ul"},"Minute and half minute interrupt"),(0,o.kt)("li",{parentName:"ul"},"Oscillator stop detection function"),(0,o.kt)("li",{parentName:"ul"},"Internal Power-On Reset (POR)"),(0,o.kt)("li",{parentName:"ul"},"Programmable offset register for frequency adjustment"),(0,o.kt)("li",{parentName:"ul"},"Interface:Grove - I2C(SCL,SDA,VCC,GND)"),(0,o.kt)("li",{parentName:"ul"},"Size:20*40mm"),(0,o.kt)("li",{parentName:"ul"},"Ready-to-go Arduino libraries")),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("h2",{id:"interface-function"},"Interface Function"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/Interface.jpg",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Grove interface"),(0,o.kt)("li",{parentName:"ol"},"Programmable clock output interface"),(0,o.kt)("li",{parentName:"ol"},"Minute and half minute interrupt output interface"),(0,o.kt)("li",{parentName:"ol"},"Clock chip PCF85063TP"),(0,o.kt)("li",{parentName:"ol"},"CR1225 battery-holder")),(0,o.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Digital still camera"),(0,o.kt)("li",{parentName:"ul"},"Digital video camera"),(0,o.kt)("li",{parentName:"ul"},"Printers"),(0,o.kt)("li",{parentName:"ul"},"Copy machines"),(0,o.kt)("li",{parentName:"ul"},"Battery powered devices")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"After this section, you can make ",(0,o.kt)("strong",{parentName:"p"},"Grove - High Precision RTC")," run with only few steps."),(0,o.kt)("h3",{id:"preparations"},"Preparations"),(0,o.kt)("p",null,"Now we are making a demo for Grove - High Precision RTC module, in this demo we'll use a terminal to view the data. Here are what we need to use for this demo."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"Seeeduino Lotus"),"*1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/"},"Grove - High Precision RTC"),"*1")),(0,o.kt)("p",null,"If this is your first time using ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"Seeeduino Lotus"),", please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus/"},"Seeeduino Lotus's wiki"),"."),(0,o.kt)("p",null,"Seeeduino Lotus is fully compatible with Arduino which works as simple as Arduino."),(0,o.kt)("p",null,"If this is your first time using Arduino, Please put hand on ",(0,o.kt)("a",{parentName:"p",href:"https://arduino.cc"},"here")," to start your Arduino journey."),(0,o.kt)("h3",{id:"connecting-hardware"},"Connecting hardware"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-ATMega328-Board-with-Grove-Interface-p-1942.html"},"Seeeduino Lotus")," is a combination of Seeeduino and Base Shield. We can connect the RTC module to the I2C socket directly as the below picture shows."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/connect.jpg",alt:null})),(0,o.kt)("h3",{id:"download-the-library"},"Download the library"),(0,o.kt)("p",null,"Click to download the library and install it (",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install an Arduino Library"),")."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP/archive/master.zip"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/library.png",alt:null}))),(0,o.kt)("h3",{id:"open-the-example"},"Open the example"),(0,o.kt)("p",null,"After install the library, please restart Arduino, click File>Examples>SetTimeAndDisplay."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/demo2.jpg",alt:null})),(0,o.kt)("h3",{id:"review-results"},"Review Results"),(0,o.kt)("p",null,"After upload completed, you can open the serial monitor to see the result."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/img/result.jpg",alt:null})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_High_Precision_RTC_PCF85063TP"},"Grove - High Precision RTC Library and Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_eagle.zip"},"Grove - High Precision RTC Eagle file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/sch_pdf.pdf"},"Grove - High Precision RTC Schematic pdf file")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-High_Precision_RTC/res/PCF85063TP.pdf"},"PCF85063TP Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-RTC-p-758.html"},"Grove - RTC"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
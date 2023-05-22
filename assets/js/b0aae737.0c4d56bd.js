"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function n(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=n(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?i.createElement(h,l(l({ref:t},d),{},{components:r})):i.createElement(h,l({ref:t},d))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var n={};for(var s in t)hasOwnProperty.call(t,s)&&(n[s]=t[s]);n.originalType=e,n[u]="string"==typeof e?e:o,l[1]=n;for(var p=2;p<a;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},99983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>n,toc:()=>p});var i=r(87462),o=(r(67294),r(3905));const a={description:"Grove - 3-Axis Digital Gyro",title:"Grove - 3-Axis Digital Gyro",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Gyro",last_update:{date:"1/6/2023",author:"shuxu hu"}},l=void 0,n={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Gyro",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Gyro",title:"Grove - 3-Axis Digital Gyro",description:"Grove - 3-Axis Digital Gyro",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Gyro.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis_Digital_Gyro",permalink:"/Grove-3-Axis_Digital_Gyro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Gyro.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672934400,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - 3-Axis Digital Gyro",title:"Grove - 3-Axis Digital Gyro",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Gyro",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",permalink:"/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372"},next:{title:"Grove - 3 Axis Digital Accelerometer\xb116g Ultra-low Power (BMA400)",permalink:"/Grove-3-Axis_Digital_Accelerometer\xb116g_Ultra-low_Power-BMA400"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Download Code and Upload",id:"download-code-and-upload",level:3},{value:"Check the result",id:"check-the-result",level:3},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Grove - 3-Axis Digital Gyro module based on ITG 3200. It is the world\u2019s first single-chip, digital-output, 3-axis MEMS motion processing gyro optimised for gaming, 3D mice, and motion-based remote control applications for Internet connected Digital TVs and Set Top Boxes. The ITG-3200 features three 16-bit analog-to-digital converters (ADCs) for digitising the gyro outputs, a user-selectable internal low-pass filter bandwidth, and a Fast-Mode I2C (400kHz) interface."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Gyro-p-750.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Supply Voltage: 3.3V, 5V"),(0,o.kt)("li",{parentName:"ul"},"Operation Current: 6.5mA"),(0,o.kt)("li",{parentName:"ul"},"Standby current: 5\u03bcA"),(0,o.kt)("li",{parentName:"ul"},"Sensitivity: 14 LSBs per \xb0/sec"),(0,o.kt)("li",{parentName:"ul"},"Full scale range: \xb12000\xb0/sec"),(0,o.kt)("li",{parentName:"ul"},"Acceleration: 10,000g for 0.3ms"),(0,o.kt)("li",{parentName:"ul"},"I2C Interface"),(0,o.kt)("li",{parentName:"ul"},"\xb12000\xb0/s full scale range and 14.375 LSBs per \xb0/s sensitivity"),(0,o.kt)("li",{parentName:"ul"},"Three integrated 16-bit ADCs"),(0,o.kt)("li",{parentName:"ul"},"On-chip temperature sensor"),(0,o.kt)("li",{parentName:"ul"},"Integrated amplifiers and low-pass filters"),(0,o.kt)("li",{parentName:"ul"},"Hermetically sealed for temp and humidity resistance"),(0,o.kt)("li",{parentName:"ul"},"RoHS and Green compliant")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("p",null,"This demo will show you how to get data from this digital gyro, the data is in the unit of rad/s."),(0,o.kt)("p",null,"Here we need a Grove - 3-Axis Digital Gyro and a Seeeduino V3.0."),(0,o.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,o.kt)("p",null,"Hardware installation is very easy, because there's an I2C Grove in Seeeduino,"),(0,o.kt)("p",null,"So, what we need to do is connect it to I2C Grove via a Grove cable."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_Hardware.JPG",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"download-code-and-upload"},"Download Code and Upload"),(0,o.kt)("p",null,"You can download the library in github, click ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro/"},"here"),", then extract it to libraries folder of Arduino."),(0,o.kt)("p",null,"Then open File -> examples -> Grove_3_Digital_Gyro -> ITG3200_gyro, you can open the demo code."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/ITG3200_gyro_ArduinoIde.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h3",{id:"check-the-result"},"Check the result"),(0,o.kt)("p",null,"Now, you can open the serial monitor to check the result."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Grove-3-Axis_Digital_Gyro_SerialDta.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"reference"},"Reference"),(0,o.kt)("p",null,"The diagram below shows the orientations of the 3 axes. You can use it to understand the physical meanings of the result."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/img/Gyro_Reference_1.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/ITG-3200.pdf"},"Datasheet of ITG-3200.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Gyro/res/Grove-3-Axis_Digital_Gyro_Eagle_File.zip"},"Grove - 3-Axis Digital Gyro Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_3_Axis_Digital_Gyro"},"Digital Gyro Library"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
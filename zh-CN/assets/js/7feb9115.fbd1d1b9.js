"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88643],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},49505:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"SenseCAP S2100 LoRaWAN Data Logger",title:"SenseCAP S2100 LoRaWAN Data Logger",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"4/12/2023",author:"Yvonne"}},i="SenseCAP S2100 LoRaWAN Data Logger",l={unversionedId:"Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger",id:"Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger",title:"SenseCAP S2100 LoRaWAN Data Logger",description:"SenseCAP S2100 LoRaWAN Data Logger",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Data_Logger",slug:"/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1681257600,formattedLastUpdatedAt:"2023\u5e744\u670812\u65e5",frontMatter:{description:"SenseCAP S2100 LoRaWAN Data Logger",title:"SenseCAP S2100 LoRaWAN Data Logger",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"4/12/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with SenseCAP ONE Compact Weather Sensor",permalink:"/custom/zh-CN/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor"},next:{title:"SenseCAP Sensor Hub Data Logger",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/SenseCAP-Sensor-Hub-Data-Logger"}},s={},p=[{value:"Interface",id:"interface",level:2},{value:"General Parameters",id:"general-parameters",level:2},{value:"Battery (Contained in equipment)",id:"battery-contained-in-equipment",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sensecap-s2100-lorawan-data-logger"},"SenseCAP S2100 LoRaWAN Data Logger"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/1.png"})),(0,r.kt)("p",null,"The SenseCAP S2100 Data Logger is a versatile device that can connect to MODBUS-RTU RS485/Analog/GPIO sensors, allowing for easy transmission of data to the LoRaWAN network. With its LoRa and IP66 design, this device boasts impressive stability and reliability, and can cover a long transmission range while keeping ultra-low power consumption. It is perfect for outdoor use, and can be powered by battery or connected to a 12V external power supply for even greater flexibility. When connected to the 12V power supply, the replaceable built-in battery acts as a backup power source. Additionally, the S2100 Data Logger is optimized for OTA with built-in Bluetooth, making setup and updates quick and simple. To top it off, the S2110 converter enables the S2100 Data Logger to connect to Grove Sensors, making it an excellent choice for DIY industrial-level LoRaWAN sensors and small-scale deployment."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:0}))),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Strong Compatibility with different Sensors: supports all MODBUS-RTU RS485/Analog(4 ~ 20mA/0~10V) / GPIO(level/pulse) sensors."),(0,r.kt)("li",{parentName:"ul"},"Compatible with Worldwide LoRaWAN\xae Networks: Compatible with LoRaWAN\xae V1.0.3 protocol and can work with LoRaWAN\xae gateway. (support the universal frequency plan from 863MHz ~928MHz)."),(0,r.kt)("li",{parentName:"ul"},"Long Range & replaceable Battery powered: With LoRaWAN\xae wireless transmission, S2100 supports 19Ah built-in battery and external 12V DC to supply devices, and ultra-wide-transmission range of 2km in urban scenes and 10km in line of sight scenes."),(0,r.kt)("li",{parentName:"ul"},"Designed to Use in Harsh Environments: -40\u2103 ~ 85\u2103 operating temperature and IP66 rated enclosure, suitable for outdoor use, high UV exposure, heavy rain, dusty conditions, etc."),(0,r.kt)("li",{parentName:"ul"},"Remote configuration and management: Seeed provides SenseCAP Mate APP and SenseCAP Portal, allows users to remotely manage data and configure.")),(0,r.kt)("h1",{id:"specification"},"Specification"),(0,r.kt)("h2",{id:"interface"},"Interface"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current Input"),(0,r.kt)("td",{parentName:"tr",align:null},"4 to 20 mA (2 channel)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Voltage Input"),(0,r.kt)("td",{parentName:"tr",align:null},"0 to 10V (2 channel)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RS485"),(0,r.kt)("td",{parentName:"tr",align:null},"RS485 Modbus-RTU Protocol")))),(0,r.kt)("h2",{id:"general-parameters"},"General Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Product Model"),(0,r.kt)("td",{parentName:"tr",align:null},"SenseCAP S2100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,r.kt)("td",{parentName:"tr",align:null},"Wio-E5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Support Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"LoRaWAN v1.0.3 Class A")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Built-in Bluetooth"),(0,r.kt)("td",{parentName:"tr",align:null},"App Tool to change parameters and set data conversion algorithm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Long-Range Channel Plan"),(0,r.kt)("td",{parentName:"tr",align:null},"IN865/EU868/US915/AU915/ AS923")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Transmitted Power"),(0,r.kt)("td",{parentName:"tr",align:null},"19dBm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sensitivity"),(0,r.kt)("td",{parentName:"tr",align:null},"-136dBm@SF12 BW=125KHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Communication Distance"),(0,r.kt)("td",{parentName:"tr",align:null},"2 to 10km (depending on and environment)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP Rating"),(0,r.kt)("td",{parentName:"tr",align:null},"IP66")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-40 to +85 \xb0C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Humidity"),(0,r.kt)("td",{parentName:"tr",align:null},"0 to 100 %RH (non-condensing)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Device Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"280g")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Certification"),(0,r.kt)("td",{parentName:"tr",align:null},"CE / FCC / RoHS")))),(0,r.kt)("h2",{id:"battery-contained-in-equipment"},"Battery (Contained in equipment)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Battery Life"),(0,r.kt)("td",{parentName:"tr",align:null},"Up to 10 years")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Battery Capacity"),(0,r.kt)("td",{parentName:"tr",align:null},"19Ah (non-rechargeable)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Battery Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Standard D-size SOCl2 Battery")))),(0,r.kt)("h1",{id:"architecture"},"Architecture"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/2.png"})),(0,r.kt)("h1",{id:"power-source-option"},"Power Source Option"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Option 1: the data logger can work in Periodic mode. Powered by a built-in 19Ah Standard D-size Li-SOCl2 battery which is easy to buy online, it can be installed and deployed in an outdoor environment without additional power.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Option 2: the data logger can work in Constant Power mode with an external 12V DC power supply. We provide a matching Junction Box Kit so that the data logger can be quickly assembled.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/SenseCAP/Data_Logger/3.png"})),(0,r.kt)("h1",{id:"support-industrial-sensors-of-different-interfaces"},"Support Industrial Sensors of Different Interfaces"),(0,r.kt)("p",null,"S2100 LoRaWAN Data Logger is a single-channel collector, and only supports one of the following protocols at one time:"),(0,r.kt)("p",null,"RS485: Support standard RS485 Modbus-RTU protocol\nAnalog: 2 x 0 ~ 10V or 2 x 4 ~ 20mA.\nGPIO: 1 x GPIO, collect level or pulse signal"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Modbus-RTU: This protocol primarily uses an RS-232 or RS-485 serial interfaces for communications and is supported by every commercial SCADA, HMI, OPC server and data acquisition software program in the marketplace. This makes it very easy to integrate Modbus-compatible equipment into new or existing monitoring and control applications."),(0,r.kt)("p",{parentName:"admonition"},"GPIO: stands for General Purpose Input/Output. It's a standard interface used to connect microcontrollers to other electronic devices. For example, it can be used with sensors, diodes, displays, and System-on-Chip modules.")),(0,r.kt)("h1",{id:"application"},"Application"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{800}",src:"https://wdcdn.qpic.cn/MTY4ODg1NTA2NTM1OTkxNw_136830_-0LyGczsW0uya6Pi_1670038120?w=1280&h=696.6093366093365"})))}u.isMDXComponent=!0}}]);
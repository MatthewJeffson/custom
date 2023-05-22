"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82760],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),c=n,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},76162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={description:"Grove - Barometer Sensor (BMP280)",title:"Grove - Barometer Sensor (BMP280)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Barometer_Sensor-BMP280",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP280",id:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP280",title:"Grove - Barometer Sensor (BMP280)",description:"Grove - Barometer Sensor (BMP280)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP280.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Barometer",slug:"/Grove-Barometer_Sensor-BMP280",permalink:"/Grove-Barometer_Sensor-BMP280",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer_Sensor-BMP280.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672761600,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"Grove - Barometer Sensor (BMP280)",title:"Grove - Barometer Sensor (BMP280)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Barometer_Sensor-BMP280",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Barometer Sensor (BMP180)",permalink:"/Grove-Barometer_Sensor-BMP180"},next:{title:"Grove - High Precision Barometric Pressure Sensor DPS310",permalink:"/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310"}},l={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Pre-reading",id:"pre-reading",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Application",id:"application",level:2},{value:"Platforms supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Materials required",id:"materials-required",level:4},{value:"Hardware Overview",id:"hardware-overview",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/BMP280.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Grove - Barometer Sensor (BMP280)")," is a breakout board for Bosch BMP280 high-precision and low-power digital barometer. This module can be used to measure ",(0,n.kt)("strong",{parentName:"p"},"temperature")," and ",(0,n.kt)("strong",{parentName:"p"},"atmospheric pressure")," accurately. As the atmospheric pressure changes with altitude, it can also measure approximate ",(0,n.kt)("strong",{parentName:"p"},"altitude")," of a place. It can be connected to a microcontroller with I",(0,n.kt)("sup",null,"2"),"C (integrated with Grove socket) or through SPI bus. We have also provided highly abstracted library to make this product easier to use."),(0,n.kt)("p",null,"The BMP280 is an upgraded version of BMP180 and gets dramatic improvements from BMP180. BMP280 comes with a smaller footprint, lower power consumption, lower noise measurements, higher resolutions for pressure and temperature, lower RMS noise, newly added interface SPI, more measuring modes, higher measuring rate and newly added filter against environmental interference. Since the atmosphere pressure reading is affected by altitude and temperature, we have added compensation features in the library. Hence, Grove - Barometer Sensor (BMP280) would be more reliable on providing precise temperature, atmospheric pressure values and approximate altitude data."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:4},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,n.kt)("h2",{id:"pre-reading"},"Pre-reading"),(0,n.kt)("p",null,"An introduction of ",(0,n.kt)("strong",{parentName:"p"},"What is a Barometric Pressure Sensor")," and ",(0,n.kt)("strong",{parentName:"p"},"How does it work")," is strongly recommended reading ahead if you are not familiar with it. Please visit our ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2019/12/30/what-is-barometric-pressure-sensor-and-arduino-guide-to-get-started/"},"blog")," for detailed information."),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Get more precise temperature, atmospheric pressure values, and approximate altitude data"),(0,n.kt)("li",{parentName:"ul"},"Grove compatible and easy to use"),(0,n.kt)("li",{parentName:"ul"},"Highly abstracted library for building projects quicker")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/).\n"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V or 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I/O voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V or 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating current"),(0,n.kt)("td",{parentName:"tr",align:null},"0.6mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 - 85 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Effective pressure measurement range"),(0,n.kt)("td",{parentName:"tr",align:null},"300 - 1100 hPa (1 hPa= one hundred Pa) with \xb11.0 hPa accuracy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature measurement accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb11.0\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Measurement modes"),(0,n.kt)("td",{parentName:"tr",align:null},"Piezo & Temperature, forced or periodic")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Chip"),(0,n.kt)("td",{parentName:"tr",align:null},"BMP280 (",(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf"},"datasheet"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Possible sampling rate"),(0,n.kt)("td",{parentName:"tr",align:null},"182 Hz (typical)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface Bus"),(0,n.kt)("td",{parentName:"tr",align:null},"SPI, I",(0,n.kt)("sup",null,"2"),"C (use either one of them)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"3 g (for breakout board)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:null},"40 (width) \xd7 20 (depth) mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x77()default or 0x76")))),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Notes"),(0,n.kt)("p",null," 1. We will show/describe how to select interface bus soon."),(0,n.kt)("p",null," 2. The altitude is calculated by a combination of temperature and atmospheric pressure. No specialized components for altitude.")),(0,n.kt)("h2",{id:"application"},"Application"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enhancement of GPS navigation"),(0,n.kt)("li",{parentName:"ul"},"Outdoor/indoor navigation"),(0,n.kt)("li",{parentName:"ul"},"Weather forecast"),(0,n.kt)("li",{parentName:"ul"},"Botany management")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,n.kt)("h4",{id:"materials-required"},"Materials required"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BMP280"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/45d_small.jpg",alt:"pir",width:500,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-Barometer-Sensor-BMP280-p-2652.html"},"Get One Now"))))),(0,n.kt)("h4",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/Grove-Barometer_Sensor-BMP280-Components_1200_s.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SPI soldering pads"),", a voltage monitoring circuit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Interface bus selection pads")," , to select I",(0,n.kt)("sup",null,"2"),"C bus, connect the two pads by soldering (this is connected by default); to select SPI bus, cut the two pads with a sharp knife or a soldering iron."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Slave board address selection pads"),", to select slave board address to avoid address collision.")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"  * If you have selected I2C bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, connect only left two (disconnect right two) by soldering.\n\n  * You can disconnect pads with just a sharp knife.\n\n  * If you have selected SPI bus, the default address for slave board is **0x77**(right-two pads are connected). If you want to use the address **0x76**, disconnect all three pads.\n"))),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"Do not touch or shake or let this product in vibration when it works. This will cause interference and will affect the accuracy of data collected."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove-Barometer_Sensor-BMP280 to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If you don't have a Grove Base Shield, you can also directly connect this module to [Seeeduino](https://www.seeedstudio.com/catalogsearch/result/?q=Seeeduino) as below.\n"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino_v4"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Barometer_Sensor-BMP280"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_BMP280.git"},"library")," from Github."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->bmp280_example->bmp280_example"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Here is the code:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'/*\n * bmp280_example.ino\n * Example sketch for BMP280\n *\n * Copyright (c) 2016 seeed technology inc.\n * Website    : www.seeedstudio.com\n * Author     : Lambor, CHN\n * Create Time:\n * Change Log :\n *\n * The MIT License (MIT)\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n#include "Seeed_BMP280.h"\n#include <Wire.h>\n\nBMP280 bmp280;\n\nvoid setup()\n{\n  Serial.begin(9600);\n  if(!bmp280.init()){\n    Serial.println("Device error!");\n  }\n}\n\nvoid loop()\n{\n  float pressure;\n\n  //get and print temperatures\n  Serial.print("Temp: ");\n  Serial.print(bmp280.getTemperature());\n  Serial.println("C"); // The unit for  Celsius because original arduino don\'t support speical symbols\n\n  //get and print atmospheric pressure data\n  Serial.print("Pressure: ");\n  Serial.print(pressure = bmp280.getPressure());\n  Serial.println("Pa");\n\n  //get and print altitude data\n  Serial.print("Altitude: ");\n  Serial.print(bmp280.calcAltitude(pressure));\n  Serial.println("m");\n\n  Serial.println("\\n");//add a line between output of different times.\n\n  delay(1000);\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the code. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, and altitude."),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    The outcome will display on the **Serial Port** as following if everything goes well.\n"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/img/outcome.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove%20-%20Barometer%20Sensor_BMP280_Schematic.zip"},"Grove-Barometer Sensor BMP280 Schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer_Sensor-BMP280/res/Grove-Barometer_Sensor-BMP280-BMP280-DS001-12_Datasheet.pdf"},"BMP280 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[References]"),"  ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/Wire"},"I",(0,n.kt)("sup",null,"2"),"C how-to for Arduino"))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Intelligent alarm system made with BBG ( IoT)")),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/kevin-lee2/intelligent-alarm-system-made-with-bbg-iot-5fdccd/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Monitoring System for Smart Crops")," Design and build a system to monitor the status of your crops using the Netduino 3 WiFi."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/gabogiraldo/monitoring-system-for-smart-crops-dfa4bd/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."))}u.isMDXComponent=!0}}]);
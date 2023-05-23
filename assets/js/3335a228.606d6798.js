"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73353],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},79729:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Temp and Humi Sensor(SHT31)",title:"Grove - Temp and Humi Sensor(SHT31)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-TempAndHumi_Sensor-SHT31",last_update:{date:"12/30/2022",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31",id:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31",title:"Grove - Temp and Humi Sensor(SHT31)",description:"Grove - Temp and Humi Sensor(SHT31)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temp&Humi",slug:"/Grove-TempAndHumi_Sensor-SHT31",permalink:"/custom/Grove-TempAndHumi_Sensor-SHT31",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TempAndHumi_Sensor-SHT31.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672358400,formattedLastUpdatedAt:"Dec 30, 2022",frontMatter:{description:"Grove - Temp and Humi Sensor(SHT31)",title:"Grove - Temp and Humi Sensor(SHT31)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-TempAndHumi_Sensor-SHT31",last_update:{date:"12/30/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - AHT20 I2C Industrial Grade Temperature&Humidity Sensor",permalink:"/custom/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor"},next:{title:"Grove - I2C High Accuracy Temp&Humi Sensor(SHT35)",permalink:"/custom/Grove-I2C_High_Accuracy_Temp%26Humi_Sensor-SHT35"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/main_new.jpg"})),(0,n.kt)("p",null,"Grove - Temp&Humi Sensor(SHT31) is a highly reliable, accurate, quick response and integrated temperature & humidity sensor. The sensor(chip) used in the module is designed with Sensirion's CMOSens",(0,n.kt)("sup",null,"\xae")," technology. The chip is well calibrated, linearized and compensated for digital output."),(0,n.kt)("p",null,"The typical accuracy of this module can be ",(0,n.kt)("strong",{parentName:"p"},"\xb12%RH")," (for relative humidity) and ",(0,n.kt)("strong",{parentName:"p"},"\xb10.3\xb0C")," (for temperature). This module is compatible with 3.3 Volts and 5 Volts and hence does not require a voltage level shifter. This module communicates using with I",(0,n.kt)("sup",null,"2"),"C serial bus and can work up to 1 MHz speed. We also have provided a highly abstracted library to make this product more easier to use."),(0,n.kt)("p",null,"Using the sensor is easy. For ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Seeeduino-V42-p-2517.html?cPath=6_7"},"Seeeduino")," (compliant with Arduino), just connect this breakout board with the main control board via ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable"),". Then use the provided library and example/demo code available at GitHub to get your data. If you're using an Arduino without a Base Shield, simply connect the VIN pin to the 5V voltage pin, GND to ground, SCL to I2C Clock (Analog 5) and SDA to I2C Data (Analog 4)."),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/MwLEawbP0ZU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html?queryID=77b7436dc353691bf84e59c7496c9f8f&objectID=35&indexName=bazaar_retailer_products",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:"{4}"},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Temperature&Humidity Sensor(SHT31) V1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Jan 2016")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Highly reliable, accurate and quick response time"),(0,n.kt)("li",{parentName:"ul"},"Grove compatible and easy to use"),(0,n.kt)("li",{parentName:"ul"},"Well calibrated, linearized, compensated for digital output"),(0,n.kt)("li",{parentName:"ul"},"Highly abstracted development library"),(0,n.kt)("li",{parentName:"ul"},"I2C Address  0x44")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).\n"))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input voltage (VCC)"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3 volts or 5 volts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I/O Logic Level"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3 volts or 5 volts based on VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,n.kt)("td",{parentName:"tr",align:null},"100 \u03bcA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40\u2013125 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Temperature Sensor Range"),(0,n.kt)("td",{parentName:"tr",align:null},"-40\u2013125 \u2103, with \xb10.3\xb0C accuracy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Humidity Sensor Range"),(0,n.kt)("td",{parentName:"tr",align:null},"0% - 100%(Relative Humidity), with \xb12% accuracy")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sensor Chip"),(0,n.kt)("td",{parentName:"tr",align:null},"SHT31(",(0,n.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip"},"Datasheet"),")")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"I",(0,n.kt)("sup",null,"2"),"C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"4 g (for breakout board), 9 g for whole package each piece")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,n.kt)("td",{parentName:"tr",align:null},"40(length)\xd720(width) mm")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temp&Hum Sensor(SHT31)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-I2C-High-Accuracy-Temp-Humi-Sensor-SHT35.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - Temperature&Humidity Sensor(SHT31) to I2C port of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/arduino_connect.jpg"})),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/Grove-TempAndHumi_Sensor-SHT31-components_1200_s.jpg"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"}," Do not touch, shake or let this product vibrate while using. Otherwise, it will affect the accuracy of data measured.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly Grove - Temperature&Humidity Sensor(SHT31) to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature&Humidity Sensor(SHT31)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor"},"Library")," from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open a new sketch, and copy the following code into the new sketch."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},'#include <Arduino.h>\n#include <Wire.h>\n#include "SHT31.h"\n\nSHT31 sht31 = SHT31();\n\nvoid setup() {  \n  Serial.begin(9600);\n  while(!Serial);\n  Serial.println("begin...");  \n  sht31.begin();  \n}\n\nvoid loop() {\n  float temp = sht31.getTemperature();\n  float hum = sht31.getHumidity();\n  Serial.print("Temp = "); \n  Serial.print(temp);\n  Serial.println(" C"); //The unit for  Celsius because original arduino don\'t support speical symbols\n  Serial.print("Hum = "); \n  Serial.print(hum);\n  Serial.println("%"); \n  Serial.println();\n  delay(1000);\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,n.kt)("strong",{parentName:"p"},"9600"),". If every thing goes well, you will get the results."))),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/RESULT.png"})),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Things used in this project:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temp&Hum Sensor(SHT31)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-SHT3-p-2655.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Plug the Grove Base Hat into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Connect the Grove - Temperature&Humidity Sensor (SHT31) to the ",(0,n.kt)("strong",{parentName:"li"},"I2C")," port of the Base Hat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry Pi to PC through USB cable.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/img/SHT31_Hat.jpg"})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Download the source file by cloning the grove.py library.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\ncd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Excute below command to run the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"\ncd grove.py/grove\npython grove_temperature_humidity_sensor_sht3x.py \n\n")),(0,n.kt)("p",null,"Following is the grove_temperature_humidity_sensor_sht3x.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\n\nimport time\nfrom grove.i2c import Bus\n\n\ndef CRC(data):\n    crc = 0xff\n    for s in data:\n        crc ^= s\n        for _ in range(8):\n            if crc & 0x80:\n                crc <<= 1\n                crc ^= 0x131\n            else:\n                crc <<= 1\n    return crc\n\n\nclass GroveTemperatureHumiditySensorSHT3x(object):\n\n    def __init__(self, address=0x44, bus=None):\n        self.address = address\n\n        # I2C bus\n        self.bus = Bus(bus)\n\n    def read(self):\n        # high repeatability, clock stretching disabled\n        self.bus.write_i2c_block_data(self.address, 0x24, [0x00])\n\n        # measurement duration < 16 ms\n        time.sleep(0.016)\n\n        # read 6 bytes back\n        # Temp MSB, Temp LSB, Temp CRC, Humididty MSB, Humidity LSB, Humidity CRC\n        data = self.bus.read_i2c_block_data(self.address, 0x00, 6)\n\n        if data[2] != CRC(data[:2]):\n            raise ValueError("temperature CRC mismatch")\n        if data[5] != CRC(data[3:5]):\n            raise ValueError("humidity CRC mismatch")\n\n\n        temperature = data[0] * 256 + data[1]\n        celsius = -45 + (175 * temperature / 65535.0)\n        humidity = 100 * (data[3] * 256 + data[4]) / 65535.0\n\n        return celsius, humidity\n\n\nGrove = GroveTemperatureHumiditySensorSHT3x\n\n\ndef main():\n    sensor = GroveTemperatureHumiditySensorSHT3x()\n    while True:\n        temperature, humidity = sensor.read()\n\n        print(\'Temperature in Celsius is {:.2f} C\'.format(temperature))\n        print(\'Relative Humidity is {:.2f} %\'.format(humidity))\n\n        time.sleep(1)\n\n\nif __name__ == "__main__":\n    main()\n\n\n')),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If everything goes well, you will be able to see temperature and humidity")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_temperature_humidity_sensor_sht3x.py \nTemperature in Celsius is 21.48 C\nRelative Humidity is 51.32 %\nTemperature in Celsius is 21.47 C\nRelative Humidity is 51.34 %\nTemperature in Celsius is 21.46 C\nRelative Humidity is 51.37 %\n^CTraceback (most recent call last):\n  File "grove_temperature_humidity_sensor_sht3x.py", line 95, in <module>\n    main()\n  File "grove_temperature_humidity_sensor_sht3x.py", line 91, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n\n')),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("p",null,"We have this part available in ",(0,n.kt)("a",{parentName:"p",href:"https://geppetto.seeedstudio.com/"},"geppetto"),", easy modular electronic design with Seeed and Geppeto. Build it Now. ",(0,n.kt)("a",{parentName:"p",href:"https://geppetto.seeedstudio.com/"},"geppetto.seeedstudio.com")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[EAGLE]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-v1.0_Schematics.zip"},"Grove - Temperature&Humidity Sensor(SHT31) PCB files and PDF schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-TempAndHumi_Sensor-SHT31/res/Grove-TempAndHumi_Sensor-SHT31-Datasheets.zip"},"SHT31 Sensor Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_SHT31_Temp_Humi_Sensor"},"Library and example code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[MoreReading]")," ",(0,n.kt)("a",{parentName:"li",href:"https://www.arduino.cc/en/Reference/Wire"},"I",(0,n.kt)("sup",null,"2"),"C How-to for Arduino"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MediaTek Open Source Hardware Plant Health Monitor")),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/shanek/mediatek-open-source-hardware-plant-health-monitor-3390f5/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
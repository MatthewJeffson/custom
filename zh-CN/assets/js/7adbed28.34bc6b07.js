"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=n,k=u["".concat(p,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(k,i(i({ref:t},m),{},{components:r})):a.createElement(k,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},38003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={description:"Grove - Temperature Sensor V1.2",title:"Grove - Temperature Sensor V1.2",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Temperature_Sensor_V1.2",last_update:{date:"1/3/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2",title:"Grove - Temperature Sensor V1.2",description:"Grove - Temperature Sensor V1.2",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Grove-Temperature_Sensor_V1.2",permalink:"/custom/zh-CN/Grove-Temperature_Sensor_V1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-Temperature_Sensor_V1.2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{description:"Grove - Temperature Sensor V1.2",title:"Grove - Temperature Sensor V1.2",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Temperature_Sensor_V1.2",last_update:{date:"1/3/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove-Temperature_Sensor",permalink:"/custom/zh-CN/Grove-Temperature_Sensor"},next:{title:"Grove - I2C High Accuracy Temperature Sensor(MCP9808)",permalink:"/custom/zh-CN/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808"}},p={},s=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Play With Wio Terminal (ArduPy)",id:"play-with-wio-terminal-ardupy",level:3},{value:"Hardware",id:"hardware-3",level:4},{value:"Software",id:"software-3",level:4},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View.jpg"})),(0,n.kt)("p",null,"The Grove - Temperature Sensor uses a ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf"},"Thermistor")," to detect the ambient temperature. The resistance of a thermistor will increase when the ambient temperature decreases. It's this characteristic that we use to calculate the ambient temperature. The detectable range of this sensor is -40 - 125\xbaC, and the accuracy is \xb11.5\xbaC"),(0,n.kt)("p",null,"Note: This wiki works with Grove - Temperature sensor V1.1 as well, for V1.0 please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Temperature_Sensor"},"Grove - Temperature Sensor")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:"210",height:"41",border:"0"}))),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,n.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("font",{size:4},(0,n.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,n.kt)("tr",null,(0,n.kt)("td",null,(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,n.kt)("tr",null,(0,n.kt)("td",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,n.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Voltage: 3.3 ~ 5V"),(0,n.kt)("li",{parentName:"ul"},"Zero power resistance: 100 K\u03a9"),(0,n.kt)("li",{parentName:"ul"},"Resistance Tolerance: \xb11%"),(0,n.kt)("li",{parentName:"ul"},"Operating temperature range: -40 ~ +125 \u2103"),(0,n.kt)("li",{parentName:"ul"},"Nominal B-Constant\uff1a 4250 ~ 4299K")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry"),(0,n.kt)("th",{parentName:"tr",align:null},"ArduPy"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/ArduPy-Logo.png"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"After this section, you can make Grove - Temperature Sensor V1.1/1.2 run with only few steps."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove - Temperature Sensor to port ",(0,n.kt)("strong",{parentName:"p"},"A0")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_Arduino.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove_Ultrasonic_Ranger to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A0"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Launch Arduino IDE and click ",(0,n.kt)("strong",{parentName:"li"},"File>New")," to open a new page. Copy the following code into the new page and upload. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'// Demo code for Grove - Temperature Sensor V1.1/1.2\n// Loovee @ 2015-8-26\n\n#include <math.h>\n\nconst int B = 4275;               // B value of the thermistor\nconst int R0 = 100000;            // R0 = 100k\nconst int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0\n\n#if defined(ARDUINO_ARCH_AVR)\n#define debug  Serial\n#elif defined(ARDUINO_ARCH_SAMD) ||  defined(ARDUINO_ARCH_SAM)\n#define debug  SerialUSB\n#else\n#define debug  Serial\n#endif\n\nvoid setup()\n{\n    Serial.begin(9600);\n}\n\nvoid loop()\n{\n    int a = analogRead(pinTempSensor);\n\n    float R = 1023.0/a-1.0;\n    R = R0*R;\n\n    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet\n\n    Serial.print("temperature = ");\n    Serial.println(temperature);\n\n    delay(100);\n}\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the temperature."),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_result.jpg"})),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Connect the temperature sensor to port A0 of the Base Hat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Temperature_Hat.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For step 3 you are able to connect the temperature sensor to ",(0,n.kt)("strong",{parentName:"p"},"any analog Port")," but make sure you change the command with the corresponding port number.")),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are using ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,n.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd grove.py/grove\npython3 grove_temperature_sensor.py 0\n")),(0,n.kt)("p",null,"Following is the grove_temperature_sensor.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"import sys\nimport time\nfrom grove.factory import Factory\n\n\ndef main():\n    from grove.helper import SlotHelper\n    sh = SlotHelper(SlotHelper.ADC)\n    pin = sh.argv2pin()\n\n    sensor = Factory.getTemper(\"NTC-ADC\", pin)\n\n    print('Detecting temperature...')\n    while True:\n        print('{} Celsius'.format(sensor.temperature))\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n")),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'pi@raspberrypi:~/grove.py/grove $ python3 grove_temperature_sensor.py 0\nHat Name = \'Grove Base Hat RPi\'\nDetecting temperature...\n24.7473402633 Celsius\n24.7473402633 Celsius\n24.7473402633 Celsius\n24.7112751977 Celsius\n24.7112751977 Celsius\n^CTraceback (most recent call last):\n  File "grove_temperature_sensor.py", line 53, in <module>\n    main()\n  File "grove_temperature_sensor.py", line 49, in main\n    time.sleep(1)\nKeyboardInterrupt\n')),(0,n.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You may have noticed that for the analog port, the silkscreen pin number is something like ",(0,n.kt)("strong",{parentName:"p"},"A1, A0"),", however in the command we use parameter ",(0,n.kt)("strong",{parentName:"p"},"0")," and ",(0,n.kt)("strong",{parentName:"p"},"1"),", just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.")),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,n.kt)("h4",{id:"hardware-2"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the GrovePi_Plus into Raspberry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Grove - Temperature Sensor ranger to ",(0,n.kt)("strong",{parentName:"p"},"A0")," port of GrovePi_Plus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC via USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/connect_pi.jpg"})),(0,n.kt)("h4",{id:"software-2"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this wiki we use the path ",(0,n.kt)("strong",{parentName:"p"},"~/GrovePi/")," instead of ",(0,n.kt)("strong",{parentName:"p"},"/home/pi/Desktop/GrovePi"),", you need to make sure Step 2 and Step 3 use the same path.")),(0,n.kt)("p",null,"We firmly suggest you to update the firmware, or for some sensors you may get errors.\n:::"),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are using ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,n.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Excute below commands to use the Grove - Temperature Sensor to meansure the temperature.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/GrovePi/Software/Python\nsudo python3 grove_temperature_sensor.py\n")),(0,n.kt)("p",null,"Here is the grove_temperature_sensor.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# NOTE:\n#  The sensor uses a thermistor to detect ambient temperature.\n#  The resistance of a thermistor will increase when the ambient temperature decreases.\n#\n#  There are 3 revisions 1.0, 1.1 and 1.2, each using a different model thermistor.\n#  Each thermistor datasheet specifies a unique Nominal B-Constant which is used in the calculation forumla.\n#\n#  The second argument in the grovepi.temp() method defines which board version you have connected.\n#  Defaults to '1.0'. eg.\n#   temp = grovepi.temp(sensor)        # B value = 3975\n#   temp = grovepi.temp(sensor,'1.1')  # B value = 4250\n#   temp = grovepi.temp(sensor,'1.2')  # B value = 4250\n\nimport time\nimport grovepi\n\n# Connect the Grove Temperature Sensor to analog port A0\n# SIG,NC,VCC,GND\nsensor = 0\n\nwhile True:\n    try:\n        temp = grovepi.temp(sensor,'1.2')\n        print(\"temp =\", temp)\n        time.sleep(.5)\n\n    except KeyboardInterrupt:\n        break\n    except IOError:\n        print (\"Error\")\n\n")),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~/GrovePi/Software/Python $ sudo python3 grove_temperature_sensor.py\n\n('temp =', 25.28652137917777)\n('temp =', 25.28652137917777)\n('temp =', 25.28652137917777)\n('temp =', 25.28652137917777)\n('temp =', 25.368489566400115)\n('temp =', 25.61468397498203)\n('temp =', 27.43501590142614)\n('temp =', 27.85285590636829)\n('temp =', 27.18509952680688)\n('temp =', 26.852756540240193)\n\n")),(0,n.kt)("h3",{id:"play-with-wio-terminal-ardupy"},"Play With Wio Terminal (ArduPy)"),(0,n.kt)("h4",{id:"hardware-3"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_View_little.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Temperature-Sensor-p-774.htmll"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove - Temperature Sensor to ",(0,n.kt)("strong",{parentName:"p"},"A0")," port of Wio Terminal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect the Wio Terminal to PC through USB Type-C cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/WT-temp.png"})),(0,n.kt)("h4",{id:"software-3"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/"},(0,n.kt)("strong",{parentName:"a"},"ArduPy Getting Started"))," to configure the ArduPy development environment on Wio Terminal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Make sure that the ArduPy firmware is flashed into Wio Terminal. For more information, please follow ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ArduPy/#ardupy-aip-cli-getting-started"},(0,n.kt)("strong",{parentName:"a"},"here")),"."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aip build\naip flash\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Copy the following code and save it as ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-temp.py"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'from machine import Pin, ADC\nfrom machine import LCD\nfrom machine import Sprite\nimport time, math\n\nraw = ADC(Pin(13))\nlcd = LCD()\nspr = Sprite(lcd) # Create a buff\nB = 4275 # B value of the thermistor\nR0 = 100000 # R0 = 100k\n\ndef temp(reading):\n    R = 1023.0 / reading - 1.0\n    R = R0*R \n    temperature = 1.0/(math.log(R/R0)/B+1/298.15)-273.15 # Convert to temperature via datasheet\n    return temperature\n\ndef main():\n    spr.createSprite(320, 240)\n    while True:\n        spr.setTextSize(2)\n        spr.fillSprite(spr.color.BLACK)\n        spr.setTextColor(lcd.color.ORANGE)\n        spr.drawString("Temperature Reading", 45, 10)\n        spr.drawFastHLine(40, 35, 240, lcd.color.DARKGREY)\n        spr.setTextColor(lcd.color.WHITE)\n        spr.drawString("- ", 20, 50)\n        spr.drawFloat(temp(raw.read()), 3, 40,50)\n        spr.drawString("C", 120, 50)\n        spr.pushSprite(0,0)\n        time.sleep_ms(500)\n\n        print("Temperature: ", temp(raw.read()), "C")\n\nif __name__ == "__main__":\n    main()\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Save the ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-temp.py")," in a location that you know. Run the following command and ",(0,n.kt)("strong",{parentName:"li"},"replace")," ",(0,n.kt)("inlineCode",{parentName:"li"},"<YourPythonFilePath>")," with your ",(0,n.kt)("inlineCode",{parentName:"li"},"ArduPy-temp.py")," location.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'aip shell -n -c "runfile <YourPythonFilePath>"\n# Example:\n# aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," We will see the temperature value display on terminal as below, and displaying on the Wio Terminal LCD screen.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'ansonhe@Ansons-Macbook-Pro ~:aip shell -n -c "runfile /Users/ansonhe/Desktop/ArduPy-temp.py"\nPositional argument (/dev/cu.usbmodem141101) takes precedence over --open.\nConnected to ardupy\nTemperature:  28.08603 C\nTemperature:  28.50415 C\nTemperature:  28.16953 C\nTemperature:  28.25308 C\nTemperature:  28.08603 C\nTemperature:  28.16953 C\nTemperature:  28.08603 C\nTemperature:  28.16953 C\nTemperature:  28.33671 C\nTemperature:  28.16953 C\nTemperature:  28.25308 C\n')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Ardupy-temp.png"})),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"If you want to know how the algorithm of temperature coming, please refer to the below image:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/img/Grove_Temperature_Sensor_Basic_Characteristics.jpg"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.zip"},"Grove - Temperature Sensor v1.1 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/Grove_-_Temperature_sensor_v1.1.pdf"},"Grove - Temperature Sensor v1.1.PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Temperature_Sensor_V1.2/res/NCP18WF104F03RC.pdf"},"Temperature Sensor datasheet"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Temperature sensor Grove module"),":"),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/wjL7xOGqAqg",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/vI9pkmiK8EM",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
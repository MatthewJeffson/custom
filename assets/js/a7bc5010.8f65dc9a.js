"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[73532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},98908:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={description:"Grove - Barometer (High-Accuracy)",title:"Grove - Barometer (High-Accuracy)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Barometer-High-Accuracy",last_update:{date:"1/4/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer-High-Accuracy",id:"Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer-High-Accuracy",title:"Grove - Barometer (High-Accuracy)",description:"Grove - Barometer (High-Accuracy)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer-High-Accuracy.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Barometer",slug:"/Grove-Barometer-High-Accuracy",permalink:"/custom/Grove-Barometer-High-Accuracy",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Barometer/Grove-Barometer-High-Accuracy.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Barometer (High-Accuracy)",title:"Grove - Barometer (High-Accuracy)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Barometer-High-Accuracy",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Sensor - Barometer",permalink:"/custom/Sensor_barometer"},next:{title:"Grove - Barometer Sensor",permalink:"/custom/Grove-Barometer_Sensor"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"References",id:"references",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/main.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"This Grove - Barometer (High-Accuracy) Sensor features a HP206C high-accuracy chip to detect barometric pressure ,Altimeter and temperature. It can widely measure pressure ranging from 300mbar~1200mbar, with a super high accuracy of 0.01mbar(0.1m) in ultra-high resolution mode.The chip only accepts 1.8V to 3.6V input voltage. However, with outer circuit added, this module becomes compatible with 3.3V and 5V. Therefore, it can be used on Arduino/Seeeduino or Seeeduino Stalker without modification. It is designed to be connected directly to a micro-controller via the I2C bus."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital two wire (I2C) interface"),(0,i.kt)("li",{parentName:"ul"},"Command-based Reading, Compensated (Optional)"),(0,i.kt)("li",{parentName:"ul"},"Programmable Events and Interrupt Controls"),(0,i.kt)("li",{parentName:"ul"},"Full Data Compensation"),(0,i.kt)("li",{parentName:"ul"},"Wide barometric pressure range"),(0,i.kt)("li",{parentName:"ul"},"Flexible supply voltage range"),(0,i.kt)("li",{parentName:"ul"},"Ultra-low power consumption"),(0,i.kt)("li",{parentName:"ul"},"Altitude Resolution down to 0.01 meter"),(0,i.kt)("li",{parentName:"ul"},"Temperature measurement included"),(0,i.kt)("li",{parentName:"ul"},"I2C Address: 0x76")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If you want to use multiplue I2C devices, please refer to [Software I2C](https://wiki.seeedstudio.com/Arduino_Software_I2C_user_guide/).\n"))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"High Precision Mobile Altimeter / Barometer"),(0,i.kt)("li",{parentName:"ul"},"Industrial Pressure and Temperature Sensor System"),(0,i.kt)("li",{parentName:"ul"},"Automotive Systems"),(0,i.kt)("li",{parentName:"ul"},"Personal Electronics Altimetry"),(0,i.kt)("li",{parentName:"ul"},"Adventure and Sports watches"),(0,i.kt)("li",{parentName:"ul"},"Medical Gas Control System"),(0,i.kt)("li",{parentName:"ul"},"Weather Station Equipment"),(0,i.kt)("li",{parentName:"ul"},"Indoor Navigation and Map Assist"),(0,i.kt)("li",{parentName:"ul"},"Heating, Ventilation, Air Conditioning")),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Item"),(0,i.kt)("th",{scope:"col"},"Min"),(0,i.kt)("th",{scope:"col"},"Typical"),(0,i.kt)("th",{scope:"col"},"Max"),(0,i.kt)("th",{scope:"col"},"Unit")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Voltage"),(0,i.kt)("td",null,"3.3"),(0,i.kt)("td",null,"5"),(0,i.kt)("td",null,"5.5"),(0,i.kt)("td",null,"VDC")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Current"),(0,i.kt)("td",null,"635"),(0,i.kt)("td",null,"/"),(0,i.kt)("td",null,"1100"),(0,i.kt)("td",null,"uA")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Pressure Range"),(0,i.kt)("td",null,"300"),(0,i.kt)("td",null,"/"),(0,i.kt)("td",null,"1200"),(0,i.kt)("td",null,"hPa")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Faster I2C data transfer"),(0,i.kt)("td",null,"/"),(0,i.kt)("td",null,"/"),(0,i.kt)("td",null,"10"),(0,i.kt)("td",null,"MHz")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Dimension"),(0,i.kt)("td",{colspan:"3"},"20.4*41.8*9.7"),(0,i.kt)("td",null,"mm")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Weight"),(0,i.kt)("td",{colspan:"3"},"/"),(0,i.kt)("td",null,"g"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/dimensions.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,i.kt)("p",null,"Barometric condition is one of the criteria used to predict coming change in weather and altitude above sea level. Here is a demo to show you how to read the barometric data from this Grove - Barometer Sensor."),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-Barometer-High-Accuracy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html"},"Get One Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Barometer-High-Accuracy to port ",(0,i.kt)("strong",{parentName:"li"},"I2C")," of Grove-Base Shield."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_ardu.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"seeeduino_v4"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-Barometer-High-Accuracy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V"),(0,i.kt)("td",{parentName:"tr",align:null},"VCC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"SDA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Barometer_HP20x"},"library")," from Github."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Create a new Arduino sketch and paste the codes below to it or open the code directly by the path:File -> Example ->Barometer_Sensor->Barometer_Sensor."),(0,i.kt)("p",null,"Here is the code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/*\n* Demo name  ?: HP20x_dev demo\n* Usage      ?: I2C PRECISION BAROMETER AND ALTIMETER [HP206C hopeRF]\n* Author     ?: Oliver Wang from Seeed Studio\n* Version    ?: V0.1\n* Change log ?: Add kalman filter 2014/04/04\n*/\n\n#include <HP20x_dev.h>\n#include <KalmanFilter.h>\n\n#include "Arduino.h"\n#include "Wire.h"\n\nunsigned char ret = 0;\n\n    /* Instance */\nKalmanFilter t_filter;    //temperature filter\nKalmanFilter p_filter;    //pressure filter\nKalmanFilter a_filter;    //altitude filter\n\n\nvoid setup()\n{\n    Serial.begin(9600);        // start serial for output\n\n    Serial.println("****HP20x_dev demo by seeed studio****\\n");\n    Serial.println("Calculation formula: H = [8.5(101325-P)]/100 \\n");\n      /* Power up,delay 150ms,until voltage is stable*/\n    delay(150);\n      /* Reset HP20x_dev*/\n    HP20x.begin();\n    delay(100);\n\n      /* Determine HP20x_dev is available or not*/\n    ret = HP20x.isAvailable();\n    if(OK_HP20X_DEV == ret)\n    {\n        Serial.println("HP20x_dev is available.\\n");\n    }\n    else\n    {\n        Serial.println("HP20x_dev isn\'t available.\\n");\n    }\n\n}\n\n\nvoid loop()\n{\n    char display[40];\n    if(OK_HP20X_DEV == ret)\n    {\n        Serial.println("------------------\\n");\n        long Temper = HP20x.ReadTemperature();\n        Serial.println("Temper:");\n        float t = Temper/100.0;\n        Serial.print(t);\n        Serial.println("C.\\n");\n        Serial.println("Filter:");\n        Serial.print(t_filter.Filter(t));\n        Serial.println("C.\\n");\n\n        long Pressure = HP20x.ReadPressure();\n        Serial.println("Pressure:");\n        t = Pressure/100.0;\n        Serial.print(t);\n        Serial.println("hPa.\\n");\n        Serial.println("Filter:");\n        Serial.print(p_filter.Filter(t));\n        Serial.println("hPa\\n");\n\n        long Altitude = HP20x.ReadAltitude();\n        Serial.println("Altitude:");\n        t = Altitude/100.0;\n        Serial.print(t);\n        Serial.println("m.\\n");\n        Serial.println("Filter:");\n        Serial.print(a_filter.Filter(t));\n        Serial.println("m.\\n");\n        Serial.println("------------------\\n");\n        delay(1000);\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude."),(0,i.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,i.kt)("h4",{id:"hardware-1"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,i.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-Barometer-High-Accuracy"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Barometer-(High-Accuracy)-p-1865.html"},"Get One Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Barometer-High-Accuracy  to ",(0,i.kt)("strong",{parentName:"li"},"I2C")," port of GrovePi_Plus."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/with_rpi.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h4",{id:"software-1"},"Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,i.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use this sensor")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/GrovePi/Software/Python/grove_barometer_sensors/high_accuracy_hp206c_barometer\npython high_accuracy_barometer_example.py\n")),(0,i.kt)("p",null,"Here is the code :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'#!/usr/bin/env python\n#\n# GrovePi Example for using the Grove - Barometer (High-Accuracy)(https://www.seeedstudio.com/depot/Grove-Barometer-HighAccuracy-p-1865.html\n#\n# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi\n#\n# Have a question about this library?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi\n#\n# This library is derived from the Arduino library written by Oliver Wang for SeeedStudio (https://github.com/Seeed-Studio/Grove_Barometer_HP20x/tree/master/HP20x_dev)\n\'\'\'\n## License\n\nThe MIT License (MIT)\n\nGrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.\nCopyright (C) 2017  Dexter Industries\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\'\'\'\nimport hp206c\nh= hp206c.hp206c()\n\nret=h.isAvailable()\nif h.OK_HP20X_DEV == ret:\n    print("HP20x_dev is available.")\nelse:\n    print("HP20x_dev isn\'t available.")\n\ntemp=h.ReadTemperature()\npressure=h.ReadPressure()\naltitude=h.ReadAltitude()\nprint("Temperature\\t: %.2f C\\nPressure\\t: %.2f hPa\\nAltitude\\t: %.2f m" %(temp,pressure,altitude))\n')),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("p",null,"The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/img/Pressure_and_Altitude.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High-Accuracy_v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/Grove_Barometer_High-Accuracy_v1.0_sch_pcb.zip"},"Grove_Barometer_High-Accuracy_v1.0_sch_pcb Eagle File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Barometer-High-Accuracy/res/HP206C_Datasheet.pdf"},"HP206C Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Barometer_HP20x"},"Github repository for Grove","_","Barometer","_","HP20x with arduino"))),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Smart Crops"),": Implementing IoT in Conventional Agriculture!\nOur mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium."),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,i.kt)("p",null,"With the SenseCAP ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,i.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);
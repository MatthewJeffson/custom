"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44132],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={description:"This article focuses on the use of the Grove SGP41 sensor.",title:"Grove -Smart Air Quality Sensor (SGP41)",keywords:["SGP41"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove-smart-air-quality-sensor-sgp41",last_update:{date:"5/11/2023",author:"Stephen Lo"}},o="Grove -Smart Air Quality Sensor (SGP41)",s={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-smart_air_quality_sensor",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-smart_air_quality_sensor",title:"Grove -Smart Air Quality Sensor (SGP41)",description:"This article focuses on the use of the Grove SGP41 sensor.",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-smart_air_quality_sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/grove-smart-air-quality-sensor-sgp41",permalink:"/custom/grove-smart-air-quality-sensor-sgp41",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-smart_air_quality_sensor.md",tags:[],version:"current",lastUpdatedBy:"Stephen Lo",lastUpdatedAt:1683763200,formattedLastUpdatedAt:"May 11, 2023",frontMatter:{description:"This article focuses on the use of the Grove SGP41 sensor.",title:"Grove -Smart Air Quality Sensor (SGP41)",keywords:["SGP41"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/grove-smart-air-quality-sensor-sgp41",last_update:{date:"5/11/2023",author:"Stephen Lo"}},sidebar:"ProductSidebar",previous:{title:"Grove - CO2 Sensor",permalink:"/custom/Grove-CO2_Sensor"},next:{title:"Grove-VOC and eCO2 Gas Sensor(SGP30)",permalink:"/custom/Grove-VOC_and_eCO2_Gas_Sensor-SGP30"}},l={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Materials required",id:"materials-required",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grove--smart-air-quality-sensor-sgp41"},"Grove -Smart Air Quality Sensor (SGP41)"),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg",style:{width:600,height:"auto"}})),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html?queryID=3ac9c3a1ed9e1a56a66b142e8282868a&objectID=5687&indexName=bazaar_retailer_products"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("br",null),(0,i.kt)("p",null,"The Grove - Smart Air Quality Sensor (SGP41) is a digital gas sensor module from the Grove series. It features a 4-pin Grove interface that allows users to easily connect the sensor to a microcontroller. The module supports both 3.3V and 5V power supply, making it flexible."),(0,i.kt)("p",null,"The SGP41 digital gas sensor uses Sensirion's CMOSens\xae technology, which offers a complete and easy-to-use sensor system on a single chip. It can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air and provides digital output signals. Additionally, this sensor has outstanding long-term stability and lifetime."),(0,i.kt)("p",null,"The Grove - Smart Air Quality Sensor (SGP41) module is compact and suitable for applications with limited space. It also has high reliability and reproducibility. If you need to measure indoor air quality, consider using our Grove - Air Quality Sensor (SGP41) module!"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"We've released the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Sensor_gas/"},"Seeed Gas Sensor Selection Guide"),", it will help you choose the gas sensor that best suits your needs.")),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital gas sensor: The SGP41 is a digital gas sensor that can measure the concentration of volatile organic compounds (VOCs) and nitrogen oxides (NOx) in indoor air."),(0,i.kt)("li",{parentName:"ul"},"CMOSens\xae technology: The SGP41 uses Sensirion's CMOSens\xae technology, which offers a complete and easy-to-use sensor system on a single chip."),(0,i.kt)("li",{parentName:"ul"},"Long-term stability: The SGP41 has outstanding long-term stability and lifetime, making it ideal for applications that require continuous monitoring of indoor air quality."),(0,i.kt)("li",{parentName:"ul"},"Digital output signals: The SGP41 provides digital output signals, which makes it easy to integrate with microcontrollers and other digital systems."),(0,i.kt)("li",{parentName:"ul"},"Small form factor: The SGP41 is very compact and suitable for applications with limited space. It features a 4-pin Grove interface that allows users to easily connect the sensor to a microcontroller."),(0,i.kt)("li",{parentName:"ul"},"Flexible power supply: The module supports both 3.3V and 5V power supply, making it very flexible and easy to use in different applications."),(0,i.kt)("li",{parentName:"ul"},"High reliability and reproducibility: Sensirion's state-of-the-art production process guarantees high reproducibility and reliability of the SGP41 module.")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sensing technology: MOx-based gas sensor for air quality applications"),(0,i.kt)("li",{parentName:"ul"},"Gas detection: VOC and NOx measurements"),(0,i.kt)("li",{parentName:"ul"},"Interface: I2C interface with digital output signals"),(0,i.kt)("li",{parentName:"ul"},"Power consumption: Low power consumption of 3.0 mA at 3.3 V"),(0,i.kt)("li",{parentName:"ul"},"Operating temperature range: -40\xb0C to +85\xb0C"),(0,i.kt)("li",{parentName:"ul"},"Humidity range: 0% to 100% RH (non-condensing)"),(0,i.kt)("li",{parentName:"ul"},"Response time: <10 seconds for VOCs and <60 seconds for NOx"),(0,i.kt)("li",{parentName:"ul"},"Accuracy: \xb115% for VOCs and \xb150 ppb for NOx (at standard conditions)")),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Indoor air quality monitoring: The SGP41 is ideal for monitoring indoor air quality in homes, offices, schools, and other indoor environments."),(0,i.kt)("li",{parentName:"ul"},"Air purifiers: The SGP41 can be integrated into air purifiers to detect and remove harmful gases from the air."),(0,i.kt)("li",{parentName:"ul"},"Demand-controlled ventilation systems: The SGP41 can be used in demand-controlled ventilation systems to adjust the ventilation rate based on the level of pollutants in the air."),(0,i.kt)("li",{parentName:"ul"},"Smart homes: The SGP41 can be integrated into smart home systems to provide real-time information about indoor air quality and trigger actions based on this information."),(0,i.kt)("li",{parentName:"ul"},"Industrial applications: The SGP41 can be used in industrial applications such as chemical plants, refineries, and manufacturing facilities to monitor indoor air quality and ensure worker safety."),(0,i.kt)("li",{parentName:"ul"},"Environmental monitoring: The SGP41 can be used for environmental monitoring of VOCs and NOx emissions from factories, vehicles, and other sources.")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("h3",{id:"pin-map"},"Pin Map"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-SGP41/sgp41_hw.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("h4",{id:"materials-required"},"Materials required"),(0,i.kt)("div",{class:"table-center"},(0,i.kt)("table",{align:"center"},(0,i.kt)("tr",null,(0,i.kt)("th",null,"Seeeduino V4.3"),(0,i.kt)("th",null,"Grove Base Shield V2.0"),(0,i.kt)("th",null,"Grove - Smart Air Quality Sensor (SGP41)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",style:{width:250,height:"auto"}}))),(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",style:{width:250,height:"auto"}}))),(0,i.kt)("td",null,(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-SGP41/1.jpg",style:{width:250,height:"auto"}})))),(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f")))))),(0,i.kt)("td",null,(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Air-Quality-Sensor-SGP41-p-5687.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"1"),". Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"2"),". Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Smart Air Quality Sensor (SGP41) to ",(0,i.kt)("strong",{parentName:"p"},"I2C")," port of Grove Base Shield.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove - Smart Air Quality Sensor (SGP41) to Seeeduino as below.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove-VOC and eCO2 Gas Sensor(SGP30)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V"),(0,i.kt)("td",{parentName:"tr",align:null},"Red")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Black")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"White")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the dependency libraries from Github."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"arduino-core Library"),":"),(0,i.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"github_item",href:"https://github.com/Sensirion/arduino-core"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,i.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"}))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"arduino-i2c-sgp41 Library"),":"),(0,i.kt)("div",{class:"github_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"github_item",href:"https://github.com/Sensirion/arduino-i2c-sgp41"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Download the Libraries")))," ",(0,i.kt)("svg",{"aria-hidden":"true",focusable:"false",role:"img",className:"mr-2",viewBox:"-3 10 9 1",width:16,height:16,fill:"currentColor",style:{textAlign:"center",display:"inline-block",userSelect:"none",verticalAlign:"text-bottom",overflow:"visible"}},(0,i.kt)("path",{d:"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"}))))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," After downloading and installing the library correctly, you can find an example program named ",(0,i.kt)("inlineCode",{parentName:"p"},"exampleUsage.ino")," in the examples folder. This program is designed for the SGP41 sensor."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <SensirionI2CSgp41.h>\n#include <Wire.h>\n\nSensirionI2CSgp41 sgp41;\n\n// time in seconds needed for NOx conditioning\nuint16_t conditioning_s = 10;\n\nvoid setup() {\n\n    Serial.begin(115200);\n    while (!Serial) {\n        delay(100);\n    }\n\n    Wire.begin();\n\n    uint16_t error;\n    char errorMessage[256];\n\n    sgp41.begin(Wire);\n\n    uint16_t serialNumber[3];\n    uint8_t serialNumberSize = 3;\n\n    error = sgp41.getSerialNumber(serialNumber, serialNumberSize);\n\n    if (error) {\n        Serial.print("Error trying to execute getSerialNumber(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("SerialNumber:");\n        Serial.print("0x");\n        for (size_t i = 0; i < serialNumberSize; i++) {\n            uint16_t value = serialNumber[i];\n            Serial.print(value < 4096 ? "0" : "");\n            Serial.print(value < 256 ? "0" : "");\n            Serial.print(value < 16 ? "0" : "");\n            Serial.print(value, HEX);\n        }\n        Serial.println();\n    }\n\n    uint16_t testResult;\n    error = sgp41.executeSelfTest(testResult);\n    if (error) {\n        Serial.print("Error trying to execute executeSelfTest(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else if (testResult != 0xD400) {\n        Serial.print("executeSelfTest failed with error: ");\n        Serial.println(testResult);\n    }\n}\n\nvoid loop() {\n    uint16_t error;\n    char errorMessage[256];\n    uint16_t defaultRh = 0x8000;\n    uint16_t defaultT = 0x6666;\n    uint16_t srawVoc = 0;\n    uint16_t srawNox = 0;\n\n    delay(1000);\n\n    if (conditioning_s > 0) {\n        // During NOx conditioning (10s) SRAW NOx will remain 0\n        error = sgp41.executeConditioning(defaultRh, defaultT, srawVoc);\n        conditioning_s--;\n    } else {\n        // Read Measurement\n        error = sgp41.measureRawSignals(defaultRh, defaultT, srawVoc, srawNox);\n    }\n\n    if (error) {\n        Serial.print("Error trying to execute measureRawSignals(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("SRAW_VOC:");\n        Serial.print(srawVoc);\n        Serial.print("\\t");\n        Serial.print("SRAW_NOx:");\n        Serial.println(srawNox);\n    }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo code.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Open the ",(0,i.kt)("strong",{parentName:"li"},"Serial Monitor")," of Arduino IDE by click ",(0,i.kt)("strong",{parentName:"li"},"Tool-> Serial Monitor"),".")),(0,i.kt)("div",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-SGP41/2.png",style:{width:700,height:"auto"}})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-SGP41/AIR_QUALITY_SENSOR(SGP41)_sch&pcb.zip"},"Grove - Smart Air Quality Sensor (SGP41) SCH&PCB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf"},"SGP41 Datasheet"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issues into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
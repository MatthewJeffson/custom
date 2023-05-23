"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63409],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),c=i,h=d["".concat(l,".").concat(c)]||d[c]||m[c]||a;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},71043:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={description:"Grove SEN5X All in One",title:"Grove SEN5X All in One",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_SEN5X_All_in_One",last_update:{date:"1/29/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/All_in_one/Grove_SEN5X_All_in_One",id:"Sensor/Grove/Grove_Sensors/All_in_one/Grove_SEN5X_All_in_One",title:"Grove SEN5X All in One",description:"Grove SEN5X All in One",source:"@site/docs/Sensor/Grove/Grove_Sensors/All_in_one/Grove_SEN5X_All_in_One.md",sourceDirName:"Sensor/Grove/Grove_Sensors/All_in_one",slug:"/Grove_SEN5X_All_in_One",permalink:"/custom/zh-CN/Grove_SEN5X_All_in_One",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/All_in_one/Grove_SEN5X_All_in_One.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674950400,formattedLastUpdatedAt:"2023\u5e741\u670829\u65e5",frontMatter:{description:"Grove SEN5X All in One",title:"Grove SEN5X All in One",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_SEN5X_All_in_One",last_update:{date:"1/29/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove Ecosystem Introduction",permalink:"/custom/zh-CN/Grove_System"},next:{title:"Grove - Temperature Humidity Pressure Gas Sensor(BME680)",permalink:"/custom/zh-CN/Grove-Temperature_Humidity_Pressure_Gas_Sensor_BME680"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Feature",id:"feature",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Equipment Installation",id:"equipment-installation",level:3},{value:"Environmental Preparation",id:"environmental-preparation",level:3},{value:"Arduino Library Overview",id:"arduino-library-overview",level:2},{value:"Function",id:"function",level:3},{value:"Installation",id:"installation",level:3},{value:"Arduino Example",id:"arduino-example",level:2},{value:"Demo 1 Sense 4 types\xa0of\xa0PM\xa0and 4 primary\xa0ambeit\xa0signals",id:"demo-1-sense-4-typesofpmand-4-primaryambeitsignals",level:3},{value:"Materials Required",id:"materials-required",level:4},{value:"<strong>Result</strong>",id:"result",level:4},{value:"Python Package Overview",id:"python-package-overview",level:2},{value:"Function",id:"function-1",level:3},{value:"Raspberry Pi Example",id:"raspberry-pi-example",level:2},{value:"Demo 1 Apply the function example with Raspberry Pi",id:"demo-1-apply-the-function-example-with-raspberry-pi",level:3},{value:"Materials Required",id:"materials-required-1",level:4},{value:"<strong>Result</strong>",id:"result-1",level:4},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"})),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Grove-all in one enviromental sensor\xa0SEN54/SEN55\xa0is an\xa0integrated\xa0Grove ambient sensor, assembling 8 types of data signal output, sensing in high accuracy and operating for up to 10 years,\xa0borned for HVAC(Heating, Ventilation and Air Conditioning) and air quality long years detecting applications. In this wiki, we will introduce you how to utilize it while using Arduino and Raspberry Pi tools."),(0,i.kt)("h3",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Conperhensive environmental sensing\xa0functionality: Support PM\xa0(particulate matter), VOC\xa0(Volatile\xa0Organic Compounds), RH\xa0(Relative Humidity), Temp\xa0(temperature) all 5 environmental data signal continuously sensing"),(0,i.kt)("li",{parentName:"ul"},"One driver for up to 7/8 data signals: Deliver 4 types\xa0of\xa0PM\xa0and 4 primary\xa0ambeit\xa0signals\xa0through\xa0IIC\xa0function"),(0,i.kt)("li",{parentName:"ul"},"One wire for all data output: Represent Grove family simplified\xa0connection for only one Grove cable required between the sensor and the single\xa0board"),(0,i.kt)("li",{parentName:"ul"},"Superior sensing accuracy: Calibrate full digial signals to output"),(0,i.kt)("li",{parentName:"ul"},"Superior\xa0operating lifetime:\xa0Maintain\xa0fine performance up\xa0to\xa010 years"),(0,i.kt)("li",{parentName:"ul"},"Three\xa0modes available for deploying with\xa0the edge: Set up Idle Mode and RHT/Gas-Only Measurement Mode\xa0for low cost application\xa0where\xa0Measurement Mode is for full fcuntion")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Grove-all in one enviromental sensor\xa0SEN54/SEN55 inherit Grove Series fine features as it can be drectly applied through Grove IIC interface."),(0,i.kt)("h3",{id:"equipment-installation"},"Equipment Installation"),(0,i.kt)("p",null,"Connect with Grove-all in one enviromental sensor\xa0SEN54/SEN55 with Grove cable."),(0,i.kt)("h3",{id:"environmental-preparation"},"Environmental Preparation"),(0,i.kt)("p",null,"Since we use Arduino and Raspberry Pi here, it is required to run the module on the installed system:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"Arduino")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Raspberry_Pi_3_Model_B/"},"Raspberry Pi"))),(0,i.kt)("h2",{id:"arduino-library-overview"},"Arduino Library Overview"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,i.kt)("p",null,"There are two libraries required to install while using the Arduino:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sensirion/arduino-i2c-sen5x"},"arduino-i2c-sen5x"),"(Main function of Grove-all in one enviromental sensor\xa0SEN54/SEN55)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sensirion/arduino-core"},"arduino-core"),"(Core file / Dependencies)")),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("p",null,"Before we get started developing a sketch, let's look at the available functions of the library."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Serial.begin(115200)")," \u2014\u2014 When the upload process has finished, open the Serial Monitor or Serial Plotter via the Tools menu to observe the measurement values. Note that the Baud Rate in the corresponding window has to be set to 115200 baud")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,i.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,i.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"})),(0,i.kt)("h2",{id:"arduino-example"},"Arduino Example"),(0,i.kt)("p",null,"Now that we have our library installed and we understand the basic functions, let's run some examples for our Grove-all in one enviromental sensor\xa0SEN54/SEN55 to see how it behaves."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Hardware Connection."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," You need to Install an Arduino Software."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Launch the Arduino application."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,i.kt)("h3",{id:"demo-1-sense-4-typesofpmand-4-primaryambeitsignals"},"Demo 1 Sense 4 types\xa0of\xa0PM\xa0and 4 primary\xa0ambeit\xa0signals"),(0,i.kt)("p",null,"This demo can detect 4 types of PM\xa0(particulate matter), VOC\xa0(Volatile\xa0Organic Compounds), RH\xa0(Relative Humidity), Temp\xa0(temperature) and then display on the monitor, showing whether the place where the moudle mounted is health."),(0,i.kt)("h4",{id:"materials-required"},"Materials Required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"SEN54/SEN55"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{210}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN54-p-5374.html"},"Get ONE Now"))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'\n/*\n * I2C-Generator: 0.3.0\n * Yaml Version: 2.1.3\n * Template Version: 0.7.0-112-g190ecaa\n */\n/*\n * Copyright (c) 2021, Sensirion AG\n * All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are met:\n *\n * * Redistributions of source code must retain the above copyright notice, this\n *   list of conditions and the following disclaimer.\n *\n * * Redistributions in binary form must reproduce the above copyright notice,\n *   this list of conditions and the following disclaimer in the documentation\n *   and/or other materials provided with the distribution.\n *\n * * Neither the name of Sensirion AG nor the names of its\n *   contributors may be used to endorse or promote products derived from\n *   this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"\n * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE\n * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE\n * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR\n * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF\n * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS\n * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN\n * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)\n * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE\n * POSSIBILITY OF SUCH DAMAGE.\n */\n\n#include <Arduino.h>\n#include <SensirionI2CSen5x.h>\n#include <Wire.h>\n\n// The used commands use up to 48 bytes. On some Arduino\'s the default buffer\n// space is not large enough\n#define MAXBUF_REQUIREMENT 48\n\n#if (defined(I2C_BUFFER_LENGTH) &&                 \\\n     (I2C_BUFFER_LENGTH >= MAXBUF_REQUIREMENT)) || \\\n    (defined(BUFFER_LENGTH) && BUFFER_LENGTH >= MAXBUF_REQUIREMENT)\n#define USE_PRODUCT_INFO\n#endif\n\nSensirionI2CSen5x sen5x;\n\nvoid printModuleVersions() {\n    uint16_t error;\n    char errorMessage[256];\n\n    unsigned char productName[32];\n    uint8_t productNameSize = 32;\n\n    error = sen5x.getProductName(productName, productNameSize);\n\n    if (error) {\n        Serial.print("Error trying to execute getProductName(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("ProductName:");\n        Serial.println((char*)productName);\n    }\n\n    uint8_t firmwareMajor;\n    uint8_t firmwareMinor;\n    bool firmwareDebug;\n    uint8_t hardwareMajor;\n    uint8_t hardwareMinor;\n    uint8_t protocolMajor;\n    uint8_t protocolMinor;\n\n    error = sen5x.getVersion(firmwareMajor, firmwareMinor, firmwareDebug,\n                             hardwareMajor, hardwareMinor, protocolMajor,\n                             protocolMinor);\n    if (error) {\n        Serial.print("Error trying to execute getVersion(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Firmware: ");\n        Serial.print(firmwareMajor);\n        Serial.print(".");\n        Serial.print(firmwareMinor);\n        Serial.print(", ");\n\n        Serial.print("Hardware: ");\n        Serial.print(hardwareMajor);\n        Serial.print(".");\n        Serial.println(hardwareMinor);\n    }\n}\n\nvoid printSerialNumber() {\n    uint16_t error;\n    char errorMessage[256];\n    unsigned char serialNumber[32];\n    uint8_t serialNumberSize = 32;\n\n    error = sen5x.getSerialNumber(serialNumber, serialNumberSize);\n    if (error) {\n        Serial.print("Error trying to execute getSerialNumber(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("SerialNumber:");\n        Serial.println((char*)serialNumber);\n    }\n}\n\nvoid setup() {\n\n    Serial.begin(115200);\n    while (!Serial) {\n        delay(100);\n    }\n\n    Wire.begin();\n\n    sen5x.begin(Wire);\n\n    uint16_t error;\n    char errorMessage[256];\n    error = sen5x.deviceReset();\n    if (error) {\n        Serial.print("Error trying to execute deviceReset(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    }\n\n// Print SEN55 module information if i2c buffers are large enough\n#ifdef USE_PRODUCT_INFO\n    printSerialNumber();\n    printModuleVersions();\n#endif\n\n    // set a temperature offset in degrees celsius\n    // Note: supported by SEN54 and SEN55 sensors\n    // By default, the temperature and humidity outputs from the sensor\n    // are compensated for the modules self-heating. If the module is\n    // designed into a device, the temperature compensation might need\n    // to be adapted to incorporate the change in thermal coupling and\n    // self-heating of other device components.\n    //\n    // A guide to achieve optimal performance, including references\n    // to mechanical design-in examples can be found in the app note\n    // \u201cSEN5x \u2013 Temperature Compensation Instruction\u201d at www.sensirion.com.\n    // Please refer to those application notes for further information\n    // on the advanced compensation settings used\n    // in `setTemperatureOffsetParameters`, `setWarmStartParameter` and\n    // `setRhtAccelerationMode`.\n    //\n    // Adjust tempOffset to account for additional temperature offsets\n    // exceeding the SEN module\'s self heating.\n    float tempOffset = 0.0;\n    error = sen5x.setTemperatureOffsetSimple(tempOffset);\n    if (error) {\n        Serial.print("Error trying to execute setTemperatureOffsetSimple(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Temperature Offset set to ");\n        Serial.print(tempOffset);\n        Serial.println(" deg. Celsius (SEN54/SEN55 only");\n    }\n\n    // Start Measurement\n    error = sen5x.startMeasurement();\n    if (error) {\n        Serial.print("Error trying to execute startMeasurement(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    }\n}\n\nvoid loop() {\n    uint16_t error;\n    char errorMessage[256];\n\n    delay(1000);\n\n    // Read Measurement\n    float massConcentrationPm1p0;\n    float massConcentrationPm2p5;\n    float massConcentrationPm4p0;\n    float massConcentrationPm10p0;\n    float ambientHumidity;\n    float ambientTemperature;\n    float vocIndex;\n    float noxIndex;\n\n    error = sen5x.readMeasuredValues(\n        massConcentrationPm1p0, massConcentrationPm2p5, massConcentrationPm4p0,\n        massConcentrationPm10p0, ambientHumidity, ambientTemperature, vocIndex,\n        noxIndex);\n\n    if (error) {\n        Serial.print("Error trying to execute readMeasuredValues(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("MassConcentrationPm1p0:");\n        Serial.print(massConcentrationPm1p0);\n        Serial.print("\\t");\n        Serial.print("MassConcentrationPm2p5:");\n        Serial.print(massConcentrationPm2p5);\n        Serial.print("\\t");\n        Serial.print("MassConcentrationPm4p0:");\n        Serial.print(massConcentrationPm4p0);\n        Serial.print("\\t");\n        Serial.print("MassConcentrationPm10p0:");\n        Serial.print(massConcentrationPm10p0);\n        Serial.print("\\t");\n        Serial.print("AmbientHumidity:");\n        if (isnan(ambientHumidity)) {\n            Serial.print("n/a");\n        } else {\n            Serial.print(ambientHumidity);\n        }\n        Serial.print("\\t");\n        Serial.print("AmbientTemperature:");\n        if (isnan(ambientTemperature)) {\n            Serial.print("n/a");\n        } else {\n            Serial.print(ambientTemperature);\n        }\n        Serial.print("\\t");\n        Serial.print("VocIndex:");\n        if (isnan(vocIndex)) {\n            Serial.print("n/a");\n        } else {\n            Serial.print(vocIndex);\n        }\n        Serial.print("\\t");\n        Serial.print("NoxIndex:");\n        if (isnan(noxIndex)) {\n            Serial.println("n/a");\n        } else {\n            Serial.println(noxIndex);\n        }\n    }\n}\n')),(0,i.kt)("h4",{id:"result"},(0,i.kt)("strong",{parentName:"h4"},"Result")),(0,i.kt)("p",null,"After uploading the codes, we can open serial monitor as 115200 baud rate and it should show all eight types of signals."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin12.png"})),(0,i.kt)("h2",{id:"python-package-overview"},"Python Package Overview"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If this is your first time using Raspberry Pi, we highly recommend you to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://tinkergen-helper.yuque.com/tinkergen_helper/slgacm/tn0wlt"},"Getting Started with Raspberry Pi"),".")),(0,i.kt)("p",null,"This package supports SEN50, SEN54, SEN55 sensor, enabling you to detect environmental data while using Raspberry Pi."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://github.com/Sensirion/raspberry-pi-i2c-sen5x",target:"_blank"},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{300}",src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"})))),(0,i.kt)("h3",{id:"function-1"},"Function"),(0,i.kt)("h2",{id:"raspberry-pi-example"},"Raspberry Pi Example"),(0,i.kt)("p",null,"Now that we have our library installed and we understand the basic functions, let's run some examples for our Grove-all in one enviromental sensor\xa0SEN54/SEN55 to see how it behaves."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Hardware Connection."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin13.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," ",(0,i.kt)("a",{parentName:"p",href:"https://projects.raspberrypi.org/en/projects/raspberry-pi-setting-up"},"Install the Raspberry Pi OS on to your Raspberry Pi"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/configuration/raspi-config.md"},"Enable the I2C interface in the raspi-config"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Download the driver form the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sensirion/raspberry-pi-i2c-sen5x"},"Sensirion Github Page")," like above and extract the ",(0,i.kt)("inlineCode",{parentName:"p"},".zip")," on your Raspberry Pi."),(0,i.kt)("h3",{id:"demo-1-apply-the-function-example-with-raspberry-pi"},"Demo 1 Apply the function example with Raspberry Pi"),(0,i.kt)("p",null,"The demoe will help you sense various environment data in your area."),(0,i.kt)("h4",{id:"materials-required-1"},"Materials Required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{210}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin14.png"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{210}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/GroveAllin1overview.jpg"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html"},(0,i.kt)("strong",{parentName:"a"},"Get ONE Now"))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-All-in-one-Environmental-Sensor-SEN55-p-5373.html"},(0,i.kt)("strong",{parentName:"a"},"Get ONE Now")))))),(0,i.kt)("p",null,"Compile the driver:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Open a terminal"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to the driver directory. E.g. ",(0,i.kt)("strong",{parentName:"p"},"cd ~/raspberry-pi-i2c-sen5x"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Run the ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," command to compile the driver."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Run ",(0,i.kt)("inlineCode",{parentName:"p"},"./sen5x_i2c_example_usage")," in the same directory you used to compile the driver."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'//sen5x_i2c_example_usage.c\n\n\n/*\n * I2C-Generator: 0.3.0\n * Yaml Version: 2.1.3\n * Template Version: 0.7.0-109-gb259776\n */\n/*\n * Copyright (c) 2021, Sensirion AG\n * All rights reserved.\n *\n * Redistribution and use in source and binary forms, with or without\n * modification, are permitted provided that the following conditions are met:\n *\n * * Redistributions of source code must retain the above copyright notice, this\n *   list of conditions and the following disclaimer.\n *\n * * Redistributions in binary form must reproduce the above copyright notice,\n *   this list of conditions and the following disclaimer in the documentation\n *   and/or other materials provided with the distribution.\n *\n * * Neither the name of Sensirion AG nor the names of its\n *   contributors may be used to endorse or promote products derived from\n *   this software without specific prior written permission.\n *\n * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"\n * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE\n * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE\n * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE\n * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR\n * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF\n * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS\n * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN\n * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)\n * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE\n * POSSIBILITY OF SUCH DAMAGE.\n */\n\n#include <math.h>   // NAN\n#include <stdio.h>  // printf\n\n#include "sen5x_i2c.h"\n#include "sensirion_common.h"\n#include "sensirion_i2c_hal.h"\n\n/*\n * TO USE CONSOLE OUTPUT (PRINTF) YOU MAY NEED TO ADAPT THE INCLUDE ABOVE OR\n * DEFINE IT ACCORDING TO YOUR PLATFORM:\n * #define printf(...)\n */\n\nint main(void) {\n    int16_t error = 0;\n\n    sensirion_i2c_hal_init();\n\n    error = sen5x_device_reset();\n    if (error) {\n        printf("Error executing sen5x_device_reset(): %i\\n", error);\n    }\n\n    unsigned char serial_number[32];\n    uint8_t serial_number_size = 32;\n    error = sen5x_get_serial_number(serial_number, serial_number_size);\n    if (error) {\n        printf("Error executing sen5x_get_serial_number(): %i\\n", error);\n    } else {\n        printf("Serial number: %s\\n", serial_number);\n    }\n\n    unsigned char product_name[32];\n    uint8_t product_name_size = 32;\n    error = sen5x_get_product_name(product_name, product_name_size);\n    if (error) {\n        printf("Error executing sen5x_get_product_name(): %i\\n", error);\n    } else {\n        printf("Product name: %s\\n", product_name);\n    }\n\n    uint8_t firmware_major;\n    uint8_t firmware_minor;\n    bool firmware_debug;\n    uint8_t hardware_major;\n    uint8_t hardware_minor;\n    uint8_t protocol_major;\n    uint8_t protocol_minor;\n    error = sen5x_get_version(&firmware_major, &firmware_minor, &firmware_debug,\n                              &hardware_major, &hardware_minor, &protocol_major,\n                              &protocol_minor);\n    if (error) {\n        printf("Error executing sen5x_get_version(): %i\\n", error);\n    } else {\n        printf("Firmware: %u.%u, Hardware: %u.%u\\n", firmware_major,\n               firmware_minor, hardware_major, hardware_minor);\n    }\n\n    // set a temperature offset in degrees celsius\n    // Note: supported by SEN54 and SEN55 sensors\n    // By default, the temperature and humidity outputs from the sensor\n    // are compensated for the modules self-heating. If the module is\n    // designed into a device, the temperature compensation might need\n    // to be adapted to incorporate the change in thermal coupling and\n    // self-heating of other device components.\n    //\n    // A guide to achieve optimal performance, including references\n    // to mechanical design-in examples can be found in the app note\n    // \u201cSEN5x \u2013 Temperature Compensation Instruction\u201d at www.sensirion.com.\n    // Please refer to those application notes for further information\n    // on the advanced compensation settings used in\n    // `sen5x_set_temperature_offset_parameters`,\n    // `sen5x_set_warm_start_parameter` and `sen5x_set_rht_acceleration_mode`.\n    //\n    // Adjust temp_offset to account for additional temperature offsets\n    // exceeding the SEN module\'s self heating.\n    float temp_offset = 0.0f;\n    error = sen5x_set_temperature_offset_simple(temp_offset);\n    if (error) {\n        printf("Error executing sen5x_set_temperature_offset_simple(): %i\\n",\n               error);\n    } else {\n        printf("Temperature Offset set to %.2f \xb0C (SEN54/SEN55 only)\\n",\n               temp_offset);\n    }\n\n    // Start Measurement\n    error = sen5x_start_measurement();\n\n    if (error) {\n        printf("Error executing sen5x_start_measurement(): %i\\n", error);\n    }\n\n    for (int i = 0; i < 600; i++) {\n        // Read Measurement\n        sensirion_i2c_hal_sleep_usec(1000000);\n\n        float mass_concentration_pm1p0;\n        float mass_concentration_pm2p5;\n        float mass_concentration_pm4p0;\n        float mass_concentration_pm10p0;\n        float ambient_humidity;\n        float ambient_temperature;\n        float voc_index;\n        float nox_index;\n\n        error = sen5x_read_measured_values(\n            &mass_concentration_pm1p0, &mass_concentration_pm2p5,\n            &mass_concentration_pm4p0, &mass_concentration_pm10p0,\n            &ambient_humidity, &ambient_temperature, &voc_index, &nox_index);\n        if (error) {\n            printf("Error executing sen5x_read_measured_values(): %i\\n", error);\n        } else {\n            printf("Mass concentration pm1p0: %.1f \xb5g/m\xb3\\n",\n                   mass_concentration_pm1p0);\n            printf("Mass concentration pm2p5: %.1f \xb5g/m\xb3\\n",\n                   mass_concentration_pm2p5);\n            printf("Mass concentration pm4p0: %.1f \xb5g/m\xb3\\n",\n                   mass_concentration_pm4p0);\n            printf("Mass concentration pm10p0: %.1f \xb5g/m\xb3\\n",\n                   mass_concentration_pm10p0);\n            if (isnan(ambient_humidity)) {\n                printf("Ambient humidity: n/a\\n");\n            } else {\n                printf("Ambient humidity: %.1f %%RH\\n", ambient_humidity);\n            }\n            if (isnan(ambient_temperature)) {\n                printf("Ambient temperature: n/a\\n");\n            } else {\n                printf("Ambient temperature: %.1f \xb0C\\n", ambient_temperature);\n            }\n            if (isnan(voc_index)) {\n                printf("Voc index: n/a\\n");\n            } else {\n                printf("Voc index: %.1f\\n", voc_index);\n            }\n            if (isnan(nox_index)) {\n                printf("Nox index: n/a\\n");\n            } else {\n                printf("Nox index: %.1f\\n", nox_index);\n            }\n        }\n    }\n\n    error = sen5x_stop_measurement();\n    if (error) {\n        printf("Error executing sen5x_stop_measurement(): %i\\n", error);\n    }\n\n    return 0;\n}\n\n')),(0,i.kt)("h4",{id:"result-1"},(0,i.kt)("strong",{parentName:"h4"},"Result")),(0,i.kt)("p",null,"The output should be like:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/GroveAllin1/output.png"})),(0,i.kt)("h2",{id:"resource"},"Resource"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sensirion/embedded-i2c-sen5x"},"Library for STM32"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,i.kt)("p",null,"With the SenseCAP ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,i.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,i.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);
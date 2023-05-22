"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46281],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),c=i,h=p["".concat(u,".").concat(c)]||p[c]||m[c]||a;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},55314:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={description:"Grove - Temperature & Humidity Sensor(SHT4x)",title:"Grove - Temperature & Humidity Sensor(SHT4x)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-SHT4x",last_update:{date:"1/4/2022",author:"jianjing Huang"}},o="Grove - Temperature & Humidity Sensor",l={unversionedId:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x",id:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x",title:"Grove - Temperature & Humidity Sensor(SHT4x)",description:"Grove - Temperature & Humidity Sensor(SHT4x)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temp&Humi",slug:"/Grove-SHT4x",permalink:"/Grove-SHT4x",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-SHT4x.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1641225600,formattedLastUpdatedAt:"Jan 3, 2022",frontMatter:{description:"Grove - Temperature & Humidity Sensor(SHT4x)",title:"Grove - Temperature & Humidity Sensor(SHT4x)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-SHT4x",last_update:{date:"1/4/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Temperature&amp;Humidity Sensor (High-Accuracy &amp;Mini) v1.0",permalink:"/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0"},next:{title:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",permalink:"/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K"}},u={},s=[{value:"Introduction",id:"introduction",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Preparation",id:"preparation",level:3},{value:"Arduino Library Overview",id:"arduino-library-overview",level:2},{value:"Function",id:"function",level:3},{value:"Installation",id:"installation",level:3},{value:"Upgrading the Package",id:"upgrading-the-package",level:3},{value:"Arduino Example",id:"arduino-example",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grove---temperature--humidity-sensor"},"Grove - Temperature & Humidity Sensor"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png"}))),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This Grove SHT40 digital sensor is based on Sensirion's industry-proven humidity and temperature sensors. It can provide constant temperature and humidity accuracy over an extensive measurement range And with the grove platform, you are ready to plug and play the SHT4x sensor on any microcontroller (Arduino) or microprocessor (Raspberry Pi)."),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,"Before everything starts, it is quite essential to have some basic parameters of the product. The following table provides information about the characteristics of Grove - Temperature & Humidity Sensor."),(0,i.kt)("table",{border:"0"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,(0,i.kt)("strong",null,"Parameter\xa0 \xa0 \xa0 \xa0")),(0,i.kt)("td",null,(0,i.kt)("strong",null,"Rating"))),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Temperatur accuracy rate"),(0,i.kt)("td",null,"\xb10.2\xa0\u2103")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Humidity accuracy rate\xa0"),(0,i.kt)("td",null,"\xb11.8% RH")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Operating temperature range\xa0\xa0"),(0,i.kt)("td",null,"-40\xb0C to 125\xb0C")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Operating Humidity range\xa0 \xa0 \xa0 \xa0"),(0,i.kt)("td",null,"0% to 100% RH")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Grove power supply\xa0 \xa0 \xa0 \xa0 \xa0 \xa0\xa0"),(0,i.kt)("td",null,"5/3.3 v")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Serial Protocol"),(0,i.kt)("td",null,"I2C\xa0")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Grove average current\xa0"),(0,i.kt)("td",null,"32 \xb5A")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Grove idle current"),(0,i.kt)("td",null,"1.2\xb5A")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Product Dimension"),(0,i.kt)("td",null,"20mm x 40mm")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Communication"),(0,i.kt)("td",null,"IIC")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Rate"),(0,i.kt)("td",null,"115200")))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Now we can set up the module and detect humidity and temperature."),(0,i.kt)("h3",{id:"preparation"},"Preparation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grove - Temperature & Humidity Sensor"),(0,i.kt)("li",{parentName:"ul"},"Windows host PC or MacOS PC (Win 10 & MacOS 12.2 tested)"),(0,i.kt)("li",{parentName:"ul"},"Type-C cable")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Software")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.arduino.cc/"},"Arduino Software")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Sensirion/arduino-i2c-sht4x"},"Module library"))),(0,i.kt)("h2",{id:"arduino-library-overview"},"Arduino Library Overview"),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,i.kt)("p",null,"The library we use here is published on the Github, including the example."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://github.com/Sensirion/arduino-i2c-sht4x",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/seeed_logo/DOWNLOAD.png"}))),(0,i.kt)("h3",{id:"function"},"Function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Serial.begin(115200);")," \u2014\u2014 The number here means the rate is set up at 115200. When we upload the code, it is required to set up rate as 115200 while monitor openning")),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,i.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,i.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"})),(0,i.kt)("h3",{id:"upgrading-the-package"},"Upgrading the Package"),(0,i.kt)("p",null,"For the sake of product continuity, we may optimize and upgrade the product library at a later stage. According to the two library installation methods provided above, there are also two ways to update the library for reference."),(0,i.kt)("p",null,"We will be the first to update GitHub when the library is optimized. You can delete the original library folder in your computer's folder, then download the latest version from GitHub, unzip it and put it in the Arduino IDE library directory. (",(0,i.kt)("strong",{parentName:"p"},"...\\Arduino\\libraries. ....")," is the path you setup Arduino)"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Location_lib.png"})),(0,i.kt)("h2",{id:"arduino-example"},"Arduino Example"),(0,i.kt)("p",null,"Now that we have our library installed and we understand the basic functions, let's run some examples for our Grove - Temp & Humidi Sensor to see how it behaves."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Prerequisite")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - Temp & Humidi Sensor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{210}",src:"https://files.seeedstudio.com/wiki/SHT4x/SHT4x.jpeg"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/grove-temp-humi-sensor-sht40-p-5384.html"},"Get ONE Now"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1."),"  Connect the hardware like below, and focus on the IIC port connection:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/SHT4x/SHT4xconnection.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," You need to Install an Arduino Software."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png"}))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Launch the Arduino application."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4."),' Negative to "file--\x3eexamples--\x3eSensirion IIC Sen4x--\x3eexampleUsage" and open the example provided in the library. You can also copy the code below:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Arduino.h>\n#include <SensirionI2CSht4x.h>\n#include <Wire.h>\n\nSensirionI2CSht4x sht4x;\n\nvoid setup() {\n\n    Serial.begin(115200);\n    while (!Serial) {\n        delay(100);\n    }\n\n    Wire.begin();\n\n    uint16_t error;\n    char errorMessage[256];\n\n    sht4x.begin(Wire);\n\n    uint32_t serialNumber;\n    error = sht4x.serialNumber(serialNumber);\n    if (error) {\n        Serial.print("Error trying to execute serialNumber(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Serial Number: ");\n        Serial.println(serialNumber);\n    }\n}\n\nvoid loop() {\n    uint16_t error;\n    char errorMessage[256];\n\n    delay(1000);\n\n    float temperature;\n    float humidity;\n    error = sht4x.measureHighPrecision(temperature, humidity);\n    if (error) {\n        Serial.print("Error trying to execute measureHighPrecision(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Temperature:");\n        Serial.print(temperature);\n        Serial.print("\\t");\n        Serial.print("Humidity:");\n        Serial.println(humidity);\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5."),' Upload the code to Arduino software and click the "monitor" on the upper right corner. The monitor result might show up like:'),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/SHT4x/SHT4xoutput.png"})),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/SHT4x/SHT4x_Datasheet.pdf"},"SHT4x Datasheet"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
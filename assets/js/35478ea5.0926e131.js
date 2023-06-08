"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||i;return r?n.createElement(c,o(o({ref:t},d),{},{components:r})):n.createElement(c,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},77779:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - Formaldehyde sensor",title:"Grove - Formaldehyde sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Formaldehyde-Sensor",last_update:{date:"2/22/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Formaldehyde-Sensor",id:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Formaldehyde-Sensor",title:"Grove - Formaldehyde sensor",description:"Grove - Formaldehyde sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Formaldehyde-Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Air_Quality",slug:"/Grove-Formaldehyde-Sensor",permalink:"/custom/Grove-Formaldehyde-Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Formaldehyde-Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove - Formaldehyde sensor",title:"Grove - Formaldehyde sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Formaldehyde-Sensor",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Air Quality Sensor v1.3",permalink:"/custom/Grove-Air_Quality_Sensor_v1.3"},next:{title:"Sensor - Gas",permalink:"/custom/Seeed_Gas_Sensor_Selection_Guide"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/101020972_Front-05.jpg",alt:null})),(0,a.kt)("p",null,"Grove Formaldehyde Sensor can detect formaldehyde around 0~1000 ppb with low cross-sensitivity to alcohol and high stability of 6 years lifetime. Built-in RHT sensor ensures it maintains fine performance under different temperatures and humidity and it transmits data through UART and I2C ports."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Low cross-sensitivity to alcohol"),(0,a.kt)("li",{parentName:"ul"},"Standard formaldehyde measurement range: 0 ~ 1000 ppb"),(0,a.kt)("li",{parentName:"ul"},"Long-term stability and 6 years\u2019 service lifetime"),(0,a.kt)("li",{parentName:"ul"},"Patented electrochemical cell with anti-dry technology"),(0,a.kt)("li",{parentName:"ul"},"I2C/UART interface with lifetime-calibrated output"),(0,a.kt)("li",{parentName:"ul"},"Maintain performance under different temperatures and humidity: compensated via Sensirion RHT sensor")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Supply voltage range"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V or 5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Measurement range"),(0,a.kt)("td",{parentName:"tr",align:null},"0 to 1,000 ppb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response time"),(0,a.kt)("td",{parentName:"tr",align:null},"<2 min")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Limit of detection"),(0,a.kt)("td",{parentName:"tr",align:null},"<20 ppb")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"I2C / UART")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Formaldehyde accuracy"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb120 ppb or \xb120% of measured value, whichever is larger")))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we highly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Formaldehyde Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Set the button on the Grove-Formaldehyde Sensor to the ",(0,a.kt)("strong",{parentName:"li"},'"1"')," position.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/hardware1.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino and set Grove-Formaldehyde Sensor to ",(0,a.kt)("strong",{parentName:"li"},"I\xb2C")," port of Grove-Base Shield"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Arduous-link.jpg",alt:null})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you don't have Grove Base Shield, it still can be directly connected Grove-Formaldehyde Sensor to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Loudness Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SDA"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SCL"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/Grove-Formaldehyde-Sensor-SFA30.zip"},"Grove-Formaldehyde Sensor Library")," for the usage of Grove Formaldehyde Sensor and ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"install")," it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Open the Arduino IDE. Copy below codes to Arduio IDE and upload it. If you do not know how to upload the codes, here we have some guides about ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Arduino.h>\n#include <SensirionI2CSfa3x.h>\n#include <Wire.h>\n\nSensirionI2CSfa3x sfa3x;\n\nvoid setup() {\n\n    Serial.begin(115200);\n    while (!Serial) {\n        delay(100);\n    }\n\n    Wire.begin();\n\n    uint16_t error;\n    char errorMessage[256];\n\n    sfa3x.begin(Wire);\n\n    // Start Measurement\n    error = sfa3x.startContinuousMeasurement();\n    if (error) {\n        Serial.print("Error trying to execute startContinuousMeasurement(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    }\n}\n\nvoid loop() {\n    uint16_t error;\n    char errorMessage[256];\n\n    delay(1000);\n    int16_t hcho;\n    int16_t humidity;\n    int16_t temperature;\n    error = sfa3x.readMeasuredValues(hcho, humidity, temperature);\n    if (error) {\n        Serial.print("Error trying to execute readMeasuredValues(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Hcho:");\n        Serial.print(hcho / 5.0);\n        Serial.print("\\t");\n        Serial.print("Humidity:");\n        Serial.print(humidity / 100.0);\n        Serial.print("\\t");\n        Serial.print("Temperature:");\n        Serial.println(temperature / 200.0);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," In this program, Seeeduino can monitor the formaldehyde gas concentration, air humidity and temperature data in real-time. By opening the 'Serial Monitor', the results should be like:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/test.png",alt:null})),(0,a.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Formaldehyde Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/GroveFormaldehydehardware.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Formaldehyde-Sensor-SFA30-p-5204.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Plug the Grove Base Hat for Raspberry Pi into Raspberry Pi."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Dust Sensor to ",(0,a.kt)("strong",{parentName:"li"},"I\xb2C")," port of Grove Base Hat for Raspberry Pi."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry Pi to PC through a USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/raspberry-link.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,a.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment of Resberry Pi.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Formaldehyde-Sensor-(SFA30)_v1.02-SCH/embedded-sfa3x-main.zip"},"Grove-Formaldehyde Sensor Library")," and unzip it to the Raspberry Pi.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Navigate to the demos' directory. The following command can monitor the concentration of formaldehyde, humidity and temperature."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cd ~/embedded-sfa3x-main/i2c\nmake\n./sfa3x_i2c_example_usage\n")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"In this wiki we use the path ",(0,a.kt)("strong",{parentName:"p"},"~/embedded-sfa3x-main/i2c")," instead of ",(0,a.kt)("strong",{parentName:"p"},"/home/pi/Desktop/embedded-sfa3x-main/i2c"),", you need to make sure Step 2 and Step 3 use the same path.")),(0,a.kt)("p",null,"Here is the ",(0,a.kt)("strong",{parentName:"p"},"sfa3x_i2c_example_usage.c")," code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C"},'#include <stdio.h>  // printf\n\n#include "sensirion_common.h"\n#include "sensirion_i2c_hal.h"\n#include "sfa3x_i2c.h"\n\n/**\n * TO USE CONSOLE OUTPUT (PRINTF) IF NOT PRESENT ON YOUR PLATFORM\n */\n//#define printf(...)\n\nint main(void) {\n    int16_t error = 0;\n\n    sensirion_i2c_hal_init();\n\n    error = sfa3x_device_reset();\n    if (error) {\n        printf("Error resetting device: %i\\n", error);\n        return -1;\n    }\n\n    uint8_t device_marking[42];\n    error = sfa3x_get_device_marking(&device_marking[0], sizeof(device_marking));\n    if (error) {\n        printf("Error getting device marking: %i\\n", error);\n        return -1;\n    }\n    printf("Device marking: %s\\n", device_marking);\n\n    // Start Measurement\n    error = sfa3x_start_continuous_measurement();\n    if (error) {\n        printf("Error executing sfa3x_start_continuous_measurement(): %i\\n",\n               error);\n    }\n\n    for (;;) {\n        // Read Measurement\n\n        int16_t hcho;\n        int16_t humidity;\n        int16_t temperature;\n\n        sensirion_i2c_hal_sleep_usec(500000);\n\n        error = sfa3x_read_measured_values(&hcho, &humidity, &temperature);\n\n        if (error) {\n            printf("Error executing sfa3x_read_measured_values(): %i\\n", error);\n        } else {\n            printf("Measurement:\\n");\n            printf("  Formaldehyde concentration: %.1f\\n", hcho / 5.0f);\n            printf("  Relative humidity: %.2f\\n", humidity / 100.0f);\n            printf("  Temperature: %.2f\\n", temperature / 200.0f);\n        }\n    }\n\n    error = sfa3x_stop_measurement();\n    if (error) {\n        printf("Error executing sfa3x_stop_measurement(): %i\\n", error);\n    }\n\n    return 0;\n}\n\n')),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If everything goes well, the following results can be displayed like:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~/Downloads/embedded-sfa3x-main/i2c $ ./sfa3x_i2c_example_usage\nDevice marking: 211117825F073B80\nMeasurement:\n  Formaldehyde concentration: 0.0\n  Relative humidity: 70.19\n  Temperature: 27.41\n")),(0,a.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}m.isMDXComponent=!0}}]);
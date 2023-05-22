"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=n,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return r?a.createElement(k,o(o({ref:t},d),{},{components:r})):a.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89509:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Temperature&Humidity Sensor (HDC1000)",title:"Grove - Temperature&Humidity Sensor (HDC1000)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-TemperatureAndHumidity_Sensor-HDC1000",last_update:{date:"1/3/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000",id:"Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000",title:"Grove - Temperature&Humidity Sensor (HDC1000)",description:"Grove - Temperature&Humidity Sensor (HDC1000)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temp&Humi",slug:"/Grove-TemperatureAndHumidity_Sensor-HDC1000",permalink:"/Grove-TemperatureAndHumidity_Sensor-HDC1000",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temp&Humi/Grove-TemperatureAndHumidity_Sensor-HDC1000.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672675200,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{description:"Grove - Temperature&Humidity Sensor (HDC1000)",title:"Grove - Temperature&Humidity Sensor (HDC1000)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-TemperatureAndHumidity_Sensor-HDC1000",last_update:{date:"1/3/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Temperature&Humidity Sensor(DHT20)",permalink:"/Grove-Temperature-Humidity-Sensor-DH20"},next:{title:"Grove - Temperature&amp;Humidity Sensor (High-Accuracy &amp;Mini) v1.0",permalink:"/Grove-TemptureAndHumidity_Sensor-High-Accuracy_AndMini-v1.0"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Materials required",id:"materials-required",level:4},{value:"Hardwave",id:"hardwave",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software-1",level:4},{value:"With Launchpad",id:"with-launchpad",level:3},{value:"Material required",id:"material-required",level:4},{value:"Hardware connections",id:"hardware-connections",level:4},{value:"Download code and flash it to Launchpad",id:"download-code-and-flash-it-to-launchpad",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/main.jpg"})),(0,n.kt)("p",null,"Grove - Temperature&Humidity Sensor (HDC1000) utilizes a HDC1000 sensor.HDC1000 was designed by Texas Instruments.It is a digital humidity sensor with integrated temperature sensor that provides excellent measurement accuracy at very low power.The device measures humidity based on a novel capacitive sensor.The humidity and temperature sensors are factory calibrated.The innovative WLCSP (Wafer Level Chip Scale Package) simplifies board design with the use of an ultra-compact package. The sensing element of the HDC1000 is placed on the bottom part of the device, which makes the HDC1000 more robust against dirt, dust, and other environmental contaminants. The HDC1000 is functional within the full \u201340\xb0C to +125\xb0C temperature range,and 0-100% RH range."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove connector compatible"),(0,n.kt)("li",{parentName:"ul"},"IIC Interface"),(0,n.kt)("li",{parentName:"ul"},"Low Power"),(0,n.kt)("li",{parentName:"ul"},"Wide operating voltage range"),(0,n.kt)("li",{parentName:"ul"},"I2C Serial Bus Address Configuration")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"800"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"},"Item"),(0,n.kt)("th",{scope:"col"},"Min"),(0,n.kt)("th",{scope:"col"},"Typical"),(0,n.kt)("th",{scope:"col"},"Max"),(0,n.kt)("th",{scope:"col"},"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Supply Voltage"),(0,n.kt)("td",null,"3"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"5"),(0,n.kt)("td",null,"VDC")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Working Current"),(0,n.kt)("td",null,"0.12"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"90"),(0,n.kt)("td",null,"uA")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Relative Humidity Accuracy (Typ)"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"\xb13"),(0,n.kt)("td",null),(0,n.kt)("td",null,"\xa0%RH")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Relative Humidity Operating Range (Typ)"),(0,n.kt)("td",null,"0"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"100"),(0,n.kt)("td",null,"\xa0%RH")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Temperature Accuracy"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"\xb10.2"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Temperature Range"),(0,n.kt)("td",null,"-40"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"125"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Operating Temperature Range"),(0,n.kt)("td",null,"-20"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"85"),(0,n.kt)("td",null,"\u2103")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Dimension"),(0,n.kt)("td",{colspan:"3"},"40*20"),(0,n.kt)("td",null,"mm"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-p3.jpg"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Grove connector."),(0,n.kt)("li",{parentName:"ol"},"Ready\uff1aReady for a conversion."),(0,n.kt)("li",{parentName:"ol"},"Default address: 0x40."),(0,n.kt)("li",{parentName:"ol"},"ADDR0, ADDR1: I2C Serial Bus Address Configuration(0x40,0x41,0x42,0x43)")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,"Here is how to use Grove - Temperature&Humidity Sensor (HDC1000) with Seeeduino v4.2."),(0,n.kt)("h4",{id:"materials-required"},"Materials required"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature&Humidity Sensor(HDC1000)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy")),(0,n.kt)("h4",{id:"hardwave"},"Hardwave"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Temperature&Humidity Sensor(HDC1000) to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/connect_arduino.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove - Temperature&Humidity Sensor(HDC1000) to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Temperature&Humidity Sensor(HDC1000)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/HDC1000"},"Seeed DHT library")," from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open a new sketch, and copy the following code into the new sketch."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'/*\n * HDC1000.h\n * A library for HDC1000 1.0\n *\n * Copyright (c) 2015 seeed technology inc.\n * Author     : Pillar Zuo (baozhu.zuo@seeed.cc)\n * Create Time: April 2015\n * Change Log :\n *\n * The MIT License (MIT)\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n\n#include <Wire.h>\n#include <HDC1000.h>\n \nHDC1000 mySensor;\n//HDC1000 mySensor(0x41, 2) <-- DRDYn enabled and connected to Arduino pin 2 (allows for faster measurements).\n \nvoid setup(){\n Serial.begin(9600);\n mySensor.begin();\n}\n \nvoid loop(){\n Serial.print("Temperature: ");\n Serial.print(mySensor.getTemp()); \n Serial.print("C, Humidity: ");     \n Serial.print(mySensor.getHumi());\n Serial.println("%");\n delay(1000);\n}\n\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,n.kt)("strong",{parentName:"p"},"9600"),". If every thing goes well, you will get the results."))),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/result.png"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    It may need a period time before the result become stable.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Temperature&Humidity Sensor Pro"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/rasp.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Ultrasonic_Ranger/img/Grovepi%2B.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Temperature-Humidity-Sensor-HDC100-p-2535.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Plug the GrovePi_Plus into Raspberry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect this sensor to ",(0,n.kt)("strong",{parentName:"p"},"I2C")," port of GrovePi_Plus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect the Raspberry to PC via USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/pi_connect.jpg"})),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this wiki we use the path ",(0,n.kt)("strong",{parentName:"p"},"~/GrovePi/")," instead of ",(0,n.kt)("strong",{parentName:"p"},"/home/pi/Desktop/GrovePi"),", you need to make sure Step 2 and Step 3 use the same path.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"If you are using ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,n.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Excute below commands to get the value.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000\nsudo python3 grove_hdc_1000_example.py\n")),(0,n.kt)("p",null,"The result should be like:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\npi@raspberrypi:~/GrovePi/Software/Python/grove_i2c_temp_hum_hdc1000$ sudo python3 grove_hdc_1000_example.py \nTemp    : 27.94 C\nHumidity: 79.61 %\n-----------------\nTemp    : 29.23 C\nHumidity: 79.61 %\n-----------------\nTemp    : 29.23 C\nHumidity: 79.61 %\n-----------------\nTemp    : 29.23 C\nHumidity: 79.21 %\n-----------------\nTemp    : 29.23 C\nHumidity: 78.82 %\n-----------------\nTemp    : 29.23 C\nHumidity: 78.82 %\n-----------------\nTemp    : 29.23 C\nHumidity: 78.43 %\n-----------------\nTemp    : 29.23 C\nHumidity: 78.04 %\n-----------------\nTemp    : 29.23 C\nHumidity: 77.65 %\n-----------------\nTemp    : 29.23 C\nHumidity: 77.65 %\n-----------------\n\n")),(0,n.kt)("p",null,"If you want to check the code, you can use the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo nano grove_hdc_1000_example.py\n\n")),(0,n.kt)("h3",{id:"with-launchpad"},"With Launchpad"),(0,n.kt)("h4",{id:"material-required"},"Material required"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TI MSP430FR4133 LaunchPad","]"," \xd7 1"),(0,n.kt)("li",{parentName:"ul"},"USB cable(type A to mini type-b) \xd7 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/Grove-4-pin-Female-Jumper-to-Grove-4-pin-Conversion-Cable-5-PCs-per-PAck-p-1020.html"},"Grove - 4 pin Female Jumper to Grove 4 pin Conversion Cable")," \xd7 1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HDC1000-p-2535.html?cPath=25_125"},"Grove - Temperature&Humidity Sensor (HDC1000)")," \xd7 1")),(0,n.kt)("h4",{id:"hardware-connections"},"Hardware connections"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_connections-with_launchpad-2400_s.JPG"})),(0,n.kt)("h4",{id:"download-code-and-flash-it-to-launchpad"},"Download code and flash it to Launchpad"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Download the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000-HDC1000_energia.zip"},"demo code"),"."),(0,n.kt)("div",{className:"admonition note"},(0,n.kt)("p",{className:"admonition-title"},"Note"),"You have to copy the file ",(0,n.kt)("span",{style:{fontStyle:"italic"}},"readTempHumi.ino")," (in the folder ",(0,n.kt)("span",{style:{fontStyle:"italic"}},"examples"),") into the same folder as ",(0,n.kt)("span",{style:{fontStyle:"italic"}},"HDC1000.h"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Flash the code into Launchpad.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open ",(0,n.kt)("em",{parentName:"p"},"Serial Monitor")," (",(0,n.kt)("strong",{parentName:"p"},"Tool"),"->",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor"),") to view data detected."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/img/Grove-TemperatureAndHumidity_Sensor-HDC1000-demo_result-with_launchpad-600.png"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch_pcb.zip"},"Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch pcb.zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Pdf]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/Grove-TemperatureAndHumidity_Sensor-HDC1000-v1.0_sch.pdf"},"Grove - Temperature&Humidity Sensor(HDC1000) v1.0 sch.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/HDC1000"},"Demo code")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-TemperatureAndHumidity_Sensor-HDC1000/res/HDC1000.pdf"},"HDC1000","_","DataSheet.pdf"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10984],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||i;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},45992:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"One Wire Temperature Sensor DS18B20",title:"One Wire Temperature Sensor DS18B20",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/One-Wire-Temperature-Sensor-DS18B20",last_update:{date:"1/4/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20",id:"Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20",title:"One Wire Temperature Sensor DS18B20",description:"One Wire Temperature Sensor DS18B20",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/One-Wire-Temperature-Sensor-DS18B20",permalink:"/zh-CN/One-Wire-Temperature-Sensor-DS18B20",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temperature/One-Wire-Temperature-Sensor-DS18B20.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672761600,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{description:"One Wire Temperature Sensor DS18B20",title:"One Wire Temperature Sensor DS18B20",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/One-Wire-Temperature-Sensor-DS18B20",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Thermocouple Amplifier (MCP9600)",permalink:"/zh-CN/Grove-I2C_Thermocouple_Amplifier-MCP9600"},next:{title:"Grove - High Temperature Sensor",permalink:"/zh-CN/Grove-High_Temperature_Sensor"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Materials Required",id:"materials-required",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Play with Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Materials required",id:"materials-required-1",level:4},{value:"Connecting hardware",id:"connecting-hardware",level:4},{value:"Software",id:"software-1",level:4},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/one-wire.png"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:"0"}))),(0,a.kt)("p",null,"This 2m long One Wire Temperature Sensor has a waterproof probe and long wire shape, suitable for immersive temperature detection. The chip inside this sensor is ",(0,a.kt)("strong",{parentName:"p"},"DS18B20")," which is widely adopted.The original one includes three wires inside, you need to add an extra resistance to get it working. For this sensor, we adjusted it into a Grove port and had a resistance pre-assembled inside so that you can use it as a regular Grove sensor. This article is going to illustrate the usage of the sensor on Raspberry Pi and have a fun!"),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2101 Wireless Temperature and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,a.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("font",{size:4},(0,a.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,a.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,a.kt)("strong",null,"S2101 Air Temp & Humidity")))))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Requires only one wire for data interface"),(0,a.kt)("li",{parentName:"ul"},"Waterproof"),(0,a.kt)("li",{parentName:"ul"},"Grove compatible"),(0,a.kt)("li",{parentName:"ul"},"Accepts 3.0V to 5.5V power supply"),(0,a.kt)("li",{parentName:"ul"},"Wide temperature range: -55\xb0C to +125\xb0C"),(0,a.kt)("li",{parentName:"ul"},"High accuracy: \xb10.5\xb0C( -10\xb0C to +85\xb0C)")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The cable part cannot be put under temperature higher than 70\xb0C for a long time.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.0-5.5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Chip"),(0,a.kt)("td",{parentName:"tr",align:null},"DS18B20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Length"),(0,a.kt)("td",{parentName:"tr",align:null},"2m")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-55\xb0C to +125\xb0C")))),(0,a.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"After this section, you can make One Wire Temperature Sensor run with only few steps."),(0,a.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,a.kt)("h4",{id:"materials-required"},"Materials Required"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino Lotus V1.1"),(0,a.kt)("th",{parentName:"tr",align:null},"One Wire Temperature Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/small.png"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Lotus-V1-1-ATMega328-Board-with-Grove-Interface.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html"},"Get ONE Now"))))),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/hardware-1-wire.jpg"})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please plug the USB cable\uff0cOne Wire Temperature Sensor Interface into Seeeduino Lotus V1.1 Interface gently, otherwise you may damage the port.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Plug One Wire Temperature Sensor into ",(0,a.kt)("strong",{parentName:"p"},"D2")," interface of Seeeduino Lotus V1.1 with a Grove Cable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect Seeeduino Lotus V1.1 to PC via a USB cable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Download the code, please refer to the software part.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Run the code and the outcome will display on the screen of ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," in your Arduino IDE ."))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/PaulStoffregen/OneWire/archive/master.zip"},"Library for Onewire")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/milesburton/Arduino-Temperature-Control-Library/archive/master.zip"},"Library for Arduino Temperature Control"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Copy the whole ",(0,a.kt)("strong",{parentName:"p"},"OneWire")," and ",(0,a.kt)("strong",{parentName:"p"},"Arduino-Temperature-Control-Library")," files and paste them into your Arduino IDE library file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Upload the demo code from ",(0,a.kt)("strong",{parentName:"p"},"Software Code")," below. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software Code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'// Include the libraries we need\n#include <OneWire.h>\n#include <DallasTemperature.h>\n\n// Data wire is plugged into port 2 on the Arduino\n#define ONE_WIRE_BUS 2\n\n\n// Setup a oneWire instance to communicate with any OneWire devices (not just Maxim/Dallas temperature ICs)\nOneWire oneWire(ONE_WIRE_BUS);\n\n// Pass our oneWire reference to Dallas Temperature. \nDallasTemperature sensors(&oneWire);\n\n/*\n * The setup function. We only start the sensors here\n */\nvoid setup(void)\n{\n  // start serial port\n  Serial.begin(115200);\n  Serial.println("Dallas Temperature IC Control Library Demo");\n\n  // Start up the library\n  sensors.begin();\n}\n\n/*\n * Main function, get and show the temperature\n */\nvoid loop(void)\n{ \n  // call sensors.requestTemperatures() to issue a global temperature \n  // request to all devices on the bus\n  Serial.print("Requesting temperatures...");\n  sensors.requestTemperatures(); // Send the command to get temperatures\n  Serial.println("DONE");\n  // After we got the temperatures, we can print them here.\n  // We use the function ByIndex, and as an example get the temperature from the first sensor only.\n  float tempC = sensors.getTempCByIndex(0);\n\n  // Check if reading was successful\n  if(tempC != DEVICE_DISCONNECTED_C) \n  {\n    Serial.print("Temperature for the device 1 (index 0) is: ");\n    Serial.println(tempC);\n  } \n  else\n  {\n    Serial.println("Error: Could not read temperature data");\n  }\n}\n')),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"  If everything goes well, you can go to ",(0,a.kt)("strong",{parentName:"p"},"Serial Monitor")," to see an outcome as following:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("figure",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/outcome-1-wire.png",alt:"1-wire'' OUTCOME",title:"demo"}),(0,a.kt)("figcaption",null,(0,a.kt)("b",null),(0,a.kt)("i",null)))),(0,a.kt)("h3",{id:"play-with-raspberry-pi"},"Play with Raspberry Pi"),(0,a.kt)("h4",{id:"materials-required-1"},"Materials required"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4 Model B"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Base Hat for Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null},"One Wire Temperature Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/small.png"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/One-Wire-Temperature-Sensor-p-1235.html"},"Get One Now"))))),(0,a.kt)("h4",{id:"connecting-hardware"},"Connecting hardware"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/connection.jpg"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect One Wire Temperature Sensor to port ",(0,a.kt)("strong",{parentName:"p"},"D5")," of Grove - Base Hat for Raspberry Pi, Plugged into Raspberry Pi 4 Model B. And then connect the Raspberry Pi 4 Model B with a PC."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," After accessing the system of Raspberry Pi, git clone ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Seeed_Python_DS18B20.git"},"Seeed_Python_DS18B20"))," and install ",(0,a.kt)("strong",{parentName:"p"},"grove.py")," by inserting the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install Seeed-grove.py\n")),(0,a.kt)("p",null,"Or on supported GNU/Linux systems like the Raspberry Pi, you can install the driver locally from PyPI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"pip3 install seeed-python-Ds18b20\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," To install system-wide (this may be required in some cases):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"sudo pip3 install seeed-python-Ds18b20\n")),(0,a.kt)("p",null,"And you can insert the following command to upgrade the driver locally from PyPI:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"pip3 install --upgrade seeed-python-Ds18b20\n")),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},"import seeed_ds18b20\nimport time\n\ndef main():\n    DS18B20 = seeed_ds18b20.grove_ds18b20()\n    print(\"Please use Ctrl C to quit\")\n    while True:\n        temp_c,temp_f = DS18B20.read_temp\n        print('temp_c %.2f C   temp_f %.2f F' % (temp_c,temp_f),end=\" \")\n        print('\\r', end='')\n        time.sleep(0.5)\n\nif __name__ == \"__main__\":\n    main()   \n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"When running the demo code on Raspberry Pi, you ",(0,a.kt)("strong",{parentName:"p"},"MIGHT")," be reminded to enable the ",(0,a.kt)("strong",{parentName:"p"},"1-Wire")," interface. Then you should use the command ",(0,a.kt)("strong",{parentName:"p"},"sudo raspi-config")," and reboot to enable the 1-Wire device:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/1.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Run the demo by the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"cd Seeed_Python_DS18B20\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"python3 examples/BasicRead.py \n")),(0,a.kt)("admonition",{title:"success",type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"      The outcome will display as following if everything goes well:\n"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/img/TEM.png"})),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/One-Wire-Temperature/res/DS18B20-Datasheet.pdf"},"DS18B20-Datasheet"),"."),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,c=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return r?a.createElement(c,o(o({ref:t},u),{},{components:r})):a.createElement(c,o({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Air Quality Sensor v1.3",title:"Grove - Air Quality Sensor v1.3",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Air_Quality_Sensor_v1.3",last_update:{date:"1/5/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Air_Quality_Sensor_v1.3",id:"Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Air_Quality_Sensor_v1.3",title:"Grove - Air Quality Sensor v1.3",description:"Grove - Air Quality Sensor v1.3",source:"@site/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Air_Quality_Sensor_v1.3.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Air_Quality",slug:"/Grove-Air_Quality_Sensor_v1.3",permalink:"/zh-CN/Grove-Air_Quality_Sensor_v1.3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Air_Quality/Grove-Air_Quality_Sensor_v1.3.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672848e3,formattedLastUpdatedAt:"2023\u5e741\u67084\u65e5",frontMatter:{description:"Grove - Air Quality Sensor v1.3",title:"Grove - Air Quality Sensor v1.3",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Air_Quality_Sensor_v1.3",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Dust Sensor",permalink:"/zh-CN/Grove-Dust_Sensor"},next:{title:"Grove - Formaldehyde sensor",permalink:"/zh-CN/Grove-Formaldehyde-Sensor"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Demonstration",id:"demonstration",level:4},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-2",level:4},{value:"Play With Raspberry Pi(with GrovePi_Plus)",id:"play-with-raspberry-piwith-grovepi_plus",level:3},{value:"Hardware",id:"hardware-3",level:4},{value:"Software",id:"software-3",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("hr",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"This sensor is designed for comprehensive monitor over indoor air condition. It's responsive to a wide scope of harmful gases, as carbon monoxide, alcohol, acetone, thinner, formaldehyde and so on. Due to the measuring mechanism, this sensor can't output specific data to describe target gases' concentrations quantitatively. But it's still competent enough to be used in applications that require only qualitative results, like auto refresher sprayers and auto air cycling systems."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.\n"))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Air Quality Sensor v1.3"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"May 2016")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Responsive to a wide scope of target gases"),(0,n.kt)("li",{parentName:"ul"},"Cost efficient"),(0,n.kt)("li",{parentName:"ul"},"Durable"),(0,n.kt)("li",{parentName:"ul"},"Compatible with 5V and 3.3V")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"1. Requires relatively clean air as an initial condition.\n2. Long time exposure to highly polluted air can significantly weaken its sensitivity.\n3. Coffre-fort et armoire forte:\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"demonstration"},"Demonstration"),(0,n.kt)("p",null,"As described in Introduction, this sensor performs better in providing qualitative results over a wide scope of target gases. In this demo, we will define 4 statuses for reference in the '.cpp' file. They are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a. air fresh -- indicating a good air condition"),(0,n.kt)("li",{parentName:"ul"},"b. low pollution -- indicating a rather low concentration of target gases exist."),(0,n.kt)("li",{parentName:"ul"},'c. high pollution(without "Force signal active" message printed on serial monitor) -- you should be aware of the pollution level and consider if some measures could be taken.'),(0,n.kt)("li",{parentName:"ul"},'d. high pollution(with "Force signal active" message printed on serial monitor) -- instant measures should be taken to improve the air quality.')),(0,n.kt)("p",null,"We encapsulated the decision structure in a '.cpp' file. You can find information there on how to modify the thresholds."),(0,n.kt)("p",null,"Let's try it out!"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Air Quality Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - Air Quality Sensor to port ",(0,n.kt)("strong",{parentName:"li"},"A0")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove_-_Air_Quality_Sensor_v1.3_Test.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove - Air Quality Sensor to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Air Quality Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A0"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Download the  ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Air_quality_Sensor"},"AirQuality_Sensor Library"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Refer ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},'#include"AirQuality.h"\n#include"Arduino.h"\nAirQuality airqualitysensor;\nint current_quality =-1;\nvoid setup()\n{\n    Serial.begin(9600);\n    airqualitysensor.init(A0);\n}\nvoid loop()\n{\n    current_quality=airqualitysensor.slope();\n    if (current_quality >= 0)// if a valid data returned.\n    {\n        if (current_quality==0)\n            Serial.println("High pollution! Force signal active");\n        else if (current_quality==1)\n            Serial.println("High pollution!");\n        else if (current_quality==2)\n            Serial.println("Low pollution!");\n        else if (current_quality ==3)\n            Serial.println("Fresh air");\n    }\n}\nISR(TIMER2_OVF_vect)\n{\n    if(airqualitysensor.counter==122)//set 2 seconds as a detected duty\n    {\n        airqualitysensor.last_vol=airqualitysensor.first_vol;\n        airqualitysensor.first_vol=analogRead(A0);\n        airqualitysensor.counter=0;\n        airqualitysensor.timer_index=1;\n        PORTB=PORTB^0x20;\n    }\n    else\n    {\n        airqualitysensor.counter++;\n    }\n}\n\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," We will see the distance display on terminal as below.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Waiting sensor to init...\nSensor ready.\nSensor value: 48\nFresh air.\nSensor value: 51\nFresh air.\nSensor value: 49\nFresh air.\nSensor value: 48\nFresh air.\nSensor value: 48\nFresh air.\nSensor value: 48\nFresh air.\n")),(0,n.kt)("p",null,"To adjust the thresholds and indicating messages, refer to the decision structure below in the .cpp file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"int AirQualitySensor::slope(void) {\n    _lastVoltage = _currentVoltage;\n    _currentVoltage = analogRead(_pin);\n\n    _voltageSum += _currentVoltage;\n    _volSumCount += 1;\n\n    updateStandardVoltage();\n    if (_currentVoltage - _lastVoltage > 400 || _currentVoltage > 700) {\n        return AirQualitySensor::FORCE_SIGNAL;\n    }\n    else if ((_currentVoltage - _lastVoltage > 400 && _currentVoltage < 700)\n             || _currentVoltage - _standardVoltage > 150) {\n        return AirQualitySensor::HIGH_POLLUTION;\n    }\n    else if ((_currentVoltage - _lastVoltage > 200 && _currentVoltage < 700)\n             || _currentVoltage - _standardVoltage > 50) {\n        return AirQualitySensor::LOW_POLLUTION;\n    }\n    else {\n        return AirQualitySensor::FRESH_AIR;\n    }\n\n    return -1;\n}\n")),(0,n.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Air Quality Sensor to port A0 of a Base Shield."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,n.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/cc_Air_Quality_Sensor.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you will see air quality in the Serial Monitor.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,n.kt)("h4",{id:"hardware-2"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Air Quality Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Air-quality-sensor-v1-3-p-2439.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry Pi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Air Quality Sensor to the A0 port of the Base Hat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.\n",(0,n.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/connect3.jpg",alt:null}))),(0,n.kt)("h4",{id:"software-2"},"Software"),(0,n.kt)("admonition",{title:"attention",type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Excute below command to run the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 grove_air_quality_sensor_v1_3.py 0\n")),(0,n.kt)("p",null,"Following is the grove_air_quality_sensor_v1_3.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveAirQualitySensor:\n\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def value(self):\n        return self.adc.read(self.channel)\n\nGrove = GroveAirQualitySensor\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveAirQualitySensor(int(sys.argv[1]))\n\n    print('Detecting ...') \n    while True:\n        value = sensor.value        \n        if value > 100:\n            print(\"{}, High Pollution.\".format(value))\n        else:\n            print(\"{}, Air Quality OK.\".format(value))\n\n        time.sleep(.1)\n\nif __name__ == '__main__':\n    main()\n\n")),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result:\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_air_quality_sensor_v1_3.py 0 \nDetecting ...\n138, High Pollution.\n139, High Pollution.\n140, High Pollution.\n141, High Pollution.\n139, High Pollution.\n140, High Pollution.\n140, High Pollution.\n140, High Pollution.\n139, High Pollution.\n138, High Pollution.\n139, High Pollution.\n138, High Pollution.\n138, High Pollution.\n^CTraceback (most recent call last):\n  File "grove_air_quality_sensor_v1_3.py", line 71, in <module>\n    main()\n  File "grove_air_quality_sensor_v1_3.py", line 68, in main\n    time.sleep(.1)\nKeyboardInterrupt\n\n')),(0,n.kt)("p",null,"You can use this sensor to detect the air quality. Press ++ctrl+c++ to quit."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as the digital port. So please make sure you plug the module into the correct port, otherwise, there may be pin conflicts.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-piwith-grovepi_plus"},"Play With Raspberry Pi(with GrovePi_Plus)"),(0,n.kt)("h4",{id:"hardware-3"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Air Quality Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"pir",width:500,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/Grove%20Air%20Quality%20Sensor_big.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Air-quality-sensor-v1.3-p-2439.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-MOSFET ranger to ",(0,n.kt)("strong",{parentName:"li"},"A0")," port of GrovePi_Plus."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,n.kt)("h4",{id:"software-3"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to the demos' directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2."),"  To see the code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'nano grove_air_quality_sensor.py   # "Ctrl+x" to exit #\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove Air Quality Sensor to analog port A0\n# SIG,NC,VCC,GND\nair_sensor = 0\n\ngrovepi.pinMode(air_sensor,"INPUT")\n\nwhile True:\n    try:\n        # Get sensor value\n        sensor_value = grovepi.analogRead(air_sensor)\n\n        if sensor_value > 700:\n            print "High pollution"\n        elif sensor_value > 300:\n            print "Low pollution"\n        else:\n            print "Air fresh"\n\n        print "sensor_value =", sensor_value\n        time.sleep(.5)\n\n    except IOError:\n        print "Error"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Run the demo.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python grove_air_quality_sensor.py\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," We will see the output display on terminal as below.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/img/pi_result.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/AirQuality_Sensor.zip"},"AirQuality Sensor Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch_pcb.zip"},"Grove_-_Air_quality_sensor_v1.3_sch_pcb")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_-_Air_quality_sensor_v1.3_sch.pdf"},"Grove_-_Air_quality_sensor_v1.3_sch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Air_quality_sensor_MP503%20Chinese.pdf"},"Air_quality_sensor_MP503_Chinese")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Mp503%20English.pdf"},"Air_quality sensor_MP503_English")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Codecraft]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Air_Quality_Sensor_v1.3/res/Grove_Air_Quality_Sensor_CDC_File.zip"},"CDC File"))),(0,n.kt)("h2",{id:"projects"},"Projects"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SPCPM (Solar Powered City Pollution Monitor)"),": Low maintenance, high output air pollution, sound pollution that put throughout the city without wiring."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/100181/spcpm-solar-powered-city-pollution-monitor-ca4072/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"A website to see the environment data around you"),":"),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/kevin-lee2/a-website-to-see-the-environment-data-around-you-1aea66/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Home Control Center using BeagleBone Green Wireless"),":"),(0,n.kt)("iframe",{frameBorder:0,height:"327.5",scrolling:"no",src:"https://project.seeedstudio.com/kevin-lee2/home-control-center-using-beaglebone-green-wireless-107a0d/embed",width:350}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);
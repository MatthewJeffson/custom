"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46340],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={description:"Grove - Heelight Sensor",title:"Grove - Heelight Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Heelight_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor",title:"Grove - Heelight Sensor",description:"Grove - Heelight Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Heelight_Sensor",permalink:"/custom/zh-CN/Grove-Heelight_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Heelight_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{description:"Grove - Heelight Sensor",title:"Grove - Heelight Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Heelight_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Digital Light Sensor",permalink:"/custom/zh-CN/Grove-Digital_Light_Sensor"},next:{title:"Grove - Light Sensor",permalink:"/custom/zh-CN/Grove-Light_Sensor"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"What do we need?",id:"what-do-we-need",level:3},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Upload the code",id:"upload-the-code",level:3},{value:"Results",id:"results",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/Heelight%20Sensor%20plus%20coin.jpg"})),(0,a.kt)("p",null,"Grove \u2013 Heelight Sensor is a smart voice sensor that can recognize up tp 500 digital voice commands. It was originally used on the Heelight \u2013 a smart colorful bulb that can be controlled by digital sound waves. Now we introduce this sensor into the small and neat Grove modules, allow you to realize smart control in your Arduino \u2013 based projects."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Digital Voice Recognition")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Support over 500 digital voice commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compatible with the Grove system"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Heelight Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"DC 3.3V~5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,a.kt)("td",{parentName:"tr",align:null},"15mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Identification Range"),(0,a.kt)("td",{parentName:"tr",align:null},"0.1~10m")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Angle Range"),(0,a.kt)("td",{parentName:"tr",align:null},"360\xb0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null},"20*20mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Baud Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"115200")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Serial Port Output"),(0,a.kt)("td",{parentName:"tr",align:null},"TTL logic level")))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"what-do-we-need"},"What do we need?"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Function"),(0,a.kt)("th",{parentName:"tr",align:null},"Qty"),(0,a.kt)("th",{parentName:"tr",align:null},"Link"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Base Shield V2"),(0,a.kt)("td",{parentName:"tr",align:null},"Provide Grove connectors"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("td",{parentName:"tr",align:null},"Controller"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Heelight Sensor"),(0,a.kt)("td",{parentName:"tr",align:null},"Sensor"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Heelight-Sensor-p-2867.html"},"Get One Now"))))),(0,a.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Plug the Base Shield V2 on the Seeeduino V4.2"),(0,a.kt)("li",{parentName:"ul"},"Connect the Grove - Heelight Sensor to D6 port of Base Shield V2.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/hardware%20connection.JPG"})),(0,a.kt)("h3",{id:"upload-the-code"},"Upload the code"),(0,a.kt)("p",null,"Before uploading the code, please make sure you have already selected the right board and COM port. For Seeeduino V4.2, we can choose Arduino/Genuino Uno."),(0,a.kt)("p",null,"This is the basic example that can show the ability of the sensor, which is output different hex values in the serial monitor when it receives (or hear) different digital sounds. You can also download this example in the Resources"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/*\n  Software serial multple serial test\n\n Receives from the hardware serial, sends to software serial.\n Receives from software serial, sends to hardware serial.\n\n The circuit:\n * RX is digital pin 10 (connect to TX of other device)\n * TX is digital pin 11 (connect to RX of other device)\n\n Note:\n Not all pins on the Mega and Mega 2560 support change interrupts,\n so only the following can be used for RX:\n 10, 11, 12, 13, 50, 51, 52, 53, 62, 63, 64, 65, 66, 67, 68, 69\n\n Not all pins on the Leonardo support change interrupts,\n so only the following can be used for RX:\n 8, 9, 10, 11, 14 (MISO), 15 (SCK), 16 (MOSI).\n\n created back in the mists of time\n modified 25 May 2012\n by Tom Igoe\n based on Mikal Hart\'s example\n\n This example code is in the public domain.\n*/\n\n#include <SoftwareSerial.h>\n\nSoftwareSerial mySerial(6, 7); // RX, TX\n\nvoid setup()\n{\n  // Open serial communications and wait for port to open:\n  Serial.begin(57600);\n   mySerial.begin(115200);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for Leonardo only\n  }\n\n\n  Serial.println("Goodnight moon!");\n\n  // set the data rate for the SoftwareSerial port\n\n  //mySerial.println("Hello, world?");\n}\n\nvoid loop() // run over and over\n{\n  if (mySerial.available())\n  {\n    Serial.print(mySerial.read(),HEX);\n    Serial.print(" ");\n    Serial.print(mySerial.read(),HEX);\n    Serial.print(" ");\n    Serial.print(mySerial.read(),HEX);\n    Serial.print(" ");\n    Serial.print(mySerial.read(),HEX);\n    Serial.println();\n  }\n  if (Serial.available())\n    mySerial.write(Serial.read());\n}\n')),(0,a.kt)("h3",{id:"results"},"Results"),(0,a.kt)("p",null,"Open the serial monitor, set baud rate to be 57600, then play the sound. We have prepared 511 different ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip"},"digital sounds")," for you. Every time one sound is played, the heelight sensor will output a hex value correspond to the sound, and the last 2 characters of the hex value is the same as the sounds value."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/img/heelight%20sensor%20output.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this sensor doesn't work well when you play the specific sounds we provided via PC or other speakers, please set the volume in a low level. We recommend 10/100 in windows PC.")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.heelight.com/"},"Website of Heelight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Heelight_Sensor/res/audio.zip"},"500+ digital voice audio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/SeeedDocument/Grove_Heelight_Sensor/tree/master/res/Grove_-_Heelight_Sensor_example"},"Example Code"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);
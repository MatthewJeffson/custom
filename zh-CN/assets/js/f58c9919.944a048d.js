"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),c=o,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<n;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},47045:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>d});var a=r(87462),o=(r(67294),r(3905));const n={description:"Xadow - Barometer BMP180",title:"Xadow - Barometer BMP180",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Barometer_BMP180",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Barometer_BMP180",id:"Seeed_Elderly/Xadow/Xadow_Barometer_BMP180",title:"Xadow - Barometer BMP180",description:"Xadow - Barometer BMP180",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Barometer_BMP180.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Barometer_BMP180",permalink:"/zh-CN/Xadow_Barometer_BMP180",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Barometer_BMP180.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Xadow - Barometer BMP180",title:"Xadow - Barometer BMP180",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Barometer_BMP180",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Barometer",permalink:"/zh-CN/Xadow_Barometer"},next:{title:"Xadow - Basic Sensors",permalink:"/zh-CN/Xadow_Basic_Sensors"}},s={},d=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Download Library",id:"download-library",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Xadow-bmp180.JPG",alt:null})),(0,o.kt)("p",null,"The module can measure the air pressure and temperature of the current environment, and then you can convert this signal to information of altitude. The BMP180 is the function compatible successor of the BMP085, a new generation of high precision digital pressure sensors for consumer applications. The ultra-low power, low voltage electronics, superior performance of the BMP180 is optimized for use in wearable device, mobile phones, PDAs, GPS navigation devices and outdoor equipment. The I2C interface allows for easy system integration with a microcontroller."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Barometer-BMP180-v1.0-p-2412.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Working Voltage: 3.3v\nPressure Range:300 ~ 1100hPa(+9000m ~ -500m relating to sea level)\nLow Power\nControl Mode: I2C (address 0x77)\nOperating Temperature\uff1a-40 ~ +85 \xb0C\nDimensions: 25.43mm x 20.35mm"),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"With Xadow Main Board")),(0,o.kt)("p",null,"The demo will show you how to get the air pressure and temperature of the current environment."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/IMG_2379.JPG",alt:null})),(0,o.kt)("p",null,"!!!Note\nWhen connecting Xadow - Barometer BMP180 to Xadow - Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module)."),(0,o.kt)("h2",{id:"download-library"},"Download Library"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Xadow Barometer BMP180 is sharing the library with Grove - Barometer Sensor. You can download directly the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Barometer_Sensor"},"library")," from GitHub."),(0,o.kt)("li",{parentName:"ul"},"Now you can open the code and upload it to Xadow Main Board. If you have not installed the Xadow Driver, You can learn the operation steps by referring to the ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Getting_Started_with_Seeeduino/"},"getting started")," in wiki main page .")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/*\n* Get pressure, altitude, and temperature from the BMP180.\n* Serial.print it out at 9600 baud to serial monitor.\n*/\n#include "Barometer.h"\n#include "Wire.h";\nfloat temperature;\nfloat pressure;\nfloat atm;\nfloat altitude;\nBarometer myBarometer;\nvoid setup(){\n  Serial.begin(9600);\n  myBarometer.init();\n}\n\nvoid loop()\n{\n   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first\n   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature\n   altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters\n   atm = pressure / 101325;\n\n  Serial.print("Temperature: ");\n  Serial.print(temperature, 2); //display 2 decimal places\n  Serial.println("deg C");\n\n  Serial.print("Pressure: ");\n  Serial.print(pressure, 0); // whole numbers only.\n  Serial.println(" Pa");\n\n  Serial.print("Ralated Atmosphere: ");\n  Serial.println(atm, 4); //display 4 decimal places\n\n  Serial.print("Altitude: ");\n  Serial.print(altitude, 2); //display 2 decimal places\n  Serial.println(" m");\n\n  Serial.println();\n\n  delay(1000); //wait a second and get values again.\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Barometer_Sensor.jpg",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The following is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/img/Pressure_and_Altitude.jpg",alt:null})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/Xadow_-_Barometer_BMP180_v1.0_sch_pcb.zip"},"Xadow - Barometer BMP180 Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Barometer_Sensor"},"Barometer_Sensor Library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Barometer_BMP180/res/BMP180.pdf"},"BMP180 datasheet"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
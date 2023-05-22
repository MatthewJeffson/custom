"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[97966],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),s=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),c=o,h=m["".concat(d,".").concat(c)]||m[c]||p[c]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),o=(r(67294),r(3905));const n={description:"Xadow - Barometer",title:"Xadow - Barometer",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Barometer",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Barometer",id:"Seeed_Elderly/Xadow/Xadow_Barometer",title:"Xadow - Barometer",description:"Xadow - Barometer",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Barometer.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Barometer",permalink:"/custom/zh-CN/Xadow_Barometer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Barometer.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Xadow - Barometer",title:"Xadow - Barometer",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Barometer",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - BLE",permalink:"/custom/zh-CN/Xadow_BLE"},next:{title:"Xadow - Barometer BMP180",permalink:"/custom/zh-CN/Xadow_Barometer_BMP180"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Download Library",id:"download-library",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Baro_Meter_01.jpg",alt:null})),(0,o.kt)("p",null,"The module can measure the air pressure and temperature of the current environment, and then you can convert this signal to information of altitude. If you are planning to use Xadow to do a wearable device and measure the altitude when you climb the mountain, then the module will be your perfect choice."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Barometer-p-1522.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Working Voltage: 1.8 ~ 3.3v"),(0,o.kt)("li",{parentName:"ul"},"Pressure Range: 300 ~ 1100hPa(+9000m ~ 4500m above sea level)"),(0,o.kt)("li",{parentName:"ul"},"Low Power"),(0,o.kt)("li",{parentName:"ul"},"Control Mode: I2C (address 0x77)"),(0,o.kt)("li",{parentName:"ul"},"Operating Temperature\uff1a-40 ~ +85 \xb0C"),(0,o.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The demo will show you how to get the air pressure and temperature of the current environment."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Installation")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer/img/XadowBarometerUsage.jpg",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When connect Xadow Barometer to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).\n"))),(0,o.kt)("h2",{id:"download-library"},"Download Library"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Xadow Barometer is sharing the library with Grove - Barometer Sensor. You can download directly the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Barometer_Sensor"},"library")," from Github."),(0,o.kt)("li",{parentName:"ul"},"Now you can open the code and upload it to Xadow Main Board. If you have not installed the Xadow Driver, You can learn the operation steps by referring to the ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Xadow_Main_Board/"},"getting started")," in wiki main page .")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/*\n* Get pressure, altitude, and temperature from the BMP085.\n* Serial.print it out at 9600 baud to serial monitor.\n*/\n#include "Barometer.h"\n#include <Wire.h>\nfloat temperature;\nfloat pressure;\nfloat atm;\nfloat altitude;\nBarometer myBarometer;\nvoid setup(){\n  Serial.begin(9600);\n  myBarometer.init();\n}\n\nvoid loop()\n{\n   temperature = myBarometer.bmp085GetTemperature(myBarometer.bmp085ReadUT()); //Get the temperature, bmp085ReadUT MUST be called first\n   pressure = myBarometer.bmp085GetPressure(myBarometer.bmp085ReadUP());//Get the temperature\n   altitude = myBarometer.calcAltitude(pressure); //Uncompensated calculation - in Meters\n   atm = pressure / 101325;\n\n  Serial.print("Temperature: ");\n  Serial.print(temperature, 2); //display 2 decimal places\n  Serial.println("deg C");\n\n  Serial.print("Pressure: ");\n  Serial.print(pressure, 0); //whole number only.\n  Serial.println(" Pa");\n\n  Serial.print("Ralated Atmosphere: ");\n  Serial.println(atm, 4); //display 4 decimal places\n\n  Serial.print("Altitude: ");\n  Serial.print(altitude, 2); //display 2 decimal places\n  Serial.println(" m");\n\n  Serial.println();\n\n  delay(1000); //wait a second and get values again.\n}\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the serial monitor to receive the sensor's data including temperature, barometric pressure value, relative atmosphere pressure and altitude.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Xadow_Baremeter_Result.jpg",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here is a reference graph plotting out the relationship between altitude above sea level and barometric pressure.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Barometer/img/Pressure_and_Altitude.jpg",alt:null})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer.zip"},"Xadow Barometer Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Barometer/res/Xadow_Barometer_Library.zip"},"Xadow Barometer Library")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_Barometer/res/BST-BMP085-DS000-06.pdf"},"BST-BMP085-DS000-06"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
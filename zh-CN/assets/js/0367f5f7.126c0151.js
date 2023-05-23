"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=l.createContext({}),d=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=d(e.components);return l.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,k=p["".concat(u,".").concat(m)]||p[m]||c[m]||r;return n?l.createElement(k,i(i({ref:t},s),{},{components:n})):l.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<r;d++)i[d]=n[d];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var l=n(87462),o=(n(67294),n(3905));const r={description:"RePhone Geo Kit",title:"RePhone Geo Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RePhone_Geo_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,a={unversionedId:"Seeed_Elderly/rePhone/RePhone_Geo_Kit",id:"Seeed_Elderly/rePhone/RePhone_Geo_Kit",title:"RePhone Geo Kit",description:"RePhone Geo Kit",source:"@site/docs/Seeed_Elderly/rePhone/RePhone_Geo_Kit.md",sourceDirName:"Seeed_Elderly/rePhone",slug:"/RePhone_Geo_Kit",permalink:"/custom/zh-CN/RePhone_Geo_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/RePhone_Geo_Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"RePhone Geo Kit",title:"RePhone Geo Kit",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RePhone_Geo_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"RePhone Introduction",permalink:"/custom/zh-CN/RePhone"},next:{title:"RePhone Lumi Kit",permalink:"/custom/zh-CN/RePhone_Lumi_Kit"}},u={},d=[{value:"Specification",id:"specification",level:2},{value:"Xadow GSM+BLE",id:"xadow-gsmble",level:3},{value:"Xadow GPS v2",id:"xadow-gps-v2",level:3},{value:"Xadow GSM Breakout",id:"xadow-gsm-breakout",level:3},{value:"Module Connection",id:"module-connection",level:2},{value:"Run a GPS Testing Code",id:"run-a-gps-testing-code",level:2},{value:"More Example Code",id:"more-example-code",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg",alt:null})),(0,o.kt)("p",null,"The combination of GSM module and GPS module is what makes RePhone Geo Kit brilliant. The kit allows you to obtain the real-time geographic position, altitude, travelling speed and time information at any time, and all-weather conditions, through GSM network (SMS). Also as a bonus, the Xadow GSM Breakout can provides you more possibilities hacking electronics."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/RePhone-Geo-Kit-p-2624.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"xadow-gsmble"},"Xadow GSM+BLE"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null," Microcontroller "),(0,o.kt)("td",null," MT2502")),(0,o.kt)("tr",null,(0,o.kt)("td",null," MCU Core "),(0,o.kt)("td",null," 32-bit ARM7EJ-STM RISC processor")),(0,o.kt)("tr",null,(0,o.kt)("td",null," RAM "),(0,o.kt)("td",null," 4 MB")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Flash Memory "),(0,o.kt)("td",null," 16 MB")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Power Supply "),(0,o.kt)("td",null," 3.3 ~ 4.2V(no SIM)/3.5 ~ 4.2V(with SIM)")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Power Consumption "),(0,o.kt)("td",null," 20mW/30mW/52mW @ standby(no radio)/standby(GSM)/standby(BT)")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Quad-band "),(0,o.kt)("td",null," 850/900/1800/1900 MHz")),(0,o.kt)("tr",null,(0,o.kt)("td",null," GPRS "),(0,o.kt)("td",null," Class 12 modem")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Clock Speed "),(0,o.kt)("td",null," 260 MHz")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Connectors "),(0,o.kt)("td",null," 35 PIN Connector & 11 PIN Connector for Xadow Modules; JST 1.0 Connector for the battery")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Interfaces "),(0,o.kt)("td",null," LCD, Audio, I2C, SPI, UART, and GPIOs etc")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Dimensions "),(0,o.kt)("td",null," 25.37mm \xd7 20.30mm / 1\u201d \xd7 0.8\u201d"))),(0,o.kt)("h3",{id:"xadow-gps-v2"},"Xadow GPS v2"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null," Microcontroller "),(0,o.kt)("td",null," Kinetis KL02")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Core "),(0,o.kt)("td",null," ARM\xae 32-bit Cortex\xae -M0+CPU")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Power Supply "),(0,o.kt)("td",null," 3.3 ~ 6 V (via breakout pins)")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Flash "),(0,o.kt)("td",null," 32 KB")),(0,o.kt)("tr",null,(0,o.kt)("td",null," SRAM "),(0,o.kt)("td",null," 4 KB")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Clock Speed "),(0,o.kt)("td",null," 48 MHz")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Power Consumption "),(0,o.kt)("td",null," 18mA@Tracking, 21mA@Acquisition")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Power Saving "),(0,o.kt)("td",null," Typ. 3mA@AlwaysLocateTM, 7uA@Backup",(0,o.kt)("p",null,"Mode, 180uA@Standby Mode"))),(0,o.kt)("tr",null,(0,o.kt)("td",null," Channel "),(0,o.kt)("td",null," 22(Tracking) / 66 (Acquisition)")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Update Rate "),(0,o.kt)("td",null," 1Hz(Default), up to 10Hz")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Horizontal Position Accuracy "),(0,o.kt)("td",null," <2.5m CEP")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Velocity Accuracy "),(0,o.kt)("td",null," <0.1m/s")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Maximum Velocity "),(0,o.kt)("td",null," Max.515m/s")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Cold/warm start with EASYTM "),(0,o.kt)("td",null," 215s/5s")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Acquisition Sensitivity "),(0,o.kt)("td",null," -145dBm")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Tracking Sensitivity "),(0,o.kt)("td",null,"-163dBm")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Operating Temperature "),(0,o.kt)("td",null," -40\u2103 to 85\u2103")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Protocols "),(0,o.kt)("td",null," NMEA 0183/PMTK")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Antenna Type "),(0,o.kt)("td",null," Chip antenna")),(0,o.kt)("tr",null,(0,o.kt)("td",null," Interface "),(0,o.kt)("td",null," Interface with Xadow GSM+BLE through",(0,o.kt)("p",null,"I2C (7-bit address 0x05)"))),(0,o.kt)("tr",null,(0,o.kt)("td",null," Dimensions "),(0,o.kt)("td",null," 25.37mm X 20.30mm / 1\u201d \xd7 0.8\u201d"))),(0,o.kt)("h3",{id:"xadow-gsm-breakout"},"Xadow GSM Breakout"),(0,o.kt)("table",null,(0,o.kt)("tr",null,(0,o.kt)("td",null," Dimensions "),(0,o.kt)("td",null," 25.37mm \xd7 20.30mm / 1\u201d \xd7 0.8\u201d"))),(0,o.kt)("h2",{id:"module-connection"},"Module Connection"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"The Xadow GSM+BLE integrates a Xadow 36 Pin connector and a Xadow 11 Pin connector. As the image shows here, if needed, you can connect the Xadow GSM+BLE to Xadow GSM breakout with a Xadow 36 Pin cable, but do bear in mind that the cable has to be inserted ",(0,o.kt)("strong",{parentName:"p"},"firmly")," and ",(0,o.kt)("strong",{parentName:"p"},"flat"),", and most importantly, ",(0,o.kt)("strong",{parentName:"p"},"keep the 'TOP' side upwards"),". The Xadow 11 Pin connector have much more flexible design, you can connect the Xadow GPS v2 and the mainboard with a Xadow 11 Pin ribbon cable in whatever way you want, again just make sure cable is firmly inserted."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Geo_Kit_wiki_2.jpg",alt:null})),(0,o.kt)("h2",{id:"run-a-gps-testing-code"},"Run a GPS Testing Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Then copy the following GPS testing code to your Arduino IDE for RePhone. Choose the ",(0,o.kt)("strong",{parentName:"p"},'board as "RePhone"')," and ",(0,o.kt)("strong",{parentName:"p"},'download it with the "MTK USB Debug Port"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#include <LGPS.h>\n#include <stdio.h>\n\nvoid setup()\n{\n    Serial.begin(115200);\n    Serial.print("GPS test.\\r\\n");\n}\n\nvoid loop()\n{\n    unsigned char *utc_date_time = 0;\n    char buffer[50] = {0,};\n\n    if(LGPS.check_online())\n    {\n        utc_date_time = LGPS.get_utc_date_time();\n        sprintf(buffer, "GPS UTC:%d-%d-%d  %d:%d:%d\\r\\n", utc_date_time[0], utc_date_time[1], utc_date_time[2], utc_date_time[3], utc_date_time[4],utc_date_time[5]);\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS status is %c\\r\\n", LGPS.get_status());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS latitude is %c:%f\\r\\n", LGPS.get_ns(), LGPS.get_latitude());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS longitude is %c:%f\\r\\n", LGPS.get_ew(), LGPS.get_longitude());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS speed is %f\\r\\n", LGPS.get_speed());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS course is %f\\r\\n", LGPS.get_course());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS position fix is %c\\r\\n", LGPS.get_position_fix());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS sate used is %d\\r\\n", LGPS.get_sate_used());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS altitude is %f\\r\\n", LGPS.get_altitude());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS mode is %c\\r\\n", LGPS.get_mode());\n        Serial.print(buffer);\n\n        sprintf(buffer, "GPS mode2 is %c\\r\\n", LGPS.get_mode2());\n        Serial.print(buffer);\n    }\n    delay(1000);\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Please be noted that: To obtain a better signal strength, you should put the GPS module outside the window/house in a open space. Also, after initiated the first time, it might take a while before it tracks down the satellites.")),(0,o.kt)("p",null,"Now ",(0,o.kt)("strong",{parentName:"p"},"change the Port to MTK USB Modern Port(it's very important to so)"),", you should be able to see the GPS info on the Serial monitor."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_detected.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/GPS_undetected.png.png",alt:null})),(0,o.kt)("h2",{id:"more-example-code"},"More Example Code"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Playing with some example code would a good start if you are heading into some even more interesting project."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Simply setup your ",(0,o.kt)("strong",{parentName:"li"},"sketchbook location")," in the ",(0,o.kt)("strong",{parentName:"li"},"preference")," as where you install the Arduino IDE for RePhone, then you'll be able to see the example codes.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Arduino_Sketchlocation.png",alt:null})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"You may find the Arduino example coded manually for all the RePhone modules in the following path:")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Arduino_IDE_for_RePhone-master\\hardware\\arduino\\mtk\\libraries"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/Example_code_Arduino_IDE.png",alt:null})),(0,o.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RePhone_Geo_Kit/img/RePhone_Community-2.png",alt:null}))),(0,o.kt)("p",null,"We\u2019ve been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,o.kt)("p",null,"Now join us in the ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewforum.php?f=71&sid=b70f8138c89becf7701260bb41faf9f4"},"RePhone Community"),"! Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,o.kt)("h3",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.kt)("p",null,"Some frequently asked questions in RePhone Community are collected and answered to the topic ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://forum.seeedstudio.com/viewtopic.php?f=71&t=6664&p=23753#p23753"},'"Frequently Asked Questions of RePhone (FAQ)"'))," , the topic will be kept updating whenever a new FAQ comes out."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
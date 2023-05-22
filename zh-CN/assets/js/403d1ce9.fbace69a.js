"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,k=c["".concat(u,".").concat(m)]||c[m]||p[m]||a;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},52907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={description:"Bugduino",title:"Bugduino",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bugduino",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/Discrete Product/Bugduino",id:"Seeed_Elderly/Discrete Product/Bugduino",title:"Bugduino",description:"Bugduino",source:"@site/docs/Seeed_Elderly/Discrete Product/Bugduino.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/Bugduino",permalink:"/zh-CN/Bugduino",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/Bugduino.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Bugduino",title:"Bugduino",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bugduino",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Matrix Clock",permalink:"/zh-CN/Matrix_Clock"},next:{title:"CUI32Stem",permalink:"/zh-CN/CUI32Stem"}},u={},s=[{value:"Features",id:"features",level:2},{value:"Schematic",id:"schematic",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Mechanic Dimensions",id:"mechanic-dimensions",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Programming",id:"programming",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bugduino/img/Bugduino-V2r0-Front.jpg",alt:null})),(0,i.kt)("p",null,"Bugduino is an Arduino compatible module."),(0,i.kt)("p",null,"Designed for working with ",(0,i.kt)("a",{parentName:"p",href:"http://www.buglabs.net/"},"Buglabs BUG platform"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Bugduino-V2.0-p-863.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://arduino.cc"},"Arduino")," compatible, based on Seeeduino"),(0,i.kt)("li",{parentName:"ul"},"BUG connector"),(0,i.kt)("li",{parentName:"ul"},"USB to Uart: FT232RL"),(0,i.kt)("li",{parentName:"ul"},"ATmega328 microcontroller"),(0,i.kt)("li",{parentName:"ul"},"Input voltage - 7-12V"),(0,i.kt)("li",{parentName:"ul"},"14 Digital I/O Pins (6 PWM outputs)"),(0,i.kt)("li",{parentName:"ul"},"8 Analog Inputs"),(0,i.kt)("li",{parentName:"ul"},"32k Flash Memory"),(0,i.kt)("li",{parentName:"ul"},"16Mhz Clock Speed")),(0,i.kt)("p",null,"**"),(0,i.kt)("h2",{id:"schematic"},"Schematic"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bugduino/res/BUGduinoSchematicPDF.pdf"},"File:BUGduinoSchematicPDF.pdf"))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",{cellpadding:"1",cellspacing:"1"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," Microprocessor"),(0,i.kt)("td",null," Atmega328")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," PCB size"),(0,i.kt)("td",null," 60.2cm x 60.2cm")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," Indicators"),(0,i.kt)("td",null," POWER,Green LED. LEDs for Txd, Rxd, Rst")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," Power supply"),(0,i.kt)("td",null," 5V DC")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," Interface"),(0,i.kt)("td",null," Mini-B USB, 2.54mm pitch pin header")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," Connectivity"),(0,i.kt)("td",null," USB")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," Communication Protocol"),(0,i.kt)("td",null," UART, Bit Bang I/O, SPI, I2C")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"}," ROHS"),(0,i.kt)("td",null," YES"))),(0,i.kt)("h2",{id:"mechanic-dimensions"},"Mechanic Dimensions"),(0,i.kt)("p",null,"60.2mm ",(0,i.kt)("em",{parentName:"p"}," 60.2mm ")," 20.5mm"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Toggle Serial Switch to USB side;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Plug USB cable;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Corresponding COM port in Arduino IDE;")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Select "Arduino Duemilanove or Nano w/ ATmega328" in Arduino Board menu;')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"click the upload bottom in Arduino IDE;"))),(0,i.kt)("h3",{id:"programming"},"Programming"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#include <Wire.h>\n\n//SLOTS: Vendor:  0x02\n//SLOTS: Product  0x10\n//SLOTS: Revision 0x20\n//A0--\x3eGND, A1--\x3eGND, A2--\x3eGND\n#define AT24C02B_Addr  0b1010000\n\nunsigned char bugduino_signature[]=\n{\n    0x00,0x00,0x02,0x00,0x10,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x00,0x0b,0x16,0x00,0x00,0x00,0x0f\n};\nunsigned char address_map[]=\n{\n    0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,0x7f\n};\n\nvoid setup()\n{\n    Wire.begin();\n    Serial.begin(38400);\n}\nvoid loop()\n{\n  /*\n   */\n    unsigned char i = 0;\n    unsigned char eeprom = 0;\n    for(i=0;i<20;i++)\n    {\n        Wire.beginTransmission(AT24C02B_Addr); //start\n        Wire.send(address_map[i]);\n        Wire.endTransmission();    //stop\n        Wire.requestFrom(AT24C02B_Addr, 1);    // request\n        delay(1);\n        while(Wire.available())    // slave may send less than requested\n        {\n            unsigned char c = Wire.receive(); // receive a byte as character\n            if(c != bugduino_signature[i])\n            {\n                eeprom =1;\n            }\n        }\n    }\n    delay(100);\n\n    if(eeprom)\n    {\n        Serial.println("Write Signature");\n        for(i=0;i<20;i++)\n        {\n            Wire.beginTransmission(AT24C02B_Addr); //start\n            Wire.send(address_map[i]);\n            Wire.send(bugduino_signature[i]);\n            Wire.endTransmission();    //stop\n            delay(10);\n        }\n    }\n    else\n    {\n        Serial.println("Signature OK");\n    }\n    for(;;);\n}\n')),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
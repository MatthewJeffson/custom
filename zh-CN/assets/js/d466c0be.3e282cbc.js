"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72102],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>c});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function o(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function i(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?o(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)l=o[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):i(i({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},h=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,o=t.originalType,u=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),k=d(l),h=r,c=k["".concat(u,".").concat(h)]||k[h]||p[h]||o;return l?n.createElement(c,i(i({ref:e},s),{},{components:l})):n.createElement(c,i({ref:e},s))}));function c(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=l.length,i=new Array(o);i[0]=h;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a[k]="string"==typeof t?t:r,i[1]=a;for(var d=2;d<o;d++)i[d]=l[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}h.displayName="MDXCreateElement"},40140:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var n=l(87462),r=(l(67294),l(3905));const o={description:"Motor_Shield_V2.0",title:"Motor Shield V2.0",tags:["Shield","motor"],keywords:["Shield","motor"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Motor_Shield_V2.0",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},i=void 0,a={unversionedId:"Top_Brand/Arduino/shield/Motor_Shield_V2.0",id:"Top_Brand/Arduino/shield/Motor_Shield_V2.0",title:"Motor Shield V2.0",description:"Motor_Shield_V2.0",source:"@site/docs/Top_Brand/Arduino/shield/Motor_Shield_V2.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Motor_Shield_V2.0",permalink:"/zh-CN/Motor_Shield_V2.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Motor_Shield_V2.0.md",tags:[{label:"Shield",permalink:"/zh-CN/tags/shield"},{label:"motor",permalink:"/zh-CN/tags/motor"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675008e3,formattedLastUpdatedAt:"2023\u5e741\u670829\u65e5",frontMatter:{description:"Motor_Shield_V2.0",title:"Motor Shield V2.0",tags:["Shield","motor"],keywords:["Shield","motor"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Motor_Shield_V2.0",last_update:{date:"01/30/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Energy Shield",permalink:"/zh-CN/Energy_Shield"},next:{title:"Brushless Motor Shield TB6605FTG",permalink:"/zh-CN/Brushless_Motor_Shield_TB6605FTG"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Digital Pin Used",id:"digital-pin-used",level:3},{value:"Analog Pin Used",id:"analog-pin-used",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Drive a DC motor",id:"drive-a-dc-motor",level:3},{value:"Connection",id:"connection",level:4},{value:"Software",id:"software",level:4},{value:"Drive a Stepper",id:"drive-a-stepper",level:3},{value:"Connection",id:"connection-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Library APIs",id:"library-apis",level:2},{value:"DC Motor APIs",id:"dc-motor-apis",level:3},{value:"begin",id:"begin",level:4},{value:"speed",id:"speed",level:4},{value:"Stepper",id:"stepper",level:4},{value:"FAQs",id:"faqs",level:2},{value:"Motor Shield V2.0 Eagle File Schematic Online Viewer",id:"motor-shield-v20-eagle-file-schematic-online-viewer",level:2},{value:"Motor shield V2.1 Eagle File Schematic Online Viewer",id:"motor-shield-v21-eagle-file-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function k(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/500px-Motorshield_01.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This document works for Motor Shield V2.0/2.1/2.2.")),(0,r.kt)("p",null,"The Motor Shield is a driver module for motors that allows you to use Arduino to control the working speed and direction of the motor. Based on the Dual Full-Bridge Drive Chip L298, it is able to drive two DC motors or a step motor. The Motor Shield can either be powered by Arduino directly or by an external 6V~15V power supply via the terminal input. This module can be used for the development of micro robots and intelligent vehicles, etc"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Motor-Shield-V2-0.html?queryID=4a07292b83eeca2fc091c32620ff0c76&objectID=1498&indexName=bazaar_retailer_products",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("table",{align:"center"},(0,r.kt)("caption",null," ",(0,r.kt)("h2",null,"Version")," "),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Revision")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Descriptions")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Release"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"v1.0")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Initial public release")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"NA"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"v2.0")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Enable +5V Pin of Arduino/Seeeduino to power motor ")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"2013-2"))))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Standard Arduino UNO Shield pin out"),(0,r.kt)("li",{parentName:"ul"},"Based on L298 full bridge IC"),(0,r.kt)("li",{parentName:"ul"},"Drive 2 DC Motor or 1 Stepper"),(0,r.kt)("li",{parentName:"ul"},"External power input available"),(0,r.kt)("li",{parentName:"ul"},"Led indicators"),(0,r.kt)("li",{parentName:"ul"},"Heat sink for better performance"),(0,r.kt)("li",{parentName:"ul"},"Arduino library")),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("hr",null),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Spec")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Value"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"Operating voltage")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"5V"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"External Power")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"6-15V"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"Output Current")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"2.0A Max @ Each Channel"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"PWM Range")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"0-100%"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"Output")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"2 Channels, 4 Ports"))))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/700px-MotorShieldHardware.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1"),".Channel 1 indicator, include 3 leds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EB - channel 1 enable, high active"),(0,r.kt)("li",{parentName:"ul"},"IN3 - status of OUT3"),(0,r.kt)("li",{parentName:"ul"},"IN4 - status of OUT4")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2"),".Channel 1 Sense - Please connect the left 2 pins together for normal usage."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," that it's a high level application for sense the current, please refer to datasheet and schematic for more information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3"),".OUTPUT - There're 2 channels, each channel has 2 output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel 0 - OUT1, OUT2"),(0,r.kt)("li",{parentName:"ul"},"Channel 1 - OUT3, OUT4")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4"),".Channel 0 Sense"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5"),".Channel 0 indicator, include 3 leds"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EB - channel 0 enable, high active"),(0,r.kt)("li",{parentName:"ul"},"IN1 - status of OUT1"),(0,r.kt)("li",{parentName:"ul"},"IN2 - status of OUT2")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6"),".External Power Input, range 6-15V"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7"),".Reset indicator - turn red when Reset button is pressed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8"),".Reset button - pressed to reset the shield and Arduino"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9"),".Power indicator - turn green when power in, either internal or external"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A.")," Power switch"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect - Get power from Arduino"),(0,r.kt)("li",{parentName:"ul"},"Disconnect - Get power from External sources")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"B.")," Standard Arduino shield pin out"),(0,r.kt)("h3",{id:"digital-pin-used"},"Digital Pin Used"),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Arduino Pin")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Function"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D0")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D1")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D2")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D3")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D4")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D5")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D6")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D7")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D8")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D9")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Enable of Channel0"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D10")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Enable of Channel1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D11")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D12")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT3"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D13")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT4"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"D8~D13 are used by Motor Shield. Please don't use those pins to avoid conflict.")),(0,r.kt)("h3",{id:"analog-pin-used"},"Analog Pin Used"),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Arduino Pin")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Function"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D0")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D1")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D2")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D3")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D4")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D5")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Not Used means you can use those pins freely.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"drive-a-dc-motor"},"Drive a DC motor"),(0,r.kt)("h4",{id:"connection"},"Connection"),(0,r.kt)("p",null,"Here we will show you how this Motor Shield works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Seeeduino V4")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"DC Motor")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Motor Shield"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/130%20DC%20Motor_s.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg",alt:"pir",width:200,height:"auto"})))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},(0,r.kt)("span",null,"Get ONE Now")))),(0,r.kt)("td",null,(0,r.kt)("h4",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/130-DC-Motor-p-2023.html",target:"_blank"},(0,r.kt)("span",null,"Get ONE Now")))),(0,r.kt)("td",null,(0,r.kt)("h4",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html",target:"_blank"},(0,r.kt)("span",null,"Get ONE Now"))))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("strong",{parentName:"li"},"SEN_A")," and ",(0,r.kt)("strong",{parentName:"li"},"SEN_B"),", connect the left 2 pins together with a jumper."),(0,r.kt)("li",{parentName:"ul"},"Connect ",(0,r.kt)("strong",{parentName:"li"},"MB_EN")," together with a jumper, as we are not going use an external power."),(0,r.kt)("li",{parentName:"ul"},"Connect DC motor to Chanel 0 (OUT1 and OUT2)."),(0,r.kt)("li",{parentName:"ul"},"Plug Motor Shield into Arduino."),(0,r.kt)("li",{parentName:"ul"},"Connect Arduino to PC via a USB cable.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/DC%20connection.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click below button to download the motor shield library."),(0,r.kt)("li",{parentName:"ul"},"Please follow ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"how to install an arduino library")," procedures to install the library.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/400px-Motor_shield_v2_library.png"}))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the code to Seeeduino V4.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'//  Demo function:The application method to drive the DC motor.\n//  Author:Loovee (luweicong@seeed.cc)\n//  2016-3-11\n\n#include "MotorDriver.h"\n\nMotorDriver motor;\n\nvoid setup()\n{\n    // initialize\n    motor.begin();\n}\n\nvoid loop()\n{\n    motor.speed(0, 100);            // set motor0 to speed 100\n    delay(1000);\n    motor.brake(0);                 // brake\n    delay(1000);\n    motor.speed(0, -100);           // set motor0 to speed -100\n    delay(1000);\n    motor.stop(0);                  // stop\n    delay(1000);\n}\n// END FILE\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Then you will find your motor move (1s), stop (1s), move back (1s), stop (1s), and loop.")),(0,r.kt)("p",null,"If nothing happens, please make sure:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We have uploaded the code successfully"),(0,r.kt)("li",{parentName:"ul"},"The motor is connected properly"),(0,r.kt)("li",{parentName:"ul"},"The led indicators blink right")),(0,r.kt)("h3",{id:"drive-a-stepper"},"Drive a Stepper"),(0,r.kt)("h4",{id:"connection-1"},"Connection"),(0,r.kt)("p",null,"Here we will show you how this Motor Shield works via a simple demo.  First of all, you need to prepare the below stuffs:"),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Seeeduino V4")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Stepper Motor")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Motor Shield"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/Motor%2024BYJ48_s.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",null,(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/image/motor%20shield_s.jpg",alt:"pir",width:200,height:"auto"})))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},(0,r.kt)("span",null,"Get ONE Now")))),(0,r.kt)("td",null,(0,r.kt)("h4",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/Small-Size-and-High-Torque-Stepper-Motor-24BYJ48-p-1922.html",target:"_blank"},(0,r.kt)("span",null,"Get ONE Now")))),(0,r.kt)("td",null,(0,r.kt)("h4",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/Motor-Shield-V2.0-p-1377.html",target:"_blank"},(0,r.kt)("span",null,"Get ONE Now"))))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Set ",(0,r.kt)("strong",{parentName:"li"},"SEN_A")," and ",(0,r.kt)("strong",{parentName:"li"},"SEN_B"),", connect the left 2 pins together with a jumper."),(0,r.kt)("li",{parentName:"ul"},"Connect ",(0,r.kt)("strong",{parentName:"li"},"MB_EN")," together with a jumper, as we are not going use an external power."),(0,r.kt)("li",{parentName:"ul"},"Find the pin definitions of you stepper, and connect it to the OUTPUT of the shield. As below:")),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"stepper")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"OUT1"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"A+")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT2"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"A-")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT3"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"B+")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"OUT4"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"B-")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Not Used"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Plug Motor Shield into Arduino."),(0,r.kt)("li",{parentName:"ul"},"Connect Arduino to PC via a USB cable.")),(0,r.kt)("h4",{id:"software-1"},"Software"),(0,r.kt)("p",null,"Copy below code to Arduino IDE and upload it to Seeeduino V4, then you will find your stepper move."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-CPP"},"/*\n * Stepper test for Seeed Motor Shield V2\n * loovee @ 15 Mar, 2016\n */\n\n#include <Stepper.h>\n\n// change this to the number of steps on your motor\n#define STEPS 200\n\n// create an instance of the stepper class, specifying\n// the number of steps of the motor and the pins it's\n// attached to\nStepper stepper(STEPS, 8, 11, 12, 13);\n\n// the previous reading from the analog input\nint previous = 0;\n\nvoid step(int steps)\n{\n    digitalWrite(9, HIGH);\n    digitalWrite(10, HIGH);\n    stepper.step(steps);\n    digitalWrite(9, LOW);\n    digitalWrite(10, LOW);\n}\n\nvoid setup()\n{\n    // set the speed of the motor to 30 RPMs\n    pinMode(9, OUTPUT);\n    pinMode(10, OUTPUT);\n    digitalWrite(9, LOW);\n    digitalWrite(10, LOW);\n    stepper.setSpeed(30);\n}\n\nvoid loop()\n{\n    step(1000);\n    step(-1000);\n}\n\n// END FILE\n")),(0,r.kt)("p",null,"If nothing happens, please double check if you have connected the wire right."),(0,r.kt)("h2",{id:"library-apis"},"Library APIs"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"dc-motor-apis"},"DC Motor APIs"),(0,r.kt)("h4",{id:"begin"},"begin"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"void begin();\n")),(0,r.kt)("h4",{id:"speed"},"speed"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"void move(int motor_id, int speed);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"motor_id",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"0 - Chanel 0"),(0,r.kt)("li",{parentName:"ul"},"1 - Chanel 1"))),(0,r.kt)("li",{parentName:"ul"},"speed: -100~100, the larger the faster, 0 for stop")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"stop")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"void stop(unsigned char motor_id);\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"brake")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},"void brake(unsigned char motor_id);\n")),(0,r.kt)("h4",{id:"stepper"},"Stepper"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," that we use the library provided by Arduino IDE to drive a stepper."),(0,r.kt)("p",null,"There's something need to be modified, please refer to the examples."),(0,r.kt)("h2",{id:"faqs"},"FAQs"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q1: The purpose of the jumper MB_EN")),(0,r.kt)("p",null,"A1: You can see a power jumper(MB_EN) on the motor shield. If you move it, the Arduino can provide power to Shield, but the shield(if the shield has connected to a external power) can't provide power to Arduino."),(0,r.kt)("p",null,"If the jumper exists, one can provide power to the other under two situation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"USB to Arduino: if no external power connected to Shield separately, the Arduino will provide power to Shield via VCC pin.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"External Power connected to Shield\uff1aIf shield has a separate power, the voltage would through a rectifier(78M05) first, and then provide power to Arduino. At this situation, no current of Arduino could through Arduino to Shield via 78M05."))),(0,r.kt)("p",null,"So the purpose of this jumper is a choice whether you would wanna use shield to provide power to Arduino or not."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q2: Is there a pin conflict between the SD card shield (103030005) and the Motor shield (105030001) on Arduino UNO? How to use them together?")),(0,r.kt)("p",null,"A2: There is a pin conflict between Motor shield and SD card shield in digital pins D11,D12,D13 of the Arduino Uno. So you cannot stack them together with the Arduino Uno board. Here is the solution to use them together."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 1.Stack the SD card shield to the Arduino."),(0,r.kt)("li",{parentName:"ul"},"Step 2.Modify the library of Motordriver.h as follows.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-CPP"},"/******Pins definitions*************/\n#define MOTORSHIELD_IN1    8\n#define MOTORSHIELD_IN2    7\n#define MOTORSHIELD_IN3    6\n#define MOTORSHIELD_IN4    5\n#define SPEEDPIN_A        9\n#define SPEEDPIN_B        10\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q3.Do not stack the motor shield but make connections separately as follows from the Arduino using jumper wires.")),(0,r.kt)("p",null,"A3: Here is the connection."),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h3",null,"Arduino")),(0,r.kt)("td",null,(0,r.kt)("h3",null,"Motor shield"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"5V")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"5V"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"GND")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"GND"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D5")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"D13"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D6")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"D12"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D7")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"D11"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D8")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"D8"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D9")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"D9"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"D10")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"D10"))))),(0,r.kt)("h2",{id:"motor-shield-v20-eagle-file-schematic-online-viewer"},"Motor Shield V2.0 Eagle File Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"motor-shield-v21-eagle-file-schematic-online-viewer"},"Motor shield V2.1 Eagle File Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_Shield_Eagle_File.zip"},"Motor Shield V2.0 Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.rar"},"Motor shield V2.1 Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.0.pdf"},"Motor Shield 2.0 schematics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor_shield_2.1.pdf"},"Motor Shield 2.1 schematics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/Motor%20Shield%20v2.2.pdf"},"Motor Shield 2.2 schematics")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/SeeedMotorShieldV2/archive/master.zip"},"Motor Shield Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/L298.pdf"},"L298 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Motor_Shield_V2.0/resource/78M05_datasheet.pdf"},"78M05 Datasheet"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24646],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(i),c=a,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return i?n.createElement(h,o(o({ref:t},d),{},{components:i})):n.createElement(h,o({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},21073:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={description:"Wio Terminal Displaying Photos",title:"Wio Terminal Displaying Photos",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Displaying-Photos",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Wio Terminal Displaying photos",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Photos",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Photos",title:"Wio Terminal Displaying Photos",description:"Wio Terminal Displaying Photos",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Photos.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Displaying-Photos",permalink:"/zh-CN/Wio-Terminal-Displaying-Photos",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Photos.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Wio Terminal Displaying Photos",title:"Wio Terminal Displaying Photos",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Displaying-Photos",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal Storing Data",permalink:"/zh-CN/Wio-Terminal-Storting-Analog-Data"},next:{title:"Wio Terminal Interactive Faces Demo",permalink:"/zh-CN/Wio-Terminal-Interactive-Face"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Code",id:"code",level:2},{value:"Wio Terminal Displaying photos with Button",id:"wio-terminal-displaying-photos-with-button",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Features",id:"features-1",level:3},{value:"Arduino libraries needed",id:"arduino-libraries-needed-1",level:3},{value:"Arduino Instructions",id:"arduino-instructions-1",level:3},{value:"Code",id:"code-1",level:3},{value:"Complete Code",id:"complete-code",level:3}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-displaying-photos"},"Wio Terminal Displaying photos"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/products.2019-11-26%2017_40_45.gif"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This example demonstrates how to display images from SD card in loop."),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Looping through photos")),(0,a.kt)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the LCD screen library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal Overview")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the SD Card library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_FS"),", Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta"},"Seeed-Arduino-FS")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"RawImage.h")," library, Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/"},"Loading Images")," for more information."))),(0,a.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos.zip"},(0,a.kt)("inlineCode",{parentName:"a"},"displayPhotos.ino"))," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RawImage.h")," file and upload to your Wio Terminal through ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),". Make sure you installed all the libraries.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag the ",(0,a.kt)("inlineCode",{parentName:"p"},"photos")," file and save the entire file in the SD card.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You should see Image starts looping!"))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\n#include "Seeed_FS.h" //Including SD card library\n#include"RawImage.h"  //Including image processing library\nTFT_eSPI tft;\n\nvoid setup() {\n    //Initialise SD card\n    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        while (1);\n    }\n    //Initialise LCD screen\n    tft.begin();\n    tft.setRotation(3);\n\n}\n//storing the names of photos \nconst char* list[] = {"photos/1.bmp", "photos/2.bmp", "photos/3.bmp", "photos/4.bmp"};\n\nvoid loop() {\n    for (uint8_t cnt = 0; cnt < 4; cnt++) {\n        drawImage<uint16_t>(list[cnt],0,0); //dispalying images one by one\n        delay(1000);\n    }\n}\n')),(0,a.kt)("h2",{id:"wio-terminal-displaying-photos-with-button"},"Wio Terminal Displaying photos with Button"),(0,a.kt)("h3",{id:"overview-1"},"Overview"),(0,a.kt)("p",null,"This example is similar to the above, but instead built-in buttons are used to change the displaying images!"),(0,a.kt)("h3",{id:"features-1"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Left-Button: Previous Image")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Right-Button: Next Image"))),(0,a.kt)("h3",{id:"arduino-libraries-needed-1"},"Arduino libraries needed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the LCD screen library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal Overview")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the SD Card library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_FS"),", Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta"},"Seeed-Arduino-FS")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"RawImage.h")," library, Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/"},"Loading Images")," for more information."))),(0,a.kt)("h3",{id:"arduino-instructions-1"},"Arduino Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/displayPhotos_buttons.zip"},(0,a.kt)("inlineCode",{parentName:"a"},"displayPhotos_buttons.ino"))," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RawImage.h")," file and upload to your Wio Terminal through ",(0,a.kt)("inlineCode",{parentName:"p"},"Adruino IDE"),". Make sure you installed all the libraries.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag the ",(0,a.kt)("inlineCode",{parentName:"p"},"photos")," file and save the entire file in the SD card.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Press the left button to scroll left and press right button to scroll right!"))),(0,a.kt)("h3",{id:"code-1"},"Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To intialise Buttons"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    ...\n    pinMode(BUTTON_1, INPUT); //left button\n    pinMode(BUTTON_3, INPUT); //right button\n    ...\n}\n")),(0,a.kt)("h3",{id:"complete-code"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\n#include "Seeed_FS.h" //Including SD card library\n#include"RawImage.h"  //Including image processing library\nTFT_eSPI tft;\n\nbool left_flag = false;\nvoid button_handler_left() {\n  left_flag = true;\n}\n\nbool right_flag = false;\nvoid button_handler_right() {\n  right_flag = true;\n}\n\nvoid setup() {\n  //Initialise SD card\n  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI,16000000)) {\n    while (1);\n  }\n  tft.begin();\n  tft.setRotation(3);\n\n  pinMode(BUTTON_1, INPUT);\n  pinMode(BUTTON_3, INPUT);\n  attachInterrupt(digitalPinToInterrupt(BUTTON_1), button_handler_left, FALLING);\n  attachInterrupt(digitalPinToInterrupt(BUTTON_3), button_handler_right, FALLING);\n\n}\n\nconst char* list[] = {"1.bmp", "2.bmp", "3.bmp", "4.bmp"};\nint8_t cnt = 0;\n\nvoid loop() {\n  if (left_flag) {\n    cnt++;\n    left_flag = false;\n    if (cnt == 4) {\n      cnt = 0;\n    }\n  }\n  if (right_flag) {\n    cnt--;\n    right_flag = false;\n    if (cnt < 0) {\n      cnt = 3;\n    }\n  }\n  drawImage<uint16_t>(list[cnt], 0, 0);\n}\n')))}u.isMDXComponent=!0}}]);
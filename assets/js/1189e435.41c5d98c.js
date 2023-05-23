"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64470],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,g=s["".concat(c,".").concat(m)]||s[m]||u[m]||r;return n?i.createElement(g,l(l({ref:t},d),{},{components:n})):i.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Graphics",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Graphics/",slug:"/Wio-Terminal-LCD-Graphics",last_update:{date:"01/11/2022",author:"gunengyu"}},l="Basic Graphical functions",o={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Graphics",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Graphics",title:"Graphics",description:"This repo describes some of the basic graphical functions of the TFT LCD library on Wio Terminal. You can use these functions to create you own drawing functions!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Graphics.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Graphics",permalink:"/custom/Wio-Terminal-LCD-Graphics",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Graphics.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Graphics",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Graphics/",slug:"/Wio-Terminal-LCD-Graphics",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Basic of LCD",permalink:"/custom/Wio-Terminal-LCD-Basic"},next:{title:"Fonts",permalink:"/custom/Wio-Terminal-LCD-Fonts"}},c={},p=[{value:"Drawing Pixels",id:"drawing-pixels",level:2},{value:"Example code",id:"example-code",level:3},{value:"Drawing Lines",id:"drawing-lines",level:2},{value:"Example code",id:"example-code-1",level:3},{value:"Drawing Horizontal lines &amp; Vertical lines",id:"drawing-horizontal-lines--vertical-lines",level:3},{value:"Example code",id:"example-code-2",level:3},{value:"Drawing Rectangles",id:"drawing-rectangles",level:2},{value:"Example code",id:"example-code-3",level:3},{value:"Drawing Circles",id:"drawing-circles",level:2},{value:"Example code",id:"example-code-4",level:3},{value:"Example code",id:"example-code-5",level:3},{value:"Drawing Triangles",id:"drawing-triangles",level:2},{value:"Example code",id:"example-code-6",level:3},{value:"Drawing Round rectangles",id:"drawing-round-rectangles",level:2},{value:"Example code",id:"example-code-7",level:3},{value:"Drawing Characters",id:"drawing-characters",level:2},{value:"Example code",id:"example-code-8",level:3},{value:"Drawing Text Strings",id:"drawing-text-strings",level:2},{value:"Example code",id:"example-code-9",level:3},{value:"Filling the Screen",id:"filling-the-screen",level:2},{value:"Example code",id:"example-code-10",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basic-graphical-functions"},"Basic Graphical functions"),(0,a.kt)("p",null,"This repo describes some of the basic graphical functions of the TFT LCD library on Wio Terminal. You can use these functions to create you own drawing functions!"),(0,a.kt)("h2",{id:"drawing-pixels"},"Drawing Pixels"),(0,a.kt)("p",null,"To draw a pixel on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawPixel(int32_t x, int32_t y, uint32_t color);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the pixel coordinate and ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," is the colour of the pixel."),(0,a.kt)("h3",{id:"example-code"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawPixel(4,7,TFT_BLACK); //drawing a black pixel at (4,7)\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"drawing-lines"},"Drawing Lines"),(0,a.kt)("p",null,"To draw a line between two points on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawLine(int32_t x0, int32_t y0, int32_t x1, int32_t y1, uint32_t color);\n")),(0,a.kt)("p",null,"where the line starts drawing from ",(0,a.kt)("inlineCode",{parentName:"p"},"(x0, y0)")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"(x1, y1)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-1"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawLine(0,0,160,120,TFT_BLACK); //drawing a black line from (0,0) to (160,120)\n}\n\nvoid loop() {}\n')),(0,a.kt)("p",null,"To draw Horizontal or Vertical lines, this librabry also provides optimised functions:"),(0,a.kt)("h3",{id:"drawing-horizontal-lines--vertical-lines"},"Drawing Horizontal lines & Vertical lines"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawFastHLine(int32_t x, int32_t y, int32_t w, uint32_t color); //Horizontal line\ndrawFastVLine(int32_t x, int32_t y, int32_t h, uint32_t color); //Verical line\n\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the starting coordinates and ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," is the width of the horizontal line, and ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," is the height of verical line, and ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-2"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawFastHLine(0,120,320,TFT_BLACK); //A black horizontal line starting from (0, 120)\n    tft.drawFastVLine(160,0,240,TFT_BLACK); // A black vertical line starting from (160, 0)\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"drawing-rectangles"},"Drawing Rectangles"),(0,a.kt)("p",null,"To draw or fill a rectangle on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);\nfillRect(int32_t x, int32_t y, int32_t w, int32_t h, uint32_t color);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the starting coordinate , ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," is the width, ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," is the height of the rectangle and ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-3"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawRect(110,70,100,100,TFT_BLACK); //A 100x100 black rectangle starting from (110, 70)\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"drawing-circles"},"Drawing Circles"),(0,a.kt)("p",null,"To draw or fill a circle on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);\nfillCircle(int32_t x0, int32_t y0, int32_t r, uint32_t color);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x0, y0)")," is the origin, ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," is the radius of the circle and ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-4"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawCircle(160,120,50,TFT_BLACK); //A black circle origin at (160, 120)\n}\n\nvoid loop() {}\n')),(0,a.kt)("p",null,"This library also provides a function to draw or fill a ellipse:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);\nfillEllipse(int16_t x0, int16_t y0, int32_t rx, int32_t ry, uint16_t color);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x0, y0)")," is the origin of ellipse, ",(0,a.kt)("inlineCode",{parentName:"p"},"rx")," is horizontal radius, ",(0,a.kt)("inlineCode",{parentName:"p"},"ry")," is the vertical radius and ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-5"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawEllipse(160,120,50,100,TFT_BLACK); \n    //A black ellipse origin at (160, 120) with horizontal radius of 50, and vertical radius of 100\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"drawing-triangles"},"Drawing Triangles"),(0,a.kt)("p",null,"To draw or fill a triangle on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);\nfillTriangle(int32_t x0, int32_t y0, int32_t x1, int32_t y1, int32_t x2, int32_t y2, uint32_t color);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x0, y0)")," is the first coordinates, ",(0,a.kt)("inlineCode",{parentName:"p"},"(x1, y1)")," is the second coordinates and ",(0,a.kt)("inlineCode",{parentName:"p"},"(x2, y2)")," is the third coordinates of triangle, ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-6"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawTriangle(160,70,60,170,260,170,TFT_BLACK);\n    //A triangle with points at (160, 70), (60, 170) and (260, 170)\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"drawing-round-rectangles"},"Drawing Round rectangles"),(0,a.kt)("p",null,"To draw or fill a rounded rectanges on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);\nfillRoundRect(int32_t x, int32_t y, int32_t w, int32_t h, int32_t r, uint32_t color);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the starting coordinate, ",(0,a.kt)("inlineCode",{parentName:"p"},"w")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"h")," for width and height of rectangles, ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," for the corner radius and ",(0,a.kt)("inlineCode",{parentName:"p"},"color"),"."),(0,a.kt)("h3",{id:"example-code-7"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawRoundRect(110,70,100,100,10,TFT_BLACK);\n    //A 100x100 black roudned rectangle starting from (110, 70)\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"drawing-characters"},"Drawing Characters"),(0,a.kt)("p",null,"To draw a single character on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawChar(int32_t x, int32_t y, uint16_t c, uint32_t color, uint32_t bg, uint8_t size)\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the starting location, ",(0,a.kt)("inlineCode",{parentName:"p"},"c")," is the char, ",(0,a.kt)("inlineCode",{parentName:"p"},"color")," is the color of the char, ",(0,a.kt)("inlineCode",{parentName:"p"},"bg")," is the background colour of the char, and ",(0,a.kt)("inlineCode",{parentName:"p"},"size")," is the size scale of the char."),(0,a.kt)("h3",{id:"example-code-8"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include\"TFT_eSPI.h\"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); //Red background\n    tft.drawChar(140,120,'A',TFT_BLACK, TFT_RED,2); //Draw a black character A from (140,120)\n    tft.drawChar(155,120,'B',TFT_BLACK, TFT_RED,2); //Draw a black character B from (155,120)\n    tft.drawChar(170,120,'C',TFT_BLACK, TFT_RED,2); //Draw a black character C from (170,120)\n}\n\nvoid loop() {}\n")),(0,a.kt)("h2",{id:"drawing-text-strings"},"Drawing Text Strings"),(0,a.kt)("p",null,"To draw Strings on the LCD screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"drawString(const String& string, int32_t poX, int32_t poY);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"string")," is the text string, and ",(0,a.kt)("inlineCode",{parentName:"p"},"(poX, poY)")," is the starting coordinates."),(0,a.kt)("h3",{id:"example-code-9"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n  tft.begin();\n  tft.setRotation(3);\n\n  tft.fillScreen(TFT_RED); //Red background\n\n  tft.setTextColor(TFT_BLACK);          //sets the text colour to black\n  tft.setTextSize(1);                   //sets the size of text\n  tft.drawString("Hello world!", 0, 0); //prints strings from (0, 0)\n  tft.setTextSize(2);\n  tft.drawString("Hello world!", 0, 10);\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"filling-the-screen"},"Filling the Screen"),(0,a.kt)("p",null,"To fill or colour the entire screen:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"fillScreen(uint32_t color);\n")),(0,a.kt)("h3",{id:"example-code-10"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n  tft.begin();\n  tft.setRotation(3);\n}\n\nvoid loop() {\n    //Looping through color R-G-B\n    tft.fillScreen(TFT_RED);\n    delay(1000);\n    tft.fillScreen(TFT_GREEN);\n    delay(1000);\n    tft.fillScreen(TFT_BLUE);\n    delay(1000);\n}\n\nvoid loop() {}\n')),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}s.isMDXComponent=!0}}]);
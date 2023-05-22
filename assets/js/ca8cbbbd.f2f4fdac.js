"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32800],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var x=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(e);n&&(x=x.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,x)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,x,l=function(e,n){if(null==e)return{};var t,x,l={},i=Object.keys(e);for(x=0;x<i.length;x++)t=i[x],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(x=0;x<i.length;x++)t=i[x],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var r=x.createContext({}),d=function(e){var n=x.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=d(e.components);return x.createElement(r.Provider,{value:n},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return x.createElement(x.Fragment,{},n)}},u=x.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(t),u=l,m=p["".concat(r,".").concat(u)]||p[u]||c[u]||i;return t?x.createElement(m,a(a({ref:n},s),{},{components:t})):x.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,a=new Array(i);a[0]=u;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[p]="string"==typeof e?e:l,a[1]=o;for(var d=2;d<i;d++)a[d]=t[d];return x.createElement.apply(null,a)}return x.createElement.apply(null,t)}u.displayName="MDXCreateElement"},99537:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var x=t(87462),l=(t(67294),t(3905));const i={description:"Xadow - RGB OLED 96*64",title:"Xadow - RGB OLED 96*64",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_RGB_OLED_96multiply64",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,o={unversionedId:"Seeed_Elderly/Xadow/Xadow_RGB_OLED_96multiply64",id:"Seeed_Elderly/Xadow/Xadow_RGB_OLED_96multiply64",title:"Xadow - RGB OLED 96*64",description:"Xadow - RGB OLED 96*64",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_RGB_OLED_96multiply64.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_RGB_OLED_96multiply64",permalink:"/Xadow_RGB_OLED_96multiply64",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_RGB_OLED_96multiply64.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Xadow - RGB OLED 96*64",title:"Xadow - RGB OLED 96*64",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_RGB_OLED_96multiply64",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - OLED 128*64",permalink:"/Xado_OLED_128multiply64"},next:{title:"Xadow - RTC (Real Time Clock)",permalink:"/Xadow_RTC"}},r={},d=[{value:"Specifications",id:"specifications",level:2},{value:"Pin Definition",id:"pin-definition",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function p(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,x.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_MainPicture.jpg",alt:null})),(0,l.kt)("p",null,"RBG OLED is a 16 bit 96",(0,l.kt)("em",{parentName:"p"},"64 dot matrix OLED display module with RGB color. It is based on SSD1331 module which is a single chip CMOS OLED/PLED driver with 288 segments and 64 common output, supporting up to 96 RGB ")," 64 dot matrix display. It use SPI for communication."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-RGB-OLED-96x64-p-2125.html"},(0,l.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,l.kt)("h2",{id:"specifications"},"Specifications"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Power Voltage (VCC)\uff1a3.3V"),(0,l.kt)("li",{parentName:"ul"},"Display Color: RGB"),(0,l.kt)("li",{parentName:"ul"},"Dot Matrix: 96*64"),(0,l.kt)("li",{parentName:"ul"},"Operating temperature: -20~70 \u2103"),(0,l.kt)("li",{parentName:"ul"},"Dimensions: 25.43mm x 20.35mm")),(0,l.kt)("h2",{id:"pin-definition"},"Pin Definition"),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_HardwareInterface.png",alt:null})),(0,l.kt)("p",null,"We only need CS, DC, MOSI, SCLK 4 pins for communication. and"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"CS"),"   ","<","==",">","  ",(0,l.kt)("strong",{parentName:"p"},"A5")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"DC"),"   ","<","==",">","  ",(0,l.kt)("strong",{parentName:"p"},"3")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"MOSI")," ","<","==",">","  ",(0,l.kt)("strong",{parentName:"p"},"16")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"SCLK")," ","<","==",">","  ",(0,l.kt)("strong",{parentName:"p"},"15")),(0,l.kt)("admonition",{title:"s",type:"caution"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"Please notice: heavy impact or stress on OLED will cause the breakdown of screen.\n"))),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"RGB OLED can display all kinds of graphics and characters. We offered lots of example sketches for you to play with it."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The hardware installation")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Connection.jpg",alt:null})),(0,l.kt)("p",null,"Note: When connecting Xadow RGB OLED to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Draw Line ")),(0,l.kt)("p",null,"Download ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/RGB_OLED_SSD1331"},"RGB OLED Library")," and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/SGL"},"SGL Library"),", then install them to your Arduino Library. Open the DrawLine example sketch by the path: Files-",">","Examples-",">","RGB_OLED_96_64-",">","examples-",">","drawLine."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'<pre>\n/*\n draw rectangle\n\n This sketch is used to test Seeed\'s Xadow - RGB OLED,\n it will draw several line with different color\n\n create on 2014/06/24, version: 0.1\n by lawliet.zou(lawliet.zou@gmail.com)\n*/\n\n#include &lt;SGL.h&gt;\n#include &lt;SSD1331.h&gt;\n#include &lt;SPI.h&gt;\n\n#define cs     A5\n#define dc     3\n#define mosi   16\n#define sclk   15\n\nSSD1331 oled = SSD1331(cs, dc, mosi, sclk);\n\nvoid setup(){\n    Serial.begin(9600);\n    Serial.println("Start to draw");\n    oled.init();\n    oled.fillScreen(COLOR_BLACK);\n    delay(2000);\n    oled.drawLine(5,7,65,48,COLOR_BLUE);\n    delay(1000);\n    oled.drawLine(5,40,48,7,COLOR_RED);\n    delay(1000);\n    oled.drawLine(65,5,47,50,COLOR_GREEN);\n    delay(1000);\n    oled.drawLine(3,10,80,21,COLOR_YELLOW);\n}\n\nvoid loop(){\n    //nothing to do\n}\n</pre>\n')),(0,l.kt)("p",null,"Select the correct port number and the board type should be Seeeduino Xadow, then upload the code, you can see four line with different color will be drew on the screen of RGB OLED just as follow."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Line.jpg",alt:null}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Line.gif",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Draw Circle")),(0,l.kt)("p",null,"Open the DrawCircle example sketch by the path: Files-",">","Examples-",">","RGB_OLED_96_64-",">","examples-",">","drawCircle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n/*\n draw circle\n\n This sketch is used to test Seeed\'s Xadow - RGB OLED,\n it will draw a circle\n\n create on 2014/06/24, version: 0.1\n by lawliet.zou(lawliet.zou@gmail.com)\n*/\n\n#include &lt;SGL.h&gt;\n#include &lt;SSD1331.h&gt;\n#include &lt;SPI.h&gt;\n\n#define cs     A5\n#define dc     3\n#define mosi   16\n#define sclk   15\n\nSSD1331 oled = SSD1331(cs, dc, mosi, sclk);\n\nvoid setup(){\n    Serial.begin(9600);\n    Serial.println("Start to draw");\n    oled.init();\n    oled.fillScreen(COLOR_BLACK);\n    delay(2000);\n}\n\nvoid loop(){\n    for(int i = 30; i &gt; 0; i--){\n        oled.drawCircle(48,32,i,COLOR_CYAN);\n        delay(50);\n    }\n    for(int i = 1; i &lt;= 30; i++){\n        oled.drawCircle(48,32,i,COLOR_RED);\n        delay(50);\n    }\n    for(int i = 30; i &gt; 0; i--){\n        oled.drawCircle(48,32,i,COLOR_PURPLE);\n        delay(50);\n    }\n    for(int i = 1; i &lt;= 30; i++){\n        oled.drawCircle(48,32,i,COLOR_GOLDEN);\n        delay(50);\n    }\n}\n\n')),(0,l.kt)("p",null,"It is used to draw concentric circles with different color. Select the correct port number and the board type should be Seeeduino Xadow, then upload the code, you can see many circles with different colors will be drew on the screen of RGB OLED just as follow."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Circle.gif",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Draw Rectangle")),(0,l.kt)("p",null,"Open the DrawRectangle example sketch by the path: Files-",">","Examples-",">","RGB_OLED_96_64-",">","examples-",">","drawRectangle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n/*\n draw rectangle\n\n This sketch is used to test Seeed\'s Xadow - RGB OLED,\n it will draw a rectangle with blue color\n\n create on 2014/06/24, version: 0.1\n by lawliet.zou(lawliet.zou@gmail.com)\n*/\n\n#include &lt;SGL.h&gt;\n#include &lt;SSD1331.h&gt;\n#include &lt;SPI.h&gt;\n\n#define cs     A5\n#define dc     3\n#define mosi   16\n#define sclk   15\n\nSSD1331 oled = SSD1331(cs, dc, mosi, sclk);\n\nvoid setup(){\n    Serial.begin(9600);\n    Serial.println("Start to draw");\n    oled.init();\n    oled.fillScreen(COLOR_BLACK);\n    delay(2000);\n}\n\nvoid loop(){\n    for(int i = 1; i &lt; 16; i++){\n        oled.drawRectangle(3*i,2*i,95-6*i,63-4*i,COLOR_YELLOW);\n        delay(50);\n    }\n    delay(2000);\n    for(int i = 15; i &gt; 0; i--){\n        oled.drawRectangle(3*i,2*i,95-6*i,63-4*i,COLOR_BLUE);\n        delay(50);\n    }\n    delay(2000);\n}\n\n')),(0,l.kt)("p",null,"Select the correct port number and the board type should be Seeeduino Xadow, then upload the code, you can see many rectangle will be drew on the screen of RGB OLED just as follow."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Rectangle.gif",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Draw Triangle")),(0,l.kt)("p",null,"Open the DrawTriangle example sketch by the path: Files-",">","Examples-",">","RGB_OLED_96_64-",">","examples-",">","drawTriangle."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n/*\n draw triangle\n\n This sketch is used to test Seeed\'s Xadow - RGB OLED,\n it will draw a triangle\n\n create on 2014/06/24, version: 0.1\n by lawliet.zou(lawliet.zou@gmail.com)\n*/\n\n#include &lt;SGL.h&gt;\n#include &lt;SSD1331.h&gt;\n#include &lt;SPI.h&gt;\n\n#define cs     A5\n#define dc     3\n#define mosi   16\n#define sclk   15\n\nSSD1331 oled = SSD1331(cs, dc, mosi, sclk);\n\nvoid setup(){\n    Serial.begin(9600);\n    Serial.println("Start to draw");\n    oled.init();\n    oled.fillScreen(COLOR_BLACK);\n    delay(2000);\n\n}\n\nvoid loop(){\n    //nothing to do\n    uint8_t x0 = random(0,96);\n    uint8_t y0 = random(0,64);\n    uint8_t x1 = random(0,96);\n    uint8_t y1 = random(0,64);\n    uint8_t x2 = random(0,96);\n    uint8_t y2 = random(0,64);\n    oled.drawTraingle(x0,y0,x1,y1,x2,y2,random(0,65536));\n    delay(3000);\n    oled.fillScreen(COLOR_BLACK);\n}\n\n')),(0,l.kt)("p",null,"Upload the code, you can see triangles with random location and shape will be drew on the screen of RGB OLED just as follow."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_Triangle.gif",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Draw String")),(0,l.kt)("p",null,"Open the DrawString example sketch by the path: Files-",">","Examples-",">","RGB_OLED_96_64-",">","examples-",">","drawString."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n/*\n draw string\n\n This sketch is used to test Seeed\'s Xadow - RGB OLED,\n it will draw a string\n\n create on 2014/06/24, version: 0.1\n by lawliet.zou(lawliet.zou@gmail.com)\n*/\n\n#include &lt;SGL.h&gt;\n#include &lt;SSD1331.h&gt;\n#include &lt;SPI.h&gt;\n\n#define cs     A5\n#define dc     3\n#define mosi   16\n#define sclk   15\n\nSSD1331 oled = SSD1331(cs, dc, mosi, sclk);\n\nchar* str = "Seeed";\n\nvoid setup(){\n    Serial.begin(9600);\n    Serial.println("Start to draw");\n    oled.init();\n    oled.fillScreen(COLOR_BLACK);\n    delay(2000);\n    oled.drawString(str,15,25,2,COLOR_GREEN);\n    delay(2000);\n    oled.setScolling(Horizontal,0,64,1);\n}\n\nvoid loop(){\n    //nothing to do\n}\n\n')),(0,l.kt)("p",null,'Upload the code, you can see the string "seeed" will be drew on the screen of RGB OLED just as follow.'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_String.gif",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Draw BitMap")),(0,l.kt)("p",null,"Open the DrawBitMap example sketch by the path: Files-",">","Examples-",">","RGB_OLED_96_64-",">","examples-",">","drawBitMap."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'\n/*\n draw bitmap\n\n This sketch is used to test Seeed\'s Xadow - RGB OLED,\n it will draw a bitmap\n\n create on 2014/06/24, version: 0.1\n by lawliet.zou(lawliet.zou@gmail.com)\n*/\n\n#include &lt;SGL.h&gt;\n#include &lt;SSD1331.h&gt;\n#include &lt;SPI.h&gt;\n\n#define cs     A5\n#define dc     3\n#define mosi   16\n#define sclk   15\n\nSSD1331 oled = SSD1331(cs, dc, mosi, sclk);\n\nstatic unsigned char SeeedLogo[] PROGMEM ={\n0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x80, 0x04, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0x80, 0x06, 0x00,\n0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x03, 0x80, 0x07, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x00, 0x00, 0x07, 0x00, 0x03, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x0F, 0x00, 0x03, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x01, 0xE0,\n0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0x01, 0xE0, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x00, 0x00, 0x3E, 0x00, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x3E, 0x00, 0x01, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x7C, 0x00, 0x00, 0xF8,\n0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00, 0x7C, 0x00, 0x00, 0xF8, 0x00, 0x60, 0x00, 0x00,\n0x00, 0x00, 0x18, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x18, 0x00,\n0xFC, 0x00, 0x00, 0xFC, 0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC,\n0x00, 0x60, 0x00, 0x00, 0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0xE0, 0x00, 0x00,\n0x00, 0x00, 0x1C, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x00, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00,\n0xFC, 0x00, 0x00, 0xFC, 0x01, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0xFC, 0x00, 0x00, 0xFC,\n0x01, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1E, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x01, 0xE0, 0x00, 0x00,\n0x00, 0x00, 0x1F, 0x00, 0xFC, 0x00, 0x00, 0xFC, 0x03, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x80,\n0xFC, 0x00, 0x00, 0xFC, 0x03, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x80, 0xFE, 0x00, 0x00, 0xFC,\n0x07, 0xE0, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xC0, 0x7E, 0x00, 0x01, 0xFC, 0x0F, 0xE0, 0x00, 0x00,\n0x00, 0x00, 0x0F, 0xC0, 0x7E, 0x00, 0x01, 0xF8, 0x0F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xE0,\n0x7E, 0x00, 0x01, 0xF8, 0x1F, 0xC0, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF0, 0x3F, 0x00, 0x01, 0xF0,\n0x3F, 0x80, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF0, 0x3F, 0x00, 0x03, 0xF0, 0x3F, 0x80, 0x00, 0x00,\n0x00, 0x00, 0x03, 0xF8, 0x1F, 0x00, 0x03, 0xE0, 0x7F, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFC,\n0x1F, 0x80, 0x07, 0xE0, 0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x01, 0xFE, 0x0F, 0x80, 0x07, 0xC1,\n0xFE, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x07, 0xC0, 0x07, 0x83, 0xFC, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x00, 0x7F, 0x83, 0xC0, 0x0F, 0x07, 0xF8, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F,\n0xC1, 0xE0, 0x0E, 0x0F, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0xF0, 0xE0, 0x1C, 0x1F,\n0xE0, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x07, 0xF8, 0x70, 0x38, 0x7F, 0x80, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x00, 0x03, 0xFC, 0x38, 0x30, 0xFF, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n0xFF, 0x00, 0x03, 0xFC, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3F, 0x80, 0x07, 0xF0,\n0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x0F, 0xF0, 0x3F, 0xC0, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x00, 0x00, 0x01, 0xF8, 0x7E, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x08, 0x40, 0x00, 0x00, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x3C, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x3C, 0x00,\n0x00, 0x03, 0xF0, 0x0F, 0xC0, 0x0F, 0xC0, 0x0F, 0x80, 0x1F, 0xBC, 0x00, 0x00, 0x0F, 0xF8, 0x3F,\n0xF0, 0x3F, 0xF0, 0x3F, 0xE0, 0x7F, 0xFC, 0x00, 0x00, 0x1F, 0xFC, 0x7F, 0xF8, 0x7F, 0xF8, 0x7F,\n0xF8, 0xFF, 0xFC, 0x00, 0x00, 0x1F, 0x7E, 0xFE, 0xFC, 0xFD, 0xFC, 0xFD, 0xFD, 0xFD, 0xFC, 0x00,\n0x00, 0x1E, 0x1E, 0xF0, 0x3F, 0xF0, 0x3D, 0xE0, 0x3D, 0xE0, 0x7C, 0x00, 0x00, 0x1F, 0xF1, 0xFF,\n0xFF, 0xFF, 0xFF, 0xFF, 0xFD, 0xE0, 0x3C, 0x00, 0x00, 0x0F, 0xFD, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,\n0xFD, 0xC0, 0x3C, 0x00, 0x00, 0x03, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFD, 0xC0, 0x3C, 0x00,\n0x00, 0x3C, 0x1E, 0xF0, 0x31, 0xF0, 0x21, 0xE0, 0x21, 0xE0, 0x7C, 0x00, 0x00, 0x3F, 0x3E, 0xFE,\n0xFC, 0xFC, 0xF8, 0xFD, 0xF9, 0xFD, 0xFC, 0x00, 0x00, 0x1F, 0xFE, 0x7F, 0xFC, 0x7F, 0xF8, 0x7F,\n0xF8, 0xFF, 0xFC, 0x00, 0x00, 0x0F, 0xFC, 0x3F, 0xF0, 0x3F, 0xF0, 0x3F, 0xE0, 0x7F, 0xFC, 0x00,\n0x00, 0x03, 0xF0, 0x0F, 0xC0, 0x0F, 0xC0, 0x0F, 0x80, 0x1F, 0xBC, 0x00, 0x00, 0x00, 0x00, 0x00,\n0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x64, 0xCD, 0xF6, 0xE1, 0xC9, 0x3F,\n0x3F, 0xFB, 0xA6, 0x00, 0x00, 0x1F, 0xFF, 0xEF, 0xFF, 0xFF, 0xFF, 0xBF, 0xFF, 0xFF, 0xFE, 0x00,\n0x00, 0x1F, 0xFF, 0xEF, 0xFF, 0xFF, 0xFF, 0xBF, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x1F, 0xFF, 0xED,\n0xFF, 0xFF, 0xFF, 0xB7, 0xFF, 0xFF, 0xFC, 0x00, 0x00, 0x00, 0xC0, 0x00, 0x20, 0x00, 0x01, 0x00,\n0x00, 0x08, 0x00, 0x00, 0x00, 0x00, 0x80, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00\n};\n\nvoid setup(){\n    Serial.begin(9600);\n    Serial.println("Start to draw");\n    oled.init();\n    oled.fillScreen(COLOR_BLACK);\n    delay(2000);\n    oled.drawBitMap(0,0,SeeedLogo,96,64,COLOR_YELLOW);\n    delay(5000);\n    Serial.println("start to scoll ...");\n    oled.setScolling(Vertical,0,64,0);\n}\n\nvoid loop(){\n    //nothing to do\n}\n\n')),(0,l.kt)("p",null,"Upload the code, you can see Seeed's logo with yellow color will be drew on the screen of RGB OLED just as follow."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/img/RGB_OLED_BitMap.gif",alt:null})),(0,l.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,l.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/res/Xadow_OLED.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_RGB_OLED_96multiply64/res/Xadow_OLED.zip"},"Xadow RGB OLED Eagle File"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/RGB_OLED_SSD1331"},"Xadow RGB OLED Library"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/SGL"},"Seeed Graphics Library")))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
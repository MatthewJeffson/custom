"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(g,l(l({ref:t},d),{},{components:n})):r.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61733:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"Basic of LCD",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio-Terminal-LCD-Basic",last_update:{date:"01/11/2022",author:"gunengyu"}},l="Basics of the TFT LCD Screen",o={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Basic",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Basic",title:"Basic of LCD",description:"Pixel Coordinates Systems",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Basic.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Basic",permalink:"/custom/Wio-Terminal-LCD-Basic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Basic.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Basic of LCD",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_Module_Build-in_Wireless_2.4G/",slug:"/Wio-Terminal-LCD-Basic",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/Wio-Terminal-LCD-Overview"},next:{title:"Graphics",permalink:"/custom/Wio-Terminal-LCD-Graphics"}},c={},s=[{value:"Pixel Coordinates Systems",id:"pixel-coordinates-systems",level:2},{value:"8-bit &amp; 16-bit colour model",id:"8-bit--16-bit-colour-model",level:2},{value:"8-bit colour",id:"8-bit-colour",level:3},{value:"16-bit colour",id:"16-bit-colour",level:3},{value:"TFT LCD Screen Initialisation",id:"tft-lcd-screen-initialisation",level:2},{value:"Example code",id:"example-code",level:3},{value:"Turning Off The LCD Backlight",id:"turning-off-the-lcd-backlight",level:2},{value:"Controlling Brightness of the LCD Backlight",id:"controlling-brightness-of-the-lcd-backlight",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"basics-of-the-tft-lcd-screen"},"Basics of the TFT LCD Screen"),(0,a.kt)("h2",{id:"pixel-coordinates-systems"},"Pixel Coordinates Systems"),(0,a.kt)("p",null,"A digital 2-D image is made up of rows and columns of pixels. A pixel in the image is specified by saying which column  and which row the pixel is in. In simple terms, a pixel can be identified by a pair of integers providing the column number and the row number. For example, the pixel with coordinates (4,7) would lie in column 4, and row 7. "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/grids.jpg"})),(0,a.kt)("p",null,"Conventionally, columns are numbered from the top left to right, starting from zero, but in some cases, it can also start from other corners(by setting rotation)."),(0,a.kt)("h2",{id:"8-bit--16-bit-colour-model"},"8-bit & 16-bit colour model"),(0,a.kt)("p",null,"Pixels also expressed in colour form, so also better to cover some colour models. The 8 bit and 16 bit colour models are good for MCUs to work with so this is a good start. Theses two colour models consist of 3 colour components - ",(0,a.kt)("strong",{parentName:"p"},"Red, Green, and Blue"),". Depending on the colour model, these 3 colour components will be stored into 8 bits or 16 bits variable."),(0,a.kt)("h3",{id:"8-bit-colour"},"8-bit colour"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bit"),(0,a.kt)("th",{parentName:"tr",align:"center"},"7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Data")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue")))),(0,a.kt)("h3",{id:"16-bit-colour"},"16-bit colour"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bit"),(0,a.kt)("th",{parentName:"tr",align:"center"},"15"),(0,a.kt)("th",{parentName:"tr",align:"center"},"14"),(0,a.kt)("th",{parentName:"tr",align:"center"},"13"),(0,a.kt)("th",{parentName:"tr",align:"center"},"12"),(0,a.kt)("th",{parentName:"tr",align:"center"},"11"),(0,a.kt)("th",{parentName:"tr",align:"center"},"10"),(0,a.kt)("th",{parentName:"tr",align:"center"},"9"),(0,a.kt)("th",{parentName:"tr",align:"center"},"8"),(0,a.kt)("th",{parentName:"tr",align:"center"},"7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Data")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue")))),(0,a.kt)("p",null,"Here are some basic pre-defined example colours(16-bit) including in the LCD library:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#define TFT_BLACK       0x0000      /*   0,   0,   0 */\n#define TFT_NAVY        0x000F      /*   0,   0, 128 */\n#define TFT_DARKGREEN   0x03E0      /*   0, 128,   0 */\n#define TFT_DARKCYAN    0x03EF      /*   0, 128, 128 */\n#define TFT_MAROON      0x7800      /* 128,   0,   0 */\n#define TFT_PURPLE      0x780F      /* 128,   0, 128 */\n#define TFT_OLIVE       0x7BE0      /* 128, 128,   0 */\n#define TFT_LIGHTGREY   0xC618      /* 192, 192, 192 */\n#define TFT_DARKGREY    0x7BEF      /* 128, 128, 128 */\n#define TFT_BLUE        0x001F      /*   0,   0, 255 */\n#define TFT_GREEN       0x07E0      /*   0, 255,   0 */\n#define TFT_CYAN        0x07FF      /*   0, 255, 255 */\n#define TFT_RED         0xF800      /* 255,   0,   0 */\n#define TFT_MAGENTA     0xF81F      /* 255,   0, 255 */\n#define TFT_YELLOW      0xFFE0      /* 255, 255,   0 */\n#define TFT_WHITE       0xFFFF      /* 255, 255, 255 */\n#define TFT_ORANGE      0xFDA0      /* 255, 180,   0 */\n#define TFT_GREENYELLOW 0xB7E0      /* 180, 255,   0 */\n")),(0,a.kt)("h2",{id:"tft-lcd-screen-initialisation"},"TFT LCD Screen Initialisation"),(0,a.kt)("p",null,"To initialise the TFT LCD screen on Wio Terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n  ...\n    tft.begin();\n    tft.setRotation(r);\n    digitalWrite(LCD_BACKLIGHT, HIGH); // turn on the backlight\n  ...\n}\n')),(0,a.kt)("p",null,"where r is the rotation of the TFT LCD screen (from 0 to 3),  meaning which corner it will start."),(0,a.kt)("h3",{id:"example-code"},"Example code"),(0,a.kt)("p",null,"This example initialises the TFT LCD screen on Wio Terminal and fills the screen with colour red."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n\n    tft.fillScreen(TFT_RED); // fills entire the screen with colour red\n}\n\nvoid loop() {\n\n}\n')),(0,a.kt)("h2",{id:"turning-off-the-lcd-backlight"},"Turning Off The LCD Backlight"),(0,a.kt)("p",null,"To turn off the LCD backlight of Wio Terminal, simply define the LCD Backlight control pin ",(0,a.kt)("inlineCode",{parentName:"p"},"72Ul")," and pull it ",(0,a.kt)("inlineCode",{parentName:"p"},"HIGH")," to turn on and pull it ",(0,a.kt)("inlineCode",{parentName:"p"},"LOW")," to turn off:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"TFT_eSPI.h"\nTFT_eSPI tft;\n#define LCD_BACKLIGHT (72Ul) // Control Pin of LCD\n\nvoid setup() {\n  // put your setup code here, to run once:\n  \n    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_RED);\n\n    delay(2000);\n    // Turning off the LCD backlight\n    digitalWrite(LCD_BACKLIGHT, LOW);\n    delay(2000);\n    // Turning on the LCD backlight\n    digitalWrite(LCD_BACKLIGHT, HIGH);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n\n}\n')),(0,a.kt)("h2",{id:"controlling-brightness-of-the-lcd-backlight"},"Controlling Brightness of the LCD Backlight"),(0,a.kt)("p",null,"This example is written by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ciniml"},(0,a.kt)("strong",{parentName:"a"},"Kenta IDA"))," and all credits goes to Kenta IDA."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 1.")," ",(0,a.kt)("strong",{parentName:"p"},"Download the ",(0,a.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook"},"repo")," here.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"examples/WioTerminal_BackLight")," location.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"STEP 2.")," ",(0,a.kt)("strong",{parentName:"p"},"Upload the code.")),(0,a.kt)("p",null,"Upload the ",(0,a.kt)("inlineCode",{parentName:"p"},"lcd_backlight_control.ino")," to Wio Terminal and you will see brightness change on the LCD."),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
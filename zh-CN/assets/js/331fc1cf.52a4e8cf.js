"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30225],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Smooth Fonts",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Anti-aliased-Fonts./",slug:"/Wio-Terminal-LCD-Anti-aliased-Fonts",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Displaying Anti-aliased Fonts",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Anti-aliased-Fonts",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Anti-aliased-Fonts",title:"Smooth Fonts",description:"This repo demonstrates how to use Anti-aliased fonts in Wio Terminal (i.e. Displaying Japanese characters, Greek characters and other UCS-2 glyphs)! Further, smooth fonts can also be used to display Normal English characters with your favorite font in your computer.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Anti-aliased-Fonts.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Anti-aliased-Fonts",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Anti-aliased-Fonts",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Anti-aliased-Fonts.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"2022\u5e741\u670810\u65e5",frontMatter:{title:"Smooth Fonts",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Anti-aliased-Fonts./",slug:"/Wio-Terminal-LCD-Anti-aliased-Fonts",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Fonts",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Fonts"},next:{title:"Loading Image",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Loading-Image"}},s={},p=[{value:"Libraries Installation",id:"libraries-installation",level:2},{value:"Installing the SD Card library for Wio Terminal",id:"installing-the-sd-card-library-for-wio-terminal",level:3},{value:"Installing the TFT LCD Library For Wio Terminal",id:"installing-the-tft-lcd-library-for-wio-terminal",level:3},{value:"Generate vlw Font file",id:"generate-vlw-font-file",level:2},{value:"Step 1",id:"step-1",level:3},{value:"Step 2",id:"step-2",level:3},{value:"Step 3",id:"step-3",level:3},{value:"Step 4",id:"step-4",level:3},{value:"Step 5",id:"step-5",level:3},{value:"Storing into SD Card",id:"storing-into-sd-card",level:2},{value:"Configuring the LCD Library",id:"configuring-the-lcd-library",level:2},{value:"Displaying",id:"displaying",level:2},{value:"Complete Code",id:"complete-code",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"displaying-anti-aliased-fonts"},"Displaying Anti-aliased Fonts"),(0,a.kt)("p",null,"This repo demonstrates how to use Anti-aliased fonts in Wio Terminal (",(0,a.kt)("strong",{parentName:"p"},"i.e. Displaying Japanese characters, Greek characters and other UCS-2 glyphs"),")! Further, smooth fonts can also be used to display Normal English characters with your favorite font in your computer."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117131650.gif"})),(0,a.kt)("h2",{id:"libraries-installation"},"Libraries Installation"),(0,a.kt)("h3",{id:"installing-the-sd-card-library-for-wio-terminal"},"Installing the SD Card library for Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"visit ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/"},"File System Overview"))),(0,a.kt)("h3",{id:"installing-the-tft-lcd-library-for-wio-terminal"},"Installing the TFT LCD Library For Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"visit ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"TFT LCD Overview"))),(0,a.kt)("h2",{id:"generate-vlw-font-file"},"Generate vlw Font file"),(0,a.kt)("p",null,"Here demonstrates how to generate a vlw font file that can be used for smooth font in Wio Terminal."),(0,a.kt)("h3",{id:"step-1"},"Step 1"),(0,a.kt)("p",null,"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://processing.org/"},(0,a.kt)("strong",{parentName:"a"},"Processing"))," software and download according to your operating system."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117095509.jpg"})),(0,a.kt)("h3",{id:"step-2"},"Step 2"),(0,a.kt)("p",null,"Open ",(0,a.kt)("strong",{parentName:"p"},"Processing"),", and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Create Font...")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100029.jpg"})),(0,a.kt)("h3",{id:"step-3"},"Step 3"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Create Font")," Window will appear. You are able to choose the font available from your computer. Change the font size, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Characters..."),". You can also change the Filename of the vlw file."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117100808.jpg"})),(0,a.kt)("h3",{id:"step-4"},"Step 4"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Character Selector")," window will appear, and you are able to choose the specific language Unicode Characters Blocks(i.e Basic Latin in this case). ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"For Asian characters, CJK Compatibility or CJK category unicode Blocks are recommended to use."))," Click ",(0,a.kt)("inlineCode",{parentName:"p"},"OK")," to save font settings."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117104728.jpg"})),(0,a.kt)("h3",{id:"step-5"},"Step 5"),(0,a.kt)("p",null,"Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Save")," and save the sketch file into your local drive in your computer. Now, we have generated the vlw font file!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200117105224.jpg"})),(0,a.kt)("h2",{id:"storing-into-sd-card"},"Storing into SD Card"),(0,a.kt)("p",null,"Once generated the vlw font file, you can find the vlw file inside ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"data"))," folder inside the sketch file you saved in the previous step."),(0,a.kt)("p",null,"Now, copy the vlw font file into the SD card and put the SD card back in Wio Terminal."),(0,a.kt)("h2",{id:"configuring-the-lcd-library"},"Configuring the LCD Library"),(0,a.kt)("p",null,"By default, the smooth font option for LCD Library is ",(0,a.kt)("strong",{parentName:"p"},"turned off")," to save resources on Wio Terminal. ",(0,a.kt)("strong",{parentName:"p"},"So it needs to be configured to enable smooth font in Wio Terminal.")),(0,a.kt)("p",null,"Navigate to the Arduino Library folders(",(0,a.kt)("strong",{parentName:"p"},"libraries"),") -> ",(0,a.kt)("strong",{parentName:"p"},"Seeed_Arduino_LCD")," and open ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"User_Setup.h"))," with editor. Search ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"#define SMOOTH_FONT"))," and uncomment the line as followed:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/smoothFont.png"})),(0,a.kt)("p",null,"Now you have enabled smooth font in Wio Terminal, you can display any fonts or characters that you like!"),(0,a.kt)("h2",{id:"displaying"},"Displaying"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To load font from SD card to Wio Terminal:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void loadFont(String fontName);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"fontName")," is the name of the vlw font file."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To show all the characters inside vlw on screen:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void showFont(uint32_t td);\n")),(0,a.kt)("p",null,"where ",(0,a.kt)("inlineCode",{parentName:"p"},"td")," is the delay time between screens while showing all the characters."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To unload fonts:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void unloadFont();\n")),(0,a.kt)("p",null,"To display characters in screen, you can use the functions just like in the tft libraries using ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"tft.println()")),". Further, you can use other functions like ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"tft.setCursor()"))," and ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"tft.setTextColor"))," to change the position and color of character displaying."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),": Please check the ",(0,a.kt)("inlineCode",{parentName:"p"},"User_Setup.h")," in the LCD library and make sure that ",(0,a.kt)("inlineCode",{parentName:"p"},"#define SMOOTH_FONT")," is uncommented."),(0,a.kt)("h2",{id:"complete-code"},"Complete Code"),(0,a.kt)("p",null,"Please download the complete code and the example vlw files ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/JanpaneseFonts.zip"},"here"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include<SPI.h>\n#include "Seeed_FS.h"\n#include "SD/Seeed_SD.h"\n#include"TFT_eSPI.h"\n\nTFT_eSPI tft;\n\nvoid setup() {\n    tft.begin();\n    Serial.begin(115200);\n    tft.setRotation(3);\n    tft.fillScreen(TFT_BLACK); //Black background\n\n    while(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)){\n        Serial.println("SD card error!\\n");\n        while(1);\n  }\n  delay(1000);\n\n  tft.loadFont("Apple-Chancery-24");\n  // Show all characters on screen with 2 second (2000ms) delay between screens\n  tft.showFont(2000); // Note: This function moves the cursor position!\n\n  tft.setTextColor(TFT_RED,TFT_BLACK);\n  tft.setCursor(0,0);\n\n  tft.println("Konnichiwa");\n  tft.println("Sayonara");\n  tft.println();\n  tft.unloadFont();\n\n  tft.loadFont("Latin-Hiragana-24");\n  tft.setTextColor(TFT_GREEN,TFT_BLACK);\n  tft.println("\u3053\u3093\u306b\u3061\u306f");\n  tft.println("\u3055\u3088\u3046\u306a\u3089");\n  tft.unloadFont();\n  \n}\nvoid loop(){}\n')),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6422],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),h=a,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return n?i.createElement(g,l(l({ref:t},u),{},{components:n})):i.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22494:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={description:"TFT Touch Shield V1.0",title:"TFT Touch Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/TFT_Touch_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/TFT_Touch_Shield_V1.0",id:"Top_Brand/Arduino/shield/TFT_Touch_Shield_V1.0",title:"TFT Touch Shield V1.0",description:"TFT Touch Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/TFT_Touch_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/TFT_Touch_Shield_V1.0",permalink:"/custom/TFT_Touch_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/TFT_Touch_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"TFT Touch Shield V1.0",title:"TFT Touch Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/TFT_Touch_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Starter Shield EN",permalink:"/custom/Starter_Shield_EN"},next:{title:"WIFI Shield",permalink:"/custom/Wifi_Shield"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Pins usage on Arduino",id:"pins-usage-on-arduino",level:3},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"TFT Programming",id:"tft-programming",level:2},{value:"General Functions",id:"general-functions",level:3},{value:"setXY(unsigned int poX, unsigned int poY)",id:"setxyunsigned-int-pox-unsigned-int-poy",level:4},{value:"setPixel(unsigned int poX, unsigned int poY,unsigned int color)",id:"setpixelunsigned-int-pox-unsigned-int-poyunsigned-int-color",level:4},{value:"Lines",id:"lines",level:3},{value:"drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color)",id:"drawlineunsigned-int-x0unsigned-int-y0unsigned-int-x1unsigned-int-y1unsigned-int-color",level:4},{value:"drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)",id:"drawverticallineunsigned-int-pox-unsigned-int-poyunsigned-int-lengthunsigned-int-color",level:4},{value:"drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)",id:"drawhorizontallineunsigned-int-pox-unsigned-int-poyunsigned-int-lengthunsigned-int-color",level:4},{value:"Rectangle",id:"rectangle",level:3},{value:"drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color)",id:"drawrectangleunsigned-int-pox-unsigned-int-poy-unsigned-int-lengthunsigned-int-widthunsigned-int-color",level:4},{value:"fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)",id:"fillrectangleunsigned-int-pox-unsigned-int-poy-unsigned-int-length-unsigned-int-width-unsigned-int-color",level:4},{value:"Circle",id:"circle",level:3},{value:"drawCircle(int poX, int poY, int r,unsigned int color)",id:"drawcircleint-pox-int-poy-int-runsigned-int-color",level:4},{value:"fillCircle(int poX, int poY, int r,unsigned int color)",id:"fillcircleint-pox-int-poy-int-runsigned-int-color",level:4},{value:"Text",id:"text",level:3},{value:"drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor)",id:"drawcharunsigned-char-asciiunsigned-int-pox-unsigned-int-poyunsigned-int-size-unsigned-int-fgcolor",level:4},{value:"drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor)",id:"drawstringchar-stringunsigned-int-pox-unsigned-int-poyunsigned-int-sizeunsigned-int-fgcolor",level:4},{value:"TouchScreen Programming",id:"touchscreen-programming",level:3},{value:"How to calibrate the touch screen\xa0?",id:"how-to-calibrate-the-touch-screen",level:4},{value:"Touch Screen Demo Sketch",id:"touch-screen-demo-sketch",level:4},{value:"Demo Code shown",id:"demo-code-shown",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Support",id:"support",level:2},{value:"TFT Touch Shield v1.0 Schematic Online Viewer",id:"tft-touch-shield-v10-schematic-online-viewer",level:2},{value:"TFT Touch Shield v0.9b Schematic Online Viewer",id:"tft-touch-shield-v09b-schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"See Also",id:"see-also",level:2},{value:"Licensing",id:"licensing",level:2},{value:"External Links",id:"external-links",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"Share Your Awesome Projects with Us",id:"share-your-awesome-projects-with-us",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/Tft.jpg",alt:null})),(0,a.kt)("p",null,'2.8" TFT Touch Shield is an Arduino / Arduino Mega compatible multicolored TFT display with a 4-wire resistive touch screen. It includes an Arduino shield compatible footprint for attachment. The TFT driver is based on professional Driver IC and with 8 bit data and 4 bit control interface.'),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Arduino/Seeeduino, Arduino Mega, and Seeeduino Mega compatible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2.8\u201d Size QVGA Display")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Resistive Touch Screen"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"4.5"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"5.5"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Current"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"250"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LCD Panel Size"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"2.8 inch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"View angle"),(0,a.kt)("td",{parentName:"tr",align:null},"60~120"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Deg")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,a.kt)("td",{parentName:"tr",align:null},"320x240"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LCD color"),(0,a.kt)("td",{parentName:"tr",align:null},"65k"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backlight Type"),(0,a.kt)("td",{parentName:"tr",align:null},"LED"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"LCD driver IC"),(0,a.kt)("td",{parentName:"tr",align:null},"ST7781R"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Parallel port ( 8bit Data + 4bit Control )"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Touch Screen"),(0,a.kt)("td",{parentName:"tr",align:null},"4-Wire resistive touch screen"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Active area"),(0,a.kt)("td",{parentName:"tr",align:null},"43.2*57.3"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESD contact discharge"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb14"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"KV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ESD air discharge"),(0,a.kt)("td",{parentName:"tr",align:null},"\xb18"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"KV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,a.kt)("td",{parentName:"tr",align:null},"72.5x54.7x18"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"24\xb12"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"g")))),(0,a.kt)("h2",{id:"cautions"},"Cautions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not subject the module to mechanical shock or impact by dropping it.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Do not apply excessive force to the display surface or the adjoining areas since this may cause the color tone to vary."))),(0,a.kt)("h3",{id:"pins-usage-on-arduino"},"Pins usage on Arduino"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/2.8_Inch_TFT_Touch_Shield_Block_Diagram.jpg",alt:null})," (width=undefined)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D0")," - Unused."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D1")," - Unused."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D2")," - LCD data bit 8."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D3")," - LCD data bit 9."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D4")," - LCD data bit 10."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D5")," - LCD data bit 11."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D6")," - LCD data bit 12."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D7")," - LCD data bit 13."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D8")," - LCD data bit 14."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D9")," - LCD data bit 15."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D10")," - LCD CS pin, active low."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D11")," - LCD RS pin."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D12")," - LCD WR pin."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D13")," - LCD RD pin."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D14(A0)")," - Touch Screen Y-."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D15(A1)")," - Touch Screen X-."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D16(A2)")," - Touch Screen Y+."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D17(A3)")," - Touch Screen X+."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D18(A4)")," - Unused."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D19(A5)")," - Unused."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert the TFT Touch Shield to Seeeduino as shown below.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/TFT_Touch_Shield_with_Seeeduino.jpg",alt:null})),(0,a.kt)("h2",{id:"tft-programming"},"TFT Programming"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"TFT")," library provides the following Application Programming Interfaces(API). The library makes use of direct access to PORT registers instead of Arduino APIs. This is to increase the speed of communication between MCU and TFT. At present, the library supports Arduino, Arduino Mega (1280 or 2560) and Seeeduino ADK Main Board compatible boards. In Mega the 8bit data port of TFT is distributed to different pins belonging to different ports. This decreases the speed of graphics drawing when compared to Arduino. The choice of port pins are purely based on Arduino / Mega port pin arrangement."),(0,a.kt)("h3",{id:"general-functions"},"General Functions"),(0,a.kt)("hr",null),(0,a.kt)("h4",{id:"setxyunsigned-int-pox-unsigned-int-poy"},"setXY(unsigned int poX, unsigned int poY)"),(0,a.kt)("p",null,"Sets the cursor position to (poX,poY). This function is internally used by other graphics APIs."),(0,a.kt)("h4",{id:"setpixelunsigned-int-pox-unsigned-int-poyunsigned-int-color"},"setPixel(unsigned int poX, unsigned int poY,unsigned int color)"),(0,a.kt)("p",null,"Sets the (poX,poY) pixel to color color. This function is internally used by other graphics APIs."),(0,a.kt)("h3",{id:"lines"},"Lines"),(0,a.kt)("h4",{id:"drawlineunsigned-int-x0unsigned-int-y0unsigned-int-x1unsigned-int-y1unsigned-int-color"},"drawLine(unsigned int x0,unsigned int y0,unsigned int x1,unsigned int y1,unsigned int color)"),(0,a.kt)("p",null,"Draws a line from pixel (x0,y0) to pixel (x1,y1) with color color."),(0,a.kt)("h4",{id:"drawverticallineunsigned-int-pox-unsigned-int-poyunsigned-int-lengthunsigned-int-color"},"drawVerticalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)"),(0,a.kt)("p",null,"Draws a Horizontal Line of length length with color color starting from pixel (poX,poY)."),(0,a.kt)("h4",{id:"drawhorizontallineunsigned-int-pox-unsigned-int-poyunsigned-int-lengthunsigned-int-color"},"drawHorizontalLine(unsigned int poX, unsigned int poY,unsigned int length,unsigned int color)"),(0,a.kt)("p",null,"Draws a Vertical Line of length length with color color starting from pixel (poX,poY)."),(0,a.kt)("h3",{id:"rectangle"},"Rectangle"),(0,a.kt)("h4",{id:"drawrectangleunsigned-int-pox-unsigned-int-poy-unsigned-int-lengthunsigned-int-widthunsigned-int-color"},"drawRectangle(unsigned int poX, unsigned int poY, unsigned int length,unsigned int width,unsigned int color)"),(0,a.kt)("p",null,"Draws a rectangle starting from (poX,poY) of length length, width width and color color."),(0,a.kt)("h4",{id:"fillrectangleunsigned-int-pox-unsigned-int-poy-unsigned-int-length-unsigned-int-width-unsigned-int-color"},"fillRectangle(unsigned int poX, unsigned int poY, unsigned int length, unsigned int width, unsigned int color)"),(0,a.kt)("p",null,"Draws a filled rectangle starting from pixel (poX,poY) of length length, width width and color color."),(0,a.kt)("h3",{id:"circle"},"Circle"),(0,a.kt)("h4",{id:"drawcircleint-pox-int-poy-int-runsigned-int-color"},"drawCircle(int poX, int poY, int r,unsigned int color)"),(0,a.kt)("p",null,"Draws a circle at (poX,poY) of radius radius and color color."),(0,a.kt)("h4",{id:"fillcircleint-pox-int-poy-int-runsigned-int-color"},"fillCircle(int poX, int poY, int r,unsigned int color)"),(0,a.kt)("p",null,"Draws a filled circle at (poX,poY) of radius radius and color color."),(0,a.kt)("h3",{id:"text"},"Text"),(0,a.kt)("h4",{id:"drawcharunsigned-char-asciiunsigned-int-pox-unsigned-int-poyunsigned-int-size-unsigned-int-fgcolor"},"drawChar(unsigned char ascii,unsigned int poX, unsigned int poY,unsigned int size, unsigned int fgcolor)"),(0,a.kt)("p",null,"Draws a character starting from (poX,poY) using inbuilt font of size size and with color fgcolor. This function is used by drawString() function."),(0,a.kt)("h4",{id:"drawstringchar-stringunsigned-int-pox-unsigned-int-poyunsigned-int-sizeunsigned-int-fgcolor"},"drawString(char *string,unsigned int poX, unsigned int poY,unsigned int size,unsigned int fgcolor)"),(0,a.kt)("p",null,"Draws a string of text starting from (poX,poY) using inbuilt font of size size and with color fgcolor."),(0,a.kt)("h3",{id:"touchscreen-programming"},"TouchScreen Programming"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"TFT Touch Shield uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Touch-Screen-Library"},"Adafruit Touch Screen Library"),". To understand the principle behind resistive touch screen refer ",(0,a.kt)("a",{parentName:"p",href:"/2.8inch_TFT_Touch_Shield_v2.0#resources"},"External Links"),". In short, a 4-wire resistive touch screen provides two voltage divider each for X and Y axis. By applying proper voltages for each axis and scanning the ADC values the position of the touch can be detected. These values are always prone to noise. Hence a digital filter is used."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To use the TouchScreen Library first create a TouchScreen object by")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TouchScreen ts = TouchScreen(XP, YP, XM, YM, 300);")),(0,a.kt)("p",null,"Where XP, YP, XM and YM are ADC port pins connected to XPlus, YPlus, XMinus and YMinus pins of Touch Screen. 300 is the resistance across X plates."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Read the Raw ADC value using")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Point p = ts.getPoint();")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Raw ADC value has to be converted to Pixel Co-ordinates. This is done with map function. This mapping changes for v0.9 and v1.0. The demo applications already takes care of this mapping.")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);\np.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The following sketch demonstrates use of TouchScreen Library. This can also be used to calibrate the touch screen co-ordinates.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compile and upload the sketch.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open serial port monitor and touch the points displayed on the screen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"See if the displayed X and Y values are correct. If not, we have to re-calibrate the touch screen coordinates."))),(0,a.kt)("h4",{id:"how-to-calibrate-the-touch-screen"},"How to calibrate the touch screen\xa0?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The parameters ",(0,a.kt)("inlineCode",{parentName:"p"},"TS_MINX, TS_MAXX, TS_MINY and TS_MAXY")," actually decides the extreme ends of the touch screen and actually forms the calibration parameters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The values assigned to these variables are measured ADC values (i.e Raw X, Raw Y) when we touch the extreme diagonal ends of touch screen.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Touch points (0,0) and (239,319) and note down Raw X and Raw Y values. For better accuracy, try out many times and find the right value.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"TS_MINX")," corresponds to ADC value when X = 0\xa0;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"TS_MINY")," corresponds to ADC value when Y = 0\xa0;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"TS_MAXX")," corresponds to ADC value when X = 240 -1 i.e 239\xa0;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"TS_MAXY")," corresponds to ADC value when Y = 320 -1 i.e 319\xa0;")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Change these parameters in the sketch, recompile and upload to Arduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Repeat the above steps if you still do not get accurate values."))),(0,a.kt)("h4",{id:"touch-screen-demo-sketch"},"Touch Screen Demo Sketch"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'// Paint application - Demonstate both TFT and Touch Screen\n//  This library is free software; you can redistribute it and/or\n//  modify it under the terms of the GNU Lesser General Public\n//  License as published by the Free Software Foundation; either\n//  version 2.1 of the License, or (at your option) any later version.\n//\n//  This library is distributed in the hope that it will be useful,\n//  but WITHOUT ANY WARRANTY; without even the implied warranty of\n//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\n//  Lesser General Public License for more details.\n//\n//  You should have received a copy of the GNU Lesser General Public\n//  License along with this library; if not, write to the Free Software\n//  Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA\n#include <stdint.h>\n#include <TouchScreen.h>\n#include <TFT.h>\n\n#if defined(__AVR_ATmega1280__) || defined(__AVR_ATmega2560__) // mega\n#define YP A2   // must be an analog pin, use "An" notation!\n#define XM A1   // must be an analog pin, use "An" notation!\n#define YM 54   // can be a digital pin, this is A0\n#define XP 57   // can be a digital pin, this is A3\n\n#elif defined(__AVR_ATmega32U4__) // leonardo\n#define YP A2   // must be an analog pin, use "An" notation!\n#define XM A1   // must be an analog pin, use "An" notation!\n#define YM 18   // can be a digital pin, this is A0\n#define XP 21   // can be a digital pin, this is A3\n\n#else //168, 328, something else\n#define YP A2   // must be an analog pin, use "An" notation!\n#define XM A1   // must be an analog pin, use "An" notation!\n#define YM 14   // can be a digital pin, this is A0\n#define XP 17   // can be a digital pin, this is A3\n\n#endif\n\n//Measured ADC values for (0,0) and (210-1,320-1)\n//TS_MINX corresponds to ADC value when X = 0\n//TS_MINY corresponds to ADC value when Y = 0\n//TS_MAXX corresponds to ADC value when X = 240 -1\n//TS_MAXY corresponds to ADC value when Y = 320 -1\n\n#define TS_MINX 140\n#define TS_MAXX 900\n#define TS_MINY 120\n#define TS_MAXY 940\n\nint color = WHITE;  //Paint brush color\n\n// For better pressure precision, we need to know the resistance\n// between X+ and X- Use any multimeter to read it\n// The 2.8" TFT Touch shield has 300 ohms across the X plate\n\nTouchScreen ts = TouchScreen(XP, YP, XM, YM, 300); //init TouchScreen port pins\n\nvoid setup()\n{\n\n    Tft.init();  //init TFT library\n    pinMode(0,OUTPUT);\n    //Draw the pallet\n    Tft.fillRectangle(0,0,30,10,BLACK);\n    Tft.fillRectangle(30,0,30,10,RED);\n    Tft.fillRectangle(60,0,30,10,GREEN);\n    Tft.fillRectangle(90,0,30,10,BLUE);\n    Tft.fillRectangle(120,0,30,10,CYAN);\n    Tft.fillRectangle(150,0,30,10,YELLOW);\n    Tft.fillRectangle(180,0,30,10,WHITE);\n    Tft.fillRectangle(210,0,30,10,GRAY1);\n\n}\n\nvoid loop()\n{\n\n    // a point object holds x y and z coordinates.\n    Point p = ts.getPoint();\n\n    //map the ADC value read to into pixel co-ordinates\n\n    p.x = map(p.x, TS_MINX, TS_MAXX, 240, 0);\n    p.y = map(p.y, TS_MINY, TS_MAXY, 320, 0);\n\n    // we have some minimum pressure we consider \'valid\'\n    // pressure of 0 means no pressing!\n\n    if (p.z > ts.pressureThreshhold) {\n\n\n        // Detect  paint brush color change\n        if(p.y < 15)\n        {\n            if(p.x >= 0 && p.x < 30)\n            {\n                color = BLACK;\n            }\n            if(p.x >= 30 && p.x < 60)\n            {\n                color = RED;\n                digitalWrite(0,HIGH);\n            }\n            if(p.x >= 60 && p.x < 90)\n            {\n                color = GREEN;\n            }\n            if(p.x >= 90 && p.x < 110)\n            {\n                color = BLUE;\n                digitalWrite(0,LOW);\n            }\n            if(p.x >= 120 && p.x < 150)\n            {\n                color = CYAN;\n            }\n            if(p.x >= 150 && p.x < 180)\n            {\n                color = YELLOW;\n            }\n            if(p.x >= 180 && p.x < 210)\n            {\n                color = WHITE;\n            }\n            if(p.x >= 210 && p.x < 240)\n            {\n                color = GRAY1;\n            }\n        }\n        else\n        {\n            Tft.fillCircle(p.x,p.y,2,color);\n        }\n    }\n}\n')),(0,a.kt)("h3",{id:"demo-code-shown"},"Demo Code shown"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert the TFT Touch Shield to Seeeduino as shown below.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/DemoShow.JPG",alt:null}),"\nTFT Touch Shield connected to Seeeduino"),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Revision"),(0,a.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,a.kt)("th",{parentName:"tr",align:null},"Release"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v1.1"),(0,a.kt)("td",{parentName:"tr",align:null},"change pictures and demo code combination"),(0,a.kt)("td",{parentName:"tr",align:null},"22 November 2011")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Use of SPFD5408A based TFT instead of ST7781R driver chip based TFT"),(0,a.kt)("td",{parentName:"tr",align:null},"12 September 2011")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"v0.9b"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial public release"),(0,a.kt)("td",{parentName:"tr",align:null},"24th June 2011")))),(0,a.kt)("h2",{id:"support"},"Support"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"Ask questions on Seeed forum"),"."),(0,a.kt)("h2",{id:"tft-touch-shield-v10-schematic-online-viewer"},"TFT Touch Shield v1.0 Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"tft-touch-shield-v09b-schematic-online-viewer"},"TFT Touch Shield v0.9b Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://wiki.seeedstudio.com/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Libraries]"),(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/images/2/29/Tft_touch_libraries_11252011.zip"},"TFT & TouchScreen Libraries")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Library]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/res/TFT_TouchScreen_for_Arduino_1.0.zip"},"TFT & TouchScreen Libraries for Arduino 1.0 20120628")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Demo]"),(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/images/1/11/Tftbmp_demo.zip"},"TFT BMP demo"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]"),(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/images/c/c5/2.8_TFT_Touch_Shield_v1.0_EagleFiles.zip"},"TFT Touch Shield v1.0 Schematic and Board Files - Eagle Format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]"),(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/1/17/2.8_TFT_Touch_Shield_v0.9b_EagleFiles.zip"},"TFT Touch Shield v0.9b Schematic and Board Files - Eagle Format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/7/75/FGD280E3715V1_8bit.pdf"},"FGD280E3715V1 - TFT Touch Screen Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/4/4e/ST7781R_datasheet.pdf"},"ST7781R Datasheet"))),(0,a.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,a.kt)("p",null,"Click here to buy: ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/28-tft-touch-shield-p-864.html?cPath=132_134"},"2.8 TFT Touch Shield")),(0,a.kt)("h2",{id:"see-also"},"See Also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/"},"Seeeduino ADK Main Board")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Seeeduino_Mega/"},"Seeeduino Mega"))),(0,a.kt)("h2",{id:"licensing"},"Licensing"),(0,a.kt)("p",null,"This documentation is licensed under the Creative Commons ",(0,a.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0")," Source code and libraries are licensed under various Open Source licenses. See source code files for details."),(0,a.kt)("h2",{id:"external-links"},"External Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.adafruit.com/datasheets/AVR341.pdf"},"ATMEL - App Notes on Four and five-wire Touch Screen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://focus.ti.com/lit/an/slyt209a/slyt209a.pdf"},"TI - Using Resistive Touch Screen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/adafruit/SD"},"SD Card library")," .")),(0,a.kt)("h2",{id:"related-projects"},"Related Projects"),(0,a.kt)("p",null,"It's a pity that we don't have any demo about TFT Touch Shield V1.0 in the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe")," yet."),(0,a.kt)("p",null,"Post your awesome project about TFT Touch Shield V1.0 to win $100 Coupon! Please feel free to contact us: ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:recipe@seeed.cc"},"recipe@seeed.cc"))),(0,a.kt)("p",null,"Here we introduce some projects about ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/3Dpad-touchless-gesture-controller-Arduino-shield-p-2332.html"},"3Dpad touchless gesture controller Arduino shield")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/TFT_Touch_Shield_V1.0/img/Seeed-recipe-3Dpad_inchAir_controlinch_MIDI_controller.jpg",alt:null})),(0,a.kt)("p",null,'This demo is a 3Dpad "Air control" MIDI controller make by Dpad touchless gesture controller Arduino shield.'),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/229-3dpad-quot-air-control-quot-midi-controller.html"},"I want to make it"),"."),(0,a.kt)("h3",{id:"share-your-awesome-projects-with-us"},"Share Your Awesome Projects with Us"),(0,a.kt)("p",null,"Born with the spirit of making and sharing, that is what we believe makes a maker."),(0,a.kt)("p",null,"And only because of this, the open source community can be as prosperous as it is today."),(0,a.kt)("p",null,"It does not matter what you are and what you have made, hacker, maker, artist or engineers."),(0,a.kt)("p",null,"As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions."),(0,a.kt)("p",null,"Now share your awesome projects with us on ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe"),", and win a chance to become the Core User of Seeed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible."))),(0,a.kt)("p",null,"Get more information about Core User please email to:",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"mailto:recipe@seeed.cc"},"recipe@seeed.cc"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
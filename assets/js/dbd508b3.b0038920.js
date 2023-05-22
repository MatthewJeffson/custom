"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(a),c=n,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},92160:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - OLED Display 1.12&#34",title:"Grove - OLED Display 1.12&#34",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-OLED_Display_1.12inch",last_update:{date:"1/9/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-OLED_Display_1.12inch",id:"Sensor/Grove/Grove_Accessories/Display/Grove-OLED_Display_1.12inch",title:"Grove - OLED Display 1.12&#34",description:"Grove - OLED Display 1.12&#34",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-OLED_Display_1.12inch.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-OLED_Display_1.12inch",permalink:"/Grove-OLED_Display_1.12inch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-OLED_Display_1.12inch.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673193600,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{description:"Grove - OLED Display 1.12&#34",title:"Grove - OLED Display 1.12&#34",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-OLED_Display_1.12inch",last_update:{date:"1/9/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - OLED Yellow&Blue Display 0.96(SSD1315) - SPI/IIC -3.3V/5V",permalink:"/Grove-OLED-Yellow&Blue-Display-0.96-SSD1315_V1.0"},next:{title:"Grove - OLED Display 1.12 (SH1107) V3.0 - SPI/IIC -3.3V/5V",permalink:"/Grove-OLED-Display-1.12-SH1107_V3.0"}},s={},p=[{value:"Specification",id:"specification",level:2},{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"U8g2 Library Introduction",id:"u8g2-library-introduction",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/main.jpg"})),(0,n.kt)("p",null,"Our new 1.12\u201d OLED displays are perfect when you need a small display with 16 grayscale. The visible portion of the OLED measures 1.12\u201d diagonal and contains 96x96(version 1.0) |  128x128(version 2.0) grayscale pixels. Because the display uses OLEDs, there is no backlight, and the contrast is very high."),(0,n.kt)("p",null,"This OLED uses the SSD1327(V1.0) or SH1107G(V2.1) driver chip, which manages the display. You can talk to the driver chip using 4-wire I2C (clock, data, power, and GND pins)."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Communicate Mode: I2C"),(0,n.kt)("li",{parentName:"ul"},"Grayscale Display: 16 Gray shades."),(0,n.kt)("li",{parentName:"ul"},"Supports both Normal and Inverse Color Display."),(0,n.kt)("li",{parentName:"ul"},"Supports Continuous Horizontal Scrolling."),(0,n.kt)("li",{parentName:"ul"},"Grove compatible Interface")),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V1.0'),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Mar 2012")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},'Grove - OLED Display 1.12" V2.1'),(0,n.kt)("td",{parentName:"tr",align:null},"Change the driver IC from SSD1327 to SH1107G, upgrade the grayscale pixels from 96X96 to 128X128"),(0,n.kt)("td",{parentName:"tr",align:null},"Nov 2015")))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3/5 V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dot Matrix"),(0,n.kt)("td",{parentName:"tr",align:null},"96x96")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Display Color"),(0,n.kt)("td",{parentName:"tr",align:null},"16 Grayscale")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"OLED Display"),(0,n.kt)("td",{parentName:"tr",align:null},"LY120-96096")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Driver Chip"),(0,n.kt)("td",{parentName:"tr",align:null},"SSD1327Z")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dot Size"),(0,n.kt)("td",{parentName:"tr",align:null},"0.15(W)mm x 0.15(H)mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Dot Pitch"),(0,n.kt)("td",{parentName:"tr",align:null},"0.75(W)mm x 0.175(H)mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40~70 oC")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,"Here we will show you how this Grove - OLED Display works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - OLED Display 1.12``"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/product.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-OLED-Display-1.12%27%27-V2-p-3031.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now"))))),(0,n.kt)("p",null,"This is an easy-to-use module, what you need to do is connect the module to I2C port of a Base Shield. There're 4 pins, defined as below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"pin"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"),(0,n.kt)("th",{parentName:"tr",align:null},"Note"),(0,n.kt)("th",{parentName:"tr",align:null},"Cable color"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pin1"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C Clock"),(0,n.kt)("td",{parentName:"tr",align:null},"YELLOW")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pin2"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C Data"),(0,n.kt)("td",{parentName:"tr",align:null},"WHITE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pin3"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"Power, 5V/3.3V"),(0,n.kt)("td",{parentName:"tr",align:null},"RED")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pin4"),(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Ground"),(0,n.kt)("td",{parentName:"tr",align:null},"BLACK")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware Overview")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/images/connection.jpg"})),(0,n.kt)("h3",{id:"software"},"Software"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - OLED Display 1.12'' to ",(0,n.kt)("strong",{parentName:"p"},"I2C")," port of Base Shield via Grove cable.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Open Arduino IDE and the Library Manager ",(0,n.kt)("strong",{parentName:"p"},"(Sketch > Include Library > manage Libraries)")," to install the library of u8g2."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_manage_lib.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3."),' Enter "',(0,n.kt)("strong",{parentName:"li"},"u8g2"),'" into the search field and select latest version and Cclick "Install" button.')),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/arduino_ide_search_u8g2.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo code below in your Arduino IDE.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include <Arduino.h>\n#include <U8g2lib.h>\n#include <SPI.h>\n#include <Wire.h>\n\nU8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n\nvoid setup(void) {\n  u8g2.begin();\n}\n\nvoid loop(void) {\n  u8g2.firstPage();\n  do {\n    u8g2.setFont(u8g2_font_ncenB10_tr);\n    u8g2.drawStr(0,24,"Hello World!");\n  } while ( u8g2.nextPage() );\n}\n')),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"   There will be a \"Hello World!\" displayed on the screen of Grove - OLED Display 1.12'' if everything goes well.\n"))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-OLED_Display_1.12inch/img/outcome.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If there's no Base Shield with you, [Seeeduino Vx Series](https://www.seeedstudio.com/catalogsearch/result/index/?q=Seeeduino+v&product_list_limit=all) with **I2C interface** do work as well.\n"))),(0,n.kt)("h2",{id:"u8g2-library-introduction"},"U8g2 Library Introduction"),(0,n.kt)("p",null,"U8g2 is a monochrome graphics library for embedded devices. U8g2 supports monochrome OLEDs and LCDs, which include our chip SSD1327/SH1107G."),(0,n.kt)("p",null,"The Arduino library U8g2 can be installed from the library manager of the Arduino IDE. U8g2 also includes U8x8 library:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"U8g2")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Includes all graphics procedures (line/box/circle draw)."),(0,n.kt)("li",{parentName:"ul"},"Supports many fonts. (Almost) no restriction on the font height."),(0,n.kt)("li",{parentName:"ul"},"Requires some memory in the microcontroller to render the display.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"U8x8")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Text output only (character) device."),(0,n.kt)("li",{parentName:"ul"},"Only fonts allowed with fit into a 8x8 pixel grid."),(0,n.kt)("li",{parentName:"ul"},"Writes directly to the display. No buffer in the microcontroller required.")),(0,n.kt)("p",null,"Here provides the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki"},(0,n.kt)("strong",{parentName:"a"},"U8g2 Library wiki"))," as well as the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki/u8g2reference"},"U8g2 API Reference")," page."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/OLED%20Display.zip"},"Grove-OLED Display 1.12inch in Eagle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20Sch.pdf"},"Grove-OLED Display 1.12inch Sch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Grove%20-%2096x96%20OLED%20Display%20v2.1%20PCB.pdf"},"Grove-OLED Display 1.12inch PCB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SSD1327_datasheet.pdf"},"SSD1327 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/308010007_LCD-22P-0.7.pdf"},"LY120 Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/SH1107G_datasheet.pdf"},"SH1107G_datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Tool]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_OLED_1.12/resources/Make_A_96X96_Image1.zip"},"Reference for Make a 96x96 Image"))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Smart Crops: Implementing IoT in Conventional Agriculture!")," Our mission with nature is to preserve it, designing and implementing technologies and monitoring methods with the help of IoT via Helium."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/gabogiraldo/smart-crops-implementing-iot-in-conventional-agriculture-3674a6/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Automated Plant Watering System")," A device that waters plants and monitors temprature using an ESP8266 and Android app."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ammarshahid572/automated-plant-watering-system-cb23d9/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Flying BeagleBone Green")," BBBmini is a state of the art Linux autopilot / flightcontroller Cape for the BeagleBone. It can be used for Copter, Planes or Rovers."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/mirkix/flying-beaglebone-green-448b60/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
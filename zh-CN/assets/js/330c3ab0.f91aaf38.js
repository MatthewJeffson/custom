"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53488],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(i),c=a,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return i?n.createElement(k,o(o({ref:t},d),{},{components:i})):n.createElement(k,o({ref:t},d))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},99937:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={description:"Grove - RGB LED Stick (10 - WS2813 Mini)",title:"Grove - RGB LED Stick (10 - WS2813 Mini)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RGB_LED_Stick-10-WS2813_Mini",last_update:{date:"1/7/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Stick-10-WS2813_Mini",id:"Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Stick-10-WS2813_Mini",title:"Grove - RGB LED Stick (10 - WS2813 Mini)",description:"Grove - RGB LED Stick (10 - WS2813 Mini)",source:"@site/docs/Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Stick-10-WS2813_Mini.md",sourceDirName:"Sensor/Grove/Grove_Accessories/LED",slug:"/Grove-RGB_LED_Stick-10-WS2813_Mini",permalink:"/custom/zh-CN/Grove-RGB_LED_Stick-10-WS2813_Mini",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Stick-10-WS2813_Mini.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"2023\u5e741\u67087\u65e5",frontMatter:{description:"Grove - RGB LED Stick (10 - WS2813 Mini)",title:"Grove - RGB LED Stick (10 - WS2813 Mini)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RGB_LED_Stick-10-WS2813_Mini",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - LED Bar",permalink:"/custom/zh-CN/Grove-LED_Bar"},next:{title:"Grove - RGB LED Ring (20 - WS2813 Mini)",permalink:"/custom/zh-CN/Grove-LED_ring"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Signal break-point continuous transmission",id:"signal-break-point-continuous-transmission",level:3},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/main.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"We integrated 10 full-color RGB LEDs on this stick, with only one signal pin you can control all 10 LEDs easily. All the LEDs are WS2813 Mini, which is an intelligent control and high cost-effective LED.\nWhat's more, the WS2813 support signal break-point continuous transmission, which means you can continue to use other leds with one led be broken. "),(0,a.kt)("p",null,"You can use this little stick create hundreds of thausands light effect, we hope it will bring you more fun."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - RGB LED Stick (10 WS2813 Mini)"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"Nov 2018")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"WS2813B IC, 3535 LED"),(0,a.kt)("li",{parentName:"ul"},"Intelligent Reverse-connection protection."),(0,a.kt)("li",{parentName:"ul"},"The gray levels of each pixel are of 256, which achieves \u201c256",(0,a.kt)("em",{parentName:"li"},"256"),"256=16777216\u201d full-color display."),(0,a.kt)("li",{parentName:"ul"},"The refresh frequency reaches to 2KHz."),(0,a.kt)("li",{parentName:"ul"},"Serial cascade interface, data receiving and decoding depend on just one signal line."),(0,a.kt)("li",{parentName:"ul"},"Dual-signal wires version, signal break-point continuous transmission.")),(0,a.kt)("h3",{id:"signal-break-point-continuous-transmission"},"Signal break-point continuous transmission"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Outsourcing/104020108/img/LED_RFBP.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"As long as not two or more adjacent LEDs are broken, the remaining LEDs will be able to work normally."),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-25\u2103 ~ +85\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Storage Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-40\u2103 ~ +105\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RGB Channel Constant Current"),(0,a.kt)("td",{parentName:"tr",align:null},"16mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"Digital")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null},"L: 80mm W: 10mm H: 10mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"3.7g")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Package Size"),(0,a.kt)("td",{parentName:"tr",align:null},"L: 150mm W: 100mm H: 25mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"13g")))),(0,a.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Christmas decoration"),(0,a.kt)("li",{parentName:"ul"},"Illumination"),(0,a.kt)("li",{parentName:"ul"},"Toys")),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("h3",{id:"pin-out"},"Pin Out"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/pin_out.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Materials required")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - RGB LED Stick (10 WS2813 Mini)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-RGB-LED-Stick-10-WS2813-Min-p-3226.html",target:"_blank"},"Get One Now"))))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"**1**. If the you uses Arduino UNO as the motherboard, it is recommended that use the DC power supply. Otherwise, the maximum ripple of VCC may exceed 100mV. If you use Seeeduino V4.2 as the motherboard, you do not need to connect DC power.\n\n**2**. Hot swap is not supported.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - RGB LED Stick (10 WS2813 Mini) to port ",(0,a.kt)("strong",{parentName:"p"},"D6")," of Grove-Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/connect.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - RGB LED Stick (10 WS2813 Mini)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red"),(0,a.kt)("td",{parentName:"tr",align:null},"VCC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"No connection"),(0,a.kt)("td",{parentName:"tr",align:null},"White"),(0,a.kt)("td",{parentName:"tr",align:null},"NC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D6"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,a.kt)("td",{parentName:"tr",align:null},"SIG")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Led_Strip"},"Led_Strip")," Library from Github.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,a.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Adafruit_Neopixel --\x3e simple"),". "),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path1.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,a.kt)("strong",{parentName:"p"},"simple.ino")," which you can find in the folder ",(0,a.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_Led_Strip-master\\examples\\simple"),", ",(0,a.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/path2.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Or, you can just click the icon "),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:"pir",width:50,height:"auto"})),(0,a.kt)("p",{parentName:"li"}," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'// NeoPixel Ring simple sketch (c) 2013 Shae Erisson\n// released under the GPLv3 license to match the rest of the AdaFruit NeoPixel library\n\n#include "Adafruit_NeoPixel.h"\n#ifdef __AVR__\n  #include <avr/power.h>\n#endif\n\n// Which pin on the Arduino is connected to the NeoPixels?\n// On a Trinket or Gemma we suggest changing this to 1\n#define PIN            6\n\n// How many NeoPixels are attached to the Arduino?\n#define NUMPIXELS      10\n\n// When we setup the NeoPixel library, we tell it how many pixels, and which pin to use to send signals.\n// Note that for older NeoPixel strips you might need to change the third parameter--see the strandtest\n// example for more information on possible values.\nAdafruit_NeoPixel pixels = Adafruit_NeoPixel(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\nint delayval = 500; // delay for half a second\n\nvoid setup() {\n  // This is for Trinket 5V 16MHz, you can remove these three lines if you are not using a Trinket\n#if defined (__AVR_ATtiny85__)\n  if (F_CPU == 16000000) clock_prescale_set(clock_div_1);\n#endif\n  // End of trinket special code\n  pixels.setBrightness(255);\n  pixels.begin(); // This initializes the NeoPixel library.\n}\n\nvoid loop() {\n\n  // For a set of NeoPixels the first NeoPixel is 0, second is 1, all the way up to the count of pixels minus one.\n\n  for(int i=0;i<NUMPIXELS;i++){\n\n    // pixels.Color takes RGB values, from 0,0,0 up to 255,255,255\n    pixels.setPixelColor(i, pixels.Color(0,150,0)); // Moderately bright green color.\n\n    pixels.show(); // This sends the updated pixel color to the hardware.\n\n    delay(delayval); // Delay for a period of time (in milliseconds).\n\n  }\n}\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    If every thing goes well, now you can see the LED strip shining:\n"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/img/test20181210_162208.gif",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/Grove%20-%20RGB%20LED%20Stick%20(10-WS2813%20Mini).zip"},"Grove - RGB LED Stick (10 WS2813 Mini) Eagle Files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Led_Strip/archive/master.zip"},"Led_Strip Library"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Stick-10-WS2813_Mini/res/WS2813-Mini.pdf"},"Datasheet WS2813-Mini")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
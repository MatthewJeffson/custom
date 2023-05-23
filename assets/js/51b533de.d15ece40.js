"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[51741],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},72356:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={description:"Grove-Mech keycap",title:"Grove-Mech keycap",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Mech_Keycap",last_update:{date:"2/22/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Mech_Keycap",id:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Mech_Keycap",title:"Grove-Mech keycap",description:"Grove-Mech keycap",source:"@site/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Mech_Keycap.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Switch&Button",slug:"/Grove-Mech_Keycap",permalink:"/custom/Grove-Mech_Keycap",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Mech_Keycap.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"Feb 22, 2023",frontMatter:{description:"Grove-Mech keycap",title:"Grove-Mech keycap",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Mech_Keycap",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - 5-Way Switch",permalink:"/custom/Grove-5-Way_Switch"},next:{title:"Grove - Thumb Joystick",permalink:"/custom/Grove-Thumb_Joystick"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-2",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/2.jpg",alt:null})),(0,r.kt)("p",null,"The Grove-Mech keycap is a mechanical switch with a build-in LED. The 255 full color RGB LED makes it simple and easy to show the statues of your switch. This keycap is very reliable with 20,000,000 times press operating life."),(0,r.kt)("p",null,"You will find that this is an interesting and stable module to make some really fun project or product. Actually, you even can make a mechanical keyboard using several Grove-Mech keycaps."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"20,000,000 cycles of operation shall be performed continuously at a rate of 300 cycles per minute without load.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Programmable LED"),(0,r.kt)("li",{parentName:"ul"},"Reliable mechanical structure  "),(0,r.kt)("li",{parentName:"ul"},"Extremely long operating Life")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3v-5v")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Insulation Resistance"),(0,r.kt)("td",{parentName:"tr",align:null},"100M\u03a9 Min.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contract Resistance"),(0,r.kt)("td",{parentName:"tr",align:null},"200 m\u03a9 Max.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Life without Load"),(0,r.kt)("td",{parentName:"tr",align:null},"20,000,000")))),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"automotive devices"),(0,r.kt)("li",{parentName:"ul"},"visual devices"),(0,r.kt)("li",{parentName:"ul"},"home electrical appliances"),(0,r.kt)("li",{parentName:"ul"},"information devices")),(0,r.kt)("h2",{id:"hardware"},"Hardware"),(0,r.kt)("h3",{id:"pin-map"},"Pin Map"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/pin_map.jpg",alt:null})),(0,r.kt)("h3",{id:"schematic"},"Schematic"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/schametic.jpg",alt:null})),(0,r.kt)("p",null,"The K1 is attached to the button, when the key is opened, the ",(0,r.kt)("strong",{parentName:"p"},"SIG1")," will be pulled-down by R2, then the output of ",(0,r.kt)("strong",{parentName:"p"},"SIG1")," should be low.\nOnce the button is pushed, the K1 will be closed and the ",(0,r.kt)("strong",{parentName:"p"},"SIG1")," will connected to ",(0,r.kt)("strong",{parentName:"p"},"VCC"),", then the output of ",(0,r.kt)("strong",{parentName:"p"},"SIG1")," becomes high."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this section we only show you part of the schematic, for the full document please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/#resources"},"Resources"))),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("h4",{id:"hardware-1"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-Mech keycap"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html",target:"_blank"},"Get One Now"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Grove-Mech keycap to port ",(0,r.kt)("strong",{parentName:"p"},"D2")," of Grove-Base Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/light1400-1050%C2%B7.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-Mech keycap to Seeeduino as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-Mech keycap"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V"),(0,r.kt)("td",{parentName:"tr",align:null},"Red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D3"),(0,r.kt)("td",{parentName:"tr",align:null},"White")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D2"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip"},"Adafruit_NeoPixel-master")," library from Github.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Open the Arduino IDE and create a new file, then copy the following code into the new file."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"/**\n * This is an exmaple of the Grove - Mech Keycap.\n * Every press of the key will change the color the SK6805 RGB LED. The SK6805 is a NeoPixel compatible chip.\n * \n * Credit:\n * Adafruit_NeoPixel - https://github.com/adafruit/Adafruit_NeoPixel/blob/master/COPYING\n */\n\n#include <Adafruit_NeoPixel.h>\n\n#define BUTTON_PIN   2    // Digital IO pin connected to the button.  This will be\n                          // driven with a pull-up resistor so the switch should\n                          // pull the pin to ground momentarily.  On a high -> low\n                          // transition the button press logic will execute.\n\n#define PIXEL_PIN    3    // Digital IO pin connected to the NeoPixels.\n\n#define PIXEL_COUNT 60\n\n// Parameter 1 = number of pixels in strip,  neopixel stick has 8\n// Parameter 2 = pin number (most are valid)\n// Parameter 3 = pixel type flags, add together as needed:\n//   NEO_RGB     Pixels are wired for RGB bitstream\n//   NEO_GRB     Pixels are wired for GRB bitstream, correct for neopixel stick\n//   NEO_KHZ400  400 KHz bitstream (e.g. FLORA pixels)\n//   NEO_KHZ800  800 KHz bitstream (e.g. High Density LED strip), correct for neopixel stick\nAdafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, NEO_GRB + NEO_KHZ800);\n\nbool oldState = LOW;\nuint8_t color_pos = 0;\nint i=0;\nint longpress=2000;\nlong timecheck;\n\nvoid setup() {\n  pinMode(BUTTON_PIN, INPUT_PULLUP);\n  strip.begin();\n  strip.clear();\n  strip.show(); // Initialize all pixels to 'off'\n  Serial.begin(9600); \n}\n\nvoid loop()\n{\n  \n  // Get current button state.\n  bool newState = digitalRead(BUTTON_PIN);\n\n  // Check if state changed from low to high (button press).\n  if (newState == HIGH && oldState == LOW) {\n      timecheck = millis(); \n    // Short delay to debounce button.\n    delay(20);\n    // Check if button is still low after debounce.\n    newState = digitalRead(BUTTON_PIN);\n    if (newState == HIGH){\n      color_pos+=8;\n      strip.setPixelColor(0, Wheel(color_pos));\n      strip.show();\n    }\n  }\n\n if( millis()-timecheck > 300)\n {\n   if (digitalRead(BUTTON_PIN)==HIGH)\n   {\n if(millis()-timecheck > longpress)\n {\n  while(digitalRead(BUTTON_PIN) == HIGH)\n  {\n  strip.setPixelColor(0,Wheel(color_pos));\n  strip.show();\n  delay(300);\n\n  strip.setPixelColor(0,0,0,0);\n  strip.show();\n  delay(300);\n  bool newState = digitalRead(BUTTON_PIN);\n  }\n  strip.setPixelColor(0,0,0,0);\n  strip.show();\n   timecheck = millis(); \n }\n  }\n   }\n \n  // Set the last button state to the old state.\n  oldState = newState;\n}\n\n// Input a value 0 to 255 to get a color value.\n// The colours are a transition r - g - b - back to r.\nuint32_t Wheel(byte WheelPos) {\n  WheelPos = 255 - WheelPos;\n  if(WheelPos < 85) {\n    return strip.Color(255 - WheelPos * 3, 0, WheelPos * 3);\n  }\n  if(WheelPos < 170) {\n    WheelPos -= 85;\n    return strip.Color(0, WheelPos * 3, 255 - WheelPos * 3);\n  }\n  WheelPos -= 170;\n  return strip.Color(WheelPos * 3, 255 - WheelPos * 3, 0);\n}\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Every time you press the Grove-Mech Keycap, you will see the LED color change. If you press and hold the button for about 2 sencond, you will see the breathing light effect."))),(0,r.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,r.kt)("h4",{id:"hardware-2"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Mech Keycap"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/thumbnail.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Mech-Keycap-p-3138.html"},"Get ONE Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Mech Keycap to the PWM port(port 12) of the Base Hat.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"pin could be one of below values in the pin column for PWM function and connect the device to the corresponding slot.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Pin"),(0,r.kt)("th",{parentName:"tr",align:null},"Slot"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"18"),(0,r.kt)("td",{parentName:"tr",align:null},"D18")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"PWM")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/img/Mech_Hat.jpg",alt:null})),(0,r.kt)("h4",{id:"software-1"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd grove.py/grove\nsudo python grove_mech_keycap.py 12\n\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},'Unix has a "security model". As a normal users you can do stuff, but you should not be able to access other people\'s files on the same computer. And as a user you should not be able to cause the computer to stop working. Now "/dev/mem" allows you much, much more "mischief" than just changing a GPIO. So that\'s why /dev/mem must be protected against normal users. Thus in order to run this code, you should type ',(0,r.kt)("strong",{parentName:"p"},"sudo python grove_mech_keycap.py")," in the command line")),(0,r.kt)("p",null,"Following is the grove_mech_keycap.py code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport time\nfrom grove.button import Button\nfrom grove.factory import Factory\n\nclass GroveKeycap(object):\n    def __init__(self, pin):\n        # High = pressed\n        self.__btn = Factory.getButton(\"GPIO-HIGH\", pin)\n        # single WS2812 LED\n        self.__led = Factory.getOneLed(\"WS2812-PWM\", pin + 1)\n        self.__on_event = None\n        self.__btn.on_event(self, GroveKeycap.__handle_event)\n\n    @property\n    def on_event(self):\n        return self.__on_event\n\n    @on_event.setter\n    def on_event(self, callback):\n        if not callable(callback):\n            return\n        self.__on_event = callback\n\n    def __handle_event(self, evt):\n        # print(\"event index:{} event:{} pressed:{}\".format(evt['index'], evt['code'], evt['presesed']))\n        if callable(self.__on_event):\n            self.__on_event(evt['index'], evt['code'], evt['time'])\n            return\n\n        self.__led.brightness = self.__led.MAX_BRIGHT\n        event = evt['code']\n        if event & Button.EV_SINGLE_CLICK:\n            self.__led.light(True)\n            print(\"turn on  LED\")\n        elif event & Button.EV_DOUBLE_CLICK:\n            self.__led.blink()\n            print(\"blink    LED\")\n        elif event & Button.EV_LONG_PRESS:\n            self.__led.light(False)\n            print(\"turn off LED\")\n\n\nGrove = GroveKeycap\n\ndef main():\n    from grove.helper import SlotHelper\n    sh = SlotHelper(SlotHelper.PWM)\n    pin = sh.argv2pin()\n\n    ledbtn = GroveKeycap(pin)\n\n    # remove ''' pairs below to begin your experiment\n    '''\n    # define a customized event handle your self\n    def cust_on_event(index, event, tm):\n        print(\"event with code {}, time {}\".format(event, tm))\n\n    ledbtn.on_event = cust_on_event\n    '''\n    while True:\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'If everything goes well, you will be able to see the following result. If you single click the keycap, you will see "turn on LED", if you double-click the keycap, you will see "blink LED". Long press the keycap will give "turn off LED".')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ sudo python grove_mech_keycap.py 12\nHat Name = \'Grove Base Hat RPi\'\nturn on  LED\nturn on  LED\nblink    LED\nturn on  LED\nturn off LED\n^CTraceback (most recent call last):\n  File "grove_mech_keycap.py", line 98, in <module>\n    main()\n  File "grove_mech_keycap.py", line 94, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n\n')),(0,r.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Grove-Mech_Keycap_eagle.zip"},"Grove-Mech Keycap eagle file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/Adafruit_NeoPixel-master.zip"},"Adafruit_NeoPixel-master")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mech_Keycap/res/DIP_Mech_Key.pdf"},"Product brief of the swith"))),(0,r.kt)("h2",{id:"project"},"Project"),(0,r.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/wz1GzW2-VW4?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
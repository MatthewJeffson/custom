"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,g=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},59833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={description:"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",title:"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600",title:"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",description:"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600",permalink:"/custom/zh-CN/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",title:"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Optical Rotary Encoder(TCUT1600X01)",permalink:"/custom/zh-CN/Grove-Optical_Rotary_Encoder-TCUT1600X01"},next:{title:"Grove - Vibration Sensor(SW-420)",permalink:"/custom/zh-CN/Grove-Vibration_Sensor_SW-420"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Working Principle",id:"working-principle",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-preview.jpg",alt:null})),(0,i.kt)("p",null,"The Grove - AS5600 is a programmable 12-bit high-resolution contactless magnetic rotary position sensor. The Grove - AS5600 can work as a magnetic potentiometer or a magnetic encoder with excellent reliability and durability."),(0,i.kt)("p",null,"Compared with the traditional potentiometer/encoder, the Grove - AS5600 has significant advantages: high precision, non-contact, no rotation angle limitation. All those advantages making it suitable for non-contact angle measurement applications, such as the robot arm, tripod head, motor closed-loop control, machine tool axis positioning."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Non-contact, no rotation angle limitation"),(0,i.kt)("li",{parentName:"ul"},"12-bit high-resolution, 4096 positions per round"),(0,i.kt)("li",{parentName:"ul"},"Grove I2C, PWM/Analog Output"),(0,i.kt)("li",{parentName:"ul"},"Great flexibility on angular excursion: Maximum angle programmable from 18\xb0 up to 360\xb0")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating ambient temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"-40 \u2013 125\u2103")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Input Current"),(0,i.kt)("td",{parentName:"tr",align:null},"-100-100mA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Flexibility"),(0,i.kt)("td",{parentName:"tr",align:null},"Maximum angle programmable from 18\xb0-360\xb0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"I2C(Default I2C Address: 0x36) & Non-Changeable")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output"),(0,i.kt)("td",{parentName:"tr",align:null},"Analog/PWM output")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output Resolution"),(0,i.kt)("td",{parentName:"tr",align:null},"12-bit DAC")))),(0,i.kt)("h2",{id:"working-principle"},"Working Principle"),(0,i.kt)("p",null,"Grove - AS5600 is based on the Hall Effect, the build-in Hall sensor can detect changes in the direction of the magnetic field, thus there is also no rotation angle limit. The magnetic field direction information is amplified by the amplifier, with the help of the build-in 12-bit A/D, the AS5600 module can output 4096 positions per round. The output is selectable, you can either use the I2C interface to output the RAW data or output the PWM wave/Analog wave via the OUT pin. Meanwhile, the maximum angle is also programmable, you can set the maximum angle from 18\xb0 to 360\xb0, which means that the measured angular accuracy is up to 18/4096."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-show-NS.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The AS5600 has certain requirements for the magnetic field to be measured. Please use a magnet similar in size to the chip. The module should be measured as close as possible to the magnetic field and the AS5600 sensor center should be aligned with the center of the magnetic field. The vertical distance is preferably from 0.5 mm to 3 mm.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-2.jpg",alt:null})),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("div",{align:"center"},(0,i.kt)("figure",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-pin.jpg"}))))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/Grove-12-bit-Magnetic-Rotary-Sensor-AS5600-thumbnail.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600-p-4192.html"},"Get ONE Now"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,i.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) to the ",(0,i.kt)("strong",{parentName:"p"},"I2C")," port of the Base Shield.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3")," Connect the Seeeduino to PC via a USB cable."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/HardwarePic.jpg",alt:null})),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AS5600"},"AS5600")," Library from Github.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Refer How to install library to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"install library")," for Arduino.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Restart the Arduino IDE. Open ",(0,i.kt)("strong",{parentName:"li"},"readAngle")," example via the path: ",(0,i.kt)("strong",{parentName:"li"},"File")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Examples")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"Seeed_AS5600-master")," \u2192 ",(0,i.kt)("strong",{parentName:"li"},"readAngle"),". Through this demo, we can read the angles from a magnet underneath the sensor.")),(0,i.kt)("p",null,"The readAngle Example code is as follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},'#include <Wire.h>\n#include <AS5600.h>\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n  #define SERIAL SerialUSB\n  #define SYS_VOL   3.3\n#else\n  #define SERIAL Serial\n  #define SYS_VOL   5\n#endif\n\nAMS_5600 ams5600;\n\nint ang, lang = 0;\n\nvoid setup()\n{\n  SERIAL.begin(115200);\n  Wire.begin();\n  SERIAL.println(">>>>>>>>>>>>>>>>>>>>>>>>>>> ");\n  if(ams5600.detectMagnet() == 0 ){\n    while(1){\n        if(ams5600.detectMagnet() == 1 ){\n            SERIAL.print("Current Magnitude: ");\n            SERIAL.println(ams5600.getMagnitude());\n            break;\n        }\n        else{\n            SERIAL.println("Can not detect magnet");\n        }\n        delay(1000);\n    }\n  }\n}\n/*******************************************************\n/* Function: convertRawAngleToDegrees\n/* In: angle data from AMS_5600::getRawAngle\n/* Out: human readable degrees as float\n/* Description: takes the raw angle and calculates\n/* float value in degrees.\n/*******************************************************/\nfloat convertRawAngleToDegrees(word newAngle)\n{\n  /* Raw data reports 0 - 4095 segments, which is 0.087 of a degree */\n  float retVal = newAngle * 0.087;\n  ang = retVal;\n  return ang;\n}\nvoid loop()\n{\n    SERIAL.println(String(convertRawAngleToDegrees(ams5600.getRawAngle()),DEC));\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Open the ",(0,i.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,i.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ",(0,i.kt)("inlineCode",{parentName:"p"},"ctrl"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"shift"),"+",(0,i.kt)("inlineCode",{parentName:"p"},"m")," key at the same time. Set the baud rate to ",(0,i.kt)("strong",{parentName:"p"},"115200"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5.")," The result should be like this when it detected magnet underneath the sensor:"))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/img/AS5600%20with%20Calibrators.gif"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"A calibrator is used here. The Calibrator 2D file is listed in Resources, so feel free to download and laser cut yourself!")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1#")," How to achieve maximum accuracy?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A1:")," Make sure the Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) sensor is at a fixed distance/position to the magnet. Rotate the magnet to get from angle 0 all the way to angle 360 at first time to ensure positioning is correct."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AS5600"},"AS5600")," library also provides a full testing function to operate for the sensor."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012-bit%20Magnetic%20Rotary%20Position%20Sensor%20(AS5600).zip"},"Grove - 12-bit Magnetic Rotary Position Sensor / Encoder (AS5600) Schematic file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Magnetic%20Rotary%20Position%20Sensor%20AS5600%20Datasheet.pdf"},"AS5600 Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[DWG]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-12-bit-Magnetic-Rotary-Position-Sensor-AS5600/res/Grove%20-%2012%20bit%20Magnetic%20Rotary%20Position%20Sensor(AS5600)%20Calibrator.dwg"},"Grove - 12 bit Magnetic Rotary Position Sensor(AS5600) Calibrator"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82663],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,k=m["".concat(p,".").concat(f)]||m[f]||u[f]||n;return r?a.createElement(k,o(o({ref:t},d),{},{components:r})):a.createElement(k,o({ref:t},d))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={description:"Grove - RGB LED Matrix w/Driver",title:"Grove - RGB LED Matrix w/Driver",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RGB_LED_Matrix_w-Driver",last_update:{date:"1/9/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Matrix_w-Driver",id:"Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Matrix_w-Driver",title:"Grove - RGB LED Matrix w/Driver",description:"Grove - RGB LED Matrix w/Driver",source:"@site/docs/Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Matrix_w-Driver.md",sourceDirName:"Sensor/Grove/Grove_Accessories/LED",slug:"/Grove-RGB_LED_Matrix_w-Driver",permalink:"/custom/zh-CN/Grove-RGB_LED_Matrix_w-Driver",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/LED/Grove-RGB_LED_Matrix_w-Driver.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"2023\u5e741\u67089\u65e5",frontMatter:{description:"Grove - RGB LED Matrix w/Driver",title:"Grove - RGB LED Matrix w/Driver",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-RGB_LED_Matrix_w-Driver",last_update:{date:"1/9/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - LED Strip Driver",permalink:"/custom/zh-CN/Grove-LED_Strip_Driver"},next:{title:"Grove - LED Matrix Driver (HT16K33)",permalink:"/custom/zh-CN/Grove-LED_Matrix_Driver-HT16K33"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"DIY",id:"diy",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/main.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"8x8 RGB LED Matrix is awesome for simple image display, 64 pixel leds and 255 colors for each pixel means almost infinite possibilities. However, the complicated wiring of the matrix is daunting. Now we present the Grove - RGB LED Matrix w/Driver for you, leave all the complex and variable wireing and soldering behind, just one single grove connector to control the RGB 8x8 LED matrix easily. Amazing? Try it yourself and you will love it."),(0,i.kt)("iframe",{width:800,height:450,src:"https://www.youtube.com/embed/i9hnRPuCx-Q",frameBorder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"),(0,i.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Grove - RGB LED Stick (10 WS2813 Mini)"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial"),(0,i.kt)("td",{parentName:"tr",align:null},"Dec 2018")))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"8x8 pixel, ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("font",{color:"red"},"R"),(0,i.kt)("font",{color:"green"},"G"),(0,i.kt)("font",{color:"blue"},"B"))," 255 colors"),(0,i.kt)("li",{parentName:"ul"},"Build-in MCU"),(0,i.kt)("li",{parentName:"ul"},"\xb11%(typ.) LED Current accuracy between channels"),(0,i.kt)("li",{parentName:"ul"},"Support for displaying custom images")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"-40\u2103 ~ +85\u2103")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"I2C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,i.kt)("td",{parentName:"tr",align:null},"0x65")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"L: 40mm W: 40mm H: 21mm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Weight"),(0,i.kt)("td",{parentName:"tr",align:null},"17.3g")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Package size"),(0,i.kt)("td",{parentName:"tr",align:null},"L: 120mm W: 100mm H: 33mm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,i.kt)("td",{parentName:"tr",align:null},"28g")))),(0,i.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Simple image display"),(0,i.kt)("li",{parentName:"ul"},"Toys")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("h3",{id:"pin-out"},"Pin Out"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/Pin_out_led.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Grove Interface"),"  "),(0,i.kt)("p",null,"We use I2C interface to control the LED matrix:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"GND: connect this module to the system GND",(0,i.kt)("br",{parentName:"p"}),"\n","VCC: you can use 5V for this module",(0,i.kt)("br",{parentName:"p"}),"\n","SDA: I2C serial data",(0,i.kt)("br",{parentName:"p"}),"\n","SCL: I2C serial clock")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-3.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"DC-DC Module")),(0,i.kt)("p",null,"We use MP-2155 to provide a stable 3.3V for the the MCU and the LED driver chip."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-2.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Firmware Download Interface"),"  "),(0,i.kt)("p",null,"Connect to the SDA and SCL pin, works as the UART when download the firmware."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/1-1.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"LED Driver")),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf"},"MY9221"),"  is a 12-channels (R/G/B x 4) constant current APDM (Adaptive Pulse Density modulation) LED driver. Since this mudule is 8x8 matrics,\nso we need ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("font",{color:"red"},"R"),(0,i.kt)("font",{color:"green"},"G"),(0,i.kt)("font",{color:"blue"},"B"))," X8 output channels, therefor, we use two MY9221."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/pin-out/2-2.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/schematic4.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"8x8 LED Matrix")),(0,i.kt)("p",null,"We use 64 KTR-3528RGB LEDs to form an 8x8 matrix LED"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/RGB.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"We use the V signal for column selection and the RGB signal for row selection.",(0,i.kt)("br",{parentName:"p"}),"\n","We name the leds by ",(0,i.kt)("strong",{parentName:"p"},"D"),", D1 - D64. R1/G1/B1 - R8/G8/B8 is drive by two MY9221, ",(0,i.kt)("strong",{parentName:"p"},"V1 - V8")," is controled by the 74HC183PW chip. If all the LEDs are off, the V1 -V9 should be pulled low by default, and all the RGB changle line will all be pulled high.  "),(0,i.kt)("p",null,"e.g."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"D8")," is in the first row, eighth column. If we want to make the ",(0,i.kt)("strong",{parentName:"p"},"D8")," Green-255, then we should pull V8 high, and pull R1/B1 high, pull G1 to ground. Then only the Green led will be light up, you will see the D8 turn pure green."),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - RGB LED Matrix w/Driver"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/grove-rgb-led-matrix-w-driver.html",target:"_blank"},"Get One Now"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,i.kt)("admonition",{type:"important"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"**1**. If the you uses Arduino UNO as the motherboard, it is recommended that use the DC power supply. Otherwise, the maximum ripple of VCC may exceed 100mV. If you use Seeeduino V4.2 as the motherboard, you do not need to connect DC power.\n\n**2**. Hot swap is not supported.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - RGB LED Matrix w/Driver to port ",(0,i.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.\n"))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - RGB LED Matrix w/Driver"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Black"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,i.kt)("td",{parentName:"tr",align:null},"Red"),(0,i.kt)("td",{parentName:"tr",align:null},"VCC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"White"),(0,i.kt)("td",{parentName:"tr",align:null},"SDA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,i.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix"},"Seeed_RGB_LED_Matrix")," Library from Github.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,i.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Seeed_RGB_Led_Matrix --\x3e display_emoji"),". "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path1.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,i.kt)("strong",{parentName:"p"},"display_emoji.ino")," which you can find in the folder ",(0,i.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_RGB_LED_Matrix-master\\examples\\display_emoji"),", ",(0,i.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/path2.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Or, you can just click the icon"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:"pir",width:50,height:"auto"})),(0,i.kt)("p",{parentName:"li"},"in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},'#include "grove_two_rgb_led_matrix.h"\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n#define SERIAL SerialUSB\n#else\n#define SERIAL Serial\n#endif\n\n\n#define DISPLAY_COLOR    0X11\n\n\nvoid waitForMatrixReady()\n{\n    delay(1000);\n}\n\nGroveTwoRGBLedMatrixClass matrix;\nvoid setup()\n{\n    Wire.begin();\n    SERIAL.begin(115200);\n    waitForMatrixReady();\n    uint16_t VID = 0;\n    VID = matrix.getDeviceVID();\n    if(VID != 0x2886)\n    {\n        SERIAL.println("Can not detect led matrix!!!");\n        while(1);\n    }\n    SERIAL.println("Matrix init success!!!");\n    \n}\n\nvoid loop()\n{\n    for(int i=0;i<35;i++)\n    {\n        matrix.displayEmoji(i,5000,true);\n        delay(5000);\n    }\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    The library file may be updated. This code may not be applicable to the updated library file, so we recommend that you use the first two methods.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If every thing goes well, now you can see the LED matrix show:\n"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_wiki.gif",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h3",{id:"diy"},"DIY"),(0,i.kt)("p",null,"Now let's talk about diy. "),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    In this version firmware if you want to diy your own image with UNO serial you need to modify the file of arduino. If you use mega or lotus, the change will not be needed.\n"))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Locate the arduino setup folder ",(0,i.kt)("strong",{parentName:"p"},"xxxxx\\Arduino\\hardware\\arduino\\avr\\libraries\\Wire\\src"),",  open the ",(0,i.kt)("strong",{parentName:"p"},"Wire.h")," file")),(0,i.kt)("p",null,"change"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define BUFFER_LENGTH 32\n")),(0,i.kt)("p",null,"into"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define BUFFER_LENGTH 128\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Then locate the arduino setup folder ",(0,i.kt)("strong",{parentName:"p"},"xxxxx\\Arduino\\hardware\\arduino\\avr\\libraries\\Wire\\src\\utility"),", open the ",(0,i.kt)("strong",{parentName:"p"},"twi.h")," file.  ")),(0,i.kt)("p",null,"change"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define TWI_BUFFER_LENGTH 32\n")),(0,i.kt)("p",null,"into"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"#define TWI_BUFFER_LENGTH 128\n")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Let's begin DIY."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/docs.zip"},"image editor"),", it's a zip file, unzip it.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Find the ",(0,i.kt)("strong",{parentName:"p"},"index.html")," in the folder ",(0,i.kt)("strong",{parentName:"p"},"doc--\x3edoc"),", double click to open it."))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/DIY.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Creat your own images, when you finish one, click ",(0,i.kt)("strong",{parentName:"p"},"Insert")," in the control panel, the you can edit anothor one, when you finish all the image sequence you can copy the code in the code zone.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Replace the following code block line 9 ",(0,i.kt)("strong",{parentName:"p"},"unit64_t example[]")," with your own code."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},'#include "grove_two_rgb_led_matrix.h"\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n#define SERIAL SerialUSB\n#else\n#define SERIAL Serial\n#endif\n\nuint64_t example[] = {\n\n  0xffff5e5e5e5effff,\n  0xff5effffffff5eff,\n  0x5eff5effff5eff5e,\n  0x5effffffffffff5e,\n  0x5eff5effff5eff5e,\n  0x5effff5e5effff5e,\n  0xff5effffffff5eff,\n  0xffff5e5e5e5effff,\n \n  0xffff29292929ffff,\n  0xff29ffffffff29ff,\n  0x29ff29ffff29ff29,\n  0x29ffffffffffff29,\n  0x29ff29292929ff29,\n  0x29ffffffffffff29,\n  0xff29ffffffff29ff,\n  0xffff29292929ffff,\n \n  0xffff00000000ffff,\n  0xff00ffffffff00ff,\n  0x00ff00ffff00ff00,\n  0x00ffffffffffff00,\n  0x00ffff0000ffff00,\n  0x00ff00ffff00ff00,\n  0xff00ffffffff00ff,\n  0xffff00000000ffff\n};\n\nvoid waitForMatrixReady()\n{\n    delay(1000);\n}\n\nGroveTwoRGBLedMatrixClass matrix;\nvoid setup()\n{\n    Wire.begin();\n    SERIAL.begin(115200);\n    waitForMatrixReady();\n    uint16_t VID = 0;\n    VID = matrix.getDeviceVID();\n    if(VID != 0x2886)\n    {\n        SERIAL.println("Can not detect led matrix!!!");\n        while(1);\n    }\n    SERIAL.println("Matrix init success!!!");\n   \n}\n\nvoid loop()\n{\n for (int i=0;i<3;i++) {\n        matrix.displayFrames(example+i*8, 200, false, 1);\n        delay(500);\n    }\n}\n')),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If every thing goes well, now you can see the LED matrix show:\n"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/img/emoji_smile.gif",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/Grove%20-%20RGB%20LED%20Matrix%20w%20Driver.zip"},"Grove - RGB LED Matrix Driver Eagle Files"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/RGB%20LED%20Matrix%208x8.zip"},"RGB LED Matrix 8x8 Eagle Files"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_RGB_LED_Matrix/archive/master.zip"},"Seeed_RGB_LED_Matrix Library"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MY9221.pdf"},"Datasheet MY9221"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-RGB_LED_Matrix_w-Driver/res/MP2155.pdf"},"Datasheet MP2155")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
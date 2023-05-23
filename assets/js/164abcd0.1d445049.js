"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(r),c=a,k=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89533:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={title:"Grove - Infrared Emitter",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Infrared_Emitter/",slug:"/Grove-Infrared_Emitter",last_update:{date:"01/09/2022",author:"gunengyu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter",title:"Grove - Infrared Emitter",description:"The Infrared Emitter is used to transmit infrared signals through an infrared LED, while there is an Infrared receiver to get the signals on the other side. An infrared LED is like any other LED, with its color centered around 940nm. We can not only use the emitter to transmit data or commands, but also to emulate remotes to control your home appliance using an Arduino. The Infrared Emitter can transmit signals reliable up to 10 meters. Beyond 10 meters, the receiver may not get the signals. We often use the two Groves-the Infrared Receiver and the Grove - Infrared Emitter to work together.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Infrared_Emitter",permalink:"/custom/Grove-Infrared_Emitter",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Infrared_Emitter.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Infrared Emitter",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Infrared_Emitter/",slug:"/Grove-Infrared_Emitter",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Motor Driver (L298P)",permalink:"/custom/Grove-I2C-Motor-Driver-L298P"},next:{title:"Grove - LED Matrix Driver v1.0",permalink:"/custom/Grove-LED_Matrix_Driver_v1.0"}},d={},s=[{value:"Version",id:"version",level:2},{value:"Application",id:"application",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/main.jpg",alt:null})),(0,a.kt)("p",null,"The Infrared Emitter is used to transmit infrared signals through an infrared LED, while there is an ",(0,a.kt)("strong",{parentName:"p"},"Infrared receiver")," to get the signals on the other side. An infrared LED is like any other LED, with its color centered around 940nm. We can not only use the emitter to transmit data or commands, but also to emulate remotes to control your home appliance using an Arduino. The Infrared Emitter can transmit signals reliable up to 10 meters. Beyond 10 meters, the receiver may not get the signals. We often use the two Groves-the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Infrared_Receiver"},"Infrared Receiver")," and the Grove - Infrared Emitter to work together."),(0,a.kt)("p",{style:{}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:210,height:41,border:0}))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Infrared Emitter v1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"Nov. 01 2015")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Infrared Emitter v1.1"),(0,a.kt)("td",{parentName:"tr",align:null},"Change the Infrared transmitting tube location"),(0,a.kt)("td",{parentName:"tr",align:null},"Jul. 24 2016")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Infrared Emitter v1.2"),(0,a.kt)("td",{parentName:"tr",align:null},"Change the valnue of C1 to make the power more stable"),(0,a.kt)("td",{parentName:"tr",align:null},"Dec. 14 2016")))),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Infrared remote control units with high power requirements"),(0,a.kt)("li",{parentName:"ul"},"Free air transmission systems"),(0,a.kt)("li",{parentName:"ul"},"Infrared source for optical counters and card readers")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3/5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Peak wavelength"),(0,a.kt)("td",{parentName:"tr",align:null},"940nm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Angle of half intensity"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03d5 = \xb1 17\xb0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Radiant Intensity"),(0,a.kt)("td",{parentName:"tr",align:null},"72 mW/sr")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Distance"),(0,a.kt)("td",{parentName:"tr",align:null},"10 meter(MAX)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operation Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-40\u2103 to +80\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Size"),(0,a.kt)("td",{parentName:"tr",align:null},"20mmX20mm")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The Grove - Infrared Emitter can send data while Grove - Infrared Receiver will receive them."),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Emitter"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Receiver"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduinoX2.png",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/baseshiledX2.png",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/thumbnail.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Receiver/img/little.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Emitter-p-993.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Infrared-Receiver-p-994.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Connect Grove - Infrared Emitter to port ",(0,a.kt)("strong",{parentName:"p"},"D3")," of one Grove-Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Connect Grove - Infrared Receiver to port ",(0,a.kt)("strong",{parentName:"p"},"D2")," of the other Grove-Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Plug Grove - Base Shield into Seeeduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Connect Seeeduino to PC via a USB cable."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/connect.jpg",alt:null})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Emitter"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D3"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Infrared Receiver"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D2"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IR"},"Seeed_Arduino_IR")," from Github.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Refer ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."))),(0,a.kt)("p",null,"Copy the following ",(0,a.kt)("strong",{parentName:"p"},"Send Example Code")," to the Arduino IDE:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Send Example Code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'/* send.ino Example sketch for IRLib2\n *  Illustrates how to send a code.\n */\n#include <IRLibSendBase.h>    // First include the send base\n//Now include only the protocols you wish to actually use.\n//The lowest numbered protocol should be first but remainder \n//can be any order.\n#include <IRLib_P01_NEC.h>    \n#include <IRLib_P02_Sony.h>   \n#include <IRLibCombo.h>     // After all protocols, include this\n// All of the above automatically creates a universal sending\n// class called "IRsend" containing only the protocols you want.\n// Now declare an instance of that sender.\n\nIRsend mySender;\n\n#define IR_SEND_PWM_PIN D3\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(2000); while (!Serial); //delay for Leonardo\n  Serial.println(F("Every time you press a key is a serial monitor we will send."));\n}\n\nvoid loop() {\n  if (Serial.read() != -1) {\n    //send a code every time a character is received from the \n    // serial port. You could modify this sketch to send when you\n    // push a button connected to an digital input pin.\n    //Substitute values and protocols in the following statement\n    // for device you have available.\n    mySender.send(SONY,0xa8bca, 20);//Sony DVD power A8BCA, 20 bits\n    //mySender.send(NEC,0x61a0f00f,0);//NEC TV power button=0x61a0f00f\n    Serial.println(F("Sent signal."));\n  }\n}\n\n')),(0,a.kt)("p",null,"Copy the following ",(0,a.kt)("strong",{parentName:"p"},"Receive Example Code")," to the Arduino IDE:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Receive Example Code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* rawR&cv.ino Example sketch for IRLib2\n *  Illustrate how to capture raw timing values for an unknow protocol.\n *  You will capture a signal using this sketch. It will output data the \n *  serial monitor that you can cut and paste into the "rawSend.ino"\n *  sketch.\n */\n// Recommend only use IRLibRecvPCI or IRLibRecvLoop for best results\n#include <IRLibRecvPCI.h> \n\nIRrecvPCI myReceiver(2);//pin number for the receiver\n\nvoid setup() {\n  Serial.begin(9600);\n  delay(2000); while (!Serial); //delay for Leonardo\n  myReceiver.enableIRIn(); // Start the receiver\n  Serial.println(F("Ready to receive IR signals"));\n}\n\nvoid loop() {\n  //Continue looping until you get a complete signal received\n  if (myReceiver.getResults()) { \n    Serial.println(F("Do a cut-and-paste of the following lines into the "));\n    Serial.println(F("designated location in rawSend.ino"));\n    Serial.print(F("\\n#define RAW_DATA_LEN "));\n    Serial.println(recvGlobal.recvLength,DEC);\n    Serial.print(F("uint16_t rawData[RAW_DATA_LEN]={\\n\\t"));\n    for(bufIndex_t i=1;i<recvGlobal.recvLength;i++) {\n      Serial.print(recvGlobal.recvBuffer[i],DEC);\n      Serial.print(F(", "));\n      if( (i % 8)==0) Serial.print(F("\\n\\t"));\n    }\n    Serial.println(F("1000};"));//Add arbitrary trailing space\n    myReceiver.enableIRIn();      //Restart receiver\n  }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7.")," Open the ",(0,a.kt)("strong",{parentName:"li"},"Serial Monitor")," of Arduino IDE by click ",(0,a.kt)("strong",{parentName:"li"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time.")),(0,a.kt)("p",null,"For the ",(0,a.kt)("strong",{parentName:"p"},"Send Example"),", the Serial should be like this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/send.png"})),(0,a.kt)("p",null,"For the ",(0,a.kt)("strong",{parentName:"p"},"Receive Example"),", the Serial Monitor should be like this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/img/recv.png"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"For more advanced usage of the library, please check ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IR"},"Seeed_Arduino_IR"),".")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Zip]"),"  ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Emitter/res/Grove-Infrared_Emitter_eagle_files.zip"},"Grove-Infrared Emitter eagle files")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Lib]"),"  ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_IRSendRev"},"IR Send and Receiver Library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Pdf]"),"  ",(0,a.kt)("a",{parentName:"li",href:"http://www.vishay.com/docs/81010/tsal6200.pdf"},"TSAL6200 Datasheet"))),(0,a.kt)("h2",{id:"projects"},"Projects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IR LaunchPad to LaunchPad Communication"),": Send text from one LaunchPad to another using the Grove IR emitter and receiver!"),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ctroberts/ir-launchpad-to-launchpad-communication-0dd109/embed",width:"350"}),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53371],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},m=Object.keys(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)a=m[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,m=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,c=u["".concat(i,".").concat(d)]||u[d]||k[d]||m;return a?n.createElement(c,s(s({ref:t},p),{},{components:a})):n.createElement(c,s({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var m=a.length,s=new Array(m);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:r,s[1]=o;for(var l=2;l<m;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>m,metadata:()=>o,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const m={description:"Grove - Human Presence Sensor (AK9753)",title:"Grove - Human Presence Sensor (AK9753)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Human_Presence_Sensor-AK9753",last_update:{date:"2/22/2023",author:"jianjing Huang"}},s=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Human_Presence_Sensor-AK9753",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Human_Presence_Sensor-AK9753",title:"Grove - Human Presence Sensor (AK9753)",description:"Grove - Human Presence Sensor (AK9753)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Human_Presence_Sensor-AK9753.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-Human_Presence_Sensor-AK9753",permalink:"/Grove-Human_Presence_Sensor-AK9753",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Human_Presence_Sensor-AK9753.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676995200,formattedLastUpdatedAt:"Feb 21, 2023",frontMatter:{description:"Grove - Human Presence Sensor (AK9753)",title:"Grove - Human Presence Sensor (AK9753)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Human_Presence_Sensor-AK9753",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - GSR Sensor",permalink:"/Grove-GSR_Sensor"},next:{title:"Sensor - Sound(introduction)",permalink:"/Sensor_sound"}},i={},l=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Schemaitc",id:"schemaitc",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:l};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/main.jpg",alt:null})),(0,r.kt)("p",null,"The Grove - Human Presence Sensor can be used to detect the presence of the human body or any other infrared objects. Moreover, it is composed of four quantum IR sensors and an integrated circuit (IC) for characteristic compensation, so it can be used to detect the motion of the IR object and the relative position where the IR object moves. An integral analog-to-digital converter provides 16-bits data outputs. This module is suitable for several feet human detector."),(0,r.kt)("p",null,"You can find a lot of infrared sensors on our website, this one will be one of the most interesting. With a certain algorithm, it can even achieve gesture recognition. We hope you enjoy it."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("h2",{id:"feature"},"Feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Quantum-type IR Sensor with Four IR Elements"),(0,r.kt)("li",{parentName:"ul"},"16-bits Digital Outputs to I2C bus"),(0,r.kt)("li",{parentName:"ul"},"Integrated temperature sensor"),(0,r.kt)("li",{parentName:"ul"},"Interrupt Function"),(0,r.kt)("li",{parentName:"ul"},"Low Current Consumption")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-30\u2103 ~ 85\u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Human Presence Detect Range"),(0,r.kt)("td",{parentName:"tr",align:null},"< 3m")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IR Output Resolution"),(0,r.kt)("td",{parentName:"tr",align:null},"16 bit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Temperature Measurement Range"),(0,r.kt)("td",{parentName:"tr",align:null},"-10\u2103 ~ 60 \u2103")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,r.kt)("td",{parentName:"tr",align:null},"0x64(default)",(0,r.kt)("br",null),"0x65 / 0x66(configurable)")))),(0,r.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Human body detect"),(0,r.kt)("li",{parentName:"ul"},"Proximity sensor"),(0,r.kt)("li",{parentName:"ul"},"Motion detect")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("h3",{id:"pin-out"},"Pin Out"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout1.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/pinout_back.jpg",alt:null})),(0,r.kt)("h3",{id:"schemaitc"},"Schemaitc"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Power")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic.jpg",alt:null})),(0,r.kt)("p",null,"The AK9763 works with a low oprating voltage--1.71~3.63V, so we use the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf"},"XC6206P332MR")," chip to provide a stable 3.3V. The input of XC6206P33 ranges from 1.8V to 6.0V, so you can use this module with your Arduino both in 3.3V and 5V."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/schematic1.jpg",alt:null})),(0,r.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I2C bus. The I",(0,r.kt)("sup",null,"2"),"C bus of this sensor use 3.3V, if the I",(0,r.kt)("sup",null,"2"),"C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, ",(0,r.kt)("strong",{parentName:"p"},"Q1")," and ",(0,r.kt)("strong",{parentName:"p"},"Q2")," are N-Channel MOSFET ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf"},"2N7002A"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Human Presence Sensor (AK9753)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/thumbnail.jpg",alt:"enter image description here"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Human-Presence-Sensor-%28AK9753%29-p-3224.html",target:"_blank"},"Get One Now"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - Human Presence Sensor (AK9753) to port ",(0,r.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/connect.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Human Presence Sensor (AK9753)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black"),(0,r.kt)("td",{parentName:"tr",align:null},"GND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V or 3.3V"),(0,r.kt)("td",{parentName:"tr",align:null},"Red"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDA"),(0,r.kt)("td",{parentName:"tr",align:null},"White"),(0,r.kt)("td",{parentName:"tr",align:null},"SDA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCL"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,r.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor"},"Grove_Human_Presence_Sensor")," Library from Github.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Now you can find four demo in the Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove Human Presence Sensor Library")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path1.jpg",alt:null})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Example1-BasicReading"),": This example reads the raw (uint16_t) data of four IR sensors, and print these raw data in the serial.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example2-PlotDiff"),": Read the raw data and plot in the serial plotter.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example3-DetectPresence"),": Detect the presence of IR object.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"Example4-PlotMovement"),": Detect the movement and plot in the serial plotter.")),(0,r.kt)("p",null,"Or, find them on your computer in the folder ",(0,r.kt)("strong",{parentName:"p"},"C:XXXX\\Arduino\\libraries\\Grove_Human_Presence_Sensor-master\\examples"),", ",(0,r.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/path2.jpg",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Choose one demo, upload the code. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("p",null,"Now let's check what will happen then:"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example1-BasicReading:")),(0,r.kt)("p",null,"When you upload the example1 code, Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"9600"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can see the following results\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C++"},"Grove - Human Presence Sensor example\n1:[432], 2:[288], 3[248], 4:[384], temp[20.87], millis[109]\n1:[424], 2:[296], 3[232], 4:[400], temp[20.87], millis[215]\n1:[448], 2:[280], 3[224], 4:[360], temp[20.87], millis[319]\n1:[424], 2:[280], 3[224], 4:[368], temp[20.87], millis[424]\n1:[440], 2:[256], 3[248], 4:[376], temp[20.87], millis[530]\n1:[440], 2:[280], 3[224], 4:[384], temp[20.75], millis[634]\n1:[464], 2:[296], 3[216], 4:[392], temp[20.75], millis[740]\n1:[416], 2:[288], 3[240], 4:[376], temp[20.75], millis[844]\n1:[432], 2:[288], 3[216], 4:[392], temp[20.75], millis[950]\n1:[440], 2:[296], 3[208], 4:[384], temp[20.75], millis[1055]\n1:[424], 2:[248], 3[192], 4:[376], temp[20.75], millis[1160]\n1:[432], 2:[264], 3[200], 4:[384], temp[20.75], millis[1265]\n1:[440], 2:[248], 3[208], 4:[352], temp[20.75], millis[1371]\n1:[400], 2:[256], 3[192], 4:[320], temp[20.75], millis[1475]\n1:[368], 2:[208], 3[152], 4:[296], temp[20.75], millis[1581]\n1:[608], 2:[384], 3[368], 4:[560], temp[20.75], millis[1686]\n1:[1320], 2:[912], 3[736], 4:[960], temp[20.75], millis[1790]\n1:[2168], 2:[1664], 3[1336], 4:[1752], temp[20.75], millis[1896]\n1:[2544], 2:[2192], 3[2112], 4:[2376], temp[20.75], millis[2001]\n1:[2536], 2:[2256], 3[2280], 4:[2520], temp[20.75], millis[2107]\n1:[2144], 2:[2064], 3[2168], 4:[2328], temp[20.75], millis[2212]\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"1:[]")," means the measurement data of IR sensor1, ",(0,r.kt)("inlineCode",{parentName:"p"},"2:[]")," means the measurement data of IR sensor2, ",(0,r.kt)("inlineCode",{parentName:"p"},"3:[]")," means the measurement data of IR sensor3, ",(0,r.kt)("inlineCode",{parentName:"p"},"4:[]")," means the measurement data of IR sensor4. All of those for parameters value range from -32767 ~ 32767. This parameter reflects the intensity of the detected infrared light. The stronger the infrared intensity, the larger the parameter value."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"temp[]")," means the measurement data of Integrated temperature sensor, range from -10\u2103 to +60\u2103."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"millis[109]")," means the system time since this program started, offered by the Arduino."),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example2-PlotDiff")),(0,r.kt)("p",null,"When you upload the example2 code, Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Plotter")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Plotter"),". Or tap the ++ctrl+shift+l++ key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"9600"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can see the following results\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result1.png",alt:null})),(0,r.kt)("p",null,"This example reads the data of four IR sensors and converts them into current (pA), then plot ",(0,r.kt)("strong",{parentName:"p"},"diff13")," and ",(0,r.kt)("strong",{parentName:"p"},"diff24")," into the Arduino IDE Serial Plotter."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"diff13 = IR1 - IR3  // ",(0,r.kt)("font",{color:"blue"},"blue line"),(0,r.kt)("br",{parentName:"p"}),"\n","diff24 = IR2 - IR4  // ",(0,r.kt)("font",{color:"red"},"red line"))),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example3-DetectPresence")),(0,r.kt)("p",null,"When you upload the example1 code, Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"9600"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can see the following results\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"Grove - Human Presence Sensor example\no o x o  millis: 16949\no x x o  millis: 17050\nx x x x  millis: 17153\nx x x x  millis: 17254\nx x x x  millis: 17355\nx x x x  millis: 17457\n")),(0,r.kt)("p",null,"This example detects the presence of IR object. The detection is based on the derivative of the sensor value. If the derivative is greater than a threshold, we think that some IR object entered the view of the sensor. The derivative of each channel is calculated by the following formula:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"derivativeIR1= \\Delta IR1 / \\Delta t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6944em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1/\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))),(0,r.kt)("p",null,(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))," represents the time interval and ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"1")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\Delta IR1")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1")))))," represents output value change of IR Sensor1 during the time interval."),(0,r.kt)("p",null,"In the output, ",(0,r.kt)("strong",{parentName:"p"},"O")," means no detection, ",(0,r.kt)("strong",{parentName:"p"},"X")," means detected. The order of the outputs corresponds to the physical location of the IR sensors.",(0,r.kt)("br",{parentName:"p"}),"\n","e.g."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"o o x o\n")),(0,r.kt)("p",null,"Means the third IR sensor detected the IR object and the others did not(The IR object may come from the top). You can find the IR sensor physical location at ",(0,r.kt)("a",{href:"#pin-out",target:"_self"},"Pin Out")),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example4-PlotMovement")),(0,r.kt)("p",null,"When you upload the example4 code, Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Plotter")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Plotter"),". Or tap the ++ctrl+shift+l++ key at the same time. Set the baud rate to ",(0,r.kt)("strong",{parentName:"p"},"9600"),".",(0,r.kt)("br",{parentName:"p"}),"\n","You can see the following results\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/img/result2.png",alt:null})),(0,r.kt)("p",null,"The detection is based on the derivative of the difference value of IR1_IR3 or IR2_IR4. The derivative of IR1_IR3 or IR2_IR4 is calculated by the following formula:"),(0,r.kt)("div",{className:"math math-display"},(0,r.kt)("span",{parentName:"div",className:"katex-display"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"d"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"r"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"a"),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"v"),(0,r.kt)("mi",{parentName:"mrow"},"e"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"_"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"3"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},"("),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"1"),(0,r.kt)("mo",{parentName:"mrow"},"\u2212"),(0,r.kt)("mi",{parentName:"mrow"},"I"),(0,r.kt)("mi",{parentName:"mrow"},"R"),(0,r.kt)("mn",{parentName:"mrow"},"3"),(0,r.kt)("mo",{parentName:"mrow",stretchy:"false"},")"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"/"),(0,r.kt)("mi",{parentName:"mrow",mathvariant:"normal"},"\u0394"),(0,r.kt)("mi",{parentName:"mrow"},"t")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"derivativeIR1\\_IR3=\\Delta (IR1-IR3)/\\Delta t")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1.0044em",verticalAlign:"-0.31em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"d"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.02778em"}},"er"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"a"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.03588em"}},"v"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord",style:{marginRight:"0.02778em"}},"1_"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"\u0394"),(0,r.kt)("span",{parentName:"span",className:"mopen"},"("),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord"},"1"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.07847em"}},"I"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.00773em"}},"R"),(0,r.kt)("span",{parentName:"span",className:"mord"},"3"),(0,r.kt)("span",{parentName:"span",className:"mclose"},")"),(0,r.kt)("span",{parentName:"span",className:"mord"},"/\u0394"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t")))))),(0,r.kt)("p",null,"The meaning of each curve in the figure is:: (in order)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"diff13  // ",(0,r.kt)("font",{color:"blue"},"IR1-IR3, blue line")),(0,r.kt)("li",{parentName:"ul"},"Movement in the direction 1-3  // ",(0,r.kt)("font",{color:"red"},"derivativeIR1_IR3, red line"),(0,r.kt)("br",{parentName:"li"}),"(a pulse, positive pulse mean from 1 to 3, otherwise from 3 to 1)"),(0,r.kt)("li",{parentName:"ul"},"diff24  // ",(0,r.kt)("font",{color:"green"},"IR2-IR4, green line")),(0,r.kt)("li",{parentName:"ul"},"Movement in the direction 2-4  // ",(0,r.kt)("font",{color:"orange"},"derivativeIR1_IR3, orange line"),(0,r.kt)("br",{parentName:"li"}),"(a pulse, positive pulse mean from 2 to 4, otherwise from 4 to 2)")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/Grove%20-%20Human%20Presence%20Sensor%20(AK9753).zip"},"Grove - Human Presence Sensor (AK9753) Eagle Files"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Human_Presence_Sensor/archive/master.zip"},"Seeed Human Presence Sensor Library"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Human_Presence_Sensor-AK9753/res/AK9753.pdf"},"Datasheet AK9753"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Infrared_Temperature_Sensor_Array-AMG8833/res/XC6206.pdf"},"XC6206 DATASHEET")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")," ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
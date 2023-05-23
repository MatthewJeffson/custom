"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77263],{3905:(e,t,l)=>{l.d(t,{Zo:()=>s,kt:()=>m});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function r(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?r(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},s=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(l),c=a,m=u["".concat(d,".").concat(c)]||u[c]||h[c]||r;return l?n.createElement(m,i(i({ref:t},s),{},{components:l})):n.createElement(m,i({ref:t},s))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,i=new Array(r);i[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<r;p++)i[p]=l[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}c.displayName="MDXCreateElement"},72077:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=l(87462),a=(l(67294),l(3905));const r={description:"Relay Shield V1.0",title:"Relay Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Relay_Shield_V1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},i=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Relay_Shield_V1",id:"Top_Brand/Arduino/shield/Relay_Shield_V1",title:"Relay Shield V1.0",description:"Relay Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/Relay_Shield_V1.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Relay_Shield_V1",permalink:"/custom/Relay_Shield_V1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Relay_Shield_V1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Relay Shield V1.0",title:"Relay Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Relay_Shield_V1",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Relay Shield",permalink:"/custom/Relay_Shield"},next:{title:"Relay Shield V2.0",permalink:"/custom/Relay_Shield_V2"}},d={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"With Arduino/Seeeduino",id:"with-arduinoseeeduino",level:3},{value:"With RFBee",id:"with-rfbee",level:3},{value:"One RFBee controls one Relay Shield",id:"one-rfbee-controls-one-relay-shield",level:4},{value:"One RFBee controls 3 Relay Shields",id:"one-rfbee-controls-3-relay-shields",level:4},{value:"\xa0With 315/433MHz RF Module",id:"with-315433mhz-rf-module",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Relay Shield is an Arduino compatible smart module with 4 mechanical relays providing an easy way to control high voltage. The max switching power is 35VDC 70W for each channel. It can be directly controlled by Arduino/Seeeduino through digital IOs with external 9V DC supply. With the XBee form socket and 315/433MHz RF module interface, the Relay shield can be remotely controlled, making it easy to use in robotics, industry control, smart houses etc.\n",(0,a.kt)("strong",{parentName:"p"},"Note:")," Take care the pins on the Shield should not be touched with USB connector of Arduino UNO when they are connected .\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg",alt:null})),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Arduino/Seeeduino, Arduino Mega, and Seeeduino Mega compatible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"4 mechanical relays with photo-coupled circuit")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Equipped with screw holes for easy installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Light weight")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Small form factor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Native Arduino/Seeeduino compatibility")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Extendible"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Min"),(0,a.kt)("th",{parentName:"tr",align:null},"Typical"),(0,a.kt)("th",{parentName:"tr",align:null},"Max"),(0,a.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Voltage")),(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Current")),(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"250"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Switching Voltage")),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"35"),(0,a.kt)("td",{parentName:"tr",align:null},"VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Switching Current")),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Frequency Response")),(0,a.kt)("td",{parentName:"tr",align:null},"-1"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"dB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Switching Power")),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"70"),(0,a.kt)("td",{parentName:"tr",align:null},"W")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Relay Life")),(0,a.kt)("td",{parentName:"tr",align:null},"100,000"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"/"),(0,a.kt)("td",{parentName:"tr",align:null},"Cycle")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ESD contact discharge")),(0,a.kt)("td",{parentName:"tr",align:null},"\xb14"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"KV")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"ESD air discharge")),(0,a.kt)("td",{parentName:"tr",align:null},"\xb18"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Dimension")),(0,a.kt)("td",{parentName:"tr",align:null},"80.0x58.0x21.2"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"mm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Net Weight")),(0,a.kt)("td",{parentName:"tr",align:null},"31\xb12"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"g")))),(0,a.kt)("h2",{id:"cautions"},"Cautions"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\nPlace 2 layers of electrical tape on the top of the",(0,a.kt)("a",{parentName:"strong",href:"/Arduino"},"Arduino's")," (title=undefined) usb connector.  This will prevent the relay shield from making contact.\nDo not operate voltage more than 35V DC.\n")),(0,a.kt)("h2",{id:"interface-function"},"Interface Function"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/Relayshield_schematic.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4 groups of channels for High voltage connection")),(0,a.kt)("p",null,"Terminal 1:"),(0,a.kt)("p",null,"COM1- Common pin"),(0,a.kt)("p",null,"NC1- Normally Closed, in which case NC1 is connected with COM1 when D0 is set low and disconnected when D0 is high;"),(0,a.kt)("p",null,"NO1- Normally Open, in which case NO1 is disconnected with COM1 when D0 is set low and connected when D0 is high."),(0,a.kt)("p",null,"Terminal 2-4 are similar to terminal 1, except that the control ports are D1-D3."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"9V DC power supply connection")),(0,a.kt)("p",null,"The function of the Terminal and the Jack is the same since they are internally connected, and you can choose either of them in needs."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"IO controlling 4 on-board relays")),(0,a.kt)("p",null,"D0-D3 4pins could be connected directly with Arduino pin number of 7-4, so that four relays could be easily controlled by the Arduino."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"315/433MHz RF control interface")),(0,a.kt)("p",null,"Together with pin of GND and 5V, they are the interface for 315/433MHz RF with encoder module (can be bought separately from Seeed Studio) to control the 4 relays remotely."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"XBee form Socket for directly control by Seeed RFBee")),(0,a.kt)("p",null,"The 4 relays can be directly controlled by the RFBee through the 4 DIO ports of RFBee (can be bought separately from Seeed Studio)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RFBee cascading control interface")),(0,a.kt)("p",null,"As the RFBee has 12 DIO ports, 2 more Relay Shield (8 more relays) could be controlled through one RFBee. HUB1 and HUB2 are the drawn-out ports of RFBee (4 as a group), which is connected to 315/433MHz RF interface of the cascading Relay Shield."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"with-arduinoseeeduino"},"With Arduino/Seeeduino"),(0,a.kt)("p",null,"Relay Shield could be directly controlled by ",(0,a.kt)("strong",{parentName:"p"},"Arduino")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithArduino.jpg",alt:null})),(0,a.kt)("p",null,"Step1. Plug Relay Shield onto ",(0,a.kt)("strong",{parentName:"p"},"Arduino"),"  Duemilanove (or compatible) board;\nStep2. Supply 9v DC power to ",(0,a.kt)("strong",{parentName:"p"},"Arduino")," ;\nStep3. Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip"},"example code")," and run in ",(0,a.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Main/Software"},"Arduino IDE"),"."),(0,a.kt)("p",null,"If using Arduino via its USB connection for power, you must also provide 9v DC power to the Relay Shield or the relays won't switch."),(0,a.kt)("p",null,"Relays 1-4 can be activated by setting Arduino ports 4-7 to output, and doing a digitalWrite(portNumber,HIGH)."),(0,a.kt)("p",null,"Use COMx and either NCx (normally closed) or NOx (normally opened) connections to switch power through to the controlled device."),(0,a.kt)("h3",{id:"with-rfbee"},"With ",(0,a.kt)("a",{parentName:"h3",href:"https://seeeddoc.github.io/RFbee_V1.1-Wireless_Arduino_compatible_node/"},"RFBee")),(0,a.kt)("h4",{id:"one-rfbee-controls-one-relay-shield"},"One RFBee controls one ",(0,a.kt)("a",{parentName:"h4",href:"https://seeeddoc.github.io/Relay_Shield/"},"Relay Shield")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/RelayShield.jpg",alt:null})),(0,a.kt)("p",null,"Step1. Download ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip"},"Arduino code")," for the slave and master RFBee."),(0,a.kt)("p",null,"Step2. Plug the slave RFBee to the Relay Shield."),(0,a.kt)("p",null,"Step3. Supply the 9VDC power to the Relay Shield."),(0,a.kt)("p",null,"Step4. Power the master RFBee with 3.3V by ",(0,a.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/UartSBee/"},"UartSBee"),"  or other adapter."),(0,a.kt)("h4",{id:"one-rfbee-controls-3-relay-shields"},"One RFBee controls 3 Relay Shields"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/MutiRelay.jpg",alt:null})),(0,a.kt)("p",null,"Step1. Download ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip"},"Arduino code")," for the slave and master RFBee."),(0,a.kt)("p",null,"Step2. Plug the slave RFBee onto the Relay Shield."),(0,a.kt)("p",null,"Step3. Connect the second and third Relay Shield to the mother shield by connecting 315/433MHz RF pins to hub1 and hub2. (Note: 5VDC and GND also need to be connected)."),(0,a.kt)("p",null,"Step4. Supply the 9VDC power to the Relay Shield. (Note: the extended Relay Shields DO NOT need extra power supply)."),(0,a.kt)("p",null,"Step5. Power the master RFBee with 3.3V by ",(0,a.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/UartSBee/"},"UartSBee"),"  or other adapter."),(0,a.kt)("h3",{id:"with-315433mhz-rf-module"},"\xa0With ",(0,a.kt)("a",{parentName:"h3",href:"https://www.seeedstudio.com/depot/315mhz-rf-link-kits-with-encoder-and-decoder-p-151.html?cPath=139_140"},"315/433MHz RF Module")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/img/WithRF.jpg",alt:null})),(0,a.kt)("p",null,"Step1. Plug and solder the Receiver onto the Relay Shield."),(0,a.kt)("p",null,"Step2: Supply the Relay Shield with 9VDC power."),(0,a.kt)("p",null,"Step3: ",(0,a.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/315Mhz_RF_link_kits-with_encoder_and_decoder/#Using_with_Arduino_without_Encoding_and_Decoding"},"Control the Transmitter"),"."),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("div",null,(0,a.kt)("h2",null,"  Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Revision"),(0,a.kt)("th",null,"Descriptions"),(0,a.kt)("th",null,"Release Date")),(0,a.kt)("tr",{style:{fontSize:"90%"}},(0,a.kt)("td",{width:"300px"}," Relay shield V1.0"),(0,a.kt)("td",{width:"500px"}," Initial public release"),(0,a.kt)("td",{width:"200px"}," 03/31/2010")),(0,a.kt)("tr",{style:{fontSize:"90%"}},(0,a.kt)("td",null," Relay shield V1.1"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",{style:{fontSize:"90%"}},(0,a.kt)("td",null," Relay shield V1.2"),(0,a.kt)("td",null),(0,a.kt)("td",null)),(0,a.kt)("tr",{style:{fontSize:"90%"}},(0,a.kt)("td",null," Relay shield V1.3"),(0,a.kt)("td",null,(0,a.kt)("ol",null,(0,a.kt)("li",null,"Change the package of 7805"),(0,a.kt)("li",null,"Make the terminas not touch the USB connector of Arduino"),(0,a.kt)("li",null,"Add the protection for the multi-power supply when use with Arduino"),(0,a.kt)("li",null,"Add the thickness of the wires connected to the Relays"),(0,a.kt)("li",null,"Change the silkcreen to the bottom side of the board"),(0,a.kt)("li",null,"Add open source hardware logo"))),(0,a.kt)("td",null," 12/01/2011"))))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[EAGLE]"),"  ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldEagleFiles.zip"},"Relay Shield Eagle Files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]"),"  ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay_shield_Schematic.pdf"},"Relay_shield Schematic"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]"),(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/Relay%20shield.pdf"},"Relay shield PCB"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[CODE]"),"  ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RelayShieldDemoCode.zip"},"Relay Shield demo code for Arduino"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[CODE]"),"  ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Relay-Shield_V1.0/res/RFBee_v1_1_for_RelayShield.zip"},"Arduino Code for RFBee control RelayShield")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
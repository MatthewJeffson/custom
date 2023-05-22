"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6408],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,h=u["".concat(p,".").concat(c)]||u[c]||d[c]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},89092:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - I2C Thermocouple Amplifier (MCP9600)",title:"Grove - I2C Thermocouple Amplifier (MCP9600)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-I2C_Thermocouple_Amplifier-MCP9600",last_update:{date:"1/4/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600",id:"Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600",title:"Grove - I2C Thermocouple Amplifier (MCP9600)",description:"Grove - I2C Thermocouple Amplifier (MCP9600)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Temperature",slug:"/Grove-I2C_Thermocouple_Amplifier-MCP9600",permalink:"/custom/Grove-I2C_Thermocouple_Amplifier-MCP9600",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Temperature/Grove-I2C_Thermocouple_Amplifier-MCP9600.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - I2C Thermocouple Amplifier (MCP9600)",title:"Grove - I2C Thermocouple Amplifier (MCP9600)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-I2C_Thermocouple_Amplifier-MCP9600",last_update:{date:"1/4/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - 1-Wire Thermocouple Amplifier(MAX31850K)",permalink:"/custom/Grove-1-Wire_Thermocouple_Amplifier-MAX31850K"},next:{title:"One Wire Temperature Sensor DS18B20",permalink:"/custom/One-Wire-Temperature-Sensor-DS18B20"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Alert Function",id:"alert-function",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Main.jpg"})),(0,n.kt)("p",null,"The Grove - I2C Thermocouple Amplifier (MCP9600) is a thermocouple-to-digital converter with integrated cold-junction and I2C communication protocol. This module is designed to be used in conjunction with a k-type thermocouple. The thermocouples have a much larger measurement range than thermistors. For example, this ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html"},"k-type thermocouple")," on our website has a measurement range of -50\u2103 to +600\u2103."),(0,n.kt)("p",null,"We also provide the alert function for this module, you can use the progarammable alert pin to provide an interrupt signal to the controller."),(0,n.kt)("p",null,"Again, this module can't work alone, it must work with a k-type thermocouple, if you do not have one, you can consider ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Thermocouple-Temperature-Sensor-K-Type-1M-p-3132.html"},"Thermocouple Temperature Sensor K Type-1M")," in our bazaar."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Thermocouple-Amplifier-%28MCP9600%29-p-3199.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - I2C Thermocouple Amplifier (MCP9600)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Aug 2018")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Integrated Cold-Junction Compensation"),(0,n.kt)("li",{parentName:"ul"},"Supported Types (designated by NIST ITS-90): Type K, J, T, N, S, E, B and R"),(0,n.kt)("li",{parentName:"ul"},"Four Programmable Temperature Alert Outputs:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Monitor Hot- or Cold-Junction"),(0,n.kt)("li",{parentName:"ul"},"temperatures"),(0,n.kt)("li",{parentName:"ul"},"Detect rising or falling temperatures"),(0,n.kt)("li",{parentName:"ul"},"Up to 255\xb0C of Programmable Hysteresis"))),(0,n.kt)("li",{parentName:"ul"},"Programmable Digital Filter for Temperature"),(0,n.kt)("li",{parentName:"ul"},"Low Power")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The  Grove - I2C Thermocouple Amplifier (MCP9600) do support Type K, J, T, N, S, E, B and R on hardware, however, at present, our library do not support any other kind of thermocouple except K type.")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Ambient Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40\u2103 ~ +125\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-65\u2103 ~ +150\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Max. Junction Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"+150\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hot-Junction Accuracy"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb11.5\xb0C (Max.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Measurement Resolution"),(0,n.kt)("td",{parentName:"tr",align:null},"Hot and Cold-Junctions: 0.0625\xb0C (typical)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x60(default) / 0x67(optional)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 40mm W: 20mm H: 18mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"4.8g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 130mm W: 85mm H: 20mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"11g")))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Petrochemical Thermal Management"),(0,n.kt)("li",{parentName:"ul"},"Hand-Held Measurement Equipment"),(0,n.kt)("li",{parentName:"ul"},"Industrial Equipment Thermal Management"),(0,n.kt)("li",{parentName:"ul"},"Ovens"),(0,n.kt)("li",{parentName:"ul"},"Industrial Engine Thermal Monitor"),(0,n.kt)("li",{parentName:"ul"},"Temperature Detection Racks")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-map"},"Pin Map"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map.jpg"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Pin_map_back.jpg"})),(0,n.kt)("h3",{id:"schematic"},"Schematic"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Power")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_1.jpg"})),(0,n.kt)("p",null,"The operating voltage range of MCP9600 is 2.7V ~ 5.5V, we use a power conversion chip ",(0,n.kt)("em",{parentName:"p"},"XC6206P332MR-G")," to provide a stable 3.3V for the MCP9600."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Input Jack")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic.jpg"})),(0,n.kt)("p",null,"Because of the small signal levels involved, we take a lot measures to filter the noise."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"1--L1,L2"),"  We use thermocouple up to 1 meter long. Such long wires can be regarded as antennas, which will receive spatial electric field interference and generate high frequency noise. So we use two  inductances to filter the high frequency noise.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"2--C1"),"  It is strongly recommended by the chip manufacturer to add a 100nF ceramic surfacemount differential capacitor, placed across the T+ and T- pins, in order to filter noise on the thermocouple lines.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"3--D1")," We use the SZNUP2105LT3G DUAL BIDIRECTIONAL VOLTAGE SUPPRESSOR to protect this module from ESD(Electro-Static discharge)."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/schematic_2.jpg"})),(0,n.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I2C bus. The I",(0,n.kt)("sup",null,"2"),"C bus of this sensor use 3.3V, if the I",(0,n.kt)("sup",null,"2"),"C bus of the Arduino use 5V, this circuit will be needed. In the schematic above, ",(0,n.kt)("strong",{parentName:"p"},"Q1")," and ",(0,n.kt)("strong",{parentName:"p"},"Q5")," are N-Channel MOSFET ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/2N7002A_datasheet.pdf"},"2N7002A"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Thermocouple Amplifier"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Thumbnail.jpg"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-IMU-9DOF-%28lcm20600%2BAK09918%29-p-3157.html",target:"_blank"},"Get One Now"))))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"1")," Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy"),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"2")," Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html"},"here")," to buy.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - I2C Thermocouple Amplifier (MCP9600) to port ",(0,n.kt)("strong",{parentName:"p"},"I2C")," of Grove-Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/connect.jpg"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Cable"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Thermocouple Amplifier"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V / 3.3V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"White"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_MCP9600"},"Seeed_MCP9600")," Library from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Restart the Arduino IDE. Open the example, you can open it in the following three ways\uff1a"),(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open it directly in the Arduino IDE via the path: ",(0,n.kt)("strong",{parentName:"p"},"File --\x3e Examples --\x3e Grove Temperature sensor MCP9600 --\x3e MCP9600_4channel_INT_demo"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path.jpg"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Open it in your computer by click the ",(0,n.kt)("strong",{parentName:"p"},"MCP9600_4channel_INT_demo.ino")," which you can find in the folder ",(0,n.kt)("strong",{parentName:"p"},"XXXX\\Arduino\\libraries\\Seeed_MCP9600-master\\examples\\MCP9600_4channel_INT_demo"),", ",(0,n.kt)("strong",{parentName:"p"},"XXXX")," is the location you installed the Arduino IDE."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Path_1.jpg"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Or, you can just click the icon ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/copy.jpg",alt:null})," in upper right corner of the code block to copy the following code into a new sketch in the Arduino IDE."))))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include "Seeed_MCP9600.h"\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n  #define SERIAL SerialUSB\n#else\n  #define SERIAL Serial\n#endif\n\nMCP9600 sensor;\n\n/**@brief interruption cfg.\n * \n * \n * */\nerr_t sensor_INT_config()\n{\n    err_t ret=NO_ERROR;\n    CHECK_RESULT(ret,sensor.set_filt_coefficients(FILT_MID));\n\n    for(int i=0;i<4;i++)\n    {\n        /*Conver temp num to 16bit data*/\n        CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));\n        /*Set hysteresis.for example,set hysteresis to 2\u2103,when the INT limitation is 30\u2103,interruption will be generated when \n        the temp ecceed limitation,and the interruption flag will stay unless the temp below 30-2(limitation-hysteresis) 28\u2103. */\n        CHECK_RESULT(ret,sensor.set_alert_hys(i,2)); \n\n         /*Set when interruption generated the pin\'s status*/\n        CHECK_RESULT(ret,sensor.set_alert_bit(i,ACTIVE_LOW));\n\n        CHECK_RESULT(ret,sensor.clear_int_flag(i));\n\n        /*default is comparator mode*/\n        CHECK_RESULT(ret,sensor.set_alert_mode_bit(i,COMPARE_MODE));\n\n        /*Set alert pin ENABLE.*/\n        CHECK_RESULT(ret,sensor.set_alert_enable(i,ENABLE));\n       \n        \n\n    }    \n\n    /*device cfg*/\n    CHECK_RESULT(ret,sensor.set_cold_junc_resolution(COLD_JUNC_RESOLUTION_0_25));\n    CHECK_RESULT(ret,sensor.set_ADC_meas_resolution(ADC_14BIT_RESOLUTION));\n    CHECK_RESULT(ret,sensor.set_burst_mode_samp(BURST_32_SAMPLE));\n    CHECK_RESULT(ret,sensor.set_sensor_mode(NORMAL_OPERATION));\n\n    return NO_ERROR;\n}\n\n\nerr_t get_temperature(float *value)\n{\n    err_t ret=NO_ERROR;\n    float hot_junc=0;\n    float junc_delta=0;\n    float cold_junc=0;\n    bool stat=true;\n    \n    CHECK_RESULT(ret,sensor.check_data_update(&stat));\n    if(stat)\n    {\n        CHECK_RESULT(ret,sensor.read_hot_junc(&hot_junc));\n        CHECK_RESULT(ret,sensor.read_junc_temp_delta(&junc_delta));\n        \n        CHECK_RESULT(ret,sensor.read_cold_junc(&cold_junc));\n        \n        *value=hot_junc;\n    }\n    else\n    {\n        SERIAL.println("data not ready!!");\n    }\n\n    return NO_ERROR;\n}\n\n\nvoid setup()\n{\n    SERIAL.begin(115200);\n    delay(10);\n    SERIAL.println("serial start!!");\n    if(sensor.init(THER_TYPE_K))\n    {\n        SERIAL.println("sensor init failed!!");\n    }\n    sensor_INT_config();\n}\n\n\n\nvoid loop()\n{\n    float temp=0;\n    u8 byte=0;\n    u8 stat=0;\n \n\n    get_temperature(&temp);\n    SERIAL.print("temperature ==============================>>");\n    SERIAL.println(temp);\n\n    sensor.read_INT_stat(&stat);\n\n    SERIAL.println(" ");\n    SERIAL.println(" ");\n\n    delay(1000);\n}\n')),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    There are 2 demos in the library:  \n")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"MCP9600_basic_demo.ino")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    >This example is a sample use of temperature sensor,you need to polling for data.  \n")),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"MCP9600_4channel_INT_demo.ino"),"  "),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    >here are four alert pads on the sensor module which connect to alert pin.You can set temperature limits by calling the API we provided.The alert pin outputs low when the temperature value beyond limit.You can attach alert pin to a interrupt pin of host,To improve the efficiency of program operation.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,n.kt)("strong",{parentName:"p"},"115200"),"."))),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If every thing goes well, when you open the Serial Monitor, you will see the temperature value and the alert information.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"serial start!!\nversion =4011\n\ntemperature ==============================>>25.81\n \n \ntemperature ==============================>>27.62\n \n \ntemperature ==============================>>29.37\nchannel 0generate interruption!!!\nchannel 1generate interruption!!!\n \n \ntemperature ==============================>>30.81\nchannel 0generate interruption!!!\nchannel 1generate interruption!!!\nchannel 2generate interruption!!!\n \n \ntemperature ==============================>>31.56\nchannel 0generate interruption!!!\nchannel 1generate interruption!!!\nchannel 2generate interruption!!!\nchannel 3generate interruption!!!\n\n\ntemperature ==============================>>28.56\nchannel 0generate interruption!!!\nchannel 1generate interruption!!!\nchannel 2generate interruption!!!\n\n\ntemperature ==============================>>27.33\nchannel 0generate interruption!!!\nchannel 1generate interruption!!!\n\n\ntemperature ==============================>>26.71\nchannel 0generate interruption!!!\n")),(0,n.kt)("h4",{id:"alert-function"},"Alert Function"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/img/Function_ep.jpg"})),(0,n.kt)("p",null,"As you can see, there is a hysteresis when the temperature rises and the temperature drops trigger an interrupt. e.g., when the temperature rises, when it reaches 28\u2103, the alert pin0 will trigger, and when the temperature drops, the limit point becomes 26\u2103. Only when the temperature become lower than 26 \u2103, the alert pin0 will release."),(0,n.kt)("div",{className:"math math-display"},(0,n.kt)("span",{parentName:"div",className:"katex-display"},(0,n.kt)("span",{parentName:"span",className:"katex"},(0,n.kt)("span",{parentName:"span",className:"katex-mathml"},(0,n.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},(0,n.kt)("semantics",{parentName:"math"},(0,n.kt)("mrow",{parentName:"semantics"},(0,n.kt)("mi",{parentName:"mrow"},"h"),(0,n.kt)("mi",{parentName:"mrow"},"y"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"t"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"r"),(0,n.kt)("mi",{parentName:"mrow"},"e"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mi",{parentName:"mrow"},"i"),(0,n.kt)("mi",{parentName:"mrow"},"s"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"28"),(0,n.kt)("mtext",{parentName:"mrow"},"\u2103"),(0,n.kt)("mo",{parentName:"mrow"},"\u2212"),(0,n.kt)("mn",{parentName:"mrow"},"26"),(0,n.kt)("mtext",{parentName:"mrow"},"\u2103"),(0,n.kt)("mo",{parentName:"mrow"},"="),(0,n.kt)("mn",{parentName:"mrow"},"2"),(0,n.kt)("mtext",{parentName:"mrow"},"\u2103")),(0,n.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"hysteresis= 28\u2103-26\u2103 = 2\u2103")))),(0,n.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"h"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"ys"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"eres"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"i"),(0,n.kt)("span",{parentName:"span",className:"mord mathnormal"},"s"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.7278em",verticalAlign:"-0.0833em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"28\u2103"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.kt)("span",{parentName:"span",className:"mbin"},"\u2212"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"26\u2103"),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.kt)("span",{parentName:"span",className:"mrel"},"="),(0,n.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,n.kt)("span",{parentName:"span",className:"base"},(0,n.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,n.kt)("span",{parentName:"span",className:"mord"},"2\u2103")))))),(0,n.kt)("p",null,"Alert pin 1, alert pin2 and alert pin3 follow the same principle. You can change the  hysteresis value and the limit by modify the line 23 and line 26."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"CHECK_RESULT(ret,sensor.set_alert_limit(i,sensor.covert_temp_to_reg_form(28+i)));\n\n/*Set hysteresis.for example,set hysteresis to 2\u2103,when the INT limitation is 30\u2103,interruption will be generated when \nthe temp ecceed limitation,and the interruption flag will stay unless the temp below 30-2(limitation-hysteresis) 28\u2103. */\n\nCHECK_RESULT(ret,sensor.set_alert_hys(i,2)); \n")),(0,n.kt)("p",null,"Use the parameter ",(0,n.kt)("strong",{parentName:"p"},"i")," to choose the alert pin number, and parameter ",(0,n.kt)("strong",{parentName:"p"},"28")," is the limit value,  as for hysteresis, we use the function ",(0,n.kt)("strong",{parentName:"p"},"sensor.set_alert_hys(i,2)"),".\nThe parameter ",(0,n.kt)("strong",{parentName:"p"},"2")," is the hysteresis value."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/Grove%20-%20I2C%20Thermocouple%20Amplifier(MCP9600).zip"},"Grove - I2C Thermocouple Amplifier (MCP9600) Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_MCP9600/archive/master.zip"},"Seeed MCP9600 Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Thermocouple_Amplifier-MCP9600/res/MCP9600.pdf"},"Datasheet of MCP9600")))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3slfeHKSSCw?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);
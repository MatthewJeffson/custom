"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12032],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=u(o),k=l,m=p["".concat(s,".").concat(k)]||p[k]||c[k]||r;return o?n.createElement(m,i(i({ref:t},d),{},{components:o})):n.createElement(m,i({ref:t},d))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,i=new Array(r);i[0]=k;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:l,i[1]=a;for(var u=2;u<r;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}k.displayName="MDXCreateElement"},35033:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var n=o(87462),l=(o(67294),o(3905));const r={description:"Atom Node",title:"Atom Node",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Atom_Node",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,a={unversionedId:"Seeed_Elderly/Bee/Atom_Node",id:"Seeed_Elderly/Bee/Atom_Node",title:"Atom Node",description:"Atom Node",source:"@site/docs/Seeed_Elderly/Bee/Atom_Node.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Atom_Node",permalink:"/custom/zh-CN/Atom_Node",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/Atom_Node.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Atom Node",title:"Atom Node",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Atom_Node",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"XBee Shield V2.0",permalink:"/custom/zh-CN/XBee_Shield_V2.0"},next:{title:"Bluetooth V4.0 HM-11 BLE Module",permalink:"/custom/zh-CN/Bluetooth_V4.0_HM_11_BLE_Module"}},s={},u=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Topology",id:"topology",level:2},{value:"The Structure",id:"the-structure",level:2},{value:"The Hardware",id:"the-hardware",level:2},{value:"The firmware and software",id:"the-firmware-and-software",level:2},{value:"The firmware",id:"the-firmware",level:3},{value:"The software",id:"the-software",level:3},{value:"Usage",id:"usage",level:2},{value:"Demo 1: Use one Atom Node",id:"demo-1-use-one-atom-node",level:3},{value:"Demo 2: Use two Atom Node",id:"demo-2-use-two-atom-node",level:3},{value:"Work Status Description",id:"work-status-description",level:2},{value:"Upgrade the firmware",id:"upgrade-the-firmware",level:2},{value:"Connect device and install the driver",id:"connect-device-and-install-the-driver",level:3},{value:"Modify File: boards.txt and  USBCore.cpp",id:"modify-file-boardstxt-and--usbcorecpp",level:3},{value:"Download the required library files and Atom.Node firmware",id:"download-the-required-library-files-and-atomnode-firmware",level:3},{value:"Upload program using Arduino IDE",id:"upload-program-using-arduino-ide",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node.jpg",alt:null})),(0,l.kt)("p",null,"You might want to DIY an alarm system to monitor the soil moisture in your garden. While you are still lying in bed comfortably in the early morning, you might need a device, which automatically opens the doghouse for your doggie to come out and enjoy the warm sunlight. However, the complex software and hardware holds you back. Now, here comes Atom sweeping the road through the thistles and thorns; helping you complete these wonderful homebrew projects."),(0,l.kt)("p",null,"Atom is a node in internet of things. It can not only work standalone but also coordinate with other devices. Atom is highly expandable and easy to use. Standard Grove interfaces allow connections with different sensors. Atom fulfills tasks intelligently: the abundant data gathered are transmitted to the actuator wirelessly. What\u2019s more fascinating is that you can finish all the tasks by simply setting your Android phone."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_03.jpg",alt:null})),(0,l.kt)("p",null,"Atom features wireless data transmission and mobile monitoring. Equipped with standard Bee interface, Atoms can be connected to XBee, RFBee and Bluetooth Bee to form wireless communication network, which gathers and manages the data automatically. Atom can also upload the data of different sensors to the Cloud, making it convenient to analyze data at all times and places simply through Web browsers."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Atom-Node-Black-Alloy-Limited-Edition-p-1494.html"},(0,l.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,l.kt)("h2",{id:"feature"},"Feature"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Mobile devices/Apps centered configure"),(0,l.kt)("li",{parentName:"ul"},"Open Source"),(0,l.kt)("li",{parentName:"ul"},"Flexible wireless networks topology from Ad-hoc to mesh"),(0,l.kt)("li",{parentName:"ul"},"Built-in battery"),(0,l.kt)("li",{parentName:"ul"},"A variety of Indicators, Easy to distinguish the work state"),(0,l.kt)("li",{parentName:"ul"},"Skin-Skeleton-Gut philosophy")),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("hr",null),(0,l.kt)("table",{cellspacing:"0",width:"80%"},(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"col"}," Item"),(0,l.kt)("th",{scope:"col"}," Typical"),(0,l.kt)("th",{scope:"col"}," Unit")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," USB Supply Voltage"),(0,l.kt)("td",null,"4.75-5.25"),(0,l.kt)("td",null," VDC")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Quiescent Current(connect RF Bee)"),(0,l.kt)("td",null," 25~40"),(0,l.kt)("td",null," mA")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," GPIO Voltage"),(0,l.kt)("td",null," 3.3"),(0,l.kt)("td",null," V")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Battery Capacity"),(0,l.kt)("td",null," 300"),(0,l.kt)("td",null," mAH")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Charging Current"),(0,l.kt)("td",null," 300-500"),(0,l.kt)("td",null," mA")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," USB Interface"),(0,l.kt)("td",null,"MICRO USB"),(0,l.kt)("td",null," /")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Working Frequency"),(0,l.kt)("td",null," 16"),(0,l.kt)("td",null," MHz")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Grove Supply Voltage"),(0,l.kt)("td",null," 3.3"),(0,l.kt)("td",null," V")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Output Current(Max)"),(0,l.kt)("td",null," 500"),(0,l.kt)("td",null," mA")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Continuous Working Time(Max)"),(0,l.kt)("td",null," 22"),(0,l.kt)("td",null," h")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Photosensitive Sensor Response Frequency"),(0,l.kt)("td",null,"100"),(0,l.kt)("td",null," Hz")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Low Battery Indication"),(0,l.kt)("td",null," 3.71"),(0,l.kt)("td",null," V")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Photosensitive sensor response frequency"),(0,l.kt)("td",null,"100"),(0,l.kt)("td",null," Hz")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," RF BEE (seeed) Communication Distance(Max) in outdoor"),(0,l.kt)("td",null," 200"),(0,l.kt)("td",null," m")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Xbee(Xbee) Communication Distance(Max) in outdoor"),(0,l.kt)("td",null,"30"),(0,l.kt)("td",null," m")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Bluetooth Bee(seeed) Communication Distance(Max) in outdoor"),(0,l.kt)("td",null,"20"),(0,l.kt)("td",null," m")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Grove Connector"),(0,l.kt)("td",null," 3(IIC;UART;PWM)"),(0,l.kt)("td",null," /")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 20Pin Bee Socket"),(0,l.kt)("td",null," Compatible Rfbee,Xbee,Bluetooth Bee"),(0,l.kt)("td",null," /")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Two-color charge indicator"),(0,l.kt)("td",null,"Green/Red"),(0,l.kt)("td",null," /")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Two-color user indicator"),(0,l.kt)("td",null," Green/Red"),(0,l.kt)("td",null," /")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," Buzzer Frequency"),(0,l.kt)("td",null,"2.7\xb10.3"),(0,l.kt)("td",null," K"))),(0,l.kt)("h2",{id:"topology"},"Topology"),(0,l.kt)("p",null,"Atom Node has sensor/actuator connectors for playing solo. With XBee or other open RF communication modules, It is also ready to talk in versatile networks topology when used in multiple. For example:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. The first Mode:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node1.jpg",alt:null})),(0,l.kt)("p",null,"In this mode, The sensor and actuator are connected to one Atom Node. Atom Node read the sensor data and determine whether drive the Actuator to execute related actions. Demo 1 in the usage is working in this mode."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. The second Mode:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node2.jpg",alt:null})),(0,l.kt)("p",null,"In this mode, The sensor and actuator are connected to two Atom Node. Atom Node receive the sensor data which is send by another Atom Node through RFBee and determine whether drive own actuator to execute related actions. Demo 2 in the usage is working in this mode."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. The third Mode:")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node3.jpg",alt:null})),(0,l.kt)("p",null,"In this mode, The sensor is connected to one Atom Node(here we called it as AtomSensor). Other Atom Nodes receive the sensor data which is send by AtomSensor through RFBee and determine whether driver own actuator to execute related actions."),(0,l.kt)("h2",{id:"the-structure"},"The Structure"),(0,l.kt)("p",null,"Node solutions are design align with SSG (skin skeleton gut) philosophy.\nGut: electronics inside"),(0,l.kt)("p",null,"Skeleton: An minimal aluminum framework for protection and fixture, leaving enough opening to cater various sensors/actuators"),(0,l.kt)("p",null,"Product Size:82mm",(0,l.kt)("em",{parentName:"p"},"63.5mm"),"17mm"),(0,l.kt)("p",null,"Material:Aluminum 5052"),(0,l.kt)("p",null,"Finished: Black/Silver Anodized"),(0,l.kt)("p",null,"Highlight Features: Hinge structure"),(0,l.kt)("p",null,"Part Cleanness: Remove all burrs","&","sharp corners. Clean off all oils,Dirt,or other contaminants"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom.node.jpg",alt:null})),(0,l.kt)("p",null,"Let's look forward to these prototype..."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View1.jpg",alt:null}),(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_View2.jpg",alt:null})),(0,l.kt)("h2",{id:"the-hardware"},"The Hardware"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The system adopts Atmel 32U4 as the main chip. And equipped with standard Bee interface socket for wireless communication. It adopts 3.3V power supply, and the external power interface is Micro USB. When connected with external power source, it will convert to 3.3V through DC\u2010DC voltage\u2010adjustable\u2010circuit(based on chip TD6810),and supply power for the whole system. Meanwhile, 5V power source charge Lithium battery through CN3065 charge manager IC."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Atom_Node_Interface_Function.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"U1:")," Atmel 32U4 IC,  a 8-bit AVR Microcontroller;"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"U3:")," TD6810-ADJ IC, 1.5MHz 800mA Synchronous Step-Down Regulator Dropout;"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"U4:")," CN3065 IC, Charge management chip."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Micro USB:")," Charge for Lithium Battery and programming."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Charge Indicator:")," During charging process, the indicator is red; when finish charging, it turns to green. When it\u2019s not connected to external power source or when the battery is in normal state, the indicator won\u2019t light up. When it\u2019s in low\u2010battery level(do not connect to extern power), it shows red."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"User Indicator:")," Green blinking indicates transmit data, Red blinking indicates initializate. Red light indicates in configuration mode."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Light Sensor:")," Receive encoded parameters that Android device send."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ADC Connector:")," Can connect Sensors(is not IIC connector)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"PWM Connector:")," Can connect Actuators(is not IIC connector)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"IIC Connector:")," Can  connect Sensors or Actuators(is IIC connector)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("font",{color:"red"},"Note:"))," A atom node can not connect simultaneously two or more Sensors(Actuators)."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Key Feature")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Arduino compatible MCU")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"LiPo battery and charger circuit")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"LED/LDR for parameter setup")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Sensor/Actuator connector")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"XBee compatible socket")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Micro USB cable for programming and power")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Low consumption design"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Block Diagram")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Beacon_ATOM_hardware.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"}," Hardware design instruction")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf"},"https://www.seeedstudio.com/wiki/images/1/1b/Beacon",(0,l.kt)("em",{parentName:"a"},"Atom_Hardware_Design_Analysis"),".pdf")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Atom Node Overview")),(0,l.kt)("p",null,"Now let\u2019s see what Atom Node looks like."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Hardware_View.jpg",alt:null})),(0,l.kt)("h2",{id:"the-firmware-and-software"},"The firmware and software"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"the-firmware"},"The firmware"),(0,l.kt)("p",null,"The firmware which have uploaded to Atom Node can driving  sensors and actuators.\nSensors available for Atom Node:"),(0,l.kt)("table",{cellspacing:"0",width:"40%"},(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"col"}," ID"),(0,l.kt)("th",{scope:"col"}," Name"),(0,l.kt)("th",{scope:"col"}," Type"),(0,l.kt)("th",{scope:"col"}," Control Mode")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 1"),(0,l.kt)("td",null," Grove - Button"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 2"),(0,l.kt)("td",null," Grove - Tilt Switch"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 3"),(0,l.kt)("td",null," Grove - Line Finder"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 4"),(0,l.kt)("td",null," Grove - PIR Motion Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 5"),(0,l.kt)("td",null," Grove - Infrared Reflective Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 6"),(0,l.kt)("td",null," Grove - Magnetic switch"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 7"),(0,l.kt)("td",null," Grove - Touch Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 8"),(0,l.kt)("td",null," Grove - IR Distance Interrupter"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 9"),(0,l.kt)("td",null," Grove - Hall Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 11"),(0,l.kt)("td",null," Grove - Collision Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 12"),(0,l.kt)("td",null," Grove - Moisture sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 13"),(0,l.kt)("td",null," Grove - Light Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 14"),(0,l.kt)("td",null," Grove - Rotary Angle Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 44"),(0,l.kt)("td",null," Grove - Temprature Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 45"),(0,l.kt)("td",null," Grove - Water Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 46"),(0,l.kt)("td",null," Grove - 80cm Infrared Proximity Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"},"47"),(0,l.kt)("td",null," Grove - Infrared Temperature Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 48"),(0,l.kt)("td",null," Grove - Slide Potentiometer"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 59"),(0,l.kt)("td",null," Grove - Air quality sensor 1.0"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 50"),(0,l.kt)("td",null," Grove - Electricity Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 51"),(0,l.kt)("td",null," Grove - Alcohol Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," Analog")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 53"),(0,l.kt)("td",null," Grove - Sound Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 54"),(0,l.kt)("td",null," Grove \u2013 Ultrasonic Ranger"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 81"),(0,l.kt)("td",null," Grove - Digital Light Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IIC")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 82"),(0,l.kt)("td",null," Grove - Barometer Sensor"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IIC")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 102"),(0,l.kt)("td",null," Grove - Temperature&Humidity Sensor Pro \u2013T"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," ONE-Wire")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 103"),(0,l.kt)("td",null," Grove - Temperature&Humidity Sensor Pro \u2013H"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," ONE-Wire")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 110"),(0,l.kt)("td",null," Grove - Infrared Receiver"),(0,l.kt)("td",null," Sensor"),(0,l.kt)("td",null," IR"))),(0,l.kt)("p",null,"Current it can drive almost all of sensors. It is visible that the firmware is powerful.\nActuators available for Atom Node:"),(0,l.kt)("table",{cellspacing:"0",width:"40%"},(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"col"}," ID"),(0,l.kt)("th",{scope:"col"}," Name"),(0,l.kt)("th",{scope:"col"}," Type"),(0,l.kt)("th",{scope:"col"}," Control Mode")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 128"),(0,l.kt)("td",null," Grove - Relay"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 129"),(0,l.kt)("td",null," Grove - LED"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 135"),(0,l.kt)("td",null," Grove - Multi Color Flash LED (5mm)"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 136"),(0,l.kt)("td",null," Grove - Variable Color LED"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 137"),(0,l.kt)("td",null," Grove - Buzzer"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 138"),(0,l.kt)("td",null," Grove - Vibrator"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 201"),(0,l.kt)("td",null," Grove - OLED Display 128*64"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IIC")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 202"),(0,l.kt)("td",null," Grove - OLED 96x96"),(0,l.kt)("td",null,"  Actuator"),(0,l.kt)("td",null,"  IIC")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 223"),(0,l.kt)("td",null," Grove - LED Bar"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IO")),(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"row"}," 224"),(0,l.kt)("td",null," Grove - Infrared Emitter"),(0,l.kt)("td",null," Actuator"),(0,l.kt)("td",null," IR"))),(0,l.kt)("h3",{id:"the-software"},"The software"),(0,l.kt)("p",null,"There is an application program for configuring Atom Node modules. The program is running on Android devices. During the configuration process, the screen area of Android device will flash to transmit encoded parameters to the Atom Node via a light-sensitive transistor. The configuration interface is shown below:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Configuration_Interface_.png",alt:null})),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Atom Node is an open-source hardware solution for the Internet of Things, which can support several Grove sensors and actuators to gather physical data and perform certain actions. The Atom Node needs to be configured before being put in use. After configuration, several modules can gather and transmit data wirelessly through RFBee."),(0,l.kt)("p",null,"We would like to take the temperature sensor as an example to illustrate the use of the Atom Node. Let's try to make this happen: when the temperature exceeds 28 \u2103, a buzzer will sound."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Effect_diagram.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Preparatory work:"),"\nUsing the device, you need at least an RFBee/Xbee (when using only one Atom Node, it is not necessary) and an Android device (the Atom Node does not include it). If you want the Atom Node to work, they are essential. And please make sure the baud rate of the RFBee/XBee is set at 57,600. If not, you need to modify the configuration, using your own method or upload the demo of ",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/RFBee.zip"},"the Library file:RFBee")," to RFBee. Then download ",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip"},"the application program package:BeaconUI")," and install on an Android device."),(0,l.kt)("h3",{id:"demo-1-use-one-atom-node"},"Demo 1: Use one Atom Node"),(0,l.kt)("p",null,"Now using an Atom Node working in IFTTT mode, follow the steps below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Plug RFBee in the Bee Socket.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Press the button on one side of the Atom Node to turn it on. The LED on the other side will light up. Then press the button again to make the Atom Node enter the configuration mode. Meanwhile, the user indicator is red.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open the Atom Node app; you can see the following interface:"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Interface1.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click the plus sign at the upper right corner to add a device, a selection panel will pop up.\n",(0,l.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface2.jpg",alt:null}))),(0,l.kt)("p",null,"Let\u2019s pause for a while to briefly introduce the interface."),(0,l.kt)("p",null,"1) Device Name: this can be any word. Such as \u201cSensor-temperature\u201d or any word you like."),(0,l.kt)("p",null,"2) Sensor: choose a sensor."),(0,l.kt)("p",null,"3) The rest of the configuration is for the Actuator. If you don\u2019t need one, choose NULL and the rest of the options are automatically ignored."),(0,l.kt)("p",null,'Now let\'s configure it and set the device name as "temp".'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Refer to the picture below, Input "temp" as the device name. Choose "Grove - Temperature" in "Sensor" and choose "Grove - Buzzer" in Actuator. Choose any other options besides "Null" in "Sensor Radio Frequency", Input the "if" value and choose on in "then":\n',(0,l.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface9.png",alt:null}))),(0,l.kt)("font",{color:"red"},'In indie mode, the trigger source should choose the device itself, therefore you should choose "temp" in the drop-down box of "Trigger from". But now there\'s only a "Null" option. Just ignore this problem. After you see the device name in the device list, you can reconfigure when the device name appears in  "Trigger from".'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Place it on the Android device screen. Note that the light sensor is facing the screen. It is better that the brightness of the screen is set to about 35%.\n",(0,l.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface3.jpg",alt:null}))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface4.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We have completed the configuration, you can see it in the device list now.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg",alt:null})),(0,l.kt)("font",{color:"red"},"Remember that you have just selected trigger source as Null. You need to reconfigure it."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Once the temperature sensor reads a value exceeding 28 \u2103, the buzzer will sound.")),(0,l.kt)("h3",{id:"demo-2-use-two-atom-node"},"Demo 2: Use two Atom Node"),(0,l.kt)("p",null,"Using two Atom Nodes working in IFTTT mode, you may follow the steps below:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Connect a Grove - Temperature to the ADC port of Atom Node and plug an RFBee (Baud rate 57,600) to the Bee socket.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Connect a Grove - Buzzer to the PWM port of another Atom Node and plug an RFBee to the bee Socket.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},'Open the Atom Node app. Click the plus sign on the upper right corner. We set the device name as \u201ctemp\u201d and choose Grove - Temperature in "sensor" as follows:\n',(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface6.jpg",alt:null}))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Turn on the Atom Node and enter configuration mode by pressing the button, then place it on the Android screen. Click Submit. It will start configuring.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"After completing the configuration of one Atom Node, you can see it in the device list."))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface5.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Then configure the other Atom Node, connecting a Grove - Buzzer in a similar fashion.\n",(0,l.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface7.jpg",alt:null}))),(0,l.kt)("p",null,'When configuring the actuator, set the actuator\'s name. Then choose the trigger source of the actuator in \u201cTrigger from\u201d. We would like to use the previously configured device "temp" to trigger the actuator: therefore we should choose "temp" in the drop-down box of \u201cTrigger from\u201d. There are some other trigger conditions and actions, like \u201cIf\u201d and \u201cthen\u201d which help you to build a link between a certain condition and corresponding actions. By the way, the \u201cIf\u201d values should always follow the data type of the Sensor you used.'),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"When the two Nodes have been configured, it will start working. Then you can see the user LED is green.\n",(0,l.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Node_Interface8.jpg",alt:null}))),(0,l.kt)("h2",{id:"work-status-description"},"Work Status Description"),(0,l.kt)("hr",null),(0,l.kt)("table",{cellspacing:"0"},(0,l.kt)("tr",null,(0,l.kt)("th",{scope:"col"}," **Operate**"),(0,l.kt)("th",{scope:"col"}," **Status**"),(0,l.kt)("th",{scope:"col"}," **Function**")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Press the power button"),(0,l.kt)("td",null," Power LED will light(Blue)"),(0,l.kt)("td",null," Turn on the atom node")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Press the power button after turn on Atom Node"),(0,l.kt)("td",null," Power LED is light(Blue),User LED will light(if unpair, User LED is red;After successfully paired,User LED is green and blink)"),(0,l.kt)("td",null," Enter configuration mode")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Press the power button when in configuration mode"),(0,l.kt)("td",null," Power LED is light(Blue),User LED will off"),(0,l.kt)("td",null," Exit configuration mode")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Long Press the power button"),(0,l.kt)("td",null," All LED will off and Buzzer will Sound"),(0,l.kt)("td",null," Turn off Atom Node")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Double-click the power button"),(0,l.kt)("td",null," User Indicator will off or on"),(0,l.kt)("td",null," Turn on/off User Indicator")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Four-click the power button"),(0,l.kt)("td",null," all indicators keep states"),(0,l.kt)("td",null," Clear data")),(0,l.kt)("tr",null,(0,l.kt)("th",null," Connect Atom Node to PC using  USB cable"),(0,l.kt)("td",null," Charge LED will light(Charge LED is red in charge, After charging complete,Charge LED is Green), Power LED will light"),(0,l.kt)("td",null," Charge for Battery or update the firmware"))),(0,l.kt)("h2",{id:"upgrade-the-firmware"},"Upgrade the firmware"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"connect-device-and-install-the-driver"},"Connect device and install the driver"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download ",(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Driver.zip"},"the Atom Node Driver File")," and save it."),(0,l.kt)("li",{parentName:"ul"},"Connect the Micro-USB cable to the Atom Node and connect the other side of the Micro-USB connector to the computer's USB port."),(0,l.kt)("li",{parentName:"ul"},"Wait for the new found hardware prompt.If the installer does not launch automatically, Navigate to the Windows Device Manager  and find the Seeeduino Lite listing.")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/A_Unknow_Device.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Right click and choose Update driver. When asked to install automatically or from a specific location, select "Browse my computer for driver software".')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Update_Driver.jpg",alt:null})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'Choose "Search for the best driver in these locations", and check the box "incude this location in the search". Click the Browse button and navigate to drive you have downloaded. Select the drivers folder an click ',(0,l.kt)("strong",{parentName:"li"},"OK"),".")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Browse_the_Driver.jpg",alt:null})),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Atom_Node/img/Update_the_Driver.jpg",alt:null})),(0,l.kt)("h3",{id:"modify-file-boardstxt-and--usbcorecpp"},"Modify File: boards.txt and  USBCore.cpp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open up Arduino-1.0.1/hardware/arduino/co",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/arduino"},"https://files.seeedstudio.com/wiki/Atom_Node/res/arduino")," directory, replace the file:USBCore.cpp with ",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/USBCore.zip"},"the new USBCore.cpp"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"And replace file\uff1aboards.txt with ",(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/Boards-Atom_Node-.txt"},"the new boards.txt")," in the path:Arduino-1.0.1/hardware/arduino."))),(0,l.kt)("h3",{id:"download-the-required-library-files-and-atomnode-firmware"},"Download the required library files and Atom.Node firmware"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The latest Atom.Node firmware: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reeedstudio/Atom_Node"},"https://github.com/reeedstudio/Atom_Node"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"The latest Atom.Node Library:  ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/reeedstudio/Atom_Node_Libraries"},"https://github.com/reeedstudio/Atom_Node_Libraries")))),(0,l.kt)("h3",{id:"upload-program-using-arduino-ide"},"Upload program using Arduino IDE"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open the Atom_Node.ino of Atom.Node firmware file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Select Seeeduino Node from the Tools | Board menu of the Arduino environment. And select the correct port.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Compile and uplaod the code."))),(0,l.kt)("p",null,"Now you have completed the firmware upgrade."),(0,l.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,l.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/Atom_Node_Eagle_File.zip"},"Atom_Node_Eagle_File.zip"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/reeedstudio/Atom_Node_Libraries"},"Atom Node Library"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/reeedstudio/Atom_Node"},"Atom Node firmware"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/BeaconUI.zip"},"the application program:BeaconUI"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Atom_Node/res/Beacon_Atom_Hardware_Design_Analysis_.pdf"},"Hardware design instruction")))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
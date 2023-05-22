"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76604],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||n;return r?i.createElement(h,o(o({ref:t},u),{},{components:r})):i.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const n={description:"Grove - XBee Carrier",title:"Grove - XBee Carrier",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-XBee_Carrier",last_update:{date:"2/15/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Seeed_Elderly/Bee/Grove-XBee_Carrier",id:"Seeed_Elderly/Bee/Grove-XBee_Carrier",title:"Grove - XBee Carrier",description:"Grove - XBee Carrier",source:"@site/docs/Seeed_Elderly/Bee/Grove-XBee_Carrier.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Grove-XBee_Carrier",permalink:"/custom/zh-CN/Grove-XBee_Carrier",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/Grove-XBee_Carrier.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676390400,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{description:"Grove - XBee Carrier",title:"Grove - XBee Carrier",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-XBee_Carrier",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"GPS Bee kit",permalink:"/custom/zh-CN/GPS_Bee_kit"},next:{title:"Grove - Bee Socket",permalink:"/custom/zh-CN/Grove-Bee_Socket"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Charging",id:"charging",level:4},{value:"Working with Standalone Bee Nodes",id:"working-with-standalone-bee-nodes",level:4},{value:"Working with Bee Modules",id:"working-with-bee-modules",level:4},{value:"Programming",id:"programming",level:3},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem.jpg",alt:null})),(0,a.kt)("p",null,"The Grove - XBee Carrier is a Wireless Sensor Network (WSN) base board designed for Bee series and Grove units. It is primarily suitable for standalone Bee Nodes like RFBee, Wifi Bee which have ATMega328 onboard and XBee (Zigbee) modules. It is compatible with ",(0,a.kt)("a",{parentName:"p",href:"/RFbee_V1.1-Wireless_Arduino_compatible_node",title:"RFbee V1.1 - Wireless Arduino compatible node"},"RFBee"),", ",(0,a.kt)("a",{parentName:"p",href:"/Wifi_Bee",title:"Wifi Bee"},"Wifi Bee"),", ",(0,a.kt)("a",{parentName:"p",href:"http://garden.seeedstudio.com/index.php?title=Bee_series#ZigBee",title:"Bee_series#ZigBee"},"XBee")," and Bluetooth Bee. Besides a Bee receptacle, there are also two Grove connectors. The board can be powered by a lithium battery or through USB cable. You can use a Wireless charger, Solar Panel or the USB cable to charge the battery. The FT232RL chip onboard helps in downloading the program to Bee Module directly."),(0,a.kt)("p",null,"Bees which do not have ATMega328 like Bluetooth Bee can only be configured by using on-board FT232RL (USB to UART). Theses Bees are not suitable for standalone applications."),(0,a.kt)("p",null,"The on-board FT232RL can be used like any other 3.3V USB to UART interface when not connected to any Bee Modules. This is useful for programming a 3.3V MCU through Serial Port."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove-xbee-carrier-p-905.html?cPath=132_134"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Bees Compatible Receptacle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Two Grove Connectors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Two Grove Place Holders")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"LEDs for PWR, Charge Indication and UART transmission.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Power Switch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Reset Button"))),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wireless Sensor Network with Standalone Bee Node like ",(0,a.kt)("a",{parentName:"p",href:"/Wifi_Bee",title:"Wifi Bee"},"Wifi Bee"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As a configuration aid for Bees using FT232RL.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Charger for Lithium Ion Cells using on-board charge controller.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"As a FT232RL based 3.3v USB-UART."))),(0,a.kt)("h2",{id:"cautions"},"Cautions"),(0,a.kt)("hr",null),(0,a.kt)("font",{color:"red"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Insert the Bees in the proper direction. Use the Bee outline on the silk-screen.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("hr",null),(0,a.kt)("table",{cellspacing:"0",width:"80%"},(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"col"}," Item"),(0,a.kt)("th",{scope:"col"}," Min"),(0,a.kt)("th",{scope:"col"}," Typical"),(0,a.kt)("th",{scope:"col"}," Max"),(0,a.kt)("th",{scope:"col"}," Unit")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Voltage"),(0,a.kt)("td",null," 3.0"),(0,a.kt)("td",null," 3.3"),(0,a.kt)("td",null," 3.6"),(0,a.kt)("td",null," VDC")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Charge Controller"),(0,a.kt)("td",{colspan:"4"}," CN3063")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," CHARGER (Charging Voltage for LiPo Battery)"),(0,a.kt)("td",{colspan:"4"}," 4.4V to 6V (as per CN3063 Spec)")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Charging Current"),(0,a.kt)("td",{colspan:"4"}," Max 500mA")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"},"  3.3V LDO"),(0,a.kt)("td",{colspan:"4"}," Low Noise and Micropower type. Suitable for Battery Application.")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," I/O Logic"),(0,a.kt)("td",{colspan:"4"}," 3.3V Logic"))),(0,a.kt)("h2",{id:"interface-function"},"Interface Function"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Xbee_Carrier_Interface.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"U2:")," RT9167A_33PB IC, 3.3V LDO Lownoise Micropower Regulator\n",(0,a.kt)("strong",{parentName:"p"},"U3:")," CN3083 IC, Charger controller for Lithium batteries (charging using solar panel)\n",(0,a.kt)("strong",{parentName:"p"},"U4:")," FT232RL IC, USB to serial UART interface"),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"When using an RFBee, the following pinouts of ATmage168 on RFBee apply for using the Arduino IDE"),(0,a.kt)("p",null,"Pin 5 is the Grove connector for I/O - Yellow wire\nPin 6 is the Grove connector for I/O - White wire"),(0,a.kt)("p",null,"Pin 16 may need to be driven low to provide enough power to the I/O Grove ","[via mosfet]","\nPin 17 may need to be driven low to provide enough power to the I2C Grove ","[via mosfet]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," you can use the x2 Grove cable with the white and yellow wires swapped on one to access both I/O."),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("h4",{id:"charging"},"Charging"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect a 3.7v LiPo battery to ",(0,a.kt)("strong",{parentName:"p"},"BAT")," JST-socket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect a power source like Solar Panel to ",(0,a.kt)("strong",{parentName:"p"},"CHARGER")," JST-Socket.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Battery will be continuous charged. The end of charging would be indicated by LED marked 'OK'."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_with_LiPOBattery_Being_Charged_By_SolarCell.jpg",alt:null})),(0,a.kt)("h4",{id:"working-with-standalone-bee-nodes"},"Working with Standalone Bee Nodes"),(0,a.kt)("p",null,"Bee Nodes are standalone Arduino Compatible Wireless Nodes. ",(0,a.kt)("strong",{parentName:"p"},"SeeedStudio")," has two such Nodes - ",(0,a.kt)("a",{parentName:"p",href:"/Wifi_Bee",title:"Wifi Bee"},"Wifi Bee")," and ",(0,a.kt)("a",{parentName:"p",href:"/RFbee_V1.1-Wireless_Arduino_compatible_node",title:"RFbee V1.1 - Wireless Arduino compatible node"},"RFBee"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The following image illustrated the connection of ",(0,a.kt)("a",{parentName:"p",href:"/Wifi_Bee",title:"Wifi Bee"},"WiFi Bee")," to ",(0,a.kt)("strong",{parentName:"p"},"Grove - XBee Carrier"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Any Groves can be connected to the Grove sockets provided.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The programming of WiFi Bee's onboard ",(0,a.kt)("strong",{parentName:"p"},"AtMega328P")," is carried by connecting to PC through USB port. (FT232RL is used)"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_to_Wifi_BEE_and_A_Grove.jpg",alt:null})),(0,a.kt)("p",null,"Bee Stem Connected to Wifi BEE and A Twig.jpg"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refer ",(0,a.kt)("a",{parentName:"li",href:"http://garden.seeedstudio.com/index.php?title=Wifi_Bee#Usage",title:"Wifi_Bee#Usage"},"Wifi Bee usage documentation for programming examples"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Bee_Stem_Connected_To_RFBee_And_TwoTwigs.jpg",alt:null})),(0,a.kt)("p",null,"Bee Stem Connected To RFBee And TwoTwigs.jpg"),(0,a.kt)("h4",{id:"working-with-bee-modules"},"Working with Bee Modules"),(0,a.kt)("p",null,"This section is about those Bee modules which do not have a MCU pre-programmed with Arduino bootloader. They mostly act just like a wireless trans-receiver. These ",(0,a.kt)("strong",{parentName:"p"},"Bee Modules")," like Bluetooth Bee, etc.. can communicated with PC as well. In this case, ",(0,a.kt)("strong",{parentName:"p"},"Grove - XBee Carrier")," acts as a carrier for these Bees providing necessary power, communication interface with PC through FT232RL USB to UART."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_Connected_to_BluetoothBee.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The communication of Bluetooth Bee and PC is captured with a serial port terminal application.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can see the commands and their reply in the screenshot below.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Bluetooth Bee was put into INQ mode and it even has detected a Bluetooth device in the vicinity."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/img/Stem_XBee_Carrier_BluetoothBee_Commands.png",alt:null})),(0,a.kt)("h3",{id:"programming"},"Programming"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"/*\n  Test code for use with an XBee Carrier & an RF Bee\n\n  Turns on PD5 (eg: grove relay) on for one second, then off for one second, repeatedly.\n*/\n\nvoid setup()\n{\n    // initialize the digital pin as an output [Pin 5 is the Grove connector for I/O\n    pinMode(5, OUTPUT);\n\n    // These lines are needed to ensure that the relay will pull in [provides power to the Grove]\n    pinMode(16, OUTPUT);\n    digitalWrite(16, LOW);\n}\n\nvoid loop() {\n    digitalWrite(5, HIGH);   // set the LED on\n    delay(1000);              // wait for a second\n    digitalWrite(5, LOW);    // set the LED off\n    delay(1000);              // wait for a second\n}\n")),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("hr",null),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Revision"),(0,a.kt)("th",null," Descriptions"),(0,a.kt)("th",null," Release")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"300px"}," v0.9b"),(0,a.kt)("td",{width:"500px"}," Initial public release"),(0,a.kt)("td",{width:"200px"}," 13th July 2011"))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/PCBA-Grove%20XBee%20Carrier_Eagle.rar"},"Grove - XBee Carrier  Eagle Files"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-XBee_Carrier/res/Bee_Stem_v0.9b.pdf"},"Grove - XBee Carrier PDF schematics file"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://www.consonance-elec.com/pdf/%E6%8A%80%E6%9C%AF%E8%AF%B4%E6%98%8E%E4%B9%A6/DSC-CN3063.pdf"},"CN3063"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://www.richtek.com/download_ds.jsp?s=238"},"RT9167A_33PB")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
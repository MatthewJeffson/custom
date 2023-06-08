"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),k=n,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return r?a.createElement(c,l(l({ref:t},d),{},{components:r})):a.createElement(c,l({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},87285:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={description:"RS-485 Shield for Raspberry Pi",title:"RS-485 Shield for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RS-485_Shield_for_Raspberry_Pi",last_update:{date:"1/11/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/RS-485_Shield_for_Raspberry_Pi",id:"Top_Brand/Raspberry_Pi/Pi_HAT/RS-485_Shield_for_Raspberry_Pi",title:"RS-485 Shield for Raspberry Pi",description:"RS-485 Shield for Raspberry Pi",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/RS-485_Shield_for_Raspberry_Pi.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/RS-485_Shield_for_Raspberry_Pi",permalink:"/custom/RS-485_Shield_for_Raspberry_Pi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/RS-485_Shield_for_Raspberry_Pi.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"RS-485 Shield for Raspberry Pi",title:"RS-485 Shield for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RS-485_Shield_for_Raspberry_Pi",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",permalink:"/custom/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030"},next:{title:"Grove AI HAT for Edge Computing",permalink:"/custom/Grove_AI_HAT_for_Edge_Computing"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Communication test code",id:"communication-test-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/main.jpg",alt:null})),(0,n.kt)("p",null,"RS-485 is a cost-effective solution in serial communication networks. It can be used up to data rates at 10 Mbit/s or distances up to 1200m at lower speeds. This RS-485 Shield is a standard add-on board for Raspberry Pi. It is integrated with simple screw terminal as well as DB9 interface."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"RS-485 Shield for Raspberry Pi"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Sep 2018")))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"One driver and one receiver per part"),(0,n.kt)("li",{parentName:"ul"},"EMI noise minimization"),(0,n.kt)("li",{parentName:"ul"},"Transmission rate up to 2.5Mbps"),(0,n.kt)("li",{parentName:"ul"},"No driver slew rate limitation"),(0,n.kt)("li",{parentName:"ul"},"Short-circuit current limited"),(0,n.kt)("li",{parentName:"ul"},"Fail-Safe Applications"),(0,n.kt)("li",{parentName:"ul"},"Support Raspberry Pi 3B/3B+/4")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Item"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Operating Supply Voltage"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Interface"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RS-485 DB9 Interface X1",(0,n.kt)("br",null),"RS-485 Screw Interface X1 ",(0,n.kt)("br",null)," 2\xd713 Female Header To Raspberry X1",(0,n.kt)("br",null),"  2\xd713 Expansion Female Header X1",(0,n.kt)("br",null),"  Grove I2C Interface X1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Data Rate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2.5Mbps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of Receivers on"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Storage Temperature Range"),(0,n.kt)("td",{parentName:"tr",align:"left"},"-65\uff5e160\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Channel Number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Resolution"),(0,n.kt)("td",{parentName:"tr",align:"left"},"12-Bit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Power Consumption"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Different power consumption depending on the transmission rate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"L: 62mm W: 39.2mm H: 21.8mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Weight"),(0,n.kt)("td",{parentName:"tr",align:"left"},"23g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Package size"),(0,n.kt)("td",{parentName:"tr",align:"left"},"L: 140mm W: 75mm H: 25mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:"left"},"42g")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Low-Power RS-485 Transceivers"),(0,n.kt)("li",{parentName:"ul"},"Level Translators"),(0,n.kt)("li",{parentName:"ul"},"Transceivers for EMI-Sensitive Applications Industrial-Control Local Area Networks"),(0,n.kt)("li",{parentName:"ul"},"Half-duplex applications")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-out"},"Pin Out"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Overview")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map.jpg",alt:"Pin_map"})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"RS-485 DB9 Interface & RS-485 Screw Interface")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/8.jpg",alt:null})),(0,n.kt)("p",null,"The 485 interface uses differential signal transmission. Please make sure the port A connect to the port A of the 485 device, and port B connect to the port B of the 485 device."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"485-A: The end A of RS485 data transmit wire, connect to the pin A of the MAX485 chip.",(0,n.kt)("br",{parentName:"p"}),"\n","485-B: The end B of RS485 data transmit wire, connect to the pin B of the MAX485 chip.",(0,n.kt)("br",{parentName:"p"}),"\n","GND: Connect to the Raspberry Pi GND.")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/schematic_1.jpg",alt:null}))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("font",{color:"green"},"You can click the picture to view the original file")),(0,n.kt)("p",null,"As you can see, GPIO14 and GPIO15 are applied for data transmission, and we use GPIO18 as the enable signal."),(0,n.kt)("p",null,"For the definition of logic signals, please refer to the table below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/function_table.jpg",alt:null})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Female Headers to Raspberry")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/5.jpg",alt:null})),(0,n.kt)("p",null,"We use a 2X13 Female Header to plug this module into the Raspberry Pi, please make sure the pins are aligned."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/Pin_map_2.jpg",alt:null})),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extension Female Headers")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/6.jpg",alt:null})),(0,n.kt)("p",null,"This RS-485 Shield occupies 26 Raspberry Pi pins, and only 5 GPIO pins are actually used. We take these 26 pins out in case you need those pins for other purposes."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"GPIO Occupied List")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"GPIO Number"),(0,n.kt)("th",{parentName:"tr",align:null},"Function"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPIO02"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA for Grove I2C Port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPIO03"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL for Grove I2C Port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPIO14"),(0,n.kt)("td",{parentName:"tr",align:null},"Connect to the pin ",(0,n.kt)("strong",{parentName:"td"},"DI")," of Max485 chip, for data transmission.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPIO15"),(0,n.kt)("td",{parentName:"tr",align:null},"Connect to the pin ",(0,n.kt)("strong",{parentName:"td"},"RO")," of Max485 chip, for data transmission.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"GPIO18"),(0,n.kt)("td",{parentName:"tr",align:null},"Connect to the pin ",(0,n.kt)("strong",{parentName:"td"},"RE")," & ",(0,n.kt)("strong",{parentName:"td"},"DE")," of Max485 chip, work as the enable signal.")))),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Grove I2C Port")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/3.jpg",alt:null})),(0,n.kt)("p",null,"We have reserved the I2C interface so that you can easily use it with I2C devices. It should be noted that the VCC of this port is 5V, you need to confirm that whether the module is compatible with 5V voltage."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"SCL: I2C serial clock, connect to the GPIO03 of Raspberry Pi.",(0,n.kt)("br",{parentName:"p"}),"\n","SDA: I2C serial data, connect to the GPIO02 of Raspberry Pi.",(0,n.kt)("br",{parentName:"p"}),"\n","VCC: Connect to the Raspberry Pi 5V pin.",(0,n.kt)("br",{parentName:"p"}),"\n","GND: Connect to the Raspberry Pi GND pin.")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Max485 Chip")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/pin_out/7.jpg",alt:null})),(0,n.kt)("p",null,"We use the MAX485ESA IC for this shield, for more detail about this IC, please check the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf"},"MAX485 Datasheet")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"RS-485 Shield for Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Plug the RS-485 Shield for Raspberry Pi into the Raspberry Pi.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect the ",(0,n.kt)("strong",{parentName:"p"},"485-A")," to 485 wire A, connect the ",(0,n.kt)("strong",{parentName:"p"},"485-B")," to 485 wire B."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If the wire is reversed, communication will not be possible.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Power the Raspberry Pi with micro-usb cable.")),(0,n.kt)("h3",{id:"software"},"Software"),(0,n.kt)("h4",{id:"communication-test-code"},"Communication test code"),(0,n.kt)("p",null,"You can create a new python file and copy the following code into the new file, or you can download the source file in the resource download area. Then run it in your terminal."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Sending Code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"\n#!/usr/bin/env python\n\nimport time\nimport serial\nimport os\nfrom gpiozero import LED\n\nsend_str = \"*******rs485888888--\\n\"\n\nser = serial.Serial(port='/dev/ttyS0',baudrate =115200)\n\nTx_Enable = LED(18)\nTx_Enable.on()\n\nwhile 1:\n    ser.write(send_str)\n    time.sleep(1)\n\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Receive Code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-Python"},"\n#!/usr/bin/env python\n\nimport time\nimport serial\nimport os\nfrom gpiozero import LED\n\nser = serial.Serial(port='/dev/ttyS0',baudrate =115200,timeout=1)\ndata = ''\n\nRx_Disable = LED(18)\nRx_Disable.off()\n\nwhile True:\n    str = ser.readall()  \n    if str:  \n        print str \n\n")),(0,n.kt)("p",null,"You need two shield and two raspberry to test the code above, or you can use the serial tool in the PC to communicate with your raspberry pi."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS485%20Shield%20for%20Raspberry%20Pi.zip"},"RS-485 Shield for Raspberry Pi Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/Python_test.zip"},"Python Test Code"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485.pdf"},"MAX485 Datasheet"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/RS-485_Shield_for_Raspberry_Pi/res/RS-485_Shield_for_Raspberry_Pi.pdf"},"PDF Format Wiki")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")," ."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
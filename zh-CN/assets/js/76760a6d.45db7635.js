"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12951],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,g=u["".concat(s,".").concat(h)]||u[h]||c[h]||o;return n?r.createElement(g,i(i({ref:t},d),{},{components:n})):r.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49056:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Configure the Counter & GPIO Sensor",title:"Configure the Counter & GPIO Sensor",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"4/12/2023",author:"Yvonne"}},i="# Getting S2100 started with Counter&GPIO Sensor",l={unversionedId:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger",id:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger",title:"Configure the Counter & GPIO Sensor",description:"Configure the Counter & GPIO Sensor",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial",slug:"/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1681257600,formattedLastUpdatedAt:"2023\u5e744\u670812\u65e5",frontMatter:{description:"Configure the Counter & GPIO Sensor",title:"Configure the Counter & GPIO Sensor",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"4/12/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Configure the Analog Sensor",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger"},next:{title:"Optical Rain Gauge RG-15",permalink:"/custom/zh-CN/Sensor/SenseCAP/Accessories/Industrial-Grade-Optical-Rain-Gauge-RG-15"}},s={},p=[{value:"Sensor Probe",id:"sensor-probe",level:2},{value:"Disassemble the Data Logger",id:"disassemble-the-data-logger",level:2},{value:"Power supply options of sensor",id:"power-supply-options-of-sensor",level:2},{value:"Connect to the Datalogger",id:"connect-to-the-datalogger",level:2},{value:"Connect to the Rain Gauge Sensor",id:"connect-to-the-rain-gauge-sensor",level:2},{value:"Connect to Sensor to App",id:"connect-to-sensor-to-app",level:2},{value:"Configure Basic parameters through App",id:"configure-basic-parameters-through-app",level:2},{value:"Select the Platform and Frequency",id:"select-the-platform-and-frequency",level:3},{value:"Set the Interval",id:"set-the-interval",level:3},{value:"Set the Packet Policy",id:"set-the-packet-policy",level:3},{value:"Restore Factory Setting",id:"restore-factory-setting",level:3},{value:"Configure GPIO Sensor via App",id:"configure-gpio-sensor-via-app",level:2},{value:"Set the Counter Sensor",id:"set-the-counter-sensor",level:3},{value:"Bind Sensor to SenseCAP Portal",id:"bind-sensor-to-sensecap-portal",level:2},{value:"Check Data on SenseCAP Portal",id:"check-data-on-sensecap-portal",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-getting-s2100-started-with-countergpio-sensor"},"# Getting S2100 started with Counter&GPIO Sensor"),(0,a.kt)("p",null,"Let's get started on learning how to use the S2100 with Counter&GPIO sensor. Once we've got that down, we'll move on to the basics of S2100's application. This will give you a good idea of how to connect your own customized sensor in the future."),(0,a.kt)("h2",{id:"sensor-probe"},"Sensor Probe"),(0,a.kt)("p",null,"Get these items ready:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Data logger"),(0,a.kt)("li",{parentName:"ul"},"Rain Gauge RG-15 Rain sensor(as an example)"),(0,a.kt)("li",{parentName:"ul"},"8 pin wire"),(0,a.kt)("li",{parentName:"ul"},"Cross screwdriver(Cross recess No.2)"),(0,a.kt)("li",{parentName:"ul"},"SenseCAP Mate APP",(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/2.png"})))),(0,a.kt)("h1",{id:"connect-the-sensor-probe"},"Connect the Sensor Probe"),(0,a.kt)("h2",{id:"disassemble-the-data-logger"},"Disassemble the Data Logger"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unscrew three screws.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/3.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Take down the cover.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/4.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Remove the thread cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/5.png"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"No.")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Pin")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"12V"),(0,a.kt)("td",{parentName:"tr",align:null},"External 12V input voltage. The Data Logger can be powered by an external 12V DC power supply. When using 12V power supply, the battery will serve as backup power supply.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"5V output voltage, providing 5V voltage to the sensor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"3V"),(0,a.kt)("td",{parentName:"tr",align:null},"3V output voltage, providing 3V voltage to the sensor.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"IO"),(0,a.kt)("td",{parentName:"tr",align:null},"Acquisition level or pulse input")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"V1"),(0,a.kt)("td",{parentName:"tr",align:null},"The voltage input of 0 to 10V is collected")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"V2"),(0,a.kt)("td",{parentName:"tr",align:null},"The voltage input of 0 to 10V is collected")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"RS485 A/+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"B"),(0,a.kt)("td",{parentName:"tr",align:null},"RS485 B/-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"I1"),(0,a.kt)("td",{parentName:"tr",align:null},"Collect the current input from 4 to 20mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"I2"),(0,a.kt)("td",{parentName:"tr",align:null},"Collect the current input from 4 to 20mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Ground pin")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"12"),(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Ground pin")))),(0,a.kt)("h2",{id:"power-supply-options-of-sensor"},"Power supply options of sensor"),(0,a.kt)("p",null,"Data Logger supports two power supply modes, we choose the Built-in Battery mode:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Mode")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Built-in Battery"),(0,a.kt)("td",{parentName:"tr",align:null},"The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor.")))),(0,a.kt)("h2",{id:"connect-to-the-datalogger"},"Connect to the Datalogger"),(0,a.kt)("p",null,"Wire sequence of Datalogger:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Wire Type")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Red Wire"),(0,a.kt)("td",{parentName:"tr",align:null},"5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Black Wire"),(0,a.kt)("td",{parentName:"tr",align:null},"GND(Any port would be OK.)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Yellow Wire"),(0,a.kt)("td",{parentName:"tr",align:null},"IO")))),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Pass the 8 pin wire through the bottom cover and connect it to the base of the Data Logger according to the wire sequence requirements;")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/6.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Connect the upper cover, rubber ring and screw cap in sequence")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/7.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/8.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Tighten the screws and screw caps")," to check the waterproofing. If the wire diameter is too thin, add waterproof tape for winding.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","Note:")," When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!"),(0,a.kt)("p",null,"If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/9.png"})),(0,a.kt)("h2",{id:"connect-to-the-rain-gauge-sensor"},"Connect to the Rain Gauge Sensor"),(0,a.kt)("p",null,"Wire sequence of Rain Gauge sensor:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/10.png"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Unscrew four screws,take down the cover.Pass the 8 pin wire through the bottom cover and connect it to the base of the J1 according to the wire sequence requirements;")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Wire Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Red"),(0,a.kt)("td",{parentName:"tr",align:null},"V+")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Black"),(0,a.kt)("td",{parentName:"tr",align:null},"GND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Yellow"),(0,a.kt)("td",{parentName:"tr",align:null},"OUT")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/11.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/12.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/13.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Turn the DIP Switches ",(0,a.kt)("strong",{parentName:"li"},"1")," of the rain sensor S1 base to the ON, turn the switch ",(0,a.kt)("strong",{parentName:"li"},"2")," to the OFF , and turn the ",(0,a.kt)("strong",{parentName:"li"},"3")," and ",(0,a.kt)("strong",{parentName:"li"},"4")," to the OFF;")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/14.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Install the cover and tighten the screws. Complete the connection.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/15.png"})),(0,a.kt)("p",null,"We've finished the wiring at this point. Now, let's set up the S2100 and configure it on our APP"),(0,a.kt)("h1",{id:"setup-the-s2100"},"Setup the S2100"),(0,a.kt)("h2",{id:"connect-to-sensor-to-app"},"Connect to Sensor to App"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Press button and hold for ",(0,a.kt)("strong",{parentName:"li"},"3 seconds")," , the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/16.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Please select "S2100 Data Logger".')),(0,a.kt)("p",null,'Please click the "Setup" button to turn on Bluetooth and click "Scan" to start scanning the sensor\'s Bluetooth.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/17.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/18.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/19.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/20.png"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency.")),(0,a.kt)("h2",{id:"configure-basic-parameters-through-app"},"Configure Basic parameters through App"),(0,a.kt)("h3",{id:"select-the-platform-and-frequency"},"Select the Platform and Frequency"),(0,a.kt)("p",null,"S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans."),(0,a.kt)("p",null,'Here we select the "SenseCAP for Helium" or "SenseCAP for TTN". The Frequency Plan based on your actual situation.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","Note:")," Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;"),(0,a.kt)("p",null,"SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html"},"gateway")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/21.png"})),(0,a.kt)("h3",{id:"set-the-interval"},"Set the Interval"),(0,a.kt)("p",null,"The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa."),(0,a.kt)("p",null,"For example, the device collects and uploads data ",(0,a.kt)("strong",{parentName:"p"},"every 60 minutes by default"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/22.png"})),(0,a.kt)("h3",{id:"set-the-packet-policy"},"Set the Packet Policy"),(0,a.kt)("p",null,"The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/23.png"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Parameter")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2C+1N (default)"),(0,a.kt)("td",{parentName:"tr",align:null},"2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1C"),(0,a.kt)("td",{parentName:"tr",align:null},"1C (1 confirm) the device will sleep after get 1 received confirm packet from server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1N"),(0,a.kt)("td",{parentName:"tr",align:null},"1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.")))),(0,a.kt)("h3",{id:"restore-factory-setting"},"Restore Factory Setting"),(0,a.kt)("p",null,"When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/24.png"})),(0,a.kt)("p",null,"When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"*","Note:"),' The "Restore Factory" function can only reset the Basic Setting.'),(0,a.kt)("h2",{id:"configure-gpio-sensor-via-app"},"Configure GPIO Sensor via App"),(0,a.kt)("p",null,'Select the "Protocol" as "GPIO". Then set the following parameters in turn.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/25.png"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the supply voltage to the sensor. It supports 3V/5V/12V. Here we select ",(0,a.kt)("strong",{parentName:"li"},"5V"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/26.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/27.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Set the "Sensor Warm-up time", the warm-up time denotes the amount of time it takes for the sensor to attain its highest accuracy or performance level once the voltage supply has been applied. We enter ',(0,a.kt)("strong",{parentName:"li"},"50(ms)")," herr."),(0,a.kt)("li",{parentName:"ol"},"Select the input type:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Level Mode"),(0,a.kt)("th",{parentName:"tr",align:null},"The input level signal is collected, the high level is 1, the low level is 0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Counter Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"The pulse signal is collected, and the number of pulses is recorded")))),(0,a.kt)("p",null,"We select ",(0,a.kt)("strong",{parentName:"p"},"Counter Mode")," here."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/28.png"})),(0,a.kt)("h3",{id:"set-the-counter-sensor"},"Set the Counter Sensor"),(0,a.kt)("p",null,'Select the "Counter Mode" as input type. Then set the following parameters in turn.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/29.png"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Digital input"),(0,a.kt)("th",{parentName:"tr",align:null},"Sets the type of input pulse. Pull High: Valid when a rising edge is detected. Pull Low: Valid when a falling edge is detected. We select ",(0,a.kt)("strong",{parentName:"th"},"Pull High")," here."))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Digital Filter"),(0,a.kt)("td",{parentName:"tr",align:null},"When the pulse width exceeds 10 ms, which advised to enable it. It is enabled by default. ",(0,a.kt)("strong",{parentName:"td"},"Enable")," it here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reboot to clear the count"),(0,a.kt)("td",{parentName:"tr",align:null},"When a Datalogger restart occurs, the count is cleared to 0. It is disabled by default. ",(0,a.kt)("strong",{parentName:"td"},"Disable")," it here.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,a.kt)("td",{parentName:"tr",align:null},'"Y": It is the value Datalogger will upload. "x": It is the original counter value. Factory A: Custom values that can be scaled up or down by multiples of the "x". Factory B: A custom value that increments or diminishes the value of the "x". By setting the values of A and B, you can calculate the desired value. set ',(0,a.kt)("strong",{parentName:"td"},"A=0.2")," and ",(0,a.kt)("strong",{parentName:"td"},"B=0"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Unit time collection"),(0,a.kt)("td",{parentName:"tr",align:null},"Enabling this function increases upload by a value: cumulative amount per hour. For example, if the value of Y within one hour is 1000, 1000/h will be uploaded. ",(0,a.kt)("strong",{parentName:"td"},"Disable")," it here.")))),(0,a.kt)("p",null,'After the configuration information is completed, click "Back to Home" (at this time, the node and the APP Bluetooth will be automatically disconnected), and the Data Logger will try to connect to the network (the LED indicator flashes red slowly when trying to connect to the network, and flashes green quickly after the network is successfully connected);'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/30.png"})),(0,a.kt)("h1",{id:"check-data-on-the-sensecap-portal"},"Check data on the SenseCAP Portal"),(0,a.kt)("h2",{id:"bind-sensor-to-sensecap-portal"},"Bind Sensor to SenseCAP Portal"),(0,a.kt)("p",null,"Please open SenseCAP Mate App."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Scan QR Code")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'Click "Add device" on the upper-right corner of device page to enter the device binding page.'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/31.png"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the "default" group.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/32.png"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Manually fill in the EUI")),(0,a.kt)("p",null,'If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click "confirm".'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/33.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/34.png"})),(0,a.kt)("h2",{id:"check-data-on-sensecap-portal"},"Check Data on SenseCAP Portal"),(0,a.kt)("p",null,"On the SenseCAP App or the website ",(0,a.kt)("a",{parentName:"p",href:"http://sensecap.seeed.cc/"},"http://sensecap.seeed.cc/")," , you can check the device online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/35.png"})),(0,a.kt)("p",null,"Also, you can check the date on SenseCAP Mate APP."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/36.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Counter_GPIO_Sensor/1.png"})))}u.isMDXComponent=!0}}]);
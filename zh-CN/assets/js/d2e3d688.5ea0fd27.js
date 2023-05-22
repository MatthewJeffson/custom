"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||g[u]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3051:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={description:"Configure the Analog Sensor",title:"Configure the Analog Sensor",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"4/12/2023",author:"Yvonne"}},l="Getting S2100 started with Analog Input Sensor",i={unversionedId:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger",id:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger",title:"Configure the Analog Sensor",description:"Configure the Analog Sensor",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial",slug:"/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Analog_Sensor_for_S2100_Data_Logger.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1681257600,formattedLastUpdatedAt:"2023\u5e744\u670812\u65e5",frontMatter:{description:"Configure the Analog Sensor",title:"Configure the Analog Sensor",keywords:["SenseCAP data logger"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"4/12/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Configure the 12V RS485 Sensor",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_12V_RS485_Sensor_for_S2100_Data_Logger"},next:{title:"Configure the Counter & GPIO Sensor",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Data_Logger/tutorial/How_to_Configure_the_Counter&GPIO_Sensor_for_S2100_Data_Logger"}},s={},p=[{value:"Get these items ready",id:"get-these-items-ready",level:2},{value:"Disassemble the Data Logger",id:"disassemble-the-data-logger",level:2},{value:"Power supply options of sensor",id:"power-supply-options-of-sensor",level:2},{value:"Connect to the Datalogger",id:"connect-to-the-datalogger",level:2},{value:"Connect to Sensor to App",id:"connect-to-sensor-to-app",level:2},{value:"Configure Basic parameters through App",id:"configure-basic-parameters-through-app",level:2},{value:"Select the Platform and Frequency",id:"select-the-platform-and-frequency",level:3},{value:"Set the Interval",id:"set-the-interval",level:3},{value:"Set the Packet Policy",id:"set-the-packet-policy",level:3},{value:"Restore Factory Setting",id:"restore-factory-setting",level:3},{value:"Configure Analog Sensor via App",id:"configure-analog-sensor-via-app",level:2},{value:"Bind Sensor to SenseCAP Portal",id:"bind-sensor-to-sensecap-portal",level:2},{value:"Check Data on SenseCAP Mate APP",id:"check-data-on-sensecap-mate-app",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-s2100-started-with-analog-input-sensor"},"Getting S2100 started with Analog Input Sensor"),(0,r.kt)("p",null,"Let's get started on learning how to use the S2100 with an analog input sensor. Once we've got that down, we'll move on to the basics of S2100's application. This will give you a good idea of how to connect your own customized sensor in the future. "),(0,r.kt)("h2",{id:"get-these-items-ready"},"Get these items ready"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data logger"),(0,r.kt)("li",{parentName:"ul"},"Light sensor(as an example)"),(0,r.kt)("li",{parentName:"ul"},"Cross screwdriver(Cross recess No.2)"),(0,r.kt)("li",{parentName:"ul"},"SenseCAP Mate APP")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/2.png"})),(0,r.kt)("h1",{id:"connect-the-sensor-probe"},"Connect the Sensor Probe"),(0,r.kt)("p",null,"First, we need to do the wiring. Please follow the below steps."),(0,r.kt)("h2",{id:"disassemble-the-data-logger"},"Disassemble the Data Logger"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Unscrew three screws.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/3.png"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Take down the cover.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/4.png"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Remove the threaded cap and pass it through the cable of the sensor, pass it through the bottom cover, and connect it to the wiring terminal.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/12V_RS485_Sensor/5.png"})),"## Wiring terminal description",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"No.")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Pin")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"12V"),(0,r.kt)("td",{parentName:"tr",align:null},"External 12V input voltage. The Data Logger can be powered by an external 12V DC power supply. When using 12V power supply, the battery will serve as backup power supply.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"5V"),(0,r.kt)("td",{parentName:"tr",align:null},"5V output voltage, providing 5V voltage to the sensor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},"3V"),(0,r.kt)("td",{parentName:"tr",align:null},"3V output voltage, providing 3V voltage to the sensor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:null},"IO"),(0,r.kt)("td",{parentName:"tr",align:null},"Acquisition level or pulse input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"V1"),(0,r.kt)("td",{parentName:"tr",align:null},"The voltage input of 0 to 10V is collected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:null},"V2"),(0,r.kt)("td",{parentName:"tr",align:null},"The voltage input of 0 to 10V is collected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null},"A"),(0,r.kt)("td",{parentName:"tr",align:null},"RS485 A/+")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:null},"B"),(0,r.kt)("td",{parentName:"tr",align:null},"RS485 B/-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"9"),(0,r.kt)("td",{parentName:"tr",align:null},"I1"),(0,r.kt)("td",{parentName:"tr",align:null},"Collect the current input from 4 to 20mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"I2"),(0,r.kt)("td",{parentName:"tr",align:null},"Collect the current input from 4 to 20mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"11"),(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground pin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"12"),(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Ground pin")))),(0,r.kt)("h2",{id:"power-supply-options-of-sensor"},"Power supply options of sensor"),(0,r.kt)("p",null,"Data Logger supports two power supply modes, we choose the Built-in Battery mode since light sensor only needs a 5v supply:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Mode")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Built-in Battery"),(0,r.kt)("td",{parentName:"tr",align:null},"The Data Logger and sensors are powered by batteries. In this case, the Data Logger can be connected to a 5V sensor.")))),(0,r.kt)("h2",{id:"connect-to-the-datalogger"},"Connect to the Datalogger"),(0,r.kt)("p",null,"Wire sequence of Datalogger:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Wire Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Red Wire"),(0,r.kt)("td",{parentName:"tr",align:null},"5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Black Wire"),(0,r.kt)("td",{parentName:"tr",align:null},"GND(Any port would be OK.)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Yellow Wire"),(0,r.kt)("td",{parentName:"tr",align:null},"IO")))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Pass the 8-pin wire through the bottom cover and connect it to the base of the Data Logger according to the wire sequence requirements;")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/6.png"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Connect the upper cover, rubber ring and screw cap in sequence")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/7.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/8.png"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Tighten the screws and screw caps**")," to check the waterproofing**. If the wire diameter is too thin, add waterproof tape for winding.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/9.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/10.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*","Note:")," When assembling the device, it is necessary to install the waterproof pad of the Data Logger and the adapter box, and tighten the screw cap and screw, otherwise the waterproof effect of the device may be affected!"),(0,r.kt)("p",null,"If the wire diameter is too small, it can be wrapped with waterproof tape, as shown below:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/11.png"})),(0,r.kt)("p",null,"We've finished the wiring at this point. Now, let's set up the S2100 and configure it on our APP."),(0,r.kt)("h1",{id:"setup-the-s2100"},"Setup the S2100"),(0,r.kt)("h2",{id:"connect-to-sensor-to-app"},"Connect to Sensor to App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Press button and hold for ",(0,r.kt)("strong",{parentName:"li"},"3 seconds")," , the LED will flash at 1s frequency. Please use the App to connect the sensor within 1 minute; otherwise, the device will power off or reboot.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/12.png"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},'Please select "S2100 Data Logger".')),(0,r.kt)("p",null,'Please click the "Setup" button to turn on Bluetooth and click "Scan" to start scanning the sensor\'s Bluetooth.'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/13.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/14.png"})),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Select the Sensor by S/N (S/N is on the front label of the sensor). Then, the basic information of the sensor will be displayed after entering.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/15.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/16.png"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Enter configuration mode after Bluetooth connection is successful: LED flashes at 2s frequency.")),(0,r.kt)("h2",{id:"configure-basic-parameters-through-app"},"Configure Basic parameters through App"),(0,r.kt)("h3",{id:"select-the-platform-and-frequency"},"Select the Platform and Frequency"),(0,r.kt)("p",null,"S210x Sensors are manufactured to support universal frequency plan from 863MHz ~928MHz in one SKU. That is to say, every single device can support 7 frequency plans."),(0,r.kt)("p",null,'Here we select the "SenseCAP for Helium" or "SenseCAP for TTN". The Frequency Plan based on your actual situation.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*","Note:")," Data Logger can upload data when there is a Helium network around the user. It runs on SenseCAP private Helium Console. Users do not need to create a device on the Helium Console;"),(0,r.kt)("p",null,"SenseCAP for TTN platform needs to be used with SenseCAP LoRaWAN outdoor gateway(",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html"},"https://www.seeedstudio.com/LoRaWAN-Gateway-EU868-p-4305.html"),")"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/17.png"})),(0,r.kt)("h3",{id:"set-the-interval"},"Set the Interval"),(0,r.kt)("p",null,"The working mode of device: wake up the device every interval and collect measurement values and upload them through LoRa."),(0,r.kt)("p",null,"For example, the device collects and uploads data ",(0,r.kt)("strong",{parentName:"p"},"every 60 minutes by default"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/18.png"})),(0,r.kt)("h3",{id:"set-the-packet-policy"},"Set the Packet Policy"),(0,r.kt)("p",null,"The sensor uplink packet strategy has three modes, we select 1N here or you can according to your own requirement."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/19.png"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Parameter")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2C+1N (default)"),(0,r.kt)("td",{parentName:"tr",align:null},"2C+1N (2 confirm packets and 1 none-confirm) is the best strategy, the mode can minimize the packet loss rate, however the device will consume the most data packet in TTN, or date credits in Helium network.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1C"),(0,r.kt)("td",{parentName:"tr",align:null},"1C (1 confirm) the device will sleep after get 1 received confirm packet from server.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1N"),(0,r.kt)("td",{parentName:"tr",align:null},"1N (1 none-confirm) the device only send packet and then start to sleep, no matter the server received the data or not.")))),(0,r.kt)("h3",{id:"restore-factory-setting"},"Restore Factory Setting"),(0,r.kt)("p",null,"When selecting the SenseCAP platform, you must use the fixed EUI/App EUI/App Key. Therefore, you need to restore the factory Settings before switching back to the SenseCAP platform from other platforms."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/20.png"})),(0,r.kt)("p",null,"When we make a mistake or want to reset everything, we can click the button. The device will be restored to the factory's default configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"*","Note:"),' The "Restore Factory" function can only reset the Basic Setting.'),(0,r.kt)("h2",{id:"configure-analog-sensor-via-app"},"Configure Analog Sensor via App"),(0,r.kt)("p",null,"Select the \u201cProtocol\u201d as \u201cAnalog Input\u201d. Then set the following parameters in turn."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/21.png"})),(0,r.kt)("p",null,"Select the Power Type as ",(0,r.kt)("strong",{parentName:"p"},"Periodical power"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Power Voltage"),(0,r.kt)("th",{parentName:"tr",align:null},"We select ",(0,r.kt)("strong",{parentName:"th"},"5V")," here."))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sensor Warm-up Time"),(0,r.kt)("td",{parentName:"tr",align:null},"The warm-up time denotes the amount of time it takes for the sensor to attain its highest accuracy or performance level once the voltage supply has been applied. We enter ",(0,r.kt)("strong",{parentName:"td"},"200(ms)")," here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Voltage Range"),(0,r.kt)("td",{parentName:"tr",align:null},"0-10V (The Data Logger can collect voltage signals within 0~10V and automatically adjust the upper limit to increase accuracy). We select ",(0,r.kt)("strong",{parentName:"td"},"Voltage")," here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface V1"),(0,r.kt)("td",{parentName:"tr",align:null},"The Data Logger supports two analog voltage signals. When the sensor wire is connected to V1/V2, the configuration can be enabled. We enable ",(0,r.kt)("strong",{parentName:"td"},"Interface V1")," here.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface V2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Y= Ax + B"),(0,r.kt)("td",{parentName:"tr",align:null},'"Y": It is the value Data Logger will upload. "x": It is the original current value. Factory A: Custom values that can be scaled up or down by multiples of the "x". Factory B: A custom value that increments or diminishes the value of the "x". By setting the values of A and B, you can calculate the desired value. We set A as ',(0,r.kt)("strong",{parentName:"td"},"100")," , B as ",(0,r.kt)("strong",{parentName:"td"},"0")," here.")))),(0,r.kt)("p",null,'After the configuration information is completed, click "Back to Home" (at this time, the node and the APP Bluetooth will be automatically disconnected), and the Data Logger will try to connect to the network (the LED indicator flashes red slowly when trying to connect to the network, and flashes green quickly after the network is successfully connected);'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/22.png"})),(0,r.kt)("h1",{id:"check-data-on-the-sensecap-portal"},"Check data on the SenseCAP Portal"),(0,r.kt)("h2",{id:"bind-sensor-to-sensecap-portal"},"Bind Sensor to SenseCAP Portal"),(0,r.kt)("p",null,"Please open SenseCAP Mate App."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Scan QR Code"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click "Add device" on the upper-right corner of device page to enter the device binding page.'))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/23.png"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'Scan the QR code on the device to bind the device to your account. If you do not set it to a designated group, the device will be put into the "default" group.')),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/24.png"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Manually fill in the EUI"))),(0,r.kt)("p",null,'If the QR code sticker is damaged, you can manually fill in the EUI of the device to bind the device to your account. Please make sure you put in the EUI in the format suggested by the system and then click "confirm".'),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/25.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/26.png"})),(0,r.kt)("h2",{id:"check-data-on-sensecap-mate-app"},"Check Data on SenseCAP Mate APP"),(0,r.kt)("p",null,"Finally, On the SenseCAP App or the website ",(0,r.kt)("a",{parentName:"p",href:"http://sensecap.seeed.cc/"},"http://sensecap.seeed.cc/")," , you can check the device online status and the latest data. In the list for each Sensor, you can check its online status and the time of its last data upload."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/27.png"})),(0,r.kt)("p",null,"Also, you can check the date on SenseCAP Mate APP."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/28.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/SenseCAP-S2110/Analog_Sensor/1.png"})))}c.isMDXComponent=!0}}]);
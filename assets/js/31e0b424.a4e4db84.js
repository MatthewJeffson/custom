"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(k,i(i({ref:t},p),{},{components:n})):o.createElement(k,i({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const r={description:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",title:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_Azure_IoT_Central",last_update:{date:"1/12/2023",author:"shuxu hu"}},i="Connecting SenseCAP to Azure IoT Central via Node-RED",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_Azure_IoT_Central",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_Azure_IoT_Central",title:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",description:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_Azure_IoT_Central.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_SenseCAP_to_Azure_IoT_Central",permalink:"/K1100_SenseCAP_to_Azure_IoT_Central",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_Azure_IoT_Central.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673452800,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",title:"SenseCAP & Node-RED to Microsoft Azure IoT Centra",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_Azure_IoT_Central",last_update:{date:"1/12/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP & Node-RED Usage",permalink:"/K1100_sensecap_node-red"},next:{title:"SenseCAP & Node-RED to Power BI",permalink:"/K1100_SenseCAP_to_PowerBI"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Microsoft Azure IoT",id:"microsoft-azure-iot",level:2},{value:"Microsoft Azure IoT Central",id:"microsoft-azure-iot-central",level:2},{value:"Install the SenseCraft",id:"install-the-sensecraft",level:2},{value:"Create MQTT Node",id:"create-mqtt-node",level:2},{value:"Configure Microsoft Azure IoT Central",id:"configure-microsoft-azure-iot-central",level:2},{value:"Configure Node-RED",id:"configure-node-red",level:2},{value:"Data Presentation",id:"data-presentation",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"connecting-sensecap-to-azure-iot-central-via-node-red"},"Connecting SenseCAP to Azure IoT Central via Node-RED"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,a.kt)("font",{color:"white",size:4},(0,a.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,a.kt)("strong",null,"S2100 ",(0,a.kt)("br",null)," Data Logger"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,a.kt)("strong",null,"S2101 ",(0,a.kt)("br",null)," Air Temp & Humidity"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,a.kt)("strong",null,"S2102 ",(0,a.kt)("br",null)," Light"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,a.kt)("strong",null,"S2103 ",(0,a.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,a.kt)("td",{bgcolor:"#0e3c49"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,a.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,a.kt)("tr",null,(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,a.kt)("strong",null,"S2104 ",(0,a.kt)("br",null)," Soil Moisture & Temp"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,a.kt)("strong",null,"S2105 ",(0,a.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,a.kt)("strong",null,"S2110 ",(0,a.kt)("br",null)," LoRaWAN\xae Controller"))),(0,a.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,a.kt)("strong",null,"S2120 ",(0,a.kt)("br",null)," 8-in-1 Weather Station")))))),(0,a.kt)("h2",{id:"microsoft-azure-iot"},"Microsoft Azure IoT"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/overview/iot"},"Microsoft Azure IoT")," is a collection of Microsoft-managed cloud services that connect, monitor, and control billions of IoT assets. It includes security and operating systems for devices and equipment, along with data and analytics that help businesses to build, deploy and manage IoT applications."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Azure_IoTc_WT/Azure_IoT.png",alt:"pir",width:1200,height:"auto"})),(0,a.kt)("h2",{id:"microsoft-azure-iot-central"},"Microsoft Azure IoT Central"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/iot-central"},"Microsoft Azure IoT Central")," is a fully managed global IoT SaaS (software as a service) solution that makes it easy to connect, monitor and manage your IoT assets at scale. It is highly secure, scales with your business as it grows, ensures that your investments are repeatable and integrates with your existing business apps. It also bridges the gap between your business applications and IoT data. Finally it offers centralized management to reconfigure and update your devices."),(0,a.kt)("p",null,"The content of this chapter will continue to use the Node-RED introduced earlier and facilitate the management of the K1100 kit in Microsoft Azure IoT Central through the use of Node-RED."),(0,a.kt)("p",null,"If you haven't installed or don't know what Node-RED is, please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/"},"Node-RED & SenseCAP Tutorials"),"."),(0,a.kt)("h2",{id:"install-the-sensecraft"},"Install the SenseCraft"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SenseCraft")," is an open source software platform to build smart sensors with no-code. It delivers a complete out-of-the-box solution to sense the real-world, process data and send the data to the cloud in the easiest and fastest way possible with no coding experience at all! It is now compatible with Wio Terminal."),(0,a.kt)("p",null,"By using the SenseCraft, we can transfer sensor values from the K1100 kit directly to the SenseCAP platform without programming. This is, of course, achieved via ",(0,a.kt)("strong",{parentName:"p"},"LoRaWAN"),"\xae."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to access Azure IoT Central via ",(0,a.kt)("strong",{parentName:"p"},"WiFi (MQTT)"),", please refer to this ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connect-Wio-Terminal-to-Azure-IoT-Central/"},"Wiki"),".")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download the firmware to your computer"),(0,a.kt)("p",null,"Under the ",(0,a.kt)("strong",{parentName:"p"},"Latest release"),", click on ",(0,a.kt)("strong",{parentName:"p"},"SenseCraft-vx.x.uf2")," to download the .uf2 file."),(0,a.kt)("div",null,(0,a.kt)("p",{style:{}},(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/SenseCraft/releases",target:"_blank"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://github.com/Seeed-Studio/SenseCraft/releases",target:"_blank"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,a.kt)("p",null)),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Upload the firmware to Wio Terminal"),(0,a.kt)("p",null,"Connect the Wio Terminal to PC and turn in ON, Enter ",(0,a.kt)("strong",{parentName:"p"},"Bootloader Mode"),' by sliding down the power switch further away from "ON" position, release, slide again and release.'),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png",alt:"pir",width:500,height:"auto"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once Wio Terminal is in the Bootloader mode, the blue LED will start to breathe in a way that is different from blinking.")),(0,a.kt)("p",null,"Open File Explorer on your PC and you will see a new external drive, named ",(0,a.kt)("strong",{parentName:"p"},"Arduino"),", drag the previously downloaded ",(0,a.kt)("strong",{parentName:"p"},".uf2 file")," into this ",(0,a.kt)("strong",{parentName:"p"},"Arduino drive"),"."),(0,a.kt)("p",null,"Now we have successfully uploaded the SenseCraft into the Wio Terminal."),(0,a.kt)("h2",{id:"create-mqtt-node"},"Create MQTT Node"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Start Node-RED"),(0,a.kt)("p",null,"Start Node-RED by typing the command ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red")," in the terminal and open a browser and enter the address ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"http://localhost:1880"},"http://localhost:1880"))," in the address bar to access the editor of Node-RED."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Create MQTT Node"),(0,a.kt)("p",null,"We use ",(0,a.kt)("strong",{parentName:"p"},"Network -> mqtt in")," node and configure mqtt in the format of the SenseCAP API as requested in the ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node"},"previous tutorial"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Server: openstream.api.sensecap.seeed.cc")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Port: 1883")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Protocol: MQTT V3.1.1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Client ID: The format is ",(0,a.kt)("inlineCode",{parentName:"p"},"org-<Organization ID>-<Random ID>")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,a.kt)("a",{parentName:"p",href:"/K1100_sensecap_node-red#get-the-sensecap-api"},"Get the SenseCAP API"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Topic Format: ",(0,a.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")))),(0,a.kt)("table",{align:"center"},(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"OrgID"),(0,a.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the Get the SenseCAP API.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"DevEUI"),(0,a.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Channel"),(0,a.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"Reserved"),(0,a.kt)("td",{align:"center"},"Reserved Fields.")),(0,a.kt)("tr",null,(0,a.kt)("td",{align:"center"},"MeasurementID"),(0,a.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,a.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Validate MQTT nodes"),(0,a.kt)("p",null,"Once configured, please click the ",(0,a.kt)("strong",{parentName:"p"},"Deploy")," button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word ",(0,a.kt)("strong",{parentName:"p"},"Connected")," will be displayed."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png"})),(0,a.kt)("h2",{id:"configure-microsoft-azure-iot-central"},"Configure Microsoft Azure IoT Central"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Log in to Azure IoT Central."),(0,a.kt)("p",null,"Please go to the official ",(0,a.kt)("a",{parentName:"p",href:"https://apps.azureiotcentral.com/home"},"Azure IoT Central")," website, click ",(0,a.kt)("strong",{parentName:"p"},"Build")," from the navigation menu on the left, and click ",(0,a.kt)("strong",{parentName:"p"},"Custom apps"),"."),(0,a.kt)("p",null,"If you are not already logged into Azure IoT Central, you will be asked to complete a registration/login at this point."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/1.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Fill in ",(0,a.kt)("strong",{parentName:"p"},"Application name")," and choose ",(0,a.kt)("strong",{parentName:"p"},"Standard 0")," under the ",(0,a.kt)("strong",{parentName:"p"},"Pricing plan"),". Application URL will be created automatically when you fill in application name. In this example, we will accomplish this task at minimal cost."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/2.png"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you are a new user of Azure IoT Central, we recommend that you select ",(0,a.kt)("strong",{parentName:"p"},"Free")," as this will not consume your fees.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<div align="center"><img width={500} src="https://files.seeedstudio.com/wiki/k1100_azure_central/9.png" /></div>\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Click ",(0,a.kt)("strong",{parentName:"p"},"Create")," to create the new application. Now you have successfully set up Azure IoT Central!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/3.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Create a Device template"),(0,a.kt)("p",null,"Please create a new device template by clicking on ",(0,a.kt)("strong",{parentName:"p"},"Device templates")," in the left-hand menu bar."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/2.png"})),(0,a.kt)("p",null,"Please select ",(0,a.kt)("strong",{parentName:"p"},"Wio Terminal")," as our template."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/3.png"})),(0,a.kt)("p",null,"Then just click on ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/4.png"})),(0,a.kt)("p",null,"Then, a ready-made template is created."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/5.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Create a Device"),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Devices -> Seeed Wio Terminal")," under the left menu bar."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/6.png"})),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"New"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/7.png"})),(0,a.kt)("p",null,"Click on the ",(0,a.kt)("strong",{parentName:"p"},"Create")," button to complete the creation of the device."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/8.png"})),(0,a.kt)("p",null,"Once you have created the device, you will see the device we have just created under ",(0,a.kt)("strong",{parentName:"p"},"Device"),", please tap into the device and click on the ",(0,a.kt)("strong",{parentName:"p"},"Connect")," button in the top left corner."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/9.png"})),(0,a.kt)("p",null,"Here we need the information there."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ID scope\nDevice ID\nPrimary key\n")),(0,a.kt)("p",null,"Please make a note of this information, which we will use in the next steps."),(0,a.kt)("h2",{id:"configure-node-red"},"Configure Node-RED"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Download Azure IoT Paletts"),(0,a.kt)("p",null,"Click on the upper-right menu bar and select Settings."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png"})),(0,a.kt)("p",null,"Search and install ",(0,a.kt)("strong",{parentName:"p"},"node-red-contrib-azure-iot-central")," in the ",(0,a.kt)("strong",{parentName:"p"},"Paletts -> Install"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/12.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Configure the Azure Iot Central node"),(0,a.kt)("p",null,"Drag out the Azure Iot Central\xa0node from the function bar on the left, double-click it to enter the configuration page, then click the edit button to edit Azure Iot Central node."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/14.png"})),(0,a.kt)("p",null,"The configuration is required to be filled out as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Transport: MQTT"),(0,a.kt)("li",{parentName:"ul"},"Authentication: SAS"),(0,a.kt)("li",{parentName:"ul"},"Scope ID"),(0,a.kt)("li",{parentName:"ul"},"Device ID"),(0,a.kt)("li",{parentName:"ul"},"Primary Key")),(0,a.kt)("p",null,"The last three are exactly what we get in ",(0,a.kt)("strong",{parentName:"p"},"Configure Microsoft Azure IoT Central"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/15.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Configure the function node"),(0,a.kt)("p",null,"Data reporting to Azure Iot Central needs to follow a specific data format, so it's necessary to add a function node to process the data format."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/16.png"})),(0,a.kt)("p",null,"Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    var payload = msg.payload;\n    var topic = msg.topic;\n    var strs = topic.split("/");\n    var length = strs.length\n    if(length>=2){\n        var measurementId = strs[length-1]\n        var body = {}\n        var value = payload.value\n        if(measurementId==4100){\n            body.co2 = value\n        }else if(measurementId==4103){\n            body.soilmoisture= value\n        }else if(measurementId==4150){\n            body.accelX= value\n        }else if(measurementId==4151){\n            body.accelY = value\n        }else if(measurementId==4152){\n            body.accelZ = value\n        }else if(measurementId==4192){\n            body.soundintensity = value\n        }else if(measurementId==4193){\n            body.lightIntensity = value\n        }else if(measurementId==4195){\n            body.tvoc = value\n        }else if(measurementId==4097){\n            body.airtemperature = value\n        }else if(measurementId==4098){\n            body.airhumidity = value\n        }else if(measurementId==4175){\n            body.AIdetection_1 = value\n        }else if(measurementId==4176){\n            body.AIdetection_2 = value\n        }else if(measurementId==4177){\n            body.AIdetection_3 = value\n        }else if(measurementId==4178){\n            body.AIdetection_4 = value\n        }else if(measurementId==4179){\n            body.AIdetection_5 = value\n        }else if(measurementId==4180){\n            body.AIdetection_6 = value\n        }else if(measurementId==4181){\n            body.AIdetection_7 = value\n        }else if(measurementId==4182){\n            body.AIdetection_8 = value\n        }else if(measurementId==4183){\n            body.AIdetection_9 = value\n        }else if(measurementId==4184){\n            body.AIdetection_10 = value\n        }\n        msg.payload = body;\n    }\n    return msg;\n}\n')),(0,a.kt)("p",null,"Then we connect all the nodes and click on the\xa0",(0,a.kt)("strong",{parentName:"p"},"Deploy"),"\xa0button and if everything is set up correctly you will be able to see the\xa0mqtt in\xa0node showing connected."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/18.png"})),(0,a.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/19.png"})),(0,a.kt)("p",null,"Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Azure Iot Central."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/21.png"})),(0,a.kt)("h2",{id:"data-presentation"},"Data Presentation"),(0,a.kt)("p",null,"However, as we have not set the type of the sensor, the data visible in the ",(0,a.kt)("strong",{parentName:"p"},"Raw data")," column are placed in ",(0,a.kt)("strong",{parentName:"p"},"Unmodeled data"),", so we need to parse the data according to the code above."),(0,a.kt)("p",null,"We need to change the template style displayed in the ",(0,a.kt)("strong",{parentName:"p"},"template"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/26.png"})),(0,a.kt)("p",null,"Once you have made your changes, please just click on ",(0,a.kt)("strong",{parentName:"p"},"Save")," and then click on ",(0,a.kt)("strong",{parentName:"p"},"Publish"),". All changes in the ",(0,a.kt)("strong",{parentName:"p"},"Device template")," will need to be saved and Publish following this procedure before they will take effect."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Please fill in the ",(0,a.kt)("strong",{parentName:"p"},"Display name")," here according to the name of the JavaScript code provided above.")),(0,a.kt)("p",null,"Of course, if you want to enrich your data dashboard page, you can also configure it to be displayed in Overview."),(0,a.kt)("p",null,"Click on ",(0,a.kt)("strong",{parentName:"p"},"Overview")," on the left navigation menu."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_azure_central/16.png"})),(0,a.kt)("p",null,"Collapse ",(0,a.kt)("strong",{parentName:"p"},"select a telemetry")," drop-down menu and select the telemetry that you want to visualize."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100-quick-start/70.png"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Add tile")," and you will see the tile added into the Azure IoT Central Dashboard."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/23.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You can resize or change the visualization of the tiles according to your preference"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/24.png"})),(0,a.kt)("p",null,"So next, customise your sensor data monitoring dashboard to your liking!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/25.png"})),(0,a.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Q1: Why can't I find the Palette in Node-RED?")),(0,a.kt)("p",null,"A: If you cannot find the Palette in the settings, check your terminal for an error message when you start Node-RED."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png"})),(0,a.kt)("p",null,"The most common scenario is that your npm version is too old to start the Palette editor."),(0,a.kt)("p",null,"If your situation is as described above, run ",(0,a.kt)("strong",{parentName:"p"},"Powershell as administrator")," and enter the following command to upgrade npm."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g npm\n")),(0,a.kt)("p",null,"Then just restart Node-RED."),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
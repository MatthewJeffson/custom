"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),k=o,m=p["".concat(l,".").concat(k)]||p[k]||u[k]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},80656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),o=(n(67294),n(3905));const i={description:"SenseCAP & Node-RED to Datacake",title:"SenseCAP & Node-RED to Datacake",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_datacake",last_update:{date:"1/13/2023",author:"shuxu hu"}},r="Connecting SenseCAP to Datacake via Node-RED",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_datacake",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_datacake",title:"SenseCAP & Node-RED to Datacake",description:"SenseCAP & Node-RED to Datacake",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_datacake.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_SenseCAP_to_datacake",permalink:"/custom/K1100_SenseCAP_to_datacake",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_datacake.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"SenseCAP & Node-RED to Datacake",title:"SenseCAP & Node-RED to Datacake",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_datacake",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP & Node-RED to Twilio",permalink:"/custom/K1100_SenseCAP_to_twilio"},next:{title:"SenseCAP & Node-RED to Grafana",permalink:"/custom/K1100_SenseCAP_to_grafana"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Datacake",id:"datacake",level:2},{value:"Create MQTT Node",id:"create-mqtt-node",level:2},{value:"Configure Datacake",id:"configure-datacake",level:2},{value:"Configure Node-RED",id:"configure-node-red",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connecting-sensecap-to-datacake-via-node-red"},"Connecting SenseCAP to Datacake via Node-RED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,o.kt)("font",{color:"white",size:4},(0,o.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,o.kt)("strong",null,"S2100 ",(0,o.kt)("br",null)," Data Logger"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,o.kt)("strong",null,"S2101 ",(0,o.kt)("br",null)," Air Temp & Humidity"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,o.kt)("strong",null,"S2102 ",(0,o.kt)("br",null)," Light"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,o.kt)("strong",null,"S2103 ",(0,o.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,o.kt)("td",{bgcolor:"#0e3c49"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,o.kt)("tr",null,(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,o.kt)("strong",null,"S2104 ",(0,o.kt)("br",null)," Soil Moisture & Temp"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,o.kt)("strong",null,"S2105 ",(0,o.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,o.kt)("strong",null,"S2110 ",(0,o.kt)("br",null)," LoRaWAN\xae Controller"))),(0,o.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,o.kt)("strong",null,"S2120 ",(0,o.kt)("br",null)," 8-in-1 Weather Station")))))),(0,o.kt)("h2",{id:"datacake"},"Datacake"),(0,o.kt)("p",null,"Datacake is a multi-purpose, low-code IoT platform that requires no programming skills and minimal time to create custom IoT applications."),(0,o.kt)("p",null,"The content of this chapter will continue to use the Node-RED introduced earlier and facilitate the management of the K1100 kit in Datacake through the use of Node-RED."),(0,o.kt)("p",null,"If you haven't installed or don't know what Node-RED is, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/"},"Node-RED & SenseCAP Tutorials"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/1.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"create-mqtt-node"},"Create MQTT Node"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Start Node-RED"),(0,o.kt)("p",null,"Start Node-RED by typing the command ",(0,o.kt)("inlineCode",{parentName:"p"},"node-red")," in the terminal and open a browser and enter the address ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://localhost:1880"},"http://localhost:1880"))," in the address bar to access the editor of Node-RED."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Create MQTT Node"),(0,o.kt)("p",null,"We use ",(0,o.kt)("strong",{parentName:"p"},"Network -> mqtt in")," node and configure mqtt in the format of the SenseCAP API as requested in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node"},"previous tutorial"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Server: openstream.api.sensecap.seeed.cc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Port: 1883")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Protocol: MQTT V3.1.1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Client ID: The format is ",(0,o.kt)("inlineCode",{parentName:"p"},"org-<Organization ID>-<Random ID>")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,o.kt)("a",{parentName:"li",href:"/K1100_sensecap_node-red#get-the-sensecap-api"},"Get the SenseCAP API"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Topic Format: ",(0,o.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")))),(0,o.kt)("table",{align:"center"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"OrgID"),(0,o.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the Get the SenseCAP API.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"DevEUI"),(0,o.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Channel"),(0,o.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"Reserved"),(0,o.kt)("td",{align:"center"},"Reserved Fields.")),(0,o.kt)("tr",null,(0,o.kt)("td",{align:"center"},"MeasurementID"),(0,o.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,o.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Validate MQTT nodes"),(0,o.kt)("p",null,"Once configured, please click the ",(0,o.kt)("strong",{parentName:"p"},"Deploy")," button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word ",(0,o.kt)("strong",{parentName:"p"},"Connected")," will be displayed."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png"})),(0,o.kt)("h2",{id:"configure-datacake"},"Configure Datacake"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Register or login to Datacake"),(0,o.kt)("p",null,"If you have already registered with Datacake, then please login on the ",(0,o.kt)("a",{parentName:"p",href:"https://datacake.co/"},"Datacake website"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/3.png"})),(0,o.kt)("p",null,"If you do not use or have registered with Datacake, then please complete your registration and login ",(0,o.kt)("a",{parentName:"p",href:"https://app.datacake.de/signup"},"here"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/2.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," New workspace"),(0,o.kt)("p",null,"Once you have logged into Datacake, click on your account name in the top left hand corner and select ",(0,o.kt)("strong",{parentName:"p"},"Add Workspace"),". And come up with a name for your workspace."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/8.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," New device"),(0,o.kt)("p",null,"After entering the newly created workspace, then create a new device."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/9.png"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"API"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/4.png"})),(0,o.kt)("p",null,"Select ",(0,o.kt)("strong",{parentName:"p"},"New Product"),". And name the product."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/5.png"})),(0,o.kt)("p",null,"In this section, we will choose the free option to complete."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/7.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Configure the device"),(0,o.kt)("p",null,"Click into the new device you just created and select ",(0,o.kt)("strong",{parentName:"p"},"Configuration"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/10.png"})),(0,o.kt)("p",null,'Locate "Fields" and click ',(0,o.kt)("strong",{parentName:"p"},"Add Field"),". Then enter the name of the data you want to manage in Datacake."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/11.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," Note that the IDENTIFIER fields are all uppercase, and in the function node of Node RED that is configured later, the content passed in also needs to be uppercase.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5.")," Obtain the API token"),(0,o.kt)("p",null,"Click on your account name in the top left hand corner and select ",(0,o.kt)("strong",{parentName:"p"},"Edit Profile"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/12.png"})),(0,o.kt)("p",null,"Then save the ",(0,o.kt)("strong",{parentName:"p"},"API token")," in the API, which we will use in Node RED in a moment."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/13.png"})),(0,o.kt)("h2",{id:"configure-node-red"},"Configure Node-RED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Download Datacake Paletts"),(0,o.kt)("p",null,"Click on the upper-right menu bar and select Settings."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png"})),(0,o.kt)("p",null,"Search and install ",(0,o.kt)("strong",{parentName:"p"},"node-red-contrib-datacake")," in the ",(0,o.kt)("strong",{parentName:"p"},"Paletts -> Install"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/14.png"})),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"datacake - out")," from the storage bar on the left\uff0cdouble-click it to enter the configuration page, then click the edit button to edit ",(0,o.kt)("strong",{parentName:"p"},"datacake - out")," node."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/15.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Edit ",(0,o.kt)("strong",{parentName:"p"},"datacake - out")," node"),(0,o.kt)("p",null,"Please fill in the ",(0,o.kt)("strong",{parentName:"p"},"API Token")," with the API token we obtained in the previous configuration of Datacake. Then just click the Add button in the top right corner."),(0,o.kt)("p",null,"Then select the name of the workspace we created earlier."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/16.png"})),(0,o.kt)("p",null,"The device will automatically be refreshed to the new device just created and the field drop down box will show the new field just created. If you don't want to set a field here, you can also modify the fieldName of the payload to configure the field via code."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/17.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Configure the function node"),(0,o.kt)("p",null,"Data reporting to Datacake needs to follow a specific data format, so it's necessary to add a function node to process the data format."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/18.png"})),(0,o.kt)("p",null,"Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    var payload = msg.payload;\n    var topic = msg.topic;\n    var strs = topic.split("/");\n    var length = strs.length\n    if (length >= 2) {\n        var measurementId = strs[length - 1]\n        msg.payload = payload.value\n        if (measurementId == 4150) {\n            msg.fieldName = "ACCELX"\n        } else if (measurementId == 4151) {\n            msg.fieldName = "ACCELY"\n        } else if (measurementId == 4152) {\n            msg.fieldName = "ACCELZ"\n        } else if (measurementId == 4192) {\n            msg.fieldName = "VOLUME"\n        } else if (measurementId == 4193) {\n            msg.fieldName = "LIGHTINTENSITY"\n        } else if (measurementId == 4103) {\n            msg.fieldName = "SOILMOISTURE"\n        } else if (measurementId == 4195) {\n            msg.fieldName = "TVOC"\n        } else if (measurementId == 4100) {\n            msg.fieldName = "CO2"\n        } else if (measurementId == 4097) {\n            msg.fieldName = "AIRTEMPERATURE"\n        } else if (measurementId == 4098) {\n            msg.fieldName = "AIRHUMIDITY"\n        } else if (measurementId == 4175) {\n            msg.fieldName = "AIDETECTION1"\n        } else if (measurementId == 4176) {\n            msg.fieldName = "AIDETECTION2"\n        } else if (measurementId == 4177) {\n            msg.fieldName = "AIDETECTION3"\n        } else if (measurementId == 4178) {\n            msg.fieldName = "AIDETECTION4"\n        } else if (measurementId == 4179) {\n            msg.fieldName = "AIDETECTION5"\n        } else if (measurementId == 4180) {\n            msg.fieldName = "AIDETECTION6"\n        } else if (measurementId == 4181) {\n            msg.fieldName = "AIDETECTION7"\n        } else if (measurementId == 4182) {\n            msg.fieldName = "AIDETECTION8"\n        } else if (measurementId == 4183) {\n            msg.fieldName = "AIDETECTION9"\n        } else if (measurementId == 4184) {\n            msg.fieldName = "AIDETECTION10"\n        }\n    }\n    return msg;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Deploy"),(0,o.kt)("p",null,"Then we connect all the nodes and click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"Deploy"),"\xa0button and if everything is set up correctly you will be able to see the\xa0mqtt in\xa0node showing connected."),(0,o.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/18.png"})),(0,o.kt)("p",null,"Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/19.png"})),(0,o.kt)("p",null,"Back in the Datacake dashboard, you can see all the data information in the ",(0,o.kt)("strong",{parentName:"p"},"History")," section of this device."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_datacake/20.png"})),(0,o.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Q1: Why can't I find the Palette in Node-RED?")),(0,o.kt)("p",null,"A: If you cannot find the Palette in the settings, check your terminal for an error message when you start Node-RED."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png"})),(0,o.kt)("p",null,"The most common scenario is that your npm version is too old to start the Palette editor."),(0,o.kt)("p",null,"If your situation is as described above, run ",(0,o.kt)("strong",{parentName:"p"},"Powershell as administrator")," and enter the following command to upgrade npm."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g npm\n")),(0,o.kt)("p",null,"Then just restart Node-RED."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
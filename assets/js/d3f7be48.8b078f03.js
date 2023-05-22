"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28900],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,k=c["".concat(l,".").concat(m)]||c[m]||p[m]||a;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84119:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={description:"SenseCAP & Node-RED to InfluxDB",title:"SenseCAP & Node-RED to InfluxDB",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_influxdb",last_update:{date:"1/13/2023",author:"shuxu hu"}},r="Connecting SenseCAP to InfluxDB via Node-RED",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_influxdb",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_influxdb",title:"SenseCAP & Node-RED to InfluxDB",description:"SenseCAP & Node-RED to InfluxDB",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_influxdb.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_SenseCAP_to_influxdb",permalink:"/custom/K1100_SenseCAP_to_influxdb",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_influxdb.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"SenseCAP & Node-RED to InfluxDB",title:"SenseCAP & Node-RED to InfluxDB",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_influxdb",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP & Node-RED to Power BI",permalink:"/custom/K1100_SenseCAP_to_PowerBI"},next:{title:"SenseCAP & Node-RED to Twilio",permalink:"/custom/K1100_SenseCAP_to_twilio"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"About InfluxDB",id:"about-influxdb",level:2},{value:"Create MQTT Node",id:"create-mqtt-node",level:2},{value:"Configure InfluxDB",id:"configure-influxdb",level:2},{value:"Configure Node-RED",id:"configure-node-red",level:2},{value:"Configure InfluxDB visual dashboards",id:"configure-influxdb-visual-dashboards",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connecting-sensecap-to-influxdb-via-node-red"},"Connecting SenseCAP to InfluxDB via Node-RED"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,i.kt)("p",null,"With the SenseCAP ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,i.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,i.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,i.kt)("font",{color:"white",size:4},(0,i.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.kt)("strong",null,"S2100 ",(0,i.kt)("br",null)," Data Logger"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.kt)("strong",null,"S2101 ",(0,i.kt)("br",null)," Air Temp & Humidity"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.kt)("strong",null,"S2102 ",(0,i.kt)("br",null)," Light"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.kt)("strong",null,"S2103 ",(0,i.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.kt)("strong",null,"S2104 ",(0,i.kt)("br",null)," Soil Moisture & Temp"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.kt)("strong",null,"S2105 ",(0,i.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.kt)("strong",null,"S2110 ",(0,i.kt)("br",null)," LoRaWAN\xae Controller"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.kt)("strong",null,"S2120 ",(0,i.kt)("br",null)," 8-in-1 Weather Station")))))),(0,i.kt)("h2",{id:"about-influxdb"},"About InfluxDB"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"InfluxDB")," is an open source time series database, focusing on high-performance reading, high-performance writing, efficient storage and real-time analysis of massive time series data. In addition to native protocols such as HTTP and UDP, it is also compatible with communication protocols of components such as CollectD, Graphite, OpenTSDB, and Prometheus. Widely used in DevOps monitoring, IoT monitoring, real-time analysis and other scenarios."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/1.png"})),(0,i.kt)("p",null,"The content of this chapter will continue to use the Node-RED introduced earlier and facilitate the management of the K1100 kit in InfluxDB through the use of Node-RED."),(0,i.kt)("p",null,"If you haven't installed or don't know what Node-RED is, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/"},"Node-RED & SenseCAP Tutorials"),"."),(0,i.kt)("h2",{id:"create-mqtt-node"},"Create MQTT Node"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Start Node-RED"),(0,i.kt)("p",null,"Start Node-RED by typing the command ",(0,i.kt)("inlineCode",{parentName:"p"},"node-red")," in the terminal and open a browser and enter the address ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"http://localhost:1880"},"http://localhost:1880"))," in the address bar to access the editor of Node-RED."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Create MQTT Node"),(0,i.kt)("p",null,"We use ",(0,i.kt)("strong",{parentName:"p"},"Network -> mqtt in")," node and configure mqtt in the format of the SenseCAP API as requested in the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node"},"previous tutorial"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Server: openstream.api.sensecap.seeed.cc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Port: 1883")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Protocol: MQTT V3.1.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Client ID: The format is ",(0,i.kt)("inlineCode",{parentName:"p"},"org-<Organization ID>-<Random ID>")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,i.kt)("a",{parentName:"li",href:"/K1100_sensecap_node-red#get-the-sensecap-api"},"Get the SenseCAP API"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Topic Format: ",(0,i.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")))),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"OrgID"),(0,i.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the Get the SenseCAP API.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"DevEUI"),(0,i.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"Channel"),(0,i.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"Reserved"),(0,i.kt)("td",{align:"center"},"Reserved Fields.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"MeasurementID"),(0,i.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,i.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Validate MQTT nodes"),(0,i.kt)("p",null,"Once configured, please click the ",(0,i.kt)("strong",{parentName:"p"},"Deploy")," button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word ",(0,i.kt)("strong",{parentName:"p"},"Connected")," will be displayed."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png"})),(0,i.kt)("h2",{id:"configure-influxdb"},"Configure InfluxDB"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Register or login to InfluxDB"),(0,i.kt)("p",null,"If you have already registered with InfluxDB, then please login on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InfluxDB website"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/2.png"})),(0,i.kt)("p",null,"If you do not use or have registered with InfluxDB, then please complete your registration and login ",(0,i.kt)("a",{parentName:"p",href:"https://cloud2.influxdata.com/signup"},"here"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/3.png"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"When registering, a page may pop up asking you to choose the provider, you can choose according to your preference, or just pick one.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/4.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Obtain API Token"),(0,i.kt)("p",null,"As shown below, please click on ",(0,i.kt)("strong",{parentName:"p"},"Bucket"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/5.png"})),(0,i.kt)("p",null,"Then click on CREATE BUCKET."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/6.png"})),(0,i.kt)("p",null,"Enter the name in the new pop-up window and select the free data retention period - 30 days."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/7.png"})),(0,i.kt)("p",null,"Then, as shown below, please click on ",(0,i.kt)("strong",{parentName:"p"},"API Tokens"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/8.png"})),(0,i.kt)("p",null,"Then we choose to create a ",(0,i.kt)("strong",{parentName:"p"},"Custom API Token"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/9.png"})),(0,i.kt)("p",null,"Give ",(0,i.kt)("strong",{parentName:"p"},"read")," and ",(0,i.kt)("strong",{parentName:"p"},"write")," permissions to the Buckets we have just created and click the Create button below."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/10.png"})),(0,i.kt)("p",null,"Once it has been created, you can save it by copying the API Token to the pasteboard. Please save it to a safe location for now, we will use it in a later step."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/11.png"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you close the window here, you will not be able to get this API Token again.")),(0,i.kt)("h2",{id:"configure-node-red"},"Configure Node-RED"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download InfluxDB Paletts"),(0,i.kt)("p",null,"Click on the upper-right menu bar and select Settings."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png"})),(0,i.kt)("p",null,"Search and install ",(0,i.kt)("strong",{parentName:"p"},"node-red-contrib-influxdb")," in the ",(0,i.kt)("strong",{parentName:"p"},"Paletts -> Install"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/12.png"})),(0,i.kt)("p",null,"Add ",(0,i.kt)("strong",{parentName:"p"},"influx.batch")," from the storage bar on the left\uff0cdouble-click it to enter the configuration page, then click the edit button to edit ",(0,i.kt)("strong",{parentName:"p"},"influx.batch")," node."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/13.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Edit ",(0,i.kt)("strong",{parentName:"p"},"influx.batch")," node:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Version"),": 2.0."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"URL"),": Obtained from the ",(0,i.kt)("strong",{parentName:"li"},"Settings")," -> ",(0,i.kt)("strong",{parentName:"li"},"Orgnization Profile"),".",(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/14.png"})))),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/15.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"TOKEN"),":  Which you generate in ",(0,i.kt)("strong",{parentName:"li"},"Obtain API Token")," Section.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/16.png"})),(0,i.kt)("p",null,"When you have finished click on the ",(0,i.kt)("strong",{parentName:"p"},"Add")," button in the top right hand corner to return to the properties page of the influx batch, at this point please fill in your Orgnization(The default is the email address you use to register with InfluxDB) and Bucket name."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/20.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Configure the function node"),(0,i.kt)("p",null,"Data reporting to InfluxDB needs to follow a specific data format, so it's necessary to add a function node to process the data format."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/18.png"})),(0,i.kt)("p",null,"Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    var payload = msg.payload;\n    var topic = msg.topic;\n    var strs = topic.split("/");\n    var length = strs.length\n    if (length >= 2) {\n        var measurementId = strs[length - 1]\n        var body = {}\n        var value = payload.value\n        if (measurementId == 4100) {\n            body.co2 = value\n            measurement = "co2"\n        } else if (measurementId == 4103) {\n            body.soilmoisture = value\n            measurement = "soilmoisture"\n        } else if (measurementId == 4150) {\n            body.accelX = value\n            measurement = "accelX"\n        } else if (measurementId == 4151) {\n            body.accelY = value\n            measurement = "accelY"\n        } else if (measurementId == 4152) {\n            body.accelZ = value\n            measurement = "accelZ"\n        } else if (measurementId == 4192) {\n            body.soundintensity = value\n            measurement = "soundintensity"\n        } else if (measurementId == 4193) {\n            body.lightIntensity = value\n            measurement = "lightIntensity"\n        } else if (measurementId == 4195) {\n            body.tvoc = value\n            measurement = "tvoc"\n        } else if (measurementId == 4097) {\n            body.airtemperature = value\n            measurement = "airtemperature"\n        } else if (measurementId == 4098) {\n            body.airhumidity = value\n            measurement = "airhumidity"\n        } else if (measurementId == 4175) {\n            body.AIdetection_1 = value\n            measurement = "AIdetection_1"\n        } else if (measurementId == 4176) {\n            body.AIdetection_2 = value\n            measurement = "AIdetection_2"\n        } else if (measurementId == 4177) {\n            body.AIdetection_3 = value\n            measurement = "AIdetection_3"\n        } else if (measurementId == 4178) {\n            body.AIdetection_4 = value\n            measurement = "AIdetection_4"\n        } else if (measurementId == 4179) {\n            body.AIdetection_5 = value\n            measurement = "AIdetection_5"\n        } else if (measurementId == 4180) {\n            body.AIdetection_6 = value\n            measurement = "AIdetection_6"\n        } else if (measurementId == 4181) {\n            body.AIdetection_7 = value\n            measurement = "AIdetection_7"\n        } else if (measurementId == 4182) {\n            body.AIdetection_8 = value\n            measurement = "AIdetection_8"\n        } else if (measurementId == 4183) {\n            body.AIdetection_9 = value\n            measurement = "AIdetection_9"\n        } else if (measurementId == 4184) {\n            body.AIdetection_10 = value\n            measurement = "AIdetection_10"\n        }\n        msg.payload = [{\n            measurement: measurement,\n            fields: body,\n            tags: {\n                device: "SenseCAP K1100"\n            },\n            timestamp: new Date()\n        }];\n    }\n    return msg;\n}\n')),(0,i.kt)("p",null,"Then we connect all the nodes and click on the\xa0",(0,i.kt)("strong",{parentName:"p"},"Deploy"),"\xa0button and if everything is set up correctly you will be able to see the\xa0mqtt in\xa0node showing connected."),(0,i.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/17.png"})),(0,i.kt)("p",null,"Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/21.png"})),(0,i.kt)("h2",{id:"configure-influxdb-visual-dashboards"},"Configure InfluxDB visual dashboards"),(0,i.kt)("p",null,"To get a more visual view of the sensor data, we can draw some line graphs."),(0,i.kt)("p",null,"Go back to InflucDB Cloud and click on ",(0,i.kt)("strong",{parentName:"p"},"CREATE DASHBOARD")," to ",(0,i.kt)("strong",{parentName:"p"},"ADD CELL"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/19.png"})),(0,i.kt)("p",null,"If SenseCAP has started sending data messages to InfluxDB, then you can see the sensor's label on this page. For the content of the data you want to display, we just tick the box."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/22.png"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/23.png"})),(0,i.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Q1: Why can't I find the Palette in Node-RED?")),(0,i.kt)("p",null,"A: If you cannot find the Palette in the settings, check your terminal for an error message when you start Node-RED."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png"})),(0,i.kt)("p",null,"The most common scenario is that your npm version is too old to start the Palette editor."),(0,i.kt)("p",null,"If your situation is as described above, run ",(0,i.kt)("strong",{parentName:"p"},"Powershell as administrator")," and enter the following command to upgrade npm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g npm\n")),(0,i.kt)("p",null,"Then just restart Node-RED."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
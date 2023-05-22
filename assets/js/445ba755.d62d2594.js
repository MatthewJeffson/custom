"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32711],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const a={description:"SenseCAP & Node-RED to Twilio",title:"SenseCAP & Node-RED to Twilio",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_twilio",last_update:{date:"1/13/2023",author:"shuxu hu"}},r="Connecting SenseCAP to Twilio via Node-RED",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_twilio",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_twilio",title:"SenseCAP & Node-RED to Twilio",description:"SenseCAP & Node-RED to Twilio",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_twilio.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services",slug:"/K1100_SenseCAP_to_twilio",permalink:"/custom/K1100_SenseCAP_to_twilio",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/SenseCAP&Node-Red_for_Cloud_Services/K1100_SenseCAP_to_twilio.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"SenseCAP & Node-RED to Twilio",title:"SenseCAP & Node-RED to Twilio",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100_SenseCAP_to_twilio",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP & Node-RED to InfluxDB",permalink:"/custom/K1100_SenseCAP_to_influxdb"},next:{title:"SenseCAP & Node-RED to Datacake",permalink:"/custom/K1100_SenseCAP_to_datacake"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Twilio",id:"twilio",level:2},{value:"Create MQTT Node",id:"create-mqtt-node",level:2},{value:"Configure Twilio",id:"configure-twilio",level:2},{value:"Configure Node-RED",id:"configure-node-red",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"connecting-sensecap-to-twilio-via-node-red"},"Connecting SenseCAP to Twilio via Node-RED"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SenseCAP K1100 - The Sensor Prototype Kit")," represents Seeed Studio concentrating the essence of LoRa\xae communication on technology and edge intelligence products, for the easiest deploying and mastering of LoRa\xae and IoT applications."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100/banner.png"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeed-Studio-LoRaWAN-Dev-Kit-p-5370.html?queryID=a88444c7c4ccfa5dddd4d2a84db3dd5e&objectID=5370&indexName=bazaar_retailer_products"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,i.kt)("p",null,"With the SenseCAP ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,i.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,i.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,i.kt)("font",{color:"white",size:4},(0,i.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.kt)("strong",null,"S2100 ",(0,i.kt)("br",null)," Data Logger"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.kt)("strong",null,"S2101 ",(0,i.kt)("br",null)," Air Temp & Humidity"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.kt)("strong",null,"S2102 ",(0,i.kt)("br",null)," Light"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.kt)("strong",null,"S2103 ",(0,i.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.kt)("strong",null,"S2104 ",(0,i.kt)("br",null)," Soil Moisture & Temp"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.kt)("strong",null,"S2105 ",(0,i.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.kt)("strong",null,"S2110 ",(0,i.kt)("br",null)," LoRaWAN\xae Controller"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.kt)("strong",null,"S2120 ",(0,i.kt)("br",null)," 8-in-1 Weather Station")))))),(0,i.kt)("h2",{id:"twilio"},"Twilio"),(0,i.kt)("p",null,"Twilio is a customer engagement platform used by hundreds of thousands of businesses and more than ten million developers worldwide to build unique, personalized experiences for their customers."),(0,i.kt)("p",null,"Twilio known for democratizing channels like voice, text, chat, video, and email through APIs, making it easy for every organization to build meaningful interactions with customers on the channels they prefer."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/1.jpg",alt:"pir",width:700,height:"auto"})),(0,i.kt)("p",null,"This section will use the SenseCAP K1100 kit as well as the SenseCAP console, Node-RED, to complete the task of triggering a Twilio message push under certain conditions."),(0,i.kt)("p",null,"If you haven't installed or don't know what Node-RED is, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/"},"Node-RED & SenseCAP Tutorials"),"."),(0,i.kt)("h2",{id:"create-mqtt-node"},"Create MQTT Node"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Start Node-RED"),(0,i.kt)("p",null,"Start Node-RED by typing the command ",(0,i.kt)("inlineCode",{parentName:"p"},"node-red")," in the terminal and open a browser and enter the address ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"http://localhost:1880"},"http://localhost:1880"))," in the address bar to access the editor of Node-RED."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Create MQTT Node"),(0,i.kt)("p",null,"We use ",(0,i.kt)("strong",{parentName:"p"},"Network -> mqtt in")," node and configure mqtt in the format of the SenseCAP API as requested in the ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/K1100_sensecap_node-red/#mqtt-node"},"previous tutorial"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Server: openstream.api.sensecap.seeed.cc")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Port: 1883")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Protocol: MQTT V3.1.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Client ID: The format is ",(0,i.kt)("inlineCode",{parentName:"p"},"org-<Organization ID>-<Random ID>")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Orgnization ID>")," Your organization ID. We have obtained it in the ",(0,i.kt)("a",{parentName:"li",href:"/K1100_sensecap_node-red#get-the-sensecap-api"},"Get the SenseCAP API"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Random ID>")," uses your own randomly generated numbers or lowercase letters."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Topic Format: ",(0,i.kt)("inlineCode",{parentName:"p"},"/device_sensor_data/<OrgID>/<DeviceEUI>/<Channel>/<Reserved>/<MeasurementID>")))),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"OrgID"),(0,i.kt)("td",{align:"center"},"Your organization ID. We have obtained it in the Get the SenseCAP API.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"DevEUI"),(0,i.kt)("td",{align:"center"},"Unique identification of sensor devices. This information can be found on the sticker on the back of the Grove - Wio E5, as well as in the SenseCAP console device.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"Channel"),(0,i.kt)("td",{align:"center"},"A physical interface on the device to which the sensor is connected. For the K1100 kit, the default value here is 1.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"Reserved"),(0,i.kt)("td",{align:"center"},"Reserved Fields.")),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"MeasurementID"),(0,i.kt)("td",{align:"center"},"Measured value ID. This ID can be found in the Measurement IDs section of the ",(0,i.kt)("a",{href:"https://sensecap-docs.seeed.cc/sensor_types_list.html",target:"_blank"},"SenseCAP documentation"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Validate MQTT nodes"),(0,i.kt)("p",null,"Once configured, please click the ",(0,i.kt)("strong",{parentName:"p"},"Deploy")," button in the top right corner to check if the configuration was successful. If it is filled in correctly, then the word ",(0,i.kt)("strong",{parentName:"p"},"Connected")," will be displayed."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/1.png"})),(0,i.kt)("h2",{id:"configure-twilio"},"Configure Twilio"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Register or login to Twilio"),(0,i.kt)("p",null,"If you have already registered with Twilio, then please login on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/login"},"Twilio website"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/3.png"})),(0,i.kt)("p",null,"If you do not use or have registered with Twilio, then please complete your registration and login ",(0,i.kt)("a",{parentName:"p",href:"https://www.twilio.com/try-twilio"},"here"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/2.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Get the necessary information"),(0,i.kt)("p",null,"We can try using a free service that sends SMS messages to the mobile phone we verified during registration."),(0,i.kt)("p",null,"Click on ",(0,i.kt)("strong",{parentName:"p"},"Get a trial phone number")," on the main screen."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/4.png"})),(0,i.kt)("p",null,"Twilio will then automatically generate a Twilio phone number for you."),(0,i.kt)("p",null,"At the bottom of the main screen, under ",(0,i.kt)("strong",{parentName:"p"},"Account Info"),", you will find what we need to build a connection to Twilio."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/5.png"})),(0,i.kt)("p",null,"Please note down the ",(0,i.kt)("strong",{parentName:"p"},"Account SID"),", ",(0,i.kt)("strong",{parentName:"p"},"Auth Token")," and ",(0,i.kt)("strong",{parentName:"p"},"My Twilio phone number"),", which we will use later in Node RED."),(0,i.kt)("h2",{id:"configure-node-red"},"Configure Node-RED"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download Twilio Paletts"),(0,i.kt)("p",null,"Click on the upper-right menu bar and select Settings."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/13.png"})),(0,i.kt)("p",null,"Search and install ",(0,i.kt)("strong",{parentName:"p"},"node-red-node-twilio")," in the ",(0,i.kt)("strong",{parentName:"p"},"Paletts -> Install"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/6.png"})),(0,i.kt)("p",null,"Add ",(0,i.kt)("strong",{parentName:"p"},"twilio out")," from the storage bar on the left\uff0cdouble-click it to enter the configuration page, then click the edit button to edit ",(0,i.kt)("strong",{parentName:"p"},"twilio out")," node."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/7.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Edit ",(0,i.kt)("strong",{parentName:"p"},"twilio out")," node"),(0,i.kt)("p",null,"Please fill in the corresponding fields with the information we obtained in the previous configuration of Twilio. Then just click the Add button in the top right corner."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/8.png"})),(0,i.kt)("p",null,"Then, please fill in the mobile phone number you have registered with Twilio."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/9.png"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Please note that you need to add the prefix "',(0,i.kt)("strong",{parentName:"p"},"+ country code"),'" to the mobile phone number you fill in here.')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Configure the function node"),(0,i.kt)("p",null,"The content of the SMS can be defined in the function block, and the trigger conditions can be that the data reported by the PaaS platform triggers certain rules, all of which can be customized in the function building block."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_influxdb/18.png"})),(0,i.kt)("p",null,"Drag out the function node from the function bar on the left, double-click it to enter the edit page, then copy the code to On Message."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/17.png"})),(0,i.kt)("p",null,"For example, in this section, when a sensor value is received, the sensor value is sent to the phone and the code can be written like this."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n    var payload = msg.payload;\n    var topic = msg.topic;\n    var strs = topic.split("/");\n    var length = strs.length\n    if (length >= 2) {\n        var measurementId = strs[length - 1]\n        var value = payload.value\n        if (measurementId == 4100) {\n            msg.payload = "CO2:" + value\n        } else if (measurementId == 4103) {\n            msg.payload = "soilmoisture:" + value\n        } else if (measurementId == 4150) {\n            msg.payload = "accelX:" + value\n        } else if (measurementId == 4151) {\n            msg.payload = "accelY:" + value\n        } else if (measurementId == 4152) {\n            msg.payload = "accelZ:" + value\n        } else if (measurementId == 4192) {\n            msg.payload = "sound:" + value\n        } else if (measurementId == 4193) {\n            msg.payload = "light:" + value\n        } else if (measurementId == 4195) {\n            msg.payload = "tvoc:" + value\n        } else if (measurementId == 4097) {\n            msg.payload = "temperature:" + value\n        } else if (measurementId == 4098) {\n            msg.payload = "humidity:" + value\n        } else if (measurementId == 4175) {\n            msg.payload = "AIdetection_1:" + value\n        } else if (measurementId == 4176) {\n            msg.payload = "AIdetection_2:" + value\n        } else if (measurementId == 4177) {\n            msg.payload = "AIdetection_3:" + value\n        } else if (measurementId == 4178) {\n            msg.payload = "AIdetection_4:" + value\n        } else if (measurementId == 4179) {\n            msg.payload = "AIdetection_5:" + value\n        } else if (measurementId == 4180) {\n            msg.payload = "AIdetection_6:" + value\n        } else if (measurementId == 4181) {\n            msg.payload = "AIdetection_7:" + value\n        } else if (measurementId == 4182) {\n            msg.payload = "AIdetection_8:" + value\n        } else if (measurementId == 4183) {\n            msg.payload = "AIdetection_9:" + value\n        } else if (measurementId == 4184) {\n            msg.payload = "AIdetection_10:" + value\n        }\n    }\n    return msg;\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please keep an eye on your account balance, the code above will send a different sensor SMS every five minutes. This can quickly drain your balance if you use the above code directly! We recommend programming for a particular sensor rather than sending each sensor value once.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Deploy"),(0,i.kt)("p",null,"Then we connect all the nodes and click on the\xa0",(0,i.kt)("strong",{parentName:"p"},"Deploy"),"\xa0button and if everything is set up correctly you will be able to see the\xa0mqtt in\xa0node showing connected."),(0,i.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/10.png"})),(0,i.kt)("p",null,"Once the Wio Terminal starts powering up and working and starts sending data to SenseCAP PaaS server, then we can check the data on Node-RED debug log."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/k1100_sensecap_twilio/11.png"})),(0,i.kt)("p",null,"If all goes well, you will also receive a text message from Twilio for you with the sensor's data values."),(0,i.kt)("h2",{id:"troubleshoot"},"Troubleshoot"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Q1: Why can't I find the Palette in Node-RED?")),(0,i.kt)("p",null,"A: If you cannot find the Palette in the settings, check your terminal for an error message when you start Node-RED."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/k1100_nodered_azure/11.png"})),(0,i.kt)("p",null,"The most common scenario is that your npm version is too old to start the Palette editor."),(0,i.kt)("p",null,"If your situation is as described above, run ",(0,i.kt)("strong",{parentName:"p"},"Powershell as administrator")," and enter the following command to upgrade npm."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g npm\n")),(0,i.kt)("p",null,"Then just restart Node-RED."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
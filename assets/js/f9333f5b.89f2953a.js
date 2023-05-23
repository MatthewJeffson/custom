"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[98338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(k,s(s({ref:t},u),{},{components:n})):a.createElement(k,s({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={description:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",title:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/14/2023",author:"Matthew"}},s="Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",i={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central",title:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",description:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial",slug:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central",permalink:"/custom/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",title:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP LoRaWAN S210X Series Sensor Introduction",permalink:"/custom/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/SenseCAP_LoRaWAN_S210X_Series_Sensor"},next:{title:"Connect to Helium Network",permalink:"/custom/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network"}},l={},p=[{value:"<strong>SenseCAP &amp; Node-RED</strong>",id:"sensecap--node-red",level:2},{value:"<strong>Install Node.Js</strong>",id:"install-nodejs",level:4},{value:"<strong>Installing Node-RED with npm</strong>",id:"installing-node-red-with-npm",level:4},{value:"<strong>Get the SenseCAP API</strong>",id:"get-the-sensecap-api",level:4},{value:"<strong>Node-RED Configuration</strong>",id:"node-red-configuration",level:4},{value:"<strong>SenseCAP &amp; Node_RED &amp; Azure IoT Central</strong>",id:"sensecap--node_red--azure-iot-central",level:2},{value:"<strong>Microsoft Azure IoT Central Configuration</strong>",id:"microsoft-azure-iot-central-configuration",level:4},{value:"<strong>Node-RED Configuration</strong>",id:"node-red-configuration-1",level:4},{value:"<strong>Data Presentation</strong>",id:"data-presentation",level:4}],u={toc:p},d="wrapper";function c(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-s210x-sensor-to-microsoft-azure-iot-central-via-node-red"},"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SenseCAP S210X Series Sensors")," are with the IP66 rating, -40 ~ +85C \xb0 operating temperature and a built-in 19Ah high-capacity battery, combined with the devices' low power consumption, the series can operate in harsh outdoor environments for up to 10 years with a range of up to 10km. ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/001.png",alt:"IMG_256"})),(0,o.kt)("p",null,"In this tutorial, we will introduce how to connect S210X series Sensors to the Microsoft Azure IoT Central via Node-RED"),(0,o.kt)("h2",{id:"sensecap--node-red"},(0,o.kt)("strong",{parentName:"h2"},"SenseCAP & Node-RED")),(0,o.kt)("p",null,"This chapter, the first in a series, walks you through installing and using Node-red and calling the SenseCAP API to connect to Node-RED."),(0,o.kt)("p",null,"This chapter is to make it easier for our users to connect data from the SenseCAP platform to various other Paas platforms for more in-depth data processing."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Node-RED")),(0,o.kt)("p",null,"Node-RED\xa0is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways."),(0,o.kt)("p",null,"It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click.\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/002.png",alt:"IMG_257"})),(0,o.kt)("h4",{id:"install-nodejs"},(0,o.kt)("strong",{parentName:"h4"},"Install Node.Js")),(0,o.kt)("p",null,"To install Node-RED locally you will need a supported version of Node.js."),(0,o.kt)("p",null,"Node-RED currently recommends\xa0",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"**Node 14.x LTS"),(0,o.kt)("strong",{parentName:"p"},".")),(0,o.kt)("h4",{id:"installing-node-red-with-npm"},(0,o.kt)("strong",{parentName:"h4"},"Installing Node-RED with npm")),(0,o.kt)("p",null,"To install Node-RED you can use the npm command that comes with node.js:"),(0,o.kt)("p",null,"sudo npm install -g --unsafe-perm node-red"),(0,o.kt)("p",null,"Note: If you are using Windows, do not start the command with ",(0,o.kt)("strong",{parentName:"p"},"sudo"),"."),(0,o.kt)("p",null,"That command will install Node-RED as a global module along with its dependencies."),(0,o.kt)("p",null,"Once installed as a global module you can use this command\xa0to start Node-RED in your terminal. "),(0,o.kt)("p",null,"node-red"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/003.png",alt:"IMG_258"})),(0,o.kt)("p",null,"Then you can then access the Node-RED editor by pointing your browser at\xa0",(0,o.kt)("a",{parentName:"p",href:"http://localhost:1880/"},"http://localhost:1880"),"."),(0,o.kt)("h4",{id:"get-the-sensecap-api"},(0,o.kt)("strong",{parentName:"h4"},"Get the SenseCAP API")),(0,o.kt)("p",null,"Before proceeding to this section, make sure you have bound your S210x device in the SenseCAP console."),(0,o.kt)("p",null,"Note: If you haven't bound the device, please check ? first "),(0,o.kt)("p",null,"Log in to the\xa0",(0,o.kt)("a",{parentName:"p",href:"https://sensecap.seeed.cc/portal/#/dashboard"},(0,o.kt)("strong",{parentName:"a"},"SenseCAP console")),". In the drop-down bar to the right of the user name at the top of the dashboard, we can find the\xa0",(0,o.kt)("strong",{parentName:"p"},"Organization Information"),", please select it to get the ",(0,o.kt)("strong",{parentName:"p"},"Organization ID")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/004.png",alt:"IMG_259"})),(0,o.kt)("p",null,"Then, we also need to get the API key for SenseCAP. Please click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Security -> Access API keys"),"\xa0on the left side of the dashboard. Then Create an Access Key."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/005.png",alt:"IMG_260"})),(0,o.kt)("p",null,"Click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"API ID"),"\xa0you created and you will get her\xa0",(0,o.kt)("strong",{parentName:"p"},"Access API keys"),", please copy it and the ",(0,o.kt)("strong",{parentName:"p"},"Organization ID"),", we will use them in the later steps."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/006.png",alt:"IMG_261"})),(0,o.kt)("h4",{id:"node-red-configuration"},(0,o.kt)("strong",{parentName:"h4"},"Node-RED Configuration")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/007.png",alt:"IMG_262"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1."),"\xa0Add a new mqtt-broker node"),(0,o.kt)("p",null,"Drag out an\xa0",(0,o.kt)("strong",{parentName:"p"},"mqtt in"),"\xa0node, double-click it to enter the configuration page, then click the edit button after\xa0",(0,o.kt)("strong",{parentName:"p"},"Add new mqtt-broker"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/008.png",alt:"IMG_263"})),(0,o.kt)("p",null,"The configuration of mqtt-broker is required to be filled out as follows:"),(0,o.kt)("p",null,"Server\uff1aopenstream.api.sensecap.seeed.cc"),(0,o.kt)("p",null,"Port\uff1a1883"),(0,o.kt)("p",null,"Protocol: MQTT V3.1.1"),(0,o.kt)("p",null,"Client ID format\uff1a",(0,o.kt)("strong",{parentName:"p"},'org-"Organization ID" "Random ID"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Organization ID:")," Obtained from your ",(0,o.kt)("strong",{parentName:"p"},"Organization information")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Random ID:")," Use your own randomly generated numbers and lowercase letters."),(0,o.kt)("p",null,"Example:org-43243","*","*","*","23-test"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/009.png",alt:"IMG_264"})),(0,o.kt)("p",null,"Then we fill in the\xa0",(0,o.kt)("strong",{parentName:"p"},"Security"),"\xa0options field with the Username and Password:"),(0,o.kt)("p",null,"Username: ",(0,o.kt)("strong",{parentName:"p"},'org-"Organization ID"')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Organization ID:")," Your organization ID. We have obtained it before"),(0,o.kt)("p",null,"Password: Fill in the\xa0",(0,o.kt)("strong",{parentName:"p"},"Access API keys"),"\xa0that we obtained before.\n",(0,o.kt)("inlineCode",{parentName:"p"}," "),(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/010.png",alt:"IMG_265"})),(0,o.kt)("p",null,"Add ",(0,o.kt)("strong",{parentName:"p"},"Topic")),(0,o.kt)("p",null,"Topic: Configuring a topic in a specific format determines the kind of device and data type to be received."),(0,o.kt)("p",null,"Topic format:\n",(0,o.kt)("strong",{parentName:"p"},'/device_sensor_data/"OrgID"/"DeviceEUI"/"Channel"/"Reserved"/"MeasurementID"')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"OrgID"),(0,o.kt)("th",{parentName:"tr",align:"left"},"You can find the id on your organization information"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"DeviceEUI"),(0,o.kt)("td",{parentName:"tr",align:"left"},"You can find EUI on the Device Basic Properties or device label")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Channel"),(0,o.kt)("td",{parentName:"tr",align:"left"},"A physical interface on the device to connect to the sensor, default:1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Reserved"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Reserved field")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"MeasurementID"),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("a",{parentName:"td",href:"https://sensecap-docs.seeed.cc/measurement_list.html"},"measurement_list"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),': "+" indicates that this field has no filter conditions and can match all. "/+/+/+/+" means to listen to all "DeviceEUI", "Channel", "Reserved", "MeasurementID"'),(0,o.kt)("p",null,"Example\uff1a/device","_","sensor","_","data/424988","*","*","*","*","44/2CF7F","*","*","*","0002/+/+/+"),(0,o.kt)("p",null,"This topic means receiving all remote sensing data of the current device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/011.png",alt:"IMG_266"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2."),"\xa0Add debug node"),(0,o.kt)("p",null,"Drag out a ",(0,o.kt)("strong",{parentName:"p"},"debug"),"\xa0node, connect to the ",(0,o.kt)("strong",{parentName:"p"},"mqtt-in")," node, then click ",(0,o.kt)("strong",{parentName:"p"},"Deploy")),(0,o.kt)("p",null,'After the deployment is successful, you will see "',(0,o.kt)("strong",{parentName:"p"},"Connected"),'" under the ',(0,o.kt)("strong",{parentName:"p"},"mqtt in")," building block, the data reporting interval is determined by the sensor which we connected. After receiving the data, the debug window on the right will display the raw data. ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/012.png",alt:"IMG_267"})),(0,o.kt)("h2",{id:"sensecap--node_red--azure-iot-central"},(0,o.kt)("strong",{parentName:"h2"},"SenseCAP & Node","_","RED & Azure IoT Central")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/services/iot-central"},(0,o.kt)("strong",{parentName:"a"},"Microsoft Azure IoT Central")),"\xa0is a fully managed global IoT SaaS (software as a service) solution that makes it easy to connect, monitor and manage your IoT assets at scale. It is highly secure, scales with your business as it grows, ensures that your investments are repeatable and integrates with your existing business apps. It also bridges the gap between your business applications and IoT data. Finally it offers centralized management to reconfigure and update your devices."),(0,o.kt)("p",null,"The content of this chapter will continue to use the Node-RED introduced earlier and facilitate the management of the S210X Sensor suite in Microsoft Azure IoT Central through the use of Node-RED."),(0,o.kt)("h4",{id:"microsoft-azure-iot-central-configuration"},(0,o.kt)("strong",{parentName:"h4"},"Microsoft Azure IoT Central Configuration")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1."),"\xa0Log in to Azure IoT Central."),(0,o.kt)("p",null,"Please visit ",(0,o.kt)("a",{parentName:"p",href:"https://apps.azureiotcentral.com/home"},(0,o.kt)("strong",{parentName:"a"},"Azure IoT Central")),"\xa0website, click\xa0",(0,o.kt)("strong",{parentName:"p"},"Build"),"\xa0from the navigation menu on the left, and click\xa0",(0,o.kt)("strong",{parentName:"p"},"Custom apps"),". ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/013.png",alt:"IMG_268"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2."),"\xa0Fill in\xa0the ",(0,o.kt)("strong",{parentName:"p"},"Application name"),"\xa0and choose the\xa0",(0,o.kt)("strong",{parentName:"p"},"Pricing plan"),". Application URL will be created automatically when you fill in the application name. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/014.png",alt:"IMG_269"})),(0,o.kt)("p",null,"Note: If you are a new user of Azure IoT Central, we recommend that you select Free as this will not consume your fees."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/015.png",alt:"IMG_270"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3."),"\xa0Click\xa0",(0,o.kt)("strong",{parentName:"p"},"Create"),"\xa0to create the new application. Now you have successfully set up Azure IoT Central!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/016.png",alt:"IMG_271"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4."),"\xa0Create a Device Template"),(0,o.kt)("p",null,"Please create a new device template by clicking on\xa0",(0,o.kt)("strong",{parentName:"p"},"Device templates"),"\xa0in the left-hand menu bar."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/017.png",alt:"IMG_272"})),(0,o.kt)("p",null,"Name your device template and click ",(0,o.kt)("strong",{parentName:"p"},"create")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/018.png",alt:"IMG_273"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/019.png",alt:"IMG_274"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5."),"\xa0Create a Device"),(0,o.kt)("p",null,"Click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Devices -> S2103"),"\xa0under the left menu bar. ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/020.png",alt:"IMG_275"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/021.png",alt:"IMG_276"})),(0,o.kt)("p",null,"Once you have created the device, you will see the device we have just created under\xa0",(0,o.kt)("strong",{parentName:"p"},"Device"),", please tap into the device and click on the\xa0",(0,o.kt)("strong",{parentName:"p"},"Connect"),"\xa0button in the top left corner."),(0,o.kt)("p",null,"Please make a note of this information, which we will use in the next steps."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/022.png",alt:"IMG_277"})),(0,o.kt)("h4",{id:"node-red-configuration-1"},(0,o.kt)("strong",{parentName:"h4"},"Node-RED Configuration")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1."),"\xa0Install Azure IoT Paletts"),(0,o.kt)("p",null,"Click on the upper-right menu bar and select Settings ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/023.png",alt:"IMG_278"})),(0,o.kt)("p",null,'Search and install "node-red-contrib-azure-iot-central" in the ',(0,o.kt)("strong",{parentName:"p"},"Paletts - Install")," ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/024.png",alt:"IMG_279"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2."),"\xa0Configure the Azure IoT Central node"),(0,o.kt)("p",null,"Drag out the ",(0,o.kt)("strong",{parentName:"p"},"Azure IoT Central"),"\xa0node from the ",(0,o.kt)("strong",{parentName:"p"},"function")," bar on the left, double-click it to enter the configuration page, then click the edit button to edit ",(0,o.kt)("strong",{parentName:"p"},"Azure IoT Central")," node"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/025.png",alt:"IMG_280"})),(0,o.kt)("p",null,"The configuration is required to be filled out as follows:"),(0,o.kt)("p",null,"Transport: MQTT"),(0,o.kt)("p",null,"Authentication: SAS"),(0,o.kt)("p",null,"Scope ID/Device ID/Primary Key: We have obtained it before"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/026.png",alt:"IMG_281"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3."),"\xa0Configure the function node"),(0,o.kt)("p",null,"Data reporting to Azure IoT Central needs to follow a specific data format, so it's necessary to add a function building block to process the data format."),(0,o.kt)("p",null,"Drag out the ",(0,o.kt)("strong",{parentName:"p"},"function")," node from the function bar on the left, double-click it to enter the edit page, then copy the code to ",(0,o.kt)("strong",{parentName:"p"},"On Message.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/027.png",alt:"IMG_282"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"code:")),(0,o.kt)("p",null,"`{"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),"var payload = msg.payload;"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),"var topic = msg.topic;"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),'var strs = topic.split("/");'),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),"var length = strs.length"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),"if (length >= 2) {"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"var measurementId = strs","[length - 1]"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"var body = {}"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"var value = payload.value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"if (measurementId == 4097) {"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"            "),"body.AirTemperature = value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"} else if (measurementId == 4098) {"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"            "),"body.AirHumidity = value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"} else if (measurementId == 4100) {"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"            "),"body.CO2 = value"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"}`"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"        "),"msg.payload = body;"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),"}"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"    "),"return msg;"),(0,o.kt)("p",null,"}"),(0,o.kt)("blockquote",null),(0,o.kt)("p",null,"If you want to see the logging information of the data, you can add a debug node after the function node."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/028.png",alt:"IMG_283"})),(0,o.kt)("p",null,"Once the S210X Sensor starts powering up and working and starts sending data to the SenseCAP PaaS server, then we can check the data on Azure IoT Central."),(0,o.kt)("h4",{id:"data-presentation"},(0,o.kt)("strong",{parentName:"h4"},"Data Presentation")),(0,o.kt)("p",null,"The data visible in the\xa0",(0,o.kt)("strong",{parentName:"p"},"Raw data"),"\xa0column are placed in\xa0",(0,o.kt)("strong",{parentName:"p"},"Unmodeled data"),", so we need to parse the data according to the code above."),(0,o.kt)("p",null,"Add the capability that you need, then click ",(0,o.kt)("strong",{parentName:"p"},"save")," and ",(0,o.kt)("strong",{parentName:"p"},"publish")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/029.png",alt:"IMG_284"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/030.png",alt:"IMG_285"})),(0,o.kt)("p",null,"Then we can clearly check the raw data uploaded by the sensor. ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/031.png",alt:"IMG_286"})),(0,o.kt)("p",null,"If you want to enrich your data dashboard page, you can also configure it to be displayed in Overview."),(0,o.kt)("p",null,"Click on\xa0",(0,o.kt)("strong",{parentName:"p"},"Overview"),"\xa0on the left navigation menu."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/032.png",alt:"IMG_287"})),(0,o.kt)("p",null,"Collapse\xa0",(0,o.kt)("strong",{parentName:"p"},"starts with devices"),"\xa0drop-down menu and selects the telemetry that you want to visualize."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/033.png",alt:"IMG_288"})),(0,o.kt)("p",null,"Click\xa0",(0,o.kt)("strong",{parentName:"p"},"Add tile"),"\xa0and you will see the tile added to the Azure IoT Central Dashboard."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/034.png",alt:"IMG_289"})),(0,o.kt)("p",null,"So next, customize your sensor data monitoring dashboard to your liking!"),(0,o.kt)("p",null,"After finishing your changes, just click on ",(0,o.kt)("strong",{parentName:"p"},"save")," and ",(0,o.kt)("strong",{parentName:"p"},"publish")," "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/035.png",alt:"IMG_290"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/036.png",alt:"IMG_291"})),(0,o.kt)("p",null,"You can view your sensor data through your custom dashboard now! ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Azure_IoT_Central/037.png",alt:"IMG_292"})))}c.isMDXComponent=!0}}]);
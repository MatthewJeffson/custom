"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var r=l.createContext({}),u=function(e){var t=l.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(r.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,d=c["".concat(r,".").concat(m)]||c[m]||k[m]||i;return n?l.createElement(d,s(s({ref:t},p),{},{components:n})):l.createElement(d,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a[c]="string"==typeof e?e:o,s[1]=a;for(var u=2;u<i;u++)s[u]=n[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62277:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var l=n(87462),o=(n(67294),n(3905));const i={description:"Connect to Helium Network",title:"Connect to Helium Network",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/14/2023",author:"Matthew"}},s="Connect to Helium Network",a={unversionedId:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network",id:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network",title:"Connect to Helium Network",description:"Connect to Helium Network",source:"@site/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial",slug:"/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network",permalink:"/custom/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-Helium-Network.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"Feb 14, 2023",frontMatter:{description:"Connect to Helium Network",title:"Connect to Helium Network",keywords:["SenseCAP Sensor_Probe&Accessories"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"2/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Connect S210X Sensor to Microsoft Azure IoT Central Via Node-RED",permalink:"/custom/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/Connect-S210X-Sensor-to-Microsoft-Azure-IoT-Central"},next:{title:"Connect to The Things Network",permalink:"/custom/Sensor/SenseCAP/SenseCAP_LoRaWAN_Sensor/SenseCAP_S210X_Series/tutorial/How-to-Connect-SenseCAP-S210X-to-The-Things-Network"}},r={},u=[{value:"Helium Console",id:"helium-console",level:2},{value:"Connect to Helium Network",id:"connect-to-helium-network-1",level:2},{value:"Creat a New account",id:"creat-a-new-account",level:3},{value:"Setup the Sensor",id:"setup-the-sensor",level:3},{value:"Set Frequency of Sensor via SenseCAP Mate App",id:"set-frequency-of-sensor-via-sensecap-mate-app",level:3},{value:"Add New Device",id:"add-new-device",level:2},{value:"Check the data on Helium",id:"check-the-data-on-helium",level:2},{value:"Upload Data from Helium to Datacake",id:"upload-data-from-helium-to-datacake",level:2},{value:"Create a Datacake Account",id:"create-a-datacake-account",level:3},{value:"Add New Integration on Helium Console",id:"add-new-integration-on-helium-console",level:3},{value:"Configure the Flows on Helium",id:"configure-the-flows-on-helium",level:3},{value:"Add the Sensor on Datacake",id:"add-the-sensor-on-datacake",level:3},{value:"Check Data from Datacake",id:"check-data-from-datacake",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect-to-helium-network"},"Connect to Helium Network"),(0,o.kt)("h2",{id:"helium-console"},"Helium Console"),(0,o.kt)("p",null,"The Helium Console is a web-based device management tool hosted by the Helium Foundation that allows developers to register, authenticate, and manage their devices on the Helium network. In addition to device management, Console provides prebuilt connections called Integrations to route device data via HTTPs or MQTT; or directly to cloud services like AWS IoT."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/003.png",alt:null})),(0,o.kt)("h2",{id:"connect-to-helium-network-1"},"Connect to Helium Network"),(0,o.kt)("h3",{id:"creat-a-new-account"},"Creat a New account"),(0,o.kt)("p",null,"Please go to ",(0,o.kt)("a",{parentName:"p",href:"https://console.helium.com/"},"https://console.helium.com/"),"  , and register your account."),(0,o.kt)("h3",{id:"setup-the-sensor"},"Setup the Sensor"),(0,o.kt)("p",null,"(1) Open the SenseCAP Mate App"),(0,o.kt)("p",null,"(2) Press button and hold for 3 seconds, the LED will flash at 1s frequency."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/004.png",alt:null})),(0,o.kt)("p",null,"(3) Please click the \u201cSetup\u201d button to turn on Bluetooth and click \u201cScan\u201d to start scanning the sensor's Bluetooth."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/005.png",alt:null})),(0,o.kt)("p",null,"(4) Select the Sensor by S/N (label). Then, the basic information of the sensor will be displayed after entering."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/006.png",alt:null}),"       ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/007.png",alt:null})),(0,o.kt)("h3",{id:"set-frequency-of-sensor-via-sensecap-mate-app"},"Set Frequency of Sensor via SenseCAP Mate App"),(0,o.kt)("p",null,"Set the corresponding frequency band based on the frequency band of the gateway."),(0,o.kt)("p",null,"(1) Click the \u201cSetting\u201d and select the platform is \u201c",(0,o.kt)("strong",{parentName:"p"},"Helium"),"\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/008.jpeg",alt:"wecom-temp-114185-2959d45aab4ab735f22b5fbf68a22c91"}),"     ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/009.jpeg",alt:"wecom-temp-88582-e758abc6d2f73925e20290cddfebc421"})),(0,o.kt)("p",null,"(2) Select the Frequency Plan, if the gateway is US915, set the sensor to US915."),(0,o.kt)("p",null,"(3) Click the \u201cSend\u201d button, send the setting to the sensor for it to take effect. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/010.png",alt:null})),(0,o.kt)("p",null,"(4) Click the \u201cHome\u201d button, the App will disconnect the Bluetooth connection."),(0,o.kt)("p",null,"Then, the sensor will reboot."),(0,o.kt)("p",null,"(5) When the device is disconnected from Bluetooth, the LED lights up for ",(0,o.kt)("strong",{parentName:"p"},"15 seconds")," and then flashes as a ",(0,o.kt)("strong",{parentName:"p"},"breathing light"),"."),(0,o.kt)("p",null,"(6) After joining the network successfully, LED ",(0,o.kt)("strong",{parentName:"p"},"flashes fast for 2s"),"."),(0,o.kt)("h1",{id:"helium-console-configuration"},"Helium Console Configuration"),(0,o.kt)("h2",{id:"add-new-device"},"Add New Device"),(0,o.kt)("p",null,"(1) Click \u201cDevices\u201d \u2013> \u201cAdd New Device\u201d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/011.png",alt:null})),(0,o.kt)("p",null,"(2) Enter the Device EUI, App EUI, App Key: please refer to SenseCAP mate APP for details."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/012.png",alt:null})),(0,o.kt)("p",null,"(3) Save device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/013.png",alt:null})),(0,o.kt)("p",null,"(4\uff09Add a new label, then add the label to a device. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/014.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/015.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/016.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/017.png",alt:null})),(0,o.kt)("h2",{id:"check-the-data-on-helium"},"Check the data on Helium"),(0,o.kt)("p",null,"(1) Enter device details page and find the REAL TIME PACKETS."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/018.png",alt:null})),(0,o.kt)("p",null,"(2) Power on the Sensor, it will display raw data."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/019.png",alt:null})),(0,o.kt)("h2",{id:"upload-data-from-helium-to-datacake"},"Upload Data from Helium to Datacake"),(0,o.kt)("h3",{id:"create-a-datacake-account"},"Create a Datacake Account"),(0,o.kt)("p",null,"(1) Create a new account, website: ",(0,o.kt)("a",{parentName:"p",href:"https://datacake.co/"},"https://datacake.co/")," "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/020.png",alt:null})),(0,o.kt)("p",null,"(2) Click the \u201cEdit Profile\u201d \xe0 \u201cAPI\u201d \xe0 Get API token."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/021.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/022.png",alt:null})),(0,o.kt)("h3",{id:"add-new-integration-on-helium-console"},"Add New Integration on Helium Console"),(0,o.kt)("p",null,"(1) Click \u201cIntegrations\u201d \xe0\u201dAdd New Integration\u201d \xe0\u201dDatacake\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/023.png",alt:null})),(0,o.kt)("p",null,"(2) Enter Datacake Token (Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/#_Create_a_Datacake"},"the section"),") and name your integration."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/024.png",alt:null})),(0,o.kt)("h3",{id:"configure-the-flows-on-helium"},"Configure the Flows on Helium"),(0,o.kt)("p",null,"(1) Click \u201cFlows\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/025.png",alt:null})),(0,o.kt)("p",null,"(2) Drag the Label into a blank place. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/026.png",alt:null})),(0,o.kt)("p",null,"(3) Drag the Integration in to a blank place."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/027.png",alt:null})),(0,o.kt)("p",null,"(4) Connect the two blocks."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/028.png",alt:null})),(0,o.kt)("p",null,"(5) Save Changes."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/029.png",alt:null})),(0,o.kt)("h3",{id:"add-the-sensor-on-datacake"},"Add the Sensor on Datacake"),(0,o.kt)("p",null,"(1) Return Datacake Dashboard, and click \u201cDevice\u201d\xe0\u201dAdd Device\u201d"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/030.png",alt:null})),(0,o.kt)("p",null,"(2) Search \u201cSeeed\u201d, You can select some sensors directly."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/031.png",alt:null})),(0,o.kt)("p",null,"(3) Select the Sensor Template."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/032.png",alt:null})),(0,o.kt)("p",null,"(4) Select \u201cHelium\u201d."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/033.png",alt:null})),(0,o.kt)("p",null,"(5) Enter your Device EUI and Name."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/034.png",alt:null})),(0,o.kt)("p",null,"(6) Select your Plan and add device."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/035.png",alt:null})),(0,o.kt)("h3",{id:"check-data-from-datacake"},"Check Data from Datacake"),(0,o.kt)("p",null,"Click Debug button, it will display debug log."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/036.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/037.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/SenseCAPS210X/Helium_Network/038.png",alt:null})))}c.isMDXComponent=!0}}]);
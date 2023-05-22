"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||u[h]||s;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=h;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9755:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const s={description:"The Things Indoor Gateway",title:"The Things Indoor Gateway",keywords:["Sorftware Mender"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/The-Things-Indoor-Gateway",last_update:{date:"2/1/2023",author:"jianjing Huang"}},i=void 0,r={unversionedId:"Network/TTN_Gateway/The-Things-Indoor-Gateway",id:"Network/TTN_Gateway/The-Things-Indoor-Gateway",title:"The Things Indoor Gateway",description:"The Things Indoor Gateway",source:"@site/docs/Network/TTN_Gateway/The-Things-Indoor-Gateway.md",sourceDirName:"Network/TTN_Gateway",slug:"/The-Things-Indoor-Gateway",permalink:"/The-Things-Indoor-Gateway",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/TTN_Gateway/The-Things-Indoor-Gateway.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675180800,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"The Things Indoor Gateway",title:"The Things Indoor Gateway",keywords:["Sorftware Mender"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/The-Things-Indoor-Gateway",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Mender Usage",permalink:"/Mender-Client-dual-GbE-CM4"},next:{title:"Getting Started with reTerminal",permalink:"/reTerminal"}},l={},p=[{value:"Product Introduction",id:"product-introduction",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Sources",id:"sources",level:2},{value:"The Things Indoor Gateway Get Started with SenseCAP",id:"the-things-indoor-gateway-get-started-with-sensecap",level:2},{value:"Step 1: Activate your TTIG Gateway",id:"step-1-activate-your-ttig-gateway",level:3},{value:"Step 2: Gateway Registration on TTN Console",id:"step-2-gateway-registration-on-ttn-console",level:3},{value:"Step 3: Add SenseCAP sensors to the TTN Console",id:"step-3-add-sensecap-sensors-to-the-ttn-console",level:3},{value:"1. Obtain Device EUI, Device Code, App Key, and App EUI",id:"1-obtain-device-eui-device-code-app-key-and-app-eui",level:4},{value:"2. Add Application and AppEUI",id:"2-add-application-and-appeui",level:4},{value:"Step 4: Activate your SenseCAP Sensors",id:"step-4-activate-your-sensecap-sensors",level:3},{value:"Power On",id:"power-on",level:4},{value:"Step 5: data checking",id:"step-5-data-checking",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/113990894_All-22.png",alt:"TTIG"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/The-Things-Indoor-Gateway-US-p-4710.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("h2",{id:"product-introduction"},"Product Introduction"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/"},"The Things Indoor Gateway")," is a ",(0,o.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/"},"The Things Network")," product featuring high reliability, high performance, and cost-effective. It is an 8-channel LoRaWAN gateway based on SX1308 with build-in ESP8266 WiFi connectivity. With multiple versions and various power outlets available, it satisfies a wide range of applications requiring dynamic coverage. As an IoT gateway designed by The Things Network, it enjoys all the superior functions TTN provides to its customers. And of course, this gateway is able to connect with the secure and collaborative Internet of Things Network which is built that spans across many countries around the globe to provide coverage to millions of people. The tool which a lot of people apply in their community is ",(0,o.kt)("a",{parentName:"p",href:"https://ttnmapper.org/"},"TTN Mapper"),". Therefore, you can use this gateway to become one of the contributors of this network by loading onto ",(0,o.kt)("a",{parentName:"p",href:"https://console.thethingsnetwork.org/"},"The Network Console"),", or enjoy the public community network built up by the other TTN gateways!"),(0,o.kt)("p",null,"The Things Indoor gateway supports LoRaWAN 1.0.3 and therefore is compatible with other LoRaWAN sensors. Seeed Studio supplies many sensors focusing on various types of wireless environmental sensing applications. If you also need some sensors for outdoor scenarios measuring CO2, soil moisture, and temperature, just to list a few, ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-c-1339.html"},"SenseCAP sensors")," are your best choice."),(0,o.kt)("p",null,"With the use of The Things Indoor LoRaWAN WiFi Gateway, The Things Network Console, and SenseCAP LoRaWAN Sensors, you can easily build up your own IoT system at home, in your garden, in the office, supply chain, and factories. By following the ",(0,o.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf"},"step-by-step installment instruction")," provided below, you can set up the LoRaWAN gateway for your own in less than 5 mins and start your IoT journey!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/TTN%20gateway%20specification%20picture_page-0001.jpg",alt:"spec"})),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Easy installment"),": back-haul over 802.11 b/g/n WiFi via ESP8266; Simple setup in less than 5 mins"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Globally Use"),": EU868, US915, and AU915 available; support LBT (Listen-Before-Talk)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Advanced Software"),": Support the state-of-the-art BasicStation Protocol"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Great Reliability"),": Certified by CE/FCC/IC/RCM/WPC/RoHS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Convenient"),": Compact design for carrying; can be powered up via multiple power options: both wall plugs and USB type C on 900mA work. Built-in omnidirectional antenna for domestic use"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Powerful capability"),": 8 channel LoRaWAN indoor gateway based on SX1308")),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",{class:"tg"},(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"tg-gmm0",colspan:"2"},"LoRa"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Chipset"),(0,o.kt)("td",{class:"tg-2egc"},"Semtech SX1308")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Channels"),(0,o.kt)("td",{class:"tg-2egc"},"8 Channels")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Receive Sensitivity"),(0,o.kt)("td",{class:"tg-2egc"},"-140/-135 dBm (EU/US)")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Transmit Power"),(0,o.kt)("td",{class:"tg-2egc"},"Upto +27 dBM")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"LoRaWAN\xae Spec Version"),(0,o.kt)("td",{class:"tg-2egc"},"V.1.0.3")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Packet Forwarder"),(0,o.kt)("td",{class:"tg-2egc"},"Basic station protocol"))),(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",{class:"tg-gmm0",colspan:"2"},"Wi-Fi"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"SoC"),(0,o.kt)("td",{class:"tg-2egc"},"ESP9266")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Mode"),(0,o.kt)("td",{class:"tg-2egc"},"802.11 b/g/n, Client Mode")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Tx Power"),(0,o.kt)("td",{class:"tg-2egc"},"+20 dBm")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Frequency Bands"),(0,o.kt)("td",{class:"tg-2egc"},"2.4 GHz")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"WAN/LAN ports"),(0,o.kt)("td",{class:"tg-2egc"},"-")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"USB Port"),(0,o.kt)("td",{class:"tg-2egc"},"USB Type-C (900 mA)")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Security"),(0,o.kt)("td",{class:"tg-2egc"},"WPA/WPA2")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Dimensions"),(0,o.kt)("td",{class:"tg-2egc"},"90*80*40 mm")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Operating Temperature"),(0,o.kt)("td",{class:"tg-2egc"},"0-40\u2103")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Certification"),(0,o.kt)("td",{class:"tg-2egc"},"CE/FC/IC/RCM/WPC/RoHS")))),(0,o.kt)("table",{class:"tg"},(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Interfaces"),(0,o.kt)("td",{class:"tg-2egc"},"LED indicators")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Antenna Type"),(0,o.kt)("td",{class:"tg-2egc"},"Integrated")),(0,o.kt)("tr",null,(0,o.kt)("td",{class:"tg-2egc"},"Frequency Band"),(0,o.kt)("td",{class:"tg-2egc"},"AU915")))),(0,o.kt)("h2",{id:"sources"},"Sources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG.pdf"},"Get Started The Things Indoor Gateway")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/TTIG_datasheet.pdf"},"The Things Indoor Gateway Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.thethingsnetwork.org/docs/gateways/thethingsindoor/Getting_Started_TTIG_AWS.pdf"},"Getting started in for AWS"))),(0,o.kt)("h2",{id:"the-things-indoor-gateway-get-started-with-sensecap"},"The Things Indoor Gateway Get Started with SenseCAP"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/connection%20diagram.png",alt:"combo"})),(0,o.kt)("p",null,"NOTE: If you don't know about SenseCAP, here is a brief intro:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Among the first launch of Seeed industrial IoT (IIoT) product series, SenseCAP is focusing on wireless environmental sensing applications: smart agriculture, precision farming, and smart city, to name a few. It consists of hardware products (sensors, data-loggers & gateways, etc.), software services (SenseCAP portal, mobile App, open dashboard), and API for device & data management. SenseCAP supports different communication protocols, such as LoRa, 2G, 4G, NB-IoT, and more.")),(0,o.kt)("p",null,"To learn more, kindly click the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Industrial-IoT-SenseCAP-Introduction/"},"SenseCAP Introduction")),(0,o.kt)("h3",{id:"step-1-activate-your-ttig-gateway"},"Step 1: Activate your TTIG Gateway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press the reset button (small button at the back of the gateway next to the USB-C port) for 5 seconds until the LED blinks rapidly GREEN<->RED for a couple of times."),(0,o.kt)("li",{parentName:"ul"},"Hold the SETUP (button at the top of the gateway, next to the LED) for 10 seconds until the LED blinks rapidly in RED."),(0,o.kt)("li",{parentName:"ul"},"The gateway now exposes a WiFi AP whose SSID is MINIHUB-xxxxxx where xxxxxx is the last 6 digits of the gateway ID."),(0,o.kt)("li",{parentName:"ul"},"The password for this network is printed on the back panel of the device under WiFi PW."),(0,o.kt)("li",{parentName:"ul"},"Afterwards, access 192.168.4.1 on your browser to enter the WiFi config page.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/192.168.4.1.png",alt:"192"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Select the WiFi network and enter the password if it\u2019s a closed network."),(0,o.kt)("li",{parentName:"ul"},"Select the \u201cSave and Reboot\u201d option."),(0,o.kt)("li",{parentName:"ul"},"If your config is right:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The gateway will blink GREEN for a few seconds while it connects to this network."),(0,o.kt)("li",{parentName:"ul"},"Then, it will blink GREEN<->RED for a few seconds while it connects to the CUPS endpoint and fetches the necessary information to connect to the LNS traffic endpoint."))),(0,o.kt)("li",{parentName:"ul"},"If your configuration was successful, the LED will be solid GREEN which means that thegateway is connected to the LoRaWAN network and is ready to handle packets.")),(0,o.kt)("h3",{id:"step-2-gateway-registration-on-ttn-console"},"Step 2: Gateway Registration on TTN Console"),(0,o.kt)("p",null,"Load into TTN website: ",(0,o.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org"},"https://www.thethingsnetwork.org"),' and create your account, then access \u201cConsole\u201d and first click on "Gateway".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s2.1.png",alt:"2.1"}),"\nRegister your gateway:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s2.2.png",alt:"2.2"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Gateway EUI: it is shown on the "Add Network" page 192.168.4.1')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s2.3.png",alt:"2.3"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Frequency Plan: View the labels on the gateway."),(0,o.kt)("li",{parentName:"ol"},"Router: Select the router that is right for you."),(0,o.kt)("li",{parentName:"ol"},"Register: Gateway Status displays connected, indicating successful registration")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s2.4.png",alt:"2.4"})),(0,o.kt)("h3",{id:"step-3-add-sensecap-sensors-to-the-ttn-console"},"Step 3: Add SenseCAP sensors to the TTN Console"),(0,o.kt)("h4",{id:"1-obtain-device-eui-device-code-app-key-and-app-eui"},"1. Obtain Device EUI, Device Code, App Key, and App EUI"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Device EUI and Device Code are on the SenseCAP product label.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.1.png",alt:"3.1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SenseCAP sensor device\u2019s AppEUI and AppKey have been flash into the device by Seeed. Use HTTP API to retrieve App EUI and App Key. You can use browser to issue an HTTP GET request.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.2.png",alt:"3.2"})),(0,o.kt)("p",null,"In the API, replace the Device EUI and Device Code with your own Device EUI and Device Code respectively. And you will get the follwing response on the webpage which indicates your App EUI and App Key:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.3.png",alt:"3.3"})),(0,o.kt)("h4",{id:"2-add-application-and-appeui"},"2. Add Application and AppEUI"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s2.1.png",alt:"3.4"})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},'Enter the page "add application"')),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.5.png",alt:"3.5"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application ID: Enter a unique name."),(0,o.kt)("li",{parentName:"ul"},"Description: Enter a description."),(0,o.kt)("li",{parentName:"ul"},"Handler registration: select the same handler as the gateway router."),(0,o.kt)("li",{parentName:"ul"},"Select Add Application to continue.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.6.png",alt:"3.6"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.7.png",alt:"3.7"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application \u2192 Application EUIS \u2192 Manage EUIs."),(0,o.kt)("li",{parentName:"ul"},"\u2192 Add EUI"),(0,o.kt)("li",{parentName:"ul"},"Enter the node\u2019s AppEui that you got in the previous step (step 3.1)."),(0,o.kt)("li",{parentName:"ul"},"\u2192 Add EUI")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.8.png",alt:"3.8"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Add Sensor Node as Devices on TTN Console")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Application \u2192 Device \u2192 register device")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.9.png",alt:"3.9"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s3.10.png",alt:"3.10"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Device ID: Enter a unique name."),(0,o.kt)("li",{parentName:"ul"},"Device EUI: Enter the node\u2019s Device EUI that you got in the previous step (Step 3.1)."),(0,o.kt)("li",{parentName:"ul"},"App Key: Enter the node\u2019s App Key that you got in the previous step."),(0,o.kt)("li",{parentName:"ul"},"App EUI: Select the node\u2019s App EUI."),(0,o.kt)("li",{parentName:"ul"},"Register")),(0,o.kt)("h3",{id:"step-4-activate-your-sensecap-sensors"},"Step 4: Activate your SenseCAP Sensors"),(0,o.kt)("h4",{id:"power-on"},"Power On"),(0,o.kt)("p",null,"The power switch is hidden inside the device. Open the device and turn on the power before installing thesensors. Here is the step-by-step instruction:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Loosen the Sensor Probe by turning the cap counterclockwise. Use the white cap opener to make thisprocess easier. The image below uses TH Sensor as an example and applies to all other SenseCAPsensors.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s4.1.png",alt:"4.1"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"After opening the device, turn the switch to \u201cON\u201d, and the LED on the lower right corner will flash,indicating that the power is on. Wait for about 10 seconds, then the LED will flash quickly for 2 seconds,indicating that the device is connected to the network.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s4.2.png",alt:"4.2"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"After the device is connected to the network, connect the Sensor Probe back with the Sensor NodeController by turning it clockwise. Please note that the labels on both parts should be aligned as shownin the image below, otherwise the two parts will not be attached to function properly and data will notbe uploaded.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Check the Connection status of Sensor Node on TTN Console: when the status turn green, it is connected successfully."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/s4.3.png",alt:"4.3"})),(0,o.kt)("h3",{id:"step-5-data-checking"},"Step 5: data checking"),(0,o.kt)("p",null,"On the Data page, data packages are uploaded. For the format of the payload, please refer to the Decodingsection.\nHere shows the data successfully obtained by SenseCAP LoRaWAN Soil Moisture & Temperature Senosr and SenseCAP LoRaWAN CO2 Sensor:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://files.seeedstudio.com/products/113990896/wiki/soil%20data%20board.png",alt:"4.4"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://files.seeedstudio.com/products/113990896/wiki/co2%20data%20board.png",alt:"4.5"})))}d.isMDXComponent=!0}}]);
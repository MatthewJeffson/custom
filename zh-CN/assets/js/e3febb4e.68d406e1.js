"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33590],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},g=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=u(n),g=r,m=c["".concat(s,".").concat(g)]||c[g]||k[g]||o;return n?a.createElement(m,i(i({ref:e},p),{},{components:n})):a.createElement(m,i({ref:e},p))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l[c]="string"==typeof t?t:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},39572:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={description:"Connect SenseCAP M2 Multi-Platform Gateway to TTN",title:"Connecting to TTN",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},i=void 0,l={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network",id:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network",title:"Connecting to TTN",description:"Connect SenseCAP M2 Multi-Platform Gateway to TTN",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial",slug:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network",permalink:"/custom/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{description:"Connect SenseCAP M2 Multi-Platform Gateway to TTN",title:"Connecting to TTN",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Connecting to AWS IoT",permalink:"/custom/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-AWS-IoT"},next:{title:"Connecting to ChirpStack",permalink:"/custom/zh-CN/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack"}},s={},u=[{value:"<strong>1.1 TTN Configuration</strong>",id:"11-ttn-configuration",level:4},{value:"<strong>1.2 Gateway Configuration</strong>",id:"12-gateway-configuration",level:4},{value:"<strong>2.1 TTN Configuration</strong>",id:"21-ttn-configuration",level:4},{value:"<strong>2.2 Gateway Configuration</strong>",id:"22-gateway-configuration",level:4}],p={toc:u};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connect SenseCAP M2 Multi-Platform Gateway to The Things Network")," "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"connecting-via-packet-forwarders"},(0,r.kt)("strong",{parentName:"h3"},"Connecting via Packet Forwarders")))),(0,r.kt)("h4",{id:"11-ttn-configuration"},(0,r.kt)("strong",{parentName:"h4"},"1.1 TTN Configuration")),(0,r.kt)("p",null,"Log into ",(0,r.kt)("a",{parentName:"p",href:"https://eu1.cloud.thethings.network/console"},"The Things Stack"),". If you don't have a TTN account, please register first."),(0,r.kt)("p",null,"Register the gateway"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gateway EUI"),": Gateway EUI can be found on the device label or Local Console"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gateway ID"),": A unique identifier for your gateway(the ID must contain only lowercase letters, numbers, and dashes)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gateway name"),": A name of your gateway"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Frequency plan"),": Select the corresponding frequency according to your gateway version"),(0,r.kt)("p",null,"You can check the Gateway in the overview after successful registration."),(0,r.kt)("h4",{id:"12-gateway-configuration"},(0,r.kt)("strong",{parentName:"h4"},"1.2 Gateway Configuration")),(0,r.kt)("p",null,"Configure the gateway via the Web UI,please check the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf"},"Quick Start")," to log into Local Console first."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),": LoRa Network Settings")),(0,r.kt)("p",null,"Navigate to\xa0",(0,r.kt)("strong",{parentName:"p"},"LoRa")," >\xa0",(0,r.kt)("strong",{parentName:"p"},"LoRa")," ",(0,r.kt)("strong",{parentName:"p"},"Network")," "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mode:")," Packet Forward"),(0,r.kt)("p",null,"Packet Forwarder Settings:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gateway EUI"),": It will automatically get the EUI of the connected gateway "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server Address"),": The link to The Things Network server( eg: For Europe is eu1.cloud.thethings.network)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server Port(Up/Down)"),": 1700"),(0,r.kt)("p",null,"Other settings can be left as default, or can be changed to suit your requirements."),(0,r.kt)("p",null,"Click ",(0,r.kt)("strong",{parentName:"p"},"Save&Apply")," to apply your settings."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),": Channel Plan Settings")),(0,r.kt)("p",null,"Navigate to\xa0",(0,r.kt)("strong",{parentName:"p"},"LoRa")," >\xa0",(0,r.kt)("strong",{parentName:"p"},"Channel Plan")," "),(0,r.kt)("p",null,"Select the Region and Frequency plan according to the actual choice."),(0,r.kt)("p",null,"After setting, click ",(0,r.kt)("strong",{parentName:"p"},"Save&Apply")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"connecting-via-basic-station"},(0,r.kt)("strong",{parentName:"h3"},"Connecting via Basic Station")))),(0,r.kt)("h4",{id:"21-ttn-configuration"},(0,r.kt)("strong",{parentName:"h4"},"2.1 TTN Configuration")),(0,r.kt)("p",null,"Please refer to 1.1 for adding a gateway"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),": Enable Require authenticated connection")),(0,r.kt)("p",null,"This will only allow a gateway to connect if it uses a TLS enabled Basic Station or MQTT connection. It will not allow connections from UDP packet forwarders."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2:")," Create an API key")),(0,r.kt)("p",null,"Navigate to\xa0",(0,r.kt)("strong",{parentName:"p"},"API keys"),", click Add API key"),(0,r.kt)("p",null,"Choose ",(0,r.kt)("strong",{parentName:"p"},"Grant individual rights")," > Link as Gateway to a Gateway Server for traffic exchange, i.e. write uplink and read downlink"),(0,r.kt)("h4",{id:"22-gateway-configuration"},(0,r.kt)("strong",{parentName:"h4"},"2.2 Gateway Configuration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mode:")," Basics Station"),(0,r.kt)("p",null,"Basic Station Settings:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Gateway EUI"),": It will automatically get the EUI of the connected gateway "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Server"),": LNS Server"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL:")," The link to The Things Network server( eg: For Europe is eu1.cloud.thethings.network)\uff1bPort:8887"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authentication Mode:")," TLS server authentication and Client token"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"trust:")," Select the ",(0,r.kt)("a",{parentName:"p",href:"https://www.thethingsindustries.com/docs/reference/root-certificates/"},"certificate")," you need and download it, recommend\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://letsencrypt.org/certs/isrgrootx1.pem"},"Let\u2019s Encrypt ISRG Root X1 Trust")),(0,r.kt)("p",null,"Copy the data content of the certificate file (the certificate can be opened in text form)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"token:")," Authorization: Your","_","API","_","Key"),(0,r.kt)("p",null,"Other settings can be left as default, or can be changed to suit your requirements."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("h3",{parentName:"li",id:"check-the-gateway-status"},(0,r.kt)("strong",{parentName:"h3"},"Check the Gateway Status")),"After the settings are completed, we can view the live data of your gateway.")),(0,r.kt)("p",null,"You can see that your gateway is connected to TTN now."))}c.isMDXComponent=!0}}]);
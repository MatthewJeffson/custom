"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24167],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=n,m=u["".concat(p,".").concat(d)]||u[d]||k[d]||o;return a?r.createElement(m,i(i({ref:t},s),{},{components:a})):r.createElement(m,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},34220:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={description:"Connect SenseCAP M2 Multi-Platform Gateway to ChirpStack",title:"Connecting to ChirpStack",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},i=void 0,l={unversionedId:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack",id:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack",title:"Connecting to ChirpStack",description:"Connect SenseCAP M2 Multi-Platform Gateway to ChirpStack",source:"@site/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack.md",sourceDirName:"Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial",slug:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-ChirpStack.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676304e3,formattedLastUpdatedAt:"Feb 13, 2023",frontMatter:{description:"Connect SenseCAP M2 Multi-Platform Gateway to ChirpStack",title:"Connecting to ChirpStack",keywords:["SenseCAP Network"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"Connecting to TTN",permalink:"/Network/SenseCAP_Network/SenseCAP_M2_Multi_Platform/Tutorial/Connect-M2-Multi-Platform-Gateway-to-The-Things-Network"},next:{title:"The Sensor Prototype Kit Introduction",permalink:"/K1100-Getting-Started"}},p={},c=[{value:"<strong>1.1 Add Gateway</strong>",id:"11-add-gateway",level:5},{value:"<strong>1.2 Add Device</strong>",id:"12-add-device",level:5}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Connect SenseCAP")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("h4",{parentName:"li",id:"chirpstack-configuration"},(0,n.kt)("inlineCode",{parentName:"h4"},"\xa0"),(0,n.kt)("strong",{parentName:"h4"},"ChirpStack Configuration")),"ChirpStack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including an user-friendly web-interface for device management and APIs for integration.")),(0,n.kt)("h5",{id:"11-add-gateway"},(0,n.kt)("strong",{parentName:"h5"},"1.1 Add Gateway")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),": ",(0,n.kt)("a",{parentName:"li",href:"https://www.chirpstack.io/application-server/use/login/"},"Login"),"\xa0into the\xa0",(0,n.kt)("a",{parentName:"li",href:"https://www.chirpstack.io/application-server/"},"ChirpStack Application Server"),". ")),(0,n.kt)("p",null,"The default credentials are:Username: admin;Password: admin"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),":If you have not yet connected your\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.chirpstack.io/project/application-server/"},"ChirpStack Application Server"),"\xa0instance with a\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.chirpstack.io/project/network-server/"},"ChirpStack Network Server"),"\xa0instance, you need do this first. See\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.chirpstack.io/application-server/use/network-servers/"},"Network servers"),". Also you need connect the organization with the network-server by creating a\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.chirpstack.io/application-server/use/service-profiles/"},"Service profile"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),": Add gateway")),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"Gateways >\xa0Add gateway")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gateway name"),": A name of your gateway"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gateway EUI"),": Gateway EUI can be found on the device label or Local Console"),(0,n.kt)("h5",{id:"12-add-device"},(0,n.kt)("strong",{parentName:"h5"},"1.2 Add Device")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),": Add device profile")),(0,n.kt)("p",null,"Before you can add your device to ChirpStack, you have to create a\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.chirpstack.io/application-server/use/device-profiles/"},"Device-profile"),"\xa0if you haven't done this already."),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"Device profile>\xa0Add device profile")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name"),": A name of your deivce profile"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Region"),":Select the Region plan according to your gateway."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"MAC version"),": LoRaWAN 1.0.3"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Regional parameters revision"),": A"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"ADR algorithm"),": Default ADR algorithm( LoRa only)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Select MAC version/Regional parameters revision/ADR algorithm according to your device. For details, please refer to:",(0,n.kt)("a",{parentName:"p",href:"https://lora-alliance.org/resource%5C_hub/"},"https://lora-alliance.org/resource\\_hub/")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),": Add device")),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"Application >\xa0Add Application")),(0,n.kt)("p",null,"Click the application to which you want to add your device. Under the\xa0",(0,n.kt)("strong",{parentName:"p"},"Devices"),"\xa0tab, click\xa0",(0,n.kt)("strong",{parentName:"p"},"Add device")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Name"),": A name of your device"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Device EUI"),": Device EUI can be found on the device label or SenseCAP Mate APP"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Device profile"),": Choose the device profile we create in 1.2 step1."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("h4",{parentName:"li",id:"gateway-configuration"},(0,n.kt)("strong",{parentName:"h4"},"Gateway Configuration")),"Configure the gateway via the Web UI,please check the ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/SenseCAP/M2_Multi-Platform_Gateway/Quick_Start_for_SenseCAP_Gateway_&_Sensors.pdf"},"Quick Start\xa0"),"to log into Local Console first.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),": LoRa Network Settings")),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"LoRa >\xa0LoRa\xa0Network")," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Mode:")," Packet Forward"),(0,n.kt)("p",null,"Packet Forwarder Settings:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Gateway EUI"),": It will automatically get the EUI of the connected gateway "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Server Address"),": Your ChirpStack Server address"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Server Port(Up/Down)"),": 1700"),(0,n.kt)("p",null,"Other settings can be left as default, or can be changed to suit your requirements."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2:")," Channel Plan Settings")),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"LoRa >\xa0Channel Plan")," "),(0,n.kt)("p",null,"Select the Region and Frequency plan according to the actual choice."),(0,n.kt)("p",null,"After setting, click ",(0,n.kt)("strong",{parentName:"p"},"Save&Apply")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("h4",{parentName:"li",id:"data-view"},(0,n.kt)("strong",{parentName:"h4"},"Data View")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Gateway data"))),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"Gateways"),", choose the gateway you want to check"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Device data"))),(0,n.kt)("p",null,"After adding your LoRaWAN device to ChirpStack, validate that your device is able activate (in case of OTAA) and send data."),(0,n.kt)("p",null,"Navigate to\xa0",(0,n.kt)("strong",{parentName:"p"},"Applications")," >\xa0",(0,n.kt)("strong",{parentName:"p"},"Devices"),", choose the device you want to check"))}u.isMDXComponent=!0}}]);
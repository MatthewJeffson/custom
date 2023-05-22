"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=i,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return t?a.createElement(h,r(r({ref:n},c),{},{components:t})):a.createElement(h,r({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=u;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},55461:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const o={description:"reTerminal DM CANBUS with Node-RED",title:"reTerminal DM CANBUS with Node-RED",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Node-Red-canbus",last_update:{date:"04/28/2023",author:"Peter Pan"}},r="reTerminal DM CAN BUS with Node-RED",l={unversionedId:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-canbus",id:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-canbus",title:"reTerminal DM CANBUS with Node-RED",description:"reTerminal DM CANBUS with Node-RED",source:"@site/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-canbus.md",sourceDirName:"Edge/reTerminal-DM/Node-Red",slug:"/reTerminal-DM-Node-Red-canbus",permalink:"/zh-CN/reTerminal-DM-Node-Red-canbus",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-canbus.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1682611200,formattedLastUpdatedAt:"2023\u5e744\u670827\u65e5",frontMatter:{description:"reTerminal DM CANBUS with Node-RED",title:"reTerminal DM CANBUS with Node-RED",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Node-Red-canbus",last_update:{date:"04/28/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM MQTT with Node-RED",permalink:"/zh-CN/reTerminal-DM-Node-Red-mqtt"},next:{title:"reComputer for Jetson Series Introduction",permalink:"/zh-CN/reComputer_Jetson_Series_Introduction"}},d={},s=[{value:"Brief info about CAN BUS",id:"brief-info-about-can-bus",level:2},{value:"CAN BUS &amp; Node-RED",id:"can-bus--node-red",level:3},{value:"Getting start with CAN BUS Node on reTerminal DM",id:"getting-start-with-can-bus-node-on-reterminal-dm",level:2},{value:"Prerequisite",id:"prerequisite",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Hardware preparation",id:"hardware-preparation",level:5},{value:"Software",id:"software",level:4},{value:"Install Socketcan Node",id:"install-socketcan-node",level:5},{value:"Configure CAN BUS on reTerminal DM",id:"configure-can-bus-on-reterminal-dm",level:5},{value:"Configure Host computer usb-can software and driver",id:"configure-host-computer-usb-can-software-and-driver",level:5},{value:"Socketcan Node with reTerminal DM",id:"socketcan-node-with-reterminal-dm",level:3},{value:"Import the Flows",id:"import-the-flows",level:4},{value:"Final Test and Result",id:"final-test-and-result",level:4},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reterminal-dm-can-bus-with-node-red"},"reTerminal DM CAN BUS with Node-RED"),(0,i.kt)("h2",{id:"brief-info-about-can-bus"},"Brief info about CAN BUS"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg",alt:"pir",width:"600",height:"auto"})),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("br",null),(0,i.kt)("h3",{id:"can-bus--node-red"},"CAN BUS & Node-RED"),(0,i.kt)("p",null,"CAN bus (Controller Area Network bus) is a type of network used to connect multiple electronic control units (ECUs) within a vehicle or industrial system. It was originally developed by Bosch in the 1980s and has become an international standard (ISO 11898) for serial communication in vehicles and other applications."),(0,i.kt)("p",null,"The CAN bus enables high-speed data exchange between ECUs, allowing them to share information and coordinate their activities. It uses a two-wire system, with one wire for transmitting data and the other for receiving data, and it supports multiple nodes, making it ideal for use in complex systems where many devices need to communicate with each other."),(0,i.kt)("p",null,"CAN bus technology is widely used in the automotive industry for a variety of applications, including engine control, transmission control, ABS (anti-lock braking system), airbag control, and many others. It is also used in other industries, such as industrial automation, medical equipment, and aerospace, where reliable and efficient communication between devices is essential."),(0,i.kt)("p",null,"CAN bus has many advantages, including high reliability, low cost, and the ability to operate in harsh environments. It is easy to install and maintain, and it is highly resistant to electromagnetic interference. These features make it an ideal choice for many different applications where reliable and efficient communication is required."),(0,i.kt)("h2",{id:"getting-start-with-can-bus-node-on-reterminal-dm"},"Getting start with CAN BUS Node on reTerminal DM"),(0,i.kt)("p",null,"To use Node-RED with CAN bus, you will need a CAN bus interface device that connects to the reTerminal DM CAN BUS port, and a Node-RED CAN bus node that allows you to send and receive messages on the network, in this case we will explore the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-red-contrib-socketcan")," nodes together. Once you have installed the CAN bus node in Node-RED, you can start building flows that read data from the CAN bus network, process it, and send it to other systems or devices. For example, you can read the engine RPM from a vehicle's CAN bus, process the data to calculate fuel consumption, and send the result to a dashboard for display."),(0,i.kt)("p",null,"You can find more information in the ",(0,i.kt)("a",{parentName:"p",href:"https://flows.nodered.org/node/node-red-contrib-socketcan"},"node-red-contrib-socketcan")," page."),(0,i.kt)("p",null,"If you are using Senscraft Edge OS you can skip the Socketcan node installation steps."),(0,i.kt)("h3",{id:"prerequisite"},"Prerequisite"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 x reTerminal DM"),(0,i.kt)("li",{parentName:"ul"},"1 x Host Computer"),(0,i.kt)("li",{parentName:"ul"},"1 x ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},"USB-CAN Analyzer"))),(0,i.kt)("h5",{id:"hardware-preparation"},"Hardware preparation"),(0,i.kt)("p",null,"Please connect the Hardware as shown below"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus-connection.png"})),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Host Computer should be able to have internet connection to the reTerminal DM to perform the follow setup steps.")),(0,i.kt)("h5",{id:"install-socketcan-node"},"Install Socketcan Node"),(0,i.kt)("p",null,"In this Wiki tutorial we are going to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-red-contrib-socketcan")," node, so please install the ",(0,i.kt)("inlineCode",{parentName:"p"},"node-red-contrib-socketcan")," with the guide ",(0,i.kt)("a",{parentName:"p",href:"/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes"},"install nodes"),"."),(0,i.kt)("h5",{id:"configure-can-bus-on-reterminal-dm"},"Configure CAN BUS on reTerminal DM"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Assume you have access direct access of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Terminal")," app on reTerminal DM or access reTerminal DM via SSH, if not please follow the first step ",(0,i.kt)("a",{parentName:"p",href:"/reTerminal-DM-Getting-Started-with-Node-Red#install-node-red"},"here")," to get yourself familiar on how to do it.")),(0,i.kt)("p",null,"Please key in the following command one-by-one to enable a virtual can device called can0 with the CAN BUS port on reTerminal DM."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install can-utils\nsudo ip link set can0 up type can bitrate 250000\nsudo ifconfig can0 txqueuelen 1000\nsudo ip link set can0 up\n")),(0,i.kt)("p",null,"After entering above commands you should see ",(0,i.kt)("inlineCode",{parentName:"p"},"can0")," device with ",(0,i.kt)("inlineCode",{parentName:"p"},"ifconfig")," command as shown below:"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/interface/canbus.png"})),(0,i.kt)("h5",{id:"configure-host-computer-usb-can-software-and-driver"},"Configure Host computer usb-can software and driver"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are using the same ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-CAN-Analyzer-p-2888.html"},"USB-CAN Analyzer"),", you can follow the steps below to setup the software driver for using the analyzer.")),(0,i.kt)("p",null,"Please visit the ",(0,i.kt)("inlineCode",{parentName:"p"},"USB-CAN Analyzer")," driver github repo ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kobolt/usb-can"},"USB-CAN Analyzer system driver")," and follow the Readme section to install the driver according to you Operating System."),(0,i.kt)("p",null,"The example commands to send and receive CAN bus Traffic"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# dump CAN bus traffic from CAN bus\n$ ./canusb -t -d /dev/ttyUSB0 -s 250000 -t\n\n# send the bytes 0x00112233 from ID 005 on at CAN bus\n$ ./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233\n\n")),(0,i.kt)("h3",{id:"socketcan-node-with-reterminal-dm"},"Socketcan Node with reTerminal DM"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/socketcan-nodes.png"})),(0,i.kt)("h4",{id:"import-the-flows"},"Import the Flows"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The following steps just for tutorial purpose, in this section we will show you how to quickly import flow by copy the JSON format flow and paste to the input box of the import nodes pop-up menu. ")),(0,i.kt)("p",null,"STEP 1: Open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Import nodes")," window by click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Setting Button")," and then click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Import")," button "),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/import-flow.png"})),(0,i.kt)("p",null,"STEP 2: copy the following flow JSON"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'\n[\n    {\n        "id": "829af3ee.a57c1",\n        "type": "tab",\n        "label": "CAN BUS",\n        "disabled": false,\n        "info": ""\n    },\n    {\n        "id": "7b24a62e.8f5458",\n        "type": "debug",\n        "z": "829af3ee.a57c1",\n        "name": "",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "x": 350,\n        "y": 360,\n        "wires": []\n    },\n    {\n        "id": "5f671b29.cd24bc",\n        "type": "socketcan-out",\n        "z": "829af3ee.a57c1",\n        "name": "socketcan-out",\n        "config": "d9bf56bb5f3e2f92",\n        "x": 150,\n        "y": 360,\n        "wires": [\n            [\n                "7b24a62e.8f5458"\n            ]\n        ]\n    },\n    {\n        "id": "caba412f.047b2",\n        "type": "socketcan-in",\n        "z": "829af3ee.a57c1",\n        "name": "socketcan-in",\n        "config": "d9bf56bb5f3e2f92",\n        "x": 350,\n        "y": 120,\n        "wires": []\n    },\n    {\n        "id": "a64240cb.3f0788",\n        "type": "inject",\n        "z": "829af3ee.a57c1",\n        "name": "Send object - std",\n        "props": [\n            {\n                "p": "payload"\n            },\n            {\n                "p": "topic",\n                "vt": "str"\n            }\n        ],\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "topic": "",\n        "payload": "{\\"ext\\":false,\\"canid\\":123,\\"dlc\\":5,\\"data\\":[1,2,3,4,5]}",\n        "payloadType": "json",\n        "x": 160,\n        "y": 120,\n        "wires": [\n            [\n                "caba412f.047b2"\n            ]\n        ]\n    },\n    {\n        "id": "3ff96369.ef6f5c",\n        "type": "inject",\n        "z": "829af3ee.a57c1",\n        "name": "Send string - std",\n        "props": [\n            {\n                "p": "payload"\n            },\n            {\n                "p": "topic",\n                "vt": "str"\n            }\n        ],\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "topic": "",\n        "payload": "123#00112233",\n        "payloadType": "str",\n        "x": 160,\n        "y": 200,\n        "wires": [\n            [\n                "caba412f.047b2"\n            ]\n        ]\n    },\n    {\n        "id": "6879c00a.5edb68",\n        "type": "inject",\n        "z": "829af3ee.a57c1",\n        "name": "Send string - ext",\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "topic": "",\n        "payload": "1F334455#1122334455667788",\n        "payloadType": "str",\n        "x": 160,\n        "y": 240,\n        "wires": [\n            [\n                "caba412f.047b2"\n            ]\n        ]\n    },\n    {\n        "id": "1ee3b274.4cb8fe",\n        "type": "inject",\n        "z": "829af3ee.a57c1",\n        "name": "Send object - ext",\n        "props": [\n            {\n                "p": "payload"\n            },\n            {\n                "p": "topic",\n                "vt": "str"\n            }\n        ],\n        "repeat": "",\n        "crontab": "",\n        "once": false,\n        "onceDelay": 0.1,\n        "topic": "",\n        "payload": "{\\"ext\\":true,\\"canid\\":32278,\\"dlc\\":5,\\"data\\":[1,2,3,4,5]}",\n        "payloadType": "json",\n        "x": 160,\n        "y": 160,\n        "wires": [\n            [\n                "caba412f.047b2"\n            ]\n        ]\n    },\n    {\n        "id": "391a4c45.7acd8c",\n        "type": "comment",\n        "z": "829af3ee.a57c1",\n        "name": "Send CAN frames in using different payloads on CAN0",\n        "info": "",\n        "x": 260,\n        "y": 80,\n        "wires": []\n    },\n    {\n        "id": "912f9928.da2758",\n        "type": "comment",\n        "z": "829af3ee.a57c1",\n        "name": "Receiove CAN data from interface CAN0",\n        "info": "",\n        "x": 220,\n        "y": 320,\n        "wires": []\n    },\n    {\n        "id": "d9bf56bb5f3e2f92",\n        "type": "socketcan-config",\n        "interface": "can0"\n    }\n]\n\n')),(0,i.kt)("p",null,"STEP 3: At the ",(0,i.kt)("inlineCode",{parentName:"p"},"Import nodes")," window, please select the ",(0,i.kt)("inlineCode",{parentName:"p"},"Clipboard")," tab and then paste the above json flow code to the ",(0,i.kt)("inlineCode",{parentName:"p"},"red dialog box"),", then click the ",(0,i.kt)("inlineCode",{parentName:"p"},"import")," button."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/paste-json-import.png"})),(0,i.kt)("p",null,"STEP 4: You should see a new flow tab called ",(0,i.kt)("inlineCode",{parentName:"p"},"CAN BUS")," created after the above steps, and please check if the flow the same as the shown below"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/check-deply.png"})),(0,i.kt)("p",null,"STEP 5: to setup the can interface, you will need to double click the ",(0,i.kt)("inlineCode",{parentName:"p"},"socketcan-in node")," to open the ",(0,i.kt)("inlineCode",{parentName:"p"},"edit node")," window."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node.png"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you have complete the step in the ",(0,i.kt)("a",{parentName:"p",href:"#configure-can-bus-on-reterminal-dm"},"Configure CAN BUS on reTerminal DM setion")," to create a can0 interface device on the the reTerminal DM")),(0,i.kt)("p",null,"STEP 6: At the ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit socketcan-in node")," window click the ",(0,i.kt)("inlineCode",{parentName:"p"},"pencil")," icon at the ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," option to open the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add new socketcan-config config node")," window"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-can-interface.png"})),(0,i.kt)("p",null,"STEP 7: At the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add new socketcan-config config node")," window please enter ",(0,i.kt)("inlineCode",{parentName:"p"},"can0")," at the interface dialog box"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/enter-can-interface.png"})),(0,i.kt)("p",null,"STEP 8: once you clicked the ",(0,i.kt)("inlineCode",{parentName:"p"},"Add")," button from the above steps you should see the ",(0,i.kt)("inlineCode",{parentName:"p"},"interface")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"can0")," and then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Done")," to apply."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-can-interface.png"})),(0,i.kt)("p",null,"STEP 9: setup the CAN Bus interface for ",(0,i.kt)("inlineCode",{parentName:"p"},"socketcan-out"),", which just need to double click the ",(0,i.kt)("inlineCode",{parentName:"p"},"scoketcan-out")," node and select ",(0,i.kt)("inlineCode",{parentName:"p"},"can0")," for Config, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Done")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/open-edit-node-1.png"})),(0,i.kt)("p",null,"STEP 10: Please Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Deploy")," now"),(0,i.kt)("h4",{id:"final-test-and-result"},"Final Test and Result"),(0,i.kt)("p",null,"Congratulations, you have successfully experienced and learned how to use CAN Bus protocol with reTerminal DM and node-RED now, your final results should be similar as the image shown below"),(0,i.kt)("p",null,"For Host Computer Send CAN Bus data and reTerminal DM Receive:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"So from the Host Computer terminal window you can execute ",(0,i.kt)("inlineCode",{parentName:"li"},"./canusb -d /dev/ttyUSB0 -s 250000 -t -i 5 -j 00112233")," command to send ",(0,i.kt)("inlineCode",{parentName:"li"},"00112233")," (in hex) to the reTerminal DM, and from the reTerminal DM debug window you can see the data is")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},"0: 0 \n1: 17 \n2: 34\n3: 51\n")),(0,i.kt)("p",null,"where its the binary represent of ",(0,i.kt)("inlineCode",{parentName:"p"},"x00 x11 x22 x33")," HEX data set."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-send.png"})),(0,i.kt)("p",null,"For Host Computer Receive CAN Bus dta and reTerminal DM Send:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You will need to click the ",(0,i.kt)("inlineCode",{parentName:"li"},"inject")," button in the reTerminal DM Node-Red as shown in the image below to send the data ",(0,i.kt)("inlineCode",{parentName:"li"},"01 02 03 04 05")," to Host Computer, and as you can see in the host computer terminal window the command for receive is ",(0,i.kt)("inlineCode",{parentName:"li"},"./canusb -t -d /dev/ttyUSB0 -s 250000 -t"),", the received data are ",(0,i.kt)("inlineCode",{parentName:"li"},"05 04 03 02 01")," as its in the first in first out order:")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/Host-receive.png"})),(0,i.kt)("h1",{id:"explore-more-nodes-on-reterminal-dm-with-node-red"},"Explore more nodes on reTerminal DM with node-RED"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-RS485"},"reTerminal DM RS485 Port with Node-RED")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-mqtt"},"reTerminal DM MQTT with Node-RED"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
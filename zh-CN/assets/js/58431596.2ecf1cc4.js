"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73488:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={description:"reTerminal DM MQTT with Node-RED",title:"reTerminal DM MQTT with Node-RED",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Node-Red-mqtt",last_update:{date:"04/27/2023",author:"Peter Pan"}},r="reTerminal DM MQTT with Node-RED",l={unversionedId:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-mqtt",id:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-mqtt",title:"reTerminal DM MQTT with Node-RED",description:"reTerminal DM MQTT with Node-RED",source:"@site/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-mqtt.md",sourceDirName:"Edge/reTerminal-DM/Node-Red",slug:"/reTerminal-DM-Node-Red-mqtt",permalink:"/zh-CN/reTerminal-DM-Node-Red-mqtt",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-mqtt.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1682524800,formattedLastUpdatedAt:"2023\u5e744\u670826\u65e5",frontMatter:{description:"reTerminal DM MQTT with Node-RED",title:"reTerminal DM MQTT with Node-RED",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Node-Red-mqtt",last_update:{date:"04/27/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM RS485 Port with Node-RED",permalink:"/zh-CN/reTerminal-DM-Node-Red-RS485"},next:{title:"reTerminal DM CANBUS with Node-RED",permalink:"/zh-CN/reTerminal-DM-Node-Red-canbus"}},s={},d=[{value:"Brief info about MQTT",id:"brief-info-about-mqtt",level:2},{value:"MQTT &amp; Node-RED",id:"mqtt--node-red",level:3},{value:"prerequisite",id:"prerequisite",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Install MQTT Broker Eclipse Mosquitto",id:"install-mqtt-broker-eclipse-mosquitto",level:2},{value:"MQTT Node with reTerminal DM",id:"mqtt-node-with-reterminal-dm",level:2},{value:"Edit the Flows",id:"edit-the-flows",level:3},{value:"Final Result",id:"final-result",level:4},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reterminal-dm-mqtt-with-node-red"},"reTerminal DM MQTT with Node-RED"),(0,o.kt)("h2",{id:"brief-info-about-mqtt"},"Brief info about MQTT"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg",alt:"pir",width:"600",height:"auto"})),(0,o.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,o.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,o.kt)("strong",null,(0,o.kt)("span",null,(0,o.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,o.kt)("br",null),(0,o.kt)("h3",{id:"mqtt--node-red"},"MQTT & Node-RED"),(0,o.kt)("p",null,"MQTT (Message Queuing Telemetry Transport) is a lightweight messaging protocol that is designed to enable communication between devices in a machine-to-machine (M2M) or Internet of Things (IoT) context. MQTT was developed by IBM in 1999 and later became an open standard. MQTT is designed to be a simple and efficient way of sending small packets of data between devices. It uses a publish/subscribe messaging pattern where messages are published to a broker and then delivered to all subscribers who have subscribed to a particular topic. This allows devices to communicate with each other without having to know each other's IP addresses or other network details. MQTT is particularly useful in situations where devices are connected over unreliable networks, such as low-bandwidth or high-latency networks, because it uses a small amount of bandwidth and has a low overhead. It also supports Quality of Service (QoS) levels, which allows for different levels of reliability in message delivery. MQTT has become a popular choice for IoT and M2M applications because of its simplicity and efficiency, and it is supported by a wide range of devices and platforms."),(0,o.kt)("p",null,"A MQTT broker is a server that acts as a central point for the exchange of MQTT messages between devices in an MQTT-based IoT or M2M network. It receives messages published by devices and distributes them to other devices that have subscribed to the same topics."),(0,o.kt)("p",null,"MQTT is one of the many protocols that Node-RED supports, making it a great tool for building MQTT-based IoT applications. Node-RED provides built-in nodes for MQTT, which allows users to connect to an MQTT broker and publish or subscribe to messages. The MQTT nodes can be easily configured using the Node-RED interface, and users can specify the broker address, port, client ID, username, and password. The nodes also support MQTT QoS levels, which can be set to ensure reliable message delivery. In Node-RED, users can create flows that handle incoming MQTT messages and perform various actions based on the message payload. For example, a flow could subscribe to a temperature sensor's MQTT topic, parse the temperature value, and then send an alert if the temperature exceeds a certain threshold. Node-RED also provides various nodes for integrating with other IoT services and devices, such as HTTP endpoints, databases, and cloud services. This allows users to easily build complex IoT applications that can communicate with a wide range of devices and services."),(0,o.kt)("p",null,"Overall, Node-RED provides a simple and intuitive way to build MQTT-based IoT applications, thanks to its built-in MQTT nodes and support for other IoT services and devices."),(0,o.kt)("h1",{id:"getting-start-with-mqtt-node-on-reterminal-dm"},"Getting start with MQTT Node on reTerminal DM"),(0,o.kt)("p",null,"Since MQTT node is built-in with Node-RED you can use the MQTT node with any extra step for installing nodes, However you will need to have a mqtt broker to publish or subscribe message to a topic. Therefore, the following steps will include on how to install local MQTT Broker on reTerminal DM and then utilising the MQTT Broker for sending and receiving messages."),(0,o.kt)("h2",{id:"prerequisite"},"prerequisite"),(0,o.kt)("h3",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 x reTerminal DM"),(0,o.kt)("li",{parentName:"ul"},"1 x Host Computer")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Host Comupter should be able to have internet connection to the reTerminal DM to perform the follow setup steps.")),(0,o.kt)("h3",{id:"software"},"Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"MQTT Broker ",(0,o.kt)("a",{parentName:"li",href:"https://mosquitto.org/"},"Eclipse Mosquitto"))),(0,o.kt)("h2",{id:"install-mqtt-broker-eclipse-mosquitto"},"Install MQTT Broker ",(0,o.kt)("a",{parentName:"h2",href:"https://mosquitto.org/"},"Eclipse Mosquitto")),(0,o.kt)("p",null,"In this section we will install the ",(0,o.kt)("a",{parentName:"p",href:"https://mosquitto.org/"},"Eclipse Mosquitto"),", which is an open-source MQTT broker that is widely used in IoT and M2M applications. It is developed by the Eclipse Foundation and is available under the Eclipse Public License. Mosquitto is designed to be lightweight and efficient, making it well-suited for use on low-power devices and in environments with limited network bandwidth. It supports the latest MQTT 5.0 protocol, as well as earlier versions such as MQTT 3.1.1."),(0,o.kt)("p",null,"First of all please go ahead and refreshing your knowledge with accessing reTerminal DM via SSH, please check the steps ",(0,o.kt)("a",{parentName:"p",href:"/reterminal-dm-flash-OS#install-drivers"},"here")),(0,o.kt)("p",null,"Once you have access the reTerminal DM with SSH you can proceed to the steps below:"),(0,o.kt)("p",null,"STEP 1: Update the package list by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,o.kt)("p",null,"STEP 2: Install Mosquitto by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install mosquitto\n")),(0,o.kt)("p",null,"STEP 3: Install the Mosquitto client tools by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install mosquitto-clients\n")),(0,o.kt)("p",null,"STEP 4: Once the installation is complete, you can start the Mosquitto service by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start mosquitto\n")),(0,o.kt)("p",null,"STEP 5: To check if Mosquitto is running, you can run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl status mosquitto\n")),(0,o.kt)("p",null,"By default, Mosquitto is configured to listen on ",(0,o.kt)("inlineCode",{parentName:"p"},"port 1883")," for MQTT traffic. You can test the installation by subscribing to a topic using the Mosquitto client tools, like so:"),(0,o.kt)("p",null,"Open a new SSH session and run the following command to subscribe to a topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"mosquitto_sub -h localhost -t test\n")),(0,o.kt)("p",null,"In another SSH session, run the following command to publish a message to the same topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'mosquitto_pub -h localhost -t test -m "Hello, world!"\n')),(0,o.kt)("p",null,'You should see the message "Hello, world!" appear in the first SSH session window where you ran the mosquitto_sub command.'),(0,o.kt)("p",null,"And that's it! You have successfully installed Mosquitto on your reTerminal DM and tested it using the Mosquitto client tools. Now lets dig into the Node-RED way of MQTT communications"),(0,o.kt)("h2",{id:"mqtt-node-with-reterminal-dm"},"MQTT Node with reTerminal DM"),(0,o.kt)("p",null,"In Node-RED, there are MQTT in and MQTT out which represent Subscribe and Publish respectively."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-nodes.png"})),(0,o.kt)("h3",{id:"edit-the-flows"},"Edit the Flows"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following steps just for tutorial purpose, where we will use mqtt-in to subscribe the message from the mqtt out published message to the same topic.")),(0,o.kt)("p",null,"STEP 1: Drag ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt in")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow Editor")," panel"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-in.png"})),(0,o.kt)("p",null,"STEP 2: Config the ",(0,o.kt)("inlineCode",{parentName:"p"},"Modbus Server")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt in")," node"),(0,o.kt)("p",null,"STEP 2-1: Double click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt in")," to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node editor panel")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor.png"})),(0,o.kt)("p",null,"STEP 2-2: Click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"pencil")," icon for the server configuration option"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-node-editor-click.png"})),(0,o.kt)("p",null,"Once you clicked the ",(0,o.kt)("inlineCode",{parentName:"p"},"pencil")," icon you should see the ",(0,o.kt)("inlineCode",{parentName:"p"},"Add new mqtt-broker config node")," configuration panel"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-broker-config.png"})),(0,o.kt)("p",null,"STEP 2-3: At the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," tab please config the following field accordingly"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-connection-config.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For now you can leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"Security")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Messages")," tab untouched.")),(0,o.kt)("p",null,"STEP 2-4: Setup the Topic to subscribe here we use ",(0,o.kt)("inlineCode",{parentName:"p"},"test-mqtt"),", and leave everything else as default, then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," button."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/sub-topic-setup.png"})),(0,o.kt)("p",null,"STEP 2-5: the following steps will introduce the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," node, which in this case it is used to view and debug the subscribed topic output from ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt in"),", as shown in the image below"),(0,o.kt)("p",null,"STEP 2-5-1: So please drag a ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," node to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow Editor")," panel"),(0,o.kt)("p",null,"STEP 2-5-2: Connect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," node with ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt in")," node"),(0,o.kt)("p",null,"STEP 2-5-3: Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"little bug button")," at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option and Config panel")," to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug console")," at the ",(0,o.kt)("inlineCode",{parentName:"p"},"Option and Config panel")),(0,o.kt)("p",null,"STEP 2-5-4: Click the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deploy")," button to deploy the flow"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-debug-node.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Since we have not setup any mqtt topic publisher yet, so there will be no message displayed in the  ",(0,o.kt)("inlineCode",{parentName:"p"},"debug console"))),(0,o.kt)("p",null,"STEP 3: Setup the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt out")," node "),(0,o.kt)("p",null,"STEP 3-1: Double click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt out")," node to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node editor panel")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-mqtt-out.png"})),(0,o.kt)("p",null,"STEP 3-1: So please drag a ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt out")," node to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow Editor")," panel as shown in the image below"),(0,o.kt)("p",null,"STEP 3-1-1: You should select the same Server that we have setup in the ",(0,o.kt)("inlineCode",{parentName:"p"},"STEP 2-3:")," which is ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:1883")),(0,o.kt)("p",null,"STEP 3-1-2: You must setup the same Topic name as the ",(0,o.kt)("inlineCode",{parentName:"p"},"STEP 2-4:")," topic setting which is ",(0,o.kt)("inlineCode",{parentName:"p"},"test-mqtt"),"."),(0,o.kt)("p",null,"STEP 3-1-3: similarly the QoS should align as the ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt in")," setting as ",(0,o.kt)("inlineCode",{parentName:"p"},"2")),(0,o.kt)("p",null,"STEP 3-1-4: Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")," to complete the setup"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/mqtt-out-setup.png"})),(0,o.kt)("p",null,"STEP 4: Setup the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," node"),(0,o.kt)("p",null,"STEP 4-1: Drag ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," node to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Flow Editor")," panel"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-inject.png"})),(0,o.kt)("p",null,"STEP 4-2: Double click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," node to open the ",(0,o.kt)("inlineCode",{parentName:"p"},"Node editor panel"),", you should see the default setup of the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," node"),(0,o.kt)("p",null,"STEP 4-2-1: click the ",(0,o.kt)("inlineCode",{parentName:"p"},"x")," to at the msg.topic line to remove it"),(0,o.kt)("p",null,"STEP 4-2-2: click the ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," option to open a drop down list at the ",(0,o.kt)("inlineCode",{parentName:"p"},"msg.payload")," line"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inject-node-config.png"})),(0,o.kt)("p",null,"STEP 4-2-3: Select the ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," option at the drop down list"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/select-string.png"})),(0,o.kt)("p",null,"STEP 4-2-4: At the message box please enter ",(0,o.kt)("inlineCode",{parentName:"p"},"this is the message")," as the message we are going to send to the ",(0,o.kt)("inlineCode",{parentName:"p"},"test-mqtt")," topic, and then click ",(0,o.kt)("inlineCode",{parentName:"p"},"Done")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/edit-string.png"})),(0,o.kt)("p",null,"STEP 4-2-5: Connect to the ",(0,o.kt)("inlineCode",{parentName:"p"},"inject")," node with ",(0,o.kt)("inlineCode",{parentName:"p"},"mqtt out")," node and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Delpoy")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/connect-mqtt-out.png"})),(0,o.kt)("h4",{id:"final-result"},"Final Result"),(0,o.kt)("p",null,"Congratulations, you have successfully experienced and learned how to use MQTT protocol with reTerminal DM and node-RED now, your final results should be similar as the image shown below"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-result-mqtt.png"})),(0,o.kt)("p",null,"You can copy the following JSON code to import the Nodes"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "8d317d539464f080",\n        "type": "tab",\n        "label": "MQTT",\n        "disabled": false,\n        "info": "",\n        "env": []\n    },\n    {\n        "id": "128fa85f993944d6",\n        "type": "mqtt in",\n        "z": "8d317d539464f080",\n        "name": "",\n        "topic": "test-mqtt",\n        "qos": "2",\n        "datatype": "auto-detect",\n        "broker": "b6a7c986cb61ea54",\n        "nl": false,\n        "rap": true,\n        "rh": 0,\n        "inputs": 0,\n        "x": 300,\n        "y": 220,\n        "wires": [\n            [\n                "a022e0bf3404fdd9"\n            ]\n        ]\n    },\n    {\n        "id": "a022e0bf3404fdd9",\n        "type": "debug",\n        "z": "8d317d539464f080",\n        "name": "debug 2",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "statusVal": "",\n        "statusType": "auto",\n        "x": 500,\n        "y": 220,\n        "wires": []\n    },\n    {\n        "id": "9d0098383c96ee8b",\n        "type": "mqtt out",\n        "z": "8d317d539464f080",\n        "name": "",\n        "topic": "test-mqtt",\n        "qos": "2",\n        "retain": "",\n        "respTopic": "",\n        "contentType": "",\n        "userProps": "",\n        "correl": "",\n        "expiry": "",\n        "broker": "b6a7c986cb61ea54",\n        "x": 520,\n        "y": 320,\n        "wires": []\n    },\n    {\n        "id": "3c967b7d5cc112fc",\n        "type": "inject",\n        "z": "8d317d539464f080",\n        "name": "",\n        "props": [\n            {\n                "p": "payload"\n            }\n        ],\n        "repeat": "3",\n        "crontab": "",\n        "once": true,\n        "onceDelay": 0.1,\n        "topic": "",\n        "payload": "this is the message",\n        "payloadType": "str",\n        "x": 340,\n        "y": 320,\n        "wires": [\n            [\n                "9d0098383c96ee8b"\n            ]\n        ]\n    },\n    {\n        "id": "b6a7c986cb61ea54",\n        "type": "mqtt-broker",\n        "name": "",\n        "broker": "localhost",\n        "port": "1883",\n        "clientid": "",\n        "autoConnect": true,\n        "usetls": false,\n        "protocolVersion": "4",\n        "keepalive": "60",\n        "cleansession": true,\n        "birthTopic": "",\n        "birthQos": "0",\n        "birthPayload": "",\n        "birthMsg": {},\n        "closeTopic": "",\n        "closeQos": "0",\n        "closePayload": "",\n        "closeMsg": {},\n        "willTopic": "",\n        "willQos": "0",\n        "willPayload": "",\n        "willMsg": {},\n        "userProps": "",\n        "sessionExpiry": ""\n    }\n]\n\n')),(0,o.kt)("h1",{id:"explore-more-nodes-on-reterminal-dm-with-node-red"},"Explore more nodes on reTerminal DM with node-RED"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-RS485"},"reTerminal DM RS485 Port with Node-RED")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-canbus"},"reTerminal DM CAN BUS with Node-RED"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
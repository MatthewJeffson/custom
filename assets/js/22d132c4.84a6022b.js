"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18256],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),c=a,h=p["".concat(d,".").concat(c)]||p[c]||m[c]||o;return n?i.createElement(h,r(r({ref:t},u),{},{components:n})):i.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70162:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(87462),a=(n(67294),n(3905));const o={description:"reTerminal DM RS485 Port with Node-RED",title:"reTerminal DM RS485 Port with Node-RED",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Node-Red-RS485",last_update:{date:"04/04/2023",author:"Peter Pan"}},r="reTerminal DM RS485 Port with Node-RED",s={unversionedId:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-RS485",id:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-RS485",title:"reTerminal DM RS485 Port with Node-RED",description:"reTerminal DM RS485 Port with Node-RED",source:"@site/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-RS485.md",sourceDirName:"Edge/reTerminal-DM/Node-Red",slug:"/reTerminal-DM-Node-Red-RS485",permalink:"/reTerminal-DM-Node-Red-RS485",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Node-Red-RS485.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1680537600,formattedLastUpdatedAt:"Apr 3, 2023",frontMatter:{description:"reTerminal DM RS485 Port with Node-RED",title:"reTerminal DM RS485 Port with Node-RED",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Node-Red-RS485",last_update:{date:"04/04/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Getting Started with Node-Red",permalink:"/reTerminal-DM-Getting-Started-with-Node-Red"},next:{title:"reTerminal DM MQTT with Node-RED",permalink:"/reTerminal-DM-Node-Red-mqtt"}},d={},l=[{value:"Brief info about RS485, Modbus, Modbus RTU and Modbus Node-RED Node",id:"brief-info-about-rs485-modbus-modbus-rtu-and-modbus-node-red-node",level:2},{value:"RS485",id:"rs485",level:3},{value:"Modbus RTU",id:"modbus-rtu",level:3},{value:"Modbus node",id:"modbus-node",level:3},{value:"Install Modbus Node",id:"install-modbus-node",level:2},{value:"Option 1: Command line",id:"option-1-command-line",level:3},{value:"Option 2: Node-RED editor",id:"option-2-node-red-editor",level:3},{value:"How to use Modbus Node with reTermianl DM",id:"how-to-use-modbus-node-with-retermianl-dm",level:2},{value:"prerequisite",id:"prerequisite",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Preparation",id:"preparation",level:4},{value:"Edit the Flows",id:"edit-the-flows",level:4},{value:"Final Result",id:"final-result",level:4},{value:"Tech Support",id:"tech-support",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reterminal-dm-rs485-port-with-node-red"},"reTerminal DM RS485 Port with Node-RED"),(0,a.kt)("h2",{id:"brief-info-about-rs485-modbus-modbus-rtu-and-modbus-node-red-node"},"Brief info about RS485, Modbus, Modbus RTU and Modbus Node-RED Node"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"rs485"},"RS485"),(0,a.kt)("p",null,"RS485 are serial communication protocols used to transmit data between devices. RS485 is a standard for serial communication transmission of data, which is commonly used in industrial applications. It uses a differential signal, meaning that there are two data lines (A and B) and a ground line (GND) for communication. This differential signal provides better noise immunity and allows for longer cable lengths of up to 4,000 feet. The maximum data rate for RS485 is typically higher than RS232, up to 10 Mbps. RS485 is designed for multi-point communication. This means that RS485 can transmit data between multiple devices on the same bus. In summary, RS485 is commonly used for longer-distance communication between multiple devices, such as in industrial control systems."),(0,a.kt)("h3",{id:"modbus-rtu"},"Modbus RTU"),(0,a.kt)("p",null,"Modbus RTU is a popular industrial communication protocol used for data exchange between devices in a supervisory control and data acquisition (SCADA) system. It is a serial communication protocol that operates on top of RS485 or RS232 bus standards. Modbus RTU uses a master-slave architecture, where a master device initiates communication with one or more slave devices. The master sends a request message to a slave device, which then responds with a message containing the requested data. Modbus RTU messages consist of a header, data, and an error-checking field. The header contains information about the message, such as the slave address and function code. The data field contains the actual data being transmitted. The error-checking field is used to ensure the integrity of the message. Modbus RTU supports a variety of data types, including binary, integer, floating point, and string. It also supports a range of function codes that allow for different types of data access, such as read holding registers, write single coil, and read input registers. One of the advantages of Modbus RTU is its simplicity and ease of implementation. It is widely supported by a variety of devices and software, making it a popular choice for industrial automation and control systems. It is also well-suited for applications that require real-time data exchange and low-latency communication."),(0,a.kt)("p",null,"Modbus RTU is a popular communication protocol used in a variety of industrial applications, such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Building automation and control systems: Modbus RTU is commonly used for monitoring and controlling lighting, HVAC, and other building systems.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Energy management systems: Modbus RTU can be used to monitor and control energy consumption in commercial and industrial buildings.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Manufacturing and process control: Modbus RTU is often used to monitor and control manufacturing processes, such as assembly lines, conveyor systems, and packaging machines.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Water and wastewater treatment: Modbus RTU is used for monitoring and controlling the operation of pumps, valves, and other equipment in water and wastewater treatment facilities.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Oil and gas production: Modbus RTU is used in oil and gas production facilities to monitor and control pumps, compressors, and other equipment.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Renewable energy systems: Modbus RTU can be used to monitor and control solar panels, wind turbines, and other renewable energy systems.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Transportation systems: Modbus RTU is used for monitoring and controlling traffic signals, lighting, and other equipment in transportation systems."))),(0,a.kt)("p",null,"In general, any application that requires real-time data exchange and low-latency communication in an industrial environment can benefit from the use of Modbus RTU."),(0,a.kt)("h3",{id:"modbus-node"},"Modbus node"),(0,a.kt)("p",null,"Node-RED has a built-in Modbus node, which allows users to easily integrate Modbus devices into their Node-RED workflows. The Modbus node supports both Modbus TCP and Modbus RTU protocols, and can be used to read and write data from Modbus devices."),(0,a.kt)("p",null,"To use the Modbus node in Node-RED, you can simply drag and drop it onto the canvas and configure it with the appropriate Modbus settings, such as the device address, function code, and data type. Once configured, the Modbus node can be connected to other nodes in the workflow to process and display the data."),(0,a.kt)("p",null,"Node-RED also has a range of other nodes and plugins that can be used to extend its functionality and integrate with other systems and devices. For example, there are nodes for MQTT, HTTP, and other communication protocols, as well as nodes for data processing, visualization, and storage."),(0,a.kt)("p",null,"Overall, Node-RED provides a powerful and flexible platform for building IoT and industrial automation applications, and its built-in Modbus node makes it easy to integrate Modbus devices into these workflows."),(0,a.kt)("h1",{id:"getting-start-with-modbus-node-on-reterminal-dm"},"Getting start with Modbus Node on reTerminal DM"),(0,a.kt)("p",null,"You can find more information in the ",(0,a.kt)("a",{parentName:"p",href:"https://flows.nodered.org/node/node-red-contrib-modbus"},"Modbus Node-RED")," page."),(0,a.kt)("p",null,"If you are using Senscraft Edge OS you can skip the modbus node installation steps and go to the ",(0,a.kt)("a",{parentName:"p",href:"#how-to-use-modbus-node-with-retermianl-dm"},"how to use Modbus Node with reTerminal DM")),(0,a.kt)("h2",{id:"install-modbus-node"},"Install Modbus Node"),(0,a.kt)("p",null,"In this section we are going to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red-contrib-modbus")," node, so please revise on how to ",(0,a.kt)("a",{parentName:"p",href:"/reTerminal-DM-Getting-Started-with-Node-Red#install-nodes"},"install nodes"),"."),(0,a.kt)("h3",{id:"option-1-command-line"},"Option 1: Command line"),(0,a.kt)("p",null,"First of all please go ahead and refreshing your knowledge with accessing reTerminal DM via SSH, please check the steps ",(0,a.kt)("a",{parentName:"p",href:"/reterminal-dm-flash-OS#install-drivers"},"here")),(0,a.kt)("p",null,"Once you have access the reTerminal DM with SSH you can proceed to the steps below:"),(0,a.kt)("p",null,"STEP 1: Please go to Node-RED folder"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd .node-red/\n")),(0,a.kt)("p",null,"STEP 2: Install Modbus Node"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install node-red-contrib-modbus\n")),(0,a.kt)("p",null,"STEP 3: Once the node gets install, Please restart the Node-RED service with:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node-red-restart\n")),(0,a.kt)("h3",{id:"option-2-node-red-editor"},"Option 2: Node-RED editor"),(0,a.kt)("p",null,"STEP 1: Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),' button with "three dash" icon located at the right corner and then select the ',(0,a.kt)("inlineCode",{parentName:"p"},"Manage palette")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png"})),(0,a.kt)("p",null,"STEP 2: At the palette tab click ",(0,a.kt)("inlineCode",{parentName:"p"},"Install")," tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png"})),(0,a.kt)("p",null,"STEP 3: Search for the node in the node search bar and Click ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," button to install"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png"})),(0,a.kt)("p",null,"STEP 4: click on 'Install` button from the dropdown warning window to confirm install"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png"})),(0,a.kt)("p",null,"STEP 5: Wait for the installation to complete and you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," button changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"installed")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png"})),(0,a.kt)("p",null,"STEP 6: you should see the Modbus nodes in the side bar"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png"})),(0,a.kt)("h2",{id:"how-to-use-modbus-node-with-retermianl-dm"},"How to use Modbus Node with reTermianl DM"),(0,a.kt)("h3",{id:"prerequisite"},"prerequisite"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 x USB to RS485/RS232 adoptor"),(0,a.kt)("li",{parentName:"ul"},"6 x Cables"),(0,a.kt)("li",{parentName:"ul"},"1 x reTerminal DM"),(0,a.kt)("li",{parentName:"ul"},"1 x Host Computer")),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MODBUS communication GUI tool such as ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/SciFiDryer/ModbusMechanic"},(0,a.kt)("inlineCode",{parentName:"a"},"ModbusMechanic"))," installed on your host machine")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png"})),(0,a.kt)("h4",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"STEP 1: Please connect the Hardware as shown below"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/rs485.png"})),(0,a.kt)("p",null,"STEP 2: Install the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SciFiDryer/ModbusMechanic"},(0,a.kt)("inlineCode",{parentName:"a"},"ModbusMechanic"))," if you wanna follow the exact steps below."),(0,a.kt)("p",null,"STEP 2-1: Download the release file of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/SciFiDryer/ModbusMechanic/releases/download/v2.7/ModbusMechanic.v2.7.zip"},(0,a.kt)("inlineCode",{parentName:"a"},"ModbusMechanic release"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"AT the time when we prepare this wiki the latest release version of ",(0,a.kt)("inlineCode",{parentName:"p"},"ModbusMechanic")," is v2.7.")),(0,a.kt)("p",null,"STEP 2-2: unzip the release file and run the java executable file ",(0,a.kt)("inlineCode",{parentName:"p"},"ModbusMechanic.jar")," by use the following command in linux:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"\njava -jar ModbusMechanic.jar\n\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic.png"})),(0,a.kt)("p",null,"STEP 2-3: Please configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial Settings Port")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"ModbusMechanic")," as the same as shown below"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/ModbusMechanic-config.png"})),(0,a.kt)("p",null,"STEP 3: Setup ",(0,a.kt)("inlineCode",{parentName:"p"},"Slave Simulator")),(0,a.kt)("p",null,"STEP 3-1: Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Slave Simulator")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"ModbusMechanic")," Tools"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim.png"})),(0,a.kt)("p",null,"STEP 3-2: Then select ",(0,a.kt)("inlineCode",{parentName:"p"},"RTU")," from the popup1 Mbit"),(0,a.kt)("p",null,"STEP 3-4-2: Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Register number")," "),(0,a.kt)("p",null,"STEP 3-4-3: Select ",(0,a.kt)("inlineCode",{parentName:"p"},"U int 16")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Data type")),(0,a.kt)("p",null,"STEP 3-4-4: Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"120")," as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," "),(0,a.kt)("p",null,"STEP 3-4-5: check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Word Swap")),(0,a.kt)("p",null,"STEP 3-4-6: click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," to confirm "),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-settings.png"})),(0,a.kt)("p",null,"STEP 3-5: you should have the similar settings as the image below"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/add-slave-input-data.png"})),(0,a.kt)("p",null,"STEP 3-6: repeat the STEPS 4-4 to add two more Registers as shown below, where ",(0,a.kt)("inlineCode",{parentName:"p"},"Register 2")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Vale of 12")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Register 3")," with ",(0,a.kt)("inlineCode",{parentName:"p"},"Value of 1")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/slave-sim-sample-setting.png"})),(0,a.kt)("h4",{id:"edit-the-flows"},"Edit the Flows"),(0,a.kt)("p",null,"STEP 1: Drag ",(0,a.kt)("inlineCode",{parentName:"p"},"Modbus Read")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Flow Editor")," panel"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/drag-modbus-read.png"})),(0,a.kt)("p",null,"STEP 2: Config the Modbus Server"),(0,a.kt)("p",null,"STEP 2-1: Double click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"Modbus Read")," to open the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node editor panel")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-read-node-editor.png"})),(0,a.kt)("p",null,"STEP 2-2: Click on the ",(0,a.kt)("inlineCode",{parentName:"p"},"pencil")," icon for the server configuration option"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-server-config-button.png"})),(0,a.kt)("p",null,"Once you clicked the ",(0,a.kt)("inlineCode",{parentName:"p"},"pencil")," icon you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add new modbus-client config node")," configuration panel"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-client-config.png"})),(0,a.kt)("p",null,"STEP 2-3: Please carefully following the steps below for configure the Modbus port as shown in the image below."),(0,a.kt)("p",null,"STEP 2-3-1: set the type to Serial Expert from the dropdown list"),(0,a.kt)("p",null,"STEP 2-3-2: select the Serial port ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM1")),(0,a.kt)("p",null,"STEP 2-3-3: configue the serial port options as shown in the image below"),(0,a.kt)("p",null,"STEP 2-3-4: configue the extra Modbus server port option as shown in the image below"),(0,a.kt)("p",null,"STEP 2-3-5: Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Update")," to apply changes."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus.png"})),(0,a.kt)("p",null,"STEP 3: Config Modbus-Read Node at shown in the image below and click ",(0,a.kt)("inlineCode",{parentName:"p"},"Done")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The following steps are just example steps you can change the configuration according to your own situation  ")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/config-modbus-read.png"})),(0,a.kt)("p",null,"STEP 4: Find and Drag out ",(0,a.kt)("inlineCode",{parentName:"p"},"debug node")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Modbus Response node")," and connect the nodes together like shown below"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-responese.gif"})),(0,a.kt)("h4",{id:"final-result"},"Final Result"),(0,a.kt)("p",null,"Congratulations, you have successfully experienced and learnt how to use Modbus with reTerminal DM with node-RED now, your final results should be similar as the image shown below"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/final-results.png"})),(0,a.kt)("p",null,"You can copy the following JSON code to import the Nodes"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": "0692ee641d6fffbc",\n        "type": "tab",\n        "label": "Flow 1",\n        "disabled": false,\n        "info": "",\n        "env": []\n    },\n    {\n        "id": "d16d0d962267f762",\n        "type": "modbus-client",\n        "name": "",\n        "clienttype": "serial",\n        "bufferCommands": true,\n        "stateLogEnabled": false,\n        "queueLogEnabled": false,\n        "failureLogEnabled": true,\n        "tcpHost": "127.0.0.1",\n        "tcpPort": "502",\n        "tcpType": "DEFAULT",\n        "serialPort": "/dev/ttyACM1",\n        "serialType": "RTU",\n        "serialBaudrate": "9600",\n        "serialDatabits": "8",\n        "serialStopbits": "1",\n        "serialParity": "none",\n        "serialConnectionDelay": "100",\n        "serialAsciiResponseStartDelimiter": "0x3A",\n        "unit_id": "1",\n        "commandDelay": "1",\n        "clientTimeout": "1000",\n        "reconnectOnTimeout": true,\n        "reconnectTimeout": "2000",\n        "parallelUnitIdsAllowed": true,\n        "showWarnings": true,\n        "showLogs": true\n    },\n    {\n        "id": "aef2687aed916539",\n        "type": "modbus-read",\n        "z": "0692ee641d6fffbc",\n        "name": "",\n        "topic": "1",\n        "showStatusActivities": true,\n        "logIOActivities": false,\n        "showErrors": true,\n        "showWarnings": true,\n        "unitid": "1",\n        "dataType": "InputRegister",\n        "adr": "1",\n        "quantity": "3",\n        "rate": "500",\n        "rateUnit": "ms",\n        "delayOnStart": false,\n        "startDelayTime": "",\n        "server": "d16d0d962267f762",\n        "useIOFile": false,\n        "ioFile": "",\n        "useIOForPayload": false,\n        "emptyMsgOnFail": true,\n        "x": 250,\n        "y": 300,\n        "wires": [\n            [\n                "c17ac94368fd6df1"\n            ],\n            [\n                "409e4a77818587d8"\n            ]\n        ]\n    },\n    {\n        "id": "c17ac94368fd6df1",\n        "type": "debug",\n        "z": "0692ee641d6fffbc",\n        "name": "debug 1",\n        "active": true,\n        "tosidebar": true,\n        "console": false,\n        "tostatus": false,\n        "complete": "false",\n        "statusVal": "",\n        "statusType": "auto",\n        "x": 560,\n        "y": 240,\n        "wires": []\n    },\n    {\n        "id": "409e4a77818587d8",\n        "type": "modbus-response",\n        "z": "0692ee641d6fffbc",\n        "name": "",\n        "registerShowMax": 20,\n        "x": 530,\n        "y": 380,\n        "wires": []\n    }\n]\n\n')),(0,a.kt)("h1",{id:"explore-more-nodes-on-reterminal-dm-with-node-red"},"Explore more nodes on reTerminal DM with node-RED"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-mqtt"},"reTerminal DM MQTT with Node-RED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-canbus"},"reTerminal DM CAN BUS with Node-RED")),(0,a.kt)("li",{parentName:"ul"})),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
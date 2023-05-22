"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={description:"reTerminal DM Getting Started with Node-Red",title:"reTerminal DM Getting Started with Node-Red",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Getting-Started-with-Node-Red",last_update:{date:"04/04/2023",author:"Peter Pan"}},o="reTerminal DM Getting Started with Node Red",l={unversionedId:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red",id:"Edge/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red",title:"reTerminal DM Getting Started with Node-Red",description:"reTerminal DM Getting Started with Node-Red",source:"@site/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red.md",sourceDirName:"Edge/reTerminal-DM/Node-Red",slug:"/reTerminal-DM-Getting-Started-with-Node-Red",permalink:"/zh-CN/reTerminal-DM-Getting-Started-with-Node-Red",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal-DM/Node-Red/reTerminal-DM-Getting-Started-with-Node-Red.md",tags:[],version:"current",lastUpdatedBy:"Peter Pan",lastUpdatedAt:1680537600,formattedLastUpdatedAt:"2023\u5e744\u67083\u65e5",frontMatter:{description:"reTerminal DM Getting Started with Node-Red",title:"reTerminal DM Getting Started with Node-Red",keywords:["Edge","reTerminal-DM","Node-Red"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-DM-Getting-Started-with-Node-Red",last_update:{date:"04/04/2023",author:"Peter Pan"}},sidebar:"ProductSidebar",previous:{title:"reTerminal DM Warranty",permalink:"/zh-CN/reterminal-dm-warranty"},next:{title:"reTerminal DM RS485 Port with Node-RED",permalink:"/zh-CN/reTerminal-DM-Node-Red-RS485"}},d={},s=[{value:"Install and Setting up Node-RED",id:"install-and-setting-up-node-red",level:2},{value:"Install Node-RED",id:"install-node-red",level:3},{value:"Setup Node-RED",id:"setup-node-red",level:3},{value:"Getting familiar with Node-RED",id:"getting-familiar-with-node-red",level:2},{value:"Node-RED editor Overview",id:"node-red-editor-overview",level:3},{value:"Install Nodes",id:"install-nodes",level:3},{value:"Option 1: Command line",id:"option-1-command-line",level:4},{value:"Option 2: Node-RED editor",id:"option-2-node-red-editor",level:4},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reterminal-dm-getting-started-with-node-red"},"reTerminal DM Getting Started with Node Red"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/bb49d3ec4ee05b6f018e93f896b8a25d/3/-/3--114070201-reterminal-dm---font.jpg",alt:"pir",width:"600",height:"auto"})),(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/reTerminal-DM-p-5616.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,a.kt)("br",null),"> Node-RED is a programming tool for wiring together hardware devices, APIs and online services in new and interesting ways. > It provides a browser-based editor that makes it easy to wire together flows using the wide range of nodes in the palette that can be deployed to its runtime in a single-click. > > \u2014 nodered.org",(0,a.kt)("p",null,"Since reTerminal DM is equipped with rich scalability and hybrid connectivity, such as Digital I/O, CAN bus, RS485, RS232 and powerful wireless communication capabilities such as WiFi, BLE, ","*","4G, ","*",'LoRa\xae. Where Node-RED is one of the best low-code programming tool which could rule them all, and Thanks to the Node-RED Dashboard node which could be configured and utilised together with the 10.1" 10-point multi-touch high-sensitivity capacitive panel for the on-site Human Machine Interface purpose.'),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"*","4G and LoRa\xae modules does not come with reTerminal DM by default, please purchase the relevant modules accordingly.")),(0,a.kt)("p",null,"Here is the getting started guide on how to setup, as well as getting familiar with the Node-RED interface together on reTerminal DM."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"Raspbian OS")," User Please Go TO: ",(0,a.kt)("a",{parentName:"li",href:"#install-and-setting-up-node-red"},"Install Node-RED")),(0,a.kt)("li",{parentName:"ul"},"For ",(0,a.kt)("strong",{parentName:"li"},"Senscraft Edge OS")," User Please Go TO: ",(0,a.kt)("a",{parentName:"li",href:"#getting-familiar-with-node-red"},"Getting Familiar with Node-RED")))),(0,a.kt)("h2",{id:"install-and-setting-up-node-red"},"Install and Setting up Node-RED"),(0,a.kt)("p",null,"Once you have complete with the setup a new Operating System with reTerminal DM by Following the ",(0,a.kt)("a",{parentName:"p",href:"#"},"Install OS on reTerminal DM"),", please follow the steps below to setup the Node-RED."),(0,a.kt)("h3",{id:"install-node-red"},"Install Node-RED"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"STEP 1:")," Getting access to your reTerminal DM"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"option 1: Directly connect the Mouse and Keyboard"),(0,a.kt)("p",{parentName:"li"},"Please go ahead and open ",(0,a.kt)("inlineCode",{parentName:"p"},"Terminal")," APP on you reTerminal DM."),(0,a.kt)("p",{parentName:"li"},"make sure your reTerminal DM is connected to internet.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"option 2: by using SSH"),(0,a.kt)("p",{parentName:"li"},"Make sure your host computer could get access to the reTerminal DM via network and reTerminal DM is connected to internet"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"on Windows:")),(0,a.kt)("p",{parentName:"li"},"  Please open ",(0,a.kt)("strong",{parentName:"p"},"PowerShell")," program and then type ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}"),", please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," according to your setup:"),(0,a.kt)("p",{parentName:"li"},"  For Example in my case the  ",(0,a.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"pi")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.43.100")," :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi@192.168.43.100\n")),(0,a.kt)("p",{parentName:"li"},"  Then please enter the password for the ",(0,a.kt)("inlineCode",{parentName:"p"},"{USER}")," of the Operating System you have setup on your reTerminal DM "),(0,a.kt)("p",{parentName:"li"},"  eg: For Raspbian OS the default login credential is"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("inlineCode",{parentName:"li"},"pi")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"raspberry"))),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"on Mac/Linux:")),(0,a.kt)("p",{parentName:"li"},"  Please open ",(0,a.kt)("strong",{parentName:"p"},"Terminal")," APP and type ",(0,a.kt)("inlineCode",{parentName:"p"},"ssh {USERNAME}@{RETERMINALDM_IP_ADDRESS}"),", please replace ",(0,a.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," according to your setup:"),(0,a.kt)("p",{parentName:"li"},"  For Example in my case the  ",(0,a.kt)("inlineCode",{parentName:"p"},"{USERNAME}")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"pi")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"{RETERMINALDM_IP_ADDRESS}")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.43.100")," :"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ssh pi@192.168.43.100\n")),(0,a.kt)("p",{parentName:"li"},"  Then please enter the password for the ",(0,a.kt)("inlineCode",{parentName:"p"},"{USER}")," of the Operating System you have setup on your reTerminal DM "),(0,a.kt)("p",{parentName:"li"},"  eg: For Raspbian OS the default login credential is"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("inlineCode",{parentName:"li"},"pi")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("inlineCode",{parentName:"li"},"raspberry")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"STEP 2:")," Install Node-RED:"))),(0,a.kt)("p",null,"The Node-RED team has prepared us with a ",(0,a.kt)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/raspberrypi"},"All-IN-ONE")," script, which you could just enter the following command into the reTerminal DM native ",(0,a.kt)("inlineCode",{parentName:"p"},"Terminal")," APP or in the ",(0,a.kt)("inlineCode",{parentName:"p"},"SSH Shell")," from the step above."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"  bash <(curl -sL https://raw.githubusercontent.com/node-red/linux-installers/master/deb/update-nodejs-and-nodered)\n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"There are many options on installing Node-RED with Raspberry Pi, you can explore the ",(0,a.kt)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/"},"official guide"),", here we show you the ",(0,a.kt)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/raspberrypi"},"all-in-one")," guide to install Node-RED on reTerminal DM.")),(0,a.kt)("p",null,"Once the installation process finished you should see a ",(0,a.kt)("inlineCode",{parentName:"p"},".node-red")," folder with ",(0,a.kt)("inlineCode",{parentName:"p"},"ls -all")," commands as shown in the image below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-installed.png"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"setup-node-red"},"Setup Node-RED"),(0,a.kt)("p",null,"Once you have installed Node-RED, please follow the steps below to setup and getting the Node-RED environment ready."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"STEP 1:")," Start Node-RED:"),(0,a.kt)("p",{parentName:"li"},"  After the installation with the ",(0,a.kt)("a",{parentName:"p",href:"https://nodered.org/docs/getting-started/raspberrypi"},"All-IN-ONE")," script is complete, you can use follow commands accordingly:"),(0,a.kt)("p",{parentName:"li"},"  Use ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red-stop"),"                          to stop Node-RED",(0,a.kt)("br",null),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red-start"),"                         to start Node-RED again",(0,a.kt)("br",null),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"node-red-log"),"                           to view the recent log output",(0,a.kt)("br",null),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl enable nodered.service"),"  to autostart Node-RED at every boot",(0,a.kt)("br",null),"\nUse ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl disable nodered.service")," to disable autostart on boot",(0,a.kt)("br",null)),(0,a.kt)("p",{parentName:"li"},"  So to start the Node-RED editor you can run following command in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Terminal")," APP on reTerminal DM:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node-red-start\n")),(0,a.kt)("p",{parentName:"li"},"  if you want to enable the node-RED as autostart service you could use ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo systemctl enable nodered.service")," command and you should see the the output as shown below."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-autostart.png"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"STEP 2:")," Access Node-RED editor:"),(0,a.kt)("p",{parentName:"li"},"  Now please open your favorite Web Browser and enter the url described as below:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Option 1: Use ",(0,a.kt)("inlineCode",{parentName:"li"},"http://127.0.0.1:1880"),", if the web browser is running locally on your reTerminal DM."),(0,a.kt)("li",{parentName:"ul"},"Option 2: Use ",(0,a.kt)("inlineCode",{parentName:"li"},"http://{RETERMINALDM_IP_ADDRESS}:1880"),", if the web browser is running remotely on a host computer, please replace the ",(0,a.kt)("inlineCode",{parentName:"li"},"{RETERMINALDM_IP_ADDRESS}")," with the ip address of reTerminal DM. ")))),(0,a.kt)("h2",{id:"getting-familiar-with-node-red"},"Getting familiar with Node-RED"),(0,a.kt)("p",null,"Now you should see the similar result as the image below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/inital-node-editor.png"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"node-red-editor-overview"},"Node-RED editor Overview"),(0,a.kt)("p",null,"Please get yourself familiar with the Node-RED editor."),(0,a.kt)("p",null,"The core Element of the Node-RED editor are listed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node Panel"),(0,a.kt)("li",{parentName:"ul"},"Flow Editor"),(0,a.kt)("li",{parentName:"ul"},"Config Panel"),(0,a.kt)("li",{parentName:"ul"},"Settings Button"),(0,a.kt)("li",{parentName:"ul"},"Deploy Button")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-editor.png"})),(0,a.kt)("br",null),(0,a.kt)("h3",{id:"install-nodes"},"Install Nodes"),(0,a.kt)("p",null,"There are two options on install Node-RED node modules, if you are using the SenseCraft EDGE OS please use the ",(0,a.kt)("a",{parentName:"p",href:"#option-2-node-red-editor"},"Node-RED editor method"),": "),(0,a.kt)("h4",{id:"option-1-command-line"},"Option 1: Command line"),(0,a.kt)("p",null,"STEP 1: Please go to Node-RED folder"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-folder.png"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd .node-red/\n")),(0,a.kt)("p",null,"STEP 2: Install Modbus Node"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/npm-install-node.png"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm install node-red-contrib-modbus\n")),(0,a.kt)("p",null,"STEP 3: Once the node gets install, Please restart the Node-RED service with:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-red-restart.png"})),(0,a.kt)("br",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node-red-restart\n")),(0,a.kt)("h4",{id:"option-2-node-red-editor"},"Option 2: Node-RED editor"),(0,a.kt)("p",null,"STEP 1: Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Settings"),' button with "three dash" icon located at the right corner and then select the ',(0,a.kt)("inlineCode",{parentName:"p"},"Manage palette")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/manage_palette.png"})),(0,a.kt)("p",null,"STEP 2: At the palette tab click ",(0,a.kt)("inlineCode",{parentName:"p"},"Install")," tab"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/install-tab.png"})),(0,a.kt)("p",null,"STEP 3: Search for the node in the node search bar and Click ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," button to install"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/search-install.png"})),(0,a.kt)("p",null,"STEP 4: click on 'Install` button from the dropdown warning window to confirm install"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/confirm-click.png"})),(0,a.kt)("p",null,"STEP 5: Wait for the installation to complete and you should see the ",(0,a.kt)("inlineCode",{parentName:"p"},"install")," button changed to ",(0,a.kt)("inlineCode",{parentName:"p"},"installed")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installing.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/node-installed.png"})),(0,a.kt)("p",null,"STEP 6: you should see the Modbus nodes in the side bar"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/reTerminalDM/node-red/modbus-nodes.png"})),(0,a.kt)("h1",{id:"reterminal-dm-supported-nodes"},"reTerminal DM Supported Nodes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-RS485"},"reTerminal DM RS485 Port with Node-RED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-mqtt"},"reTerminal DM MQTT with Node-RED")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/reTerminal-DM-Node-Red-canbus"},"reTerminal DM CAN BUS with Node-RED"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
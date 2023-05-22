"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52700],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=p(n),c=i,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},56612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const l={description:"LoRa Node with AIoTs GPS",title:"LoRa Node with AIoTs GPS",keywords:["Wio_terminal","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/AIoTs_GPS_state_tester",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="LoRa Node with AIoTs GPS on Wio Terminal",r={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/AIoTs_GPS_state_tester",id:"Sensor/Wio_Terminal/Application/Embedded_ML/AIoTs_GPS_state_tester",title:"LoRa Node with AIoTs GPS",description:"LoRa Node with AIoTs GPS",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/AIoTs_GPS_state_tester.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML",slug:"/AIoTs_GPS_state_tester",permalink:"/custom/AIoTs_GPS_state_tester",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/AIoTs_GPS_state_tester.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"LoRa Node with AIoTs GPS",title:"LoRa Node with AIoTs GPS",keywords:["Wio_terminal","Embedded_ML"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/AIoTs_GPS_state_tester",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Gesture Recognition with Wio Terminal",permalink:"/custom/Wio-Terminal-Gesture-Recognition"},next:{title:"Wio Terminal Battery Chassis",permalink:"/custom/Wio-Terminal-Battery-Chassis"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Machine Learning with Wio Terminal",id:"machine-learning-with-wio-terminal",level:3},{value:"Edge Impulse Training Started",id:"edge-impulse-training-started",level:4},{value:"Website Connecting with Wio Terminal",id:"website-connecting-with-wio-terminal",level:4},{value:"Data Acquisition",id:"data-acquisition",level:4},{value:"Machine Learning Model Generating",id:"machine-learning-model-generating",level:4},{value:"Machine Learning Model Deployment",id:"machine-learning-model-deployment",level:4},{value:"Displaying Data on TheThingsNetwork through LoRa",id:"displaying-data-on-thethingsnetwork-through-lora",level:3},{value:"TheThingsNetwork Displaying Data Started",id:"thethingsnetwork-displaying-data-started",level:4}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lora-node-with-aiots-gps-on-wio-terminal"},"LoRa Node with AIoTs GPS on Wio Terminal"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The AIoTs GPS & state tester is basic on Wio Terminal Chassis-LoRa-E5 and GNSS to develop. It compares with the traditional IoTs has more conciseness and intelligence. The traditional one basically just receives some data then does a command action regardless of the data whether is correct. And yet the AIoTs using neural network algorithm is able to filter the useless data to get the correct ones."),(0,i.kt)("p",null,"In this project, it will be used a built-in 3 axis accelerometer sensor and the neural network algorithm to build up an intelligent recognition system. Based on the movement of Wio Terminal, it can show you its state in real-time. Generally, the example project here included three trained states which are Stop(WT idle state), Turn(rolling-over WT device), and Wave(take WT to wave your hand). It is encouraged that you go to ",(0,i.kt)("a",{parentName:"p",href:"https://www.edgeimpulse.com/"},"Edge Impulse")," website to add more training action."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/banner.png"})),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The LoRa device can display the DevEui, APPEui and Appkey on the first page."),(0,i.kt)("li",{parentName:"ul"},"Neural network algorithm correct data"),(0,i.kt)("li",{parentName:"ul"},"High accurately detect Wio Terminal state"),(0,i.kt)("li",{parentName:"ul"},"Display longitude, latitude and satellites number."),(0,i.kt)("li",{parentName:"ul"},"Display the device and TTN connection status.")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Required")),(0,i.kt)("p",null,"In this demo you will need the devices listed as below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"WioTerminal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-LoRa-E5-and-GNSS-p-5053.html"},"Wio Terminal Chassis - LoRa-E5 and GNSS")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-Chassis-Battery-650mAh-p-4756.html"},"Wio Terminal Chassis - Battery (Optional)"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Connect")),(0,i.kt)("p",null,"It is connected to a computer through the Type-C cable."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/connectpc.jpg",alt:null})),(0,i.kt)("h3",{id:"machine-learning-with-wio-terminal"},"Machine Learning with Wio Terminal"),(0,i.kt)("p",null,"Here we gonna show you how to use Wio Terminal to train a Machine Learning model and use it. The project is based on the Arduino platform which means Arduino IDE and various Arduino libraries are required. If this is your first time using the Wio terminal, we recommend a guide to quickly ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal"),"."),(0,i.kt)("p",null,"Download and install it in your Arduino library:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SFUD"},"Seeed_Arduino_SFUD"))),(0,i.kt)("h4",{id:"edge-impulse-training-started"},"Edge Impulse Training Started"),(0,i.kt)("p",null,"First, you need to have your own Edge Impulse account and then create a project."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Open the ",(0,i.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1"},"Edge Impulse website"),", and then register an account.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots1.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Create a new project.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots2.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots3.png",alt:null})),(0,i.kt)("h4",{id:"website-connecting-with-wio-terminal"},"Website Connecting with Wio Terminal"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Download the firmware ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2"},"wio-terminal-ei-1.4.0.uf2")," for the preparation of connect.")),(0,i.kt)("p",null,"Like ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Get Started with Wio Terminal")," guidelines suggested:"),(0,i.kt)("p",null," Double dropping down the Wio Terminal (already connect to your PC ) left bottom, you will see a driver(like ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino (F:)")," below) popup on the computer. Then you can draw the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Alots/wio-terminal-ei-1.4.0.uf2"},"wio-terminal-ei-1.4.0.uf2")," firmware to the driver. And when you saw the driver disappear, it means the firmware has been programmed. Now you can go to the website to connect Wio Terminal."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots5.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4"),". Once the firmware is set up, click ",(0,i.kt)("inlineCode",{parentName:"li"},"connect using WebUSB")," to connect the Wio Terminal to the website.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots4.png",alt:null})),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"Device"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Label")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Sensor")," like below show up, it means the connection is done and the data acquisition can be activated."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots6.png",alt:null})),(0,i.kt)("h4",{id:"data-acquisition"},"Data Acquisition"),(0,i.kt)("p",null,"Now you can collect data on Edge Impulse."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5"),". Enter ",(0,i.kt)("inlineCode",{parentName:"p"},"Label"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Sample length (ms.)")," and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Start sampling")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Label")," means the categories you want to classify."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Sample length")," means the time during your sampling.")))),(0,i.kt)("p",null,"You may want to choose different ",(0,i.kt)("inlineCode",{parentName:"p"},"Sensor")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Frequency")," as well to see what happens."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots8.png",alt:null})),(0,i.kt)("p",null,"It is highly recommended that samples the data more than 10 times."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots9.png",alt:null})),(0,i.kt)("h4",{id:"machine-learning-model-generating"},"Machine Learning Model Generating"),(0,i.kt)("p",null,"Once the data has been collected, you can use it to train your ML model."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6"),". After sampling the data, click ",(0,i.kt)("inlineCode",{parentName:"li"},"create impulse")," to process the data.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots10.png",alt:null})),(0,i.kt)("p",null,"The processing block and learning block here we selected are the same as the website recommended. We on the other hand highly suggest you choose others to see what difference it can be made. Once blocks were set up, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Save Impulse")," to store the impulse."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots11.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 7"),". Move to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Spectral features")," page, and then to the bottom click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save parameters"),", it will move automatically to the ",(0,i.kt)("inlineCode",{parentName:"li"},"Generate feature")," side.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots12.png",alt:null})),(0,i.kt)("p",null,"Here is the ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate feature")," side, it can help translate your data to the features needed in Machine Learning."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots13.png",alt:null})),(0,i.kt)("p",null,"Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate feature")," and the result should show up on the right:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots15.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 8"),". Move to the ",(0,i.kt)("inlineCode",{parentName:"li"},"NN Classifier")," page to use your features training a Machine Learning model. To the bottom of the page, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Start training"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots16.png",alt:null})),(0,i.kt)("p",null,"Training output is on the right of the page, When you see the output, it means the model has been generated."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots17.png",alt:null})),(0,i.kt)("h4",{id:"machine-learning-model-deployment"},"Machine Learning Model Deployment"),(0,i.kt)("p",null,"Now you can deploy your Machine Learning model to your Wio Terminal."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 9"),". Select and click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Deployment")," column on the left.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots18.png",alt:null})),(0,i.kt)("p",null,"Then choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino Library"),", to the bottom select ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," to create the library needed in your Arduino. It will automatically download a zip file that includes the third-party library."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots19.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots20.png",alt:null})),(0,i.kt)("p",null,"The name of the wanted library is about the name of the project which means whatever the name you have written to the project on ",(0,i.kt)("strong",{parentName:"p"},"step 2")," will be shown here. It can help you find the correct file that you need."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots21.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 10"),". Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/0hotpotman0/AIoTs_GPS_state_tester"},"code")," file from Github and open it with Arduino IDE. Change the third-party library of your own like above and then run the code.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots22.png",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Because of the difference among the global area, the code in the file should be changed a little:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots35.png",alt:null})),(0,i.kt)("p",null,"If you connected 'America server', then there are no worries about the example code, but other places should be set up as shown below('CN_470_510' means in China the value should be the range from 470 to 510):"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots36.png",alt:null})),(0,i.kt)("p",null,"Finally, the result should be something like:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/connect1.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you want to know more about the Edge Impulse or there is something that is still unclear, please go to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-1/"},"Wio Terminal Edge Impulse Getting Started")," to get more information.")),(0,i.kt)("h3",{id:"displaying-data-on-thethingsnetwork-through-lora"},"Displaying Data on TheThingsNetwork through LoRa"),(0,i.kt)("p",null,"After we trained a Machine Learning model and collected data, it will be more fun if we can transport our data to the clouds. In this project, we will be able to display the data on ",(0,i.kt)("a",{parentName:"p",href:"https://www.thethingsnetwork.org/"},"TheThingsNetwork")," platform(cloud) through LoRa."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Hardware Required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Gateway")),(0,i.kt)("p",null,"You need to set up a gateway first, allowing you can connect Wio Terminal and TTN(TheThingsNetwork) cloud."),(0,i.kt)("h4",{id:"thethingsnetwork-displaying-data-started"},"TheThingsNetwork Displaying Data Started"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1")," Load into ",(0,i.kt)("a",{parentName:"p",href:"https://id.thethingsnetwork.org/oidc/interaction/3v59Li6ZEHe8cq1O0Ft1w"},"TTN website")," and create your account, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"go to gateways")," for setting up the device."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots24a.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2")," Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add gateway")," on the Gateways page."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots25.png",alt:null})),(0,i.kt)("p",null,"Add your own gateway information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Owner (your name)"),(0,i.kt)("li",{parentName:"ul"},"Gateway ID (depend on the gateway)"),(0,i.kt)("li",{parentName:"ul"},"Gateway EUI(depend on the gateway, sometimes same as gateway ID)"),(0,i.kt)("li",{parentName:"ul"},"Gateway name(your choice)")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots26.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Frequence plan")," in LoRaWAN options is depended on your place lived in. Before ",(0,i.kt)("inlineCode",{parentName:"p"},"Add gateway"),", you may find a page that includes some clusters. The choice of ",(0,i.kt)("inlineCode",{parentName:"p"},"Frequence Plan")," and cluster should be the same which means you should pick the area you find nearest to your place."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots27.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots27a.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3")," Once the gateway is set up, you can now add your Wio Terminal node connecting with it on the Applications page. Click ",(0,i.kt)("inlineCode",{parentName:"p"},"Add application"),":"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots28.png",alt:null})),(0,i.kt)("p",null,"Fill in these information by your will:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Owner"),(0,i.kt)("li",{parentName:"ul"},"Application ID"),(0,i.kt)("li",{parentName:"ul"},"Application name")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots29.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4")," Once you created an application, you can see on the bottom to the right there is an ",(0,i.kt)("inlineCode",{parentName:"p"},"Add end device")," that can help you add Wio Terminal device."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots30.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Brand"))," as ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Select Sense CAP"))),(0,i.kt)("li",{parentName:"ul"},"chose ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Model"))," as ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"LoRa-E5"))),(0,i.kt)("li",{parentName:"ul"},"Hardware Ver and Firmware Ver are set up by default"),(0,i.kt)("li",{parentName:"ul"},"Profile(Region) is according to your location(same region as ",(0,i.kt)("inlineCode",{parentName:"li"},"Frequncy plan"),")"),(0,i.kt)("li",{parentName:"ul"},"Frequency plan is the same as your choice in ",(0,i.kt)("strong",{parentName:"li"},"Step 2")),(0,i.kt)("li",{parentName:"ul"},"AppEUI, DevEUI, and AppKey are unique in different LoRa-E5 devices. You can find them easily by programming a firmware ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Alots/Gateway_Tester.uf2"},"Gateway_Tester.uf2")," into your device. Like tutorial in Edge Impulse, programming a firmware you just simply drag the uf2 file to the drive after you pull down the Wio Terminal left button.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots37.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"End Device ID will be automatically prefilled after you input the DevEUI.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots31.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5")," After you connected the device, there is ",(0,i.kt)("inlineCode",{parentName:"p"},"Payload formatters")," selection and you need to add some code for decoding data(Choosing Formatter type as 'Javascript'):"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots32.png",alt:null})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"function Decoder(bytes, port) {\n \n  var decoded = {};\n  if (port === 8) {\n    decoded.Stop   = bytes[1];\n    decoded.Turn   = bytes[3];\n    decoded.Wave   = bytes[5];\n  }\n \n  return decoded;\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6")," Finally, go to the gateway, then click ",(0,i.kt)("inlineCode",{parentName:"p"},"Live data"),". You may see the results:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Alots/Alots33a.png",alt:null})))}u.isMDXComponent=!0}}]);
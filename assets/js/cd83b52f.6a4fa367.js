"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[94597],{3905:(t,e,n)=>{n.d(e,{Zo:()=>F,kt:()=>p});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var s=r.createContext({}),k=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},F=function(t){var e=k(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},_=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,s=t.parentName,F=i(t,["components","mdxType","originalType","parentName"]),c=k(n),_=l,p=c["".concat(s,".").concat(_)]||c[_]||u[_]||a;return n?r.createElement(p,o(o({ref:e},F),{},{components:n})):r.createElement(p,o({ref:e},F))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=_;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[c]="string"==typeof t?t:l,o[1]=i;for(var k=2;k<a;k++)o[k]=n[k];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},32983:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>k});var r=n(87462),l=(n(67294),n(3905));const a={description:"Edge Computing",title:"Edge Computing",keywords:["edge computing"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"04/07/2023",author:"Matthew"}},o=void 0,i={unversionedId:"Edge_Computing",id:"Edge_Computing",title:"Edge Computing",description:"Edge Computing",source:"@site/docs/Edge_Computing.md",sourceDirName:".",slug:"/Edge_Computing",permalink:"/custom/Edge_Computing",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge_Computing.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1680825600,formattedLastUpdatedAt:"Apr 7, 2023",frontMatter:{description:"Edge Computing",title:"Edge Computing",keywords:["edge computing"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"04/07/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"The Things Indoor Gateway",permalink:"/custom/The-Things-Indoor-Gateway"},next:{title:"Getting Started with reTerminal",permalink:"/custom/reTerminal"}},s={},k=[{value:"Industrial Calculation",id:"industrial-calculation",level:2},{value:"Device",id:"device",level:3},{value:"Application / Software",id:"application--software",level:3},{value:"OS Installation / Firmware Updating",id:"os-installation--firmware-updating",level:3},{value:"Extensions / Carrier Board",id:"extensions--carrier-board",level:3},{value:"Tutorial / FAQ",id:"tutorial--faq",level:3},{value:"Basic Development",id:"basic-development",level:2},{value:"Single Board Computer",id:"single-board-computer",level:3},{value:"Application / Software",id:"application--software-1",level:3},{value:"OS Installation / Firmware Updating",id:"os-installation--firmware-updating-1",level:3},{value:"Extensions / Carrier Board",id:"extensions--carrier-board-1",level:3},{value:"Assessories",id:"assessories",level:3},{value:"Kit with Courses",id:"kit-with-courses",level:3},{value:"Tutorials / FAQ",id:"tutorials--faq",level:3}],F={toc:k},c="wrapper";function u(t){let{components:e,...n}=t;return(0,l.kt)(c,(0,r.Z)({},F,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'This topic here introduces the Seeed Studio product documentation regarding the edge computing architecture which operates on "instant" data generated by various sensors, in applications where real-time processing. There are muliple deveices with differnet computing power presenting in this page.'),(0,l.kt)("p",null,"You can discover this page with two large portions."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki-platform/edge_computing/edge_computing_publish.png",alt:"pir",width:1e3,height:"auto"})),(0,l.kt)("h2",{id:"industrial-calculation"},"Industrial Calculation"),(0,l.kt)("strong",null,(0,l.kt)("font",{color:"8DC215",size:"4"},"This portion here includes the integrated devices complete edge computing architecture. Here you can find:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Devices with industiral level computation"),(0,l.kt)("li",{parentName:"ul"},"Application based the devices"),(0,l.kt)("li",{parentName:"ul"},"Different software deployment"),(0,l.kt)("li",{parentName:"ul"},"OS installation"),(0,l.kt)("li",{parentName:"ul"},"Extension board or Carrier board for the devices"),(0,l.kt)("li",{parentName:"ul"},"Tutorials")),(0,l.kt)("h3",{id:"device"},"Device"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reTerminal")),(0,l.kt)("a",{href:"/reTerminal",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Started with reTerminal "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal-hardware-interfaces-usage",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Hardware and Interfaces Usage "))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reComputer")),(0,l.kt)("a",{href:"/reComputer_Jetson_Series_Initiation",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Started with reComputer Series "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_Jetson_Series_Hardware_Layout",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Hardware Layout for reComputer Series "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_Jetson_Series_GPIO_Grove",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," GPIO and Grove for reComputer Series "))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reServer")),(0,l.kt)("a",{href:"//reServer-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," reServer X86 Series - Intel\xae Core\u2122 "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"//reServer_J2032_Getting_Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," reServer J2032 - NVIDIA\xae Jetson NX Xavier "))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Mini PC for Industrial")),(0,l.kt)("a",{href:"/reComputer_A203E_Flash_System",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," A203 - Jetpack 5.0, Jetson Xavier NX 8GB, RS232 "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_A205E_Flash_System",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," A205E - Jetpack 5.0, Jetson Xavier NX 8GB, 2xGbE"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Mini_AI_Computer_T906",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," T906 - Jetpack 5.0, Jetson AGX Orin 32GB, 10Gps "))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Edge Series")),(0,l.kt)("a",{href:"https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," EdgeBox-ESP-100 - ESP32-based/ RS485/ Ethernet "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," EdgeBox-RPI-200 - Raspberry Pi CM4-based/ IEC "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," EdgeLogix-RPI-1000 - Raspberry Pi CM4-based"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"NVIDIA Jetson Alternative")),(0,l.kt)("a",{href:"/Jetson_Xavier_AGX_H01_Driver_Installation",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Jetson Xavier AGX H01 / NVIDIA Jetson AGX Xavier Development Kit - Jetpack 4.4 | Jetpack 4.6 | Jetpack 5.0"))),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"application--software"},"Application / Software"),(0,l.kt)("div",{class:"independent_container"},(0,l.kt)("a",{class:"independent_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"independent_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reTerminal")),(0,l.kt)("a",{href:"/reTerminal-build-UI-using-LVGL",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," LVGL"))),",",(0,l.kt)("a",{href:"/reTerminal-build-UI-using-Flutter",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Flutter"))),",",(0,l.kt)("a",{href:"/reTerminal-build-UI-using-Electron",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Electro"))),",",(0,l.kt)("a",{href:"/weather-dashboard-with-Grafana-reTerminal",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grafana"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Mender-Client-reTerminal",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Mender Client"))),",",(0,l.kt)("a",{href:"/reTerminal-build-UI-using-Qt-for-Python",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Qt with Python"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal_ML_MediaPipe",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Google MediaPipe"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal_ML_TFLite",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," TensorFlow Lite"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal_Home_Assistant",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Home Assistant"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal-Home-Assistant-Customize",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Customize Home Assistant"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"independent_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"independent_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Edge Series")),(0,l.kt)("a",{href:"/Edgebox-rpi-200-codesys",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Codesys on EdgeBox-RPI-200"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Edgebox-ESP-100-Arduino",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Start with Arduino on EdgeBox-ESP-100"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Contributor",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," More Publish Soon"))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"independent_container"},(0,l.kt)("a",{class:"independent_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"independent_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reComputer Application")),(0,l.kt)("a",{href:"/HardHat",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Hard Hat Detection "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/No-code-Edge-AI-Tool",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," No code Edge AI Tool "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Jetson-Nano-MaskCam",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," MaskCam "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/DashCamNet-with-Jetson-Xavier-NX-Multicamera",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," DashCamNet with Jetson Xavier NX Multicamera "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Traffic-Management-DeepStream-SDK",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Traffic Management DeepStream SDK "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/YOLOv5-Object-Detection-Jetson",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Few-Shot Object Detection "))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"independent_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"independent_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Software for reComputer")),(0,l.kt)("a",{href:"/CVEDIA-Jetson-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"},"  CVEDIA-RT ")))," ,",(0,l.kt)("a",{href:"/Cochl.Sense-Jetson-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Cochl.Sense ")))," ,",(0,l.kt)("a",{href:"/Lumeo-Jetson-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"},"  Lumeo "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Allxon-Jetson-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Started with Allxon "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/jetson-docker-getting-started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Started with Docker"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/alwaysAI-Jetson-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Started with alwaysAI "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/DeciAI-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Getting Started with Deci "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/YOLOv8-DeepStream-TRT-Jetson",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Deploy YOLOv8 with TensorRT and DeepStream SDK "))),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"os-installation--firmware-updating"},"OS Installation / Firmware Updating"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reTerminal")),(0,l.kt)("a",{href:"/reTerminal-FAQ",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Original OS Installation"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal-Buildroot-SDK",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Buildroot"))),",",(0,l.kt)("a",{href:"/reTerminal-Yocto",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Yocto"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Streampi_OBS_On_reTerminal",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Stream-pi & OBS studio"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reComputer Series")),(0,l.kt)("a",{href:"/reComputer_J1010_J101_Flash_Jetpack",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," J1010 | J101 Original OS Installation"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_J2021_J202_Flash_Jetpack",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," J2021 | J202 Original OS Installation"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_J1020_A206_Flash_JetPack",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," J1020 | A206 Original OS Installation"))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reServer")),(0,l.kt)("a",{href:"//reServer-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Original OS Installation"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"//reServer-Update-BIOS-Install-Drivers",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Upgrading BIOS and Installing Drivers")))),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Mini PC")),(0,l.kt)("a",{href:"/reComputer_A203E_Flash_System",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," A203 Original OS Installation"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_A205E_Flash_System",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," A205E Original OS Installation"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Mini_AI_Computer_T906",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," T906 Original OS Installation"))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Edge Series")),(0,l.kt)("a",{href:"https://files.seeedstudio.com/wiki/edge_box_esp/EdgeBox-ESP-100-User_Manual.pdf",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," EdgeBox-ESP-100 - OS Installation "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://files.seeedstudio.com/wiki/Edge_Box/EdgeBox-RPi-200_Edge_Computing_Controller_User_Manual.pdf",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," EdgeBox-RPI-200 - OS Installation "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"https://files.seeedstudio.com/wiki/Edge_Logix/EdgeLogix-RPI-1000-Datasheet-V1.0.pdf",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," EdgeLogix-RPI-1000 - OS Installation"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"NVIDIA Jetson Alternative")),(0,l.kt)("a",{href:"/Jetson_Xavier_AGX_H01_Driver_Installation",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Jetson Xavier AGX H01 Original OS Installation"))))),(0,l.kt)("h3",{id:"extensions--carrier-board"},"Extensions / Carrier Board"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reTerminal Extensions")),(0,l.kt)("a",{href:"/reTerminalBridge",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," reTerminal E10-1 -  Expand UPS, Gigabit Ethernet, LTE/4G/5G/LoRaWAN, RS485/232, CAN, SATA 2.0"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reTerminal_Mount_Options",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," reTerminal E10-1 Mount Options"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"NVIDIA Jetson Extensions")),(0,l.kt)("a",{href:"/reComputer_A203_Flash_System",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," A203, support Jetson Nano / Xavier NX/TX2 NX"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/reComputer_A205_Flash_System",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," A205, support Jetson Nano / Xavier NX/TX2 NX"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Jetson-Mate",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Jetson Mate Cluster, support 4 Jetson Nano/NX "))),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"tutorial--faq"},"Tutorial / FAQ"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reTerminal")),(0,l.kt)("a",{href:"/reTerminal-FAQ",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," FAQs for reTerminal Usage"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reComputer / NVIDIA Jetson")),(0,l.kt)("a",{href:"/reComputer_Jetson_Memory_Expansion",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Memory Expansion for NVIDIA Jetson boards"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/J1010_Boot_From_SD_Card",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Boot From SD Card on reComputer J1010"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/J101_Enable_SD_Card",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Enable SD card on J101 carrier board"))),(0,l.kt)("br",null))),(0,l.kt)("h2",{id:"basic-development"},"Basic Development"),(0,l.kt)("strong",null,(0,l.kt)("font",{color:"8DC215",size:"4"},"This portion here includes the Single Board Computer for fundamental development. Here you can find:")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Development Single Board Computer"),(0,l.kt)("li",{parentName:"ul"},"Application based the SBC"),(0,l.kt)("li",{parentName:"ul"},"Different software deployment"),(0,l.kt)("li",{parentName:"ul"},"OS installation"),(0,l.kt)("li",{parentName:"ul"},"Extension board or Carrier board for the SBC"),(0,l.kt)("li",{parentName:"ul"},"Accessories for the SBC"),(0,l.kt)("li",{parentName:"ul"},"Kit with courses based on the SBC"),(0,l.kt)("li",{parentName:"ul"},"Tutorials")),(0,l.kt)("h3",{id:"single-board-computer"},"Single Board Computer"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("a",{href:"/BeagleBone",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"8DC215",size:"5"}," BeagleBone\xae ")))),(0,l.kt)("a",{href:"/BeagleBone_Blue",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Seeed Studio BeagleBone\xae Blue "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/BeagleBone_Green",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Seeed Studio BeagleBone\xae Green "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/BeagleBone_Green_Wireless",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Seeed Studio BeagleBone\xae Green Wireless "))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"ODYSSEY")),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," ODYSSEY X86J4105 "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-GPIO",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Hardware for ODYSSEY X86J4105 "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-STM32MP157C",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," ODYSSEY STM32MP157C "))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Quantum Development Board")),(0,l.kt)("a",{href:"/Quantum-Mini-Linux-Development-Kit",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"},"  Quantum Mini Linux Development Kit "))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Raspberry Pi\xae")),(0,l.kt)("a",{href:"/Raspberry_Pi",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Raspberry Pi Introduction "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Raspberry_Pi_3_Model_B",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Raspberry Pi 3 Model B "))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"808080",size:"5"},"Retired Devices")),(0,l.kt)("a",{href:"/ReSpeaker",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," reSpeaker Series "))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/NPi-i.MX6ULL-Dev-Board-Linux-SBC",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," NPi Sereis"))))),(0,l.kt)("h3",{id:"application--software-1"},"Application / Software"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"ODYSSY Application")),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-AzureIOT",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Connect ODYSSEY to Azure IoT"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Intel-OpenVINO",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Computer Version with Intel OpenVINO Toolkit"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Frigate",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Computer Version with Frigate"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"ODYSSEY Software")),(0,l.kt)("a",{href:"/ODYSSEY-X86-Home-Assistant",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Home Assistant on ODYSSEY"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Connect-Grove-to-Home-Assistant-ESPHome",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Connect Grove Modules using ESPHome"))),(0,l.kt)("br",null),"Mender",(0,l.kt)("a",{href:"/Mender-Client-ODYSSEY-X86",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Client"))),",",(0,l.kt)("a",{href:"/Mender-Server-ODYSSEY-X86",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Server"))),(0,l.kt)("br",null))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"BeagleBone\xae")),(0,l.kt)("a",{href:"/BeagleBone_Solutions",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," BeagleBone\xae Solutions"))))),(0,l.kt)("h3",{id:"os-installation--firmware-updating-1"},"OS Installation / Firmware Updating"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"ODYSSEY X86J4105")),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Installing-OS",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Original OS Installation"))),",",(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Updating-Firmware",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Updating Firmware"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Installing-openwrt",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," OpenWRT"))),",",(0,l.kt)("a",{href:"/ODYSSEY-X86-OPNsense",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," OPNsense"))),",",(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-pfSense",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," pfSense"))),",",(0,l.kt)("a",{href:"/Jellyfin-on-Docker-Ubuntu-X86",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Jellyfin"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-X86-TrueNAS",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," TrueNAS"))),",",(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Installing-FreeNAS",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," FreeNAS"))),",",(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-Installing-Android",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Android-x86"))),",",(0,l.kt)("a",{href:"/BalenaOS-X86-Getting-Started",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," balenaOS"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Raspberry Pi")),(0,l.kt)("a",{href:"/Edge_Computing",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Original OS Installation"))))),(0,l.kt)("h3",{id:"extensions--carrier-board-1"},"Extensions / Carrier Board"),(0,l.kt)("div",{class:"title_container"},(0,l.kt)("a",{class:"title_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Raspberry Pi - Pi HAT")),(0,l.kt)("a",{href:"/Grove_Base_Hat_for_Raspberry_Pi",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grove Base HAT "))),",",(0,l.kt)("a",{href:"/Grove_AI_HAT_for_Edge_Computing",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grove AI HAT"))),",",(0,l.kt)("a",{href:"/RS-485_Shield_for_Raspberry_Pi",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," RS-485 Pi HAT"))),",",(0,l.kt)("a",{href:"/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," 8-Channel 12-Bit ADC HAT"))),",",(0,l.kt)("a",{href:"//ReSpeaker_4_Mic_Array_for_Raspberry_Pi",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," reSpeaker Pi HAT"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Grove_Base_HAT",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Find out more"))))),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"BeagleBone\xae")),(0,l.kt)("a",{href:"/BeagleBone_Green_HDMI_Cape",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," BeagleBone\xae Green HDMI Cape"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Motor_Bridge_Cape_v1.0",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Motor Bridge Cape v1.0 for BeagleBone\xae"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Seeed-Studio-BeagleBone-Green-LCD-Cape-with-Resistive-Touch",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," BeagleBone\xae Green LCD Cape with Resistive Touch"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"reSpeaker")),(0,l.kt)("a",{href:"//ReSpeaker_Drive_Unit",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Drive Unit for reSpeaker Series"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"//ReSpeaker_Mic_Array_v2.0",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Mic Array for reSpeaker Series"))),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"assessories"},"Assessories"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Raspberry Pi")),(0,l.kt)("a",{href:"/Skeleton_Box_for_Raspberry_Pi_Compute_Module_Development_Kit",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Skeleton box for Raspberry Pi"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Raspberry_PI_Bplus_Case",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Raspberry PI B Plus Case"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"ODYSSEY X86J4105")),(0,l.kt)("a",{href:"/Coral-Mini-PCIe-Accelerator-x86",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Coral Mini PCIe Accelerator"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/ODYSSEY-X86J4105-LTE-Module",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," LTE Modules"))),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"kit-with-courses"},"Kit with Courses"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Raspberry Pi")),(0,l.kt)("a",{href:"/Grove_Base_Kit_for_Raspberry_Pi",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grove Base Kit for Raspberry Pi"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/LoRa_LoRaWan_Gateway_Kit",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," LoRa/LoRaWAN\xae Gateway Kit"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Grove_Starter_Kit_for_IoT_based_on_Raspberry_Pi",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grove Starter Kit for IoT based on Raspberry Pi"))),(0,l.kt)("br",null)),(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"BeagleBone\xae")),(0,l.kt)("a",{href:"/Grove_Starter_Kit_for_BeagleBone_Green",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grove Starter Kit for Seeed Studio BeagleBone\xae Green"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Beagle_Bone_Green_and_Grove_IoT_Starter_Kit_Powered_by_AWS",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Grove IoT Starter AWS IoT Kit for BeagleBone Green "))),(0,l.kt)("br",null))),(0,l.kt)("h3",{id:"tutorials--faq"},"Tutorials / FAQ"),(0,l.kt)("div",{class:"intro_container"},(0,l.kt)("a",{class:"intro_item",style:{textAlign:"center"}},(0,l.kt)("div",{class:"start_card_title",style:{textAlign:"center"}},(0,l.kt)("font",{color:"8DC215",size:"5"},"Raspberry Pi")),(0,l.kt)("a",{href:"/remote_connect",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Remotely connect to Raspberry Pi/reComputer"))),(0,l.kt)("br",null),(0,l.kt)("a",{href:"/Raspberry_pi_CM4_update_eeprom",target:"_blank"},(0,l.kt)("span",null,(0,l.kt)("font",{color:"FFFFFF",size:"2"}," Update eeprom on Raspberry pi CM4"))))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16380],{3905:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>f});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),p=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},s=function(t){var e=p(t.components);return r.createElement(d.Provider,{value:e},t.children)},m="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,d=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(a),u=n,f=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return a?r.createElement(f,o(o({ref:e},s),{},{components:a})):r.createElement(f,o({ref:e},s))}));function f(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var d in e)hasOwnProperty.call(e,d)&&(l[d]=e[d]);l.originalType=t,l[m]="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},40893:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Dive into the Hardware",title:"Dive into the Hardware",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Dive_into_the_Hardware",last_update:{date:"5/17/2023",author:"Yvonne"}},o="**Overview**",l={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware",title:"Dive into the Hardware",description:"Dive into the Hardware",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial",slug:"/Dive_into_the_Hardware",permalink:"/custom/Dive_into_the_Hardware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Dive_into_the_Hardware.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1684281600,formattedLastUpdatedAt:"May 17, 2023",frontMatter:{description:"Dive into the Hardware",title:"Dive into the Hardware",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Dive_into_the_Hardware",last_update:{date:"5/17/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"DALL\xb7E AI Picture Generator",permalink:"/custom/DALL\xb7E_AI_Picture_Generator"},next:{title:"How to Create your own UI",permalink:"/custom/How_to_Create_your_own_UI"}},d={},p=[{value:"<strong>Hardware Diagram</strong>",id:"hardware-diagram",level:2},{value:"<strong>ESP32-S3</strong>",id:"esp32-s3",level:2},{value:"<strong>RP2040</strong>",id:"rp2040",level:2},{value:"<strong>ESP32-S3 and RP2040 Communication</strong>",id:"esp32-s3-and-rp2040-communication",level:2}],s={toc:p};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},(0,n.kt)("strong",{parentName:"h1"},"Overview")),(0,n.kt)("p",null,"The SenseCAP Indicator is a 4-inch touch screen device that is powered by the ESP32 and RP2040 dual MCUs. ESP32 and RP2040 are both highly capable microcontrollers that offer a range of features and functions. "),(0,n.kt)("p",null,"This chapter will provide detailed information about ESP32 and RP2040 of SenseCAP Indicator, including their functions and usage. It covers include programming, interfacing with sensors, and communicating with other devices\uff0cetc."),(0,n.kt)("h1",{id:"dive-into-the-hardware"},(0,n.kt)("strong",{parentName:"h1"},"Dive into the Hardware")),(0,n.kt)("h2",{id:"hardware-diagram"},(0,n.kt)("strong",{parentName:"h2"},"Hardware Diagram")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/SenseCAP_Indicator_6.png"})),(0,n.kt)("p",null,"As shown in the figure, the SenseCAP Indicator is primarily driven by the ESP32 and RP2040 MCUs, which are connected to the LoRa transceiver, LCD, and other peripheral circuits.\nIn the following sections, we will provide an overview of the ESP32 and RP2040 development and their respective capabilities."),(0,n.kt)("h2",{id:"esp32-s3"},(0,n.kt)("strong",{parentName:"h2"},"ESP32-S3")),(0,n.kt)("p",null,"ESP32-S3 is a highly integrated system-on-chip (SoC) that combines a powerful CPU, 2.4 GHz Wi-Fi, and Bluetooth 5.0 capabilities, also includes a range of input/output pins and interfaces, such as UART, SPI, I2C, and PWM, which allow it to interface with other devices and sensors."),(0,n.kt)("h2",{id:"rp2040"},(0,n.kt)("strong",{parentName:"h2"},"RP2040")),(0,n.kt)("p",null,"SenseCAP Indicator is embeded with ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-Pico-p-4832.html?"},"RP2040"),", RP2040 features a dual-core ARM Cortex-M0+ processor with clock speeds up to 133 MHz, 264KB of RAM, and a range of peripherals such as USB, UART, SPI, and I2C. It also includes a unique feature called Programmable I/O (PIO), which allows users to implement custom digital interfaces without the need for specialized hardware."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/rppinout.png"})),(0,n.kt)("h2",{id:"esp32-s3-and-rp2040-communication"},(0,n.kt)("strong",{parentName:"h2"},"ESP32-S3 and RP2040 Communication")),(0,n.kt)("p",null,"ESP32 and RP2040 use serial port communication, using the ",(0,n.kt)("a",{parentName:"p",href:"http://www.stuartcheshire.org/papers/COBSforToN.pdf"},"COBS")," communication protocol. "),(0,n.kt)("p",null,"Libraries used in ESP32:  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cmcqueen/cobs-c"},"https://github.com/cmcqueen/cobs-c"),"\nArduino library used by RP2040:  ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/bakercp/PacketSerial"},"https://github.com/bakercp/PacketSerial")),(0,n.kt)("p",null,"In the terminal demo, the following data frames are used for transmission\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Byte0"),(0,n.kt)("th",{parentName:"tr",align:null},"Byte1-4"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PKT_TYPE"),(0,n.kt)("td",{parentName:"tr",align:null},"PKT_PARA (Little Endia)")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"PKT_TYPE list")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note"),": The following commands are for reference only, of course you can also define your own commands."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"PKT_TYPE"),(0,n.kt)("th",{parentName:"tr",align:"left"},"DIR"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0x00"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32<->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ACK, string, value:'ACK'")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xA0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Collect Interval CMD, PKT_PARA is uint32_t")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xA1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Beep on CMD, PKT_PARA is uint32_t")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xA2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Beep off CMD, PKT_PARA is uint32_t")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xA3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Shutdown CMD, PKT_PARA is uint32_t")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xA4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Power On CMD, PKT_PARA is uint32_t")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xA0~0xAF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ESP32->RP2040"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Other data or cmd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCD41 Temperature data, PKT_PARA is float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCD41 Humidity data, PKT_PARA is float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SCD41 CO2 data, PKT_PARA is float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ATH20 Temperature data, PKT_PARA is float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"ATH20 Humidity data, PKT_PARA is float")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"SGP40 tVOC data, PKT_PARA is float. 0~500 index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0xB6~0xBF"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RP2040->ESP32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Other data or cmd, PKT_PARA is float")))),(0,n.kt)("h1",{id:"tech-support"},(0,n.kt)("strong",{parentName:"h1"},"Tech Support")),(0,n.kt)("p",null,"Don\u2019t worry, we\u2019ve got you covered! Please visit our ",(0,n.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions\uff01\nIf you have large order or customization requirment, please contact ",(0,n.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}m.isMDXComponent=!0}}]);
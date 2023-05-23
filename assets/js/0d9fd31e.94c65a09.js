"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84874],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||o;return r?a.createElement(g,i(i({ref:t},d),{},{components:r})):a.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},49617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={description:"Grove AI HAT for Edge Computing",title:"Grove AI HAT for Edge Computing",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_AI_HAT_for_Edge_Computing",last_update:{date:"1/11/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_AI_HAT_for_Edge_Computing",id:"Top_Brand/Raspberry_Pi/Pi_HAT/Grove_AI_HAT_for_Edge_Computing",title:"Grove AI HAT for Edge Computing",description:"Grove AI HAT for Edge Computing",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/Grove_AI_HAT_for_Edge_Computing.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/Grove_AI_HAT_for_Edge_Computing",permalink:"/custom/Grove_AI_HAT_for_Edge_Computing",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/Grove_AI_HAT_for_Edge_Computing.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Grove AI HAT for Edge Computing",title:"Grove AI HAT for Edge Computing",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_AI_HAT_for_Edge_Computing",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"RS-485 Shield for Raspberry Pi",permalink:"/custom/RS-485_Shield_for_Raspberry_Pi"},next:{title:"2 Channel CAN BUS FD Shield for Raspberry Pi",permalink:"/custom/2-Channel-CAN-BUS-FD-Shield-for-Raspberry-Pi"}},p={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Digital Demo",id:"digital-demo",level:4},{value:"Hardware Connection",id:"hardware-connection",level:5},{value:"Analog Demo",id:"analog-demo",level:4},{value:"Hardware Connection",id:"hardware-connection-1",level:5},{value:"Face Detect Demo",id:"face-detect-demo",level:4},{value:"Hardware Connection",id:"hardware-connection-2",level:5},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u},m="wrapper";function s(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove%20AI%20HAT%20for-Edge-Computing-wiki-front.jpg",alt:null})),(0,n.kt)("p",null,"The Grove AI HAT for Edge Computing(hereafter called 'Grove AI HAT') is built around Sipeed MAix M1 AI MODULE with Kendryte K210 processor inside. It's a low cost but powerful raspberry pi AI hat which assists raspberry pi run the AI at the edge, it also can work independently for edge computing applications."),(0,n.kt)("p",null,"The  MAix M1 is a powerful RISC-V 600MHz AI module features dual core 64-bit cpu, 230GMULps 16-bit KPU(Neural Network Processor), FPU(Float Point Unit) supports DP&SP, and APU(Audio Processor) supports 8 mics."),(0,n.kt)("p",null,"In addition to the powerful Kendryte K210 processor, the Grove AI HAT for Edge Computing board provide a wealth of peripherals: I2C/UART/SPI/I2S/PWM/GPIO. The hat also offers LCD and camera interface, which support the Sipeed 2.4inch QVGA LCD and DVP camera, it will be helpful and convenience with your AI vision project. Just like the ",(0,n.kt)("a",{href:"https://www.seeedstudio.com/Sipeed-MAix-BiT-for-RISC-V-AI-IoT-1-p-2873.html",target:"_blank"},"Sipeed MAix BiT Kit for RISC-V AI+IoT"),"\n, we will release the kit with camera and LCD soon. For AI voice recognition applications, we add a high-quality microphone. And for robot or motion applications, there is a onboard 3-axis accelerometers sensor, which is more accurate and easy to use compared to external sensors."),(0,n.kt)("p",null,"We have released varies of SIPPED AI products, we believe it is time to make it Grove, and bring all our hundreds of grove senors and grove acvotors to your AI applications. So here comes the  Grove AI HAT for Edge Computing. We've added 6 grove connectors to this hat, including 1xDigital IO, 2xAnalog IO, 1xI2C, 1xUART and 1xPWM. On top of that, based on ",(0,n.kt)("a",{href:"https://github.com/kendryte/kendryte-standalone-sdk",target:"_blank"},"kendryte-standalone-sdk"),"\n, we support Linux, Windows, Mac OS X and other development environments."),(0,n.kt)("p",null,"We hope this board may help you with your edge computing, AI vision, voice recognition, and other AI projects, just enjoy it."),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/5BF3ExL1HOQ",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Processor: Sipeed MAIX-I module w/o WiFi ( 1st RISC-V 64 AI Module, K210 inside )"),(0,n.kt)("li",{parentName:"ul"},"1x USB 2.0 Device, Type C(Power and Programming)"),(0,n.kt)("li",{parentName:"ul"},"6x Grove Interface: include 1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC"),(0,n.kt)("li",{parentName:"ul"},"1x Power LED, 1x Boot LED"),(0,n.kt)("li",{parentName:"ul"},"1x Reset Button, 1x Boot Button"),(0,n.kt)("li",{parentName:"ul"},"1x LCD Interface"),(0,n.kt)("li",{parentName:"ul"},"1x Camera Interface"),(0,n.kt)("li",{parentName:"ul"},"1x Digital Mic"),(0,n.kt)("li",{parentName:"ul"},"1x Accelerometers Sensor"),(0,n.kt)("li",{parentName:"ul"},"1x JTAG & ISP UART Pin Header"),(0,n.kt)("li",{parentName:"ul"},"2x 20 Pin Header with I2C, UART, SPI, I2S, PWM, GPIO")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"CPU"),(0,n.kt)("td",{parentName:"tr",align:null},"K210 RISC-V Dual Core 64bit, 400Mh(Max. 600Mhz)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"FPU"),(0,n.kt)("td",{parentName:"tr",align:null},"IEEE754-2008 compliant high-performance pipelined FPU")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"KPU(Neural Network Processor )"),(0,n.kt)("td",{parentName:"tr",align:null},"\u2022 Supports the fixed-point model that the mainstream training framework trains according to specific restriction rules",(0,n.kt)("br",null),"\u2022 Support for 1x1 and 3x3 convolution kernels",(0,n.kt)("br",null),"\u2022 Support for any form of activation function",(0,n.kt)("br",null),"\u2022 The maximum supported neural network parameter size for real-time work is 5MiB to 5.9MiB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Debugging Support"),(0,n.kt)("td",{parentName:"tr",align:null},"High-speed UART and JTAG interface for debugging")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"5V",(0,n.kt)("br",null),"can not exceed 5.5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"IO Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Ambient Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-20 \u2013 70\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ADC"),(0,n.kt)("td",{parentName:"tr",align:null},"Onboard 16-bit ADC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3-Axis Accelerometers"),(0,n.kt)("td",{parentName:"tr",align:null},"ADXL345 \xb12 g/\xb14 g/\xb18 g/\xb116 g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Micrephone"),(0,n.kt)("td",{parentName:"tr",align:null},"Sensitivity:-26 dB;SNR:61 dB")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPIO"),(0,n.kt)("td",{parentName:"tr",align:null},"2x 20 Pin Header compatible with Raspberry Pi")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Digital IO, 1x PWM, 1x I2C, 1x UART, 2x ADC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"USB Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"USB 2.0 Device, Type C(Power and Programming)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LCD Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"8bit MCU LCD 24P 0.5mm FPC connector")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DVP Camera Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"24P 0.5mm FPC connector")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Button"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Reset Button, 1x Boot Button (can be used as User Button)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"LED"),(0,n.kt)("td",{parentName:"tr",align:null},"1x Power LED, 1x Boot LED(can be used as User LED)")))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"All digital and analog IO interface levels are 3.3V. Please do not input more than 3.3V, otherwise the CPU may be damaged.  "),(0,n.kt)("li",{parentName:"ul"},"The input power supply voltage is 5V and cannot exceed 5.5V."))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"AI for Edge Computing"),(0,n.kt)("li",{parentName:"ul"},"Smart Building"),(0,n.kt)("li",{parentName:"ul"},"Medical equipment"),(0,n.kt)("li",{parentName:"ul"},"Automation & Process Control"),(0,n.kt)("li",{parentName:"ul"},"Robot")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/pinout1.jpg",alt:"Grove AI HAT for Edge Computing hardware overview",title:"hardware overview"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 1"),". ",(0,n.kt)("i",null,"Grove AI HAT for Edge Computing hardware overview")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("h4",{id:"digital-demo"},"Digital Demo"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html"},"Grove AI HAT for Edge Computing")," x1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-White-LED-p-1140.html"},"Grove - LED")," x1"),(0,n.kt)("li",{parentName:"ul"},"USB Type C cable x1")),(0,n.kt)("h5",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"Connect the Grove - LED to the Grove ",(0,n.kt)("strong",{parentName:"li"},"J2")," port(D13 pin) of the Grove AI HAT"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Connect the Grove AI HAT to the computer via USB Type C port.")))),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect.png",alt:"Grove AI HAT Arduino demo",title:"Grove AI HAT Arduino demo"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 8"),". ",(0,n.kt)("i",null,"Hardware connection")))),(0,n.kt)("h4",{id:"analog-demo"},"Analog Demo"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html"},"Grove AI HAT for Edge Computing")," x1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-Round-Force-Sensor-FSR40-p-3110.html"},"Grove - Round Force Sensor (FSR402)")," x1"),(0,n.kt)("li",{parentName:"ul"},"USB Type C cable x1")),(0,n.kt)("h5",{id:"hardware-connection-1"},"Hardware Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 Conect the Grove - Round Force Sensor (FSR402) to the Grove ",(0,n.kt)("strong",{parentName:"li"},"J11")," port(A0 pin) of the Grove AI HAT"),(0,n.kt)("li",{parentName:"ul"},"2 Conect the Grove AI HAT to the computer via USB Type C port.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/Grove-AI-HAT-for-Edge-Computing-connect2(1).png",alt:"Grove AI HAT Arduino demo",title:"Grove AI HAT Arduino demo"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 9"),". ",(0,n.kt)("i",null,"Hardware connection")))),(0,n.kt)("h4",{id:"face-detect-demo"},"Face Detect Demo"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-AI-HAT-for-Edge-Computing-p-4026.html"},"Grove AI HAT for Edge Computing")," x1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/OV2640-Fisheye-Camera-p-4048.html"},"OV2640 Camera")," x1"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/2-4-TFT-LCD-p-4049.html"},"2.4 inch TFT LCD")," x1"),(0,n.kt)("li",{parentName:"ul"},"USB Type C cable x1")),(0,n.kt)("h5",{id:"hardware-connection-2"},"Hardware Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"a. Connect the OV2640 camera into the Grove AI Hat 24 pin FPC camera connector"),(0,n.kt)("li",{parentName:"ul"},"b. Connect the 2.4 inch TFT LCD into the Grove AI Hat 24 pin FPC LCD connector"),(0,n.kt)("li",{parentName:"ul"},"c. Connect the Grove AI HAT to the computer via USB Type C port.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/img/wiki-connect.jpg",alt:"Grove AI HAT face detect demo-1",title:""}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 12"),". ",(0,n.kt)("i",null,"Hardware connection of face detect demo")))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Grove%20AI%20HAT%20for%20Edge%20Computing_v1.0_SCH_190426.pdf"},"Grove AI HAT for Edge Computing Schematic file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/Accelerometers_Sensor_datasheet.pdf"},"Accelerometers_Sensor_datasheet Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-AI-HAT-for-Edge-Computing/res/ADS1115.pdf"},"ADS1115 Datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}s.isMDXComponent=!0}}]);
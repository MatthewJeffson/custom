"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[88121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},S=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=l(r),S=n,m=s["".concat(p,".").concat(S)]||s[S]||c[S]||a;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=S;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:n,i[1]=u;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}S.displayName="MDXCreateElement"},54917:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const a={description:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",title:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI",last_update:{date:"1/11/2023",author:"shuxu hu"}},i="How to use Seeed Studio XIAO SAMD21 to log in to your Raspberry PI",u={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI",title:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",description:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial",slug:"/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI",permalink:"/custom/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",title:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",permalink:"/custom/Seeeduino-XIAO-DAPLink"},next:{title:"Overview",permalink:"/custom/XIAO-RP2040"}},p={},l=[{value:"Hardware",id:"hardware",level:2},{value:"Materials required",id:"materials-required",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Software",id:"software",level:2},{value:"Configuring Seeed Studio XIAO SAMD21",id:"configuring-seeed-studio-xiao-samd21",level:3},{value:"Configuring Putty",id:"configuring-putty",level:3}],d={toc:l};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-use-seeed-studio-xiao-samd21-to-log-in-to-your-raspberry-pi"},"How to use Seeed Studio XIAO SAMD21 to log in to your Raspberry PI"),(0,n.kt)("p",null,"Sometimes when we use Raspberry Pi, these situations can be very disturbing to us: no extra HDMI displays around, mouse and keyboard are not easy to connect, choose to log in to the raspberry pi with the USB to Serial adapter, but it's too expensive. Now, with Seeed Studio XIAO SAMD21, all problems are readily solved."),(0,n.kt)("h2",{id:"hardware"},"Hardware"),(0,n.kt)("h2",{id:"materials-required"},"Materials required"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeed Studio XIAO SAMD21 x1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-Zero-W-p-4257.html"},"Raspberry PI Zero x1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Breadboard-Jumper-Wire-Pack-200mm-100m-p-1032.html"},"Jumper cable x3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/USB-3-1-Type-C-to-A-Cable-1-Meter-3-1A-p-4085.html"},"Type-C cable x1")))),(0,n.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Raspberry PI's ",(0,n.kt)("strong",{parentName:"p"},"TX")," is connected to Seeed Studio XIAO SAMD21's ",(0,n.kt)("strong",{parentName:"p"},"RX"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Raspberry PI's ",(0,n.kt)("strong",{parentName:"p"},"RX")," is connected to Seeed Studio XIAO SAMD21's ",(0,n.kt)("strong",{parentName:"p"},"TX"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Raspberry PI's ",(0,n.kt)("strong",{parentName:"p"},"GND")," is connected to Seeed Studio XIAO SAMD21's ",(0,n.kt)("strong",{parentName:"p"},"GND"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect Seeed Studio XIAO SAMD21 to PC via a Type-C cable.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," The raspberry pi is connected to a power supply."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102010328/img/pin-with-marks.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"software"},"Software"),(0,n.kt)("p",null,"Find the config.txt file on the TF card where the Raspberry Pi official system is installed, and add a sentence at the end:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"enable_uart=1\n")),(0,n.kt)("h3",{id:"configuring-seeed-studio-xiao-samd21"},"Configuring Seeed Studio XIAO SAMD21"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},"Arduino IDE")," and add Seeed Studio XIAO SAMD21 by following the link ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/#software"},"here."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Copy the following code to Arduino IDE and upload the code into Seeed Studio XIAO SAMD21."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},"uint32_t baud;\nuint32_t old_baud;\nvoid setup() {\n\n  // put your setup code here, to run once:\n  SerialUSB.begin(115200);\n  baud = SerialUSB.baud();\n  old_baud = baud;\n  Serial1.begin(baud);\n  while (!Serial);\n  while (!SerialUSB);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n  baud = SerialUSB.baud();\n  if (baud != old_baud) {\n    Serial1.begin(baud);\n    while (!Serial);\n    old_baud = baud;\n    //     SerialUSB.println(baud);\n  }\n  if (SerialUSB.available() > 0)\n  {\n    char c = SerialUSB.read();\n    Serial1.write(c);\n  }\n  if (Serial1.available() > 0) {\n    char c = Serial1.read();\n    SerialUSB.write(c);\n  }\n}\n")),(0,n.kt)("h3",{id:"configuring-putty"},"Configuring Putty"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download and install Putty by following this ",(0,n.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"link"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Set the serial port baud rate to 115200 ( This is the default serial port baud rate. It can be communicated correctly if it is consistent with the serial port baud rate of the Raspberry Pi.)"))),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102010328/img/Putty%20config.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Then you will see the startup information in the terminal window.")),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102010328/img/Terminal.png"})),(0,n.kt)("p",null,"Now you have access to Raspberry Pi through Seeed Studio XIAO SAMD21!"),(0,n.kt)("p",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/products/102010328/img/new%20pins.gif"})))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),c=a,h=u["".concat(p,".").concat(c)]||u[c]||m[c]||n;return r?o.createElement(h,i(i({ref:t},d),{},{components:r})):o.createElement(h,i({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},18047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(87462),a=(r(67294),r(3905));const n={title:"Grove - I2C Motor Driver (L298P)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C-Motor-Driver-L298P/",slug:"/Grove-I2C-Motor-Driver-L298P",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P",title:"Grove - I2C Motor Driver (L298P)",description:"Grove - I2C Motor Driver(L298P) is a common-use motor driver for stepping motor and servo motor. It embeds an STM32 chip for burning the code to control the",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-I2C-Motor-Driver-L298P",permalink:"/custom/Grove-I2C-Motor-Driver-L298P",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C-Motor-Driver-L298P.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - I2C Motor Driver (L298P)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C-Motor-Driver-L298P/",slug:"/Grove-I2C-Motor-Driver-L298P",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Motor Driver V1.3",permalink:"/custom/Grove-I2C_Motor_Driver_V1.3"},next:{title:"Grove - Infrared Emitter",permalink:"/custom/Grove-Infrared_Emitter"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Use Arduino platform",id:"use-arduino-platform",level:3},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware connection",id:"hardware-connection",level:4},{value:"Software Code 1 - DC Motor",id:"software-code-1---dc-motor",level:4},{value:"Software Code 2 - Stepper Motor",id:"software-code-2---stepper-motor",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/105020093/img/105020093_wiki.png",alt:null})),(0,a.kt)("p",null,"Grove - I2C Motor Driver(L298P) is a common-use motor driver for stepping motor and servo motor. It embeds an STM32 chip for burning the code to control the\nmotor driver. This is a 2-channel motor driver, each channel can support up to 1A current. You can also use the I2C interface to transmit data from the peripheral microcontroller. The default I2C address is 0x0f and you are able to change the address of Motor driver by connecting the I2C wire hat. The I2C address is selectable from 0x00 to 0X0f."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:200,height:38,border:0}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MCU: STM32f030f4P6 microcontroller for burning the code and control the Motor Driver."),(0,a.kt)("li",{parentName:"ul"},"L298P Motor driver chip: common use for a motor driver and can drive stepping motor and servo motor."),(0,a.kt)("li",{parentName:"ul"},"Selectable I2C address: change the connection of wire hat to get the I2C address from 0x00 to 0x0f, the default I2C address is 0x0f."),(0,a.kt)("li",{parentName:"ul"},"2-channel output: able to support 1A current on each channel, max 2A current; Need 6V-12V DC voltage input."),(0,a.kt)("li",{parentName:"ul"},"User LED: green LED on for the clockwise direction and red LED on for the anti-clockwise direction for each channel.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MCU"),(0,a.kt)("td",{parentName:"tr",align:null},"STM32f030f4P6")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power Supply"),(0,a.kt)("td",{parentName:"tr",align:null},"6-12V DC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"Grove I2C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"I2C address"),(0,a.kt)("td",{parentName:"tr",align:null},"Default 0x0f, can be changed by connecting the wire hat")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Channel"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output current"),(0,a.kt)("td",{parentName:"tr",align:null},"MAX 2A, 1A for each channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"5V")))),(0,a.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"use-arduino-platform"},"Use Arduino platform"),(0,a.kt)("h4",{id:"materials-requied"},"Materials Requied"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - I2C Motor Driver (L298P)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/105020093/img/105020093_thumbnail.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-I2C-Motor-Driver-L298P-p-4534.html"},"Get One Now"))))),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware connection"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2CMotorDriver-4.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," Connect Grove - I2C Motor Driver (L298P) to port I2C of Grove-Base Shield.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," Plug Grove - Base Shield into Seeeduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," Connect Seeeduino to PC via a USB cable."))),(0,a.kt)("h4",{id:"software-code-1---dc-motor"},"Software Code 1 - DC Motor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'#include "Grove_I2C_Motor_Driver.h"\n\n// default I2C address is 0x0f\n#define I2C_ADDRESS 0x0f\n\nvoid setup() {\n    Serial.begin(9600);\n    Motor.begin(I2C_ADDRESS);\n}\n\nvoid loop() {\n    // Set speed of MOTOR1, Clockwise, speed: -100~100\n    Motor.speed(MOTOR1, 50);\n    // Set speed of MOTOR2, Anticlockwise\n    Motor.speed(MOTOR2, -70);\n    delay(2000);\n    // Change speed and direction of MOTOR1\n    Motor.speed(MOTOR1, -100);\n    // Change speed and direction of MOTOR2\n    Motor.speed(MOTOR2, 100);\n    delay(2000);\n    // Stop MOTOR1 and MOTOR2\n    Motor.stop(MOTOR1);\n    Motor.stop(MOTOR2);\n    delay(2000);\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," Download the  ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip"},"Grove_I2C_Motor_Driver_v1_3 Library")," from Github.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," Refer ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),"."))),(0,a.kt)("p",null,"With speed() function, you are able to drive one motor at the speed you want."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"motor_id")," represents which motor to use. You can fill MOTOR1 or MOTOR2.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"_speed")," represents the speed you set to the motor. You can fill -100~100 here. When _speed>0, DC motor runs clockwise, while_speed<0, DC motor runs anticlockwise. And the bigger the absolute value of _speed, the faster the speed of DC motor."))),(0,a.kt)("p",null,"With stop() function, you are able to stop a running DC motor."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"motor_id")," represents which motor to use. You can fill MOTOR1 or MOTOR2.")),(0,a.kt)("h4",{id:"software-code-2---stepper-motor"},"Software Code 2 - Stepper Motor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},"#include <Grove_I2C_Motor_Driver.h>\n\n// default I2C address is 0x0f\n#define I2C_ADDRESS 0x0f\n\n\nvoid setup() {\n    Serial.begin(9600);\n    Motor.begin(I2C_ADDRESS);\n    // Drive a stepper motor\n    // _step: -1024~1024, when _step>0, stepper motor runs clockwise; _step<0, stepper\n    // motor runs anticlockwise; when _step is 512, the stepper motor will run a complete\n    // turn; if step is 1024, the stepper motor will run 2 turns.\n    Motor.StepperRun(-1024);\n    Motor.StepperRun(512);\n}\n\nvoid loop() {\n\n}\n")),(0,a.kt)("p",null,"Take ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171"},"24BYJ48 Stepper Motor")," as an example, The hardware installation as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_control_a_Stepper_Motor.jpg",alt:null})),(0,a.kt)("p",null,"The connection between ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/high-quality-stepper-motor-12v-p-335.html?cPath=170_171"},"24BYJ48")," Stepper Motor and I2C Motor Driver is as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.3/img/I2C_Motor_Driver_Connector.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"_step")," represents the steps you set to the stepper motor to run. You can fill -1024~1024. When _step>0, stepper motor runs clockwise, while_step<0, stepper motor runs anticlockwise. When _step is 512/-512, the stepper motor will run a complete turn and if_step is 1024/-1024, the stepper motor will run 2 turns. The stepper motor will stop automatically after it finishes its steps.")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/products/105020093/doc/Grove-I2C-Motor-Driver-L298P.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/105020093/doc/STM32F030F4;TSSOP-20_%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf"},"STM32f030f4P6 Datasheet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/105020093/doc/L298P;PowerSO-20_%E7%89%A9%E6%96%99%E8%A7%84%E6%A0%BC%E4%B9%A6.pdf"},"L298P Datasheet"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/105020093/doc/Grove%20-%20I2C%20Motor%20Driver%20(L298P)_v1.0_SCH_191210.pdf"},"Hardware schematic"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_I2C_Motor_Driver_v1_3/archive/master.zip"},"Motor Driver Library")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
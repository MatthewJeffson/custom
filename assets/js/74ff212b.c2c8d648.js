"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34293],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(r),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return r?a.createElement(k,n(n({ref:t},d),{},{components:r})):a.createElement(k,n({ref:t},d))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:i,n[1]=l;for(var s=2;s<o;s++)n[s]=r[s];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},60608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const o={title:"Grove - Haptic Motor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Haptic_Motor/",slug:"/Grove-Haptic_Motor",last_update:{date:"01/09/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor",title:"Grove - Haptic Motor",description:"Grove - Haptic motor is a grove module integrated with DRV2605L which will give your project more feelings. This motor is specially designed for various effects, such as ramping the vibration level up and down, for wearables and other IoT devices. Right now we have developed an easy-to-use library which simulate 123 kinds in total of vibrating modes and this will make your prototyping quicker. Also, you can develop more advanced functions with driver DRV2605L which will improve actuator performance in terms of acceleration consistency, start time, and break time and is accessible through a shared I2C compatible bus or PWM input signal.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Haptic_Motor",permalink:"/custom/Grove-Haptic_Motor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Haptic_Motor.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Haptic Motor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Haptic_Motor/",slug:"/Grove-Haptic_Motor",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - EL Driver",permalink:"/custom/Grove-EL_Driver"},next:{title:"Grove - I2C Motor Driver",permalink:"/custom/Grove-I2C_Motor_Driver"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Application ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:s};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg",alt:null})),(0,i.kt)("p",null,"Grove - Haptic motor is a grove module integrated with ",(0,i.kt)("a",{parentName:"p",href:"http://www.ti.com/product/DRV2605L"},"DRV2605L")," which will give your project more feelings. This motor is specially designed for various effects, such as ramping the vibration level up and down, for wearables and other IoT devices. Right now we have developed an easy-to-use library which simulate 123 kinds in total of vibrating modes and this will make your prototyping quicker. Also, you can develop more advanced functions with driver DRV2605L which will improve actuator performance in terms of acceleration consistency, start time, and break time and is accessible through a shared I2C compatible bus or PWM input signal."),(0,i.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,i.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Haptic-Motor-p-2546.html"},(0,i.kt)("strong",null,(0,i.kt)("span",null,(0,i.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"More vibration effects."),(0,i.kt)("li",{parentName:"ul"},"Quicken your project prototyping process."),(0,i.kt)("li",{parentName:"ul"},"Easy-to-use library with 123 kinds of vibrating modes."),(0,i.kt)("li",{parentName:"ul"},"Powerful driver to implanting more advanced functions.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3~5.0 V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ripples (at maximum power)"),(0,i.kt)("td",{parentName:"tr",align:null},"50~100 mV")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Max power"),(0,i.kt)("td",{parentName:"tr",align:null},"750 mW")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C speed"),(0,i.kt)("td",{parentName:"tr",align:null},"100 kHz")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vibration effects"),(0,i.kt)("td",{parentName:"tr",align:null},"123 types")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Driver"),(0,i.kt)("td",{parentName:"tr",align:null},"DRV2605L")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Port"),(0,i.kt)("td",{parentName:"tr",align:null},"I",(0,i.kt)("sup",null,"2"),"C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Default I",(0,i.kt)("sup",null,"2"),"C Address"),(0,i.kt)("td",{parentName:"tr",align:null},"0x5A")))),(0,i.kt)("h1",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mobile phone, tablets."),(0,i.kt)("li",{parentName:"ul"},"Wearable devices."),(0,i.kt)("li",{parentName:"ul"},"Remote controls, touch-enabled devices."),(0,i.kt)("li",{parentName:"ul"},"Industrial human-machine interfaces.")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Front view:"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rear view:"),"\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_back.jpg",alt:null})),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - Haptic motor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/bazaar884534_1s.jpg",alt:"enter image description here"}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove%C2%A0%C2%A0Haptic%C2%A0Motor-p-2546.html"},"Get One Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - Haptic motor to port I2C of Grove-Base Shield."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_haptic_motor_connection.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove - Haptic motor to Seeeduino as below.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - Haptic motor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V"),(0,i.kt)("td",{parentName:"tr",align:null},"Red")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"Black")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"White")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Haptic_Motor/archive/master.zip"},"Grove_Haptic Motor")," from Github."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Refer ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include <drv2605.h>\n\nDRV2605 haptic;\n\nvoid setup()\n{\n    Serial.begin(9600);\n    /* Software I2C = false, Verbose = true */\n    if (haptic.init(false, true) != 0) Serial.println("init failed!");\n    if (haptic.drv2605_AutoCal() != 0) Serial.println("auto calibration failed!");\n    delay(2000);\n}\n\nvoid loop()\n{\n/*\n    unsigned char i;\n    for(i=1;i<124;i++)\n    {\n        Serial.print("Effect No: ");\n        Serial.println(i);\n        \n        haptic.drv2605_Play_Waveform(i);\n        delay(2000);\n    }\n*/\n    haptic.drv2605_Play_Waveform(118);\n    delay(2000);\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," We will see the vibration.")),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"Never touch driver DRV2605L which may cause damage to it when it is powered.\n"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/img/Grove_Haptic_Motor_cautions.png",alt:null})),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Haptic_Motor"},"Grove-Haptic Motor Library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_Eagle.zip"},"Grove-Haptic Motor Schematic")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Haptic_Motor/res/Grove_Haptic_Motor_v0.9_SCH.pdf"},"Grove-Haptic Motor Schematic"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.ti.com/product/DRV2605L"},"More about drive circuit DRV2605L"),".")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
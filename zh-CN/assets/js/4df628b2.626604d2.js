"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40550],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var o=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,i=function(e,t){if(null==e)return{};var r,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return r?o.createElement(h,a(a({ref:t},d),{},{components:r})):o.createElement(h,a({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,a=new Array(n);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<n;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var o=r(87462),i=(r(67294),r(3905));const n={title:"Grove - Mini I2C Motor Driver v1.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/",slug:"/Grove-Mini_I2C_Motor_Driver_v1.0",last_update:{date:"01/09/2022",author:"gunengyu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Mini_I2C_Motor_Driver_v1.0",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Mini_I2C_Motor_Driver_v1.0",title:"Grove - Mini I2C Motor Driver v1.0",description:"This Grove - MIni I2C motor driver includes two DRV8830. The DRV8830 provides an integrated motor driver solution for battery-powered toys, printers, and other low-voltage or battery-powered motion control applications. The module has two H-bridge drivers, and can drive two DC motors or two winding of stepper motors, as well as other loads like solenoids.It requires an onboard 5V voltage regulator which can power the I2C bus. All driver lines are diode protected from back EMF.It features two LEDs for fault indicator and four LEDs to indicate which direction each motor is running. GROVE system plug and I2C interface enables you to daisy-chain the driver with many other devices.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Mini_I2C_Motor_Driver_v1.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Mini_I2C_Motor_Driver_v1.0",permalink:"/zh-CN/Grove-Mini_I2C_Motor_Driver_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Mini_I2C_Motor_Driver_v1.0.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641657600,formattedLastUpdatedAt:"2022\u5e741\u67088\u65e5",frontMatter:{title:"Grove - Mini I2C Motor Driver v1.0",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Mini_I2C_Motor_Driver_v1.0/",slug:"/Grove-Mini_I2C_Motor_Driver_v1.0",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Mini Fan",permalink:"/zh-CN/Grove-Mini_Fan"},next:{title:"Grove - Recorder",permalink:"/zh-CN/Grove_Recorder"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Hardware function",id:"hardware-function",level:2},{value:"Change Default maximum drive current",id:"change-default-maximum-drive-current",level:3},{value:"Change Default I<sup>2</sup>C Address",id:"change-default-i2c-address",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Preparations",id:"preparations",level:3},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Work",id:"software-work",level:3},{value:"Review Results",id:"review-results",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_2.png",alt:null})),(0,i.kt)("p",null,"This Grove - MIni I2C motor driver includes two DRV8830. The DRV8830 provides an integrated motor driver solution for battery-powered toys, printers, and other low-voltage or battery-powered motion control applications. The module has two H-bridge drivers, and can drive two DC motors or two winding of stepper motors, as well as other loads like solenoids.It requires an onboard 5V voltage regulator which can power the I2C bus. All driver lines are diode protected from back EMF.It features two LEDs for fault indicator and four LEDs to indicate which direction each motor is running. GROVE system plug and I2C interface enables you to daisy-chain the driver with many other devices."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove%C2%A0-%C2%A0I2C%C2%A0Mini%C2%A0Motor%C2%A0Driver-p-2508.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Without external power supply"),(0,i.kt)("li",{parentName:"ul"},"Two leds for fault indicator"),(0,i.kt)("li",{parentName:"ul"},"Default maximum drive current 200 mA"),(0,i.kt)("li",{parentName:"ul"},"Grove compatible"),(0,i.kt)("li",{parentName:"ul"},"I2C interface"),(0,i.kt)("li",{parentName:"ul"},"Motor's speed and direction can control"),(0,i.kt)("li",{parentName:"ul"},"Number of channels: 2"),(0,i.kt)("li",{parentName:"ul"},"Easy to use")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("p",null,"This motor driver can be used to drive any brushed electronic motor as long as it doesn't consume more than 1A at 5v.\nTwo motors can be driven simultaneously while set to a different speed and direction.\nThe speed can be set fully proportional and is controlled by I2C command."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Battery-Powered:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Printers"),(0,i.kt)("li",{parentName:"ul"},"Toys"),(0,i.kt)("li",{parentName:"ul"},"Robotics"),(0,i.kt)("li",{parentName:"ul"},"Cameras"),(0,i.kt)("li",{parentName:"ul"},"Phones"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Small Actuators, Pumps, etc."))),(0,i.kt)("p",null,"Here are some projects for your reference."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Make a Mini Toy Car")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Make a Steampunk Style Award")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_toy_car.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Seeed_award2015.jpg",alt:null}))))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Item"),(0,i.kt)("th",{scope:"col"},"Min"),(0,i.kt)("th",{scope:"col"},"Typical"),(0,i.kt)("th",{scope:"col"},"Max"),(0,i.kt)("th",{scope:"col"},"Unit")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Working Voltage"),(0,i.kt)("td",null,"2.75"),(0,i.kt)("td",null,"5"),(0,i.kt)("td",null,"6.8"),(0,i.kt)("td",null,"VDC")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Max Output Current per channel"),(0,i.kt)("td",null,"0.2(default)"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"1"),(0,i.kt)("td",null,"A")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Input/output voltage on I2C bus"),(0,i.kt)("td",{colspan:"3"},"3.3/5"),(0,i.kt)("td",null,"V")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Communication protocol"),(0,i.kt)("td",{colspan:"3"},"I2C"),(0,i.kt)("td",null,"/")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Default I2C Address"),(0,i.kt)("td",{colspan:"3"},"0xC0, 0xC4"),(0,i.kt)("td",null,"/"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver.jpg",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Grove Interface")," - Grove products have a eco system and all have a same connector which can plug onto the ",(0,i.kt)("strong",{parentName:"li"},"Base Shield"),". Connect this module to the I",(0,i.kt)("sup",null,"2"),"C port of Base Shield, and then it can work well with Arduino. However, you can also connect Grove - Mini I2C Motor Driver to Arduino without Base Shield by jumper wires.")),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",{width:"150"},"Arduino UNO"),(0,i.kt)("th",{width:"150"},"Base Shield"),(0,i.kt)("th",{width:"150"},"Grove - Mini I2C Motor Driver")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("td",null,"5V"),(0,i.kt)("td",{rowspan:"4"},"I2C port"),(0,i.kt)("td",null,"VCC")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("td",null,"GND"),(0,i.kt)("td",null,"GND")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("td",null,"SDA"),(0,i.kt)("td",null,"SDA")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("td",null,"SCL"),(0,i.kt)("td",null,"SCL"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CH1 fault indicator")," - Channel 1 fault indicator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CH2 fault indicator")," - Channel 2 fault indicator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Direction indicator")," - Motor direction indicator."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CH1 Output Connector")," - Motor 1 connector."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"CH2 Output Connector")," - Motor 2 connector.")),(0,i.kt)("h2",{id:"hardware-function"},"Hardware function"),(0,i.kt)("h3",{id:"change-default-maximum-drive-current"},"Change Default maximum drive current"),(0,i.kt)("p",null,"The default maximum drive current of each channel is 200mA, see the front picture of the board"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/QQ20150817-3.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Each channel (CH1,CH2) has been added a resistor, and each value of resistor (R5,R12) is 1 \u03a9, so the maximum drive current is 200mA according to the following equation"),(0,i.kt)("center",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_7.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("p",null,"Meantime, each channel provides a reserved solderable pad (R6 for CH1, R13 for CH2), so you can solder a resistor onto the board to change the resistor value of each channel. Following is the new equation if adding resistor to the board"),(0,i.kt)("center",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_8.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_9.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Maximum working current of each channel must be less than 1A. So the minimum value of resistor soldered to the reserved pad should not less than 0.2 \u03a9.")),(0,i.kt)("h3",{id:"change-default-i2c-address"},"Change Default I",(0,i.kt)("sup",null,"2"),"C Address"),(0,i.kt)("p",null,"The I",(0,i.kt)("sup",null,"2"),"C address of each channel is changeable. Please take a look at the back side of the board, you will find there are 4 jumper pads; A0_CH1 and A1_CH1 are for channel 1, A0_CH2 and A1_CH2 are for channel 2, as shown below:"),(0,i.kt)("center",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Address_mini_i2c_motor_driver.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("p",null,"You can solder or unsolder each jumper to change the I2C address:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 - You need a solder iron, just solder two sides of the jumper together"),(0,i.kt)("li",{parentName:"ul"},"0 - You need a solder iron, just unsolder two sides of the jumper.")),(0,i.kt)("center",null,(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_I2C_motor_12.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The library of Grove - Mini I2C Motor driver is dependent on the default address.")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"Now, let us begin to use the Grove - Mini I2C Motor Driver."),(0,i.kt)("h3",{id:"preparations"},"Preparations"),(0,i.kt)("p",null,"Now we are making a demo for Grove - Mini I2C Motor Driver v1.0 which require following modules."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2 * DC Motor 2V-6V"),(0,i.kt)("li",{parentName:"ul"},"Seeeduino Lite")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Seeeduino Lite is compatible with Arduino.")),(0,i.kt)("p",null,"If you are using an Arduino UNO or any others Arduino compatible boards that with out a Grove connect,"),(0,i.kt)("p",null,"You will need a Grove Base Shield to connect the Grove easily."),(0,i.kt)("p",null,"If this is your first time using Arduino or Seeeduino, Please put hand on Getting_Started_with_Seeeduino to start your Arduino journey."),(0,i.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,i.kt)("p",null,"Grove - Mini I2C Motor Driver got one Grove socket for connecting two modules above.\nThey are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"2 * DC Motor 2V-6V - connnect to CH1 & CH2 Output connector."),(0,i.kt)("li",{parentName:"ul"},"Seeeduino Lite")),(0,i.kt)("p",null,"Connect Seeeduino's Grove I2C Interface to Mini Motor Driver's Grove Interface as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Mini_motor_driver_demo.jpg",alt:null})),(0,i.kt)("h3",{id:"software-work"},"Software Work"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/img/Arduino_mini_i2c_motor_driver.jpg",alt:null}))),(0,i.kt)("p",null,"The Grove - Mini I2C Motor Driver can control motor which is based on the chip DRV8830. The DRV8830 is not just a dual motor driver, it is a dual H-bridge. An h-bridge is basically a specific setup of transistors that allow you to switch direction of current. You can use your Arduino to make them spin at any speed."),(0,i.kt)("p",null,"Because the module has 2 H-bridges, you can not only make a robot go forwards and backwards, but also turn around by having each wheel spin in a different direction."),(0,i.kt)("p",null,"Connect Seeeduino to computer use a micro USB cable."),(0,i.kt)("p",null,"Now, let us use the Grove - Mini I2C Motor Driver to control two DC motors rotating in the positive or opposite direction."),(0,i.kt)("p",null,"Given below is an example program to be used with an Arduino. The code for this is very basic, but you can also change it and do it your own way."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/****************************************************************\nExample code demonstrating the use of the Arduino Library for\nthe SparkFun MiniMoto board, which uses the TI DRV8830 IC for I2C\nlow-voltage DC motor control.\n\xa0\nThis code is beerware; if you use it, please buy me (or any other\nSparkFun employee) a cold beverage next time you run into one of\nus at the local.\n\xa0\n17 Sep 2013- Mike Hord, SparkFun Electronics\n\xa0\nCode developed in Arduino 1.0.5, on a Fio classic board.\n\xa0\n**Updated for Arduino 1.6.4 5/2015**\n****************************************************************/\n\xa0\n#include <SparkFunMiniMoto.h>  // Include the MiniMoto library\n\xa0\n// Create two MiniMoto instances, with different address settings.\nMiniMoto motor0(0xC4); // A1 = 1, A0 = clear\nMiniMoto motor1(0xC0); // A1 = 1, A0 = 1 (default)\n\xa0\n#define FAULTn  16     // Pin used for fault detection.\n\xa0\n// Nothing terribly special in the setup() function- prep the\n//  serial port, print a little greeting, and set up our fault\n//  pin as an input.\nvoid setup()\n{\n    Serial.begin(9600);\n    Serial.println("Hello, world!");\n    pinMode(FAULTn, INPUT);\n}\n\xa0\n// The loop() function just spins the motors one way, then the\n//  other, while constantly monitoring for any fault conditions\n//  to occur. If a fault does occur, it will be reported over\n//  the serial port, and then operation continues.\nvoid loop()\n{\n    Serial.println("Forward!");\n    motor0.drive(100);\n    motor1.drive(100);\n    delayUntil(1000);\n    Serial.println("Stop!");\n    motor0.stop();\n    motor1.stop();\n    delay(1000);\n    Serial.println("Reverse!");\n    motor0.drive(-100);\n    motor1.drive(-100);\n    delayUntil(1000);\n    Serial.println("Brake!");\n    motor0.brake();\n    motor1.brake();\n    delay(1000);\n}\n\xa0\n// delayUntil() is a little function to run the motor either for\n//  a designated time OR until a fault occurs. Note that this is\n//  a very simple demonstration; ideally, an interrupt would be\n//  used to service faults rather than blocking the application\n//  during motion and polling for faults.\nvoid delayUntil(unsigned long elapsedTime)\n{\n    // See the "BlinkWithoutDelay" example for more details on how\n    //  and why this loop works the way it does.\n    unsigned long startTime = millis();\n    while (startTime + elapsedTime > millis())\n    {\n        // If FAULTn goes low, a fault condition *may* exist. To be\n        //  sure, we\'ll need to check the FAULT bit.\n        if (digitalRead(FAULTn) == LOW)\n        {\n            // We\'re going to check both motors; the logic is the same\n            //  for each...\n            byte result = motor0.getFault();\n            // If result masked by FAULT is non-zero, we\'ve got a fault\n            //  condition, and we should report it.\n            if (result & FAULT)\n            {\n                Serial.print("Motor 0 fault: ");\n                if (result & OCP) Serial.println("Chip overcurrent!");\n                if (result & ILIMIT) Serial.println("Load current limit!");\n                if (result & UVLO) Serial.println("Undervoltage!");\n                if (result & OTS) Serial.println("Over temp!");\n                break; // We want to break out of the motion immediately,\n                //  so we can stop motion in response to our fault.\n            }\n            result = motor1.getFault();\n            if (result & FAULT)\n            {\n                Serial.print("Motor 1 fault: ");\n                if (result & OCP) Serial.println("Chip overcurrent!");\n                if (result & ILIMIT) Serial.println("Load current limit!");\n                if (result & UVLO) Serial.println("Undervoltage!");\n                if (result & OTS) Serial.println("Over temp!");\n                break;\n            }\n        }\n    }\n}\n')),(0,i.kt)("p",null,"Now click Upload(CTRL+U) to burn testing code. Please refer to Getting_Started_with_Seeeduino for any error prompt and you can also add comment on community."),(0,i.kt)("h3",{id:"review-results"},"Review Results"),(0,i.kt)("p",null,"After upload is complete, the motors will rotate in the positive or opposite direction in cycle."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/DRV8830.pdf"},"DRV8830 Datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH_PCB.zip"},"Grove - Mini I2C Motor Driver","_","Eagle","_","File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mini_I2C_Motor_Driver_v1.0/res/Grove-Mini_I2C_Motor_Driver_v1.0_SCH.pdf"},"Grove - Mini I2C Motor Driver Schematic Document")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Drv8830_Motor_Driver"},"Grove - Mini I2C Motor Driver Source Library"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
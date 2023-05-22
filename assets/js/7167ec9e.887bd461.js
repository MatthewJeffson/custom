"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86428],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={title:"Grove - I2C Motor Driver V1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/",slug:"/Grove-I2C_Motor_Driver_V1.2",last_update:{date:"01/09/2022",author:"gunengyu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2",title:"Grove - I2C Motor Driver V1.2",description:"The Grove I2C motor driver is a new addition to the Grove series with the same easy-to-use interface. Its heart is a dual channel H-bridge driver chip\uff08L298N\uff09that can handle current up to 2A per channel, controlled by an Atmel ATmega8L which handles the I2C communication with for example an Arduino. Both motors can be driven simultaneously while set to a different speed and direction. It can power two brushed DC motors or one 4-wire two-phase stepper motor. It requires a 6V to 15V power supply to power the motor and has an onboard 5V voltage regulator which can power the I2C bus and the Arduino(selectable by jumper). All driver lines are diode protected from back EMF.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-I2C_Motor_Driver_V1.2",permalink:"/Grove-I2C_Motor_Driver_V1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-I2C_Motor_Driver_V1.2.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641657600,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"Grove - I2C Motor Driver V1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-I2C_Motor_Driver_V1.2/",slug:"/Grove-I2C_Motor_Driver_V1.2",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Motor Driver",permalink:"/Grove-I2C_Motor_Driver"},next:{title:"Grove - I2C Motor Driver V1.3",permalink:"/Grove-I2C_Motor_Driver_V1.3"}},s={},d=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Feature",id:"feature",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Usage",id:"usage",level:2},{value:"Set the address of the I2C Motor Driver",id:"set-the-address-of-the-i2c-motor-driver",level:3},{value:"How to drive a 4-wire stepper",id:"how-to-drive-a-4-wire-stepper",level:3},{value:"Function Reference",id:"function-reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-2.jpg",alt:null})),(0,n.kt)("p",null,"The Grove I2C motor driver is a new addition to the Grove series with the same easy-to-use interface. Its heart is a dual channel H-bridge driver chip\uff08L298N\uff09that can handle current up to 2A per channel, controlled by an Atmel ATmega8L which handles the I2C communication with for example an Arduino. Both motors can be driven simultaneously while set to a different speed and direction. It can power two brushed DC motors or one 4-wire two-phase stepper motor. It requires a 6V to 15V power supply to power the motor and has an onboard 5V voltage regulator which can power the I2C bus and the Arduino(selectable by jumper). All driver lines are diode protected from back EMF."),(0,n.kt)("p",null,"The easy software interface is not the only easy-to-use feature because the Grove I2C motor driver is designed to get you up and running in no time. It features a LED for power and four LED's to indicate if and to which direction each motor is running. Screw terminals facilitate motor and power connections, and the Grove system plug and I2C interface enables you to daisy-chain the driver with many other devices."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/twig-i2c-motor-driver-p-907.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,n.kt)("hr",null),(0,n.kt)("table",{width:"494"},(0,n.kt)("tr",null,(0,n.kt)("th",null," Revision"),(0,n.kt)("th",null," Descriptions"),(0,n.kt)("th",null," Release")),(0,n.kt)("tr",null,(0,n.kt)("td",null," v1.0"),(0,n.kt)("td",null," Initial public release"),(0,n.kt)("td",null," May 17th, 2012")),(0,n.kt)("tr",null,(0,n.kt)("td",null," v1.2"),(0,n.kt)("td",null," I2C address set by hardware"),(0,n.kt)("td",null," July 2th, 2012"))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Grove Compatiple")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"I2C Interface")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Motor's speed and direction can control")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Number of channels: 2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Changeable slave address by Hardware"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("hr",null),(0,n.kt)("table",{cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"}," Item"),(0,n.kt)("th",{scope:"col"}," Min"),(0,n.kt)("th",{scope:"col"}," Typical"),(0,n.kt)("th",{scope:"col"}," Max"),(0,n.kt)("th",{scope:"col"}," Unit")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"},"Working Voltage"),(0,n.kt)("td",null," 6"),(0,n.kt)("td",null," -"),(0,n.kt)("td",null," 15"),(0,n.kt)("td",null," VDC")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Max Output Current per channel"),(0,n.kt)("td",{colspan:"3"},"0.5"),(0,n.kt)("td",null," A")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Maximum Total current"),(0,n.kt)("td",{colspan:"3"},"1.0"),(0,n.kt)("td",null," A")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"}," Input/output voltage on I2C bus"),(0,n.kt)("td",{colspan:"3"}," 5"),(0,n.kt)("td",null," V")),(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"row"},"  Communication protocol"),(0,n.kt)("td",{colspan:"3"}," I2C"),(0,n.kt)("td",null," /"))),(0,n.kt)("h2",{id:"interface-function"},"Interface Function"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-1.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"78M05 IC:")," 5v voltage regulator"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"L298 IC:")," dual full bridge driver"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Atmega8 IC:")," Control Motor Rotate."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"NOTE:")," Input voltage on screw terminals is regulated to 5v and connected to I2C +5v via a jumper (J4). Remove jumper if both external power via the screw terminals and power via the I2C header is used. Use jumper if 5v should be supplied to the I2C bus."),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This motor driver can be used to drive any brushed electronic motor as long as it doesn't consume more than 2A at 5v. Two motors can be driven simultaneously while set to a different speed and direction. The speed can be set fully proportional and is controlled by the ATmega8 on the board using PWM. It is set by I2C commands sent from Arduino or Seeeduino.\nIt is perfect for applications like robots, homebuilt RC cars, case fans, high power LED illumination or any other project that involves proportional load control."),(0,n.kt)("h2",{id:"cautions"},"Cautions"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The board will be very hot if while operating over 1Amps. Do keep off your hands!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arduino IDE(1.0 Or higher version) are supported."))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"The I2C Motor Driver can control motor which is based on the chip L298, The L298 isn\u2019t just a dual motor driver, it is a dual H-bridge. An h-bridge is basically a specific setup of transistors that allow you to switch direction of current. So hooked up to a motor, that means you can have it spin in both directions, and with PWM input, you can use your Arduino to make them spin at any speed. Because the L298 has 2 H-bridges, you can not only make a robot go forwards and backwards, but also turn around by having each wheel spin in a different direction."),(0,n.kt)("p",null,"Now, let's use the I2C Motor Driver to control two DC motors or a stepper rotating in the positive or opposite direction."),(0,n.kt)("h3",{id:"set-the-address-of-the-i2c-motor-driver"},"Set the address of the I2C Motor Driver"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Set the address by dial switch as a new function added to the new I2C Motor Driver.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-9.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then keep the address setup in the program is same to the address setup on the I2C motor driver. The default address setup in the program is 0x0f.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#define I2CMotorDriverAdd         0x0f   // Set the address of the I2CMotorDriver\n")),(0,n.kt)("h3",{id:""}),(0,n.kt)("p",null,"How to drive 2 DC motors"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/I2CMotorDriver-4.jpg",alt:null})),(0,n.kt)("div",null,(0,n.kt)("span",{style:{color:"red"}},"**Note:**"),(0,n.kt)("dl",null,(0,n.kt)("dd",null,"The first thing to notice however, is that you need an external power source  your DC motors, the 5v pin on the Arduino can not source enough power to drive 2 motors, you may damage your Arduino if you do."))),(0,n.kt)("p",null,"And then program your Arduino as below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#include <Wire.h>\n.......\n.......\n< Driver functions >\n.......\n.......\nvoid setup()  {\n    Wire.begin(); // join i2c bus (address optional for master)\n    delayMicroseconds(10000); //wait for motor driver to initialization\n}\n\nvoid loop()  {\n    while(1)  {\n        MotorSpeedSetAB(100,20);\n        delay(10); //this delay needed\n        MotorDirectionSet(0b1010);  //0b1010  Rotating in the positive direction\n        delay(1000);\n        MotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction\n        delay(500);\n    }\n}\n")),(0,n.kt)("p",null,"In this program, Arduino first set the speed of the 2 DC motors with the ",(0,n.kt)("em",{parentName:"p"},"MotorSpeedSetAB()_command, and then set the DC motors work directions with _MotorDirectionSet()")," command. please refer to the Grove-I2C_Motor_Driver_V1.2#Function_Reference for details, you can download all the demo code in the Grove-I2C_Motor_Driver_V1.2#Resources."),(0,n.kt)("h3",{id:"how-to-drive-a-4-wire-stepper"},"How to drive a 4-wire stepper"),(0,n.kt)("p",null,"The I2C motor Driver can be also used to drive a 4-wire stepper. connect your stepper to the Output Pins of I2C motor driver, and then connect motor driver to your Arduino/Seeeduino with I2C bus. Program your Arduino as blows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#include <Wire.h>\n.......\n.......\n< Driver functions >\n.......\n.......\nvoid setup()  {\n    Wire.begin(); // join i2c bus (address optional for master)\n    delayMicroseconds(10000); //wait for motor driver to initialization\n}\n\nvoid loop()  {\n    while(1)  {\n        MotorSpeedSetAB(100,100);//when driving a stepper, the speed should be set to 100;\n        delay(10);\n        MotorDirectionSet(0b0001);\n        delay(4);\n        MotorDirectionSet(0b0011);\n        delay(4);\n        MotorDirectionSet(0b0010);\n        delay(4);\n        MotorDirectionSet(0b0110);\n        delay(4);\n        MotorDirectionSet(0b0100);\n        delay(4);\n        MotorDirectionSet(0b1100);\n        delay(4);\n        MotorDirectionSet(0b1000);\n        delay(4);\n        MotorDirectionSet(0b1001);\n        delay(4);\n    }\n}\n")),(0,n.kt)("p",null,"This connected 4-wire stepper will rotate, you can adjust the rotate speed or step number in your Arduino program. You can also use some other stepper libraries to control it, you can download all the demo code in the Resource."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/img/2.gif",alt:null})),(0,n.kt)("h2",{id:"function-reference"},"Function Reference"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. void MotorSpeedSetAB(unsigned char MotorSpeedA , unsigned char MotorSpeedB)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Description: defines the speed of motor 1 and motor 2")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"MotorSpeedA: the DC motor A speed, should be 0~100;")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"MotorSpeedB: the DC motor B speed, should be 0~100;")),(0,n.kt)("p",null,"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'Serial.println("sent DC speed 100");\nMotorSpeedSetAB(100,100);//defines the speed of motor 1 and motor 2;\ndelay(10); //this delay needed\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. void MotorPWMFrequenceSet(unsigned char Frequence)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Description:set the prescale frequency of PWM, 0x03 default.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Frequence: the prescale frequency of PWM.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. void MotorDirectionSet(unsigned char Direction)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Description: Adjust the direction of the motors.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Direction:can be Forward/Reverse rotating.")),(0,n.kt)("p",null,"Usage:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'MotorDirectionSet(0b1010);  //"0b1010" defines the output polarity, "10" means the M+ is "positive" while the M- is "negative"\n                            // make sure M+ and M- is different polarity when driving DC motors.\ndelay(1000);\nMotorDirectionSet(0b0101);  //0b0101  Rotating in the opposite direction\ndelay(500);\n')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4. void MotorDriectionAndSpeedSet(unsigned char Direction,unsigned char MotorSpeedA,unsigned char MotorSpeedB)")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Description: Adjust the direction and speed together of Motors.")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Grove-I2C_Motor_Driver_Source_File.zip"},"Grove - I2C Motor Driver Eagle File"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/I2CMotorDriver12Demo.zip"},"I2C Motor DriverV1.2 Demo Code"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/L298datasheet.pdf"},"L298 Datasheet"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/ST_78M05DataSheet.pdf"},"78M05 Datssheet"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Motor_Driver_V1.2/res/Burn_firmware_for_Atmega8_using_ISP.zip"},"File:Burn Firmware for Atmega8 using ISP")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
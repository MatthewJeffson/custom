"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62490],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={title:"Digital",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-Digital/",slug:"/Wio-Terminal-IO-Digital",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Using the Grove Digital Port on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Digital",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Digital",title:"Digital",description:"This repo demonstrates how to use the Grove Ports on Wio Terminal as Digital Ports. You can simply use this functionality to play with the Grove Ecosystem!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Digital.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-Digital",permalink:"/custom/Wio-Terminal-IO-Digital",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-Digital.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Digital",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-Digital/",slug:"/Wio-Terminal-IO-Digital",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Analog",permalink:"/custom/Wio-Terminal-IO-Analog"},next:{title:"I2C",permalink:"/custom/Wio-Terminal-IO-I2C"}},p={},s=[{value:"RPI Digital Pins",id:"rpi-digital-pins",level:2},{value:"Grove Port Configurations",id:"grove-port-configurations",level:2},{value:"Using the Grove I2C Port as Digital Port",id:"using-the-grove-i2c-port-as-digital-port",level:3},{value:"Example Code",id:"example-code",level:2},{value:"PWM Output Example Code (Servo)",id:"pwm-output-example-code-servo",level:2},{value:"UART Serial",id:"uart-serial",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-the-grove-digital-port-on-wio-terminal"},"Using the Grove Digital Port on Wio Terminal"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-12%2014-55-44.2019-12-12%2014_56_10.gif"})),(0,i.kt)("p",null,"This repo demonstrates how to use the Grove Ports on Wio Terminal as Digital Ports. You can simply use this functionality to play with the Grove Ecosystem!"),(0,i.kt)("h2",{id:"rpi-digital-pins"},"RPI Digital Pins"),(0,i.kt)("p",null,"The Raspberry Pi pinouts are defined as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"RPI_D0")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"RPI_D8"))),(0,i.kt)("h2",{id:"grove-port-configurations"},"Grove Port Configurations"),(0,i.kt)("p",null,"To use the ",(0,i.kt)("strong",{parentName:"p"},"Grove configurable A/D Port")," as Digital port, simply define it as follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    pinMode(D0, INPUT); //Configure UART TX as Digital port\n}\n")),(0,i.kt)("h3",{id:"using-the-grove-i2c-port-as-digital-port"},"Using the Grove I2C Port as Digital Port"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Grove I2C port")," can also be used as Digital Port on Wio Terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    pinMode(PIN_WIRE_SCL, INPUT); //Defined SCL of I2C port as Digital Input\n")),(0,i.kt)("p",null,"Now, connect your Grove sensor to the physical Grove Port!"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," For more defined variant pin name, please check Schematic and ",(0,i.kt)("inlineCode",{parentName:"p"},"variant.h")),(0,i.kt)("h2",{id:"example-code"},"Example Code"),(0,i.kt)("p",null,"In this example, a Grove Button and Grove LED are used to demonstrate:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#define BUTTON D0 //Button to Grove UART Port\n#define LED PIN_WIRE_SCL //LED to Grove I2C Port\n\nvoid setup() {\n  Serial.begin(115200);\n  pinMode(BUTTON, INPUT);\n  pinMode(LED, OUTPUT);\n}\n\nvoid loop() {\n  int buttonState = digitalRead(BUTTON);\n  Serial.print("Button State: ");\n  Serial.println(buttonState);\n\n  if (buttonState == HIGH) {\n    digitalWrite(LED, HIGH);\n  }\n  else {\n    digitalWrite(LED, LOW);\n  }\n  delay(50);\n}\n')),(0,i.kt)("h2",{id:"pwm-output-example-code-servo"},"PWM Output Example Code (Servo)"),(0,i.kt)("p",null,"In this example, a Grove Servo is used to demonstrate PWM output:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <Servo.h>\nServo myservo;\n\nint pos = 0;\n\nvoid setup() {\n  myservo.attach(D0); //Connect servo to Grove Digital Port\n}\n\nvoid loop() {\n  for (pos = 0; pos <= 180; pos += 1) {\n    // in steps of 1 degree\n    myservo.write(pos);\n    delay(15);\n  }\n  for (pos = 180; pos >= 0; pos -= 1) {\n    myservo.write(pos);\n    delay(15);\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," To use the Servo library with Wio Terminal, please include ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/PaintYourDragon/Servo"},"Adafruit's version")," for SAMD51 capability."),(0,i.kt)("h2",{id:"uart-serial"},"UART Serial"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The USB Serial in Wio Terminal: ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The broken out UART port: ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial1")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
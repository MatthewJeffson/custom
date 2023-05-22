"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91748],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=i,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||n;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25934:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={description:"Grove - EC Sensor Kit",title:"Grove - EC Sensor Kit",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-EC-Sensor-kit",last_update:{date:"1/6/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Liquid/Grove-EC-Sensor-kit",id:"Sensor/Grove/Grove_Sensors/Liquid/Grove-EC-Sensor-kit",title:"Grove - EC Sensor Kit",description:"Grove - EC Sensor Kit",source:"@site/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-EC-Sensor-kit.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Liquid",slug:"/Grove-EC-Sensor-kit",permalink:"/custom/Grove-EC-Sensor-kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Liquid/Grove-EC-Sensor-kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672934400,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - EC Sensor Kit",title:"Grove - EC Sensor Kit",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-EC-Sensor-kit",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - PH Sensor Kit (E-201C-Blue)",permalink:"/custom/Grove-PH-Sensor-kit"},next:{title:"Grove - TDS Sensor",permalink:"/custom/Grove-TDS-Sensor"}},s={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Requied",id:"materials-requied",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.01.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"}))),"\nWith the development of technology,our environments  face large challenge.We need a tool to preliminary test whether the water quality\nare reach the standard.Grove EC Sensor is a analog electrical conductivity meter.The electrical conductivity sensor (EC sensor) measures the electrical conductivity in a solution which usually used for aquaculture and water quality testing. The Grove - Electrical Conductivity Sensor is specially designed for a low-cost system with a relatively high accuracy which can cover most applications. The Grove connector and BNC probe interface make it easy to use and very suitable for Arduino and Raspberry Pi project. This Kit includes an EC probe and a driver board, and the driver board support both 3.3V and 5V system."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"This product is non-RoHS certified.\n"))),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Widely used for most applications of aquaculture and water quality testing   "),(0,i.kt)("li",{parentName:"ul"},"Compact size for easy deployment  "),(0,i.kt)("li",{parentName:"ul"},"Support with both Arduino and Rasberry Pi "),(0,i.kt)("li",{parentName:"ul"},"Cost-effective")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Items"),(0,i.kt)("th",{parentName:"tr",align:null},"Values"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V/5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EC Range"),(0,i.kt)("td",{parentName:"tr",align:null},"0-2000us/cm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Resolution"),(0,i.kt)("td",{parentName:"tr",align:null},"\xb15%\uff08STP\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Response time"),(0,i.kt)("td",{parentName:"tr",align:null},"\uff1c10sec")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Probe Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"BNC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"5-80\u2103")))),(0,i.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h4",{id:"materials-requied"},"Materials Requied"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Arduino uno"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Grove-EC Sensor kit"),(0,i.kt)("th",{parentName:"tr",align:"center"},"base shield"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/arduinouno.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.09.png",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.06.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Arduino-Uno-Rev3-p-694.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-EC-Sensor-Kit-DJS-1C-Black-p-4576.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2.html"},"Get ONE Now"))))),(0,i.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/hardware.jpg",alt:"pir",width:600,height:"auto"})),":::tip Please plug the USB cable, Grove-EC Sensor Interface into Arduino Uno board Interface gently, otherwise , you may damage the port. ::: - **Step 1.** Plug Grove-EC Sensor into Interface **A1** of a base shield with a Grove Cable.",(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Connect a base shield to Arduino Uno.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Connect Arduino Uno to PC via a USB cable.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Download the code, please refer to the software part.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5.")," Run the code and the outcome will display on the screen of ",(0,i.kt)("strong",{parentName:"p"},"Serial Monitor")," in your Arduino IDE."))),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip"},"Demo code"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Add the whole ",(0,i.kt)("strong",{parentName:"p"},"DFRobot_EC_master.zip")," file to your Arduino IDE library file. You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install an Arduino library"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,i.kt)("strong",{parentName:"p"},"DFRobot_EC_Test")," example file with your Arduino IDE."))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.07.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("h4",{id:"software-code"},"Software Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},'#include "DFRobot_EC.h"\n#include <EEPROM.h>\n\n#define EC_PIN A1\nfloat voltage,ecValue,temperature = 25;\nDFRobot_EC ec;\n\nvoid setup()\n{\n  Serial.begin(115200);  \n  \n  ec.begin();\n}\n\nvoid loop()\n{\n    static unsigned long timepoint = millis();\n    if(millis()-timepoint>1000U)  //time interval: 1s\n    {\n      timepoint = millis();\n      voltage = analogRead(EC_PIN)/1024.0*5000;   // read the voltage\n      //temperature = readTemperature();          // read your temperature sensor to execute temperature compensation\n      ecValue =  ec.readEC(voltage,temperature);  // convert voltage to EC with temperature compensation\n      Serial.print("temperature:");\n      Serial.print(temperature,1);\n      Serial.print("^C  EC:");\n      Serial.print(ecValue,2);\n      Serial.println("ms/cm");\n    }\n    ec.calibration(voltage,temperature);          // calibration process by Serail CMD\n}\n\nfloat readTemperature()\n{\n  //add your code here to get the temperature from your temperature sensor\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"}," - Before detecting the target solution, the sensor **MUST** be calibrated by conductivity solutions, and it also **MUST** be put into clean water before detecting a new kind of solution and swiped.\n\n - Before being measured, the electrode must be calibrated with a standard buffer solution. In order to obtain more accurate results, the known conductivity solutions value should be reliable, and closer to the measured one.\n\n - Do not immerse in liquid for a long time. Otherwise this will shorten the life of the probe.The platinum black layer is attached to the surface of the sheet metal in the probe. It should avoid any object touching it. It can only be washed with distilled water, otherwise, the platinum black layer will be damaged, resulting in an inaccurate measurement.\n\n - The sensor **MUST NOT** be dipped in the detecting liquid for a long time.\n"))),(0,i.kt)("p",null,"To ensure accuracy, the probe needs to be calibrated for its first use and after not being used for an extended period of time. The following steps use two-point calibration and therefore require standard buffer solutions of 1413us/cm and 12.88ms/cm. The following steps show how to operate two-point calibration."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," After you have upload the code to Arduino, open the serial monitor,you can see the temperature and electrical conductivity like below picture.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.02.png",alt:"pir",width:600,height:"auto"})),"- **Step 6.** Use distilled water to wash the probe ,then absorb the residual water-drops with paper. Insert the probe into the 1413us/cm standard buffer solution, stir gently, until the values are stable. Input enterec command in the serial monitor to enter the calibration mode.",(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.03.png",alt:"pir",width:600,height:"auto"})),"- **Step 7.** Input calec commands to start the calibration. The program will automatically identify which of the two standard buffer solutions is present: either 1413us/cm and 12.88ms/cm. In this step, the standard buffer solution is 1413us/cm.",(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.04.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 8.")," When the calibration is successful,input exitec command to save the relevant parameters and exit the calibration mode.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/img/110020292.05.png",alt:"pir",width:600,height:"auto"})),"After you finished the above steps, the first point calibration is completed. The second point calibration is the same procedure. Here we use the 12.88ms/cm standard buffer solutions. The calibration process is not repeated here.",(0,i.kt)("p",null,"After completing the above steps, the two-point calibration is completed, and then it can be used for actual measurement. The relevant parameters in the calibration process have been saved to the EEPROM of the main control board."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/Grove-EC_Sensor_v1.0_SCH&PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DFRobot_EC_master.zip"},"Demo Code library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/CD4060BM_Material_specification.pdf"},"CD4060BM Material specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/DIP_TDS_Sensor_specification.pdf"},"DIP TDS Sensor specification")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-EC_Sensor_kit/res/LMV324_Material_specification.pdf"},"LMV324 Material specification"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
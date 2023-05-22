"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8201],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return r?n.createElement(h,o(o({ref:t},d),{},{components:r})):n.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},54128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={title:"Grove - IR Distance Interrupter v1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-IR_Distance_Interrupter_v1.2/",slug:"/Grove-IR_Distance_Interrupter_v1.2",last_update:{date:"01/03/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2",id:"Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2",title:"Grove - IR Distance Interrupter v1.2",description:"Grove - IR Distance Interrupter is used to detect any object blocking the path of light. The module consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface.",source:"@site/docs/Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Proximity",slug:"/Grove-IR_Distance_Interrupter_v1.2",permalink:"/custom/zh-CN/Grove-IR_Distance_Interrupter_v1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Proximity/Grove-IR_Distance_Interrupter_v1.2.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641139200,formattedLastUpdatedAt:"2022\u5e741\u67082\u65e5",frontMatter:{title:"Grove - IR Distance Interrupter v1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-IR_Distance_Interrupter_v1.2/",slug:"/Grove-IR_Distance_Interrupter_v1.2",last_update:{date:"01/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Ultrasonic Ranger",permalink:"/custom/zh-CN/Grove-Ultrasonic_Ranger"},next:{title:"Grove - TF Mini LiDAR",permalink:"/custom/zh-CN/Grove-TF_Mini_LiDAR"}},s={},p=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"<strong>Package includes</strong>",id:"package-includes",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"With Arduino",id:"with-arduino",level:3},{value:"Material required",id:"material-required",level:4},{value:"Connections",id:"connections",level:4},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Material required",id:"material-required-1",level:4},{value:"Hardware Connections and Software Work",id:"hardware-connections-and-software-work",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Grove_-_IR_Distance_Interrupter_v1.2.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Grove - IR Distance Interrupter")," is used to detect any object blocking the path of light. The module consists of an IR LED and a photosensor (phototransistor) pair. The light emitted by the IR LED gets reflected by any object placed in front of the sensor and this reflection is detected by the photosensor(phototransistor). Any white (or lighter) colored surface reflects more than black (or darker) colored surface."),(0,a.kt)("p",null,"When the reflected light is detected, it produces ",(0,a.kt)("strong",{parentName:"p"},"Digital HIGH")," (or Binary ",(0,a.kt)("strong",{parentName:"p"},"1"),") output on the ",(0,a.kt)("strong",{parentName:"p"},"SIG")," pin. The on-board LED indicator will also glow. If no reflection is detected or if the object is too far from the sensor, the output on the ",(0,a.kt)("strong",{parentName:"p"},"SIG")," pin stays at ",(0,a.kt)("strong",{parentName:"p"},"Digital LOW")," (Binary ",(0,a.kt)("strong",{parentName:"p"},"0"),"). The on-board LED indicator will be off as well. The detectable range of this sensor is 7.5\u201340 cm. The module incorporates a Rail-to-Rail Operational Amplifier to amplify the output of phototransistor. There is a potentiometer which can be used to adjust the gain of the amplifier, that is, sensitivity of detection."),(0,a.kt)("p",null,"With this sensor, you can build the following (but not limited to) applications: ",(0,a.kt)("strong",{parentName:"p"},"line following robots, optical encoders")," and ",(0,a.kt)("strong",{parentName:"p"},"object counting applications"),"."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-IR-Distance-Interrupter-p-1278.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.kt)("div",{class:"admonition note"},(0,a.kt)("p",{class:"admonition-title"},"Note"),"This product is mildly sensitive to non-IR radiations also and hence any bright light on photosensor impairs or disturbs IR light detection."),(0,a.kt)("div",{className:"admonition tip"},(0,a.kt)("p",{className:"admonition-title"},"Tip"),"The instructions to use this product are same as ",(0,a.kt)("span",{style:{fontWeight:"bold"}},"Grove - Infrared Reflective Sensor's"),". You can use this product directly if you have used Grove - Infrared Reflective Sensor."),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product version"),(0,a.kt)("th",{parentName:"tr",align:null},"Release date"),(0,a.kt)("th",{parentName:"tr",align:null},"Support status"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Versions older than v1.2"),(0,a.kt)("td",{parentName:"tr",align:null},"June 2012\u200e"),(0,a.kt)("td",{parentName:"tr",align:null},"Not supported")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - IR Distance Interrupter v1.2(current version)"),(0,a.kt)("td",{parentName:"tr",align:null},"April 2016"),(0,a.kt)("td",{parentName:"tr",align:null},"Supported")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grove compatible and easy to use"),(0,a.kt)("li",{parentName:"ul"},"Highly sensitive and reliable"),(0,a.kt)("li",{parentName:"ul"},"Longer detectable distance"),(0,a.kt)("li",{parentName:"ul"},"Adjustable sensitivity for various occasions"),(0,a.kt)("li",{parentName:"ul"},"More durable")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating voltage(V)"),(0,a.kt)("td",{parentName:"tr",align:null},"3.3 or 5 Volts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating current(mA)"),(0,a.kt)("td",{parentName:"tr",align:null},"Maximum: 20 mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Effective detectable distance"),(0,a.kt)("td",{parentName:"tr",align:null},"7.5\u201340 cm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reflective photosensor"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf"},"datasheet"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output operational amplifiers"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf"},"datasheet"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"2.5 g(for the module), 8.5 g(for all single package)")))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/hardware_overview.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ITR9909 Reflective photosensor"),", Highly sensitive reflective photosensor."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LM393 operational amplifier"),", rail-to-rail operational amplifier."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"LED Indicator"),", The LED will turn on when the received infrared light intensity exceeds a preset level."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Light sensitivity adjusting potentiometer")," , adjust the sensitivity of reflective photosensor to light.")),(0,a.kt)("h3",{id:"package-includes"},(0,a.kt)("strong",{parentName:"h3"},"Package includes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parts name"),(0,a.kt)("th",{parentName:"tr",align:null},"Quantity"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - Infrared Reflective Sensor"),(0,a.kt)("td",{parentName:"tr",align:null},"1 piece")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable")),(0,a.kt)("td",{parentName:"tr",align:null},"1 piece")))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Let us see how to implement few basic applications with this module:"),(0,a.kt)("h3",{id:"with-arduino"},"With Arduino"),(0,a.kt)("h4",{id:"material-required"},"Material required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grove - IR Distance Interrupter v1.2 \xd7 1"),(0,a.kt)("li",{parentName:"ul"},"Arduino UNO (other models also are fine) \xd7 1"),(0,a.kt)("li",{parentName:"ul"},"Grove cable \xd7 1"),(0,a.kt)("li",{parentName:"ul"},"Grove - Base Shield \xd7 1")),(0,a.kt)("h4",{id:"connections"},"Connections"),(0,a.kt)("p",null,"1.Connect Grove - IR Distance Interrupter v1.2 to Arduino UNO with Grove cable."),(0,a.kt)("p",null,"2.Place and hold the Reflective photosensor towards white(or light) colored surface."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor3.jpg",alt:null})),(0,a.kt)("p",null,"3.Adjust the potentiometer with a screwdriver to change the sensitivity of reflective photosensor, until the LED indicator glows. As your rotate clockwise, the reflective photosensor will be more sensitive to light."),(0,a.kt)("div",{class:"admonition note"},(0,a.kt)("p",{class:"admonition-title"},"Note"),"Use a proper screw-driver to adjust the tiny potentiometer. Applying heavy pressure or frequent adjustments might damage the wiper of the potentiometer."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor2.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/img/Reflective_photosensor1.jpg",alt:null})),(0,a.kt)("p",null,"4.Create an Arduino sketch and copy the below code into it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'void setup()  {\n    Serial.begin(9600);\n    pinMode(6,INPUT);\n}\nvoid loop()  {\n    while(1)  {\n        delay(500);\n        if(digitalRead(6)==LOW)  {\n            Serial.println("Somebody is here.");\n        }\n        else  {\n            Serial.println("Nobody.");\n        }\n    }\n}\n')),(0,a.kt)("p",null,"5.Upload the code. If you do not know how to upload a Arduino sketch, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/Windows"},"https://www.arduino.cc/en/Guide/Windows")," for Windows user or ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Guide/MacOSX"},"https://www.arduino.cc/en/Guide/MacOSX")," for Mac user. You can see the result as below."),(0,a.kt)("p",null,'6.When the path of light is blocked by some object, you would see "Somebody is here." in Serial Terminal else you will see "Nobody."'),(0,a.kt)("h3",{id:"with-raspberry-pi"},"With Raspberry Pi"),(0,a.kt)("h4",{id:"material-required-1"},"Material required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi (other models also are fine) \xd7 1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/GrovePi-p-1672.html?cPath=73"},"GrovePi")," or ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/GrovePi-p-2241.html?cPath=122_154_158"},"Grovepi+")," \xd7 1"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable")," \xd7 1")),(0,a.kt)("h4",{id:"hardware-connections-and-software-work"},"Hardware Connections and Software Work"),(0,a.kt)("p",null,"1.You should have a Raspberry Pi and a GrovePi or GrovePi+. In this demo, we use GrovePi."),(0,a.kt)("p",null,"2.We assume you have built the development environment successful. If not, follow this tutorial"),(0,a.kt)("p",null,"3.Connection:"),(0,a.kt)("p",null,"Plug Grove - IR Distance Interrupter into port D4 on GrovePi with ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Universal-4-Pin-Buckled-5cm-Cable-5-PCs-Pack-p-925.html?cPath=98_106_57"},"Grove cable"),"."),(0,a.kt)("p",null,"4.Navigate to the demos' directory, run the following command in a terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    cd yourpath/GrovePi/Software/Python/\n")),(0,a.kt)("p",null,"Run the command in a terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    nano grove\\_infrared\\_distance\\_interrupt.py\n")),(0,a.kt)("p",null,"Copy and save the following code into it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'import time\nimport grovepi\n\xa0\n# Connect the Grove Infrared Distance Interrupt Sensor to digital port D4\n# SIG,NC,VCC,GND\nsensor = 4\n\xa0\ngrovepi.pinMode(sensor,"INPUT")\n\xa0\nwhile True:\n    try:\n        # Sensor returns LOW and onboard LED lights up when the\n        # received infrared light intensity exceeds the calibrated level\n        if grovepi.digitalRead(sensor) == 0:\n            print "found something"\n        else:\n            print "nothing"\n\xa0\n        time.sleep(.5)\n\xa0\n    except IOError:\n        print "Error"\n')),(0,a.kt)("p",null,"5.Run the demo, run following command in terminal."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"    sudo python grove\\_infrared\\_distance\\_interrupt.py\n")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Eagle_files.zip"},"Grove - IR Distance Interrupter v1.2 Eagle file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/ITR9909_datasheet.pdf"},"Reflective Photosensor Datasheet(ITR9909)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LM393.pdf"},"LM393 Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/LMV358_datasheet.pdf"},"LMV358 Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-IR_Distance_Interrupter_v1.2/res/Grove-Infrared_Reflective_Sensor_v1.0_SourceFile.zip"},"Infrared Reflective Sensor Source Files"))),(0,a.kt)("p",null,"This Markdown file was created from ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2"},"https://www.seeedstudio.com/wiki/Grove_-_IR_Distance_Interrupter_v1.2")),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
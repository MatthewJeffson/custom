"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31256],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(r),k=a,c=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return r?n.createElement(c,o(o({ref:t},d),{},{components:r})):n.createElement(c,o({ref:t},d))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},6397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - MOSFET",title:"Grove - MOSFET",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-MOSFET",last_update:{date:"1/9/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET",id:"Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET",title:"Grove - MOSFET",description:"Grove - MOSFET",source:"@site/docs/Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Current",slug:"/Grove-MOSFET",permalink:"/Grove-MOSFET",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Current/Grove-MOSFET.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673193600,formattedLastUpdatedAt:"Jan 8, 2023",frontMatter:{description:"Grove - MOSFET",title:"Grove - MOSFET",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-MOSFET",last_update:{date:"1/9/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Coulomb Counter 3.3V to 5V (LTC2941)",permalink:"/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941"},next:{title:"Grove - SPDT Relay(30A)",permalink:"/Grove-SPDT_Relay_30A"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Demonstration",id:"demonstration",level:4},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_01.jpg"})),(0,a.kt)("p",null,"Grove \u2013 MOSFET enables you to control higher voltage project, say 15V DC, with low voltage, say 5V, on microcontroller. MOSFET is also a kind of switch, but its switching frequency can reach up to 5MHz, much faster than normal mechanical relay. There are two screw terminals on the board. One for outer power source and the other for device you want to control. Grove \u2013 MOSFET will pass the power from one end to another when closed. But if outer power source is absent, your device can still draw power from microcontroller via the Grove interface."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-MOSFET-p-1594.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",width:"210",height:"41",border:"0"}))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove - MOSFET V1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"Oct 2015")))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Value/Range"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Working voltage"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Vin"),(0,a.kt)("td",{parentName:"tr",align:"left"},"5 ~ 15V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"MOSFET Model"),(0,a.kt)("td",{parentName:"tr",align:"left"},"CJQ4435")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("h4",{id:"demonstration"},"Demonstration"),(0,a.kt)("p",null,"Here we demonstrate how to use Grove - MOSFET to control a motor. We provide power for it with external power source, but if your controlled device needs current smaller than 300mA, Seeeduino can totally support it and no extra power source needed.\u3001"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - MOSFET"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-MOSFET-p-1594.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove - MOSFET to port D6 of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/2.jpg"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove_MOSFET to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove_MOSFET"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"D6"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/MOSFET_Interface_Function.jpg"})),(0,a.kt)("p",null,"Vin: Accepts 5V ~ 15V power of which current is less than 2A."),(0,a.kt)("p",null,"Vout: Attach actuators here."),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Copy the code into Arduino IDE and upload. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'// demo of Grove - MOSFET\n// use  pwm pin 6 to control a motor\n\nint motorPin = 6;\n\nvoid setup()\n{\n    Serial.begin(38400);\n    pinMode(motorPin, OUTPUT);\n    Serial.println("Grove - MOSFET Test Demo!");\n}\n\nvoid loop()\n{\n    motorOnThenOffWithSpeed();\n    motorAcceleration();\n}\n\nvoid motorOnThenOffWithSpeed()\n{\n    int onSpeed  = 200;                         // a number between 0 (stopped) and 255 (full speed)\n    int onTime   = 2500;\n    int offSpeed = 50;                          // a number between 0 (stopped) and 255 (full speed)\n    int offTime  = 1000;\n    analogWrite(motorPin, onSpeed);\n    delay(onTime);\n    analogWrite(motorPin, offSpeed);\n    delay(offTime);\n}\n\nvoid motorAcceleration()\n{\n    int delayTime = 50;\n    for(int i=0; i<256; i++)\n    {\n        analogWrite(motorPin, i);\n        delay(delayTime);\n    }\n\n    for(int i=255; i>=0; i--)\n    {\n        analogWrite(motorPin, i);\n        delay(delayTime);\n    }\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Observe the state of the motor")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Static_image.gif",alt:null})),(0,a.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - MOSFET"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/Mosfet_small.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-MOSFET-p-1594.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-MOSFET ranger to ",(0,a.kt)("strong",{parentName:"li"},"D6")," port of GrovePi_Plus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/1.jpg"})),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to the demos' directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2."),"  To see the code")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'nano grove_mosfet.py   # "Ctrl+x" to exit #\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove MOSFET to digital port D6\n# SIG,NC,VCC,GND\nmosfet = 6\n\ngrovepi.pinMode(mosfet,"OUTPUT")\ntime.sleep(1)\n\nwhile True:\n    try:\n        # Full speed\n        grovepi.analogWrite(mosfet,255)\n        print "full speed"\n        time.sleep(2)\n\n        # Half speed\n        grovepi.analogWrite(mosfet,128)\n        print "half speed"\n        time.sleep(2)\n\n        # Off\n        grovepi.analogWrite(mosfet,0)\n        print "off"\n        time.sleep(2)\n\n    except KeyboardInterrupt:\n        grovepi.analogWrite(mosfet,0)\n        break\n    except IOError:\n        print "Error"\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Run the demo.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo python grove_mosfet.py\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," We will see the output display on terminal as below.")),(0,a.kt)("div",null,(0,a.kt)("img",{width:"{1000}",src:"https://files.seeedstudio.com/wiki/Grove-MOSFET/img/pi_result.png"})),"|",(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove-MOSFET_Eagle_File.zip"},"Grove - MOSFET Schematic file")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/Grove%20-%20MOSFET%20.pdf"},"Grove - MOSFET Schematic PDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-MOSFET/res/CJQ4435.pdf"},"CJQ4435 Datasheet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[WIKI]")," ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/MOSFET"},"MOSFET Wikipedia"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
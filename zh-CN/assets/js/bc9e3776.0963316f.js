"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67224],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(r),c=n,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||o;return r?a.createElement(g,i(i({ref:t},m),{},{components:r})):a.createElement(g,i({ref:t},m))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},63951:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={description:"Grove - Electromagnet",title:"Grove - Electromagnet",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Electromagnet",last_update:{date:"2/22/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Current/Grove-Electromagnet",id:"Sensor/Grove/Grove_Accessories/Current/Grove-Electromagnet",title:"Grove - Electromagnet",description:"Grove - Electromagnet",source:"@site/docs/Sensor/Grove/Grove_Accessories/Current/Grove-Electromagnet.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Current",slug:"/Grove-Electromagnet",permalink:"/zh-CN/Grove-Electromagnet",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Current/Grove-Electromagnet.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676995200,formattedLastUpdatedAt:"2023\u5e742\u670821\u65e5",frontMatter:{description:"Grove - Electromagnet",title:"Grove - Electromagnet",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Electromagnet",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Screw Terminal",permalink:"/zh-CN/Grove-Screw_Terminal"},next:{title:"Grove - Red LED",permalink:"/zh-CN/Grove-Red_LED"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02.jpg",alt:null})),(0,n.kt)("p",null,"An electromagnet is a type of magnet in which the magnetic field is produced by electric current. An electric current flowing in a wire creates a magnetic field around the wire, due to Ampere's law(see drawing below). To concentrate the magnetic field, in an electromagnet the wire is wound into a coil with many turns of wire lying side by side. The magnetic field of all the turns of wire passes through the center of the coil, creating a strong magnetic field there. Grove - Electromagnet can suck 1KG weight and hold on. It is easy to use, to learn electromagnet principle."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:"200",height:"38",border:0}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove shape"),(0,n.kt)("li",{parentName:"ul"},"1KG peak suction"),(0,n.kt)("li",{parentName:"ul"},"Low standby current")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Working Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"DC 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Working Current"),(0,n.kt)("td",{parentName:"tr",align:null},"400mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Standby Current"),(0,n.kt)("td",{parentName:"tr",align:null},"200uA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Load Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"1KG")))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we firmly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Electromagnet"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Electromagnet to port ",(0,n.kt)("strong",{parentName:"li"},"D2")," of Grove-Base Shield."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/2-connect.jpg",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect Grove-Electromagnet to Seeeduino as below.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Ultrasonic Ranger"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"Red")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Black")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,n.kt)("td",{parentName:"tr",align:null},"White")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D2"),(0,n.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"/*\n  Turns on an Electromagnet on for one second, then off for one second, repeatedly.\n  This example code is in the public domain.\n*/\n\nint Electromagnet = 2;\nint LED = 13;\n\n// the setup routine runs once when you press reset:\nvoid setup() {\n    // initialize the digital pin as an output.\n    pinMode(Electromagnet, OUTPUT);\n    pinMode(LED, OUTPUT);\n}\n\n// the loop routine runs over and over again forever:\nvoid loop() {\n    digitalWrite(Electromagnet, HIGH);  // turn the Electromagnet on (HIGH is the voltage level)\n    digitalWrite(LED, HIGH);            // turn the LED on (HIGH is the voltage level)\n    delay(1000);                        // wait for a second\n    digitalWrite(Electromagnet, LOW);   // turn the Electromagnet off by making the voltage LOW\n    digitalWrite(LED, LOW);             // turn the LED off by making the voltage LOW\n    delay(1000);                        // wait for a second\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Grove-Electromagnet worked.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet-3.png",alt:null})),(0,n.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Electromagnet to port D2 of a Base Shield."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,n.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is your first time using Codecraft, see also ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/"},"Guide for Codecraft using Arduino"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/cc_Electromagnet.png",alt:"cc"})),(0,n.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,n.kt)("admonition",{title:"success",type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"When the code finishes uploaded, you can try to bring the ironwork close to the electromagnet. The LED on the Arduino 13 pin will be lighted up when the electromagnet is working.")),(0,n.kt)("h3",{id:"play-with-raspberry-pi"},"Play With Raspberry Pi"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Electromagnet"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/Grove_Electromagnet_02%20-%20%E5%89%AF%E6%9C%AC.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html"},"Get One Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the GrovePi_Plus into Raspberry.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Grove-Electromagnet to ",(0,n.kt)("strong",{parentName:"p"},"D4")," port of GrovePi_Plus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC through USB cable."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/img/1_pi_connect.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Software")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,n.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"In this wiki we use the path ",(0,n.kt)("strong",{parentName:"p"},"~/GrovePi/")," instead of ",(0,n.kt)("strong",{parentName:"p"},"/home/pi/Desktop/GrovePi"),", you need to make sure Step 2 and Step 3 use the same path.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to the demos' directory:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,n.kt)("p",null,"Here is the grove_electromagnet.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'    import time\n    import grovepi\n\n    # The electromagnet can hold a 1KG weight\n\n    # Connect the Grove Electromagnet to digital port D4\n    # SIG,NC,VCC,GND\n    electromagnet = 4\n\n    grovepi.pinMode(electromagnet,"OUTPUT")\n    time.sleep(1)\n\n    while True:\n        try:\n            # Switch on electromagnet\n            grovepi.digitalWrite(electromagnet,1)\n            print "on"\n            time.sleep(2)\n\n            # Switch off electromagnet\n            grovepi.digitalWrite(electromagnet,0)\n            print "off"\n            time.sleep(2)\n\n        except KeyboardInterrupt:\n            grovepi.digitalWrite(electromagnet,0)\n            break\n        except IOError:\n            print "Error"\n')),(0,n.kt)("p",null,"5.Run the demo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    sudo python grove_electromagnet.py\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"["),"Eagle",(0,n.kt)("strong",{parentName:"li"},"]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_v1.0_SCH_PCB.zip"},"Grove Electromagnet v1.0 SCH PCB.zip")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"["),"Datasheet",(0,n.kt)("strong",{parentName:"li"},"]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bazaar_file/101020073/ZYE1-P%20electro%20holding%20magnets.pdf"},"Datasheet ZYE1-P20-15 PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"["),"Codecraft",(0,n.kt)("strong",{parentName:"li"},"]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Electromagnet/res/Grove_Electromagnet_CDC_File.zip"},"CDC File"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38122],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,c=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return a?n.createElement(c,l(l({ref:t},p),{},{components:a})):n.createElement(c,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15888:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={description:"Shield Bot V1.2",title:"Shield Bot V1.2",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Shield_Bot_V1.2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Shield_Bot_V1.2",id:"Top_Brand/Arduino/shield/Shield_Bot_V1.2",title:"Shield Bot V1.2",description:"Shield Bot V1.2",source:"@site/docs/Top_Brand/Arduino/shield/Shield_Bot_V1.2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Shield_Bot_V1.2",permalink:"/custom/Shield_Bot_V1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Shield_Bot_V1.2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676476800,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Shield Bot V1.2",title:"Shield Bot V1.2",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Shield_Bot_V1.2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Shield Bot V1.1",permalink:"/custom/Shield_Bot_V1.1"},next:{title:"CAN-BUS Shield V1.2",permalink:"/custom/CAN-BUS_Shield_V1.2"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"General Specification",id:"general-specification",level:3},{value:"Charging Specification",id:"charging-specification",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Status Lights",id:"status-lights",level:2},{value:"Structure",id:"structure",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"The Preparatory Work",id:"the-preparatory-work",level:3},{value:"Install the battery",id:"install-the-battery",level:3},{value:"Demo 1: Drive motors to Run",id:"demo-1-drive-motors-to-run",level:3},{value:"Demo 2: Following Black Line",id:"demo-2-following-black-line",level:3},{value:"Adaptation Instances",id:"adaptation-instances",level:3},{value:"Reference",id:"reference",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Kit_Product_Image.jpg",alt:null})),(0,r.kt)("p",null,"Shield Bot is an easy to use entry level robotic platform that helps you leap to Robotics. You could build a line follower robot in few minutes by using the library & sketch provided."),(0,r.kt)("p",null,"Compared to the previous version, the Shield Bot V1.2 has not changed much."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Compatible Arduino Board is not included, get a Seeeduino or Arduino.")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Shield-Bot-p-1380.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easy to start")," - The Shieldbot is plug & play. It can be run out of the box in minutes"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expandable for imagination"),"- Solderless Grove expansion ports enable easy attachment of more sensors and actuators. It Shield headers allows use of any additional Arduino shields"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Open source")," - Its designed to be hacked, adapted and transformed into whatever you want it to be!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Arduino Based")," - The Shieldbot is an Arduino shield. The extensive Arduino community and shield ecosystem can be used for endless expansion!"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Charging efficiency")," - Can fully charge quickly. It has a high efficiency.")),(0,r.kt)("h2",{id:"specifications"},"Specifications"),(0,r.kt)("h3",{id:"general-specification"},"General Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sensor"),(0,r.kt)("td",{parentName:"tr",align:null},"5x IR reflectance sensors for line and edge following")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Li-ion rechargeable battery"),(0,r.kt)("td",{parentName:"tr",align:null},"900 mAh")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gearmotor"),(0,r.kt)("td",{parentName:"tr",align:null},"Two durable 160:1 micro metal Gearmotors")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grove Port"),(0,r.kt)("td",{parentName:"tr",align:null},"6x Grove expansion ports")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Shield header"),(0,r.kt)("td",{parentName:"tr",align:null},"Arduino Shield Expansion Headers")))),(0,r.kt)("h3",{id:"charging-specification"},"Charging Specification"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Charge mode and charge efficiency as the following table:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Mode"),(0,r.kt)("th",{parentName:"tr",align:null},"Charge Current(A)"),(0,r.kt)("th",{parentName:"tr",align:null},"the input power(W)"),(0,r.kt)("th",{parentName:"tr",align:null},"Charge power(W)"),(0,r.kt)("th",{parentName:"tr",align:null},"Charge Efficiency(%)"),(0,r.kt)("th",{parentName:"tr",align:null},"Charge time(h)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"USB Charge"),(0,r.kt)("td",{parentName:"tr",align:null},"0.396"),(0,r.kt)("td",{parentName:"tr",align:null},"3.94"),(0,r.kt)("td",{parentName:"tr",align:null},"3.56"),(0,r.kt)("td",{parentName:"tr",align:null},"90.36"),(0,r.kt)("td",{parentName:"tr",align:null},"2.50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Vin Charge"),(0,r.kt)("td",{parentName:"tr",align:null},"0.7"),(0,r.kt)("td",{parentName:"tr",align:null},"6.78"),(0,r.kt)("td",{parentName:"tr",align:null},"6.30"),(0,r.kt)("td",{parentName:"tr",align:null},"92.92"),(0,r.kt)("td",{parentName:"tr",align:null},"1.41")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_V1.2_Foto_1.JPG",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Power Switch"),": When ShieldBot is off, The shield bot can not run. But you can use the ",(0,r.kt)("strong",{parentName:"li"},"USB Charge Port")," to charge for battery."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USB Charge Port:")," USB mini-B, used for charging for battery."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Grove Ports:")," Grove ports access pins D0, D1, D2, D3, D4, D5, A4, A5.can connect Grove modules to these Grove ports."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IR Line Finder Potentiometer"),": Used for adjusting the Line Finders Sensitivity. Clockwise adjustment, the Sensitivity increases; Counter-clockwise adjustment,the Sensitivity decreases."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"IR Line Finders:")," S1 to S5. Blue if non reflective surface is detected (ex Black tape line)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Line Finder Switch:"),' Turn switch towards "ON" to connect line finders to I/O pins(Occupied pins are A0,A1,A2,A3,D4) of Arduino. The LineFollowingSimple demo in library is used line finders output signal to control Shield Bot run. If switch is toward "OFF", Seeeduino/Arduino cannot control Shield Bot through line finders output signal.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Arduino Shield Expansion Headers"),": Shield Bot can truly stack other shields.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"If S5 is enabled you can not use grove ports j14 and j13."),(0,r.kt)("li",null,"You may only use ONE of the Arduino's serial line, UART grove port or j11 as they all share the D1/TX line."))),(0,r.kt)("h2",{id:"status-lights"},"Status Lights"),(0,r.kt)("p",null,"The Shield Bot has lots of LEDs to show you whats going on!\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_bot_1.2_LEDs.JPG",alt:null})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Light Numbers"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D22"),(0,r.kt)("td",{parentName:"tr",align:null},"Power"),(0,r.kt)("td",{parentName:"tr",align:null},"Green when Shieldbot is on. When ShieldBot is off, ShieldBot can only charge for battery.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D23 and D24"),(0,r.kt)("td",{parentName:"tr",align:null},"Charging status"),(0,r.kt)("td",{parentName:"tr",align:null},"Red means charging, green means done charging.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D18"),(0,r.kt)("td",{parentName:"tr",align:null},"Reset"),(0,r.kt)("td",{parentName:"tr",align:null},"Red if reset button is pressed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D11 and D12"),(0,r.kt)("td",{parentName:"tr",align:null},"Right Motor Indicators"),(0,r.kt)("td",{parentName:"tr",align:null},"Green means forwards, red means backwards, both means stopped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D13 and D15"),(0,r.kt)("td",{parentName:"tr",align:null},"Left Motor Indicators"),(0,r.kt)("td",{parentName:"tr",align:null},"Green means forwards, red means backwards, both means stopped.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"D5 D10 D14 D17 D19"),(0,r.kt)("td",{parentName:"tr",align:null},"Light Sensor Indicators"),(0,r.kt)("td",{parentName:"tr",align:null},"Blue if non reflective surface is detected (ex Black tape line).")))),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Position_for_seeeduino.jpg",alt:null}),"\nThe Part 1,Part 2 and Part 3 are made by our 3D printer. You can also see the Installation Position for Seeeduino board."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Getting the Shieldbot setup is quick and easy! Follow these steps to get your robotic companion up and running."),(0,r.kt)("h3",{id:"the-preparatory-work"},"The Preparatory Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First you need plug Arduino into the buttom of Shield Bot and connect it to PC using a USB cable .")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_Programming2.JPG",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You would better turn Power Switch towards ",(0,r.kt)("em",{parentName:"li"},"OFF")," before upload the code. Otherwise, It runs when you are not attention and may scare you.")),(0,r.kt)("p",null,"We've built a nice library for the Shield Bot with useful functions to control your Shield Bot and a number of examples so you can get it up and running in no time!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the library from ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip"},"here")," and Unzip."),(0,r.kt)("li",{parentName:"ul"},"Put ShieldBot file into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries.")),(0,r.kt)("h3",{id:"install-the-battery"},"Install the battery"),(0,r.kt)("p",null,"The battery is needed when you want to make Shield Bot run on the ground."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Once the battery is installed, you can charge battery with a mini-b USB cable. When the battery is charging, a red LED will be on. When it is done charging, a green LED will be lit."),(0,r.kt)("li",null,"When upload the code, you need connect the USB port of your Seeeduino to your PC. The USB port on the shield bot is only used for charging for battery."))),(0,r.kt)("h3",{id:"demo-1-drive-motors-to-run"},"Demo 1: Drive motors to Run"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the Arduino environment and go to File->Examples->Shieldbot->drive to load the first Shield Bot example. Make sure you select the correct Arduino Board and Serial Port."),(0,r.kt)("li",{parentName:"ul"},'Then upload code onto the Arduino. Once the upload is complete, the console should show "Done Uploading".'),(0,r.kt)("li",{parentName:"ul"},"You can unplug the USB cable after completing the upload."),(0,r.kt)("li",{parentName:"ul"},"Then put the Shield Bot on a spacious place and turn the power switch turn '",(0,r.kt)("strong",{parentName:"li"},"ON'"),"."),(0,r.kt)("li",{parentName:"ul"},"Now the Shield Bot will run at a certain speed.")),(0,r.kt)("h3",{id:"demo-2-following-black-line"},"Demo 2: Following Black Line"),(0,r.kt)("p",null,"The Shield Bot can detect reflective surface based on the Line finder sensors (s1,s2,s3,s4,s5). The blue indictors will lit if non reflective surface is detected (ex Black tape line). Now let us use it to make the run following the black line."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Make sure the dip switches are turned ON, and none of your shields are using pins A0, A1, A2, A3 or D4.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Reupload the new demo:LineFollowingSimple after connect Seeeduino to PC using the USB cable."),(0,r.kt)("li",{parentName:"ul"},"After completing the upload, put the Shield Bot in the pre-built black runway.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Shield_Bot_Line_Finder.jpg",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can adjust the IR Line Finder Potentiometer to change the Line Finders Sensitivity. When Clockwise adjustment, the Sensitivity increases, Counterclockwise adjustment,the Sensitivity decreases. Have a try!")),(0,r.kt)("h3",{id:"adaptation-instances"},"Adaptation Instances"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Clock")),(0,r.kt)("p",null,"This is a incredibly simple, working clock. The wheels turn one forward and one reverse, spinning the reflectance sensors around the wheel indicating the minutes. Upon the hour mark the bot drives forward and advances the linear slide to indicate hours. Extra credit for the free linear rails made out of laser cut scrap and cellophane tape!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team1_2.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Shot.Bot")),(0,r.kt)("p",null,"It was a really gorgeous device that many people in the event remarked they'd like to buy. The line following robot would take orders then drive the track to the dispenser where it would use a servo to actuate an amount of either of 3 beverages, before driving back to the patron."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team7_2.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Simon")),(0,r.kt)("p",null,"This is a beautifully designed, though not quite finished, 2 player heads up simon clone. The bot plays out a tune with lights and you use the laser cut puck, complete with braille so even the sight impaired could play, to mark the tones on the whiteboard. The Shieldbot then drives forward and uses the sensors to see if you've marked correctly. You want to get more right answers than your opponent so the bot drives towards their goal!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team6_2.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. HackPHX-Plotter")),(0,r.kt)("p",null,"The device is very close to knocking off the Der Kritzler 2d drawing machine which is a vertical x,y table with makerslide and had the ingenious idea of bolting the tires of the Shield bot down such that when it was put in reverse, it lifted the pen off the drawing surface\xa0:) They even worked with the designer to come up with a PC side user interface!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/Team8.jpg",alt:null})),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,"To use the Shield Bot library simply add the Shield Bot library and declare a Shieldbot object at the top of your Arduino code before your void setup()"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#include <Shieldbot.h>  //includes the Shield Bot Library\n\xa0\nShieldbot shieldbot = Shieldbot(); //decares a Shieldbot object\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," setMaxSpeed(int both) "))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": set max speed of two motors."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"both"),": between 0(basically off) and 255(full speed)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," setMaxSpeed(int left, int right)"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Write a max speed to the left and right motor."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"left,right"),": Left is the speed of the left motor. right is the speed of the right motor. between 0(basically off) and 255(full speed)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," rightMotor(char mag)"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Enables the right motor, negative for backwards, positive for forwards. If you make one motor drive slower, it will turn in that direction. If you make the motors turn in opposite direction it will spin."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"mag"),": the direction to spin the right motor; -128: backwards all the way, 0: donot move, 127: forwards all the way"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," leftMotor(char mag)"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Enables the left motor, negative for backwards, positive for forwards."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"mag"),": the direction to spin the left motor; -128: backwards all the way, 0: donot move, 127: forwards all the way"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," forward()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Enables the motors to send the bot straight forward at the setSpeed()."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," backward()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Enables the motors to send the bot straight backward at the setSpeed()."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," drive(char left, char right)"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": All purpose drive call. Calls leftMotor and rightMotor directly."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"left"),": between -128 (left motor backwards 100% of max speed), 0 (standing still), and 127 (left motor forwards 100% of max speed)\xa0:",(0,r.kt)("em",{parentName:"p"},"right"),": between -128 (right motor backwards 100% of max speed), 0 (standing still), and 127 (right motor forwards 100% of max speed)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," stop()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Disables the motors. You may also use drive(0,0)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," stopLeft()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Disables the left motor. You may also use drive(0,X)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," stopRight()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Disables the right motor. You may also use drive(X,0)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," fastStop()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Disables the right motor. You may also use drive(X,0)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," fastStopLeft()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Disables the left motor quicker. This is considered possibly bad for the motor chip so use at your discretion"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," fastStopRight()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Disables the right motor quicker. This is considered possibly bad for the motor chip so use at your discretion"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("u",null," readS1(), readS2(), readS3(), readS4(), readS5()"))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Description"),": Reads any of the 5 light sensors on board. NOTE you NEED to connect the sensors to the arduino ports using the dip switch block (switches TOWARDS the numbers and ON text) These switches would otherwise allow you to use those pins for other things if you didn't want to use your light sensors"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Returns"),": LOW if the surface reflects (ex. white) and HIGH if the surface doesn't reflect anything (ex BLACK)"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/img/ShieldBot_driveLibrary.png",alt:null})),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_Library.zip"},"Shield Bot 1.2 Library")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_1.2_eagle_files.zip"},"Shield Bot 1.2 Eagle Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/Shield_Bot_v1.2.pdf"},"ShieldBot 1.2 Schematic")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/RPR-220.pdf"},"IR Reflectance Sensor RPR-220 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/ISL97516.pdf"},"Step up regulator ISL97516 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/BQ2057.pdf"},"Li-ion charger BQ2057 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Shield_Bot_V1.2/res/L298.pdf"},"H-Bridge Motor Driver L298 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.ti.com/product/lmv358"},"Op-Amp LMV358 Datasheet"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
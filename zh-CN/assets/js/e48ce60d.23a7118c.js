"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47649],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>c});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var u=a.createContext({}),p=function(t){var e=a.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(u.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,u=t.parentName,m=l(t,["components","mdxType","originalType","parentName"]),s=p(r),k=n,c=s["".concat(u,".").concat(k)]||s[k]||d[k]||i;return r?a.createElement(c,o(o({ref:e},m),{},{components:r})):a.createElement(c,o({ref:e},m))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[s]="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},10442:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>u,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Arduino Breakout for LinkIt Smart 7688 Duo",title:"Arduino Breakout for LinkIt Smart 7688 Duo",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino_Breakout_for_LinkIt_Smart_7688_Duo",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Arduino_Breakout_for_LinkIt_Smart_7688_Duo",id:"Seeed_Elderly/LinkIt/Arduino_Breakout_for_LinkIt_Smart_7688_Duo",title:"Arduino Breakout for LinkIt Smart 7688 Duo",description:"Arduino Breakout for LinkIt Smart 7688 Duo",source:"@site/docs/Seeed_Elderly/LinkIt/Arduino_Breakout_for_LinkIt_Smart_7688_Duo.md",sourceDirName:"Seeed_Elderly/LinkIt",slug:"/Arduino_Breakout_for_LinkIt_Smart_7688_Duo",permalink:"/custom/zh-CN/Arduino_Breakout_for_LinkIt_Smart_7688_Duo",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Arduino_Breakout_for_LinkIt_Smart_7688_Duo.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Arduino Breakout for LinkIt Smart 7688 Duo",title:"Arduino Breakout for LinkIt Smart 7688 Duo",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino_Breakout_for_LinkIt_Smart_7688_Duo",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Breakout for LinkIt Smart 7688 v2.0",permalink:"/custom/zh-CN/Breakout_for_LinkIt_Smart_7688_v2.0"},next:{title:"Grove Breakout for LinkIt Smart 7688 Duo",permalink:"/custom/zh-CN/Grove_Breakout_for_LinkIt_Smart_7688_Duo"}},u={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Make It Now",id:"make-it-now",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p};function s(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arduino Breakout for LinkIt Smart 7688 Duo")," is an expansion board for LinkIt Smart 7688 Duo. Just like other breakout board produced by Seeed, this board has integrated copiously 12 grove ports that allow you to connect more grove modules easily. By using this board, beginners are able to get started quickly because wiring, which is usually not a happy process for most people, is simplified. What's more, the board shares the same MUC as Arduino, that means you can not only use the features of LinkIt Smart 7688, but also from Arduino Y\xfan, which allows you to build rich IoT applications based on various, robust and compiled Arduino sketches. On the board, there are reserved pins for LinkIt Smart 7688 Duo to easily access, apart from that, it also supports serial buses like I2C, UART and comes with USB and Ethernet."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_product_view.jpg",alt:null})),(0,n.kt)("p",null,"LinkIt Smart 7688 Duo is an open development board based on the OpenWrt Linux distribution, MT7688 and ATmega32u4. The board is designed especially to enable the prototyping of Rich Application IoT devices for Smart-Home. If you want to find out more about LinkIt Smart 7688 Duo, please click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo"},"HERE"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Arduino-Breakout-for-LinkIt-Smart-7688-Duo-p-2576.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arduino Shield Compatible"),(0,n.kt)("li",{parentName:"ul"},"Ethernet to connect internet"),(0,n.kt)("li",{parentName:"ul"},"USB 2.0 for more peripherals"),(0,n.kt)("li",{parentName:"ul"},"Grove interfaces: I2C \xd7 2, Analog \xd7 3, Digital\xd7 6, UART \xd7 1"),(0,n.kt)("li",{parentName:"ul"},"4-pin debug port \xd7 1, ICSP \xd7 1")),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IoT/Gateway Device."),(0,n.kt)("li",{parentName:"ul"},"Robotics"),(0,n.kt)("li",{parentName:"ul"},"Smart multimedia devices"),(0,n.kt)("li",{parentName:"ul"},"Teaching and learning")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Input voltage"),"\t:5.0V (With USB Power port)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Operating voltage"),"\t:3.3V")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"Debug pins connect with MT7688, Other pins connect with ATmega32U4.\n"))),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_components_with_text_1200_s.jpg",alt:null})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Qty"),(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Qty"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Arduino Shield"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"USE Port(Type-A)"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MT7688 UART2"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"USB Port(Micro type-B)"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"ICSP port"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Ethernet Port"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Reset Button(ATmega32u4)"),(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"Port to be plugged with LinkIt Smart 7688 Duo"),(0,n.kt)("td",{parentName:"tr",align:null},"1")))),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("p",null,"In this simple application, you are going to make a buzzer to buzz different sounds. Before getting started, Apart from Arduino Breakout for LinkIt Smart 7688 Duo, please check if you have below materials on hand. You can get them from our Bazzar."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"LinkIt Smart 7688 Duo"),(0,n.kt)("th",{parentName:"tr",align:null},"USB cable"),(0,n.kt)("th",{parentName:"tr",align:null},"UARTBee"),(0,n.kt)("th",{parentName:"tr",align:null},"Jumper wires x 3"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Buzzer"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/102110017%206.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/48cmUSBc.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/UartSBee%20V5_01.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/jw100n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/107020000%201.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/LinkIt-Smart-7688-Duo-p-2574.html"},(0,n.kt)("strong",{parentName:"a"},"Get One Now"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},(0,n.kt)("strong",{parentName:"a"},"Get One Now"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/UartSBee-V5-p-1752.html"},(0,n.kt)("strong",{parentName:"a"},"Get One Now"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/1-pin-dual-female-jumper-wire-100mm-50pcs-pack-p-260.html"},(0,n.kt)("strong",{parentName:"a"},"Get One Now"))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Buzzer-p-768.html"},(0,n.kt)("strong",{parentName:"a"},"Get One Now")))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step1 Refer this to connect your LinkIt Smart 7688 Duo to internet.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"* You can find Pin 8, Pin 9 and Pin GND close to the port to be connected LinkIt Smart 7688.\n* You can plug jumper wires into MT7688 UART2 port instead of soldering them to Pin 8, Pin 9 and Pin GND.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step2. Open a console after connecting an USB to Serial adapter to LinkIt Smart 7688 Duo."),(0,n.kt)("li",{parentName:"ul"},"Step3 Connect all parts as shown below:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/Arduino_Breakout_for_LinkIt_Smart_7688_Duo_demo_connection_view_1200_s.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Step4\uff1aPlug Grove - Buzzer into port D4.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Step5: This step is to build the Arduino environment for LinkIt Smart 7688 Duo platform on host computer. Since the tutorial has been written in the Wiki of LinkIt Smart 7688, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment"},"Here"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Step6: Download firmata.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Step7: Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo#Installing_Arduino_programming_environment"},"Here")," to install Arduino IDE for LinkIt Smart 7688 platform, and flash the file firmata to development board."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"Following steps should be carried out on embedded OS(OpenWRT). Please make sure you have Python in your system and installed pip.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step8: Type pip install pyfirmata into console and press Enter to install python library pyfirmata."),(0,n.kt)("li",{parentName:"ul"},"Step9: Create a file named ",(0,n.kt)("strong",{parentName:"li"},"buzzer.py")," with typing ",(0,n.kt)("strong",{parentName:"li"},"vi buzzer.py")," in console, copy the code below into it.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"from pyfirmata import Arduino, util\nfrom time import sleep\nboard = Arduino('/dev/ttyS0')\nprint \"Start blinking D4\"\nwhile True:\n  board.digital[4].write(1)\n  sleep(0.5)\n  board.digital[4].write(0)\n  sleep(0.5)\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Step10: Save ",(0,n.kt)("strong",{parentName:"li"},"buzzer.py")," and type ",(0,n.kt)("strong",{parentName:"li"},"python buzzer.py")," to run the example code."),(0,n.kt)("li",{parentName:"ul"},"Step11: Now you will hear the buzzing sound.")),(0,n.kt)("h2",{id:"make-it-now"},"Make It Now"),(0,n.kt)("p",null,"Have you successfully make the buzzer to buzz? Here are 2 more awesome projects that use LinkIt Smart 7688 Duo. Let's make them now!"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Smart Router With  WiFi Connection Visualization"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Facebook Like Monitor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9SCHIKIPH4SPTP.MEDIUM.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/F9MQJJOIHQOBV4Q.MEDIUM.jpg",alt:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/ReRouter-Make-an-Extensible-IoT-Router/"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png",alt:null}))),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"td",href:"https://www.instructables.com/id/Facebook-Like-Monitor/"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/images/200px-Wiki_makeitnow_logo.png",alt:null})))))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arduino_Breakout_for_LinkIt_Smart_7688_Duo/resources/Schematic_files_for_Arduino_Breakout_for_LinkIt_Smart_7688_Duo.zip"},"Schematic files")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/wiki/LinkIt_Smart_7688_Duo"},"Wiki link for LinkIt Smart 7688 Duo")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://wiki.openwrt.org/doc/howto/user.beginner"},"OpenWrt"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40258],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var a=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,a,l=function(e,t){if(null==e)return{};var o,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)o=i[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,l=e.mdxType,i=e.originalType,d=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=p(o),c=l,m=s["".concat(d,".").concat(c)]||s[c]||h[c]||i;return o?a.createElement(m,n(n({ref:t},u),{},{components:o})):a.createElement(m,n({ref:t},u))}));function m(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=o.length,n=new Array(i);n[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[s]="string"==typeof e?e:l,n[1]=r;for(var p=2;p<i;p++)n[p]=o[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},73878:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>n,default:()=>s,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=o(87462),l=(o(67294),o(3905));const i={description:"Bluetooth Shield",title:"Bluetooth Shield",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_Shield",last_update:{date:"2/16/2023",author:"jianjing Huang"}},n=void 0,r={unversionedId:"Top_Brand/Arduino/shield/Bluetooth_Shield",id:"Top_Brand/Arduino/shield/Bluetooth_Shield",title:"Bluetooth Shield",description:"Bluetooth Shield",source:"@site/docs/Top_Brand/Arduino/shield/Bluetooth_Shield.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Bluetooth_Shield",permalink:"/custom/Bluetooth_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Bluetooth_Shield.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Bluetooth Shield",title:"Bluetooth Shield",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_Shield",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"2.7inch Triple-Color E-link Shield for Arduino",permalink:"/custom/2.7inch-Triple-Color-E-Ink-Shield-for-Arduino"},next:{title:"Motor Shield V1.0",permalink:"/custom/Motor_Shield_V1.0"}},d={},p=[{value:"Features",id:"features",level:2},{value:"Interface funcion",id:"interface-funcion",level:2},{value:"Demonstration 1\uff1aTwo Bluetooth Shield Connect",id:"demonstration-1two-bluetooth-shield-connect",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Download Code and Upload",id:"download-code-and-upload",level:3},{value:"Check The Result",id:"check-the-result",level:3},{value:"Demonstration 2\uff1aConnect to Smart Phone",id:"demonstration-2connect-to-smart-phone",level:2},{value:"Hardware Installation",id:"hardware-installation-1",level:3},{value:"Download Code and Upload",id:"download-code-and-upload-1",level:3},{value:"Download a SSP App",id:"download-a-ssp-app",level:3},{value:"Get Temperature",id:"get-temperature",level:3},{value:"Related Projects",id:"related-projects",level:2},{value:"What is Serial Port Bluetooth Module",id:"what-is-serial-port-bluetooth-module",level:3},{value:"Serial Port Bluetooth Module Demo",id:"serial-port-bluetooth-module-demo",level:3},{value:"Share Your Awesome Projects with Us",id:"share-your-awesome-projects-with-us",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function s(e){let{components:t,...o}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield.jpg",alt:null})),(0,l.kt)("p",null,"The Bluetooth Shield integrates a Serial Bluetooth module. It can be easily used with Arduino/Seeedstudio for transparent wireless serial communication. You can choose two pins from Arduino D0 to D7 as Software Serial Ports to communicate with Bluetooth Shield (D0 and D1 is Hardware Serial Port). The shield also has two Grove connectors (one is Digital, the other is Analog) for you to install Grove modules."),(0,l.kt)("p",null,"Model:",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/bluetooth-shield-p-866.html?cPath=19_21"},"SLD63030P")),(0,l.kt)("h2",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Input Voltage: 3.3V")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Baudrate: 9600, 19200, 38400, 57600, 115200, 230400, 460800")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Seeeduino/Arduino compatible")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Up to10m communication distance in house without obstacle")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"UART interface (TTL) with programmable baud rate (SPP firmware installed)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default Baud rate: 38400, Data bits: 8, Stop bit: 1, Parity: No parity")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Default PINCODE:\u201d0000\u201d")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"A full set of configuration commands")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"On board PCB Antenna")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"FCC Part 15 Certificated"))),(0,l.kt)("h2",{id:"interface-funcion"},"Interface funcion"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/BluetoothInterface.jpg",alt:null})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Pad Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"PIO1"),(0,l.kt)("td",{parentName:"tr",align:null},"Status instruction port of Bluetooth module can be read by Arduino A1 port: low-disconnected, high-connected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BT_RX"),(0,l.kt)("td",{parentName:"tr",align:null},"UART Data input of Bluetooth module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"BT_TX"),(0,l.kt)("td",{parentName:"tr",align:null},"UART Data output Bluetooth module.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Two Grove connectors"),(0,l.kt)("td",{parentName:"tr",align:null},"One is Digital (D8 and D9), the other is I2C/Analog (A4 and A5).")))),(0,l.kt)("h2",{id:"demonstration-1two-bluetooth-shield-connect"},"Demonstration 1\uff1aTwo Bluetooth Shield Connect"),(0,l.kt)("p",null,"This demo will show you how to connect two Bluetooth shield."),(0,l.kt)("p",null,"You need two piece of ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/seeeduino-v30-atmega-328p-p-669.html?cPath=6_7"},"Seeeduino V3.0"),", a ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-button-p-766.html?cPath=85_50"},"Grove - Button"),", and a ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-led-p-767.html?cPath=81_35"},"Grove - LED"),"."),(0,l.kt)("p",null,"One Bluetooth Shield as Master while the other as Slave, and there's a Botton connect to the Master, a Led connect to Slave."),(0,l.kt)("p",null,"When the button press up, the led in Slave will change."),(0,l.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,l.kt)("p",null,"Firstly, we choose a Bluetooth Shield as Master, and plug Grove - Button to D8,D9 of this Bluetooth Shield."),(0,l.kt)("p",null,"For the Slave, we connetc Grove - Led to it's D8,D9 Grove. And D7 as TX, D6 as RX, as folowing:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_2_connect.jpg",alt:null})),(0,l.kt)("h3",{id:"download-code-and-upload"},"Download Code and Upload"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can download the code in github, click ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code"},"here"),",then extract it to libraries folder of Arduino.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Arduino IDE, open File -> Examples -> Bluetooth_Shield_Demo_Code -> Master_Button, then you can open the code of Master")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Arduino IDE, open File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_led, then you can open the code of Slave")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Upload to Upload the code, if you have any problem about how to start Arduino, please click ",(0,l.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Getting_Started_with_Seeeduino/"},"here")," for some help."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_ide_1.jpg",alt:null})))),(0,l.kt)("h3",{id:"check-the-result"},"Check The Result"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After finish Uploading the code to both Master and Slave, reset the two devices meanwhile")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can see the red and green led blink, indicate that devices was initializing and connecting.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"After about servel seconds, only green led blink, indicate that Master and Slave had connected.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now you can press up the button, then the led will change its state."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note"),": If the phenomenon is not observed above, try unplugging the power and re-plug in again."),(0,l.kt)("h2",{id:"demonstration-2connect-to-smart-phone"},"Demonstration 2\uff1aConnect to Smart Phone"),(0,l.kt)("p",null,"This demo will show you how to connect Bluetooth Shield to a Smart Phone."),(0,l.kt)("p",null,"We need a Seeeduino V3.0, a Grove - Temperature Sensor, and what's more, a Smart Phone that with Bluetooth function."),(0,l.kt)("p",null,"Via a Bluetooth SPP App, we send a 't' to Bluetooth Shield, then it'll return the temperature."),(0,l.kt)("h3",{id:"hardware-installation-1"},"Hardware Installation"),(0,l.kt)("p",null,"Plug Grove - Temperature Sensor to A4,A5 Grove of Bluetooth Shield."),(0,l.kt)("p",null,"TX connect to D7 while RX connect to D6. as folowing:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Phone.jpg",alt:null})),(0,l.kt)("h3",{id:"download-code-and-upload-1"},"Download Code and Upload"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"You can download the code in github, click ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Bluetooth_Shield_Demo_Code"},"here"),",then extract it to libraries folder of Arduino.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open Arduino IDE, File -> Examples -> Bluetooth_Shield_Demo_Code -> Slave_Temperature, then you can open the code")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Upload to Upload the code, if you have any problem about how to start Arduino, please click ",(0,l.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Getting_Started_with_Seeeduino/"},"here")," for some help."),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Demo2.jpg",alt:null})))),(0,l.kt)("h3",{id:"download-a-ssp-app"},"Download a SSP App"),(0,l.kt)("p",null,"Here we us an Ardriod Phone, Mine is a Xiaomi 2A, open Google Play, search bluetooth spp, you can find many results."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_Find_spp.png",alt:null})),(0,l.kt)("p",null,"Most of this app are useful, just choose one and have try."),(0,l.kt)("h3",{id:"get-temperature"},"Get Temperature"),(0,l.kt)("p",null,'After installing an SPP app, try connecting it to SeeedBTSlave, pin code is: "0000"'),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_App_1.png",alt:null})),(0,l.kt)("p",null,"When connect is ok, send 't' to SeeedBTSlave, and you can get the temperature now:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Bluetooth_Shield_get_temp.png",alt:null})),(0,l.kt)("h2",{id:"related-projects"},"Related Projects"),(0,l.kt)("p",null,"It's a pity that we don't have any demo about Bluetooth Shield in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe")," yet."),(0,l.kt)("p",null,"Post your awesome project about CAN BUS Shield to win $100 Coupon! Please feel free to contact us: ",(0,l.kt)("a",{parentName:"p",href:"mailto:recipe@seeed.cc"},"recipe@seeed.cc")),(0,l.kt)("p",null,"Here we introduce some projects about ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html"},"Serial port bluetooth module"),"."),(0,l.kt)("h3",{id:"what-is-serial-port-bluetooth-module"},"What is Serial Port Bluetooth Module"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Serial_Port_Bluetooth_Module_.jpg",alt:null})),(0,l.kt)("p",null,"Serial port bluetooth, Drop-in replacement for wired serial connections, transparent usage. You can use it simply for a serial port replacement to establish connection between MCU and GPS, PC to your embedded project and etc."),(0,l.kt)("h3",{id:"serial-port-bluetooth-module-demo"},"Serial Port Bluetooth Module Demo"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/img/Control_Multiple_servo_Motor_From_android_app.jpg",alt:null})),(0,l.kt)("p",null,"This is a complete tutorial about how to control multiple servo motors from android app through Serial Port Bluetooth Module."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/255-control-multiple-servo-motor-from-android-app.html"},"I want to make it"),"."),(0,l.kt)("h3",{id:"share-your-awesome-projects-with-us"},"Share Your Awesome Projects with Us"),(0,l.kt)("p",null,"Born with the spirit of making and sharing, that is what we believe makes a maker."),(0,l.kt)("p",null,"And only because of this, the open source community can be as prosperous as it is today."),(0,l.kt)("p",null,"It does not matter what you are and what you have made, hacker, maker, artist or engineers."),(0,l.kt)("p",null,"As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions."),(0,l.kt)("p",null,"Now share your awesome projects with us on ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe"),", and win a chance to become the Core User of Seeed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible."))),(0,l.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,l.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BT_shield_eagle_files.zip"},"Schematic and Layout in Eagle format")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]"),(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20SCH.pdf"},"BlueTooth Shield SCH")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[PDF]"),(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BlueTooth%20Shield%20PCB.pdf"},"BlueTooth Shield PCB")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Library]"),(0,l.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Bluetooth-Shield/res/BluetoothShieldDemoCode_For_Arduino1.0.zip"},"Bluetooth Shield Library for Arduino 1.0")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Instruction]"),(0,l.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Bluetooth_Shield/res/BTSoftware_Instruction.pdf"},"Bluetooth Software instruction")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,l.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Bluetooth_Shield/res/Bluetooth_module.pdf"},"Bluetooth - module Datasheet")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Connections]")," ",(0,l.kt)("a",{parentName:"li",href:"https://forum.seeedstudio.com/viewtopic.php?f=4&t=687"},"Set up connections between two BluetoothBee step by step"))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Please submit any technical issue into our ",(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,l.kt)("br",null)),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);
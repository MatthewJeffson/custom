"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[96855],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(a),c=r,k=p["".concat(d,".").concat(c)]||p[c]||m[c]||l;return a?n.createElement(k,o(o({ref:t},s),{},{components:a})):n.createElement(k,o({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},84478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={description:"Xadow - BLE",title:"Xadow - BLE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_BLE",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,i={unversionedId:"Seeed_Elderly/Xadow/Xadow_BLE",id:"Seeed_Elderly/Xadow/Xadow_BLE",title:"Xadow - BLE",description:"Xadow - BLE",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_BLE.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_BLE",permalink:"/Xadow_BLE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_BLE.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Xadow - BLE",title:"Xadow - BLE",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_BLE",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Audio",permalink:"/Xadow_Audio"},next:{title:"Xadow - Barometer",permalink:"/Xadow_Barometer"}},d={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Electrical Characteristics",id:"electrical-characteristics",level:2},{value:"Pin definition",id:"pin-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"HelloWorld",id:"helloworld",level:2},{value:"Android BLE Communication",id:"android-ble-communication",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/813004001xadow_ble.jpg",alt:null})),(0,r.kt)("p",null,"The Xadow - BLE is a Bluetooth Smart enabled Xadow form factor module based on HM-11 module. The Xadow - BLE can be used in hardware setups, where normally an Xadow module is used. Using a Xadow - BLE an Xadow enabled embedded system can communicate with desktop computers, smartphones, table computers and even other embedded systems providing Bluetooth Smart aka Bluetooth Low Energy (BLE)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-BLE-p-1727.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compatible XBee shape"),(0,r.kt)("li",{parentName:"ul"},"Bluetooth protocol: Bluetooth Specification V4.0 BLE"),(0,r.kt)("li",{parentName:"ul"},"Working frequency: 2.4 GHz ISM band"),(0,r.kt)("li",{parentName:"ul"},"Interface way: a serial port"),(0,r.kt)("li",{parentName:"ul"},"Open environment within 30 meters can realize communication between modules"),(0,r.kt)("li",{parentName:"ul"},"To send and receive no byte limit between modules"),(0,r.kt)("li",{parentName:"ul"},"Modulation method: GFSK (Gaussian Frequency Shift Keying)"),(0,r.kt)("li",{parentName:"ul"},"Transmission power: - DBM, 23-6 DBM, 0 DBM, 6 DBM, can be modified by the AT command"),(0,r.kt)("li",{parentName:"ul"},"Use TI CC2540 chip, configuration space of 256 KB, support the AT command, the user can according to need to change the role (master, slave mode) and the serial port baud rate, name of equipment, matching parameters such as passwords, use agile."),(0,r.kt)("li",{parentName:"ul"},"Power supply: + 3.3 VDC 50 mA"),(0,r.kt)("li",{parentName:"ul"},"Working temperature: - 5 ~ + 65 Centigrade")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Microprocessor"),(0,r.kt)("td",{parentName:"tr",align:null},"CC2540")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resources"),(0,r.kt)("td",{parentName:"tr",align:null},"Support the AT command, the user can according to need to change the role (master, slave mode) and the serial port baud rate, name of equipment,Matching parameters such as password, the use of flexible.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PCB size"),(0,r.kt)("td",{parentName:"tr",align:null},"24.5mmx30.5mmx0.8mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Outline Dimension"),(0,r.kt)("td",{parentName:"tr",align:null},"24.5mmx30.5mmx9.77mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power supply"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Communication Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Uart(TTL)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IO counts"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Key input IO"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"LED Indicators IO"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connectivity"),(0,r.kt)("td",{parentName:"tr",align:null},"Socket compatible with Xadow")))),(0,r.kt)("h2",{id:"electrical-characteristics"},"Electrical Characteristics"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Specification"),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Input Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"-0.3"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6"),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working Input Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3"),(0,r.kt)("td",{parentName:"tr",align:null},"3.6"),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Transmit Current"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Receive Current"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"8.5"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Deep Sleep Current"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"600"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"uA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-40"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"125"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb0C")))),(0,r.kt)("h2",{id:"pin-definition"},"Pin definition"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/Xadow_ble_pin.jpg",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Only important alternate functions are listed, may have more, please refer to datasheet.\n"))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"AT commands & Configuration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\uff09\tQuery the native MAC address")),(0,r.kt)("p",null,"Send: AT+ADDR?"),(0,r.kt)("p",null,"Send after a successful return: OK + LADD: MAC address (address for 12 string)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\uff09\tQuery the baud rate")),(0,r.kt)("p",null,"Send: AT+BAUD?"),(0,r.kt)("p",null,"Send after a successful return: OK + Get: ","[para1]"),(0,r.kt)("p",null,"Scope of para1:0 ~ 8. The parameters corresponding to: 0 represents 9600, 1, 2, 9600, 38400, on behalf of the representative representative of 57600, 115200, 5, 4800, 6, 7 represents 1200, 1200 2400. The default baud rate to 9600."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3\uff09\tSet the baud rate")),(0,r.kt)("p",null,"Send: AT+BAUD","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK + Set:","[para1]"),(0,r.kt)("p",null,"Example: send: AT + BAUD1, return: OK + Set: 2.The baud rate is set to 19200."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"After the switch to the 1200, module will no longer support the configurations of the AT command, and press the PIO0 under standby, module can restore the factory Settings.Do not recommend using the baud rate.After setting the baud rate, modules should be on electricity, anew set parameters can take effect.\n"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4\uff09\tfrom the device connected to the bluetooth address specified")),(0,r.kt)("p",null,"Send: AT+CON","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK + CONN","[para2]"),(0,r.kt)("p",null,"Para2 range is: A, E, F"),(0,r.kt)("p",null,"Example: from the bluetooth address is: 0017EA0943AE, sending the AT + CON0017EA0943AE, module returns: OK + CONNA or OK + + CONNF CONNE or OK."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5\uff09\tremoval equipment matching information")),(0,r.kt)("p",null,"Send: AT+CLEAR"),(0,r.kt)("p",null,"Send after a successful return: OK + CLEAR"),(0,r.kt)("p",null,"Clear success had connected device address code information."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6\uff09\tquery module working mode")),(0,r.kt)("p",null,"Send: AT+MODE?"),(0,r.kt)("p",null,"Send after a successful return: OK + Get: ","[para]"),(0,r.kt)("p",null,"Para: the range of 0 ~ 2. 0 represents passthrough mode, on behalf of the PIO acquisition + remote control + 1 passthrough, 2 representative passthrough + remote control mode.The default is 0."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7\uff09\tset module working mode: ")),(0,r.kt)("p",null,"Send: AT+MODE","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK + Set: ","[para]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8\uff09\tquery device name")),(0,r.kt)("p",null,"Send: AT+NAME?"),(0,r.kt)("p",null,"Send after a successful return: OK + NAME ","[para1]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9\uff09\tset the device name")),(0,r.kt)("p",null,"Send: AT+NAME","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK + Set: ","[para1]"),(0,r.kt)("p",null,"Example: Set the device name to Seeed, sending the AT + NAMESeeed, return OK + Set: Seeed AT this time, the name of the bluetooth module has been changed to Seeed. Note: after the instruction execution, required to electricity, set the parameters of the approval."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10\uff09\tquery matching password")),(0,r.kt)("p",null,"Send: AT+PASS?"),(0,r.kt)("p",null,"Send after a successful return: OK + PASS: ","[para1]"),(0,r.kt)("p",null,"Para1 range is 000000 ~ 999999, the default is 000000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11\uff09\tpairing set password")),(0,r.kt)("p",null,"Send: AT+PASS","[para1]"),(0,r.kt)("p",null,"Send after a successful return: OK + Set: ","[para1]"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"12\uff09\trestore factory Settings")),(0,r.kt)("p",null,"Send: AT+RENEW"),(0,r.kt)("p",null,"Send after a successful return: OK + RENEW"),(0,r.kt)("p",null,"Restore the default factory Settings module, the module Settings will be reset so, back to the factory with the status of the factory default, delay module 500 ms after the restart.If no need, please be careful."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"13\uff09\tmodule reset")),(0,r.kt)("p",null,"Send: AT+RESET"),(0,r.kt)("p",null,"Send after a successful return: OK + RESET"),(0,r.kt)("p",null,"After the instruction execution module will delay 500 ms after the restart."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"14\uff09\tset the master-slave mode"),"\nSend: AT+ROLE","[para1]","\nSend after a successful return: OK + Set: ","[para1]"),(0,r.kt)("h2",{id:"helloworld"},"HelloWorld"),(0,r.kt)("hr",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When connect Xadow-BLE to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module).")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"//make Xadow BLE as a BLE Master device")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#define SerialBaud   9600\n#define Serial1Baud  9600\n\nvoid setup()\n{\n    Serial.begin(SerialBaud);\n    Serial1.begin(Serial1Baud);\n    while(!Serial.available());\n    // set master\n    Serial1.print("AT+ROLE1");\n    delay(1000);\n}\n\nvoid loop()\n{\n    while(Serial.available()){\n      Serial1.write(Serial.read());\n    }\n    while(Serial1.available()){\n      Serial.write(Serial1.read());\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"//make Xadow BLE as a BLE Slave device")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'#define SerialBaud   9600\n#define Serial1Baud  9600\nvoid setup()\n{\n    Serial.begin(SerialBaud);\n    Serial1.begin(Serial1Baud);\n    while(!Serial.available());\n    // set slave\n    Serial1.print("AT+ROLE0");\n    delay(1000);\n}\n\nvoid loop()\n{\n    while(Serial.available()){\n      Serial1.write(Serial.read());\n    }\n    while(Serial1.available()){\n      Serial.write(Serial1.read());\n    }\n}\n')),(0,r.kt)("h2",{id:"android-ble-communication"},"Android BLE Communication"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Here we show you how to make Xadow - BLE communicate with your Android mobile phone\uff08Note: your android system version should be up than 4.3)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Download the android APP ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar"},"here")," ,and install it to your android mobile phone."),(0,r.kt)("li",{parentName:"ol"},"Connect your xadow BLE with Xadow mainboard, and then copy the Xadow BLE Slave device demo code above, compile and upload it to the Xadow MainBoard."),(0,r.kt)("li",{parentName:"ol"},"Open an Serial Tool(e.g. SSCOM32), and open the Serial Port of Xadow MainBoard."),(0,r.kt)("li",{parentName:"ol"},"Open the BLE Example APK that you installed in the first step, it will be as follow:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_start.png",alt:null})),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"click the start button in the center of UI, it will start to scan for BLE slave devices.The Scan result will be shown in the dialog list.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_scanResult.png",alt:null})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Select the Seeed BLE, it will try to connect the Xadow BLE automatically."),(0,r.kt)("li",{parentName:"ol"},"After you connect the ble slave device successfully,You will find that the UUID is null and you need to pick up one from the list of Characteristics UUID List, Here we choose the UUID:0000ffe1-0000-1000-8000-00805f9b34fb")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_UUIDSelected.png",alt:null})),(0,r.kt)("ol",{start:8},(0,r.kt)("li",{parentName:"ol"},"OK, the exciting moment has come! Input the command(data) to the textbox, and then click the Send button, the message will be send to the specified ble devices. and the recv textbox will show the message from the slave devices, just as follow. Have fun!\n",(0,r.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_sendData.png",alt:null}),(0,r.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Xadow_BLE/img/Ble_recvData.png",alt:null}))),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/Xadow-BLE_v1.0_20131224.zip"},"Xadow-BLE_v1.0 Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMBLEComAssistant.rar"},"BLE_apk_for_Android")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/Bluetooth4_en.pdf"},"DataSheet of BLE module")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/BLE_Example"},"BLE Android Source Code On GitHub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/HMSoft_ios6.zip"},"4.0 BLE IOS6 Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-HMSoft_ios7.zip"},"4.0 BLE IOS7 Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Xadow_BLE/res/File-BluetoothLeGatt.rar"},"4.0 BLE Android Source Code")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"http://www.huamaosoft.com/index_en.asp?page=2&ID=1"},"More Documents URL"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
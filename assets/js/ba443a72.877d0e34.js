"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64596],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),d=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),p=d(n),c=a,m=p["".concat(u,".").concat(c)]||p[c]||h[c]||i;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:a,l[1]=r;for(var d=2;d<i;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85023:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=n(87462),a=(n(67294),n(3905));const i={description:"Bluetooth Bee",title:"Bluetooth Bee",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_Bee_Standalone",last_update:{date:"1/13/2023",author:"shuxu hu"}},l=void 0,r={unversionedId:"Seeed_Elderly/Bee/Bluetooth_Bee_Standalone",id:"Seeed_Elderly/Bee/Bluetooth_Bee_Standalone",title:"Bluetooth Bee",description:"Bluetooth Bee",source:"@site/docs/Seeed_Elderly/Bee/Bluetooth_Bee_Standalone.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Bluetooth_Bee_Standalone",permalink:"/custom/Bluetooth_Bee_Standalone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/Bluetooth_Bee_Standalone.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Bluetooth Bee",title:"Bluetooth Bee",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Bluetooth_Bee_Standalone",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Bluetooth Bee v2.0",permalink:"/custom/Bluetooth_Bee_v2.0"},next:{title:"Bluetooth Bee",permalink:"/custom/Bluetooth_Bee"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Hardware Features",id:"hardware-features",level:3},{value:"Software Features",id:"software-features",level:3},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Pin definition and Rating",id:"pin-definition-and-rating",level:2},{value:"Usage",id:"usage",level:2},{value:"Additional ideas",id:"additional-ideas",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/P3302883_02.jpg",alt:null})),(0,a.kt)("p",null,"Save that extra Arduino you have lying around for another project, this two-for-one device has the Arduino built-in. Bluetooth Bee with Arduino is an enhanced version of the Bluetooth Bee. We added an onboard ATMEGA168 to it to make it a full-featured Arduino while maintaining the same footprint and instruction set as the Bluetooth Bee. Plus, it still allows you to stack it on XBee Carrier, XBee\xae Shield, and UartSBee for expansion or reprogramming."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Bluetooth-Bee-Standalone-p-1157.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Small footprint"),(0,a.kt)("li",{parentName:"ul"},"Identical settings and pairing methods as the Bluetooth Bee"),(0,a.kt)("li",{parentName:"ul"},"Software serial port adopted between the Bluetooth module and ATMEGA168"),(0,a.kt)("li",{parentName:"ul"},"Remains compatibile with XBee Carrier, XBee\xae Shield, and UartsBee for expansion")),(0,a.kt)("h3",{id:"hardware-features"},"Hardware Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Typical -80dBm sensitivity."),(0,a.kt)("li",{parentName:"ul"},"Up to +4dBm RF transmit power."),(0,a.kt)("li",{parentName:"ul"},"Fully Qualified Bluetooth V2.0+EDR 3Mbps Modulation."),(0,a.kt)("li",{parentName:"ul"},"3.3v Power"),(0,a.kt)("li",{parentName:"ul"},"Integrated PCB antenna."),(0,a.kt)("li",{parentName:"ul"},"Disconnect and monitor the Bluetooth via Software."),(0,a.kt)("li",{parentName:"ul"},"xBee compatible headers.")),(0,a.kt)("h3",{id:"software-features"},"Software Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the SoftSerial program to communication."),(0,a.kt)("li",{parentName:"ul"},"Default Baud rate: ",(0,a.kt)("strong",{parentName:"li"},"38400"),", Data bits:8, Stop bit:1,Parity:No parity, Data control: has."),(0,a.kt)("li",{parentName:"ul"},"Supported baud rate: 9600,19200,38400,57600,115200,230400,460800."),(0,a.kt)("li",{parentName:"ul"},"Use CTS and RTS to control the data stream."),(0,a.kt)("li",{parentName:"ul"},"Disconnecte the Bluetooth via a rising edge on PC2"),(0,a.kt)("li",{parentName:"ul"},"Status instruction port PB2: low-disconnected, high-connected;"),(0,a.kt)("li",{parentName:"ul"},"PIO10 is connected to red led, PIO11 is connected to blue led. When master and slave are paired, red and blue led blinks 1time / 2s in interval, while disconnected only blue led blinks 2 times/ s."),(0,a.kt)("li",{parentName:"ul"},"Auto-connect the last device on power as default."),(0,a.kt)("li",{parentName:"ul"},"Permit matched device connect by default."),(0,a.kt)("li",{parentName:"ul"},"Default PINCODE:\u201d0000\u201d."),(0,a.kt)("li",{parentName:"ul"},"Auto-reconnect in 30 min when disconnected as a result of beyond the range of connection.")),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Arduino compatilbe module with Bluetooth communication.")),(0,a.kt)("admonition",{title:"s",type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"*3.3 V power needed.\n*   While using with UartSBee, set the operation voltage to 3.3V\n*   Command to change baud rate is persistent even after reset. Hence remember the baud rate for next use.\n"))),(0,a.kt)("h2",{id:"pin-definition-and-rating"},"Pin definition and Rating"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Bottom-view:\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/Grove-Red_LED/wiki/Bluetooth_Bee_Standalone/img/Bluetooth-standalone_pin.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PD4 - PD7 = Arduino IDE digital pins 4 - 7  (5,6 PWM)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PB0 , PB1 = Arduino IDE digital pins 8 , 9  (9   PWM)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PC0 - PC3 = Arduino IDE analog  pins 0 - 3  (Note PC2 Disconnects the Bluetooth via a rising edge)"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 1")),(0,a.kt)("p",null,"Connect Grove-Red_LED and Bluetooth Bee-Standalone module to XBee carrier like this."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone3.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 2")),(0,a.kt)("p",null,"Write a program by Arduino-IDE to read informations from the Bluetooth Softserial port and identify to shut or turn on the LED."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'/*\nBluetoothBee Demo Code - Flowcontrol Based Implementation\n2010,2011 Copyright (c) Seeed Technology Inc.  All right reserved.\n\nAuthor: Visweswara R      Modify:Joinj\n\nThis demo code is free software; you can redistribute it and/or\nmodify it under the terms of the GNU Lesser General Public\nLicense as published by the Free Software Foundation; either\nversion 2.1 of the License, or (at your option) any later version.\n\nThis library is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU\nLesser General Public License for more details.\n\nYou should have received a copy of the GNU Lesser General Public\nLicense along with this library; if not, write to the Free Software\nFoundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA\n\nFor more details about the product please check https://www.seeedstudio.com/depot/\n\n*/\n\n\n/* Upload this sketch to Seeeduino and press reset*/\n\n#include <NewSoftSerial.h>   //Software Serial Port\n#define RxD 2\n#define TxD 3\n\n#define DEBUG_ENABLED  1\n\nNewSoftSerial blueToothSerial(RxD,TxD);\n\nvoid setup()\n{\n    pinMode(RxD, INPUT);\n    pinMode(TxD, OUTPUT);\n    pinMode(5,OUTPUT);\n    setupBlueToothConnection();\n}\n\nvoid loop()\n{\n    unsigned char control;\n    unsigned char temp;\n    while(temp!=\'4\')  {\n        temp=blueToothSerial.read();\n    }\n    Serial.println("You are connected");\n    blueToothSerial.print("You are connected");      //You can write you BT communication logic here\n    while(1)  {\n        temp=blueToothSerial.read();\n        switch(temp)  {\n            case \'O\':{while(temp!=\'N\')  {temp=blueToothSerial.read();}  digitalWrite(5,HIGH);break;}\n            case \'S\':{while(temp!=\'H\')  {temp=blueToothSerial.read();}  digitalWrite(5,LOW);break;}\n            default:break;\n        }\n    }\n}\n\n\nvoid setupBlueToothConnection()\n{\n    blueToothSerial.begin(38400); //Set BluetoothBee BaudRate to default baud rate 38400\n    delay(1000);\n    sendBlueToothCommand("\\r\\n+STWMOD=0\\r\\n");\n    sendBlueToothCommand("\\r\\n+STNA=SeeedBluetooth-st\\r\\n");\n    sendBlueToothCommand("\\r\\n+STAUTO=0\\r\\n");\n    sendBlueToothCommand("\\r\\n+STOAUT=1\\r\\n");\n    sendBlueToothCommand("\\r\\n +STPIN=0000\\r\\n");\n    delay(2000); // This delay is required.\n    sendBlueToothCommand("\\r\\n+INQ=1\\r\\n");\n    delay(2000); // This delay is required.\n}\n\n//Checks if the response "OK" is received\nvoid CheckOK()\n{\n    char a,b;\n    while(1)\n    {\n        if(blueToothSerial.available())\n        {\n            a = blueToothSerial.read();\n\n            if(\'O\' == a)\n            {\n                // Wait for next character K. available() is required in some cases, as K is not immediately available.\n                while(blueToothSerial.available())\n                {\n                    b = blueToothSerial.read();\n                    break;\n                }\n                if(\'K\' == b)\n                {\n                    break;\n                }\n            }\n        }\n    }\n\n    while( (a = blueToothSerial.read()) != -1)\n    {\n        //Wait until all other response chars are received\n    }\n}\n\nvoid sendBlueToothCommand(char command[])\n{\n    blueToothSerial.print(command);\n    CheckOK();\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 3")),(0,a.kt)("p",null,"Connect the XBee carrier to computer with USB-cable and uploading the program to ",(0,a.kt)("strong",{parentName:"p"},"ATMEGA168")," on the Bluetooth Bee-Standalone."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 4")),(0,a.kt)("p",null,"Remove the USB-cable form XBee carrier and connect the 3.7-Voltage battery to XBee carrier like this."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone2.jpg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Step 5")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/img/Bluetooth_Bee-Standalone1.jpg",alt:null})),(0,a.kt)("h2",{id:"additional-ideas"},"Additional ideas"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://dejwoot.blogspot.hk/2012/07/howto-test-your-bluetooth-bee-standalone.html"},"How to test your Bluetooth Bee - Standalone"))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee-Standalone_schematic.zip"},"BlueTooth bee-Standalone Eagle files"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip"},"NewSoftLibrary"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=4&t=687"},"Information")," on how to setup connections between Bluetooth Bees is available in Seeedstudio Forum.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=18&t=1436&p=5637#p5637"},"Information")," on PC connecting Bluetooth Bee in Seeedstudio Forum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Bluetooth_Bee_Standalone/res/Bluetooth_Bee_Standalone_v1.0.pdf",title:"File:Bluetooth Bee Standalone v1.0.pdf"},"File:Bluetooth Bee Standalone v1.0.pdf")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
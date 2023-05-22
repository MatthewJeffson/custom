"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=s(n),p=r,m=h["".concat(d,".").concat(p)]||h[p]||u[p]||a;return n?i.createElement(m,o(o({ref:t},c),{},{components:n})):i.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[h]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},67726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var i=n(87462),r=(n(67294),n(3905));const a={description:"For Seeed nRF52 mbed-enabled Boards Boards",title:"For Seeed nRF52 mbed-enabled Boards Boards",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-Bluetooth-Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},o="Bluetooth Usage (Seeed nrf52 mbed-enabled Boards Library)",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth-Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth-Usage",title:"For Seeed nRF52 mbed-enabled Boards Boards",description:"For Seeed nRF52 mbed-enabled Boards Boards",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth-Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries",slug:"/XIAO-BLE-Sense-Bluetooth-Usage",permalink:"/zh-CN/XIAO-BLE-Sense-Bluetooth-Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth-Usage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673366400,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{description:"For Seeed nRF52 mbed-enabled Boards Boards",title:"For Seeed nRF52 mbed-enabled Boards Boards",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-Bluetooth-Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"For Seeed nRF52 Boards Library",permalink:"/zh-CN/XIAO-BLE-Sense-Bluetooth_Usage"},next:{title:"Getting Started",permalink:"/zh-CN/XIAO-BLE-Sense-TFLite-Getting-Started"}},d={},s=[{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Required",id:"hardware-required",level:3},{value:"Software Required",id:"software-required",level:3},{value:"Arduino Library Overview",id:"arduino-library-overview",level:2},{value:"Function",id:"function",level:3},{value:"Installation",id:"installation",level:3},{value:"Application examples",id:"application-examples",level:2},{value:"Demo 1 Control built-in LED using a smartphone",id:"demo-1-control-built-in-led-using-a-smartphone",level:3},{value:"Demo 2 Use XIAO\xa0BLE to Obtain Data of 24GHz\xa0Sleep\xa0Detect\xa0Module via BLE",id:"demo-2-use-xiaoble-to-obtain-data-of-24ghzsleepdetectmodule-via-ble",level:3},{value:"Demo 3 Two XIAO nRF52840 control LED via Bluetooth communication",id:"demo-3-two-xiao-nrf52840-control-led-via-bluetooth-communication",level:3},{value:"What&#39;s more?",id:"whats-more",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bluetooth-usage-seeed-nrf52-mbed-enabled-boards-library"},"Bluetooth Usage (Seeed nrf52 mbed-enabled Boards Library)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," and ",(0,r.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense"),' both support Bluetooth connectivity. This wiki will introduce the basics Bluetooth function and provide a demo with 24GHz Respiratory Sleep Detection Module, used by "Seeed nrf52 mbed-enabled Boards Library".'),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"hardware-required"},"Hardware Required"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 x ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},"Seeed Studio XIAO nRF52840")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840 Sense")),(0,r.kt)("li",{parentName:"ul"},"1 x Smartphone/PC with bluetooth connectivity"),(0,r.kt)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,r.kt)("h3",{id:"software-required"},"Software Required"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp"},"nRF Connect for Mobile (Android)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/lightblue/id557428110"},"LightBlue App (Apple)"))),(0,r.kt)("h2",{id:"arduino-library-overview"},"Arduino Library Overview"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, we highly recommend you to refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino"),".")),(0,r.kt)("p",null,"To use the Bluetooth functionality of Seeed Studio XIAO nRF52840, we need to use the official Arduino BLE library."),(0,r.kt)("div",null,(0,r.kt)("p",{style:{}},(0,r.kt)("a",{href:"https://github.com/arduino-libraries/ArduinoBLE",target:"_blank"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://github.com/arduino-libraries/ArduinoBLE",target:"_blank"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,r.kt)("p",null)),(0,r.kt)("p",null,"If you want to apply the Demo with 24GHz Sleep Breathing Radar, you may also need to download supported library as well."),(0,r.kt)("div",null,(0,r.kt)("p",{style:{}},(0,r.kt)("a",{href:"https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE",target:"_blank"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://github.com/limengdu/Seeed_24GHz_SleepBreathingRadar_BLE",target:"_blank"},(0,r.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,r.kt)("p",null)),(0,r.kt)("h3",{id:"function"},"Function"),(0,r.kt)("p",null,"For an introduction to the functions and use of the code library ArduinoBLE, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/libraries/arduinoble/"},"Arduino website"),"."),(0,r.kt)("p",null,"For an introduction to the functions and use of the code library Seeed 24GHz Sleep Breathing Radar BLE, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Radar_MR24BSD1/#function"},"Wiki"),"."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method One")," (This method is available for both of the above code libraries.)")),(0,r.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,r.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,r.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Method Two")," (Only the ArduinoBLE library can be installed.)")),(0,r.kt)("p",null,"The library manager was added starting with Arduino IDE versions 1.5 and greater (1.6.x). It is found in the 'Sketch' menu under 'Include Library', 'Manage Libraries...'"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg"})),(0,r.kt)("p",null,"When you open the Library Manager you will find a large list of libraries ready for one-click install. To find a library for your product, search for the product name or a keyword such as 'k type' or 'digitizer', and the library you want should show up. Click on the desired library, and the 'Install' button will appear. Click that button, and the library should install automatically. When installation finishes, close the Library Manager."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRFmbed.png"})),(0,r.kt)("h2",{id:"application-examples"},"Application examples"),(0,r.kt)("p",null,"Now that we have our library installed and we understand the basic functions, let's run some examples for our Seeed Studio XIAO nRF52840 to see how it behaves."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Launch the Arduino application."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2."),' Select your development board model and add it to the Arduino IDE. Here we are using "Seeed nrf52 mbed-enabled Boards Library".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"For the boards libraries installation, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial")," to finish installation.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nrf528404.png"})),(0,r.kt)("h3",{id:"demo-1-control-built-in-led-using-a-smartphone"},"Demo 1 Control built-in LED using a smartphone"),(0,r.kt)("p",null,"In this example, we are going to connect the Seeed Studio XIAO nF52840 (Sense) and a smartphone using Bluetooth and send messages from the phone to turn ON/OFF the built-in Red LED on the Seeed Studio XIAO nRF52840 (Sense)."),(0,r.kt)("p",null,"Please paste this code below into the Arduino IDE and upload it to the Seeed Studio XIAO nRF52840."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <ArduinoBLE.h>\n\nBLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth\xae Low Energy LED Service\n\n// Bluetooth\xae Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central\nBLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);\n\nconst int ledPin = LED_BUILTIN; // pin to use for the LED\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial);\n\n  // set LED pin to output mode\n  pinMode(ledPin, OUTPUT);\n\n  // begin initialization\n  if (!BLE.begin()) {\n    Serial.println("starting Bluetooth\xae Low Energy module failed!");\n\n    while (1);\n  }\n\n  // set advertised local name and service UUID:\n  BLE.setLocalName("LED");\n  BLE.setAdvertisedService(ledService);\n\n  // add the characteristic to the service\n  ledService.addCharacteristic(switchCharacteristic);\n\n  // add service\n  BLE.addService(ledService);\n\n  // set the initial value for the characeristic:\n  switchCharacteristic.writeValue(0);\n\n  // start advertising\n  BLE.advertise();\n\n  Serial.println("BLE LED Peripheral");\n}\n\nvoid loop() {\n  // listen for Bluetooth\xae Low Energy peripherals to connect:\n  BLEDevice central = BLE.central();\n\n  // if a central is connected to peripheral:\n  if (central) {\n    Serial.print("Connected to central: ");\n    // print the central\'s MAC address:\n    Serial.println(central.address());\n\n    // while the central is still connected to peripheral:\n  while (central.connected()) {\n        if (switchCharacteristic.written()) {\n          if (switchCharacteristic.value()) {   \n            Serial.println("LED on");\n            digitalWrite(ledPin, LOW); // changed from HIGH to LOW       \n          } else {                              \n            Serial.println(F("LED off"));\n            digitalWrite(ledPin, HIGH); // changed from LOW to HIGH     \n          }\n        }\n      }\n\n    // when the central disconnects, print it out:\n    Serial.print(F("Disconnected from central: "));\n    Serial.println(central.address());\n  }\n}\n')),(0,r.kt)("p",null,"The key to the implementation of this example is the following paragraph."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'  while (central.connected()) {\n        if (switchCharacteristic.written()) {\n          if (switchCharacteristic.value()) {   \n            Serial.println("LED on");\n            digitalWrite(ledPin, LOW); // changed from HIGH to LOW       \n          } else {                              \n            Serial.println(F("LED off"));\n            digitalWrite(ledPin, HIGH); // changed from LOW to HIGH     \n          }\n        }\n      }\n')),(0,r.kt)("p",null,"The purpose of this code is to enter a judgement when Seeed Studio XIAO nRF52840 is connected by a Bluetooth device ",(0,r.kt)("inlineCode",{parentName:"p"},"central.connected()")," and receives content from the Bluetooth device ",(0,r.kt)("inlineCode",{parentName:"p"},"switchCharacteristic.written()"),". If the value of the judgement is non-zero ",(0,r.kt)("inlineCode",{parentName:"p"},"switchCharacteristic.value()"),", the light is on, if the judgement value is 0 the light is off."),(0,r.kt)("p",null,"Opening your serial monitor to a baud rate of 9600 and the led should be on or off. The output should look something like the below image."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/2.png"})),(0,r.kt)("p",null,"At this point, control of the Seeed Studio XIAO nRF52840 light can be completed using the mobile app via Bluetooth, as described below."),(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"iPhone"),(0,r.kt)("th",{align:"center"},"Android"),(0,r.kt)("th",{align:"center"},"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and1.jpeg"})),(0,r.kt)("td",{align:"center"},"Open the software, search for a Bluetooth device called ",(0,r.kt)("strong",null,"LED")," and click on Connect. Some devices may appear as ",(0,r.kt)("strong",null,"Arduino"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"})),(0,r.kt)("td",{align:"center"},"Go to the Seeed Studio XIAO nRF52840 Bluetooth interface and click on the device to display the device details.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone4.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and3.jpeg"})),(0,r.kt)("td",{align:"center"},"Fill in the data to be sent to the Seeed Studio XIAO nRF52840, send 1 to turn on the light, send 0 to turn off the light.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone5.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and4.jpeg"})),(0,r.kt)("td",{align:"center"},"Back in the Bluetooth control interface, you can see that the value has changed and the Seeed Studio XIAO nRF52840 red light is on (or off).")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"3"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/3.png"})))),(0,r.kt)("h3",{id:"demo-2-use-xiaoble-to-obtain-data-of-24ghzsleepdetectmodule-via-ble"},"Demo 2 Use XIAO\xa0BLE to Obtain Data of 24GHz\xa0Sleep\xa0Detect\xa0Module via BLE"),(0,r.kt)("p",null,"In this example, we will describe how to obtain the values of the sensors and send the information about the data detected by the sensors to the mobile device via Bluetooth with Seeed Studio XIAO nRF52840."),(0,r.kt)("p",null,"Follow the image below to connect the Seeed Studio XIAO nRF52840 board and 24GHz Respiratory Sleep Detection Module. For further information, you can click ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Radar_MR24BSD1"},"here"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/60GHzradar/20.png"})),(0,r.kt)("p",null,"Please open the example code in the library and upload it to Seeed Studio XIAO nRF52840."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/6.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'//Radar_with_XIAOBLE_example\n\n#include <ArduinoBLE.h>\n#include <sleepbreathingradarBLE.h>\n\nSleepBreathingRadarBLE radar;\nBLEService radarService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth\xae Low Energy LED Service\n\n// Bluetooth\xae Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central\nBLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);\n\nint last_val = 0;\n\nvoid setup() {\n  Serial.begin(9600);\n  radar.SerialInit();\n  while (!Serial);\n\n  // begin initialization\n  if (!BLE.begin()) {\n    Serial.println("starting Seeed Studio XIAO nRF52840 with 60GHz radar sensor demo failed!");\n    while (1);\n  }\n\n  // set advertised local name and service UUID:\n  BLE.setLocalName("Seeed Studio XIAO nRF52840");\n  BLE.setAdvertisedService(radarService);\n\n  // add the characteristic to the service\n  radarService.addCharacteristic(switchCharacteristic);\n\n  // add service\n  BLE.addService(radarService);\n\n  // start advertising\n  BLE.advertise();\n\n  Serial.println("Seeed Studio XIAO nRF52840 active, waiting for connections...");\n}\n\nvoid loop() {\n  // listen for Bluetooth\xae Low Energy peripherals to connect:\n  BLEDevice central = BLE.central();\n\n  // if a central is connected to peripheral:\n  if (central) {\n    Serial.print("Connected to central: ");\n    // print the central\'s MAC address:\n    Serial.println(central.address());\n\n    // while the central is still connected to peripheral:\n    while (central.connected()){\n       radar.recvRadarBytes();                       //Receive radar data and start processing\n       if (radar.newData == true) {                  //The data is received and transferred to the new list dataMsg[]\n          byte dataMsg[radar.dataLen+3] = {0x00};\n          dataMsg[0] = 0x53;                         //Add the header frame as the first element of the array\n          for (byte n = 0; n < radar.dataLen; n++)dataMsg[n+1] = radar.Msg[n];  //Frame-by-frame transfer\n          dataMsg[radar.dataLen+1] = 0x54;\n          dataMsg[radar.dataLen+2] = 0x43;\n          radar.newData = false;                     //A complete set of data frames is saved\n          int new_val = radar.Sleep_inf(dataMsg);    //Use radar built-in algorithm to output human motion status\n          if(new_val != last_val){\n            radar.OutputAssignment(new_val);\n            switchCharacteristic.setValue(radar.str);\n            last_val = new_val;\n          }\n        }\n    }\n\n    // when the central disconnects, print it out:\n      Serial.print(F("Disconnected from central: "));\n      Serial.println(central.address());\n    }\n}\n')),(0,r.kt)("p",null,"In this example, the function that sends data to the mobile device is ",(0,r.kt)("inlineCode",{parentName:"p"},"setValue()"),". If you want to get a real time display of the data you need to add ",(0,r.kt)("inlineCode",{parentName:"p"},"BLENotify")," to this code below. The last parameter, 20, indicates the maximum length of data you can send."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'BLEStringCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLENotify, 20);\n')),(0,r.kt)("p",null,"Opening your serial monitor to a baud rate of 9600 should show the distance between the sensor and the object it's pointed at in both millimeters and feet. The output should look something like the below image."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/4.png"})),(0,r.kt)("p",null,"Next, we can obtain the live data sent by Bluetooth by following the steps below."),(0,r.kt)("table",{align:"center"},(0,r.kt)("tr",null,(0,r.kt)("th",{align:"center"},"iPhone"),(0,r.kt)("th",{align:"center"},"Android"),(0,r.kt)("th",{align:"center"},"Description")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone1.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and5.jpeg"})),(0,r.kt)("td",{align:"center"},"Open the software, search for a Bluetooth device called ",(0,r.kt)("strong",null,"Seeed Studio XIAO nRF52840")," and click on Connect. Some devices may appear as ",(0,r.kt)("strong",null,"Arduino"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"=",(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/IPhone2.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and2.jpeg"})),(0,r.kt)("td",{align:"center"},"Go to the Seeed Studio XIAO nRF52840 Bluetooth interface and click on the device to display the device details.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone8.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and6.jpeg"})),(0,r.kt)("td",{align:"center"},"Open the software's live update data.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/iPhone7.jpg"})),(0,r.kt)("td",null,(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/and7.jpeg"})),(0,r.kt)("td",{align:"center"},"Next, whenever the radar detects a sleep message, it is sent to the phone via Seeed Studio XIAO nRF52840's Bluetooth.")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"3"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/5.png"})))),(0,r.kt)("h3",{id:"demo-3-two-xiao-nrf52840-control-led-via-bluetooth-communication"},"Demo 3 Two XIAO nRF52840 control LED via Bluetooth communication"),(0,r.kt)("p",null,"In this example, we will use two XIAO nRF52840, using their Bluetooth capabilities to communicate. One of the XIAOs acts as a host and is connected to the XIAO expansion board, sending control commands via the expansion board's buttons. The other XIAO acts as a slave."),(0,r.kt)("p",null,"Before you start, please be prepared to do the following."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"}),(0,r.kt)("th",{parentName:"tr",align:"center"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{width:210,src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/Update_pic/zheng1.jpg"})),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("img",{width:210,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/102010469_Front-14.jpg"}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},(0,r.kt)("strong",{parentName:"a"},"Seeed Studio XIAO Expansion board"))),(0,r.kt)("td",{parentName:"tr",align:"center"},"2 x ",(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html?queryID=4bbd8c09f20216aa26f6b5a9040504d0&objectID=5253&indexName=bazaar_retailer_products"},(0,r.kt)("strong",{parentName:"a"},"Seeed XIAO BLE nRF52840 Sense")))))),(0,r.kt)("p",null,"Please select one of the XIAO nRF52840, which does not require any device to be connected, and upload the program below directly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <ArduinoBLE.h>\n\nBLEService ledService("19B10000-E8F2-537E-4F6C-D104768A1214"); // Bluetooth\xae Low Energy LED Service\n\n// Bluetooth\xae Low Energy LED Switch Characteristic - custom 128-bit UUID, read and writable by central\nBLEByteCharacteristic switchCharacteristic("19B10001-E8F2-537E-4F6C-D104768A1214", BLERead | BLEWrite);\n\nconst int ledPin = LED_BUILTIN; // pin to use for the LED\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial);\n\n  // set LED pin to output mode\n  pinMode(ledPin, OUTPUT);\n\n  // begin initialization\n  if (!BLE.begin()) {\n    Serial.println("starting Bluetooth\xae Low Energy module failed!");\n\n    while (1);\n  }\n\n  // set advertised local name and service UUID:\n  BLE.setLocalName("XIAO");\n  BLE.setAdvertisedService(ledService);\n\n  // add the characteristic to the service\n  ledService.addCharacteristic(switchCharacteristic);\n\n  // add service\n  BLE.addService(ledService);\n\n  // set the initial value for the characeristic:\n  switchCharacteristic.writeValue(0);\n\n  // start advertising\n  BLE.advertise();\n\n  // print address\n  Serial.print("Address: ");\n  Serial.println(BLE.address());\n\n  Serial.println("XIAO nRF52840 Peripheral");\n}\n\nvoid loop() {\n  // listen for Bluetooth\xae Low Energy peripherals to connect:\n  BLEDevice central = BLE.central();\n\n  // if a central is connected to peripheral:\n  if (central) {\n    Serial.print("Connected to central: ");\n    // print the central\'s MAC address:\n    Serial.println(central.address());\n\n    // while the central is still connected to peripheral:\n    while (central.connected()) {\n      // if the remote device wrote to the characteristic,\n      // use the value to control the LED:\n      if (switchCharacteristic.written()) {\n        if (switchCharacteristic.value()) {   // any value other than 0\n          Serial.println("LED on");\n          digitalWrite(ledPin, HIGH);         // will turn the LED on\n        } else {                              // a 0 value\n          Serial.println(F("LED off"));\n          digitalWrite(ledPin, LOW);          // will turn the LED off\n        }\n      }\n    }\n\n    // when the central disconnects, print it out:\n    Serial.print(F("Disconnected from central: "));\n    Serial.println(central.address());\n  }\n}\n')),(0,r.kt)("p",null,'The main purpose of this program is to make XIAO a Bluetooth device called "XIAO" that can be searched for and connected to by other Bluetooth devices. Once connected, you can control the LEDs on the XIAO by sending a 0 or a 1 to turn them off or on respectively.'),(0,r.kt)("p",null,"Put the Seeed Studio XIAO nRF52840 on the expansion board."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO-Expansion-Board/XIAO-to-board.png"})),(0,r.kt)("p",null,"And for this purpose the XIAO with the extension board connected uploads the following procedure."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <ArduinoBLE.h>\n#include <U8x8lib.h>\n#include <Wire.h>\n\n// variables for button\nconst int buttonPin = D1;\nint oldButtonState = LOW;\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial);\n\n  // configure the button pin as input\n  pinMode(buttonPin, INPUT_PULLUP);\n\n  // initialize the Bluetooth\xae Low Energy hardware\n  BLE.begin();\n\n  Serial.println("Bluetooth\xae Low Energy Central - LED control");\n\n  // start scanning for peripherals\n  BLE.scanForName("XIAO");\n}\n\nvoid loop() {\n  // check if a peripheral has been discovered\n  BLEDevice peripheral = BLE.available();\n  if (peripheral) {\n    // discovered a peripheral, print out address, local name, and advertised service\n    Serial.print("Found ");\n    Serial.print(peripheral.address());\n    Serial.print(" \'");\n    Serial.print(peripheral.localName());\n    Serial.print("\' ");\n    Serial.print(peripheral.advertisedServiceUuid());\n    Serial.println();\n\n    if (peripheral.localName() != "XIAO") {\n      return;\n    }\n\n    // stop scanning\n    BLE.stopScan();\n\n    system_control(peripheral);\n\n    // peripheral disconnected, start scanning again\n    BLE.scanForName("XIAO");\n  }\n  delay(100);\n}\n\nvoid system_control(BLEDevice peripheral) {\n  // connect to the peripheral\n  Serial.println("Connecting ...");\n\n  if (peripheral.connect()) {\n    Serial.println("Connected");\n  } else {\n    Serial.println("Failed to connect!");\n    return;\n  }\n\n  // discover peripheral attributes\n  Serial.println("Discovering attributes ...");\n  if (peripheral.discoverAttributes()) {\n    Serial.println("Attributes discovered");\n  } else {\n    Serial.println("Attribute discovery failed!");\n    peripheral.disconnect();\n    return;\n  }\n\n  // retrieve the LED characteristic\n  BLECharacteristic ledCharacteristic = peripheral.characteristic("19b10001-e8f2-537e-4f6c-d104768a1214");\n\n  if (!ledCharacteristic) {\n    Serial.println("Peripheral does not have LED characteristic!");\n    peripheral.disconnect();\n    return;\n  } else if (!ledCharacteristic.canWrite()) {\n    Serial.println("Peripheral does not have a writable LED characteristic!");\n    peripheral.disconnect();\n    return;\n  }\n\n  while (peripheral.connected()) {\n    // while the peripheral is connected\n    // read the button pin\n    int buttonState = digitalRead(buttonPin);\n\n    if (oldButtonState != buttonState) {\n      // button changed\n      oldButtonState = buttonState;\n\n      if (buttonState) {\n        Serial.println("button pressed");\n\n        // button is pressed, write 0x01 to turn the LED on\n        ledCharacteristic.writeValue((byte)0x01);\n      } else {\n        Serial.println("button released");\n\n        // button is released, write 0x00 to turn the LED off\n        ledCharacteristic.writeValue((byte)0x00);\n      }\n    }\n  }\n\n  Serial.println("Peripheral disconnected");\n}\n')),(0,r.kt)("p",null,'Once you have uploaded the program, turn on the serial monitor and the program will start searching for a nearby Bluetooth device with the local name "XIAO" and connect to it (you will need to wait 1 to 3 minutes).'),(0,r.kt)("p",null,"Once the successful connection message is displayed in the serial monitor, you can control the switching of the other XIAO nRF52840 LED via key D1 of the expansion board."),(0,r.kt)("p",null,"Of course, if you don't have an extension board, you can also use your own buttons or other devices."),(0,r.kt)("h2",{id:"whats-more"},"What's more?"),(0,r.kt)("p",null,"If you want to try out more examples you can navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"File > Examples > INCOMPATIBLE > ArduinoBLE")," and check all the examples under ",(0,r.kt)("strong",{parentName:"p"},"ArduinoBLE")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}h.isMDXComponent=!0}}]);
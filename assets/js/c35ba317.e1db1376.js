"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1522],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75211:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={description:"Web Bluetooth APIs",title:"Web Bluetooth APIs",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Web-Bluetooth",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Using Web Bluetooth APIs with Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Web-Bluetooth",id:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Web-Bluetooth",title:"Web Bluetooth APIs",description:"Web Bluetooth APIs",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Web-Bluetooth.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Bluetooth",slug:"/Wio-Terminal-Web-Bluetooth",permalink:"/custom/Wio-Terminal-Web-Bluetooth",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Bluetooth/Wio-Terminal-Web-Bluetooth.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Web Bluetooth APIs",title:"Web Bluetooth APIs",keywords:["Wio_terminal Bluetooth"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Web-Bluetooth",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Client and Server introduction",permalink:"/custom/Wio-terminal-BLE-introduction"},next:{title:"Bluetooth Ibeacon",permalink:"/custom/BLE-ibeacon-using-Wio-terminal"}},s={},c=[{value:"What is Web Bluetooth API",id:"what-is-web-bluetooth-api",level:2},{value:"Web Bluetooth Simple Example",id:"web-bluetooth-simple-example",level:2},{value:"Arduino Set-Up",id:"arduino-set-up",level:3},{value:"Web Bluetooth API HTML Website",id:"web-bluetooth-api-html-website",level:3},{value:"Visualizing Accelerator Data on Web Site using Web Bluetooth APIs",id:"visualizing-accelerator-data-on-web-site-using-web-bluetooth-apis",level:2},{value:"Arduino Set-up",id:"arduino-set-up-1",level:3},{value:"Web Bluetooth API HTML Website",id:"web-bluetooth-api-html-website-1",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-web-bluetooth-apis-with-wio-terminal"},"Using Web Bluetooth APIs with Wio Terminal"),(0,r.kt)("p",null,"This is the wiki of interacting Wio Terminal's Bluetooth Feature with the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"},(0,r.kt)("strong",{parentName:"a"},"Web Bluetooth APIs")),". The Web Bluetooth APIs provides you the ability of interacting Bluetooth devices on web browsers."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/exmaple.gif"})),(0,r.kt)("h2",{id:"what-is-web-bluetooth-api"},"What is Web Bluetooth API"),(0,r.kt)("p",null,"Until now, the ability to interact with bluetooth devices has been possible only for native apps. The ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/web/updates/2015/07/interact-with-ble-devices-on-the-web"},(0,r.kt)("strong",{parentName:"a"},"Web Bluetooth API"))," aims to change this and brings it to web browsers as well. Alongside efforts like ",(0,r.kt)("a",{parentName:"p",href:"https://google.github.io/physical-web/"},"Physical Web"),", people can walk up to and interact with devices straight from the web. Check out ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=yILD_ZdXJW4"},"this drone controlled from a web app")," video to get a sense of how that would work."),(0,r.kt)("h2",{id:"web-bluetooth-simple-example"},"Web Bluetooth Simple Example"),(0,r.kt)("p",null,"The following example demonstrate how to set up Wio Terminal and use a simple HTML site to interact the Web Bluetooth API with Wio Terminal's Bluetooth."),(0,r.kt)("div",{align:"center"},(0,r.kt)("video",{width:"{560}",height:315,controls:!0},(0,r.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/simple.mp4",type:"video/mp4"}))),(0,r.kt)("h3",{id:"arduino-set-up"},"Arduino Set-Up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please follow the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/"},(0,r.kt)("strong",{parentName:"a"},"Wio Terminal Bluetooth Overview"))," to flash Bluetooth firmware to Wio Terminal and download dependent libraries before the followings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy the following code and upload to Wio Terminal:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcBLEDevice.h>\n#include <BLEServer.h>\n#include <BLE2902.h>\n\nbool _BLEClientConnected = false;\nuint8_t level = 10;\n\n#define BatteryService BLEUUID((uint16_t)0x180F) \nBLECharacteristic BatteryLevelCharacteristic(BLEUUID((uint16_t)0x2A19), BLECharacteristic::PROPERTY_READ  | BLECharacteristic::PROPERTY_WRITE  | BLECharacteristic::PROPERTY_NOTIFY);\n\nclass MyServerCallbacks : public BLEServerCallbacks {\n    void onConnect(BLEServer* pServer) {\n      _BLEClientConnected = true;\n    };\n\n    void onDisconnect(BLEServer* pServer) {\n      _BLEClientConnected = false;\n    }\n};\n\n/* ###############################################################  CALL back to receive data from Phone */\n#define CHARACTERISTIC_UUID_RX "6E400002-B5A3-F393-E0A9-E50E24DCCA9E"\n\nclass MyCallbacks: public BLECharacteristicCallbacks {\n\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string rxValue = pCharacteristic->getValue();\n      Serial.println(rxValue[0]);\n \n      if (rxValue.length() > 0) {\n        Serial.println("*********");\n        Serial.print("Received Value: ");\n \n        for (int i = 0; i < rxValue.length(); i++) {\n          Serial.print(rxValue[i]);\n        }\n        Serial.println();\n        Serial.println("*********");\n      }\n \n    }\n};\n\n/* ############################################################### */\nvoid initBLE() {\n  BLEDevice::init("BLE Battery");\n  // Create the BLE Server\n  BLEServer *pServer = BLEDevice::createServer();\n  pServer->setCallbacks(new MyServerCallbacks());\n\n  // Create the BLE Service\n  BLEService *pBattery = pServer->createService(BatteryService);\n\n  pBattery->addCharacteristic(&BatteryLevelCharacteristic);\n  BatteryLevelCharacteristic.addDescriptor(new BLE2902());\n\n\n  /* ###############################################################  define callback */\n  BLECharacteristic *pWriteCharacteristic = pBattery->createCharacteristic(\n                                         CHARACTERISTIC_UUID_RX,\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\n  pWriteCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);\n \n  pWriteCharacteristic->setCallbacks(new MyCallbacks());\n  /* ############################################################### */\n  \n  pServer->getAdvertising()->addServiceUUID(BatteryService);\n\n  pBattery->start();\n  // Start advertising\n  pServer->getAdvertising()->start();\n}\n\nvoid setup() {\n  Serial.begin(115200);\n//   while(!Serial);\n  Serial.println("--- Wio Terminal BLE Battery Level Indicator ---");\n  initBLE();\n}\n  \nvoid loop() {\n\n  BatteryLevelCharacteristic.setValue(&level, 1);\n  BatteryLevelCharacteristic.notify();\n  delay(3000);\n\n  level++;\n  Serial.print("Battery Level: ");\n  Serial.println(int(level));\n\n  if (int(level)==100)\n    level=0;\n}\n')),(0,r.kt)("p",null,"The above code configures Wio Terminal with the Bluetooth discoverable name ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"BLE Battery"))," and as Bluetooth Server and establish a Battery BLE Service. This is important and needs to match with Web Bluetooth APIs HTML Site later."),(0,r.kt)("h3",{id:"web-bluetooth-api-html-website"},"Web Bluetooth API HTML Website"),(0,r.kt)("p",null,"Now Wio Terminal is all set-up, we need to write a HTML site with the Web Bluetooth APIs so that they can interact. Check the following for reference:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ansonhe97/WioTerminal-WebBluetooth/blob/main/webbluetooth.html"},(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("inlineCode",{parentName:"strong"},"webbluetooth.html")))," from here.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"webbluetooth.html")," using the ",(0,r.kt)("strong",{parentName:"p"},"Latest Google Chrome or Microsoft Edge"),"(which supports Web Bluetooth APIs).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Right click")," on the site and select ",(0,r.kt)("strong",{parentName:"p"},"Inspect")," (CMD+OPT+I for macOS and Ctrl+Shift+I for Windows), select ",(0,r.kt)("strong",{parentName:"p"},"Control Console"),":"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/1.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Connect with BLE device")," button on the site. You should see that the ",(0,r.kt)("inlineCode",{parentName:"li"},"BLE Battery"),"(Wio Terminal) appeared in the connecting window. Click on ",(0,r.kt)("strong",{parentName:"li"},"Connect"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: The Web Bluetooth APIs actually will discover all the BLE devices nearby, but here used filter to only limited to the BLE device named BLE Battery.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/2.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Start")," button on the site and it will start receiving data battery information transmitted from Wio Terminal!")),(0,r.kt)("p",null,"Web Bluetooth API Site Console:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/3.png"})),(0,r.kt)("p",null,"Arduino Serial Monitor Control Console:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/4.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Now the Wio Terminal is interacting with the site using Web Bluetooth APIs! This makes the BLE feature more much interesting that you can have information transmitted though Web Browsers!")),(0,r.kt)("h2",{id:"visualizing-accelerator-data-on-web-site-using-web-bluetooth-apis"},"Visualizing Accelerator Data on Web Site using Web Bluetooth APIs"),(0,r.kt)("p",null,"The following is a good example of using Web Bluetooth APIs on a Site. This example site connects the Wio Terminal using Web Bluetooth and visualize the onboard accelerator data."),(0,r.kt)("div",{align:"center"},(0,r.kt)("video",{width:560,height:315,controls:!0},(0,r.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/example.mp4",type:"video/mp4"}))),(0,r.kt)("h3",{id:"arduino-set-up-1"},"Arduino Set-up"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please make sure you have followed the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-IMU-Overview/"},(0,r.kt)("strong",{parentName:"a"},"Wio Terminal's Accelerator Overview"))," before the followings.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_WebBluetooth/WioTerminal_WebBluetooth.ino"},(0,r.kt)("inlineCode",{parentName:"a"},"WebBluetooth-Accelerator.ino"))," Example")," or Copy the following code in Arduino IDE."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcBLEDevice.h>\n#include <BLEServer.h>\n#include <LIS3DHTR.h>\n\n#define accelerometerService "19b10000-e8f2-537e-4f6c-d104768a1214"\n#define firstCharacteristic  "19b10010-e8f2-537e-4f6c-d104768a1214"\n#define DESCRIPTOR_UUID      "19b10010"\n\nLIS3DHTR<TwoWire> lis;\n\nbool deviceConnected = false;\nbool oldDeviceConnected = false;\n\nBLEServer *pServer = NULL;\nBLECharacteristic * pCharacteristic;\n\nclass MyServerCallbacks: public BLEServerCallbacks {\n    void onConnect(BLEServer* pServer) {\n      Serial.println("MyServerCallbacks onConnect ");\n      deviceConnected = true;\n    };\n\n    void onDisconnect(BLEServer* pServer) {\n      deviceConnected = false;\n    }\n};\n\nclass MyCallbacks: public BLECharacteristicCallbacks {\n    void onWrite(BLECharacteristic *pCharacteristic) {\n      std::string rxValue = pCharacteristic->getValue();\n\n      if (rxValue.length() > 0) {\n        Serial.println("*********");\n        Serial.print("Received Value: ");\n        for (int i = 0; i < rxValue.length(); i++)\n          Serial.print(rxValue[i]);\n\n        Serial.println();\n        Serial.println("*********");\n      }\n    }\n};\n\nvoid setup() {\n  Serial.begin(115200);\n//  while(!Serial){};\n  \n  lis.begin(Wire1);\n  if (!lis) {\n    Serial.println("Accelerater Error!");\n    while(1);\n  }\n  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n  Serial.println("Accelerater Initialised!");\n  \n  Serial.println("Starting BLE work!");\n\n  BLEDevice::init("Accelerometer");\n  pServer = BLEDevice::createServer();\n  pServer->setCallbacks(new MyServerCallbacks());\n  \n  BLEService *pService = pServer->createService(accelerometerService);\n  pCharacteristic = pService->createCharacteristic(\n                                         firstCharacteristic,\n                                         BLECharacteristic::PROPERTY_READ |\n                                         BLECharacteristic::PROPERTY_WRITE\n                                       );\n  pCharacteristic->setAccessPermissions(GATT_PERM_READ | GATT_PERM_WRITE);\n  BLEDescriptor *pDescriptor = pCharacteristic->createDescriptor(\n                                         DESCRIPTOR_UUID,\n                                          ATTRIB_FLAG_VOID | ATTRIB_FLAG_ASCII_Z,\n                                         GATT_PERM_READ | GATT_PERM_WRITE,\n                                         2\n                                         );\n  pCharacteristic->setCallbacks(new MyCallbacks());\n  pService->start();\n\n  BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();\n  pAdvertising->addServiceUUID(accelerometerService);\n  pAdvertising->setScanResponse(true);\n  pAdvertising->setMinPreferred(0x06);  // functions that help with iPhone connections issue\n  pAdvertising->setMinPreferred(0x12);\n  BLEDevice::startAdvertising();\n  Serial.println("Characteristic defined! Now you can read it in your phone!");\n}\n\nvoid loop() { \n  if (deviceConnected) {\n    updateAcceleration();\n  }\n      // disconnecting\n    if (!deviceConnected && oldDeviceConnected) {\n        delay(500); // give the bluetooth stack the chance to get things ready\n        pServer->startAdvertising(); // restart advertising\n        Serial.println("start advertising");\n        oldDeviceConnected = deviceConnected;\n    }\n    // connecting\n    if (deviceConnected && !oldDeviceConnected) {\n    // do stuff here on connecting\n        oldDeviceConnected = deviceConnected;\n    }\n}\n\nvoid updateAcceleration() {\n  float x_values, y_values, z_values;\n  x_values = lis.getAccelerationX();\n  y_values = lis.getAccelerationY();\n  z_values = lis.getAccelerationZ();\n\n  String accelerometerData = String(x_values)+"|"+String(y_values)+"|"+String(z_values);\n  Serial.println(accelerometerData);\n  pCharacteristic->setValue(accelerometerData.c_str());\n  pCharacteristic->notify();\n  delay(20);\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Upload the example to Wio Terminal.")),(0,r.kt)("h3",{id:"web-bluetooth-api-html-website-1"},"Web Bluetooth API HTML Website"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://seeed-studio.github.io/Seeed_Arduino_Sketchbook/"},"Web Bluetooth Accelerometer Plotter For Wio Terminal"))," Website.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"You can also read the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/web-bluetooth/docs/index.html"},(0,r.kt)("strong",{parentName:"a"},"HTML source code"))," here, for more reference.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Connect your device named ",(0,r.kt)("inlineCode",{parentName:"li"},"Accelerator")," (Wio Terminal), and you should be able to see the Accelerator data on the Web Site!")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Web-Bluetooth/web-acc.gif"})),(0,r.kt)("p",null,"This means you can write a Web Bluetooth Interact Website with Wio Terminal!"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API"},(0,r.kt)("strong",{parentName:"a"},"Web Bluetooth APIs Specs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://googlechrome.github.io/samples/web-bluetooth/index.html"},(0,r.kt)("strong",{parentName:"a"},"Web Bluetooth APIs Examples"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://crbug.com/?q=component:Blink%3EBluetooth"},(0,r.kt)("strong",{parentName:"a"},"Implementation Bugs"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://webbluetoothcg.github.io/web-bluetooth"},(0,r.kt)("strong",{parentName:"a"},"Web Bluetooth Spec")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
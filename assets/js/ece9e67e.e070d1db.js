"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69724],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var i=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,l=function(e,t){if(null==e)return{};var n,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(n),m=l,c=d["".concat(p,".").concat(m)]||d[m]||k[m]||a;return n?i.createElement(c,o(o({ref:t},u),{},{components:n})):i.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r[d]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=n(87462),l=(n(67294),n(3905));const a={title:"Connecting to Blynk",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Blynk/",slug:"/Wio-Terminal-Blynk",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Connecting Wio Terminal to Blynk",r={unversionedId:"Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Wio-Terminal-Blynk",id:"Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Wio-Terminal-Blynk",title:"Connecting to Blynk",description:"This wiki introduces how to use the Wio Terminal with the Blynk software to interact with Wi-Fi or Bluetooth. This allows you to use Wio Terminal as the core of an IoT device and able to control hardware from phones very easily!",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Wio-Terminal-Blynk.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal",slug:"/Wio-Terminal-Blynk",permalink:"/custom/Wio-Terminal-Blynk",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Blynk_for_Wio_Terminal/Wio-Terminal-Blynk.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"Jan 10, 2022",frontMatter:{title:"Connecting to Blynk",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Blynk/",slug:"/Wio-Terminal-Blynk",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Edge Impulse on CodeCraft",permalink:"/custom/Edge_Impulse_CC"},next:{title:"WT OTA for Blynk",permalink:"/custom/Blynk-wireless-OTA-functionality-to-Wio-Terminal"}},p={},s=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Installing the blynk-library",id:"installing-the-blynk-library",level:3},{value:"Wi-Fi Dependencies",id:"wi-fi-dependencies",level:3},{value:"Bluetooth Dependencies",id:"bluetooth-dependencies",level:3},{value:"Blynk Mobile App Set-up",id:"blynk-mobile-app-set-up",level:2},{value:"Wi-Fi Examples",id:"wi-fi-examples",level:2},{value:"Simple Wi-Fi Connection",id:"simple-wi-fi-connection",level:3},{value:"Sending Temperature to Blynk",id:"sending-temperature-to-blynk",level:2},{value:"Bluetooth Examples",id:"bluetooth-examples",level:2},{value:"Simple Bluetooth Connection",id:"simple-bluetooth-connection",level:3},{value:"Controlling RGB Strips Using Blynk",id:"controlling-rgb-strips-using-blynk",level:3},{value:"Install the Adafruit_NeoPixel Library",id:"install-the-adafruit_neopixel-library",level:4},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"connecting-wio-terminal-to-blynk"},"Connecting Wio Terminal to Blynk"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/banner.gif"})),(0,l.kt)("p",null,"This wiki introduces how to use the Wio Terminal with the ",(0,l.kt)("a",{parentName:"p",href:"https://blynk.io/"},(0,l.kt)("strong",{parentName:"a"},"Blynk"))," software to interact with Wi-Fi or Bluetooth. This allows you to use Wio Terminal as the core of an IoT device and able to control hardware from phones very easily!"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"What is Blynk"))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blynk.io/"},(0,l.kt)("strong",{parentName:"a"},"Blynk"))," is a new platform that allows you to quickly build interfaces for controlling and monitoring your hardware projects from your iOS and Android device. After downloading the Blynk app, you can create a project dashboard and arrange buttons, sliders, graphs, and other widgets onto the screen"),(0,l.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,l.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Mobile Phone"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Download Blynk App from App Store")))),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("h3",{id:"installing-the-blynk-library"},"Installing the blynk-library"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Visit the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/blynkkk/blynk-library"},(0,l.kt)("strong",{parentName:"a"},"blynk-library"))," repositories and download the entire repo to your local drive.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,l.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,l.kt)("inlineCode",{parentName:"p"},"blynk-library")," file that you've have just downloaded."))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,l.kt)("h3",{id:"wi-fi-dependencies"},"Wi-Fi Dependencies"),(0,l.kt)("p",null,"For now, the Wi-Fi and Bluetooth are ",(0,l.kt)("strong",{parentName:"p"},"two separate firmware")," for Wio Terminal and ",(0,l.kt)("strong",{parentName:"p"},"therefore they CANNOT be used at the same time"),"."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Note: The new firmware of Wi-Fi and Bluetooth working together is under development and will be released very soon.")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Please follow the ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/"},"Wi-Fi Overview Wiki"))," to upload the Wi-Fi firmware to Wio Terminal.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Please also ",(0,l.kt)("strong",{parentName:"p"},"download and install all the dependent Wi-Fi Libraries"),"."))),(0,l.kt)("h3",{id:"bluetooth-dependencies"},"Bluetooth Dependencies"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Please follow the ",(0,l.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Bluetooth-Overview/"},(0,l.kt)("strong",{parentName:"a"},"Bluetooth Overview Wiki"))," to upload the Bluetooth firmware to Wio Terminal.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Please also ",(0,l.kt)("strong",{parentName:"p"},"download and install all the dependent Bluetooth Libraries"),"."))),(0,l.kt)("h2",{id:"blynk-mobile-app-set-up"},"Blynk Mobile App Set-up"),(0,l.kt)("p",null,"Once you have downloaded the Blynk App."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Open the App.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Click on the ",(0,l.kt)("strong",{parentName:"p"},"New Project"),":"))),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fill in your ",(0,l.kt)("strong",{parentName:"li"},"Project Name"),", choose ",(0,l.kt)("strong",{parentName:"li"},"Arduino UNO")," as device, and select ",(0,l.kt)("strong",{parentName:"li"},"WiFi")," or ",(0,l.kt)("strong",{parentName:"li"},"Bluetooth")," as your Connection Type. Then click on Create Project:")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/1.1.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Now, you will ",(0,l.kt)("strong",{parentName:"li"},"have a token sent to the email you registered with Blynk"),". This is needed in the Arduino Sketches later.")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/3.png"})),(0,l.kt)("h2",{id:"wi-fi-examples"},"Wi-Fi Examples"),(0,l.kt)("p",null,"These examples are using Wi-Fi to communicate between Wio Terminal and the Blynk App:"),(0,l.kt)("h3",{id:"simple-wi-fi-connection"},"Simple Wi-Fi Connection"),(0,l.kt)("p",null,"This example simply connects to a specific Wi-Fi then connects to the Blynk Server:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Replace the ",(0,l.kt)("strong",{parentName:"p"},"token")," that sent to your emails to ",(0,l.kt)("inlineCode",{parentName:"p"},"auth"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Replace your network's ",(0,l.kt)("inlineCode",{parentName:"p"},"SSID")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"Password"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Upload the sketch to Wio Terminal."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#define BLYNK_PRINT Serial\n\n#include <rpcWiFi.h>\n#include <WiFiClient.h>\n#include <BlynkSimpleWioTerminal.h>\n\n// You should get Auth Token in the Blynk App.\n// Go to the Project Settings (nut icon).\nchar auth[] = "YourToken";\n\n// Your WiFi credentials.\n// Set password to "" for open networks.\nchar ssid[] = "SSID";\nchar pass[] = "Password";\n\nvoid setup()\n{\n  // Debug console\n  Serial.begin(9600);\n\n  Blynk.begin(auth, ssid, pass);\n}\n\nvoid loop()\n{\n  Blynk.run();\n}\n')),(0,l.kt)("p",null,"Once uploaded, open the Blynk app from your phone and click the top right ",(0,l.kt)("inlineCode",{parentName:"p"},"play")," button to go live. You should be able to see that it is connected!"),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/wifi.png"})),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/4.png"})),(0,l.kt)("h2",{id:"sending-temperature-to-blynk"},"Sending Temperature to Blynk"),(0,l.kt)("p",null,"This example is an demonstrations of sending data from Wio Terminal to the Blynk server of which can then be viewed on the mobile app."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Replace WiFi credentials and token.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Temperature data are sent to ",(0,l.kt)("strong",{parentName:"p"},"Virtual Pin 0")," (",(0,l.kt)("inlineCode",{parentName:"p"},"V0"),").")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Upload to Wio Terminal."))),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"In this example, temperature values are randomly generated.\n"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#define BLYNK_PRINT Serial\n\n#include <rpcWiFi.h>\n#include <WiFiClient.h>\n#include <BlynkSimpleWioTerminal.h>\n\n// Your WiFi credentials.\nconst char* ssid = "SSID";\nconst char* pass = "Password";\n\n// You should get Auth Token in the Blynk App.\n// Go to the Project Settings (nut icon).\nchar auth[] = "YourToken";\n\nBlynkTimer timer;\n\nvoid sendTemperature() {\n  // Generate random temperature value 10.0 to 30.0 (for example)\n  float t = float(random(100, 300)) / 10;\n  // Format: 1 decimal place, add \u2103\n  String str = String(t, 1) + "\u2103";\n  // Send it to the server\n  Blynk.virtualWrite(V0, str);\n}\n\n\nvoid setup() {\n  // Debug console\n  Serial.begin(9600);\n\n  Blynk.begin(auth, ssid, pass);\n  timer.setInterval(1000L, sendTemperature);\n}\n\nvoid loop() {\n  Blynk.run();\n  timer.run();\n}\n')),(0,l.kt)("p",null,"Now open the Blynk App from your mobile phones again."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Swipe left to get the Widget Box out and select ",(0,l.kt)("strong",{parentName:"li"},"Value Display"),":")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-1.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the button and configure the button to assign to ",(0,l.kt)("strong",{parentName:"li"},"Virtual Pin 0"),":")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-3.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Save the configurations and click top right play button to go live! And you can see the temperature values on your phone.")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/step-4.png"})),(0,l.kt)("h2",{id:"bluetooth-examples"},"Bluetooth Examples"),(0,l.kt)("p",null,"These examples are using Bluetooth to communicate between Wio Terminal and the Blynk App:"),(0,l.kt)("h3",{id:"simple-bluetooth-connection"},"Simple Bluetooth Connection"),(0,l.kt)("p",null,"This is the simple example of using Wio Terminal's Bluetooth to connect with Mobile Phone Bluetooth:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Replace your token for ",(0,l.kt)("inlineCode",{parentName:"p"},"auth"),".")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Upload to Wio Terminal."))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#define BLYNK_PRINT Serial\n#define BLYNK_USE_DIRECT_CONNECT\n\n#include <BlynkSimpleWioTerminal_BLE.h>\n#include <BLEDevice.h>\n#include <BLEServer.h>\n\n// You should get Auth Token in the Blynk App.\n// Go to the Project Settings (nut icon).\nchar auth[] = "YourToken";\n\nvoid setup()\n{\n  // Debug console\n  Serial.begin(9600);\n  Serial.println("Waiting for connections...");\n  Blynk.setDeviceName("Blynk");\n  Blynk.begin(auth);\n}\n\nvoid loop()\n{\n  Blynk.run();\n}\n')),(0,l.kt)("p",null,"Now open the Blynk app and configure as follow:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Swipe left to have the Widget Box and scroll down to find ",(0,l.kt)("strong",{parentName:"li"},"BLE")," widget:")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-1.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the ",(0,l.kt)("strong",{parentName:"li"},"BLE widget")," and select connect with a BLE device named ",(0,l.kt)("inlineCode",{parentName:"li"},"Blynk"),":")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-3.jpg"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Once BLE is connected, click the play button to go live!")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/ble-4.jpg"})),(0,l.kt)("p",null,"Now, Wio Terminal is connected with Blynk using Bluetooth!"),(0,l.kt)("h3",{id:"controlling-rgb-strips-using-blynk"},"Controlling RGB Strips Using Blynk"),(0,l.kt)("p",null,"This example connects a RGB strip to Wio Terminal and uses the Blynk to control the color to display!"),(0,l.kt)("div",{align:"center"},(0,l.kt)("video",{width:560,height:315,controls:!0},(0,l.kt)("source",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/RGB.mp4",type:"video/mp4"}))),(0,l.kt)("h4",{id:"install-the-adafruit_neopixel-library"},"Install the Adafruit_NeoPixel Library"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Visit the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_NeoPixel"},"Adafruit_NeoPixel")," repositories and download the entire repo to your local drive.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,l.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,l.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,l.kt)("inlineCode",{parentName:"p"},"Adafruit_NeoPixel")," file that you've have just downloaded."))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Configure the ",(0,l.kt)("inlineCode",{parentName:"li"},"PIN")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NUMPIXELS")," according to your environment."),(0,l.kt)("li",{parentName:"ul"},"The RGB values are read from the Blynk App and assign to ",(0,l.kt)("strong",{parentName:"li"},"Virtual Pin 2(V2)"),"."),(0,l.kt)("li",{parentName:"ul"},"Upload to Wio Terminal.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'#define BLYNK_PRINT Serial\n#define BLYNK_USE_DIRECT_CONNECT\n\n#include <BlynkSimpleWioTerminal_BLE.h>\n#include <BLEDevice.h>\n#include <BLEServer.h>\n#include <Adafruit_NeoPixel.h>\n\n#include <TFT_eSPI.h> // Hardware-specific library\nTFT_eSPI tft = TFT_eSPI();       // Invoke custom library\n\n#define PIN 0\n#define NUMPIXELS 20\n#define BLYNK_PRINT Serial\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\n// You should get Auth Token in the Blynk App.\n// Go to the Project Settings (nut icon).\nchar auth[] = "YourToken";\n\nBLYNK_WRITE(V2)\n{\n  int R = param[0].asInt();\n  int G = param[1].asInt();\n  int B = param[2].asInt();\n  tft.fillScreen(tft.color565(R, G, B));\n  for (int i = 0; i < NUMPIXELS; i++) {\n    pixels.setPixelColor(i, pixels.Color(R, G, B));\n    pixels.show();\n  }\n}\n\nvoid setup() {\n  // Debug console\n  Serial.begin(9600);\n  Serial.println("Waiting for connections...");\n  Blynk.setDeviceName("Blynk");\n\n  Blynk.begin(auth);\n  \n  tft.begin();\n  tft.fillScreen(TFT_BLACK);\n  pixels.begin();\n}\n\nvoid loop() {\n  Blynk.run();\n}\n')),(0,l.kt)("p",null,"Open the Blynk App, and configure as follow:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Swipe left to have the Widget Box and scroll down to find ",(0,l.kt)("strong",{parentName:"li"},"zeRGBa")," widget:")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-1.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Click on the zeRGBa widget and configure as follow. Sets to ",(0,l.kt)("strong",{parentName:"li"},"Merge")," Output and assign to ",(0,l.kt)("strong",{parentName:"li"},"Virtual Pin 2 (V2)")," and  set values goes from ",(0,l.kt)("strong",{parentName:"li"},"0 to 255"),".")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-2.png"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make sure that the BLE widget is connected first and click Play button to go live! You can simply change the RGB color of LED strip by dragging the color on the Blynk.")),(0,l.kt)("div",{align:"center"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Blynk/rgb-result.png"})),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,l.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,l.kt)("div",null,(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
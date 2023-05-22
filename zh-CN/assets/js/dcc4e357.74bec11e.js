"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),x=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=x(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=x(n),u=r,c=d["".concat(s,".").concat(u)]||d[u]||h[u]||a;return n?i.createElement(c,o(o({ref:t},p),{},{components:n})):i.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var x=2;x<a;x++)o[x]=n[x];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>x});var i=n(87462),r=(n(67294),n(3905));const a={description:"Grove Port",title:"Grove Port",keywords:["Wio_terminal Hardware_Overview","Input&Output"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Grove",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Grove Port",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-Grove",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-Grove",title:"Grove Port",description:"Grove Port",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-Grove.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-Grove",permalink:"/custom/zh-CN/Wio-Terminal-Grove",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-Grove.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Grove Port",title:"Grove Port",keywords:["Wio_terminal Hardware_Overview","Input&Output"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Grove",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"SPI",permalink:"/custom/zh-CN/Wio-Terminal-IO-SPI"},next:{title:"Overview",permalink:"/custom/zh-CN/Wio-Terminal-IMU-Overview"}},s={},x=[{value:"Wio Terminal With Grove - TDS Sensor",id:"wio-terminal-with-grove---tds-sensor",level:2},{value:"Libraries Installation",id:"libraries-installation",level:3},{value:"Complete Code",id:"complete-code",level:3},{value:"Wio Terminal With Grove - OLED Display",id:"wio-terminal-with-grove---oled-display",level:2},{value:"Libraries Installation",id:"libraries-installation-1",level:3},{value:"U8g2 Initilization",id:"u8g2-initilization",level:3},{value:"Usage",id:"usage",level:4},{value:"Complete Code",id:"complete-code-1",level:3},{value:"Wio Terminal With Grove - Temperature Sensor",id:"wio-terminal-with-grove---temperature-sensor",level:2},{value:"Libraries Installation",id:"libraries-installation-2",level:3},{value:"Complete Code",id:"complete-code-2",level:3},{value:"Wio Terminal With Grove - GPS Sensor",id:"wio-terminal-with-grove---gps-sensor",level:2},{value:"Libraries Installation",id:"libraries-installation-3",level:3},{value:"Complete Code",id:"complete-code-3",level:3}],p={toc:x};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"grove-port"},"Grove Port"),(0,r.kt)("p",null,"This repo introduces how to use Wio Terminal with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove.html"},(0,r.kt)("strong",{parentName:"a"},"Grove Ecosystem")),"."),(0,r.kt)("p",null,"With the help of Grove, you are able prototype much quicker with simpler connections!"),(0,r.kt)("h2",{id:"wio-terminal-with-grove---tds-sensor"},"Wio Terminal With Grove - TDS Sensor"),(0,r.kt)("p",null,"This section introduces how to use ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-TDS-Sensor/"},"Grove - TDS Sensor")," with Wio Terminal to display real time TDS readings on a line chart!"),(0,r.kt)("h3",{id:"libraries-installation"},"Libraries Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"LCD")," library.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Linechart")," library."))),(0,r.kt)("h3",{id:"complete-code"},"Complete Code"),(0,r.kt)("p",null,"Connect the Grove TDS sensor to the Grove D/A Pin of Wio Terminal, upload the code and check the results!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"seeed_line_chart.h" //include the library\nTFT_eSPI tft;\n\n#define max_size 50 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\n#define sensorPin A0 //Analog pin\n\nint sensorValue = 0;\nfloat tdsValue = 0;\nfloat Voltage = 0;\n\nvoid setup() {\n    pinMode(sensorPin, INPUT);\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_WHITE);\n\n    sensorValue = analogRead(sensorPin);\n    Voltage = sensorValue*5/1024.0; //Convert analog reading to Voltage\n    tdsValue=(133.42*Voltage*Voltage*Voltage - 255.86*Voltage*Voltage + 857.39*Voltage)*0.5; //Convert voltage value to TDS value\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(tdsValue); //read variables and store in data\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("TDS Reading")\n                .align(center)\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(3);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(true) //drawing a cirle at each point, default is on.\n                .value(data) //passing through the data to line graph\n                .color(TFT_RED) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n    delay(50);\n}\n')),(0,r.kt)("h2",{id:"wio-terminal-with-grove---oled-display"},"Wio Terminal With Grove - OLED Display"),(0,r.kt)("p",null,"If you required a second screen to display with Wio Terminal, ",(0,r.kt)("strong",{parentName:"p"},'Grove - OLED Dispaly 0.96"')," will be the perfect choice. It can be used to display graphics and data, adding more interactive features with Wio Terminal."),(0,r.kt)("h3",{id:"libraries-installation-1"},"Libraries Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("strong",{parentName:"li"},"U8g2")," libraries from the ",(0,r.kt)("strong",{parentName:"li"},"Library Manager")," in Arduino IDE. Navigate to ",(0,r.kt)("strong",{parentName:"li"},"Sketch")," -> ",(0,r.kt)("strong",{parentName:"li"},"Include Library")," -> ",(0,r.kt)("strong",{parentName:"li"},"Manage Libraries"),"... and Search and install  ",(0,r.kt)("inlineCode",{parentName:"li"},"U8g2")," in the Library Manager.")),(0,r.kt)("h3",{id:"u8g2-initilization"},"U8g2 Initilization"),(0,r.kt)("p",null,"Initialuse the OLED display using u8g2's software I2C and use SCL for clock and SDA for Data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"U8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n")),(0,r.kt)("h4",{id:"usage"},"Usage"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call u8g2.firstPage().")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start a do-while loop.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Inside the loop-body: Draw something with the usual draw commands.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Loop as long as u8g2.nextPage() returns true."))),(0,r.kt)("p",null,"For more information, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/olikraus/u8g2/wiki"},"u8g2")),(0,r.kt)("h3",{id:"complete-code-1"},"Complete Code"),(0,r.kt)("p",null,'Connect the Grove OLED Display 0.96" to the Grove I2C pin and check the results!'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <U8g2lib.h>\n\nU8G2_SSD1306_128X64_NONAME_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n\nconst unsigned char WAVE[] PROGMEM = {\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,\n  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,\n  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,\n  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,\n  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,\n  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0xE0,0x00,0x7E,0x00,0x07,0xE0,0x00,\n  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,\n  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,\n  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,\n  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,\n  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,\n  0x01,0xF8,0x00,0x1F,0x80,0x01,0xC0,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,\n  0xF8,0x01,0xFF,0x80,0x1F,0xF8,0x00,\n  0xFE,0x07,0xFF,0xE0,0x7F,0xFE,0x00,\n  0x3F,0xFF,0xC3,0xFF,0xFC,0x3F,0xC0,\n  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,\n  0x07,0xFE,0x00,0x7F,0xE0,0x07,0xC0,\n  0x00,0xF0,0x00,0x0F,0x00,0x00,0xC0,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x80,0x00,0x18,0x00,0x01,0x80,0x00,\n  0xF0,0x00,0xFF,0x00,0x0F,0xF0,0x00,\n  0xFC,0x03,0xFF,0xC0,0x3F,0xFC,0x00,\n  0xFF,0x0F,0xFF,0xF0,0xFF,0xFF,0x00,\n  0x1F,0xFF,0x81,0xFF,0xF8,0x1F,0xC0,\n  0x0F,0xFF,0x00,0xFF,0xF0,0x0F,0xC0,\n  0x03,0xFC,0x00,0x3F,0xC0,0x03,0xC0,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00,\n  0x00,0x00,0x00,0x00,0x00,0x00,0x00\n};\n\nvoid setup() {\n  u8g2.begin();\n}\n\nvoid loop() {\n  u8g2.firstPage();\n    do {\n      u8g2.setFont(u8g2_font_t0_16b_mr);\n      u8g2.drawXBMP(40, 0, 50, 50, WAVE);\n      u8g2.setCursor(20, 60);\n      u8g2.print("Wio Terminal");\n    } while (u8g2.nextPage());\n}\n')),(0,r.kt)("h2",{id:"wio-terminal-with-grove---temperature-sensor"},"Wio Terminal With Grove - Temperature Sensor"),(0,r.kt)("p",null,"This section introduces how to use ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Temperature_Sensor_V1.2/"},"Grove - Temperature Sensor")," with Wio Terminal to display real-time surrounding temperature readings."),(0,r.kt)("h3",{id:"libraries-installation-2"},"Libraries Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"LCD")," library.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Histogram/"},"Linechart")," library."))),(0,r.kt)("h3",{id:"complete-code-2"},"Complete Code"),(0,r.kt)("p",null,"Connect the Grove Temperature sensor to the Grove D/A Pin of Wio Terminal, upload the code and check the results!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"seeed_line_chart.h" //include the library\n#include <math.h>\n\nTFT_eSPI tft;\n\n#define max_size 50 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\nconst int B = 4275;               // B value of the thermistor\nconst int R0 = 100000;            // R0 = 100k\nconst int pinTempSensor = A0;     // Grove - Temperature Sensor connect to A0\n\nvoid setup() {\n    pinMode(pinTempSensor, INPUT);\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_DARKCYAN);\n\n    int a = analogRead(pinTempSensor);\n    float R = 1023.0/a-1.0;\n    R = R0*R;\n\n    float temperature = 1.0/(log(R/R0)/B+1/298.15)-273.15; // convert to temperature via datasheet\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(temperature); //read variables and store in data\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("Temperature Reading")\n                .align(center)\n                .color(TFT_WHITE)\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(2);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(true) //drawing a cirle at each point, default is on.\n                .y_role_color(TFT_WHITE)\n                .x_role_color(TFT_WHITE)\n                .value(data) //passing through the data to line graph\n                .color(TFT_RED) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n    delay(50);\n}\n')),(0,r.kt)("h2",{id:"wio-terminal-with-grove---gps-sensor"},"Wio Terminal With Grove - GPS Sensor"),(0,r.kt)("p",null,"This section introduces how to use Grove - GPS Sensor with Wio Terminal for obtaining real-time GPS information. The sensor itself outputs NMEA GPS data which we will use the TinyGPSPlus library to parse the data to readable information."),(0,r.kt)("h3",{id:"libraries-installation-3"},"Libraries Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Install the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/mikalhart/TinyGPSPlus"},"TinyGPSPlus Library"),".")),(0,r.kt)("h3",{id:"complete-code-3"},"Complete Code"),(0,r.kt)("p",null,"Connect the Grove GPS Sensor to the Grove I2C Pin (Left Side) of Wio Terminal, upload the code and check the results in Serial Monitor(w/ baud rate: 9600)!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <TinyGPS++.h>\n#include <wiring_private.h>\n\nstatic const uint32_t GPSBaud = 9600;\n\n// The TinyGPS++ object\nTinyGPSPlus gps;\n\n// The serial connection to the GPS device - Left side Grove connector.\n// Left side Grove connector shares pins with I2C1 of 40 pin connector.\nstatic Uart Serial3(&sercom3, PIN_WIRE_SCL, PIN_WIRE_SDA, SERCOM_RX_PAD_1, UART_TX_PAD_0);\n\nvoid setup()\n{\n  Serial.begin(115200);\n\n  Serial3.begin(GPSBaud);\n  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);\n  pinPeripheral(PIN_WIRE_SCL, PIO_SERCOM_ALT);\n}\n \nvoid loop()\n{\n  // This sketch displays information every time a new sentence is correctly encoded.\n  while (Serial3.available() > 0)\n    if (gps.encode(Serial3.read()))\n      displayInfo();\n \n  if (millis() > 5000 && gps.charsProcessed() < 10)\n  {\n    Serial.println(F("No GPS detected: check wiring."));\n    while(true);\n  }\n}\n\nvoid displayInfo()\n{\n  Serial.print(F("Location: ")); \n  if (gps.location.isValid())\n  {\n    Serial.print(gps.location.lat(), 6);\n    Serial.print(F(","));\n    Serial.print(gps.location.lng(), 6);\n  }\n  else\n  {\n    Serial.print(F("INVALID"));\n  }\n\n  Serial.print(F("  Date/Time: "));\n  if (gps.date.isValid())\n  {\n    Serial.print(gps.date.month());\n    Serial.print(F("/"));\n    Serial.print(gps.date.day());\n    Serial.print(F("/"));\n    Serial.print(gps.date.year());\n  }\n  else\n  {\n    Serial.print(F("INVALID"));\n  }\n\n  Serial.print(F(" "));\n  if (gps.time.isValid())\n  {\n    if (gps.time.hour() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.hour());\n    Serial.print(F(":"));\n    if (gps.time.minute() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.minute());\n    Serial.print(F(":"));\n    if (gps.time.second() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.second());\n    Serial.print(F("."));\n    if (gps.time.centisecond() < 10) Serial.print(F("0"));\n    Serial.print(gps.time.centisecond());\n  }\n  else\n  {\n    Serial.print(F("INVALID"));\n  }\n\n  Serial.println();\n}\n\nvoid SERCOM3_0_Handler()\n{\n  Serial3.IrqHandler();\n}\nvoid SERCOM3_1_Handler()\n{\n  Serial3.IrqHandler();\n}\nvoid SERCOM3_2_Handler()\n{\n  Serial3.IrqHandler();\n}\nvoid SERCOM3_3_Handler()\n{\n  Serial3.IrqHandler();\n}\n')))}d.isMDXComponent=!0}}]);
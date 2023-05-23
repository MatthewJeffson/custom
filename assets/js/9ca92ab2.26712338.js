"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4769],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>_});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,_=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(_,l(l({ref:t},p),{},{components:r})):n.createElement(_,l({ref:t},p))}));function _(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86600:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",title:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR",last_update:{date:"1/5/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR",title:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",description:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR",permalink:"/custom/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",title:"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3-Axis Analog Accelerometer 20g (ADXL356B)",permalink:"/custom/Grove-3-Axis_Analog_Accelerometer_20g-ADXL356B"},next:{title:"Grove - 3-Axis Analog Accelerometer 40g (ADXL356C)",permalink:"/custom/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Seeeduino XIAO based on Grove I2C interface",id:"play-with-seeeduino-xiao-based-on-grove-i2c-interface",level:3},{value:"Materials Required",id:"materials-required",level:4},{value:"Hardware connection",id:"hardware-connection",level:4},{value:"Software Code",id:"software-code",level:4},{value:"Play with Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"Materials Required",id:"materials-required-1",level:4},{value:"Hardware Connection",id:"hardware-connection-1",level:4},{value:"Code",id:"code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114020121/img/114020121wiki.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Grove - 3-Axis Digital Accelerometer(LIS3DHTR) is a low-cost 3 - Axis accelerometer in a bundle of Grove products. It is based on the LIS3DHTR chip which provides multiple ranges and interfaces selection. You can never believe that such a tiny 3 - Axis accelerometer can support I2C, SPI, and ADC GPIO interfaces, which means you can choose any way to connect with your development board. Besides, this accelerometer can also monitor the surrounding temperature to tune the error caused by it.  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html"},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Measurement range: \xb12g, \xb14g, \xb18g, \xb116g, multiple ranges selection."),(0,a.kt)("li",{parentName:"ul"},"Multiple interfaces option: Grove I2C interface, SPI interface, ADC interface."),(0,a.kt)("li",{parentName:"ul"},"Temperature adjustable: able to adjust and tune the error caused by temperature."),(0,a.kt)("li",{parentName:"ul"},"3/5V power supply.")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Item"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Power Supply"),(0,a.kt)("td",{parentName:"tr",align:null},"3/5V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interfaces"),(0,a.kt)("td",{parentName:"tr",align:null},"I2C/SPI/GPIO ADC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"I2C address"),(0,a.kt)("td",{parentName:"tr",align:null},"Default 0x19, can be changed to 0x18 when connecting SDO Pin with GND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ADC GPIO Power input"),(0,a.kt)("td",{parentName:"tr",align:null},"0-3.3V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interruption"),(0,a.kt)("td",{parentName:"tr",align:null},"An interruption Pin reserved")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SPI Mode set up"),(0,a.kt)("td",{parentName:"tr",align:null},"Connect the CS Pin with GND")))),(0,a.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"play-with-seeeduino-xiao-based-on-grove-i2c-interface"},"Play with Seeeduino XIAO based on Grove I2C interface"),(0,a.kt)("h4",{id:"materials-required"},"Materials Required"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino XIAO"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Breadboard"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg",alt:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Breadboard-p-4034.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html"},"Get one now"))))),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware connection"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114020121/img/wiki_hardware_connection.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Connect the Grove - 3-Axis Digital Accelerometer (LIS3DHTR) with Seeeduino XIAO's I2C interface."),(0,a.kt)("h4",{id:"software-code"},"Software Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'// This example use I2C.\n#include "LIS3DHTR.h"\n#include <Wire.h>\nLIS3DHTR<TwoWire> LIS; //IIC\n#define WIRE Wire\n\nvoid setup()\n{\n  Serial.begin(115200);\n  while (!Serial)\n  {\n  };\n  LIS.begin(WIRE,0x19); //IIC init\n  //LIS.begin(0x19);\n  LIS.openTemp();  //If ADC3 is used, the temperature detection needs to be turned off.\n  //  LIS.closeTemp();//default\n  delay(100);\n    LIS.setFullScaleRange(LIS3DHTR_RANGE_2G);\n  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_4G);\n  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_8G);\n  //  LIS.setFullScaleRange(LIS3DHTR_RANGE_16G);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1HZ);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_10HZ);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);\n  LIS.setOutputDataRate(LIS3DHTR_DATARATE_50HZ);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_100HZ);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_200HZ);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_1_6KHZ);\n  //  LIS.setOutputDataRate(LIS3DHTR_DATARATE_5KHZ);\n}\nvoid loop()\n{\n  if (!LIS)\n  {\n    Serial.println("LIS3DHTR didn\'t connect.");\n    while (1)\n      ;\n    return;\n  }\n  //3 axis\n    Serial.print("x:"); Serial.print(LIS.getAccelerationX()); Serial.print("  ");\n    Serial.print("y:"); Serial.print(LIS.getAccelerationY()); Serial.print("  ");\n    Serial.print("z:"); Serial.println(LIS.getAccelerationZ());\n  //ADC\n  //    Serial.print("adc1:"); Serial.println(LIS.readbitADC1());\n  //    Serial.print("adc2:"); Serial.println(LIS.readbitADC2());\n  //    Serial.print("adc3:"); Serial.println(LIS.readbitADC3());\n\n  //temperature\n  Serial.print("temp:");\n  Serial.println(LIS.getTemperature());\n  delay(500); \n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1")," Download the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip"},"library"),' from Github and add the "zip" library to your Arduino IDE. Please refer to ',(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install an Arduino Library"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2"),' Find the example code of "LIS3DHTR_IIC" and upload it to your board. Please refer to ',(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," After uploading the code, you will see the accelerated velocity of each axis and temperature of surrounding from the serial monitor."))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114020121/img/wiki_result.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h3",{id:"play-with-raspberry-pi"},"Play with Raspberry Pi"),(0,a.kt)("h4",{id:"materials-required-1"},"Materials Required"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4B(4GB)"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("p",null,(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114020121/img/114020121wikithumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR-p-4533.html"},"Get one now"))))),(0,a.kt)("h4",{id:"hardware-connection-1"},"Hardware Connection"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114020121/img/Hardware_connection_raspberry_pi_demo.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"Connect the LIS3DHTR sensor to any I2C interface on the Grove Base Hat for Raspberry Pi."),(0,a.kt)("h4",{id:"code"},"Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/bin/env python\n\n# Distributed with a free-will license.\n# Use it any way you want, profit or free, provided it fits in the licenses of its associated works.\n# LIS3DHTR\n# This code is designed to work with the LIS3DHTR_I2CS I2C Mini Module available from ControlEverything.com.\n# https://www.controleverything.com/content/Accelorometer?sku=LIS3DHTR_I2CS#tabs-0-product_tabset-2\n\nimport smbus\nimport time\n\n# Get I2C bus\nbus = smbus.SMBus(1)\n\n# I2C address of the device\nLIS3DHTR_DEFAULT_ADDRESS   = 0x19\n\n# LIS3DHTR Register Map\nLIS3DHTR_REG_WHOAMI     = 0x0F # Who Am I Register\nLIS3DHTR_REG_CTRL1     = 0x20 # Control Register-1\nLIS3DHTR_REG_CTRL2     = 0x21 # Control Register-2\nLIS3DHTR_REG_CTRL3     = 0x22 # Control Register-3\nLIS3DHTR_REG_CTRL4     = 0x23 # Control Register-4\nLIS3DHTR_REG_CTRL5     = 0x24 # Control Register-5\nLIS3DHTR_REG_CTRL6     = 0x25 # Control Register-6\nLIS3DHTR_REG_REFERENCE    = 0x26 # Reference\nLIS3DHTR_REG_STATUS     = 0x27 # Status Register\nLIS3DHTR_REG_OUT_X_L    = 0x28 # X-Axis LSB\nLIS3DHTR_REG_OUT_X_H    = 0x29 # X-Axis MSB\nLIS3DHTR_REG_OUT_Y_L    = 0x2A # Y-Axis LSB\nLIS3DHTR_REG_OUT_Y_H    = 0x2B # Y-Axis MSB\nLIS3DHTR_REG_OUT_Z_L    = 0x2C # Z-Axis LSB\nLIS3DHTR_REG_OUT_Z_H    = 0x2D # Z-Axis MSB\n\n# Accl Datarate configuration\nLIS3DHTR_ACCL_DR_PD     = 0x00 # Power down mode\nLIS3DHTR_ACCL_DR_1     = 0x10 # ODR = 1 Hz\nLIS3DHTR_ACCL_DR_10     = 0x20 # ODR = 10 Hz\nLIS3DHTR_ACCL_DR_25     = 0x30 # ODR = 25 Hz\nLIS3DHTR_ACCL_DR_50     = 0x40 # ODR = 50 Hz\nLIS3DHTR_ACCL_DR_100    = 0x50 # ODR = 100 Hz\nLIS3DHTR_ACCL_DR_200    = 0x60 # ODR = 200 Hz\nLIS3DHTR_ACCL_DR_400    = 0x70 # ODR = 400 Hz\nLIS3DHTR_ACCL_DR_1620    = 0x80 # ODR = 1.620 KHz\nLIS3DHTR_ACCL_DR_1344    = 0x90 # ODR = 1.344 KHz\n\n# Accl Data update & Axis configuration\nLIS3DHTR_ACCL_LPEN     = 0x00 # Normal Mode, Axis disabled\nLIS3DHTR_ACCL_XAXIS     = 0x04 # X-Axis enabled\nLIS3DHTR_ACCL_YAXIS     = 0x02 # Y-Axis enabled\nLIS3DHTR_ACCL_ZAXIS     = 0x01 # Z-Axis enabled\n\n# Acceleration Full-scale selection\nLIS3DHTR_BDU_CONT     = 0x00 # Continuous update, Normal Mode, 4-Wire Interface\nLIS3DHTR_BDU_NOT_CONT    = 0x80 # Output registers not updated until MSB and LSB reading\nLIS3DHTR_ACCL_BLE_MSB    = 0x40 # MSB first\nLIS3DHTR_ACCL_RANGE_16G    = 0x30 # Full scale = +/-16g\nLIS3DHTR_ACCL_RANGE_8G    = 0x20 # Full scale = +/-8g\nLIS3DHTR_ACCL_RANGE_4G    = 0x10 # Full scale = +/-4g\nLIS3DHTR_ACCL_RANGE_2G    = 0x00 # Full scale = +/-2g, LSB first\nLIS3DHTR_HR_DS      = 0x00 # High-Resolution Disabled\nLIS3DHTR_HR_EN      = 0x08 # High-Resolution Enabled\nLIS3DHTR_ST_0      = 0x02 # Self Test 0\nLIS3DHTR_ST_1      = 0x04 # Self Test 1\nLIS3DHTR_SIM_3      = 0x01 # 3-Wire Interface\n\n\nclass LIS3DHTR():\n def __init__ (self):\n  self.select_datarate()\n  self.select_data_config()\n \n def select_datarate(self):\n\n  DATARATE_CONFIG = (LIS3DHTR_ACCL_DR_10 | LIS3DHTR_ACCL_XAXIS | LIS3DHTR_ACCL_YAXIS | LIS3DHTR_ACCL_ZAXIS)\n  bus.write_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_CTRL1, DATARATE_CONFIG)\n \n def select_data_config(self):\n  DATA_CONFIG = (LIS3DHTR_ACCL_RANGE_2G | LIS3DHTR_BDU_CONT | LIS3DHTR_HR_DS)\n  bus.write_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_CTRL4, DATA_CONFIG)\n \n def read_accl(self):\n  data0 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_X_L)\n  data1 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_X_H)\n  \n  xAccl = data1 * 256 + data0\n  if xAccl > 32767 :\n   xAccl -= 65536\n  xAccl /= 16000\n\n  data0 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Y_L)\n  data1 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Y_H)\n  \n  yAccl = data1 * 256 + data0\n  if yAccl > 32767 :\n   yAccl -= 65536\n  yAccl /= 16000\n\n  data0 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Z_L)\n  data1 = bus.read_byte_data(LIS3DHTR_DEFAULT_ADDRESS, LIS3DHTR_REG_OUT_Z_H)\n  \n  zAccl = data1 * 256 + data0\n  if zAccl > 32767 :\n   zAccl -= 65536\n  zAccl /= 16000\n  return {'x' : xAccl, 'y' : yAccl, 'z' : zAccl}\n\nfrom LIS3DHTR import LIS3DHTR\nlis3dhtr = LIS3DHTR()\n\nwhile True:\n lis3dhtr.select_datarate()\n lis3dhtr.select_data_config()\n time.sleep(0.1)\n accl = lis3dhtr.read_accl()\n print (\"Acceleration in X-Axis : %d\" %(accl['x']))\n print (\"Acceleration in Y-Axis : %d\" %(accl['y']))\n print (\"Acceleration in Z-Axis : %d\" %(accl['z']))\n print (\" ************************************ \")\n time.sleep(1)\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1")," Create a python file.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo nano LIS3DHTR.py\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," Copy the above code to the python file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," Run the python."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo python LIS3DHTR.py\n")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/products/114020121/img/python_result.png",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_190910.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/114020121/document/lis3dh.pdf"},"LIS3DHTR_DATASHEET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/114020121/document/Grove-3-Axis-Digital-Accelerometer-LIS3DHTR_v1.0_SCH_190910.pdf"},"Hardware schematic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZiP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/archive/master.zip"},"Grove - 3-Axis Digital Accelerometer (LIS3DHTR) Library"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[72208],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),u=n,g=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(g,l(l({ref:t},c),{},{components:a})):r.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},10745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",title:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372",last_update:{date:"1/6/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372",title:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",description:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372",permalink:"/custom/zh-CN/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",title:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",permalink:"/custom/zh-CN/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357"},next:{title:"Grove - 3-Axis Digital Gyro",permalink:"/custom/zh-CN/Grove-3-Axis_Digital_Gyro"}},s={},p=[{value:"Features",id:"features",level:2},{value:"APPLICATIONS",id:"applications",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Specification",id:"specification",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/101020632-preview.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"You can find a variety of ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/accelerometer.html"},"3-axis accelerometers")," on our website that can meet different scenarios and needs. This time, we bring you the industrial grade, high stability, high precision and low power ADI ADXL series three-axis accelerometers.  "),(0,n.kt)("p",null,"The Grove - 3-Axis Digital Accelerometer \xb1200g (ADXL372) is a ultralow power digital output ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/MEMS.html"},"MEMS"),"  Accelerometer, it can provide a 12-bit output at 100 mg/LSB scale factor. The most notable feature of this sensor is its ultra-low power consumption(only 22\u03bcA in measurment mode) and large measurement range(\xb1200g). All the data output via the Grove I2C port, the I2C address is changeable. In order to meet a wider range of measurement needs, the sampling rate can be selected from 400Hz/800Hz/1600Hz/3200Hz/6400Hz, and the bandwidth can be selected from 200Hz/400Hz/800Hz/1600Hz/3200Hz. In addition to being used as an acceleration measurement, you can also use this module to do impact and shock detection."),(0,n.kt)("p",null,"The ADI ADXL Series Accelerometer includes four products that will meet your different range and output needs:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product"),(0,n.kt)("th",{parentName:"tr",align:null},"Measurement Range"),(0,n.kt)("th",{parentName:"tr",align:null},"Output Port"),(0,n.kt)("th",{parentName:"tr",align:null},"Power Consumption"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html"},"Grove - 3-Axis Analog Accelerometer \xb120g (ADXL356B)")),(0,n.kt)("td",{parentName:"tr",align:null},"\xb110 / \xb120g"),(0,n.kt)("td",{parentName:"tr",align:null},"Analog"),(0,n.kt)("td",{parentName:"tr",align:null},"measurement mode:150 \u03bcA / standby mode:21 \u03bcA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html"},"Grove - 3-Axis Analog Accelerometer \xb140g (ADXL356C)")),(0,n.kt)("td",{parentName:"tr",align:null},"\xb110g / \xb140g"),(0,n.kt)("td",{parentName:"tr",align:null},"Analog"),(0,n.kt)("td",{parentName:"tr",align:null},"measurement mode:150 \u03bcA / standby mode:21 \u03bcA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html"},"Grove - 3-Axis Digital Accelerometer \xb140g (ADXL357)")),(0,n.kt)("td",{parentName:"tr",align:null},"\xb110g@51200 LSB/g / \xb120g@25600 LSB/g / \xb140g@12800 LSB/g"),(0,n.kt)("td",{parentName:"tr",align:null},"Digital I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"measurement mode:200\u03bcA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html"},"Grove - 3-Axis Digital Accelerometer \xb1200g (ADXL372)")),(0,n.kt)("td",{parentName:"tr",align:null},"\xb1200g"),(0,n.kt)("td",{parentName:"tr",align:null},"Digital I2C"),(0,n.kt)("td",{parentName:"tr",align:null},"measurement mode:22\u03bcA")))),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Large measuring range: \xb1200g"),(0,n.kt)("li",{parentName:"ul"},"Ultralow power consumption: 22 \u03bcA at 3200 Hz ODR"),(0,n.kt)("li",{parentName:"ul"},"Selectable oversampling ratio and bandwidth"),(0,n.kt)("li",{parentName:"ul"},"Deep embedded FIFO to minimize host processor load"),(0,n.kt)("li",{parentName:"ul"},"Build-in 12-bit analog-to-digital converter (ADC)")),(0,n.kt)("h2",{id:"applications"},"APPLICATIONS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Portable Internet of Things (IoT) edge nodes"),(0,n.kt)("li",{parentName:"ul"},"Concussion and head trauma detection"),(0,n.kt)("li",{parentName:"ul"},"Impact and shock detection"),(0,n.kt)("li",{parentName:"ul"},"Asset health assessment")),(0,n.kt)("h2",{id:"pinout"},"Pinout"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/pinout2.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating ambient temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-40 \u2013 125\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sensitivity at X",(0,n.kt)("sub",null,"OUT"),", Y",(0,n.kt)("sub",null,"OUT"),", Z",(0,n.kt)("sub",null,"OUT")," / (Ratiometric to V",(0,n.kt)("sub",null,"1P8ANA)")),(0,n.kt)("td",{parentName:"tr",align:null},"\xb150mg/\xb0C(Nowmal Operation.) / \xb135mg/\xb0C(Low Noise Mode.)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sensitivity Change due to Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb10.01%/\xb0C  (TA = \u221240\xb0C to +125\xb0C)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"0g OFFSET"),(0,n.kt)("td",{parentName:"tr",align:null},"\xb11g(.Typ)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Output interface"),(0,n.kt)("td",{parentName:"tr",align:null},"Digital")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove 3-aixs Accelermeter ADXL372"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html"},"Get ONE Now"))))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy \n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,n.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - 3-Axis Analog Accelerometer \xb1200g (ADXL372) to the ",(0,n.kt)("strong",{parentName:"p"},"I2c")," port of the Base Shield.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/_DAS3075.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Accelerometer_ADXL372"},"Seeed_ADXL_372 library")," from Github.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2"),". Refer to How to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library"},"install library")," to install library for Arduino.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3"),". Then open ",(0,n.kt)("inlineCode",{parentName:"p"},"example/ADXL_372/continuous_reading")," "),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/img/1555913126073.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'//continuous_reading.ino\n\n#include "Wire.h"\n#include "adxl372.h"\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n  #define SERIAL SERIALUSB\n  #define SYS_VOL   3.3\n#else\n  #define SERIAL Serial\n  #define SYS_VOL   5\n#endif\n\n\nfloat cali_data[3];\n\n#define CALI_BUF_LEN           15\n#define CALI_INTERVAL_TIME     250\n\nfloat cali_buf[3][CALI_BUF_LEN];\n\n\nADXL372 acc;\nxyz_t xyz;\n\nfloat deal_cali_buf(float *buf)\n{\n    float cali_val = 0;\n    \n    for(int i = 0;i < CALI_BUF_LEN;i++)\n    {\n        cali_val += buf[i];\n    }\n    cali_val = cali_val/CALI_BUF_LEN;\n    return (float)cali_val;\n}\n\n\nvoid calibration(void)\n{\n    SERIAL.println("Please Place the module horizontally!");\n    delay(1000);\n    SERIAL.println("Start calibration........");\n    \n  \n    for(int i=0;i<CALI_BUF_LEN;i++)\n    {\n        while (!(acc.status() & DATA_READY)); \n        acc.read(&xyz);\n        cali_buf[0][i] = xyz.x;\n        cali_buf[1][i] = xyz.y;\n        cali_buf[2][i] = xyz.z;\n        delay(CALI_INTERVAL_TIME);\n        SERIAL.print(\'.\');\n    }\n    SERIAL.println(\'.\');\n    for(int i=0;i<3;i++)\n    {\n        cali_data[i] =  deal_cali_buf(cali_buf[i]);\n        if(2 == i){\n      \n            cali_data[i] -= 10;\n        }\n        SERIAL.println(cali_data[i]);\n    }\n    SERIAL.println("Calibration OK!!");\n}\n\n\nvoid setup() {\n  SERIAL.begin(115200);\n\n  acc.begin();\n  \n  SERIAL.println(acc.id(), HEX);\n  acc.timing_ctrl(RATE_400);\n  acc.measurement_ctrl(BW_200, true);\n  acc.power_ctrl(MEASUREMENT_MODE);\n  acc.setActiveTime(10);\n\n  calibration();\n}\n\nvoid loop() {\n  if (acc.status() & DATA_READY) {\n    acc.read(&xyz);\n    SERIAL.print("X position acc = ");\n    SERIAL.print((xyz.x - cali_data[0]) / 10.0);\n    SERIAL.println(" g ");\n    SERIAL.print("Y position acc = ");\n    SERIAL.print((xyz.y - cali_data[1]) / 10.0);\n    SERIAL.println(" g ");\n    SERIAL.print("Z position acc = ");\n    SERIAL.print((xyz.z - cali_data[2]) / 10.0);\n    SERIAL.println(" mg ");\n  }\n  SERIAL.println("   ");\n  SERIAL.println("   ");\n  delay(1000);\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,n.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,n.kt)("strong",{parentName:"p"},"115200"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6. Calibration")," wait for calibration, just few seconds the calibration will be finished")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," Now you can use this sensor, and the output will be like this:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"Please Place the module horizontally!\nStart calibration........\n................\n18.07\n-10.73\n-40.13\nCalibration OK!!\nX position acc = 0.09 g \nY position acc = 0.17 g \nZ position acc = 1.31 mg \n   \n   \nX position acc = -0.11 g \nY position acc = -0.03 g \nZ position acc = 1.31 mg \n   \n\n\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip"},"Grove-3-Axis_Digital_Accelerometer-200g-ADXL372 Schematic file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-200g-ADXL372/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B1200g%20(ADXL372).zip"},"ADXL 372 Datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
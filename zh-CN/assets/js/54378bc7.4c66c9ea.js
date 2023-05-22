"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[92444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(a),u=i,g=c["".concat(s,".").concat(u)]||c[u]||m[u]||n;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25757:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={description:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",title:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357",last_update:{date:"1/6/2023",author:"shuxu hu"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357",title:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",description:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357",permalink:"/custom/zh-CN/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",title:"Grove - 3-Axis Digital Accelerometer 40g (ADXL357)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Accelerometer_40g-ADXL357",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - 3-Axis Analog Accelerometer 40g (ADXL356C)",permalink:"/custom/zh-CN/Grove-3-Axis_Analog_Accelerometer_40g-ADXL356C"},next:{title:"Grove - 3-Axis Digital Accelerometer 200g (ADXL372)",permalink:"/custom/zh-CN/Grove-3-Axis_Digital_Accelerometer_200g-ADXL372"}},s={},p=[{value:"Features",id:"features",level:2},{value:"APPLICATIONS",id:"applications",level:2},{value:"Specification",id:"specification",level:2},{value:"Pinout",id:"pinout",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/101020639-preview.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"You can find a variety of ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/accelerometer.html"},"3-axis accelerometers")," on our website that can meet different scenarios and needs. This time, we bring you the industrial grade, high stability, high precision and low power ADI ADXL series three-axis accelerometers.  "),(0,i.kt)("p",null,"The Grove - 3-Axis Digital Accelerometer \xb140g (ADXL357) is a digital output ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/MEMS.html"},"MEMS"),"  Accelerometer. This sensor has three different selectable measuring ranges and accuracies: \xb110g@51200 LSB/g,  \xb120g@25600 LSB/g, \xb140g@12800 LSB/g. You just need to do little calibration work to get a relatively accurate result. It output all the data via grove I2C port, and the I2C address is also selectable. What's more, we also provide two interrupt output pins which can be configured into 4 modes."),(0,i.kt)("p",null,"The ADI ADXL Series Accelerometer includes four products that will meet your different range and output needs:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Product"),(0,i.kt)("th",{parentName:"tr",align:null},"Measurement Range"),(0,i.kt)("th",{parentName:"tr",align:null},"Output Port"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-20g-ADXL356B-p-4004.html"},"Grove - 3-Axis Analog Accelerometer \xb120g (ADXL356B)")),(0,i.kt)("td",{parentName:"tr",align:null},"\xb110 / \xb120g"),(0,i.kt)("td",{parentName:"tr",align:null},"Analog")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Analog-Accelerometer-40g-ADXL356C-p-4006.html"},"Grove - 3-Axis Analog Accelerometer \xb140g (ADXL356C)")),(0,i.kt)("td",{parentName:"tr",align:null},"\xb110g / \xb140g"),(0,i.kt)("td",{parentName:"tr",align:null},"Analog")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html"},"Grove - 3-Axis Digital Accelerometer \xb140g (ADXL357)")),(0,i.kt)("td",{parentName:"tr",align:null},"\xb110g@51200 LSB/g / \xb120g@25600 LSB/g / \xb140g@12800 LSB/g"),(0,i.kt)("td",{parentName:"tr",align:null},"Digital I2C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-200g-ADXL372-p-4003.html"},"Grove - 3-Axis Digital Accelerometer \xb1200g (ADXL372)")),(0,i.kt)("td",{parentName:"tr",align:null},"\xb1200g"),(0,i.kt)("td",{parentName:"tr",align:null},"Digital I2C")))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Industry leading noise, minimal offset drift over temperature, and long-term stability, enabling precision applications with minimal calibration."),(0,i.kt)("li",{parentName:"ul"},"Hermetic package offers excellent long-term stability 0 g offset vs. temperature (all axes): 0.75 mg/\xb0C maximum"),(0,i.kt)("li",{parentName:"ul"},"Ultralow noise density (all axes): 80 \u03bcg/\u221aHz"),(0,i.kt)("li",{parentName:"ul"},"Build-in 20-bit analog-to-digital converter (ADC)"),(0,i.kt)("li",{parentName:"ul"},"Low drift, low noise, and low power"),(0,i.kt)("li",{parentName:"ul"},"Support two channel interrupt output"),(0,i.kt)("li",{parentName:"ul"},"Support FIFO(96*21-bit)")),(0,i.kt)("h2",{id:"applications"},"APPLICATIONS"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inertial measurement units (IMUs)/altitude and heading reference systems (AHRSs)"),(0,i.kt)("li",{parentName:"ul"},"Platform stabilization systems"),(0,i.kt)("li",{parentName:"ul"},"Structural health monitoring"),(0,i.kt)("li",{parentName:"ul"},"Condition monitoring"),(0,i.kt)("li",{parentName:"ul"},"Seismic imaging"),(0,i.kt)("li",{parentName:"ul"},"Tilt sensing"),(0,i.kt)("li",{parentName:"ul"},"Robotics")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supply voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating ambient temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"-40 \u2013 125\u2103")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sensitivity at X",(0,i.kt)("sub",null,"OUT"),", Y",(0,i.kt)("sub",null,"OUT"),", Z",(0,i.kt)("sub",null,"OUT")," / (Ratiometric to V",(0,i.kt)("sub",null,"1P8ANA)")),(0,i.kt)("td",{parentName:"tr",align:null},"\xb110 g@80 mv/g (Typ.) / \xb120 g@40 mv/g (Typ.) / \xb140 g@20 mv/g (Typ.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Sensitivity Change due to Temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"\xb10.01%/\xb0C  (TA = \u221240\xb0C to +125\xb0C)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"0g OFFSET / (Referred to V1P8ANA/2)"),(0,i.kt)("td",{parentName:"tr",align:null},"\xb1125 mg(Typ.)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Output interface"),(0,i.kt)("td",{parentName:"tr",align:null},"Digital")))),(0,i.kt)("h2",{id:"pinout"},"Pinout"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout1.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/pinout2.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Materials required")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,i.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove 3-aixs Accelermeter ADXL357"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-40g-ADXL357-p-4005.html"},"Get ONE Now"))))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"In addition, you can consider our new ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus M0+"),", which is equivalent to the combination of Seeeduino V4.2 and Baseshield.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    **1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy \n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,i.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect the Grove - 3-Axis Analog Accelerometer \xb120g (ADXL357) to the ",(0,i.kt)("strong",{parentName:"p"},"I2c")," port of the Base Shield.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/_DAS3077.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_ADXL357B"},"Seeed_ADXL_357 library")," from Github.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2"),". Refer to How to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Multi_Channel_Relay_Arduino_Library"},"install library")," to install library for Arduino.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3"),". Then open ",(0,i.kt)("inlineCode",{parentName:"p"},"example/ADXL_357/basic_demo")," "),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/img/1555916779373.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'//basic_demo.ino\n#include "Seeed_adxl357b.h"\n\n\n#if defined(ARDUINO_ARCH_AVR)\n    #pragma message("Defined architecture for ARDUINO_ARCH_AVR.")\n    #define SERIAL Serial\n#elif defined(ARDUINO_ARCH_SAM)\n    #pragma message("Defined architecture for ARDUINO_ARCH_SAM.")\n    #define SERIAL SerialUSB\n#elif defined(ARDUINO_ARCH_SAMD)\n    #pragma message("Defined architecture for ARDUINO_ARCH_SAMD.")  \n    #define SERIAL SerialUSB\n#elif defined(ARDUINO_ARCH_STM32F4)\n    #pragma message("Defined architecture for ARDUINO_ARCH_STM32F4.")\n    #define SERIAL SerialUSB\n#else\n    #pragma message("Not found any architecture.")\n    #define SERIAL Serial\n#endif\n\n\n#define CALI_BUF_LEN           15\n#define CALI_INTERVAL_TIME     250\nint32_t cali_buf[3][CALI_BUF_LEN];\nint32_t cali_data[3];\n\nfloat factory;\n\nAdxl357b  adxl357b;\n\n\nint32_t deal_cali_buf(int32_t *buf)\n{\n    int32_t cali_val = 0;\n    \n    for(int i = 0;i < CALI_BUF_LEN;i++)\n    {\n        cali_val += buf[i];\n    }\n    cali_val = cali_val/CALI_BUF_LEN;\n    return (int32_t)cali_val;\n}\n\n\nvoid calibration(void)\n{\n    int32_t x;\n    SERIAL.println("Please Place the module horizontally!");\n    delay(1000);\n    SERIAL.println("Start calibration........");\n    \n    for(int i=0;i<CALI_BUF_LEN;i++)\n    {\n        if(adxl357b.checkDataReady())\n        {\n            if(adxl357b.readXYZAxisResultData(cali_buf[0][i],cali_buf[1][i],cali_buf[2][i]))\n            {\n            }\n        }\n        delay(CALI_INTERVAL_TIME);\n        // SERIAL.print(\'.\');\n    }\n    // SERIAL.println(\'.\');\n    for(int i=0;i<3;i++)\n    {\n        cali_data[i] =  deal_cali_buf(cali_buf[i]);\n        SERIAL.println(cali_data[i]);\n    }\n    x = (((cali_data[2] - cali_data[0]) + (cali_data[2] - cali_data[1]))/2);\n    factory = 1.0 / (float)x;\n    // SERIAL.println(x);\n    SERIAL.println("Calibration OK!!");\n}\n\n\n\n\n\n\nvoid setup(void)\n{\n    uint8_t value = 0;\n    float t;\n    \n    SERIAL.begin(115200);\n    if(adxl357b.begin())\n    {\n        SERIAL.println("Can\'t detect ADXL357B device .");\n        while(1);\n    }\n    SERIAL.println("Init OK!");\n    /*Set full scale range to \xb140g*/\n    adxl357b.setAdxlRange(FOURTY_G);\n    /*Switch standby mode to measurement mode.*/\n    adxl357b.setPowerCtr(0);\n    delay(100);\n    /*Read Uncalibration temperature.*/\n    adxl357b.readTemperature(t);\n    \n    SERIAL.print("Uncalibration  temp = ");\n    SERIAL.println(t);\n    /**/\n    calibration();\n\n}\n\n\nvoid loop(void)\n{\n    int32_t x,y,z;\n    uint8_t entry = 0;\n    if(adxl357b.checkDataReady())\n    {\n        if(adxl357b.readXYZAxisResultData(x,y,z))\n        {\n            SERIAL.println("Get data failed!");\n        }\n        SERIAL.print("X axis = ");\n        SERIAL.print(x*factory);\n        SERIAL.println(\'g\');\n        SERIAL.print("Y axis = ");\n        SERIAL.print(y*factory);\n        SERIAL.println(\'g\');\n        SERIAL.print("Z axis = ");\n        SERIAL.print(z*factory);\n        SERIAL.println(\'g\');\n        \n    }\n    delay(100);\n}\n\n\n\n\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,i.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,i.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. Set the baud rate to ",(0,i.kt)("strong",{parentName:"p"},"115200"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 6. Calibration")," wait for calibration, just few seconds the calibration will be finished")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 7.")," Now you can use this sensor, and the output will be like this:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C++"},"Start calibration.......Init OK!\nUncalibration  temp = 29.20\nPlease Place the module horizontally!\nStart calibration........\n-1652\n11143\n6063\nCalibration OK!!\nX axis = -1.24g\nY axis = 8.50g\nZ axis = 4.55g\nX axis = -1.21g\nY axis = 8.43g\n\n")),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/Grove%20-%203-Axis%20Digital%20Accelerometer%20%C2%B140g%20(ADXL357).zip"},"Grove-3-Axis_Digital_Accelerometer-40g-ADXL357 Schematic file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-3-Axis_Digital_Accelerometer-40g-ADXL357/res/ADXL357.pdf"},"ADXL 357 Datasheet"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
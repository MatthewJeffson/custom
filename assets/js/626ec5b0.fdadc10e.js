"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42573:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Grove - Gas Sensor(O\u2082)",title:"Grove - Gas Sensor(O\u2082)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Gas_Sensor-O2",last_update:{date:"1/3/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-O2",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-O2",title:"Grove - Gas Sensor(O\u2082)",description:"Grove - Gas Sensor(O\u2082)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-O2.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-Gas_Sensor-O2",permalink:"/custom/Grove-Gas_Sensor-O2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-O2.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672704e3,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"Grove - Gas Sensor(O\u2082)",title:"Grove - Gas Sensor(O\u2082)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Gas_Sensor-O2",last_update:{date:"1/3/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Gas Sensor(MQ9)",permalink:"/custom/Grove-Gas_Sensor-MQ9"},next:{title:"Grove - Gas O\u2082 Sensor(MIX8410)",permalink:"/custom/Grove-Gas_Sensor-O2-MIX8410"}},l={},p=[{value:"Hardware",id:"hardware",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/cover.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Grove - Oxygen Sensor(ME2-O2-\u042420) is a kind of sensor to test the oxygen concentration in air, which is based on the principle of the electrochemical cell to the original work. You can know clearly the current oxygen concentration when you output voltage values proportional to the concentration of oxygen and refer to the oxygen concentration linear characteristic graph. It's very suitable for detecting oxygen concentration in the environment protection. Grove - Gas Sensor(O2) is an organic reaction module, it can provide a little current while putting it in the air, we don't need to provide an external power to it, and output voltage will change as time current changes. "),(0,o.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/4df5kaaKa6I",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/BeagleBone_Green_Wireless/images/get_one_now.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("p",null,":::Tip\nWe've released the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Sensor_gas/"},"Seeed Gas Sensor Selection Guide"),", it will help you choose the gas sensor that best suits your needs.\n:::\n##Feature"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High-precision"),(0,o.kt)("li",{parentName:"ul"},"High sensitivity"),(0,o.kt)("li",{parentName:"ul"},"Wide linearity range"),(0,o.kt)("li",{parentName:"ul"},"Strong anti-interference ability"),(0,o.kt)("li",{parentName:"ul"},"Extraordinary reliability")),(0,o.kt)("p",null,":::Tip\nMore details about Grove modules please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"),"\n:::\n##Specification"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Items"),(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Measurement Range"),(0,o.kt)("td",{parentName:"tr",align:null},"0-25%")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Detect Life"),(0,o.kt)("td",{parentName:"tr",align:null},"two years")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Sensitivity"),(0,o.kt)("td",{parentName:"tr",align:null},"0.05~0.15 mA(in air)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Temperature Range"),(0,o.kt)("td",{parentName:"tr",align:null},"-20 oC~50 oC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Preheat Time"),(0,o.kt)("td",{parentName:"tr",align:null},"20 minutes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Input voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")))),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Voltage Convertor")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Converter.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The XC6206332MR converts 3.3v/5v input to 3.3v."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"ME2-O2 current source")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/ME2-O2.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The ME2-O2 is current source. The voltage of the label #3 point is R7 * Current(ME2-O2)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Amplifer")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/Amplifer.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The gain of the amplifer is 121, SIGA voltage is 121 times of label #3 point voltage. "),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/concentration_current.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Here is the correlation between ME2-O2 output current and concentration of O2. The current of 20% concentration O2 is around 120uA. So the Grove SIGA voltage @ 20% concentration = R7 ",(0,o.kt)("em",{parentName:"p"}," Current(ME2-O2) ")," 121 = 100 ",(0,o.kt)("em",{parentName:"p"}," 120uA ")," 121 = 1.452V. "),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The current ranage of ME2-O2 is 80uA~160uA due to individual difference. So the sensor ouput voltage also will different. Please explosure the sensor to fresh air and get reading of output voltage as reference at beginning. You can refer to [this example](https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Read_O2_value.zip) to get the calibration at beginning and then read the sensor values.   \n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("p",null,"##Getting Started"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"This chapter is based on Win10 and Arduino IDE 1.6.9\n"))),(0,o.kt)("p",null,"This an easy-to-use module, what you need to do is connect the signal pin (the YELLOW pin of Grove cable) to the ADC input of your controller. If there's no internal ADC in your controller, ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-I2C-ADC-p-1580.html"},"Grove - I2C ADC")," is recommend. "),(0,o.kt)("p",null,"Here we will show you how this Grove - Gas Sensor(O2) works via a simple demo. First of all, you need to prepare the below stuffs:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - Oxygen Sensor(ME2-O2-\u042420)"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/gas_sensor_210.jpg",alt:"pir",width:600,height:"auto"}))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/grove-gas-sensoro2-p-1541.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Universal-4-Pin-20cm-Unbuckled-Cable-%285-PCs-Pack%29-p-749.html"},"Get ONE Now"))))),(0,o.kt)("p",null,"###Connection "),(0,o.kt)("p",null,"Thanks to the benefit of Grove series modules, you don't need to make soldering or bread board, what you need to do is connect the modules to the right port of Base Shield. For this demo, we have only one Grove module. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove - Oxygen Sensor(ME2-O2-\u042420) is an analog input module, we connect it to ",(0,o.kt)("strong",{parentName:"li"},"A0")," at this demo")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/connection.jpeg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"###Upload the code to Arduino"),(0,o.kt)("p",null,"Copy the below code to Arduino IDE."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Grove - Gas Sensor(O2) test code\n// Note:\n// 1. It need about about 5-10 minutes to preheat the sensor\n// 2. modify VRefer if needed\n\nconst float VRefer = 3.3;       // voltage of adc reference\n\nconst int pinAdc   = A0;\n\nvoid setup() \n{\n    // put your setup code here, to run once:\n    Serial.begin(9600);\n    Serial.println("Grove - Gas Sensor Test Code...");\n}\n\nvoid loop() \n{\n    // put your main code here, to run repeatedly:\n    float Vout =0;\n    Serial.print("Vout =");\n\n    Vout = readO2Vout();\n    Serial.print(Vout);\n    Serial.print(" V, Concentration of O2 is ");\n    Serial.println(readConcentration());\n    delay(500);\n}\n\nfloat readO2Vout()\n{\n    long sum = 0;\n    for(int i=0; i<32; i++)\n    {\n        sum += analogRead(pinAdc);\n    }\n    \n    sum >>= 5;\n    \n    float MeasuredVout = sum * (VRefer / 1023.0);\n    return MeasuredVout;\n}\n\nfloat readConcentration()\n{\n    // Vout samples are with reference to 3.3V\n    float MeasuredVout = readO2Vout();\n    \n    //float Concentration = FmultiMap(MeasuredVout, VoutArray,O2ConArray, 6);\n    //when its output voltage is 2.0V,\n    float Concentration = MeasuredVout * 0.21 / 2.0;\n    float Concentration_Percentage=Concentration*100;\n    return Concentration_Percentage;\n}\n\n')),(0,o.kt)("p",null,"Then choose the right Board and COM port, and then click on the Upload button, this process take few seconds. "),(0,o.kt)("p",null,"###Get data"),(0,o.kt)("p",null,"Open serial monitor of your Arduino IDE, and you will get the data now. "),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"It need about 20~30 minutes to preheat the sensor, or you will get a larger value.\n"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/images/data.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/ME2-O2-D20%200-25%25%20Manual%20%28ver1.2%29.pdf"},"ME2-O2 Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Gas_Sensor_O2/resources/Schematics_O2.zip"},"Schematic in Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/SeeedDocument/Grove_Gas_Sensor_O2"},"Github Repository of this Document"))),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LoRa IoTea"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"A Plant Box with Lighting and Raining")," You never seen such a way to water you plant."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/team-seeed-ae/a-plant-box-with-lighting-and-raining-bfc59b/embed",width:"350"}),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}d.isMDXComponent=!0}}]);
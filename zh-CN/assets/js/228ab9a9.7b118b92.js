"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[75746],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},79067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"Grove - Gas Sensor(MQ9)",title:"Grove - Gas Sensor(MQ9)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Gas_Sensor-MQ9",last_update:{date:"1/3/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-MQ9",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-MQ9",title:"Grove - Gas Sensor(MQ9)",description:"Grove - Gas Sensor(MQ9)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-MQ9.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-Gas_Sensor-MQ9",permalink:"/custom/zh-CN/Grove-Gas_Sensor-MQ9",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-Gas_Sensor-MQ9.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672675200,formattedLastUpdatedAt:"2023\u5e741\u67082\u65e5",frontMatter:{description:"Grove - Gas Sensor(MQ9)",title:"Grove - Gas Sensor(MQ9)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Gas_Sensor-MQ9",last_update:{date:"1/3/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Gas Sensor(MQ5)",permalink:"/custom/zh-CN/Grove-Gas_Sensor-MQ5"},next:{title:"Grove - Gas Sensor(O\u2082)",permalink:"/custom/zh-CN/Grove-Gas_Sensor-O2"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Gas Detection\xa0: Basic Example",id:"gas-detection-basic-example",level:3},{value:"Measurement\xa0: Approximation",id:"measurement-approximation",level:3},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Resources",id:"resources",level:2},{value:"<strong>Schematic</strong>",id:"schematic",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Grove_MQ3_Gas_Sensor.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"The Grove - Gas Sensor(MQ9) module is useful for gas leakage detection (in home and industry). It is suitable for detecting ",(0,r.kt)("font",{color:"Blue"},"LPG, CO, CH4"),". Due to its high sensitivity and fast response time, measurements can be taken as soon as possible. The sensitivity of the sensor can be adjusted by using the potentiometer."),(0,r.kt)("div",{class:"admonition danger"},(0,r.kt)("p",{class:"admonition-title"},"Note"),"The sensor value only reflects the approximated trend of gas concentration in a permissible error range, it DOES NOT represent the exact gas concentration. The detection of certain components in the air usually requires a more precise and costly instrument, which cannot be done with a single gas sensor. If your project is aimed at obtaining the gas concentration at a very precise level, then we do not recommend this gas sensor."),(0,r.kt)("table",{align:"center"},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("h4",null,"Sensor")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Gas Type")),(0,r.kt)("td",null,(0,r.kt)("h4",null,"Get One Now"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ2/",target:"_blank"},(0,r.kt)("span",null,"MQ2"))),(0,r.kt)("td",null,"Combustible Gas, Smoke"),(0,r.kt)("td",null,(0,r.kt)("div",{class:"document"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Gas-Sensor(MQ2)-p-937.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"",width:200,height:"auto"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ3/",target:"_blank"},(0,r.kt)("span",null,"MQ3"))),(0,r.kt)("td",null,"Alcohol Vapor"),(0,r.kt)("td",null,(0,r.kt)("div",{class:"document"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ3%29-p-1418.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"",width:200,height:"auto"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ5/",target:"_blank"},(0,r.kt)("span",null,"MQ5"))),(0,r.kt)("td",null,"LPG, Natural Gas, Town Gas"),(0,r.kt)("td",null,(0,r.kt)("div",{class:"document"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ5%29-p-938.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"",width:200,height:"auto"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://wiki.seeedstudio.com/Grove-Gas_Sensor-MQ9/",target:"_blank"},(0,r.kt)("span",null,"MQ9"))),(0,r.kt)("td",null,"Carbon Monoxide, Coal Gas, Liquefied Gas"),(0,r.kt)("td",null,(0,r.kt)("div",{class:"document"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Gas-Sensor%28MQ9%29-p-1419.html",target:"_blank",rel:"noopener"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:"",width:200,height:"auto"}))))))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"We've released the [Seeed Gas Sensor Selection Guide](https://wiki.seeedstudio.com/Sensor_gas/), it will help you choose the gas sensor that best suits your needs.\n"))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wide detecting scope"),(0,r.kt)("li",{parentName:"ul"},"Stable and long life"),(0,r.kt)("li",{parentName:"ul"},"Fast response and High sensitivity")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Typical"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"VCC"),(0,r.kt)("td",{parentName:"tr",align:null},"Working Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"4.9"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"5.1"),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"PH"),(0,r.kt)("td",{parentName:"tr",align:null},"Heating consumption"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"340"),(0,r.kt)("td",{parentName:"tr",align:null},"mW")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RL"),(0,r.kt)("td",{parentName:"tr",align:null},"Load resistance"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"adjustable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RH"),(0,r.kt)("td",{parentName:"tr",align:null},"Heater resistance"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"33\u03a9\xb15%"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"\u03a9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rs"),(0,r.kt)("td",{parentName:"tr",align:null},"Sensing Resistance"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"20000"),(0,r.kt)("td",{parentName:"tr",align:null},"\u03a9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CO/CH4/LPG Scope"),(0,r.kt)("td",{parentName:"tr",align:null},"Detecting Concentration"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"-"),(0,r.kt)("td",{parentName:"tr",align:null},"1000/10000/10000"),(0,r.kt)("td",{parentName:"tr",align:null},"ppm")))),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gas leakage detection."),(0,r.kt)("li",{parentName:"ul"},"Toys.")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("p",null,"This is an Analog output sensor. This needs to be connected to any one Analog socket in Grove Base Shield. The examples used in this tutorial makes uses of A0 analog pin. Connect this module to the A0 port of Base Shield."),(0,r.kt)("p",null,"It is possible to connect the Grove module to Arduino directly by using jumper wires by using the connection as shown in the table below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Gas Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V"),(0,r.kt)("td",{parentName:"tr",align:null},"VCC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"GND")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NC"),(0,r.kt)("td",{parentName:"tr",align:null},"NC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Analog A0"),(0,r.kt)("td",{parentName:"tr",align:null},"SIG")))),(0,r.kt)("p",null,"The output voltage from the Gas sensor increases when the concentration of gas increases. Sensitivity can be adjusted by varying the potentiometer. ",(0,r.kt)("font",{color:"Red"},"Please note that the best preheat time for the sensor is above 24 hours"),". For detailed information about the MQ-9 sensor, please refer to the data-sheet provided in ",(0,r.kt)("strong",{parentName:"p"},"Resources")," section."),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Gas Sensor(MQ9)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1419.html",target:"_blank"},"Get One Now"))))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/Read_Gas_Sensor_data.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"Connect the Grove - Gas Sensor(MQ9) to A0 port as shown in the picture above."),(0,r.kt)("h3",{id:"gas-detection-basic-example"},"Gas Detection\xa0: Basic Example"),(0,r.kt)("p",null,"In this example, the sensor is connected to A0 pin. The voltage read from the sensor is displayed. This value can be used as a threshold to detect any increase/decrease in gas concentration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'void setup() {\n    Serial.begin(9600);\n}\n\nvoid loop() {\n    float sensor_volt;\n    float sensorValue;\n\n    sensorValue = analogRead(A0);\n    sensor_volt = sensorValue/1024*5.0;\n\n    Serial.print("sensor_volt = ");\n    Serial.print(sensor_volt);\n    Serial.println("V");\n    delay(1000);\n}\n')),(0,r.kt)("h3",{id:"measurement-approximation"},"Measurement\xa0: Approximation"),(0,r.kt)("p",null,"This examples demonstrates a way to know the approximate concentration of Gas. As per the data-sheet of the MQ9 sensors, these equations are tested for standard conditions and are not calibrated. It may vary based on change in temperature or humidity."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Keep the Gas Sensor in clean air environment. Upload the program below.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'void setup() {\n    Serial.begin(9600);\n}\n\nvoid loop() {\n    float sensor_volt;\n    float RS_air; //  Get the value of RS via in a clear air\n    float R0;  // Get the value of R0 via in LPG\n    float sensorValue;\n\n    /*--- Get a average data by testing 100 times ---*/\n    for(int x = 0 ; x < 100 ; x++)\n    {\n        sensorValue = sensorValue + analogRead(A0);\n    }\n    sensorValue = sensorValue/100.0;\n    /*-----------------------------------------------*/\n\n    sensor_volt = sensorValue/1024*5.0;\n    RS_air = (5.0-sensor_volt)/sensor_volt; // omit *RL\n    R0 = RS_air/9.9; // The ratio of RS/R0 is 9.9 in LPG gas from Graph (Found using WebPlotDigitizer)\n\n    Serial.print("sensor_volt = ");\n    Serial.print(sensor_volt);\n    Serial.println("V");\n\n    Serial.print("R0 = ");\n    Serial.println(R0);\n    delay(1000);\n\n}\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Then, open the serial monitor of Arduino IDE. Write down the value of R0 and this needs to be used in the next program. Please node down the R0 after the reading stabilizes.")),(0,r.kt)("font",{color:"Red"},"Replace the R0 below with value of R0 tested above "),". Expose the sensor to any one of the gas listed above.",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'void setup() {\n    Serial.begin(9600);\n}\n\nvoid loop() {\n\n    float sensor_volt;\n    float RS_gas; // Get value of RS in a GAS\n    float ratio; // Get ratio RS_GAS/RS_air\n    int sensorValue = analogRead(A0);\n    sensor_volt=(float)sensorValue/1024*5.0;\n    RS_gas = (5.0-sensor_volt)/sensor_volt; // omit *RL\n\n          /*-Replace the name "R0" with the value of R0 in the demo of First Test -*/\n    ratio = RS_gas/R0;  // ratio = RS/R0\n          /*-----------------------------------------------------------------------*/\n\n    Serial.print("sensor_volt = ");\n    Serial.println(sensor_volt);\n    Serial.print("RS_ratio = ");\n    Serial.println(RS_gas);\n    Serial.print("Rs/R0 = ");\n    Serial.println(ratio);\n\n    Serial.print("\\n\\n");\n\n    delay(1000);\n\n}\n')),(0,r.kt)("p",null,"Now, we can get the concentration of gas from the figure below."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/GAS_Sensor_7.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"According to the figure, we can see that the minimum concentration we can test is 200ppm and the maximum is 10000ppm, in a other word, we can get a concentration of gas between 0.02% and 1%. However, we can't provide a formula because the relation between ratio and concentration is nonlinear."),(0,r.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Gas Sensor(MQ9)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ3/img/45d_small.jpg",alt:"pir",width:600,height:"auto"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Gas-Sensor-MQ-p-1418.html"},"Get ONE Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Gas Sensor(MQ9) to port A0 of the Base Hat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/img/With_Hat.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the Grove - Gas Sensor(MQ9) to **any Analog Port** but make sure you change the command with the corresponding port number.\n"))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to write the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd grove.py/grove\nnano grove_gas_sensor_mq9.py\n\n")),(0,r.kt)("p",null,"Then you should copy following code in this file and hit ++ctrl+x++ to quit and save."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveGasSensorMQ9:\n\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def MQ9(self):\n        value = self.adc.read(self.channel)\n        return value\n\nGrove = GroveGasSensorMQ9\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveGasSensorMQ9(int(sys.argv[1]))\n\n    print('Detecting...')\n    while True:\n        print('Gas value: {0}'.format(sensor.MQ9))\n        time.sleep(.3)\n\nif __name__ == '__main__':\n    main()\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4"),". Excute below commands to run code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\npython grove_gas_sensor_mq9.py  0\n\n")),(0,r.kt)("admonition",{type:"success"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_gas_sensor_mq9.py 0\nDetecting...\nGas value: 345\nGas value: 348\nGas value: 351\nGas value: 354\nGas value: 357\nGas value: 360\nGas value: 363\nGas value: 365\nGas value: 368\nGas value: 370\n^CTraceback (most recent call last):\n  File "grove_gas_sensor_mq9.py", line 69, in <module>\n    main()\n  File "grove_gas_sensor_mq9.py", line 66, in main\n    time.sleep(.3)\nKeyboardInterrupt\n\n\n')),(0,r.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,r.kt)("p",null,":::notice\nYou may have noticed that for the analog port, the silkscreen pin number is something like ",(0,r.kt)("strong",{parentName:"p"},"A0, A1"),", however in the command we use parameter ",(0,r.kt)("strong",{parentName:"p"},"0")," and ",(0,r.kt)("strong",{parentName:"p"},"1"),", just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.\n:::"),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Suggest Reading / References")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to choose a Gas Sensor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Flammability_limit"},"What's LEL"))),(0,r.kt)("h2",{id:"schematic"},(0,r.kt)("strong",{parentName:"h2"},"Schematic")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Eagle_files.zip"},"Grove Gas Sensor - EAGLE (Schematic and Board) files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/Gas_Sensor_Schematic.pdf"},"Grove Gas Sensor - PDF Schematic"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Datasheet")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Gas_Sensor-MQ9/res/MQ-9.pdf"},"MQ-9 Datasheet"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}u.isMDXComponent=!0}}]);
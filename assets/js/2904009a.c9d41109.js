"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13648],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27408:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - Electricity Sensor",title:"Grove - Electricity Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Electricity_Sensor",last_update:{date:"1/9/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor",id:"Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor",title:"Grove - Electricity Sensor",description:"Grove - Electricity Sensor",source:"@site/docs/Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Current",slug:"/Grove-Electricity_Sensor",permalink:"/custom/Grove-Electricity_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Current/Grove-Electricity_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673222400,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"Grove - Electricity Sensor",title:"Grove - Electricity Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Electricity_Sensor",last_update:{date:"1/9/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - 2.5A DC Current Sensor(ACS70331)",permalink:"/custom/Grove-2.5A-DC-Current-Sensor-ACS70331"},next:{title:"Grove - Coulomb Counter 3.3V to 5V (LTC2941)",permalink:"/custom/Grove-Coulomb_Counter_3.3V_to_5V-LTC2941"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specification",id:"specification",level:2},{value:"Key Specification",id:"key-specification",level:3},{value:"Electronic Characteristics",id:"electronic-characteristics",level:3},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"\u3000Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/Twig-Electricity-Sensor.jpg"})),(0,a.kt)("p",null,"The Electricity sensor module is a member of Grove. It is based on the TA12-200 current transformer which can transform the large AC into small amplitude. You can use it to test large alternating current up to 5A."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grove compatible interface"),(0,a.kt)("li",{parentName:"ul"},"Maximum 5A input"),(0,a.kt)("li",{parentName:"ul"},"High accuracy"),(0,a.kt)("li",{parentName:"ul"},"Small size")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Alternating current measurement"),(0,a.kt)("li",{parentName:"ul"},"Device condition monitoring")),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"key-specification"},"Key Specification"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Items")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Min")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PCB Size"),(0,a.kt)("td",{parentName:"tr",align:null},"2.0cm","*","4.0cm")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"2.0mm pitch pin header")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IO Structure"),(0,a.kt)("td",{parentName:"tr",align:null},"SIG,NC,NC,GND")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"RoHS"),(0,a.kt)("td",{parentName:"tr",align:null},"YES")))),(0,a.kt)("h3",{id:"electronic-characteristics"},"Electronic Characteristics"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Items")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Min")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Norm")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Max")),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Unit")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Transformation ratio"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"2000:1"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Input Current"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"A")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Current"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"2.5"),(0,a.kt)("td",{parentName:"tr",align:null},"mA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sampling Resistance"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"800"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"\u03a9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sampling Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"V")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Working Frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"20"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"20K"),(0,a.kt)("td",{parentName:"tr",align:null},"HZ")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Nonlinear scale"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"0.2%"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Phase Shift"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"5'"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,a.kt)("td",{parentName:"tr",align:null},"-55"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"85"),(0,a.kt)("td",{parentName:"tr",align:null},"\u2103")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Dielectric strength"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"KVAC/1min")))),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/dimensions.jpg"})),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,a.kt)("p",null,"The following sketch demonstrates a simple application of measuring the amplitude of the alternating voltage. The SIG pin will output a alternating voltage based on the alternating current being measured. You can measure the value using ADC."),(0,a.kt)("h4",{id:"hardware"},"\u3000Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Electricity_Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Connect  Grove-Electricity_Sensor to port ",(0,a.kt)("strong",{parentName:"li"},"A0")," of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_ardu.jpg",alt:"with_ardu"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If we don't have Grove Base Shield, We also can directly connect this module to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Electricity_Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Not Conencted"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A0"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1.")," Copy the code and flash it into the controller board and upload the code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'    /****************************************************************************/  \n    //  Function: Measure the amplitude current of the alternating current and\n    //            the effective current of the sinusoidal alternating current.\n    //  Hardware: Grove - Electricity Sensor        \n    //  Date:    Jan 19,2013\n    //  by www.seeedstudio.com\n    #define ELECTRICITY_SENSOR A0 // Analog input pin that sensor is attached to\n\n    float amplitude_current;               //amplitude current\n    float effective_value;       //effective current\n\n    void setup()\n    {\n        Serial.begin(9600);\n        pins_init();\n    }\n    void loop()\n    {\n        int sensor_max;\n        sensor_max = getMaxValue();\n        Serial.print("sensor_max = ");\n        Serial.println(sensor_max);\n        //the VCC on the Grove interface of the sensor is 5v\n        amplitude_current=(float)sensor_max/1024*5/800*2000000;\n        effective_value=amplitude_current/1.414;//minimum_current=1/1024*5/800*2000000/1.414=8.6(mA)\n                            //Only for sinusoidal alternating current\n        Serial.println("The amplitude of the current is(in mA)");\n        Serial.println(amplitude_current,1);//Only one number after the decimal point\n        Serial.println("The effective value of the current is(in mA)");\n        Serial.println(effective_value,1);\n    }\n    void pins_init()\n    {\n        pinMode(ELECTRICITY_SENSOR, INPUT);\n    }\n    /*Function: Sample for 1000ms and get the maximum value from the SIG pin*/\n    int getMaxValue()\n    {\n        int sensorValue;             //value read from the sensor\n        int sensorMax = 0;\n        uint32_t start_time = millis();\n        while((millis()-start_time) < 1000)//sample for 1000ms\n        {\n            sensorValue = analogRead(ELECTRICITY_SENSOR);\n            if (sensorValue > sensorMax)\n            {\n                /*record the maximum sensor value*/\n                sensorMax = sensorValue;\n            }\n        }\n        return sensorMax;\n    }\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The minimum effective current that can be sensed by the code can be calculated using the equation below. minimum_current=1/1024",(0,a.kt)("em",{parentName:"p"},"5/800"),"2000000/1.414=8.6(mA).")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2."),"    Open the serial monitor, The results is as follows\uff1a")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/ardu_result.jpg",alt:null})),(0,a.kt)("h3",{id:"with-raspberry-pi"},"With Raspberry Pi"),(0,a.kt)("h4",{id:"hardware-1"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Electricity_Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg"}))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/45d_small.jpg"})))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Electricity-Sensor-p-777.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Electricity_Sensor  to ",(0,a.kt)("strong",{parentName:"li"},"A0")," port of GrovePi_Plus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/with_rpi.jpg"})),(0,a.kt)("h4",{id:"software-1"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to use this sensor")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/GrovePi/Software/Python\npython grove_electricity_sensor.py\n")),(0,a.kt)("p",null,"Here is the code of example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Python"},'#!/usr/bin/env python\n#\n# GrovePi Example for using the Grove Electricity Sensor (https://www.seeedstudio.com/wiki/Grove_-_Electricity_Sensor)\n#\n# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi\n#\n# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi\n#\n\'\'\'\n## License\nThe MIT License (MIT)\nGrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.\nCopyright (C) 2017  Dexter Industries\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\'\'\'\n\nimport time\nimport grovepi\n\n# Connect the Grove Electricity Sensor to analog port A0\n# SIG,NC,NC,GND\nsensor = 0\n\ngrovepi.pinMode(sensor,"INPUT")\n\n# Vcc of the grove interface is normally 5v\ngrove_vcc = 5\n\nwhile True:\n  try:\n      # Get sensor value\n      sensor_value = grovepi.analogRead(sensor)\n\n      # Calculate amplitude current (mA)\n      amplitude_current = (float)(sensor_value / 1024 * grove_vcc / 800 * 2000000)\n\n      # Calculate effective value (mA)\n      effective_value = amplitude_current / 1.414\n\n      # minimum_current = 1 / 1024 * grove_vcc / 800 * 2000000 / 1.414 = 8.6(mA)\n      # Only for sinusoidal alternating current\n\n      print("sensor_value", sensor_value)\n      print("The amplitude of the current is", amplitude_current, "mA")\n      print("The effective value of the current is", effective_value, "mA")\n      time.sleep(1)\n\n  except IOError:\n      print ("Error")\n')),(0,a.kt)("p",null,"Here is the result."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/img/rpi_result.jpg"})),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_v1.0_eagle_files.zip"},"Grove -Electricity Sensor Eagle File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Electricity_Sensor/res/Electricity_sensor_sch.pdf"},"Schematic in PDF"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
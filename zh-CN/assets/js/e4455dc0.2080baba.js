"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45826],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93082:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={description:"Grove - Chest Strap Heart Rate Sensor",title:"Grove - Chest Strap Heart Rate Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Chest_Strap_Heart_Rate_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor",id:"Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor",title:"Grove - Chest Strap Heart Rate Sensor",description:"Grove - Chest Strap Heart Rate Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Biometric",slug:"/Grove-Chest_Strap_Heart_Rate_Sensor",permalink:"/zh-CN/Grove-Chest_Strap_Heart_Rate_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Biometric/Grove-Chest_Strap_Heart_Rate_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672934400,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{description:"Grove - Chest Strap Heart Rate Sensor",title:"Grove - Chest Strap Heart Rate Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Chest_Strap_Heart_Rate_Sensor",last_update:{date:"1/6/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Ear-clip Heart Rate Sensor",permalink:"/zh-CN/Grove-Ear-clip_Heart_Rate_Sensor"},next:{title:"Grove - Capacitive Fingerprint Scanner/Sensor",permalink:"/zh-CN/Grove-Capacitive-Fingerprint-Sensor"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Heart_rate_chest_belt_kit.jpg"})),(0,a.kt)("p",null,"This heart rate chest strap kit contains a chest belt and a 5.3 KHz AM receiver module. The heart rate measurement kit can be used to monitor the heart rate of patients and athletes, meanwhile the result can be displayed on a screen via serial port and saved for analysis. The entire system has lots of advantages, e.g. high sensitivity, low power consumption and portability. Because the modules communicate with each other via AM, it is very convenient to let you move (notice that the effective distance is 30cm)."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Chest-Strap-Heart-Rate-Sensor-p-1115.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png"}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Low power consumption"),(0,a.kt)("li",{parentName:"ul"},"Wireless"),(0,a.kt)("li",{parentName:"ul"},"Convenient to use"),(0,a.kt)("li",{parentName:"ul"},"Built-in ferrite antenna"),(0,a.kt)("li",{parentName:"ul"},"High sensitivity"),(0,a.kt)("li",{parentName:"ul"},"Fully RoHS compliant")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"col"},"Item"),(0,a.kt)("th",{scope:"col"},"Min"),(0,a.kt)("th",{scope:"col"},"Typical"),(0,a.kt)("th",{scope:"col"},"Max"),(0,a.kt)("th",{scope:"col"},"Unit")),(0,a.kt)("tr",{align:"center"},(0,a.kt)("th",{scope:"row"},"Voltage"),(0,a.kt)("td",null,"3.0"),(0,a.kt)("td",null,"5.0"),(0,a.kt)("td",null,"5.5"),(0,a.kt)("td",null,"V")),(0,a.kt)("tr",{align:"center"},(0,a.kt)("th",{scope:"row"},"bust range"),(0,a.kt)("td",null,"65"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"145"),(0,a.kt)("td",null,"cm")),(0,a.kt)("tr",{align:"center"},(0,a.kt)("th",{scope:"row"},"Modulation mode"),(0,a.kt)("td",{colspan:"3"},"5.3KHz AM modulate"),(0,a.kt)("td",null,"/")),(0,a.kt)("tr",{align:"center"},(0,a.kt)("th",{scope:"row"},"Battery life"),(0,a.kt)("td",{colspan:"3"},"more than a half year (depending on your usage)"),(0,a.kt)("td",null,"/")),(0,a.kt)("tr",{align:"center"},(0,a.kt)("th",{scope:"row"},"Effective receiving distance"),(0,a.kt)("td",{colspan:"3"},"30"),(0,a.kt)("td",null,"cm")),(0,a.kt)("tr",{align:"center"},(0,a.kt)("th",{scope:"row"},"Receiving modules"),(0,a.kt)("td",{colspan:"3"},"48 X 25 X 10"),(0,a.kt)("td",null,"mm"))),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Heart rate monitor.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"1"),". The chest belt is powered by a CR2032 coin battery. Open the back cover with a coin to replace it."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"2"),". If not used for a long time please remove the battery.")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The following sketch demonstrates a simple application of using the Chest Strap Heart Rate Sensor to measure heart rate."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect this module to the digital port D2 on your ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/grove-base-shield-p-754.html?cPath=132"},"base shield"),". And connect Grove-LED to Digital port 4."),(0,a.kt)("li",{parentName:"ul"},"Plug the Base Shield into Arduino/Seeeduino.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-Chest_Strap_Heart_Rate_Sensor.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy and paste code below to a new Arduino sketch.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    #define LED 4//indicator, Grove - LED is connected with D4 of Arduino\n    boolean led_state = LOW;//state of LED, each time an external interrupt \n                                    //will change the state of LED\n    unsigned char counter;\n    unsigned long temp[21];\n    unsigned long sub;\n    bool data_effect=true;\n    unsigned int heart_rate;//the measurement result of heart rate\n\n    const int max_heartpluse_duty = 2000;//you can change it follow your system\'s request.\n                            //2000 meams 2 seconds. System return error \n                            //if the duty overtrip 2 second.\n    void setup()\n    {\n        pinMode(LED, OUTPUT);\n        Serial.begin(9600);\n        Serial.println("Please ready your chest belt.");\n        delay(5000);\n        arrayInit();\n        Serial.println("Heart rate test begin.");\n        attachInterrupt(0, interrupt, RISING);//set interrupt 0,digital port 2\n    }\n    void loop()\n    {\n        digitalWrite(LED, led_state);//Update the state of the indicator\n    }\n    /*Function: calculate the heart rate*/\n    void sum()\n    {\n     if(data_effect)\n        {\n          heart_rate=1200000/(temp[20]-temp[0]);//60*20*1000/20_total_time \n          Serial.print("Heart_rate_is:\\t");\n          Serial.println(heart_rate);\n        }\n       data_effect=1;//sign bit\n    }\n    /*Function: Interrupt service routine.Get the sigal from the external interrupt*/\n    void interrupt()\n    {\n        temp[counter]=millis();\n        Serial.println(counter,DEC);\n        Serial.println(temp[counter]);\n        switch(counter)\n        {\n            case 0:\n                sub=temp[counter]-temp[20];\n                Serial.println(sub);\n                break;\n            default:\n                sub=temp[counter]-temp[counter-1];\n                Serial.println(sub);\n                break;\n        }\n        if(sub>max_heartpluse_duty)//set 2 seconds as max heart pluse duty\n        {\n            data_effect=0;//sign bit\n            counter=0;\n            Serial.println("Heart rate measure error,test will restart!" );\n            arrayInit();\n        }\n        if (counter==20&&data_effect)\n        {\n            counter=0;\n            sum();\n        }\n        else if(counter!=20&&data_effect)\n        counter++;\n        else \n        {\n            counter=0;\n            data_effect=1;\n        }\n        \n    }\n    /*Function: Initialization for the array(temp)*/\n    void arrayInit()\n    {\n        for(unsigned char i=0;i < 20;i ++)\n        {\n            temp[i]=0;\n        }\n        temp[20]=millis();\n    }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upload the code."),(0,a.kt)("li",{parentName:"ul"},"This is the signal when we are measuring the heart rate:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/GROVE_heart_rate_chest_belt.bmp"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/img/Grove-heart_rate_serial.jpg"})),(0,a.kt)("p",null,"In the first of the figures which is a waveform diagram of the detected heartbeat, a high pulse comes when beating."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"1"),". The chest belt's wings must have contact with your skin to get a high accuracy."),(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"2"),". The maximal distance between chest belt and receive module must be less than 30cm.")),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/Grove-Heart_rate_chest_belt_V1.0eagle_file.zip"},"Grove - Chest Strap Heart Rate Sensor EAGLE File")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Chest_Strap_Heart_Rate_Sensor/res/MeasureHeartRate.zip"},"Chest Strap Heart Rate Sensor Demo Code"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
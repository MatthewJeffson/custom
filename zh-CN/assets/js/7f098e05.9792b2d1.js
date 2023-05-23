"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16606],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>m});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),u=p(r),c=i,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||n;return r?a.createElement(m,l(l({ref:t},h),{},{components:r})):a.createElement(m,l({ref:t},h))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},64298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=r(87462),i=(r(67294),r(3905));const n={description:"Solar Charger Shield V2.2",title:"Solar Charger Shield V2.2",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Solar_Charger_Shield_V2.2",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Solar_Charger_Shield_V2.2",id:"Top_Brand/Arduino/shield/Solar_Charger_Shield_V2.2",title:"Solar Charger Shield V2.2",description:"Solar Charger Shield V2.2",source:"@site/docs/Top_Brand/Arduino/shield/Solar_Charger_Shield_V2.2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Solar_Charger_Shield_V2.2",permalink:"/custom/zh-CN/Solar_Charger_Shield_V2.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Solar_Charger_Shield_V2.2.md",tags:[{label:"Shield",permalink:"/custom/zh-CN/tags/shield"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"Solar Charger Shield V2.2",title:"Solar Charger Shield V2.2",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Solar_Charger_Shield_V2.2",last_update:{date:"01/11/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"SD Card shield V4.0",permalink:"/custom/zh-CN/SD_Card_shield_V4.0"},next:{title:"Spartan Edge Accelerator Board",permalink:"/custom/zh-CN/Spartan-Edge-Accelerator-Board"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Information on use of Solar panels for charging",id:"information-on-use-of-solar-panels-for-charging",level:2},{value:"Caution",id:"caution",level:2},{value:"Usage",id:"usage",level:2},{value:"Testing the solar shield with a simple arduino program",id:"testing-the-solar-shield-with-a-simple-arduino-program",level:2},{value:"Programming Example",id:"programming-example",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],h={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"The solar charger is a stackable shield to Arduino compatible platforms, enables adaptive battery power and act as energy harvester for in-field charging. You may use various batteries that has the voltage of 3.0V-4.2V to shift up for 5V output, or put on Li-ion battery and solar panel to form an autonomous sensor unit. The maximum current provided by the board can get up to 600mA. An usb connector is also useful to charge the battery."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Solar-Charger-Shield-v2.2-p-2391.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Short circuit protection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3W Output Power when connecting battery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Continuous Charge Current Up to 900mA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Battery status indication ( Red : Charging , Green: Charged )")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Micro-USB Connector"))),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Battery input voltage: 3.0~4.5V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB input voltage: 4.75~5.25V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Solar input voltage: 4.8~6V")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Maximum Output Power(with battery): 3W(600mA@5V)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Ripple voltage\uff1a","<","100mV @ 500mA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Dimensions: 68*53mm"))),(0,i.kt)("h2",{id:"applications"},"Applications"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Wireless sensor unit"),(0,i.kt)("li",{parentName:"ul"},"Solar charge"),(0,i.kt)("li",{parentName:"ul"},"Tweet-a-volt-arduino")),(0,i.kt)("h2",{id:"information-on-use-of-solar-panels-for-charging"},"Information on use of Solar panels for charging"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"1) The solar charger shield produces charges under sunlight and light from filament bulbs. Its function is more effective in the former than in the latter. Solar panels require invisible radiations namely ultraviolet and infrared radiations for producing current."),(0,i.kt)("p",null,"2) In order to test the system under filament bulb, hold the solar panel at a distance, less than 20cm(","<"," 0.5 feet). However, the charging may not be effective under filament bulbs."),(0,i.kt)("p",null,"3) Place the solar panel at an angle such that the maximum amount of sunlight is incident on it."),(0,i.kt)("p",null,"4) Protect the solar panel from excessive exposure to water/water vapors. This may oxidize the surface of the solar panel and reduce its performance."),(0,i.kt)("p",null,"5) The Solar panel usually comes with a protective transparent sheet of cover. Remove the transparent plastic sheet for better performance of the solar panel."),(0,i.kt)("p",null,"6) Protect the surface of the solar panel from scratches"),(0,i.kt)("h2",{id:"caution"},"Caution"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"1) The solar charger shield is designed to protect any potential short circuit. However care must be taken to avoid any such situations."),(0,i.kt)("p",null,"2) The solar shield should not be operated at voltages greater than 5V"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"1) Connect the Solar panel and the Li-Pol battery in their designated places as shown in the figure below:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_inputs.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Solar_Charger_Shield_v2.2_inputs.jpg"),(0,i.kt)("p",null,'2) Place the solar under sunlight or filament bulbs as mentioned in the "Information for using solar panels" section'),(0,i.kt)("p",null,"3) Ensure that the charging (Red) light glows as shown in the figure below:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_charging.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"4) When the battery is fully charged, the green light glows."),(0,i.kt)("p",null,"5) Then you can mount the shield on to the arduino. As you power up the solar charger shield, it should power up the arduino as shown in the figure below:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar-Charger-Shield-v2.2_power-arduino.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"testing-the-solar-shield-with-a-simple-arduino-program"},"Testing the solar shield with a simple arduino program"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This section will teach you how to measure the voltage of Lipo Battery."),(0,i.kt)("p",null,"In order to connect the VBAT pin to Analog pin A0, so that we can read the data from A0 pin, we need to  Short R7 using a 0ohm resistor as shown in the figure"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/img/Solar_Charger_Shield_v2.2_shortR7.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h3",{id:"programming-example"},"Programming Example"),(0,i.kt)("p",null,"You can measure the voltage of Battery using the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n Solar charger shield voltage measurement example. Connect VBAT pin to analog pin A0.\n\n The pin measures 2.0 V when not under direct exposre to sunlight and 5V when exposed to sunlight.\n\n This example code is in the public domain.\n\n */\n\n// These constants won\'t change.  They\'re used to give names\n// to the pins used:\nconst int analogInPin = A0;  // Analog input pin that the VBAT pin is attached to\n\n\nint BatteryValue = 0;        // value read from the VBAT pin\nfloat outputValue = 0;        // variable for voltage calculation\n\nvoid setup() {\n    // initialize serial communications at 9600 bps:\n    Serial.begin(9600);\n}\n\nvoid loop() {\n    // read the analog in value:\n    BatteryValue = analogRead(analogInPin);\n    // Calculate the battery voltage value\n    outputValue = (float(BatteryValue)*5)/1023*2;\n    // print the results to the serial monitor:\n    Serial.print("Analog value = " );\n    Serial.print(BatteryValue);\n    Serial.print("\\t voltage = ");\n    Serial.println(outputValue);\n    Serial.println("V \\n");\n\n    // wait 10 milliseconds before the next loop\n    // for the analog-to-digital converter to settle\n    // after the last reading:\n    delay(10);\n}\n')),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar_Charger_Shield_v2.2_sch_pcb.zip"},"Solar Charger Shield v2.2 sch","&","pcb"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/Solar%20Charger%20Shield%20v2.2.pdf"},"Solar Charger Shield v2.2.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/DSE-CN3065.pdf"},"DSE-CN3065.pdf"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield_V2.2/res/ETA1036.pdf"},"ETA1036.pdf")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
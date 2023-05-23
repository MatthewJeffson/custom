"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},86616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const a={description:"Built-in Sensors with Edge Impulse",title:"Built-in Sensors with Edge Impulse",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1111-Edge-Impulse",last_update:{date:"1/13/2023",author:"shuxu hu"}},o="Develop Edge Impulse application to cloud via Helium",s={unversionedId:"Network/SenseCAP_K1100/Embedded_ML_Application/K1111-Edge-Impulse",id:"Network/SenseCAP_K1100/Embedded_ML_Application/K1111-Edge-Impulse",title:"Built-in Sensors with Edge Impulse",description:"Built-in Sensors with Edge Impulse",source:"@site/docs/Network/SenseCAP_K1100/Embedded_ML_Application/K1111-Edge-Impulse.md",sourceDirName:"Network/SenseCAP_K1100/Embedded_ML_Application",slug:"/K1111-Edge-Impulse",permalink:"/custom/zh-CN/K1111-Edge-Impulse",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/Embedded_ML_Application/K1111-Edge-Impulse.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Built-in Sensors with Edge Impulse",title:"Built-in Sensors with Edge Impulse",keywords:["SenseCap"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/K1111-Edge-Impulse",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Data visualisation with Power BI",permalink:"/custom/zh-CN/K1100_Azure_to_PowerBI"},next:{title:"Vision AI with Customizable Models",permalink:"/custom/zh-CN/Vision_AI_with_Customizable_Models"}},l={},u=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Tools We Use",id:"tools-we-use",level:2},{value:"Helium Configuration",id:"helium-configuration",level:2},{value:"Step 1. Create a Integrations with the Google Form support",id:"step-1-create-a-integrations-with-the-google-form-support",level:3},{value:"Step 2. Create a Fuction with the Google Form api and Decoder features",id:"step-2-create-a-fuction-with-the-google-form-api-and-decoder-features",level:3},{value:"Step 3 . Configure the Flows",id:"step-3--configure-the-flows",level:3},{value:"Edge Impulse Configuration",id:"edge-impulse-configuration",level:2},{value:"Ardiuno (Wio Terminal) Configuration",id:"ardiuno-wio-terminal-configuration",level:2},{value:"Have an experience",id:"have-an-experience",level:3},{value:"DIY for more features",id:"diy-for-more-features",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"develop-edge-impulse-application-to-cloud-via-helium"},"Develop Edge Impulse application to cloud via Helium"),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,r.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,r.kt)("font",{color:"white",size:4},(0,r.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,r.kt)("strong",null,"S2100 ",(0,r.kt)("br",null)," Data Logger"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,r.kt)("strong",null,"S2101 ",(0,r.kt)("br",null)," Air Temp & Humidity"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.kt)("strong",null,"S2102 ",(0,r.kt)("br",null)," Light"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,r.kt)("strong",null,"S2103 ",(0,r.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,r.kt)("td",{bgcolor:"#0e3c49"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,r.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,r.kt)("strong",null,"S2104 ",(0,r.kt)("br",null)," Soil Moisture & Temp"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,r.kt)("strong",null,"S2105 ",(0,r.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,r.kt)("strong",null,"S2110 ",(0,r.kt)("br",null)," LoRaWAN\xae Controller"))),(0,r.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,r.kt)("strong",null,"S2120 ",(0,r.kt)("br",null)," 8-in-1 Weather Station")))))),(0,r.kt)("h2",{id:"tools-we-use"},"Tools We Use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Wio Terminal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/"},"Edge impluse")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://console.helium.com/"},"Helium")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-2/"},"Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/u/0/"},"Google Sheets")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/forms/u/0/"},"Google Forms"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Before starting this section, make sure you have known ",(0,r.kt)("strong",{parentName:"p"},"Wio Terminal")," Production\nFor more details, please read"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,r.kt)("strong",{parentName:"a"},"Wio Terminal Get Started"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Connecting-to-Helium/"},(0,r.kt)("strong",{parentName:"a"},"Connecting-to-Helium"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Integrate_into_Google_Sheets_via_Helium/"},(0,r.kt)("strong",{parentName:"a"},"Integrate into Google Sheets via Helium"))))),(0,r.kt)("p",null,"This article show a solution for guys wanna use edgeimpulse to generated models and connect with cloud. In our demo , we will use google sheet.  It's the directly and  "),(0,r.kt)("h2",{id:"helium-configuration"},"Helium Configuration"),(0,r.kt)("h3",{id:"step-1-create-a-integrations-with-the-google-form-support"},"Step 1. Create a Integrations with the Google Form support"),(0,r.kt)("p",null,"This step is similar to the steps in the article ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Integrate_into_Google_Sheets_via_Helium/"},(0,r.kt)("strong",{parentName:"a"},"Integrate into Google Sheets via Helium"))),(0,r.kt)("p",null,"The things we need to do is name the integration and simply save the configuration."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/intergration.png"})),(0,r.kt)("p",null,"Connecting to Google Form"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Create"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_1.png"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect with Google Sheets"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_2.png"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Link with Google Form ID"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Form_3.png"})))),(0,r.kt)("h3",{id:"step-2-create-a-fuction-with-the-google-form-api-and-decoder-features"},"Step 2. Create a Fuction with the Google Form api and Decoder features"),(0,r.kt)("p",null,"Make sure that Google Form is connected with the Fuction ,filled with the ID we got from the above steps."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Func.png"})),(0,r.kt)("p",null,"We need to create a Fuction with the Decoder Support for our data flow transfer , like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Javascript"},'function Decoder(bytes, port) {\n\n    var decoded = {};\n \n    function transformers(bytes) {\n        if (bytes[0] == 255 || bytes[0] == 0) {\n            value = bytes[2] * 256 + bytes[3];\n        }\n        return value;\n    }\n \n    if (port == 8) {\n        decoded.class = transformers(bytes.slice(0, 4));\n    }\n  \n  var decodedPayload = {\n    "class": decoded.class \n  };\n\n  // END TODO\n\n  return Serialize(decodedPayload)\n}\n\nvar field_mapping = {\n  "class": "entry.39410305"\n};\n\nfunction Serialize(payload) {\n  var str = [];\n  for (var key in payload) {\n    if (payload.hasOwnProperty(key)) {\n      var name = encodeURIComponent(field_mapping[key]);\n      var value = encodeURIComponent(payload[key]);\n      str.push(name + "=" + value);\n    }\n  }\n  return str.join("&");\n}\n// DO NOT REMOVE: Google Form Function\\\n')),(0,r.kt)("h3",{id:"step-3--configure-the-flows"},"Step 3 . Configure the Flows"),(0,r.kt)("p",null,"Ensure connection"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal_Edge_Impulse_with_Helium/Flows.png"})),(0,r.kt)("h2",{id:"edge-impulse-configuration"},"Edge Impulse Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more details, please read:\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-TinyML-EI-2/"},"Wio Terminal Edge Impulse Continuous Motion Recognition with Built-in Accelerometer"))),(0,r.kt)("h2",{id:"ardiuno-wio-terminal-configuration"},"Ardiuno (Wio Terminal) Configuration"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Because sensors and environments are different, direct burning of models trained on different carrier boards is not always ideal. Reliable models need to be trained by users themselves, so only test code is provided for quick experience.")),(0,r.kt)("h3",{id:"have-an-experience"},"Have an experience"),(0,r.kt)("p",null,"After we generated the library from Edge Impulse. We need to modify the code for data sending via Lora on Wio Terminal . If you just wanna have an experience, simply copy the code below and flash is on your Wio Terminal via Arduino IDE."),(0,r.kt)("p",null,"Flash the test code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include <AIot_Example_inferencing.h>\n#include"LIS3DHTR.h"\n#include"TFT_eSPI.h"\nLIS3DHTR<TwoWire> lis;\nTFT_eSPI tft;\n#include <SoftwareSerial.h>\n#include <Arduino.h>\n#include <SensirionI2CSht4x.h>\n#include <Wire.h>\n\nSoftwareSerial mySerial(A0, A1); // RX, TX\n\nSensirionI2CSht4x sht4x;\n \nstatic char recv_buf[512];\nstatic bool is_exist = false;\nstatic bool is_join = false;\n\nstatic int at_send_check_response(char *p_ack, int timeout_ms, char *p_cmd, ...)\n{\n    int ch;\n    int num = 0;\n    int index = 0;\n    int startMillis = 0;\n    va_list args;\n    memset(recv_buf, 0, sizeof(recv_buf));\n    va_start(args, p_cmd);\n    mySerial.printf(p_cmd, args);\n    Serial.printf(p_cmd, args);\n    va_end(args);\n    delay(200);\n    startMillis = millis();\n \n    if (p_ack == NULL)\n    {\n        return 0;\n    }\n \n    do\n    {\n        while (mySerial.available() > 0)\n        {\n            ch = mySerial.read();\n            recv_buf[index++] = ch;\n            Serial.print((char)ch);\n            delay(2);\n        }\n \n        if (strstr(recv_buf, p_ack) != NULL)\n        {\n            return 1;\n        }\n \n    } while (millis() - startMillis < timeout_ms);\n    return 0;\n}\n \nstatic void recv_prase(char *p_msg)\n{\n    if (p_msg == NULL)\n    {\n        return;\n    }\n    char *p_start = NULL;\n    int data = 0;\n    int rssi = 0;\n    int snr = 0;\n \n    p_start = strstr(p_msg, "RX");\n    if (p_start && (1 == sscanf(p_start, "RX: \\"%d\\"\\r\\n", &data)))\n    {\n        Serial.println(data);\n    }\n \n    p_start = strstr(p_msg, "RSSI");\n    if (p_start && (1 == sscanf(p_start, "RSSI %d,", &rssi)))\n    {\n        Serial.println(rssi);\n    }\n \n    p_start = strstr(p_msg, "SNR");\n    if (p_start && (1 == sscanf(p_start, "SNR %d", &snr)))\n    {\n        Serial.println(snr);\n    }\n}\n////// Send message block end\n\n\n/* Constant defines -------------------------------------------------------- */\n#define CONVERT_G_TO_MS2    9.80665f\n#define MAX_ACCEPTED_RANGE  2.0f        // starting 03/2022, models are generated setting range to +-2, but this example use Arudino library which set range to +-4g. If you are using an older model, ignore this value and use 4.0f instead\n\n/* Private variables ------------------------------------------------------- */\nstatic bool debug_nn = false; // Set this to true to see e.g. features generated from the raw signal\n\n/**\n* @brief      Arduino setup function\n*/\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    Serial.println("Edge Impulse Inferencing Demo");\n\n    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(TFT_WHITE);\n \n    lis.begin(Wire1);\n \n    if (!lis.available()) {\n    Serial.println("Failed to initialize IMU!");\n    while (1);\n    }\n    else {\n        ei_printf("IMU initialized\\r\\n");\n    }\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_100HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz \n    lis.setFullScaleRange(LIS3DHTR_RANGE_16G); // Setting scale range to 2g, select from 2,4,8,16g\n\n\n    if (EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME != 3) {\n        ei_printf("ERR: EI_CLASSIFIER_RAW_SAMPLES_PER_FRAME should be equal to 3 (the 3 sensor axes)\\n");\n        return;\n    }\n\n    mySerial.begin(9600);\n\n    Wire.begin();\n\n    uint16_t error;\n    char errorMessage[256];\n\n    sht4x.begin(Wire);\n\n    uint32_t serialNumber;\n    error = sht4x.serialNumber(serialNumber);\n    delay(5000);\n    if (error) {\n        Serial.print("Error trying to execute serialNumber(): ");\n        errorToString(error, errorMessage, 256);\n        Serial.println(errorMessage);\n    } else {\n        Serial.print("Serial Number: ");\n        Serial.println(serialNumber);\n    }\n    \n    Serial.print("E5 LORAWAN TEST\\r\\n");\n \n    if (at_send_check_response("+AT: OK", 100, "AT\\r\\n"))\n    {\n        is_exist = true;\n        at_send_check_response("+ID: DevEui", 1000, "AT+ID=DevEui,\\"608XXXXXXXXEE7\\"\\r\\n");\n        at_send_check_response("+ID: AppEui", 1000, "AT+ID=AppEui,\\"608XXXXXXXX85D\\"\\r\\n");\n        at_send_check_response("+MODE: LWOTAA", 1000, "AT+MODE=LWOTAA\\r\\n");\n        at_send_check_response("+DR: EU868", 1000, "AT+DR=EU868\\r\\n");\n        at_send_check_response("+CH: NUM", 1000, "AT+CH=NUM,0-2\\r\\n");\n        at_send_check_response("+KEY: APPKEY", 1000, "AT+KEY=APPKEY,\\"E1EF1AC8XXXXXXXXXXXXXXXX05C5\\"\\r\\n");\n        at_send_check_response("+CLASS: A", 1000, "AT+CLASS=A\\r\\n");\n        at_send_check_response("+PORT: 8", 1000, "AT+PORT=8\\r\\n");\n        delay(200);\n        is_join = true;\n    }\n    else\n    {\n        is_exist = false;\n        Serial.print("No E5 module found.\\r\\n");\n    }\n}\n\n/**\n * @brief Return the sign of the number\n * \n * @param number \n * @return int 1 if positive (or 0) -1 if negative\n */\nfloat ei_get_sign(float number) {\n    return (number >= 0.0) ? 1.0 : -1.0;\n}\n\n/**\n* @brief      Get data and run inferencing\n*\n* @param[in]  debug  Get debug info if true\n*/\nvoid loop()\n{\n    ei_printf("\\nStarting inferencing in 2 seconds...\\n");\n\n    delay(2000);\n\n    ei_printf("Sampling...\\n");\n\n    // Allocate a buffer here for the values we\'ll read from the IMU\n    float buffer[EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE] = { 0 };\n\n    for (size_t ix = 0; ix < EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE; ix += 3) {\n        // Determine the next tick (and then sleep later)\n        uint64_t next_tick = micros() + (EI_CLASSIFIER_INTERVAL_MS * 1000);\n        lis.getAcceleration(&buffer[ix], &buffer[ix + 1], &buffer[ix + 2]);\n\n        for (int i = 0; i < 3; i++) {\n            if (fabs(buffer[ix + i]) > MAX_ACCEPTED_RANGE) {\n                buffer[ix + i] = ei_get_sign(buffer[ix + i]) * MAX_ACCEPTED_RANGE;\n            }\n        }\n\n        buffer[ix + 0] *= CONVERT_G_TO_MS2;\n        buffer[ix + 1] *= CONVERT_G_TO_MS2;\n        buffer[ix + 2] *= CONVERT_G_TO_MS2;\n\n        delayMicroseconds(next_tick - micros());\n    }\n\n    // Turn the raw buffer in a signal which we can the classify\n    signal_t signal;\n    int err = numpy::signal_from_buffer(buffer, EI_CLASSIFIER_DSP_INPUT_FRAME_SIZE, &signal);\n    if (err != 0) {\n        ei_printf("Failed to create signal from buffer (%d)\\n", err);\n        return;\n    }\n\n    // Run the classifier\n    ei_impulse_result_t result = { 0 };\n\n    err = run_classifier(&signal, &result, debug_nn);\n    if (err != EI_IMPULSE_OK) {\n        ei_printf("ERR: Failed to run classifier (%d)\\n", err);\n        return;\n    }\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n    \n   int classification_flag = 0;\n\n   if (result.classification[1].value > 0.7) {\n    tft.fillScreen(TFT_PURPLE);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Wave", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n    classification_flag = 1;\n   }\n \n   if (result.classification[2].value > 0.7) {\n    tft.fillScreen(TFT_RED);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Circle", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n    classification_flag = 2;\n   }\n\n    \n    if (is_exist){\n        int ret = 0;\n        if (is_join){\n            ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\\r\\n");\n            if (ret){\n              is_join = false;\n            }\n            else{\n                Serial.println("");\n                Serial.print("JOIN failed!\\r\\n\\r\\n");\n                delay(5000);\n            }\n        }\n        else{\n            char cmd[128];\n            sprintf(cmd, "AT+CMSGHEX=\\"%08X %08X\\"\\r\\n", classification_flag);\n            ret = at_send_check_response("Done", 10000, cmd);\n            if (ret){\n              Serial.print("classification_flag:");\n              Serial.print(classification_flag);\n              Serial.print("\\t");\n              recv_prase(recv_buf);\n            }\n            else{\n              Serial.print("Send failed!\\r\\n\\r\\n");\n            }\n            delay(5000);\n        }\n    }\n    else\n    {\n      delay(500);\n    }\n\n}\n\n#if !defined(EI_CLASSIFIER_SENSOR) || EI_CLASSIFIER_SENSOR != EI_CLASSIFIER_SENSOR_ACCELEROMETER\n#error "Invalid model for current sensor"\n#endif\n')),(0,r.kt)("h3",{id:"diy-for-more-features"},"DIY for more features"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more details, please see the documentation below."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Connecting-to-Helium/"},(0,r.kt)("strong",{parentName:"a"},"Connecting-to-Helium"))))),(0,r.kt)("p",null,"Something we might pay more attention to :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Store classification results:"),(0,r.kt)("p",{parentName:"li"},"  We can set a threshold to change our flags when a certain condition is present, and different categories are given different labels."),(0,r.kt)("p",{parentName:"li"},"  We can comment tft fuction for speed."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'int classification_flag = 0;\nif (result.classification[1].value > 0.7) {\n    tft.fillScreen(TFT_PURPLE);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Wave", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n    classification_flag = 1;\n}\nif (result.classification[2].value > 0.7) {\n    tft.fillScreen(TFT_RED);\n    tft.setFreeFont(&FreeSansBoldOblique12pt7b);\n    tft.drawString("Circle", 20, 80);\n    delay(1000);\n    tft.fillScreen(TFT_WHITE);\n    classification_flag = 2;\n}\n....\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data send code block:"),(0,r.kt)("p",{parentName:"li"},"  With the Lora network available, we can use the function to send the tag to Helium and recover it by Decoder we wrote in the Helium."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'if (is_exist){\n    int ret = 0;\n    if (is_join){\n        ret = at_send_check_response("+JOIN: Network joined", 12000, "AT+JOIN\\r\\n");\n        if (ret){\n          is_join = false;\n        }\n        else{\n            Serial.println("");\n            Serial.print("JOIN failed!\\r\\n\\r\\n");\n            delay(5000);\n        }\n    }\n    else{\n        char cmd[128];\n        sprintf(cmd, "AT+CMSGHEX=\\"%08X %08X\\"\\r\\n", classification_flag); // Change classification_flag to data wanna transfer\n        ret = at_send_check_response("Done", 10000, cmd);\n        if (ret){\n          Serial.print("classification_flag:");s\n          Serial.print(classification_flag);\n          Serial.print("\\t");\n          recv_prase(recv_buf);\n        }\n        else{\n          Serial.print("Send failed!\\r\\n\\r\\n");\n        }\n        delay(5000);\n    }\n}\nelse\n{\n  delay(500);\n}\n')))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55552],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},98710:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={description:"Xadow - Grove Adaptor",title:"Xadow - Grove Adaptor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Grove_Adaptor",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/Xadow/Xadow_Grove_Adaptor",id:"Seeed_Elderly/Xadow/Xadow_Grove_Adaptor",title:"Xadow - Grove Adaptor",description:"Xadow - Grove Adaptor",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Grove_Adaptor.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Grove_Adaptor",permalink:"/custom/Xadow_Grove_Adaptor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Grove_Adaptor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Xadow - Grove Adaptor",title:"Xadow - Grove Adaptor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Grove_Adaptor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - Gesture v1.0",permalink:"/custom/Xadow_Gesture_v1.0"},next:{title:"Xadow - IMU 6DOF",permalink:"/custom/Xadow_IMU_6DOF"}},d={},s=[{value:"Specification",id:"specification",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/X_adaptor_01.jpg",alt:null})," "),(0,o.kt)("p",null,"Xadow Grove Adaptor is a device that converts Grove interface to Xadow Interface to compatible with Xadow System. It can achieve this function: analog signal from two analog Grove interface will output by Xadow I2C bus through ADC. The signal from Grove I2C Interface will directly lead to Xadow I2C bus without conversion. The A/D conversion based on ADCC121C021, a 12-bit precision ADC, create high precision."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Adaptor-p-1624.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,o.kt)("h2",{id:"specification"},"Specification"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Work Voltage\uff1a 3.3V")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A/D Resolution\uff1a12 bit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sample Rate\uff1a 188.9 ksps")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"I2C  address variable")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dimensions: 25.43mm x 20.35mm"))),(0,o.kt)("h2",{id:"demonstration"},"Demonstration"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Next we will show you how to read the output value of Grove modules by using Xadow Grove Adaptor."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Measure Analog Signal")),(0,o.kt)("p",null,'If measure analog signal Grove module outputs, you need to connect Grove module to analog Grove Interface where they are marked as "A0" and "A1".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The Hardware Installation should be:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor2.jpg",alt:null})),(0,o.kt)("p",null,"Here Grove - Gas sensor outputs analog signal is connected to AO, so the I2C Address applied to the test code is 0x58(default). In other words, the I2C Address should be 0x59 when Grove - Gas Sensor connect to A1 interface."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"The test code is:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<pre>\n#include &lt;Wire.h&gt;\n#include &lt;Streaming.h&gt;\n\n#define ADDR_ADC121             0x58\n\n#define V_REF 3.00\n\n#define REG_ADDR_RESULT         0x00\n#define REG_ADDR_ALERT          0x01\n#define REG_ADDR_CONFIG         0x02\n#define REG_ADDR_LIMITL         0x03\n#define REG_ADDR_LIMITH         0x04\n#define REG_ADDR_HYST           0x05\n#define REG_ADDR_CONVL          0x06\n#define REG_ADDR_CONVH          0x07\n\nunsigned int getData;\nfloat analogVal=0;         // convert\nvoid init_adc()\n{\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_CONFIG);                // Configuration Register\n    Wire.write(0x20);\n    Wire.endTransmission();\n}\n\nvoid read_adc()     //unsigned int *data\n{\n\n    Wire.beginTransmission(ADDR_ADC121);        // transmit to device\n    Wire.write(REG_ADDR_RESULT);                // get result\n    Wire.endTransmission();\n\n    Wire.requestFrom(ADDR_ADC121, 2);           // request 2byte from device\n    delay(1);\n    if(Wire.available()&lt;=2)\n    {\n        getData = (Wire.read()&amp;0x0f)&lt;&lt;8;\n        getData |= Wire.read();\n    }\n    Serial.print("getData:");\n    Serial.println(getData);\n    delay(5);\n    Serial.print("The analog value is:");\n    Serial.print(getData*V_REF*2/4096);\n    Serial.println("V");\n}\nvoid setup()\n{\n    Serial.begin(9600);\n    Wire.begin();\n    init_adc();\n}\n\nvoid loop()\n{\n    read_adc();//adcRead);\n    delay(50);\n}</pre>\n')),(0,o.kt)("p",null,"Upload code to Xadow Main Board, then open the serial monitor to observe output value\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Xadow_Grove_Adaptor_Result.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Measure I2C Signal")),(0,o.kt)("p",null,"You need to connect  Grove module to I2C interface of Xadow Grove Adaptor when communication mode of Grove module is I2C. Now the sever of Xadow Grove Adaptor is delivering signal to Xadow I2C bus without ADC.\nTaking Grove - Digital Light Sensor as example, let's learn its usage."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Installation\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/XadowAdaptor1.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Download the code\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'<pre>\n/* Digital Light sensor demo V1.0\n* Connect the sensor to I2C port of Arduino to use.\n*\n* By:https://www.seeedstudio.com\n*/\n#include &lt;Wire.h&gt;\n#include &lt;Digital_Light_TSL2561.h&gt;\nvoid setup()\n{\n  Wire.begin();\n  Serial.begin(9600);\n  TSL2561.init();\n}\n\nvoid loop()\n{\n  unsigned long  Lux;\n  TSL2561.getLux();\n  Serial.print("The Light value is: ");\n  Serial.println(TSL2561.calculateLux(0,0,1));\n  delay(1000);\n  }</pre>\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Open the serial monitor to observe the LUX value. Artificially change the light intensity of surrounding environment, you will see the obvious change of the output value.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/img/Digital_Light_Sensor_Score_Picture.jpg",alt:null})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip"},"Xadow Grove Adaptor Eagle File"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Grove_Adaptor/res/Xadow_Grove_Adaptor_Eagle_File.zip"},"A/DC IC ADC121C021 datasheet")))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
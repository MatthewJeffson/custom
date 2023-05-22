"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[56234],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>d});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(i),f=n,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||l;return i?r.createElement(d,a(a({ref:t},u),{},{components:i})):r.createElement(d,a({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,a=new Array(l);a[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,a[1]=o;for(var s=2;s<l;s++)a[s]=i[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},96903:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const l={description:"Grove - Differential Amplifier v1.0",title:"Grove - Differential Amplifier v1.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Differential_Amplifier_v1.0",last_update:{date:"2/22/2023",author:"jianjing Huang"}},a=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.0",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.0",title:"Grove - Differential Amplifier v1.0",description:"Grove - Differential Amplifier v1.0",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-Differential_Amplifier_v1.0",permalink:"/custom/zh-CN/Grove-Differential_Amplifier_v1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676995200,formattedLastUpdatedAt:"2023\u5e742\u670821\u65e5",frontMatter:{description:"Grove - Differential Amplifier v1.0",title:"Grove - Differential Amplifier v1.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Differential_Amplifier_v1.0",last_update:{date:"2/22/2023",author:"jianjing Huang"}}},p={},s=[{value:"Feature",id:"feature",level:2},{value:"Application",id:"application",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Amplifier Precision Test",id:"amplifier-precision-test",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_V2.jpg",alt:null})),(0,n.kt)("p",null,"Have you found that setting up an amplifier IC on the breadboard is a troublesome and totally no-need-to-repeat job? This Grove module can save you clutter to settle up such an IC by integrating the whole operating circuit. It's designed for precise differential-input amplification. Input the differential signals of your sensor to this module through the male pins, then your Arduino will get a precisely amplified output from the Grove interface. The gain scale factor is selectable. You can get a 304 times or 971 times amplification via a switch on the board."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"High amplifying precision")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Selectable scale factor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Can be conveniently read by Arduino")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Strong input protection: \xb140V"))),(0,n.kt)("h2",{id:"application"},"Application"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Data acquisition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Battery operated systems")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pressure and temperature bridge amplifiers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"General purpose instrumentation"))),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("hr",null),(0,n.kt)("table",{cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2",scope:"col"}," Item"),(0,n.kt)("th",{scope:"col"}," Min"),(0,n.kt)("th",{scope:"col"}," Typical"),(0,n.kt)("th",{scope:"col"}," Max"),(0,n.kt)("th",{scope:"col"}," Unit")),(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2",scope:"row"}," Operating Voltage"),(0,n.kt)("td",null," 2.7"),(0,n.kt)("td",null," 5.0"),(0,n.kt)("td",null," 36"),(0,n.kt)("td",null," VDC")),(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2",scope:"row"}," Input Voltage"),(0,n.kt)("td",null," 0.1"),(0,n.kt)("td",null," \\"),(0,n.kt)("td",null," (Vcc-0.8)/Gain"),(0,n.kt)("td",null," mV")),(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2",scope:"row"}," Output Voltage"),(0,n.kt)("td",null," 0"),(0,n.kt)("td",null," \\"),(0,n.kt)("td",null," Vcc-0.80"),(0,n.kt)("td",null," mV")),(0,n.kt)("tr",null,(0,n.kt)("th",{rowspan:"2"}," Gain"),(0,n.kt)("td",null," Select 304"),(0,n.kt)("td",null," 297.92"),(0,n.kt)("td",null," 304"),(0,n.kt)("td",null," 310.08"),(0,n.kt)("td",{colspan:"2",rowspan:"2"}," /")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Select 971"),(0,n.kt)("td",null," 951.58"),(0,n.kt)("td",null," 971"),(0,n.kt)("td",null," 990.42"))),(0,n.kt)("h2",{id:"interface-function"},"Interface Function"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Amplifier_Interface3.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"J2\uff1a"),"Signal Source Interface"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"J1\uff1a"),"Output Interface, Standard Grove Interface"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R1\uff1a"),"62\u03a9 gain resistor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"R3:")," 200\u03a9 gain resistor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"U1:")," INA125 IC, Instrumentation amplifier"),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Sensor Choosing")),(0,n.kt)("p",null,"The amplifier can turn signals in mA scale up to A scale. Before using it, make sure the output range of your sensor is in mA scale. For example, ",(0,n.kt)("a",{parentName:"p",href:"/Weight_Sensor_Load_Cell_0-500g"},"Weight Sensor")," is one of them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Connector Reforming")),(0,n.kt)("p",null,"To pair the weight sensor up with the male pins on the amplifier, female connectors need to be soldered on its wires."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Solder.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Hardware Hookup")),(0,n.kt)("p",null,"Connect the weight sensor to the amplifier as the picture depicts below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Connect5.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4. Measurement")),(0,n.kt)("p",null,"Copy and paste the demo code below to Arduino IDE and upload it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},'void setup()\n{\n    Serial.begin(9600);\n    Serial.println("start");\n}\n\nvoid loop()\n{\n    int i;\n    int value;\n    float V,Vo;\n    float Sum=0;\n    for(i=0;i&lt;10;i++)\n    {\n        value=analogRead(4);\n        V=value*5.00/1023;\n        Sum+=V;\n        delay(10);\n    }\n    Vo=Sum/10;\n    Serial.print("Output score:");\n    Serial.println(Vo);\n    delay(1000);\n}\n')),(0,n.kt)("p",null,"You can view the amplified signals via serial monitor. For the value of the input signal, you need to use the multimeter to measure the voltage difference between VIN+ and VIN-."),(0,n.kt)("h2",{id:"amplifier-precision-test"},"Amplifier Precision Test"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Next is a test to find out the precision of amplifier. We collected 100 groups of input signals and output signals of amplifier, under either 304 or 971 scale factor condition, and plotted following two graphs."),(0,n.kt)("p",null,"We gradually added the load of weight sensor by adding water drop by drop into a bottle tied to it."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/TEST_Score1.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/img/Test_Score_Picture2.jpg",alt:null})),(0,n.kt)("p",null,"The horizontal axis represents the input voltage and the vertical axis represents the output voltage. With the weight increase of the bottle, the input signal turns up linearly. The actual gain of the first graph is 300.1 which has 1.3% deviation from theoretical gain, 304. And the actual gain of the second graph is 971. The deviation is 0.8% compared to 964.2."),(0,n.kt)("p",null,"The measurement range is determined by power supply voltage VCC , the maximum output voltage is between (VCC-1.2) and (VCC-0.8)."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resource"},"Resource"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier_eagle_file.zip"},"Amplifier 1.0 Eagle File"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/Amplifier.pdf"},"Amplifier1.0 Schematic"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.0/res/INA125.pdf"},"INA125 Datasheet")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,n.kt)("br",null)),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
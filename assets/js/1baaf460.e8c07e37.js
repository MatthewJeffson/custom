"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[43613],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>f});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(i),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return i?r.createElement(f,a(a({ref:t},u),{},{components:i})):r.createElement(f,a({ref:t},u))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,a=new Array(l);a[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:n,a[1]=o;for(var p=2;p<l;p++)a[p]=i[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},22435:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const l={title:"Grove - Differential Amplifier v1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Differential_Amplifier_v1.2/",slug:"/Grove-Differential_Amplifier_v1.2",last_update:{date:"01/09/2022",author:"gunengyu"}},a=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.2",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.2",title:"Grove - Differential Amplifier v1.2",description:"This Grove is designed for precise differential-input amplification. Input the differential signals of your sensor to this module through the male pins, then your Arduino will get a precisely amplified output from the Grove interface. The gain scale factor is selectable. You can get a 35 times or 1085 times amplification via a switch on the board.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.2.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-Differential_Amplifier_v1.2",permalink:"/custom/Grove-Differential_Amplifier_v1.2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-Differential_Amplifier_v1.2.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"Jan 9, 2022",frontMatter:{title:"Grove - Differential Amplifier v1.2",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Differential_Amplifier_v1.2/",slug:"/Grove-Differential_Amplifier_v1.2",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Joint v2.0",permalink:"/custom/Grove-Joint_v2.0"},next:{title:"Grove - I2C Hub",permalink:"/custom/Grove-I2C_Hub"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Grove-Differential_Amplifier_v1.2.jpg",alt:null})),(0,n.kt)("p",null,"This Grove is designed for precise differential-input amplification. Input the differential signals of your sensor to this module through the male pins, then your Arduino will get a precisely amplified output from the Grove interface. The gain scale factor is selectable. You can get a 35 times or 1085 times amplification via a switch on the board."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Differential-Amplifier-p-1284.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"High amplifying precision"),(0,n.kt)("li",{parentName:"ul"},"Selectable scale factor"),(0,n.kt)("li",{parentName:"ul"},"Can be conveniently read by Arduino")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data acquisition"),(0,n.kt)("li",{parentName:"ul"},"Battery operated systems"),(0,n.kt)("li",{parentName:"ul"},"Pressure and temperature bridge amplifiers"),(0,n.kt)("li",{parentName:"ul"},"General purpose instrumentation")),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{colspan:"2",scope:"col"},"Item"),(0,n.kt)("th",{scope:"col"},"Min"),(0,n.kt)("th",{scope:"col"},"Typical"),(0,n.kt)("th",{scope:"col"},"Max"),(0,n.kt)("th",{scope:"col"},"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{colspan:"2",scope:"row"},"Operating Voltage"),(0,n.kt)("td",null,"2.7"),(0,n.kt)("td",null,"5.0"),(0,n.kt)("td",null,"5.5"),(0,n.kt)("td",null,"VDC")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{colspan:"2",scope:"row"},"Input Voltage"),(0,n.kt)("td",null,"0.1"),(0,n.kt)("td",null,"\\\\"),(0,n.kt)("td",null,"(Vcc-0.8)/Gain"),(0,n.kt)("td",null,"mV")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{colspan:"2",scope:"row"},"Output Voltage"),(0,n.kt)("td",null,"0"),(0,n.kt)("td",null,"\\\\"),(0,n.kt)("td",null,"Vcc-0.80"),(0,n.kt)("td",null,"mV")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{rowspan:"2"},"Gain"),(0,n.kt)("td",null,"Select 35"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"35"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",{colspan:"2",rowspan:"2"},"/")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("td",null,"Select 1085"),(0,n.kt)("td",null,"/"),(0,n.kt)("td",null,"1085"),(0,n.kt)("td",null,"/"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Sensor Choosing")),(0,n.kt)("p",null,"The amplifier can turn signals in mA scale up to A scale. Before using it, make sure the output range of your sensor is in mA scale. For example, ",(0,n.kt)("a",{parentName:"p",href:"/Weight_Sensor_Load_Cell_0-500g"},"Weight Sensor")," is one of them."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Connector Reforming")),(0,n.kt)("p",null,"To pair the weight sensor up with the male pins on the amplifier, female connectors need to be soldered on its wires."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Solder.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3. Hardware Hookup")),(0,n.kt)("p",null,"Connect the weight sensor to the amplifier as the picture depicts below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/img/Connect5.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"4. Measurement")),(0,n.kt)("p",null,"Copy and paste the demo code below to Arduino IDE and upload it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    void setup()\n    {\n      Serial.begin(9600);\n      Serial.println("start");\n    }\n\n    void loop()\n    {\n      int i;\n      int value;\n      float V,Vo;\n      float Sum=0;\n      for(i=0;i<10;i++)\n      {\n        value=analogRead(4);\n        V=value*5.00/1023;\n        Sum+=V;\n        delay(10);\n      }\n      Vo=Sum/10;\n      Serial.print("Output score:");\n      Serial.println(Vo);\n      delay(1000);\n    } \n')),(0,n.kt)("p",null,"You can view the amplified signals via serial monitor. For the value of the input signal, you need to use the multimeter to measure the voltage difference between VIN+ and VIN-."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2_eagle.zip"},"v1.2 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Grove-Differential_Amplifier_v1.2.pdf"},"v1.2 Schematic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Differential_Amplifier_v1.2/res/Ina132.pdf"},"INA132 Datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
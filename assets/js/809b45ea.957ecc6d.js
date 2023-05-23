"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86847],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=o,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905));const i={description:"Grove - Mouse Encoder",title:"Grove - Mouse Encoder",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Mouse_Encoder",last_update:{date:"1/7/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-Mouse_Encoder",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-Mouse_Encoder",title:"Grove - Mouse Encoder",description:"Grove - Mouse Encoder",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Mouse_Encoder.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Grove-Mouse_Encoder",permalink:"/custom/Grove-Mouse_Encoder",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Mouse_Encoder.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673049600,formattedLastUpdatedAt:"Jan 7, 2023",frontMatter:{description:"Grove - Mouse Encoder",title:"Grove - Mouse Encoder",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Mouse_Encoder",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Mini Track Ball",permalink:"/custom/Grove-Mini_Track_Ball"},next:{title:"Grove - Piezo Vibration Sensor",permalink:"/custom/Grove-Piezo_Vibration_Sensor"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"<strong>Parts list</strong>",id:"parts-list",level:3},{value:"Get started",id:"get-started",level:2},{value:"Basic demo",id:"basic-demo",level:3},{value:"Material required",id:"material-required",level:4},{value:"Connections",id:"connections",level:4},{value:"Code",id:"code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_product_view.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"Grove - Mouse Encoder is a type of mechanical incremental rotary encoder with feedback data of rotary direction and rotary speed",(0,o.kt)("sup",null,"[","1","]"),". It features standard Grove interface that will save your lots of work in wiring and programming. Also, it is well adapted to heavy duty and a harsh environment. This product can be applied in toys, robots, and consumer input devices."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-%E2%80%93-Mouse-Encoder-p-2607.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("div",{className:"admonition note"},(0,o.kt)("p",{className:"admonition-title"},"Note"),"The rotating speed is designed to be less 1000 rad/min(radian per minute)."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Versatile for different environment."),(0,o.kt)("li",{parentName:"ul"},"Well adapted for heavy duty and harsh environment."),(0,o.kt)("li",{parentName:"ul"},"With detents and a nice feel."),(0,o.kt)("li",{parentName:"ul"},"Standard Grove interface for easier programming and wiring."),(0,o.kt)("li",{parentName:"ul"},"Accurate and reliable.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"applications"},"Applications"),(0,o.kt)("p",null,"It is versatile for different applications in harsh environment such as toys, robotics and consumer input devices."),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Min."),(0,o.kt)("th",{parentName:"tr",align:null},"Typical"),(0,o.kt)("th",{parentName:"tr",align:null},"Max."))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating voltage(V)"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"3.3"),(0,o.kt)("td",{parentName:"tr",align:null},"5.5")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating current(mA)"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"10"),(0,o.kt)("td",{parentName:"tr",align:null},"13")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Duty(constant speed)"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"50%"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Phase difference(constant speed)"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"\u03c0/4"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Pulse per circle"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0"),(0,o.kt)("td",{parentName:"tr",align:null},"12"),(0,o.kt)("td",{parentName:"tr",align:null},"\xa0")))),(0,o.kt)("div",{className:"admonition note"},(0,o.kt)("p",{className:"admonition-title"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"There is no knob included in product list. Because we think it will make this encoder more versatile for different environments."),(0,o.kt)("li",null,"You can find ",(0,o.kt)("a",{href:"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove-Mouse_Encoder_Dimensions.pdf"},"dimensions")," file in PDF format, and you can customize a knob according to the dimensions."),(0,o.kt)("ol",null))),(0,o.kt)("div",{className:"admonition tip"},(0,o.kt)("p",{className:"admonition-title"},"Tip"),"You can just use a suitable hexagonal screwdriver bit if you only are building a prototype for your project."),(0,o.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove interface"),(0,o.kt)("br",{parentName:"p"}),"\n","Connect main control board such as ",(0,o.kt)("strong",{parentName:"p"},"Seeeduino")," board with driver board."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hexagonal opening"),(0,o.kt)("br",{parentName:"p"}),"\n","An opening you pass a knob through."),(0,o.kt)("h3",{id:"parts-list"},(0,o.kt)("strong",{parentName:"h3"},"Parts list")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parts name"),(0,o.kt)("th",{parentName:"tr",align:null},"Quantity"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grove - Mouse Encoder(no knob included)"),(0,o.kt)("td",{parentName:"tr",align:null},"1 PC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grove - Universal Cable"),(0,o.kt)("td",{parentName:"tr",align:null},"1 PC")))),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("p",null,"This section will show you how to build an IDE environment for building applications with Grove - Mouse Encoder."),(0,o.kt)("div",{className:"admonition note"},(0,o.kt)("p",{className:"admonition-title"},"Notes"),(0,o.kt)("ol",null,(0,o.kt)("li",null,"Duty circle will be bigger if the speed of rotating is slow."),(0,o.kt)("li",null,"The pulse width (PW) will not be the same if rotating speed is not constant."),(0,o.kt)("li",null,"The rotating speed is supposed to be low than 1000 rad/min or it will lead to narrow output PW or cause damage to this encoder."),(0,o.kt)("li",null,"The output voltage will be uncertain (high or low voltage) for no rotating circumstance since the position of pulse inside this encoder is not certain."))),(0,o.kt)("h3",{id:"basic-demo"},"Basic demo"),(0,o.kt)("p",null,"This demo shows how to detect position and detect direction."),(0,o.kt)("h4",{id:"material-required"},"Material required"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Seeeduino V4.2"),(0,o.kt)("li",{parentName:"ul"},"Base shield V2.0"),(0,o.kt)("li",{parentName:"ul"},"USB cable (type A to micro type B)")),(0,o.kt)("h4",{id:"connections"},"Connections"),(0,o.kt)("p",null,"Connect materials as shown below:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove-Mouse_Encoder_demo_connection.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h4",{id:"code"},"Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'/* Read Quadrature Encoder\n* Connect Encoder to Pins encoder0PinA, encoder0PinB, and +5V.\n*\n* Sketch by max wolf / www.meso.net\n* v. 0.1 - very basic functions - mw 20061220\n*\n*/  \n\xa0\n\xa0\nint val; \nint encoder0PinA = 3;\nint encoder0PinB = 4;\nint encoder0Pos = 0;\nint encoder0PinALast = LOW;\nint n = LOW;\n\xa0\nvoid setup() { \n    pinMode (encoder0PinA,INPUT);\n    pinMode (encoder0PinB,INPUT);\n    Serial.begin (115200);\n} \n\xa0\nvoid loop() { \n    n = digitalRead(encoder0PinA);\n    if ((encoder0PinALast == LOW) && (n == HIGH)) {\n        if (digitalRead(encoder0PinB) == LOW) {\n            encoder0Pos--;\n        } else {\n            encoder0Pos++;\n        }\n        Serial.println(encoder0Pos);\n        Serial.println ("/");\n    } \n    encoder0PinALast = n;\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the code and flash it into the controller board."),(0,o.kt)("li",{parentName:"ol"},"Open monitor window."),(0,o.kt)("li",{parentName:"ol"},"Turn the screwdriver bit to left or left to see what will happen.")),(0,o.kt)("p",null,"The output:"),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/img/Grove_mouse_encoder_output_of_demo.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Mouse_Encoder/res/Grove_Mouse_Encoder_v1.0_Schematic_File.zip"},"Schematic files"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
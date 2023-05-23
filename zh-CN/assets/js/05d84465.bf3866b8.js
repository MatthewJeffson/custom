"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8293],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),c=o,k=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return a?r.createElement(k,n(n({ref:t},d),{},{components:a})):r.createElement(k,n({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={title:"Grove - Water Atomization",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Water_Atomization/",slug:"/Grove-Water_Atomization",last_update:{date:"01/09/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Water_Atomization",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Water_Atomization",title:"Grove - Water Atomization",description:"Grove - Water Atomization is a fine Grove module for you to develop an atomizer or an atomizer module in your applications easily. With a few simple steps, you can prototype an atomizer. It has grove interface which make it easily applied to plenty of applications. A humidifier is a basic application it can be built with, you can develop more advanced and interesting objects with digital scent technology and any other situation in which atomization is required.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Water_Atomization.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Water_Atomization",permalink:"/custom/zh-CN/Grove-Water_Atomization",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Water_Atomization.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"2022\u5e741\u67089\u65e5",frontMatter:{title:"Grove - Water Atomization",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Water_Atomization/",slug:"/Grove-Water_Atomization",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Vibration Motor",permalink:"/custom/zh-CN/Grove-Vibration_Motor"},next:{title:"Grove - 16 Channel PWM Driver (PCA9685)",permalink:"/custom/zh-CN/Grove-16-Channel_PWM_Driver-PCA9685"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"<strong>Parts list</strong>",id:"parts-list",level:3},{value:"Get started",id:"get-started",level:2},{value:"<strong>Material required</strong>",id:"material-required",level:3},{value:"<strong>Preparations</strong>",id:"preparations",level:3},{value:"<strong>Hardware connections</strong>",id:"hardware-connections",level:3},{value:"<strong>A little demo</strong>",id:"a-little-demo",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_product_1200.jpg",alt:null})),(0,o.kt)("p",null,"Grove - Water Atomization is a fine Grove module for you to develop an atomizer or an atomizer module in your applications easily. With a few simple steps, you can prototype an atomizer. It has grove interface which make it easily applied to plenty of applications. A humidifier is a basic application it can be built with, you can develop more advanced and interesting objects with digital scent technology and any other situation in which atomization is required."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Water-Atomization-v10-p-2542.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Heated with ultrasound."),(0,o.kt)("li",{parentName:"ul"},"Easy to prototype a new application."),(0,o.kt)("li",{parentName:"ul"},"Well applied to vast applications."),(0,o.kt)("li",{parentName:"ul"},"For various interesting, smart and fashionable applications.")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"application-ideas"},"Application ideas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Humidifier."),(0,o.kt)("li",{parentName:"ul"},"Scent emitter in different situations."),(0,o.kt)("li",{parentName:"ul"},"For smart-house applications."),(0,o.kt)("li",{parentName:"ul"},"For smart objects on consumer electronic products.")),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"5.0V(DC)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ripple(at Max power)"),(0,o.kt)("td",{parentName:"tr",align:null},"\u2264100 mV")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Max power"),(0,o.kt)("td",{parentName:"tr",align:null},"2W")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Peak output voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"65\xb15V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating frequency"),(0,o.kt)("td",{parentName:"tr",align:null},"105\xb15kHz")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Chips"),(0,o.kt)("td",{parentName:"tr",align:null},"ETA1617, NE555")))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove interface"),"\nConnect main control board such as Seeeduino board with driver board."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Transducer interface"),"\nConnect ultrasonic transducer to with driver board."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove wire"),"\nConnect main control board with driver board."),(0,o.kt)("h3",{id:"parts-list"},(0,o.kt)("strong",{parentName:"h3"},"Parts list")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parts name"),(0,o.kt)("th",{parentName:"tr",align:null},"Quantity"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Driver board"),(0,o.kt)("td",{parentName:"tr",align:null},"1PC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Grove wire"),(0,o.kt)("td",{parentName:"tr",align:null},"1PC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Ultrasonic transducer plate"),(0,o.kt)("td",{parentName:"tr",align:null},"1PC")))),(0,o.kt)("h2",{id:"get-started"},"Get started"),(0,o.kt)("h3",{id:"material-required"},(0,o.kt)("strong",{parentName:"h3"},"Material required")),(0,o.kt)("p",null,"Seeeduino v4.2 x 1"),(0,o.kt)("p",null,"Grove - Base shield v2 x 1"),(0,o.kt)("p",null,"Grove - Wire x 1"),(0,o.kt)("h3",{id:"preparations"},(0,o.kt)("strong",{parentName:"h3"},"Preparations")),(0,o.kt)("p",null,"Refer to following guides to build an appropriate IDE:"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We have chosen Seeeduino in this case.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Getting Started on Windows"),(0,o.kt)("li",{parentName:"ul"},"Getting Started on Mac OS X")),(0,o.kt)("h3",{id:"hardware-connections"},(0,o.kt)("strong",{parentName:"h3"},"Hardware connections")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg",alt:null})),(0,o.kt)("h3",{id:"a-little-demo"},(0,o.kt)("strong",{parentName:"h3"},"A little demo")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  We also need a Grove - Touch Sensor in this demo and also connect it to D5.")),(0,o.kt)("p",null,"1.Copy code below to Arduino IDE editor."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/*\n  Demo code for grove  atomization.\n  Touch to start atomizing.\n  Last modified by he\n  by xiaohe\n*/\n\n// the setup function runs once when you press reset or power the board\nvoid setup() {\n    // initialize digital pin 13 as an output.\n    pinMode(A5, OUTPUT);// Set A5 as OUTPUT\n    pinMode(5, INPUT); // Use digital pin 5 as output port\n}\n\n// the loop function runs over and over again forever\nvoid loop() {\n    int D2Sig = digitalRead(5);// read pin 5 signal\n    if (D2Sig == 1)\n    {\n        /* code */\n        digitalWrite(A5, HIGH);   // atomize\n        delay(10000);              // wait for 10 seconds\n        digitalWrite(A5, LOW);    // atomization stopped\n\n    }\n}\n")),(0,o.kt)("p",null,"2.Place some tissue into a trimmed paper cup filled with water, put ultrasonic transducer onto tissue."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"  The bottom side is the side with hollow which is supposed to face downside. Let bottom of transducer plate sink into the water and keep top side above water. The function of tissue is lead water to the transducer and keep upper side of transducer above water.")),(0,o.kt)("p",null,"3.Upload code to main control board."),(0,o.kt)("p",null,"4.Now if you touch Grove touch sensor, you can see vapor produced."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/Water_Atomization_hardware_connection.jpg",alt:null})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"  Do not touch transducer interface pins directly because peak output voltage of Drier board can be 65V.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/High_voltage_warning_600.jpg",alt:null})),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"  The inductor ",(0,o.kt)("span",{style:{fontWeight:"bold"}},"L2")," (marked in red rectangle above) will be heated. So do not touch it directly.")),(0,o.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,o.kt)("h4",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Water Atomization to port D2, and connect Grove - Button to port D5 of a Base Shield."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,o.kt)("h4",{id:"software"},"Software"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,o.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/img/cc_Water_Atomization.png",alt:"cc"})),(0,o.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When the code finishes uploaded, the water atomization starts atomize when you push the button.\n"))),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_Eagle.zip"},"Schematic files in Eagle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Schematic_file_in_PDF.zip"},"Schematic files in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Water_Atomization/res/Grove_Water_Atomization_CDC_File.zip"},"Codecraft CDC File"))),(0,o.kt)("h2",{id:"project"},"Project"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Smart Humidifier")," Make your room comfortable in winter."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/taifur/smart-humidifier-dac66f/embed",width:"350"}),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
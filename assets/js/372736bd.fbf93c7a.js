"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[53219],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,o=function(e,t){if(null==e)return{};var a,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),k=o,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||r;return a?i.createElement(d,n(n({ref:t},u),{},{components:a})):i.createElement(d,n({ref:t},u))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,n[1]=l;for(var s=2;s<r;s++)n[s]=a[s];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}k.displayName="MDXCreateElement"},92057:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>n,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=a(87462),o=(a(67294),a(3905));const r={title:"Logic DC Jack",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Logic_DC_Jack/",slug:"/Logic_DC_Jack",last_update:{date:"02/03/2022",author:"gunengyu"}},n=void 0,l={unversionedId:"Sensor/Beyond_Grove/Accessories/Charge/Logic_DC_Jack",id:"Sensor/Beyond_Grove/Accessories/Charge/Logic_DC_Jack",title:"Logic DC Jack",description:"This is an easy-to-use logic controller which implement logic AND and logic negation.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Charge/Logic_DC_Jack.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Charge",slug:"/Logic_DC_Jack",permalink:"/Logic_DC_Jack",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Charge/Logic_DC_Jack.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"Feb 2, 2022",frontMatter:{title:"Logic DC Jack",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Logic_DC_Jack/",slug:"/Logic_DC_Jack",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Battery kit 3.7V 520mAh",permalink:"/Battery_kit_3.7V_520_mAh"},next:{title:"Qi Wireless Charger Transmitter",permalink:"/Qi_Wireless_Charger_Transmitter"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"How to judge the input port and output port\xa0?",id:"how-to-judge-the-input-port-and-output-port",level:3},{value:"How to know the default input level\xa0?",id:"how-to-know-the-default-input-level",level:3},{value:"Preparations",id:"preparations",level:4},{value:"Connecting hardware",id:"connecting-hardware",level:4},{value:"Review Results",id:"review-results",level:4},{value:"Demo about two inputs",id:"demo-about-two-inputs",level:3},{value:"Work With Lego",id:"work-with-lego",level:3},{value:"Compatible Groves for Logic DC Jack",id:"compatible-groves-for-logic-dc-jack",level:2},{value:"Input",id:"input",level:3},{value:"Output",id:"output",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian.JPG",alt:null})),(0,o.kt)("p",null,"This is an easy-to-use logic controller which implement logic AND and logic negation.\nIt is designed with H Bridge which get certain drive function to drive motor and other applications, now your application will not just limited on LED applications.\nIf you are a novice to programming and inclined to make a simple application, this will be smart choice to get something started."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Dual input and single output")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Select the logic via a switch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Input default to HIGH")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Half bridge output, can drive motor directly")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power by 9V Battery"))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"No-load current: 10\xb11mA;")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Input voltage: 6~9V\uff1b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Output voltage: 5V\uff1b")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Power conversion efficiency 82\xb15%"))),(0,o.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,o.kt)("p",null,"Here is block diagram of Logic_DC_Jack module which consists of following parts."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_overview1.JPG",alt:null})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Input")," - Logic input"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GND - Connect to ground"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"VCC - Connect to power supply")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"IN2 - Input2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"IN1 - Input1")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Output")," - Logic output"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"GND - Connect to ground"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"VCC - Connect to power supply")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"OUT - Output")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"OUT - Output")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Status Led")," - a red led"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"ON - NOT Mode"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"OFF - AND Mode"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Function Switch")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Off - Power off"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Not - NOT Mode, means the board now is a NOT logic gate, it could only support one input module.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"And - AND Mode, when only one Grove cable is inserted into the left socket of mainboard, the mainboard will be a simple connector. But if you used a branched Grove cable, the main board will behave like an AND logic gates"))))))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note: When in AND Mode, IN2 is default to HIGH, so when it's only one input module, Logic DC Jack act as a buffer")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Power Input")," - DC Power input, 6-9V is required")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Power Led")," - A green led, on when there is power supply"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"After this section, you can make Logic DC Jack run with only few steps."),(0,o.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"Logic DC Jack is a logic device, which's used to achieve some simple logic function.Please refer to these links to know something information about ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inverter_logic_gate"},"NOT gate")," and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/AND_gate"},"AND gate")," before we get started."),(0,o.kt)("p",null,"This module includes two type of cables and you will use one of it while plugging an input or two inputs onto the input port."),(0,o.kt)("dl",null,(0,o.kt)("dd",null," Situation 1 \u2013 One input"),(0,o.kt)("dd",null," If the input is only one module, the Logic DC Jack can realize the logic function of AND and NOT. Following is the figure of logic function:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_3.png",alt:null})),(0,o.kt)("dl",null,(0,o.kt)("dd",null," Situation 2 \u2013 Two inputs"),(0,o.kt)("dd",null," If the inputs are two modules, this Logic DC Jack can only realize the logic function of AND. Following is the figure of logic function:")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_DC_Jack_4.png",alt:null})),(0,o.kt)("p",null,"Choose the number of input first and then adjust the switch to a right position, the needed logic function is confirmed."),(0,o.kt)("h3",{id:"how-to-judge-the-input-port-and-output-port"},"How to judge the input port and output port\xa0?"),(0,o.kt)("p",null,"There're two arrow seals on the shell, you can distinguish the input and output easily."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_fengmian_2.JPG",alt:null})),(0,o.kt)("h3",{id:"how-to-know-the-default-input-level"},"How to know the default input level\xa0?"),(0,o.kt)("p",null,"Even we know how to use the logic function, but how we know the default level state of the input, because different default level state can make a different output state. Here, you can get it by a simple experiment."),(0,o.kt)("h4",{id:"preparations"},"Preparations"),(0,o.kt)("p",null,"Something is needed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50"},"Grove - Button"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35"},"Grove - Red LED"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"9V Battery"))),(0,o.kt)("h4",{id:"connecting-hardware"},"Connecting hardware"),(0,o.kt)("p",null,"In this demo, we use ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50"},"Grove - Button")," as INPUT, and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html?cPath=81_35"},"Grove - Red LED")," as OUTPUT."),(0,o.kt)("p",null,"Switch to ",(0,o.kt)("strong",{parentName:"p"},"NOT")," gate."),(0,o.kt)("p",null,"As shown below:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_hardware_setting_stared_not.JPG",alt:null})),(0,o.kt)("h4",{id:"review-results"},"Review Results"),(0,o.kt)("p",null,"As you know, only if the output level is 1, then the Grove - LED could be turned on. After power ON, you will find that Grove - LED is on, in a other word, the output level is 1 according to the figure of logic, so we can know: if the output the 1, the switch mode is NOT, so the default input level is 0."),(0,o.kt)("h3",{id:"demo-about-two-inputs"},"Demo about two inputs"),(0,o.kt)("p",null,"If you want to use two inputs, you need the Grove Branch Cable."),(0,o.kt)("p",null,"With this cable, you can connect 2 Grove to the INPUT. One connect to Input1 and the other to Input2."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_cable.JPG",alt:null})),(0,o.kt)("p",null,"Here is an example, 2 Buttons INPUT and a LED OUTPUT:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_and.jpg",alt:null})),(0,o.kt)("p",null,"The led will on only when 2 buttons pressed."),(0,o.kt)("font",{color:"Red"},"Tips: This cable can also used as output, if you want to control the state level of 2 Groves at the same time, this cable is needed. Please pay attention: If using the cable by this way, the state level of two outputs is the same."),(0,o.kt)("h3",{id:"work-with-lego"},"Work With Lego"),(0,o.kt)("p",null,"Logic DC Jack contain a Lego-compatible case, you can insert Logic DC Jack to Lego, make it more funny."),(0,o.kt)("p",null,"About the Grove Base that compatible with Lego, it's coming soon."),(0,o.kt)("p",null,"Here is a demo:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/img/Logic_dc_jack_with_lego.jpg",alt:null})),(0,o.kt)("h2",{id:"compatible-groves-for-logic-dc-jack"},"Compatible Groves for Logic DC Jack"),(0,o.kt)("p",null,"Below Groves can work with Logic DC Jack well:"),(0,o.kt)("h3",{id:"input"},"Input"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Button-p-766.html?cPath=85_50"},"Grove - Button"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Touch-Sensor-p-747.html?cPath=85_94"},"Grove - Touch Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-SwitchP-p-1252.html?cPath=85_50"},"Grove - Switch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Light-Sensor-p-746.html?cPath=25_27"},"Grove - Light Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html?cPath=25_128"},"Grove - Loudness Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Moisture-Sensor-p-955.html?cPath=25_27"},"Grove - Moisture Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Water-Sensor-p-748.html?cPath=25_27"},"Grove - Water Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Magnetic-Switch-p-744.html"},"Grove - Magnetic Switch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html"},"Grove - Tilt Switch"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Line-Finder-p-825.html?cPath=25_31"},"Grove - Line Finder"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-PIR-Motion-Sensor-p-802.html?cPath=25_31"},"Grove - PIR Motion Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor-p-770.html?cPath=85_52"},"Grove - Rotary Angle Sensor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html?cPath=85_52"},"Grove - Slide Potentiometer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Flame-Sensor-p-1450.html"},"Grove - Flame Sensor")))),(0,o.kt)("h3",{id:"output"},"Output"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Red-LED-p-1142.html"},"Grove - LED"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html"},"Grove - LED String Light"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Vibration-Motor-p-839.html"},"Grove - Vibration Motor"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Buzzer-p-768.html?cPath=38"},"Grove - Buzzer"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Mini-Fan-p-1819.html"},"Grove - Mini Fan"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Recorder-p-1825.html?cPath=25_128"},"Grove - Recorder"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Electromagnet-p-1820.html?cPath=25_33"},"Grove - Electromagnet"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Relay-p-769.html?cPath=39_42"},"Grove - Relay")))),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[PDF]"),"   ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH.pdf"},"Schematic in PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Eagle]"),"    ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic_DC_Jack_v1.0_SCH_PCB.zip"},"Schematic in Eagle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[PDF]"),(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.pdf"},"Logic DC Jack v1.0 pdf")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Logic_DC_Jack/res/Logic%20DC%20Jack%20v1.0.sch"},"Logic DC Jack v1.0 sch")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Wik]"),"   ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Inverter_(logic_gate)"},"Wiki page of NOT Gate")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Wik]"),"    ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/AND_gate"},"Wiki page of AND Gate"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
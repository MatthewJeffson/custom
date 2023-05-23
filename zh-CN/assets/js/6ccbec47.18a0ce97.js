"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96405:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",title:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121",last_update:{date:"1/19/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Touch/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121",id:"Sensor/Grove/Grove_Sensors/Touch/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121",title:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",description:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Touch",slug:"/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121",permalink:"/custom/zh-CN/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Touch/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674086400,formattedLastUpdatedAt:"2023\u5e741\u670819\u65e5",frontMatter:{description:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",title:"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)",keywords:["Grove Grove_Sensors Touch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121",last_update:{date:"1/19/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121)",permalink:"/custom/zh-CN/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121"},next:{title:"Grove 12 Channel Capacitive Touch Keypad (ATtiny1616)",permalink:"/custom/zh-CN/Grove-12-Channel-Capacitive-Touch-Keypad-ATtiny1616-"}},s={},p=[{value:"Version Change",id:"version-change",level:2},{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/touch_sensor_V3.png"})),(0,n.kt)("p",null,"This sensor is an upgrade version of Grove - 12 Key Capacitive I2C Touch Sensor V2 (MPR121), it adds two more GND ports to the head in order to be more stable, meanwhile, the front Pin are spaced more widely so as to avoid a short circuit caused by the lines accidentally touch."),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)")," is a multichannel proximity capacitive touch sensor. It's a 3-in-1 module with the following features: Capacitance Sensing, Touch Sensing, and Proximity Sensing."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Capacitance Sensing"),": This module uses a constant DC current capacitance sensing scheme. It can measure capacitances ranging from 10 pF to over 2000 pF with a resolution up to 0.01 pF."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Touch Sensing"),": Once the electrode capacitance data is acquired, the electrode touch/release status is determined comparing it to the capacitance baseline value."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Proximity Sensing"),": One new feature of the MPR121 is the near proximity sensing system. This means that all of the system\u2019s electrodes can be\nsummed together to create a single large electrode."),(0,n.kt)("p",null,"Based on Freescale MPR121, this sensor has 12 completely independent electrodes with build-in autoconfiguration. Thanks to the I2C interface, you can detect all the 12 electrodes signals with only one Grove port, and the I2C address is hardware configurable, from 0X5B to 0X5D. This also makes it possible for multiple\n",(0,n.kt)("strong",{parentName:"p"},"Grove - 12 Key Capacitive I2C Touch Sensor V3 (MPR121)")," to be used together for channel expansions in a single system, you can build a touch system that contains max. 36 electrodes."),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/CPq4VSAXBgI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/Grove-12-Key-Capacitive-I2C-Touch-Sensor-V3-MPR121-p-4694.html\n",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version-change"},"Version Change"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - 12 Key Capacitive I2C Touch Sensor V2"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Touch Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Main Chip"),(0,n.kt)("td",{parentName:"tr",align:null},"MPR121"),(0,n.kt)("td",{parentName:"tr",align:null},"MPR121")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,n.kt)("td",{parentName:"tr",align:null},"changeable(0X5B ~ 0X5D)"),(0,n.kt)("td",{parentName:"tr",align:null},"unmodifiable(0X5A)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Touch Sensor Feeler"),(0,n.kt)("td",{parentName:"tr",align:null},"x"),(0,n.kt)("td",{parentName:"tr",align:null},"\u221a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Input Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"alligator interface"),(0,n.kt)("td",{parentName:"tr",align:null},"DIP 2Pin Female Header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Cost Performance"),(0,n.kt)("td",{parentName:"tr",align:null},"High"),(0,n.kt)("td",{parentName:"tr",align:null},"Low")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Release Time"),(0,n.kt)("td",{parentName:"tr",align:null},"September 11-2018"),(0,n.kt)("td",{parentName:"tr",align:null},"October 31-2015")))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Internal 10-bit ADC"),(0,n.kt)("li",{parentName:"ul"},"Integrated independent autocalibration for each electrode input"),(0,n.kt)("li",{parentName:"ul"},"Completely independent electrodes with built-in autoconfiguration"),(0,n.kt)("li",{parentName:"ul"},"I2C interface, with IRQ, Interrupt output to advise electrode status changes"),(0,n.kt)("li",{parentName:"ul"},"Hardware configurable I2C address"),(0,n.kt)("li",{parentName:"ul"},"12 electrodes/capacitance sensing inputs in which 8 are multifunctional for LED driving and GPIO"),(0,n.kt)("li",{parentName:"ul"},"Autoconfiguration of charge current and charge time for each electrode input"),(0,n.kt)("li",{parentName:"ul"},"Separate touch and release trip thresholds for each electrode, providing hysteresis and electrode independence"),(0,n.kt)("li",{parentName:"ul"},"Add two more GND pin and expand the gap of pins for safe handling")),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PC Peripherals"),(0,n.kt)("li",{parentName:"ul"},"MP3 Players"),(0,n.kt)("li",{parentName:"ul"},"Remote Controls"),(0,n.kt)("li",{parentName:"ul"},"Mobile Phones"),(0,n.kt)("li",{parentName:"ul"},"Lighting Controls")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-map"},"Pin Map"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/Touch-sensor-V3-with-GND.png"})),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:"{700}",src:"https://files.seeedstudio.com/wiki/Grove%20-%2012%20Key%20Capacitive%20I2C%20Touch%20Sensor%20V3%20(MPR121)/V3-data.png"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"For the CH0 ~ CH11, once the electrode capacitance data is acquired, the electrode touch/release status is determined comparing it to the capacitance baseline value. And you can set the baseline value for each channel separately. The Pin12 ~ Pin19 is multifunctional, which means you can configure them as GPIO or LED driver, for more detail, please refer to the freescale application note ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-12_Key_Capacitive_I2C_Touch_Sensor_V2-MPR121/res/AN3894.pdf"},"AN3894"),".")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,"This is the introduction Video of this product, simple demos, you can have a try."),(0,n.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ds7kBVdeY4U?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Leaf Piano"),": We made a piano using a touch sensor, as well as leaves for piano keys."),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/leaf-piano-5261a6/embed",width:"350"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Play with Scratch"),": How to play a scratch game with a Touch Sensor?"),(0,n.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/play-mario-using-new-grove-touch-sensor-b3f9fc/embed",width:"350"}),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
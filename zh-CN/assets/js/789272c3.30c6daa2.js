"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16021],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>g});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=i.createContext({}),u=function(e){var t=i.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},h=function(e){var t=u(e.components);return i.createElement(a.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,a=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,g=p["".concat(a,".").concat(d)]||p[d]||c[d]||n;return r?i.createElement(g,l(l({ref:t},h),{},{components:r})):i.createElement(g,l({ref:t},h))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:o,l[1]=s;for(var u=2;u<n;u++)l[u]=r[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},50227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>u});var i=r(87462),o=(r(67294),r(3905));const n={description:"Grove - LED String Light",title:"Grove - LED String Light",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LED_String_Light",last_update:{date:"1/7/2023",author:"shuxu hu"}},l=void 0,s={unversionedId:"Sensor/Grove/Grove_Accessories/LED/Grove-LED_String_Light",id:"Sensor/Grove/Grove_Accessories/LED/Grove-LED_String_Light",title:"Grove - LED String Light",description:"Grove - LED String Light",source:"@site/docs/Sensor/Grove/Grove_Accessories/LED/Grove-LED_String_Light.md",sourceDirName:"Sensor/Grove/Grove_Accessories/LED",slug:"/Grove-LED_String_Light",permalink:"/custom/zh-CN/Grove-LED_String_Light",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/LED/Grove-LED_String_Light.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673020800,formattedLastUpdatedAt:"2023\u5e741\u67086\u65e5",frontMatter:{description:"Grove - LED String Light",title:"Grove - LED String Light",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-LED_String_Light",last_update:{date:"1/7/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - LED Socket Kit",permalink:"/custom/zh-CN/Grove-LED_Socket_Kit"},next:{title:"Grove - LED Strip Driver",permalink:"/custom/zh-CN/Grove-LED_Strip_Driver"}},a={},u=[{value:"Features",id:"features",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Usage",id:"usage",level:2},{value:"Availability",id:"availability",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],h={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/Grove-led-string-light.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"The Grove - LED String Light module is essentially an LED driver for the LED string lights included in the pack. Working voltage of the module is 3.3V/5V. However, the LED string lights require a working voltage of 12V. Therefore, this module uses a AIC1896 current mode step up DC-DC Converter to provide the requisite voltage to the LED string lights. The LED string light is 5 meters in length and has 50 RGB LEDs on it connected equidistant to one another. You can use these to dress a Christmas tree, light your party or to decorate your room."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-LED-String-Light-p-2324.html"},(0,o.kt)("p",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Used in conjunction with LED string lights")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LED String lights of 5 meters length included with the pack")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"50 RGB LEDs connected at equal distances along the entire length of 5 meters give a colorful appearance")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"JST 2.0 Interface used to connect the LED String lights with the driver module")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Uses Standard 4-pin Grove Cables to connect to other Grove modules "))),(0,o.kt)("h2",{id:"interface-function"},"Interface Function"),(0,o.kt)("hr",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light.jpg",alt:"pir",width:600,height:"auto"})),(0,o.kt)("dl",null,(0,o.kt)("dt",null,"\u2460 JST 2.0 interface: Used to connect to LED String Lights"),(0,o.kt)("dt",null,"\u2461 Grove interface: HIGH on SIG (Pin 1) turns the LED String Lights ON, LOW turns them OFF")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Follow these steps to build a sample circuit using this module:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First connect the LED string lights to the ",(0,o.kt)("strong",{parentName:"p"},"Grove - LED String Light")," module using the JST2.0 two-wire interface.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the LED string lights module to the output side of your circuit (to the right of the power module). On the input side of the circuit, you may use a range of sensor based input modules (",(0,o.kt)("a",{parentName:"p",href:"/Grove-Light_Sensor/"},"Grove - Light Sensor"),", ",(0,o.kt)("a",{parentName:"p",href:"/Grove-Sound_Sensor/"},"Grove - Sound Sensor"),", ",(0,o.kt)("a",{parentName:"p",href:"/Grove-Button/"},"Grove - Button")," or ",(0,o.kt)("a",{parentName:"p",href:"/Grove-Slide_Potentiometer/"},"Grove - Slide Potentiometer"),". ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Power up the circuit.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"LED String lights light up when the input module supplies a trigger:"))),(0,o.kt)("p",null," If using with a light sensor connected directly to the input side of the circuit, you should see the LED light up in bright light. If you want the lights to light up in the dark, add a Grove - NOT module between the light sensor and the power module. "),(0,o.kt)("p",null,"If using with a sound sensor, you should see the LEDs light up on detecting sound. Again, if you want to reverse the function, or in other words, if you want that the lights should be ON at all times except when there is a sound, add a Grove - NOT module between the sound sensor and the power module. "),(0,o.kt)("p",null,"If using with a momentary switch like the one on the ",(0,o.kt)("a",{parentName:"p",href:"/Grove-Button/"},"Grove - Button")," module, simply press the button to light up the string lights. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If using with a slide potentiometer, move the slider from the GND position to VCC and see the brightness of the lights increase as the supplied voltage increases.")),(0,o.kt)("p",null,"Below is an illustration of a Grove circuit built using the Grove - USB Power power module: "),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-LED_String_Light/img/LED_String_Light_Photo.gif",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"If you do not have the Grove - USB Power module, use the Grove - DC Jack Power module instead to turn ON the LED string lights. "),(0,o.kt)("h2",{id:"availability"},"Availability"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This Grove module is available as part of the following Grove Kit Series"),(0,o.kt)("p",null,"Alternatively, it can be bought stand-alone at the Seeed Studio Bazaar."),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.pdf"},"Schematic PDF"),"]")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"[",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-LED_String_Light/res/Grove-LED_String_Light.zip"},"Eagle File"),"]"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
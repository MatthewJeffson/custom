"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||a;return r?n.createElement(g,i(i({ref:t},d),{},{components:r})):n.createElement(g,i({ref:t},d))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const a={description:"Light Sensor and LED Bar",title:"Light Sensor and LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Light_Sensor_and_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar",title:"Light Sensor and LED Bar",description:"Light Sensor and LED Bar",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Light_Sensor_and_LED_Bar",permalink:"/custom/Light_Sensor_and_LED_Bar",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Light_Sensor_and_LED_Bar.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Light Sensor and LED Bar",title:"Light Sensor and LED Bar",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Light_Sensor_and_LED_Bar",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Joystick Control RGB Led",permalink:"/custom/Joystick_Control_RGB_Led"},next:{title:"LightView 201k Digital display module",permalink:"/custom/LightView_201k_Digital_display_module"}},l={},u=[{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This demo will show you how to use light sensor. In order to indicate the intensity of light, we need a Led Bar."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware Required\uff1a")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Arduino")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Light Sensor")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LED Bar"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Circuit\uff1a")),(0,o.kt)("p",null,"The output of Light Sensor is analog signal, so we connect it to A0 of Seeeduino."),(0,o.kt)("p",null,"LED Bar needs 10 IOs, about the connection, please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Tutorial/BarGraph"},"LED Bar"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Light_Sensor_and_LED_Bar/img/Sidekick_33_1.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code:")),(0,o.kt)("p",null,"Open Arduino IDE, click File -",">"," Sketchbook -",">"," light_sensor."),(0,o.kt)("p",null,"We can use analogRead() to read the value of light sensor, this value will indicate the intensity of light. When the light stronger, the value larger."),(0,o.kt)("p",null,"To make the data more smoothly, we need some simple filtering. We read the value 32 times, and take the average value."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
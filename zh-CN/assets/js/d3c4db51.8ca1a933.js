"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78265],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(o),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return o?n.createElement(h,a(a({ref:t},c),{},{components:o})):n.createElement(h,a({ref:t},c))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<i;u++)a[u]=o[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},83958:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=o(87462),r=(o(67294),o(3905));const i={description:"Project Five \u2013 Relay Control",title:"Project Five \u2013 Relay Control",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Five-Relay_Control",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Five-Relay_Control",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Five-Relay_Control",title:"Project Five \u2013 Relay Control",description:"Project Five \u2013 Relay Control",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Five-Relay_Control.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Five-Relay_Control",permalink:"/custom/zh-CN/Project_Five-Relay_Control",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Five-Relay_Control.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"Project Five \u2013 Relay Control",title:"Project Five \u2013 Relay Control",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Five-Relay_Control",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Four \u2013 Noise Maker",permalink:"/custom/zh-CN/Project_Four-Noise_Maker"},next:{title:"Project Six \u2013 LCD Demonstration",permalink:"/custom/zh-CN/Project_Six-LCD_Demonstration"}},s={},u=[{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this project we will demonstrate using the relay . Using the button , button one will turn the relay on, and button two turns it off. As noted earlier, the relay can handle a peak voltage capability of 250V at 10 amps."),(0,r.kt)("p",null,"Even though you may be capable with low voltages and microelectronics, if you are not qualified for working with mains voltages, consult a licensed electrician to complete the work."),(0,r.kt)("p",null,"Connect the Twin Button to the D1/D2 input jack."),(0,r.kt)("p",null,"The Twin Button Grove's red button uses the D1 connector to send a signal to the Arduino's D1 digital input, and the green button uses the D2 connector to send a signal to the Arduino's D2 digital input."),(0,r.kt)("p",null,"Connect the Relay to the D6/D7 input jack."),(0,r.kt)("p",null,"The Arduino's D6 pin sends a signal to the Relay on the D1 connector.  The Relay Grove's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Five-Relay_Control/img/Conn-five.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},(0,r.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Five - Relay Control\n//\n\nvoid setup()\n{\n  pinMode(1, INPUT);\n  pinMode(2, INPUT);\n  pinMode(6, OUTPUT);\n}\n\nvoid loop()\n{\n  if (digitalRead(1)==HIGH)\n  {\n    digitalWrite(6, HIGH);\n    delay(100);\n  }\n  if (digitalRead(2)==HIGH)\n  {\n    digitalWrite(6, LOW);\n  }\n}\n")),(0,r.kt)("font",{color:"magenta"},"When using this with an XBee Carrier, please be aware that you should set output 16 low to ensure that the mosfet on the XBee carrier provides enough power to reliably pull in the relay"),(0,r.kt)("p",null,"The reason for the delay function after setting the relay high or low is to allow the sketch to pause \u2013 in doing so ignoring the buttons for one tenth of a second. This is more commonly known as 'software de-bouncing\u201d. Although doing so may not seem necessary in this particular example, doing so is a good habit to start with."),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
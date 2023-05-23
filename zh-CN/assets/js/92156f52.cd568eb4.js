"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[39700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},63204:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={description:"Project Eight - Thermostat",title:"Project Eight - Thermostat",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Eight-Thermostat",last_update:{date:"2/15/2023",author:"jianjing Huang"}},i=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat",title:"Project Eight - Thermostat",description:"Project Eight - Thermostat",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Eight-Thermostat",permalink:"/custom/zh-CN/Project_Eight-Thermostat",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Eight-Thermostat.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"Project Eight - Thermostat",title:"Project Eight - Thermostat",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Eight-Thermostat",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Seven - Temperature",permalink:"/custom/zh-CN/Project_Seven-Temperature"},next:{title:"MicroPython for Arduino-supported Boards",permalink:"/custom/zh-CN/Compiling_MicroPython_for_embedded_devices"}},l={},p=[{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The final project in our series may seem complex, but is quite simple. We use the potentiometer to allow user input of a temperature value, and using the temperature sensor \u2013 if the ambient temperature rises above the value set via the potentiometer the relay is activated."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the Temperature Sensor to the Analog A0/A1 input jack, like it was in Project 7.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Grove produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the Potentiometer to the Analog A4/A5 input jack.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A4 analog input on the A4/A5 input jack.\nConnect the Relay to the D2/D3 input jack.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Arduino's D2 pin sends a signal to the Relay on the D1 connector. The Relay's red light indicates whether the relay is on or off, and the relay makes a clicking sound when it switches."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Eight-Thermostat/img/Conn-eight.jpg",alt:null})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Eight - Thermostat\n//\n\nint a,c,d;\nint z=3975;\nint relaypin=2;\nfloat b, q, resistance, temperature;\n\nvoid setup()\n{\n  pinMode(relaypin, OUTPUT);\n}\n\nvoid loop()\n{\n  a=analogRead(4);\n  b=0.0488*a;\n  c=int(b);\n  q=analogRead(0);\n  resistance=(float)(1023-q)*10000/q;\n  temperature=1/(log(resistance/10000)/z+1/298.15)-273.15;\n  d=int(temperature);\n  if (d&gt;=c)\n  {\n    digitalWrite(relaypin, HIGH);\n    delay(500);\n  }\n  if (d&lt;c)\n  {\n    digitalWrite(relaypin, LOW);\n    delay(500);\n  }\n}\n")),(0,o.kt)("p",null,"Try turning the potentiometer to the right and left and see if the relay turns on or off."),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
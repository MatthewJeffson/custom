"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81089],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),s=u(n),m=o,g=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?r.createElement(g,a(a({ref:e},c),{},{components:n})):r.createElement(g,a({ref:e},c))}));function g(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[s]="string"==typeof t?t:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11774:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"Project Two - Digital Input v1.0b",title:"Project Two - Digital Input v1.0b",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Two-Digital_Input_v1.0b",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b",title:"Project Two - Digital Input v1.0b",description:"Project Two - Digital Input v1.0b",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Two-Digital_Input_v1.0b",permalink:"/custom/zh-CN/Project_Two-Digital_Input_v1.0b",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input_v1.0b.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"Project Two - Digital Input v1.0b",title:"Project Two - Digital Input v1.0b",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Two-Digital_Input_v1.0b",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Two \u2013 Digital Input",permalink:"/custom/zh-CN/Project_Two-Digital_Input"},next:{title:"Project Three \u2013 Analog Input v1.0b",permalink:"/custom/zh-CN/Project_Three-Analog_Input_v1b"}},p={},u=[{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function s(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The purpose of this project is to demonstrate two forms of digital input \u2013 using the button Grove and the tilt switch Grove . Pressing the button will light the LED, and activating the tilt-switch will light the LED."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Wiring it:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the LED Module to the D1/D2 Digital I/O jack, like it was in Projects 1.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Arduino Pin D1 powers the LED on the Grove's SIG connector, and Arduino Pin D2 connect to the LED Grove's NC connector.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the Tilt Switch Grove to the D5/D6 Digital I/O jack.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Tilt Switch Grove's SIG connector sends a high or low signal to the Arduino's D5 digital input.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the Button Module to the D7/D8 input jack (on the second row.)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The Button Grove uses the SIG connector to send a signal to the Arduino's D7 digital input.\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Two-Digital_Input_v1.0b/img/Digitalv1.0b.jpg",alt:null})))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Two - Digital Inputs\n//\n\nvoid setup()\n{\n  pinMode(1, OUTPUT);\n  pinMode(5, INPUT);\n  pinMode(7, INPUT);\n}\n\nvoid loop()\n{\n\nif (digitalRead(5)==HIGH)\n  {\n    digitalWrite(1, HIGH);\n    delay(100);\n    digitalWrite(1, LOW);\n  }\n\n  if (digitalRead(7)==HIGH)\n  {\n    digitalWrite(1, HIGH);\n    delay(200);\n    digitalWrite(1, LOW);\n  }\n\n}\n")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);
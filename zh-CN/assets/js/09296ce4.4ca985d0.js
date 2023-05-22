"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86459],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>g});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var p=r.createContext({}),u=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=u(n),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(g,a(a({ref:e},s),{},{components:n})):r.createElement(g,a({ref:e},s))}));function g(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[c]="string"==typeof t?t:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42179:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={description:"Project Two \u2013 Digital Input",title:"Project Two \u2013 Digital Input",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Two-Digital_Input",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input",title:"Project Two \u2013 Digital Input",description:"Project Two \u2013 Digital Input",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Two-Digital_Input",permalink:"/custom/zh-CN/Project_Two-Digital_Input",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Two-Digital_Input.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676390400,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{description:"Project Two \u2013 Digital Input",title:"Project Two \u2013 Digital Input",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Two-Digital_Input",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project One - Double Blink",permalink:"/custom/zh-CN/Project_One-Double_Blink"},next:{title:"Project Two - Digital Input v1.0b",permalink:"/custom/zh-CN/Project_Two-Digital_Input_v1.0b"}},p={},u=[{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The purpose of this project is to demonstrate two forms of digital input \u2013 using the button and the tilt switch . Pressing either of the buttons will light the respective LED, and activating the tilt-switch will light both LEDs."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the LED to the D1/D2 Digital I/O jack, like it was in Projects 1 and")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Arduino Pin D1 powers the Red LED on the Grove's D1 connector, and Arduino Pin D2 powers the Green LED on the Grove's D2 connector.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the Tilt Switch to the D5/D6 Digital I/O jack.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Tilt Switch Grove's D1 connector sends a high or low signal to the Arduino's D5 digital input.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the Twin Button Grove to the D7/D8 input jack (on the second row.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The Twin Button Grove's red button uses the D1 connector to send a signal to the Arduino's D7 digital input, and the green button uses the D2 connector to send a signal to the Arduino's D8 digital input.")),(0,i.kt)("li",{parentName:"ol"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Two-Digital_Input/img/Conn-two.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Two - Digital Inputs\n//\n\nvoid setup()\n{\n    pinMode(1, OUTPUT);\n    pinMode(2, OUTPUT);\n    pinMode(5, INPUT);\n    pinMode(7, INPUT);\n    pinMode(8, INPUT);\n}\n\nvoid loop()\n{\n\n    if (digitalRead(5)==HIGH)\n    {\n        digitalWrite(1, HIGH);\n        digitalWrite(2, HIGH);\n        delay(100);\n        digitalWrite(1, LOW);\n        digitalWrite(2, LOW);\n    }\n\n    if (digitalRead(7)==HIGH)\n    {\n        digitalWrite(1, HIGH);\n        delay(200);\n        digitalWrite(1, LOW);\n    }\n    if (digitalRead(8)==HIGH)\n    {\n        digitalWrite(2, HIGH);\n        delay(200);\n        digitalWrite(2, LOW);\n    }\n}\n")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
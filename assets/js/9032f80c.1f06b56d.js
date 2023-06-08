"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78322],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),m=n,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||i;return r?o.createElement(f,a(a({ref:t},p),{},{components:r})):o.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[l]="string"==typeof e?e:n,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var o=r(87462),n=(r(67294),r(3905));const i={description:"Project Four \u2013 Noise Maker",title:"Project Four \u2013 Noise Maker",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Four-Noise_Maker",last_update:{date:"2/15/2023",author:"jianjing Huang"}},a=void 0,u={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Four-Noise_Maker",id:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Four-Noise_Maker",title:"Project Four \u2013 Noise Maker",description:"Project Four \u2013 Noise Maker",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Four-Noise_Maker.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects",slug:"/Project_Four-Noise_Maker",permalink:"/custom/Project_Four-Noise_Maker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Boards_Projects/Project_Four-Noise_Maker.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Project Four \u2013 Noise Maker",title:"Project Four \u2013 Noise Maker",keywords:["Arduino","Arduino_Boards_Projects"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Project_Four-Noise_Maker",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Project Three \u2013 Analog Input v1.0b",permalink:"/custom/Project_Three-Analog_Input_v1b"},next:{title:"Project Five \u2013 Relay Control",permalink:"/custom/Project_Five-Relay_Control"}},s={},c=[{value:"Tech Support",id:"tech-support",level:2}],p={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The purpose of this sketch is to use the piezo buzzer to make a beeping noise.\nThe potentiometer is used again as an analog input to vary the delay time.  As you adjust the potentiometer, the speed of the beeps will change.\nThe picture is incorrect - you need to Connect the Potentiometer to the Analog A0/A1 input jack, like it was in Project 3.\nThe Potentiometer produces an analog voltage on its D1 output, which is connected to Arduino A0 analog input on the A0/A1 input jack.\nConnect the Buzzer to the D6/D7 Digital I/O Jack.  The sketch uses Arduino Pin D6 to send power to the Buzzer on its D1 input."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Project_Four-Noise_Maker/img/Conn-four.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},(0,n.kt)("strong",{parentName:"em"},"Now upload the following Arduino sketch:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},"// Project Four - Noise maker\n//\n\nvoid setup()\n{\n  pinMode(6, OUTPUT);\n}\n\nvoid loop()\n{\n  digitalWrite(6, HIGH);\n  delay(analogRead(0));\n  digitalWrite(6, LOW);\n  delay(analogRead(0));\n}\n")),(0,n.kt)("p",null,"As you can see, the piezo can be used as another form of digital output. When using this Grove unit, don't forget to set the output pin connected to the Grove back to LOW when you want the sound to turn off."),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,n.kt)("br",null)),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}l.isMDXComponent=!0}}]);
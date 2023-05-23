"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4713],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={description:"Overview",title:"Overview",keywords:["Wio_terminal Configurable_Buttons"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Buttons",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Getting Started with Configurable Buttons",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Buttons/Wio-Terminal-Buttons",id:"Sensor/Wio_Terminal/Hardware_Overview/Buttons/Wio-Terminal-Buttons",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Buttons/Wio-Terminal-Buttons.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Buttons",slug:"/Wio-Terminal-Buttons",permalink:"/custom/Wio-Terminal-Buttons",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Buttons/Wio-Terminal-Buttons.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Configurable_Buttons"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Buttons",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/Wio-Terminal-RTC"},next:{title:"Overview",permalink:"/custom/Wio-Terminal-Switch"}},s={},p=[{value:"Example Code",id:"example-code",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-configurable-buttons"},"Getting Started with Configurable Buttons"),(0,i.kt)("p",null,"This repo demonstrates how to use the configurable buttons in Wio Terminal. There are three buttons that can be used for Wio Terminal."),(0,i.kt)("h2",{id:"example-code"},"Example Code"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WIO_KEY_A")),", ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WIO_KEY_B"))," and  ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"WIO_KEY_C"))," are defined for the Wio Terminal configurable buttons."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"BUTTON_1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BUTTON_2")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"BUTTON_3")," to use the configurable buttons.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() {\n  Serial.begin(115200);\n  pinMode(WIO_KEY_A, INPUT_PULLUP);\n  pinMode(WIO_KEY_B, INPUT_PULLUP);\n  pinMode(WIO_KEY_C, INPUT_PULLUP);\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n   if (digitalRead(WIO_KEY_A) == LOW) {\n    Serial.println("A Key pressed");\n   }\n   else if (digitalRead(WIO_KEY_B) == LOW) {\n    Serial.println("B Key pressed");\n   }\n   else if (digitalRead(WIO_KEY_C) == LOW) {\n    Serial.println("C Key pressed");\n   }\n   delay(200);\n}\n')))}d.isMDXComponent=!0}}]);
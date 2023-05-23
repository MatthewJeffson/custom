"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28779],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(p,".").concat(k)]||d[k]||c[k]||o;return n?i.createElement(m,a(a({ref:t},s),{},{components:n})):i.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},40821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={description:"LinkIt ONE Tutorial - Marquee",title:"LinkIt ONE Tutorial - Marquee",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Marquee",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Marquee",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Marquee",title:"LinkIt ONE Tutorial - Marquee",description:"LinkIt ONE Tutorial - Marquee",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Marquee.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Marquee",permalink:"/custom/LinkIt_ONE_Tutorial-Marquee",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Marquee.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"LinkIt ONE Tutorial - Marquee",title:"LinkIt ONE Tutorial - Marquee",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Marquee",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Light Sensor",permalink:"/custom/LinkIt_ONE_Tutorial-Light-Sensor"},next:{title:"LinkIt ONE Tutorial - Mini Servo",permalink:"/custom/LinkIt-ONE-Tutorial---Mini-Servo"}},p={},u=[{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What We\u2019re Doing")),(0,r.kt)("p",null,"The experiments in the previous sections used only one LED but to show dazzling light effects lets use three LEDs. Make connections as shown in the Fig 4.2 and upload the code given below and observe the changes that happens."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Things you need")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Break board x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resistors 330\u03a9,1k\u03a9 x 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"5mm LED x 3")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transistor(2N3904) x 3"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schematic")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_1.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/LinkItONE_Kit_4_2.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code")),(0,r.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Marquee/img/Code_sidekick_linkit.png",alt:null}))),(0,r.kt)("p",null,"You can unzip the file to the ",(0,r.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,r.kt)("p",null,"To access the demo code open:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L4_Control_LEDs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"const int pinLed1    = 2;                       // pin of led1\nconst int pinLed2    = 3;                       // pin of led2\nconst int pinLed3    = 4;                       // pin of led3\n\nvoid setup()\n{\n    pinMode(pinLed1, OUTPUT);                   // set all pin OUTPUT\n    pinMode(pinLed2, OUTPUT);\n    pinMode(pinLed3, OUTPUT);\n}\n\n\nvoid loop()\n{\n    digitalWrite(pinLed4, LOW);                 // led4 off\n    digitalWrite(pinLed1, HIGH);                // led1 on\n    delay(100);\n\n    digitalWrite(pinLed1, LOW);                 // led1 off\n    digitalWrite(pinLed2, HIGH);                // led2 on\n\n    delay(100);\n\n    digitalWrite(pinLed2, LOW);                 // led2 off\n    digitalWrite(pinLed3, HIGH);                // led3 on\n\n    delay(100);\n\n    digitalWrite(pinLed3, LOW);                 // led3 off\n    digitalWrite(pinLed4, HIGH);                // led4 on\n\n    delay(100);\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the polarity of the LED's.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure that you have connected the LED' to the correct port pins."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Making it better")),(0,r.kt)("p",null,"Upload the following code with the same breadboard connection in order to obtain different flashing effects."),(0,r.kt)("p",null,"To access the demo code open:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L4_Control_LEDs_Speed")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More ideas")),(0,r.kt)("p",null,"Modify the existing code such that the frequency of LED blinking increases."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[55677],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>h});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),c=s(n),k=i,h=c["".concat(u,".").concat(k)]||c[k]||d[k]||o;return n?r.createElement(h,a(a({ref:e},p),{},{components:n})):r.createElement(h,a({ref:e},p))}));function h(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=k;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[c]="string"==typeof t?t:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},55773:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const o={description:"LinkIt ONE Tutorial - Push Button",title:"LinkIt ONE Tutorial - Push Button",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Push_Button",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button",title:"LinkIt ONE Tutorial - Push Button",description:"LinkIt ONE Tutorial - Push Button",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Push_Button",permalink:"/zh-CN/LinkIt_ONE_Tutorial-Push_Button",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Push_Button.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"LinkIt ONE Tutorial - Push Button",title:"LinkIt ONE Tutorial - Push Button",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Push_Button",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Mini Servo",permalink:"/zh-CN/LinkIt-ONE-Tutorial---Mini-Servo"},next:{title:"LinkIt ONE Tutorial - SMS control the LED",permalink:"/zh-CN/LinkIt_ONE_Tutorial-SMS_control_the_LED"}},u={},s=[{value:"Tech Support",id:"tech-support",level:2}],p={toc:s};function c(t){let{components:e,...n}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What We\u2019re Doing")),(0,i.kt)("p",null,"We now got an insight of how a software and hardware works from the previous chapter. In this chapter we will learn how to integrate both software and hardware for the control of the LED. Make breadboard connections as shown in the Fig 3.2 and upload the code. Now this circuit operates as a two way switch when you press the left side push button switch the LED glows and when the right side push button is pressed the LED is switched OFF."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Things you need")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Break board x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resistors 330\u03a9,1k\u03a9 x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resistor 10k\u03a9 x 2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"5mm LED x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transistor(2N3904) x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Push Button switches x 2"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Schematic")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_1.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connection")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/LinkItONE_Kit_3_2.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")),(0,i.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Push_Button/img/Code_sidekick_linkit.png",alt:null}))),(0,i.kt)("p",null,"You can unzip the file to the ",(0,i.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,i.kt)("p",null,"To access the demo code open:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L3_Control_LED_Button")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const int pinLED = 3;                      // LED connect to D13\n\nconst int btnOn  = 5;                       // button on\nconst int btnOff = 6;                       // button off\n\nvoid setup()\n{\n    pinMode(pinLED, OUTPUT);                // set direction of D13-OUTPUT\n    pinMode(btnOff, INPUT);                 // set direction of D2-INPUT\n    pinMode(btnOn, INPUT);\n}\n\nvoid loop()\n{\n    if(0 == digitalRead(btnOn))            // button on pressed\n    {\n        digitalWrite(pinLED, HIGH);\n    }\n\n    if(0 == digitalRead(btnOff))\n    {\n        digitalWrite(pinLED, LOW);\n    }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Making it better")),(0,i.kt)("p",null,"Keeping the same hardware connection upload the following code. The luminosity brightens when the left push button switch is pressed and fades when the right push button switch is pressed."),(0,i.kt)("p",null,"To access the demo code open:\uff1a"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L3_Brightness")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More ideas")),(0,i.kt)("p",null,"How will you modify the code such that the blinking frequency of the LED changes?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
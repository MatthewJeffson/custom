"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60303],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=o.createContext({}),s=function(t){var e=o.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=s(t.components);return o.createElement(u.Provider,{value:e},t.children)},p="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},k=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),p=s(n),k=r,d=p["".concat(u,".").concat(k)]||p[k]||m[k]||i;return n?o.createElement(d,a(a({ref:e},c),{},{components:n})):o.createElement(d,a({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,a=new Array(i);a[0]=k;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[p]="string"==typeof t?t:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},53123:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={description:"LinkIt ONE Tutorial - SMS control the LED",title:"LinkIt ONE Tutorial - SMS control the LED",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED",title:"LinkIt ONE Tutorial - SMS control the LED",description:"LinkIt ONE Tutorial - SMS control the LED",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-SMS_control_the_LED",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-SMS_control_the_LED.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"LinkIt ONE Tutorial - SMS control the LED",title:"LinkIt ONE Tutorial - SMS control the LED",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-SMS_control_the_LED",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Push Button",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Push_Button"},next:{title:"LinkIt ONE Tutorial - The Basics",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-The_Basics"}},u={},s=[{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function p(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What We're Doing")),(0,r.kt)("p",null,"In this section, we achieve some cool function. Outstanding characteristic of LinkIt One is integrated with the communication module. We are following through GSM communication module to transmit messages, the switch state to pass to change LED. This will be exciting. First connect with the antenna, and then insert a SIMCARD into the slot of the LinkIt One, then according to the schematic connected circuit. Use a mobile phone with GSM, edit the message content ON or OFF, send the specified number (the SIM number), now you can control the LED switch state, And global synchronization."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Things you need")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Break board x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Resistors 1k\u03a9,330\u03a9 x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Transistor\uff082N3904\uff09 x 1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"GIS ANT x 1"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Schematic")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_1.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/LinkItONE_Kit_1_2.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Code")),(0,r.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-SMS_control_the_LED/img/Code_sidekick_linkit.png",alt:null}))),(0,r.kt)("p",null,"You can unzip the file to the ",(0,r.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,r.kt)("p",null,"To access the demo code open:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L9_SMS_Light")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Antenna do not work ?"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Attention to check the antenna connection is stable connection. (Antenna socket on the back, marked as GSM-ANT)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send the message without response\uff1f"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SIMCARD need to unlock free version. (That is not limited to any telephone mobile phone SIMCARD)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Making it better")),(0,r.kt)("p",null,"Perfect with the GSM module communication function. If we want to do a short time, how to modify the code? Set a time of 60 seconds (send form ON60). Send a message to set the lighting automatically extinguished in a minute after arrival."),(0,r.kt)("p",null,"To access the demo code open:"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L10_SMS_Light_Advanced")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"More ideas")),(0,r.kt)("p",null,"With Bluetooth, GPS, Wi-Fi function module. What a look whether to have the new play?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reference")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
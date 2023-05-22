"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return r?i.createElement(h,n(n({ref:t},d),{},{components:r})):i.createElement(h,n({ref:t},d))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,n=new Array(o);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,n[1]=l;for(var p=2;p<o;p++)n[p]=r[p];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},56947:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=r(87462),a=(r(67294),r(3905));const o={description:"Renbotics_ServoShield_Rev",title:"Renbotics Servo Shield Rev",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Renbotics_ServoShield_Rev",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},n=void 0,l={unversionedId:"Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev",id:"Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev",title:"Renbotics Servo Shield Rev",description:"Renbotics_ServoShield_Rev",source:"@site/docs/Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Renbotics_ServoShield_Rev",permalink:"/custom/Renbotics_ServoShield_Rev",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Renbotics_ServoShield_Rev.md",tags:[{label:"Shield",permalink:"/custom/tags/shield"}],version:"current",lastUpdatedBy:"Eico",lastUpdatedAt:1675267200,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Renbotics_ServoShield_Rev",title:"Renbotics Servo Shield Rev",tags:["Shield"],keywords:["Shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Renbotics_ServoShield_Rev",last_update:{date:"02/02/2023",author:"Eico"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"RGBW Stripe WireLess Shield V1.0",permalink:"/custom/RGBW_Stripe_WireLess_Shield_V1.0"},next:{title:"WireLess Gate Shield V1.0",permalink:"/custom/WireLess_Gate_Shield_V1.0"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Programming",id:"programming",level:3},{value:"Bill of Materials (BOM) /parts list",id:"bill-of-materials-bom-parts-list",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://media-cdn.seeedstudio.com/media/catalog/product/cache/b5e839932a12c6938f4f9ff16fa3726a/h/t/httpsstatics3.seeedstudio.comimagesproductservoshieldkitlarge.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("p",null,"The Renbotics ServoShield is an Arduino-compatible shield that uses two 4017 decade counters to drive up to 16 servos using only 4 pins (digital pins 6 to 9) and as little as one 8bit timer (Timer 2) in standard mode or two 16/8bit timers (Timer 1 and Timer 2 for Duemilanove or Timer 3 for Mega) in high accuracy mode. It also includes a 196 point breadboard style prototyping area."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Renbotics-ServoShield-V2.0-p-1299.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"16 Servo Channels")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Convenient screw terminal for servo power supply")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"196 Point breadboard style prototyping area")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Compatible with Arduino Duemilanove and Arduino Mega")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Easy to use API"))),(0,a.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Robotics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Animatronics")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Mechatronic Art"))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,a.kt)("p",null,"Accembled View:"),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"http://bz.seeedstudio.com/depot/images/product/StackedLarge.jpg",alt:"pir",width:600,height:"auto"})),(0,a.kt)("h3",{id:"programming"},"Programming"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample 1: Simple servo sweeper")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <ServoShield.h>\nServoShield servos; //Create a ServoShield object\nvoid setup()\n{\n    for (int servo = 0; servo < 16; servo++)//Initialize all 16 servos\n    {\n        servos.setbounds(servo, 1000, 2000); //Set the minimum and maximum pulse duration\n        servos.setposition(servo, 1500); //Set the initial position of the servo\n    }\n    servos.start(); //Start the servo shield\n}\nvoid loop()\n{\n    for(int pos = 1000; pos < 2000; pos++) //Move the servos from 0 degrees to 180 degrees\n    { //in steps of 1 degree\n        for (int i = 0; i < 16; i++) //for all 16 servos\n        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'\n        delay(1);\n    }\n    for(int pos = 2000; pos >= 1000; pos--)//Move the servos from 180 degrees to 0 degrees\n    {\n        for (int i = 0; i < 16; i++) //all 16 servos\n        servos.setposition(i, pos); //Tell servo to go to position in variable 'pos'\n        delay(1);\n    }\n}\n")),(0,a.kt)("h2",{id:"bill-of-materials-bom-parts-list"},"Bill of Materials (BOM) /parts list"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2 x 4017 Decade Counter DIP16")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2 x 10nf Capacitors")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2 x 6 pin Female Shield Stacking Headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"2 x 8 pin Female Shield Stacking Headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"1 x 2 pin Screw Terminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"3 x 16 pin Male Breakaway Headers"))),(0,a.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Revision"),(0,a.kt)("th",null," Descriptions"),(0,a.kt)("th",null," Release")),(0,a.kt)("tr",null,(0,a.kt)("td",{width:"300px"}," v1.1"),(0,a.kt)("td",{width:"500px"}," Initial public release"),(0,a.kt)("td",{width:"200px"}," Aug 23, 2009"))),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/datasheet/RenboticsServoShield1.5.pdf"},"Manual Rev 1.5"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/images/product/ServoShield.zip"},"Arduino Library Rev 1.3 (Updated 07-09-2009)")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(k,a(a({ref:t},s),{},{components:n})):r.createElement(k,a({ref:t},s))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"LinkIt ONE Tutorial - Mini Servo",title:"LinkIt ONE Tutorial - Mini Servo",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt-ONE-Tutorial---Mini-Servo",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo",title:"LinkIt ONE Tutorial - Mini Servo",description:"LinkIt ONE Tutorial - Mini Servo",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt-ONE-Tutorial---Mini-Servo",permalink:"/custom/LinkIt-ONE-Tutorial---Mini-Servo",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt-ONE-Tutorial---Mini-Servo.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"LinkIt ONE Tutorial - Mini Servo",title:"LinkIt ONE Tutorial - Mini Servo",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt-ONE-Tutorial---Mini-Servo",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Marquee",permalink:"/custom/LinkIt_ONE_Tutorial-Marquee"},next:{title:"LinkIt ONE Tutorial - Push Button",permalink:"/custom/LinkIt_ONE_Tutorial-Push_Button"}},p={},u=[{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What We're Doing")),(0,o.kt)("p",null,"Servo motor (servo) is commonly used in small robots and other machines to control angular position. It is wrapped by a small gear box, and positioned by the timing control pulses. In this section we control the angular position of the mini servo with the help of potentiometer."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Things you need")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Break board x 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Slide Potentiometer 10k\u03a9 x 1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Servo x 1"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Schematic")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_1.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Connection")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/LinkItONE_Kit_7_2.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Code")),(0,o.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt-ONE-Tutorial---Mini-Servo/img/Code_sidekick_linkit.png",alt:null}))),(0,o.kt)("p",null,"You can unzip the file to the ",(0,o.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,o.kt)("p",null,"To access the demo code open:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L7_Servo")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"#include <Servo.h>\n\nServo myservo;              // create servo object to control a servo\nint potpin = A0;             // analog pin used to connect the potentiometer\nint val;                    // variable to read the value from the analog pin\n\nvoid setup()\n{\n    myservo.attach(9);                  // attaches the servo on pin 9 to the servo object\n}\n\nvoid loop() {\n    val = analogRead(potpin);          // reads the value of the potentiometer (value between 0 and 1023)\n    val = map(val, 0, 1023, 0, 179);   // scale it to use it with the servo (value between 0 and 180)\n    myservo.write(val);                // sets the servo position according to the scaled value\n    delay(15);                         // waits for the servo to get there\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"There are three pins in servos and they are color coded respective to their functionality yellow-analog port red \u2013 positive, dark brown \u2013 ground. So please make connections according to its functionality.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ensure that 5v power supply is connected to the board."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Making it better")),(0,o.kt)("p",null,"If the mini steering worked, we can adjust the speed of rotation by using a potentiometer. Upload the following code to produce different functionality."),(0,o.kt)("p",null,"To access the demo code open:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L7_Servo_Speed")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"More ideas")),(0,o.kt)("p",null,"How do you control two servo motors simultaneously so that you can make a robot?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Reference")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
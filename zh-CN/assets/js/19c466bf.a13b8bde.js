"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},28577:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const o={description:"LinkIt ONE Tutorial - Light Sensor",title:"LinkIt ONE Tutorial - Light Sensor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Light-Sensor",last_update:{date:"1/13/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Light-Sensor",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Light-Sensor",title:"LinkIt ONE Tutorial - Light Sensor",description:"LinkIt ONE Tutorial - Light Sensor",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Light-Sensor.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Light-Sensor",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Light-Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Light-Sensor.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"LinkIt ONE Tutorial - Light Sensor",title:"LinkIt ONE Tutorial - Light Sensor",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Light-Sensor",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Hello World",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Hello_World"},next:{title:"LinkIt ONE Tutorial - Marquee",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Marquee"}},s={},p=[{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What We're Doing")),(0,i.kt)("p",null,"It's time to know about new sensors that could make our projects even more interesting. A photoresistor (light dependent resistor or photocell) is a light sensor which varies its resistance value based on the intensity of the ambient light. A buzzer is a electro-acoustic device used to generate standard tone when it is connected to the power supply. Lets use both these components in our experiments."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Things you need")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Break board x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resistors 10k\u03a9,1k\u03a9,330\u03a9 x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Buzzer x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Photoresistor x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Transistor\uff082N3904\uff09x 1"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Schematic")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_1.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connection")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/LinkItONE_Kit_8_2.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")),(0,i.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Light-Sensor/img/Code_sidekick_linkit.png",alt:null}))),(0,i.kt)("p",null,"You can unzip the file to the ",(0,i.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,i.kt)("p",null,"To access the demo code open:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L8_Light_Control_Buzzer")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"const int pinBuz   = 3;                        // pin define of LED\nconst int pinLight = A0;                        // pin define of Light Sensor\n\nvoid setup()\n{\n    pinMode(pinBuz, OUTPUT);\n    pinMode(pinLight, INPUT);\n}\n\nvoid loop()\n{\n    int value = analogRead(pinLight);\n    value = map(value, 0, 1023, 255, 0);\n    analogWrite(pinBuz, value);\n    delay(100);\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Photosensitive does not work ?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Photoresistor lead's wire spacing is not standard. It is easy to short the leads. Carefully check."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"No Sound\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Buzzer leads are very short. Carefully check if they are properly inserted in the breadboard.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Making it better")),(0,i.kt)("p",null,"Lets control the tone of the buzzer further using the photoresistor. Different tones can be generated if you vary the light intensity that falls on the photo resistor. Upload the following code and observe the difference."),(0,i.kt)("p",null,"To access the demo code open:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L8_Buzzer_Music")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More ideas")),(0,i.kt)("p",null,"We can make more interesting applications using photocell. Try making a light-sensitive Christmas gift."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
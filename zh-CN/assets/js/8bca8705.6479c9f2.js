"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22057],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),d=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=d(a),k=n,g=s["".concat(p,".").concat(k)]||s[k]||u[k]||l;return a?r.createElement(g,i(i({ref:t},m),{},{components:a})):r.createElement(g,i({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73044:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={description:"Grove - Relay",title:"Grove - Relay",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Relay",last_update:{date:"2/1/2023",author:"hushuxu"}},i=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Relay",id:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Relay",title:"Grove - Relay",description:"Grove - Relay",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Relay.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Sensor",slug:"/cn/Grove-Relay",permalink:"/custom/zh-CN/cn/Grove-Relay",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Relay.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675180800,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Grove - Relay",title:"Grove - Relay",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Relay",last_update:{date:"2/1/2023",author:"hushuxu"}}},p={},d=[{value:"\u4ea7\u54c1\u7279\u6027",id:"\u4ea7\u54c1\u7279\u6027",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"\u5165\u95e8\u6307\u5bfc",id:"\u5165\u95e8\u6307\u5bfc",level:2},{value:"\u4f7f\u7528 Arduino",id:"\u4f7f\u7528-arduino",level:3},{value:"\u786c\u4ef6\u8fde\u63a5",id:"\u786c\u4ef6\u8fde\u63a5",level:4},{value:"Software",id:"software",level:4},{value:"\u4f7f\u7528 TI LaunchPad",id:"\u4f7f\u7528-ti-launchpad",level:3},{value:"\u4f7f\u7528 Raspberry Pi",id:"\u4f7f\u7528-raspberry-pi",level:3},{value:"\u786c\u4ef6\u8fde\u63a5",id:"\u786c\u4ef6\u8fde\u63a5-1",level:4},{value:"\u7a0b\u5e8f",id:"\u7a0b\u5e8f",level:4},{value:"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8",id:"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8",level:2},{value:"\u8d44\u6e90\u4e0b\u8f7d",id:"\u8d44\u6e90\u4e0b\u8f7d",level:2}],m={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u82f1\u6587 wiki\uff1a",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Relay/"},"https://wiki.seeedstudio.com/Grove-Relay/")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/Twig-Relay.jpg",alt:"enter image description here"})),(0,n.kt)("p",null," Grove-Relay\u6a21\u5757\u662f\u4e00\u4e2a\u6570\u5b57\u5e38\u5f00\u5f00\u5173\u3002 \u901a\u8fc7\u5b83\u4f60\u53ef\u4ee5\u4f7f\u7528\u8f83\u4f4e\u7684\u7535\u538b\u8fbe\u5230\u63a7\u5236\u9ad8\u7535\u538b\u7684\u76ee\u7684\uff0c\u5982\u63a7\u5236\u5668\u4e0a\u7684 5V \u7535\u538b\u5c31\u53ef\u4ee5\u3002 \u677f\u4e0a\u6709\u4e00\u4e2a LED\u6307\u793a\u706f\uff0c\u5f53\u53d7\u63a7\u7aef\u95ed\u5408\u65f6\uff0c\u5b83\u5c06\u4eae\u8d77\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.179ada13kJa9LO&id=45670971061"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG",alt:null}))),(0,n.kt)("h2",{id:"\u4ea7\u54c1\u7279\u6027"},"\u4ea7\u54c1\u7279\u6027"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u53c2\u6570"),(0,n.kt)("th",{parentName:"tr",align:"left"},"V1.1"),(0,n.kt)("th",{parentName:"tr",align:"left"},"V1.2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ea7\u54c1\u53d1\u5e03\u65e5\u671f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2013\u5e741\u670827\u65e5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2014\u5e746\u67089\u65e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u7535\u538b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5V"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3.3V~5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5de5\u4f5c\u7535\u6d41"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60mA"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528\u5bff\u547d"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100,000\u5468\u671f"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100,000\u5468\u671f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u5f00\u5173\u7535\u538b"),(0,n.kt)("td",{parentName:"tr",align:"left"},"250VAC/30VDC"),(0,n.kt)("td",{parentName:"tr",align:"left"},"250VAC/30VDC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6700\u5927\u5f00\u5173\u7535\u6d41"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5A"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5A")))),(0,n.kt)("p",null,"!!!Tip\n\u5173\u4e8eGrove\u6a21\u5757\u7684\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/cn/Grove_System/"},"Grove System")),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"\u5165\u95e8\u6307\u5bfc"},"\u5165\u95e8\u6307\u5bfc"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"\u4f7f\u7528-arduino"},"\u4f7f\u7528 Arduino"),(0,n.kt)("h4",{id:"\u786c\u4ef6\u8fde\u63a5"},"\u786c\u4ef6\u8fde\u63a5"),(0,n.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u6f14\u793a\u5411\u60a8\u5c55\u793a\u8fd9\u4e2a Grove - Relay \u7684\u5de5\u4f5c\u539f\u7406\u3002 \u9996\u5148\uff0c\u60a8\u9700\u8981\u51c6\u5907\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Relay"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove -  Button"),(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/Grove_Relay_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11rndqnS&id=45721222112"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.2d2b0dcdZUBw8h&id=45670971061"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.12.2e67dd181VQuUB&id=531838497696"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144"},"\u9a6c\u4e0a\u8d2d\u4e70"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5c06 Grove-Relay \u6a21\u5757\u8fde\u63a5\u5230 Grove-Base Shield \u7684 ",(0,n.kt)("strong",{parentName:"li"},"D4")," \u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06 Grove-Button \u6a21\u5757\u8fde\u63a5\u5230 Grove-Base Shield \u7684 ",(0,n.kt)("strong",{parentName:"li"},"D2")," \u548c ",(0,n.kt)("strong",{parentName:"li"},"D3")," \u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06 Grove-Base Shield \u63d2\u5165 Arduino\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7 USB\u6570\u636e\u7ebf\u5c06 Arduino \u8fde\u63a5\u5230 PC\u3002\n",(0,n.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/button-relay.jpg",alt:"enter image description here"}))),(0,n.kt)("p",null,"!!!Note\n\u5982\u679c\u6211\u4eec\u6ca1\u6709base shield\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5c06 Grove-Relay \u548c Grove-Button \u8fde\u63a5\u5230 Arduino \u677f\u4e0a\u3002 \u8bf7\u6309\u7167\u4e0b\u9762\u7684\u8fde\u63a5\u3002"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Relay"),(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SIG"),(0,n.kt)("td",{parentName:"tr",align:null},"D4")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Button#1"),(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SIG"),(0,n.kt)("td",{parentName:"tr",align:null},"D2")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Button#2"),(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SIG"),(0,n.kt)("td",{parentName:"tr",align:null},"D3")))),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u6f14\u793a\uff0c\u5411\u60a8\u5c55\u793a\u5982\u4f55\u4f7f\u7528 Grove - Button \u63a7\u5236 Grove - Relay\u3002 \u5f53\u6309\u4e0b\u4e00\u4e2a\u6309\u94ae\u65f6\uff0c\u7ee7\u7535\u5668\u5c06\u5173\u95ed\u3002 \u5f53\u5176\u4ed6\u6309\u94ae\u88ab\u6309\u4e0b\u65f6\uff0c\u7ee7\u7535\u5668\u5c06\u6253\u5f00\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"// Relay Control\n\nvoid setup()\n{\n  pinMode(2, INPUT);\n  pinMode(3, INPUT);\n  pinMode(4, OUTPUT);\n}\n\nvoid loop()\n{\n  if (digitalRead(2)==HIGH)\n  {\n    digitalWrite(4, HIGH);\n    delay(100);\n  }\n  if (digitalRead(3)==HIGH)\n  {\n    digitalWrite(4, LOW);\n  }\n}\n\n")),(0,n.kt)("h3",{id:"\u4f7f\u7528-ti-launchpad"},"\u4f7f\u7528 TI LaunchPad"),(0,n.kt)("p",null,"\u63a7\u5236\u5176\u4ed6\u7535\u5b50\u8bbe\u5907\uff08\u4f7f\u7528\u7ee7\u7535\u5668\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/Relay.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,"\u6b64\u793a\u4f8b\u663e\u793a\u5982\u4f55\u4f7f\u7528 Grove-relay \u6a21\u5757\u6765\u63a7\u5236\u8f83\u5927\u7684\u8d1f\u8f7d\uff0c\u4f8b\u5982\u53f0\u706f\u3002 \u4f7f\u7528 3V\u7535\u538b\u4fe1\u53f7\u8ba9\u7ee7\u7535\u5668\u63a5\u901a\uff0c\u5141\u8bb8\u7535\u6d41\u6d41\u8fc7\u6240\u8fde\u63a5\u7684\u8bbe\u5907\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"/*\nRelay\nThe basic Energia example.\nThis example code is in the public domain.\n*/\n\n#define RELAY_PIN 39\n\n// the setup routine runs once when you press reset:\nvoid setup() {\n         pinMode(RELAY_PIN, OUTPUT); // initialize the digital pin as an output.\n}\n\n// the loop routine runs over and over again forever:\nvoid loop() {\n         digitalWrite(RELAY_PIN, HIGH); // turn the relay on (HIGH is the voltage level)\n         delay(1000);   // wait for a second\n         digitalWrite(RELAY_PIN, LOW);   // turn the relay o by making the voltage LOW\n         delay(1000);   // wait for a second\n}\n")),(0,n.kt)("h3",{id:"\u4f7f\u7528-raspberry-pi"},"\u4f7f\u7528 Raspberry Pi"),(0,n.kt)("h4",{id:"\u786c\u4ef6\u8fde\u63a5-1"},"\u786c\u4ef6\u8fde\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u51c6\u5907\u4ee5\u4e0b\u5185\u5bb9\uff1a")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Relay"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Button"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Temperature_and_Humidity_Sensor_Pro/img/pi.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/Grove_Relay_s.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/button_s.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11zpryre&id=528322046763"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.addbe7dlRVNGW&id=45670971061"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.13.6810e28bnnbHCO&id=531838497696"},"\u9a6c\u4e0a\u8d2d\u4e70"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u60a8\u9700\u8981\u5b8c\u6210\u914d\u7f6e\u5f00\u53d1\u73af\u5883\uff0c\u5426\u5219\u9075\u5faa ",(0,n.kt)("a",{parentName:"li",href:"http://wiki.seeed.cc/GrovePi_Plus/"},"\u8bf4\u660e")," \u5b8c\u6210\u914d\u7f6e\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06 Grove-Button \u63d2\u5165\u5230 Grovepi + \u7684 ",(0,n.kt)("strong",{parentName:"li"},"D3")," \u7aef\u53e3\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5c06 Grove-Relay \u63d2\u5165 Grovepi + \u7684 ",(0,n.kt)("strong",{parentName:"li"},"D4")," \u7aef\u53e3\u3002\n",(0,n.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-Relay/img/GrovePiPlus_Grove_relay.jpeg",alt:"enter image description here"}))),(0,n.kt)("h4",{id:"\u7a0b\u5e8f"},"\u7a0b\u5e8f"),(0,n.kt)("p",null,"!!! attention\n\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528 ",(0,n.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", \u4f60\u53ea\u80fd\u5728 ",(0,n.kt)("strong",{parentName:"p"},"python3")," \u4e2d\u4f7f\u7528\u8fd9\u4e2a\u547d\u4ee4\u884c."),(0,n.kt)("p",null,"\u6b64\u6f14\u793a\u5411\u60a8\u5c55\u793a\u5982\u4f55\u901a\u8fc7 Raspberry Pi \u4f7f\u7528 Grove - Relay\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# Raspberry Pi + Grove Switch + Grove Relay\n\nimport time\nimport grovepi\n# Connect the Grove Switch to digital port D3\n# SIG,NC,VCC,GND\n\nswitch = 3\n# Connect the Grove Relay to digital port D4\n# SIG,NC,VCC,GND\n\nrelay = 4\ngrovepi.pinMode(switch,"INPUT")\ngrovepi.pinMode(relay,"OUTPUT")\nwhile True:\n    try:\n        if grovepi.digitalRead(switch):\n            grovepi.digitalWrite(relay,1)\n        else:\n            grovepi.digitalWrite(relay,0)\n            time.sleep(.05)\n    except KeyboardInterrupt:\n        grovepi.digitalWrite(relay,0)\n        break\n    except IOError:\n        print "Error"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u627e\u5230\u6587\u4ef6\u7684\u8def\u5f84\uff08\u6839\u636e\u4f60\u81ea\u5df1\u7684\u8def\u5f84\u6765\u5b9a\uff09")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd GrovePi/Software/Python/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u8fd9\u4e2a\u4ee3\u7801")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo python3 grove_switch_relay.py\n")),(0,n.kt)("h2",{id:"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8"},"\u539f\u7406\u56fe\u5728\u7ebf\u9884\u89c8"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"\u8d44\u6e90\u4e0b\u8f7d"},"\u8d44\u6e90\u4e0b\u8f7d"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove-Relay_Eagle_Files.zip"},"Grove - Relay Schematic and PCB in Eagle format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20PCB.pdf"},"Grove - Relay PCB in PDF format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Relay/res/Grove%20-%20Relay%20Schematic.pdf"},"Grove - Relay Schematic in PDF format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Relay/res/Relay_Datasheet.pdf"},"HLS8-T73 Series Relay Datasheet"))))}s.isMDXComponent=!0}}]);
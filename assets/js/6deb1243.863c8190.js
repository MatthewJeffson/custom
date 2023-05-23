"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[71621],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),k=n,h=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return r?a.createElement(h,l(l({ref:t},m),{},{components:r})):a.createElement(h,l({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},637:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={description:"Grove - Light Sensor",title:"Grove - Light Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Light_Sensor",last_update:{date:"2/1/2023",author:"hushuxu"}},l=void 0,o={unversionedId:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Light_Sensor",id:"zh-CN/Sensor/Grove/Grove_Sensor/Grove-Light_Sensor",title:"Grove - Light Sensor",description:"Grove - Light Sensor",source:"@site/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Light_Sensor.md",sourceDirName:"zh-CN/Sensor/Grove/Grove_Sensor",slug:"/cn/Grove-Light_Sensor",permalink:"/custom/cn/Grove-Light_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Grove/Grove_Sensor/Grove-Light_Sensor.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Grove - Light Sensor",title:"Grove - Light Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Grove-Light_Sensor",last_update:{date:"2/1/2023",author:"hushuxu"}}},s={},p=[{value:"\u7248\u672c\u4fe1\u606f",id:"\u7248\u672c\u4fe1\u606f",level:3},{value:"\u4ea7\u54c1\u7279\u6027",id:"\u4ea7\u54c1\u7279\u6027",level:2},{value:"\u652f\u6301\u5e73\u53f0",id:"\u652f\u6301\u5e73\u53f0",level:3},{value:"\u89c4\u683c\u53c2\u6570",id:"\u89c4\u683c\u53c2\u6570",level:2},{value:"\u5165\u95e8\u6307\u5bfc",id:"\u5165\u95e8\u6307\u5bfc",level:2},{value:"\u786c\u4ef6\u8fde\u63a5",id:"\u786c\u4ef6\u8fde\u63a5",level:3},{value:"\u4e0b\u8f7d\u63cf\u8ff0",id:"\u4e0b\u8f7d\u63cf\u8ff0",level:3},{value:"\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230Arduino",id:"\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230arduino",level:3},{value:"\u83b7\u53d6\u539f\u59cb\u6570\u636e",id:"\u83b7\u53d6\u539f\u59cb\u6570\u636e",level:3},{value:"\u9879\u76ee\uff1a\u79d8\u5bc6\u7bb1",id:"\u9879\u76ee\u79d8\u5bc6\u7bb1",level:3},{value:"\u9879\u76ee Wooden Laser Gun",id:"\u9879\u76ee-wooden-laser-gun",level:2},{value:"\u8d44\u6e90\u4e0b\u8f7d",id:"\u8d44\u6e90\u4e0b\u8f7d",level:2}],m={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(d,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"\u82f1\u6587 wiki \uff1a",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-Light_Sensor/"},"https://wiki.seeedstudio.com/Grove-Light_Sensor/")),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/cover.jpg",alt:"enter image description here"})),(0,n.kt)("p",null,"Grove-Light\u4f20\u611f\u5668\u96c6\u6210\u4e86\u4e00\u4e2a\u5149\u7535\u963b\uff08\u4f9d\u8d56\u5149\u5f3a\u8c03\u6574\u7535\u963b\uff09\u6765\u68c0\u6d4b\u5149\u5f3a\u3002 \u5f53\u5149\u5f3a\u5ea6\u589e\u52a0\u65f6\uff0c\u5149\u7535\u963b\u7684\u7535\u963b\u964d\u4f4e\u3002 \u677f\u4e0a\u7684\u53ccOpAmp\u82af\u7247LM358\u4ea7\u751f\u4e0e\u5149\u5f3a\u5ea6\u76f8\u5bf9\u5e94\u7684\u7535\u538b\uff08\u5373\u57fa\u4e8e\u7535\u963b\u503c\uff09\u3002 \u8f93\u51fa\u4fe1\u53f7\u4e3a\u6a21\u62df\u503c\uff0c\u4eae\u5ea6\u8d8a\u4eae\uff0c\u503c\u8d8a\u5927\u3002"),(0,n.kt)("p",null,"\u8be5\u6a21\u5757\u53ef\u7528\u4e8e\u6784\u5efa\u5149\u63a7\u5f00\u5173\uff0c\u5373\u5728\u767d\u5929\u5173\u95ed\u706f\uff0c\u5e76\u5728\u591c\u95f4\u5f00\u542f\u706f\u3002"),(0,n.kt)("p",null,"!!!Warning\n\u5149\u4f20\u611f\u5668\u503c\u4ec5\u53cd\u6620\u5149\u5f3a\u5ea6\u7684\u8fd1\u4f3c\u8d8b\u52bf\uff0c\u5b83\u4e0d\u8868\u793a\u786e\u5207\u7684\u660e\u4eae\u7a0b\u5ea6\u3002"),(0,n.kt)("h3",{id:"\u7248\u672c\u4fe1\u606f"},"\u7248\u672c\u4fe1\u606f"),(0,n.kt)("p",null,"\u672c\u6587\u6863\u9002\u7528\u4e8e\u4ee5\u4e0b\u7248\u672c\u7684\u4ea7\u54c1\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53d1\u5e03\u65e5\u671f"),(0,n.kt)("th",{parentName:"tr",align:null},"\u8d2d\u4e70\u5730\u5740"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Light Sensor 1.0"),(0,n.kt)("td",{parentName:"tr",align:null},"2013\u5e744\u670828\u65e5"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u518d\u9500\u552e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Light Sensor(P)"),(0,n.kt)("td",{parentName:"tr",align:null},"2014"),(0,n.kt)("td",{parentName:"tr",align:null},"\u4e0d\u518d\u9500\u552e")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove - Light Sensor(P) V1.1"),(0,n.kt)("td",{parentName:"tr",align:null},"2016\u5e748\u6708"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11Pl6vXS&id=558132536414"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/wiki_chinese/docs/images/click_to_buy.PNG",alt:"enter image description here"})))))),(0,n.kt)("h2",{id:"\u4ea7\u54c1\u7279\u6027"},"\u4ea7\u54c1\u7279\u6027"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6a21\u62df\u503c\u8f93\u51fa")),(0,n.kt)("li",{parentName:"ul"},"\u9ad8\u53ef\u9760\u6027\u548c\u7075\u654f\u5ea6"),(0,n.kt)("li",{parentName:"ul"},"\u5360\u5730\u9762\u79ef\u5c0f"),(0,n.kt)("li",{parentName:"ul"},"\u80fd\u591f\u8bc6\u522b\u66f4\u5e7f\u6cdb\u7684\u9891\u8c31")),(0,n.kt)("p",null,"!!!Tip\n\u5173\u4e8eGrove\u6a21\u5757\u7684\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 ",(0,n.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/cn/Grove_System/"},"Grove System")),(0,n.kt)("h3",{id:"\u652f\u6301\u5e73\u53f0"},"\u652f\u6301\u5e73\u53f0"),(0,n.kt)("h2",{id:"\u89c4\u683c\u53c2\u6570"},"\u89c4\u683c\u53c2\u6570"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"\u9879\u76ee"),(0,n.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u7535\u538b"),(0,n.kt)("td",{parentName:"tr",align:null},"3~5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5de5\u4f5c\u7535\u6d41"),(0,n.kt)("td",{parentName:"tr",align:null},"0.5~3 mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u54cd\u5e94\u65f6\u95f4"),(0,n.kt)("td",{parentName:"tr",align:null},"20-30\u6beb\u79d2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u5cf0\u503c\u6ce2\u957f"),(0,n.kt)("td",{parentName:"tr",align:null},"540 nm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"\u91cd\u91cf"),(0,n.kt)("td",{parentName:"tr",align:null},"4 g")))),(0,n.kt)("h2",{id:"\u5165\u95e8\u6307\u5bfc"},"\u5165\u95e8\u6307\u5bfc"),(0,n.kt)("p",null,"!!!Note\n\u8be5\u90e8\u5206\u57fa\u4e8eGrove-Light Sensor\uff08P\uff09V1.0\u3002"),(0,n.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u901a\u8fc7\u4e00\u4e2a\u7b80\u5355\u7684\u6f14\u793a\u5411\u60a8\u5c55\u793aGrove-Light\u4f20\u611f\u5668\u7684\u5de5\u4f5c\u539f\u7406\u3002 \u9996\u5148\uff0c\u60a8\u9700\u8981\u51c6\u5907\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeeduino V4"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Light Sensor"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - LED Bar"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_2.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_3.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11CbMRQI&id=544373791068"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"http://www.seeedstudio.com/Grove-Light-Sensor%28P%29-p-1253.html"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11eweTAx&id=520900900588"},"\u9a6c\u4e0a\u8d2d\u4e70"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,n.kt)("th",{parentName:"tr",align:null},"micro USB cable"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove cable"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_5.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_6.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11crrag2&id=520233320144"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.9.3ff19e11FPxAuN&id=521385344999"},"\u9a6c\u4e0a\u8d2d\u4e70")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e11mtGMxC&id=546720638006"},"\u9a6c\u4e0a\u8d2d\u4e70"))))),(0,n.kt)("h3",{id:"\u786c\u4ef6\u8fde\u63a5"},"\u786c\u4ef6\u8fde\u63a5"),(0,n.kt)("p",null,"\u7531\u4e8eGrove\u7cfb\u5217\u6a21\u5757\u7684\u4f18\u70b9\uff0c\u60a8\u4e0d\u9700\u8981\u710a\u63a5\u6216\u9762\u5305\u677f\uff0c\u60a8\u9700\u8981\u505a\u7684\u662f\u5c06\u6a21\u5757\u8fde\u63a5\u5230Base Shield\u7684\u9002\u5f53\u7684Grove\u7aef\u53e3\u3002 \u5bf9\u4e8e\u6b64\u6f14\u793a\uff0c\u6211\u4eec\u5c06\u4f7f\u7528\u4e24\u4e2aGrove\u6a21\u5757\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove - \u5149\u4f20\u611f\u5668\u662f\u4e00\u4e2a\u6a21\u62df\u8f93\u51fa\u6a21\u5757\uff0c\u8ba9\u6211\u4eec\u5c06\u5176\u8fde\u63a5\u5230 ",(0,n.kt)("strong",{parentName:"li"},"A0"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"Grove - LED Bar\u662f\u4e00\u4e2a\u5e26\u4e24\u6761\u603b\u7ebf\u7684\u6570\u5b57\u8f93\u5165\u6a21\u5757\uff0c\u6211\u4eec\u5c06\u5176\u8fde\u63a5\u5230 ",(0,n.kt)("strong",{parentName:"li"},"D2"),"\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/connect.jpeg",alt:"enter image description here"})),(0,n.kt)("h3",{id:"\u4e0b\u8f7d\u63cf\u8ff0"},"\u4e0b\u8f7d\u63cf\u8ff0"),(0,n.kt)("p",null,"Seeeduino Stalker V3.1\u6709\u4e00\u4e9b\u793a\u4f8b\uff0c\u5176\u4e2d\u5305\u62ec\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u4f20\u611f\u5668\u539f\u59cb\u503c\u7684\u793a\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u4e2a\u677f\u5b50\u5165\u95e8\u7684\u793a\u4f8b"),(0,n.kt)("li",{parentName:"ul"},"\u79d8\u5bc6\u76d2\u6f14\u793a\u7684\u4f8b\u5b50"),(0,n.kt)("li",{parentName:"ul"},"LED\u6761\u5f62\u56fe\u5e93")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sketch_Grove_Light_Sensor"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/sketch_download.png",alt:null}))),(0,n.kt)("p",null,"\u4e0b\u8f7d\u8fd9\u4e9b\u793a\u4f8b\u5e76\u653e\u5728\u4efb\u4f55\u5730\u65b9\uff0c\u6253\u5f00Arduino IDE\uff0c",(0,n.kt)("strong",{parentName:"p"},"File\uff08\u6587\u4ef6\uff09> Sketchbook\uff08\u9879\u76ee\u6587\u4ef6\u5939\uff09"),"\uff0c\u5e76\u5c06\u4f4d\u7f6e\u8def\u5f84\u590d\u5236\u5230 ",(0,n.kt)("strong",{parentName:"p"},"Sketchbook\u4f4d\u7f6e"),"\uff0c\u7136\u540e\u5355\u51fb\u786e\u5b9a\u3002 \u91cd\u65b0\u6253\u5f00Arduino IDE\uff0c\u7136\u540e\u8bbe\u7f6e\u7f16\u8f91\u9875\u9762\u3002"),(0,n.kt)("h3",{id:"\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230arduino"},"\u5c06\u4ee3\u7801\u4e0a\u4f20\u5230Arduino"),(0,n.kt)("p",null,"\u6253\u5f00Arduino IDE\uff0c ",(0,n.kt)("strong",{parentName:"p"},"File\uff08\u6587\u4ef6\uff09> Sketchbook\uff08\u9879\u76ee\u6587\u4ef6\u5939\uff09> GettingStarted"),"  \u6253\u5f00\u6b64\u90e8\u5206\u7684\u4ee3\u7801\u3002"),(0,n.kt)("p",null,"\u7136\u540e\u9009\u62e9\u6b63\u786e\u7684\u677f\u548cCOM\u7aef\u53e3\uff0c\u7136\u540e\u5355\u51fb\u4e0a\u4f20\u6309\u94ae\uff0c\u6b64\u8fc7\u7a0b\u5c06\u9700\u8981\u51e0\u79d2\u949f\u3002 \u7136\u540e\u8ba9\u6211\u4eec\u7528\u624b\u906e\u4f4f\u5149\u7ebf\u4f20\u611f\u5668\uff0c\u4f60\u4f1a\u53d1\u73b0LED\u706f\u6761\u51cf\u5c11\u4e86\u5b83\u7684LED\u3002"),(0,n.kt)("h3",{id:"\u83b7\u53d6\u539f\u59cb\u6570\u636e"},"\u83b7\u53d6\u539f\u59cb\u6570\u636e"),(0,n.kt)("p",null,"\u5982\u679c\u60a8\u4e0d\u60f3\u7528 Grove-LED Bar\uff0c\u8fd8\u6709\u53e6\u4e00\u4e2a\u53ef\u4ee5\u5c1d\u8bd5\u7684\u4f8b\u5b50\uff0c\u6253\u5f00Arduino IDE\uff0c ",(0,n.kt)("strong",{parentName:"p"},"File\uff08\u6587\u4ef6\uff09> Sketchbook\uff08\u9879\u76ee\u6587\u4ef6\u5939\uff09> RawData")," \u6253\u5f00\u4ee3\u7801\uff0c\u5c06\u793a\u4f8b\u4e0a\u4f20\u5230Seeeduino V4\u540e\uff0c\u70b9\u51fb ",(0,n.kt)("strong",{parentName:"p"},"Tool\uff08\u5de5\u5177\uff09>Serial(\u4e32\u53e3\u7ed8\u56fe\u5668)")," \u4ee5\u83b7\u5f97\u4f20\u611f\u5668\u7684\u53d8\u5316\u66f2\u7ebf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/raw_data.png",alt:"enter image description here"})),(0,n.kt)("h3",{id:"\u9879\u76ee\u79d8\u5bc6\u7bb1"},"\u9879\u76ee\uff1a\u79d8\u5bc6\u7bb1"),(0,n.kt)("p",null,"\u5728\u8fd9\u91cc\uff0c\u6211\u4eec\u5c06\u5411\u60a8\u5c55\u793a\u7531Grove - \u5149\u4f20\u611f\u5668 - \u79d8\u5bc6\u76d2\u5236\u4f5c\u7684\u9879\u76ee\u3002 \u9996\u5148\u4f60\u9700\u8981\u4e00\u4e2a\u76d2\u5b50\uff0c\u4e00\u4e2a\u7eb8\u76d2\uff0c\u4e00\u4e2a\u6728\u76d2\u5b50\uff0c\u4efb\u4f55\u4e00\u4e2a\u76d2\u5b50\u90fd\u53ef\u4ee5\u3002 \u628a\u4e1c\u897f\u653e\u5728\u76d2\u5b50\u91cc\uff0c\u56e0\u4e3a\u6211\u4eec\u628a\u5b83\u547d\u540d\u4e3a\u79d8\u5bc6\u76d2\uff0c\u8fd9\u610f\u5473\u7740\u6211\u4eec\u4e0d\u60f3\u8ba9\u4efb\u4f55\u4eba\u6253\u5f00\u5b83\uff0c\u5426\u5219\u4f1a\u6709\u4e00\u4e2a\u95f9\u949f\u6765\u901a\u77e5\u4f60\u3002"),(0,n.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528LinkIt ONE\u4f5c\u4e3a\u63a7\u5236\u5668\uff0c\u5b83\u662f\u4e00\u4e2aArduino\u517c\u5bb9\u677f\uff0c\u7531\u4e30\u5bcc\u7684\u529f\u80fd\u7ec4\u6210\u3002 \u4f60\u9700\u8981\u4e0b\u9762\u7684\u4e1c\u897f\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://item.taobao.com/item.htm?spm=a1z10.3-c.w4002-11172317909.10.3ff19e111fcjR2&id=45453335551"},"LinkIt ONE")),(0,n.kt)("li",{parentName:"ul"},"Grove - Light Sensor"),(0,n.kt)("li",{parentName:"ul"},"Grove - Base Shield"),(0,n.kt)("li",{parentName:"ul"},"\u4e00\u5f20SIM\u5361")),(0,n.kt)("p",null,"\u6211\u4eec\u5c06Grove - \u5149\u4f20\u611f\u5668\u8fde\u63a5\u5230A0\u6216Base Shield\uff0c\u5e76\u6253\u5f00Arduino IDE\uff0c ",(0,n.kt)("strong",{parentName:"p"},"File(\u6587\u4ef6)> Sketchbook\uff08\u9879\u76ee\u6587\u4ef6\u5939\uff09> SecretBox"),"\uff0c\u60a8\u9700\u8981\u505a\u7684\u662f\u5c06\u793a\u4f8b\u4e0a\u4f20\u5230LinkIt ONE\u3002 \u7136\u540e\u6709\u4eba\u6253\u5f00\u76d2\u5b50\uff0c\u706f\u4f1a\u68c0\u6d4b\u5230\u5b83\uff0c\u5e76\u53d1\u9001\u4e00\u4e2a\u77ed\u4fe1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/secret_box.png",alt:"enter image description here"})),(0,n.kt)("h2",{id:"\u9879\u76ee-wooden-laser-gun"},"\u9879\u76ee Wooden Laser Gun"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Seeeduino_Lotus/img/gun.jpg",alt:null})),(0,n.kt)("p",null,"Inspired by OVERWATCH, we have made a very cool Wooden Laser Gun toy for fun these day!"),(0,n.kt)("p",null,'The Wooden Laser Gun and the Gun Target are all based on an Arduino board called Seeeduino Lotus. The laser emitter on the Laser Gun is controlled to fire laser pulse to "activate" the Gun Target. And there are 3 light sensors on the Gun Target to detect the laser pulse. It seems very simple right? If you are interested in our project, please make one for yourself or your child! It\'s worth to spend one day DIY it as a Xmas present.    '),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"http://www.instructables.com/id/DIY-a-Wooden-Laser-Gun-As-a-Xmas-Present-for-Your-/"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/make.png",alt:null}))),(0,n.kt)("h2",{id:"\u8d44\u6e90\u4e0b\u8f7d"},"\u8d44\u6e90\u4e0b\u8f7d"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Sketch_Grove_Light_Sensor"},"Sketchbook for Light Sensor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor.zip"},"Eagle File for Grove - Light Sensor V1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29.zip"},"Eagle File for Grove - Light Sensor(P) V1.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/resources/Grove%20-%20Light%20Sensor%28P%29%20v1.1.zip"},"Eagle File for Grove - Light Sensor(P) V1.1"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LS06-M%CE%A65_datasheet.pdf"},"LS06-M\u03a65 Reference Information")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/res/LM358.pdf"},"LM358.PDF")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Light_Sensor"},"Light Sensor Library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://easyeda.com/Seeed/Grove_Light_sensor_v1_1-32d2a4ff5a8a4d928df91da1d8c647a0"},"Schematic at Easyeda"))))}u.isMDXComponent=!0}}]);
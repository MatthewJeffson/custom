"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"4-inch Touch Screen",title:"4-inch Touch Screen",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4-inch_Touch_Screen",last_update:{date:"5/17/2023",author:"Yvonne"}},i="**4-inch Touch Screen**",c={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Four-inch_Touch_Screen",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Four-inch_Touch_Screen",title:"4-inch Touch Screen",description:"4-inch Touch Screen",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Four-inch_Touch_Screen.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3",slug:"/4-inch_Touch_Screen",permalink:"/custom/zh-CN/4-inch_Touch_Screen",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/Four-inch_Touch_Screen.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1684281600,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",frontMatter:{description:"4-inch Touch Screen",title:"4-inch Touch Screen",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4-inch_Touch_Screen",last_update:{date:"5/17/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"How to Create your own UI",permalink:"/custom/zh-CN/How_to_Create_your_own_UI"},next:{title:"Wi-Fi",permalink:"/custom/zh-CN/Wi-Fi"}},l={},p=[],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"4-inch-touch-screen"},(0,a.kt)("strong",{parentName:"h1"},"4-inch Touch Screen")),(0,a.kt)("p",null,"The SenseCAP Indicator is equipped with a 4-inch touch screen, which can customize the UI interface you need.\nIn this tutorial, we will guide you on how to use the LvGL (Light and Versatile Graphics Library) graphics library for SenseCAP Indicator."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Pixel Coordinates Systems")),(0,a.kt)("p",null,"A digital 2-D image is made up of rows and columns of pixels. A pixel in the image is specified by saying which column and which row the pixel is in. In simple terms, a pixel can be identified by a pair of integers providing the column number and the row number. "),(0,a.kt)("p",null,"Conventionally, columns are numbered from the top left to right, starting from zero, but in some cases, it can also start from other corners(by setting rotation)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"16-bit colour model")),(0,a.kt)("p",null,"Pixels also expressed in colour form, so also better to cover some colour models. The 16 bit colour model is good for MCUs to work with so this is a good start. The colour model consists of 3 colour components - Red, Green, and Blue. Depending on the colour model, these 3 colour components will be stored into 16 bits variable."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Bit"),(0,a.kt)("th",{parentName:"tr",align:"center"},"15"),(0,a.kt)("th",{parentName:"tr",align:"center"},"14"),(0,a.kt)("th",{parentName:"tr",align:"center"},"13"),(0,a.kt)("th",{parentName:"tr",align:"center"},"12"),(0,a.kt)("th",{parentName:"tr",align:"center"},"11"),(0,a.kt)("th",{parentName:"tr",align:"center"},"10"),(0,a.kt)("th",{parentName:"tr",align:"center"},"9"),(0,a.kt)("th",{parentName:"tr",align:"center"},"8"),(0,a.kt)("th",{parentName:"tr",align:"center"},"7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"6"),(0,a.kt)("th",{parentName:"tr",align:"center"},"5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"4"),(0,a.kt)("th",{parentName:"tr",align:"center"},"3"),(0,a.kt)("th",{parentName:"tr",align:"center"},"2"),(0,a.kt)("th",{parentName:"tr",align:"center"},"1"),(0,a.kt)("th",{parentName:"tr",align:"center"},"0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Data")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Red"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Green"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"Blue")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LCD Screen Initialisation")),(0,a.kt)("p",null,"To initialise the LCD screen on SenseCAP Indicator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"lcd init:\nbsp_board_init()\n")),(0,a.kt)("h1",{id:"tech-support"},(0,a.kt)("strong",{parentName:"h1"},"Tech Support")),(0,a.kt)("p",null,"Don\u2019t worry, we\u2019ve got you covered! Please visit our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions\uff01\nIf you have large order or customization requirment, please contact ",(0,a.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54807],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>f});var r=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function n(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)i=l[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):n(n({},t),e)),i},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(i),p=a,f=u["".concat(s,".").concat(p)]||u[p]||m[p]||l;return i?r.createElement(f,n(n({ref:t},c),{},{components:i})):r.createElement(f,n({ref:t},c))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,n=new Array(l);n[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,n[1]=o;for(var d=2;d<l;d++)n[d]=i[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},67932:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=i(87462),a=(i(67294),i(3905));const l={title:"LCD API Examples",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-APIs/",slug:"/Wio-Terminal-LCD-APIs",last_update:{date:"01/11/2022",author:"gunengyu"}},n="TFT LCD API Examples",o={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs",title:"LCD API Examples",description:"This repo provides some gifs for the TFT LCD library examples, all the examples can be found under File->Example->SeeedArduinoLCD -> 320 x 240.  You can use these examples to implement in your design.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-APIs",permalink:"/custom/zh-CN/Wio-Terminal-LCD-APIs",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-APIs.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"LCD API Examples",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-APIs/",slug:"/Wio-Terminal-LCD-APIs",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Histogram",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Histogram"},next:{title:"How to use LvGL Graphics Library",permalink:"/custom/zh-CN/Wio-Terminal-LVGL"}},s={},d=[{value:"Useful Graphics",id:"useful-graphics",level:2},{value:"TFT_Pie_Chart",id:"tft_pie_chart",level:3},{value:"TFT_ArcFill",id:"tft_arcfill",level:3},{value:"TFT_ArcFillSpiral",id:"tft_arcfillspiral",level:3},{value:"Displaying Data",id:"displaying-data",level:2},{value:"TFT_Clock",id:"tft_clock",level:3},{value:"TFT_Clock_Digital",id:"tft_clock_digital",level:3},{value:"TFT_Terminal",id:"tft_terminal",level:3},{value:"Fonts",id:"fonts",level:2},{value:"AII_Free_Fonts_Demo",id:"aii_free_fonts_demo",level:3},{value:"RLE_Font_test",id:"rle_font_test",level:3},{value:"Displaying as Background",id:"displaying-as-background",level:2},{value:"TFT_Starfield",id:"tft_starfield",level:3},{value:"TFT_Matrix",id:"tft_matrix",level:3},{value:"Tech Support",id:"tech-support",level:2}],c={toc:d};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tft-lcd-api-examples"},"TFT LCD API Examples"),(0,a.kt)("p",null,"This repo provides some gifs for the TFT LCD library examples, all the examples can be found under ",(0,a.kt)("inlineCode",{parentName:"p"},"File"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Example"),"->",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"320 x 240"),".  You can use these examples to implement in your design."),(0,a.kt)("p",null,"For more information about the TFT LCD screen, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Basic/"},"Basics of the TFT LCD Screen"),"."),(0,a.kt)("h2",{id:"useful-graphics"},"Useful Graphics"),(0,a.kt)("h3",{id:"tft_pie_chart"},"TFT_Pie_Chart"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0129.2019-12-03%2014_10_15.gif"})),(0,a.kt)("h3",{id:"tft_arcfill"},"TFT_ArcFill"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0131.2019-12-03%2014_18_05.gif"})),(0,a.kt)("h3",{id:"tft_arcfillspiral"},"TFT_ArcFillSpiral"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0132.2019-12-03%2014_27_24.gif"})),(0,a.kt)("h2",{id:"displaying-data"},"Displaying Data"),(0,a.kt)("h3",{id:"tft_clock"},"TFT_Clock"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0133.2019-12-03%2014_37_47.gif"})),(0,a.kt)("h3",{id:"tft_clock_digital"},"TFT_Clock_Digital"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0138.2019-12-03%2014_48_38.gif"})),(0,a.kt)("h3",{id:"tft_terminal"},"TFT_Terminal"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0136.2019-12-03%2014_45_13.gif"})),(0,a.kt)("h2",{id:"fonts"},"Fonts"),(0,a.kt)("h3",{id:"aii_free_fonts_demo"},"AII_Free_Fonts_Demo"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0143.2019-12-03%2015_15_06.gif"})),(0,a.kt)("h3",{id:"rle_font_test"},"RLE_Font_test"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0145.2019-12-03%2015_17_11.gif"})),(0,a.kt)("h2",{id:"displaying-as-background"},"Displaying as Background"),(0,a.kt)("h3",{id:"tft_starfield"},"TFT_Starfield"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0147.2019-12-03%2016_59_07.gif"})),(0,a.kt)("h3",{id:"tft_matrix"},"TFT_Matrix"),(0,a.kt)("div",{align:"left"},(0,a.kt)("img",{width:253,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/IMG_0141.2019-12-03%2014_57_30.gif"})),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
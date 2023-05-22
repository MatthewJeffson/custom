"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24767],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},9798:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=r(87462),a=(r(67294),r(3905));const n={title:"How to use LvGL Graphics Library",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LVGL/",slug:"/Wio-Terminal-LVGL",last_update:{date:"01/11/2022",author:"gunengyu"}},o="How to use LvGL Graphics Library for Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LVGL",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LVGL",title:"How to use LvGL Graphics Library",description:"In this tutorial, we will teach you how to use the LvGL (Light and Versatile",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LVGL.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LVGL",permalink:"/zh-CN/Wio-Terminal-LVGL",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LVGL.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"2022\u5e741\u670810\u65e5",frontMatter:{title:"How to use LvGL Graphics Library",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LVGL/",slug:"/Wio-Terminal-LVGL",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"LCD API Examples",permalink:"/zh-CN/Wio-Terminal-LCD-APIs"},next:{title:"Overview",permalink:"/zh-CN/Wio-Terminal-IO-Overview"}},s={},u=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Install the Seeed_Arduino_LvGL",id:"install-the-seeed_arduino_lvgl",level:3},{value:"Examples",id:"examples",level:3},{value:"1. Bench Mark",id:"1-bench-mark",level:4},{value:"2. Stress Test",id:"2-stress-test",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-lvgl-graphics-library-for-wio-terminal"},"How to use LvGL Graphics Library for Wio Terminal"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/banner.gif"})),(0,a.kt)("p",null,"In this tutorial, we will teach you how to use the ",(0,a.kt)("a",{parentName:"p",href:"https://lvgl.io/"},(0,a.kt)("strong",{parentName:"a"},"LvGL"))," (Light and Versatile\nGraphics Library) graphics library for Wio Terminal. This is a port from the original ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lvgl/lv_arduino"},"lv_arduino")," to Wio Terminal."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://lvgl.io/"},(0,a.kt)("strong",{parentName:"a"},"LvGL"))," is an open-source graphics library providing everything you need to create embedded GUI with easy-to-use graphical elements, beautiful visual effects and low memory footprint."),(0,a.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal Get Started"))," before the followings.")),(0,a.kt)("h3",{id:"install-the-seeed_arduino_lvgl"},"Install the Seeed_Arduino_LvGL"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LvGL"},"Seeed_Arduino_LvGL")," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the FS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LvGL")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("h3",{id:"examples"},"Examples"),(0,a.kt)("h4",{id:"1-bench-mark"},"1. Bench Mark"),(0,a.kt)("p",null,"This is the benchmark demo of LvGL graphics library on Wio Terminal, simply upload the ",(0,a.kt)("inlineCode",{parentName:"p"},"benchmark.ino")," to the device using Arduino IDE:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/benchmark.gif"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The current port of the FPS under benchmark demo is not displaying properly, please stay tune to more updates.\n"))),(0,a.kt)("h4",{id:"2-stress-test"},"2. Stress Test"),(0,a.kt)("p",null,"This is the benchmark demo of LvGL graphics library on Wio Terminal, simply upload the ",(0,a.kt)("inlineCode",{parentName:"p"},"lv_stresss.ino")," to the device using Arduino IDE:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-LVGL/stress.gif"})),(0,a.kt)("p",null,"For more usage, you may also use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/latest/en/html/index.html"},(0,a.kt)("strong",{parentName:"a"},"official document of LvGL"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/lvgl/lvgl/tree/master/examples/arduino"},"Arduino Example")," for more reference."),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.lvgl.io/latest/en/html/index.html"},"Official document of LvGL Library")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/lvgl/lvgl"},"LvGL Github"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
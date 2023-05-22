"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74164],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),u=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,h=p["".concat(s,".").concat(m)]||p[m]||c[m]||a;return r?i.createElement(h,o(o({ref:t},d),{},{components:r})):i.createElement(h,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37730:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=r(87462),n=(r(67294),r(3905));const a={title:"Overview",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/",slug:"/Wio-Terminal-LCD-Overview",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Overview",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Overview",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Overview",title:"Overview",description:"This repo introduce how to install the TFT LCD library used on Wio Terminal. It provides basic graphical functions to the Wio Terminal with minimum effort!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Overview.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Overview",permalink:"/custom/Wio-Terminal-LCD-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Overview.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"Jan 10, 2022",frontMatter:{title:"Overview",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/",slug:"/Wio-Terminal-LCD-Overview",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"CircuitPython with Wio Terminal",permalink:"/custom/Wio-Terminal-CircuitPython"},next:{title:"Basic of LCD",permalink:"/custom/Wio-Terminal-LCD-Basic"}},s={},u=[{value:"TFT LCD Library Default Installation",id:"tft-lcd-library-default-installation",level:2},{value:"Installing the TFT LCD Library Separately",id:"installing-the-tft-lcd-library-separately",level:2},{value:"Installing the Adafruit Zero DMA Library",id:"installing-the-adafruit-zero-dma-library",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"This repo introduce how to install the TFT LCD library used on Wio Terminal. It provides basic graphical functions to the Wio Terminal with minimum effort!"),(0,n.kt)("h2",{id:"tft-lcd-library-default-installation"},"TFT LCD Library Default Installation"),(0,n.kt)("p",null,"By default, the TFT LCD Library is ",(0,n.kt)("strong",{parentName:"p"},"included inside the Wio Terminal Board Library"),". Hence, there is no need to download the TFT LCD library again. Follow the next tutorials to get you started with the display!"),(0,n.kt)("h2",{id:"installing-the-tft-lcd-library-separately"},"Installing the TFT LCD Library Separately"),(0,n.kt)("p",null,"If you want to install the TFT LCD library separately, or updating just the TFT LCD library, follow the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Visit the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LCD"},"Seeed_Arduino_LCD")," repositories and download the entire repo to your local drive.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now, the TFT LCD library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,n.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD")," file that you've have just downloaded."))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,n.kt)("h3",{id:"installing-the-adafruit-zero-dma-library"},"Installing the Adafruit Zero DMA Library"),(0,n.kt)("p",null,"Some functions of the TFT LCD Library requires this library."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,n.kt)("inlineCode",{parentName:"p"},"Manager Library"),", and a library manager window will appear.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Search ",(0,n.kt)("strong",{parentName:"p"},"Adafruit Zero DMA")," and click Install."))),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_09-19-28.jpg"})),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
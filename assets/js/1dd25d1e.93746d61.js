"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19305],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),c=l(n),p=o,g=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return n?r.createElement(g,a(a({ref:t},d),{},{components:n})):r.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[c]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39558:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"DSO Quad:Building Firmware",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad-Building_Firmware/",slug:"/DSO_Quad-Building_Firmware",last_update:{date:"02/03/2022",author:"gunengyu"}},a=void 0,u={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Building_Firmware",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Building_Firmware",title:"DSO Quad:Building Firmware",description:"Building the DSO Quad firmware from source",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Building_Firmware.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Quad-Building_Firmware",permalink:"/custom/DSO_Quad-Building_Firmware",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad-Building_Firmware.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"DSO Quad:Building Firmware",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad-Building_Firmware/",slug:"/DSO_Quad-Building_Firmware",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Quad:Beta HW",permalink:"/custom/DSO_Quad-Beta_HW"},next:{title:"DSO Quad:Calibration",permalink:"/custom/DSO_Quad-Calibration"}},s={},l=[{value:"Building the DSO Quad firmware from source",id:"building-the-dso-quad-firmware-from-source",level:2},{value:"Using GCC and Debian",id:"using-gcc-and-debian",level:3},{value:"disc space usage",id:"disc-space-usage",level:4},{value:"Tech Support",id:"tech-support",level:2}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"building-the-dso-quad-firmware-from-source"},"Building the DSO Quad firmware from source"),(0,o.kt)("p",null,"This page currently only has information for GCC on Debian.  Please add information on more environments if you know how to set them up."),(0,o.kt)("h3",{id:"using-gcc-and-debian"},"Using GCC and Debian"),(0,o.kt)("pre",null," apt-get install --no-install-recommends  build-essential autoconf flex bison texinfo libncurses5-dev libgmp3-dev libmpfr-dev libmpc-dev libftdi-dev cd git clone [git://github.com/esden/summon-arm-toolchain.git](git://github.com/esden/summon-arm-toolchain.git) cd summon-arm-toolchain $EDITOR summon-arm-toolchain"),(0,o.kt)("p",null,"..and ensure that the following settings are in force:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," TARGET=arm-none-eabi\n USE_LINARO=1\n LIBSTM32_EN=1\n DEFAULT_TO_CORTEX_M3=1\n")),(0,o.kt)("p",null,"..then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," ./summon-arm-toolchain\n")),(0,o.kt)("p",null,"The toolchain installs to ",(0,o.kt)("tt",null,"~/sat/"),". Next:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd\n git clone [https://github.com/tmbinc/dsoquad](https://github.com/tmbinc/dsoquad)\n cd dsoquad/src/app\n PATH=$PATH:~/sat/bin make\n")),(0,o.kt)("p",null,"And then you should find ",(0,o.kt)("tt",null,".hex")," files in that directory ready for upload."),(0,o.kt)("h4",{id:"disc-space-usage"},"disc space usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ du -sh  summon-arm-toolchain/  sat/  dsoquad/\n 117M    summon-arm-toolchain/\n 229M    sat/\n 1.9M    dsoquad/\n")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
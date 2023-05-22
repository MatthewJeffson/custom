"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6782],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>S});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(i),m=o,S=p["".concat(d,".").concat(m)]||p[m]||c[m]||r;return i?n.createElement(S,a(a({ref:t},s),{},{components:i})):n.createElement(S,a({ref:t},s))}));function S(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=i.length,a=new Array(r);a[0]=m;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<r;l++)a[l]=i[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},71596:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>u,toc:()=>l});var n=i(87462),o=(i(67294),i(3905));const r={description:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-DAPLink",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="Seeed Studio XIAO SAMD 21 DAPLink",u={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink",title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",description:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial",slug:"/Seeeduino-XIAO-DAPLink",permalink:"/custom/zh-CN/Seeeduino-XIAO-DAPLink",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_SAMD21/TuTorial/Seeeduino-XIAO-DAPLink.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673366400,formattedLastUpdatedAt:"2023\u5e741\u670810\u65e5",frontMatter:{description:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",title:"Build a DAPLink Deivce using Seeed Studio XIAO SAMD21",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Seeeduino-XIAO-DAPLink",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"TinyML on Seeed Studio XIAO SAMD21",permalink:"/custom/zh-CN/Seeeduino-XIAO-TinyML"},next:{title:"Connect Seeed Studio XIAO SAMD21 to your Raspberry PI",permalink:"/custom/zh-CN/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI"}},d={},l=[{value:"Features",id:"features",level:2},{value:"Get Started",id:"get-started",level:2},{value:"<code>uf2</code> Method",id:"uf2-method",level:3},{value:"Connection Pinout",id:"connection-pinout",level:3},{value:"Tech Support",id:"tech-support",level:2}],s={toc:l};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"seeed-studio-xiao-samd-21-daplink"},"Seeed Studio XIAO SAMD 21 DAPLink"),(0,o.kt)("p",null,"Now, we have ",(0,o.kt)("strong",{parentName:"p"},"developed the DAPLink firmware running on your Arduino Boards"),"(",(0,o.kt)("em",{parentName:"p"},"SAMD Series"),") such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino Xiao")," so that you can upload and debug development boards that support DAPLink in a most cost-effective way!"),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Debug and Flash Arm Cortex CPUs"),(0,o.kt)("li",{parentName:"ul"},"Provides a virtual serial port, eliminating the need for a usb to serial port"),(0,o.kt)("li",{parentName:"ul"},"Drag and drop to upload firmware(coming soon)")),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("p",null,"Please visit the Arduino DAPLink Get Started Wiki here."),(0,o.kt)("h3",{id:"uf2-method"},(0,o.kt)("inlineCode",{parentName:"h3"},"uf2")," Method"),(0,o.kt)("p",null,"For convenience, we also provide ",(0,o.kt)("inlineCode",{parentName:"p"},"uf2")," methods of uploading Wio Terminal's firmware. Simply download the ",(0,o.kt)("inlineCode",{parentName:"p"},"uf2")," files from below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"http://files.seeedstudio.com/wiki/Seeeduino-XIAO/res/simple_daplink_xiao.uf2"},(0,o.kt)("strong",{parentName:"a"},"simple_daplink_xiao"))," ",(0,o.kt)("inlineCode",{parentName:"li"},"uf2")," files.")),(0,o.kt)("p",null,"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,o.kt)("p",null,"An external drive named ",(0,o.kt)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded uf2 files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Arduino")," drive."),(0,o.kt)("h3",{id:"connection-pinout"},"Connection Pinout"),(0,o.kt)("p",null,"You may use the following for reference:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"})),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
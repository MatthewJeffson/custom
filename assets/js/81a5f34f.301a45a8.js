"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[33827],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>k});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var u=n.createContext({}),s=function(e){var t=n.useContext(u),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(i),c=r,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return i?n.createElement(k,a(a({ref:t},p),{},{components:i})):n.createElement(k,a({ref:t},p))}));function k(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},33051:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=i(87462),r=(i(67294),i(3905));const o={description:"Build a DAPLink Device using Wio Terminal",title:"Build a DAPLink Device using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-DAPLink",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Wio Terminal DAPLink",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-DAPLink",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-DAPLink",title:"Build a DAPLink Device using Wio Terminal",description:"Build a DAPLink Device using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-DAPLink.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-DAPLink",permalink:"/custom/Wio-Terminal-DAPLink",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-DAPLink.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Build a DAPLink Device using Wio Terminal",title:"Build a DAPLink Device using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-DAPLink",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Build a HMI Display for Windows/MacOS using Wio Terminal",permalink:"/custom/Wio-Terminal-HMI-Usermode-SDK"},next:{title:"Reading Raspberry Pi's Info using Wio Terminal",permalink:"/custom/Wio-Terminal-Reading-Raspberry-Pi"}},u={},s=[{value:"Features",id:"features",level:2},{value:"Get Started",id:"get-started",level:2},{value:"<code>uf2</code> Method",id:"uf2-method",level:3},{value:"Connection Pinout",id:"connection-pinout",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wio-terminal-daplink"},"Wio Terminal DAPLink"),(0,r.kt)("p",null,"Now, we have ",(0,r.kt)("strong",{parentName:"p"},"developed the DAPLink firmware running on your Arduino Boards"),"(",(0,r.kt)("em",{parentName:"p"},"SAMD Series"),") such as ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino Xiao")," so that you can upload and debug development boards that support DAPLink in a most cost-effective way!"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Debug and Flash Arm Cortex CPUs"),(0,r.kt)("li",{parentName:"ul"},"Provides a virtual serial port, eliminating the need for a usb to serial port"),(0,r.kt)("li",{parentName:"ul"},"Drag and drop to upload firmware(coming soon)")),(0,r.kt)("h2",{id:"get-started"},"Get Started"),(0,r.kt)("p",null,"Please visit the Arduino DAPLink Get Started Wiki ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Arduino-DAPLink/"},"here"),"."),(0,r.kt)("h3",{id:"uf2-method"},(0,r.kt)("inlineCode",{parentName:"h3"},"uf2")," Method"),(0,r.kt)("p",null,"For convenience, we also provide ",(0,r.kt)("inlineCode",{parentName:"p"},"uf2")," methods of uploading Wio Terminal's firmware. Simply download the ",(0,r.kt)("inlineCode",{parentName:"p"},"uf2")," files from below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download the ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/simple_daplink_wt.uf2"},(0,r.kt)("strong",{parentName:"a"},"simple_daplink_wt"))," ",(0,r.kt)("inlineCode",{parentName:"li"},"uf2")," files.")),(0,r.kt)("p",null,"Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,r.kt)("p",null,"An external drive named ",(0,r.kt)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the the downloaded uf2 files to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Arduino")," drive."),(0,r.kt)("h3",{id:"connection-pinout"},"Connection Pinout"),(0,r.kt)("p",null,"You may use the following for reference:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"})),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
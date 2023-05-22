"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const o={description:"SPI User Guide for Arduino Boards",title:"SPI User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-SPI",last_update:{date:"1/16/2023",author:"jianjing Huang"}},a="Arduino Software SPI User Guide",s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI",title:"SPI User Guide for Arduino Boards",description:"SPI User Guide for Arduino Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Software-SPI",permalink:"/Software-SPI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-SPI.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673798400,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{description:"SPI User Guide for Arduino Boards",title:"SPI User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-SPI",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"I2C User Guide for Arduino Boards",permalink:"/Arduino_Software_I2C_user_guide"},next:{title:"Pre-compiled Arduino Libraries Usage",permalink:"/Software-Static-Library"}},l={},u=[{value:"Software SPI Example",id:"software-spi-example",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"arduino-software-spi-user-guide"},"Arduino Software SPI User Guide"),(0,i.kt)("p",null,"Similarly to I2C and Serial communications, ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/reference/SPI"},(0,i.kt)("strong",{parentName:"a"},"SPI"))," can be virtualized using software to overcome the physical limitations. Here provides an example of using software SPI with Arduino."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What is SPI")),(0,i.kt)("p",null,"Serial Peripheral Interface (SPI) is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances. It can also be used for communication between two microcontrollers."),(0,i.kt)("h2",{id:"software-spi-example"},"Software SPI Example"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MajenkoLibraries/SoftSPI"},"SoftSPI")," repositories and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, the SoftSPI library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"SoftSPI")," file that you've have just downloaded."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <SoftSPI.h>\n\n// Create a new SPI port with:\n// Pin 2 = MOSI,\n// Pin 3 = MISO,\n// Pin 4 = SCK\nSoftSPI mySPI(2, 3, 4);\n\nvoid setup() {\n  mySPI.begin();\n  Serial.begin(9600);\n  }\n\nvoid loop() {\n  static uint8_t v = 0;\n\n  Serial.print("Sending value: ");\n  Serial.print(v, HEX);\n  uint8_t in = mySPI.transfer(v);\n  Serial.print(" Got value: ");\n  Serial.print(in, HEX);\n  Serial.println(v == in ? " PASS" : " FAIL");\n  delay(1000);\n  v++;\n}\n')),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
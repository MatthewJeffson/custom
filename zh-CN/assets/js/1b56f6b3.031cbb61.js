"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61515],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var i=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,i,a=function(e,r){if(null==e)return{};var t,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var r=i.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=u(e.components);return i.createElement(s.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},m=i.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||n;return t?i.createElement(f,o(o({ref:r},d),{},{components:t})):i.createElement(f,o({ref:r},d))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,o=new Array(n);o[0]=m;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<n;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},51561:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>u});var i=t(87462),a=(t(67294),t(3905));const n={description:"Serial User Guide for Arduino Boards",title:"Serial User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-Serial",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Arduino Software Serial User Guide",l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Serial",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Serial",title:"Serial User Guide for Arduino Boards",description:"Serial User Guide for Arduino Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Serial.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Software-Serial",permalink:"/custom/zh-CN/Software-Serial",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Software-Serial.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673798400,formattedLastUpdatedAt:"2023\u5e741\u670815\u65e5",frontMatter:{description:"Serial User Guide for Arduino Boards",title:"Serial User Guide for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-Serial",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Use Demos from Seeed Studio's Github",permalink:"/custom/zh-CN/Guide_to_use_demos_downloaded_from_Seeed-s_Github"},next:{title:"I2C User Guide for Arduino Boards",permalink:"/custom/zh-CN/Arduino_Software_I2C_user_guide"}},s={},u=[{value:"Software Serial Example",id:"software-serial-example",level:2},{value:"Using Multiple Software Serial",id:"using-multiple-software-serial",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arduino-software-serial-user-guide"},"Arduino Software Serial User Guide"),(0,a.kt)("p",null,"The Arduino hardware has the built-in support for ",(0,a.kt)("strong",{parentName:"p"},"Serial communications")," on pins 0 and 1 (Hardware Serial) but in some circumstances such as when these pins are already in-use or you need more Serial ports for debugging, ",(0,a.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Reference/softwareSerial"},(0,a.kt)("strong",{parentName:"a"},"Software Serial"))," may seem to be the solution."),(0,a.kt)("p",null,"Here will also use an example to demonstrate how to use Software Serial with you Arduino!"),(0,a.kt)("h2",{id:"software-serial-example"},"Software Serial Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\nRX is digital pin 2 (connect to TX of other device)\nTX is digital pin 3 (connect to RX of other device)\n*/\n\n#include <SoftwareSerial.h>\nSoftwareSerial mySerial(2, 3); // RX, TX\n\nvoid setup()\n{\n  Serial.begin(115200);\n  while (!Serial) {\n  }\n\n  Serial.println("Goodnight moon!");\n\n  mySerial.begin(9600);\n  mySerial.println("Hello, world?");\n}\n\nvoid loop()\n{\n  if (mySerial.available())\n    Serial.write(mySerial.read());\n  if (Serial.available())\n    mySerial.write(Serial.read());\n}\n')),(0,a.kt)("p",null,"In practice, you may also use other serial devices, such as serial wireless pass-through modules, serial sensors, etc., as long as it is standard. The serial devices are all programmed in much the same way."),(0,a.kt)("h2",{id:"using-multiple-software-serial"},"Using Multiple Software Serial"),(0,a.kt)("p",null,"When you need multiple serial devices to be connected, it is possible to create multiple software serial ports. But due to hardware limitation, Arduino UNO can only listen to one software serial at a time. Here provides an example for multiple software serial:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SoftwareSerial.h>\nSoftwareSerial serialOne(2, 3); // Software Serial ONE\nSoftwareSerial serialTwo(8, 9); // Software Serial TWO\n\nvoid setup() {\n  Serial.begin(9600);\n  while (!Serial) { // wait till Serial\n  }\n\n  serialOne.begin(9600);\n  serialTwo.begin(9600);\n}\n\nvoid loop() {\n  serialOne.listen(); // listening on Serial One\n\n  Serial.println("Data from port one:");\n  while (serialOne.available() > 0) {\n    char inByte = serialOne.read();\n    Serial.write(inByte);\n  }\n\n  Serial.println();\n\n  serialTwo.listen(); // listening on Serial Two\n\n  Serial.println("Data from port two:");\n  while (serialTwo.available() > 0) {\n    char inByte = serialTwo.read();\n    Serial.write(inByte);\n  }\n\n  Serial.println();\n}\n')),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
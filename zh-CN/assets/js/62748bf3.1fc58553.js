"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[42076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,f=c["".concat(p,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65685:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={description:"BLE",title:"BLE",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BLE",last_update:{date:"5/17/2023",author:"Yvonne"}},i="**BLE**",l={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/BLE",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/BLE",title:"BLE",description:"BLE",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/BLE.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3",slug:"/BLE",permalink:"/custom/zh-CN/BLE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_ESP32-S3/BLE.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1684281600,formattedLastUpdatedAt:"2023\u5e745\u670817\u65e5",frontMatter:{description:"BLE",title:"BLE",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/BLE",last_update:{date:"5/17/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Wi-Fi",permalink:"/custom/zh-CN/Wi-Fi"},next:{title:"Button",permalink:"/custom/zh-CN/Button"}},p={},s=[],u={toc:s};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ble"},(0,o.kt)("strong",{parentName:"h1"},"BLE")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/espressif/esp-idf/tree/master/examples/bluetooth"},(0,o.kt)("strong",{parentName:"a"},"Examples"))),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/espressif/esp-idf/tree/master/examples/bluetooth"},"directory")," contains a series of project examples that demonstrate Bluetooth functionality and provides code that you can copy and adapt into your own projects."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Using Examples")),(0,o.kt)("p",null,"Before building an example, be sure to follow the ESP-IDF Getting Started Guide to ensure you have the required development environment."),(0,o.kt)("p",null,"Building an example is the same as building any other project:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 1: Change into the directory of the new example you'd like to build.")),(0,o.kt)("p",null,"Run the following command to select the correct chip target to build before opening the project configuration menu:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"idf.py set-target esp32s3")),(0,o.kt)("p",null,"(By default the target is esp32. For all options see idf.py set-target --help)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 2: Run the following command to open the project configuration menu:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"idf.py menuconfig")),(0,o.kt)("p",null,'Most examples have a project-specific "Example Configuration" section here (for example, to set the WiFi SSID & password to use)'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Step 3: Build the example:")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"idf.py build")),(0,o.kt)("p",null,"Follow the printed instructions to flash, or run\n",(0,o.kt)("inlineCode",{parentName:"p"},"idf.py -p PORT flash")),(0,o.kt)("h1",{id:"tech-support"},(0,o.kt)("strong",{parentName:"h1"},"Tech Support")),(0,o.kt)("p",null,"Don\u2019t worry, we\u2019ve got you covered! Please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/cPpeuQMM"},"Seeed Official Discord Channel")," to ask your questions\uff01\nIf you have large order or customization requirment, please contact ",(0,o.kt)("a",{parentName:"p",href:"mailto:iot@seeed.cc"},"iot@seeed.cc")))}c.isMDXComponent=!0}}]);
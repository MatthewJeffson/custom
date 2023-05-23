"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[30123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={title:"I2C",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/",slug:"/Wio-Terminal-IO-I2C",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Using the Grove I2C Port on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C",id:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C",title:"I2C",description:"This repo demonstrates how to use the Grove I2C Port on Wio Terminal, you can simply use this plug and play functionality with the Grove Ecosystem!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Input&Output",slug:"/Wio-Terminal-IO-I2C",permalink:"/custom/zh-CN/Wio-Terminal-IO-I2C",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Input&Output/Wio-Terminal-IO-I2C.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"I2C",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-IO-I2C/",slug:"/Wio-Terminal-IO-I2C",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Digital",permalink:"/custom/zh-CN/Wio-Terminal-IO-Digital"},next:{title:"SPI",permalink:"/custom/zh-CN/Wio-Terminal-IO-SPI"}},s={},u=[{value:"Port Configurations",id:"port-configurations",level:2},{value:"Example Code",id:"example-code",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-the-grove-i2c-port-on-wio-terminal"},"Using the Grove I2C Port on Wio Terminal"),(0,o.kt)("p",null,"This repo demonstrates how to use the Grove I2C Port on Wio Terminal, you can simply use this plug and play functionality with the Grove Ecosystem!"),(0,o.kt)("h2",{id:"port-configurations"},"Port Configurations"),(0,o.kt)("p",null,"To use the Grove I2C port on Wio Terminal, Simply connect your Grove sensor that uses I2C to the physical I2C port on Wio Terminal."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Remember to include the Sensor libraries in Arduino IDE. Refer to this ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install library")," for more information."),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)("p",null,"In this example, a Grove LCD is used to demonstrate. This is the ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," example from the RGB LCD libabry."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Wire.h>\n#include "rgb_lcd.h"\n\nrgb_lcd lcd;\n\nconst int colorR = 255;\nconst int colorG = 0;\nconst int colorB = 0;\n\nvoid setup()\n{\n    // set up the LCD\'s number of columns and rows:\n    lcd.begin(16, 2);\n    \n    lcd.setRGB(colorR, colorG, colorB);\n    \n    // Print a message to the LCD.\n    lcd.print("hello, world!");\n\n    delay(1000);\n}\n\nvoid loop() \n{\n    // set the cursor to column 0, line 1\n    // (note: line 1 is the second row, since counting begins with 0):\n    lcd.setCursor(0, 1);\n    // print the number of seconds since reset:\n    lcd.print(millis()/1000);\n\n    delay(100);\n}\n')),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
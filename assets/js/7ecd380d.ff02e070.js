"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[67540],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(g,l(l({ref:t},p),{},{components:a})):r.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78144:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={description:"Getting Started",title:"Getting Started",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-IMU-Basic",last_update:{date:"1/17/2023",author:"jianjing Huang"}},l="Getting Started with accelerometer",o={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Basic",id:"Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Basic",title:"Getting Started",description:"Getting Started",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Basic.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/IMU",slug:"/Wio-Terminal-IMU-Basic",permalink:"/custom/Wio-Terminal-IMU-Basic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/IMU/Wio-Terminal-IMU-Basic.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Getting Started",title:"Getting Started",keywords:["Wio_terminal IMU"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-IMU-Basic",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/Wio-Terminal-IMU-Overview"},next:{title:"Tapping",permalink:"/custom/Wio-Terminal-IMU-Tapping"}},s={},c=[{value:"3-Axis Digital Accelerator Initialization",id:"3-axis-digital-accelerator-initialization",level:2},{value:"Reading accelerometer Values",id:"reading-accelerometer-values",level:2},{value:"Example Code",id:"example-code",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"getting-started-with-accelerometer"},"Getting Started with accelerometer"),(0,n.kt)("p",null,"This repo demonstrates how to read accelerometer values from Wio Terminal."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/2019-12-09%2015-42-57.2019-12-09%2015_43_28.gif"})),(0,n.kt)("h2",{id:"3-axis-digital-accelerator-initialization"},"3-Axis Digital Accelerator Initialization"),(0,n.kt)("p",null,"To initialize the accelerator on Wio Terminal:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Setting output data rate: ",(0,n.kt)("inlineCode",{parentName:"p"},"lis.setOutputDataRate()"),", 1Hz up to 5kHz.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Setting scale range: ",(0,n.kt)("inlineCode",{parentName:"p"},"lis.FullScaleRange()"),", 2g up to 16g."))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\nvoid setup() {\n    ...\n    lis.begin(Wire1); \n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); // Setting output data rage to 25Hz, can be set up tp 5kHz \n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G); // Setting scale range to 2g, select from 2,4,8,16g\n    ...\n}\n')),(0,n.kt)("h2",{id:"reading-accelerometer-values"},"Reading accelerometer Values"),(0,n.kt)("p",null,"To read accelerometer values of each axis on Wio Terminal, simply follow this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n    float x_values, y_values, z_values;\n    x_values = lis.getAcceleratationX();\n    y_values = lis.getAcceleratationY();\n    z_values = lis.getAcceleratationZ();\n    delay(50);  // delay to avoid large amount of data being read\n    ...\n}\n")),(0,n.kt)("p",null,"Note: Delay is strongly recommended to avoid large amount of data at once."),(0,n.kt)("h3",{id:"example-code"},"Example Code"),(0,n.kt)("p",null,"This example prints all 3-axis values of accelerometer on the serial monitor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h"\nLIS3DHTR<TwoWire> lis;\n\nvoid setup() {\n  Serial.begin(115200);\n  lis.begin(Wire1);\n\n  if (!lis) {\n    Serial.println("ERROR");\n    while(1);\n  }\n  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Data output rate\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale range set to 2g\n}\n\nvoid loop() {\n  float x_values, y_values, z_values;\n  x_values = lis.getAccelerationX();\n  y_values = lis.getAccelerationY();\n  z_values = lis.getAccelerationZ();\n  \n  Serial.print("X: "); Serial.print(x_values);\n  Serial.print(" Y: "); Serial.print(y_values);\n  Serial.print(" Z: "); Serial.print(z_values);\n  Serial.println();\n  delay(50);\n}\n')))}u.isMDXComponent=!0}}]);
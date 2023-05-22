"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68715],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,v=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(v,a(a({ref:t},c),{},{components:n})):r.createElement(v,a({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={description:"Grove IIC",title:"Grove IIC",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_IIC",last_update:{date:"5/17/2023",author:"Yvonne"}},a="**Overview**",s={unversionedId:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/Grove_IIC",id:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/Grove_IIC",title:"Grove IIC",description:"Grove IIC",source:"@site/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/Grove_IIC.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove",slug:"/Grove_IIC",permalink:"/custom/zh-CN/Grove_IIC",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_Indicator/Development_Tutorial/Develop_with_RP2040/Grove/Grove_IIC.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1684252800,formattedLastUpdatedAt:"2023\u5e745\u670816\u65e5",frontMatter:{description:"Grove IIC",title:"Grove IIC",keywords:["Development Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove_IIC",last_update:{date:"5/17/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"Grove ADC",permalink:"/custom/zh-CN/Grove_ADC"},next:{title:"ChatGPT with Indicator",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_Indicator/Application"}},l={},p=[{value:"<strong>Example Cod</strong>e:",id:"example-code",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},(0,o.kt)("strong",{parentName:"h1"},"Overview")),(0,o.kt)("p",null,"There are two Grove interfaces in the SenseCAP Indicator for connecting Grove modules, one is the default I2C Port and other one is configurable Digital/Analog Pin, it can also be used for PWM outputs. Both Grove ports can be used as Digital.Providing more possibilities for developers. "),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/SenseCAP/SenseCAP_Indicator/grove.png"})),(0,o.kt)("p",null,"This repo will introduce how to use the Grove IOs on the SenseCAP Indicator. This allows you to enjoy the plug and play functionality of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},"Grove Ecosystem")," as well as using the RP2040 compatible GPIO!"),(0,o.kt)("h1",{id:"groveiic"},(0,o.kt)("strong",{parentName:"h1"},"Grove(IIC)")),(0,o.kt)("p",null,"To expand more applications, you can use the IIC interface to connect more sensors.\nDifferent with the built-in sensors, you only need to define the SCL and SDA pin connections."),(0,o.kt)("h2",{id:"example-code"},(0,o.kt)("strong",{parentName:"h2"},"Example Cod"),"e:"),(0,o.kt)("p",null,"This example code introduces how to connect a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-AHT20-I2C-Industrial-Grade-Temperature&Humidity-Sensor"},"Grove TH sensor"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_AHT20/"},"AHT20 temperature and humidity sensor library")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#include <Arduino.h>\n#include <Wire.h>\n#include "AHT20.h"\n\nAHT20 AHT;\n\nvoid sensor_aht_init(void) {\n  AHT.begin();\n}\n\nvoid sensor_aht_get(void) {\n  float humi, temp;\n  int ret = AHT.getSensor(&humi, &temp);\n  if (ret)  // GET DATA OK\n  {\n    Serial.print("humidity: ");\n    Serial.print(humi * 100);\n    Serial.print("  temerature: ");\n    Serial.println(temp);\n  } else  // GET DATA FAIL\n  {\n    Serial.println("GET DATA FROM AHT20 FAIL");\n  }\n}\n\nvoid setup() {\n  Serial.begin(115200);\n\n  Wire.setSDA(20);\n  Wire.setSCL(21);\n  Wire.begin();\n\n  sensor_aht_init();\n}\n\nvoid loop() {\n  sensor_aht_get();\n  delay(5000);\n}\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[83115],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>N});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},k="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=m(a),u=r,N=k["".concat(p,".").concat(u)]||k[u]||d[u]||i;return a?n.createElement(N,l(l({ref:t},s),{},{components:a})):n.createElement(N,l({ref:t},s))}));function N(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[k]="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},71682:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={description:"Wio Terminal \u7f51\u7edc\u914d\u7f6e",title:"Wio Terminal \u7f51\u7edc\u914d\u7f6e",keywords:["Wio Terminal"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Network-Overview",last_update:{date:"4/18/2023",author:"Matthew"}},l=void 0,o={unversionedId:"zh-CN/Sensor/Wio_Terminal/Wio-Terminal-Network-Overview",id:"zh-CN/Sensor/Wio_Terminal/Wio-Terminal-Network-Overview",title:"Wio Terminal \u7f51\u7edc\u914d\u7f6e",description:"Wio Terminal \u7f51\u7edc\u914d\u7f6e",source:"@site/docs/zh-CN/Sensor/Wio_Terminal/Wio-Terminal-Network-Overview.md",sourceDirName:"zh-CN/Sensor/Wio_Terminal",slug:"/cn/Wio-Terminal-Network-Overview",permalink:"/custom/cn/Wio-Terminal-Network-Overview",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/zh-CN/Sensor/Wio_Terminal/Wio-Terminal-Network-Overview.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1681747200,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{description:"Wio Terminal \u7f51\u7edc\u914d\u7f6e",title:"Wio Terminal \u7f51\u7edc\u914d\u7f6e",keywords:["Wio Terminal"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/cn/Wio-Terminal-Network-Overview",last_update:{date:"4/18/2023",author:"Matthew"}}},p={},m=[{value:"\u66f4\u65b0 Wifi\uff08RTL8720 Wireless core\uff09 \u5185\u6838\u56fa\u4ef6",id:"\u66f4\u65b0-wifirtl8720-wireless-core-\u5185\u6838\u56fa\u4ef6",level:2},{value:"\u7b2c\u4e00\u6b65 - \u64e6\u9664\u51fa\u573a\u56fa\u4ef6",id:"\u7b2c\u4e00\u6b65---\u64e6\u9664\u51fa\u573a\u56fa\u4ef6",level:3},{value:"Windows \u7528\u6237",id:"windows-\u7528\u6237",level:4},{value:"Mac/ Linux \u7528\u6237",id:"mac-linux-\u7528\u6237",level:4},{value:"\u7b2c\u4e8c\u6b65 - \u70e7\u5f55\u6700\u65b0\u7684\u56fa\u4ef6",id:"\u7b2c\u4e8c\u6b65---\u70e7\u5f55\u6700\u65b0\u7684\u56fa\u4ef6",level:3},{value:"Windows \u7528\u6237",id:"windows-\u7528\u6237-1",level:4},{value:"Mac/ Linux \u7528\u6237",id:"mac-linux-\u7528\u6237-1",level:4},{value:"\u8001\u7248\u672c\u56fa\u4ef6\u6062\u590d (\u53ef\u8df3\u8fc7)",id:"\u8001\u7248\u672c\u56fa\u4ef6\u6062\u590d-\u53ef\u8df3\u8fc7",level:3},{value:"For Windows",id:"for-windows",level:4},{value:"Mac/ Linux \u7528\u6237",id:"mac-linux-\u7528\u6237-2",level:4},{value:"Arduino IDE \u7aef\u68c0\u6d4b RTL8720 \u7248\u672c\u4fe1\u606f",id:"arduino-ide-\u7aef\u68c0\u6d4b-rtl8720-\u7248\u672c\u4fe1\u606f",level:2},{value:"\u66f4\u65b0 Seeed SAMD ArduinoCore",id:"\u66f4\u65b0-seeed-samd-arduinocore",level:2},{value:"\u5b89\u88c5\u4f9d\u8d56\u51fd\u6570\u5e93",id:"\u5b89\u88c5\u4f9d\u8d56\u51fd\u6570\u5e93",level:2},{value:"\u4ece Arduino Library Manager \u5b8c\u6210\u4f9d\u8d56\u5b89\u88c5",id:"\u4ece-arduino-library-manager-\u5b8c\u6210\u4f9d\u8d56\u5b89\u88c5",level:3},{value:"Wi-fi \u76f8\u5173\u529f\u80fd\u7684\u5fc5\u8981\u4f9d\u8d56",id:"wi-fi-\u76f8\u5173\u529f\u80fd\u7684\u5fc5\u8981\u4f9d\u8d56",level:3}],s={toc:m};function k(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u82f1\u6587 wiki \u5730\u5740\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview"},"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview")),(0,r.kt)("p",null,"Wio Terminal \u66f4\u65b0\u65e0\u7ebf\u6838\u5fc3Realtek RTL8720\u7684\u6700\u65b0\u56fa\u4ef6\uff0c\u5b89\u88c5Wio\u7ec8\u7aef\u7684\u6240\u6709\u4f9d\u8d56\u5e93\u4e0e\u5b9e\u73b0\u65e0\u7ebf\u8fde\u63a5\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5df2\u5c06Wi-Fi\u76f8\u5173\u8f6f\u4ef6\u5347\u7ea7\u66f4\u52a0\u7a33\u5b9a\u7684eRPC\u7ed3\u6784\uff0c\u5e76\u4e14\u53ef\u540c\u65f6\u4e0e\u84dd\u7259\u4e00\u8d77\u5de5\u4f5c"),"! \u8bf7\u66f4\u65b0eRPC Wi-Fi\u56fa\u4ef6\u548c\u76f8\u5173\u5e93\u786e\u4fdd\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528!")),(0,r.kt)("h2",{id:"\u66f4\u65b0-wifirtl8720-wireless-core-\u5185\u6838\u56fa\u4ef6"},"\u66f4\u65b0 Wifi\uff08RTL8720 Wireless core\uff09 \u5185\u6838\u56fa\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528\u524d\u6211\u4eec\u8981\u786e\u4fdd Wio Terminal \u7684 Realtek RTL8720 \u5185\u6838\u7684\u56fa\u4ef6\u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u4f7f\u7528\u524d\u66f4\u65b0WIFI\u6a21\u5757\u56fa\u4ef6")),(0,r.kt)("h3",{id:"\u7b2c\u4e00\u6b65---\u64e6\u9664\u51fa\u573a\u56fa\u4ef6"},"\u7b2c\u4e00\u6b65 - \u64e6\u9664\u51fa\u573a\u56fa\u4ef6"),(0,r.kt)("p",null,"\u62ff\u5230Wio Terminal \u8bbe\u5907\u540e\uff0c\u6211\u4eec\u7b2c\u4e00\u6b21\u4f7f\u7528\u65f6\u9700\u8981\u64e6\u9664\u81ea\u5e26\u7684 RTL8720 \u56fa\u4ef6\uff0c\u5e76\u4e14\u70e7\u5f55 \u6700\u65b0\u7248\u672c\u7684\u56fa\u4ef6\u3002\u56e0\u4e3a\u6211\u4eec\u4e0d\u65b9\u4fbf\u4e0eRTL8720\u76f4\u63a5\u901a\u4fe1\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ambd_flash_tool \u5de5\u5177\uff0c\u901a\u8fc7SAMD51\u4e0eRTL8720\u7528\u4e32\u53e3\u8fde\u63a5\uff0c\u4ece\u800c\u5c06\u56fa\u4ef6\u70e7\u5f55\u5230RTL8720\u4e0a\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tips"),": ambd_flash_tool \u8fd9\u4e2a\u5de5\u5177\u65e2\u53ef\u4ee5\u7528\u6765\u64e6\u9664RTL8720\u4e0a\u73b0\u6709\u7684\u56fa\u4ef6\uff0c\u53c8\u53ef\u4ee5\u70e7\u5f55\u6700\u65b0\u7684\u56fa\u4ef6\u3002"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u53ea\u9700\u8981\u5728\u9996\u6b21\u4f7f\u7528\u64e6\u9664\u51fa\u5382\u56fa\u4ef6\u3002\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u70e7\u5f55\u65b0\u7684\u56fa\u4ef6\u6765\u8986\u76d6\u73b0\u6709\u7684\u56fa\u4ef6\u3002")),(0,r.kt)("h4",{id:"windows-\u7528\u6237"},"Windows \u7528\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65 :")," \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"Windows PowerShell")," \u5e76\u4e14\u6267\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~path/to/workspace\ngit clone https://github.com/Seeed-Studio/ambd_flash_tool\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),":  ",(0,r.kt)("strong",{parentName:"p"},"cd ~")," \u8fdb\u5165\u5230\u5f53\u524d\u7528\u6237\u7684\u5de5\u4f5c\u76ee\u5f55\u4e0b(\u53ef\u81ea\u5b9a\u4e49)\uff0c\u6211\u4eec\u5c06\u628a\u4ee3\u7801\u4e0b\u8f7d\u5230\u8fd9\u91cc ",(0,r.kt)("strong",{parentName:"p"},"git clone")," \u7528\u4ee5\u514b\u9686 ambd_flash_tool \u4ee3\u7801\u5230\u672c\u5730"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65:")," \u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"li"},"ambd_flash_tool")," \u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ambd_flash_tool\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65:")," \u7528\u7535\u8111\u8fde\u63a5 Wio Terminal \u7136\u540e\u786e\u4fdd Wio Terminal \u5f00\u673a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u56db\u6b65:")," \u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u7528\u4ee5\u64e6\u9664\u539f\u59cb\u7684\u56fa\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},".\\ambd_flash_tool.exe erase\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," \u64e6\u9664\u56fa\u4ef6\u7684\u8fc7\u7a0b\u9700\u8981\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u5728\u6b64\u671f\u95f4\u4e0d\u8981\u5173\u95ed\u8fdb\u7a0b\u7a97\u53e3 \u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Wio Terminal \u8fde\u63a5\u7535\u8111\u7684\u4e32\u53e3\u4f1a\u88ab\u81ea\u52a8\u68c0\u6d4b\u5230")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": \u5982\u679c\u60f3\u67e5\u770b\u66f4\u591a\u7684\u53ef\u6267\u884c\u53c2\u6570, \u53ef\u4ee5\u76f4\u63a5\u8f93\u5165\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},".\\ambd_flash_tool.exe")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_win_2.png",alt:"pir",width:700,height:"auto"})),(0,r.kt)("h4",{id:"mac-linux-\u7528\u6237"},"Mac/ Linux \u7528\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e00\u6b65:\u5728 Mac/Linux")," \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"Terminal"),"  \u6267\u884c \u4e0b\u9762\u7684\u547d\u4ee4\u6765\u4e0b\u8f7d\u70e7\u5f55\u5de5\u5177\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~path/to/workspace\ngit clone https://github.com/Seeed-Studio/ambd_flash_tool\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),":  ",(0,r.kt)("strong",{parentName:"p"},"cd ~")," \u8fdb\u5165\u5230\u5f53\u524d\u7528\u6237\u7684\u5de5\u4f5c\u76ee\u5f55\u4e0b(\u53ef\u81ea\u5b9a\u4e49)\uff0c\u6211\u4eec\u5c06\u628a\u4ee3\u7801\u4e0b\u8f7d\u5230\u8fd9\u91cc ",(0,r.kt)("strong",{parentName:"p"},"git clone")," \u7528\u4ee5\u514b\u9686 ambd_flash_tool \u4ee3\u7801\u5230\u672c\u5730"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u7b2c\u4e8c\u6b65:")," \u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"li"},"ambd_flash_tool")," \u76ee\u5f55")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"cd ambd_flash_tool\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65:")," \u7528\u7535\u8111\u8fde\u63a5 Wio Terminal \u7136\u540e\u786e\u4fdd Wio Terminal \u5f00\u673a")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u56db\u6b65:")," \u6267\u884c\u4e0b\u9762\u7684\u547d\u4ee4\u7528\u4ee5\u64e6\u9664\u539f\u59cb\u7684\u56fa\u4ef6"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 ambd_flash_tool.py erase\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": \u786e\u4fdd ",(0,r.kt)("strong",{parentName:"p"},"Mac/ Linux")," \u8bbe\u5907\u4e0a\u6b63\u786e\u5730\u5b89\u88c5\u4e86 Python3 \u7684\u73af\u5883, \u8fd9\u6837\u624d\u80fd\u81ea\u52a8\u4e0b\u8f7d\u5e76\u5b8c\u6210\u5b89\u88c5\u76f8\u5173\u7684\u4f9d\u8d56\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6839\u636e\u7cfb\u7edf\u73af\u5883\u9009\u62e9\u6267\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"python3 ambd_flash_tool.py")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"p"},"python ambd_flash_tool.py"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," \u64e6\u9664\u56fa\u4ef6\u7684\u8fc7\u7a0b\u9700\u8981\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85\uff0c\u5728\u6b64\u671f\u95f4\u4e0d\u8981\u5173\u95ed\u8fdb\u7a0b\u7a97\u53e3 \u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Wio Terminal \u8fde\u63a5\u7535\u8111\u7684\u4e32\u53e3\u4f1a\u88ab\u81ea\u52a8\u68c0\u6d4b\u5230")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE"),": \u5982\u679c\u60f3\u67e5\u770b\u66f4\u591a\u7684\u53ef\u6267\u884c\u53c2\u6570, \u53ef\u4ee5\u76f4\u63a5\u8f93\u5165\u547d\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},".\\ambd_flash_tool.exe")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/ambd_tool_linux.png",alt:"pir",width:750,height:"auto"})),(0,r.kt)("h3",{id:"\u7b2c\u4e8c\u6b65---\u70e7\u5f55\u6700\u65b0\u7684\u56fa\u4ef6"},"\u7b2c\u4e8c\u6b65 - \u70e7\u5f55\u6700\u65b0\u7684\u56fa\u4ef6"),(0,r.kt)("h4",{id:"windows-\u7528\u6237-1"},"Windows \u7528\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"li"},"ambd_flash_tool")," \u76ee\u5f55, \u6267\u884c\u4e0b\u9762\u547d\u4ee4\u7528\u4ee5\u5c06\u6700\u65b0\u56fa\u4ef6\u70e7\u5f55\u8fdb RTL8720")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},".\\ambd_flash_tool.exe flash\n")),(0,r.kt)("h4",{id:"mac-linux-\u7528\u6237-1"},"Mac/ Linux \u7528\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"li"},"ambd_flash_tool")," \u76ee\u5f55, \u6267\u884c\u4e0b\u9762\u547d\u4ee4\u7528\u4ee5\u5c06\u6700\u65b0\u56fa\u4ef6\u70e7\u5f55\u8fdb RTL8720")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 ambd_flash_tool.py flash\n")),(0,r.kt)("h3",{id:"\u8001\u7248\u672c\u56fa\u4ef6\u6062\u590d-\u53ef\u8df3\u8fc7"},"\u8001\u7248\u672c\u56fa\u4ef6\u6062\u590d (\u53ef\u8df3\u8fc7)"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u6d4b\u8bd5\u7f16\u5199\u652f\u6301\u8001\u7248\u672c\u56fa\u4ef6\u7684\u4ee3\u7801\uff0c\u6211\u4eec\u53ef\u4ee5\u6309\u7167\u5982\u4e0b\u6b65\u9aa4\u6765\u6062\u590d\u8001\u7248\u672c\u7684\u56fa\u4ef6\uff0c\u5982\u679c\u60f3\u7528\u6700\u65b0\u7248\u56fa\u4ef6\u53ef\u4ee5\u76f4\u63a5\u6309\u7167\u6b65\u9aa4\u4e8c\u7684\u8bf4\u660e\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\u5e76\u8df3\u8fc7\u8fd9\u4e2a\u6b65\u9aa4\u3002"),(0,r.kt)("h4",{id:"for-windows"},"For Windows"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65:")," \u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ambd-firmware/releases"},(0,r.kt)("strong",{parentName:"a"},"RTL8720 Firmware"))," \u56fa\u4ef6\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65:")," \u9009\u62e9\u5bf9\u5e94\u7684\u53d1\u5e03\u7248\u672c ",(0,r.kt)("strong",{parentName:"p"},"release version")," \u8bf8\u5982 click on ",(0,r.kt)("strong",{parentName:"p"},"xxx-seeed-ambd-firmware-rpc-vxxx.zip")," \u5e76\u70b9\u51fb Download \u5b8c\u6210\u4e0b\u8f7d \u3002 \u6211\u4eec\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},".zip \u538b\u7f29\u6587\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65:"),"  \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Windows PowerShell")," \u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"p"},"ambd_flash_tool")," \u5e76\u6267\u884c\u4e00\u4e0b\u547d\u4ee4\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},".\\ambd_flash_tool.exe flash -d [RTL8720 \u56fa\u4ef6\u7684\u4e0b\u8f7d\u8def\u5f84]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," \u7528\u521a\u521a\u4e0b\u8f7d\u7684 RTL8720 \u5bf9\u5e94\u7684\u8def\u5f84 \u66ff\u6362\u3010\u3011\u7684\u5185\u5bb9. \u8fd9\u4e2a\u76ee\u5f55\u5e94\u8be5\u5305\u542b\u4e09\u4e2a\u6587\u4ef6: ",(0,r.kt)("inlineCode",{parentName:"p"},"km0_boot_all.bin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"km0_km4_image2.bin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"km4_boot_all.bin")),(0,r.kt)("p",null,"\u5982\u679c\u987a\u5229\u7684\u5b8c\u6210\u70e7\u5f55\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u6267\u884c\u6210\u529f\u63d0\u793a\u6d88\u606f\u3002\u6b64\u65f6\u5df2\u7ecf\u5b8c\u6210\u56fa\u4ef6\u66f4\u65b0\u3002"),(0,r.kt)("h4",{id:"mac-linux-\u7528\u6237-2"},"Mac/ Linux \u7528\u6237"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65:")," \u8bbf\u95ee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/seeed-ambd-firmware/releases"},(0,r.kt)("strong",{parentName:"a"},"RTL8720 Firmware"))," \u56fa\u4ef6\u4ed3\u5e93")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65:")," \u9009\u62e9\u5bf9\u5e94\u7684\u53d1\u5e03\u7248\u672c ",(0,r.kt)("strong",{parentName:"p"},"release version")," \u8bf8\u5982 click on ",(0,r.kt)("strong",{parentName:"p"},"xxx-seeed-ambd-firmware-rpc-vxxx.zip")," \u5e76\u70b9\u51fb Download \u5b8c\u6210\u4e0b\u8f7d \u3002 \u6211\u4eec\u4f1a\u5f97\u5230\u4e00\u4e2a ",(0,r.kt)("strong",{parentName:"p"},".zip \u538b\u7f29\u6587\u4ef6"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65:"),"  \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Windows PowerShell")," \u8fdb\u5165 ",(0,r.kt)("strong",{parentName:"p"},"ambd_flash_tool")," \u5e76\u6267\u884c\u4e00\u4e0b\u547d\u4ee4\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 ambd_flash_tool.py flash -d [RTL8720 \u56fa\u4ef6\u7684\u4e0b\u8f7d\u8def\u5f84]\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE:")," \u7528\u521a\u521a\u4e0b\u8f7d\u7684 RTL8720 \u5bf9\u5e94\u7684\u8def\u5f84 \u66ff\u6362\u3010\u3011\u7684\u5185\u5bb9. \u8fd9\u4e2a\u76ee\u5f55\u5e94\u8be5\u5305\u542b\u4e09\u4e2a\u6587\u4ef6: ",(0,r.kt)("inlineCode",{parentName:"p"},"km0_boot_all.bin"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"km0_km4_image2.bin")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"km4_boot_all.bin")),(0,r.kt)("h2",{id:"arduino-ide-\u7aef\u68c0\u6d4b-rtl8720-\u7248\u672c\u4fe1\u606f"},"Arduino IDE \u7aef\u68c0\u6d4b RTL8720 \u7248\u672c\u4fe1\u606f"),(0,r.kt)("p",null,"\u5728\u5b8c\u6210\u4e0a\u8ff0\u56fa\u4ef6\u70e7\u5f55\u4e4b\u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u7528 Arduino IDE \u7f16\u5199\u4e0b\u9762\u4ee3\u7801\uff0c\u7f16\u8bd1\u4e0a\u4f20\u81f3 Wio Terminal \u8bbe\u5907\u6765\u68c0\u6d4b\u6a21\u5757\u662f\u5426\u53ef\u4ee5\u6b63\u5e38\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "rpcWiFi.h"\n \nvoid setup() {\n    Serial.begin(115200);\n    while(!Serial); // Wait to open Serial Monitor\n    Serial.printf("RTL8720 Firmware Version: %s", rpc_system_version());\n}\n \nvoid loop() {\n}\n')),(0,r.kt)("p",null,"\u6211\u4eec\u6253\u5f00\u4e32\u53e3\u52a9\u624b\u3002\u5c06\u4f1a\u770b\u5230\u6253\u5370\u56fa\u4ef6\u7684\u7248\u672c\u4fe1\u606f\u3002"),(0,r.kt)("h2",{id:"\u66f4\u65b0-seeed-samd-arduinocore"},"\u66f4\u65b0 Seeed SAMD ArduinoCore"),(0,r.kt)("p",null,"!!!Note\n\u8bf7\u5c06 ",(0,r.kt)("strong",{parentName:"p"},"Seeed SAMD ArduinoCore \u66f4\u65b0\u5230\u6700\u65b0\u7248\u672c (1.8.1)"),"!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65:")," \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Arduino IDE"),", \u4f9d\u6b21\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Board")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Boards Manager"),", \u7136\u540e\u641c\u7d22 ",(0,r.kt)("strong",{parentName:"p"},"Wio Terminal")," \u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65:")," \u6211\u4eec\u53ef\u4ee5\u5728 \u76ee\u5f55\u4e0a\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Select version")," , \u9009\u62e9\u6700\u65b0\u7248\u672c\u5e76\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Install"),"\u3002\u786e\u4fdd\u6700\u65b0\u7248\u672c (1.8.1) \u6b63\u786e\u5b89\u88c5\u3002"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/ArduinoCore_new.png",alt:"pir",width:850,height:"auto"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u53ef\u4ee5\u5728\u8fd9\u91cc \u67e5\u770b Seeed SAMD ArduinoCore ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ArduinoCore-samd"},(0,r.kt)("strong",{parentName:"a"},"\u76f8\u5173\u6e90\u4ee3\u7801")),".")),(0,r.kt)("h2",{id:"\u5b89\u88c5\u4f9d\u8d56\u51fd\u6570\u5e93"},"\u5b89\u88c5\u4f9d\u8d56\u51fd\u6570\u5e93"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5b9e\u73b0\u65e0\u7ebf\u8fde\u63a5\uff0c\u6709\u6570\u4e2a Arduino \u5e93\u9700\u8981\u989d\u5916\u5b89\u88c5\u3002\u4e3a\u4e86\u65b9\u4fbf Wio Terminal \u4f7f\u7528 \uff0c\u6211\u4eec\u5c06\u5fc5\u8981\u7684\u5e93\u6574\u5408\u5728\u4e00\u8d77\uff0c\u53ea\u9700\u8981\u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Arduino Library Manager")," \u5e76\u6309\u7167\u5982\u4e0b\u8bf4\u660e\u5c31\u53ef\u4ee5\u8f7b\u677e\u7684\u641e\u5b9a\u3002"),(0,r.kt)("h3",{id:"\u4ece-arduino-library-manager-\u5b8c\u6210\u4f9d\u8d56\u5b89\u88c5"},"\u4ece Arduino Library Manager \u5b8c\u6210\u4f9d\u8d56\u5b89\u88c5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65:")," \u6253\u5f00 ",(0,r.kt)("strong",{parentName:"p"},"Arduino IDE"),", \u4f9d\u6b21\u70b9\u51fb ",(0,r.kt)("inlineCode",{parentName:"p"},"Sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Manage Libraries..."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65:")," \u8f93\u5165\u6211\u4eec\u9700\u8981\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u4ed3\u5e93\u7684\u540d\u5b57")," \u4ee5\u53ca\u9009\u62e9\u5bf9\u5e94\u7684\u7248\u672c\uff0c\u901a\u5e38\u63a8\u8350\u9009\u62e9\u6700\u65b0\u7248\u672c ",(0,r.kt)("strong",{parentName:"p"},"latest version"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65:")," \u70b9\u51fb ",(0,r.kt)("strong",{parentName:"p"},"Install")," \uff0c\u7b49\u5f85\u4e0b\u8f7d \u89e3\u538b \u5b8c\u6210\u5b89\u88c5"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/library_install_1.jpg",alt:"pir",width:870,height:"auto"})),(0,r.kt)("h3",{id:"wi-fi-\u76f8\u5173\u529f\u80fd\u7684\u5fc5\u8981\u4f9d\u8d56"},"Wi-fi \u76f8\u5173\u529f\u80fd\u7684\u5fc5\u8981\u4f9d\u8d56"),(0,r.kt)("p",null,"\u5728 Wio Terminal \u4f7f\u7528 Wi-Fi \u529f\u80fd\u65f6\u5019\uff0c\u6211\u4eec\u9700\u8981\u786e\u4fdd\u4ee5\u4e0b\u7684\u4f9d\u8d56\u5b8c\u6210\u5b89\u88c5\u3002\u6211\u4eec\u53ef\u4ee5\u5728 Arduino Library Manager \u91cc\u9762\u641c\u7d22\u5bf9\u5e94\u7684\u540d\u5b57\u6765\u68c0\u67e5\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFi"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcWiFi"))," - \u641c\u7d22 ",(0,r.kt)("inlineCode",{parentName:"p"},'"seeed rpcwifi"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcUnified"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcUnified"))," - \u641c\u7d22  ",(0,r.kt)("inlineCode",{parentName:"p"},'"seeed rpcunified"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_mbedtls"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_mbedtls"))," - \u641c\u7d22  ",(0,r.kt)("inlineCode",{parentName:"p"},'"seeed mbedtls"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FS"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_FS"))," - \u641c\u7d22  ",(0,r.kt)("inlineCode",{parentName:"p"},'"seeed fs"'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SFUD"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_SFUD"))," - \u641c\u7d22  ",(0,r.kt)("inlineCode",{parentName:"p"},'"seeed sfud"')))))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82102],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=u(r),d=i,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||a;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(87462),i=(r(67294),r(3905));const a={description:"LinkIt ONE Tutorial - Get temperature with Webpage",title:"LinkIt ONE Tutorial - Get temperature with Webpage",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage",id:"Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage",title:"LinkIt ONE Tutorial - Get temperature with Webpage",description:"LinkIt ONE Tutorial - Get temperature with Webpage",source:"@site/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage.md",sourceDirName:"Seeed_Elderly/LinkIt/Linklt ONE",slug:"/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/LinkIt/Linklt ONE/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"LinkIt ONE Tutorial - Get temperature with Webpage",title:"LinkIt ONE Tutorial - Get temperature with Webpage",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"LinkIt ONE Tutorial - Colorful World",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Colorful_World"},next:{title:"LinkIt ONE Tutorial - Hello World",permalink:"/custom/zh-CN/LinkIt_ONE_Tutorial-Hello_World"}},p={},u=[{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What We're Doing")),(0,i.kt)("p",null,"LinkIt One with Wi-Fi communication function. We have collected some data through the LinkIt One.  As the Internet AP to support data access by providing Web Server. Access to the corresponding IP address can get the data with browser. Next step you need to connect circuit, data acquisition from temperature sensor. Then well equipped with Wi-Fi antennas you and connected to the network, please have a choise with the network fill in the three parameters, the network name (WiFi_AP), access password (WIFI_PASSWORD), and transmission mode of router (options LWIFI_OPEN, LWIFI_WPA, LWIFI_WEP). Finally, the code is uploaded to the LinkIt One. Use of terminal device with network, open the browser and enter the IP address will obtain the temperature data. (Visit the IP address assignment via DHCP router access)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Things you need")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LinkIt One x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Break board x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Resistors 330\u03a9 x 1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Wi-Fi ANT x 1"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Schematic")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_1.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Connection")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/LinkItONE_Kit_10_2.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Code")),(0,i.kt)("p",null,"Please click on the button below to download the code for the kit:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Sidekick_Basic_Kit_for_LinkIt"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/LinkIt_ONE_Tutorial-Get_temperature_with_Webpage/img/Code_sidekick_linkit.png",alt:null}))),(0,i.kt)("p",null,"You can unzip the file to the ",(0,i.kt)("strong",{parentName:"p"},"Examples")," folder of your Arduino IDE."),(0,i.kt)("p",null,"To access the demo code open:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Basic -",">"," L10_Web_Temp")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note")," that you should open the Serial monitor to input anything to start the program."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Troubleshooting")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Antenna do not work ?"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Attention to check the antenna connection is stable connection. (Antenna socket on the back, marked as Wi-Fi/BT ANT)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Where is the IP address\uff1f"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"First adjust the serial mode (DEBUG - ",">","MOLDE), you can query through the serial port. Click on the upper right corner of the compiler, magnifying chart. Standard query the assigned IP address. (Please click on  this step to change Tools - ",">","Port - ",">","COMX)")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Making it better")),(0,i.kt)("p",null,"Do you want to change the data in real time? We through the Web port to monitor a variation of light sensitivity value."),(0,i.kt)("p",null,"To access the demo code open:"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"File -",">"," Examples -",">"," Starter Kit for LinkIt -",">"," Extend_Lesson \u2013",">"," L10_Web_Temp_Advanced")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"More ideas")),(0,i.kt)("p",null,"If want to control the LinkIt One with web. How control the work of hardware can be?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Reference")),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
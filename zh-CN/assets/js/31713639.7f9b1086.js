"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(r),h=o,d=c["".concat(l,".").concat(h)]||c[h]||m[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={description:"JavaScript for RePhone",title:"JavaScript for RePhone",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/JavaScript_for_RePhone",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,p={unversionedId:"Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone",id:"Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone",title:"JavaScript for RePhone",description:"JavaScript for RePhone",source:"@site/docs/Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone.md",sourceDirName:"Seeed_Elderly/rePhone/Program with rePhone",slug:"/JavaScript_for_RePhone",permalink:"/zh-CN/JavaScript_for_RePhone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Program with rePhone/JavaScript_for_RePhone.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"JavaScript for RePhone",title:"JavaScript for RePhone",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/JavaScript_for_RePhone",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Eclipse IDE for RePhone Kit",permalink:"/zh-CN/Eclipse_IDE_for_RePhone_Kit"},next:{title:"Lua for RePhone",permalink:"/zh-CN/Lua_for_RePhone"}},l={},s=[{value:"Install Driver and Update Firmware",id:"install-driver-and-update-firmware",level:2},{value:"Download JavaScript for RePhone Application",id:"download-javascript-for-rephone-application",level:2},{value:"Use JavaScript Shell",id:"use-javascript-shell",level:2},{value:"Examples",id:"examples",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG",alt:null})),(0,o.kt)("p",null,"RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environment and development languages, you can either built applications with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript."),(0,o.kt)("p",null,"This wiki is a User Guide to help you start your RePhone project with JavaScript."),(0,o.kt)("h2",{id:"install-driver-and-update-firmware"},"Install Driver and Update Firmware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To ",(0,o.kt)("strong",{parentName:"p"},"Install the Driver"),", please refer to the ",(0,o.kt)("strong",{parentName:"p"},"section 2 of ",(0,o.kt)("a",{href:"/JavaScript_for_RePhone"},(0,o.kt)("span",null,(0,o.kt)("font",{color:"000000",size:"3"}," Arduino IDE for RePhone Kit")))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"To ",(0,o.kt)("strong",{parentName:"p"},"Update Firmware"),", please refer to ",(0,o.kt)("strong",{parentName:"p"},"section 3 of ",(0,o.kt)("a",{href:"/JavaScript_for_RePhone"},(0,o.kt)("span",null,(0,o.kt)("font",{color:"000000",size:"3"}," Arduino IDE for RePhone Kit"))))))),(0,o.kt)("h2",{id:"download-javascript-for-rephone-application"},"Download JavaScript for RePhone Application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Go to ",(0,o.kt)("strong",{parentName:"p"},"JavaScript for RePhone")," project's github release channel to download ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"js_for_rephone_xxx.zip"))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/JavaScript_for_RePhone/releases"},"Download JavaScript for RePhone")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Set your RePhone into storage mode by ",(0,o.kt)("strong",{parentName:"p"},"plugging in the battery")," and connect it to PC with a Micro USB cable."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Unzip the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"js_for_rephone_xxx.zip"))," file into the 5MB disk of RePhone, you can also put some music files (mp3 format) into the disk. Here I have put the 'music1.mp3' and 'music2.mp3' in it."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Lua_1.png",alt:null})),(0,o.kt)("h2",{id:"use-javascript-shell"},"Use JavaScript Shell"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Now press and hold the power key of your RePhone (Xadow GSM+BLE, see the diagram above in step 3 of section 2) for ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"2 seconds"))," to turn it on, then identify the COM number for the serial port, which will be ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"MTK USB Modem Port"))," showing in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Device Manager")),", also please note that ",(0,o.kt)("em",{parentName:"p"},"the COM number might be different on different PC"),"."),(0,o.kt)("p",null,"Open ",(0,o.kt)("strong",{parentName:"p"},"Device Manager")," by clicking the ",(0,o.kt)("strong",{parentName:"p"},"Start")," button, clicking ",(0,o.kt)("strong",{parentName:"p"},"Control Panel"),", clicking ",(0,o.kt)("strong",{parentName:"p"},"System and Security"),", and then, under ",(0,o.kt)("strong",{parentName:"p"},"System"),", clicking ",(0,o.kt)("strong",{parentName:"p"},"Device Manager"),". If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Check_ports.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," We use a serial terminal tool such as ",(0,o.kt)("a",{parentName:"p",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"},"PuTTY")," to access the Lua shell running on the RePhone."),(0,o.kt)("p",null,"If you use PuTTY, please remember to enable ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},'"implicit CR in every LF"'))," option. Otherwise, line breaks will be weird. As Lua shell of RePhone use LF ('\\n') as EOL, while PuTTY uses CR LF (\"\\r\\n\") as default EOL."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/Putty_EOL.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3."),"Open the MTK USB Modem Port (its baudrate doesn't matter as it is a USB virtual serial port) and type \"print('hello, world')\", you will get your first Lua code running on the RePhone."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Lua_Shell.png",alt:null})),(0,o.kt)("p",null,"If you have some music files in the RePhone, type \"audio.play('music.mp3')\" to play it. If you have a SIM card inserted, type \"gsm.call('phone_number')\" to call someone or \"gsm.text('phone_number', 'message from rephone')\" to send a text message."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"1.Play a music repeatedly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function aplay() { audio.play('music.mp3'); }\nt = timer.create(10000, aplay)\n")),(0,o.kt)("p",null,"2.Auto-reply message."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"function re(f, c) { print('message:', c, ' from:', f); gsm.text(f, 'Thanks for your message'); }\ngsm.on_new_message(re)\n")),(0,o.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/JavaScript_for_RePhone/img/RePhone_Community-2.png",alt:null}))),(0,o.kt)("p",null,"We have been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,o.kt)("p",null,"Now join us in the ",(0,o.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"!"),(0,o.kt)("p",null,"Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/JavaScript_for_RePhone"},"Source Code of JavaScript for RePhone"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"  Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,c=m["".concat(s,".").concat(d)]||m[d]||h[d]||a;return n?o.createElement(c,i(i({ref:t},u),{},{components:n})):o.createElement(c,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},10093:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={description:"Lua for RePhone",title:"Lua for RePhone",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Lua_for_RePhone",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Seeed_Elderly/rePhone/Program with rePhone/Lua_for_RePhone",id:"Seeed_Elderly/rePhone/Program with rePhone/Lua_for_RePhone",title:"Lua for RePhone",description:"Lua for RePhone",source:"@site/docs/Seeed_Elderly/rePhone/Program with rePhone/Lua_for_RePhone.md",sourceDirName:"Seeed_Elderly/rePhone/Program with rePhone",slug:"/Lua_for_RePhone",permalink:"/Lua_for_RePhone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Program with rePhone/Lua_for_RePhone.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Lua for RePhone",title:"Lua for RePhone",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Lua_for_RePhone",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"JavaScript for RePhone",permalink:"/JavaScript_for_RePhone"},next:{title:"RePhone APIs - Audio",permalink:"/RePhone_APIs-Audio"}},s={},p=[{value:"Install Driver and Update Firmware",id:"install-driver-and-update-firmware",level:2},{value:"Download Lua for RePhone Application",id:"download-lua-for-rephone-application",level:2},{value:"Use Lua Shell",id:"use-lua-shell",level:2},{value:"Examples",id:"examples",level:2},{value:"RePhone Community",id:"rephone-community",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Xadow_GSMPlusBLE_pingguo.JPG",alt:null})),(0,r.kt)("p",null,"RePhone can be a learning tool for you to start interesting projects. Currently, RePhone supports various development environment and development languages, you can either built applications with C/C++ based on Eclipse IDE, Arduino IDE, or with Lua and JavaScript."),(0,r.kt)("p",null,"This wiki is a User Guide to help you start your RePhone project with Lua."),(0,r.kt)("h2",{id:"install-driver-and-update-firmware"},"Install Driver and Update Firmware"),(0,r.kt)("h2",{id:"download-lua-for-rephone-application"},"Download Lua for RePhone Application"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Click the following icon to our github for downloading the 'Lua for RePhone application'"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Lua_for_RePhone/releases"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Download_Lua_for_RePhone.png",alt:null}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Click ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"lua_for_rephone_xxx.zip"))," to download"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_for_rephone_download.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Set your RePhone into storage mode by ",(0,r.kt)("strong",{parentName:"p"},"plugging in the battery")," and connect it to PC with a Micro USB cable."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Connect_Xadow_GSMPlusBLE_to_PC.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Unzip the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"lua_for_rephone_xxx.zip"))," file into the 5MB disk of RePhone, you can also put some music files (mp3 format) into the disk. Here I've put the 'music1.mp3' and 'music2.mp3' in it."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Lua_1.png",alt:null})),(0,r.kt)("h2",{id:"use-lua-shell"},"Use Lua Shell"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Now press and hold the power key of your RePhone (Xadow GSM+BLE, see the diagram above in step 3 of section 2) for ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"2 seconds"))," to turn it on, then identify the COM number for the serial port, which will be ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"MTK USB Modem Port"))," showing in the ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"Device Manager")),", also please be noted that ",(0,r.kt)("em",{parentName:"p"},"the COM number might be different on different PC"),"."),(0,r.kt)("p",null,"Open ",(0,r.kt)("strong",{parentName:"p"},"Device Manager")," by clicking the ",(0,r.kt)("strong",{parentName:"p"},"Start")," button, clicking ",(0,r.kt)("strong",{parentName:"p"},"Control Panel"),", clicking ",(0,r.kt)("strong",{parentName:"p"},"System and Security"),", and then, under ",(0,r.kt)("strong",{parentName:"p"},"System"),", clicking ",(0,r.kt)("strong",{parentName:"p"},"Device Manager"),". If you're prompted for an administrator password or confirmation, type the password or provide confirmation. See the following image:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Check_ports.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," We use a serial terminal tool such as ",(0,r.kt)("a",{parentName:"p",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"},"PuTTY")," to access the Lua shell running on the RePhone."),(0,r.kt)("p",null,"If you use PuTTY, please remember to enable ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},'"implicit CR in every LF"'))," option. Otherwise, line breaks will be weird. As Lua shell of RePhone use LF ('\\n') as EOL, while PuTTY uses CR LF (\"\\r\\n\") as default EOL."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/Putty_EOL.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3."),"Open the MTK USB Modem Port (its baudrate doesn't matter as it is a USB virtual serial port) and type \"print('hello, world')\", you will get your first Lua code running on the RePhone."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Lua_Shell.png",alt:null})),(0,r.kt)("p",null,"If you have some music files in the RePhone, type \"audio.play('music.mp3')\" to play it. If you have a SIM card inserted, type \"gsm.call('phone_number')\" to call someone or \"gsm.text('phone_number', 'message from rephone')\" to send a text message."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("p",null,"1.Play a music repeatedly."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function play_music()\n    audio.play('music.mp3')\nend\nt = timer.create(10000, play_music)\n")),(0,r.kt)("p",null,"2.Auto-reply message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"function reply(from, content)\n    print('got a message:', content)\n    print('from:', from)\n    gsm.text(from, 'Thanks for your message')\nend\ngsm.on_new_message(reply)\n")),(0,r.kt)("h2",{id:"rephone-community"},"RePhone Community"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Lua_for_RePhone/img/RePhone_Community-2.png",alt:null}))),(0,r.kt)("p",null,"We have been looking for a better place where our backers (RePhone Users) can sit together, warmly and comfortably, have conversations about RePhone, discuss technical problems, share ideas/projects, and give feedback on the modules\u2019 development in the future. And then here we go, the RePhone Community."),(0,r.kt)("p",null,"Now join us in the ",(0,r.kt)("a",{parentName:"p",href:"https://community.seeedstudio.com/discover.html?t=RePhone"},"RePhone Community"),"!"),(0,r.kt)("p",null,"Together we seek answers, make interesting stuff, care about each other, and share our experiences."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Lua_for_RePhone"},"Source Code of Lua for RePhone"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
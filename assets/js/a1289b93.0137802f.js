"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[76904],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>k});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function d(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=u(o),c=n,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||r;return o?a.createElement(k,i(i({ref:t},l),{},{components:o})):a.createElement(k,i({ref:t},l))}));function k(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=c;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[p]="string"==typeof e?e:n,i[1]=d;for(var u=2;u<r;u++)i[u]=o[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},59914:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var a=o(87462),n=(o(67294),o(3905));const r={description:"How to Add Seeed boards to Arduino IDE",title:"How to Add Seeed boards to Arduino IDE",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Seeed_Arduino_Boards",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},i=void 0,d={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Seeed_Arduino_Boards",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Seeed_Arduino_Boards",title:"How to Add Seeed boards to Arduino IDE",description:"How to Add Seeed boards to Arduino IDE",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Seeed_Arduino_Boards.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/Seeed_Arduino_Boards",permalink:"/Seeed_Arduino_Boards",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/Seeed_Arduino_Boards.md",tags:[{label:"Tutorial",permalink:"/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675267200,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"How to Add Seeed boards to Arduino IDE",title:"How to Add Seeed boards to Arduino IDE",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/Seeed_Arduino_Boards",last_update:{date:"02/02/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"A Handy Serial Library",permalink:"/A_Handy_Serial_Library"},next:{title:"How to install an Arduino library",permalink:"/How_to_install_Arduino_Library"}},s={},u=[{value:"Step 1. Download the latest Arduino IDE",id:"step-1-download-the-latest-arduino-ide",level:2},{value:"Step 2. Setting your Arduino IDE",id:"step-2-setting-your-arduino-ide",level:2},{value:"Step 3. Board Manager",id:"step-3-board-manager",level:2},{value:"Step 4. Select a board",id:"step-4-select-a-board",level:2},{value:"Tech Support",id:"tech-support",level:2}],l={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Seeed had designed so many boards that work with Arduino IDE, include,"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/"},"Seeeduino XIAO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},"Seeeduino Wio Terminal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus_Cortex-M0-/"},"Seeeduino Lotus Cortex-M0+")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_LoRAWAN/"},"Seeeduino LoRaWAN"),"/GPS"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-Cortex-M0/"},"Seeeduino Cortex M0"))),(0,n.kt)("admonition",{title:"attention",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The board mentioned above is the AT SAMD21 Microcontroller series,Please copy the below url to ",(0,n.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")," in the step2 .")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Seeeduino ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_v3.0/"},"V3"),"/",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_v4.0/"},"4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Lotus/"},"Seeeduino Lotus")),(0,n.kt)("li",{parentName:"ul"},"Seeeduino Stalker ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Stalker_v2.3/"},"V2.3"),"/",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_v3.0/"},"3"),"/",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Stalker_V3.1/"},"3.1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Lite/"},"Seeeduino Lite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Mega/"},"Seeeduino Mega")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Mega_Protoshield_Kit/"},"Seeeduino Mega Protoshield Kit")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_GPRS/"},"Seeeduino GPRS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Ethernet/"},"Seeeduino Ethernet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino_Cloud/"},"Seeeduino Cloud")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-Nano/"},"Seeeduino Nano")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Seeeduino-Crypto-ATmega4809-ECC608/"},"Seeeduino Crypto (ATmega4809 ECC608)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/LinkIt_ONE/"},"LinkIt ONE")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/RePhone/"},"RePhone Series"))),(0,n.kt)("admonition",{title:"attention",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The board mentioned above from Seeeduino V3 to RePhone Series isn't the AT SAMD21 Microcontroller series,Please copy the below url to ",(0,n.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")," in the step2.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-c++"},"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json\n\n")),(0,n.kt)("p",null,"Thanks to the new features of Arduino IDE, it's easy to add those board to your Arduino IDE now."),(0,n.kt)("p",null,"There're few step to be followed."),(0,n.kt)("h2",{id:"step-1-download-the-latest-arduino-ide"},"Step 1. Download the latest Arduino IDE"),(0,n.kt)("p",null,"You need a Arduino IDE that after version 1.6.4, please download one if there's no Arduino IDE in your computer."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png",alt:null}))),(0,n.kt)("h2",{id:"step-2-setting-your-arduino-ide"},"Step 2. Setting your Arduino IDE"),(0,n.kt)("p",null,"Open your Arudino IDE, click on ",(0,n.kt)("strong",{parentName:"p"},"File > Preferences"),", and copy below url to ",(0,n.kt)("em",{parentName:"p"},"Additional Boards Manager URLs")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Lite-MG126/img/preference.png",alt:null})),(0,n.kt)("h2",{id:"step-3-board-manager"},"Step 3. Board Manager"),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Toos > Board > Board Manager"),"."),(0,n.kt)("p",null," ",(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json",alt:null})," "),(0,n.kt)("p",null,"Now you can search the board by name, if you need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"LinkIt ONE"),", then just search ",(0,n.kt)("inlineCode",{parentName:"p"},"LinkIt"),"; and if you need to use ",(0,n.kt)("inlineCode",{parentName:"p"},"RePhone Series"),",\njust tap ",(0,n.kt)("inlineCode",{parentName:"p"},"RePhone"),". In this wiki, we will take ",(0,n.kt)("inlineCode",{parentName:"p"},"Seeeduino Stalker V3")," example."),(0,n.kt)("p",null,"Click Seeeduino Stalker V3 then an ",(0,n.kt)("strong",{parentName:"p"},"Install")," button appear, click on it to finish the step, this process takes about 5 minutes to half an hour, which depend on the speed of your network."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/img/add_board.png",alt:null})),(0,n.kt)("h2",{id:"step-4-select-a-board"},"Step 4. Select a board"),(0,n.kt)("p",null,"After Step 3 was successful, a board named Seeeduino Stalker V3 will show up at the boards list."),(0,n.kt)("p",null,"Click on ",(0,n.kt)("strong",{parentName:"p"},"Tools > Board"),", ",(0,n.kt)("em",{parentName:"p"},"Seeeduino Stalker V3")," is available now."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/Seeed-Studio/Seeed_Platform/master/package_legacy_seeeduino_boards_index.json",alt:null})),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
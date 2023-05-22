"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54697],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=m(a),c=o,k=p["".concat(s,".").concat(c)]||p[c]||u[c]||n;return a?r.createElement(k,i(i({ref:t},d),{},{components:a})):r.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<n;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},57107:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var r=a(87462),o=(a(67294),a(3905));const n={description:"How to Use Wio Terminal as RTL8720DN Dev Board",title:"How to Use Wio Terminal as RTL8720DN Dev Board",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-8720-dev",last_update:{date:"1/31/2023",author:"jianjing Huang"}},i="How to Use Wio Terminal as RTL8720DN Dev Board",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-8720-dev",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-8720-dev",title:"How to Use Wio Terminal as RTL8720DN Dev Board",description:"How to Use Wio Terminal as RTL8720DN Dev Board",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-8720-dev.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-8720-dev",permalink:"/custom/zh-CN/Wio-Terminal-8720-dev",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-8720-dev.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"How to Use Wio Terminal as RTL8720DN Dev Board",title:"How to Use Wio Terminal as RTL8720DN Dev Board",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-8720-dev",last_update:{date:"1/31/2023",author:"jianjing Huang"}}},s={},m=[{value:"Get Started",id:"get-started",level:2},{value:"Add the Realtek Board Library to Arduino",id:"add-the-realtek-board-library-to-arduino",level:3},{value:"Communication Program Between SAMD51 and RTL8720DN",id:"communication-program-between-samd51-and-rtl8720dn",level:2},{value:"MODE 1 - RTL8720DN Burning Firmware Mode",id:"mode-1---rtl8720dn-burning-firmware-mode",level:3},{value:"MODE 2 - USB to Serial Mode",id:"mode-2---usb-to-serial-mode",level:3},{value:"Wi-Fi Example",id:"wi-fi-example",level:2},{value:"Bluetooth Example",id:"bluetooth-example",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-use-wio-terminal-as-rtl8720dn-dev-board"},"How to Use Wio Terminal as RTL8720DN Dev Board"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.gif"})),(0,o.kt)("p",null,"Wio Terminal is equipped with the Atmel SAMD51 core with the Realtek RTL8720DN wireless core. Won't it be cool if you can also use Wio Terminal as a simple RTL8720DN dev board. In this wiki, you will learn how to use Wio Terminal as a RTL8720DN dev board to develop the Wi-Fi and Bluetooth connectivity!"),(0,o.kt)("h2",{id:"get-started"},"Get Started"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Please follow ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,o.kt)("strong",{parentName:"a"},"Wio Terminal Get Started"))," first before the following.")),(0,o.kt)("h3",{id:"add-the-realtek-board-library-to-arduino"},"Add the Realtek Board Library to Arduino"),(0,o.kt)("p",null,"1.Open your Arduino IDE, click on ",(0,o.kt)("strong",{parentName:"p"},"File")," > ",(0,o.kt)("strong",{parentName:"p"},"Preferences"),", and copy below url to ",(0,o.kt)("strong",{parentName:"p"},"Additional Boards Manager URLs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"https://github.com/ambiot/ambd_arduino/raw/master/Arduino_package/package_realtek.com_amebad_index.json\n")),(0,o.kt)("p",null,"2.Click on ",(0,o.kt)("strong",{parentName:"p"},"Tools")," > ",(0,o.kt)("strong",{parentName:"p"},"Board")," > ",(0,o.kt)("strong",{parentName:"p"},"Board Manager")," and Search ",(0,o.kt)("strong",{parentName:"p"},"realtek")," in the Boards Manager"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/realtek-board.png"})),(0,o.kt)("h2",{id:"communication-program-between-samd51-and-rtl8720dn"},"Communication Program Between SAMD51 and RTL8720DN"),(0,o.kt)("p",null,"We've prepared an Arduino example code that can be used to communicate Wio Terminal's SAMD51 core to RTL8720DN. Download the complete source code ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_USB2Serial_Burn8720"},(0,o.kt)("strong",{parentName:"a"},"here")),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload the code to Wio Terminal by selecting the Board as ",(0,o.kt)("strong",{parentName:"li"},"Wio Terminal"),".")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This program is uploaded to Wio Terminal's SAMD51 core."),(0,o.kt)("p",null,"There are ",(0,o.kt)("strong",{parentName:"p"},"2 modes")," in this Arduino program."),(0,o.kt)("h3",{id:"mode-1---rtl8720dn-burning-firmware-mode"},"MODE 1 - RTL8720DN Burning Firmware Mode"),(0,o.kt)("p",null,"Press the button (Right button) to enter this mode. This is ",(0,o.kt)("strong",{parentName:"p"},"the mode where you use to burn Arduino code into the RTL8720DN"),". Now, you can choose one of the RTL8720DN example code to upload to the RTL8720DN core. You must select this mode to upload to RTL8720DN core and ",(0,o.kt)("strong",{parentName:"p"},"select board as RTL8720"),"."),(0,o.kt)("h3",{id:"mode-2---usb-to-serial-mode"},"MODE 2 - USB to Serial Mode"),(0,o.kt)("p",null,"Press the button (Middle button) to enter this mode. This is ",(0,o.kt)("strong",{parentName:"p"},"the mode used to view serial outputs from the RTL8720DN core.")," In this mode, the SAMD51 core is acting as a USB to Serial module."),(0,o.kt)("h2",{id:"wi-fi-example"},"Wi-Fi Example"),(0,o.kt)("p",null,"Let's take an example to walk through the procedures!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upload the ",(0,o.kt)("strong",{parentName:"p"},"Communication program between SAMD51 and RTL8720DN to Wio Terminal")," (select board as ",(0,o.kt)("strong",{parentName:"p"},"Wio Terminal"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once uploaded the program, navigate to ",(0,o.kt)("strong",{parentName:"p"},"Tools")," -> ",(0,o.kt)("strong",{parentName:"p"},"Board")," and select board as ",(0,o.kt)("strong",{parentName:"p"},"RTL8722DM")," as followed:"))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-board.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to ",(0,o.kt)("strong",{parentName:"li"},"Files")," -> ",(0,o.kt)("strong",{parentName:"li"},"Examples")," and under ",(0,o.kt)("strong",{parentName:"li"},"Examples for RTL8720DM"),", you can choose examples for RTL8720DN. Let me just take ScanNetworks as example.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/8720-example.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If using Wi-Fi related examples, please check ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/"},"here")," first to erase RTL8720DN core firmware first.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure that the Wio Terminal is in the ",(0,o.kt)("strong",{parentName:"li"},"RTL8720DN Burning Firmware Mode")," as followed. Select board as ",(0,o.kt)("strong",{parentName:"li"},"RTL8722DM")," and click upload.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/burn.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Once uploaded the Wi-Fi example into the RTL8720DN core. Reset Wio Terminal and switch to ",(0,o.kt)("strong",{parentName:"li"},"USB to Serial Mode")," by pressing the middle button of Wio Terminal.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/USB-serial.png"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Now, if you open the Serial Monitor you should be able to see results printing from the RTL8720DN core! Now you can use Wio Terminal's RTL8720DN core as a dev board!")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/result.png"})),(0,o.kt)("h2",{id:"bluetooth-example"},"Bluetooth Example"),(0,o.kt)("p",null,"Let's also have a Bluetooth example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Upload the ",(0,o.kt)("strong",{parentName:"p"},"Communication program between SAMD51 and RTL8720DN to Wio Terminal")," (select board as ",(0,o.kt)("strong",{parentName:"p"},"Wio Terminal"),").")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once uploaded the program, navigate to ",(0,o.kt)("strong",{parentName:"p"},"Tools")," -> ",(0,o.kt)("strong",{parentName:"p"},"Board")," and select board as ",(0,o.kt)("strong",{parentName:"p"},"RTL8722DM"),". Navigate to ",(0,o.kt)("strong",{parentName:"p"},"Files")," -> ",(0,o.kt)("strong",{parentName:"p"},"Examples")," and under ",(0,o.kt)("strong",{parentName:"p"},"Examples for RTL8720DM"),", you can choose examples for RTL8720DN. Let me just take ScanNetworks as example.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure that the Wio Terminal is in the ",(0,o.kt)("strong",{parentName:"p"},"RTL8720DN Burning Firmware Mode"),". Select board as ",(0,o.kt)("strong",{parentName:"p"},"RTL8722DM")," and click upload.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once uploaded the Wi-Fi example into the RTL8720DN core. Reset Wio Terminal and switch to ",(0,o.kt)("strong",{parentName:"p"},"USB to Serial Mode")," by pressing the middle button of Wio Terminal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Now, if you open the Serial Monitor you should be able to see results printing from the RTL8720DN core! Now you can use Wio Terminal's RTL8720DN core as a dev board!"))),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-8720-dev/BLE.png"})),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
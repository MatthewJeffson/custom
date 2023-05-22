"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[44400],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},l),{},{components:n})):r.createElement(h,a({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={title:"LAN_Communications",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/LAN_Communications/",slug:"/LAN_Communications",last_update:{date:"01/11/2022",author:"gunengyu"}},a=void 0,s={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications",title:"LAN_Communications",description:"1. Configure the LAN Server",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board",slug:"/LAN_Communications",permalink:"/custom/zh-CN/LAN_Communications",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/LAN_Communications.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"LAN_Communications",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/LAN_Communications/",slug:"/LAN_Communications",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio RP2040 mini Dev Board with Arduino",permalink:"/custom/zh-CN/Wio-RP2040-with-Arduino-WIFI"},next:{title:"Use MQTT to remotely light up LED lights",permalink:"/custom/zh-CN/Use_MQTT_to_remotely_light_up_LED_lights"}},u={},c=[{value:"1. Configure the LAN Server",id:"1-configure-the-lan-server",level:3},{value:"2. Debug MicroPython program",id:"2-debug-micropython-program",level:3},{value:"Tech Support",id:"tech-support",level:2}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"1-configure-the-lan-server"},"1. Configure the LAN Server"),(0,o.kt)("p",null,'This project requires the Server and the main control board to work in the same local area network. The principle: Setup one PC as a server, connect the main control board to the Server through the local area network, and then PC and board communicate through a fixed port.\nFirst, download and install the network debugging assistant (Net Assistant network debugging assistant software in this project).\nIf the installation is successful, open the software, select "TCP Server" in the upper left corner to set the "Protocol", and then set the "Local host addr" and "Local host port" below. If all were done, click "Open" to enter the Server.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_8.png",alt:"image.png"})),(0,o.kt)("h3",{id:"2-debug-micropython-program"},"2. Debug MicroPython program"),(0,o.kt)("p",null,"Enter the following code into the code editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import network\nimport usocket\nfrom machine import Pin, I2C, ADC, UART, SPI, PWM\nfrom time import sleep\n\nN1 = network.WLAN_SPI(network.STA_IF)\nN1.active(True)\n\nprint("API list:")\ndir(N1)\n\nprint("wifi list:")\nlis = N1.scan()\nfor q in lis:\n    print(q)\n    \nN1.connect("CHCK","depot0510")\nif N1.isconnected():\n    print("    ip               gateway           netmask            MAC            ssid")\n    print(N1.ifconfig())\n    s=usocket.socket()\n    addr=(\'192.168.9.243\',9999)\n    s.connect(addr)\n    s.send(\'Hello! Wio RP2040\')\n')),(0,o.kt)("p",null,"Please fill in line 17 (the name and password of the WiFi ) and line 22\uff08the IP address and port number of the computer server). Then run the program, you should see the message sent by the main control board in the Data log of the network debugging assistant."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_9.png",alt:"image.png"})),(0,o.kt)("hr",null),(0,o.kt)("p",null,'If you want to run other codes after running a program with network functions, please click the "RUN" button on the main control board to restart. After restarting, the main control board can run other programs.'),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
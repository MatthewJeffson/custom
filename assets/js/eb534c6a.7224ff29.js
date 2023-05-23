"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[52327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,_=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(_,a(a({ref:t},l),{},{components:n})):o.createElement(_,a({ref:t},l))}));function _(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"Use Socket to connect to the forum",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Use_Socket_to_connect_to_the_forum/",slug:"/Use_Socket_to_connect_to_the_forum",last_update:{date:"01/11/2022",author:"gunengyu"}},a=void 0,s={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_Socket_to_connect_to_the_forum",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_Socket_to_connect_to_the_forum",title:"Use Socket to connect to the forum",description:"Socket is almost the base of the entire network communication. In this project, we will use Socket to connect to a designated server to obtain its information from the Internet. You can search many servers with telnet protocol on the Internet. By connecting to these servers, you can browse the web and forums, and even read character animation in the terminal!",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_Socket_to_connect_to_the_forum.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application",slug:"/Use_Socket_to_connect_to_the_forum",permalink:"/custom/Use_Socket_to_connect_to_the_forum",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_Socket_to_connect_to_the_forum.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Use Socket to connect to the forum",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Use_Socket_to_connect_to_the_forum/",slug:"/Use_Socket_to_connect_to_the_forum",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Use MQTT to remotely light up LED lights",permalink:"/custom/Use_MQTT_to_remotely_light_up_LED_lights"},next:{title:"Wireless Fall Detection Device",permalink:"/custom/Wireless-Fall-Detection-Device"}},c={},u=[{value:"Tech Support",id:"tech-support",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Socket is almost the base of the entire network communication. In this project, we will use Socket to connect to a designated server to obtain its information from the Internet. You can search many servers with telnet protocol on the Internet. By connecting to these servers, you can browse the web and forums, and even read character animation in the terminal!"),(0,r.kt)("p",null,'We will connect to the "freechess.org" forum to get information in the terminal in this example.\nEnter the following code into the code editor:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import network\nimport usocket\nfrom machine import Pin, I2C, ADC, UART, SPI, PWM\nfrom time import sleep\n\nN1 = network.WLAN_SPI(network.STA_IF)\nN1.active(True)\n\nprint(\"API list:\")\ndir(N1)\n\nprint(\"wifi list:\")\nlis = N1.scan()\nfor q in lis:\n    print(q)\n    \nN1.connect(\"CHCK\",\"depot0510\")\nif N1.isconnected():\n    print(\"    ip               gateway           netmask            MAC            ssid\")\n    print(N1.ifconfig())\n    addr_info = usocket.getaddrinfo('freechess.org',5000)\n    print(addr_info)\n    addr = addr_info[0][-1]\n    print(addr)\n    s=usocket.socket()\n   # addr=('171.160.169.200',23)\n    s.connect(addr)\n   # s.send('Hello!')\nwhile True:\n    data = s.recv(500)\n    print(str(data, 'utf8'), end = '')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Pay attention to replace with your own WiFi name and password on line 17, then run the program and get the result in the Shell window."),"\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_20.png",alt:"image.png"}),"\nYou can also find other servers that support the telnet protocol on the Internet, and then fill in the server address and port as shown. Now, you can use the terminal to visit these websites!\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_21.png",alt:"image.png"})),(0,r.kt)("h2",{id:""}),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
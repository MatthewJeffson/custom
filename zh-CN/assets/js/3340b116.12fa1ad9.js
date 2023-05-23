"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},_=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=c(n),_=i,h=u["".concat(l,".").concat(_)]||u[_]||m[_]||r;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=_;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:i,s[1]=a;for(var c=2;c<r;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}_.displayName="MDXCreateElement"},87030:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={title:"Use MQTT to remotely light up LED lights",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Use_MQTT_to_remotely_light_up_LED_lights/",slug:"/Use_MQTT_to_remotely_light_up_LED_lights",last_update:{date:"01/11/2022",author:"gunengyu"}},s=void 0,a={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_MQTT_to_remotely_light_up_LED_lights",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_MQTT_to_remotely_light_up_LED_lights",title:"Use MQTT to remotely light up LED lights",description:"MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both.",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_MQTT_to_remotely_light_up_LED_lights.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application",slug:"/Use_MQTT_to_remotely_light_up_LED_lights",permalink:"/custom/zh-CN/Use_MQTT_to_remotely_light_up_LED_lights",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Use_MQTT_to_remotely_light_up_LED_lights.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Use MQTT to remotely light up LED lights",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Use_MQTT_to_remotely_light_up_LED_lights/",slug:"/Use_MQTT_to_remotely_light_up_LED_lights",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"LAN_Communications",permalink:"/custom/zh-CN/LAN_Communications"},next:{title:"Use Socket to connect to the forum",permalink:"/custom/zh-CN/Use_Socket_to_connect_to_the_forum"}},l={},c=[{value:"1. Configure the MQTT server",id:"1-configure-the-mqtt-server",level:3},{value:"2. Code",id:"2-code",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_10.png",alt:"image.png"}),'\nThe\npublisher can create a topic with messages attached to the topic. For example, I can create a new topic "Today\'s Weather" and the message content is "25 degrees Celsius", and then sent the message to the Server. After receiving the topic message, the publisher distributes the information to any clients that have subscribed to that topic. That is, the subscriber will receive the message of "25 degrees Celsius" only if it subscribes to the topic "Today\'s Weather". If the subscriber does not subscribe to the topic of \xa0"Today\'s Weather", no matter what message the publisher sends, the subscriber will not receive the message.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_11.png",alt:"image.png"})),(0,i.kt)("h3",{id:"1-configure-the-mqtt-server"},"1. Configure the MQTT server"),(0,i.kt)("p",null,"Download the MQTTX server software and install it on the computer, and then configure the MQTT server."),(0,i.kt)("hr",null),(0,i.kt)("p",null,'We will use the free server of "mqtt.p2hp.com" in this project.\n',(0,i.kt)("strong",{parentName:"p"},"Online server")," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Address: mqtt.p2hp.com"),(0,i.kt)("li",{parentName:"ul"},"Ports: 1883 (TCP), 8083 (WebSocket)"),(0,i.kt)("li",{parentName:"ul"},"Type: EMQ"),(0,i.kt)("li",{parentName:"ul"},"MQTT V3.1.1/V5.0 compatible")),(0,i.kt)("hr",null),(0,i.kt)("p",null,'Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_12.png",alt:"image.png"})),(0,i.kt)("p",null,"After the connection is successful, there will be a pop-up in the upper right corner of the software."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_13.png",alt:"image.png"})),(0,i.kt)("p",null,'Then set the topic and message below. In this project, we use MQTT messages to control the on and off of the LED on the main control board, so fill in the topic("LED") and message content ("on") below.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_14.png",alt:"image.png"})),(0,i.kt)("h3",{id:"2-code"},"2. Code"),(0,i.kt)("p",null,"Enter the following code into the code editor:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import network\nimport mqtt\nfrom machine import Pin, I2C, ADC, UART, SPI, PWM\nfrom time import sleep\n\nN1 = network.WLAN_SPI(network.STA_IF)\nN1.active(True)\nN1.connect(\"CHCK\",\"depot0510\")\nsleep(1)\n\nled = Pin(13, Pin.OUT)\nled.value(0)\n\nSERVER = 'mqtt.p2hp.com'\nCLIENT_ID = 'Wio RP2040_Dev_board'\nTOPIC = 'LED'\n\ndef mqtt_callback(topic):\n    print('topic: {}'.format(topic[0]))\n    print('msg:{}'.format(topic[1]))\n    if(topic[1] == \"off\"):\n        led.value(0)\n    if(topic[1] == \"on\"):\n        led.value(1)\n    \ncl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)\ncl.connect()\n\n    \ncl.publish(\"webscket_test\",\"start\")\ncl.subscribe(TOPIC)\ncl.set_callback(mqtt_callback)\nprint('ok')\n\nwhile True:\n    cl.wait_msg()\n    sleep(0.1)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pay attention to fill in your WiFi name and password in line 8 of the code"),', and then run the program. Wait for the prompt "ok" in the Shell window, which means that the connection has been successful. At that time you can send information in MQTTX for controlling.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_15.png",alt:"image.png"})),(0,i.kt)("p",null,'Fill in "LED" and "on" in the lower right corner of the software and click the send icon. At this time, the blue LED of the main control board should be lit. You can also turn off the LED light by sending "off".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_16.png",alt:"image.png"}),"\n",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/demo_17.png",alt:"image.png"})),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
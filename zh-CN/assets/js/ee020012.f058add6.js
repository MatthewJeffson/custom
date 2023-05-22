"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[89704],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(r),c=a,k=u["".concat(l,".").concat(c)]||u[c]||m[c]||n;return r?i.createElement(k,o(o({ref:t},p),{},{components:r})):i.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<n;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}c.displayName="MDXCreateElement"},28631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var i=r(87462),a=(r(67294),r(3905));const n={description:"Zigbee Networking with XBee Series 2 and Seeed Products",title:"Zigbee Networking with XBee Series 2 and Seeed Products",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,s={unversionedId:"Seeed_Elderly/Bee/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products",id:"Seeed_Elderly/Bee/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products",title:"Zigbee Networking with XBee Series 2 and Seeed Products",description:"Zigbee Networking with XBee Series 2 and Seeed Products",source:"@site/docs/Seeed_Elderly/Bee/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products.md",sourceDirName:"Seeed_Elderly/Bee",slug:"/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products",permalink:"/custom/zh-CN/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Bee/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Zigbee Networking with XBee Series 2 and Seeed Products",title:"Zigbee Networking with XBee Series 2 and Seeed Products",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"RFbee V1.1 - Wireless Arduino compatible node",permalink:"/custom/zh-CN/RFbee_V1.1-Wireless_Arduino_compatible_node"},next:{title:"Bees Shield",permalink:"/custom/zh-CN/Bees_Shield"}},l={},d=[{value:"Zigbee Modules and Network",id:"zigbee-modules-and-network",level:2},{value:"Device Types",id:"device-types",level:3},{value:"Device Addressing",id:"device-addressing",level:3},{value:"Getting Zigbee modules",id:"getting-zigbee-modules",level:2},{value:"XBee ZB Hardware and Pin Layout",id:"xbee-zb-hardware-and-pin-layout",level:2},{value:"Upgrading XBee firmware with UartSBee_V3.1 or Grove - XBee Carrier",id:"upgrading-xbee-firmware-with-uartsbee_v31-or-grove---xbee-carrier",level:2},{value:"Installing drivers for USB-to-Serial Port",id:"installing-drivers-for-usb-to-serial-port",level:3},{value:"<strong>Windows</strong>",id:"windows",level:4},{value:"<strong>GNU/Linux</strong>",id:"gnulinux",level:5},{value:"Using Digi&#39;s X-CTU (XCTU) Software",id:"using-digis-x-ctu-xctu-software",level:3},{value:"Wireless UART demo using XBee ZB modules and PC",id:"wireless-uart-demo-using-xbee-zb-modules-and-pc",level:2},{value:"Wireless UART demo using XBee ZB modules and Arduinos",id:"wireless-uart-demo-using-xbee-zb-modules-and-arduinos",level:2},{value:"Wireless Sensor Networks(WSN) demo with XBee ZB modules",id:"wireless-sensor-networkswsn-demo-with-xbee-zb-modules",level:2},{value:"References",id:"references",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"Hummingbird",id:"hummingbird",level:3},{value:"Hot Water Solar Boiler Project",id:"hot-water-solar-boiler-project",level:3},{value:"Share Your Awesome Projects with Us",id:"share-your-awesome-projects-with-us",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"XBee ZB modules can be used in many different ways. They also provide lots of configuration parameters. In this tutorial, we have tried to showcase the essential configurations in simple steps.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("font",{color:"darkred"}," Please read through the complete tutorial at-least once, before deciding which configuration to use for your application. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"This tutorial makes use of ",(0,a.kt)("strong",{parentName:"p"},"XBee Series 2")," modules and does not use the old Series 1 modules. We sell Series 2 modules in our Bazaar."))),(0,a.kt)("h2",{id:"zigbee-modules-and-network"},"Zigbee Modules and Network"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Zigbee")," is a standard for low-power, short range wireless devices based on an ",(0,a.kt)("strong",{parentName:"p"},"IEEE 802")," standard for personal area networks(",(0,a.kt)("strong",{parentName:"p"},"PAN"),"). Zigbee modules work in unlicensed ISM(Industrial Scientific Medical) band. Zigbee devices are capable of peer-to-peer, point-to-multipoint and mesh communication. They offer convenient low power wireless solutions for embedded systems where power consumption is a critical factor. A Zigbee network consist of three different types of ZigBee devices: ",(0,a.kt)("strong",{parentName:"p"},"coordinator"),", ",(0,a.kt)("strong",{parentName:"p"},"router"),", ",(0,a.kt)("strong",{parentName:"p"},"end-device"),". Each network has a 16bit ",(0,a.kt)("strong",{parentName:"p"},"PAN ID"),". All devices in a Zigbee network is assigned a single PAN ID."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Zigbee_Network_Topology.jpg",alt:null})),(0,a.kt)("h3",{id:"device-types"},"Device Types"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ZigBee coordinator (ZC)"),": The most capable device, the coordinator forms the root of the network tree and might bridge to other networks. There must be one ZigBee coordinator in each network since it is the device that starts the network originally. The coordinator initiates a Personal Area Network(PAN) by selecting a RF channel and PAN ID.  ZC also allows routers and end-devices to join the PAN. It is able to store information about the network, including acting as the Trust Center ","&"," repository for security keys.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ZigBee Router (ZR)"),": As well as running an application function, a router can act as an intermediate router, passing on data from other devices. A router can start operation only when it has establishes connection with ",(0,a.kt)("strong",{parentName:"p"},"ZC"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"ZigBee End Device (ZED)"),": Contains just enough functionality to talk to the parent node (either the coordinator or a router); it cannot relay data from other devices. This relationship allows the node to be asleep a significant amount of the time thereby giving long battery life. A ZED must join PAN like a router before sending any senor data. A ZED requires the least amount of memory, and therefore can be less expensive to manufacture than a ZR or ZC."))),(0,a.kt)("h3",{id:"device-addressing"},"Device Addressing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When a device connects to a Zigbee network it gets a ",(0,a.kt)("strong",{parentName:"p"},"16-bit Network address"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Each device(node) has a ",(0,a.kt)("strong",{parentName:"p"},"64-Bit Device address"),". In XBee ZB modules, this 64-bit address is a unique permanent number assigned by the manufacturer. This is also the serial number of the device."))),(0,a.kt)("p",null,"Any data sent from one Zigbee device to another is sent by specifying the 16-bit Network Address and the 64-bit Device Address."),(0,a.kt)("h2",{id:"getting-zigbee-modules"},"Getting Zigbee modules"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Seeedstudio Bazaar")," currently sells two types of Zigbee modules from ",(0,a.kt)("a",{parentName:"p",href:"http://www.digi.com/"},"digi")," :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142"},"XBee\xae RF Modules ZNet 2.5 RF Module")," and")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/xbee%C3%82%C2%AE-rf-modules-znet-25-1-mw-chip-antenna-p-226.html?cPath=139_142"},"XBee\xae Pro Series 2 RF module"),"."))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/xbee-pro-series2-rf-module-p-418.html?cPath=139_142"},"XBee\xae RF Modules ZNet 2.5 RF Module")," modules are ",(0,a.kt)("strong",{parentName:"p"},"Series 2")," hardware which comes with ",(0,a.kt)("strong",{parentName:"p"},"ZNet 2.5 firmware"),"."),(0,a.kt)("p",null,"In this tutorial we are going to use ",(0,a.kt)("strong",{parentName:"p"},"XBee ZB firmware")," on a ",(0,a.kt)("strong",{parentName:"p"},"XBee Znet 2.5 Module"),". ",(0,a.kt)("strong",{parentName:"p"},"XBee ZNet 2.5 Module")," modules can be upgraded to ",(0,a.kt)("strong",{parentName:"p"},"XBee ZB")," firmware by following the procedure listed at ",(0,a.kt)("a",{parentName:"p",href:"http://www.digi.com/support/kbase/kbaseresultdetl.jsp?id=3025"},"Converting a XBee/XBee-PRO ZNet 2.5 Module to a ZB Module"),". This procedure is also illustrated in the next section."),(0,a.kt)("h2",{id:"xbee-zb-hardware-and-pin-layout"},"XBee ZB Hardware and Pin Layout"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"XBee ZB module is available with a chip antenna.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/images/product/xbee2.jpg"},"https://www.seeedstudio.com/depot/images/product/xbee2.jpg")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Pins of XBee ZB module are shown below.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_PinOut.jpeg",alt:null})),(0,a.kt)("h2",{id:"upgrading-xbee-firmware-with-uartsbee_v31-or-grove---xbee-carrier"},"Upgrading XBee firmware with UartSBee_V3.1 or Grove - XBee Carrier"),(0,a.kt)("h3",{id:"installing-drivers-for-usb-to-serial-port"},"Installing drivers for USB-to-Serial Port"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," **XBee ZB** connected to UartSBee_V3.1 for configuration"),(0,a.kt)("th",null," **XBee ZB** connected to Grove - XBee Carrier for configuration")),(0,a.kt)("tr",null,(0,a.kt)("td",null," ![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_UartSBee.jpg)"),(0,a.kt)("td",null," ![](https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_Stem-XBee-Carrier.jpg)"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the necessary driver for ",(0,a.kt)("strong",{parentName:"li"},"FT232RL")," chip by following the below steps :")),(0,a.kt)("h4",{id:"windows"},(0,a.kt)("strong",{parentName:"h4"},"Windows")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In Windows OS, the first time you plug in the device (UartSBee or Grove -XBee Carrier), you might be asked for the driver.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Detected_Windows.JPG",alt:null})),(0,a.kt)("p",null,"Download and install the ",(0,a.kt)("strong",{parentName:"p"},"Virtual COM port")," driver from FTDI website :"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.ftdichip.com/Drivers/VCP.htm"},"https://www.ftdichip.com/Drivers/VCP.htm")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'A wizard opens for installing the driver. Choose "Install from a list or specific location"')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_1.JPG",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose the downloaded driver path")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.JPG",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'If you have downloaded unsigned driver, the following Window appears. Just click "Continue Anyway"')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_2.1.JPG",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"UartSBee")," driver is successfully installed. Windows assigns a ",(0,a.kt)("strong",{parentName:"li"},"COM")," port name to ",(0,a.kt)("strong",{parentName:"li"},"FT232RL")," like ",(0,a.kt)("strong",{parentName:"li"},"COM10"),", ",(0,a.kt)("strong",{parentName:"li"},"COM11"),' etc... Please check the exact name in Device Manager.  In this case "',(0,a.kt)("strong",{parentName:"li"},"COM16"),'" is assigned for UartSBee')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/UartSbee_Driver_install_3.JPG",alt:null})),(0,a.kt)("h5",{id:"gnulinux"},(0,a.kt)("strong",{parentName:"h5"},"GNU/Linux")),(0,a.kt)("p",null,"All modern ",(0,a.kt)("strong",{parentName:"p"},"GNU/Linux OS")," comes with FT232RL drivers. To check if UartSBee or Grove -XBee Carrier is detected, Issue a ",(0,a.kt)("strong",{parentName:"p"},"lsusb")," command. An output similar to below should appear."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Lsub.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GNU/Linux")," assigns ",(0,a.kt)("strong",{parentName:"p"},"/dev/ttyUSB0"),", ",(0,a.kt)("strong",{parentName:"p"},"/dev/ttyUSB1")," etc... as device name."),(0,a.kt)("h3",{id:"using-digis-x-ctu-xctu-software"},"Using Digi's X-CTU (XCTU) Software"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"X-CTU")," is ",(0,a.kt)("strong",{parentName:"p"},"X"),"Bee ",(0,a.kt)("strong",{parentName:"p"},"C"),"onfiguration and ",(0,a.kt)("strong",{parentName:"p"},"T"),"est ",(0,a.kt)("strong",{parentName:"p"},"U"),"tility. It is primarily used for configuring ",(0,a.kt)("strong",{parentName:"p"},"XBee Modules")," from ",(0,a.kt)("strong",{parentName:"p"},"Digi")," and also to upgrade the onboard MCU firmware. It comes with a ",(0,a.kt)("strong",{parentName:"p"},"Serial-Terminal")," to interact with XBee modem using ",(0,a.kt)("strong",{parentName:"p"},"AT")," commands. X-CTU is a Windows application. But, it is known to work under GNU/Linux using ",(0,a.kt)("a",{parentName:"p",href:"http://www.winehq.org/"},"Wine "),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download X-CTU from ",(0,a.kt)("a",{parentName:"p",href:"http://www.digi.com/support/productdetl.jsp?pid=3352&osvid=57&s=316&tp=5&tp2=0"},"Digi's X-CTU Page"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install X-CTU.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open X-CTU --",">"," PC Settings Tab.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select USB Serial Port (which is connected to UartSBee / Grove - XBee Carrier).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click Test / Query Button"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU1.jpeg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A dialog box shows the ",(0,a.kt)("strong",{parentName:"p"},"Modem Type"),", ",(0,a.kt)("strong",{parentName:"p"},"Modem firmware Version")," and ",(0,a.kt)("strong",{parentName:"p"},"Serial Number"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In this case, XBee ZNet 2.5 modem is displayed as ",(0,a.kt)("strong",{parentName:"p"},"XB24-B"),". This has to be upgraded to ",(0,a.kt)("strong",{parentName:"p"},"XB24-ZB")," firmware.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open Modem Configuration Tab.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click Download New Versions button."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_Update_Firmware.jpeg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This opens the following dialog box :")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Sources.jpeg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click Web button. This downloads all devices firmware from digi's server.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once, latest firmwares are downloaded an update summary is displayed. This indicates that update happened without any issue. If you do not get this dialog box, repeat the above steps."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU-Update_Summary.jpeg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open Modem Configuration Tab.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click Modem Parameters and Firmware --",">"," Read button."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZNet2.5_firmware_detected.jpeg",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"XBee ZNet 2.5 firmware XB24-B is detected and all its configured parameters are shown.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It also shows the firmware ",(0,a.kt)("strong",{parentName:"p"},"Function Set")," as ",(0,a.kt)("strong",{parentName:"p"},"ZIGBEE ROUTER/END DEVICE AT")," and version as ",(0,a.kt)("strong",{parentName:"p"},"1220"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Function Set")," decides which firmware is already programmed / to be programmed to XBee Module. Series 2 devices can be used in many different modes(",(0,a.kt)("strong",{parentName:"p"},"ZC or ZR, ZED"),"). We have to choose the appropriate firmware function set.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now, Update the firmware to ",(0,a.kt)("strong",{parentName:"p"},"XB24-ZB"),". (",(0,a.kt)("font",{color:"redorange"},"Please note, we are not using ",(0,a.kt)("strong",{parentName:"p"},"XB24-B")," firmware, we are using a different firmware set compatible with XBee ZNet 2.5 Module Hardware"),")")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select Modem:XBEE as ",(0,a.kt)("strong",{parentName:"p"},"XB24-ZB"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select Function Set as ",(0,a.kt)("strong",{parentName:"p"},"ZIGBEE COORDINATOR AT"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Note: ",(0,a.kt)("strong",{parentName:"li"},"ZIGBEE COORDINATOR AT")," is one function set that we will use in the next section. You can choose any function set which is suitable for you application."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Select the latest version of firmware. At the time of writing this guide, it is ",(0,a.kt)("strong",{parentName:"p"},"208C"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click Write button. This permanently writes the firmware to XBee module."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/X-CTU_ZB_Firmware_Upgrade.jpeg",alt:null})),(0,a.kt)("h2",{id:"wireless-uart-demo-using-xbee-zb-modules-and-pc"},"Wireless UART demo using XBee ZB modules and PC"),(0,a.kt)("p",null,"This demo configures two XBee modules to connect to each other automatically upon power-up and continuously trans-receive data. This setup can be used as a Wireless UART to connect any two PCs or two MCUs with serial ports."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect these modules to PCs Serial port and make sure the drivers are installed.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open X-CTU, select the USB-Serial Ports of the device as shown below :"))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_1.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Program one module with ",(0,a.kt)("strong",{parentName:"p"},"COORDINATOR AT")," function-set firmware and another module with ",(0,a.kt)("strong",{parentName:"p"},"ROUTER AT")," function-set firmware. Always use the latest version of firmware. See the above section on how-to program firmware.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now, Open Modem Configuration Tab and configure the destination addresses of both the modules as follows:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the destination address high of COORDINATOR to serial number high of ROUTER."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the destination address low of COORDINATOR to serial number low of ROUTER.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the destination address high of ROUTER to serial number high of COORDINATOR.")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the destination address low of ROUTER to serial number low of COORDINATOR."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Write these parameters to the modules."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PAN ID was not modified during parameters configuration. It was left to 0, as there is only one Zigbee network in the vicinity. You might want to change these PAN IDs (of both the modules) to a 16bit number."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_2.png",alt:null})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open the Terminal Tabs for both the modules and click the Show Hex buttons.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Type a message in COORDINATOR terminal and it will be sent to ROUTER via wireless. Similarly, any text typed in ROUTER terminal is sent to COORDINATOR terminal."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/XBee_ZB_Wireless-Serial-Port_3.png",alt:null})),(0,a.kt)("h2",{id:"wireless-uart-demo-using-xbee-zb-modules-and-arduinos"},"Wireless UART demo using XBee ZB modules and Arduinos"),(0,a.kt)("h2",{id:"wireless-sensor-networkswsn-demo-with-xbee-zb-modules"},"Wireless Sensor Networks(WSN) demo with XBee ZB modules"),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wikipedia Zigbee Page - ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ZigBee#Device_types"},"Device types ")," (CC-BY-SA)")),(0,a.kt)("h2",{id:"related-projects"},"Related Projects"),(0,a.kt)("p",null,"If you want to make some awesome projects by XBee, here's some projects for reference."),(0,a.kt)("h3",{id:"hummingbird"},"Hummingbird"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot.JPG",alt:null})),(0,a.kt)("p",null,"This project uses a zigbee mesh and GPRS SIM900 card to communicate to a server. The server conducts an analysis on the data and provides the user with real time information as well as forecasting."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/265-hummingbird.html"},(0,a.kt)("font",{color:"#FF0000"},(0,a.kt)("strong",{parentName:"a"},"I want to make it.")))),(0,a.kt)("h3",{id:"hot-water-solar-boiler-project"},"Hot Water Solar Boiler Project"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Zigbee_Networking_with_XBee_Series_2_and_Seeeds_Products/img/Xbee_iot1.JPG",alt:null})),(0,a.kt)("p",null,"A solar boiler is great because it gives you hot water using free-sun-energy, but what if there is not enough sun or someone already used all the hot water ? This project helps you take the right decision. It warns you when you run out of hot water and allows you to turn on the electric heating. It also let you know when you can take a bath or shower !"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/168-hot-water-solar-boiler-project.html"},(0,a.kt)("font",{color:"#FF0000"},(0,a.kt)("strong",{parentName:"a"},"I want to make it.")))),(0,a.kt)("h3",{id:"share-your-awesome-projects-with-us"},"Share Your Awesome Projects with Us"),(0,a.kt)("p",null,"Born with the spirit of making and sharing, that is what we believe makes a maker."),(0,a.kt)("p",null,"And only because of this , the open source community can be as prosperous as it is today."),(0,a.kt)("p",null,"It does not matter what you are and what you have made, hacker, maker, artist and engineers,"),(0,a.kt)("p",null,"as long as you start sharing your works with others,"),(0,a.kt)("p",null,"you are being part of the open source community and you are making your contributions ."),(0,a.kt)("p",null,"Now share you awesome projects on with us on ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe"),", and win a chance to become the Core User of Seeed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Core Users, are those who showing high interests and significant contributions in Seeed products."),(0,a.kt)("li",{parentName:"ul"},"We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improving the product performance and user experience. And for most of cases if our Core Users have any good ideas for making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.")),(0,a.kt)("font",{color:"#FF0000"},"Get more information about Core User please email to: recipe@seeed.cc"),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
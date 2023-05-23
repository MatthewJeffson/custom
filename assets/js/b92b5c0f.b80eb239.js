"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[81581],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(a),k=n,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||l;return a?r.createElement(c,i(i({ref:t},m),{},{components:a})):r.createElement(c,i({ref:t},m))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},73738:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={description:"Air602_WiFi_Development_Board",title:"Air602 WiFi Development Board",keywords:["Air602_WiFi_Development_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Air602_WiFi_Development_Board",last_update:{date:"01/20/2023",author:"Matthew"}},i=void 0,o={unversionedId:"Seeed_Elderly/Air_Serial/Air602_WiFi_Development_Board",id:"Seeed_Elderly/Air_Serial/Air602_WiFi_Development_Board",title:"Air602 WiFi Development Board",description:"Air602_WiFi_Development_Board",source:"@site/docs/Seeed_Elderly/Air_Serial/Air602_WiFi_Development_Board.md",sourceDirName:"Seeed_Elderly/Air_Serial",slug:"/Air602_WiFi_Development_Board",permalink:"/custom/Air602_WiFi_Development_Board",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Air_Serial/Air602_WiFi_Development_Board.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1674172800,formattedLastUpdatedAt:"Jan 20, 2023",frontMatter:{description:"Air602_WiFi_Development_Board",title:"Air602 WiFi Development Board",keywords:["Air602_WiFi_Development_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Air602_WiFi_Development_Board",last_update:{date:"01/20/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"How to Build a Home Soft Router and NAS with ReComputer",permalink:"/custom/How-to-build-a-home-soft-router-and-NAS-With-ReComputer"},next:{title:"Air602 Firmware Programming Manual",permalink:"/custom/Air602_Firmware_Programming_Manual"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical Applications",id:"typical-applications",level:2},{value:"Pin Out",id:"pin-out",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Create a SoftAP process",id:"create-a-softap-process",level:3},{value:"Scan AP Process",id:"scan-ap-process",level:3},{value:"STA joins the AP process",id:"sta-joins-the-ap-process",level:3},{value:"Create an APSTA process",id:"create-an-apsta-process",level:3},{value:"Firmware Programming",id:"firmware-programming",level:2},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resouce",id:"resouce",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:s};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/main.jpg",alt:"picture"})),(0,n.kt)("p",null,"This wiki works for both Air602 WiFi Development Board and Air602 WiFi Module."),(0,n.kt)("p",null,"The Air602 is a 2.4G Wi-Fi module based on the embedded Wi-Fi SoC chip (W600) with a  12-pin Stamp Hole Expansion Interface. Miracly, it is even smaller than a stamp. It's only 12mm*10mm, small but complete, it offers a rich interface and complete functionality. This module support IEEE802.11b/g/n and AT command."),(0,n.kt)("p",null,"The Air602 WiFi Development Board is based on Air602 Wi-Fi module and integrated USB interface and Antenna. If you plug this board into your computer, it will be recognized as an Ports (COM & LPT), so that you can code it with Serial port tool. This module support IEEE802.11b/g/n and AT command."),(0,n.kt)("a",{href:"https://www.seeedstudio.com/Air602-WiFi-Module-p-3139.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"})),(0,n.kt)("a",{href:"https://www.seeedstudio.com/Air602-WiFi-Development-Board-p-3140.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"})),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Interface")),(0,n.kt)("p",null,"\u2022 USB interface"),(0,n.kt)("p",null,"\u2022 UART/SPI"),(0,n.kt)("p",null,"\u2022 Integrated GPIO device controller"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Wireless")),(0,n.kt)("p",null,"\u2022 Support IEEE802.11 b/g/e/i/d/k/r/s/w/n"),(0,n.kt)("p",null,"\u2022 Support 2.4~2.4835 GHz"),(0,n.kt)("p",null,"\u2022 Support Wi-Fi WMM/WMM-PS/WPA/WPA2/WPS"),(0,n.kt)("p",null,"\u2022 Support Wi-Fi Direct"),(0,n.kt)("p",null,"\u2022 STBC\u3001GreenField\u3001Short-GI"),(0,n.kt)("p",null,"\u2022 Support multiple network protocols: TCP/UDP/ICMP/DHCP/DNS/HTTP"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Others")),(0,n.kt)("p",null,"\u2022 Supports AT+ instruction protocol based on ASCII encoding (UART interface)"),(0,n.kt)("p",null,"\u2022 Support for user\u2010programmable GPIO control"),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Category"),(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Wireless"),(0,n.kt)("td",{parentName:"tr",align:null},"Support Wi\u2010Fi  Mode"),(0,n.kt)("td",{parentName:"tr",align:null},"IEEE802.11b/g/n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"RF system impedance"),(0,n.kt)("td",{parentName:"tr",align:null},"50\u03a9")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency Range"),(0,n.kt)("td",{parentName:"tr",align:null},"2.4~2.4835 GHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Receiving sensitivity"),(0,n.kt)("td",{parentName:"tr",align:null},"20MHz MCS7@\u201071dBm;",(0,n.kt)("br",null),"40MHz MCS7@\u201068dBm;",(0,n.kt)("br",null),"54Mbps@\u201073dBm;",(0,n.kt)("br",null),"11Mbps@\u201086dBm;",(0,n.kt)("br",null),"1Mbps@\u201095dBm;")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Physical layer data rate"),(0,n.kt)("td",{parentName:"tr",align:null},"802.11n MCS 0~7   150Mbps")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Modulation"),(0,n.kt)("td",{parentName:"tr",align:null},"DSSS\u3001OFDM\u3001DBPSK\u3001DQPSK\u3001CCK\u3001QAM16/64")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Output Power"),(0,n.kt)("td",{parentName:"tr",align:null},"IEEE802.11b, DSSS 1Mbps, POUT = +17dBm;",(0,n.kt)("br",null),"IEEE802.11g, OFDM 54Mbps, POUT = +10dBm;",(0,n.kt)("br",null),"IEEE802.11n, OFDM MCS7, POUT = +10dBm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Hardware"),(0,n.kt)("td",{parentName:"tr",align:null},"Interface Type"),(0,n.kt)("td",{parentName:"tr",align:null},"UART/SPI/GPIO")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Interface rate"),(0,n.kt)("td",{parentName:"tr",align:null},"2Mbps@UART (Max) ",(0,n.kt)("br",null),"50Mbps@SPI (Max)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V(Module)/5V(Development Board)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Operating humidity"),(0,n.kt)("td",{parentName:"tr",align:null},"5%~90% (No condensation)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"storage temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"\u201040~+125 \u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Operating temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"\u201040~+85\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Software"),(0,n.kt)("td",{parentName:"tr",align:null},"Network Type"),(0,n.kt)("td",{parentName:"tr",align:null},"STA/AP/AP+STA/Wi\u2010Fi Direct")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Verification"),(0,n.kt)("td",{parentName:"tr",align:null},"WEP/WPA\u2010PSK/WPA2\u2010PSK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Encryption"),(0,n.kt)("td",{parentName:"tr",align:null},"WEP64/WEP128/TKIP/CCMP(AES)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"WPS  Function"),(0,n.kt)("td",{parentName:"tr",align:null},"WPS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Energy saving"),(0,n.kt)("td",{parentName:"tr",align:null},"PS\u2010POLL/Standby")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Network protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"TCP/UDP/ARP/ICMP/DHCP/DNS/HTTP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Interface Protocol"),(0,n.kt)("td",{parentName:"tr",align:null},"AT+ instruction set")))),(0,n.kt)("h2",{id:"typical-applications"},"Typical Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"intelligent home appliances"),(0,n.kt)("li",{parentName:"ul"},"smart home"),(0,n.kt)("li",{parentName:"ul"},"wireless audio and video"),(0,n.kt)("li",{parentName:"ul"},"smart toys"),(0,n.kt)("li",{parentName:"ul"},"medical monitoring"),(0,n.kt)("li",{parentName:"ul"},"industrial control"),(0,n.kt)("li",{parentName:"ul"},"other Internet of Things applications")),(0,n.kt)("h2",{id:"pin-out"},"Pin Out"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_table.jpg",alt:null}),"\n",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Bazaar_file/113990576/PIN_MAP_B.jpg",alt:null})),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"For the ",(0,n.kt)("strong",{parentName:"p"},"Air602 WiFi Development Board"),", you can just plug it into you computer, it will be recognized as an Ports (COM & LPT).\nFor the ",(0,n.kt)("strong",{parentName:"p"},"Air602 WiFi Module"),", you need to use USB-to-Serial Tools to connect the RX/TX pins to your computer."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For mac, we found that some version of mac system can not recognize the on-board USB-to-Serial chip CH330N, please check here for solution ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=106&t=8299&sid=aa548f2de0fb26380f50e0b328a49a80"},"Mac os driver issue"))),(0,n.kt)("p",null,"We use the serial port tool ",(0,n.kt)("strong",{parentName:"p"},"sscom")," to send the AT command. You can use your favorite serial port tool, in case you want to use ",(0,n.kt)("strong",{parentName:"p"},"sscom"),", you can download it ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip"},"Here"),"."),(0,n.kt)("p",null,"What ever, please make sure you have checked the option ",(0,n.kt)("strong",{parentName:"p"},"AddCrLf"),", and set the baud rate to ",(0,n.kt)("strong",{parentName:"p"},"115200")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_2.jpg",alt:null})),(0,n.kt)("p",null,"Tap ",(0,n.kt)("strong",{parentName:"p"},"AT+")," then click ",(0,n.kt)("strong",{parentName:"p"},"SEND")," or press ",(0,n.kt)("inlineCode",{parentName:"p"},"enter")," key to to check if the connection was successfully established."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+\n")),(0,n.kt)("p",null,"When it returns ",(0,n.kt)("strong",{parentName:"p"},"+OK"),", you can use the AT command to control this module."),(0,n.kt)("h3",{id:"create-a-softap-process"},"Create a SoftAP process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1- ",(0,n.kt)("strong",{parentName:"li"},"WPRT")," sets the wireless network card working mode to SoftAP:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WPRT=2\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2- ",(0,n.kt)("strong",{parentName:"li"},"APSSID")," Set the AP SSID for the STA, e.g.",(0,n.kt)("em",{parentName:"li"},"MyAP"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APSSID=MyAp\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3- ",(0,n.kt)("strong",{parentName:"li"},"APENCRY")," Set the wireless network card security mode to WEP64:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APENCRY=1\n")),(0,n.kt)("p",null,"Parameter\uff1a"),(0,n.kt)("p",null,"open\uff1a0\uff0cWEP64\uff1a1\uff0cWEP128\uff1a2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4- ",(0,n.kt)("strong",{parentName:"li"},"APKEY")," Set the wireless network card key to ",(0,n.kt)("em",{parentName:"li"},"12345"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APKEY=1,1,12345\n")),(0,n.kt)("p",null,"Parameter 1\uff1aKey format\uff0c 0 means HEX, 1 means ASCII  "),(0,n.kt)("p",null,"Parameter 2\uff1aindex:  Key index number, 1 to 4 are used for WEP encryption keys, and other encryption methods are fixed to 0.  "),(0,n.kt)("p",null,"Parameter 3\uff1awireless key, e.g.\uff1a12345  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5- ",(0,n.kt)("strong",{parentName:"li"},"APNIP")," Set the ip address and subnet mask")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1\n")),(0,n.kt)("p",null,"Parameter 1\uff1aaddress type: 0 means dynamic allocation using DHCP, 1 means static address",(0,n.kt)("br",{parentName:"p"}),"\n","parameter 2\uff1aip:192.168.1.1",(0,n.kt)("br",{parentName:"p"}),"\n","parameter 3\uff1anetmask\uff1a255.255.255.0",(0,n.kt)("br",{parentName:"p"}),"\n","parameter 4\uff1agateway\uff1a192.168.1.1",(0,n.kt)("br",{parentName:"p"}),"\n","parameter 5\uff1adns\uff1a192.168.1.1  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"6- ",(0,n.kt)("strong",{parentName:"li"},"PMTF")," saves the above parameters to spi flash, just start from step 7 with the next boot.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+PMTF\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"7- ",(0,n.kt)("strong",{parentName:"li"},"WJOIN")," Create wireless network ",(0,n.kt)("em",{parentName:"li"},"MyAp"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WJOIN\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"8- ",(0,n.kt)("strong",{parentName:"li"},"SLIST"),"  Query the STA information which connected to your SoftAP.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+SLIST\n")),(0,n.kt)("h3",{id:"scan-ap-process"},"Scan AP Process"),(0,n.kt)("p",null,"Wireless network card scanning AP's AT command is \uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WSCAN\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_3.jpg",alt:null})),(0,n.kt)("p",null,"The last paremeter is the signal strength,  unit db"),(0,n.kt)("h3",{id:"sta-joins-the-ap-process"},"STA joins the AP process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1- ",(0,n.kt)("strong",{parentName:"li"},"WPRT")," Set the working mode to STA")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WPRT=0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2- ",(0,n.kt)("strong",{parentName:"li"},"SSID")," Set the AP name to join. e.g. ",(0,n.kt)("em",{parentName:"li"},"TEST_AP"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+SSID=TEST_AP\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3- ",(0,n.kt)("strong",{parentName:"li"},"KEY")," Set the wireless key of the AP you want to join. e.g. ",(0,n.kt)("em",{parentName:"li"},"12345678"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+KEY=1,0,12345678\n")),(0,n.kt)("p",null,"parameter 1\uff1a0 means HEX, 1 means ASCII"),(0,n.kt)("p",null,"parameter 2\uff1aindex: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0."),(0,n.kt)("p",null,"parameter 3\uff1a Wireless key  e.g.\uff1a12345678"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4- ",(0,n.kt)("strong",{parentName:"li"},"NIP")," Enable DHCP")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+NIP=0\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5- PMTF Save the above parameters to spi flash, Just start from step 6 with the next boot")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+PMTF\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"6- WJOIN Join the wireless network TEST_AP")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WJOIN\n")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/img/AT_4.jpg",alt:null})),(0,n.kt)("h3",{id:"create-an-apsta-process"},"Create an APSTA process"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1- ",(0,n.kt)("strong",{parentName:"li"},"WPRT")," Set the working mode to APSTA")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WPRT=3\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"2- ",(0,n.kt)("strong",{parentName:"li"},"SSID")," Set the AP name to be joined, such as ",(0,n.kt)("em",{parentName:"li"},"TEST_AP"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+SSID=TEST_AP\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"3- ",(0,n.kt)("strong",{parentName:"li"},"KEY")," Set the wireless key of the AP you want to join. e.g. ",(0,n.kt)("em",{parentName:"li"},"12345678"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+KEY=1,0,12345678\n")),(0,n.kt)("p",null,"parameter 1\uff1a0 means HEX, 1 means ASCII"),(0,n.kt)("p",null,"parameter 2\uff1aindex: The key index number, 1 to 4 is used for the WEP encryption key. The other encryption methods are fixed to 0."),(0,n.kt)("p",null,"parameter 3\uff1a Wireless key e.g.\uff1a12345678"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"4- ",(0,n.kt)("strong",{parentName:"li"},"APSSID")," Set the network name of the created SOFTAP")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APSSID=\u201dMYSoftAP\u201d\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"5-  ",(0,n.kt)("strong",{parentName:"li"},"APENCRY")," Set the encryption type of SoftAP (such as WPA2-TKIP)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APENCRY=5\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"6- ",(0,n.kt)("strong",{parentName:"li"},"APKEY"),"  Set the password for SoftAP (e.g. ASCII code 87654321)")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APKEY=1,0,87654321\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"7- ",(0,n.kt)("strong",{parentName:"li"},"APNIP"),"  Set the IP address and subnet mask")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APNIP=1,192.168.1.1,255.255.255.0,192.168.1.1,192.168.1.1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"8- ",(0,n.kt)("strong",{parentName:"li"},"PMTF")," Save the above parameters to spi flash, just start from step 9")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+PMTF\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"9- ",(0,n.kt)("strong",{parentName:"li"},"WJOIN")," Join the wireless network TEST_AP")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WJOIN\n")),(0,n.kt)("h2",{id:"firmware-programming"},"Firmware Programming"),(0,n.kt)("p",null,"For the firmware programming please check here\uff1a"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Air602_Firmware_Programming_Manual"},"Air602 Firmware Programming Manual")),(0,n.kt)("h2",{id:"faq"},"FAQ"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1.How the STA disconnects the AP")),(0,n.kt)("p",null,"A: The wireless network card disconnects the AP's AT command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WLEAV\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q2.SoftAP disconnected")),(0,n.kt)("p",null,"A: The AT command of SoftAP disconnected network is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+WLEAV=2\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q3.How STA view current status")),(0,n.kt)("p",null,"A: The AT command for the wireless network card to view the status of the current network card is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+LKSTT\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q4. How to View current SoftAP status")),(0,n.kt)("p",null,"A: The AT command to view the current SoftAP status is:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C"},"AT+APLKSTT\n")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resouce"},"Resouce"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20AT%20Command%20User%20Manual.pdf"},"Air602 AT Command User Manual"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/Air602%20Hardware%20Design%20Manual.pdf"},"Air602 Hardware Design Manual"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Air602_WiFi_Module/res/AIR602_lbr.zip"},"AIR602_lbr for eagle"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-6-Axis_Accelerometer-Gyroscope-BMI088/res/sscom51.zip"},"sscom")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
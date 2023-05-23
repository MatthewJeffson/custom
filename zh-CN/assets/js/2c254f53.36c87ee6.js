"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13940],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return r?a.createElement(k,o(o({ref:t},u),{},{components:r})):a.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,o=new Array(n);o[0]=c;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var l=2;l<n;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},37741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>p,toc:()=>l});var a=r(87462),i=(r(67294),r(3905));const n={description:"Raspberry Pi 3 Model B",title:"Raspberry Pi 3 Model B",keywords:["Raspberry_Pi","Official_Raspberry_Pi_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_Pi_3_Model_B",last_update:{date:"2/15/2023",author:"jianjing Huang"}},o=void 0,p={unversionedId:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/Raspberry_Pi_3_Model_B",id:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/Raspberry_Pi_3_Model_B",title:"Raspberry Pi 3 Model B",description:"Raspberry Pi 3 Model B",source:"@site/docs/Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/Raspberry_Pi_3_Model_B.md",sourceDirName:"Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board",slug:"/Raspberry_Pi_3_Model_B",permalink:"/custom/zh-CN/Raspberry_Pi_3_Model_B",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Official_Raspberry_Pi_Board/Raspberry_Pi_3_Model_B.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676419200,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"Raspberry Pi 3 Model B",title:"Raspberry Pi 3 Model B",keywords:["Raspberry_Pi","Official_Raspberry_Pi_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Raspberry_Pi_3_Model_B",last_update:{date:"2/15/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Raspberry Pi Introduction",permalink:"/custom/zh-CN/Raspberry_Pi"},next:{title:"Remotely connect to Raspberry Pi",permalink:"/custom/zh-CN/remote_connect"}},s={},l=[{value:"GETTING STARTED",id:"getting-started",level:2},{value:"Requirement",id:"requirement",level:3},{value:"Boot from SD card",id:"boot-from-sd-card",level:3},{value:"How to burn a Raspberry Pi OS",id:"how-to-burn-a-raspberry-pi-os",level:4},{value:"Basic Configuration",id:"basic-configuration",level:4},{value:"UART enable",id:"uart-enable",level:2},{value:"Use with GrovePi",id:"use-with-grovepi",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raspberry Pi\xae")," is an ",(0,i.kt)("strong",{parentName:"p"},"ARM")," based credit card sized ",(0,i.kt)("strong",{parentName:"p"},"SBC"),"(Single Board Computer) created by ",(0,i.kt)("a",{parentName:"p",href:"http://www.raspberrypi.org"},"Raspberry Pi Foundation"),". Raspberry Pi runs Debian based ",(0,i.kt)("strong",{parentName:"p"},"GNU/Linux")," operating system ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/downloads/raspberry-pi-os/"},"Raspberry Pi OS")," and ports of many other OSes exist for this SBC."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rpi4.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"getting-started"},"GETTING STARTED"),(0,i.kt)("h3",{id:"requirement"},"Requirement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},"Raspberry Pi 4"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B--p-3037.html"},"3B+"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"3B"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-Compute-Module-3-p-2848.html"},"3"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-p-3216.html"},"3A+"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-2-Model-B-w-ARMv7-Quad-Core-1GB-RAM-p-2289.html"},"2B"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-Model-B-p-1634.html"},"B"),"/",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Raspberry-Pi-Zero-p-4254.html"},"Zero")),(0,i.kt)("li",{parentName:"ul"},"Wi-Fi network/Mobile hotspot"),(0,i.kt)("li",{parentName:"ul"},"4GB (or larger) SD card and SD reader"),(0,i.kt)("li",{parentName:"ul"},"PC or Mac"),(0,i.kt)("li",{parentName:"ul"},"5V 3A USB adapter for power supply (optional)  "),(0,i.kt)("li",{parentName:"ul"},"One usb-c data cable(we use Pi 4 as an example)")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please insert the USB cable gently, otherwise the interface may be damaged. Please use the USB cable with 4 internal cables. The USB cable with 2 internal cables cannot transfer data. If you are not sure about your line, you can buy it ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here"),".")),(0,i.kt)("h3",{id:"boot-from-sd-card"},"Boot from SD card"),(0,i.kt)("h4",{id:"how-to-burn-a-raspberry-pi-os"},"How to burn a Raspberry Pi OS"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1. Raspberry Pi OS Stretch download")),(0,i.kt)("p",null,"Download ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/downloads/raspberry-pi-os/"},"Raspberry Pi OS")," from Raspberry Pi official website and select \u201cwith desktop and recommended software\u201d version."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/rspberrypios.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2. Etcher")),(0,i.kt)("p",null,"Click to download ",(0,i.kt)("a",{href:"https://etcher.io/"},"Etcher")," here, and burn the ",(0,i.kt)("inlineCode",{parentName:"p"},"*.img.xz")," file directly to your SD card with Etcher. Or unzip the ",(0,i.kt)("inlineCode",{parentName:"p"},"*.img.xz")," file to a ",(0,i.kt)("inlineCode",{parentName:"p"},"*.img")," file, then burn it to SD card with other image writing tools."),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click the Plus icon to add the image you just download, the software will automatically select the SD card you plug.Then click Flash! to start burning. It will take about 10 minutes to finish."),(0,i.kt)("li",{parentName:"ul"},"Exit the imager and eject the SD card."),(0,i.kt)("li",{parentName:"ul"},"After writing the image to the SD card, insert the SD card into raspberry PI. Use the USB adapter and usb-c interface to power it. Do not remove the SD card during the writing process. Raspberry PI will start from SD card.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Raspberry_Pi_3_Model_B/img/etcher.png",alt:null})),(0,i.kt)("h4",{id:"basic-configuration"},"Basic Configuration"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Wireless connection and SSH")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1."),' Create a file called "wpa_supplicant.conf" into the /boot folder, and copy the following code.'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'country=CN\nctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev\nupdate_config=1\n \nnetwork={\nssid="WiFi-name"\npsk="WiFi-password"\nkey_mgmt=WPA-PSK\npriority=1\n}\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The Wi-Fi name and password should be the same as your local Wi-Fi which your PC connected to(make sure your PC and Raspberry Pi are in the same LAN).")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2."),' Create a blank file called "ssh" into the /boot folder.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," Insert the SD Card with Raspberry Pi OS into the Raspberry Pi."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/sd_card.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"4.")," Connect the Raspberry Pi to the power source and power it up."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/power.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"5.")," Open putty to connect PC to Raspberry Pi."),(0,i.kt)("p",null,"Download putty\uff1a ",(0,i.kt)("a",{parentName:"p",href:"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html"},"https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss3.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raspberry Pi"),"\nDefault username : pi\nDefault password : raspberry"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss4.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"VNC Configuration")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," Open raspi-config by typing following command in terminal."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo raspi-config\n")),(0,i.kt)("p",null,'Arrow down to 5 interfacing Options and press "enter" to select.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss5.png",alt:null})),(0,i.kt)("p",null,'Arrow down to P3 VNC and press "enter" to select.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss6.png",alt:null})),(0,i.kt)("p",null,'Select "Yes" to enable it.'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss7.png",alt:null})),(0,i.kt)("p",null,'Select "Ok".'),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss8.png",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2.")," Install VNC Viewer"),(0,i.kt)("p",null,"Downloadr ",(0,i.kt)("a",{parentName:"p",href:"https://www.realvnc.com/en/connect/download/viewer/"},"VNC Viewer")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss9.png",alt:null})),(0,i.kt)("p",null,"Open VNC Viewer and enter the IP address of Raspberry Pi. You can find the IP address by typing ",(0,i.kt)("inlineCode",{parentName:"p"},"ifconfig")," command in the terminal of Raspberry Pi (or you can enter raspberrypi.local)."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you use raspberrypi.local to login your Pi, you should make sure there is only one Raspberry Pi in use in your LAN.")),(0,i.kt)("p",null,"Enter the default user name and password, and now you can enter the Raspberry Pi's remote desktop!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss10.png",alt:null})),(0,i.kt)("p",null,"Success\uff01"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Beginner_Kit_for_RaspberryPi/img/ss11.PNG",alt:null})),(0,i.kt)("h2",{id:"uart-enable"},"UART enable"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"enable miniuart-bt")),(0,i.kt)("h2",{id:"use-with-grovepi"},"Use with GrovePi"),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/"},"Grove Base Hat for Raspberry Pi wiki"),"."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
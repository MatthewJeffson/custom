"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var l=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,l,i=function(e,t){if(null==e)return{};var r,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)r=o[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=l.createContext({}),p=function(e){var t=l.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=p(r),c=i,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||o;return r?l.createElement(k,n(n({ref:t},s),{},{components:r})):l.createElement(k,n({ref:t},s))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,n=new Array(o);n[0]=c;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:i,n[1]=a;for(var p=2;p<o;p++)n[p]=r[p];return l.createElement.apply(null,n)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},44510:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>n,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var l=r(87462),i=(r(67294),r(3905));const o={description:"4WD Driver Platform V1.0",title:"4WD Driver Platform V1.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4WD_Driver_Platform_V1.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,a={unversionedId:"Seeed_Elderly/Discrete Product/4WD_Driver_Platform_V1.0",id:"Seeed_Elderly/Discrete Product/4WD_Driver_Platform_V1.0",title:"4WD Driver Platform V1.0",description:"4WD Driver Platform V1.0",source:"@site/docs/Seeed_Elderly/Discrete Product/4WD_Driver_Platform_V1.0.md",sourceDirName:"Seeed_Elderly/Discrete Product",slug:"/4WD_Driver_Platform_V1.0",permalink:"/zh-CN/4WD_Driver_Platform_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Discrete Product/4WD_Driver_Platform_V1.0.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"4WD Driver Platform V1.0",title:"4WD Driver Platform V1.0",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4WD_Driver_Platform_V1.0",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Stepper Motor Driver v2.3",permalink:"/zh-CN/Stepper_Motor_Driver_v2.3"},next:{title:"4WD Mecanum Wheel Robot Kit Series",permalink:"/zh-CN/4WD_Mecanum_Wheel_Robot_Kit_Series"}},u={},p=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Application ideas",id:"application-ideas",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Get started",id:"get-started",level:2},{value:"Assemble Edison on 4WD Driver board",id:"assemble-edison-on-4wd-driver-board",level:3},{value:"Demo",id:"demo",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:p};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_1200.jpg",alt:null})),(0,i.kt)("p",null,"4WD Driver Platform V1.0 (No Intel Edison chip included) is a motor driver board which support 4-wheel driving with bidirectional and full control to each motor. The most important features of this drive board is it expandability achieved by grove interfaces which can enable your project more versatile. It also get detailed and simple SDK (software development kit) which will make you development process quicker and easier. With Edison installed, you can build a powerful system to satisfy your different needs."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/4WD-Driver-Platform-V1.0-p-2536.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support USB to device UART bridge"),(0,i.kt)("li",{parentName:"ul"},"Support OTG(On The Go)"),(0,i.kt)("li",{parentName:"ul"},"Support SPI program port"),(0,i.kt)("li",{parentName:"ul"},"Support Grove Interface: UART port",(0,i.kt)("em",{parentName:"li"}," 1, I2C port "),"3"),(0,i.kt)("li",{parentName:"ul"},"Support 4 wheel encoder motor driving with bidirectional(Peak Current: 3A)"),(0,i.kt)("li",{parentName:"ul"},"Support overcurrent, over loading and short circuit protection function."),(0,i.kt)("li",{parentName:"ul"},"Detailed and simple SDK"),(0,i.kt)("li",{parentName:"ul"},"Designed for Intel Edison platform.")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null," Basic parameters")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Input voltage "),(0,i.kt)("td",null," 6-16V")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Output voltage "),(0,i.kt)("td",null," 5V/4V/3.3V/1.8V")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Idle Current "),(0,i.kt)("td",null," Less than150mA")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Dimensions "),(0,i.kt)("td",null," 130*110mm")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Motor Driver")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Driver chip "),(0,i.kt)("td",null," MC33931(Freescale) * 4, independent")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Input voltage "),(0,i.kt)("td",null," 5-30V")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Output current"),(0,i.kt)("td",null," 3A(MAX)")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Protection"),(0,i.kt)("td",null," Auto-cutting output for over temperature, low-voltage and short circuit occurrences")),(0,i.kt)("tr",null,(0,i.kt)("td",null," Expandability")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"I2C interface "),(0,i.kt)("td",null," 3")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"SPI interface "),(0,i.kt)("td",null," 1")),(0,i.kt)("tr",null,(0,i.kt)("td",null," UART interface "),(0,i.kt)("td",null," 2")),(0,i.kt)("tr",null,(0,i.kt)("td",null," USB OTG interface "),(0,i.kt)("td",null," 1")))),(0,i.kt)("h2",{id:"application-ideas"},"Application ideas"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Various kinds of robots")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Motor driver")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Toy car")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Industrial Control"))),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/4WD_Driver_Platform_V1.0_3400_Modules.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that only 3.3 V voltage is valid to apply on ALL motor interfaces and grove modules.")),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"This section only shows you how to build basic development environment.\n")),(0,i.kt)("p",{parentName:"admonition"},"You can build a development environment for your project with following guides:")),(0,i.kt)("h3",{id:"assemble-edison-on-4wd-driver-board"},"Assemble Edison on 4WD Driver board"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Material required")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"4WD Driver Platform V1.0 *1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Intel Edison *1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 Micro B to Type A USB cables"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Software work *")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://downloadmirror.intel.com/25028/eng/iotdk_win_installer.exe"},"Download Intel integrated tool pack(installed together with Driver)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"http://downloads.arduino.cc/arduino-1.6.5-r5-windows.exe"},"Download Arduino IDE if you develop your projects on Arduino board")))),(0,i.kt)("p",null,"Rule of thumb: We recommend you only select drivers and flash tool to be installed for the first if you connection speed to Intel server is not fast enough. Downloading other tools separately will be much quicker."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"4WD Driver Platform V1.0 is not supported for Windows 10 at the moment.\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Check your IDE ")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html"},"Download a putty for serical communication")),(0,i.kt)("p",null,"1.Open device manager."),(0,i.kt)("p",null,"2.Find USB serial port. Under Ports(COM ","&"," LPT), find ",(0,i.kt)("em",{parentName:"p"},"USB Serial Port(COMx)"),"(Example: USB Serial Port(COM3))"),(0,i.kt)("p",null,"3.Startup putty to and configure it as follow figure shows(marked with red rectangle)"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_config.jpg",alt:null}),"putty configurations"),(0,i.kt)("p",null,"4.Click Open to enter serial terminal"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/img/Putty_login.png",alt:null})),(0,i.kt)("p",null,"putty login"),(0,i.kt)("p",null,"5.Press Enter key to input user name and password to login to system in Edison."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"- No password exist if it is the first time you use you Edison chip.\n-  You can flash the latest firmware image to Edison with Intel Flash Tool.\n"))),(0,i.kt)("p",null,"6.Now your IDE is well installed."),(0,i.kt)("h2",{id:"demo"},"Demo"),(0,i.kt)("hr",null),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"- This section will show you a demo which implemented some simple functions.\n- make sure you have built a development environment successful by former sections and we assume you have got basic knowledge for Arduino platform.\n"))),(0,i.kt)("p",null,"You can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Edison_4WD_Auto_Robotic_Platform_2.0/"},"Edison 4WD Auto Robotic Platform 2.0")," for a practical application with 4WD Driver Platform V1.0."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/4WD_Driver_Platform_V1.0/res/4WD_Auto_Robotic_Platform_V1.0_SCHAndPCB.zip"},"Schematic files"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/Pillar1989/webrobot/blob/master/motor.py"},"Git library(SDK) files")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||l;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5717:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={description:"Getting Started with Allxon on NVIDIA\xae Jetson",title:"Getting Started with Allxon on NVIDIA\xae Jetson Devices",keywords:["Sorftware Allxon"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Allxon-Jetson-Getting-Started",last_update:{date:"1/13/2023",author:"jianjing Huang"}},o="Getting Started with Allxon on NVIDIA\xae Jetson Devices",i={unversionedId:"Edge/reComputer/Software/Allxon-Jetson-Getting-Started",id:"Edge/reComputer/Software/Allxon-Jetson-Getting-Started",title:"Getting Started with Allxon on NVIDIA\xae Jetson Devices",description:"Getting Started with Allxon on NVIDIA\xae Jetson",source:"@site/docs/Edge/reComputer/Software/Allxon-Jetson-Getting-Started.md",sourceDirName:"Edge/reComputer/Software",slug:"/Allxon-Jetson-Getting-Started",permalink:"/zh-CN/Allxon-Jetson-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Software/Allxon-Jetson-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Getting Started with Allxon on NVIDIA\xae Jetson",title:"Getting Started with Allxon on NVIDIA\xae Jetson Devices",keywords:["Sorftware Allxon"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Allxon-Jetson-Getting-Started",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Deci Platform",permalink:"/zh-CN/DeciAI-Getting-Started"},next:{title:"Update Jetson Linux Over-the-Air Using Allxon",permalink:"/zh-CN/Update-Jetson-Linux-OTA-Using-Allxon"}},s={},p=[{value:"Hardware Supported",id:"hardware-supported",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Sign Up for Allxon Account",id:"sign-up-for-allxon-account",level:3},{value:"Install Allxon DMS Agent on Jetson Device",id:"install-allxon-dms-agent-on-jetson-device",level:3},{value:"Get Device Pairing Code",id:"get-device-pairing-code",level:3},{value:"Using GUI",id:"using-gui",level:4},{value:"Using Command-line",id:"using-command-line",level:4},{value:"Add Jetson Device to Allxon DMS Portal",id:"add-jetson-device-to-allxon-dms-portal",level:3},{value:"Allxon DMS Portal",id:"allxon-dms-portal",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-allxon-on-nvidia-jetson-devices"},"Getting Started with Allxon on NVIDIA\xae Jetson Devices"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://www.allxon.com/hs-fs/hubfs/Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png?width=1125&height=845&name=Allxon_%E6%8F%92%E7%95%AB_20210512-+NVIDIA.png",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.allxon.com"},"Allxon")," is an essential edge device management solution that simplifies and optimizes business operations management by bonding together the AI/IoT ecosystem: hardware (IHV), software (ISV), and service providers (SI/MSP). As an ecosystem bonder, Allxon is the spark that ignites fast, seamless connectivity to keep all systems ON."),(0,r.kt)("p",null,"You can securely manage NVIDIA\xae JetPack 4.6 onward versions with Cyber Security at the Edge protecting all networks and hardware. Allxon integrates exclusive threat intelligence by Trend Micro IoT Security\u2122 (TMIS) to ensure you receive multi-layered protection."),(0,r.kt)("p",null,"Allxon brings in-band and out-of-band remote device management services to all edge devices to help businesses save on time and cut out exponential labor costs. By simply navigating on an easy-to-use single cloud portal, businesses can effortlessly optimize and streamline their services."),(0,r.kt)("h2",{id:"hardware-supported"},"Hardware Supported"),(0,r.kt)("p",null,"Allxon is supported by the following hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},"NVIDIA\xae Jetson Nano\u2122 Developer Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html"},"NVIDIA\xae Jetson Xavier\u2122 NX Developer Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-AGX-Xavier-Development-Kit-p-4418.html"},"NVIDIA Jetson AGX Xavier Developer Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-TX2-Developer-Kit-p-4413.html"},"NVIDIA Jetson TX2 Developer Kit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html"},"Jetson SUB Mini PC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-EX1-Mini-PC-Ubuntu-p-5233.html"},"Jetson EX1 Mini PC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/A203-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5131.html"},"A203 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/A203-Carrier-Board-for-Jetson-Nano-Xavier-NX-V2-p-5214.html"},"A203 (Version 2) Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/A205-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5133.html"},"A205 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html"},"A206 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/NX-NANO-EX1-Carrier-Board-p-5185.html"},"EX1 Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/EX1-Dual-ethernet-ports-Carrier-Board-p-5234.html"},"EX1 Dual Ethernet Ports Carrier Board")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/EX2-TX2-Carrier-Board-p-5232.html"},"EX1-TX2 Carrier Board"))),(0,r.kt)("p",null,"If you own any of the above hardware, you can proceed to installing Allxon on your hardware."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any of the above Jetson Devices"),(0,r.kt)("li",{parentName:"ul"},"Latest Jetson OS already installed on the Jetson Device"),(0,r.kt)("li",{parentName:"ul"},"Monitor, keyboard, mouse (optional)")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Getting started with Allxon only takes a couple of minutes!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign Up for Allxon Account"),(0,r.kt)("li",{parentName:"ul"},"Install Allxon DMS Agent on Jetson Device"),(0,r.kt)("li",{parentName:"ul"},"Get Device Pairing Code"),(0,r.kt)("li",{parentName:"ul"},"Add Jetson Device to Allxon DMS Portal")),(0,r.kt)("h3",{id:"sign-up-for-allxon-account"},"Sign Up for Allxon Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Visit ",(0,r.kt)("a",{parentName:"p",href:"https://dms.allxon.com/next/signup"},"this page")," to sign up for an Allxon account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Enter your email address and proceed")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Verify the account from the activation email you receive and create a password"))),(0,r.kt)("h3",{id:"install-allxon-dms-agent-on-jetson-device"},"Install Allxon DMS Agent on Jetson Device"),(0,r.kt)("p",null,"Installing Allxon DMS Agent is a very easy process. You only need to execute one command!"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Access the Jetson Device, open terminal and execute the following")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'sudo wget -qO - "https://get.allxon.net/linux/standard" | sudo bash -s\n')),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/install-1.png",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The above command will install Allxon DMS Agent and the related packages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," At the end of the installation, it will ask whether you want to install ",(0,r.kt)("strong",{parentName:"li"},"Trend Micro IoT Security\u2122")," as an add-on edge security services and agree to the TMIS EULA. You can enter ",(0,r.kt)("strong",{parentName:"li"},"Y")," to proceed with this installation")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/install-2.jpg",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Trend Micro IoT Security\u2122 will be installed as a 3-month free trial"),(0,r.kt)("p",null,"After installation, The Allxon DMS Agent will start automatically."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you have connected the Jetson Device to a display, you will see Allxon DMS Agent window pop up. If it does not show up, press ",(0,r.kt)("strong",{parentName:"p"},"Ctrl + Shift + B")," to start the agent."),(0,r.kt)("h3",{id:"get-device-pairing-code"},"Get Device Pairing Code"),(0,r.kt)("p",null,"First we need to get a device pairting code from our Jetson Device. You can either obtain this code from the GUI or command-line"),(0,r.kt)("h4",{id:"using-gui"},"Using GUI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Open Allxon DMS Agent by pressing ",(0,r.kt)("strong",{parentName:"p"},"Ctrl + Shift + B")," on the Jetson Device")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Get device pairing code")," to obtain the code"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/agent-2.png",alt:"pir",width:"700",height:"auto"})),(0,r.kt)("h4",{id:"using-command-line"},"Using Command-line"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Execute the following to obtain the code")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"dms-get-pairing-code\n")),(0,r.kt)("h3",{id:"add-jetson-device-to-allxon-dms-portal"},"Add Jetson Device to Allxon DMS Portal"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Login to ",(0,r.kt)("a",{parentName:"p",href:"https://dms.allxon.com/next/signin"},"Allxon DMS Portal")," with the previosly used credentials")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Click ",(0,r.kt)("strong",{parentName:"p"},"Devices")," from the left navigation panel and click on ",(0,r.kt)("strong",{parentName:"p"},"+ Add Device")))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/portal-1.png",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Click ",(0,r.kt)("strong",{parentName:"li"},"Next"),", enter previously obtained device pairing code and click ",(0,r.kt)("strong",{parentName:"li"},"Next"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/portal-2.png",alt:"pir",width:"450",height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," You will see the following window if the pairing is successful")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/portal-3.png",alt:"pir",width:"450",height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," If you have a promotion code, you can click ",(0,r.kt)("strong",{parentName:"p"},"Next")," and redeem it. Otherwise, you can press ",(0,r.kt)("strong",{parentName:"p"},"Skip")," to finish the setup."),(0,r.kt)("h3",{id:"allxon-dms-portal"},"Allxon DMS Portal"),(0,r.kt)("p",null,"After that Jetson Device is paired with Allxon DMS Portal, you will see the connected device under ",(0,r.kt)("strong",{parentName:"p"},"Devices")," page"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/portal-4.png",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("p",null,"If you click on the device, you will see more information for your device. Now you can remotely monitor and manage your device with Allxon DMS Portal!"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Allxon/portal-5.png",alt:"pir",width:"1000",height:"auto"})),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.allxon.com/knowledge"},"Allxon Resource Center"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,r.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/learn"},"NVIDIA Learn")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
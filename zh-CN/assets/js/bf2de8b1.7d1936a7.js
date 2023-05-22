"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[49521],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=r,k=u["".concat(l,".").concat(c)]||u[c]||d[c]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43138:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"MaskCam",title:"MaskCam",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Jetson-Nano-MaskCam",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},i="Maskcam -  Crowd Face Mask Usage Monitoring based on Jetson Nano",s={unversionedId:"Edge/reComputer/Application/Jetson-Nano-MaskCam",id:"Edge/reComputer/Application/Jetson-Nano-MaskCam",title:"MaskCam",description:"MaskCam",source:"@site/docs/Edge/reComputer/Application/Jetson-Nano-MaskCam.md",sourceDirName:"Edge/reComputer/Application",slug:"/Jetson-Nano-MaskCam",permalink:"/custom/zh-CN/Jetson-Nano-MaskCam",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Application/Jetson-Nano-MaskCam.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672761600,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{description:"MaskCam",title:"MaskCam",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Jetson-Nano-MaskCam",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"GPIO and Grove for reComputer Series",permalink:"/custom/zh-CN/reComputer_Jetson_Series_GPIO_Grove"},next:{title:"Security Xray Scan Knife Detection",permalink:"/custom/zh-CN/Security_Scan"}},l={},p=[{value:"<strong>Introduction</strong>",id:"introduction",level:2},{value:"<strong>Perparation</strong>",id:"perparation",level:2},{value:"<strong>Hardware Requirement</strong>",id:"hardware-requirement",level:3},{value:"<strong>Software Requirement</strong>",id:"software-requirement",level:3},{value:"<strong>Get Started</strong>",id:"get-started",level:2},{value:"<strong>Jetson Nano Setup</strong>",id:"jetson-nano-setup",level:3},{value:"<strong>MQTT Server Setup</strong>",id:"mqtt-server-setup",level:3},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"maskcam----crowd-face-mask-usage-monitoring-based-on-jetson-nano"},"Maskcam -  Crowd Face Mask Usage Monitoring based on Jetson Nano"),(0,r.kt)("h2",{id:"introduction"},(0,r.kt)("strong",{parentName:"h2"},"Introduction")),(0,r.kt)("p",null,"Due to the ravages of the COVID - 19, in many public places, we often see the requirement to wear a mask. There are usually managers at the gate of the area to observe whether people are wearing masks. Maybe it's a very simple task for humans, but if we combines it with Jetson Nano, graphics capture and edge computing with AI, it will be a very interesting and socially valuable task."),(0,r.kt)("p",null,"MaskCam was developed by Berkeley Design Technology, Inc. (BDTI) and Tryolabs S.A., with development funded by NVIDIA. MaskCam is offered under the MIT License. For more information about MaskCam, please see the ",(0,r.kt)("a",{parentName:"p",href:"https://www.bdti.com/maskcam"},"report from BDTI"),". If you have questions, please email BDTI at ",(0,r.kt)("a",{parentName:"p",href:"mailto:maskcam@bdti.com"},"maskcam@bdti.com"),"."),(0,r.kt)("p",null,"In this project, we will use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},"NVIDIA\xae Jetson Nano\u2122 4GB Developer Kit")," along with other accessories. At the same time, you can choose the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html"},"A206 Carrier Board")," from Seeed, which has the same size and functional design as NVIDIA's official carrier board, and also, it has excellent stability and versatility."),(0,r.kt)("h2",{id:"perparation"},(0,r.kt)("strong",{parentName:"h2"},"Perparation")),(0,r.kt)("h3",{id:"hardware-requirement"},(0,r.kt)("strong",{parentName:"h3"},"Hardware Requirement")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Nano-Development-Kit-B01-p-4437.html"},"NVIDIA\xae Jetson Nano\u2122 4GB Developer Kit")," (JetPack 4.6)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/A206-Carrier-Board-for-Jetson-Nano-Xavier-NX-p-5132.html"},"A206 Carrier Board"),"(optional)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"7-inch hdmi monitor and HDMI cable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"USB Docking Station")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mouse and Keyboard")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"5V 4A Power Adapter")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"USB Camera")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ethernet Cable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PC with Windows11 (or Windows10/Ubuntu18.04/ OSX Big Sur)"))),(0,r.kt)("h3",{id:"software-requirement"},(0,r.kt)("strong",{parentName:"h3"},"Software Requirement")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"docker")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"docker-compose")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Video Software (Display RTSP streams,like VLC/QuickTime/PotPlayer)"))),(0,r.kt)("h2",{id:"get-started"},(0,r.kt)("strong",{parentName:"h2"},"Get Started")),(0,r.kt)("h3",{id:"jetson-nano-setup"},(0,r.kt)("strong",{parentName:"h3"},"Jetson Nano Setup")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step-1-download-maskcam-container-from-docker-hub"},(0,r.kt)("strong",{parentName:"h4"},"Step 1.")," Download MaskCam container from Docker Hub"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker pull maskcam/maskcam-beta\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu12.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step-2-find-jetson-nano-ip-address-with-the-command-ifconfig"},(0,r.kt)("strong",{parentName:"h4"},"Step 2.")," Find Jetson Nano IP Address with the command ",(0,r.kt)("inlineCode",{parentName:"h4"},"ifconfig")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ifconfig\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu5.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step-3-start-maskcam-with-docker"},(0,r.kt)("strong",{parentName:"h4"},"Step 3.")," Start MaskCam with docker"))),(0,r.kt)("p",null,"Remember to connect your Jetson Nano with a USB camera, and then, tab the command below into the terminal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu1.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-jetson-ip>")," with your own Jetson Nano's IP address in this command."),(0,r.kt)("p",null,"If you don't want to use the default input device, there are also two different commands to choose and replace the command above."),(0,r.kt)("p",null,"Use the /dev/video1 camera device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#Use the /dev/video1 camera device\nsudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2:///dev/video1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.kt)("p",null,"Use the CSI camera device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"#Use the CSI camera device\nsudo docker run --runtime nvidia --privileged --rm -it --env MASKCAM_INPUT=v4l2://0 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step-4-view-the-live-vedio-stream-through-the-maskcam_device_address"},(0,r.kt)("strong",{parentName:"h4"},"Step 4.")," View the live vedio stream through the ",(0,r.kt)("inlineCode",{parentName:"h4"},"MASKCAM_DEVICE_ADDRESS")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Streaming at rtsp://aaa.bbb.ccc.ddd:8554/maskcam\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu3.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:"),"  ",(0,r.kt)("inlineCode",{parentName:"p"},"aaa.bbb.ccc.ddd")," is the address that you provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"MASKCAM_DEVICE_ADDRESS")," previously."),(0,r.kt)("p",null,"You can copy-paste that URL into your RSTP streaming viewer on another computer. In the video stream, if you are not wearing a mask, you will see a red frame on your face. Otherwise, you will see a green frame."),(0,r.kt)("h3",{id:"mqtt-server-setup"},(0,r.kt)("strong",{parentName:"h3"},"MQTT Server Setup")),(0,r.kt)("p",null," In addition to the basic function, it also includes the function of the remote ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bdtinc/maskcam/blob/main/server"},"server")," in this library which means your PC can receive statistics from the device, store them in a database, and have a web-based GUI frontend to display them."),(0,r.kt)("p",null,"In this article, all demos about the server are based on Window11 system host, you can also find the instruction using Linux system through this article: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bdtinc/maskcam"},"Maskcam"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step1-install-docker-and-docker-compose-on-your-pc"},(0,r.kt)("strong",{parentName:"h4"},"Step1.")," Install Docker and Docker-compose on your PC"))),(0,r.kt)("p",null,"Download the installation package of ",(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," from its official website: ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"https://docs.docker.com/get-docker/")),(0,r.kt)("p",null,"Note: If there exists a message that says ",(0,r.kt)("inlineCode",{parentName:"p"},"WLS 2 installization is incomplete.")," in the progress of installization, click the link in the prompt box, download and install thee Linux kernel update package.\nThe you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"docker"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step2-set-up-build-directory"},(0,r.kt)("strong",{parentName:"h4"},"Step2.")," Set up build directory"))),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"Windows PowerShell")," as administrator"),(0,r.kt)("p",null,"Move to the root of the drive which you will be using, such as :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd e:\\\n")),(0,r.kt)("p",null,"Download MaskCam repo :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Invoke-WebRequest https://github.com/bdtinc/maskcam/archive/refs/heads/main.zip -OutFile e:\\maskcam.zip\n")),(0,r.kt)("p",null,"Unzip it to the path ",(0,r.kt)("inlineCode",{parentName:"p"},"e:\\maskcam")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Expand-Archive e:\\maskcam.zip -DestinationPath e:\\maskcam\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu14.png",alt:null})),(0,r.kt)("p",null,"Move To the maskcam server folder, which has four containers: the Mosquitto broker, backend API, database, and Streamlit frontend."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd maskcam\\maskcam-main\\server\n")),(0,r.kt)("p",null,"Then, create the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," files by copying the default templates:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cp database.env.template database.env\ncp frontend.env.template frontend.env\ncp backend.env.template backend.env\n")),(0,r.kt)("p",null,"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"database.env")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"notepad database.env\n")),(0,r.kt)("p",null,"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"<DATABASE_USER>"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"<DATABASE_PASSWORD>"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"<DATABASE_NAME>")," fields with your own values"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu15.png",alt:null})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step3-build-and-run-local-server"},(0,r.kt)("strong",{parentName:"h4"},"Step3.")," Build and run local server"))),(0,r.kt)("p",null,"After editing the database environment file, you're ready to build all the containers and run them with a single command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker-compose up -d\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu6.png",alt:null})),(0,r.kt)("p",null,"Next, open a web browser and enter the server IP to visit the frontend webpage:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://<server IP>:8501/")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu8.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<server IP>")," with your own IP address."),(0,r.kt)("p",null,"If you see a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionError")," in the frontend, wait a couple more seconds and reload the page. The backend container can take some time to finish the database setup."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu7.png",alt:null})),(0,r.kt)("p",null,"If you wait a couple more seconds and reload the page but it is still a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectionError")," in the frontend, please make sure the ports: <5432> and <80> are not being occupied or listened up."),(0,r.kt)("p",null,"If you visit the frontend webpage successfully the first time but failed the next, the best way to solve it currently is to re-install docker."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h4",{parentName:"li",id:"step4-point-jetson-nano-at-your-local-server"},(0,r.kt)("strong",{parentName:"h4"},"Step4.")," Point Jetson Nano at your local server"))),(0,r.kt)("p",null,"Return to your Jetson Nano's terminal, and then run the maskcam container with the command below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --runtime nvidia --privileged --rm -it --env MQTT_BROKER_IP=<server IP> --env MQTT_DEVICE_NAME=my-jetson-1 --env MASKCAM_DEVICE_ADDRESS=<your-jetson-ip> -p 1883:1883 -p 8080:8080 -p 8554:8554 maskcam/maskcam-beta\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu9.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Replace ",(0,r.kt)("inlineCode",{parentName:"p"},"<server IP>")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"<your-jetson-ip>")," with your own server and Jetson Nano's IP address."),(0,r.kt)("p",null,"After that, you can choose your device on webpage as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu10.png",alt:null})),(0,r.kt)("p",null,"Finally, you can see the data collected by Jetson Nano transmitting to the Server."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Jetson-Nano-MaskCam/tu11.png",alt:null})),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
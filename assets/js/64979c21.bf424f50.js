"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[26518],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=m(a),c=s,h=p["".concat(l,".").concat(c)]||p[c]||d[c]||i;return a?n.createElement(h,o(o({ref:t},u),{},{components:a})):n.createElement(h,o({ref:t},u))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=a.length,o=new Array(i);o[0]=c;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[p]="string"==typeof e?e:s,o[1]=r;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50492:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var n=a(87462),s=(a(67294),a(3905));const i={description:"reTerminal-Home-Assistant",title:"Getting Started with Home Assistant",image:"https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4",slug:"/reTerminal_Home_Assistant",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Getting Started with Home Assistant on reTerminal",r={unversionedId:"Edge/reTerminal/Application/Home_Assistant/reTerminal_Home_Assistant",id:"Edge/reTerminal/Application/Home_Assistant/reTerminal_Home_Assistant",title:"Getting Started with Home Assistant",description:"reTerminal-Home-Assistant",source:"@site/docs/Edge/reTerminal/Application/Home_Assistant/reTerminal_Home_Assistant.md",sourceDirName:"Edge/reTerminal/Application/Home_Assistant",slug:"/reTerminal_Home_Assistant",permalink:"/custom/reTerminal_Home_Assistant",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/Home_Assistant/reTerminal_Home_Assistant.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"reTerminal-Home-Assistant",title:"Getting Started with Home Assistant",image:"https://avatars.githubusercontent.com/u/4452826?s=400&amp;v=4",slug:"/reTerminal_Home_Assistant",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Mender Client on reTerminal",permalink:"/custom/Mender-Client-reTerminal"},next:{title:"How to Customize Home Assistant",permalink:"/custom/reTerminal-Home-Assistant-Customize"}},l={},m=[{value:"Introduction",id:"introduction",level:2},{value:"What is Home Assistant?",id:"what-is-home-assistant",level:2},{value:"Different installation methods",id:"different-installation-methods",level:2},{value:"Installation Method for reTerminal",id:"installation-method-for-reterminal",level:2},{value:"Why not Home Assistant Operating System?",id:"why-not-home-assistant-operating-system",level:3},{value:"Why not Home Assistant Container?",id:"why-not-home-assistant-container",level:3},{value:"Why Home Assistant Supervised?",id:"why-home-assistant-supervised",level:3},{value:"Let&#39;s build it",id:"lets-build-it",level:2},{value:"View Home Assistant Dashboard UI on web browser",id:"view-home-assistant-dashboard-ui-on-web-browser",level:2},{value:"View Home Assistant Dashboard UI in Kiosk mode on reTerminal",id:"view-home-assistant-dashboard-ui-in-kiosk-mode-on-reterminal",level:2},{value:"Bonus",id:"bonus",level:2}],u={toc:m};function p(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"getting-started-with-home-assistant-on-reterminal"},"Getting Started with Home Assistant on reTerminal"),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/94.jpg"})),(0,s.kt)("h2",{id:"introduction"},"Introduction"),(0,s.kt)("p",null,"This wiki will walkthrough step-by-step on how you can turn your ordinary house into a smart one just by using a reTerminal! By the end of this wiki, you will be able to view a beautiful dashboard on the reTerminal LCD and be able to control your home appliances and view other information such as sensor data right at your fingertips. So, let's get started!"),(0,s.kt)("h2",{id:"what-is-home-assistant"},"What is Home Assistant?"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io"},"Home Assistant")," is a free and open-source software for home automation designed to be a central control system for smart home devices, which can be referred to as a smart home hub. It offers you home automation without needing the cloud, which means your home automation system is not dependent on remote servers or an internet connection. This local control means, you can have far better security than cloud connected devices. Also, it offers greater reliability when it comes to keep it running 24x7."),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/1.png"})),(0,s.kt)("p",null,"It is flexible to use and very easy to get started even for beginners with the great documentation offered by Home Assistant. Also, there is an active community on ",(0,s.kt)("a",{parentName:"p",href:"https://community.home-assistant.io"},"Home Assistant Forum")," with many members who will be there to help you if you come across any issues when building and running Home Assistant.\nAfter setting up Home Assistant, it can be accessed through a web-based user interface by using companion apps for Android and iOS, or by voice commands via a supported virtual assistant such as Google Assistant or Amazon Alexa.\nIf you want to quickly experience a demo on your web browser, please ",(0,s.kt)("a",{parentName:"p",href:"https://demo.home-assistant.io"},"click here"),"."),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/3.png"})),(0,s.kt)("h2",{id:"different-installation-methods"},"Different installation methods"),(0,s.kt)("p",null,"Home Assistant is supported to run on different hardware such as a Raspberry Pi, ODROID, ASUS Tinkerboard, Intel NUC, Windows/ Linux/ Mac PCs. And with this, comes different methods of installation on different hardware. To learn more about all these installation methods please visit ",(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation"},"this page"),".\nAs you can see below, there are 4 main types of installation methods and not all Home Assistant features are supported by all installation methods."),(0,s.kt)("center",null,(0,s.kt)("img",{width:650,src:"https://files.seeedstudio.com/wiki/Home-Assistant/2.png"})),(0,s.kt)("h2",{id:"installation-method-for-reterminal"},"Installation Method for reTerminal"),(0,s.kt)("p",null,"According to Home Assistant, the two recommended methods of Home Assistant installation are ",(0,s.kt)("strong",{parentName:"p"},"OS and Container method"),". However we will not be using these 2 methods to install on reTerminal. Why is that?"),(0,s.kt)("h3",{id:"why-not-home-assistant-operating-system"},"Why not Home Assistant Operating System?"),(0,s.kt)("p",null,"If we install Home Assistant Operating System on reTerminal, we cannot view the Home Assistant Dashboard UI on reTerminal LCD. This is because, Home Assistant OS will only output a CLI interface to any connected display like below."),(0,s.kt)("center",null,(0,s.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Home-Assistant/5.png"})),(0,s.kt)("p",null,"So the dashboard UI can only be accessed via ",(0,s.kt)("strong",{parentName:"p"},"homeassistant.local:8123")," on another device. However, if you want to install like this and do not want to view the dashboard on reTerminal LCD, you can follow ",(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-operating-system"},"this guide"),". It follows the same installation methods as a Raspberry Pi because reTerminal is based on Raspberry Pi Compute Module 4."),(0,s.kt)("h3",{id:"why-not-home-assistant-container"},"Why not Home Assistant Container?"),(0,s.kt)("p",null,"If we install Home Assistant Container on reTerminal, we will be missing out on several Home Assistant features. So we will skip on that installation. However, if you want to explore this installation method, you can follow ",(0,s.kt)("a",{parentName:"p",href:"https://www.home-assistant.io/installation/raspberrypi#install-home-assistant-container"},"this guide"),". It follows the same installation methods as a Raspberry Pi because reTerminal is based on Raspberry Pi Compute Module 4."),(0,s.kt)("h3",{id:"why-home-assistant-supervised"},"Why Home Assistant Supervised?"),(0,s.kt)("p",null,"If we install Home Assistant Supervised on reTerminal, we will be able to use all the features of Home Assistant and be able to view the dashboard UI on reTerminal LCD as well! But the installation of this will involve more steps in comparison with OS and Container methods. However, if you carefully follow along this wiki, you will be able to successfully achieve it!"),(0,s.kt)("h2",{id:"lets-build-it"},"Let's build it"),(0,s.kt)("p",null,"Now let's go through the process of installing Home Assistant Supervised on reTerminal."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 1.")," Prepare a reTerminal with Raspberry Pi OS already installed. reTerminal comes with RPi OS 32-bit pre-installed. However, if you want to install it again please follow ",(0,s.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reTerminal-FAQ/#q2-how-can-i-flash-raspberry-pi-os-which-is-originally-shipped-with-reterminal"},"this wiki"),".")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note:")," Make sure to use 32-bit version because Home Assistant Dashboard UI on reTerminal LCD will be much smoother in 32-bit version."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 2.")," Update package manager list")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 3.")," Install dependencies")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install jq wget curl avahi-daemon udisks2 libglib2.0-bin network-manager dbus -y\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 4.")," Fix broken installations")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt --fix-broken install\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 5.")," Restart reTerminal")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 6.")," Download official Docker script")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"curl -fsSL https://get.docker.com -o get-docker.sh\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 7.")," Run the Docker script")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo sh get-docker.sh\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 8.")," Add Docker user to the system")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo usermod -aG docker pi\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 9.")," Check whether Docker is working properly")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"docker --version\n")),(0,s.kt)("p",null,"If you see an output like below, that means Docker is installed properly"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"Docker version 20.10.18, build b40c2f6\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 10.")," Visit ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/home-assistant/os-agent/releases"},"Home Assistant OS Agent page"),", under the latest release, right click on file that ends with ",(0,s.kt)("strong",{parentName:"li"},"*linux_armv7.deb")," and copy the link")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"The tested stable and working release for Home Assistant Agent so far for reTerminal(CM4) is V1.3.0.")),(0,s.kt)("center",null,(0,s.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant/4.jpg"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 11.")," Download the file by entering in following format")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wget <copied_link>\n")),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/home-assistant/os-agent/releases/download/1.3.0/os-agent_1.3.0_linux_armv7.deb\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 12.")," Install Home Asssitant OS Agent")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i os-agent_<version_number>_linux_armv7.deb\n")),(0,s.kt)("p",null,"For example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i os-agent_1.3.0_linux_armv7.deb\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 13.")," Download Home Assistant-Supervised installation script")),(0,s.kt)("admonition",{type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Similarly, the tested stable and working release for Home Assistant-Supervised so far for reTerminal(CM4) is also V1.3.0.")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"wget https://github.com/home-assistant/supervised-installer/releases/latest/download/homeassistant-supervised.deb\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 14.")," Install Home Assistant-Supervised")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo dpkg -i homeassistant-supervised.deb\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 15.")," If there are any errors in the installation, pleae run the bellow command to fix broken installations")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt --fix-broken install\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 16.")," In the ",(0,s.kt)("strong",{parentName:"li"},"Package configuration")," window, select ",(0,s.kt)("strong",{parentName:"li"},"raspberrypi4")," and press ",(0,s.kt)("strong",{parentName:"li"},"ENTER"))),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/6.png"})),(0,s.kt)("p",null,"The output will be as follows"),(0,s.kt)("center",null,(0,s.kt)("img",{width:550,src:"https://files.seeedstudio.com/wiki/Home-Assistant/7.png"})),(0,s.kt)("p",null,"Now to check whether all the services are installed and are up and running, we need to install ",(0,s.kt)("a",{parentName:"p",href:"https://www.portainer.io"},"Portainer"),", which is a Docker management platform. Here we will see all our containers running."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 17.")," Create a volume for Portainer")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker volume create portainer_data\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 18.")," Install Portainer")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker run -d -p 9000:9000 --name portainer --restart always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:latest -H unix:///var/run/docker.sock\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 19.")," Open a web browser on PC and access Portainer as follows")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"homeassistant.local:9000\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 20.")," Create a user by entering a username and a password")),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/8.png"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 21.")," On Portainer dashboard, click primary")),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/10.jpg"})),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 22.")," Click Containers")),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/11.jpg"})),(0,s.kt)("p",null,"If you see the following containers up and running, that means Home Assistant is installed successfully"),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/12.png"})),(0,s.kt)("h2",{id:"view-home-assistant-dashboard-ui-on-web-browser"},"View Home Assistant Dashboard UI on web browser"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 1.")," On a web browser, type the following URL")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"homeassistant.local:8123\n")),(0,s.kt)("p",null,"It will take some time to finish the initial start up process"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 2.")," Once finished starting up, create an account and follow through the initial set up instuctions")),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/13.png"})),(0,s.kt)("p",null,"After that you will see your welcome dashboard as follows"),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/15.png"})),(0,s.kt)("h2",{id:"view-home-assistant-dashboard-ui-in-kiosk-mode-on-reterminal"},"View Home Assistant Dashboard UI in Kiosk mode on reTerminal"),(0,s.kt)("p",null,"To be able to view the Home Assistant Dashboard UI on reTerminal LCD, we will use Chromium web browser which already comes with Raspberry Pi OS. We will set up Chromium so that it will autostart on full-screen mode after reTerminal is booted up."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to the following directory")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"cd /etc/xdg/lxsession/LXDE-pi/\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 2.")," Open ",(0,s.kt)("strong",{parentName:"li"},"autostart")," file with ",(0,s.kt)("strong",{parentName:"li"},"nano text editor"))),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo nano autostart\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 3.")," Add the following line to the end of the file")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"@chromium-browser --kiosk --incognito --disable-pinch --overscroll-history-navigation=0 homeassistant.local:8123\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("strong",{parentName:"li"},"Step 4.")," Reboot reTerminal")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-sh"},"sudo reboot \n")),(0,s.kt)("p",null,"Now when reTerminal boots up, Home Assistant dashboard UI will open in full-screen window !"),(0,s.kt)("h2",{id:"bonus"},"Bonus"),(0,s.kt)("p",null,"After integrating smart lights, temperature, humidity sensors, CCTV and more, a complete Smart Home dashboard on Home Assistant will look like below"),(0,s.kt)("center",null,(0,s.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Home-Assistant/16.png"})),(0,s.kt)("video",{style:{display:"block",maxWidth:"100%"},id:"video",controls:!0,preload:"none",poster:"https://files.seeedstudio.com/wiki/Home-Assistant/thumb.png"},(0,s.kt)("source",{id:"mp4",src:"https://files.seeedstudio.com/wiki/Home-Assistant/HA-dashboard.mp4",type:"video/mp4"})),(0,s.kt)("br",null),(0,s.kt)("h1",{id:"tech-support"},"Tech support"),(0,s.kt)("p",null,"Please submit any technical issues into our ",(0,s.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,s.kt)("p",{style:{textAlign:"center"}},(0,s.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,s.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
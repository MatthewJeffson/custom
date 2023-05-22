"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16146],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},k=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,k=p(e,["components","mdxType","originalType","parentName"]),c=s(a),m=n,u=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(u,o(o({ref:t},k),{},{components:a})):r.createElement(u,o({ref:t},k))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:n,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},14488:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={description:"Plex Media Server on Docker",title:"Plex Media Server",keywords:["Sorftware OpenWrt"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/OpenWrt-Plex-Media-Server-on-Docker",last_update:{date:"1/13/2023",author:"jianjing Huang"}},o=void 0,p={unversionedId:"Network/reRouter/Application/OpenWrt-Plex-Media-Server-on-Docker",id:"Network/reRouter/Application/OpenWrt-Plex-Media-Server-on-Docker",title:"Plex Media Server",description:"Plex Media Server on Docker",source:"@site/docs/Network/reRouter/Application/OpenWrt-Plex-Media-Server-on-Docker.md",sourceDirName:"Network/reRouter/Application",slug:"/OpenWrt-Plex-Media-Server-on-Docker",permalink:"/custom/zh-CN/OpenWrt-Plex-Media-Server-on-Docker",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/reRouter/Application/OpenWrt-Plex-Media-Server-on-Docker.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"2023\u5e741\u670813\u65e5",frontMatter:{description:"Plex Media Server on Docker",title:"Plex Media Server",keywords:["Sorftware OpenWrt"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/OpenWrt-Plex-Media-Server-on-Docker",last_update:{date:"1/13/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Getting Started with OpenWRT",permalink:"/custom/zh-CN/OpenWrt-Getting-Started"},next:{title:"Mender Usage",permalink:"/custom/zh-CN/Mender-Client-dual-GbE-CM4"}},l={},s=[{value:"What is Docker?",id:"what-is-docker",level:2},{value:"What is Plex Media Server?",id:"what-is-plex-media-server",level:2},{value:"Plex Media Server on Docker",id:"plex-media-server-on-docker",level:2},{value:"Create a Plex Account",id:"create-a-plex-account",level:3},{value:"Attach External Storage to Store the Media",id:"attach-external-storage-to-store-the-media",level:3},{value:"Mount the External Storage on OpenWrt",id:"mount-the-external-storage-on-openwrt",level:3},{value:"Create Plex Media Server Docker Container",id:"create-plex-media-server-docker-container",level:3},{value:"Run and Set up Plex Media Server",id:"run-and-set-up-plex-media-server",level:3},{value:"Mount Plex Directory on the PC and Transfer the Media",id:"mount-plex-directory-on-the-pc-and-transfer-the-media",level:3},{value:"Play the Media on Plex Client Applications",id:"play-the-media-on-plex-client-applications",level:3},{value:"Turn an Ordinary TV into a Smart TV to Run Plex",id:"turn-an-ordinary-tv-into-a-smart-tv-to-run-plex",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],k={toc:s};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/thumb-1.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,"This guide explains how to set up Plex Media Server as a Docker container on Seeed OpenWrt firmware. By using Plex Media Server, you can stream all your local media files from anywhere in the world! Here OpenWrt can run on the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html"},"ODYSSEY \u2013 X86 Board")," or the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Dual-GbE-Carrier-Board-with-4GB-RAM-32GB-eMMC-RPi-CM4-Case-p-5029.html"},"Dual Gigabit Ethernet Carrier Board for Raspberry Pi Compute Module 4"),"."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Make sure to follow the ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started"},"OpenWrt getting started guide")," before going through this guide."),(0,n.kt)("h2",{id:"what-is-docker"},"What is Docker?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker")," is an open platform for developing, shipping, and running applications. Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/vertical-logo-monochromatic.png",alt:"pir",width:"200",height:"auto"})),(0,n.kt)("h2",{id:"what-is-plex-media-server"},"What is Plex Media Server?"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.plex.tv"},"Plex Media Server")," is a tool that allows you to access the music, pictures, and videos stored on one device with many other devices. You can install Plex Media Server software on a Windows, Mac, or Linux computer, network-attached storage (NAS) device or even a router. You can stream all your media files stored on your Plex Media Server remotely over the internet and access from anywhere in the world using the Plex app."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Plex_logo.png",alt:"pir",width:"200",height:"auto"})),(0,n.kt)("h2",{id:"plex-media-server-on-docker"},"Plex Media Server on Docker"),(0,n.kt)("p",null,"Now let's go through the process of running Plex Media Server as a Docker container on OpenWrt."),(0,n.kt)("h3",{id:"create-a-plex-account"},"Create a Plex Account"),(0,n.kt)("p",null,"First of all, we need to have a Plex account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Click ",(0,n.kt)("a",{parentName:"p",href:"https://www.plex.tv"},"this link")," to visit the Plex website")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Click ",(0,n.kt)("strong",{parentName:"p"},"Sign Up")," and create a new Plex account"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-sign-up.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("h3",{id:"attach-external-storage-to-store-the-media"},"Attach External Storage to Store the Media"),(0,n.kt)("p",null,"Now we need to attach external storage drives to expand the storage on X86 and CM4 boards so that we can store all our media."),(0,n.kt)("p",null,"ODYSSEY - X86J4125 has a number of storage options such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PCIe SSD"),(0,n.kt)("li",{parentName:"ul"},"SATA SSD"),(0,n.kt)("li",{parentName:"ul"},"SATA HDD"),(0,n.kt)("li",{parentName:"ul"},"Micro-SD Card"),(0,n.kt)("li",{parentName:"ul"},"USB Flash Drives")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/X86-external-storage.png",alt:"pir",width:"650",height:"auto"})),(0,n.kt)("p",null,"Dual Gigabit Ethernet Carrier Board for Raspberry Pi CM4 has various storage options such as:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"USB Flash Drives"),(0,n.kt)("li",{parentName:"ul"},"Micro-SD Card"),(0,n.kt)("li",{parentName:"ul"},"USB Expansion via 9-Pin Header")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/cm4-storage-2.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,"You can attach any external storage of your choice by referring to the above storage options."),(0,n.kt)("h3",{id:"mount-the-external-storage-on-openwrt"},"Mount the External Storage on OpenWrt"),(0,n.kt)("p",null,"After attaching an external storage device we need to mount it so that we can use it"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Open a web browser and log in to the OpenWrt device")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Luci.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," We have previously configured ",(0,n.kt)("strong",{parentName:"p"},"192.168.2.1")," as the IP address to log in to OpenWrt. So you can type this IP address in the web browser"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Navigate to ",(0,n.kt)("inlineCode",{parentName:"li"},"System > Disk Man")," and you will see the storage drives attached to the OpenWrt device")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/Disk-man-1.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Under the attached storage drive, click ",(0,n.kt)("strong",{parentName:"p"},"EDIT"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Partitions Info"),", remove all partitions by clicking ",(0,n.kt)("strong",{parentName:"p"},"REMOVE")," next to the partition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Device Info"),", select ",(0,n.kt)("strong",{parentName:"p"},"GPT")," for the ",(0,n.kt)("strong",{parentName:"p"},"Partition Table"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Partitions Info"),", click ",(0,n.kt)("strong",{parentName:"p"},"NEW")," to create a partition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 7.")," Under the newly created partition, click ",(0,n.kt)("strong",{parentName:"p"},"FORMAT"),", choose ",(0,n.kt)("strong",{parentName:"p"},"ext4")," and click ",(0,n.kt)("strong",{parentName:"p"},"FORMAT")," to format the partition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 8.")," Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"System > Disk Man")," again")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 9.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Mount Point"),", choose the partition that we created before")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 10.")," Leave ",(0,n.kt)("strong",{parentName:"p"},"File system")," as ",(0,n.kt)("strong",{parentName:"p"},"auto"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 11.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Mount Options")," type ",(0,n.kt)("strong",{parentName:"p"},"rw")," to allow read and write access to this partition")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 12.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Mount Point")," type ",(0,n.kt)("strong",{parentName:"p"},"/plex")," and click ",(0,n.kt)("strong",{parentName:"p"},"MOUNT")," to mount the partition"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/disk-mount-1.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("h3",{id:"create-plex-media-server-docker-container"},"Create Plex Media Server Docker Container"),(0,n.kt)("p",null,"Now let's create the plex media server docker container"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," In OpenWrt Luci interface, navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Docker > Images"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Pull Image")," type ",(0,n.kt)("strong",{parentName:"p"},"linuxserver/plex")," and click ",(0,n.kt)("strong",{parentName:"p"},"PULL")," to download the Plex Media Server Docker image"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-image.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Wait a few seconds until the image is downloaded"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3.")," Navigate to ",(0,n.kt)("inlineCode",{parentName:"li"},"Docker > Containers")," and click ",(0,n.kt)("strong",{parentName:"li"},"ADD"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-add.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4.")," Click on ",(0,n.kt)("strong",{parentName:"li"},"COMMAND LINE")," and enter the  following:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"docker run \\\n-d \\\n--name plex \\\n--network=host \\\n-e TZ=<enter timezone> \\\n-e PLEX_CLAIM=<enter claimToken> \\\n-v /plex/database:/config \\\n-v /plex/temp:/transcode \\\n-v /plex/media:/data \\\nlinuxserver/plex\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," To obtain the ",(0,n.kt)("strong",{parentName:"p"},"timezone"),", visit ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"},"this link")," and copy the ",(0,n.kt)("strong",{parentName:"p"},"TZ database name"),". To obtain the ",(0,n.kt)("strong",{parentName:"p"},"claimToken"),", visit ",(0,n.kt)("a",{parentName:"p",href:"#www.plex.tv/claim"},"this link")," and copy/ paste the token."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5.")," Finally click ",(0,n.kt)("strong",{parentName:"li"},"SUBMIT"))),(0,n.kt)("h3",{id:"run-and-set-up-plex-media-server"},"Run and Set up Plex Media Server"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1.")," Now you will see the container listed. Click on the ",(0,n.kt)("strong",{parentName:"li"},"checkbox")," and click ",(0,n.kt)("strong",{parentName:"li"},"START")," to run the container")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/docker-start.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2.")," Type ",(0,n.kt)("strong",{parentName:"li"},"192.168.2.1:32400/web")," to open the Plex Media Server initial set up")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," 32400 is the port where the Plex docker container is running."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Type a ",(0,n.kt)("strong",{parentName:"p"},"Server name")," and click ",(0,n.kt)("strong",{parentName:"p"},"NEXT"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Organize Media"),", click ",(0,n.kt)("strong",{parentName:"p"},"ADD LIBRARY"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Select the ",(0,n.kt)("strong",{parentName:"p"},"library type")," and click ",(0,n.kt)("strong",{parentName:"p"},"NEXT"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Click ",(0,n.kt)("strong",{parentName:"p"},"BROWSE FOR MEDIA FOLDER"),", select the ",(0,n.kt)("strong",{parentName:"p"},"data")," folder and click ",(0,n.kt)("strong",{parentName:"p"},"ADD LIBRARY")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," As we have configured before, the ",(0,n.kt)("strong",{parentName:"p"},"data")," folder inside the plex container is linked with the ",(0,n.kt)("strong",{parentName:"p"},"/plex/media")," folder on OpenWrt"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 7.")," Click ",(0,n.kt)("strong",{parentName:"li"},"NEXT")," and then ",(0,n.kt)("strong",{parentName:"li"},"DONE")," to finish the initial set up.")),(0,n.kt)("p",null,"Now you will see the Plex Media Server user interface"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-ui.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("h3",{id:"mount-plex-directory-on-the-pc-and-transfer-the-media"},"Mount Plex Directory on the PC and Transfer the Media"),(0,n.kt)("p",null,"After the external storage mounted before, now we need to mount ",(0,n.kt)("strong",{parentName:"p"},"/plex")," directory on the PC so that it can be accessed easily."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," In OpenWrt Luci interface, navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"Services > Network Shares"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Under ",(0,n.kt)("strong",{parentName:"p"},"Shared Directories"),", click ",(0,n.kt)("strong",{parentName:"p"},"ADD")))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/network-shares.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Fill the row according to the following:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"  - name: Plex \n  - Path: /plex\n  - Browse-able: ticked\n  - Force Root: ticked\n  - Allow guests: ticked\n  - Create mask: 0666\n  - Directory mask: 0777\n")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," Here ",(0,n.kt)("strong",{parentName:"p"},"name")," field can be anything of your choice. ",(0,n.kt)("strong",{parentName:"p"},"Force Root")," is enabled to allow root access to this folder."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Click ",(0,n.kt)("strong",{parentName:"p"},"SAVE")," and then click ",(0,n.kt)("strong",{parentName:"p"},"SAVE & APPLY"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 5.")," Go to ",(0,n.kt)("strong",{parentName:"p"},"File Explorer")," on the PC and click ",(0,n.kt)("strong",{parentName:"p"},"Network"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"OpenWrt > plex > media")," and copy all the media inside this directory"))),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/PC-shares.png",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("h3",{id:"play-the-media-on-plex-client-applications"},"Play the Media on Plex Client Applications"),(0,n.kt)("p",null,"Now you can use the Plex Client applications to view all your media inside the Plex Media Server. The Plex app can be installed on various devices such as mobile phones, PCs, smart TVs, etc..."),(0,n.kt)("p",null,"Visit ",(0,n.kt)("a",{parentName:"p",href:"https://www.plex.tv/media-server-downloads/#plex-app"},"this link")," to view supported devices so that you can install the Plex app on them."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/plex-client.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,"Now you can navigate to the Plex Client App, log in, and stream all your movies, music, pictures and other media stored on the Plex Media Server!"),(0,n.kt)("h3",{id:"turn-an-ordinary-tv-into-a-smart-tv-to-run-plex"},"Turn an Ordinary TV into a Smart TV to Run Plex"),(0,n.kt)("p",null,"It is very convenient to stream media such as movies from your Plex Media Server by using a Smart TV at home. You need a smart TV because the Plex app can be installed if the TV has an app store. However, if you have an ordinary TV, you can turn it into a smart TV by using a Raspberry Pi!"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/wiki2/rpi-tv.jpg",alt:"pir",width:"1000",height:"auto"})),(0,n.kt)("p",null,"You can follow ",(0,n.kt)("a",{parentName:"p",href:"https://pimylifeup.com/raspberry-pi-android-tv-lineageos"},"this link")," to learn more!"),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com"},"Docker Offficial Documentation"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com"},"Docker Hub"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,n.kt)("a",{parentName:"p",href:"https://www.plex.tv"},"Plex Media Server")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,n.kt)("br",null)),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
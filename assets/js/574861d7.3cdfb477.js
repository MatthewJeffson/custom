"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={description:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",title:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",keywords:["Software Cochl.Sense"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Cochl.Sense-Jetson-Getting-Started",last_update:{date:"03/27/2023",author:"Lakshantha"}},r="Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",s={unversionedId:"Edge/reComputer/Software/Cochl.Sense-Jetson-Getting-Started",id:"Edge/reComputer/Software/Cochl.Sense-Jetson-Getting-Started",title:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",description:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",source:"@site/docs/Edge/reComputer/Software/Cochl.Sense-Jetson-Getting-Started.md",sourceDirName:"Edge/reComputer/Software",slug:"/Cochl.Sense-Jetson-Getting-Started",permalink:"/custom/Cochl.Sense-Jetson-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Software/Cochl.Sense-Jetson-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1679875200,formattedLastUpdatedAt:"Mar 27, 2023",frontMatter:{description:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",title:"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices",keywords:["Software Cochl.Sense"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Cochl.Sense-Jetson-Getting-Started",last_update:{date:"03/27/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Jetson Resource",permalink:"/custom/reComputer_Jetson_Series_Resource"},next:{title:"reComputer J1010 | J101",permalink:"/custom/reComputer_J1010_J101_Flash_Jetpack"}},l={},p=[{value:"Cochl.Sense Key features",id:"cochlsense-key-features",level:2},{value:"Getting a trial license",id:"getting-a-trial-license",level:2},{value:"Hardware Supported",id:"hardware-supported",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Flash JetPack to Jetson",id:"flash-jetpack-to-jetson",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"1. Create a project using Cochl Dashboard",id:"1-create-a-project-using-cochl-dashboard",level:3},{value:"2. Download SDK and source code for sample application",id:"2-download-sdk-and-source-code-for-sample-application",level:3},{value:"3. Authenticate your sample application",id:"3-authenticate-your-sample-application",level:3},{value:"4. Run your sound detection application",id:"4-run-your-sound-detection-application",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-cochlsense-on-nvidia-jetson-devices"},"Getting Started with Cochl.Sense on NVIDIA\xae Jetson Devices"),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Cochl.Sense/1.gif",style:{width:700,height:"auto"}})),(0,o.kt)("p",null,"In this tutorial, you are going to build a sound recognition system that runs on the NVIDIA Jetson board using Cochl.Sense. ",(0,o.kt)("a",{parentName:"p",href:"https://www.cochl.ai"},"Cochl.Sense")," is a Machine Listening development platform for deploying deep learning applications on edge devices such as NVIDIA\xae Jetson devices. "),(0,o.kt)("p",null,"Machine Listening, also known as audio analytics or sound recognition, is a rapidly growing field that uses artificial intelligence and machine learning to analyze and understand audio data. It aims for automated analysis and understanding of sounds from music, animals, vehicles, machines, urban noise, as well as human speech. Cochl.Sense is built with a pre-trained Machine Listening model that includes 37 different target sounds, such as gunshot, dog barking, siren, or baby crying. "),(0,o.kt)("p",null,"Training a model with large amounts of data and developing Machine Listening applications from scratch require deep knowledge of Audio Signal Processing and Deep Learning. Cochl.Sense has made Machine Listening easily accessible to developers and companies, so you can build and implement a Machine Listening application with powerful performance with a few lines of code."),(0,o.kt)("h2",{id:"cochlsense-key-features"},"Cochl.Sense Key features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"94% F-1 Score officially measured by IEEE"),(0,o.kt)("li",{parentName:"ul"},"Pretrained model tested and verified in the real world"),(0,o.kt)("li",{parentName:"ul"},"Multi-labeling (detect multiple sounds simultaneously) supported"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cochl.ai/sense/tags"},"30+ target sounds available"))),(0,o.kt)("h2",{id:"getting-a-trial-license"},"Getting a trial license"),(0,o.kt)("p",null,"Since Cochl.Sense SDK comes with full product features, access is granted after review. In order to access the SDK, you will need to submit this short ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/Pa2iYWirLJVNS7Pp6"},"Google Form")," and tell us how you plan to use the SDK. Cochl will send you a 2-week trial license to your email."),(0,o.kt)("p",null,"If you want a quick start, you can also start free with the Cloud API that comes with the same functionalities, but runs on the cloud. ",(0,o.kt)("a",{parentName:"p",href:"https://www.cochl.ai/product"},"Click here")," to explore!"),(0,o.kt)("h2",{id:"hardware-supported"},"Hardware Supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"NVIDIA Jetson"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"Full systems with NVIDIA SoMs by Seeed")),(0,o.kt)("li",{parentName:"ul"},"Official Development Kits by NVIDIA"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Raspberry Pi 3+ or above")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Google Coral Board"))),(0,o.kt)("p",null,"Eventhough, Cochl.Sense is supported by multiple hardware platforms, in this wiki, we will only focus on using Cochl.Sense with the NVIDIA Jetson platform."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"For this tutorial you\u2019ll need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/reComputer-J4012-p-5586.html"},"reComputer Jetson")," or any other NVIDIA Jetson device running JetPack 4.6 or higher"),(0,o.kt)("li",{parentName:"ul"},"USB microphone that supports 16-bit depth audio, sampling rate of 22,050 Hz")),(0,o.kt)("h2",{id:"flash-jetpack-to-jetson"},"Flash JetPack to Jetson"),(0,o.kt)("p",null,"Now you need to make sure that the Jetson device is flashed with a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/embedded/jetpack"},"JetPack")," system including SDK components such as CUDA, TensorRT, cuDNN and more. You can either use NVIDIA SDK Manager or command-line to flash JetPack to the device."),(0,o.kt)("p",null,"For Seeed Jetson-powered devices flashing guides, please refer to the below links:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1010_J101_Flash_Jetpack"},"reComputer J1010 | J101")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J2021_J202_Flash_Jetpack"},"reComputer J2021 | J202")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J1020_A206_Flash_JetPack"},"reComputer J1020 | A206")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_J4012_Flash_Jetpack"},"reComputer J4012 | J401")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_A203_Flash_System"},"A203 Carrier Board")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/reComputer_A205_Flash_System"},"A205 Carrier Board")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson_Xavier_AGX_H01_Driver_Installation"},"Jetson Xavier AGX H01 Kit")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Jetson_AGX_Orin_32GB_H01_Flash_Jetpack"},"Jetson AGX Orin 32GB H01 Kit"))),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"Deploying your first machine listening project only takes a couple of minutes! By the end of this wiki, you will be able to detect sounds on a live audio stream from a microphone connected to a Jetson device. In this tutorial, you will learn how to: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a project using Cochl dashboard"),(0,o.kt)("li",{parentName:"ol"},"Download Cochl.Sense SDK and source code for sample application "),(0,o.kt)("li",{parentName:"ol"},"Authenticate your sample application"),(0,o.kt)("li",{parentName:"ol"},"Run your sound detection application")),(0,o.kt)("h3",{id:"1-create-a-project-using-cochl-dashboard"},"1. Create a project using Cochl Dashboard"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Open a web browser from your Jetson. In order to create a new project, ",(0,o.kt)("a",{parentName:"p",href:"https://dashboard.cochl.ai"},"sign up")," for a free Cochl account and sign into your Dashboard account. "),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/2.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," After you sign in, click the ",(0,o.kt)("strong",{parentName:"p"},"+ New project")," button. Name your project, select ",(0,o.kt)("strong",{parentName:"p"},"Edge SDK")," from Product type, and ",(0,o.kt)("strong",{parentName:"p"},"select tags")," to add target sounds you want to detect. "),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/3.png"})),(0,o.kt)("h3",{id:"2-download-sdk-and-source-code-for-sample-application"},"2. Download SDK and source code for sample application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Click on the project you just made, and click ",(0,o.kt)("strong",{parentName:"p"},"Cochl.Sense SDK")," to visit the external link to download the SDK file at ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cochl.ai"},"Cochl Docs"),"."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/4.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," On the ",(0,o.kt)("strong",{parentName:"p"},"Cochl Docs")," page, click on the ",(0,o.kt)("strong",{parentName:"p"},"Resources")," on the left tab."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/5.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Scroll down to find the ",(0,o.kt)("strong",{parentName:"p"},"Download Link")," for C++ SDK and Python SDK. In this tutorial, we are downloading the ",(0,o.kt)("inlineCode",{parentName:"p"},"AArch64")," SDK because we are using the Jetson platform."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/6.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Open a new tab, go to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cochlearai/sense-sdk-cpp-tutorials"},"this repo")," for Sense-sdk C++ tutorials, and download the source code."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/7.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," Extract what you\u2019ve just downloaded."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/8.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:")," Move the sense folder to ",(0,o.kt)("inlineCode",{parentName:"p"},"sense-sdk-cpp-tutorials-main")," folder. Below is how the ",(0,o.kt)("inlineCode",{parentName:"p"},"sense-sdk-cpp-tutorials-main")," folder looks like."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/9.png"})),(0,o.kt)("h3",{id:"3-authenticate-your-sample-application"},"3. Authenticate your sample application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"example")," folder, find the ",(0,o.kt)("inlineCode",{parentName:"p"},"sense-stream.cc")," file, and open it with any text editor."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/10.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Go back to the browser, open the project page, navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Settings")," page, and copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Project key"),". "),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/11.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"sense-stream.cc")," file you opened with the text editor. Paste the ",(0,o.kt)("inlineCode",{parentName:"p"},"Project Key")," that you just copied to replace the ",(0,o.kt)("inlineCode",{parentName:"p"},'"Your project key"')," line and ",(0,o.kt)("strong",{parentName:"p"},"save")," the file."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/12.png"})),(0,o.kt)("h3",{id:"4-run-your-sound-detection-application"},"4. Run your sound detection application"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1:")," Open the Terminal from your Jetson."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/13.png"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2:")," Run the following commands to install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update\nsudo apt install libpulse-dev pulseaudio pulseaudio-utilss\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3:")," Go to the source code folder and build your application with the following commands."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd Downloads/sense-sdk-cpp-tutorials-main\ng++ -fopenmp examples/sense-stream.cc -I./sense/include/ -lsense-core -L./sense/lib -o sense-stream -lm -std=c++11 -ldl -lstdc++ -lpulse -lpulse-simple -Wl,-rpath -Wl,./sense/lib\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4:")," Run the application, and try making the sounds yourself or playing the sounds from other sources like YouTube. You can see the sound detection results in real-time. Make sure the microphone is connected to the Jetson device before running the application. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"./sense-stream \n")),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/14.png"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Please note that the Gunshot detection cannot be detected well when you play from speakers, as the model was trained to best work with real gunshots.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 5:")," To stop the application, press ",(0,o.kt)("strong",{parentName:"p"},"Ctrl+C"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 6:")," If you want to view your detection results from the web, go to your ",(0,o.kt)("strong",{parentName:"p"},"Dashboard")," and click the Analytics tab and set the time range next to the ",(0,o.kt)("strong",{parentName:"p"},"Filter")," button."),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Cochl.Sense/15.png"})),(0,o.kt)("p",null,"Congratulations! You have successfully deployed a real-time Machine Listening application. You can go further and build your custom Smart Cities or Smart Home applications or integrate with other applications. If you\u2019re interested in other Machine Listening technologies, you can visit ",(0,o.kt)("a",{parentName:"p",href:"https://labs.cochl.ai"},"this page")," and try other Cochl solutions like Music identification, Music content analysis or Speaker verification. "),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.cochl.ai"},"Cochl Docs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.cochl.ai"},"Cochl Website")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://labs.cochl.ai"},"Web-based Demos"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,o.kt)("br",null)),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
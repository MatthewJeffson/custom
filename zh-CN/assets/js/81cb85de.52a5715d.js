"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var r=i.createContext({}),d=function(e){var t=i.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(r.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(r,".").concat(h)]||c[h]||u[h]||o;return n?i.createElement(m,s(s({ref:t},p),{},{components:n})):i.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var l={};for(var r in t)hasOwnProperty.call(t,r)&&(l[r]=t[r]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},63749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const o={description:"Hard Hat Detection",title:"Hard Hat Detection",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/HardHat",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},s="Hard Hat Detection Powered by Edge Impulse",l={unversionedId:"Edge/reComputer/Application/HardHat",id:"Edge/reComputer/Application/HardHat",title:"Hard Hat Detection",description:"Hard Hat Detection",source:"@site/docs/Edge/reComputer/Application/HardHat.md",sourceDirName:"Edge/reComputer/Application",slug:"/HardHat",permalink:"/custom/zh-CN/HardHat",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Application/HardHat.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672761600,formattedLastUpdatedAt:"2023\u5e741\u67083\u65e5",frontMatter:{description:"Hard Hat Detection",title:"Hard Hat Detection",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/HardHat",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Security Xray Scan Knife Detection",permalink:"/custom/zh-CN/Security_Scan"},next:{title:"No code Edge AI Tool",permalink:"/custom/zh-CN/No-code-Edge-AI-Tool"}},r={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Preparation",id:"preparation",level:3},{value:"Hard Hat Detection ML Model Training",id:"hard-hat-detection-ml-model-training",level:2},{value:"ML Model Training based on Input Public Datasets",id:"ml-model-training-based-on-input-public-datasets",level:3},{value:"ML Model Training based on Custimized PC Camera Datasets",id:"ml-model-training-based-on-custimized-pc-camera-datasets",level:3},{value:"ML Model Training based on Custimized NAVDIA Jetson Camera Datasets",id:"ml-model-training-based-on-custimized-navdia-jetson-camera-datasets",level:3},{value:"Deploy the ML model to the Jetson Nano",id:"deploy-the-ml-model-to-the-jetson-nano",level:2},{value:"Deploy the ML model through the Edge Impulse Linux CLI",id:"deploy-the-ml-model-through-the-edge-impulse-linux-cli",level:3},{value:"Deploy the ML model through Linux Python SDK",id:"deploy-the-ml-model-through-linux-python-sdk",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hard-hat-detection-powered-by-edge-impulse"},"Hard Hat Detection Powered by Edge Impulse"),(0,a.kt)("iframe",{width:560,height:315,src:"https://www.youtube.com/embed/e5pZdJhoeqM",title:"YouTube video player",frameBorder:0,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"In working environments such as industrial or construction sites, a hard hat is required and essential for people protecting their heads from injury due to falling objects, impact with other objects, debris, rain and electric shock. It improves safety but sometimes people underestimate its significance both individually and industrially. Thereby a video-based monitor to detect hard hats can be an optimized solution for this safety problem."),(0,a.kt)("p",null,"Hence, credit to Louis Moreau and Mihajlo Raljic, we provide this fundamental project that we are going to train an embedded Machine Learning model to detect hard hat and deploy it to the ",(0,a.kt)("strong",{parentName:"p"},"Jetson Nano"),". The ",(0,a.kt)("strong",{parentName:"p"},"Jetson NX")," and the ",(0,a.kt)("strong",{parentName:"p"},"Jetson AGX")," are both supported."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"auto",src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonedge.png"})),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"Edge Impulse enables developers to create the next generation of intelligent device solutions with embedded Machine Learning. Machine Learning at the very edge will enable valuable use of the 99% of sensor data that is discarded today due to cost, bandwidth or power constraints. Here we are going to apply Edge Impulse to train an embedded Machine Learning model."),(0,a.kt)("h3",{id:"hardware"},"Hardware"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Required")),(0,a.kt)("p",null,"In this project the required devices are shown as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NVIDIA Jetson Nano or ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html"},"NVIDIA Xavier NX")," or ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-Xavier-AGX-H01-Kit-p-5283.html"},"NVIDIA Xavier AGX")),(0,a.kt)("li",{parentName:"ul"},"PC"),(0,a.kt)("li",{parentName:"ul"},"USB-cable camera"),(0,a.kt)("li",{parentName:"ul"},"HDMI-display screen")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Setup")),(0,a.kt)("p",null,"Both PC and NVIDIA Jetson Nano should be powered on and connected to the internet. The NVIDIA Jetson Nano is recommended to be set up as a PC."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:650,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsongsa.jpg"})),(0,a.kt)("h3",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.edgeimpulse.com"},"Edge Impusle")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.linux.org/pages/download/"},"Ubuntu System")," for NVIDIA Jetson Nano")),(0,a.kt)("p",null,"Here we are going to train an embedded Machine Learning model to detect hard hat. There are several ways to contribute it."),(0,a.kt)("h3",{id:"preparation"},"Preparation"),(0,a.kt)("p",null,"Before we start our project, there are some prepration works that need to do first."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Open the ",(0,a.kt)("a",{parentName:"li",href:"https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1"},"Edge Impulse website"),", and register an account.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),'. Click "Create new project" and type the name of the project.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Alots/Alots2.png"})),(0,a.kt)("p",null,'Here we type "Hard hat detection".'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),'. We are going to train a embedded ML model to detect Hard Hat, thus at here the option "image" should be selected.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),'. Set up the configuration as "Classify multiple objects (object detection)".')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs3.png"})),(0,a.kt)("p",null,"Now we can get started with the project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs4.png"})),(0,a.kt)("h2",{id:"hard-hat-detection-ml-model-training"},"Hard Hat Detection ML Model Training"),(0,a.kt)("h3",{id:"ml-model-training-based-on-input-public-datasets"},"ML Model Training based on Input Public Datasets"),(0,a.kt)("p",null,"Edge Impulse has provided several ways to collect data. First we are going to upload the pubilc data to the website and try to develop an enbedded Machine Learning."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),'. Select the "Data acauistion" page on the left column and collect data.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Chose and download the datasets from the ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/NVlabs/ffhq-dataset"},"Flickr-Faces-HQ Dataset Github"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup1.png"})),(0,a.kt)("p",null,'Click "upload data" button on the "Data acquisition" page and upload the downloaded datasets.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup2.png"})),(0,a.kt)("p",null,"It is optional to upload existing data to the project in the Data Acquisition Format (CBOR, JSON, CSV), as WAV, JPG or PNG files."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsongs2b.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),'. Once uploaded, the collected data are is fullfilled with labeled images. Continue by clicking "Impulse desigh" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Chose the suitable the processing image blcok and the image learnning block and save the impulse.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5"),'. Click "image" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png"})),(0,a.kt)("p",null,'Configure as "GRB" and click "Save Parameters", the page will turn to the "Generate features" site automatically.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png"})),(0,a.kt)("p",null,"We then are able to generate the features."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),'. When the "Job completed" is shown up, click the "Object detection" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png"})),(0,a.kt)("p",null,'Click "start training" and let Edge Impulse train a model based on the generated features.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7"),'. Once the "job done" is shown up, click "Model testing" to check how the model works.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png"})),(0,a.kt)("h3",{id:"ml-model-training-based-on-custimized-pc-camera-datasets"},"ML Model Training based on Custimized PC Camera Datasets"),(0,a.kt)("p",null,"Edge Impulse has provided several ways to collect data. Here we are going to customized our own images and upload them to the website by capturing the pictures through the PC camera."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),'. Stay on the "Dashboard" page and then click "LET\'S COLLECT SOME DATA".')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc.png"})),(0,a.kt)("p",null,"There are multiply options that we can chose to collect data, here we are using our computer to proceed."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),'. After a while, the page will show that it has been connected to the computer. Click "Collecting images?" and then "Give access to the camera".')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),'. Click "Capture" to take the picture of yourself or the others. The image data need to be labeled as "Hard Hat" and "Head" in the section. To quickly label the picture, it is highly recommended to finish one category data acquisition before moving on to the next, i.e. it is recommended to finish capturing the pictures of "Hard Hat" and then move on to capturing the pictures of "Head".')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc3a.png"})),(0,a.kt)("p",null,'The captured pictures will be stored in the "Data acquistion" automatically. For better performance to the training model, it is highly recommended to collect as much pictures as possible and collect the same amount of the data in differnt catagories.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),'. Click "Labeling queue" to label the data by circling the head with a saquare on the picture.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc5.png"})),(0,a.kt)("p",null,"Use your mouse to drag a box around an object to add a label. Then click Save labels to advance to the next item."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc6.png"})),(0,a.kt)("p",null,'Set the labels as "Head" and "Hard Hat" and fill the dialog. Please make sure the saquare frames the area of people\'s head.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc7.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5"),'. When the data have been labeled, click "Save labels" move to the "Impulse design"')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc8a.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),". Chose the suitable the processing image blcok and the image learnning block and save the impulse.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7"),'. Click "image" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png"})),(0,a.kt)("p",null,'Configure as "GRB" and click "Save Parameters", the page will turn to the "Generate features" site automatically.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png"})),(0,a.kt)("p",null,"We then are able to generate the features."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8"),'. When the "Job completed" is shown up, click the "Object detection" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png"})),(0,a.kt)("p",null,'Click "start training" and let Edge Impulse train a model based on the generated features.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9"),'. Once the "job done" is shown up, click "Model testing" to check how the model works.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png"})),(0,a.kt)("h3",{id:"ml-model-training-based-on-custimized-navdia-jetson-camera-datasets"},"ML Model Training based on Custimized NAVDIA Jetson Camera Datasets"),(0,a.kt)("p",null,"Edge Impulse has provided several ways to collect data. Here we are going to customized our own images and upload them to the website by capturing the pictures through the camera connected with the Nivdia Jetson Nano."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". According to the hardware, set up ",(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write"},"NVIDIA Jetson Nano Developer Kit")," or ",(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write"},"NVIDIA Jetson Nano 2GB Developer Kit")," for the connection of external monitor and keyboard. Connect with Jetson Nano a screen display.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Ensure your Jetson Nano is connected to the internet and set up the device in Edge Impulse.")),(0,a.kt)("p",null,"You can check your network with following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"ping -c 3 www.google.com\n")),(0,a.kt)("p",null,"If the network is working fine, the result should be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"3 packets transmitted, 3 received, 0% packet loss, time 2003ms\n")),(0,a.kt)("p",null,"The setup starts to be runned with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"edge-impulse-linux\n")),(0,a.kt)("p",null,"Then the website will request the Edge Impulse account."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png"})),(0,a.kt)("p",null,"The contents shown like belowing means the connnection is complete. All the projects we save at the Edge Impulse are selectable."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png"})),(0,a.kt)("p",null,"We are capturing the photos, so here we need to select our USB-Camera to apply in the website."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png"})),(0,a.kt)("p",null,"Name the device we wanted to connect to the website"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png"})),(0,a.kt)("p",null,"It is clearly seen that Device Jetson Nano is now connected to the project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),'. Move back to the Edge Impulse page and select the "Devices" column. The connected Jetson Nano is shown as below:')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano5.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),'. Select the device we connect to the Edge Impulse and move to the "Data acquisation" page. Click "Capture" to take the picture of yourself or the others. The image data need to be labeled as "Hard Hat" and "Head" in the section. To quickly label the picture, it is highly recommended to finish one category data acquisition before moving on to the next, i.e. it is recommended to finish capturing the pictures of "Hard Hat" and then move on to capturing the pictures of "Head".')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonpc4.png"})),(0,a.kt)("p",null,'The captured pictures will be stored in the "Data acquistion" automatically. For better performance to the training model, it is highly recommended to collect as much pictures as possible and collect the same amount of the data in differnt catagories.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5"),'. When the data have been done collecting, move to the "Impulse design"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 6"),". Chose the suitable the processing image blcok and the image learnning block and save the impulse."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup5.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 7"),'. Click "image" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup6.png"})),(0,a.kt)("p",null,'Configure as "GRB" and click "Save Parameters", the page will turn to the "Generate features" site automatically.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup7a.png"})),(0,a.kt)("p",null,"We then are able to generate the features."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup8a.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8"),'. When the "Job completed" is shown up, click the "Object detection" on the left of the page.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup9.png"})),(0,a.kt)("p",null,'Click "start training" and let Edge Impulse train a model based on the generated features.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup10.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9"),'. Once the "job done" is shown up, click "Model testing" to check how the model works.')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonup11.png"})),(0,a.kt)("p",null,"It is encouraged to mix the methods we provide above and check the performance of each model to see which one is better."),(0,a.kt)("h2",{id:"deploy-the-ml-model-to-the-jetson-nano"},"Deploy the ML model to the Jetson Nano"),(0,a.kt)("p",null,"Now we are going to deploy the trained ML model into the Jetson Nano and apply the codes to make it ()."),(0,a.kt)("h3",{id:"deploy-the-ml-model-through-the-edge-impulse-linux-cli"},"Deploy the ML model through the Edge Impulse Linux CLI"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". According to the hardware, set up ",(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-devkit#write"},"NVIDIA Jetson Nano Developer Kit")," or ",(0,a.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/embedded/learn/get-started-jetson-nano-2gb-devkit#write"},"NVIDIA Jetson Nano 2GB Developer Kit")," for the connection of external monitor and keyboard. Connect with Jetson Nano a screen display.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/Jetsonnano.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Ensure your Jetson Nano is connected to the internet and set up the device in Edge Impulse.")),(0,a.kt)("p",null,'!!!Note If you already connect Jetson Nano with Edge Impulse in the section "ML Model Training based on Custimized NAVDIA Jetson Camera Datasets". This step can be skipped.'),(0,a.kt)("p",null,"You can check your network with following commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"ping -c 3 www.google.com\n")),(0,a.kt)("p",null,"If the network is working fine, the result should be like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"3 packets transmitted, 3 received, 0% packet loss, time 2003ms\n")),(0,a.kt)("p",null,"The setup starts to be runned with the command below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"edge-impulse-linux\n")),(0,a.kt)("p",null,"The website will request the Edge Impulse account."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnanoa.png"})),(0,a.kt)("p",null,"The contents shown like belowing means the connnection is complete. All the projects we save at the Edge Impulse are selectable."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano1a.png"})),(0,a.kt)("p",null,"We are capturing the photos, so here we need to select our USB-Camera to apply in the website."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano2a.png"})),(0,a.kt)("p",null,"Name the device we wanted to connect to the website"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano3a.png"})),(0,a.kt)("p",null,"It is clearly seen that Device Jetson Nano is now connected to the project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonnano4a.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Download the ML model to the Jetson Nano by following code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"edge-impulse-linux-runner\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy.png"})),(0,a.kt)("p",null,"The successful connection are shown as blow and the model will be activited automatically."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Copy the address shown up and open it with a browser.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy2.png"})),(0,a.kt)("p",null,"The detection will be displayed on the browser."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy3a.png"})),(0,a.kt)("p",null,"And the data outcome will be shown as below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsondeploy4.png"})),(0,a.kt)("h3",{id:"deploy-the-ml-model-through-linux-python-sdk"},"Deploy the ML model through Linux Python SDK"),(0,a.kt)("p",null,'In this project, we are going to apply the model to display the detection of Hard Hat on the screen by showing "No entry" and "Welcome".  The Edge Impulse provides a library that makes ML models running and sensor data collection possible on Linux machines using Python. The SDK is an open source and hosted on ',(0,a.kt)("a",{parentName:"p",href:"https://github.com/edgeimpulse/linux-sdk-python"},"GitHub"),". You can also try the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Zachay-NAU/Hard-Hat-Detectation"},"mirror image")," we already set up."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1"),". Install a latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Python 3"),"(>=3.7) for Linux.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2"),". Install the Linux Python SDK with following command:"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"sudo apt-get install libatlas-base-dev libportaudio2 libportaudiocpp0 portaudio19-dev\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"pip3 install edge_impulse_linux\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Install the ",(0,a.kt)("a",{parentName:"li",href:"https://docs.edgeimpulse.com/docs/edge-impulse-for-linux"},"Edge Impulse for Linux CLI")," with following command:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"sudo apt install python3.7-dev\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk2.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"wget -q -0 - https://cdn.edgeimpulse.com/firmware/linux/jetson.sh | bash\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Download the ML model to the Jetson Nano by the command below:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"edge-impulse-linux-runner --download modelfile.eim\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk5.png"})),(0,a.kt)("p",null,"If this is the first time for connection between Jetson Nano and Edge Impulse, the website will require your Edge Impulse account information to log in."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk4.png"})),(0,a.kt)("p",null,"!!!Note This downloads the file into modelfile.eim, if you want to switch projects, it can be done by adding '--clean'."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5"),". Run the ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/2.23jetsonedge/hardhat_detectation.py"},"hardhat_detectation.py")," to apply the ML model with the following command. The codes might required an external ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/2.23jetsonedge/device_patches.py"},"file"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"python3 hardhat_detectation.py /home/jetson-nano/modelfile.eim\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/jetsonsdk8.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 6"),". The result should look familiar to these:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/2.23jetsonedge/nvresult1.png"})),(0,a.kt)("p",null,"Or can it be an image, deploy your ML application for the PPE detection pipeline in 5 mins? Stay tuned with us!"),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
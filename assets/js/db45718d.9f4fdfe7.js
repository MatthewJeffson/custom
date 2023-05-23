"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[59997],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(a),u=r,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},301:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={description:"Deci Platform",title:"Deci Platform",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/DeciAI-Getting-Started",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},i=void 0,l={unversionedId:"Edge/reComputer/Software/DeciAI-Getting-Started",id:"Edge/reComputer/Software/DeciAI-Getting-Started",title:"Deci Platform",description:"Deci Platform",source:"@site/docs/Edge/reComputer/Software/DeciAI-Getting-Started.md",sourceDirName:"Edge/reComputer/Software",slug:"/DeciAI-Getting-Started",permalink:"/custom/DeciAI-Getting-Started",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Software/DeciAI-Getting-Started.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Deci Platform",title:"Deci Platform",keywords:["Edge","reComputer Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/DeciAI-Getting-Started",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Getting Started with Docker",permalink:"/custom/jetson-docker-getting-started"},next:{title:"Getting Started with Allxon on NVIDIA\xae Jetson Devices",permalink:"/custom/Allxon-Jetson-Getting-Started"}},p={},s=[{value:"Hardware supported",id:"hardware-supported",level:2},{value:"Hardware prerequisites",id:"hardware-prerequisites",level:2},{value:"Sign Up for Deci Account",id:"sign-up-for-deci-account",level:2},{value:"Deci Lab model zoo with pre-optimized models",id:"deci-lab-model-zoo-with-pre-optimized-models",level:2},{value:"Optimize your own model",id:"optimize-your-own-model",level:2},{value:"Compare model performance",id:"compare-model-performance",level:2},{value:"Visualize on Deci Lab",id:"visualize-on-deci-lab",level:3},{value:"Performance comparison",id:"performance-comparison",level:4},{value:"Deploy on Jetson device and benchmark",id:"deploy-on-jetson-device-and-benchmark",level:3},{value:"Install INFERY",id:"install-infery",level:4},{value:"Load the model",id:"load-the-model",level:4},{value:"Measure performance of a model",id:"measure-performance-of-a-model",level:4},{value:"Performance comparison",id:"performance-comparison-1",level:4},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:s};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-deci-on-nvidia-jetson-devices"},"Getting Started with Deci on NVIDIA\xae Jetson Devices"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/Deci-thumb.jpg",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"Deci platform enables you to manage, optimize, deploy and serve models in your production environment with ease. You can continue using popular DL frameworks, such as TensorFlow, PyTorch, Keras and ONNX. All you need is Deci web-based platform or Deci Python client in order to run it from your code."),(0,r.kt)("p",null,"Deci provides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Performance Acceleration \u2013 Accelerate model inference performance by 2x \u2013 10x on any hardware, without compromising accuracy, by using Deci\u2019s Automated Neural Architecture Construction (AutoNAC) technology.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Scaling on Any Hardware \u2013 Cut up to 80% of cloud computation costs and BOM to enable inference at scale, regardless of whether it\u2019s from a private or public cloud, from your own server or from any computer, edge or mobile device.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Inference Benchmarking \u2013 Benchmark your models across any target hardware environment and batch size to find your model\u2019s optimal Throughput, Latency, Memory Usage and Cloud Costs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Model Packaging \u2013 Quickly and Easily Deploy to Production \u2013 Seamlessly deploy trained models from the Deci Lab to any production environment, including all environmental library dependencies in a single encapsulated container.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Model Serving \u2013 Deci\u2019s proprietary deep-learning run-time inference engine can be deployed on your own machine (on any hardware \u2013 on-prem / edge / cloud). Deci provides the following options for deploying your Deci Optimized Model as a siloed efficient run-time server:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Deci\u2019s Runtime Inference Container (RTiC), which is containerized machine learning runtime engine."),(0,r.kt)("li",{parentName:"ul"},"Deci\u2019s INFERY (from the word inference) that enables you to run a model from a Python package.")))),(0,r.kt)("h2",{id:"hardware-supported"},"Hardware supported"),(0,r.kt)("p",null,"Deci is supported by the following Jetson-related hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Kits by Seeed:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"reComputer J1010 built with Jetson Nano"),(0,r.kt)("li",{parentName:"ul"},"reComputer J1020 built with Jetson Nano"),(0,r.kt)("li",{parentName:"ul"},"reComputer J2011 built with Jetson Xavier NX 8GB"),(0,r.kt)("li",{parentName:"ul"},"reComputer J2012 built with Jetson Xavier NX 16GB"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Carrier Boards by Seeed:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Jetson Mate"),(0,r.kt)("li",{parentName:"ul"},"Jetson SUB Mini PC"),(0,r.kt)("li",{parentName:"ul"},"Jetson Xavier AGX H01 Kit"),(0,r.kt)("li",{parentName:"ul"},"A203 Carrier Board"),(0,r.kt)("li",{parentName:"ul"},"A203 (Version 2) Carrier Board"),(0,r.kt)("li",{parentName:"ul"},"A205 Carrier Board"),(0,r.kt)("li",{parentName:"ul"},"A206 Carrier Board"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Official Development Kits by NVIDIA:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Nano Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Xavier NX Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Xavier Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson TX2 Developer Kit"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Orin Developer Kit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Official SoMs by NVIDIA:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Nano module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson Xavier NX module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson TX2 NX module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson TX2 module"),(0,r.kt)("li",{parentName:"ul"},"NVIDIA\xae Jetson AGX Xavier module")))),(0,r.kt)("p",null,"If you own any of the above hardware, you can proceed to working with deci on your hardware."),(0,r.kt)("h2",{id:"hardware-prerequisites"},"Hardware prerequisites"),(0,r.kt)("p",null,"Prepare the following hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Any of the above Jetson Devices running JetPack 4.6"),(0,r.kt)("li",{parentName:"ul"},"Monitor, keyboard, mouse (optional)")),(0,r.kt)("h2",{id:"sign-up-for-deci-account"},"Sign Up for Deci Account"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Visit ",(0,r.kt)("a",{parentName:"p",href:"https://console.deci.ai/sign-up"},"this page")," to sign up for a Deci account")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Enter the required details and finish the sign up process"))),(0,r.kt)("p",null,"You will now be presented with Deci Lab platform"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/2.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("h2",{id:"deci-lab-model-zoo-with-pre-optimized-models"},"Deci Lab model zoo with pre-optimized models"),(0,r.kt)("p",null,"By default, Deci Lab includes ",(0,r.kt)("strong",{parentName:"p"},"ResNet50 Baseline")," model which is already loaded into the interface with a couple of optimizations for different hardware. That's not all. Deci offers a massive collection of base models with the correponding optimized versions of the models for different hardware in Deci Model Zoo. Click ",(0,r.kt)("strong",{parentName:"p"},"Model Zoo")," and ",(0,r.kt)("strong",{parentName:"p"},"List")," to view all the available models."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/3.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"As an example, we will search for ",(0,r.kt)("strong",{parentName:"p"},"YOLOX")," in the search bar to view all the YOLOX models."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/4.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"As you can see, there are base models such as ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano"),", ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Small")," and optimized models such as ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Nano Optimized"),", ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Xavier Optimized")),(0,r.kt)("h2",{id:"optimize-your-own-model"},"Optimize your own model"),(0,r.kt)("p",null,"As explained above, you can use pre-optimized models directly without needing to manually optimize them. However, if you want to use your own model, you can upload your model to Deci Lab and optimize it according to your target hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," On Deci Lab, click ",(0,r.kt)("strong",{parentName:"p"},"+ New Model")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/5.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," Choose an appropriate task according to your model. Here we have chosen ",(0,r.kt)("strong",{parentName:"p"},"Object Detection")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/6.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Enter a name for the model and click ",(0,r.kt)("strong",{parentName:"p"},"Next")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/7.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Choose a model framework (ONNX in this case), upload a model according to the chosen framework and click ",(0,r.kt)("strong",{parentName:"p"},"Next"),". Here we have uploaded ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/meituan/YOLOv6/releases/tag/0.1.0"},"yolov6n.onnx model"),"."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/8.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 5:")," Select ",(0,r.kt)("strong",{parentName:"p"},"Primary hardware"),", ",(0,r.kt)("strong",{parentName:"p"},"Inference batch size"),", ",(0,r.kt)("strong",{parentName:"p"},"Quantization level")," and click ",(0,r.kt)("strong",{parentName:"p"},"Next")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/9.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 6:")," Add performance goals and constraints. This will be mainly useful if you use ",(0,r.kt)("strong",{parentName:"p"},"AutoNAC")," which is a feature included in ",(0,r.kt)("strong",{parentName:"p"},"premium version"),". AutoNAC can dramatically increase model inference performance while decreasing model size and much more. If you are not using AutoNAC, you need to fill a value for ",(0,r.kt)("strong",{parentName:"p"},"Throughput")," and here we have set it as 40 (it can be a random value). Finally click ",(0,r.kt)("strong",{parentName:"p"},"start")," to begin the optimization process."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/10.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("p",null,"Now the optimization process will show it's progress as follows and will be done after a few minutes."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/11.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("h2",{id:"compare-model-performance"},"Compare model performance"),(0,r.kt)("p",null,"We can either use the Deci Lab platform to compare the model performance between the base models and the optimized models, or else deploy the model onto the target hardware and run benchmarks. Eventhough it is easier to visualize everything on Deci Lab, it is recommended to deploy the model and run benchmark on the target device to make sure the performance metrics are accurate for the specific hardware."),(0,r.kt)("h3",{id:"visualize-on-deci-lab"},"Visualize on Deci Lab"),(0,r.kt)("p",null,"Here we will use the ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano")," base model and ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Xavier NX Optimized")," models to compare."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1:")," Navigate to Model Zoo and click ",(0,r.kt)("strong",{parentName:"p"},"clone")," next to ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano")," base model and ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Xavier NX Optimized")," models"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/12.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2:")," On Deci Lab, click on the ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano")," model under ",(0,r.kt)("strong",{parentName:"p"},"MODEL_VERSIONS")," to go to ",(0,r.kt)("strong",{parentName:"p"},"model insights")," section."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3:")," Select ",(0,r.kt)("strong",{parentName:"p"},"Jetson Xavier")," as ",(0,r.kt)("strong",{parentName:"p"},"Target Hardware")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/13.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"Now you will see all the performance metrics for the ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano")," model, if it is to be deployed into a Jetson Xavier NX device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4:")," Go back to homepage of Deci Lab, click on the ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Xavier NX Optimized")," model under ",(0,r.kt)("strong",{parentName:"p"},"MODEL_VERSIONS")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/14.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("p",null,"Now you will see all the performance metrics for the ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Xavier NX Optimized")," model, if it is to be deployed into a Jetson Xavier NX device."),(0,r.kt)("h4",{id:"performance-comparison"},"Performance comparison"),(0,r.kt)("p",null,"We can compare the results we obtained previously for the Jetson Xavier target hardware using the table below"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"YOLOX_Nano"),(0,r.kt)("th",{parentName:"tr",align:null},"YOLOX_Nano Jetson Xavier NX Optimized"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accuracy"),(0,r.kt)("td",{parentName:"tr",align:null},"25.8"),(0,r.kt)("td",{parentName:"tr",align:null},"25.8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Throughput"),(0,r.kt)("td",{parentName:"tr",align:null},"62.8fps"),(0,r.kt)("td",{parentName:"tr",align:null},"175.8fps")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Latency"),(0,r.kt)("td",{parentName:"tr",align:null},"15.9361ms"),(0,r.kt)("td",{parentName:"tr",align:null},"5.6897ms")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPU memory footprint"),(0,r.kt)("td",{parentName:"tr",align:null},"1.05MB"),(0,r.kt)("td",{parentName:"tr",align:null},"1.01MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Model size"),(0,r.kt)("td",{parentName:"tr",align:null},"3.66MB"),(0,r.kt)("td",{parentName:"tr",align:null},"9.74MB")))),(0,r.kt)("p",null,"As you you can see the main performance increase is the throughput where the optimized model is nearly ",(0,r.kt)("strong",{parentName:"p"},"2.7 times faster")," than the base model."),(0,r.kt)("h3",{id:"deploy-on-jetson-device-and-benchmark"},"Deploy on Jetson device and benchmark"),(0,r.kt)("p",null,"We will now deploy the above two models onto a Jetson Xavier NX device and perform benchmark to make sure we get accurate performance results."),(0,r.kt)("h4",{id:"install-infery"},"Install INFERY"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," Open a terminal window on the Jetson device and update the packages list")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt update \n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Install pip package manager")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install python3-pip\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Update pip to the latest version")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"python3 -m pip install -U pip\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Install INFERY for Jetson")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo python3 -m pip install https://deci-packages-public.s3.amazonaws.com/infery_jetson-3.2.2-cp36-cp36m-linux_aarch64.whl\n")),(0,r.kt)("h4",{id:"load-the-model"},"Load the model"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1.")," On Deci Lab, hover your mouse over the model name and click ",(0,r.kt)("strong",{parentName:"li"},"Deploy")," from the pop-up")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/15.png",alt:"pir",width:1e3,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2.")," Click ",(0,r.kt)("strong",{parentName:"li"},"Download model")," to download the model to the PC and then copy this model file to home directory of the Jetson device")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/16.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3.")," Open a terminal window on the Jetson device and execute")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'lakshanthad@nano:~$ python3\nPython 3.6.9 (default, Dec  8 2021, 21:08:43)\n[GCC 8.4.0] on linux\nType "help", "copyright", "credits" or "license" for more information.\n>>> import infery, numpy as np\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4.")," Copy the 2nd command under ",(0,r.kt)("strong",{parentName:"li"},"LOAD MODEL")," on the Deci lab ",(0,r.kt)("strong",{parentName:"li"},"Deploy Model")," window onto the terminal window of Jetson device (Make sure Jetson is selected for target hardware)")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/DeciAI/17.png",alt:"pir",width:500,height:"auto"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ex: model = infery.load(model_path='YOLOX_Nano.onnx', framework_type='onnx', inference_hardware='gpu')\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Make sure to adjust the ",(0,r.kt)("strong",{parentName:"p"},"model_path")," parameter according to where you copied the model before. If you copied the model file to home directory, you can keep the path as it is."),(0,r.kt)("p",null,"You will see the following output, if the model is loaded successfully"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"infery_manager -INFO- Loading model YOLOX_Nano.onnx to the GPU\ninfery_manager -INFO- Successfully loaded YOLOX_Nano.onnx to the GPU.\n")),(0,r.kt)("h4",{id:"measure-performance-of-a-model"},"Measure performance of a model"),(0,r.kt)("p",null,"To measure a model\u2019s performance using INFERY, run the ",(0,r.kt)("strong",{parentName:"p"},"model.benchmark")," command from your application"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"model.benchmark(batch_size=1)\n")),(0,r.kt)("p",null,"The following will be the output for the ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano")," model"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...\n<ModelBenchmarks: {\n    "batch_size": 1,\n    "batch_inf_time": "13.63 ms",\n    "batch_inf_time_variance": "1.12 ms",\n    "memory": "3537.89 mb",\n    "pre_inference_memory_used": "3532.94 mb",\n    "post_inference_memory_used": "3537.89 mb",\n    "total_memory_size": "7765.41 mb",\n    "throughput": "73.36 fps",\n    "sample_inf_time": "13.63 ms",\n    "include_io": true,\n    "framework_type": "onnx",\n    "framework_version": "1.8.0",\n    "inference_hardware": "GPU",\n    "infery_version": "3.2.2",\n    "date": "18:23:57__07-06-2022",\n    "ctime": 1657112037,\n    "h_to_d_mean": null,\n    "d_to_h_mean": null,\n    "h_to_d_variance": null,\n    "d_to_h_variance": null\n}>\n')),(0,r.kt)("p",null,"where:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"'batch_size' \u2013 Specifies batch size that was used for benchmark."),(0,r.kt)("li",{parentName:"ul"},"'batch_inf_time' \u2013 Specifies the latency for the entire batch."),(0,r.kt)("li",{parentName:"ul"},"'sample_inf_time' \u2013 Specifies the latency for a single sample within the batch. equivalent to batch_inf_time divided by the batch_size."),(0,r.kt)("li",{parentName:"ul"},"'memory' \u2013 Specifies the memory footprint that the model utilizes while inferencing."),(0,r.kt)("li",{parentName:"ul"},"'throughput' \u2013 Specifies the number of requests that are processed (forward passes) per second."),(0,r.kt)("li",{parentName:"ul"},"'batch_inf_time_variance' \u2013 Specifies the variance of the batch inference times during benchmark. If the variance is high, we recommend increasing the number passed to 'repetitions' to make the benchmarks more reliable.")),(0,r.kt)("p",null,"Repeat the same steps for ",(0,r.kt)("strong",{parentName:"p"},"YOLOX_Nano Jetson Xavier NX Optimized model"),", perform the benchmark and you wil see the results as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'base_inferencer -INFO- Benchmarking the model in batch size 1 and dimensions [(3, 416, 416)]...\n<ModelBenchmarks: {\n    "batch_size": 1,\n    "batch_inf_time": "5.28 ms",\n    "batch_inf_time_variance": "0.05 ms",\n    "memory": "2555.62 mb",\n    "pre_inference_memory_used": "2559.38 mb",\n    "post_inference_memory_used": "2555.62 mb",\n    "total_memory_size": "7765.41 mb",\n    "throughput": "189.25 fps",\n    "sample_inf_time": "5.28 ms",\n    "include_io": true,\n    "framework_type": "trt",\n    "framework_version": "8.0.1.6",\n    "inference_hardware": "GPU",\n    "infery_version": "3.2.2",\n    "date": "18:30:05__07-06-2022",\n    "ctime": 1657112405,\n    "h_to_d_mean": "0.43 ms",\n    "d_to_h_mean": "0.20 ms",\n    "h_to_d_variance": "0.00 ms",\n    "d_to_h_variance": "0.00 ms"\n}>\n')),(0,r.kt)("h4",{id:"performance-comparison-1"},"Performance comparison"),(0,r.kt)("p",null,"We can mainly compare the throughput for these results"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null},"YOLOX_Nano"),(0,r.kt)("th",{parentName:"tr",align:null},"YOLOX_Nano Jetson Xavier NX Optimized"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Throughput"),(0,r.kt)("td",{parentName:"tr",align:null},"73.36fps"),(0,r.kt)("td",{parentName:"tr",align:null},"189.25fps")))),(0,r.kt)("p",null,"It can be seen that the optimized model is nearly ",(0,r.kt)("strong",{parentName:"p"},"2.57 times faster")," than the base model."),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Web Page]")," ",(0,r.kt)("a",{parentName:"li",href:"https://docs.deci.ai/docs"},"Deci AI Documentation"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
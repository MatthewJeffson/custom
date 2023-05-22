"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(n),c=i,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?o.createElement(k,r(r({ref:t},u),{},{components:n})):o.createElement(k,r({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[m]="string"==typeof e?e:i,r[1]=a;for(var s=2;s<l;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},32198:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var o=n(87462),i=(n(67294),n(3905));const l={description:"ODYSSEY - X86J4105",title:"Intel OpenVINO Toolkit",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Intel-OpenVINO",last_update:{date:"01/03/2023",author:"w0x7ce"}},r="Installing Intel\xae Distribution of OpenVINO\u2122 toolkit for ODYSSEY - X86J4105",a={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Intel-OpenVINO",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Intel-OpenVINO",title:"Intel OpenVINO Toolkit",description:"ODYSSEY - X86J4105",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Intel-OpenVINO.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version",slug:"/ODYSSEY-X86J4105-Intel-OpenVINO",permalink:"/ODYSSEY-X86J4105-Intel-OpenVINO",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Computer_Version/ODYSSEY-X86J4105-Intel-OpenVINO.md",tags:[{label:"ODYSSEY",permalink:"/tags/odyssey"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672675200,formattedLastUpdatedAt:"Jan 2, 2023",frontMatter:{description:"ODYSSEY - X86J4105",title:"Intel OpenVINO Toolkit",tags:["ODYSSEY"],keywords:["ODYSSEY"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/ODYSSEY-X86J4105-Intel-OpenVINO",last_update:{date:"01/03/2023",author:"w0x7ce"}},sidebar:"ProductSidebar",previous:{title:"Mender Server on ODYSSEY - X86",permalink:"/Mender-Server-ODYSSEY-X86"},next:{title:"Intel Neural Compute Stick 2",permalink:"/ODYSSEY-X86J4105-NCS2"}},p={},s=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Install the Ubuntu OS",id:"install-the-ubuntu-os",level:2},{value:"Install the Intel\xae Distribution of OpenVINO\u2122 Toolkit",id:"install-the-intel-distribution-of-openvino-toolkit",level:2},{value:"Install External Software Dependencies",id:"install-external-software-dependencies",level:2},{value:"Set the Environment Variables",id:"set-the-environment-variables",level:2},{value:"Configure the Model Optimizer",id:"configure-the-model-optimizer",level:2},{value:"Model Optimizer Configuration Steps",id:"model-optimizer-configuration-steps",level:3},{value:"Run the Verification Script to Verify Installation",id:"run-the-verification-script-to-verify-installation",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installing-intel-distribution-of-openvino-toolkit-for-odyssey---x86j4105"},"Installing Intel\xae Distribution of OpenVINO\u2122 toolkit for ODYSSEY - X86J4105"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png",alt:null})),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"Intel\xae Distribution of OpenVINO\u2122 toolkit")," quickly deploys applications and solutions that emulate human vision. Based on Convolutional Neural Networks (CNN), the toolkit extends computer vision (CV) workloads across Intel\xae hardware, maximizing performance. The Intel\xae Distribution of OpenVINO\u2122 toolkit includes the Intel\xae Deep Learning Deployment Toolkit (Intel\xae DLDT)."),(0,i.kt)("p",null,"For more information, please visit ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/"},"Intel\xae Distribution of OpenVINO\u2122 toolkit"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," According to the official document, OpenVINO\u2122 toolkit can be installed on different Operating systems. ",(0,i.kt)("strong",{parentName:"p"},"For this tutorial, Ubuntu 18.04.4 LTS is installed on ODYSSEY - X86J4105 and will install OpenVINO\u2122 toolkit on Linux.")," It is strongly recommended to install this version of Ubuntu to avoid environment error that may occur."),(0,i.kt)("p",null,"This tutorial is modified from the official ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html"},"Install Intel\xae Distribution of OpenVINO\u2122 toolkit for Linux*"),"."),(0,i.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Working Computer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A Monitor")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Keyboard and Mouse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Internet Connection"))),(0,i.kt)("h2",{id:"install-the-ubuntu-os"},"Install the Ubuntu OS"),(0,i.kt)("p",null,"If you have not installed Ubuntu yet, please feel free to follow ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ODYSSEY-X86J4105-Installing-OS/"},"this tutorial")," to install Ubuntu into your ODYSSEY - X86J4105."),(0,i.kt)("h2",{id:"install-the-intel-distribution-of-openvino-toolkit"},"Install the Intel\xae Distribution of OpenVINO\u2122 Toolkit"),(0,i.kt)("p",null,"Download the Intel\xae Distribution of OpenVINO\u2122 toolkit package file from Intel\xae ",(0,i.kt)("a",{parentName:"p",href:"https://software.intel.com/en-us/openvino-toolkit/choose-download?elq_cid=6204639&erpm_id=9318801"},"Distribution of OpenVINO\u2122 toolkit for Linux*"),". Select the Intel\xae Distribution of OpenVINO\u2122 toolkit for Linux package from the dropdown menu."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open the Terminal in Ubuntu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Change the directories to where you downloaded the Intel Distribution of OpenVINO toolkit for Linux* package file. if downloaded to the files to the current user's ",(0,i.kt)("inlineCode",{parentName:"p"},"Downloads")," directory:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/Download/\n")),(0,i.kt)("p",null,"By default, the file is saved as ",(0,i.kt)("inlineCode",{parentName:"p"},"l_openvino_toolkit_p_<version>.tgz")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Unpack the ",(0,i.kt)("inlineCode",{parentName:"li"},".tgz")," file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"tar -xvzf l_openvino_toolkit_p_<version>.tgz\n")),(0,i.kt)("p",null,"The files are unpacked to the ",(0,i.kt)("inlineCode",{parentName:"p"},"l_openvino_toolkit_p_<version>")," folder."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("inlineCode",{parentName:"li"},"l_openvino_toolkit_p_<version>")," directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd l_openvino_toolkit_p_<version>\n")),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Install the Intel\xae Distribution of OpenVINO\u2122 Toolkit by running the following script:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./install_GUI.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This the the GUI installation Wizard, there is also the command-line instructions:",(0,i.kt)("inlineCode",{parentName:"p"},"sudo ./install.sh"),", but it is strongly recommended to use the GUI installation to avoid errors."),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Follow the instructions on the screen.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-01.png",alt:null})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},"If you select the default options, the Installation summary GUI screen will look like this:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-02.png",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Note:"),"  Can also customize to change the installation directory or components you want to install: ")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-03.png",alt:null})),(0,i.kt)("p",null,"When installed as ",(0,i.kt)("strong",{parentName:"p"},"root")," the default installation directory for the Intel Distribution of OpenVINO is ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/intel/openvino/"),"."),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"A complete screen will appear when the core components have been installed:")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-install-linux-04.png",alt:null})),(0,i.kt)("h2",{id:"install-external-software-dependencies"},"Install External Software Dependencies"),(0,i.kt)("p",null,"These dependencies are reuqired for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Intel-optimized build of OpenCV library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deep Learning Inference Engine")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Deep Learning Model Optimizer tools"))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Change to the ",(0,i.kt)("inlineCode",{parentName:"li"},"install_dependencies")," directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/intel/openvino/install_dependencies\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run the script to download and install the external software dependencies:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo -E ./install_openvino_dependencies.sh\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/dependent-complete.png",alt:null})),(0,i.kt)("p",null,"This is dependent on the internet speed, please be patient. The external software dependencies are installed!"),(0,i.kt)("h2",{id:"set-the-environment-variables"},"Set the Environment Variables"),(0,i.kt)("p",null,"You must update several environment variables before you can compile and run OpenVINO\u2122 applications. Run the following script to temporarily set your environment variables:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"source /opt/intel/openvino/bin/setupvars.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The OpenVINO environment variables are removed when you close the shell. As an option, you can permanently set the environment variables as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open and ",(0,i.kt)("inlineCode",{parentName:"li"},".bashrc")," file in <user_directory>.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"nano /home/USERNAME/.bashrc\n")),(0,i.kt)("p",null,"Replace you user name to ",(0,i.kt)("inlineCode",{parentName:"p"},"USERNAME"),"."),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Add this line to the end of the file:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"source /opt/intel/openvino/bin/setupvars.sh\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/source-environment.png",alt:null})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use ",(0,i.kt)("strong",{parentName:"p"},"Ctrl + O")," to save and ",(0,i.kt)("strong",{parentName:"p"},"Ctrl + X")," to exit.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To test your change, open a new terminal. You should see ",(0,i.kt)("inlineCode",{parentName:"p"},"[setupvars.sh] OpenVINO environment initialized")," at the top of the terminal."))),(0,i.kt)("h2",{id:"configure-the-model-optimizer"},"Configure the Model Optimizer"),(0,i.kt)("p",null,"The Model Optimizer is a Python",(0,i.kt)("em",{parentName:"p"},"-based command line tool for importing trained models from popular deep learning frameworks such as Caffe"),", TensorFlow",(0,i.kt)("em",{parentName:"p"},", Apache MXNet"),", ONNX",(0,i.kt)("em",{parentName:"p"}," and Kaldi"),"."),(0,i.kt)("p",null,"The Model Optimizer is a key component of the Intel Distribution of OpenVINO toolkit. You cannot perform inference on your trained model without running the model through the Model Optimizer. When you run a pre-trained model through the Model Optimizer, your output is an Intermediate Representation (IR) of the network. The Intermediate Representation is a pair of files that describe the whole model:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},".xml"),": Describes the network topology")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},".bin"),": Contains the weights and biases binary data"))),(0,i.kt)("p",null,"For more information about the Model Optimizer, refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/latest/_docs_MO_DG_Deep_Learning_Model_Optimizer_DevGuide.html"},"Model Optimizer Developer Guide"),"."),(0,i.kt)("h3",{id:"model-optimizer-configuration-steps"},"Model Optimizer Configuration Steps"),(0,i.kt)("p",null,"You can choose to either configure all supported frameworks at once ",(0,i.kt)("strong",{parentName:"p"},"OR")," configure one framework at a time. Choose the option that best suits your needs. If you see error messages, make sure you installed all dependencies."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OPTION 1: Configure all supported frameworks at the same time")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Model Optimizer prerequisites directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/intel/openvino/deployment_tools/model_optimizer/install_prerequisites\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run the script to configure the Model Optimizer for Caffe, TensorFlow, MXNet, Kaldi*, and ONNX:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ./install_prerequisites.sh\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"OPTION 2: Configure each framework separately")),(0,i.kt)("p",null,"Run the script for your model framework. You can run more than one script:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"Caffe"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install_prerequisites_caffe.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"TensorFlow"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install_prerequisites_tf.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"MXNet"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install_prerequisites_mxnet.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"ONNX"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install_prerequisites_onnx.sh\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For ",(0,i.kt)("strong",{parentName:"li"},"Kaldi"),":")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install_prerequisites_kaldi.sh\n")),(0,i.kt)("p",null,"Now you are ready to compile and run the samples!"),(0,i.kt)("h2",{id:"run-the-verification-script-to-verify-installation"},"Run the Verification Script to Verify Installation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"To verify the installation and compile two samples on the ODYSSEY - X86J4105's CPU:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the Inference Engine demo directory:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"cd /opt/intel/openvino/deployment_tools/demo\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Run the ",(0,i.kt)("strong",{parentName:"li"},"Image Classification verification script:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./demo_squeezenet_download_convert_run.sh\n")),(0,i.kt)("p",null,"This verification script downloads a SqueezeNet model, uses the Model Optimizer to convert the model to the .bin and .xml Intermediate Representation (IR) files. The Inference Engine requires this model conversion so it can use the IR as input and achieve optimum performance on Intel hardware."),(0,i.kt)("p",null,"This verification script builds the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/latest/_inference_engine_samples_classification_sample_async_README.html"},"Image Classification Sample Async application")," and run it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"car.png")," image located in the demo directory. When the verification script completes, you will have the label and confidence for the top-10 categories:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-1.png",alt:null})),(0,i.kt)("p",null,"Run the ",(0,i.kt)("strong",{parentName:"p"},"Inference Pipeline verification script:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"./demo_security_barrier_camera.sh\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/openvino-demo-2.png",alt:null})),(0,i.kt)("p",null,"This script downloads three pre-trained model IRs, builds the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/latest/_demos_security_barrier_camera_demo_README.html"},"Security Barrier Camera Demo")," application, and runs it with the downloaded models and the car_1.bmp image from the demo directory to show an inference pipeline. The verification script uses vehicle recognition in which vehicle attributes build on each other to narrow in on a specific attribute."),(0,i.kt)("p",null,"To learn about the verification scripts, see the ",(0,i.kt)("strong",{parentName:"p"},"README.txt")," file in ",(0,i.kt)("inlineCode",{parentName:"p"},"/opt/intel/openvino/deployment_tools/demo"),"."),(0,i.kt)("p",null,"For a description of the Intel Distribution of OpenVINO\u2122 pre-trained object detection and object recognition models, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/latest/_models_intel_index.html"},"Overview of OpenVINO\u2122 Toolkit Pre-Trained Models"),"."),(0,i.kt)("p",null,"You have completed all required installation, configuration and build steps in this guide to use your CPU to work with your trained models, feel free to explore the powerful Intel OpenVINO tool to train your models with ODYSSEY - X86J4105!"),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/"},"Intel\xae Distribution of OpenVINO\u2122 toolkit"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://docs.openvinotoolkit.org/latest/_docs_install_guides_installing_openvino_linux.html"},"Install Intel\xae Distribution of OpenVINO\u2122 toolkit for Linux*")))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
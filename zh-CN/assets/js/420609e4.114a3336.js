"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90423],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return a?n.createElement(h,r(r({ref:t},u),{},{components:a})):n.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},62506:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const l={description:"DashCamNet with Jetson Xavier NX Multicamera",title:"DashCamNet with Jetson Xavier NX Multicamera",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/DashCamNet-with-Jetson-Xavier-NX-Multicamera",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},r="DashCamNet and PeopleNet with Jetson Xavier NX Multicamera",o={unversionedId:"Edge/reComputer/Application/DashCamNet-with-Jetson-Xavier-NX-Multicamera",id:"Edge/reComputer/Application/DashCamNet-with-Jetson-Xavier-NX-Multicamera",title:"DashCamNet with Jetson Xavier NX Multicamera",description:"DashCamNet with Jetson Xavier NX Multicamera",source:"@site/docs/Edge/reComputer/Application/DashCamNet-with-Jetson-Xavier-NX-Multicamera.md",sourceDirName:"Edge/reComputer/Application",slug:"/DashCamNet-with-Jetson-Xavier-NX-Multicamera",permalink:"/custom/zh-CN/DashCamNet-with-Jetson-Xavier-NX-Multicamera",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/Application/DashCamNet-with-Jetson-Xavier-NX-Multicamera.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1672790400,formattedLastUpdatedAt:"2023\u5e741\u67084\u65e5",frontMatter:{description:"DashCamNet with Jetson Xavier NX Multicamera",title:"DashCamNet with Jetson Xavier NX Multicamera",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/DashCamNet-with-Jetson-Xavier-NX-Multicamera",last_update:{date:"01/04/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"No code Edge AI Tool",permalink:"/custom/zh-CN/No-code-Edge-AI-Tool"},next:{title:"Traffic Management DeepStream SDK",permalink:"/custom/zh-CN/Traffic-Management-DeepStream-SDK"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Materials Requirement",id:"materials-requirement",level:2},{value:"Hardware Setup",id:"hardware-setup",level:3},{value:"Software Setup",id:"software-setup",level:3},{value:"Pre-installation",id:"pre-installation",level:2},{value:"Install Docker using the repository",id:"install-docker-using-the-repository",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Install NVIDIA GPU Cloud CLI ARM64 Linux",id:"install-nvidia-gpu-cloud-cli-arm64-linux",level:3},{value:"NGC API key Generation",id:"ngc-api-key-generation",level:4},{value:"Install the TAO Toolkit",id:"install-the-tao-toolkit",level:3},{value:"<strong>Virtual Environment - Virtualenv</strong>",id:"virtual-environment---virtualenv",level:4},{value:"<strong>Set Python version in the Virtual Environment</strong>",id:"set-python-version-in-the-virtual-environment",level:4},{value:"<strong>Install the TAO package</strong>",id:"install-the-tao-package",level:4},{value:"Install DeepStream5",id:"install-deepstream5",level:3},{value:"Install Jetson Multicamera Pipelines and Quick Start",id:"install-jetson-multicamera-pipelines-and-quick-start",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dashcamnet-and-peoplenet-with-jetson-xavier-nx-multicamera"},"DashCamNet and PeopleNet with Jetson Xavier NX Multicamera"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Nowadays, in the fields of autonomous driving, car recording and violation monitoring we often use artificial intelligence to help us identify vehicle information, vehicle license plates and surrounding obstacles. Thanks to the large number of pre-trained models provided by Nvidia NGC, we can do these complex tasks more easily."),(0,i.kt)("p",null,"Creating an AI/machine learning model from scratch can cost you a lot of time and money. ",(0,i.kt)("a",{parentName:"p",href:"https://blogs.nvidia.com/blog/2019/02/07/what-is-transfer-learning/"},"Transfer learning")," is a popular technique that can be used to extract learned features from an existing neural network model to a new one. The NVIDIA TAO(",(0,i.kt)("em",{parentName:"p"},"Train, Adapt, and Optimize"),") Toolkit is a CLI and Jupyter notebook based solution of ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/tao"},"NVIDIA TAO"),", that abstracts away the AI/deep learning framework complexity, letting you fine-tune on high-quality NVIDIA pre-trained AI models with only a fraction of the data compared to training from scratch."),(0,i.kt)("p",null,"The TAO Toolkit also supports 100+ permutations of NVIDIA-optimized model architectures and backbones such as EfficientNet, YOLOv3/v4, RetinaNet, FasterRCNN, UNET, and many more."),(0,i.kt)("p",null,"Credit to NVIDIA's ",(0,i.kt)("a",{parentName:"p",href:"https://developer.nvidia.com/blog/creating-a-real-time-license-plate-detection-and-recognition-app/"},"repository")," and Tomasz's ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines"},"project"),", we are going to detect cars and people with muliticamera deployed in Jetson Xavier NX. Both  ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html"},"Jetson SUB Mini PC")," are good for this demo."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"NVIDIA TAO Toolkit was previously named NVIDIA Transfer Learning Toolkit(Tlt).")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://developer.nvidia.com/sites/default/files/akamai/metropolis-and-iva-tao-toolkit-sw-stack-update-diagram-1875240-r7.jpg",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h2",{id:"materials-requirement"},"Materials Requirement"),(0,i.kt)("h3",{id:"hardware-setup"},"Hardware Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/NVIDIA-Jetson-Xavier-NX-Developer-Kit-p-4573.html"},"NVIDIA\xae Jetson Xavier\u2122 NX Developer Kit")," / ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Jetson-SUB-Mini-PC-Blue-p-5212.html"},"Jetson SUB Mini PC"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://www.nvidia.com/content/dam/en-zz/Solutions/intelligent-machines/jetson-xavier-nx/products/jetson-xavier-nx-dev-kit-2c50-D.jpg",alt:"pir",width:300,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"USB Webcam / Raspberry Pi  Camera V2.1 / ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/IMX219-130-Camera-130-FOV-Applicable-for-Jetson-Nano-p-4606.html"},"IMX219-130 8MP cameras")," / ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/High-Quality-Camera-For-Raspberry-Pi-Compute-Module-Jetson-Nano-p-4729.html"},"High quality 12.3MP IMX477 cameras"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://images.prismic.io/rpf-products/ffa68a46-fd44-4995-9ad4-ac846a5563f1_Camera%20V2%20Hero.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=50&w=600&h=400",alt:"pir",width:300,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Display with HDMI, DP or eDP interface"),(0,i.kt)("li",{parentName:"ul"},"PC with Linux distribution operating system")),(0,i.kt)("h3",{id:"software-setup"},"Software Setup"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Jetpack 4.5 or 4.6 for Jetson Xavier NX"),(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"DeepStream"),(0,i.kt)("li",{parentName:"ul"},"TAO Toolkit"),(0,i.kt)("li",{parentName:"ul"},"Python3.6 with Pypi(python3-pip) and Virtual Environments"),(0,i.kt)("li",{parentName:"ul"},"NVIDIA Container Toolkit")),(0,i.kt)("p",null,"The methods of software installation will be provided in the following steps."),(0,i.kt)("h2",{id:"pre-installation"},"Pre-installation"),(0,i.kt)("p",null,"Before we start the project, we need to install Docker Engine on Ubuntu. There are several ways to install Docker Engine and you can choose either way depending on your needs. If you alreadly set it up, you can skip the step."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Most users ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository"},"set up Docker\u2019s repositories")," and install from them for the ease of installation and upgrade tasks, which is the recommended approach."),(0,i.kt)("li",{parentName:"ul"},"Some users download the DEB package and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-from-a-package"},"install it manually")," and manage upgrades completely manually. This is useful in situations such as installing Docker on air-gapped systems with no access to the internet."),(0,i.kt)("li",{parentName:"ul"},"In testing and development environments, some users choose to use automated ",(0,i.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/ubuntu/#install-using-the-convenience-script"},"convenience scripts")," to install Docker.")),(0,i.kt)("p",null,"Here we are going to use the first one. Before we install the docker, it is required to ensure the version of it is latest. The names of old versions might be ",(0,i.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"docker.io"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-engine"),", you can check it using the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get purge docker docker-engine docker.io containerd runc\n")),(0,i.kt)("p",null,"When you uninstall the docker, the contents of ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/docker/"),", including images, containers, volumes, and networks, all of which are preserved. If you want to start with a clean installation, you can refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/ubuntu/#uninstall-docker-engine"},"uninstall Docker Engine")," section at the bottom of this page."),(0,i.kt)("h3",{id:"install-docker-using-the-repository"},"Install Docker using the repository"),(0,i.kt)("p",null,"Before we install Docker Engine on a new host machine, it is required to set up the Docker repository. Afterward, we then can install and update Docker from the repository."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Set up the repository with ",(0,i.kt)("inlineCode",{parentName:"li"},"apt")," package")),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," package index and install packages to allow ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," to use a repository over HTTPS with following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," sudo apt-get update\n sudo apt-get install \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n")),(0,i.kt)("p",null,"Add Docker\u2019s official GPG key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n")),(0,i.kt)("p",null,"Use the following command to set up the ",(0,i.kt)("strong",{parentName:"p"},"stable")," repository. To add the ",(0,i.kt)("strong",{parentName:"p"},"nightly")," or ",(0,i.kt)("strong",{parentName:"p"},"test")," repository, add the word ",(0,i.kt)("inlineCode",{parentName:"p"},"nightly")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"test")," (or both) after the word ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," in the commands below. You can ",(0,i.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/install/"},"Learn about ",(0,i.kt)("strong",{parentName:"a"},"nightly")," and ",(0,i.kt)("strong",{parentName:"a"},"test")," channels")," here."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},' echo \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Install the Docker Engine")),(0,i.kt)("p",null,"Update the ",(0,i.kt)("inlineCode",{parentName:"p"},"apt")," package index, and install the ",(0,i.kt)("strong",{parentName:"p"},"latest version")," of Docker Engine and containerd with following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," sudo apt-get update\n sudo apt-get install docker-ce docker-ce-cli containerd.io\n")),(0,i.kt)("p",null,"We can verify whether the Docker Engine is installed correctly by running the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-world")," image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"}," sudo docker run hello-world\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Manage Docker as a non-root user with following processes.")),(0,i.kt)("p",null,"Create the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," group."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo groupadd docker\n")),(0,i.kt)("p",null,"Add the user into the ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," group."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo usermod -aG docker $USER\n")),(0,i.kt)("p",null,"Log out and log back in to reevaluate the group membership."),(0,i.kt)("p",null,"Verify that you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"docker")," commands without ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," by running ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-world")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run hello-world\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4"),". Set up the NVIDIA Container Toolkit with following processes:")),(0,i.kt)("p",null,"Setup the ",(0,i.kt)("inlineCode",{parentName:"p"},"stable")," repository and the GPG key:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"distribution=$(. /etc/os-release;echo $ID$VERSION_ID) \\\n   && curl -s -L https://nvidia.github.io/nvidia-docker/gpgkey | sudo apt-key add - \\\n   && curl -s -L https://nvidia.github.io/nvidia-docker/$distribution/nvidia-docker.list | sudo tee /etc/apt/sources.list.d/nvidia-docker.list\n")),(0,i.kt)("p",null,"Update the package listing and install the ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-docker2")," package (and dependencies):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update\nsudo apt-get install -y nvidia-docker2\n")),(0,i.kt)("p",null,"Restart the Docker daemon to complete the installation after setting the default runtime:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo systemctl restart docker\n")),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h3",{id:"install-nvidia-gpu-cloud-cli-arm64-linux"},"Install NVIDIA GPU Cloud CLI ARM64 Linux"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"NVIDIA GPU Cloud (NGC) CLI")," is a Python-based command-line interface for managing Docker containers in the NGC Container Registry. With NGC CLI, you can perform many of the same operations that are available from the NGC website, such as running jobs and viewing Docker repositories within your organization and team space."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Move to the ",(0,i.kt)("a",{parentName:"li",href:"https://ngc.nvidia.com/setup/installers/cli"},"Download CLI")," page and download the zip file that contains the binary. The NGC CLI binary for ARM64 is supported on Ubuntu 18.04 and later distributions.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/NGC.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Transfer the zip file to a directory where you have permissions and unzip it and finally execute the binary.")),(0,i.kt)("p",null,"You can also download, unzip, and install from the command line by moving to a directory where you have execute permissions and then running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wget -O ngccli_arm64.zip https://ngc.nvidia.com/downloads/ngccli_arm64.zip && unzip -o ngccli_arm64.zip && chmod u+x ngc\n")),(0,i.kt)("p",null,"Check the binary's md5 hash to ensure the file wasn't corrupted during download:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"md5sum -c ngc.md5\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Add your current directory to path:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'echo "export PATH=\\"\\$PATH:$(pwd)\\"" >> ~/.bash_profile && source ~/.bash_profile\n')),(0,i.kt)("p",null,"You must configure NGC CLI for your use in order to run the commands."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4"),". Enter the following command, including your API key when prompted:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"ngc config set\n")),(0,i.kt)("h4",{id:"ngc-api-key-generation"},"NGC API key Generation"),(0,i.kt)("p",null,"It is required API key to configure NGC CLI, we can generate it through the NGC website."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Move to the ",(0,i.kt)("a",{parentName:"li",href:"https://catalog.ngc.nvidia.com/"},"website"),' and click "Sign In/Sign Up".')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302020851671.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Register an account as a NVIDIA developer.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021137914.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Choose an account to proceed.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021226602.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4"),'. Click "Setup" on the upper right corner of the page.')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021332972.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5"),'. Select "Get API Key".')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021429846.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6"),'. Click "Generate API Key".')),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021504292.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 7"),". The API Key will show at the bottom of the page.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Multicamera-Jetson3.3/image-20220302021630443.png",alt:"pir",width:800,height:"auto"})),(0,i.kt)("h3",{id:"install-the-tao-toolkit"},"Install the TAO Toolkit"),(0,i.kt)("p",null,"Python3 and python3-pip should be installed at the first:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install -y python3 python3-pip\n")),(0,i.kt)("p",null,"TAO Toolkit is a Python pip package that is hosted on the NVIDIA PyIndex. The package uses the docker restAPI under the hood to interact with the NGC Docker registry to pull and instantiate the underlying docker containers. At the previous steps, we have alreadly set an NGC account and generated an API key associated with the it. If you want to see more about ",(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/tao/tao-toolkit/text/tao_toolkit_quick_start_guide.html#install-prereq"},"Installation Prerequisites")," section, you can click it for details on creating an NGC account and obtaining an API key."),(0,i.kt)("h4",{id:"virtual-environment---virtualenv"},(0,i.kt)("strong",{parentName:"h4"},"Virtual Environment - Virtualenv")),(0,i.kt)("p",null,"A Virtual Environment is an isolated working copy of Python which allows you to work on a specific project without worry of affecting other projects. For example, you can work on a project which requires Django 1.3 while processing a project which requires Django 1.0. You can click ",(0,i.kt)("a",{parentName:"p",href:"http://pypi.python.org/pypi/virtualenv"},"here")," to create isolated Python enviroments."),(0,i.kt)("p",null,"It is highly recommanded to configure a virtual environment first and then install the TAO Toolkit."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You can install virtualenv via pip:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip install virtualenv\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Create a virtual environment:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"virtualenv venv\n")),(0,i.kt)("p",null,"It creates a copy of Python in whichever directory you ran the command in, placing it in a folder named ",(0,i.kt)("inlineCode",{parentName:"p"},"venv"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Activate the virtual environment:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"source venv/bin/activate\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are done working in the virtual environment for the moment, you can deactivate it:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"deactivate\n")),(0,i.kt)("p",null,"This puts you back to the system\u2019s default Python interpreter with all its installed libraries."),(0,i.kt)("p",null,"To delete a virtual environment, just delete its folder."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"virtualenvwarpper")),(0,i.kt)("p",null,"After a while, though, you might end up with a lot of virtual environments littered across your system, and its possible you\u2019ll forget their names or where they were placed. Hence, we are using virtualenvwarpper. The ",(0,i.kt)("a",{parentName:"p",href:"http://virtualenvwrapper.readthedocs.org/en/latest/index.html"},"virtualenvwrapper")," provides a set of commands which makes working with virtual environments much more pleasant. It also places all your virtual environments in one place."),(0,i.kt)("p",null,"You can install (make sure ",(0,i.kt)("strong",{parentName:"p"},"virtualenv")," is already installed) :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"pip install virtualenvwrapper\nexport WORKON_HOME=~/Envs\nsource /usr/local/bin/virtualenvwrapper.sh\n")),(0,i.kt)("p",null,"If you want to see more information about it, please refer to ",(0,i.kt)("a",{parentName:"p",href:"http://virtualenvwrapper.readthedocs.org/en/latest/install.html"},"Full virtualenvwrapper install instructions"),".)"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"You may follow the instructions in this ",(0,i.kt)("a",{parentName:"em",href:"https://python-guide-cn.readthedocs.io/en/latest/dev/virtualenvs.html"},"link")," to set up a Python virtualenv using a virtualenvwrapper.")),(0,i.kt)("h4",{id:"set-python-version-in-the-virtual-environment"},(0,i.kt)("strong",{parentName:"h4"},"Set Python version in the Virtual Environment")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1"),". Once you have followed the instructions to install ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenvwrapper"),", set the Python version in the ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv"),". This can be done in either of the following ways:")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Defining the environment variable called VIRTUALENVWRAPPER_PYTHON. This variable should point to the path where the python3 binary is installed in your local machine. You can also add it to your ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc")," or ",(0,i.kt)("inlineCode",{parentName:"p"},".bash_profile")," for setting your Python ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv")," by default."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export VIRTUALENVWRAPPER_PYTHON=/usr/bin/python3\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Setting the path to the python3 binary when creating your ",(0,i.kt)("inlineCode",{parentName:"li"},"virtualenv")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"virtualenvwrapper")," wrapper")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"mkvirtualenv launcher -p /path/to/your/python3\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Once you have logged into the ",(0,i.kt)("inlineCode",{parentName:"li"},"virtualenv"),", the command prompt should show the name of your virtual environment")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"   (launcher) py-3.6.9 desktop:\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". When you are done with you session, you may deactivate your ",(0,i.kt)("inlineCode",{parentName:"li"},"virtualenv")," using the ",(0,i.kt)("inlineCode",{parentName:"li"},"deactivate")," command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"deactivate\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 4"),". You may re-instantiate this created ",(0,i.kt)("inlineCode",{parentName:"p"},"virtualenv")," env using the ",(0,i.kt)("inlineCode",{parentName:"p"},"workon")," command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"workon launcher\n")))),(0,i.kt)("h4",{id:"install-the-tao-package"},(0,i.kt)("strong",{parentName:"h4"},"Install the TAO package")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"step 1"),". We have alreadly set up the the environmrnt that we need. Now we can install the TAO Launcher Python package called ",(0,i.kt)("inlineCode",{parentName:"p"},"nvidia-tao")," with following command."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install nvidia-pyindex\npip3 install nvidia-tao\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"step 2"),". Invoke the entrypoints using the ",(0,i.kt)("inlineCode",{parentName:"p"},"tao")," command."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tao --help\n")),(0,i.kt)("p",null,"The sample output of the above command is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"usage: tao [-h]\n         {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,\n         heartratenet,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,\n         retinanet,speech_to_text,ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}\n         ...\n\nLauncher for TAO\n\noptional arguments:\n-h, --help            show this help message and exit\n\ntasks:\n      {list,stop,info,augment,bpnet,classification,detectnet_v2,dssd,emotionnet,faster_rcnn,fpenet,gazenet,gesturenet,heartratenet\n      ,intent_slot_classification,lprnet,mask_rcnn,punctuation_and_capitalization,question_answering,retinanet,speech_to_text,\n      ssd,text_classification,converter,token_classification,unet,yolo_v3,yolo_v4,yolo_v4_tiny}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"step 3"),". Note that under tasks you can see all the launcher-invokable tasks. The following are the specific tasks that help with handling the launched commands using the TAO Launcher:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"list"),(0,i.kt)("li",{parentName:"ul"},"stop"),(0,i.kt)("li",{parentName:"ul"},"info")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Caution:"),' If the terminal inform "bash: Cannot find tao", please use this command:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"export PATH=$PATH:~/.local/bin\ntao --help\n")),(0,i.kt)("h3",{id:"install-deepstream5"},"Install DeepStream5"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Edit ",(0,i.kt)("inlineCode",{parentName:"li"},"/etc/apt/sources.list.d/nvidia-l4t-apt-source.list")," and replace .6 with .5:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"deb https://repo.download.nvidia.com/jetson/common r32.5 main\n#deb https://repo.download.nvidia.com/jetson/common r32.6 main\ndeb https://repo.download.nvidia.com/jetson/t194 r32.5 main\n#deb https://repo.download.nvidia.com/jetson/t194 r32.6 main\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Type ",(0,i.kt)("inlineCode",{parentName:"li"},"sudo apt update")," and try again to install DeepStream 5.1.")),(0,i.kt)("p",null,"And then install it with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo -H pip3 install pyds-ext\n")),(0,i.kt)("p",null,"For further information, please check the links down below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/metropolis/deepstream/dev-guide/text/DS_docker_containers.html#a-docker-container-for-jetson"},"DeepStream-Docker Containers")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.nvidia.com/tao/tao-toolkit/text/deepstream_tao_integration.html"},"Integrating TAO Models into DeepStream")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://catalog.ngc.nvidia.com/orgs/nvidia/models/tlt_dashcamnet"},"DashCamNet"))),(0,i.kt)("h3",{id:"install-jetson-multicamera-pipelines-and-quick-start"},"Install Jetson Multicamera Pipelines and Quick Start"),(0,i.kt)("p",null,"Finally, we are going to build a typical multi-camera pipeline, i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"N\xd7(capture)->preprocess->batch->DNN-> <<your application logic here>> ->encode->file I/O + display"),", Using gstreamer and deepstream under-the-hood. Give programatic access to configure the pipeline in python via jetmulticam package."),(0,i.kt)("p",null,"This project utilizes Nvidia HW accleration for minimal CPU usage. For example, you can perform object detection in real-time on 6 camera streams using as little as 16.5% CPU. You can easily build your custom logic in python by accessing image data (via np.array), as well object detection results."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Install the Jetson Multicamera Pipelines with following command:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/NVIDIA-AI-IOT/jetson-multicamera-pipelines.git\ncd jetson-multicamera-pipelines\nbash scripts/install_dependencies.sh\nsudo -H pip3 install Cython\nsudo -H pip3 install .\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Run example with your cameras:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"source scripts/env_vars.sh \ncd examples\nsudo -H python3 example.py\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"This is the 'example.py', you can apply it to either monocular camera or multi-camera.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'import time\nfrom jetmulticam import CameraPipelineDNN\nfrom jetmulticam.models import PeopleNet, DashCamNet\n\nif __name__ == "__main__":\n\n    pipeline = CameraPipelineDNN(\n        cameras=[2, 5, 8],\n        models=[\n            PeopleNet.DLA1,\n            DashCamNet.DLA0,\n            # PeopleNet.GPU\n        ],\n        save_video=True,\n        save_video_folder="/home/nx/logs/videos",\n        display=True,\n    )\n\n    while pipeline.running():\n        arr = pipeline.images[0] # np.array with shape (1080, 1920, 3), i.e. (1080p RGB image)\n        dets = pipeline.detections[0] # Detections from the DNNs\n        time.sleep(1/30)\n')),(0,i.kt)("p",null,"This is the result of multi-camera shown up like:"),(0,i.kt)("video",{id:"video",controls:!0,src:"https://user-images.githubusercontent.com/26127866/134721058-8378697f-bbf0-4505-be75-f3dba3080c71.mp4",preload:"none"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"More")),(0,i.kt)("p",null,"There are more supported models / acceleratorss:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"pipeline = CameraPipelineDNN(\n    cam_ids = [0, 1, 2]\n    models=[\n        models.PeopleNet.DLA0,\n        models.PeopleNet.DLA1,\n        models.PeopleNet.GPU,\n        models.DashCamNet.DLA0,\n        models.DashCamNet.DLA1,\n        models.DashCamNet.GPU\n        ]\n    # ...\n)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Caution:"),' If the terminal inform "EGL Not found", please check ',(0,i.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/drive/drive_os_5.1.6.1L/nvvib_docs/index.html#page/DRIVE_OS_Linux_SDK_Development_Guide/Windows%20Systems/window_system_egl.html"},"EGLDevice"),"."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[78839],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(r),c=a,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={description:"Mender Client on reTerminal",title:"Mender Client on reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Mender-Client-reTerminal",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Installation of Mender Client on reTerminal",l={unversionedId:"Edge/reTerminal/Application/Mender-Client-reTerminal",id:"Edge/reTerminal/Application/Mender-Client-reTerminal",title:"Mender Client on reTerminal",description:"Mender Client on reTerminal",source:"@site/docs/Edge/reTerminal/Application/Mender-Client-reTerminal.md",sourceDirName:"Edge/reTerminal/Application",slug:"/Mender-Client-reTerminal",permalink:"/custom/Mender-Client-reTerminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/Mender-Client-reTerminal.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Mender Client on reTerminal",title:"Mender Client on reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Mender-Client-reTerminal",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grafana for reTerminal",permalink:"/custom/weather-dashboard-with-Grafana-reTerminal"},next:{title:"Getting Started with Home Assistant",permalink:"/custom/reTerminal_Home_Assistant"}},s={},d=[{value:"Test results",id:"test-results",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Configuring the build",id:"configuring-the-build",level:2},{value:"Setup Yocto environment",id:"setup-yocto-environment",level:3},{value:"Setup build environment",id:"setup-build-environment",level:3},{value:"Configure Mender server URL (optional)",id:"configure-mender-server-url-optional",level:3},{value:"Building the image",id:"building-the-image",level:2},{value:"Using the build output",id:"using-the-build-output",level:2},{value:"Flash instructions",id:"flash-instructions",level:2},{value:"Boot Success",id:"boot-success",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-of-mender-client-on-reterminal"},"Installation of Mender Client on reTerminal"),(0,a.kt)("p",null,"We can setup Mender Client on a reTerminal and then receive OTA updates from a Hosted or Self-Hosted Mender Server."),(0,a.kt)("p",null,"This guide focuses on using a reTerminal running a custom Linux System compiled using the Yocto Project."),(0,a.kt)("h2",{id:"test-results"},"Test results"),(0,a.kt)("p",null,"The Yocto Project releases in the table below have been tested by the Mender community. Please update it if you have tested this integration on other ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.yoctoproject.org/wiki/Releases?target=_blank"},"Yocto Project releases"),":"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Yocto Project"),(0,a.kt)("th",{parentName:"tr",align:null},"Build"),(0,a.kt)("th",{parentName:"tr",align:null},"Runtime"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"dunfell (3.1 / 5.3.0)"),(0,a.kt)("td",{parentName:"tr",align:null},"test works"),(0,a.kt)("td",{parentName:"tr",align:null},"test works")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Build")," Means that the Yocto Project build using this Mender integration completes without errors and outputs images.\n",(0,a.kt)("strong",{parentName:"p"},"Runtime")," Means that Mender has been verified to work on the board. For U-Boot-based boards, the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/devices/integrating-with-u-boot/integration-checklist?target=_blank"},"integration checklist")," has been verified."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A supported Linux distribution and dependencies installed on your workstation/laptop as described in the ",(0,a.kt)("a",{parentName:"li",href:"https://www.yoctoproject.org/docs/current/mega-manual/mega-manual.html#detailed-supported-distros"},"Yocto Mega Manual"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"NOTE. Instructions depend on which Yocto version you intend to use."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html"},"reTerminal"))),(0,a.kt)("h2",{id:"configuring-the-build"},"Configuring the build"),(0,a.kt)("h3",{id:"setup-yocto-environment"},"Setup Yocto environment"),(0,a.kt)("p",null,"Create a directory for your  ",(0,a.kt)("inlineCode",{parentName:"p"},"mender-reterminal"),"  setup to live in and clone the meta information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"mkdir mender-reterminal && cd mender-reterminal\n")),(0,a.kt)("p",null,"Get all of necessary layers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone -b master git://git.yoctoproject.org/poky layers/poky\ngit clone -b dunfell https://github.com/Seeed-Studio/meta-seeed-cm4.git layers/meta-seeed-cm4\ngit clone -b master git://git.yoctoproject.org/meta-raspberrypi layers/meta-raspberrypi\ngit clone -b dunfell https://github.com/meta-qt5/meta-qt5.git layers/meta-qt5\ngit clone -b dunfell https://github.com/openembedded/meta-openembedded.git layers/meta-openembedded\ngit clone -b dunfell git://github.com/mendersoftware/meta-mender layers/meta-mender\n")),(0,a.kt)("p",null,"In order to be compatible with meta-raspberrypi, change the gstreamer version of poky to the latest"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd layers/poky\ncp -r meta/recipes-multimedia/gstreamer/ ../\ngit checkout dunfell\nrm -r meta/recipes-multimedia/gstreamer/\ncp -r ../gstreamer/ meta/recipes-multimedia/\nrm -r ../gstreamer/\n")),(0,a.kt)("p",null,"Modify the meta-raspberrypi to avoid compile error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd layers/meta-raspberrypi\nrm dynamic-layers/meta-python/recipes-connectivity/lirc/*.bbappend\nsed -i '/^LAYERSERIES_COMPAT_raspberrypi/s/= .*$/= \"honister dunfell\"/g' conf/layer.conf\nsed -i 's/arm\\/armv8a\\///g' conf/machine/raspberrypi4-64.conf\n")),(0,a.kt)("p",null,"Modify the meta-mender to avoid compile error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd layers/meta-mender\nrm meta-mender-raspberrypi/recipes-kernel/linux/linux-raspberrypi-rt_%.bbappend\nsed -i 's/\"0x4000\"/\"0x1f000\"/g' meta-mender-raspberrypi/recipes-bsp/u-boot/u-boot-raspberrypi.inc\nsed -i 's/bootfiles/rpi-bootfiles/g' meta-mender-core/classes/mender-part-images.bbclass\n")),(0,a.kt)("p",null,"Modify the meta-seeed-cm4 to avoid compile error"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd layers/meta-seeed-cm4\nsed -i 's/eudev/udev/g' recipes-lvgl/lvgl/lvgl_demo_git.bb\n")),(0,a.kt)("h3",{id:"setup-build-environment"},"Setup build environment"),(0,a.kt)("p",null,"Initialize the build environment:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"source layers/poky/oe-init-build-env \n")),(0,a.kt)("p",null,"Add yocto project layers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"bitbake-layers add-layer ../layers/meta-raspberrypi\nbitbake-layers add-layer ../layers/meta-seeed-cm4\nbitbake-layers add-layer ../layers/meta-qt5\nbitbake-layers add-layer ../layers/meta-openembedded/meta-oe\nbitbake-layers add-layer ../layers/meta-openembedded/meta-python\nbitbake-layers add-layer ../layers/meta-mender/meta-mender-core\nbitbake-layers add-layer ../layers/meta-mender/meta-mender-raspberrypi\nbitbake-layers add-layer ../layers/meta-mender/meta-mender-demo\n")),(0,a.kt)("h3",{id:"configure-mender-server-url-optional"},"Configure Mender server URL (optional)"),(0,a.kt)("p",null,"This section is not required for a successful build but images that are generated by default are only suitable for usage with the Mender client in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/architecture/standalone-deployments?target=_blank"},"Standalone deployments"),", due to lack of server configuration."),(0,a.kt)("p",null,"You can edit the ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/local.conf")," file to provide your Mender server configuration, ensuring the generated images and Mender Artifacts are connecting to the Mender server that you are using. There should already be a commented section in the generated ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/local.conf")," file and you can simply uncomment the relevant configuration options and assign appropriate values to them."),(0,a.kt)("p",null,"Build for Hosted Mender:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# To get your tenant token:\n#    - log in to https://hosted.mender.io\n#    - click your email at the top right and then "My organization"\n#    - press the "COPY TO CLIPBOARD"\n#    - assign content of clipboard to MENDER_TENANT_TOKEN\n#\nMENDER_SERVER_URL = "https://hosted.mender.io"\nMENDER_TENANT_TOKEN = "<copy token here>"\n')),(0,a.kt)("p",null,"Build for Mender Demo Server:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# https://docs.mender.io/administration/demo-installation\n#\nMENDER_DEMO_HOST_IP_ADDRESS = "<IP address of Mender demo server>"\n')),(0,a.kt)("p",null,"Build for Mender Production/ Self-Hosted (on-prem):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'# https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production\n#\n# Uncomment below and update the URL to match your configured domain\n# name and provide the path to the generated server.crt file.\n#\n# Note that a custom server.crt file is only necessary if you are using\n# self-signed certificates.\n#\n# NOTE! It is recommend that you provide below information in your custom\n# Yocto layer and this is only for demo purposes. See linked documentation\n# for additional information.\nMENDER_SERVER_URL = "<URL of Self-Hosted Mender Server>"\nFILESEXTRAPATHS_prepend_pn-mender-client := "<DIRECTORY-CONTAINING-server.crt>:"\nSRC_URI_append_pn-mender-client = " file://server.crt"\n')),(0,a.kt)("h2",{id:"building-the-image"},"Building the image"),(0,a.kt)("p",null,"You can now proceed with building an image:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'MACHINE="seeed-reterminal-mender" bitbake rpi-test-image\n')),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"rpi-test-image")," with your desired image target."),(0,a.kt)("h2",{id:"using-the-build-output"},"Using the build output"),(0,a.kt)("p",null,"After a successful build, the images and build artifacts are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"build/tmp/deploy/images/seeed-reterminal-mender/rpi-test-image-seeed-reterminal-mender.sdimg.bz2"))),(0,a.kt)("p",null,"if you already have Mender running on your device and want to deploy a rootfs update using this build, you should use the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/architecture/mender-artifacts?target=_blank"},"Mender Artifact")," files, which have  ",(0,a.kt)("inlineCode",{parentName:"p"},".mender"),"  suffix. You can either deploy this Artifact in managed mode with the Mender server (upload it under Releases in the server UI) or by using the Mender client only in ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/architecture/standalone-deployments?target=_blank"},"Standalone deployments"),"."),(0,a.kt)("h2",{id:"flash-instructions"},"Flash instructions"),(0,a.kt)("p",null,"Please follow ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/reTerminal/#flash-raspberry-pi-os-64-bit-ubuntu-os-or-other-os-to-emmc"},"this wiki guide")," to learn about flashing the above image to the eMMC on the reTerminal."),(0,a.kt)("p",null,"Once flashed, when you turn on the reTerminal, it will boot from the compiled image."),(0,a.kt)("h2",{id:"boot-success"},"Boot Success"),(0,a.kt)("p",null,"If you see the following log from UART, that means the system has successfully booted"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[  OK  ] Started Kernel Logging Service.\n[  OK  ] Started System Logging Service.\n[  OK  ] Started D-Bus System Message Bus.\n[  OK  ] Started Getty on tty1.\n         Starting Telephony service...\n[  OK  ] Started Serial Getty on ttyS0.\n[  OK  ] Reached target Login Prompts.\n[    7.340436] audit: type=1334 audit(1638186061.687:4): prog-id=7 op=LOAD\n[    7.347278] audit: type=1334 audit(1638186061.691:5): prog-id=8 op=LOAD\n         Starting Login Service...\n[  OK  ] Started Save/Restore Sound Card State.\n[    7.386306] Bluetooth: Core ver 2.22\n[    7.390103] NET: Registered protocol family 31\n[    7.394856] Bluetooth: HCI device and connection manager initialized\n[[    7.401967] Bluetooth: HCI socket layer initialized\n  OK      7.407591] Bluetooth: L2CAP socket layer initialized\n0m] Reac[    7.413409] Bluetooth: SCO socket layer initialized\nhed target Sound Card.\n[  OK  ] Started Telephony service.\n[  OK  ] Started Avahi mDNS/DNS-SD Stack.\n[  OK  ] Started Login Service.\n\nPoky (Yocto Project Reference Distro) 3.1.12 seeed-reterminal-mender ttyS0\n\nseeed-reterminal-mender login: root\nroot@seeed-reterminal-mender:~#\n")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io"},"Mender Official Documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://docs.yoctoproject.org"},"Yocto Official Documentation"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[Web Page]")," ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/documentation/computers/compute-module.html"},"Raspberry Pi CM4 Official Documentation")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
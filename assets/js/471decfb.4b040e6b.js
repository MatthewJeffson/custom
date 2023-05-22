"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37671],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(o),h=n,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||a;return o?r.createElement(m,i(i({ref:t},s),{},{components:o})):r.createElement(m,i({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:n,i[1]=c;for(var u=2;u<a;u++)i[u]=o[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},86595:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const a={title:"DSO Nano/gcc",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-gcc/",slug:"/DSO_Nano-gcc",last_update:{date:"02/03/2022",author:"gunengyu"}},i="How to build the DSO Nano firmware using gcc",c={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc",title:"DSO Nano/gcc",description:"The DSO Nano firmware can be build with a gcc toolchain. The gcc-specific files reside in the project/gcc folder of the firmware source code tree.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Nano-gcc",permalink:"/DSO_Nano-gcc",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-gcc.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"Feb 2, 2022",frontMatter:{title:"DSO Nano/gcc",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-gcc/",slug:"/DSO_Nano-gcc",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano/Qemu gdb",permalink:"/DSO_Nano-Qemu_gdb"},next:{title:"DSO Quad",permalink:"/DSO_Quad"}},l={},u=[{value:"Get a ARM cross-building gcc toolchain",id:"get-a-arm-cross-building-gcc-toolchain",level:2},{value:"Get and build the firmware source code",id:"get-and-build-the-firmware-source-code",level:2},{value:"Compile the application part",id:"compile-the-application-part",level:3},{value:"Compile the library part",id:"compile-the-library-part",level:3},{value:"Testing",id:"testing",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-build-the-dso-nano-firmware-using-gcc"},"How to build the DSO Nano firmware using gcc"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Nano",title:"DSO Nano"},"DSO Nano")," firmware can be build with a gcc toolchain. The gcc-specific files reside in the project/gcc folder of the firmware source code tree."),(0,n.kt)("h2",{id:"get-a-arm-cross-building-gcc-toolchain"},"Get a ARM cross-building gcc toolchain"),(0,n.kt)("p",null,"The ARM toolchain most of us use is the GCC from ARM at ","<",(0,n.kt)("a",{parentName:"p",href:"https://launchpad.net/gcc-arm-embedded"},"https://launchpad.net/gcc-arm-embedded"),">","."),(0,n.kt)("p",null,'For Linux, you can choose the tarball or the installer. The latter is a much larger download than the former, for some reason. In any case make sure you have the toolchain\'s "bin" directory in your path. For example, if you extracted the tarball to /opt, type this in your shell, or add it to your .bashrc or .pam_environment:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"PATH=/opt/gcc-arm-none-eabi-4_6-2012q2/bin:$PATH\n")),(0,n.kt)("p",null,"Once you have the toolchain set up correctly, simply typing:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"arm-none-eabi-gcc -v\n")),(0,n.kt)("p",null,"should list the compiler version and the options it was built with. If you instead get an error, please fix your toolchain installation before continuing."),(0,n.kt)("p",null,"If you can not find a pre-built ARM toolchain for your platform, or otherwise want to build the toolchain yourself, you can download the source or check out ",(0,n.kt)("a",{parentName:"p",href:"https://open-bldc.org/wiki/Building_ARM_Toolchain"},"https://open-bldc.org/wiki/Building_ARM_Toolchain")),(0,n.kt)("h2",{id:"get-and-build-the-firmware-source-code"},"Get and build the firmware source code"),(0,n.kt)("p",null,"For now, get the code from Tormod's gitlab tree:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git clone https://gitlab.com/dsonano/dso-firmware.git\ncd dso-firmware\n")),(0,n.kt)("p",null,"If you later want to update your tree to latest git:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"git pull\n")),(0,n.kt)("h3",{id:"compile-the-application-part"},"Compile the application part"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd DS0201_APP/project/gcc\nmake\n")),(0,n.kt)("h3",{id:"compile-the-library-part"},"Compile the library part"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ../../../DS0201_LIB/project/gcc\nmake clean\nmake\n")),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"Use ",(0,n.kt)("a",{parentName:"p",href:"/Dfu-util",title:"Dfu-util"},"Dfu-util")," to download the dso-lib.bin and dso-app.bin files to your Nano V1 or V2. For the Nano V3 model, copy the dso-lib.hex and dso-app.hex one at a time to the DFU virtual USB drive."),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
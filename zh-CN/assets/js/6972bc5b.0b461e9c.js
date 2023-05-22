"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=l(n),c=o,g=m["".concat(i,".").concat(c)]||m[c]||p[c]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=c;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"DSO Nano/Qemu gdb",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-Qemu_gdb/",slug:"/DSO_Nano-Qemu_gdb",last_update:{date:"02/03/2022",author:"gunengyu"}},s=void 0,u={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Qemu_gdb",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Qemu_gdb",title:"DSO Nano/Qemu gdb",description:"Running STM32 code on the qemu emulator",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Qemu_gdb.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Nano-Qemu_gdb",permalink:"/custom/zh-CN/DSO_Nano-Qemu_gdb",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-Qemu_gdb.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"2022\u5e742\u67083\u65e5",frontMatter:{title:"DSO Nano/Qemu gdb",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-Qemu_gdb/",slug:"/DSO_Nano-Qemu_gdb",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano/OpenOCD gdb",permalink:"/custom/zh-CN/DSO_Nano-OpenOCD_gdb"},next:{title:"DSO Nano/gcc",permalink:"/custom/zh-CN/DSO_Nano-gcc"}},i={},l=[{value:"Running STM32 code on the qemu emulator",id:"running-stm32-code-on-the-qemu-emulator",level:2},{value:"Building qemu-system-arm (optional)",id:"building-qemu-system-arm-optional",level:2},{value:"Note on STM32 support",id:"note-on-stm32-support",level:2},{value:"Start the emulator",id:"start-the-emulator",level:2},{value:"Links",id:"links",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:l};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"running-stm32-code-on-the-qemu-emulator"},"Running STM32 code on the qemu emulator"),(0,o.kt)("p",null,"With the qemu emulator you can run and debug arm code without any arm processor! You can load the code onto the emulator, connect the gdb debugger and step through the code. Of course, peripherals, timers and other microcontroller components will not be emulated, but it is helpful for verifying some of the code. You will need to run the qemu-system-arm which is part of the QEMU project. On Debian/Ubuntu it is included in the qemu-system package (or qemu-kvm-extras in older versions)."),(0,o.kt)("h2",{id:"building-qemu-system-arm-optional"},"Building qemu-system-arm (optional)"),(0,o.kt)("p",null,"If there is no distribution packages for your system, or the packaged version is older than 0.13, it is recommended that you build it yourself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wget [http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz](http://download.savannah.gnu.org/releases/qemu/qemu-0.13.0.tar.gz)\ntar xzf qemu-0.13.0.tar.gz\ncd qemu-0.13.0\n./configure --disable-kvm --enable-debug --target-list=arm-softmmu --audio-card-list= --audio-drv-list=\nmake\n")),(0,o.kt)("p",null,"You can now run it directly from the arm-softmmu folder, unless you want to install it to e.g. /usr/local/bin."),(0,o.kt)("h2",{id:"note-on-stm32-support"},"Note on STM32 support"),(0,o.kt)("p",null,"The STM32 microcontroller in the DSO Nano uses an ARM cortex-m3 core. The qemu-system-arm does not know the ROM (flash) layout of the STM32. In particular, it does not read out the stack and reset vector from the 0x08000000 address. But if your elf file correctly designates the reset handler as entry point, it will use this as the starting address. However you will have to set the stack pointer (sp) manually."),(0,o.kt)("h2",{id:"start-the-emulator"},"Start the emulator"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Start the qemu emulator and its internal gdb server (-s option), loading your elf file as a "kernel":')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"qemu-system-arm -cpu cortex-m3 -S -s -singlestep -nographic -m 513 -kernel dso-lib.elf\n")),(0,o.kt)("p",null,'The "-m 513" option makes a memory space that includes the 0x2000000 RAM addresses of the STM32.'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Start up gdb (the one from your ARM toolchain!) and connect to the qemu emulator:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"arm-none-eabi-gdb dso-lib.elf\n(gdb) target extended-remote localhost:1234\n(gdb) set $sp = 0x20005000\n(gdb) where\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"You can now start stepping through the program, just some examples")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(gdb) display/i $pc\n(gdb) stepi\n(gdb) next\n(gdb) break main.c:23\n(gdb) x/16wx 0x20000000\n(gdb) cont\n(gdb) info reg\n(gdb) info variables\n(gdb) print *pProperty\n")),(0,o.kt)("h2",{id:"links"},"Links"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/"},"http://balau82.wordpress.com/2010/08/17/debugging-arm-programs-inside-qemu/"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"http://embdev.net/topic/129757"},"http://embdev.net/topic/129757")))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
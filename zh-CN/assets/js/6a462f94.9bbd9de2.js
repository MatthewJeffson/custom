"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68870],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(n),g=o,m=d["".concat(l,".").concat(g)]||d[g]||c[g]||a;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},79108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"DSO Nano/OpenOCD gdb",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-OpenOCD_gdb/",slug:"/DSO_Nano-OpenOCD_gdb",last_update:{date:"02/03/2022",author:"gunengyu"}},s="Debugging with OpenOCD and gdb",i={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-OpenOCD_gdb",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-OpenOCD_gdb",title:"DSO Nano/OpenOCD gdb",description:"Please use openocd 4.0 or newer.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-OpenOCD_gdb.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Nano-OpenOCD_gdb",permalink:"/zh-CN/DSO_Nano-OpenOCD_gdb",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Nano-OpenOCD_gdb.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"2022\u5e742\u67082\u65e5",frontMatter:{title:"DSO Nano/OpenOCD gdb",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Nano-OpenOCD_gdb/",slug:"/DSO_Nano-OpenOCD_gdb",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano/Development",permalink:"/zh-CN/DSO_Nano-Development"},next:{title:"DSO Nano/Qemu gdb",permalink:"/zh-CN/DSO_Nano-Qemu_gdb"}},l={},p=[{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging-with-openocd-and-gdb"},"Debugging with OpenOCD and gdb"),(0,o.kt)("p",null,"Please use openocd 4.0 or newer."),(0,o.kt)("p",null,"This example assumes you have a Segger J-Link compatible JTAG adapter between your computer and the device (or dev board) you are debugging. It is possible to use an SWD (ST-Link) adapter instead, for this use openocd 0.7 or newer."),(0,o.kt)("p",null,"Start the openocd server with configuration files matching your hardware:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openocd -f interface/jlink.cfg -f target/stm32.cfg\n")),(0,o.kt)("p",null,"Or, if you are using SWD:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"openocd -f interface/stlink-v2.cfg -f target/stm32f1x_stlink.cfg\n")),(0,o.kt)("p",null,"In a second window, start an interactive session with openocd:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"telnet localhost 4444\n")),(0,o.kt)("p",null,'This seems to be necessary to avoid "target is not halted" errors and other trouble later:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reset_config trst_and_srst\n")),(0,o.kt)("p",null,"Stop the target (the arm processor):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reset halt\n")),(0,o.kt)("p",null,"If you have not already flashed the binary, using for instance dfu-util, you can do it over JTAG like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"reset init\nflash write_image erase dso-lib.hex 0 ihex\nreset halt\n")),(0,o.kt)("p",null,"In a third window, start gdb or gdbtui:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'arm-none-eabi-gdb\n(gdb) file dso-lib.elf\n(gdb) target remote localhost:3333"\n(gdb) load dso-lib.elf\n')),(0,o.kt)("p",null,"You should now be able to run and debug:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(gdb) set $pc = Reset_Handler\n(gdb) display/i $pc\n(gdb) stepi\n")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
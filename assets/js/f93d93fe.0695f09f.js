"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63169],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),d=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=d(r),f=n,m=c["".concat(l,".").concat(f)]||c[f]||p[f]||i;return r?o.createElement(m,a(a({ref:t},s),{},{components:r})):o.createElement(m,a({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=f;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:n,a[1]=u;for(var d=2;d<i;d++)a[d]=r[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82851:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const i={title:"Dfu-util",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Dfu-util/",slug:"/Dfu-util",last_update:{date:"02/03/2022",author:"gunengyu"}},a=void 0,u={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/Dfu-util",id:"Sensor/Beyond_Grove/Accessories/Tools/Dfu-util",title:"Dfu-util",description:"Updating firmware with dfu-util",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/Dfu-util.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/Dfu-util",permalink:"/custom/Dfu-util",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/Dfu-util.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643846400,formattedLastUpdatedAt:"Feb 3, 2022",frontMatter:{title:"Dfu-util",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Dfu-util/",slug:"/Dfu-util",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano",permalink:"/custom/DSO_Nano"},next:{title:"Replacement LCD Screen for DSO nano",permalink:"/custom/Replacement_LCD_Screen_for_DSO_nano"}},l={},d=[{value:"Updating firmware with dfu-util",id:"updating-firmware-with-dfu-util",level:2},{value:"Downloading a non-dfuse file to a dfuse device (advanced)",id:"downloading-a-non-dfuse-file-to-a-dfuse-device-advanced",level:2},{value:"How to build dfu-util from source",id:"how-to-build-dfu-util-from-source",level:2},{value:"Links",id:"links",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"updating-firmware-with-dfu-util"},"Updating firmware with dfu-util"),(0,n.kt)("p",null,"You will need dfu-util 0.5 or newer to download dfu files to the ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Nano",title:"DSO Nano"},"DSO Nano"),".\nOlder dfu-util versions will not work. The DSO Nano, and many other devices based on ST Micro's microcontrollers, uses ST Micro's own DFU extensions (DfuSe) which are not compatible with the DFU standard."),(0,n.kt)("p",null,"You can find a dfu-util 0.8 package for Ubuntu 10.04 in ",(0,n.kt)("a",{parentName:"p",href:"https://launchpad.net/~tormodvolden/+archive/ppa/+packages?field.series_filter=lucid"},"Tormod's PPA"),". Just download and install the right .deb package. The same package should install fine in any later Ubuntu version or Debian unstable as well. For other operating systems you may have to build dfu-util yourself as described at the dfu-util home page."),(0,n.kt)("p",null,"To download a .dfu firmware file from your computer to your Nano, run this command"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dfu-util -a 0 -D your-firmware-file.dfu\n")),(0,n.kt)("p",null,'You might have to rerun it a couple of times until it succeeds. If you get "permission denied" errors, prefix the command line with "sudo ".\nDo not forget to repeat the command with all needed firmware files (APP and LIB).'),(0,n.kt)("h2",{id:"downloading-a-non-dfuse-file-to-a-dfuse-device-advanced"},"Downloading a non-dfuse file to a dfuse device (advanced)"),(0,n.kt)("p",null,"A standard DFU device will accept a raw binary file from the computer and load it into the right place in flash memory.\nOn the other hand, with DfuSe, the addresses are given by the .dfu file and the computer has to tell the device where to load it."),(0,n.kt)("p",null,"So to download a raw binary file to a DfuSe device you have to know the target address."),(0,n.kt)("p",null,"Example, to download a raw binary file (in case you are developing):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"dfu-util -a 0 --dfuse-address 0x08004000 -D your-lib.bin\ndfu-util -a 0 --dfuse-address 0x0800C000 -D your-app.bin\n")),(0,n.kt)("h2",{id:"how-to-build-dfu-util-from-source"},"How to build dfu-util from source"),(0,n.kt)("p",null,"See the ",(0,n.kt)("a",{parentName:"p",href:"http://dfu-util.sourceforge.net/build.html"},"build instructions")," at the dfu-util home page."),(0,n.kt)("h2",{id:"links"},"Links"),(0,n.kt)("p",null,"Original forum posts and discussion:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=12&t=1353&start=10"},"Linux procedure"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=12&t=1364"},"Mac OS X specific instructions")))),(0,n.kt)("p",null,"Official home page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://dfu-util.sourceforge.net/"},"dfu-util homepage"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
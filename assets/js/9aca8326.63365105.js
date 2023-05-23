"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[69302],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=u(o),m=n,h=l["".concat(p,".").concat(m)]||l[m]||d[m]||i;return o?r.createElement(h,s(s({ref:t},c),{},{components:o})):r.createElement(h,s({ref:t},c))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,s=new Array(i);s[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[l]="string"==typeof e?e:n,s[1]=a;for(var u=2;u<i;u++)s[u]=o[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},33719:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var r=o(87462),n=(o(67294),o(3905));const i={description:"Create a doc page with rich content.",title:"GPIO and Grove for reComputer Series",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_GPIO_Grove",last_update:{date:"11/21/2022",author:"w0x7ce"},no_comments:!1},s="GPIO and Grove for reComputer Jetson",a={unversionedId:"Edge/reComputer/reComputer_Jetson_Series_GPIO_Grove",id:"Edge/reComputer/reComputer_Jetson_Series_GPIO_Grove",title:"GPIO and Grove for reComputer Series",description:"Create a doc page with rich content.",source:"@site/docs/Edge/reComputer/reComputer_Jetson_Series_GPIO_Grove.md",sourceDirName:"Edge/reComputer",slug:"/reComputer_Jetson_Series_GPIO_Grove",permalink:"/custom/reComputer_Jetson_Series_GPIO_Grove",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reComputer/reComputer_Jetson_Series_GPIO_Grove.md",tags:[],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1668988800,formattedLastUpdatedAt:"Nov 21, 2022",frontMatter:{description:"Create a doc page with rich content.",title:"GPIO and Grove for reComputer Series",keywords:["Edge","reComputer"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reComputer_Jetson_Series_GPIO_Grove",last_update:{date:"11/21/2022",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to use 40-Pin GPIO on reComputer Jetson Boards",permalink:"/custom/reComputer_Jetson_GPIO"},next:{title:"MaskCam",permalink:"/custom/Jetson-Nano-MaskCam"}},p={},u=[{value:"Jetson Extensions",id:"jetson-extensions",level:2},{value:"Connect Jetson to Grvoe System",id:"connect-jetson-to-grvoe-system",level:2},{value:"Creating More AI Possibilities with Grove PiHAT and NVIDIA Jetson Nano",id:"creating-more-ai-possibilities-with-grove-pihat-and-nvidia-jetson-nano",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function l(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gpio-and-grove-for-recomputer-jetson"},"GPIO and Grove for reComputer Jetson"),(0,n.kt)("h2",{id:"jetson-extensions"},"Jetson Extensions"),(0,n.kt)("p",null,"The GPIO (General Purpose Input/Output) ports are located on the top edge of the Jetson carrier board. It looks like two long rows of metal pins where you can attach functioning ports like LEDs and switches to the board for control under a program you create. These pins can be used for input and output."),(0,n.kt)("p",null,"The figure below is the pin description of the 40-pin GPIO on the Jetson-10-1-A carrier board."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/reComputer-Jetson-Nano/59.png",alt:"pir",width:500,height:"auto"})),(0,n.kt)("p",null,"You might want to check out the details about expansion pins and learn how to configure them, in the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nvidia.com/jetson/l4t/index.html#page/Tegra%20Linux%20Driver%20Package%20Development%20Guide/hw_setup_jetson_io.html#"},"Configuring Jetson Expansion Header")," documentation of the NVIDIA Jetson Linux Developer Guide, you'll learn how to operate Jetson-IO and add support for custom hardware."),(0,n.kt)("h2",{id:"connect-jetson-to-grvoe-system"},"Connect Jetson to Grvoe System"),(0,n.kt)("p",null,"Grove is an open source, modulated, ready-to-use toolset which applies the building block method to assemble electronics. Grove significantly simplifies learning and usage compared to traditional complex learning methods using breadboards and various electronic components to assemble projects."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/cn/Grove/"},"Learn about Grove Systems"))),(0,n.kt)("h2",{id:"creating-more-ai-possibilities-with-grove-pihat-and-nvidia-jetson-nano"},"Creating More AI Possibilities with Grove PiHAT and NVIDIA Jetson Nano"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/recomputerzhongwen/regpio.jpg",alt:"pir",width:500,height:"auto"})),(0,n.kt)("p",null,"If you want to apply ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},"Grove Sensors")," into the Jetson Nano, the best way is acquiring the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md"},"grove.py")," and ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/grove.py/blob/master/doc/README.md"},"Python libraies")," which will help you get started with your projects in serval minutes! Click ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2019/06/13/create-more-ai-possibilities-with-grove-pihat-for-nvidia-jetson-nano/"},"here")," for more information."),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}l.isMDXComponent=!0}}]);
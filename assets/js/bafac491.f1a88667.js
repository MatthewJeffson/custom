"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32697],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(o),k=n,h=d["".concat(c,".").concat(k)]||d[k]||p[k]||i;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=o[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}k.displayName="MDXCreateElement"},93811:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(87462),n=(o(67294),o(3905));const i={description:"How To Use Sketchbook",title:"How To Use Sketchbook",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_To_Use_Sketchbook",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},a=void 0,s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_To_Use_Sketchbook",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_To_Use_Sketchbook",title:"How To Use Sketchbook",description:"How To Use Sketchbook",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_To_Use_Sketchbook.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/How_To_Use_Sketchbook",permalink:"/custom/How_To_Use_Sketchbook",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_To_Use_Sketchbook.md",tags:[{label:"Tutorial",permalink:"/custom/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"How To Use Sketchbook",title:"How To Use Sketchbook",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_To_Use_Sketchbook",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Use External Editor",permalink:"/custom/Use_External_Editor"},next:{title:"Sketchbook of Sidekick Advanced Kit",permalink:"/custom/Sketchbook_of_Sidekick_Advanced_Kit"}},c={},l=[{value:"Resources",id:"resources",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In another document, we have made a detailed introduction about Library, we know that Library really very easy to use! Download a Library, put it to the Arduino libraries directory, open the example and it works."),(0,n.kt)("p",null,"However, sometimes we will encounter this problem: You made an interesting demo, this demo needs to contain some libraries, and you would like to share this demo, so you need to send the code to some guys, but there is often a compilation error problem: missing certain library. So you need to send the library to him. If your demo needs a lot of library, these will much more problem."),(0,n.kt)("p",null,"In fact, Arduino has a Sketchbook can be a good solution to this problem. Sketchbook is actually a folder, you can put it anywhere. Here we will have a try using Sketchbook."),(0,n.kt)("p",null,"I had written a Sketchbook, you can download ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/loovee/NFC_ShieldBot_Demo"},"here"),",\nIgnore its contents; our purpose is to familiarize you with Sketchbook. After downloading, we put it to F drive."),(0,n.kt)("p",null,"Open the Arduino IDE, click File-",">"," Preferences, click the pop-up screen:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook1.jpg",alt:null})),(0,n.kt)("p",null,"Point the Sketchbook location to the directory where the downloaded code. And click OK to complete the operation. Close and re-open the Arduino IDE."),(0,n.kt)("p",null,"Open File -",">"," Sketchbook, you can see a lot of items pop up, such as demo, shield_bot and so on. We click demo, then you can open it, and you can see the code of demo now. You can find this demo contains a lot of libraries that you hadn\u2019t seen before. Then we click compile button, success with no errors, strange thing? In fact, you may had noticed, there is a folder named libraries in NFC_Shieldbot_Demo, yes, the libraries is here."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook2.jpg",alt:null})),(0,n.kt)("p",null,"Thus, when you want to make a demo, you can try to build a Sketchbook, and put the libraries needed to libraries folder of Sketchbook. Just like the Sketchbook you had downloaded minutes ago:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/img/Sketchbook3.jpg",alt:null})),(0,n.kt)("h3",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/How_To_Use_Sketchbook/res/How_to_use_Sketchbook.pdf"},"download pdf file"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
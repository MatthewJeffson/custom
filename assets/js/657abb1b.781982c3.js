"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4414],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,y=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return r?n.createElement(y,i(i({ref:t},d),{},{components:r})):n.createElement(y,i({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55993:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={description:"A Handy Serial Library",title:"A Handy Serial Library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/A_Handy_Serial_Library",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},i=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Handy_Serial_Library",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Handy_Serial_Library",title:"A Handy Serial Library",description:"A Handy Serial Library",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Handy_Serial_Library.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/A_Handy_Serial_Library",permalink:"/custom/A_Handy_Serial_Library",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/A_Handy_Serial_Library.md",tags:[{label:"Tutorial",permalink:"/custom/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"A Handy Serial Library",title:"A Handy Serial Library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/A_Handy_Serial_Library",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"Download Arduino and install Arduino driver",permalink:"/custom/Download-Arduino-and-install-Arduino_Driver"},next:{title:"How to Add Seeed boards to Arduino IDE",permalink:"/custom/Seeed_Arduino_Boards"}},s={},u=[{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Arduino hadn\u2019t debugging function, maybe this is the first impression of some software engineers. In fact, often we just use the Arduino to do some simple application, even there\u2019s no debugging, and it does not matter. If you want to use the Arduino to do some complex application, such as face recognition, then maybe you have to rethink if you had chosen the wrong platform."),(0,a.kt)("p",null,"As for some simple application, we can use serial print to debug, and Arduino had provided a very easy to use serial print function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'void setup()\n{\n    Serial.begin(115200);\n\n    Serial.println("hello world");\n}\n\nvoid loop()\n{\n    // add code here\n}\n')),(0,a.kt)("p",null,"Besides, there is Serial.print, Serial.write and so on. When you are familiar with these functions, you will find that these function is not so friendly actually, just have a look at the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'void setup()\n{\n    Serial.begin(115200);\n\n    Serial.print("a[");\n    Serial.print(3);\n    Serial.print("] = ");\n    Serial.println(5);\n\n}\n\nvoid loop()\n{\n    // add code here\n}\n')),(0,a.kt)("p",null,"To print a","[3]","=5, it can take 4 lines of code, troublesom? Remember the C language lessons, it takes only one line of code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'printf("a[%d] = %d", 3, 5);\n')),(0,a.kt)("p",null,"As for C++, one line is enough also:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'cout &lt;&lt; "a[" &lt;&lt; 3 &lt;&lt; "] = " &lt;&lt; 5 &lt;&lt; endl;\n')),(0,a.kt)("p",null,"I will glad that if Arduino has the function such as printf or cout, it\u2019s really convenient. It\u2019s lucky that some guy had written such library, you can refer to ",(0,a.kt)("a",{parentName:"p",href:"http://arduiniana.org/libraries/streaming/"},"http://arduiniana.org/libraries/streaming/"),"\nI made some small change to this library, you can download here: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/loovee/Streaming"},"https://github.com/loovee/Streaming")," , why not have a try?"),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/A_Handy_Serial_Library/res/A_handy_Serial_library.pdf"},"download pdf file"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
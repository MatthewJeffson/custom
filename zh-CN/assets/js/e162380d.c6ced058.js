"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},64771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={description:"How to use and write a library",title:"How to use and write a library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_to_use_and_write_a_library",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},i=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_use_and_write_a_library",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_use_and_write_a_library",title:"How to use and write a library",description:"How to use and write a library",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_use_and_write_a_library.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/How_to_use_and_write_a_library",permalink:"/zh-CN/How_to_use_and_write_a_library",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_use_and_write_a_library.md",tags:[{label:"Tutorial",permalink:"/zh-CN/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675180800,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"How to use and write a library",title:"How to use and write a library",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_to_use_and_write_a_library",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"How to install an Arduino library",permalink:"/zh-CN/How_to_install_Arduino_Library"},next:{title:"Upload Code",permalink:"/zh-CN/Upload_Code"}},s={},u=[{value:"Resources",id:"resources",level:3},{value:"Tech Support",id:"tech-support",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Arduino popularity largely dependent on a large number of excellent and easy to use Library. The Arduino Library using object-oriented C + + class library from, you can use it easily without knowing the implementation details of the Library."),(0,a.kt)("p",null,"You can fine Arduino Library in the path: \\arduino-1.0.5\\libraries. And there\u2019s an example in it, which have some demo to help you understand and use the Library.\nIt\u2019 very easy to use a Library, here we introduce how to write a Library."),(0,a.kt)("p",null,"Then let\u2019s go, we write a simple calculate Library here. Include the following function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"int sum(int a, int b);\nint minus(int a, int b);\n")),(0,a.kt)("p",null,"Yes, It\u2019s very simple, it\u2019s obvious that the first function return the sum of two numbers, while the second function return minus.\nFirstly, we built a folder named Calc, it\u2019s also the name of the Library.\nThen we built a Calc.h file, and fill it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#ifndef __CALC_H__\n#define __CALC_H__\n\nclass Calc{\npublic:\n    int sum(int a, int b);                  // return sum\n    int minus(int a, int b);                // return difference\n};\n#endif\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++",metastring:'title="Calc.cpp"',title:'"Calc.cpp"'},'#include "Calc.h"\n\nint Calc::sum(int a, int b)\n{\n    return (a+b);\n}\n\nint minus(int a, int b)\n{\n    return (a-b);\n}\n')),(0,a.kt)("p",null,"To help users to understand the use of the Library, we built an examples folder. And there\u2019s a demo named cale_test, code folowing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},'// demo of calc library\n#include &lt;Calc.h&gt;\n\nvoid setup()\n{\n    Serial.begin(9600);\n\n    Serial.print("10+15 = ");\n    Serial.println(calc.sum(10, 15));\n    Serial.print("100-19 = ");\n    Serial.println(calc.minus(100, 19));\n\n    Serial.println("Calc Library test over!");\n}\n\nvoid loop()\n{\n\n}\n\n')),(0,a.kt)("p",null,"When using the Arduino IDE, you will see some library functions will be displayed in red, while others do not. Obviously, let the function name and the header file names as well as some macro definitions displayed in red makes the code look more beautiful, and easy to check for errors.\nTo help us create this library can be displayed on the IDE into the red; you need to add a keyboards.txt file in Calc folder, keyboards.txt as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c++"},"#######################################\n# Syntax Coloring Map For Calc\n#######################################\n\n#######################################\n# Datatypes (KEYWORD1)\n#######################################\nCalc    KEYWORD1\ncalc    KEYWORD1\n\n#######################################\n# Methods and Functions (KEYWORD2)\n#######################################\nsum KEYWORD2\nminus   KEYWORD2\n\n#######################################\n# Constants (LITERAL1)\n#######################################\n")),(0,a.kt)("p",null,"As you can see, the class name or file name written before KEYWORD1, the function name written before KEYWORD2. As for LITERAL1, used to highlight the name of the macro definition, which is not related to this library, so empty. Note that between the name and KEYWORD1 has only one tabs, no spaces.\nThus, we finish our Calc Library, and it works fine. If you want to try at the library and not bother to type even bother to copy, you can go to my github and download it: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/loovee/Calc"},"https://github.com/loovee/Calc")),(0,a.kt)("h3",{id:"resources"},"Resources"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/How_to_use_and_write_a_library/res/How_to_use_and_write_a_library.pdf"},"download pdf file")),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". "),(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37433],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),p=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={description:"Overview",title:"Overview",keywords:["Wio_terminal Microphone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Mic",last_update:{date:"1/17/2023",author:"jianjing Huang"}},o="Getting Started with Microphone",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Microphone/Wio-Terminal-Mic",id:"Sensor/Wio_Terminal/Hardware_Overview/Microphone/Wio-Terminal-Mic",title:"Overview",description:"Overview",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Microphone/Wio-Terminal-Mic.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Microphone",slug:"/Wio-Terminal-Mic",permalink:"/custom/Wio-Terminal-Mic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Microphone/Wio-Terminal-Mic.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Overview",title:"Overview",keywords:["Wio_terminal Microphone"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Mic",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/Wio-Terminal-Infrared-Emitter"},next:{title:"Overview",permalink:"/custom/Wio-Terminal-Buzzer"}},c={},p=[{value:"Example Code",id:"example-code",level:2},{value:"Example Code with LCD Screen",id:"example-code-with-lcd-screen",level:2},{value:"Libraries Installation",id:"libraries-installation",level:3}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-microphone"},"Getting Started with Microphone"),(0,r.kt)("p",null,"This wiki introduces how to use the built-in microphone for audio input in Wio Terminal. The microphone can be used to detect surrounding sound and respond accordingly."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/MIC.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This wiki only demonstrates the very basic of the microphone, and we are working on a microphone library for Wio Terminal to enable much more functions! Stay tuned!")),(0,r.kt)("h2",{id:"example-code"},"Example Code"),(0,r.kt)("p",null,"Note: ",(0,r.kt)("inlineCode",{parentName:"p"},"WIO_MIC")," is defined for the built-in microphone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n  pinMode(WIO_MIC, INPUT);\n  Serial.begin(115200);\n}\n\nvoid loop() {\n  int val = analogRead(WIO_MIC);\n  Serial.println(val);\n  delay(200);\n}\n")),(0,r.kt)("h2",{id:"example-code-with-lcd-screen"},"Example Code with LCD Screen"),(0,r.kt)("h3",{id:"libraries-installation"},"Libraries Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"LCD")," library.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Linechart")," library."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"seeed_line_chart.h" //include the library\n#include <math.h>\n\nTFT_eSPI tft;\n\n#define max_size 50 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\nvoid setup() {\n    pinMode(WIO_MIC, INPUT);\n\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_DARKGREY);\n\n    int val = analogRead(WIO_MIC);\n\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(val); //read variables and store in data\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("Microphone Reading")\n                .align(center)\n                .color(TFT_WHITE)\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(2);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(true) //drawing a cirle at each point, default is on.\n                .y_role_color(TFT_WHITE)\n                .x_role_color(TFT_WHITE)\n                .value(data) //passing through the data to line graph\n                .color(TFT_RED) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n    delay(50);\n}\n')))}u.isMDXComponent=!0}}]);
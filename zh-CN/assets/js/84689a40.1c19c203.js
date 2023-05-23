"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62218],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),p=d(i),u=a,g=p["".concat(s,".").concat(u)]||p[u]||c[u]||r;return i?n.createElement(g,o(o({ref:t},h),{},{components:i})):n.createElement(g,o({ref:t},h))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},92510:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={title:"Line Charts",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/",slug:"/Wio-Terminal-LCD-Linecharts",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Line Charts",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Linecharts",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Linecharts",title:"Line Charts",description:"This repo describes how to draw line graphs on Wio Terminal. You can use this to display raw sensor values to visualize readings on screen just like the serial plotter! The library is very flexible and can alter to your own need.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Linecharts.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Linecharts",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Linecharts",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Linecharts.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"2022\u5e741\u670811\u65e5",frontMatter:{title:"Line Charts",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/",slug:"/Wio-Terminal-LCD-Linecharts",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Loading Image",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Loading-Image"},next:{title:"Histogram",permalink:"/custom/zh-CN/Wio-Terminal-LCD-Histogram"}},s={},d=[{value:"Libraries Installation",id:"libraries-installation",level:2},{value:"Installing the Seeed_Arduino_Linechart Library For 2D Graphic For Wio Terminal",id:"installing-the-seeed_arduino_linechart-library-for-2d-graphic-for-wio-terminal",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"To initialize for drawing Line graph",id:"to-initialize-for-drawing-line-graph",level:3},{value:"To initialize the LCD Screen",id:"to-initialize-the-lcd-screen",level:3},{value:"Loading variables to data",id:"loading-variables-to-data",level:3},{value:"To initialize settings for the Line Graph Title",id:"to-initialize-settings-for-the-line-graph-title",level:3},{value:"To initialize settings for the Line Graph and Draw on the LCD Screen",id:"to-initialize-settings-for-the-line-graph-and-draw-on-the-lcd-screen",level:3},{value:"Complete code",id:"complete-code",level:2},{value:"Tech Support",id:"tech-support",level:2}],h={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"line-charts"},"Line Charts"),(0,a.kt)("p",null,"This repo describes how to draw line graphs on Wio Terminal. You can use this to display raw sensor values to visualize readings on screen just like the serial plotter! The library is very flexible and can alter to your own need."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0277.2019-11-27%2018_19_05.gif"})),(0,a.kt)("h2",{id:"libraries-installation"},"Libraries Installation"),(0,a.kt)("h3",{id:"installing-the-seeed_arduino_linechart-library-for-2d-graphic-for-wio-terminal"},"Installing the Seeed_Arduino_Linechart Library For 2D Graphic For Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Linechart"},"Seeed_Arduino_Linechart")," and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Now, the Wio Terminal_graphics library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_Linechart")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"to-initialize-for-drawing-line-graph"},"To initialize for drawing Line graph"),(0,a.kt)("p",null,"At first, defining the maximum number of variables to be stored, and a doubles type to store data, as well as creating a buffer using the TFT Sprite function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"#define max_size 50 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\n")),(0,a.kt)("h3",{id:"to-initialize-the-lcd-screen"},"To initialize the LCD Screen"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"void setup() {\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n")),(0,a.kt)("h3",{id:"loading-variables-to-data"},"Loading variables to data"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"data.push(variable)")," to store variables (i.e. sensor readings) in data, and if it reached the pre-defined maximum number it removes the first variable (keep on going)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"    spr.fillSprite(TFT_WHITE);\n    if (data.size() == max_size) {\n        data.pop(); //this is used to remove the first read variable\n    }\n    data.push(0.01 * random(1, 10)); //read variables and store in data\n")),(0,a.kt)("h3",{id:"to-initialize-settings-for-the-line-graph-title"},"To initialize settings for the Line Graph Title"),(0,a.kt)("p",null,"Some settings to configure the desired display of the title for line graph. Initialize a ",(0,a.kt)("inlineCode",{parentName:"p"},"text(x, y)")," struct, where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the starting coordinates of the title. And configure settings as below. In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"header")," is the name of this struct and can change settings and configure like ",(0,a.kt)("inlineCode",{parentName:"p"},'header.value("test")')," and etc."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'    //Settings for the line graph title\n    auto header =   text(0, 0)           //starting coordinates of title\n                .value("test")      //actual title of the line graph\n                .align(center)      //horizontal alignment of title\n                .valign(vcenter)    //vertical alignment of title\n                .width(tft.width()) //width of the title\n                .thickness(3);      //thickness of the font\n\n    header.height(header.font_height() * 2); //the height of title is the twice the height of the font\n    header.draw(); \n')),(0,a.kt)("p",null,"To help understanding this example code, please refer the title configurations to the image below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:645,height:374,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/title.png"})),(0,a.kt)("h3",{id:"to-initialize-settings-for-the-line-graph-and-draw-on-the-lcd-screen"},"To initialize settings for the Line Graph and Draw on the LCD Screen"),(0,a.kt)("p",null,"Some settings to configure the desired display of the Line graph. Initialize a ",(0,a.kt)("inlineCode",{parentName:"p"},"line_chart(x, y)")," struct, where ",(0,a.kt)("inlineCode",{parentName:"p"},"(x, y)")," is the starting coordinate of the line graph. And configure settings as below. In this example, ",(0,a.kt)("inlineCode",{parentName:"p"},"content")," is the name of this struct and can change settings and configure like ",(0,a.kt)("inlineCode",{parentName:"p"},"content.based_on(0.0)")," and etc. Alter these settings for prefer display!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(false) //drawing a cirle at each point, default is on.\n                .value(data) //passing through the data to line graph\n                .color(TFT_PURPLE) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n    delay(50);\n")),(0,a.kt)("p",null,"To help understanding this example code, please refer the line graph configurations to the image below:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:768,height:432,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/linegraph2.png"})),(0,a.kt)("h2",{id:"complete-code"},"Complete code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"seeed_line_chart.h" //include the library\nTFT_eSPI tft;\n\n#define max_size 50 //maximum size of data\ndoubles data; //Initilising a doubles type to store data\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite \n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_WHITE);\n    if (data.size() == max_size) {\n        data.pop();//this is used to remove the first read variable\n    }\n    data.push(0.01 * random(1, 10)); //read variables and store in data\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("test")\n                .align(center)\n                .valign(vcenter)\n                .width(tft.width())\n                .thickness(3);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n                .width(tft.width() - content.x() * 2) //actual width of the line chart\n                .based_on(0.0) //Starting point of y-axis, must be a float\n                .show_circle(false) //drawing a cirle at each point, default is on.\n                .value(data) //passing through the data to line graph\n                .color(TFT_PURPLE) //Setting the color for the line\n                .draw();\n\n    spr.pushSprite(0, 0);\n    delay(50);\n}\n')),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
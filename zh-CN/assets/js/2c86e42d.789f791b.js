"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[68282],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,g=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},24397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"Wio Terminal Displaying Gyro",title:"Wio Terminal Displaying Gyro",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Displaying-Gyro",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Wio Terminal Displaying Accelerator Readings",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Gyro",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Gyro",title:"Wio Terminal Displaying Gyro",description:"Wio Terminal Displaying Gyro",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Gyro.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Displaying-Gyro",permalink:"/zh-CN/Wio-Terminal-Displaying-Gyro",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Displaying-Gyro.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Wio Terminal Displaying Gyro",title:"Wio Terminal Displaying Gyro",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Displaying-Gyro",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Reading Raspberry Pi's Info using Wio Terminal",permalink:"/zh-CN/Wio-Terminal-Reading-Raspberry-Pi"},next:{title:"Wio Terminal Storing Data",permalink:"/zh-CN/Wio-Terminal-Storting-Analog-Data"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Code",id:"code",level:2},{value:"Complete code",id:"complete-code",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"wio-terminal-displaying-accelerator-readings"},"Wio Terminal Displaying Accelerator Readings"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0279.2019-11-28%2018_25_43.gif"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"This example demonstrates how to draw line graph on Wio Terminal. In this example, the 3-axis accelerator readings(3 sets of data) are plotted into one line graph to show the real-time positioning of the Wio Terminal!"),(0,i.kt)("h3",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"3-axis accelerator readings displaying in one Line graph")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Real time positioning of the Wio Terminal"))),(0,i.kt)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Linechart"},"Seeed_Arduino_Linechart")," and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the on-board accelerator library ",(0,i.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR"),", Please visit ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta"},"Seeed_Arduino_LIS3DHTR")," for more information."))),(0,i.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/AcceleratorReadings.ino.zip"},(0,i.kt)("inlineCode",{parentName:"a"},"AcceratorReadings.ino"))," file and upload to your Wio Terminal through ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),". Make sure you installed all the libraries.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Move Wio Terminal in different axis and see what it displays, and you could also open ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial Plotter")," to check the effect!"))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"To initialize LCD and Accelerator"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h" //include the accelerator library\n#include"seeed_line_chart.h" //include the line chart library\n\nTFT_eSPI tft;\nLIS3DHTR<TwoWire>  lis;\n\n#define MAX_SIZE 50 //maximum size of data\ndoubles accelerator_readings[3];\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n    spr.setRotation(3);\n\n    lis.begin(Wire1);\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);\n\n    Serial.begin(115200);\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Reading Accelerator data and loading data"))),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"void loop() {\n    spr.fillSprite(TFT_WHITE);\n    float x_raw = lis.getAccelerationX();\n    float y_raw = lis.getAccelerationY();\n    float z_raw = lis.getAccelerationZ();\n    ...\n\n    if (accelerator_readings[0].size() == MAX_SIZE) {\n      for (uint8_t i = 0; i<3; i++){\n        accelerator_readings[i].pop(); //this is used to remove the first read variable\n      }\n    }\n\n    accelerator_readings[0].push(x_raw); //store x-axis readings\n    accelerator_readings[1].push(y_raw); //store y-axis readings\n    accelerator_readings[2].push(z_raw); //store z-axis readings\n    ...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Title configurations"))),(0,i.kt)("p",null,"Please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Linecharts/"},"Line Charts")," for more information."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'auto header =  text(0, 0)\n            .value("Accelerator Readings")\n            .align(center)\n            .valign(vcenter)\n            .width(spr.width())\n            .thickness(2);\n\nheader.height(header.font_height(&spr) * 2);\nheader.draw(&spr); // Header height is the twice the height of the font\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Line Chart configurations"))),(0,i.kt)("p",null,"To draw multiple lines in one graph, you can pass doubles array into the line graph like ",(0,i.kt)("inlineCode",{parentName:"p"},"content.value({doubles[0],doubles[1],doubles[2]...})")," as shown below. Can also set the color for each line using ",(0,i.kt)("inlineCode",{parentName:"p"},".color()")," where the order of color will match the order of data passing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"auto content = line_chart(20, header.height()); //(x,ywhere the line graph begins\n     content\n            .height(spr.height() - header.height() * 1.5) //actual height of the line chart\n            .width(spr.width() - content.x() * 2) //actual width of the line chart\n            .based_on(-2.0) //Starting point of y-axis, must be a float\n            .show_circle(false) //drawing a cirle at each point, default is on.\n            .value({accelerator_readings[0],accelerator_readings[1], accelerator_readings[2]}) //passing through the data to line graph\n            .max_size(MAX_SIZE)          \n            .color(TFT_BLUE, TFT_RED, TFT_GREEN)\n            .backgroud(TFT_WHITE)\n            .draw(&spr);\n")),(0,i.kt)("h2",{id:"complete-code"},"Complete code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include"LIS3DHTR.h" //include the accelerator library\n#include"seeed_line_chart.h" //include the line chart library\n\nTFT_eSPI tft;\nLIS3DHTR<TwoWire>  lis;\n\n#define MAX_SIZE 50 //maximum size of data\ndoubles accelerator_readings[3];\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\n\nvoid setup() {\n    tft.begin();\n    tft.setRotation(3);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n    spr.setRotation(3);\n\n    lis.begin(Wire1);\n    lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ);\n    lis.setFullScaleRange(LIS3DHTR_RANGE_2G);\n\n    Serial.begin(115200);\n}\n\nvoid loop() {\n    spr.fillSprite(TFT_WHITE);\n    float x_raw = lis.getAccelerationX();\n    float y_raw = lis.getAccelerationY();\n    float z_raw = lis.getAccelerationZ();\n\n    //This is used to print out on Serial Plotter, check Serial Plotter!\n    Serial.print(x_raw);\n    Serial.print(",");\n    Serial.print(y_raw);\n    Serial.print(",");\n    Serial.println(z_raw);\n\n    if (accelerator_readings[0].size() == MAX_SIZE) {\n      for (uint8_t i = 0; i<3; i++){\n        accelerator_readings[i].pop(); //this is used to remove the first read variable\n      }\n    }\n    accelerator_readings[0].push(x_raw); //read variables and store in data\n    accelerator_readings[1].push(y_raw);\n    accelerator_readings[2].push(z_raw);\n\n    //Settings for the line graph title\n    auto header =  text(0, 0)\n                .value("Accelerator Readings")\n                .align(center)\n                .valign(vcenter)\n                .width(spr.width())\n                .thickness(2);\n\n    header.height(header.font_height(&spr) * 2);\n    header.draw(&spr); // Header height is the twice the height of the font\n\n  //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n         content\n                .height(spr.height() - header.height() * 1.5) //actual height of the line chart\n                .width(spr.width() - content.x() * 2) //actual width of the line chart\n                .based_on(-2.0) //Starting point of y-axis, must be a float\n                .show_circle(false) //drawing a cirle at each point, default is on.\n                .value({accelerator_readings[0],accelerator_readings[1], accelerator_readings[2]}) //passing through the data to line graph\n                .max_size(MAX_SIZE)          \n                .color(TFT_BLUE, TFT_RED, TFT_GREEN)\n                .backgroud(TFT_WHITE)\n                .draw(&spr);\n\n    spr.pushSprite(0, 0);\n    delay(50);\n}\n')))}d.isMDXComponent=!0}}]);
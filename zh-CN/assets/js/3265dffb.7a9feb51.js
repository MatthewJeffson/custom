"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5585],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>f});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=u(i),d=a,f=p["".concat(s,".").concat(d)]||p[d]||c[d]||r;return i?n.createElement(f,o(o({ref:t},m),{},{components:i})):n.createElement(f,o({ref:t},m))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},89436:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=i(87462),a=(i(67294),i(3905));const r={description:"Wio Terminal Interactive Faces Demo",title:"Wio Terminal Interactive Faces Demo",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Interactive-Face",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Wio Terminal Interactive Emoji faces",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Interactive-Face",id:"Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Interactive-Face",title:"Wio Terminal Interactive Faces Demo",description:"Wio Terminal Interactive Faces Demo",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Interactive-Face.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Wio-Terminal-Interactive-Face",permalink:"/custom/zh-CN/Wio-Terminal-Interactive-Face",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio-Terminal-Interactive-Face.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"2023\u5e741\u670831\u65e5",frontMatter:{description:"Wio Terminal Interactive Faces Demo",title:"Wio Terminal Interactive Faces Demo",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Interactive-Face",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal Displaying Photos",permalink:"/custom/zh-CN/Wio-Terminal-Displaying-Photos"},next:{title:"Pressure sensor using the Wio terminal",permalink:"/custom/zh-CN/Barometric-Pressure-sensor-using-the-Wio-terminal"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:3},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:2},{value:"Arduino Instructions",id:"arduino-instructions",level:2},{value:"Code",id:"code",level:2}],m={toc:u};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-interactive-emoji-faces"},"Wio Terminal Interactive Emoji faces"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/C0274.2019-11-26%2014_50_05.gif"})),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"This example demonstrates how to display multiple images (eyes) onto the LCD screen through SD card (BMP format),  and with the use of the built-in buttons and gyroscope to interact with users."),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Left-Button: Previous Image (eyes)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Middle-Button: Animations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Right-Button: Next Image (eyes)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Gyro: Eyes moving according to the board orientation"))),(0,a.kt)("h2",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the LCD screen library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the SD Card library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_FS"),", Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FS/tree/beta"},"Seeed-Arduino-FS")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the on-board accelerator library ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LIS3DHTR"),", Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_LIS3DHTR/tree/beta"},"Seeed_Arduino_LIS3DHTR")," for more information.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Install the ",(0,a.kt)("inlineCode",{parentName:"p"},"RawImage.h")," library, Please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/"},"Loading Images")," for more information."))),(0,a.kt)("h2",{id:"arduino-instructions"},"Arduino Instructions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/Emoji_face.zip"},(0,a.kt)("inlineCode",{parentName:"a"},"Emoji_face.ino"))," and ",(0,a.kt)("inlineCode",{parentName:"p"},"RawImage.h")," file and upload to your Wio Terminal through ",(0,a.kt)("inlineCode",{parentName:"p"},"Adruino IDE"),". Make sure you installed all the libraries.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag the ",(0,a.kt)("inlineCode",{parentName:"p"},"face")," file (including all the images), and save them in the SD card.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Start moving your Wio Terminal and interact!"))),(0,a.kt)("h2",{id:"code"},"Code"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialise the LCD screen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},"TFT_eSPI tft;\n\nvoid setup() {\n  ...\n    tft.begin();\n    tft.setRotation(3);\n  ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialise the SD card"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},"void setup() {\n  ...\n    if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n      while (1);\n  }\n  ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialise the on-board Accelerator"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},"LIS3DHTR<TwoWire>  lis;\n\nvoid setup () {\n  ...\n  lis.begin(Wire1);\n  lis.setOutputDataRate(LIS3DHTR_DATARATE_25HZ); //Output rate of Accelerator\n  lis.setFullScaleRange(LIS3DHTR_RANGE_2G); //Scale selection\n  ...\n}\n\nvoid loop() {\n  ...\n  float x_raw = lis.getAccelerationX(); //Read the raw x-axis values of acc\n  float y_raw = lis.getAccelerationY(); //Read the raw y-axis values of acc\n  ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialise the built-in Button"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},"void setup() {\n  ...\n  pinMode(BUTTON_1, INPUT); //left button\n  pinMode(BUTTON_2, INPUT); //middle button\n  pinMode(BUTTON_3, INPUT); //right button\n  ...\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialise Image and Draw Image"))),(0,a.kt)("p",null,"In this example, the images are not 320x240 full-size so when drawing, need to specified where the image begins. The images are first loaded into the buffer to avoid image lagging from shaking the Wio Terminal."),(0,a.kt)("p",null,"For more information, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/"},"Loading Images"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},"void loop() {\n  ...\n  Raw8 * eyes = newImage<uint8_t>(eye[eye_count]); //initilising 8-bit images\n  writeToBuffer(x_axis, y_axis, eyes); //writing to buffer first, see full code to check this function\n  ...\n}\n")))}p.isMDXComponent=!0}}]);
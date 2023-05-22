"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99396],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),m=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=m(i),c=a,g=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return i?n.createElement(g,o(o({ref:t},s),{},{components:i})):n.createElement(g,o({ref:t},s))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var m=2;m<r;m++)o[m]=i[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},17432:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=i(87462),a=(i(67294),i(3905));const r={title:"Loading Image",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/",slug:"/Wio-Terminal-LCD-Loading-Image",last_update:{date:"01/11/2022",author:"gunengyu"}},o="loading Images",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Loading-Image",id:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Loading-Image",title:"Loading Image",description:"This repo describes how to load and display images from the SD card to the TFT LCD screen on Wio Terminal. This can be very useful implementation to your design and can be used in various places!",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Loading-Image.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage",slug:"/Wio-Terminal-LCD-Loading-Image",permalink:"/zh-CN/Wio-Terminal-LCD-Loading-Image",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/LCD_Usage/Wio-Terminal-LCD-Loading-Image.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"2022\u5e741\u670810\u65e5",frontMatter:{title:"Loading Image",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Loading-Image/",slug:"/Wio-Terminal-LCD-Loading-Image",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Smooth Fonts",permalink:"/zh-CN/Wio-Terminal-LCD-Anti-aliased-Fonts"},next:{title:"Line Charts",permalink:"/zh-CN/Wio-Terminal-LCD-Linecharts"}},p={},m=[{value:"Libraries Installation",id:"libraries-installation",level:2},{value:"Installing the SD Card library for Wio Terminal",id:"installing-the-sd-card-library-for-wio-terminal",level:3},{value:"Installing the TFT LCD Library For Wio Terminal",id:"installing-the-tft-lcd-library-for-wio-terminal",level:3},{value:"Image Format configuration",id:"image-format-configuration",level:2},{value:"STEP 1: Prepare the image",id:"step-1-prepare-the-image",level:3},{value:"STEP 2: Convert the <code>24-bit bitmap</code> image to the microcontroller readable <code>8-bit or 16-bit bmp</code>  format",id:"step-2-convert-the-24-bit-bitmap-image-to-the-microcontroller-readable-8-bit-or-16-bit-bmp--format",level:3},{value:"Option 1: Using Prebuilt Windows Executables (Windows only):",id:"option-1-using-prebuilt-windows-executables-windows-only",level:4},{value:"Option 2: Using Python Source Code (for cross platform)",id:"option-2-using-python-source-code-for-cross-platform",level:4},{value:"STEP 3: Image ready",id:"step-3-image-ready",level:3},{value:"Getting Started",id:"getting-started",level:2},{value:"Install the <code>RawImage.h</code> library",id:"install-the-rawimageh-library",level:3},{value:"Image Initialisation in Arduino",id:"image-initialisation-in-arduino",level:3},{value:"Example code",id:"example-code",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:m};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loading-images"},"loading Images"),(0,a.kt)("p",null,"This repo describes how to load and display images from the SD card to the TFT LCD screen on Wio Terminal. This can be very useful implementation to your design and can be used in various places!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WechatIMG2314.jpeg.jpg"})),(0,a.kt)("h2",{id:"libraries-installation"},"Libraries Installation"),(0,a.kt)("h3",{id:"installing-the-sd-card-library-for-wio-terminal"},"Installing the SD Card library for Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"visit ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-FS-Overview/"},"File System Overview"))),(0,a.kt)("h3",{id:"installing-the-tft-lcd-library-for-wio-terminal"},"Installing the TFT LCD Library For Wio Terminal"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"visit ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"TFT LCD Overview"))),(0,a.kt)("h2",{id:"image-format-configuration"},"Image Format configuration"),(0,a.kt)("h3",{id:"step-1-prepare-the-image"},"STEP 1: Prepare the image"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"We need to convert the image format to Windows 24-bit BMP format and put the image in the right folder setup ready. We recommend to use `Microsoft paint` to do so.\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1-1:")," Using ",(0,a.kt)("inlineCode",{parentName:"p"},"Microsoft paint")," to resize the image to fit into the maximum pixel size of your screen display area")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1-2:")," Then save the image by clicking ",(0,a.kt)("inlineCode",{parentName:"p"},"Save as")," followed by ",(0,a.kt)("inlineCode",{parentName:"p"},"BMP picture")," then from the file type dropdown select ",(0,a.kt)("inlineCode",{parentName:"p"},"24-bit bitmap (.bmp)"),"  file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1-3:")," Create a folder name ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp")," and save your Windows ",(0,a.kt)("inlineCode",{parentName:"p"},".bmp")," format images inside this folder."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/wioterminaltu.png"})),(0,a.kt)("h3",{id:"step-2-convert-the-24-bit-bitmap-image-to-the-microcontroller-readable-8-bit-or-16-bit-bmp--format"},"STEP 2: Convert the ",(0,a.kt)("inlineCode",{parentName:"h3"},"24-bit bitmap")," image to the microcontroller readable ",(0,a.kt)("inlineCode",{parentName:"h3"},"8-bit or 16-bit bmp"),"  format"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"To display bmp images on our embedded system, we need to get rid of some information (head files) in our Windows bmp format. We wrote a python script to do this for us, so please choose one of the following two options to convert you images.\n"))),(0,a.kt)("h4",{id:"option-1-using-prebuilt-windows-executables-windows-only"},"Option 1: Using Prebuilt Windows Executables (Windows only):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2-1-1:")," We have prepared the executable by using the ",(0,a.kt)("a",{parentName:"p",href:"https://pyinstaller.org/en/stable/"},"Pyinstaller"),"{target=_blank} package, you can download the executable by simply clicking ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.exe"},"bmp_converter.exe"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2-1-2:")," Put the downloaded ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp_converter.exe")," into the same directory with the ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp folder")," created in ",(0,a.kt)("inlineCode",{parentName:"p"},"Step 1-3"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2-1-3:")," Double click to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp_converter.exe"),", then in the pop up ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal"),' select one of the two options: "Enter ',(0,a.kt)("inlineCode",{parentName:"p"},"1")," for 8-bit colour convert; Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"2"),' for 16-bit colour convert".'))),(0,a.kt)("h4",{id:"option-2-using-python-source-code-for-cross-platform"},"Option 2: Using Python Source Code (for cross platform)"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"You should have python installed on your computer\n"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2-2-1:")," Download the Python script ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/bmp_converter.py"},"bmp_converter.py")," , and save it in the same directory with the ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp folder")," created in ",(0,a.kt)("inlineCode",{parentName:"p"},"Step 1-3"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2-2-2:")," Open ",(0,a.kt)("inlineCode",{parentName:"p"},"cmd")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"terminal")," to run the Python script. First, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," to the directory that saved the ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp_converter.py")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"bmp folder"),", then run the Python script.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2-2-3:")," Two options: Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"1")," for 8-bit colour convert; Enter ",(0,a.kt)("inlineCode",{parentName:"p"},"2")," for 16-bit colour convert"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/PythonScript.gif"})),(0,a.kt)("h3",{id:"step-3-image-ready"},"STEP 3: Image ready"),(0,a.kt)("p",null,"Now, you are able to find converted the ",(0,a.kt)("inlineCode",{parentName:"p"},".bmp")," images inside another folder name ",(0,a.kt)("inlineCode",{parentName:"p"},"rgb332"),"(8-bit) or ",(0,a.kt)("inlineCode",{parentName:"p"},"rgb565"),"(16-bit) in the bmp folder."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"install-the-rawimageh-library"},"Install the ",(0,a.kt)("a",{parentName:"h3",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h"},(0,a.kt)("inlineCode",{parentName:"a"},"RawImage.h"))," library"),(0,a.kt)("p",null,"This library is used to make loading and displaying images much easier. Download the ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/RawImage.h"},(0,a.kt)("inlineCode",{parentName:"a"},"RawImage.h"))," and attach this header file to your sketch location."),(0,a.kt)("h3",{id:"image-initialisation-in-arduino"},"Image Initialisation in Arduino"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To display images on the screen"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},'//To draw on 8-bit color image on screen, starting from point (x, y):\ndrawImage<uint8_t>("path to sd card iamge", x, y);\n\n//To draw on 16-bit color image on screen, starting from point  (x, y):\ndrawImage<uint16_t>("path to sd card iamge", x, y);\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"To initialise image (Not needed if using the above drawImage function)"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Cpp"},'//when using 8-bit colour, initialise the image following this:\nRaw8 * img8 = newImage<uint8_t>("path to sd card image");\n\n//when using 16-bit colour, initialise the image following this:\nRaw16 * img16 = newImage<uint16_t>("path to sd card image");\n')),(0,a.kt)("h2",{id:"example-code"},"Example code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'\n# include"TFT_eSPI.h"\n# include "Seeed_FS.h" //Including SD card library\n# include"RawImage.h"  //Including image processing library\nTFT_eSPI tft;\n\nvoid setup() {\n    //Initialise SD card\n    if(!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n        while (1);\n    }\n    tft.begin();\n    tft.setRotation(3);\n\n    drawImage<uint8_t>("test.bmp", 0, 0); //Display this 8-bit image in sd card from (0, 0)\n\n}\n\nvoid loop() {\n}\n\n')),(0,a.kt)("h2",{id:"faqs"},"FAQs"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If ",(0,a.kt)("inlineCode",{parentName:"strong"},"ImportError: No module named PIL"),"  happened:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Install the python module by entering ",(0,a.kt)("inlineCode",{parentName:"li"},"pip install pillow")," in the cmd or terminal")),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
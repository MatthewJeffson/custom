"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(g,a(a({ref:t},d),{},{components:n})):o.createElement(g,a({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<r;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32304:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(87462),i=(n(67294),n(3905));const r={description:"Speech Recognition",title:"Speech Recognition",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-TFLite-Mic",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="Speech Recognition on Seeed Studio XIAO nRF52840 Sense",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Mic",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Mic",title:"Speech Recognition",description:"Speech Recognition",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Mic.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML",slug:"/XIAO-BLE-Sense-TFLite-Mic",permalink:"/custom/XIAO-BLE-Sense-TFLite-Mic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Embedded ML/XIAO-BLE-Sense-TFLite-Mic.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Speech Recognition",title:"Speech Recognition",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-TFLite-Mic",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Getting Started",permalink:"/custom/XIAO-BLE-Sense-TFLite-Getting-Started"},next:{title:"Motion Recognition based on Edge Impulse",permalink:"/custom/XIAOEI"}},s={},p=[{value:"Software setup",id:"software-setup",level:2},{value:"Train data and generate TensorFlow Lite model",id:"train-data-and-generate-tensorflow-lite-model",level:2},{value:"Inference",id:"inference",level:2},{value:"Tech support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"speech-recognition-on-seeed-studio-xiao-nrf52840-sense"},"Speech Recognition on Seeed Studio XIAO nRF52840 Sense"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TFLite-mic-thumb.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("p",null,"This wiki will demonstrate how you can use TensorFlow Lite on Seeed Studio XIAO nRF52840 Sense and perform speech recognition using the on-board microphone."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},'When it comes to embedded AI applications, we highly recommend using the "Seeed nrf52 mbed-enabled Boards Library".')),(0,i.kt)("h2",{id:"software-setup"},"Software setup"),(0,i.kt)("p",null,"Make sure to first follow ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/"},'"Getting Started with Seeed Studio XIAO nRF52840 (Sense)"')," wiki for the initial hardware and software setup."),(0,i.kt)("p",null,"Now let's move on to the rest of the software setup."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Download ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/lakshanthad/tflite-micro-arduino-examples"},"tflite-micro-arduino-examples library")," as a zip file")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/tflite-mic-github.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Open Arduino IDE, navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open the downloaded zip file ")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h2",{id:"train-data-and-generate-tensorflow-lite-model"},"Train data and generate TensorFlow Lite model"),(0,i.kt)("p",null,"Now we will use a Google Colab notebook to perform the data training and generate a TensorFlow Lite model."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Open ",(0,i.kt)("a",{parentName:"li",href:"https://colab.research.google.com/github/tensorflow/tflite-micro/blob/main/tensorflow/lite/micro/examples/micro_speech/train/train_micro_speech_model.ipynb"},"this Python notebook"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-mic.jpg",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("p",null,"By default, it will load ",(0,i.kt)("a",{parentName:"p",href:"https://storage.googleapis.com/download.tensorflow.org/data/speech_commands_v0.02.tar.gz"},"this dataset")," which can recognize the words: ",(0,i.kt)("strong",{parentName:"p"},'"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Under ",(0,i.kt)("strong",{parentName:"li"},"Configure Defaults")," column, change the ",(0,i.kt)("strong",{parentName:"li"},"WANTED_WORDS")," parameter according to the words that you want the model to recognize. You can choose from: ",(0,i.kt)("strong",{parentName:"li"},'"yes", "no", "up", "down", "left", "right", "on", "off", "stop", "go", "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "bed", "bird", "cat", "dog", "happy", "house", "marvin", "sheila", "tree", "wow"'),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/TF-notebook-wanted-words.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," In this example, the words ",(0,i.kt)("strong",{parentName:"p"},"yes,no,up,down")," are chosen"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Navigate to ",(0,i.kt)("inlineCode",{parentName:"li"},"Runtime > Run all")," to run all the code cells")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-speech-run-all.png",alt:"pir",width:450,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Click ",(0,i.kt)("strong",{parentName:"li"},"Run anyway")," for the error message that pops up")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/run-anyway.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," This process will take about 2 hours to complete"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Once all the code cells are executed, navigate to the ",(0,i.kt)("strong",{parentName:"li"},"files")," tab on the left corner and you will find a new ",(0,i.kt)("strong",{parentName:"li"},"model.cc")," file generated under the ",(0,i.kt)("strong",{parentName:"li"},"models")," folder")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-cc.png",alt:"pir",width:300,height:"auto"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If you cannot see the above ",(0,i.kt)("strong",{parentName:"p"},"model.cc")," file, refresh the page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6.")," Right click on the file and click ",(0,i.kt)("strong",{parentName:"li"},"Download")," to download the file to your PC")),(0,i.kt)("h2",{id:"inference"},"Inference"),(0,i.kt)("p",null,"Now we will use the downloaded TensorFlow Lite model file ",(0,i.kt)("strong",{parentName:"p"},"(model.cc)")," to recognize different words using the microphone on the Seeed Studio XIAO nRF52840 Sense."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Navigate to the library path of ",(0,i.kt)("strong",{parentName:"li"},"tflite-micro-arduino-examples")," Library (normally under ",(0,i.kt)("strong",{parentName:"li"},"Documents > Arduino > libraries > tflite-micro-arduino-examples"),"), visit ",(0,i.kt)("strong",{parentName:"li"},"examples > micro_speech")," and open ",(0,i.kt)("strong",{parentName:"li"},"micro_features_model.cpp"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/micro-features-model-open.png",alt:"pir",width:550,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Replace the values under ",(0,i.kt)("strong",{parentName:"li"},"const unsigned char g_model[] DATA_ALIGN_ATTRIBUTE = {")," with the new values from the ",(0,i.kt)("strong",{parentName:"li"},"model.cc")," file")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/model-values.png",alt:"pir",width:550,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Change ",(0,i.kt)("strong",{parentName:"li"},"g_model_len")," according to the value from ",(0,i.kt)("strong",{parentName:"li"},"model.cc"),". Here we got ",(0,i.kt)("strong",{parentName:"li"},"26720"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const int g_model_len = 26720;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Open ",(0,i.kt)("strong",{parentName:"li"},"micro_features_micro_model_settings.cpp")," inside ",(0,i.kt)("strong",{parentName:"li"},"micro_speech")," folder and add all the words that we defined in the training process. Here we used ",(0,i.kt)("strong",{parentName:"li"},"yes,no,up,down"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include "micro_features_micro_model_settings.h"\n\nconst char* kCategoryLabels[kCategoryCount] = {\n    "silence",\n    "unknown",\n    "yes",\n    "no",\n    "up",\n    "down",\n};\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Open ",(0,i.kt)("strong",{parentName:"li"},"micro_features_micro_model_settings.h")," inside ",(0,i.kt)("strong",{parentName:"li"},"micro_speech")," folder and change ",(0,i.kt)("strong",{parentName:"li"},"constexpr int kCategoryCount")," according to the number of categories defined. Here we have 6 categories")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"constexpr int kCategoryCount = 6;\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 6.")," Open ",(0,i.kt)("strong",{parentName:"p"},"micro_speech.ino")," inside ",(0,i.kt)("strong",{parentName:"p"},"micro_speech")," folder and upload the codes to the Seeed Studio XIAO nRF52840 Sense")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 7.")," Open ",(0,i.kt)("strong",{parentName:"p"},"serial monitor window")," and say out loud the words that we defined before. You will see the serial monitor output the correct words spoken after recognition."))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/TFLite/pics/mic-capture.png",alt:"pir",width:300,height:"auto"})),(0,i.kt)("h2",{id:"tech-support"},"Tech support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
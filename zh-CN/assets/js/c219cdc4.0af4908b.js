"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[86670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=n(87462),o=(n(67294),n(3905));const a={description:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",title:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-PDM-Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},r="The PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-PDM-Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-PDM-Usage",title:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",description:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-PDM-Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/XIAO-BLE-Sense-PDM-Usage",permalink:"/custom/zh-CN/XIAO-BLE-Sense-PDM-Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-PDM-Usage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"2023\u5e741\u670811\u65e5",frontMatter:{description:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",title:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-PDM-Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"6-Axis IMU Usage on Seeed Studio XIAO nRF52840 Sense",permalink:"/custom/zh-CN/XIAO-BLE-Sense-IMU-Usage"},next:{title:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",permalink:"/custom/zh-CN/XIAO-BLE-Sense-Pin-Multiplexing"}},s={},d=[{value:"Visualize raw data from PDM Microphone in real-time",id:"visualize-raw-data-from-pdm-microphone-in-real-time",level:2},{value:"Save recorded audio from the microphone on an SD card",id:"save-recorded-audio-from-the-microphone-on-an-sd-card",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-pdm-microphone-usage-on-seeed-studio-xiao-nrf52840-sense"},"The PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense")," is equipped with a ",(0,o.kt)("strong",{parentName:"p"},"PDM (Pulse Density Modulation) Microphone")," which can receive audio data in real-time and can be used for audio recognition. With the wireless connection and fine performance in processing audio data because of the FPU, it can be used for more interesting TinyML projects like remote voice controlling of devices."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Seeed Studio XIAO nRF52840")," is not equipped with this PDM Microphone module."),(0,o.kt)("li",{parentName:"ul"},'The PDM Microphone will perform better when we use the "Seeed nrf52 mbed-enabled Boards Library", so we highly recommon that.')),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new7.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("p",null,"This wiki will introduce the basics of using this PDM Microphone on this board and includes 2 examples. One example focuses on visualizing raw data from the microphone in real-time and another example focuses on saving recorded audio from the microphone on an SD card. Let's explore them now!"),(0,o.kt)("h2",{id:"visualize-raw-data-from-pdm-microphone-in-real-time"},"Visualize raw data from PDM Microphone in real-time"),(0,o.kt)("p",null,"In this example, we are going to visualize the raw data from the PDM Microphone on a ",(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")," and ",(0,o.kt)("strong",{parentName:"p"},"Serial Plotter")," in real-time."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Mic"},"Download Seeed_Arduino_Mic Library")," as a zip file")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-zip.png",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Open Arduino IDE, navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open the downloaded zip file")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"File > Examples > Seeed Arduino Mic > mic_serial_plotter")," to open ",(0,o.kt)("strong",{parentName:"li"},"mic_serial_plotter"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-install.png",alt:"pir",width:550,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Upload the codes and open the ",(0,o.kt)("strong",{parentName:"li"},"Serial Monitor"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Once you upload the codes, it will not be executed automatically until you click ",(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")," on the upper right corner of the Arduino window."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-serial.png",alt:"pir",width:550,height:"auto"})),(0,o.kt)("p",null,"Now you will see the raw microphone data displayed in real-time on the serial monitor as above!"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," If you navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Tools > Serial Plotter")," and open ",(0,o.kt)("strong",{parentName:"li"},"Serial Plotter"),", you will see the raw microphone data displayed in real-time on a graph!")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-output-graph.png",alt:"pir",width:700,height:"auto"})),(0,o.kt)("h2",{id:"save-recorded-audio-from-the-microphone-on-an-sd-card"},"Save recorded audio from the microphone on an SD card"),(0,o.kt)("p",null,"Just like the Seeed Studio XIAO series, Seeed Studio XIAO nRF52840 Sense is perfectly compatible with ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Seeeduino Seeed Studio XIAO Expansion board"),". It is pin to pin installed on the expansion board which means you can use the SD card module on the expansion board. If you don't want to use the expansion board, you can connect it with a separate SD card module through the ",(0,o.kt)("strong",{parentName:"p"},"SPI")," interface."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Attach the Seeed Studio XIAO nRF52840 Sense on a Seeed Studio XIAO Expansion board and insert an SD card into the SD card slot of the expansion board.")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SD-connect.png",alt:"pir",width:500,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," When you see the light on the expansion board regularly flashing green, the connection is successful."),(0,o.kt)("p",null,"Since we already installed ",(0,o.kt)("strong",{parentName:"p"},"Seeed_Arduino_Mic Library")," before, we do not need to install again for this example. However, if you have not yet installed it, please follow the above example."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Mic"},"Download Seeed_Arduino_FS Library")," as a zip file")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/arduino-fs-zip.png",alt:"pir",width:1e3,height:"auto"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," This library is needed to access the SD card and save the data"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Open Arduino IDE, navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"Sketch > Include Library > Add .ZIP Library...")," and open the downloaded zip file")),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/add-zip.png",alt:"pir",width:600,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to ",(0,o.kt)("inlineCode",{parentName:"li"},"File > Examples > Seeed Arduino Mic > mic_Saved_OnSDcard")," to open ",(0,o.kt)("strong",{parentName:"li"},"mic_Saved_OnSDcard"))),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/PDM-sd-install.jpg",alt:"pir",width:550,height:"auto"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," Upload the codes and open the ",(0,o.kt)("strong",{parentName:"li"},"Serial Monitor"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note:")," Once you upload the codes, it will not be executed automatically until you click ",(0,o.kt)("strong",{parentName:"p"},"Serial Monitor")," on the upper right corner of the Arduino window."),(0,o.kt)("p",null,"Now the audio data will start sampling, record for 5 minutes and save the data to SD card automatically."),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/PDMsavecodeoncard.png",alt:"pir",width:800,height:"auto"})),(0,o.kt)("p",null,"This ",(0,o.kt)("strong",{parentName:"p"},"test.9568.wav")," is a 5-second audio file and it is saved on the SD card."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},'If you want to resample audio data, you should push the reset button and then click "serial monitor" again to sample.')))}u.isMDXComponent=!0}}]);
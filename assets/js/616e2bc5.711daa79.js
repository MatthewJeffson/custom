"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15747],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,c=d["".concat(p,".").concat(m)]||d[m]||g[m]||o;return r?a.createElement(c,i(i({ref:t},u),{},{components:r})):a.createElement(c,i({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5164:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"SDLogger - Open Hardware Data Logger",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/SDLogger-Open_Hardware_Data_Logger/",slug:"/SDLogger-Open_Hardware_Data_Logger",last_update:{date:"02/03/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Beyond_Grove/Sensor_Network/SDLogger-Open_Hardware_Data_Logger",id:"Sensor/Beyond_Grove/Sensor_Network/SDLogger-Open_Hardware_Data_Logger",title:"SDLogger - Open Hardware Data Logger",description:"SDLogger is a simple serial logger based on SparkFun/Nathan Seidle's OpenLog. It is using an ATmega644P processor running at 14.7456MHz and logs to full-size SD cards. It supports both standard SD cards (FAT16) and SDHC cards (FAT32). SDLogger ships with OpenLog firmware 1.61 installed (compiled with SDHC/FAT32 support and large 2048 character input buffer) together with an Arduino-compatible bootloader for easy program update.",source:"@site/docs/Sensor/Beyond_Grove/Sensor_Network/SDLogger-Open_Hardware_Data_Logger.md",sourceDirName:"Sensor/Beyond_Grove/Sensor_Network",slug:"/SDLogger-Open_Hardware_Data_Logger",permalink:"/SDLogger-Open_Hardware_Data_Logger",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Sensor_Network/SDLogger-Open_Hardware_Data_Logger.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"Feb 2, 2022",frontMatter:{title:"SDLogger - Open Hardware Data Logger",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/SDLogger-Open_Hardware_Data_Logger/",slug:"/SDLogger-Open_Hardware_Data_Logger",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"433Mhz RF Link Kit",permalink:"/433Mhz_RF_Link_Kit"},next:{title:"WiFi Serial Transceiver Module",permalink:"/WiFi_Serial_Transceiver_Module"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Resources",id:"resources",level:2},{value:"Credits",id:"credits",level:3},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"http://bz.seeedstudio.com/depot/images/product/sdlogger1.jpg",alt:null})),(0,n.kt)("p",null,"SDLogger is a simple serial logger based on ",(0,n.kt)("a",{parentName:"p",href:"http://www.sparkfun.com/"},"SparkFun"),"/",(0,n.kt)("a",{parentName:"p",href:"https://github.com/sparkfun/OpenLog/wiki/"},"Nathan Seidle's OpenLog"),". It is using an ATmega644P processor running at 14.7456MHz and logs to full-size SD cards. It supports both standard SD cards (FAT16) and SDHC cards (FAT32). SDLogger ships with OpenLog firmware 1.61 installed (compiled with SDHC/FAT32 support and large 2048 character input buffer) together with an Arduino-compatible bootloader for easy program update."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/sdlogger-open-hardware-data-logger-p-723.html?cPath=132_136"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Simple to configure and use")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Automatically logs data received on the serial input port")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Can be configured using a config file on the SD card")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supports 2400, 4800, 9600, 19200, 38400, 57600, 115200 and 230400 serial baud rates at 8-N-1.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Supports both standard SD cards up to 2GB (FAT16) and SDHC cards up to 16GB (FAT32)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Large input buffer (2048 characters)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Full-size SD card form factor")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"14.7456 MHz crystal oscillator for precise baud rate generation")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Input voltage range: 3.3 to 12V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Arduino-compatible bootloader installed for easy program update")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Full Arduino environment support - can be used as an inexpensive Arduino board for program development")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"I/O ports supported in Arduino environment (in addition to the main serial port): 4 analog inputs, second serial port, I2C port")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Simple SDLogger original firmware restore procedure using the Arduino environment")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SDLogger hardware/firmware designed by Saanlima/Magnus Karlsson and released under CC BY-SA v3 license")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Design files, Arduino code and other ported code available on ",(0,n.kt)("a",{parentName:"p",href:"http://github.com/magnuskarlsson/SDLogger"},"GitHub")))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"SDLogger wiki pages")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/magnuskarlsson/SDLogger/wiki/Basic-operation"},"Basic operation")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/magnuskarlsson/SDLogger/wiki/FTDI-cable-Howto"},"SDLogger FTDI-cable Howto")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/magnuskarlsson/SDLogger/wiki/Arduino-howto"},"SDLogger-as-Arduino-board Howto")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/magnuskarlsson/SDLogger/wiki/SDLogger-firmware-restore"},"How to restore the original firmware using the Arduino environment")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"OpenLog wiki pages (Much of the information here is also relevant to SDLogger)")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sparkfun/OpenLog/wiki/datasheet"},"Link to OpenLog datasheet wiki")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/sparkfun/OpenLog/wiki/command-set"},"Link to OpenLog firmware command-set wiki"))))),(0,n.kt)("h3",{id:"credits"},"Credits"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"The FAT16/FAT32 firmware was originally designed by Roland Riegel and is released under GPL v2.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"OpenLog hardware and firmware developed by ",(0,n.kt)("a",{parentName:"p",href:"http://www.sparkfun.com/"},"SparkFun"),"/Nathan Seidle's OpenLog and released under CC-SA v3 license")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Arduino SdFat library written by Bill Greiman and is released under GPL v3"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
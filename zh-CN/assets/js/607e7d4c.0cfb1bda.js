"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54998],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>c});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),s=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return i.createElement(d.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),u=r,c=m["".concat(d,".").concat(u)]||m[u]||f[u]||a;return t?i.createElement(c,l(l({ref:n},p),{},{components:t})):i.createElement(c,l({ref:n},p))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,l=new Array(a);l[0]=u;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86846:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={description:"Read and Write",title:"Read and Write",keywords:["Wio_terminal File_System"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-FS-ReadWrite",last_update:{date:"1/17/2023",author:"jianjing Huang"}},l="Reading/Writing from the SD Card",o={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-ReadWrite",id:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-ReadWrite",title:"Read and Write",description:"Read and Write",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-ReadWrite.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/SD_Card",slug:"/Wio-Terminal-FS-ReadWrite",permalink:"/custom/zh-CN/Wio-Terminal-FS-ReadWrite",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/SD_Card/Wio-Terminal-FS-ReadWrite.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"2023\u5e741\u670817\u65e5",frontMatter:{description:"Read and Write",title:"Read and Write",keywords:["Wio_terminal File_System"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-FS-ReadWrite",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Overview",permalink:"/custom/zh-CN/Wio-Terminal-FS-Overview"},next:{title:"Overview",permalink:"/custom/zh-CN/Wio-Terminal-Network-Overview"}},d={},s=[{value:"Initializing the SD Card on Wio Terminal",id:"initializing-the-sd-card-on-wio-terminal",level:2},{value:"Writing to the SD Card",id:"writing-to-the-sd-card",level:2},{value:"Reading from the SD Card",id:"reading-from-the-sd-card",level:2},{value:"Complete Code",id:"complete-code",level:2},{value:"Reading/Writing the Flash using QSPI",id:"readingwriting-the-flash-using-qspi",level:2},{value:"Full Example Code",id:"full-example-code",level:3}],p={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"readingwriting-from-the-sd-card"},"Reading/Writing from the SD Card"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-12-16_13-53-10.jpg"})),(0,r.kt)("p",null,"This repo describes how to Read/Write from or to the SD Card. With this, you are able to load data from the SD Card, a simple demonstration will be storing sensor reading to the SD Card."),(0,r.kt)("h2",{id:"initializing-the-sd-card-on-wio-terminal"},"Initializing the SD Card on Wio Terminal"),(0,r.kt)("p",null,"Include the",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_FS")," libraries as follow. And initializing the SD Card using: ",(0,r.kt)("inlineCode",{parentName:"p"},"SD.begin(SDCARD_SS_PIN, SDCARD_SPI)"),", where SPI is used to communicate in Wio Terminal for SD Card."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\nFile myFile; //Intialise the file Class and named it myFile\n\nvoid setup() {\n  Serial.begin(115200);\n  while (!Serial) {\n  }\n\n  Serial.print("Initializing SD card...");\n  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n    Serial.println("initialization failed!");\n    while (1);\n  }\n  Serial.println("initialization done.");\n')),(0,r.kt)("h2",{id:"writing-to-the-sd-card"},"Writing to the SD Card"),(0,r.kt)("p",null,"To write in the SD Card, need to first open the file. There are different modes for the file system so need to state what mode to use while opening the file, modes are as follow:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"FILE MODE"),(0,r.kt)("th",{parentName:"tr",align:null},"Name Defined"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WRITE"),(0,r.kt)("td",{parentName:"tr",align:null},"FILE_WRITE")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ"),(0,r.kt)("td",{parentName:"tr",align:null},"FILE_READ")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APPEND"),(0,r.kt)("td",{parentName:"tr",align:null},"FILE_APPEND")))),(0,r.kt)("p",null,"To open the file, the ",(0,r.kt)("inlineCode",{parentName:"p"},"open")," File Class member function is used and takes 2 parameters as follow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"open(const char *filepath, uint8_t mode = FILE_READ) //default mode is READ\n")),(0,r.kt)("p",null,"In this case, open a txt file name ",(0,r.kt)("inlineCode",{parentName:"p"},"test.txt")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE_WRITE")," is used. To write inside a txt file can use ",(0,r.kt)("inlineCode",{parentName:"p"},"println")," function(File Class):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'  // open the file. note that only one file can be open at a time,\n  // so you have to close this one before opening another.\n  myFile = SD.open("test.txt", FILE_WRITE); //Writing Mode\n\n  // if the file opened okay, write to it:\n  if (myFile) {\n    Serial.print("Writing to test.txt...");\n    myFile.println("testing 1, 2, 3."); //Writing this to the txt file\n    // close the file:\n    myFile.close();\n    Serial.println("done.");\n  } else {\n    // if the file didn\'t open, print an error:\n    Serial.println("error opening test.txt");\n  }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," One file at the time, so close a file when done."),(0,r.kt)("h2",{id:"reading-from-the-sd-card"},"Reading from the SD Card"),(0,r.kt)("p",null,"To read a file from SD Card, also needs to open the file. This time, using ",(0,r.kt)("inlineCode",{parentName:"p"},"FILE_READ")," mode to only read the file."),(0,r.kt)("p",null,"Using the File member function ",(0,r.kt)("inlineCode",{parentName:"p"},"availble()")," to check the availablity of the file and ",(0,r.kt)("inlineCode",{parentName:"p"},"read()")," to print out things inside the file ."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'myFile = SD.open("test.txt", FILE_READ); //Read Mode\n  if (myFile) {\n    Serial.println("test.txt:");\n\n    // read from the file until there\'s nothing else in it:\n    while (myFile.available()) {\n      Serial.write(myFile.read());\n    }\n    // close the file:\n    myFile.close();\n  } else {\n    // if the file didn\'t open, print an error:\n    Serial.println("error opening test.txt");\n  }\n}\n')),(0,r.kt)("h2",{id:"complete-code"},"Complete Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <SPI.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\nFile myFile;\n\nvoid setup() {\n  Serial.begin(115200);\n  while (!Serial) {\n  }\n  Serial.print("Initializing SD card...");\n  if (!SD.begin(SDCARD_SS_PIN, SDCARD_SPI)) {\n    Serial.println("initialization failed!");\n    while (1);\n  }\n  Serial.println("initialization done.");\n\n  // open the file. note that only one file can be open at a time,\n  // so you have to close this one before opening another.\n  myFile = SD.open("test.txt", FILE_WRITE);\n\n  // if the file opened okay, write to it:\n  if (myFile) {\n    Serial.print("Writing to test.txt...");\n    myFile.println("testing 1, 2, 3.");\n    // close the file:\n    myFile.close();\n    Serial.println("done.");\n  } else {\n    // if the file didn\'t open, print an error:\n    Serial.println("error opening test.txt");\n  }\n\n  // re-open the file for reading:\n  myFile = SD.open("test.txt", FILE_READ);\n  if (myFile) {\n    Serial.println("test.txt:");\n\n    // read from the file until there\'s nothing else in it:\n    while (myFile.available()) {\n      Serial.write(myFile.read());\n    }\n    // close the file:\n    myFile.close();\n  } else {\n    // if the file didn\'t open, print an error:\n    Serial.println("error opening test.txt");\n  }\n}\n\nvoid loop() {\n  // nothing happens after setup\n}\n')),(0,r.kt)("h2",{id:"readingwriting-the-flash-using-qspi"},"Reading/Writing the Flash using QSPI"),(0,r.kt)("p",null,"As the FS library has updated and we have introduced ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_SFUD"},(0,r.kt)("strong",{parentName:"a"},"SFUD"))," into the systems. You can now access the the Flash on the Wio Terminal using QSPI."),(0,r.kt)("h3",{id:"full-example-code"},"Full Example Code"),(0,r.kt)("p",null,"This example demonstrates ",(0,r.kt)("strong",{parentName:"p"},"Read/Erase/Write"),":"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/SFUD.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <sfud.h>\n\n#define SFUD_DEMO_TEST_BUFFER_SIZE                     1024\nstatic uint8_t sfud_demo_test_buf[SFUD_DEMO_TEST_BUFFER_SIZE];\nstatic void sfud_demo(uint32_t addr, size_t size, uint8_t *data);\n \n#define SERIAL Serial\n\nvoid setup()\n{\n    SERIAL.begin(115200);\n    while(!SERIAL) {};\n    while(!(sfud_init() == SFUD_SUCCESS));\n    #ifdef SFUD_USING_QSPI\n    sfud_qspi_fast_read_enable(sfud_get_device(SFUD_W25Q32_DEVICE_INDEX), 2);\n    #endif\n    sfud_demo(0, sizeof(sfud_demo_test_buf), sfud_demo_test_buf);\n}\n\nvoid loop()\n{\n\n}\n/**\n * SFUD demo for the first flash device test.\n *\n * @param addr flash start address\n * @param size test flash size\n * @param size test flash data buffer\n */\nstatic void sfud_demo(uint32_t addr, size_t size, uint8_t *data) {\n    sfud_err result = SFUD_SUCCESS;\n    const sfud_flash *flash = sfud_get_device_table() + 0;\n    size_t i;\n    /* prepare write data */\n    for (i = 0; i < size; i++) {\n        data[i] = i;\n    }\n    /* erase test */\n    result = sfud_erase(flash, addr, size);\n    if (result == SFUD_SUCCESS) {\n        SERIAL.println("Erase the flash data finish");\n    } else {\n        SERIAL.println("Erase flash data failed");\n        return;\n    }\n    /* write test */\n    result = sfud_write(flash, addr, size, data);\n    if (result == SFUD_SUCCESS) {\n        SERIAL.println("Write the flash data finish");\n    } else {\n        SERIAL.println("Write the flash data failed");\n        return;\n    }\n    /* read test */\n    size_t BaseTime = micros();\n    result = sfud_read(flash, addr, size, data);\n    size_t CostTime = micros() - BaseTime;\n    if (result == SFUD_SUCCESS) {\n        SERIAL.println("Read the flash data success.");\n        SERIAL.println("Offset (h) 00 01 02 03 04 05 06 07 08 09 0A 0B 0C 0D 0E 0F\\r\\n");\n        for (i = 0; i < size; i++) {\n            if (i % 16 == 0) {\n                SERIAL.print("0x");\n                SERIAL.print(addr + i,HEX);\n                SERIAL.print("\\t");\n            }\n            SERIAL.print(data[i],HEX);\n            SERIAL.print("\\t");\n            if (((i + 1) % 16 == 0) || i == size - 1) {\n                SERIAL.println("");\n            }\n        }\n        SERIAL.println(" ");\n    } else {\n        SERIAL.println("Read the flash data failed.");\n    }\n    /* data check */\n    for (i = 0; i < size; i++) {\n        if (data[i] != i % 256) {\n            SERIAL.println("Read and check write data has an error.");\n   break;\n        }\n    }\n    if (i == size) {\n        SERIAL.println("The flash test is success.\\r\\n");\n        SERIAL.print("read costTime: ");\n        SERIAL.print(CostTime);\n        SERIAL.println(" us");\n    }\n}\n')))}m.isMDXComponent=!0}}]);
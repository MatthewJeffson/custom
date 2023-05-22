"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32056],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,k=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},79888:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={description:"NFC Shield V1.0",title:"NFC Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/NFC_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Top_Brand/Arduino/shield/NFC_Shield_V1.0",id:"Top_Brand/Arduino/shield/NFC_Shield_V1.0",title:"NFC Shield V1.0",description:"NFC Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/NFC_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/NFC_Shield_V1.0",permalink:"/custom/zh-CN/NFC_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/NFC_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"2023\u5e742\u670816\u65e5",frontMatter:{description:"NFC Shield V1.0",title:"NFC Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/NFC_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Motor Shield",permalink:"/custom/zh-CN/Motor_Shield"},next:{title:"NFC Shield",permalink:"/custom/zh-CN/NFC_Shield"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Programming",id:"programming",level:3},{value:"Reference code",id:"reference-code",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield1.bmp",alt:null})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/NFC_Shield/"},"NFC Shield"),"  is a ",(0,r.kt)("strong",{parentName:"p"},"Near Field Communication")," interface for  ",(0,r.kt)("strong",{parentName:"p"},"Arduino"),"  build around the popular  NXP PN532  integrated circuit.  NFC  is a short-distance radio technology that enables communication between devices that are held close together.",(0,r.kt)("strong",{parentName:"p"},"NFC")," traces its roots in  ",(0,r.kt)("strong",{parentName:"p"},"RFID"),"  technology and is an open platform technology standardized in ECMA-340 and ISO/IEC 18092."),(0,r.kt)("p",null,"NFC is widely used like RFID to recognize cards/tags (NXP Mifare Cards / Tags). NFC can be used as an alternative to ",(0,r.kt)("strong",{parentName:"p"},"travel card")," using the read/write memory provided by cards/tags. Few mobile phones comes with NFC inbuilt - they are used as readers of cards, tags, smart posters with a Web URL(like a Mobile QR-Code reader). This technology is also being applied for ",(0,r.kt)("strong",{parentName:"p"},"smart cashless purchases"),"."),(0,r.kt)("p",null,"Like many other standards, NFC technology is regulated by  ",(0,r.kt)("strong",{parentName:"p"},"Near Field Communication Forum"),"  which standardizes  ",(0,r.kt)("strong",{parentName:"p"},"NFC"),"  communication -- how they devices pair, share data and allow a secure transaction to happen.",(0,r.kt)("a",{parentName:"p",href:"http://www.nfc-forum.org"},"NFC Forum")," develops and certifies devices compliant with ",(0,r.kt)("strong",{parentName:"p"},"NFC standards"),"."),(0,r.kt)("p",null,"NFC operate on unlicensed ISM(Industry Scientific Medical) band of ",(0,r.kt)("strong",{parentName:"p"},"13.56 MHz")," Frequency. NFC communication range is up to 10 cm. But, this is limited by the antenna and power radiation design. Most devices work within a range of 10mm. ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/NFC_Shield/"},"NFC Shield"),"  antenna is designed to work within a range of 1cm. ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/NFC_Shield/"},"NFC Shield"),"  provides all necessary circuitry for ",(0,r.kt)("strong",{parentName:"p"},"PN532")," like 27.12Mhz crystal, power supply.It also beaks-out the I/O pins of ",(0,r.kt)("strong",{parentName:"p"},"PN532")," for easy access."),(0,r.kt)("p",null,"The communication between Arduino and ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/NFC_Shield/"},"NFC Shield"),"  is via SPI."),(0,r.kt)("p",null,"Model: ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/nfc-shield-p-916.html?cPath=132_134"},"SLD80453P")),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Arduino Shield compatible. No soldering required.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"SPI")," interface. Hence, most ",(0,r.kt)("strong",{parentName:"p"},"Arduino")," pins are available for other applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Built in ",(0,r.kt)("strong",{parentName:"p"},"PCB Antenna"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Supports both 3.3V and 5V operation using TI's ",(0,r.kt)("strong",{parentName:"p"},"TXB0104")," level translator.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Socket to connect other shields.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The maximum communication range of this NFC Shield is about 5 cm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Not being able to read/write ultralightC chip,Only to Read its ID"))),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use as a RFID reader with ",(0,r.kt)("strong",{parentName:"p"},"Mifare One tags")," (ISO14443 Type-A) and cards (13.56Mhz).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build visiting card sharing system.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Build attendance systems.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Design authentication systems.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read Smart Posters.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Securely exchange small data with other NFC devices")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use with ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_ADK_Main_Board/"},"Seeeduino ADK Main Board"),"  for creating mobile NFC applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"And other endless possibility."))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("strong",{parentName:"p"},"Seeeduino")," power selection slide-switch to 3.3V.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/NFC_Shield/"},"NFC Shield"),"  to ",(0,r.kt)("strong",{parentName:"p"},"Seeeduino")," as shown below.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Compile and upload the example sketch provided."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Connected_to_Seeeduino1.jpg",alt:null}),"\n",(0,r.kt)("strong",{parentName:"p"},"NFC Shield - Connected to Seeeduino")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hold the ",(0,r.kt)("strong",{parentName:"li"},"MIFARE Card")," near the antenna. The NFC Shield will read the passive id data.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareCard_near_NFC_Shield1.jpg",alt:null}),"\n",(0,r.kt)("strong",{parentName:"p"},"Mifare Card held near NFC Shield Antenna")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hold the MIFARE Tag near the antenna. The NFC Shield will read the passive id data.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/MifareTag_near_NFC_Shield1.jpg",alt:null}),"\n",(0,r.kt)("strong",{parentName:"p"},"Mifare Tag held near NFC Shield Antenna")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Use the following setup for establishing peer to peer communication between two Seeeduinos using NFC Shields.")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_Peer_to_Peer_Communication_SetupWithSeeeduino.jpg",alt:null}),"\n",(0,r.kt)("strong",{parentName:"p"},"NFC Peer to Peer Communication Setup")),(0,r.kt)("h3",{id:"programming"},"Programming"),(0,r.kt)("p",null,"Donwload the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip"},"PN532_SPI Library For NFC Shield")," and install it to \\arduino\\libraries. you can either copy the folling codes into Arduino IDE or open Open the examples in the library to start."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Demo 1\uff1aRead the complete memory of a MIFARE card")),(0,r.kt)("p",null,"1.Open and upload the example readAllMemoryBlocks example as show below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'//This example reads all MIFARE memory block from 0x00 to 0x63.\n//It is tested with a new MIFARE 1K cards. Uses default keys for authenication.\n//Contributed by Seeed Technology Inc (www.seeedstudio.com)\n\n#include <PN532.h>\n#include <SPI.h>\n\n/*Chip select pin can be connected to D10 or D9 which is hareware optional*/\n/*if you the version of NFC Shield from SeeedStudio is v2.0.*/\n#define PN532_CS 10\n\nPN532 nfc(PN532_CS);\n\n#define  NFC_DEMO_DEBUG 1\n\nvoid setup(void) {\n#ifdef NFC_DEMO_DEBUG\n  Serial.begin(9600);\n  Serial.println("Hello!");\n#endif\n  nfc.begin();\n\n  uint32_t versiondata = nfc.getFirmwareVersion();\n  if (! versiondata) {\n#ifdef NFC_DEMO_DEBUG\n    Serial.print("Didn\'t find PN53x board");\n#endif\n    while (1); // halt\n  }\n#ifdef NFC_DEMO_DEBUG\n  // Got ok data, print it out!\n  Serial.print("Found chip PN5");\n  Serial.println((versiondata>>24) & 0xFF, HEX);\n  Serial.print("Firmware ver. ");\n  Serial.print((versiondata>>16) & 0xFF, DEC);\n  Serial.print(\'.\');\n  Serial.println((versiondata>>8) & 0xFF, DEC);\n  Serial.print("Supports ");\n  Serial.println(versiondata & 0xFF, HEX);\n#endif\n  // configure board to read RFID tags and cards\n  nfc.SAMConfig();\n}\n\nvoid loop(void) {\n  uint32_t id;\n  // look for MiFare type cards\n  id = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);\n\n  if (id != 0)\n  {\n#ifdef NFC_DEMO_DEBUG\n    Serial.print("Read card #");\n    Serial.println(id);\n    Serial.println();\n#endif\n    uint8_t keys[]= { 0xFF,0xFF,0xFF,0xFF,0xFF,0xFF };// default key of a fresh card\n    for(uint8_t blockn=0;blockn<64;blockn++)\n    {\n      if(nfc.authenticateBlock(1, id ,blockn,KEY_A,keys)) //authenticate block blockn\n      {\n        //if authentication successful\n        uint8_t block[16];\n        //read memory block blockn\n        if(nfc.readMemoryBlock(1,blockn,block))\n        {\n#ifdef NFC_DEMO_DEBUG\n          //if read operation is successful\n          for(uint8_t i=0;i<16;i++)\n          {\n            //print memory block\n            Serial.print(block[i],HEX);\n            if(block[i] <= 0xF) //Data arrangement / beautify\n            {\n              Serial.print("  ");\n            }\n            else\n            {\n              Serial.print(" ");\n            }\n          }\n\n          Serial.print("| Block ");\n          if(blockn <= 9) //Data arrangement / beautify\n          {\n            Serial.print(" ");\n          }\n          Serial.print(blockn,DEC);\n          Serial.print(" | ");\n\n          if(blockn == 0)\n          {\n            Serial.println("Manufacturer Block");\n          }\n          else\n          {\n            if(((blockn + 1) % 4) == 0)\n            {\n              Serial.println("Sector Trailer");\n            }\n            else\n            {\n              Serial.println("Data Block");\n            }\n          }\n#endif\n        }\n      }\n    }\n  }\n  delay(2000);\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This sketch reads the complete memory of a MIFARE Standard card using default authentication keys. The output gives typical memory layout of fresh MIFARE Standard card.")),(0,r.kt)("p",null,"2.Bring a Mifare Card near the NFC Antenna. Open the serial monitor, you can see the score as show below:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_2.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Blocks are classified as Manufacturer Block(read-only), Data Block (user/application writable area), and Sector Trailer(authentication and access bits for that sector)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Demo 2: Write data to MIFARE Memory Block")),(0,r.kt)("p",null,"1.Open the example writeMifareMemory. This example writes a MIFARE memory block 0x08 of a new MIFARE 1K cards using default authentication keys .Read the Block Memory after complete writing data to MIFARE Memory Block."),(0,r.kt)("p",null,"Note: Memory block 0 is readonly and contains manufacturer data. Do not write to Sector Trailer block unless you know what you are doing. Otherwise, the MIFARE card may be unusable in the future."),(0,r.kt)("p",null,"2.Compile and upload the example If you do not know how to upload, please click ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Upload_Code/"},"here"),"."),(0,r.kt)("p",null,"3.Bring a Mifare Card near the NFC Antenna..",(0,r.kt)("br",{parentName:"p"}),"\n","4.Open the serial monitor, you can see the score as show below:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/Score_1.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Demo 3: Peer to Peer communication")),(0,r.kt)("p",null,"An experimental NFC Peer to Peer communication is implemented in the latest NFC library. This uses Active Initiator for P2P communication."),(0,r.kt)("p",null,"1.Download the example \u201cPtoPInitiator\u201d and \u201cPtoPTarge\u201d into two different Arduinos with NFC Shields."),(0,r.kt)("p",null,"2.Place Antenna close to each other."),(0,r.kt)("p",null,"3.Open the serial terminal and observer the data trans-reception."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Output Score:")),(0,r.kt)("p",null,"P2P Initiator:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPInitiator.jpg",alt:null})),(0,r.kt)("p",null,"P2P Target:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/img/NFC_Shield_PtoPTarget.jpg",alt:null})),(0,r.kt)("h2",{id:"reference-code"},"Reference code"),(0,r.kt)("p",null,"The APIs make use of the commands to invoke the interfaces provided by PN532 firmware via SPI. All these commands are documented in PN532 User Manual. The following APIs are provided by PN532_SPI Library."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"boolean SAMConfig(void)")),(0,r.kt)("p",null,"This API invokes the ",(0,r.kt)("strong",{parentName:"p"},"SAMConfiguration")," command of PN532 and sets it to ",(0,r.kt)("strong",{parentName:"p"},"Normal Mode"),". ",(0,r.kt)("strong",{parentName:"p"},"SAM")," stands for Security Access Module (i.e the PN532 system). PN532 system can work in ",(0,r.kt)("strong",{parentName:"p"},"Normal")," mode, ",(0,r.kt)("strong",{parentName:"p"},"Virtual Card")," mode, ",(0,r.kt)("strong",{parentName:"p"},"Wired Card")," mode and ",(0,r.kt)("strong",{parentName:"p"},"Dual Card")," mode."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"nfc.SAMConfig(); // Call this before any read/write operation\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t readPassiveTargetID(uint8_t cardbaudrate)")),(0,r.kt)("p",null,"This method reads the Passive Target ID and returns it as a 32-bit number. At the moment only reading MIFARE ISO14443A cards/tags are supported. Hence use ",(0,r.kt)("strong",{parentName:"p"},"PN532_MIFARE_ISO14443A")," as parameter. Returns 32 bit card number"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uint32_t cid;\n// look for MiFare type cards/tags\ncid = nfc.readPassiveTargetID(PN532_MIFARE_ISO14443A);\n\n")),(0,r.kt)("p",null,"uint32_t authenticateBlock(uint8_t cardnumber, uint32_t cid, uint8_t blockaddress ,uint8_t authtype, uint8_t * keys)"),(0,r.kt)("p",null,"This method is used to authenticate a memory block with key before read/write operation. Returnstrue when successful."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardnumber")," can be 1 or 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cid")," is 32-bit Card ID")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"blockaddress")," is block number (any number between 0 - 63 for MIFARE card)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"authtype")," is which key is to be used for authentication (either ",(0,r.kt)("strong",{parentName:"p"},"KEY_A")," or ",(0,r.kt)("strong",{parentName:"p"},"KEY_B"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"keys")," points to the byte-array holding 6 keys."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uint8_t keys[]= {0xFF,0xFF,0xFF,0xFF,0xFF,0xFF};  // default key of a fresh card\nnfc.authenticateBlock(1, id ,3,KEY_A,keys); //authenticate block 3, id is 32-bit passive target id.\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t readMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)")),(0,r.kt)("p",null,"This method reads a memory block after authentication with the key. Returnstrue when successful."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardnumber")," can be 1 or 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"blockaddress")," is block number (any number between 0 - 63 for MIFARE card) to read. Each block is 16bytes long in case of MIFARE Standard card.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"block")," points to buffer(byte-array)to hold 16 bytes of block-data."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uint8_t block[16];\nnfc.readMemoryBlock(1,3,block); //Read can be performed only when authentication was successful.\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t writeMemoryBlock(uint8_t cardnumber,uint8_t blockaddress, uint8_t * block)")),(0,r.kt)("p",null,"This method writes data to a memory block after authentication with the key. Returnstrue when successful."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"cardnumber")," can be 1 or 2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"blockaddress")," is block number (any number between 0 - 63 for MIFARE card) to write. Each block is 16bytes long in case of MIFARE Standard card.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"block")," points to buffer(byte-array) which holds 16 bytes of block-data to write.",(0,r.kt)("strong",{parentName:"p"},"Usage"),":"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uint8_t writeBuffer[16];\n    for(uint8_t ii=0;ii<16;ii++)\n     {\n       writeBuffer[ii]=ii; //Fill buffer with 0,1,2....F\n     }\nnfc.writeMemoryBlock(1,0x08,writeBuffer); //Write writeBuffer[] to block address 0x08. Read can be performed only when authentication was successful.\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t PN532::configurePeerAsInitiator(uint8_t baudrate)")),(0,r.kt)("p",null,"This method implements a Peer to Peer Initiator. Returnstrue when successful."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"baudrate")," can be any number from 0-2. 0 for 106kbps or 1 for 201kbps or 2 for 424kbps. At the moment only 1 and 2 are supported.")),(0,r.kt)("p",null,"*8This feature is experimental and supports NFC Peer to Peer communication with other NFC shields. Interaction with mobile devices are not tested.**"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Configure PN532 as Peer to Peer Initiator\nif( nfc.configurePeerAsInitiator(2) ) //if connection is error-free\n    {\n     //Your Send  Receive code here\n    }\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t configurePeerAsTarget()")),(0,r.kt)("p",null,"This method implements a Peer to Peer Target. Returnstrue when successful."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This feature is experimental and supports NFC Peer to Peer communication with other NFC shields. Interaction with mobile devices are not tested.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// Configure PN532 as Peer to Peer Target\nif(nfc.configurePeerAsTarget()) //if connection is error-free\n   {\n        //You code to trans-receive data\n   }\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t initiatorTxRx(char ",(0,r.kt)("em",{parentName:"strong"},"DataOut,char "),"DataIn)")),(0,r.kt)("p",null,"This method is used to transmit and receive data to and from target. This code is used by NFC Peer to Peer Initiator. Returnstrue when successful."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DataOut")," is pointer and array of chars (16 bytes) transmit data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DataIn")," is pointer and array of chars (16 bytes) receive data."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This feature is experimental and supports NFC Peer to Peer communication with other NFC shields. Interaction with mobile devices are not tested.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    // Configure PN532 as Peer to Peer Initiator in active mode\n    if( nfc.configurePeerAsInitiator(2) ) //if connection is error-free\n    {\n        //trans-receive data\n        if(nfc.initiatorTxRx(DataOut,DataIn))\n        {\n         Serial.print("Data Sent and Received: ");\n         Serial.println(DataIn);\n        }\n    }\n\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"uint32_t targetTxRx(char ",(0,r.kt)("em",{parentName:"strong"},"DataOut,char "),"DataIn)")),(0,r.kt)("p",null,"This method is used to transmit and receive data to and from initiator. This code is used by NFC Peer to Peer Target to respond to Initiator. Returnstrue when successful."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DataOut")," is pointer and array of chars (16 bytes) transmit data.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"DataIn")," is pointer and array of chars (16 bytes) receive data."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Usage:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'    // Configure PN532 as Peer to Peer Target\n    if(nfc.configurePeerAsTarget()) //if connection is error-free\n    {\n        //trans-receive data\n        if(nfc.targetTxRx(DataOut,DataIn))\n        {\n         Serial.print("Data Received: ");\n         Serial.println(DataIn);\n        }\n    }\n\n')),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://wiki.seeedstudio.com/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/NFC_Shield_V1.0/res/PN532_SPI_V2.zip"},"PN532_SPI Library For NFC Shield")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]"),(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/8/81/NFC_Shield_V0.9b_Schematic_Board_Files.zip"},"NFC Shield - Schematic and Board Files in Eagle Format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/images/4/48/NFC_Shield_V0.9b.pdf"},"NFC Shield - Schematic in PDF format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"http://www.nxp.com/documents/user_manual/141520.pdf"},"NXP PN532 - User Manual")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Links]"),(0,r.kt)("a",{parentName:"li",href:"http://www.nfc-forum.org"},"NFC Forum"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}u.isMDXComponent=!0}}]);
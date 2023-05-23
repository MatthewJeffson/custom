"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[70333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),k=l,c=m["".concat(u,".").concat(k)]||m[k]||d[k]||r;return n?a.createElement(c,i(i({ref:t},p),{},{components:n})):a.createElement(c,i({ref:t},p))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},60066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const r={description:"RePhone APIs - Audio",title:"RePhone APIs - Audio",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RePhone_APIs-Audio",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,o={unversionedId:"Seeed_Elderly/rePhone/Program with rePhone/RePhone_APIs-Audio",id:"Seeed_Elderly/rePhone/Program with rePhone/RePhone_APIs-Audio",title:"RePhone APIs - Audio",description:"RePhone APIs - Audio",source:"@site/docs/Seeed_Elderly/rePhone/Program with rePhone/RePhone_APIs-Audio.md",sourceDirName:"Seeed_Elderly/rePhone/Program with rePhone",slug:"/RePhone_APIs-Audio",permalink:"/custom/RePhone_APIs-Audio",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/rePhone/Program with rePhone/RePhone_APIs-Audio.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"RePhone APIs - Audio",title:"RePhone APIs - Audio",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/RePhone_APIs-Audio",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Lua for RePhone",permalink:"/custom/Lua_for_RePhone"},next:{title:"Mesh Bee",permalink:"/custom/Mesh_Bee"}},u={},s=[{value:"Function List",id:"function-list",level:2},{value:"APIs",id:"apis",level:2},{value:"LAudio.begin()",id:"laudiobegin",level:3},{value:"LAudio.playFile()",id:"laudioplayfile",level:3},{value:"LAudio.setVolume()",id:"laudiosetvolume",level:3},{value:"LAudio.pause()",id:"laudiopause",level:3},{value:"LAudio.resume()",id:"laudioresume",level:3},{value:"LAudio.stop()",id:"laudiostop",level:3},{value:"LAudio.getStatus()",id:"laudiogetstatus",level:3},{value:"Example",id:"example",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:s},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Xadow_Audio.JPG",alt:null})),(0,l.kt)("p",null,"RePhone supports playback audio files on SD card or on built-in flash. Formats supported include ",(0,l.kt)("strong",{parentName:"p"},"WAV"),", ",(0,l.kt)("strong",{parentName:"p"},"MP3"),", ",(0,l.kt)("strong",{parentName:"p"},"AAC"),", etc. With this library, you can ",(0,l.kt)("strong",{parentName:"p"},"Play"),", ",(0,l.kt)("strong",{parentName:"p"},"Pause"),", ",(0,l.kt)("strong",{parentName:"p"},"Stop")," playback process and ",(0,l.kt)("strong",{parentName:"p"},"Adjust volume"),"."),(0,l.kt)("p",null,"The playback (decoding) job is handled internally by ",(0,l.kt)("strong",{parentName:"p"},"LinkIt"),". Therefore, all functions are ",(0,l.kt)("strong",{parentName:"p"},"non-blocking"),", which means after you call playFile(), it will play the audio and immediately return to your program."),(0,l.kt)("p",null,'Use getStatus() to check the current status and act correspondingly. The audio status can be "playing", "play finished", "play paused", etc. The audio will be outputted through the earphone jack on the Linkit board.'),(0,l.kt)("div",{class:"admonition note"},(0,l.kt)("p",{class:"admonition-title"},"Note"),"If you try to play another audio file before the previous playback is finished, the previous playback will be stopped automatically, and the new audio will be played."),(0,l.kt)("p",null,"[",(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/RePhone_APIs-Audio/img/Viewallapiofrephone.png",alt:null}),"]"),(0,l.kt)("h2",{id:"function-list"},"Function List"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"begin()"),(0,l.kt)("li",{parentName:"ul"},"playFile()"),(0,l.kt)("li",{parentName:"ul"},"setVolume()"),(0,l.kt)("li",{parentName:"ul"},"pause()"),(0,l.kt)("li",{parentName:"ul"},"resume()"),(0,l.kt)("li",{parentName:"ul"},"stop()"),(0,l.kt)("li",{parentName:"ul"},"getStatus()")),(0,l.kt)("h2",{id:"apis"},"APIs"),(0,l.kt)("h3",{id:"laudiobegin"},"LAudio.begin()"),(0,l.kt)("p",null,"Initializes the Audio module."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("p",null,"LAudio.begin()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.setVolume(2);\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n}\n\xa0\nvoid loop()\n{\n\xa0\n}\n')),(0,l.kt)("h3",{id:"laudioplayfile"},"LAudio.playFile()"),(0,l.kt)("p",null,"Plays an audio file on SD card or flash storage."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"LAudio.playFile(StorageEnum drv, char *songName)\nLAudio.playFile(StorageEnum drv, wchar_t* songName)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"drv")," - Storage, can be storageSD (SD card) or storageFlash (flash storage)"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"songName")," - Path of audio file in ascii (char","*",") or unicode (wchar","_","t","*",") encoding")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.setVolume(2);\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n}\n\xa0\nvoid loop()\n{\n\xa0\n}\n')),(0,l.kt)("h3",{id:"laudiosetvolume"},"LAudio.setVolume()"),(0,l.kt)("p",null,"Adjusts the playback volume; range is from 0 (silent) to 6 (max)."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("p",null,"LAudio.setVolume(unsigned char volume)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"volume"),": Volume level, can be ",(0,l.kt)("strong",{parentName:"li"},"0")," to ",(0,l.kt)("strong",{parentName:"li"},"6"),"; 0 as silent and 6 as max volume")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.setVolume(2);\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n}\n\xa0\nvoid loop()\n{\n\xa0\n}\n')),(0,l.kt)("h3",{id:"laudiopause"},"LAudio.pause()"),(0,l.kt)("p",null,"Pauses the playback. It only works when there is an active playback ongoing (by playFile())."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("p",null,"LAudio.pause()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n    LAudio.setVolume(2);\n    delay(5000);\n    LAudio.pause();    // play for 5secs and pause\n\xa0\n    delay(5000);\n    LAudio.resume();    // wait for another 5 secs to resume\n\xa0\n    delay(5000);\n    LAudio.stop();    // wait for another 5 secs to stop\n}\n\xa0\nvoid loop()\n{\n\xa0\n}\n')),(0,l.kt)("h3",{id:"laudioresume"},"LAudio.resume()"),(0,l.kt)("p",null,"Resumes playback. It only works when the playback has been paused."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("p",null,"LAudio.resume()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n    LAudio.setVolume(2);\n    delay(5000);\n    LAudio.pause();  // play for 5secs and pause\n\xa0\n    delay(5000);\n    LAudio.resume(); // wait for another 5 secs to resume\n\xa0\n    delay(5000);\n    LAudio.stop();   // wait for another 5 secs to stop\n}\n\xa0\nvoid loop()\n{\n\xa0\n}\n')),(0,l.kt)("h3",{id:"laudiostop"},"LAudio.stop()"),(0,l.kt)("p",null,"Stops playback."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("p",null,"LAudio.stop()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n    LAudio.setVolume(2);\n    delay(5000);\n    LAudio.pause();  // play for 5secs and pause\n\xa0\n    delay(5000);\n    LAudio.resume(); // wait for another 5 secs to resume\n\xa0\n    delay(5000);\n    LAudio.stop();   // wait for another 5 secs to stop\n}\n\xa0\nvoid loop()\n{\n\xa0\n}\n')),(0,l.kt)("h3",{id:"laudiogetstatus"},"LAudio.getStatus()"),(0,l.kt)("p",null,"Queries the current playback status."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Syntax")))),(0,l.kt)("p",null,"LAudio.getStatus()"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Parameters")))),(0,l.kt)("p",null,"N/A"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Returns")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"AudioStatus")," - Playback status, can be:"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"AudioStop")," - Playback is stopped."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"AudioPause")," - Playback is paused (and can resume)."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"AudioResume")," - Playback resumes"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"AudioEndOfFile")," - Playback is finished."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("em",{parentName:"li"},"AudioCommonFailed")," - Playback fails (e.g. the audio file is corrupted).")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Example")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'#include <LAudio.h>\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    LAudio.setVolume(2);\n    LAudio.playFile(storageFlash,(char*)"sample.mp3");\n}\n\xa0\nvoid loop()\n{\n    AudioStatus status;\n    status = LAudio.getStatus();\n    if(AudioEndOfFile == status)    // Check if playback finish and restart\n    {\n        LAudio.playFile(storageFlash,(char*)"sample.mp3");\n    }\n}\n')),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Description")))),(0,l.kt)("p",null,"With this example, you can play a mp3 file. Open serial monitor to input a number to control the playing."),(0,l.kt)("p",null,"Command as below:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Play"),(0,l.kt)("li",{parentName:"ol"},"Setvolume"),(0,l.kt)("li",{parentName:"ol"},"Pause"),(0,l.kt)("li",{parentName:"ol"},"Resume"),(0,l.kt)("li",{parentName:"ol"},"Stop")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"Code")))),(0,l.kt)("p",null,"You can find the code here: ",(0,l.kt)("strong",{parentName:"p"},"File")," -> ",(0,l.kt)("strong",{parentName:"p"},"Examples")," -> ",(0,l.kt)("strong",{parentName:"p"},"LAudio")," -> ",(0,l.kt)("strong",{parentName:"p"},"AudioPlayer")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'/*\n  RePhone audio test Demo\n  First you need to put a mp3 file to storage\n  Then open the Serial monitor, input number to change the status\n  1 - Play\n  2 - Setvolume\n  3 - Pause\n  4 - Resume\n  5 - Stop\n*/\n#include <LAudio.h>\n\xa0\n// add your music file name here\n#define    FILE_NAME    "music.mp3"\n\xa0\n#define    PLAY         1\n#define    SETVOLUME    2\n#define    PAUSE        3\n#define    RESUME       4\n#define    STOP         5\n\xa0\nunsigned char Status_Value = STOP;\n\xa0\nint volume = 6;\n\xa0\nvoid changeVolume()\n{\n    volume++;\n    volume = volume>6 ? 1 : volume;\n}\n\xa0\nvoid setup()\n{\n    LAudio.begin();\n    Serial.begin(115200);\n    Serial.println("Play      - 1");\n    Serial.println("Setvolume - 2");\n    Serial.println("Pause     - 3");\n    Serial.println("Resume    - 4");\n    Serial.println("Stop      - 5");\n    Change_Status(PLAY);\n}\n\xa0\nchar StatusFlag = 0;\n\xa0\nvoid loop()\n{\n    unsigned char KEY_NUM;\n    AudioStatus status;\n\xa0\n    KEY_NUM = task_uart_key();\n\xa0\n    if(KEY_NUM > 0)\n    {\n        Change_Status(KEY_NUM);\n        KEY_NUM = 0;\n    }\n\xa0\n    status = LAudio.getStatus();\n    if(StatusFlag != status)\n    {\n        StatusFlag = status;\n        Serial.print("LAudio status is ");\n        Serial.println(status);\n    }\n\xa0\n    if(status == AudioEndOfFile)\n    {\n        Status_Value = PLAY;\n        Change_Status(Status_Value);\n    }\n}\n\xa0\nvoid Change_Status(unsigned char status)\n{\n    switch(status)\n    {\n        case 1:\n        LAudio.playFile(storageFlash,(char*)"music.mp3");\n        LAudio.setVolume(volume);\n        Serial.println("playOne");\n        break;\n\xa0\n        case 2:\n        LAudio.setVolume(volume);\n        changeVolume();\n        Serial.print("set volume to ");\n        Serial.println(volume);\n        break;\n\xa0\n        case 3:\n        LAudio.pause();\n        Serial.println("pause");\n        break;\n\xa0\n        case 4:\n        LAudio.resume();\n        Serial.println("resume");\n        break;\n\xa0\n        case 5:\n        LAudio.stop();\n        Serial.println("stop");\n        break;\n\xa0\n        default:\n        break;\n    }\n}\n\xa0\nunsigned int task_uart_key()\n{\n    String inString = "";\n    unsigned int keyValue = 0;\n    unsigned char bitCount = 0;\n    unsigned char dataTemp1[10] = {0};\n    while(Serial.available() > 0)\n    {\n        unsigned char inChar = Serial.read();\n        inString += (char)inChar;\n        dataTemp1[bitCount] = inChar - \'0\';\n        bitCount += 1;\n        delay(10);\n    }\n    if(inString != "")\n    {\n        if(bitCount > 4)\n        {\n            Serial.println("Key input error.");\n        }\n        else\n        {\n            for(char i=0;i<bitCount;i++)\n            {\n                unsigned int dataTemp2 = 1;\n                for(char j=0;j<(bitCount-i-1);j++)dataTemp2 *= 10;\n                keyValue += (dataTemp1[i] * dataTemp2);\n            }\n            Serial.print("Key value is: ");\n            Serial.println(keyValue);\n        }\n    }\n    return keyValue;\n}\n')),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
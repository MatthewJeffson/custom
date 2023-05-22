"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[37941],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>k});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(i),c=a,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return i?n.createElement(k,r(r({ref:t},d),{},{components:i})):n.createElement(k,r({ref:t},d))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},93885:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const o={description:"Audio System Design Tool",title:"Audio System Design Tool",keywords:["Wio_terminal Audio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Audio-GUI",last_update:{date:"1/16/2023",author:"jianjing Huang"}},r="Audio System Design Tool",l={unversionedId:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-GUI",id:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-GUI",title:"Audio System Design Tool",description:"Audio System Design Tool",source:"@site/docs/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-GUI.md",sourceDirName:"Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board",slug:"/Wio-Terminal-Audio-GUI",permalink:"/Wio-Terminal-Audio-GUI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Extension_Board/Audio_Extension_Board/Wio-Terminal-Audio-GUI.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673798400,formattedLastUpdatedAt:"Jan 15, 2023",frontMatter:{description:"Audio System Design Tool",title:"Audio System Design Tool",keywords:["Wio_terminal Audio"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Audio-GUI",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Play and Record",permalink:"/Wio-Terminal-Audio-Play-Record"},next:{title:"Applications Kit ML101 with Prof. Vijay Course",permalink:"/Wio-Terminal-TinyML-Kit-Course"}},s={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Designing an Audio System",id:"designing-an-audio-system",level:3},{value:"Playing Music files from SD Card",id:"playing-music-files-from-sd-card",level:4},{value:"Example Code",id:"example-code",level:4},{value:"Peak Detection",id:"peak-detection",level:3},{value:"Example Code",id:"example-code-1",level:4},{value:"Audio Spectrum Visualizer",id:"audio-spectrum-visualizer",level:3},{value:"Example Code",id:"example-code-2",level:4},{value:"Recording and Playing at Real-Time",id:"recording-and-playing-at-real-time",level:3},{value:"Example Code",id:"example-code-3",level:4}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"audio-system-design-tool"},"Audio System Design Tool"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/GUI.gif"})),(0,a.kt)("p",null,"This wiki introduces how to use the ",(0,a.kt)("strong",{parentName:"p"},"Audio System Design Tool")," to design a audio system for Audio library using ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ReSpeaker-2-Mics-Pi-HAT.html"},(0,a.kt)("strong",{parentName:"a"},"ReSpeaker 2-Mit Hat")),". This makes designing audio system much easier when you can see where the inputs and outputs are going."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"This is a Seeed's fork of the ",(0,a.kt)("a",{parentName:"strong",href:"https://www.pjrc.com/teensy/gui/"},"Audio System Design Tool for Teensy Audio Library"),"."))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://seeed-studio.github.io/Seeed_Arduino_Audio/"},(0,a.kt)("strong",{parentName:"a"},"Audio System Design Tool"))," here. For more information about this, please also visit ",(0,a.kt)("a",{parentName:"p",href:"https://www.pjrc.com/teensy/"},"teensy"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once you are on the site, you should see all the ",(0,a.kt)("strong",{parentName:"p"},"available features of the Audio library to the left column"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can click on each class and see what are the available functions within each class and how to use them."))),(0,a.kt)("h3",{id:"designing-an-audio-system"},"Designing an Audio System"),(0,a.kt)("h4",{id:"playing-music-files-from-sd-card"},"Playing Music files from SD Card"),(0,a.kt)("p",null,"Let's use walk through an example to get the basic of the Audio Design System. Let's say you want to simply play a song from the SD card via the speaker via ReSpeaker 2-Mic hat:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"INPUT"))," is the play from SD card.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"OUTPUT"))," is the I2S output.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"wm8960"))," is the control unit of the ReSpeaker 2-Mics."))),(0,a.kt)("p",null,"So the design should look something like this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/simple-play.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Export")," on the top to export the Macros definitions for the system to paste to Arduino IDE.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/pasting.png"})),(0,a.kt)("h4",{id:"example-code"},"Example Code"),(0,a.kt)("p",null,"This example code uses the Macros definitions from the previously design system, plays music files from the SD card."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure that there are ",(0,a.kt)("inlineCode",{parentName:"p"},"SDTEST1.wav"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SDTEST2.wav"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SDTEST3.wav")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SDTEST4.wav"),"  music files in the MicroSD card in Wio Terminal.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Audio.h>\n#include <Wire.h>\n#include <Seeed_FS.h>\n#include "SD/Seeed_SD.h"\n\n// GUItool: begin automatically generated code\nAudioPlaySdWav           playSdWav1;     //xy=376,277\nAudioOutputI2S           i2s1;           //xy=611,277\nAudioConnection          patchCord1(playSdWav1, 0, i2s1, 0);\nAudioConnection          patchCord2(playSdWav1, 1, i2s1, 1);\nAudioControlWM8960       wm8960_1;       //xy=496,363\n// GUItool: end automatically generated code\n\nvoid setup() {\n  Serial.begin(9600);\n  while(!Serial);\n\n  // Audio connections require memory to work.  For more\n  // detailed information, see the MemoryAndCpuUsage example\n  AudioMemory(8);\n\n  wm8960_1.enable();\n  wm8960_1.volume(0.7);\n\n  while (!SD.begin(SDCARD_SS_PIN,SDCARD_SPI,10000000UL)) {\n    Serial.println("Card Mount Failed");\n    return;\n  }\n}\n\nvoid playFile(const char *filename)\n{\n  Serial.print("Playing file: ");\n  Serial.println(filename);\n  // Start playing the file.  This sketch continues to\n  // run while the file plays.\n  playSdWav1.play(filename);\n  // A brief delay for the library read WAV info\n  delay(5);\n  // Simply wait for the file to finish playing.\n  while (playSdWav1.isPlaying()) {\n  }\n}\n\nvoid loop() {\n  playFile("SDTEST1.WAV");  // filenames are always uppercase 8.3 format\n  delay(500);\n  playFile("SDTEST2.WAV");\n  delay(500);\n  playFile("SDTEST3.WAV");\n  delay(500);\n  playFile("SDTEST4.WAV");\n  delay(1500);\n}\n')),(0,a.kt)("h3",{id:"peak-detection"},"Peak Detection"),(0,a.kt)("p",null,"Let's use the design tool to design a system for peak detection whilst playing the music from the SD card."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"INPUT"))," is the play from SD card.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"OUTPUT"))," is the I2S output and two peaks! One peak for left channel, and one peak for the right channel.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"wm8960"))," is the control unit of the ReSpeaker 2-Mics."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/peak-detection-gui.png"})),(0,a.kt)("h4",{id:"example-code-1"},"Example Code"),(0,a.kt)("p",null,"Please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#peak-detection"},"here"),"."),(0,a.kt)("h3",{id:"audio-spectrum-visualizer"},"Audio Spectrum Visualizer"),(0,a.kt)("p",null,"This is the example of playing music from SD card whilst performing a FFT to get the frequency data for implementing an Audio Spectrum Visualizer."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"INPUT"))," is the play from SD card.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"OUTPUT"))," is the I2S output and FFT calculations.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"wm8960"))," is the control unit of the ReSpeaker 2-Mics."))),(0,a.kt)("p",null,"Here we will introduce another useful feature, the ",(0,a.kt)("strong",{parentName:"p"},"Mixer"),". This allows you to combine max ",(0,a.kt)("strong",{parentName:"p"},"four")," audio channels into one. This is used as performing FFT to combined channels (left and right) is more accurate instead of single channel."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/audio-spc-gui.png"})),(0,a.kt)("h4",{id:"example-code-2"},"Example Code"),(0,a.kt)("p",null,"Please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#audio-spectrum-visualizer"},"here"),"."),(0,a.kt)("h3",{id:"recording-and-playing-at-real-time"},"Recording and Playing at Real-Time"),(0,a.kt)("p",null,"This time let's design a system to record and play at real-time!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"INPUT"))," is the recording from the mic: ",(0,a.kt)("strong",{parentName:"p"},"Input I2S")," -> ",(0,a.kt)("strong",{parentName:"p"},"RecordQueue"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"OUTPUT"))," is the I2S output. ",(0,a.kt)("strong",{parentName:"p"},"PlayQueue")," -> ",(0,a.kt)("strong",{parentName:"p"},"Output I2S"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"wm8960"))," is the control unit of the ReSpeaker 2-Mics."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Audio/record-play-realtime.png"})),(0,a.kt)("h4",{id:"example-code-3"},"Example Code"),(0,a.kt)("p",null,"Please check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Audio-Play-Record/#record-and-play-at-real-time"},"here"),"."))}m.isMDXComponent=!0}}]);
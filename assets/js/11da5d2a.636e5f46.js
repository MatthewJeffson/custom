"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[79228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,k=p["".concat(s,".").concat(m)]||p[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26934:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={description:"Music Shield V1.0",title:"Music Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Music_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Music_Shield_V1.0",id:"Top_Brand/Arduino/shield/Music_Shield_V1.0",title:"Music Shield V1.0",description:"Music Shield V1.0",source:"@site/docs/Top_Brand/Arduino/shield/Music_Shield_V1.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Music_Shield_V1.0",permalink:"/custom/Music_Shield_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Music_Shield_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676505600,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{description:"Music Shield V1.0",title:"Music Shield V1.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Music_Shield_V1.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Music Shield",permalink:"/custom/Music_Shield"},next:{title:"Relay Shield",permalink:"/custom/Relay_Shield"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Interface Function",id:"interface-function",level:2},{value:"Pins usage on Arduino",id:"pins-usage-on-arduino",level:3},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Software Installation",id:"software-installation",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/Musicshieldnew500.jpg",alt:null})),(0,r.kt)("p",null,"The Music Shield is a professional audio codec.It can work with Arduino, Seeeduino, Seeeduino Mega and Arduino Mega. It is based on VS1053b IC, and can play a variety of music formats stored on MicroSD cards with Seeed the provided Arduino Library."),(0,r.kt)("p",null,"Note:Recording is only supported on Seeeduino Mega and Arduino Mega for now."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Arduino,Seeeduino, Arduino Mega, and Seeeduino Mega compatible")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"2 control-push buttons and 1 knob switch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Plays music from micro SD cards Decodes:MP3,WAV,MIDI,Ogg Vorbis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"I2S interface for external DAC")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Headphone/Line Out for playback")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Line In for recording in OGG format")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Excellent sound quality with \xb11dB Frequency Response")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"FCC verification"))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Typical"),(0,r.kt)("th",{parentName:"tr",align:null},"Max"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"4.5"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"5.5"),(0,r.kt)("td",{parentName:"tr",align:null},"VDC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Current"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Output S/N Ratio (With A-Weighting)"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"dB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Channel Isolation (With A-Weighting)"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"50"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"dB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Frequency Response"),(0,r.kt)("td",{parentName:"tr",align:null},"-1"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"dB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Signal Distortion"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"0.5%"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum output(each channel with 16 ohm load)"),(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"mV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Audio Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5mm Audio Jack"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supporting Format"),(0,r.kt)("td",{parentName:"tr",align:null},"MP3, WAV,MIDI, Ogg"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supported SD Card"),(0,r.kt)("td",{parentName:"tr",align:null},"Micro SD Card"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESD contact discharge"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb14"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"KV")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ESD air discharge"),(0,r.kt)("td",{parentName:"tr",align:null},"\xb18"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dimension"),(0,r.kt)("td",{parentName:"tr",align:null},"80.4x52.5x13.9"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Net Weight"),(0,r.kt)("td",{parentName:"tr",align:null},"11\xb12"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"g")))),(0,r.kt)("h2",{id:"interface-function"},"Interface Function"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicShield-hard.jpg",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Multifunction button:")," Turn left to play previous song, and right to next song, while pressing it down to pause and resume."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Volume indicator LED (RED):")," If volume+, the red LED will be brighter."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Play/Pause indicator LED (GREEN):")," If playing, the green LED blinks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line out")," can drive 16 ohm or 32 ohm earphone."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Line in")," is used to record audio from other resources."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Micro SD card")," can be FAT16 or FAT32, and the size more than 2GB is not supported. (PLEASE NOTE: Example code included with library will only use FAT16 formatted cards)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"I2S and GPIO")," are for digital audio output."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ISP interface")," is kept for bringing SPI port when using with Mega."),(0,r.kt)("h3",{id:"pins-usage-on-arduino"},"Pins usage on Arduino"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D0")," - Unused."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D1")," - Unused."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D2")," - Used for receiving signal from iPod dock(could be used for your own application if iPod dock is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D3")," - Used for receiving signal from button for Volume Up(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D4")," - Used for receiving signal from switch for Next Song function(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D5")," - Used for receive signal from switch for Play&Stop and Record function(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D6")," - Used for receive signal from switch for Previous Song function(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D7")," - Used for receiving signal from button for Volume Down(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D8")," - Used for Green Led instructions(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D9")," - Used for Red Led instructions(could be used for your own application if the switch is not used)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D10")," - Used for SPI Chip Select."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D11")," - Used for SPI MOSI."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D12")," - Used for SPI MISO."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D13")," - Used for SPI SCK."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D14(A0)")," - Used for Reset of VS1053."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D15(A1)")," - Used for Data Require of VS1053."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D16(A2)")," - Used for Data Select of VS1053."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D17(A3)")," - Used for Chip Select of VS1053."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D18(A4)")," - Unused."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"D19(A5)")," - Unused."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,r.kt)("p",null,"Insert the Micro SD card and the earphone; Plug the Music Shield onto the Arduino/Seeeduino; Connect the board to PC using USB cable. ",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/img/MusicInstall.jpg",alt:null})),(0,r.kt)("h3",{id:"software-installation"},"Software Installation"),(0,r.kt)("p",null,"Play music:"),(0,r.kt)("p",null,"1.Make sure there are songs in the micro sd card."),(0,r.kt)("p",null,"2.Download ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip"},"File:Music v1 14.zip"),"  and ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/NewSoftSerial.zip"},"File:NewSoftSerial.zip"),"  for music shield."),(0,r.kt)("p",null,"3.Uncompress these two packages and put them in Arduino-0022 program: ..\\arduino-0022\\libraries"),(0,r.kt)("p",null,"4.",(0,r.kt)("strong",{parentName:"p"},"[Ignore this if under Linux]")," Download a new ",(0,r.kt)("strong",{parentName:"p"},"portpins.h")," file and replace the default portpins.h file of Arduino-0022 program: ..\\arduino-0022\\hardware\\tools\\avr\\avr\\include\\avr"),(0,r.kt)("p",null,"5.Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others."),(0,r.kt)("p",null,"6.Run the arduino program compile and upload the sketch  into Arduino board."),(0,r.kt)("p",null,"7.Just enjoy."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Record music:"),"(Only support ATmega1280 and ATmega2560 based board)"),(0,r.kt)("p",null,"1.Press play/stop knob before pressing the RESET button of ",(0,r.kt)("strong",{parentName:"p"},"Arduino")," ."),(0,r.kt)("p",null,"2.Release RESET button for a second and then release play/stop knob. When the music shield is beginning to record, the green and red LEDs will blink synchronous."),(0,r.kt)("p",null,"3.Press play/stop knob will stop recording."),(0,r.kt)("p",null,"For Arduino 1.0:\nAttention Please:The library of Fat16 between demo-1 and demo-2 is different,so please confirm that you download a corresponding library when using the two demos.And the two libraries can not existed together,so delete a one before using the other."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Demo 1: Use SD library")),(0,r.kt)("p",null,"This demo will use the SD library coming with Arduino 1.0."),(0,r.kt)("p",null,"1.Make sure there are songs in the micro sd card."),(0,r.kt)("p",null,"2.Download ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicPlayer_v1_7.zip"},"File:MusicPlayer v1 7.zip"),"  and ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Demo1_Fat16.zip"},"Fat16"),"for music shield."),(0,r.kt)("p",null,"3.Uncompress the package and put it in Arduino-1.0 program: ..\\arduino-1.0\\libraries"),(0,r.kt)("p",null,"4.Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others."),(0,r.kt)("p",null,"5.","[Ignore this if under Linux]"," Download a new ",(0,r.kt)("strong",{parentName:"p"},"portpins.h")," file and replace the default portpins.h file of Arduino-1.0 program: ..\\arduino-1.0\\hardware\\tools\\avr\\avr\\include\\avr"),(0,r.kt)("p",null,"6.Run the arduino program compile and upload the sketch of music_v1_2 -> musicPlayAll into Arduino board."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Demo 2: Use Fat16 library")),(0,r.kt)("p",null,"This demo will use an open source library ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip"},"Music_Shield_Demo_2_Library"),". There are two sketches in this demo: Using MusicPlayRandomly sketch, you can make the music play randomly.And using MusicPlayWithName, you can specify which song to be played by name.(Note: The demo can't co-exist with demo 1 in the libraries)"),(0,r.kt)("p",null,"1.Make sure there are songs in the micro sd card."),(0,r.kt)("p",null,"2.Download  ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield_Demo_2_Library.zip"},"Music_Shield_Demo_2_Library"),"for music shield."),(0,r.kt)("p",null,"3.","[Under Linux]"," Copy libraries/Fat16/Fat16util.h to libraries/Fat16/Fat16Util.h (note util vs Util). The includes have the wrong case and this is easiest workaround."),(0,r.kt)("p",null,"4.Uncompress these two packages and put them in Arduino-1.0 program: ..\\arduino-1.0\\libraries"),(0,r.kt)("p",null,"5.Select the corresponding Arduino board, like Arduino UNO or Duemilanove or others."),(0,r.kt)("p",null,"6.","[Ignore this if under Linux]"," Download a new ",(0,r.kt)("strong",{parentName:"p"},"portpins.h")," file and replace the default portpins.h file of Arduino-1.0 program: ..\\arduino-1.0\\hardware\\tools\\avr\\avr\\include\\avr"),(0,r.kt)("p",null,"7.Run the arduino program compile and upload the sketch of MusicShieldNewSdLib into Arduino board."),(0,r.kt)("p",null,"Note: About the specific methods of some functions in the library, You can reference ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Music_Shield_V1.0/#software-installation"},"the sofeware installation")," of the Music Shield V2.0."),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/MusicShielEagleFiles.zip"},"Music Shield Eagle Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.pdf"},"Music Shield pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music%20Shield.sch"},"Music Shield sch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_Shield.pdf"},"Music Shield Schematic pdf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]"),(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Music_Shield_V1.0/res/Music_v1_14.zip"},"Music Shield Source code file for Arduino 0022"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
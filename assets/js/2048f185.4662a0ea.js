"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[90003],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=o,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(h,l(l({ref:t},s),{},{components:n})):r.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={title:"Grove - Sound Recorder",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Sound_Recorder/",slug:"/Grove-Sound_Recorder",last_update:{date:"01/06/2022",author:"gunengyu"}},l=void 0,i={unversionedId:"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder",id:"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder",title:"Grove - Sound Recorder",description:"The Grove-Sound Recorder is based on APR9600, which offers true single-chip voice recording, no-volatile storage, and playback capability for 32 to 60 seconds. The sample is 8k and the total 32s for the Seeed Twig-Sound Recorder, divided into 4 sections, each section can be controlled separately. Besides, this Sound Recorder is also Grove compatible interface and can be controlled manually or Arduino/Seeeduino.",source:"@site/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Sound",slug:"/Grove-Sound_Recorder",permalink:"/custom/Grove-Sound_Recorder",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Recorder.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"Jan 6, 2022",frontMatter:{title:"Grove - Sound Recorder",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Sound_Recorder/",slug:"/Grove-Sound_Recorder",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Speech Recognizer",permalink:"/custom/Grove-Speech_Recognizer"},next:{title:"Grove - Analog Microphone",permalink:"/custom/Grove-Analog-Microphone"}},d={},c=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Usage",id:"usage",level:2},{value:"How to control it manually",id:"how-to-control-it-manually",level:3},{value:"How to control the Recorder by Arduino/Seeeduino",id:"how-to-control-the-recorder-by-arduinoseeeduino",level:3},{value:"How to change the sample rate and duration for each section",id:"how-to-change-the-sample-rate-and-duration-for-each-section",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Grove-Sound_Recorder.jpg",alt:null})),(0,o.kt)("p",null,"The Grove-Sound Recorder is based on ",(0,o.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf"},"APR9600"),", which offers true single-chip voice recording, no-volatile storage, and playback capability for 32 to 60 seconds. The sample is 8k and the total 32s for the Seeed Twig-Sound Recorder, divided into 4 sections, each section can be controlled separately. Besides, this Sound Recorder is also Grove compatible interface and can be controlled manually or Arduino/Seeeduino."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Sound-Recorder-p-904.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Grove compatible interface"),(0,o.kt)("li",{parentName:"ul"},"Can be controlled both manually or by MCU"),(0,o.kt)("li",{parentName:"ul"},"Non-volatile Flash memory technology, No battery backup required"),(0,o.kt)("li",{parentName:"ul"},"User-friendly, easy-to-use operation"),(0,o.kt)("li",{parentName:"ul"},"Low Power consumption"),(0,o.kt)("li",{parentName:"ul"},"Sample rate and duration changeable by replacing a single resistor.",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))))),(0,o.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Toys")),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,o.kt)("tr",null,(0,o.kt)("th",{scope:"col"},"Item"),(0,o.kt)("th",{scope:"col"},"Min"),(0,o.kt)("th",{scope:"col"},"Typical"),(0,o.kt)("th",{scope:"col"},"Max"),(0,o.kt)("th",{scope:"col"},"Unit")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Voltage"),(0,o.kt)("td",null,"3.0"),(0,o.kt)("td",null,"5.0"),(0,o.kt)("td",null,"5.25"),(0,o.kt)("td",null,"V")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Operating Current"),(0,o.kt)("td",{colspan:"3"},"25"),(0,o.kt)("td",null,"mA")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Standby Current"),(0,o.kt)("td",{colspan:"3"},"1"),(0,o.kt)("td",null,"uA")),(0,o.kt)("tr",{align:"center"},(0,o.kt)("th",{scope:"row"},"Range"),(0,o.kt)("td",{colspan:"3"},"\xb11.5"),(0,o.kt)("td",null,"g"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"This Grove-Sound Recorder supports 4 Message segments of fixed duration. Each segments can be controlled manually or by the MCU(Arduino/Seeeduino). And the duration of every segment can be changed by the customer.\n",(0,o.kt)("a",{parentName:"p",href:"http://ijam.com.au/"},"Recorder Method")),(0,o.kt)("p",null,'Control the recorder manually is so easy. OK, let\'s have a look at it: The switch(SW1) is for recording/playing selecting, push it to "Rec" when you want to record voice, and push it to "Play" when you want to replay the voice in the recorder. The 4 buttons(K1~K4) are the control button, you can control with segment to record/replay by pressing the related button. The output connector is for connecting a 8 0.5w speaker, and the Grove connector is for powering and MCU controlling.'),(0,o.kt)("h3",{id:"how-to-control-it-manually"},"How to control it manually"),(0,o.kt)("p",null,'Step 1: Power the recorder. You could connect the "control" to the Base Shield via the grove 4 pin wire or any 5V voltage source.'),(0,o.kt)("div",{class:"admonition note"},(0,o.kt)("p",{class:"admonition-title"},"Note"),"If you connect it to the Base Shield via 4 pin wire, you should make sure the SEL1 and SEL2 low by programming the connected pins."),(0,o.kt)("p",null,'I connected the "Control" connector to Digital port D1. And set the D1 and D2 to low by:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const int D1 =  1;\nconst int D2 =  2;\nint State = LOW;\nvoid setup() {\n    pinMode(D1, OUTPUT);\n    pinMode(D2, OUTPUT);\n    digitalWrite(D1, State );\n    digitalWrite(D2, State );\n}\nvoid loop()\n{\n}\n")),(0,o.kt)("p",null,'Step 2: Push the SW1 to "rec".'),(0,o.kt)("p",null,'Step 3: Push and hold the segment related button, K1 for example, to begin the recording, and release the button to stop recording, and you will hear "DI" both the beginning and stopping of recording.'),(0,o.kt)("div",{class:"admonition note"},(0,o.kt)("p",{class:"admonition-title"},"Note"),"The recording time for each segment should not be more than 15s, or it will be stop automatically even if you keep the button pressed."),(0,o.kt)("p",null,'Step 4: When you want to replay the sound you recorded, just push the SW1 to "Play", and push the related button(Do not need to hold on), then you will hear the sound what you have recorded in this segment.'),(0,o.kt)("h3",{id:"how-to-control-the-recorder-by-arduinoseeeduino"},"How to control the Recorder by Arduino/Seeeduino"),(0,o.kt)("p",null,"The Recorder can also controlled by the MCU(Arduino or Seeeduino), this feature makes this recorder module suitable for much more applications and gives the user fantastic feeling.\nOk, let's begin the MCU controlling for this recorder. Note that we define the 4 segments that controlled by K1/K2/K3/K4 as Section_1/Section_2/Section_3/Section_4."),(0,o.kt)("p",null,'Step 1: Prepare the hardware:wire the connector "Control" to the digital port D2 of the Base Shield. And push the SW1 to "Rec".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/D2.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/Sel.jpg",alt:null})),(0,o.kt)("p",null,"Step 2: Prepare the software. In order to control select the section to Record/Play, each decode of Sel_1 and Sel_2 point to different section."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Sel_1(D2)/Sel_2(D1)"),(0,o.kt)("th",{parentName:"tr",align:null},"Segment selected"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0 0"),(0,o.kt)("td",{parentName:"tr",align:null},"None ",(0,o.kt)("em",{parentName:"td"},"(No segment is selected)"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"0 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Section_2")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1 0"),(0,o.kt)("td",{parentName:"tr",align:null},"Section_3")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1 1"),(0,o.kt)("td",{parentName:"tr",align:null},"Section_4")))),(0,o.kt)("div",{class:"admonition note"},(0,o.kt)("p",{class:"admonition-title"},"Note"),"When controlled by MCU, Section_1 can not be selected."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Not interested in such a table, it is confusing! Just want the code?"),"\nDownload the following code to your Arduino/Seeeduino."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/****************************************************************************/\n\n#include \"APR9600.h\"\n\n/*macro definition of the Grove interface on the Sounder Recorder*/\n#define SEL1 2\n#define SEL2 3\nARP9600 recorder(SEL1,SEL2);\n\n/*Store the command from the serial monitor you type.*/\nchar index;//can be '2','3','4',that is the index of section 2,section 3,section 4\nchar control;//control byte, can be 'r' for record, 's' for stop recording,\n//'p' for play\n\nvoid setup()\n{\n    Serial.begin(9600);\n    recorder.begin();\n}\nvoid loop()\n{\n    getCommand();\n    delay(50);\n}\nvoid getCommand()\n{\n    if (Serial.available()>0)\n    {\n        /*Get the command from the serial monitor*/\n        index = Serial.read();\n        control = Serial.read();\n    }\n    while(Serial.available()>0)Serial.read();//clear the receive buffer\n    if((index > '1')&&(index < '5'))// index should be 2~4\n    {\n        if(control == 'r')//if it is record command?\n        {\n            recorder.record(index - 0x30);\n            Serial.print(\"get the \");\n            Serial.write(index);\n            Serial.write(control);\n            Serial.print(\" command, \");\n            Serial.print(\"begin to record section_\");\n            Serial.println(index - 0x30);\n        }\n        else if(control == 'p')//if it is play command\n        {\n            recorder.play(index - 0x30);\n            Serial.print(\"get the \");\n            Serial.write(index);\n            Serial.write(control);\n            Serial.print(\" command, \");\n            Serial.print(\"begin to play section_\");\n            Serial.println(index - 0x30);\n        }\n        else if(control == 's')//if it is stop command\n        {\n            recorder.stop();//stop recording\n            Serial.print(\"get the \");\n            Serial.write(index);\n            Serial.write(control);\n            Serial.print(\" command, \");\n            Serial.print(\"stop recording\");\n        }\n            /*Clear the command*/\n        index = 0;\n        control = 0;\n    }\n}\n")),(0,o.kt)("p",null,"Now, you can begin to control the recorder, with the following command (Baud Rate:9600):"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Command"),(0,o.kt)("td",{parentName:"tr",align:null},"Description"),(0,o.kt)("td",{parentName:"tr",align:null},"State of SW1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2rb"),(0,o.kt)("td",{parentName:"tr",align:null},"Begin to record Section_2"),(0,o.kt)("td",{parentName:"tr",align:null},"REC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2rs"),(0,o.kt)("td",{parentName:"tr",align:null},"Stop to record Section_2"),(0,o.kt)("td",{parentName:"tr",align:null},"REC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2p"),(0,o.kt)("td",{parentName:"tr",align:null},"Play Section_2"),(0,o.kt)("td",{parentName:"tr",align:null},"Play")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3rb"),(0,o.kt)("td",{parentName:"tr",align:null},"Begin to record Section_3"),(0,o.kt)("td",{parentName:"tr",align:null},"REC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3rs"),(0,o.kt)("td",{parentName:"tr",align:null},"Stop to record Section_3"),(0,o.kt)("td",{parentName:"tr",align:null},"REC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"3p"),(0,o.kt)("td",{parentName:"tr",align:null},"Play Section_3"),(0,o.kt)("td",{parentName:"tr",align:null},"Play")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4rb"),(0,o.kt)("td",{parentName:"tr",align:null},"Begin to record Section_4"),(0,o.kt)("td",{parentName:"tr",align:null},"REC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4rs"),(0,o.kt)("td",{parentName:"tr",align:null},"Stop to record Section_4"),(0,o.kt)("td",{parentName:"tr",align:null},"REC")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"4p"),(0,o.kt)("td",{parentName:"tr",align:null},"Play Section_4"),(0,o.kt)("td",{parentName:"tr",align:null},"Play")))),(0,o.kt)("div",{class:"admonition note"},(0,o.kt)("p",{class:"admonition-title"},"Note"),"Section_1 can not be controlled by MCU."),(0,o.kt)("p",null,'After download the firmware to your Arduino/Seeeduino, make sure the connector "Control" is connected to the D2&D3&V&G.'),(0,o.kt)("p",null,'Switch the SW1 to Rec, and type in the command with any serial port transceiver. OCTOPUS for example. Type in the command "2rb" first to begin to record the section_2, type in "2rs" to stop the recording. Note that the recording will automatic terminate after about about 15s if no "2rs" was typed in.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2rb.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2b.jpg",alt:null})),(0,o.kt)("p",null,'And now, you can type in the "2p" to play the Section_2, note that you should make sure the SW1 is pushed to "Play".'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/img/2p.jpg",alt:null})),(0,o.kt)("p",null,"You can record the 3 Sections (Section_2, Section_3, Section_4) first, and then, with the serial port, to control which section you want to replay."),(0,o.kt)("h3",{id:"how-to-change-the-sample-rate-and-duration-for-each-section"},"How to change the sample rate and duration for each section"),(0,o.kt)("p",null,"You can control the quality/duration trade off by controlling the sampling frequency. Oscillator frequency can be changed by changing the resistance",(0,o.kt)("strong",{parentName:"p"},"(R7 in the PCB)")," from the OscR pin to GND. Table summarizes resistance values and the corresponding sampling frequencies, as well as the resulting input bandwidth and duration."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Resistance"),(0,o.kt)("th",{parentName:"tr",align:null},"Sampling Frequency"),(0,o.kt)("th",{parentName:"tr",align:null},"Input Bandwidth"),(0,o.kt)("th",{parentName:"tr",align:null},"Duration"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"44 K"),(0,o.kt)("td",{parentName:"tr",align:null},"4.2 KHZ"),(0,o.kt)("td",{parentName:"tr",align:null},"2.1 KHZ"),(0,o.kt)("td",{parentName:"tr",align:null},"60 S")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"38 K"),(0,o.kt)("td",{parentName:"tr",align:null},"6.4 KHZ"),(0,o.kt)("td",{parentName:"tr",align:null},"3.2 KHZ"),(0,o.kt)("td",{parentName:"tr",align:null},"40 S")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"24 K"),(0,o.kt)("td",{parentName:"tr",align:null},"8.0 KHZ"),(0,o.kt)("td",{parentName:"tr",align:null},"4.0 KHZ"),(0,o.kt)("td",{parentName:"tr",align:null},"32 S")))),(0,o.kt)("p",null,"The R7 is 24K when it is shipped to your hand, you can change it to 38K/44K to get a longer duration of recording, with the tradeoff of lower sample rate."),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Sound_Recorder_Eagle_File.zip"},"Grove-Sound Recorder Eagle File")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sound_Recorder/res/Datasheet_of_APR9600.pdf"},"APR9600 Datasheet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wendellinfinity/GroveSoundRecorder"},"User contributed software Library that works(Use Old Arduino IDE / Software)"))),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
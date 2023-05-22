"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91535],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>I});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),c=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(s.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,I=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?i.createElement(I,a(a({ref:n},u),{},{components:t})):i.createElement(I,a({ref:n},u))}));function I(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},277:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={description:"MIDI",title:"MIDI",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-MIDI",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Using Wio Terminal as a USB MIDI Device",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-MIDI",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-MIDI",title:"MIDI",description:"MIDI",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-MIDI.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-USBCLIENT-MIDI",permalink:"/zh-CN/Wio-Terminal-USBCLIENT-MIDI",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-MIDI.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673884800,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"MIDI",title:"MIDI",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-MIDI",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Mouse",permalink:"/zh-CN/Wio-Terminal-USBCLIENT-Mouse"},next:{title:"Build a HMI Display for Windows/MacOS using Wio Terminal",permalink:"/zh-CN/Wio-Terminal-HMI-Usermode-SDK"}},s={},c=[{value:"Installing Libraries",id:"installing-libraries",level:2},{value:"Obtaining Results",id:"obtaining-results",level:2},{value:"Complete Code",id:"complete-code",level:2}],u={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-wio-terminal-as-a-usb-midi-device"},"Using Wio Terminal as a USB MIDI Device"),(0,r.kt)("p",null,"This repo introduce how to use the Wio Terminal as a USB MIDI (Musical Instrument Digital Interface) Device, where it can be used to control musical instruments!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200110105918.gif"})),(0,r.kt)("h2",{id:"installing-libraries"},"Installing Libraries"),(0,r.kt)("p",null,"This example also requires an additional Arduino MIDI libraries:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FortySevenEffects/arduino_midi_library"},"Arduino MIDI Library")," repositories and download the entire repo to your local drive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD")," file that you've have just downloaded."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,r.kt)("h2",{id:"obtaining-results"},"Obtaining Results"),(0,r.kt)("p",null,"In this case, Wio Terminal is connected to my Macbook and use ",(0,r.kt)("inlineCode",{parentName:"p"},"Audio MIDI Setup")," app that comes along with macOS to test. You can also see the serial data from the serial monitor in ",(0,r.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),". If you have a MIDI Device available, then use that instead for more realistic scenario!"),(0,r.kt)("h2",{id:"complete-code"},"Complete Code"),(0,r.kt)("p",null,"For more fucntionality, please refer to the TinyUSB libraries."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <Adafruit_TinyUSB.h>\n#include <MIDI.h>\n\n// USB MIDI object\nAdafruit_USBD_MIDI usb_midi;\n\n// Create a new instance of the Arduino MIDI Library,\n// and attach usb_midi as the transport.\nMIDI_CREATE_INSTANCE(Adafruit_USBD_MIDI, usb_midi, MIDI);\n\n// Variable that holds the current position in the sequence.\nuint32_t position = 0;\n\n// Store example melody as an array of note values\nbyte note_sequence[] = {\n  74,78,81,86,90,93,98,102,57,61,66,69,73,78,81,85,88,92,97,100,97,92,88,85,81,78,\n  74,69,66,62,57,62,66,69,74,78,81,86,90,93,97,102,97,93,90,85,81,78,73,68,64,61,\n  56,61,64,68,74,78,81,86,90,93,98,102\n};\n\nvoid setup()\n{\n  pinMode(LED_BUILTIN, OUTPUT);\n  \n  // Initialize MIDI, and listen to all MIDI channels\n  // This will also call usb_midi\'s begin()\n  MIDI.begin(MIDI_CHANNEL_OMNI);\n\n  // Attach the handleNoteOn function to the MIDI Library. It will\n  // be called whenever the Bluefruit receives MIDI Note On messages.\n  MIDI.setHandleNoteOn(handleNoteOn);\n\n  // Do the same for MIDI Note Off messages.\n  MIDI.setHandleNoteOff(handleNoteOff);\n\n  Serial.begin(115200);\n\n  // wait until device mounted\n  while( !USBDevice.mounted() ) delay(1);\n}\n\nvoid loop()\n{\n  static uint32_t start_ms = 0;\n  if ( millis() - start_ms > 266 )\n  {\n    start_ms += 266;\n    \n    // Setup variables for the current and previous\n    // positions in the note sequence.\n    int previous = position - 1;\n  \n    // If we currently are at position 0, set the\n    // previous position to the last note in the sequence.\n    if (previous < 0) {\n      previous = sizeof(note_sequence) - 1;\n    }\n  \n    // Send Note On for current position at full velocity (127) on channel 1.\n    MIDI.sendNoteOn(note_sequence[position], 127, 1);\n  \n    // Send Note Off for previous note.\n    MIDI.sendNoteOff(note_sequence[previous], 0, 1);\n  \n    // Increment position\n    position++;\n  \n    // If we are at the end of the sequence, start over.\n    if (position >= sizeof(note_sequence)) {\n      position = 0;\n    }\n  }\n\n  // read any new MIDI messages\n  MIDI.read();  \n}\n\nvoid handleNoteOn(byte channel, byte pitch, byte velocity)\n{\n  // Log when a note is pressed.\n  Serial.printf("Note on: channel = %d, pitch = %d, velocity - %d", channel, pitch, velocity);\n  Serial.println();\n}\n\nvoid handleNoteOff(byte channel, byte pitch, byte velocity)\n{\n  // Log when a note is released.\n  Serial.printf("Note off: channel = %d, pitch = %d, velocity - %d", channel, pitch, velocity);\n  Serial.println();\n}\n')))}d.isMDXComponent=!0}}]);
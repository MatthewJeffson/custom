"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},27369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={description:"Grove Dual Button",title:"Grove Dual Button",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Dual-Button",last_update:{date:"2/22/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Dual-Button",id:"Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Dual-Button",title:"Grove Dual Button",description:"Grove Dual Button",source:"@site/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Dual-Button.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Switch&Button",slug:"/Grove-Dual-Button",permalink:"/custom/zh-CN/Grove-Dual-Button",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Switch&Button/Grove-Dual-Button.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1677024e3,formattedLastUpdatedAt:"2023\u5e742\u670822\u65e5",frontMatter:{description:"Grove Dual Button",title:"Grove Dual Button",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Dual-Button",last_update:{date:"2/22/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove-LED Button",permalink:"/custom/zh-CN/Grove-LED_Button"},next:{title:"Grove - 5-Way Switch",permalink:"/custom/zh-CN/Grove-5-Way_Switch"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Getting Started with Arduino",id:"getting-started-with-arduino",level:3},{value:"Materials Required",id:"materials-required",level:4},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Softwawre",id:"softwawre",level:4},{value:"Getting Started with Raspberry Pi",id:"getting-started-with-raspberry-pi",level:3},{value:"Materials Required",id:"materials-required-1",level:4},{value:"Hardware Connection",id:"hardware-connection-1",level:4},{value:"Code",id:"code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/111020103/img/111020103wiki.png",alt:null})),(0,r.kt)("p",null,"Grove - Dual Button includes 2 buttons, enables you control two signal channel with one grove module.  With 4 different color keycaps provided, you can freely adjust the color combination as needed."),(0,r.kt)("p",null,"The button is simply driven by the GPIO Digital Pins. When the button is pressed, the Pins can reach a LOW signal from the button; on the other hand, when it is in the loosen state, Pins will always gain a HIGH signal until it is pressed."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:"200",height:"38",border:0}))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Compact modular design and less wire connection with two buttons in one grove module"),(0,r.kt)("li",{parentName:"ul"},"Different color keycaps provided, freely adjust the color combination as needed.")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Voltage range"),(0,r.kt)("td",{parentName:"tr",align:null},"3V\u20135V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Grove")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,r.kt)("td",{parentName:"tr",align:null},"20mm * 40mm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Battery"),(0,r.kt)("td",{parentName:"tr",align:null},"Exclude")))),(0,r.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("h3",{id:"getting-started-with-arduino"},"Getting Started with Arduino"),(0,r.kt)("h4",{id:"materials-required"},"Materials Required"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino Nano"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Shield for Arduino Nano"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Passive Buzzer"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove LED Pack"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Dual Button"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102010268/img/seeeduino-Nano-thumbnail.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103100124/img/Grove-Shoeld-for-Arduino-Nano-thumbnail.png",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg",alt:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-Nano-p-4111.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Shield-for-Arduino-Nano-p-4112.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html"},"Get one now"))))),(0,r.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/111020103/img/wiki_nano_button.jpg",alt:null})),(0,r.kt)("p",null,'The Grove Dual Button connects with "D2" interface on the Grove shield, Grove Passive Buzzer connects with "D4" interface and Grove LED Pack connects with "D6"\ninterface.'),(0,r.kt)("h4",{id:"softwawre"},"Softwawre"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step1")," Copy the code below to the Arduino IDE and upload. If you do not know how to update the code, please check ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},' //set the corresponding notes with frequency\n #define NOTE_D0 0\n #define NOTE_D1 294\n #define NOTE_D2 330\n #define NOTE_D3 350\n #define NOTE_D4 393\n #define NOTE_D5 441\n #define NOTE_D6 495\n #define NOTE_D7 556\n \n #define NOTE_DL1 147\n #define NOTE_DL2 165\n #define NOTE_DL3 175\n #define NOTE_DL4 196\n #define NOTE_DL5 221\n #define NOTE_DL6 248\n #define NOTE_DL7 278\n \n #define NOTE_DH1 589\n #define NOTE_DH2 661\n #define NOTE_DH3 700\n #define NOTE_DH4 786\n #define NOTE_DH5 882\n #define NOTE_DH6 990\n #define NOTE_DH7 112\n \n #define WHOLE 1\n #define HALF 0.5\n #define QUARTER 0.25\n #define EIGHTH 0.25\n #define SIXTEENTH 0.625\n \n //the note part of the whole song\n int tune[] =\n {\n   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0,\n   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0, NOTE_D6,\n   NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6, NOTE_D0, NOTE_D6,\n   NOTE_DH1, NOTE_D6, NOTE_D5, NOTE_DH1, NOTE_D6, NOTE_D0,\n \n   NOTE_D1, NOTE_D1, NOTE_D3,\n   NOTE_D1, NOTE_D1, NOTE_D3, NOTE_D0,\n   NOTE_D6, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,\n   NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,\n   NOTE_DH1, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D6,\n   NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,\n   NOTE_D7, NOTE_D7, NOTE_D5, NOTE_D3,\n   NOTE_D5,\n   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D3, NOTE_D0,\n   NOTE_DH1, NOTE_D0, NOTE_D6, NOTE_D6, NOTE_D5, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_D0, NOTE_D5, NOTE_D1, NOTE_D2, NOTE_D0,\n   NOTE_D3, NOTE_D3, NOTE_D1, NOTE_DL6,\n   NOTE_D1,\n   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_D3, NOTE_D5, NOTE_D6, NOTE_D6,\n   NOTE_DH1, NOTE_D0, NOTE_D7, NOTE_D5,\n   NOTE_D6,\n };\n \n //the duration time of each note\n float duration[] =\n {\n   1, 1, 0.5, 0.5, 1,\n   0.5, 0.5, 0.5, 0.5, 1, 0.5, 0.5,\n   0.5, 1, 0.5, 1, 0.5, 0.5,\n   0.5, 0.5, 0.5, 0.5, 1, 1,\n \n   1, 1, 1 + 1,\n   0.5, 1, 1 + 0.5, 1,\n   1, 1, 0.5, 0.5, 1,\n   0.5, 1, 1 + 0.5, 1,\n   0.5, 0.5, 0.5, 0.5, 1 + 1,\n   0.5, 1, 1 + 0.5, 1,\n   1 + 1, 0.5, 0.5, 1,\n   1 + 1 + 1 + 1,\n   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,\n   0.5, 1, 0.5, 1, 1,\n   0.5, 0.5, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25, 0.5 + 0.25, 0.25,\n   0.5, 1, 0.5, 1, 1,\n   1 + 1, 0.5, 0.5, 1,\n   1 + 1 + 1 + 1,\n   0.5, 1, 0.5, 1 + 1,\n   0.5, 1, 0.5, 1 + 1,\n   1 + 1, 0.5, 0.5, 1,\n   1 + 1 + 1 + 1\n };\n \n int length;//define the number of notes\n int tonePin = 4; //set the buzzer Pin\n int button1 = 2; //set the button1 pin\n int button2 = 3; //set the button2 pin\n int LED = 6;  //set the LED pin\n bool state1 = 1; //set button1 state\n bool state2 = 1; //set button2 state\n void setup()\n {\n   pinMode(tonePin, OUTPUT); // set the buzzer as output mode\n   pinMode(button1,INPUT);\n   pinMode(button2,INPUT);\n   pinMode(LED,OUTPUT);\n   length = sizeof(tune) / sizeof(tune[0]); //count the number of note\n }\n \n void loop()\n {\n  state1 = digitalRead(button1);\n  state2 = digitalRead(button2);\n  if (state1 == 0)\n  {\n    digitalWrite(LED,HIGH);\n    }\n  else\n  {\n    digitalWrite(LED,LOW);\n    } \n  if (state2 == 0)\n  {\n       for (int x = 0; x < length; x++) //"sing" the note one by one\n     {\n     tone(tonePin, tune[x]); //output the "x" note\n     delay(400 * duration[x]); //rythem of the music,it can be tuned fast and slow by change the number"400"\n     noTone(tonePin);//stop the current note and go to the next note\n    } \n  } \n  else\n  {\n    digitalWrite(tonePin,LOW);\n    }\n  \n }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step2")," Press each button to control the LED and Buzzer.")),(0,r.kt)("h3",{id:"getting-started-with-raspberry-pi"},"Getting Started with Raspberry Pi"),(0,r.kt)("h4",{id:"materials-required-1"},"Materials Required"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4B(4GB)"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Passive Buzzer"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove LED Pack"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Dual Button"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102110301/img/raspberry-pi-thumbnail.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103030275/img/thumbnail.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/107020109/img/107020109wiki210x157.jpg",alt:null})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/104020228/img/Grove-LED-Pack-thumbnail.jpg",alt:null}),")"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/111020103/img/111020103thumbnail.jpg",alt:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-4GB-p-4077.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Passive-Buzzer-p-4525.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html"},"Get one now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Dual-Button-p-4529.html"},"Get one now"))))),(0,r.kt)("h4",{id:"hardware-connection-1"},"Hardware Connection"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/111020103/img/wiki_raspberry_button.jpg",alt:null})),(0,r.kt)("p",null,'Connect the passive with PWM pin "12", button "D5", LED "D16".'),(0,r.kt)("h4",{id:"code"},"Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1")," Install Grove.py on your Raspberry.  ")),(0,r.kt)("p",null,"One-click installation, quick start, what ever you call, with the single command below, we can install/update all dependencies and latest grove.py."),(0,r.kt)("admonition",{title:"attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you ",(0,r.kt)("strong",{parentName:"p"},"cannot use this command line"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -sL https://github.com/Seeed-Studio/grove.py/raw/master/install.sh | sudo bash -s -\n")),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"if everything goes well, you will see the following notice."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    Successfully installed grove.py-0.5\n    #######################################################\n    Lastest Grove.py from github install complete   !!!!!\n    #######################################################\n"))),(0,r.kt)("br",null),"Besides the one-click installation, you can also install all the dependencies and latest grove.py step by step.",(0,r.kt)("admonition",{title:"attention",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If you are using ",(0,r.kt)("strong",{parentName:"p"},"Raspberry Pi with Raspberrypi OS >= Bullseye"),", you have to use this command line ",(0,r.kt)("strong",{parentName:"p"},"only with Python3"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"git clone https://github.com/Seeed-Studio/grove.py\ncd grove.py\n# Python2\nsudo pip install .\n# Python3\nsudo pip3 install .\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2")," Create a python file for the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd grove.py\nnano button.py\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3")," Copy the following code to the python file")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'#!/usr/bin/env python\nimport time\nfrom grove.factory import Factory\nfrom grove.grove_led import GroveLed\n\nled = GroveLed(16)\nbutton1 = Factory.getButton("GPIO-HIGH", 5)\nbutton2 = Factory.getButton("GPIO-HIGH", 6)\nbuzzer = Factory.getGpioWrapper("Buzzer", 12)\n\nwhile True:\n    if button1.is_pressed():\n        led.on()\n    else:\n        led.off()\n    if button2.is_pressed():\n        buzzer.on() \n    else:\n        buzzer.off()           \n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4")," Run the program")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo chmod +x button.py\nsudo ./button.py\n")),(0,r.kt)("p",null,"If everything goes well, you can control the led and buzzer by dual button."),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_eagle_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/111020103/document/Grove-Dual-Button_v1_0_SCH_190916.pdf"},"Hardware schematic"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),".",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
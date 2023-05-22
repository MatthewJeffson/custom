"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[80080],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3125:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Grove - Analog Microphone",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Analog-Microphone/",slug:"/Grove-Analog-Microphone",last_update:{date:"01/06/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone",id:"Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone",title:"Grove - Analog Microphone",description:"The Grove - Analog Microphone is a based on high-performance SiSonic MEMS technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions.",source:"@site/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Sound",slug:"/Grove-Analog-Microphone",permalink:"/custom/zh-CN/Grove-Analog-Microphone",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Analog-Microphone.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641398400,formattedLastUpdatedAt:"2022\u5e741\u67085\u65e5",frontMatter:{title:"Grove - Analog Microphone",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Analog-Microphone/",slug:"/Grove-Analog-Microphone",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Sound Recorder",permalink:"/custom/zh-CN/Grove-Sound_Recorder"},next:{title:"Grove - Recorder v2.0",permalink:"/custom/zh-CN/Grove-Recorder_v2.0"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Applications",id:"applications",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play With Wio Terminal",id:"play-with-wio-terminal",level:3},{value:"Hardware Connection",id:"hardware-connection",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/04.png",alt:null})),(0,o.kt)("p",null,"The Grove - Analog Microphone is a based on high-performance ",(0,o.kt)("strong",{parentName:"p"},"SiSonic MEMS")," technology, offering an extremely-low-noise, low-current, reliable, and small microphone to opensource hardware industry, and it has improved performance under severe conditions."),(0,o.kt)("p",null,"Grove - Analog Microphone is an ideal choice\xa0of sound sensors where excellent audio performance is required. It can provide up to 20dB of gain and it also features low current, max RF protection, which makes it a perfect microphone for Arduino and Raspberry Pi. Our featured product\xa0",(0,o.kt)("a",{href:"https://www.seeedstudio.com/ReSpeaker-Core-v2-0.html"},"ReSpeaker Core v2.0"),"\xa0also adopts MEMS technology and the same microphone as Grove - Analog Microphone does. If you are going to get a fancy microphone, here is the choice."),(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:200,height:38,border:0}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High-performance SiSonic MEMS technology"),(0,o.kt)("li",{parentName:"ul"},"Extremely-low-noise, low-current, and reliable"),(0,o.kt)("li",{parentName:"ul"},"Compact and elegant design")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"This sound sensor is used to detect whether there's sound surround or not, please don't use the module to collect sound signal. For example, you can use it to make a sound control lamp, but not as a recording device.\n"))),(0,o.kt)("h2",{id:"applications"},"Applications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sound sensor"),(0,o.kt)("li",{parentName:"ul"},"Collecting of sound signal"),(0,o.kt)("li",{parentName:"ul"},"Voice recognition"),(0,o.kt)("li",{parentName:"ul"},"Recording")),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dimensions"),(0,o.kt)("td",{parentName:"tr",align:null},"20mm x 20mm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,o.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Current"),(0,o.kt)("td",{parentName:"tr",align:null},"5mA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Temperature Range"),(0,o.kt)("td",{parentName:"tr",align:null},"-40 \xb0C to 100 \xb0C")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,o.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Analog Microphone"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png",alt:"enter image description here"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html"},"Get One Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Connect Grove-Sound Sensor to port ",(0,o.kt)("strong",{parentName:"li"},"A0")," of Grove-Base Shield."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Plug Grove - Base Shield into Seeeduino and connect Seeeduino to PC via a USB cable.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/hardware_connection.jpg",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove-Sound Sensor to Seeeduino as below.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Sound Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5V"),(0,o.kt)("td",{parentName:"tr",align:null},"Red")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GND"),(0,o.kt)("td",{parentName:"tr",align:null},"Black")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A1"),(0,o.kt)("td",{parentName:"tr",align:null},"White")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A0"),(0,o.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"/*\n  Analog input, analog output, serial output\n\n  Reads an analog input pin, maps the result to a range from 0 to 255 and uses\n  the result to set the pulse width modulation (PWM) of an output pin.\n  Also prints the results to the Serial Monitor.\n*/\n\n// These constants won't change. They're used to give names to the pins used:\nconst int analogInPin = A0;  // Analog input pin that the potentiometer is attached to\nconst int analogOutPin = 9; // Analog output pin that the LED is attached to\n\nint sensorValue = 0;        // value read from the pot\nint outputValue = 0;        // value output to the PWM (analog out)\n\nvoid setup() {             \n  Serial.begin(9600);      // initialize serial communications at 9600 bps\n}\n\nvoid loop() {\n  sensorValue = analogRead(analogInPin);        // read the analog in value\n  outputValue = map(sensorValue, 0, 1023, 0, 255);       // map it to the range of the analog out\n  analogWrite(analogOutPin, outputValue);               // change the analog out value\n\n  Serial.println(outputValue);    // print the results to the Serial Monitor\n\n  // wait 2 milliseconds before the next loop for the analog-to-digital\n  // converter to settle after the last reading:\n  delay(2);\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Click on ",(0,o.kt)("strong",{parentName:"li"},"Serial > Plotter")," to get the changing curve of the sensor. Please make a noise to view the change of the value.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/outcome.png",alt:null})),(0,o.kt)("h3",{id:"play-with-wio-terminal"},"Play With Wio Terminal"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Wio Terminal"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Analog Microphone"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-thumbnail.png",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/small.png",alt:"enter image description here"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Analog-Microphone-p-4593.html"},"Get One Now"))))),(0,o.kt)("h4",{id:"hardware-connection"},"Hardware Connection"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/connection.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1")," Plug Grove-Analog Microphone to Wio Terminal via Grove cable and also connect Wio Terminal to PC through a USB cable."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2")," Copy the demo code into your Arduino IDE and upload."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C"},'#include "seeed_line_chart.h" //include the library\n\nTFT_eSPI tft;\n#define LINE_DIS 0X00\n#define STRING_DIS 0X01\n#define max_size 30 //maximum size of data\ndoubles data;       //Initilising a doubles type to store data\nint brightness;\nTFT_eSprite spr = TFT_eSprite(&tft); // Sprite\n\nconst int MIC = A0; //the microphone amplifier output is connected to pin A0\nint adc;\nint dB, PdB; //the variable that will hold the value read from the microphone each time\nuint8_t mode = LINE_DIS;\nvoid setup()\n{\n    Serial.begin(9600); //sets the baud rate at 9600 so we can check the values the microphone is obtaining on the Serial Monitor\n    pinMode(A0, INPUT);\n    pinMode(WIO_KEY_C, INPUT_PULLUP);\n    pinMode(WIO_BUZZER, OUTPUT);\n    tft.begin();\n    spr.createSprite(TFT_HEIGHT, TFT_WIDTH);\n    spr.setRotation(3);\n    tft.setRotation(3);\n}\n\nvoid loop() {\n \n    if (digitalRead(WIO_KEY_C) == LOW) {\n        mode ++;\n        if(mode > STRING_DIS ) mode = LINE_DIS;\n        while(!digitalRead(WIO_KEY_C));\n    }\n    display(mode);\n}\n\nvoid display(uint8_t mode)\n{\n    adc = analogRead(MIC); //Read the ADC value from amplifer\n    //Serial.println (adc);//Print ADC for initial calculation\n    dB = (adc + 83.2073) / 7.003; //Convert ADC value to dB using Regression values\n\n    if(dB > 50)\n    {\n        analogWrite(WIO_BUZZER, 128);\n\n    }else{\n        analogWrite(WIO_BUZZER, 0);\n    }\n\n    spr.fillSprite(TFT_WHITE);\n\n    if (data.size() == max_size)\n    {\n        data.pop(); //this is used to remove the first read variable\n    }\n    data.push(dB); //read variables and store in data\n\n    //Settings for the line graph title\n    auto header = text(0, 0)\n                      .value("MIC DB Readings")\n                      .align(center)\n                      .valign(vcenter)\n                      .width(tft.width())\n                      .thickness(2);\n\n    header.height(header.font_height() * 2);\n    header.draw(); //Header height is the twice the height of the font\n    if (LINE_DIS == mode){\n    //Settings for the line graph\n    auto content = line_chart(20, header.height()); //(x,y) where the line graph begins\n    content\n        .height(tft.height() - header.height() * 1.5) //actual height of the line chart\n        .width(tft.width() - content.x() * 2)         //actual width of the line chart\n        .based_on(0.0)                                //Starting point of y-axis, must be a float\n        .show_circle(false)                           //drawing a cirle at each point, default is on.\n        .value(data)                                  //passing through the data to line graph\n        .color(TFT_RED)                               //Setting the color for the line\n        .draw();\n    } else if (STRING_DIS == mode){\n        for(int8_t line_index = 0;line_index < 5 ; line_index++)\n        {\n            spr.drawLine(0, 50 + line_index, tft.width(), 50 + line_index, TFT_GREEN);\n        }        \n        auto header =  text(0, 0)\n                    .thickness(1);\n        spr.setFreeFont(&FreeSansBoldOblique24pt7b); \n        if(dB > 50){\n            spr.setTextColor(TFT_RED);\n        }else{\n            spr.setTextColor(TFT_BLUE);\n        }\n        spr.drawFloat(dB,2,70,110);\n        spr.drawString(" dB",80 + 100,110,1);\n    }\n    spr.pushSprite(0, 0);\n    delay(100);\n}\n')),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("p",{parentName:"admonition"},"   The image will display on the screen of Wio Terminal if everything goes well.")),(0,o.kt)("div",{align:"center"},(0,o.kt)("figure",null,(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/img/02.gif",alt:"Grove-Analog Microphone'' OUTCOME",title:"demo"}),(0,o.kt)("figcaption",null,(0,o.kt)("b",null),(0,o.kt)("i",null)))),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"ZIP"),"][Grove-Analog_Microphone_v1.0_SCH&PCB.zip]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip"},"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/202002902_Grove-Analog_Microphone_v1.0_SCH&PCB.zip"),")"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"PDF"),"][SMD Mic OMNI-22DB_Specification.pdf]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf"},"https://files.seeedstudio.com/wiki/Grove-Analog-Microphone/res/SMD_Mic_OMNI-22DB_Specification.pdf"),")")),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
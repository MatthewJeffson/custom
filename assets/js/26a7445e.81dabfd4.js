"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=o,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||a;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},68338:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Grove - Sound Sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Sound_Sensor/",slug:"/Grove-Sound_Sensor",last_update:{date:"01/06/2022",author:"gunengyu"}},i=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor",id:"Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor",title:"Grove - Sound Sensor",description:"Grove - Sound Sensor can detect the sound intensity of the environment. The main component of the module is a simple microphone, which is based on the L358 amplifier and an electret microphone. This module's output is analog and can be easily sampled and tested by a Seeeduino.",source:"@site/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Sound",slug:"/Grove-Sound_Sensor",permalink:"/custom/Grove-Sound_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Sound_Sensor.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"Jan 6, 2022",frontMatter:{title:"Grove - Sound Sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Sound_Sensor/",slug:"/Grove-Sound_Sensor",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Sensor - Sound(introduction)",permalink:"/custom/Sensor_sound"},next:{title:"Grove - Loudness Sensor",permalink:"/custom/Grove-Loudness_Sensor"}},l={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Tech Support",id:"tech-support-1",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg",alt:null})),(0,o.kt)("p",null,"Grove - Sound Sensor can detect the sound intensity of the environment. The main component of the module is a simple microphone, which is based on the L358 amplifier and an electret microphone. This module's output is analog and can be easily sampled and tested by a Seeeduino."),(0,o.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/EhZ7uDvoALE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",{style:{}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:"{200}",height:"{38}",border:"{0}"}))),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Easy to use"),(0,o.kt)("li",{parentName:"ul"},"Provides analog output signal"),(0,o.kt)("li",{parentName:"ul"},"Easily integrates with Logic modules on the input side of Grove circuits")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"This sound sensor is used to detect whether there's sound surround or not, please don't use the module to collect sound signal. For example, you can use it to make a sound control lamp, but not as a recording device.\n"))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Item"),(0,o.kt)("th",{parentName:"tr",align:null},"Value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Voltage Range"),(0,o.kt)("td",{parentName:"tr",align:null},"5 V")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Operating Current(Vcc=5V)"),(0,o.kt)("td",{parentName:"tr",align:null},"4~5 mA")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Voltage Gain(V=6V, f=1kHz)"),(0,o.kt)("td",{parentName:"tr",align:null},"26 dB")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microphone sensitivity(1kHz)"),(0,o.kt)("td",{parentName:"tr",align:null},"-60~-56dBV/Pa")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microphone Impedance"),(0,o.kt)("td",{parentName:"tr",align:null},"2.2k Ohm")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microphone Frequency"),(0,o.kt)("td",{parentName:"tr",align:null},"16-20 kHz")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Microphone S/N Radio"),(0,o.kt)("td",{parentName:"tr",align:null},"54 dB")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,o.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,o.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Sound Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg",alt:"enter image description here"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html"},"Get One Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Sound Sensor to port ",(0,o.kt)("strong",{parentName:"li"},"A0")," of Grove-Base Shield."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/1_connect.jpg",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove-Sound Sensor to Seeeduino as below.")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Sound Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"5V"),(0,o.kt)("td",{parentName:"tr",align:null},"Red")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"GND"),(0,o.kt)("td",{parentName:"tr",align:null},"Black")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A1"),(0,o.kt)("td",{parentName:"tr",align:null},"White")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"A0"),(0,o.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},'// test code for Grove - Sound Sensor\n// loovee @ 2016-8-30\n\nconst int pinAdc = A0;\n\nvoid setup()\n{\n    Serial.begin(115200);\n    //Serial.println("Grove - Sound Sensor Test...");\n}\n\nvoid loop()\n{\n    long sum = 0;\n    for(int i=0; i<32; i++)\n    {\n        sum += analogRead(pinAdc);\n    }\n\n    sum >>= 5;\n\n    Serial.println(sum);\n    delay(10);\n}\n\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2.")," Click on ",(0,o.kt)("strong",{parentName:"li"},"Serial > Plotter")," to get the changing curve of the sensor. Please make a noise to view the change of the value.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/sound_raw.png",alt:null})),(0,o.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,o.kt)("h4",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Sound Sensor to port A0 of a Base Shield."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,o.kt)("h4",{id:"software"},"Software"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,o.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/cc_Sound_Sensor.png",alt:"cc"})),(0,o.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you will see the sound value displayed in the Serial Monitor.\n"))),(0,o.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,o.kt)("h4",{id:"hardware-1"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove - Sound Sensor"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/page_small_1.jpg",alt:"enter image description here"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html"},"Get ONE Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Sound Sensor to port A0 of the Base Hat."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/Sound_Hat.jpg",alt:null})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the sound sensor to **any Analog Port** but make sure you change the command with the corresponding port number.\n"))),(0,o.kt)("h4",{id:"software-1"},"Software"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 grove_sound_sensor.py 0\n\n")),(0,o.kt)("p",null,"Following is the grove_sound_sensor.py code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveSoundSensor:\n\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def sound(self):\n        value = self.adc.read(self.channel)\n        return value\n\nGrove = GroveSoundSensor\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveSoundSensor(int(sys.argv[1]))\n\n    print('Detecting sound...')\n    while True:\n        print('Sound value: {0}'.format(sensor.sound))\n        time.sleep(.3)\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,o.kt)("admonition",{type:"success"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_sound_sensor.py 0 \nDetecting sound...\nSound value: 499\nSound value: 525\nSound value: 529\nSound value: 493\nSound value: 457\nSound value: 457\nSound value: 503\nSound value: 537\nSound value: 606\nSound value: 614\nSound value: 661\n^CTraceback (most recent call last):\n  File "grove_sound_sensor.py", line 67, in <module>\n    main()\n  File "grove_sound_sensor.py", line 64, in main\n    time.sleep(.3)\nKeyboardInterrupt\n\n')),(0,o.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"    You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.\n"))),(0,o.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hardware")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,o.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Sound Sensor"),(0,o.kt)("th",{parentName:"tr",align:null},"Grove-Blue LED"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/groveblue%20led.jpg",alt:"enter image description here"}))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sound-Sensor-p-752.html"},"Get One Now")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove---Blue-LED-p-1139.html"},"Get One Now"))))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the GrovePi_Plus into Raspberry.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Connect Grove-Sound Sensor to ",(0,o.kt)("strong",{parentName:"p"},"A0")," port of GrovePi_Plus , and connect Grove-Blue LED to ",(0,o.kt)("strong",{parentName:"p"},"D5")," port of GrovePi_Plus")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 4.")," Connect the Raspberry to PC through USB cable."))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/img/2_connect.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Software")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Follow ",(0,o.kt)("a",{parentName:"p",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/updating-firmware/"},"Updating the Firmware")," to update the newest firmware of GrovePi."))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"In this wiki we use the path **~/GrovePi/** instead of **/home/pi/Desktop/GrovePi**, you need to make sure Step 2 and Step 3 use the same path.\n"))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"We firmly suggest you to update the firmware, or for some sensors you may get errors.\n"))),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 3.")," Git clone the Github repository.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 4.")," Navigate to the demos' directory:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd yourpath/GrovePi/Software/Python/\n")),(0,o.kt)("p",null,"Here is the grove_sound_sensor.py code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n#!/usr/bin/env python\n#\n# GrovePi Example for using the Grove Sound Sensor and the Grove LED\n#\n# The GrovePi connects the Raspberry Pi and Grove sensors.  You can learn more about GrovePi here:  http://www.dexterindustries.com/GrovePi\n#\n# Modules:\n#  https://www.seeedstudio.com/wiki/Grove_-_Sound_Sensor\n#  https://www.seeedstudio.com/wiki/Grove_-_LED_Socket_Kit\n#\n# Have a question about this example?  Ask on the forums here:  http://forum.dexterindustries.com/c/grovepi\n#\n\'\'\'\n## License\nThe MIT License (MIT)\nGrovePi for the Raspberry Pi: an open source platform for connecting Grove Sensors to the Raspberry Pi.\nCopyright (C) 2017  Dexter Industries\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n\'\'\'\n\nimport time\nimport grovepi\n\n# Connect the Grove Sound Sensor to analog port A0\n# SIG,NC,VCC,GND\nsound_sensor = 0\n\n# Connect the Grove LED to digital port D5\n# SIG,NC,VCC,GND\nled = 5\n\ngrovepi.pinMode(sound_sensor,"INPUT")\ngrovepi.pinMode(led,"OUTPUT")\n\n# The threshold to turn the led on 400.00 * 5 / 1024 = 1.95v\nthreshold_value = 400\n\nwhile True:\n    try:\n        # Read the sound level\n        sensor_value = grovepi.analogRead(sound_sensor)\n\n        # If loud, illuminate LED, otherwise dim\n        if sensor_value > threshold_value:\n            grovepi.digitalWrite(led,1)\n        else:\n            grovepi.digitalWrite(led,0)\n\n        print("sensor_value = %d" %sensor_value)\n        time.sleep(.5)\n\n    except IOError:\n        print ("Error")\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Step 5.")," Run the demo.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo python3 grove_sound_sensor.py\n")),(0,o.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h2",{id:"resources"},"Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"Eagle"),"][Schematic and PCB in Eagle format]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip"},"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/resources/Grove%20-%20Sound%20Sensor.zip"),")"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"PDF"),"][Schematic in PDF format]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20Schematic.pdf"},"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20Schematic.pdf"),")"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"PDF"),"][PCB in PDF format]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20PCB.pdf"},"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove%20-%20Sound%20Sensor%20v1.6%20PCB.pdf"),")"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"Datasheet"),"][LM358.PDF]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/LM358.pdf"},"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/LM358.pdf"),")"),(0,o.kt)("li",{parentName:"ul"},"[",(0,o.kt)("strong",{parentName:"li"},"Codecraft"),"][CDC File]","(",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove_Sound_Sensor_CDC_File.zip"},"https://files.seeedstudio.com/wiki/Grove_Sound_Sensor/res/Grove_Sound_Sensor_CDC_File.zip"),")")),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create a multi-tasking IoT Wi-Fi sensor"),": This tutorial showcases how to make an internet-connected sensor, while leveraging unique multi-tasking features of Energia & TI LaunchPad."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/adrianf/create-a-multi-tasking-iot-wi-fi-sensor-9d7fdf/embed",width:"350"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"LED Sound Meter using Wio-Link and Node-Red"),": SeeedStudio Grove sound sensor and LED strip attached to Wio-Link being driven by a Node-Red flow."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/potnik/led-sound-meter-using-wio-link-and-node-red-259e02/embed",width:"350"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Sound sensor Grove module"),":"),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/N19VfMYyn60",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/NfFlz8KEFxw",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,o.kt)("p",null,"With the SenseCAP ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,o.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,o.kt)("div",{align:"center"},(0,o.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,o.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))),(0,o.kt)("h2",{id:"tech-support-1"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
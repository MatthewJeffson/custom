"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,h=u["".concat(l,".").concat(c)]||u[c]||m[c]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},88290:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Grove - Loudness Sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Loudness_Sensor/",slug:"/Grove-Loudness_Sensor",last_update:{date:"01/06/2022",author:"gunengyu"}},i=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor",id:"Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor",title:"Grove - Loudness Sensor",description:"The Grove - Loudness Sensor is designed to detect the sound of environment. Based on LM2904 amplifier and a built-in microphone, it amplifies and filters the high frequency signal that received from the microphone, and outputs a positive envelop. This is used for Arduino\u2019s signal acquisition. The output value depends on the level of sound input. In order to avoid unnecessary signal disturbances, input signal will go through two times\u2019 filtering inside the module. There is a screw potentiometer that enables manual adjustments to the output gain.",source:"@site/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Sound",slug:"/Grove-Loudness_Sensor",permalink:"/custom/Grove-Loudness_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Sound/Grove-Loudness_Sensor.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641427200,formattedLastUpdatedAt:"Jan 6, 2022",frontMatter:{title:"Grove - Loudness Sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Loudness_Sensor/",slug:"/Grove-Loudness_Sensor",last_update:{date:"01/06/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Sound Sensor",permalink:"/custom/Grove-Sound_Sensor"},next:{title:"Grove - Speech Recognizer",permalink:"/custom/Grove-Speech_Recognizer"}},l={},p=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi(with GrovePi_Plus)",id:"play-with-raspberry-piwith-grovepi_plus",level:3},{value:"FAQ",id:"faq",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/Loudness%20Sensor_new.jpg",alt:null})),(0,a.kt)("p",null,"The Grove - Loudness Sensor is designed to detect the sound of environment. Based on LM2904 amplifier and a built-in microphone, it amplifies and filters the high frequency signal that received from the microphone, and outputs a positive envelop. This is used for Arduino\u2019s signal acquisition. The output value depends on the level of sound input. In order to avoid unnecessary signal disturbances, input signal will go through two times\u2019 filtering inside the module. There is a screw potentiometer that enables manual adjustments to the output gain."),(0,a.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/EhZ7uDvoALE",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,a.kt)("p",{style:{}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:200,height:38,border:0}))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Changes"),(0,a.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Grove-Loudness Sensor V0.9b"),(0,a.kt)("td",{parentName:"tr",align:null},"Initial"),(0,a.kt)("td",{parentName:"tr",align:null},"Dec 2012")))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Grove Interface"),(0,a.kt)("li",{parentName:"ul"},"Easy to use"),(0,a.kt)("li",{parentName:"ul"},"Basic Grove element")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,a.kt)("h2",{id:"specifications"},"Specifications"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Voltage"),(0,a.kt)("td",{parentName:"tr",align:null},"3.5~10 VDC")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Working Frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"5~2000 Hz")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sensitivity"),(0,a.kt)("td",{parentName:"tr",align:null},"-60~-56dBV/Pa")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Signal-to-noise Ratio"),(0,a.kt)("td",{parentName:"tr",align:null},">58 dB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Output Signal range"),(0,a.kt)("td",{parentName:"tr",align:null},"Analog Signal (0-1023)")))),(0,a.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we firmly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,a.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,a.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Loudness Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/seeeduino_v4.2.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/base_shield.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Connect Grove-Loudness Sensor to ",(0,a.kt)("strong",{parentName:"li"},"A0")," port of Grove-Base Shield."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Plug Grove - Base Shield into Seeeduino."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect Seeeduino to PC via a USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/seeeduino_loudness.jpg",alt:null})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"}," If we don't have Grove Base Shield, We also can directly connect Grove-Loudness Sensor to Seeeduino as below.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Loudness Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5V"),(0,a.kt)("td",{parentName:"tr",align:null},"Red")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"GND"),(0,a.kt)("td",{parentName:"tr",align:null},"Black")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NC"),(0,a.kt)("td",{parentName:"tr",align:null},"White")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A0"),(0,a.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Please copy below code to Arduio IDE and upload to arduino. If you do not know how to upload the code, please check ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"how to upload code"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int loudness;\n\nvoid setup()\n{\n    Serial.begin(9600);\n}\n\nvoid loop()\n{\n    loudness = analogRead(0);\n    Serial.println(loudness);\n    delay(200);\n}\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Open the serial to monitor the output. It will be a significant change when blow to the sensor.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/seeeduino_serial.png",alt:null})),(0,a.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,a.kt)("h4",{id:"hardware"},"Hardware"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - Loudness Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html"},"Get ONE Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry Pi."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Grove - Loudness Sensor to to the A0 port of the Base Hat."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.\n",(0,a.kt)("img",{parentName:"li",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/withrpi_basehat.jpg",alt:null}))),(0,a.kt)("h4",{id:"software"},"Software"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Excute below command to run the code.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython grove_loudness_sensor.py 0\n")),(0,a.kt)("p",null,"Following is the grove_water_sensor.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveLoudnessSensor:\n\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n\n    @property\n    def value(self):\n        return self.adc.read(self.channel)\n\nGrove = GroveLoudnessSensor\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveLoudnessSensor(int(sys.argv[1]))\n\n    print('Detecting loud...')\n    while True:\n        value = sensor.value\n        if value > 10:\n            print(\"Loud value {}, Loud Detected.\".format(value))\n            time.sleep(.5)\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,a.kt)("admonition",{type:"success"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result:\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python grove_loudness_sensor.py 0\nDetecting loud...\nLoud value 15, Loud Detected.\nLoud value 11, Loud Detected.\nLoud value 250, Loud Detected.\nLoud value 429, Loud Detected.\nLoud value 203, Loud Detected.\nLoud value 16, Loud Detected.\nLoud value 11, Loud Detected.\n^CTraceback (most recent call last):\n  File "grove_loudness_sensor.py", line 68, in <module>\n    main()\n  File "grove_loudness_sensor.py", line 65, in main\n    time.sleep(.5)\nKeyboardInterrupt\n\n\n')),(0,a.kt)("p",null,"You can use this sensor to detect the loudness. Press ++ctrl+c++ to quit."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    You may have noticed that for the analog port, the silkscreen pin number is something like **A1, A0**, however in the command we use parameter **0** and **1**, just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.\n"))),(0,a.kt)("h3",{id:"play-with-raspberry-piwith-grovepi_plus"},"Play With Raspberry Pi(with GrovePi_Plus)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Prepare the below stuffs:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,a.kt)("th",{parentName:"tr",align:null},"GrovePi_Plus"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove-Loudness Sensor"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/Grovepi%2B.jpg",alt:"enter image description here"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/LoudnessSensor_s.jpg",alt:"enter image description here"}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/GrovePi%2B-p-2241.html"},"Get One Now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Loudness-Sensor-p-1382.html"},"Get One Now"))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Plug the GrovePi_Plus into Raspberry."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Connect Grove-Loudness Sensor to ",(0,a.kt)("strong",{parentName:"li"},"A0")," port of GrovePi_Plus."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," Connect the Raspberry to PC through USB cable.")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/img/rpi_loudness.jpg",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Software")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Follow ",(0,a.kt)("a",{parentName:"li",href:"https://www.dexterindustries.com/GrovePi/get-started-with-the-grovepi/setting-software/"},"Setting Software")," to configure the development environment."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Git clone the Github repository.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/DexterInd/GrovePi.git\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Excute below commands to monitor the loudness.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"cd ~/GrovePi/Software/Python\npython grove_loudness_sensor.py\n")),(0,a.kt)("p",null,"Here is the grove_loudness_sensor.py code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import time\nimport grovepi\n\n# Connect the Grove Loudness Sensor to analog port A0\n# SIG,NC,VCC,GND\nloudness_sensor = 0\n\nwhile True:\n    try:\n        # Read the sound level\n        sensor_value = grovepi.analogRead(loudness_sensor)\n\n        print("sensor_value = %d" %sensor_value)\n        time.sleep(.5)\n\n    except IOError:\n        print ("Error")\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 4.")," We will see the loudness status as below.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"pi@raspberrypi:~/GrovePi/Software/Python $ python grove_loudness_sensor.py\nsensor_value = 135\nsensor_value = 23\nsensor_value = 196\nsensor_value = 258\nsensor_value = 98\nsensor_value = 131\n")),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Q1: What is the difference between Grove-Loudness sensor and Grove - Sound Sensor?",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A1: The Grove-Loudness sensor have screw potentiometer to adjust the output gain.")))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle&PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/Grove%20-%20Loudness%20Sensor%20Eagle%20File_v0.9b.zip"},"Grove - Loudness Sensor Schematic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Loudness_Sensor/res/LM2904DR.pdf"},"LM2904DR Datasheet"))),(0,a.kt)("h2",{id:"projects"},"Projects"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solar Powered Environmental Monitoring Kit"),": A solar-powered open source kit for monitoring air quality, sound level, humidity, and temperature."),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/taifur/solar-powered-environmental-monitoring-kit-b1d03d/embed",width:"350"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The Da Vinci Code"),": The work combines art and electronics. The art part makes the skeleton and consists of 11 layers of medium density fiberboard."),(0,a.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/coding-with-da-vince/the-da-vinci-code-3b91a8/embed",width:"350"}),(0,a.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,a.kt)("p",null,"With the SenseCAP ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,a.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,a.kt)("div",{align:"center"},(0,a.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,a.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
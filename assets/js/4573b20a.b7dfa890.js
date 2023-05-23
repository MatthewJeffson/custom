"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[21856],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>c});var r=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,i=function(e,t){if(null==e)return{};var o,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var o=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(o),h=i,c=m["".concat(s,".").concat(h)]||m[h]||u[h]||n;return o?r.createElement(c,a(a({ref:t},d),{},{components:o})):r.createElement(c,a({ref:t},d))}));function c(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=o.length,a=new Array(n);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<n;p++)a[p]=o[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}h.displayName="MDXCreateElement"},93931:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=o(87462),i=(o(67294),o(3905));const n={description:"Grove - Slide Potentiometer",title:"Grove - Slide Potentiometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Slide_Potentiometer",last_update:{date:"1/6/2023",author:"shuxu hu"}},a=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-Slide_Potentiometer",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-Slide_Potentiometer",title:"Grove - Slide Potentiometer",description:"Grove - Slide Potentiometer",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Slide_Potentiometer.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Grove-Slide_Potentiometer",permalink:"/custom/Grove-Slide_Potentiometer",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Slide_Potentiometer.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672963200,formattedLastUpdatedAt:"Jan 6, 2023",frontMatter:{description:"Grove - Slide Potentiometer",title:"Grove - Slide Potentiometer",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Slide_Potentiometer",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Piezo Vibration Sensor",permalink:"/custom/Grove-Piezo_Vibration_Sensor"},next:{title:"Grove - Optical Rotary Encoder(TCUT1600X01)",permalink:"/custom/Grove-Optical_Rotary_Encoder-TCUT1600X01"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"As an Adjustable Resistor",id:"as-an-adjustable-resistor",level:4},{value:"Standalone",id:"standalone",level:3},{value:"As a Voltage Divider",id:"as-a-voltage-divider",level:4},{value:"As an HID Device",id:"as-an-hid-device",level:4},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding1.JPG",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"The Grove - Slide Potentiometer module incorporates a linear variable resistor with a maximum resistance of 10K\u03a9. When you move the slider from one side to the other, its output voltage will range from 0 V to the Vcc you apply. It connects to the other Grove modules through a standard 4-Pin ",(0,i.kt)("strong",{parentName:"p"},"Grove Cable"),". Three of the pins are connected to OUT (Pin 1), Vcc (Pin 3) and GND (Pin 4), while the fourth pin (Pin 2) is connected to a on-board green indicator LED. The LED is used to visually represent the resistance change on the potentiometer."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"30 mm long slide length"),(0,i.kt)("li",{parentName:"ul"},"Linear resistance taper"),(0,i.kt)("li",{parentName:"ul"},"Grove compatible")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("p",null,"Here are some projects for your reference."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Arduino BoomBox")),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"th"},"Arduino BeatBox")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BoomBox.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Recipe-Arduino_BeatBox.jpg",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://community.seeedstudio.com/project_detail.html?id=171"},"Make it NOW!")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://community.seeedstudio.com/project_detail.html?id=187"},"Make it NOW!"))))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",{border:"2",cellspacing:"0",width:"60%"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Item"),(0,i.kt)("th",null,"Min"),(0,i.kt)("th",null,"Typical"),(0,i.kt)("th",null,"Max")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Voltage (DC)"),(0,i.kt)("td",null,"3.3V"),(0,i.kt)("td",null,"5.0V"),(0,i.kt)("td",null,"30V")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Current"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"-"),(0,i.kt)("td",null,"30mA")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Dimension"),(0,i.kt)("td",{colspan:"3"},"24mm x60mm")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{height:"22",scope:"row"},"Net Weight"),(0,i.kt)("td",{colspan:"3"},"8.6g")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{height:"22",scope:"row"},"Rotational life"),(0,i.kt)("td",{colspan:"3"},">15,000 cycles")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{height:"22",scope:"row"},"Total resistance"),(0,i.kt)("td",{colspan:"3"},"10K\u03a9")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{height:"22",scope:"row"},"Stroke length"),(0,i.kt)("td",{colspan:"3"},"30mm")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{height:"22",scope:"row"},"Total resistance tolerance"),(0,i.kt)("td",{colspan:"3"},"+/- 20%"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"getting-started"},"Getting Started"),(0,i.kt)("h4",{id:"as-an-adjustable-resistor"},"As an Adjustable Resistor"),(0,i.kt)("p",null,"As shown below, the Grove - Slide Potentiometer can be used as a simple slide potentiometer in any MCU controlled or stand-alone project."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_justr.JPG",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h3",{id:"standalone"},"Standalone"),(0,i.kt)("p",null,"Follow these steps to build a sample Grove circuit using this module but without using any microcontroller board:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the slide potentiometer module to the input side of your circuit (to the left of the power module). On the output side of the circuit, you may use a range of User Interface modules (Grove - Red LED, Grove - LED String Light, Grove - Mini Fan, Grove - Buzzer, Grove - Recorder etc.)")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Power up the circuit when complete.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The slide potentiometer module can now be used to trigger an output. For example:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"When used in conjunction with a Grove - Red LED output module, observe that the brightness of the LED increases as you move the slider from GND to Vcc. At Vcc, the resistance of the potentiometer is minimum and the LED burns the brightest. The same behavior can be seen when the slide potentiometer is used with the Grove - LED String Light module - the more voltage you apply by taking the slider towards the Vcc mark, the brighter the LED lights would become."),(0,i.kt)("li",{parentName:"ul"},"Similarly, you can use the slide potentiometer to vary the speed of your Grove - Mini Fan or the frequency with which your Grove - Buzzer module sounds"),(0,i.kt)("li",{parentName:"ul"},"The slide potentiometer can also be used as an ON/OFF switch for any circuit. Take the slider to the Vcc position to switch it ON and move it down to GND to switch OFF a circuit.")))),(0,i.kt)("p",null,"In terms of choosing a power module, you can use either the Grove - USB Power module or the Grove - DC Jack Power module for building standalone Grove circuits."),(0,i.kt)("h4",{id:"as-a-voltage-divider"},"As a Voltage Divider"),(0,i.kt)("p",null,"Follow these simple steps to make the slide potentiometer module function as a voltage divider:"),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding2.JPG",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"2.Connect the board to PC using USB cable."),(0,i.kt)("p",null,"3.Upload the following sample sketch."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'int adcPin = A0; // select the input pin for the potentiometer\nint ledPin = A1; // select the pin for the LED\nint adcIn = 0;   // variable to store the value coming from the sensor\nvoid setup()\n{\n    Serial.begin(9600); // init serial to 9600b/s\n    pinMode(ledPin, OUTPUT); // set ledPin to OUTPUT\n    Serial.println("Sliding Potentiometer Test Code!!");\n}\nvoid loop()\n{\n    // read the value from the sensor:\n    adcIn = analogRead(adcPin);\n    if(adcIn &gt;= 500) digitalWrite(ledPin,HIGH);  // if adc in &gt; 500, led light\n    else digitalWrite(ledPin, LOW);\n    Serial.println(adcIn);\n    delay(100);\n}\n')),(0,i.kt)("p",null,"4.Open the serial monitor. You should see some data from ADC."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Sliding_com.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"5.Move the lever back and forth. The serial data will change correspondingly. When the output resistance exceeds a certain preset value, the on-board indicator LED will also light up."),(0,i.kt)("h4",{id:"as-an-hid-device"},"As an HID Device"),(0,i.kt)("p",null,"Slide Potentiometer can be an effective Human Interface Device (HID) and can be used, for example, in the radio controller of a Radio Controlled toy car. The picture below shows two Slide Potentiometers on the control panel - one to control the speed of the left wheel, and the other to control the speed of the right wheel of the toy car respectively. Now you can change the speeds of both motors and see the behavior. You will see that if you make the right wheel spin faster than the left wheel, the car will turn rightwards, and if you make the left wheel spin faster than the right wheel, the car will turn leftwards."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Car.JPG",alt:"pir",width:600,height:"auto"})),(0,i.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Slide Potentiometer to port A0 of a Base Shield."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,i.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/cc_Slide_Potentiometer.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"When the code finishes uploaded, slide the Slide Potentiometer, you will see sensor value displayed in the Serial Monitor. And if you slide excceed half of Potentiometer, the LED on it will goes on. \n"))),(0,i.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,i.kt)("h4",{id:"hardware-1"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,i.kt)("th",{parentName:"tr",align:null},"Grove - Slide Potentiometer"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_small.JPG",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Slide-Potentiometer-p-1196.html"},"Get ONE Now"))))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Connect the Slide Potentiometer to A0 port of the Base Hat."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/img/Slide_Hat.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the slide potentiometer to **any Analog Port** but make sure you change the command with the corresponding port number.\n"))),(0,i.kt)("h4",{id:"software-1"},"Software"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 grove_slide_potentiometer.py 0\n")),(0,i.kt)("p",null,"Following is the grove_slide_potentiometer.py code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"\nimport math\nimport sys\nimport time\nfrom grove.adc import ADC\n\n\nclass GroveSlidePotentiometer(ADC):\n    def __init__(self, channel):\n        self.channel = channel\n        self.adc = ADC()\n    \n    @property\n    def value(self):\n        return self.adc.read(self.channel)\n\n\nGrove = GroveSlidePotentiometer\n\n\ndef main():\n    if len(sys.argv) < 2:\n        print('Usage: {} adc_channel'.format(sys.argv[0]))\n        sys.exit(1)\n\n    sensor = GroveSlidePotentiometer(int(sys.argv[1]))\n\n    while True:\n        print('Slide potentiometer value: {}'.format(sensor.value))\n        time.sleep(.2)\n\n\nif __name__ == '__main__':\n    main()\n\n")),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result\n"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_slide_potentiometer.py 0\nSlide potentiometer value: 987\nSlide potentiometer value: 988\nSlide potentiometer value: 986\nSlide potentiometer value: 8\nSlide potentiometer value: 2\nSlide potentiometer value: 0\nSlide potentiometer value: 1\nSlide potentiometer value: 0\nSlide potentiometer value: 24\nSlide potentiometer value: 0\nSlide potentiometer value: 0\nSlide potentiometer value: 11\nSlide potentiometer value: 995\nSlide potentiometer value: 999\nSlide potentiometer value: 999\n^CTraceback (most recent call last):\n  File "grove_slide_potentiometer.py", line 66, in <module>\n    main()\n  File "grove_slide_potentiometer.py", line 62, in main\n    time.sleep(.2)\nKeyboardInterrupt\n\n')),(0,i.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,i.kt)("p",null,":::notice\nYou may have noticed that for the analog port, the silkscreen pin number is something like ",(0,i.kt)("strong",{parentName:"p"},"A0, A1"),", however in the command we use parameter ",(0,i.kt)("strong",{parentName:"p"},"0")," and ",(0,i.kt)("strong",{parentName:"p"},"1"),", just the same as digital port. So please make sure you plug the module into the correct port, otherwise there may be pin conflicts.\n:::"),(0,i.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,i.kt)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,i.kt)("p",null,"3.Connection"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plug the sensor to grovepi socket A0 by using a grove cable.")),(0,i.kt)("p",null,"4.Navigate to the demos' directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    cd yourpath/GrovePi/Software/Python/\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"To see the code")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'    nano grove_slide_potentiometer.py   # "Ctrl+x" to exit #\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},'import time\nimport grovepi\n\n# Connect the Grove Slide Potentiometer to analog port A0\n# OUT,LED,VCC,GND\nslide = 0   # pin 1 (yellow wire)\n\n# The device has an onboard LED accessible as pin 2 on port A0\n# OUT,LED,VCC,GND\nled = 1     # pin 2 (white wire)\n\ngrovepi.pinMode(slide,"INPUT")\ngrovepi.pinMode(led,"OUTPUT")\ntime.sleep(1)\n\nwhile True:\n    try:\n        # Read sensor value from potentiometer\n        sensor_value = grovepi.analogRead(slide)\n\n        # Illuminate onboard LED\n        if sensor_value > 500:\n            grovepi.digitalWrite(led,1)\n        else:\n            grovepi.digitalWrite(led,0)\n\n        print "sensor_value =", sensor_value\n\n    except IOError:\n        print "Error"\n')),(0,i.kt)("p",null,"5.Run the demo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo python3 grove_slide_potentiometer.py\n")),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_Potentiometer.rar"},"Sliding Potentiometer Eagle File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_protentiometer_sch.pdf"},"Sliding Potentiometer in PDF")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Sliding_potentiometer_datasheet.pdf"},"Sliding Potentiometer datasheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Slide_Potentiometer/res/Grove_Slide_Potentiometer_CDC_File.zip"},"Codecraft CDC File"))),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Raspberry pi music server"),": A first step to Raspberry Pi project"),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/kishima7/raspberry-pi-music-server-f5a0ae/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}m.isMDXComponent=!0}}]);
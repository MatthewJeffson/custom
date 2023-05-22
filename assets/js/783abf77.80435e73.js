"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[35900],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=p(i),u=n,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return i?r.createElement(m,l(l({ref:t},d),{},{components:i})):r.createElement(m,l({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,l=new Array(o);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:n,l[1]=a;for(var p=2;p<o;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}u.displayName="MDXCreateElement"},32943:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var r=i(87462),n=(i(67294),i(3905));const o={description:"Grove - Tilt Switch",title:"Grove - Tilt Switch",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Tilt_Switch",last_update:{date:"1/6/2023",author:"shuxu hu"}},l=void 0,a={unversionedId:"Sensor/Grove/Grove_Sensors/Motion/Grove-Tilt_Switch",id:"Sensor/Grove/Grove_Sensors/Motion/Grove-Tilt_Switch",title:"Grove - Tilt Switch",description:"Grove - Tilt Switch",source:"@site/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Tilt_Switch.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Motion",slug:"/Grove-Tilt_Switch",permalink:"/custom/Grove-Tilt_Switch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Motion/Grove-Tilt_Switch.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672934400,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - Tilt Switch",title:"Grove - Tilt Switch",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Tilt_Switch",last_update:{date:"1/6/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Collision Sensor",permalink:"/custom/Grove-Collision_Sensor"},next:{title:"Grove - Mini Track Ball",permalink:"/custom/Grove-Mini_Track_Ball"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Play With Raspberry Pi (with GrovePi_Plus)",id:"play-with-raspberry-pi-with-grovepi_plus",level:3},{value:"With Raspberry Pi",id:"with-raspberry-pi",level:3},{value:"Reference",id:"reference",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt1.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"The Grove-Tilt Switch is the equivalent of a button, and is used as a digital input. Inside the tilt switch is a pair of balls that make contact with the pins when the case is upright. Tilt the case over and the balls don't touch, thus not making a connection. It is wired to the SIG line, NC is not used on this Grove."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html"},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove Interface"),(0,n.kt)("li",{parentName:"ul"},"Easy to use"),(0,n.kt)("li",{parentName:"ul"},"Simple Grove module")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,n.kt)("tr",null,(0,n.kt)("th",{scope:"col"},"Item"),(0,n.kt)("th",{scope:"col"},"Min"),(0,n.kt)("th",{scope:"col"},"Typical"),(0,n.kt)("th",{scope:"col"},"Max"),(0,n.kt)("th",{scope:"col"},"Unit")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Voltage"),(0,n.kt)("td",null,"3"),(0,n.kt)("td",null,"5.0"),(0,n.kt)("td",null,"5.25"),(0,n.kt)("td",null,"V")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Connecting Angle"),(0,n.kt)("td",{colspan:"3"},"10\xb0 ~170\xb0"),(0,n.kt)("td",null,"-")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Disconnect angle"),(0,n.kt)("td",{colspan:"3"},"190\xb0 ~350\xb0"),(0,n.kt)("td",null,"-")),(0,n.kt)("tr",{align:"center"},(0,n.kt)("th",{scope:"row"},"Electrical Life"),(0,n.kt)("td",{colspan:"3"},"100,000"),(0,n.kt)("td",null,"Cycle"))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,n.kt)("p",null,"The SIG pin of the Grove - Tilt Switch output LOW normally. When the Tilt Switch is upright, a pair of balls inside the tilt switch will contact with the pins and the SIG pin will output HIGH."),(0,n.kt)("p",null,"The following sketch demonstrates a simple application of using the Tilt Switch and Grove - Button to control the led."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"As the following picture indicates, the Tilt Switch is connected to digital port 5 of the Grove - Base Shield and the Grove-Button to digital port 7. The LED is connected to digital port 1. The hardware installation is as follows:")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Digitalv1.0b.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Copy and paste code below to a new Arduino sketch.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"void setup()\n{\n    pinMode(1, OUTPUT);\n    pinMode(5, INPUT);\n    pinMode(7, INPUT);\n}\n\nvoid loop()\n{\n\n    if (digitalRead(5)==HIGH)\n    {\n        digitalWrite(1, HIGH);\n        delay(100);\n        digitalWrite(1, LOW);\n    }\n\n    if (digitalRead(7)==HIGH)\n    {\n        digitalWrite(1, HIGH);\n        delay(200);\n        digitalWrite(1, LOW);\n    }\n\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upload the code."),(0,n.kt)("li",{parentName:"ul"},"Then the LED will light when you press the button or activate the tilt-switch. Have a try!")),(0,n.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,n.kt)("h4",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Connect a Grove - Tilt Switch to port D5, then connect a Grove - Button and Grove - Red LED to port D7 and D2 of a Base Shield."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,n.kt)("h4",{id:"software"},"Software"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,n.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/cc_Tilt_Switch.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"When the code finishes uploaded, tilt the tilt switch or press the button, the LED will goes on.\n"))),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,n.kt)("h4",{id:"hardware-1"},"Hardware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - Tilt Switch"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Tilt-Switch-p-771.html"},"Get ONE Now"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Connect the tilt switch to port 12 of the Base Hat."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Hat.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"For step 3 you are able to connect the tilt switch to **any GPIO Port** but make sure you change the command with the corresponding port number.\n"))),(0,n.kt)("h4",{id:"software-1"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,n.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/grove.py\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"cd grove.py/grove\npython3 grove_tilt_switch.py 12\n\n")),(0,n.kt)("p",null,"Following is the grove_tilt_switch.py code."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"\nimport time\nfrom grove.gpio import GPIO\n\n\nclass GroveTiltSwitch(GPIO):\n    def __init__(self, pin):\n        super(GroveTiltSwitch, self).__init__(pin, GPIO.IN)\n        self._on_trigger = None\n        self._on_release = None\n\n    @property\n    def on_trigger(self):\n        return self._on_trigger\n\n    @on_trigger.setter\n    def on_trigger(self, callback):\n        if not callable(callback):\n            return\n\n        if self.on_event is None:\n            self.on_event = self._handle_event\n\n        self._on_trigger = callback\n\n    @property\n    def on_release(self):\n        return self._on_release\n\n    @on_release.setter\n    def on_release(self, callback):\n        if not callable(callback):\n            return\n\n        if self.on_event is None:\n            self.on_event = self._handle_event\n\n        self._on_release = callback\n\n    def _handle_event(self, pin, value):\n\n        if value:\n            if callable(self._on_trigger):\n                self._on_trigger()\n        else:\n            if callable(self._on_release):\n                self._on_release()\n\nGrove = GroveTiltSwitch\n\n\ndef main():\n    import sys\n\n    if len(sys.argv) < 2:\n        print('Usage: {} pin'.format(sys.argv[0]))\n        sys.exit(1)\n\n    swicth = GroveTiltSwitch(int(sys.argv[1]))\n\n    def on_trigger():\n        print('Triggered')\n    def on_release():\n        print(\"Released.\")\n\n    swicth.on_trigger = on_trigger\n    swicth.on_release = on_release\n\n    while True:\n        time.sleep(1)\n\n\nif __name__ == '__main__':\n    main()\n\n\n")),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result when you touch the tilt switch\n"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'\npi@raspberrypi:~/grove.py/grove $ python3 grove_tilt_switch.py 12\nTriggered\nReleased.\nTriggered\n^CTraceback (most recent call last):\n  File "grove_tilt_switch.py", line 106, in <module>\n    main()\n  File "grove_tilt_switch.py", line 102, in main\n    time.sleep(1)\nKeyboardInterrupt\n\n')),(0,n.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,n.kt)("h3",{id:"play-with-raspberry-pi-with-grovepi_plus"},"Play With Raspberry Pi (with GrovePi_Plus)"),(0,n.kt)("h3",{id:"with-raspberry-pi"},"With Raspberry Pi"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,n.kt)("p",null,"1.You should have a Raspberry Pi and a Grovepi or Grovepi+. "),(0,n.kt)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,n.kt)("a",{parentName:"p",href:"/GrovePi_Plus/"},"here"),"."),(0,n.kt)("p",null,"3.Connection"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Plug Tilt_Switch into grovepi socket D3 by using a grove cable.")),(0,n.kt)("p",null,"4.Navigate to the demos' directory:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"       cd yourpath/GrovePi/Software/Python/\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To see the code")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #\n')),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'    import time\n    import grovepi\n\n    # Connect the Grove Tilt Switch to digital port D3\n    # SIG,NC,VCC,GND\n    tilt_switch = 3\n\n    grovepi.pinMode(tilt_switch,"INPUT")\n\n    while True:\n        try:\n            print grovepi.digitalRead(tilt_switch)\n            time.sleep(.5)\n\n        except IOError:\n            print "Error"\n')),(0,n.kt)("p",null,"5.Run the demo."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    sudo python grove_tilt_switch.py\n")),(0,n.kt)("p",null,"6.Result: Put the sensor upright by one side, the SIG pin will output HIGH."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Grovepi_tilt_Switch_00.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("p",null,"The operating angle of Grove-Tilt Switch as shown below:"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/img/Tilt_Switch_Operate.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("div",{class:"admonition note"},(0,n.kt)("p",{class:"admonition-title"},"Note"),"The mark J1 on the Grove is the reference terminal."),(0,n.kt)("h1",{id:"grove---tilt-switch-v10-eagle-file"},"Grove - Tilt Switch v1.0 Eagle File"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"grove---tilt-switch-v11-eagle-file"},"Grove - Tilt Switch v1.1 Eagle File"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.0_Source_File.zip"},"Grove - Tilt Switch v1.0 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_PDF_File.pdf"},"Grove - Tilt Switch v1.1 PDF File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove-Tilt_Switch_v1.1_Eagle_File.zip"},"Grove - Tilt Switch v1.1 Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/SW200D_datasheet.pdf"},"SW200D Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Tilt_Switch/res/Grove_Tilt_Switch_CDC_File.zip"},"Codecraft CDC File"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
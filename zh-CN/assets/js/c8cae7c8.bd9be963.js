"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[22002],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),h=o,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||r;return t?a.createElement(m,i(i({ref:n},d),{},{components:t})):a.createElement(m,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},93902:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=t(87462),o=(t(67294),t(3905));const r={title:"Grove - Chainable RGB LED",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/",slug:"/Grove-Chainable_RGB_LED",last_update:{date:"01/09/2022",author:"gunengyu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Chainable_RGB_LED",id:"Sensor/Grove/Grove_Accessories/Actuator/Grove-Chainable_RGB_LED",title:"Grove - Chainable RGB LED",description:"Grove - Chainable RGB LED is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional Grove - Chainable RGB LED modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Chainable_RGB_LED.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Actuator",slug:"/Grove-Chainable_RGB_LED",permalink:"/custom/zh-CN/Grove-Chainable_RGB_LED",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Actuator/Grove-Chainable_RGB_LED.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641686400,formattedLastUpdatedAt:"2022\u5e741\u67089\u65e5",frontMatter:{title:"Grove - Chainable RGB LED",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Chainable_RGB_LED/",slug:"/Grove-Chainable_RGB_LED",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Passive Buzzer",permalink:"/custom/zh-CN/Grove-Passive-Buzzer"},next:{title:"Grove - Dry-Reed Relay",permalink:"/custom/zh-CN/Grove-Dry-Reed_Relay"}},s={},p=[{value:"Version",id:"version",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Usage",id:"usage",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play with Raspberry Pi",id:"play-with-raspberry-pi",level:3},{value:"With Beaglebone Green",id:"with-beaglebone-green",level:3},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Grove-Chainable_RGB_LED_V2.0.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove - Chainable RGB LED")," is based on P9813 chip which is a full-color LED driver. It provides 3 constant-current drivers as well as modulated output of 256 shades of gray. It communicates with a MCU using 2-wire transmission (Data and Clock). This 2-wire transmission can be used to cascade additional ",(0,o.kt)("strong",{parentName:"p"},"Grove - Chainable RGB LED")," modules. The built-in clock regeneration enhances the transmission distance. This Grove module is suitable for any colorful LED based projects."),(0,o.kt)("h2",{id:"version"},"Version"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Revision"),(0,o.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,o.kt)("th",{parentName:"tr",align:null},"Release"),(0,o.kt)("th",{parentName:"tr",align:null},"How to Buy"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v1"),(0,o.kt)("td",{parentName:"tr",align:null},"Initial public release (beta)"),(0,o.kt)("td",{parentName:"tr",align:null},"May 5, 2011"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Chainable-RGB-LED-p-850.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",alt:null})))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"v2"),(0,o.kt)("td",{parentName:"tr",align:null},"Replace P9813S16 with P9813S14  and change Grove connector from Vertical to horizontal"),(0,o.kt)("td",{parentName:"tr",align:null},"Apr 19, 2016"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-%E2%80%93-Chainable-RGB-Led-V2.0-p-2903.html"},(0,o.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now_small.png",alt:null})))))),(0,o.kt)("h2",{id:"specifications"},"Specifications"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Operating Voltage: 5V"),(0,o.kt)("li",{parentName:"ul"},"Operating Current: 20mA"),(0,o.kt)("li",{parentName:"ul"},"Communication Protocol: Serial")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,o.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,o.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo.jpg",alt:null}))))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,o.kt)("p",null,"When you get Grove - Chainble RGB LED, you may think how I can light up it. Now we will show you this demo: all colors of RGB cycles in an uniform way."),(0,o.kt)("p",null,"To complete this demo, you can use one or more Grove - Chainable RGB LED. Note that the IN interface of one Grove - Chainable RGB LED should be connect to D7/D8 of Grove - Base Shield and its OUT interface connect to IN interface of another Grove - Chainable RGB LED, chainable more LED in this way."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/pjpmarques/ChainableLED"},"Chainable LED Library")," and install it to Arduino Library. There is the course about ",(0,o.kt)("a",{parentName:"li",href:"/How_to_install_Arduino_Library"},"how to install Arduino Library")," in wiki page."),(0,o.kt)("li",{parentName:"ul"},"Open the example CycleThroughColors by the path:File->Examples->ChainableLED_master and upload it to Seeeduino.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n/* \n * Example of using the ChainableRGB library for controlling a Grove RGB.\n * This code cycles through all the colors in an uniform way. This is accomplished using a HSB color space. \n */\n\n\n#include <ChainableLED.h>\n\n#define NUM_LEDS  5\n\nChainableLED leds(7, 8, NUM_LEDS);\n\nvoid setup()\n{\n  leds.init();\n}\n\nfloat hue = 0.0;\nboolean up = true;\n\nvoid loop()\n{\n  for (byte i=0; i<NUM_LEDS; i++)\n    leds.setColorHSL(i, hue, 1.0, 0.5);\n    \n  delay(50);\n    \n  if (up)\n    hue+= 0.025;\n  else\n    hue-= 0.025;\n    \n  if (hue>=1.0 && up)\n    up = false;\n  else if (hue<=0.0 && !up)\n    up = true;\n}\n\n")),(0,o.kt)("p",null,"You can observe this scene: colors of five LED will gradient consistently."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Extended application:"),"\nBased on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pjpmarques/ChainableLED"},"Chainable LED Library"),", we have designed this demo: RGB color varies with the temperature measured by Grove - temperature. The RGB color vary from green to red when the temperature is from 25 to 32. The test code is shown below. Do it if you are interested in it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    // demo of temperature -> rgbLED\n    // temperature form 25 - 32, rgbLed from green -> red\n    // Grove-temperature plu to A0\n    // LED plug to D7,D8\n\n    #include <Streaming.h>\n    #include <ChainableLED.h>\n\n    #define TEMPUP 32\n    #define TEMPDOWN 25\n\n    ChainableLED leds(7, 8, 1); // connect to pin7 and pin8 , one led\n\n    int getAnalog() // get value from A0\n    {\n        int sum = 0;\n        for(int i=0; i<32; i++)\n        {\n            sum += analogRead(A0);\n        }\n\n        return sum>>5;\n    }\n\n    float getTemp() // get temperature\n    {\n        float temperature = 0.0;\n        float resistance = 0.0;\n        int B = 3975; //B value of the thermistor\n\n        int a = getAnalog();\n\n        resistance = (float)(1023-a)*10000/a; //get the resistance of the sensor;\n        temperature = 1/(log(resistance/10000)/B+1/298.15)-273.15; //convert to temperature via datasheet\xa0;\n        return temperature;\n    }\n\n    void ledLight(int dta) // light led\n    {\n\n        dta = dta/4; // 0 - 255\n\n        int colorR = dta;\n        int colorG = 255-dta;\n        int colorB = 0;\n\n        leds.setColorRGB(0, colorR, colorG, colorB);\n    }\n\n    void setup()\n    {\n        Serial.begin(38400);\n        cout << "hello world\xa0!" << endl;\n    }\n\n    void loop()\n    {\n        float temp = getTemp();\n        int nTemp = temp*100;\n\n        nTemp = nTemp > TEMPUP*100\xa0? TEMPUP*100\xa0: (nTemp < TEMPDOWN*100\xa0? TEMPDOWN*100\xa0: nTemp);\n        nTemp = map(nTemp, TEMPDOWN*100, TEMPUP*100, 0, 1023);\n        ledLight(nTemp);\n        delay(100);\n    }\n')),(0,o.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,o.kt)("h4",{id:"hardware"},"Hardware"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Chainanle RGB LED to port D7 in a Base Shield"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Plug the Base Shield to your Seeeduino/Arduino."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3.")," Link Seeeduino/Arduino to your PC via an USB cable."),(0,o.kt)("h4",{id:"software"},"Software"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,o.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/Chainable_RGB_LED.png",alt:null})),(0,o.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you will see the LED fade in and fade out.\n"))),(0,o.kt)("h3",{id:"play-with-raspberry-pi"},"Play with Raspberry Pi"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,o.kt)("p",null,"1.You should have got a raspberry pi and a grovepi or grovepi+."),(0,o.kt)("p",null,"2.You should have completed configuring the development enviroment, otherwise follow ",(0,o.kt)("a",{parentName:"p",href:"/GrovePi_Plus"},"here"),"."),(0,o.kt)("p",null,"3.Connection"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Plug the sensor to grovepi socket D7 by using a grove cable.")),(0,o.kt)("p",null,"4.Navigate to the demos' directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    cd yourpath/GrovePi/Software/Python/\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"To see the code")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'     nano grove_chainable_rgb_led.py   # "Ctrl+x" to exit #\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'    import time\n    import grovepi\n\n    # Connect first LED in Chainable RGB LED chain to digital port D7\n    # In: CI,DI,VCC,GND\n    # Out: CO,DO,VCC,GND\n    pin = 7\n\n    # I have 10 LEDs connected in series with the first connected to the GrovePi and the last not connected\n    # First LED input socket connected to GrovePi, output socket connected to second LED input and so on\n    numleds = 1  \n\n    grovepi.pinMode(pin,"OUTPUT")\n    time.sleep(1)\n\n    # Chainable RGB LED methods\n    # grovepi.storeColor(red, green, blue)\n    # grovepi.chainableRgbLed_init(pin, numLeds)\n    # grovepi.chainableRgbLed_test(pin, numLeds, testColor)\n    # grovepi.chainableRgbLed_pattern(pin, pattern, whichLed)\n    # grovepi.chainableRgbLed_modulo(pin, offset, divisor)\n    # grovepi.chainableRgbLed_setLevel(pin, level, reverse)\n\n    # test colors used in grovepi.chainableRgbLed_test()\n    testColorBlack = 0   # 0b000 #000000\n    testColorBlue = 1    # 0b001 #0000FF\n    testColorGreen = 2   # 0b010 #00FF00\n    testColorCyan = 3    # 0b011 #00FFFF\n    testColorRed = 4     # 0b100 #FF0000\n    testColorMagenta = 5 # 0b101 #FF00FF\n    testColorYellow = 6  # 0b110 #FFFF00\n    testColorWhite = 7   # 0b111 #FFFFFF\n\n    # patterns used in grovepi.chainableRgbLed_pattern()\n    thisLedOnly = 0\n    allLedsExceptThis = 1\n    thisLedAndInwards = 2\n    thisLedAndOutwards = 3\n\n    try:\n\n        print "Test 1) Initialise"\n\n        # init chain of leds\n        grovepi.chainableRgbLed_init(pin, numleds)\n        time.sleep(.5)\n\n        # change color to green\n        grovepi.storeColor(0,255,0)\n        time.sleep(.5)\n\n        # set led 1 to green\n        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 0)\n        time.sleep(.5)\n\n        # change color to red\n        grovepi.storeColor(255,0,0)\n        time.sleep(.5)\n\n        # set led 10 to red\n        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 9)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 2a) Test Patterns - black"\n\n        # test pattern 0 - black (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(1)\n\n\n        print "Test 2b) Test Patterns - blue"\n\n        # test pattern 1 blue\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlue)\n        time.sleep(1)\n\n\n        print "Test 2c) Test Patterns - green"\n\n        # test pattern 2 green\n        grovepi.chainableRgbLed_test(pin, numleds, testColorGreen)\n        time.sleep(1)\n\n\n        print "Test 2d) Test Patterns - cyan"\n\n        # test pattern 3 cyan\n        grovepi.chainableRgbLed_test(pin, numleds, testColorCyan)\n        time.sleep(1)\n\n\n        print "Test 2e) Test Patterns - red"\n\n        # test pattern 4 red\n        grovepi.chainableRgbLed_test(pin, numleds, testColorRed)\n        time.sleep(1)\n\n\n        print "Test 2f) Test Patterns - magenta"\n\n        # test pattern 5 magenta\n        grovepi.chainableRgbLed_test(pin, numleds, testColorMagenta)\n        time.sleep(1)\n\n\n        print "Test 2g) Test Patterns - yellow"\n\n        # test pattern 6 yellow\n        grovepi.chainableRgbLed_test(pin, numleds, testColorYellow)\n        time.sleep(1)\n\n\n        print "Test 2h) Test Patterns - white"\n\n        # test pattern 7 white\n        grovepi.chainableRgbLed_test(pin, numleds, testColorWhite)\n        time.sleep(1)\n\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 3a) Set using pattern - this led only"\n\n        # change color to red\n        grovepi.storeColor(255,0,0)\n        time.sleep(.5)\n\n        # set led 3 to red\n        grovepi.chainableRgbLed_pattern(pin, thisLedOnly, 2)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 3b) Set using pattern - all leds except this"\n\n        # change color to blue\n        grovepi.storeColor(0,0,255)\n        time.sleep(.5)\n\n        # set all leds except for 3 to blue\n        grovepi.chainableRgbLed_pattern(pin, allLedsExceptThis, 3)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 3c) Set using pattern - this led and inwards"\n\n        # change color to green\n        grovepi.storeColor(0,255,0)\n        time.sleep(.5)\n\n        # set leds 1-3 to green\n        grovepi.chainableRgbLed_pattern(pin, thisLedAndInwards, 2)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 3d) Set using pattern - this led and outwards"\n\n        # change color to green\n        grovepi.storeColor(0,255,0)\n        time.sleep(.5)\n\n        # set leds 7-10 to green\n        grovepi.chainableRgbLed_pattern(pin, thisLedAndOutwards, 6)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 4a) Set using modulo - all leds"\n\n        # change color to black (fully off)\n        grovepi.storeColor(0,0,0)\n        time.sleep(.5)\n\n        # set all leds black\n        # offset 0 means start at first led\n        # divisor 1 means every led\n        grovepi.chainableRgbLed_modulo(pin, 0, 1)\n        time.sleep(.5)\n\n        # change color to white (fully on)\n        grovepi.storeColor(255,255,255)\n        time.sleep(.5)\n\n        # set all leds white\n        grovepi.chainableRgbLed_modulo(pin, 0, 1)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 4b) Set using modulo - every 2"\n\n        # change color to red\n        grovepi.storeColor(255,0,0)\n        time.sleep(.5)\n\n        # set every 2nd led to red\n        grovepi.chainableRgbLed_modulo(pin, 0, 2)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n\n        print "Test 4c) Set using modulo - every 2, offset 1"\n\n        # change color to green\n        grovepi.storeColor(0,255,0)\n        time.sleep(.5)\n\n        # set every 2nd led to green, offset 1\n        grovepi.chainableRgbLed_modulo(pin, 1, 2)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 4d) Set using modulo - every 3, offset 0"\n\n        # change color to red\n        grovepi.storeColor(255,0,0)\n        time.sleep(.5)\n\n        # set every 3nd led to red\n        grovepi.chainableRgbLed_modulo(pin, 0, 3)\n        time.sleep(.5)\n\n        # change color to green\n        grovepi.storeColor(0,255,0)\n        time.sleep(.5)\n\n        # set every 3nd led to green, offset 1\n        grovepi.chainableRgbLed_modulo(pin, 1, 3)\n        time.sleep(.5)\n\n        # change color to blue\n        grovepi.storeColor(0,0,255)\n        time.sleep(.5)\n\n        # set every 3nd led to blue, offset 2\n        grovepi.chainableRgbLed_modulo(pin, 2, 3)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 4e) Set using modulo - every 3, offset 1"\n\n        # change color to yellow\n        grovepi.storeColor(255,255,0)\n        time.sleep(.5)\n\n        # set every 4nd led to yellow\n        grovepi.chainableRgbLed_modulo(pin, 1, 3)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n\n        print "Test 4f) Set using modulo - every 3, offset 2"\n\n        # change color to magenta\n        grovepi.storeColor(255,0,255)\n        time.sleep(.5)\n\n        # set every 4nd led to magenta\n        grovepi.chainableRgbLed_modulo(pin, 2, 3)\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 5a) Set level 6"\n\n        # change color to green\n        grovepi.storeColor(0,255,0)\n        time.sleep(.5)\n\n        # set leds 1-6 to green\n        grovepi.write_i2c_block(0x04,[95,pin,6,0])\n        time.sleep(.5)\n\n        # pause so you can see what happened\n        time.sleep(2)\n\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        time.sleep(.5)\n\n\n        print "Test 5b) Set level 7 - reverse"\n\n        # change color to red\n        grovepi.storeColor(255,0,0)\n        time.sleep(.5)\n\n        # set leds 4-10 to red\n        grovepi.write_i2c_block(0x04,[95,pin,7,1])\n        time.sleep(.5)\n\n\n    except KeyboardInterrupt:\n        # reset (all off)\n        grovepi.chainableRgbLed_test(pin, numleds, testColorBlack)\n        break\n    except IOError:\n        print "Error"\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Notice that there's something you have to concern of:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    pin = 7         #setting up the output pin\n    numleds = 1     #how many leds you plug\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Also all methods you can see in grovepi.py is:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    storeColor(red, green, blue)\n    chainableRgbLed_init(pin, numLeds)\n    chainableRgbLed_test(pin, numLeds, testColor)\n    chainableRgbLed_pattern(pin, pattern, whichLed)\n    chainableRgbLed_modulo(pin, offset, divisor)\n    chainableRgbLed_setLevel(pin, level, reverse)\n")),(0,o.kt)("p",null,"5.Run the demo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    sudo python3 grove_chainable_rgb_led.py\n")),(0,o.kt)("p",null,"6.This demo may not work if your grovepi dosen't have the newest firmware, update the firmware."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    cd yourpath/GrovePi/Firmware\n    sudo ./firmware_update.sh\n")),(0,o.kt)("h3",{id:"with-beaglebone-green"},"With Beaglebone Green"),(0,o.kt)("p",null,"To begin editing programs that live on BBG, you can use the Cloud9 IDE."),(0,o.kt)("p",null,"As a simple exercise to become familiar with Cloud9 IDE, creating a simple application to blink one of the 4 user programmable LEDs on the BeagleBone is a good start."),(0,o.kt)("p",null,"If this is your first time to use Cloud9 IDE, please follow this ",(0,o.kt)("a",{parentName:"p",href:"/BeagleBone_Green"},(0,o.kt)("strong",{parentName:"a"},"link")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step1:")," Set the Grove - UART socket as a Grove - GPIO Socket, just follow this ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/362-how-to-use-the-grove-uart-port-as-a-gpio-on-bbg.html"},(0,o.kt)("strong",{parentName:"a"},"link")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step2:"),' Click the "+" in the top-right to create a new file.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9-create-tab.png",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/img/C9_newfile.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step3:")," Copy and paste the following code into the new tab"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import time\nimport Adafruit_BBIO.GPIO as GPIO\n\xa0\nCLK_PIN = "P9_22"\nDATA_PIN = "P9_21"\nNUMBER_OF_LEDS = 1\n\xa0\nclass ChainableLED():\n    def __init__(self, clk_pin, data_pin, number_of_leds):\n        self.__clk_pin = clk_pin\n        self.__data_pin = data_pin\n        self.__number_of_leds = number_of_leds\n\xa0\n        GPIO.setup(self.__clk_pin, GPIO.OUT)\n        GPIO.setup(self.__data_pin, GPIO.OUT)\n\xa0\n        for i in range(self.__number_of_leds):\n            self.setColorRGB(i, 0, 0, 0)\n\xa0\n    def clk(self):\n        GPIO.output(self.__clk_pin, GPIO.LOW)\n        time.sleep(0.00002)\n        GPIO.output(self.__clk_pin, GPIO.HIGH)\n        time.sleep(0.00002)\n\xa0\n    def sendByte(self, b):\n        "Send one bit at a time, starting with the MSB"\n        for i in range(8):\n            # If MSB is 1, write one and clock it, else write 0 and clock\n            if (b & 0x80) != 0:\n                GPIO.output(self.__data_pin, GPIO.HIGH)\n            else:\n                GPIO.output(self.__data_pin, GPIO.LOW)\n            self.clk()\n\xa0\n            # Advance to the next bit to send\n            b = b << 1\n\xa0\n    def sendColor(self, red, green, blue):\n        "Start by sending a byte with the format \'1 1 /B7 /B6 /G7 /G6 /R7 /R6\' "\n        #prefix = B11000000\n        prefix = 0xC0\n        if (blue & 0x80) == 0:     \n            #prefix |= B00100000\n            prefix |= 0x20\n        if (blue & 0x40) == 0:     \n            #prefix |= B00010000\n            prefix |= 0x10\n        if (green & 0x80) == 0:    \n            #prefix |= B00001000\n            prefix |= 0x08\n        if (green & 0x40) == 0:    \n            #prefix |= B00000100\n            prefix |= 0x04\n        if (red & 0x80) == 0:      \n            #prefix |= B00000010\n            prefix |= 0x02\n        if (red & 0x40) == 0:      \n            #prefix |= B00000001\n            prefix |= 0x01\n        self.sendByte(prefix)\n\xa0\n        # Now must send the 3 colors\n        self.sendByte(blue)\n        self.sendByte(green)\n        self.sendByte(red)\n\xa0\n    def setColorRGB(self, led, red, green, blue):\n        # Send data frame prefix (32x \'0\')\n        self.sendByte(0x00)\n        self.sendByte(0x00)\n        self.sendByte(0x00)\n        self.sendByte(0x00)\n\xa0\n        # Send color data for each one of the leds\n        for i in range(self.__number_of_leds):\n            \'\'\'\n            if i == led:\n                _led_state[i*3 + _CL_RED] = red;\n                _led_state[i*3 + _CL_GREEN] = green;\n                _led_state[i*3 + _CL_BLUE] = blue;\n            sendColor(_led_state[i*3 + _CL_RED],\n                      _led_state[i*3 + _CL_GREEN],\n                      _led_state[i*3 + _CL_BLUE]);\n            \'\'\'\n            self.sendColor(red, green, blue)\n\xa0\n        # Terminate data frame (32x "0")\n        self.sendByte(0x00)\n        self.sendByte(0x00)\n        self.sendByte(0x00)\n        self.sendByte(0x00)\n\xa0\n\xa0\n# Note: Use P9_22(UART2_RXD) and P9_21(UART2_TXD) as GPIO.\n# Connect the Grove - Chainable RGB LED to UART Grove port of Beaglebone Green.\nif __name__ == "__main__":\n    rgb_led = ChainableLED(CLK_PIN, DATA_PIN, NUMBER_OF_LEDS)\n\xa0\n    while True:\n        # The first parameter: NUMBER_OF_LEDS - 1; Other parameters: the RGB values.\n        rgb_led.setColorRGB(0, 255, 0, 0)\n        time.sleep(2)\n        rgb_led.setColorRGB(0, 0, 255, 0)\n        time.sleep(2)\n        rgb_led.setColorRGB(0, 0, 0, 255)\n        time.sleep(2)\n        rgb_led.setColorRGB(0, 0, 255, 255)\n        time.sleep(2)\n        rgb_led.setColorRGB(0, 255, 0, 255)\n        time.sleep(2)\n        rgb_led.setColorRGB(0, 255, 255, 0)\n        time.sleep(2)\n        rgb_led.setColorRGB(0, 255, 255, 255)\n        time.sleep(2)\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step4:")," Save the file by clicking the disk icon and giving the file a name with the .py extension."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step5:")," Connect Grove Chainable RGB LED to Grove UART socket on BBG."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step6:")," Run the code. You'll find the RGB LED is changing color every 2 seconds."),(0,o.kt)("h1",{id:"chainable-rgb-led-eagle-file-v1"},"Chainable RGB LED eagle file V1"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1%20(2).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h1",{id:"chainable-rgb-led-eagle-file-v2"},"Chainable RGB LED eagle file V2"),(0,o.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0%20(1).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,o.kt)("h1",{id:"resources"},"Resources"),(0,o.kt)("hr",null),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Library]"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/pjpmarques/ChainableLED"},"Chainable RGB LED Library for the P9813")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Library]"),(0,o.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED"},"Github repository for Chainable RGB LED Library (new)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Library]")," ",(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable%20RGB%20LED.zip"},"CodeCraft Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Eagle]"),(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Chainable_RGB_LED_eagle_file%20V1.zip"},"Chainable RGB LED eagle file V1")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Eagle]"),(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/Grove%20-%20Chainable%20RGB%20LED%20v2.0.zip"},"Chainable RGB LED eagle file V2")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,o.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Chainable_RGB_LED/res/P9813_datasheet.pdf"},"P9813 Datasheet"))),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Grove - Introduction to Chainable LED"),": This project shows how to connect a chainable LED to Grove."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ingo-lohs/grove-introduction-to-chainable-led-d668b7/embed",width:"350"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DIY a device for explaining RGB color model")),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/kevin-lee2/diy-a-device-for-explaining-rgb-color-model-496cbc/embed",width:"350"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Security Access Using Seeeduino Lotus")," When you knock on the door or close to the door, the door will open automatically."),(0,o.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/limanchen/security-access-using-seeeduino-lotus-7eb90f/embed",width:"350"}),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
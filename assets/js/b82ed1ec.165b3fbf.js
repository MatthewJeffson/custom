"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[45420],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),d=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(l,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(g,i(i({ref:e},p),{},{components:n})):a.createElement(g,i({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},46840:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={description:"Firmata for Arduino Compatible Boards",title:"Firmata for Arduino Compatible Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Firmata",last_update:{date:"1/16/2023",author:"jianjing Huang"}},i="Firmata Tutorial: How to Use Firmata on Arduino Compatible Boards",s={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ODYSSEY-X86J4105-Firmata",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ODYSSEY-X86J4105-Firmata",title:"Firmata for Arduino Compatible Boards",description:"Firmata for Arduino Compatible Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ODYSSEY-X86J4105-Firmata.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/ODYSSEY-X86J4105-Firmata",permalink:"/custom/ODYSSEY-X86J4105-Firmata",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/ODYSSEY-X86J4105-Firmata.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Firmata for Arduino Compatible Boards",title:"Firmata for Arduino Compatible Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ODYSSEY-X86J4105-Firmata",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"I2C And I2C Address of Seeed Product",permalink:"/custom/I2C_And_I2C_Address_of_Seeed_Product"},next:{title:"FreeRTOS for Arduino Boards",permalink:"/custom/Software-FreeRTOS"}},l={},d=[{value:"What is Firmata",id:"what-is-firmata",level:2},{value:"Burning the Firmata Firmware via Arduino IDE",id:"burning-the-firmata-firmware-via-arduino-ide",level:2},{value:"Testing the Firmata Firmware",id:"testing-the-firmata-firmware",level:2},{value:"Using Python to Interpret Firmata",id:"using-python-to-interpret-firmata",level:2},{value:"pyFirmata Installation",id:"pyfirmata-installation",level:3},{value:"To Blink an LED connected on D13",id:"to-blink-an-led-connected-on-d13",level:3},{value:"To read Analog Signals on A0",id:"to-read-analog-signals-on-a0",level:3},{value:"PWM Outputs on D6",id:"pwm-outputs-on-d6",level:3},{value:"Using JavaScript to Interpret Firmata",id:"using-javascript-to-interpret-firmata",level:2},{value:"Getting Started with firmata.js",id:"getting-started-with-firmatajs",level:3},{value:"To blink an LED connected on D13",id:"to-blink-an-led-connected-on-d13-1",level:3},{value:"To read Analog Signals on A0",id:"to-read-analog-signals-on-a0-1",level:3},{value:"PWM Outputs on D6",id:"pwm-outputs-on-d6-1",level:3},{value:"I2C Signals",id:"i2c-signals",level:3}],p={toc:d};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"firmata-tutorial-how-to-use-firmata-on-arduino-compatible-boards"},"Firmata Tutorial: How to Use Firmata on Arduino Compatible Boards"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-py-js.png"})),(0,r.kt)("h2",{id:"what-is-firmata"},"What is Firmata"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"http://firmata.org/wiki/Main_Page"},"Firmata"))," is an intermediate protocol that connects an embedded system to a host computer, and the protocol channel uses a serial port by default. The Arduino platform is the standard reference implementation for Firmata. The Arduino IDE comes with the support for Firmata."),(0,r.kt)("p",null,"This could work perfectly with ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ODYSSEY-X86J4105864-p-4447.html"},"Odyssey-X86")," with its onboard Arduino Core meaning that you can control the Arduino Core simply using Firmata protocol with different programming languages too! In this tutorial, it's based on Windows OS."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reference: ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/firmata/protocol"},"Firmata Protocols"))),(0,r.kt)("h2",{id:"burning-the-firmata-firmware-via-arduino-ide"},"Burning the Firmata Firmware via Arduino IDE"),(0,r.kt)("p",null,"The Arduino IDE >= 1.6.X  version comes with the Firmata firmware so we can use Arduino IDE to burn the firmata firmware into Arduino core."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can download ",(0,r.kt)("a",{parentName:"p",href:"https://www.arduino.cc/en/Main/Software"},"Arduino IDE")," from here.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Open Arduino IDE and navigate to ",(0,r.kt)("inlineCode",{parentName:"li"},"Examples")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"Firmata")," -> ",(0,r.kt)("inlineCode",{parentName:"li"},"StandardFirmata"),":")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-1.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"StandardFirmata.ino")," will appear. Select the correct board and port and click ",(0,r.kt)("strong",{parentName:"li"},"Upload"),":")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you haven't installed the board library for Odyssey please follow ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/ODYSSEY-X86J4105/#using-the-arduino-core-atsamd21g18-in-windows"},(0,r.kt)("strong",{parentName:"a"},"this"))," to install the board.")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-2.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Once uploaded, it should look something like this:")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-3.jpg"})),(0,r.kt)("p",null,"Now, the Arduino Firmata firmware is flashed into the Arduino core on Odyssey-X86!"),(0,r.kt)("h2",{id:"testing-the-firmata-firmware"},"Testing the Firmata Firmware"),(0,r.kt)("p",null,"To test the Firmata firmware, you can navigate to the ",(0,r.kt)("strong",{parentName:"p"},"Microsoft Store"),", search and download the ",(0,r.kt)("strong",{parentName:"p"},"Windows Remote Arduino Experience"),". Once downloaded, you can connect to the Arduino Core by selecting the USB connection, board and baudrate:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/Remote-Arduino.jpg"})),(0,r.kt)("p",null,"Once connected, you can connect LED to the corresponded pins to test the firmware:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/firmata-test.jpg"})),(0,r.kt)("h2",{id:"using-python-to-interpret-firmata"},"Using Python to Interpret Firmata"),(0,r.kt)("p",null,"There are libraries that implement the Firmata protocol in order to communicate (from a computer, smartphone or tablet for example) with Firmata firmware running on a microcontroller platform."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/tino/pyFirmata"},"pyFirmata"))," is a Python interface for the Firmata protocol and runs on python3."),(0,r.kt)("h3",{id:"pyfirmata-installation"},"pyFirmata Installation"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    Python3 is required for this.\n"))),(0,r.kt)("p",null,"Install with pip:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install pyfirmata\n")),(0,r.kt)("h3",{id:"to-blink-an-led-connected-on-d13"},"To Blink an LED connected on D13"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"COM4")," to your Arduino USB COM."),(0,r.kt)("p",null,"For a simple LED module, you can use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-LED-Pack-p-4364.html"},"Grove - LED module")," to test!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"#!/usr/bin/env python3\nfrom pyfirmata import Arduino, util\nfrom time import sleep\n\nboard = Arduino('COM4') # Change to your port\nprint(\"Start blinking D13\")\nwhile True:\n    board.digital[13].write(1)\n    sleep(1)\n    board.digital[13].write(0)\n    sleep(1)\n")),(0,r.kt)("h3",{id:"to-read-analog-signals-on-a0"},"To read Analog Signals on A0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"#!/usr/bin/env python3\nfrom pyfirmata import Arduino,util\nimport time\nimport sys\n\nboard = Arduino('COM4') # Change to your port\nit = util.Iterator(board)\nit.start()\nboard.analog[0].enable_reporting()\nprint (\"Read Start\")\nfor i in range(10):\n    time.sleep(1)\n    print(board.analog[0].read())\n\nboard.analog[0].disable_reporting()\n")),(0,r.kt)("h3",{id:"pwm-outputs-on-d6"},"PWM Outputs on D6"),(0,r.kt)("p",null,"Output a PWM signal to a LED connected at D6."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"#!/usr/bin/env python3\nfrom pyfirmata import Arduino, util\nfrom time import sleep\n\nboard = Arduino('COM4') # Change to your port\nlenPin = board.get_pin('d:6:p') # PWM Pin\nprint(\"Starting to output PWM signal\")\nwhile True:\n    for i in range(0, 101, 4):\n        lenPin.write(i/100)\n        sleep(0.05)\n    sleep(1)\n    for i in range(100, -1, -4):\n        lenPin.write(i/100)\n        sleep(0.05)\n    sleep(1)\n")),(0,r.kt)("p",null,"Now you can use python script (or even other languages) to control your Arduino core on Odyssey-X86, which makes it very useful in some situations where real time requirements are less important (i.e Using python to build a Web Sever, and using Arduino to control a relay)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For more API reference, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://pypi.org/project/pyFirmata/"},"pyFirmata API"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For more advanced python usage of Firmata, you can consider using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MrYsLab/pymata4"},"pymata4"),".")),(0,r.kt)("h2",{id:"using-javascript-to-interpret-firmata"},"Using JavaScript to Interpret Firmata"),(0,r.kt)("p",null,"Just like using Python to control Arduino Core via the Firmata protocol, you can also choose other languages that you are familiar with to program, such as JavaScript! This is implemented by the official Firmata team and you can find out more information at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/firmata/firmata.js"},(0,r.kt)("strong",{parentName:"a"},"firmata.js")),"."),(0,r.kt)("h3",{id:"getting-started-with-firmatajs"},"Getting Started with firmata.js"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    Make sure that **`node.js`** is installed on the PC.\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"mkdir js && cd js\nnpm init -y\nnpm install --save firmata # Installing firmata.js\n")),(0,r.kt)("h3",{id:"to-blink-an-led-connected-on-d13-1"},"To blink an LED connected on D13"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'const Board = require("firmata");\nconst pin = 13;\n\n//Initialize\nBoard.requestPort((error, port) => {\n  if (error) {\n    console.log(error);\n    return;\n  }\n\n  const board = new Board(port.path);\n  //Waiting to connect\n  board.on("ready", () => {\n    console.log("Ready!");\n    let state = 1;\n    //Setting pins to output\n    board.pinMode(pin, board.MODES.OUTPUT);\n    setInterval(() => {\n      console.log("State Change");\n      board.digitalWrite(pin, (state ^= 1));\n    }, 500);\n  });\n});\n')),(0,r.kt)("h3",{id:"to-read-analog-signals-on-a0-1"},"To read Analog Signals on A0"),(0,r.kt)("p",null,"To test the analog signals, you can simply use the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Rotary-Angle-Sensor.html"},"Grove - Rotary Angle Sensor"),"!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'const Board = require(\'firmata\');\nconst Pin = 0;\n\n// Initialize\nBoard.requestPort(function(error, port) {\n    if (error) {\n        console.log(error);\n        return;\n    }\n    var board = new Board(port.path);\n    // Waiting to connect\n    board.on("ready", function() {\n        console.log("Ready!");\n        // Reading Analog values\n        board.analogRead(Pin, function(value) {\n            console.log("Analog value: ", value);\n        });\n    });\n});\n')),(0,r.kt)("h3",{id:"pwm-outputs-on-d6-1"},"PWM Outputs on D6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'var Board = require(\'firmata\');\nconst LED = 6;\n\nvar brightness = 0;\nvar fadeAmount = 5;\n\n// Initialize\nBoard.requestPort(function(error, port) {\n    if (error) {\n        console.log(error);\n        return;\n    }\n    const board = new Board(port.path);\n    // Waiting to connect\n    board.on("ready", function() {\n        console.log("Ready!");\n        // Setting pin to PWM mode\n        board.pinMode(LED, board.MODES.PWM);\n\n        // PWM signals for LED\n        function fadeLed() {\n            brightness += fadeAmount;\n            if (brightness == 0 || brightness == 255) {\n                fadeAmount = -fadeAmount;\n            }\n            board.analogWrite(LED, brightness);\n            setTimeout(fadeLed, 30);\n        }\n        console.log("Breathing");\n        fadeLed();\n    });\n});\n')),(0,r.kt)("h3",{id:"i2c-signals"},"I2C Signals"),(0,r.kt)("p",null,"firmata.js also support I2C and UART communications, here provides an example using with ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html"},"Grove - 3-Axis Digital Accelerometer(ADXL345)(\xb116g)"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Hardware Connection:"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{550}",src:"https://files.seeedstudio.com/wiki/ODYSSEY-X86J4105864/img/X86-ADXL345.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'const Board = require("firmata");\n\nBoard.requestPort((error, port) => {\n  if (error) {\n    console.log(error);\n    return;\n  }\n\n  const register = {\n    POWER: 0x2D,\n    RANGE: 0x31,\n    READ: 0xB2,\n  };\n\n  const board = new Board(port.path);\n\n  board.on("ready", function() {\n    console.log("Ready");\n\n    const adxl345 = 0x53;\n    const sensitivity = 0.00390625;\n\n    // Enable I2C\n    this.i2cConfig();\n\n    // Toggle power to reset\n    this.i2cWrite(adxl345, register.POWER, 0);\n    this.i2cWrite(adxl345, register.POWER, 8);\n\n    // Set range (this is 2G range)\n    this.i2cWrite(adxl345, register.RANGE, 8);\n\n    // Set register to READ position and request 6 bytes\n    this.i2cRead(adxl345, register.READ, 6, data => {\n      const x = (data[1] << 8) | data[0];\n      const y = (data[3] << 8) | data[2];\n      const z = (data[5] << 8) | data[4];\n\n      // Wrap and clamp 16 bits;\n      const X = (x >> 15 ? ((x ^ 0xFFFF) + 1) * -1 : x) * sensitivity;\n      const Y = (y >> 15 ? ((y ^ 0xFFFF) + 1) * -1 : y) * sensitivity;\n      const Z = (z >> 15 ? ((z ^ 0xFFFF) + 1) * -1 : z) * sensitivity;\n\n      console.log("X: ", X);\n      console.log("Y: ", Y);\n      console.log("Z: ", Z);\n    });\n  });\n});\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," For more API reference, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/firmata/firmata.js/tree/master/packages/firmata.js"},"firmata.js")," and check the examples."))}m.isMDXComponent=!0}}]);
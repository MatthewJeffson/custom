"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61034],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,c=u["".concat(l,".").concat(m)]||u[m]||h[m]||a;return n?i.createElement(c,o(o({ref:t},d),{},{components:n})):i.createElement(c,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={description:"Grove - Sunlight Sensor",title:"Grove - Sunlight Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Sunlight_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor",title:"Grove - Sunlight Sensor",description:"Grove - Sunlight Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-Sunlight_Sensor",permalink:"/Grove-Sunlight_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-Sunlight_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672848e3,formattedLastUpdatedAt:"Jan 4, 2023",frontMatter:{description:"Grove - Sunlight Sensor",title:"Grove - Sunlight Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Sunlight_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Light Sensor",permalink:"/Grove-Light_Sensor"},next:{title:"Grove - UV Sensor",permalink:"/Grove-UV_Sensor"}},l={},p=[{value:"Version",id:"version",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play with Arduino",id:"play-with-arduino",level:3},{value:"SI1145 - Play with Raspberry Pi",id:"si1145---play-with-raspberry-pi",level:3},{value:"SI1151 - Play with Raspberry Pi",id:"si1151---play-with-raspberry-pi",level:3},{value:"References",id:"references",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_sensor_view.jpg"})),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor-p-2530.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:"0"}))),(0,r.kt)("p",null,"Grove - Sunlight Sensor is a multi-channel digital light sensor, which has the ability to detect UV-light, visible light and infrared light."),(0,r.kt)("p",null,"This device is based on SI1151, a new sensor from SiLabs. The Si1151 is a low-power, reflectance-based, infrared proximity, UV index and ambient light sensor with I2C digital interface and programmable-event interrupt output. This device offers excellent performance under a wide dynamic range and a variety of light sources including direct sunlight."),(0,r.kt)("p",null,"Grove - Sunlight Sensor include an on-bard Grove connector, which help you to connect it your Arduino easily. You can use this device for making some project which need to detect the light, such as a simple UV detector."),(0,r.kt)("p",null,"The main chip of the device has been updated to SI1151, the tutorial to SI1145 still remain."),(0,r.kt)("h2",{id:"version"},"Version"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,r.kt)("th",{parentName:"tr",align:null},"Changes"),(0,r.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grove - Sunlight Sensor v1.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Initial"),(0,r.kt)("td",{parentName:"tr",align:null},"Feb 12 2020")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grove - Sunlight Sensor v2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"replace Si1145 with Si1151-AB00-GMR"),(0,r.kt)("td",{parentName:"tr",align:null},"Jul 27 2021")))),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2102 Wireless Light Intensity Sensor with higher performance and robustness for light intensity detection. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,r.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("font",{size:4},(0,r.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S2102-.png"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,r.kt)("strong",null,"S2102 Light")))))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Digital light sensor"),(0,r.kt)("li",{parentName:"ul"},"Wide spectrum detection range to improve accuracy."),(0,r.kt)("li",{parentName:"ul"},"Programmable configuration which make it versatile for various applications."),(0,r.kt)("li",{parentName:"ul"},"Detect sunlight directly"),(0,r.kt)("li",{parentName:"ul"},"Grove compatible"),(0,r.kt)("li",{parentName:"ul"},"I2C Interface(7-bit)")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("hr",null),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null}),(0,r.kt)("th",{parentName:"tr",align:null}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"3.0-5.5V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working current"),(0,r.kt)("td",{parentName:"tr",align:null},"3.5mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wave length"),(0,r.kt)("td",{parentName:"tr",align:null},"280-950nm")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default I2C Address"),(0,r.kt)("td",{parentName:"tr",align:null},"0x60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-45-85\u2103")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("hr",null),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Hardware_overview.jpg"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Grove Connector - a 4pin interface, contain VCC, GND, SDA and SCL"),(0,r.kt)("li",{parentName:"ul"},"LED - LED Driver pin"),(0,r.kt)("li",{parentName:"ul"},"INT - a programmable interrupt output"),(0,r.kt)("li",{parentName:"ul"},"SI1151 - IC")),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"After this section, you can make Grove - Sunlight Sensor run with only few steps."),(0,r.kt)("h3",{id:"play-with-arduino"},"Play with Arduino"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Sunlight Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg"})),(0,r.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"enter image description here"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html"},"Get One Now"))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"If this is your first time using Arduino, Please put hand on ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Seeeduino"},"here")," to start your Arduino journey.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connecting hardware")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_hardware_connect.jpg"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you need a plug more modules on main control board, you may need a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Base_Shield_V2/"},"Grove base shield")," which will make your work easy.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Download")),(0,r.kt)("p",null,"Click ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151"},"here")," to download the library and then ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"add")," it to the Arduino."),(0,r.kt)("p",null,"Launch Arduino IDE and click ",(0,r.kt)("strong",{parentName:"p"},"File>Examples>Grove_Sunlight_Sensor>SI1151")," to open the test code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c++"},'#include "Si115X.h"\n\nSi115X si1151;\n\n/**\n * Setup for configuration\n */\nvoid setup()\n{\n    uint8_t conf[4];\n\n    Wire.begin();\n    Serial.begin(115200);\n    if (!si1151.Begin())\n        Serial.println("Si1151 is not ready!");\n    else\n        Serial.println("Si1151 is ready!");\n\n}\n\n/**\n * Loops and reads data from registers\n */\nvoid loop()\n{\n    Serial.print("IR: ");\n    Serial.println(si1151.ReadHalfWord());\n    Serial.print("VISIBLE: ");\n    Serial.println(si1151.ReadHalfWord_VISIBLE());\n    Serial.print("UV: ");\n    Serial.println(si1151.ReadHalfWord_UV());\n    delay(100);\n}\n')),(0,r.kt)("p",null,"Click Tools>Board to choose Arduino UNO and select respective serial port."),(0,r.kt)("p",null,"Now click Upload(CTRL+U) to burn testing code. Please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Arduino_Common_Error"},(0,r.kt)("strong",{parentName:"a"},"here"))," for any error prompt ."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Review Results")),(0,r.kt)("p",null,"After upload completed, Open Serial Monitor of your Arduino IDE, you can get the data:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/output.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Vis - visible light, unit in lm\nIR - infrared light, unit in lm\nUV - UN index\n"))),(0,r.kt)("p",null,"Now, put Grove - Sunlight Sensor under the sun to see if it's a nice day."),(0,r.kt)("h3",{id:"si1145---play-with-raspberry-pi"},"SI1145 - Play with Raspberry Pi"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4 Model B"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Base Hat for Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Sunlight Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html"},"Get One Now"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connecting hardware")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Sunlight Sensor to port ",(0,r.kt)("strong",{parentName:"p"},"I2C")," of Grove - Base Hat for Raspberry Pi, Plugged into Raspberry Pi 4 Model B. And then connect the Raspberry Pi 4 Model B with a PC."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," After accessing the system of Raspberry Pi, git clone ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Seeed_Python_SI114X"},"Seeed_Python_SI114X"))," and install ",(0,r.kt)("strong",{parentName:"p"},"grove.py")," by inserting the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip3 install Seeed-grove.py\n")),(0,r.kt)("p",null,"Or on supported GNU/Linux systems like the Raspberry Pi, you can install the driver locally from PyPI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"pip3 install seeed-python-si114x\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," To install system-wide (this may be required in some cases):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"sudo pip3 install seeed-python-si114x\n")),(0,r.kt)("p",null,"And you can insert the following command to upgrade the driver locally from PyPI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"pip3 install --upgrade seeed-python-si114x\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Software")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Python"},"import seeed_si114x\nimport time\nimport signal\ndef handler(signalnum, handler):\n    print(\"Please use Ctrl C to quit\")\ndef main():\n    SI1145 = seeed_si114x.grove_si114x()\n    print(\"Please use Ctrl C to quit\")\n    signal.signal(signal.SIGTSTP, handler) # Ctrl-z\n    signal.signal(signal.SIGQUIT, handler) # Ctrl-\\\n    while True:\n        print('Visible %03d UV %.2f IR %03d' % (SI1145.ReadVisible , SI1145.ReadUV/100 , SI1145.ReadIR),end=\" \")\n        print('\\r', end='')\n        time.sleep(0.5)\nif __name__  == '__main__':\n    main()\n")),(0,r.kt)("p",null,"Before running the demo code, you must check the corresponding i2c number of the board:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"ls /dev/i2c*\n")),(0,r.kt)("p",null,"If the i2c device works properly, there will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"/dev/i2c-1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If NOT"),", use the command ",(0,r.kt)("strong",{parentName:"p"},"sudo raspi-config")," and reboot to enable the i2c device:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Run the demo by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"cd Seeed_Python_SI114X-Si115x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"python3 examples/BasicRead.py \n")),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The outcome will display as following if everything goes well:")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/outcome.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Visible")," refers to ",(0,r.kt)("strong",{parentName:"p"},"visible light of Ambient")," and ",(0,r.kt)("strong",{parentName:"p"},"UV")," refers to ",(0,r.kt)("strong",{parentName:"p"},"Ultraviolet (UV) Index")," while ",(0,r.kt)("strong",{parentName:"p"},"IR")," means ",(0,r.kt)("strong",{parentName:"p"},"infrared light of Ambient"),".")),(0,r.kt)("h3",{id:"si1151---play-with-raspberry-pi"},"SI1151 - Play with Raspberry Pi"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi 4 Model B"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Base Hat for Raspberry Pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove - Sunlight Sensor"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/raspberry_pi.png"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/hat.png"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/sunlight_sensor.png"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi.html"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html"},"Get One Now"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connecting hardware")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/connection_2.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove - Sunlight Sensor to port ",(0,r.kt)("strong",{parentName:"p"},"I2C")," of Grove - Base Hat for Raspberry Pi, Plugged into Raspberry Pi 4 Model B. And then connect the Raspberry Pi 4 Model B with a PC."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 2.")," After accessing the system of Raspberry Pi, git clone ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/Seeed-Studio/Grove_Sunlight_Sensor/tree/Si1151"},"Grove_Sunlight_Sensor library"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"git clone git clone git@github.com:Seeed-Studio/Grove_Sunlight_Sensor.git -b Si1151 Si1151_library\n")),(0,r.kt)("p",null,"Before running the demo code, you must check the corresponding i2c number of the board:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"ls /dev/i2c*\n")),(0,r.kt)("p",null,"If the i2c device works properly, there will be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"/dev/i2c-1\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"If NOT"),", use the command ",(0,r.kt)("strong",{parentName:"p"},"sudo raspi-config")," and reboot to enable the i2c device:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/1.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/2.png"})),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/3.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Run the demo by the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"cd Seeed_Python_SI114X-Si115x\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},"python3 seeed_si115x.py\n")),(0,r.kt)("admonition",{title:"success",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The outcome will display as following if everything goes well:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Raspberry-Pi-4/img/Sunlighttu.png"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visible")," refers to ",(0,r.kt)("strong",{parentName:"p"},"visible light of Ambient")," and ",(0,r.kt)("strong",{parentName:"p"},"UV")," refers to ",(0,r.kt)("strong",{parentName:"p"},"Ultraviolet (UV) Index")," while ",(0,r.kt)("strong",{parentName:"p"},"IR")," means ",(0,r.kt)("strong",{parentName:"p"},"infrared light of Ambient"),".\n:::"),(0,r.kt)("h2",{id:"references"},"References"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Spectrum")),(0,r.kt)("p",null,"The content of this chapter is got from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Spectrum"},(0,r.kt)("strong",{parentName:"a"},"Wikipedia - Spectrum")),", click to view the original page."),(0,r.kt)("p",null,"A spectrum (plural spectra or spectrums","[1]",") is a condition that is not limited to a specific set of values but can vary infinitely within a continuum. The word was first used scientifically within the field of optics to describe the rainbow of colors in visible light when separated using a prism. As scientific understanding of light advanced, it came to apply to the entire electromagnetic spectrum."),(0,r.kt)("p",null,"Spectrum has since been applied by analogy to topics outside of optics. Thus, one might talk about the spectrum of political opinion, or the spectrum of activity of a drug, or the autism spectrum. In these uses, values within a spectrum may not be associated with precisely quantifiable numbers or definitions. Such uses imply a broad range of conditions or behaviors grouped together and studied under a single title for ease of discussion."),(0,r.kt)("p",null,"In most modern usages of spectrum there is a unifying theme between extremes at either end. Some older usages of the word did not have a unifying theme, but they led to modern ones through a sequence of events set out below. Modern usages in mathematics did evolve from a unifying theme, but this may be difficult to recognize."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/Grove_sunlight_spectrum.jpg"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Lumen")),(0,r.kt)("p",null,"The content of this chapter is got from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lumen_(unit)"},(0,r.kt)("strong",{parentName:"a"},"Wikipedia - Lumen (unit)")),", click to view the original page."),(0,r.kt)("p",null,'The lumen (symbol: lm) is the SI derived unit of luminous flux, a measure of the total "amount" of visible light emitted by a source. Luminous flux differs from power (radiant flux) in that luminous flux measurements reflect the varying sensitivity of the human eye to different wavelengths of light, while radiant flux measurements indicate the total power of all electromagnetic waves emitted, independent of the eye\'s ability to perceive it. Lumens are related to lux in that one lux is one lumen per square meter.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Ultraviolet index")),(0,r.kt)("p",null,"The content of this chapter is got from ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Ultraviolet_index"},(0,r.kt)("strong",{parentName:"a"},"Wikipedia - Ultraviolet index")),", click to view the original page."),(0,r.kt)("p",null,"The ultraviolet index or UV Index is an international standard measurement of the strength of sunburn-producing ultraviolet (UV) radiation at a particular place and time. The scale was developed by Canadian scientists in 1992, then adopted and standardized by the UN's World Health Organization and World Meteorological Organization in 1994. It is primarily used in daily forecasts aimed at the general public, and is increasingly available as an hourly forecast as well."),(0,r.kt)("p",null,"The UV Index is designed as an open-ended linear scale, directly proportional to the intensity of UV radiation that causes sunburn on human skin. For example, if a light-skinned individual (without sunscreen or a suntan) begins to sunburn in 30 minutes at UV Index 6, then that individual should expect to sunburn in about 15 minutes at UV Index 12 \u2013 twice the UV, twice as fast."),(0,r.kt)("p",null,"The purpose of the UV Index is to help people effectively protect themselves from UV radiation, which has health benefits in moderation but in excess causes sunburn, skin aging, DNA damage, skin cancer, immunosuppression,","[1]"," and eye damage such as cataracts (see the section Human health-related effects of ultraviolet radiation). Public health organizations recommend that people protect themselves (for example, by applying sunscreen to the skin and wearing a hat and sunglasses) if they spend substantial time outdoors when the UV Index is 3 or higher; see the table below for more-detailed recommendations."),(0,r.kt)("p",null,"When the day's predicted UV Index is within various numerical ranges, the recommendations for protection are as follows:"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/img/uv%20index.png"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cautionary notes")),(0,r.kt)("p",null,"When interpreting the UV Index and recommendations, be aware that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The intensity of UV radiation reaching the surface of the earth depends on the angle of the sun in the sky. Each day, the sun achieves its highest angle (highest intensity, shortest shadows) at solar noon, which only approximately corresponds to 12:00 on clocks. This is because of the differences between solar time and local time in a given time zone. In general, UV risk is high when the sun is directly enough overhead that people's shadows are shorter than their height."),(0,r.kt)("li",{parentName:"ul"},"Likewise, UV intensity can be higher or lower for surfaces at different angles to the horizontal. For example, if people are walking or standing outdoors, UV exposure to the eyes and vertical surfaces of skin, such as the face, can actually be more severe when the sun is lower, such as the end of a summer's day, or winter afternoons on a ski trail. This is partly a consequence of the fact that the measurement equipment upon which the index is based is a flat horizontal surface.\nUV intensity can nearly double with reflection from snow or other bright surfaces like water, sand, or concrete."),(0,r.kt)("li",{parentName:"ul"},"The recommendations given are for average adults with lightly tan skin. Those with darker skin are more likely to withstand greater sun exposure, while extra precautions are needed for children, seniors, particularly fair-skinned adults, and those who have greater sun sensitivity for medical reasons or from UV exposure in previous days. (The skin's recovery from UV radiation generally takes two days or more to run its course.)"),(0,r.kt)("li",{parentName:"ul"},"Because of the way the UV Index is calculated, it technically expresses the risk of developing sunburn, which is caused mostly by UVB radiation. However, UVA radiation also causes damage (photoaging, melanoma). Under some conditions, including most tanning beds, the UVA level may be disproportionately higher than described by the UV Index. The use of broad-spectrum (UVA/UVB) sunscreen can help address this concern.")),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0.pdf"},"Schematic in PDF")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Grove_-_Sunlight_Sensor_v1.0_SCH%26PCB%26PDF.zip"},"Schematic in Eagle File")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/Si1145-46-47.pdf"},"Si1145 datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_Sunlight_Sensor"},"Github Repositoriy for Grove - Sunlight Sensor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Spectrum"},"Spectrum")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Lumen_(unit)"},"Lumen (unit)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Ultraviolet_index"},"Ultraviolet index")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/Grove-SunlightSensorv2.0.zip"},"Grove - Sunlight Sensor v2.0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Sunlight_Sensor/res/v2.0/SI1151-AB00-GMR.pdf"},"SI1151-AB00-GMR Datasheet"))),(0,r.kt)("h2",{id:"project"},"Project"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Environment Cube! Know the Land Beneath You!")," A cube with all the necessary sensors, suitable for a wide range of applications like agriculture. Know the land beneath you!"),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed",width:"350"}),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
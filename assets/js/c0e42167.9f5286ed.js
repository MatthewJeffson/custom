"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[27134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||a;return r?o.createElement(m,i(i({ref:t},p),{},{components:r})):o.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var d=2;d<a;d++)i[d]=r[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={description:"Grove - I2C Color Sensor",title:"Grove - I2C Color Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-I2C_Color_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Grove-I2C_Color_Sensor",id:"Sensor/Grove/Grove_Sensors/Light/Grove-I2C_Color_Sensor",title:"Grove - I2C Color Sensor",description:"Grove - I2C Color Sensor",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Grove-I2C_Color_Sensor.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Grove-I2C_Color_Sensor",permalink:"/custom/Grove-I2C_Color_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Grove-I2C_Color_Sensor.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - I2C Color Sensor",title:"Grove - I2C Color Sensor",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-I2C_Color_Sensor",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove - Infrared Reflective Sensor",permalink:"/custom/Grove-Infrared_Reflective_Sensor"},next:{title:"Sensor - Biomedicine(introduction)",permalink:"/custom/Sensor_biomedicine"}},s={},d=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Connections",id:"hardware-connections",level:3},{value:"Software Installation",id:"software-installation",level:2},{value:"Demos",id:"demos",level:2},{value:"Color Sensor Library",id:"color-sensor-library",level:3},{value:"Setup",id:"setup",level:4},{value:"Description of function",id:"description-of-function",level:4},{value:"Read RGB data through the library function",id:"read-rgb-data-through-the-library-function",level:5},{value:"Color Sensor Examples/Applications",id:"color-sensor-examplesapplications",level:3},{value:"Other Reference",id:"other-reference",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Grove-I2C-Color-Sensor.jpg"})),(0,n.kt)("p",null,"This module is based on the color sensor TCS3414CS with digital output I2C. Based on the 8","*","2 array of filtered photodiodes and 16-bit analog-to-digital converters, you can measure the color chromaticity of ambient light or the color of objects. Of the 16 photodiodes, 4 have red filters, 4 have green filters, 4 have blue filters and 4 have no filter(clear). With the synchronization input pin, an external pulsed light source can provide precise synchronous conversion control."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note that the latest version V2.0 has replaced the IC with TCS3472 and the old library has also been updated, If you are using the V2.0 version, please use the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472"},"new library"),".")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Grove compatible interface"),(0,n.kt)("li",{parentName:"ul"},"16-Bit digital output with I2C"),(0,n.kt)("li",{parentName:"ul"},"SYNC Input Synchronizes Integration Cycle to Modulated Light Sources"),(0,n.kt)("li",{parentName:"ul"},"Operating temperature range -40\xb0C to 85\xb0C"),(0,n.kt)("li",{parentName:"ul"},"Programmable interrupt function with User-Defined Upper and lower threshold settings"),(0,n.kt)("li",{parentName:"ul"},"RoHS Compliant")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"More details about Grove modules please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove_System/"},"Grove System"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Value/Range"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"PCB Size"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0 cm ","*"," 4.0 cm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"2.0mm pitch pin header")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"VCC"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3 - 6.0 V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C Speed"),(0,n.kt)("td",{parentName:"tr",align:null},"400 kHz")))),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg"})))))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.")),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Following documents help in getting the user started with Grove."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/document/pdf/Preface.pdf"},"Preface - Getting Started")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/document/pdf/Introduction%20to%20Grove.pdf"},"to Grove"))),(0,n.kt)("h3",{id:"hardware-connections"},"Hardware Connections"),(0,n.kt)("p",null,"Grove products have an eco system and all have the same connector which can plug onto the Grove Base Shield. Connect this module to the I2C port of Base Shield. However, you can also connect Grove - I2C Color Sensor to Arduino without Base Shield by jumper wires."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino UNO"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove - I2C Color Sensor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5V"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"GND")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SDA"),(0,n.kt)("td",{parentName:"tr",align:null},"SDA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SCL"),(0,n.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,n.kt)("h2",{id:"software-installation"},"Software Installation"),(0,n.kt)("p",null,"Download Arduino and install Arduino driver"),(0,n.kt)("p",null,"Getting Started with Seeeduino/Arduino"),(0,n.kt)("h2",{id:"demos"},"Demos"),(0,n.kt)("p",null,"This module can be used to detect the color of light source or the color of objects. When used to detect the color of the light source, the led switch should be turned off, and the light source should shine the sensor directly. When used to detect the color of things, the led should be on and you should put the object on the top of the enclosure closely. The theory of sensing the color of objects is Reflective Sensing Theory. Like the picture below."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Reflcect.jpg"})),(0,n.kt)("h3",{id:"color-sensor-library"},"Color Sensor Library"),(0,n.kt)("p",null,"We have created a library to help you start playing quickly with the Seeeduino/Arduino, in this section we'll show you how to set up the library."),(0,n.kt)("h4",{id:"setup"},"Setup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Download the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor"},"library code as a zip file")," from the Grove_I2C_Color_Sensor github page. If you are using the latest version V2.0(IC is TCS3472 ), please use this ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472"},"new library")),(0,n.kt)("li",{parentName:"ol"},"Unzip the downloaded file into your \u2026/arduino/libraries."),(0,n.kt)("li",{parentName:"ol"},'Rename the unzipped folder "Color_Sensor"'),(0,n.kt)("li",{parentName:"ol"},"Start the Arduino IDE (or restart if it is open).")),(0,n.kt)("h4",{id:"description-of-function"},"Description of function"),(0,n.kt)("p",null,"This is the most important/useful function in the library, we invite you to look at the .h and .cpp files yourself to see all the functions available."),(0,n.kt)("h5",{id:"read-rgb-data-through-the-library-function"},"Read RGB data through the library function"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"readRGB(int ","*","red, int ","*","green, int ","*","blue)")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"red:")," The variable address to save R."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"green:")," The variable address to save G."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"blue:")," The variable address to save B.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'void loop()\n{\n    int red, green, blue;\n    GroveColorSensor colorSensor;\n    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.\n    while(1)\n    {\n        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.\n        delay(300);\n        Serial.print("The RGB value are: RGB( ");\n        Serial.print(red,DEC);\n        Serial.print(", ");\n        Serial.print(green,DEC);\n        Serial.print(", ");\n        Serial.print(blue,DEC);\n        Serial.println(" )");\n        colorSensor.clearInterrupt();\n    }\n}\n')),(0,n.kt)("h3",{id:"color-sensor-examplesapplications"},"Color Sensor Examples/Applications"),(0,n.kt)("p",null,"This example shows how to use features of Grove - I2C Color Sensor and display the detected color with a ",(0,n.kt)("a",{parentName:"p",href:"/Grove-Chainable_RGB_LED/"},"Chainable RGB LED Grove"),"."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you haven't downloaded  ",(0,n.kt)("a",{href:"https://github.com/Seeed-Studio/Grove_Chainable_RGB_LED"},"Grove-Chainable RGB LED library")," to your Arduino IDE before, please download and set up the library first.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open File->Examples->Color_Sensor->example->ColorSensorWithRGB-LED sketch for a complete example, or copy and paste code below to a new Arduino sketch.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Description"),": This example can measure the color chromaticity of ambient light or the color of objects, and via Chainable RGB LED Grove, display the detected color."),(0,n.kt)("p",null,"You also can use other display modules to display the detected color by Grove - I2C Color Sensor."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'#include <Wire.h>\n#include <GroveColorSensor.h>\n#include <ChainableLED.h>\n\xa0\n#define CLK_PIN   7\n#define DATA_PIN  8\n#define NUM_LEDS  1            //The number of Chainable RGB LED\n\xa0\nChainableLED leds(CLK_PIN, DATA_PIN, NUM_LEDS);\n\xa0\nvoid setup()\n{\n    Serial.begin(9600);\n    Wire.begin();\n}\n\xa0\nvoid loop()\n{\n    int red, green, blue;\n    GroveColorSensor colorSensor;\n    colorSensor.ledStatus = 1;            // When turn on the color sensor LED, ledStatus = 1; When turn off the color sensor LED, ledStatus = 0.\n    while(1)\n    {\n        colorSensor.readRGB(&red, &green, &blue);    //Read RGB values to variables.\n        delay(300);\n        Serial.print("The RGB value are: RGB( ");\n        Serial.print(red,DEC);\n        Serial.print(", ");\n        Serial.print(green,DEC);\n        Serial.print(", ");\n        Serial.print(blue,DEC);\n        Serial.println(" )");\n        colorSensor.clearInterrupt();\n        for(int i = 0; i<NUM_LEDS; i++)\n        {\n            leds.setColorRGB(i, red, green, blue);\n        }\n    }\n}\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Upload the code to the development board."),(0,n.kt)("li",{parentName:"ul"},"Then Grove_-_Chainable_RGB_LED would display the color which is detected.")),(0,n.kt)("h2",{id:"other-reference"},"Other Reference"),(0,n.kt)("p",null,"This module is based on the color sensor TCS3414CS. The TCS3414CS digital color sensor returns data from four channels: red(R), green(G), blue(B) and clear(C)(non-filtered). The response from the red, green and blue channels (RGB) can be used to determine a particular source\u2019s chromaticity coordinates (x, y). These standards are set by the Commission Internationale de l\u2019Eclairage (CIE). The CIE is the main international organization concerned with color and color measurement.In order to acquire the color of a given object using TCS3414CS, we must first map the sensor response (RGB) to the CIE tristimulus values (XYZ). It is then necessary to calculate the chromaticity coordinates (x, y)."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Coordinates_transform.png"})),(0,n.kt)("p",null,"Chromaticity Calculation Process Overview"),(0,n.kt)("p",null,"The equations to do the transformation:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Equations.png"})),(0,n.kt)("p",null,"Transformation Equations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When we get coordinates (x, y), please reference the below figure so as to get the recommended color.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Chromaticity_Diagram.jpg"})),(0,n.kt)("h2",{id:"faqs"},"FAQs"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Q1: How to understand the commands? For example, REG_GREEN_LOW = 0xD0")),(0,n.kt)("p",null,"A1: From the attached picture, you can see what's in the command. When using byte protocol command, it must be like 0x80+ADDRESS. For example, REG_TIMING( 01h ) = 0x81\nFor byte and block read, the command should be 0xC0+ADDRESS, REG_GREEN_LOW( 10h ) = 0xD0."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/img/Color%20sensor%20register.png"})),(0,n.kt)("h1",{id:"grove-i2c-color-sensor-eagle-file-v12"},"Grove-I2C Color Sensor Eagle File V1.2"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"grove-i2c-color-sensor-eagle-file-v20"},"Grove-I2C Color Sensor Eagle File V2.0"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h1",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor"},"Library for Grove - I2C Color Sensor V1.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Library]"),(0,n.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_I2C_Color_Sensor_TCS3472"},"Library for Grove - I2C Color Sensor V2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove-I2C%20Color%20Sensor%20Eagle%20File%20V1.2.zip"},"Grove-I2C Color Sensor Eagle File V1.2")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/Grove%20I2C%20Color%20Sensor%20v2.0.zip"},"Grove-I2C Color Sensor Eagle File V2.0")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3404_TCS3414-A.pdf"},"TCS3414-A Datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-I2C_Color_Sensor/res/TCS3472%20Datasheet.pdf"},"TCS3472 Datasheet"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,n.kt)("p",null,"With the SenseCAP ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,n.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,n.kt)("div",{align:"center"},(0,n.kt)("a",{href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP",target:"_blank"},(0,n.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/K1100_overview/sensecap.png"}))))}c.isMDXComponent=!0}}]);
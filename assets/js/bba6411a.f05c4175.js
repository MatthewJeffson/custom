"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[84612],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),p=d(n),g=i,m=p["".concat(s,".").concat(g)]||p[g]||c[g]||l;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},25007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={description:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",title:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-Pin-Multiplexing",last_update:{date:"1/11/2023",author:"shuxu hu"}},o="Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",r={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-Pin-Multiplexing",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-Pin-Multiplexing",title:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",description:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-Pin-Multiplexing.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense",slug:"/XIAO-BLE-Sense-Pin-Multiplexing",permalink:"/custom/XIAO-BLE-Sense-Pin-Multiplexing",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/XIAO-BLE-Sense-Pin-Multiplexing.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",title:"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-Pin-Multiplexing",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"PDM Microphone Usage on Seeed Studio XIAO nRF52840 Sense",permalink:"/custom/XIAO-BLE-Sense-PDM-Usage"},next:{title:"The QSPI Flash Usage on Seeed Studio XIAO nRF52840 Sense",permalink:"/custom/xiao-ble-qspi-flash-usage"}},s={},d=[{value:"Digital",id:"digital",level:2},{value:"Digital as PWM",id:"digital-as-pwm",level:2},{value:"Analog",id:"analog",level:2},{value:"Serial",id:"serial",level:2},{value:"I2C",id:"i2c",level:2},{value:"SPI",id:"spi",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"pin-multiplexing-on-seeed-studio-xiao-nrf52840-sense"},"Pin Multiplexing on Seeed Studio XIAO nRF52840 (Sense)"),(0,i.kt)("p",null,"Seeed Studio XIAO nRF52840 (Sense) has rich interfaces. There are ",(0,i.kt)("strong",{parentName:"p"},"11 digital I/O")," that can be used as ",(0,i.kt)("strong",{parentName:"p"},"PWM pins")," and ",(0,i.kt)("strong",{parentName:"p"},"6 analog inputs")," that can be used as ",(0,i.kt)("strong",{parentName:"p"},"ADC pins"),". It supports all three common serial communication interfaces such as ",(0,i.kt)("strong",{parentName:"p"},"UART, I2C, and SPI"),". This wiki will be helpful to learn about these interfaces and implement them in your next projects!"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The basic functions here perform both well for both Seeed Studio XIAO nRF52840 Arduino libraries.")),(0,i.kt)("h2",{id:"digital"},"Digital"),(0,i.kt)("p",null,"Connect a pushbutton to Pin D6 and an LED to Pin D10. Then upload the following code to control the ON/OFF of LED using the pushbutton."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"const int buttonPin = 6;     // pushbutton connected to digital pin 6\nconst int ledPin =  10;      // LED connected to digital pin 10\n \nint buttonState = 0;         // variable for reading the pushbutton status\n \nvoid setup() {\n  // initialize the LED pin as an output:\n  pinMode(ledPin, OUTPUT);\n  // initialize the pushbutton pin as an input:\n  pinMode(buttonPin, INPUT);\n}\n \nvoid loop() {\n  // read the state of the pushbutton value:\n  buttonState = digitalRead(buttonPin);\n \n  // check if the pushbutton is pressed. If it is, the buttonState is HIGH:\n  if (buttonState == HIGH) {\n    // turn LED off:\n    digitalWrite(ledPin, HIGH);\n  } else {\n    // turn LED on:\n    digitalWrite(ledPin, LOW);\n  }\n}\n")),(0,i.kt)("h2",{id:"digital-as-pwm"},"Digital as PWM"),(0,i.kt)("p",null,"Connect an LED to Pin D10. Then upload the following code to see the LED gradually fading."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int ledPin = 10;    // LED connected to digital pin 10\n\nvoid setup() {\n\n}\n\nvoid loop() {\n  // fade in from min to max in increments of 5 points:\n  for (int fadeValue = 0 ; fadeValue <= 255; fadeValue += 5) {\n    // sets the value (range from 0 to 255):\n    analogWrite(ledPin, fadeValue);\n    // wait for 30 milliseconds to see the dimming effect\n    delay(30);\n  }\n\n  // fade out from max to min in increments of 5 points:\n  for (int fadeValue = 255 ; fadeValue >= 0; fadeValue -= 5) {\n    // sets the value (range from 0 to 255):\n    analogWrite(ledPin, fadeValue);\n    // wait for 30 milliseconds to see the dimming effect\n    delay(30);\n  }\n}\n")),(0,i.kt)("h2",{id:"analog"},"Analog"),(0,i.kt)("p",null,"Connect a potentiometer to Pin A5 and an LED to Pin D10. Then upload the following code to control the blinking interval of the LED by rotating the potentiometer knob."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"const int sensorPin = 5;\nconst int ledPin =  10; \nvoid setup() {\n  // declare the ledPin as an OUTPUT:\n  pinMode(sensorPin, INPUT);\n  pinMode(ledPin, OUTPUT);\n}\n \nvoid loop() {\n  // read the value from the sensor:\n  int sensorValue = analogRead(sensorPin);\n  // turn the ledPin on\n  digitalWrite(ledPin, HIGH);\n  // stop the program for <sensorValue> milliseconds:\n  delay(sensorValue);\n  // turn the ledPin off:\n  digitalWrite(ledPin, LOW);\n  // stop the program for for <sensorValue> milliseconds:\n  delay(sensorValue);\n}\n")),(0,i.kt)("h2",{id:"serial"},"Serial"),(0,i.kt)("p",null,'Use pin D6 as the TX pin of UART and pin D7 as RX pin of UART to send the "Hello World!" message'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'void setup() {\n    Serial.begin(115200);\n    while (!Serial);\n}\n \nvoid loop() {\n    Serial.println("Hello World!");\n    delay(1000);\n}\n')),(0,i.kt)("h2",{id:"i2c"},"I2C"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Connect a ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"},"Grove - OLED Display 1.12 (SH1107) V3.0")," to the Seeed Studio XIAO nRF52840 (Sense) by following the hardware connection as follows.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Grove - OLED Display 1.12 (SH1107)"),(0,i.kt)("th",{parentName:"tr",align:null},"Seeed Studio XIAO nRF52840 (Sense)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VCC"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SDA"),(0,i.kt)("td",{parentName:"tr",align:null},"SDA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"SCL")))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-I2C-2.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Open Arduino IDE, navigate to ",(0,i.kt)("inlineCode",{parentName:"p"},"Sketch > Include Library > Manage Libraries..."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Search for ",(0,i.kt)("strong",{parentName:"p"},"u8g2")," and install it"))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/u8g2-install.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Upload the following code to display text strings on the OLED Display")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <U8g2lib.h>\n#include <SPI.h>\n#include <Wire.h>\n \nU8G2_SH1107_SEEED_128X128_1_SW_I2C u8g2(U8G2_R0, /* clock=*/ SCL, /* data=*/ SDA, /* reset=*/ U8X8_PIN_NONE);\n \nvoid setup(void) {\n  u8g2.begin();\n}\n \nvoid loop(void) {\n  u8g2.firstPage();\n \n  do {\n    u8g2.setFont(u8g2_font_luBIS08_tf);\n    u8g2.drawStr(0,24,"Hello Seeed!");\n  } while ( u8g2.nextPage() );\n}\n')),(0,i.kt)("h2",{id:"spi"},"SPI"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Connect a ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-OLED-Display-1-12-SH1107-V3-0-p-5011.html"},"Grove - OLED Display 1.12 (SH1107) V3.0")," to the Seeed Studio XIAO nRF52840 (Sense) by following the hardware connection as follows.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Grove - OLED Display 1.12 (SH1107)"),(0,i.kt)("th",{parentName:"tr",align:null},"Seeed Studio XIAO nRF52840 (Sense)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"5V"),(0,i.kt)("td",{parentName:"tr",align:null},"5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SCL"),(0,i.kt)("td",{parentName:"tr",align:null},"SCK")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SI"),(0,i.kt)("td",{parentName:"tr",align:null},"MOSI")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RES"),(0,i.kt)("td",{parentName:"tr",align:null},"D3")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"D/C"),(0,i.kt)("td",{parentName:"tr",align:null},"D4")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"CS"),(0,i.kt)("td",{parentName:"tr",align:null},"D5")))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/XIAO-BLE/OLED-SPI.png",alt:"pir",width:1e3,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," This OLED display supports both I2C and SPI communication, and the default model is I2C. To use SPI mode, you need to refer ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove-OLED-Display-1.12-SH1107_V3.0/#software-i2c"},"Grove - OLED Display 1.12 (SH1107) V3.0 wiki")," to change the OLED display communication to SPI before proceeding further")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Make sure U8g2 library is installed from the previous steps."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Upload the following code to display text strings on the OLED Display")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Arduino.h>\n#include <U8g2lib.h>\n#include <SPI.h>\n#include <Wire.h>\n \nU8G2_SH1107_128X128_1_4W_HW_SPI u8g2(U8G2_R3, /* cs=*/ 5, /* dc=*/ 4, /* reset=*/ 3);\n \nvoid setup(void) {\n  u8g2.begin();\n}\n \nvoid loop(void) {\n  u8g2.firstPage();\n \n  do {\n    u8g2.setFont(u8g2_font_luBIS08_tf);\n    u8g2.drawStr(0,24,"Hello Seeed!");\n  } while ( u8g2.nextPage() );\n}\n')))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[54896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.createContext({}),p=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||a;return n?l.createElement(m,i(i({ref:t},u),{},{components:n})):l.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=k;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<a;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},23951:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var l=n(87462),r=(n(67294),n(3905));const a={description:"Grove Serial LCD V1.0",title:"Grove Serial LCD V1.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Serial_LCD_V1.0",last_update:{date:"1/29/2023",author:"jianjing Huang"}},i=void 0,o={unversionedId:"Sensor/Grove/Grove_Accessories/Display/Grove-Serial_LCD_V1.0",id:"Sensor/Grove/Grove_Accessories/Display/Grove-Serial_LCD_V1.0",title:"Grove Serial LCD V1.0",description:"Grove Serial LCD V1.0",source:"@site/docs/Sensor/Grove/Grove_Accessories/Display/Grove-Serial_LCD_V1.0.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Display",slug:"/Grove-Serial_LCD_V1.0",permalink:"/Grove-Serial_LCD_V1.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Display/Grove-Serial_LCD_V1.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1674921600,formattedLastUpdatedAt:"Jan 28, 2023",frontMatter:{description:"Grove Serial LCD V1.0",title:"Grove Serial LCD V1.0",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Serial_LCD_V1.0",last_update:{date:"1/29/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:'Grove - Triple Color E-Ink Display 1.54"',permalink:"/Grove-Triple_Color_E-Ink_Display_1_54"},next:{title:"Grove BlinkM",permalink:"/Grove-BlinkM"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Specification",id:"specification",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Programming",id:"programming",level:3},{value:"Demonstration  Applications",id:"demonstration--applications",level:3},{value:"Reference",id:"reference",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/Lcdnew1.jpg",alt:null})),(0,r.kt)("p",null,"Grove - Serial LCD V1.0 is the new version of our serial LCDs. Attached on a single board is a 16x2 LCD and an embedded circuit based around a PIC HD44780. The on-board PIC takes a TTL serial input and prints the characters it receives onto the LCD. The library also allows for a number of special commands so you can clear the screen, adjust the backlight brightness, turn the display on/off, and more."),(0,r.kt)("p",null,"This LCD makes for a great gift, because it can be used for so many different projects!"),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Very easy to use.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"baudrate:9600")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"4-Pin Connection ( 2 I/Os and 2 Power Pins) .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"API design similar to Arduino LiquidCrystal Library.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Module automatically returns to listening mode.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Comes with a rich set of demo applications.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Back light control to save power."))),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"LCD display for Seeeduino / Arduino / any microcontroller board.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Time and Temperature Displays with a RTC and Temperature Sensor.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Acceleration display with an Accelerometer.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Heading Angle display with a Compass.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Your imagination is the limit.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PC CPU Vital Status display: Can be interfaced to PC with a suitable UART Trans-receiver."))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Item"),(0,r.kt)("th",{parentName:"tr",align:null},"Min"),(0,r.kt)("th",{parentName:"tr",align:null},"Typ"),(0,r.kt)("th",{parentName:"tr",align:null},"Maxi"),(0,r.kt)("th",{parentName:"tr",align:null},"Unit"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operation voltage"),(0,r.kt)("td",{parentName:"tr",align:null},"4.7"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"5.5"),(0,r.kt)("td",{parentName:"tr",align:null},"V")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Communication Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"UART"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backlight Control"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working Current:Backlight ON"),(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"75"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Working Current:Backlight OFF"),(0,r.kt)("td",{parentName:"tr",align:null},"15"),(0,r.kt)("td",{parentName:"tr",align:null},"20"),(0,r.kt)("td",{parentName:"tr",align:null},"25"),(0,r.kt)("td",{parentName:"tr",align:null},"mA")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ensure ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_V2.2/"},"Seeeduino"),"  operating voltage is set to 5V")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect the Serial LCD  to ",(0,r.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_V2.2/"},"Seeeduino")," (title=undefined) Software UART(Pin 11, Pin12) through the ",(0,r.kt)("strong",{parentName:"p"},"Grove Base board")," terminal using the 4 pin connector.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Press Reset Switch after uploading the firmware to Seeeduino."))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD010.jpg",alt:null})),(0,r.kt)("h3",{id:"programming"},"Programming"),(0,r.kt)("p",null,"Serial LCD library provides a rich set of APIs to interact with Serial LCD Module. All operations that could be performed with normal LCDs could be achieved by sending commands and data serially. The APIs are designed similar to LiquidCrystal library of Arduino, for instant migration to Serial LCD driver. Interaction with Serial LCD module begins with initialization,wherein the Serial LCD module sends instruction to the MCU to begin communication. After intitialization, the LCD gets into Working mode, where it starts accepting commands and data for display. The commands and responses involved in the interaction are summarized at ","[1]"),(0,r.kt)("h3",{id:"demonstration--applications"},"Demonstration  Applications"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/SerialLCD_Library.zip"},"SerialLCD Library")," and Unzip it into the libraries file of Arduino IDE by the path: ..\\arduino-1.0.1\\libraries, then you can play with your own display system."),(0,r.kt)("p",null,"If you have Arduino 1.0 or later, NewSoftSerial is included in the Arduino core (named SoftwareSerial).\nNote\uff1aWhen you have connected Serial LCD to Grove and downloaded the example to the Seeeduino/arduino, make sure you reset the Seeeduino/arduino first."),(0,r.kt)("p",null,"Demo 1: Hello World"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'This sketch prints "hello, world!" on the first row and time in seconds, elapsed from RESET on second row. This uses begin(),\nsetCursor(row,col) and print() functions.\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// include the library code:\n#include <SerialLCD.h>\n#include <NewSoftSerial.h> //this is a must\n\n// initialize the library\nSerialLCD slcd(11,12);//this is a must, assign soft serial pins\n\nvoid setup() {\n  // set up\n  slcd.begin();\n  // Print a message to the LCD.\n  slcd.print("hello, world!");\n}\n\nvoid loop() {\n  // set the cursor to column 0, line 1\n  // (note: line 1 is the second row, since counting begins with 0):\n  slcd.setCursor(0, 1);\n  // print the number of seconds since reset:\n  slcd.print(millis()/1000,DEC);\n}\n')),(0,r.kt)("p",null,"OUTPUT:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_helloworld_example.gif",alt:null})),(0,r.kt)("p",null,"Demo 2: Intermittently display"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'This sketch prints "hello World!" to the LCD and uses the display() and noDisplay() functions to switch on and off the display.\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// include the library code:\n#include <SerialLCD.h>\n#include <NewSoftSerial.h> //this is a must\n\n// initialize the library\nSerialLCD slcd(11,12);//this is a must, assign soft serial pins\n\nvoid setup() {\n  // set up\n  slcd.begin();\n  // Print a message to the LCD.\n  slcd.print("hello, world!");\n}\n\nvoid loop() {\n  // Turn off the display:\n  slcd.noDisplay();\n  delay(1000);\n   // Turn on the display:\n  slcd.display();\n  delay(1000);\n}\n')),(0,r.kt)("p",null,"OUTPUT:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_display_example.gif",alt:null})),(0,r.kt)("p",null,"Demo 3:  Blink"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'This sketch prints "hello World!" to the LCD and makes the cursor block blink with Blink() and noBlink() functions.\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// include the library code:\n#include <SerialLCD.h>\n#include <NewSoftSerial.h> //this is a must\n\n// initialize the library\nSerialLCD slcd(11,12);//this is a must, assign soft serial pins\n\nvoid setup() {\n  // set up :\n  slcd.begin();\n  // Print a message to the LCD.\n  slcd.print("hello, world!");\n}\n\nvoid loop() {\n  // Turn off the blinking cursor:\n  slcd.noBlink();\n  delay(1000);\n   // Turn on the blinking cursor:\n  slcd.blink();\n  delay(1000);\n}\n')),(0,r.kt)("p",null,"OUTPUT:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_blink_example.gif",alt:null})),(0,r.kt)("p",null,"Demo 4: Cursor Display"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'This sketch prints "hello World!" to the LCD and uses the cursor() and noCursor() methods to switch on and off the cursor.\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// include the library code:\n#include <SerialLCD.h>\n#include <NewSoftSerial.h> //this is a must\n\n// initialize the library\nSerialLCD slcd(11,12);//this is a must, assign soft serial pins\n\nvoid setup() {\n  // set up\n  slcd.begin();\n  // Print a message to the LCD.\n  slcd.print("hello, world!");\n}\n\nvoid loop() {\n  // Turn off the cursor:\n  slcd.noCursor();\n  delay(1000);\n   // Turn on the cursor:\n  slcd.cursor();\n  delay(1000);\n}\n')),(0,r.kt)("p",null,"OUTPUT:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_cursor_example.gif",alt:null})),(0,r.kt)("p",null,"Demo 5: Display Text Flow Direction and Cursor Position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'This sketch prints "Seeeduino" twice to the LCD. This sketch uses the setCursor(col,row), leftToRight() and rightToLeft() methods\n to demonstrate cursor position and text flow direction (left-to-right and right-to-left).\n\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// include the library code:\n#include <SerialLCD.h>\n#include <NewSoftSerial.h> //this is a must\n\n// initialize the library\nSerialLCD slcd(11,12);//this is a must, assign soft serial pins\n\nvoid setup() {\n  slcd.begin();\n  // Turn on the backlight\n  slcd.backlight();\n  // Switch on the cursor:\n  slcd.cursor();\n}\n\nvoid loop() {\n    //Set cursor at 0th Row, 0th Column (Top-Left Corner of LCD)\n    slcd.setCursor(0,0);\n    //Set the text flow direction left-to-right\n    slcd.leftToRight();\n    slcd.print("Seeeduino");\n\n    //Set cursor at 1st Row, 15th Column (Bottom-Right Corner of LCD)\n    slcd.setCursor(15,1);\n    //Set the text flow direction right-to-left\n    slcd.rightToLeft();\n    slcd.print("Seeeduino");\n\n}\n')),(0,r.kt)("p",null,"OUTPUT:\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/img/SerialLCD_twig_textflow_setcursor_example.jpg",alt:null})),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Serial LCD library")," provides complete set of instruction to exercise the capabilities of ",(0,r.kt)("strong",{parentName:"p"},"LCD1602"),". SerialLCD driver uses ",(0,r.kt)("strong",{parentName:"p"},"NewSoftSerial")," library for implementing the UART logic. The access to the APIs are made by first creating an object of ",(0,r.kt)("strong",{parentName:"p"},"SerialLCD")," class by providing the software serial ports (Rx and Tx):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"SerialLCD slcd(11,12);// Assign 11 and 12 as RxD and TxD lines of Software Serial Port.\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Function Description:"),"\n1.begin()"),(0,r.kt)("p",null,"This function is used for initializing the Serial LCD module."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.begin(); // Intialize LCD\n")),(0,r.kt)("p",null,"2.print()"),(0,r.kt)("p",null,"Prints the text to the LCD. It is of two forms:"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.print(data);  // Data can be any text\nslcd.print(data,BASE); // BASE can be BIN, DEC, OCT or HEX\nslcd.print(float_data,2);//show float data,Decimal digits(1-3)\n")),(0,r.kt)("p",null,"3.clear()"),(0,r.kt)("p",null,"Clears the display."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.clear();  // Clear the Screen\n")),(0,r.kt)("p",null,"4.home()"),(0,r.kt)("p",null,"Sets the cursor to top-left corner."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.home();  // go to home\n")),(0,r.kt)("p",null,"5.noDisplay()"),(0,r.kt)("p",null,"Switch off the display without clearing the RAM."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.noDisplay();  // Blank the Display\n")),(0,r.kt)("p",null,"6.display()"),(0,r.kt)("p",null,"Switch on the display after the noDisplay(). The text existing in the RAM are restored."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.display();  // Display the text in RAM\n")),(0,r.kt)("p",null,"7.noBlink()"),(0,r.kt)("p",null,"Switch off the blinking LCD cursor."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.noBlink();  // Disable cursor blinking\n")),(0,r.kt)("p",null,"8.blink()"),(0,r.kt)("p",null,"Display a blinking LCD cursor. If used with SLCD_CURSOR_ON, the result will be different on different displays."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.blink();  // Enable cursor blinking\n")),(0,r.kt)("p",null,"9.noCursor()"),(0,r.kt)("p",null,"Hide the LCD Cursor."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.noCursor();  // Disable cursor display\n")),(0,r.kt)("p",null,"10.cursor()"),(0,r.kt)("p",null,"Show the LCD Cursor."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.cursor();  // Enable cursor display\n")),(0,r.kt)("p",null,"11.scrollDisplayLeft()"),(0,r.kt)("p",null,"Scroll the contents of the display(text and cursor), one place to the left."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.scrollDisplayLeft();  // Scroll Left\n")),(0,r.kt)("p",null,"12.scrollDisplayRight()"),(0,r.kt)("p",null,"Scroll the contents of the display(text and cursor), one place to the right"),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.scrollDisplayRight();  // Scroll Right\n")),(0,r.kt)("p",null,"13.leftToRight()"),(0,r.kt)("p",null,'Set the direction of text written to the LCD to "left-to-right", the default. This indicates that the subsequent characters written to the display will go from left to right, but does not affect previously-output- text.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.leftToRight();  // Set the text flow direction left to right\n")),(0,r.kt)("p",null,"14.rightToLeft()"),(0,r.kt)("p",null,'Set the direction of text written to the LCD to "right-to-left". This indicates that the subsequent characters written to the display will go from right to left, but does not affect previously output text.'),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"preslcd.rightToLeft();  // Set the text flow direction right to left\n")),(0,r.kt)("p",null,"15.autoscroll()"),(0,r.kt)("p",null,"Switch On automatic scrolling of LCD text. This makes each character on the display push previous characters over by one position.If the current text direction is left-to-right(the default), the display scrolls to the left."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.autoscroll();  // Enable Auto Scroll\n")),(0,r.kt)("p",null,"16.noAutoscroll()"),(0,r.kt)("p",null,"Switch Off automatic scrolling of LCD text."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.noAutoscroll();  // Disable Auto Scroll\n")),(0,r.kt)("p",null,"17.setCursor()"),(0,r.kt)("p",null,"Set the cursor to (Column,Row) position."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.setCursor(Col,Row);  // Scroll to X,Y position\n")),(0,r.kt)("p",null,"18.noPower()"),(0,r.kt)("p",null,"Turn off the LCD power and the backlight, but the MCU power is still on."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.noPower();  // Turn off the LCD power and the backlight\n")),(0,r.kt)("p",null,"19.power()"),(0,r.kt)("p",null,"Turn on the LCD power but not the backlight.  "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.power();  // Turn on the LCD power\n")),(0,r.kt)("p",null,"20.noBacklight()"),(0,r.kt)("p",null,"Turn off the backlight.  "),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.noBacklight();  // Turn off the backlight\n")),(0,r.kt)("p",null,"21.backlight()"),(0,r.kt)("p",null,"Turn on the backlight."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"slcd.backlight();  // Turn on the backlight\n")),(0,r.kt)("p",null,"22.noPower() (new)"),(0,r.kt)("p",null,"Turn off the LCD power and the backlight, but the MCU power is still on."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nslcd.noPower();  // Turn off the LCD power and the backlight\n\n")),(0,r.kt)("p",null,"23.power() (new)"),(0,r.kt)("p",null,"Turn on the LCD power but not the backlight."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nslcd.power();  // Turn on the LCD power\n\n")),(0,r.kt)("p",null,"24.noBacklight() (new)"),(0,r.kt)("p",null,"Turn off the backlight."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nslcd.noBacklight();  // Turn off the backlight\n\n")),(0,r.kt)("p",null,"25.backlight() (new)"),(0,r.kt)("p",null,"Turn on the backlight."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\nslcd.backlight();  // Turn on the backlight\n\n")),(0,r.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Revision"),(0,r.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,r.kt)("th",{parentName:"tr",align:null},"Release"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"v1.0b"),(0,r.kt)("td",{parentName:"tr",align:null},"Second Version"),(0,r.kt)("td",{parentName:"tr",align:null},"20 Mar 2011")))),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/202000309_PCBA-Grove-Serial%20LCD_%E5%8E%9F%E7%90%86%E5%9B%BE.zip"},"Schematic and Board Files")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_LCD_V1.0/res/New_SerialLCD_Library_.zip"},"SerialLCD Library for v1.0b and v1.1b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[repository]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Grove_SerialLCD"},"github repository for SerialLCD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]"),"  ",(0,r.kt)("a",{parentName:"li",href:"http://arduiniana.org/NewSoftSerial/NewSoftSerial10c.zip"},"NewSoftLibrary")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Library]")," ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/ydirson/Wiring/commit/60e58003e8c1dc9be81d0f58b1d0f3ef9fad1446"},"a small fix to v1.0b-Library")," for begin() not following the correct protocol")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,r.kt)("br",null)),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
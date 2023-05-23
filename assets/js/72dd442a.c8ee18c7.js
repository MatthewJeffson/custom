"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[17875],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||a;return n?i.createElement(h,o(o({ref:t},s),{},{components:n})):i.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},75746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={title:"Get Started with Wio RP2040 mini Dev Board",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/",slug:"/Wio_RP2040_mini_Dev_Board-Onboard_Wifi",last_update:{date:"01/11/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio_RP2040_mini_Dev_Board-Onboard_Wifi",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio_RP2040_mini_Dev_Board-Onboard_Wifi",title:"Get Started with Wio RP2040 mini Dev Board",description:"Wio RP2040 mini Dev Board is a development board based on Wio RP2040 module with wireless function, supporting MicroPython programming. It has a dual-core 133MHz RP2040 cits hip, which is a low-power microcontroller with wireless functions. With powerful performance and small size, it is a perfect option for various IOT projects development.",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio_RP2040_mini_Dev_Board-Onboard_Wifi.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board",slug:"/Wio_RP2040_mini_Dev_Board-Onboard_Wifi",permalink:"/custom/Wio_RP2040_mini_Dev_Board-Onboard_Wifi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Wio_RP2040_mini_Dev_Board-Onboard_Wifi.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Get Started with Wio RP2040 mini Dev Board",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/",slug:"/Wio_RP2040_mini_Dev_Board-Onboard_Wifi",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wio RP2040 Module",permalink:"/custom/Wio_RP2040_Module_Build-in_Wireless_2.4G"},next:{title:"Wio RP2040 mini Dev Board with Arduino",permalink:"/custom/Wio-RP2040-with-Arduino-WIFI"}},d={},p=[{value:"Key Features",id:"key-features",level:2},{value:"Specification",id:"specification",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pinout Diagram",id:"pinout-diagram",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:3},{value:"Software",id:"software",level:2},{value:"1. Install Thonny",id:"1-install-thonny",level:4},{value:"2.Connect Wio RP2040 mini Dev Board",id:"2connect-wio-rp2040-mini-dev-board",level:4},{value:"3.Light up the onboard LED light.",id:"3light-up-the-onboard-led-light",level:4},{value:"FAQ",id:"faq",level:2},{value:"1.I need the code to run automatically after startup.",id:"1i-need-the-code-to-run-automatically-after-startup",level:4},{value:"2.After running code with network functions, errors or crashes are reported if I run other programs.",id:"2after-running-code-with-network-functions-errors-or-crashes-are-reported-if-i-run-other-programs",level:4},{value:"Resourses",id:"resourses",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_1.jpg",alt:null})),(0,r.kt)("p",null,"Wio RP2040 mini Dev Board is a development board based on Wio RP2040 module with wireless function, supporting MicroPython programming. It has a dual-core 133MHz RP2040 cits hip, which is a low-power microcontroller with wireless functions. With powerful performance and small size, it is a perfect option for various IOT projects development. "),(0,r.kt)("p",null,'The board has rich interfaces, including 28 GPIO PINs (19 PINs support PIO and PWM), 2 UART, 4 ADC, 2 SPI, 2 I2C. Some pins can be multiplexed, such as GP12 and GP13 with I2C, SPI, UART functions. That\'s why 28 GPIO PINs can achieve more I/O Pins and interfaces. Wio RP2040 mini wireless development board supports a USB Type-C interface, which can supply power and download code. In addition to the onboard power LED light, we also added a  user-controllable LED (it is connected to the GP13 pin). A RESET button (the screen is printed as "RUN" on the board) and a BOOT button (which can be used to re-upload the firmware).'),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null}))),(0,r.kt)("h2",{id:"key-features"},"Key Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Powerful CPU:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dual-core 133MHZ RP2040 processor and 264KB SRAM, 2MB Flash"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Reliable wireless connection:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"using powerful wifi chip, supporting 2.4~2.4835 GHz frequency and Ap&Station mode"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Flexibility:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"compatible with Thonny editor"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Easy project operation:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"breadboard friendly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multiple certifications:")," ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"FCC and CE Certified"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Support programming languages:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MicroPython")))),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Details"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Processors"),(0,r.kt)("td",{parentName:"tr",align:null},"Dual Cortex M0+ processors, up to 133 MHz")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SRAM"),(0,r.kt)("td",{parentName:"tr",align:null},"264KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Flash"),(0,r.kt)("td",{parentName:"tr",align:null},"2MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Wireless connectivity"),(0,r.kt)("td",{parentName:"tr",align:null},"2.4\u301c2.4835 GHz\uff1bIEEE802.11 b/g/n\uff1bAp & Station")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GPIO\uff0cPIO and PWM Pins"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"I2C"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SPI"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UART"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ADC"),(0,r.kt)("td",{parentName:"tr",align:null},"4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power/Download"),(0,r.kt)("td",{parentName:"tr",align:null},"Type-C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Power Supply"),(0,r.kt)("td",{parentName:"tr",align:null},"5V DC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Size"),(0,r.kt)("td",{parentName:"tr",align:null},"25.8 x 45.5mm")))),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_3.png",alt:null})),(0,r.kt)("h2",{id:"pinout-diagram"},"Pinout Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_4.png",alt:null})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    I/O pins: The MCU runs at 3.3V. If the voltage input connected to the general-purpose I/O pin is higher than 3.3V, it may cause damage to the chip. Please pay attention to use, do not lift the shielding cover.\n"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The main control board has built-in MicroPython firmware, so users can directly connect to the Thonny code editor. If your firmware is damaged or you want to replace it with other firmware, you can download ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2"},"firmware-v1.15.1.uf2")," to the computer. Press and hold the BOOT button of the RP2040 main control board and then connect with the USB cable. At this time, the computer will have an extra removable disk, and then drag the firmware you downloaded to the removable disk to complete the firmware update."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_5.png",alt:null})),(0,r.kt)("h3",{id:"hardware-requirements"},"Hardware requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wio RP2040 mini Dev Board x 1"),(0,r.kt)("li",{parentName:"ul"},"Computer x 1"),(0,r.kt)("li",{parentName:"ul"},"USB Type-C cable x 1")),(0,r.kt)("p",null,"Connect the Wio RP2040 mini Dev Board to the computer via the USB cable, and the red LED power indicator on the board should light up."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Firmware version"),(0,r.kt)("th",{parentName:"tr",align:null},"Update Log"),(0,r.kt)("th",{parentName:"tr",align:null},"Download"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1.15.1"),(0,r.kt)("td",{parentName:"tr",align:null},"The first official version"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/firmware-v1.15.1.uf2"},"firmware-v1.15.1.uf2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1.15.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Fix the stability of the Socket and add up the error message of connection failure"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/v1.15.2.uf2"},"firmware-v1.15.2.uf2"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"V1.15.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Rename the original function 'wait_msg()' to 'check_msg()' function, and add new 'wait_msg()' function.The main difference between them is that original 'wait_msg' function will block the program from executing when it hasn\u2019t 'waite' for the data. And yet the 'check_msg()' function will only detect whether the data is received. When it does, it will execute the callback, and if it doesn't,the program will still continue to execute."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/1.15.3.uf2"},"firmware-v1.15.3.uf2"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"   The firmware version used in the wiki tutorial is V1.15.1.\n   If you use a new version of the firmware, please refer to the firmware update log to modify the sample code.\n"))),(0,r.kt)("h2",{id:"software"},"Software"),(0,r.kt)("h4",{id:"1-install-thonny"},"1. Install Thonny"),(0,r.kt)("p",null,"Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click ",(0,r.kt)("a",{parentName:"p",href:"https://thonny.org/"},"Thonny.org")," to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download. \xa0Double-click the installation package you downloaded to open it, and install it according to the steps."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_6.png",alt:null})),(0,r.kt)("p",null,"Now that you have Thonny installed, open the application. You should see the main interface of Thonny: "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_7.png",alt:"1.png"}),"\nThe main interface of Thonny is very simple, divided into the following four parts:"),(0,r.kt)("p",null,"1.Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc. "),(0,r.kt)("p",null,"2.Code editor: Thonny's core area, where we will write Python/MicroPython code. \xa0"),(0,r.kt)("p",null,"3.Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window."),(0,r.kt)("p",null,'4.Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select. '),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_8.png",alt:"2.png"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_9.png",alt:"3.png"})),(0,r.kt)("h4",{id:"2connect-wio-rp2040-mini-dev-board"},"2.Connect Wio RP2040 mini Dev Board"),(0,r.kt)("p",null,'Use the data cable to connect the development board to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.\n',(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_10.png",alt:"4.png"})),(0,r.kt)("h4",{id:"3light-up-the-onboard-led-light"},"3.Light up the onboard LED light."),(0,r.kt)("p",null,'Because the PIN13 of the development board is connected to an LED light, we can turn on LED light by pulling up the PIN13 pin. Next, click "File" and select "New File" to create a new program file, and then write the following code:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from machine import Pin, Timer\n\nled = Pin(13, Pin.OUT)\nCounter = 0\nFun_Num = 0\n\ndef fun(tim):\n    global Counter\n    Counter = Counter + 1\n    print(Counter)\n    led.value(Counter%2)\n    \ntim = Timer(-1)\ntim.init(period=1000, mode=Timer.PERIODIC, callback=fun)\n")),(0,r.kt)("p",null,"\u200b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Press the play icon in the toolbar to run your code."),"\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_11.png",alt:"5.png"}),"\nIf it works well, you will see the LED light turn on and off once a second. And the output of the increasing number will be displayed in the Shell.\n",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/board_12.png",alt:"6.png"})),(0,r.kt)("h2",{id:"faq"},"FAQ"),(0,r.kt)("h4",{id:"1i-need-the-code-to-run-automatically-after-startup"},"1.I need the code to run automatically after startup."),(0,r.kt)("p",null,'you need to rename the code to "main.py" and save it on the main control board. When the main control board restarts next time, it will automatically run the main.py program.'),(0,r.kt)("h4",{id:"2after-running-code-with-network-functions-errors-or-crashes-are-reported-if-i-run-other-programs"},"2.After running code with network functions, errors or crashes are reported if I run other programs."),(0,r.kt)("p",null,"You can click the RESET button of the main control board to restart the board, and then reconnect to the Thonny editor again to run other programs."),(0,r.kt)("h2",{id:"resourses"},"Resourses"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[BRD]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.brd"},"Wio_RP2040 mini v1.1"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.pdf"},"Wio_RP2040 mini v1.1.pdf"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"[SCH]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wio_RP2040_mini_v1.1.sch"},"Wio_RP2040 mini v1.1.sch")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
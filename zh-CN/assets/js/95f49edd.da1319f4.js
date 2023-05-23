"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62216],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},u=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(i),c=a,m=p["".concat(s,".").concat(c)]||p[c]||k[c]||r;return i?n.createElement(m,o(o({ref:t},u),{},{components:i})):n.createElement(m,o({ref:t},u))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},33842:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={description:"Use Arduino Borads as DAPLink Device",title:"Use Arduino Borads as DAPLink Device",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino-DAPLink",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="How to use Arduino Boards as DAPLink Device",l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-DAPLink",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-DAPLink",title:"Use Arduino Borads as DAPLink Device",description:"Use Arduino Borads as DAPLink Device",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-DAPLink.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Arduino-DAPLink",permalink:"/custom/zh-CN/Arduino-DAPLink",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Arduino-DAPLink.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"2023\u5e741\u670816\u65e5",frontMatter:{description:"Use Arduino Borads as DAPLink Device",title:"Use Arduino Borads as DAPLink Device",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arduino-DAPLink",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Bridge Mosiquitto MQTT Broker to AWS IoT with Arduino Boards",permalink:"/custom/zh-CN/Arduino-AWS-IOT-Bridge"},next:{title:"Flashing the Arduino Bootloader using DAP Link",permalink:"/custom/zh-CN/Flashing-Arduino-Bootloader-DAPLink"}},s={},d=[{value:"What is DAPLink",id:"what-is-daplink",level:2},{value:"DAPLink For Arduino Boards",id:"daplink-for-arduino-boards",level:3},{value:"Features",id:"features",level:3},{value:"Supported Boards",id:"supported-boards",level:2},{value:"Get Started",id:"get-started",level:2},{value:"1. Installing the DAPLink Arduino Libraries",id:"1-installing-the-daplink-arduino-libraries",level:3},{value:"2. Installing the Adafruit_TinyUSB_Arduino Library",id:"2-installing-the-adafruit_tinyusb_arduino-library",level:3},{value:"Customizing Pin Definitions",id:"customizing-pin-definitions",level:3},{value:"Upload to Arduino Boards",id:"upload-to-arduino-boards",level:3},{value:"Hardware Connection Example",id:"hardware-connection-example",level:2},{value:"Debug and Flash Example for IDEs",id:"debug-and-flash-example-for-ides",level:2},{value:"Debugging with OpenOCD",id:"debugging-with-openocd",level:3},{value:"Debugging with Eclipse",id:"debugging-with-eclipse",level:3},{value:"Debugging with Keil",id:"debugging-with-keil",level:3},{value:"Debugging with IAR Embedded Workbench",id:"debugging-with-iar-embedded-workbench",level:3},{value:"Serial Usage",id:"serial-usage",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-arduino-boards-as-daplink-device"},"How to use Arduino Boards as DAPLink Device"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"})),(0,a.kt)("h2",{id:"what-is-daplink"},"What is DAPLink"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://armmbed.github.io/DAPLink/"},"Arm Mbed DAPLink"))," is an open source software project that programs and debugs application software running on ",(0,a.kt)("strong",{parentName:"p"},"Arm Cortex CPUs"),". DAPLink is often referred to as interface firmware and runs on an auxiliary MCU connected to the SWD or JTAG port of the application MCU. This configuration is available on almost all development boards. It creates a bridge between your development computer and the CPU debug access port."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Please also visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ARMmbed/DAPLink"},"DAPLink")," for more information.")),(0,a.kt)("h3",{id:"daplink-for-arduino-boards"},"DAPLink For Arduino Boards"),(0,a.kt)("p",null,"Now, we have ",(0,a.kt)("strong",{parentName:"p"},"developed the DAPLink firmware running on your Arduino Boards"),"(",(0,a.kt)("em",{parentName:"p"},"SAMD Series"),") such as ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino Xiao")," so that you can upload and debug development boards that support DAPLink in a most cost-effective way!"),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Debug and Flash Arm Cortex CPUs"),(0,a.kt)("li",{parentName:"ul"},"Provides a virtual serial port, eliminating the need for a usb to serial port"),(0,a.kt)("li",{parentName:"ul"},"Drag and drop to upload firmware(coming soon)")),(0,a.kt)("h2",{id:"supported-boards"},"Supported Boards"),(0,a.kt)("p",null,"It supports all the SAMD boards by Seeed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino XIAO")),(0,a.kt)("li",{parentName:"ul"},"Seeeduino Zero Series:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html"},"Seeeduino Cortex-M0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus Cortex-M0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html"},"Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html"},"Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html"},"Seeeduino LoRaWAN"))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Please make sure you have installed the ",(0,a.kt)("strong",{parentName:"p"},"latest ArduinoSAMD board library for Seeed (>=1.8.1)")," for this to work!")),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("h3",{id:"1-installing-the-daplink-arduino-libraries"},"1. Installing the DAPLink Arduino Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_DAPLink/"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_DAPLink"))," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the Seeed_Arduino_DAPLink library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_DAPLink")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("h3",{id:"2-installing-the-adafruit_tinyusb_arduino-library"},"2. Installing the Adafruit_TinyUSB_Arduino Library"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_TinyUSB_Arduino"},(0,a.kt)("strong",{parentName:"a"},"Adafruit_TinyUSB_Arduino"))," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the Adafruit_TinyUSB_Arduino library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Adafruit_TinyUSB_Arduino")," file that you've have just downloaded."))),(0,a.kt)("h3",{id:"customizing-pin-definitions"},"Customizing Pin Definitions"),(0,a.kt)("p",null,"If you are using ",(0,a.kt)("strong",{parentName:"p"},"Wio Terminal")," or ",(0,a.kt)("strong",{parentName:"p"},"Seeeduino Xiao"),", you may skip this section and just use the default definitions."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The pins definitions for DAPLink is defined in ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"DAP_config.h"))," under ",(0,a.kt)("inlineCode",{parentName:"li"},"Seeed_Arduino_DAPLink/src"),", reference the followings:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/pins-new.png"})),(0,a.kt)("h3",{id:"upload-to-arduino-boards"},"Upload to Arduino Boards"),(0,a.kt)("p",null,"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"simple_daplink.ino")," under ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_DAPLink/example")," using Arduino IDE. Under ",(0,a.kt)("inlineCode",{parentName:"p"},"Tools")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"USB Stack")," and choose ",(0,a.kt)("strong",{parentName:"p"},"TinyUSB"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/usbstack.png"})),(0,a.kt)("p",null,"Compile and upload the code!"),(0,a.kt)("h2",{id:"hardware-connection-example"},"Hardware Connection Example"),(0,a.kt)("p",null,"In this wiki, we have used the ",(0,a.kt)("a",{parentName:"p",href:"https://www.st.com/en/microcontrollers-microprocessors/stm32f410rb.html"},"STM32F410RB development board")," as connection example:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you have changed pinout definitions, please connect according to your own defines.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Seeeduino Xiao Connection Example")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/daplink-xiao.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wio Terminal Connection Example")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/daplink-wt.jpg"})),(0,a.kt)("h2",{id:"debug-and-flash-example-for-ides"},"Debug and Flash Example for IDEs"),(0,a.kt)("p",null,"Our Arduino board now becomes our DAPLink device for uploading for MCUs! Let's have some examples for different IDEs for reference."),(0,a.kt)("h3",{id:"debugging-with-openocd"},"Debugging with OpenOCD"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect the Arduino DAPLink to target Development according to the connection above, and to your PC.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Make sure you have installed OpenOCD.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open Terminal and run the following:"))),(0,a.kt)("p",null,"Change to your device target according to your development board, you may check the ",(0,a.kt)("a",{parentName:"p",href:"http://openocd.org/doc/html/CPU-Configuration.html"},"official document")," for reference."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"openocd -f interface/cmsis-dap.cfg -f target/stm32f4x.cfg\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/openocd-1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under your development board project build path, run the gcc, which looks something like below:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/openocd-2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"under gdb, connect to local host by running the following:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"target remote 127.0.0.1:3333\n")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/openocd-3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Now the development board is connected, you may start to debug or upload!")),(0,a.kt)("p",null,"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"load")," to upload to development board:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/openocd-4.png"})),(0,a.kt)("p",null,"Some useful commands for GDB:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"continue/cont")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ctrl"),"+",(0,a.kt)("inlineCode",{parentName:"li"},"c")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"next")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"break")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"info break")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"clear")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"delete")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"list"))),(0,a.kt)("h3",{id:"debugging-with-eclipse"},"Debugging with Eclipse"),(0,a.kt)("p",null,"For Eclipse, it's very similar to the OpenOCD as it can use the OpenOCD as backend."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to ",(0,a.kt)("strong",{parentName:"li"},"Help")," -> ",(0,a.kt)("strong",{parentName:"li"},"Eclipse Marketplace"),", search and download ",(0,a.kt)("strong",{parentName:"li"},"Eclipse Embedded CDT"),":")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to ",(0,a.kt)("strong",{parentName:"li"},"Window")," -> ",(0,a.kt)("strong",{parentName:"li"},"Preference")," -> ",(0,a.kt)("strong",{parentName:"li"},"MCU")," -> ",(0,a.kt)("strong",{parentName:"li"},"Global OpenOCD Path")," and fill in your OpenOCD path as follow:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Build your project. Under ",(0,a.kt)("strong",{parentName:"li"},"Run Last Tool"),", click on ",(0,a.kt)("strong",{parentName:"li"},"External Tools Configurations"),":")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-5.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Copy the following settings, please change to your path (also your target board).")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-6.png"})),(0,a.kt)("p",null,"If it goes well, it should look something like this:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-8.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Debug"),", click ",(0,a.kt)("strong",{parentName:"li"},"Debug Configurations"),", select ",(0,a.kt)("strong",{parentName:"li"},"Debugger")," section, and fill in your gcc path:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-9.png"})),(0,a.kt)("p",null,"Now it's all good and ready to debug!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/eclipse-10.png"})),(0,a.kt)("p",null,"More reference, please check ",(0,a.kt)("a",{parentName:"p",href:"https://gnu-mcu-eclipse.github.io/debug/openocd/"},"here"),"."),(0,a.kt)("h3",{id:"debugging-with-keil"},"Debugging with Keil"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Connect the Arduino DAPLink to target Development according to the connection above and to your PC.")),(0,a.kt)("p",null,"To use our Arduino DAPLink in Keil, check the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open your project with Keil, click on the ",(0,a.kt)("strong",{parentName:"li"},"Options for target"),".")),(0,a.kt)("p",null,"You should see a window just like below. Make sure the device matches with your device. Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Debug")," section and select ",(0,a.kt)("strong",{parentName:"p"},"CMSIS-DAP Debugger"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"settings")," next to the ",(0,a.kt)("strong",{parentName:"li"},"CMSIS-DAP Debugger"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/keil-1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Choose ",(0,a.kt)("strong",{parentName:"li"},"Seeed CMSIS-DAP"),"(our Arduino board) and you should see that it's connected.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/keil-2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You may also want to navigate to the ",(0,a.kt)("strong",{parentName:"li"},"Flash Download")," section to make sure it's the right device and Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/keil-3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Build")," and ",(0,a.kt)("strong",{parentName:"li"},"Flash"),"!")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/keil-4.png"})),(0,a.kt)("h3",{id:"debugging-with-iar-embedded-workbench"},"Debugging with IAR Embedded Workbench"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Connect the Arduino DAPLink to target Development according to the connection above and to your PC.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Open your project, and navigate to ",(0,a.kt)("strong",{parentName:"p"},"Project")," -> ",(0,a.kt)("strong",{parentName:"p"},"Options"),". In the Options menu, select ",(0,a.kt)("strong",{parentName:"p"},"Debugger"),":"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/iar-1.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Setup")," tab, select ",(0,a.kt)("strong",{parentName:"li"},"CMSIS DAP")," from the Driver drop-down menu.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/iar-2.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Download")," tab, check Verify download and Use ",(0,a.kt)("strong",{parentName:"li"},"flash loader(s)"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/iar-3.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Select ",(0,a.kt)("strong",{parentName:"li"},"CMSIS DAP")," from the menu on the left, select the ",(0,a.kt)("strong",{parentName:"li"},"Interface")," tab and configure the ",(0,a.kt)("strong",{parentName:"li"},"SWD")," protocol.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/iar-4.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),", and you can click ",(0,a.kt)("strong",{parentName:"li"},"Download and Debug"),"!")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/DAPLink/iar-5.png"})),(0,a.kt)("h2",{id:"serial-usage"},"Serial Usage"),(0,a.kt)("p",null,"To make life easier, we also implemented a USB to Serial function to the Arduino Sketch which saves you the need of additional hardware!"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"By default, it is defined as ",(0,a.kt)("inlineCode",{parentName:"li"},"Serial1")," and it's the Hardware Serial pins. For example, it's pin 6 and 7 for Seeeduino XIAO.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"You may define your own Serial in the Arduino Sketch.\n"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/Seeeduino-XIAO-pinout.jpg"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Reference usage, check ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How-to-use-Seeeduino-XIAO-to-log-in-to-your-Raspberry-PI/"},"here"),".")),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/ARMmbed/DAPLink"},"DAPLink Official Github")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://openocd.org/doc/html/index.html"},"OpenOCD Documents"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issue into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),(0,a.kt)("br",null)),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
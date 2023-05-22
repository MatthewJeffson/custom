"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[47125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,c=u["".concat(s,".").concat(m)]||u[m]||h[m]||i;return n?r.createElement(c,o(o({ref:t},p),{},{components:n})):r.createElement(c,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={description:"FreeRTOS for Arduino Boards",title:"FreeRTOS for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-FreeRTOS",last_update:{date:"1/16/2023",author:"jianjing Huang"}},o="Arduino FreeRTOS Tutorial - How to use FreeRTOS to Multi-tasking in Arduino",l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-FreeRTOS",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-FreeRTOS",title:"FreeRTOS for Arduino Boards",description:"FreeRTOS for Arduino Boards",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-FreeRTOS.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Software-FreeRTOS",permalink:"/zh-CN/Software-FreeRTOS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Software-FreeRTOS.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673798400,formattedLastUpdatedAt:"2023\u5e741\u670815\u65e5",frontMatter:{description:"FreeRTOS for Arduino Boards",title:"FreeRTOS for Arduino Boards",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Software-FreeRTOS",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Firmata for Arduino Compatible Boards",permalink:"/zh-CN/ODYSSEY-X86J4105-Firmata"},next:{title:"How to Debug Arduino Boards using SWD Interface",permalink:"/zh-CN/Software-SWD"}},s={},d=[{value:"What is RTOS",id:"what-is-rtos",level:2},{value:"How does RTOS work",id:"how-does-rtos-work",level:2},{value:"What is FreeRTOS",id:"what-is-freertos",level:2},{value:"Quick Start with FreeRTOS For Arduino",id:"quick-start-with-freertos-for-arduino",level:2},{value:"Installing the FreeRTOS Arduino Libraries",id:"installing-the-freertos-arduino-libraries",level:3},{value:"Supported Boards",id:"supported-boards",level:3},{value:"FreeRTOS Arduino Examples",id:"freertos-arduino-examples",level:2},{value:"Hello World Example",id:"hello-world-example",level:3},{value:"Blink Example",id:"blink-example",level:3},{value:"LCD Example",id:"lcd-example",level:3},{value:"FreeRTOS in Cpp For Arduino",id:"freertos-in-cpp-for-arduino",level:2},{value:"Installing the FreeRTOS Cpp Arduino Libraries",id:"installing-the-freertos-cpp-arduino-libraries",level:3},{value:"Blink Example in Cpp",id:"blink-example-in-cpp",level:3},{value:"Resources",id:"resources",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"arduino-freertos-tutorial---how-to-use-freertos-to-multi-tasking-in-arduino"},"Arduino FreeRTOS Tutorial - How to use FreeRTOS to Multi-tasking in Arduino"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/FreeRTOS/full.gif"})),(0,a.kt)("h2",{id:"what-is-rtos"},"What is RTOS"),(0,a.kt)("p",null,"One of the most important components of today's embedded systems is the ",(0,a.kt)("strong",{parentName:"p"},"RTOS")," also known as ",(0,a.kt)("strong",{parentName:"p"},"Real-Time Operating System"),", which is responsible for everything from task scheduling to performing applications."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"RTOS")," is designed to provide a predictable execution mode. When the processing must meet the time limit of the system, RTOS is used. Therefore, compared with GPOS (General Purpose Operating System), RTOS is usually light in weight and small in size, and generally only provides functions required to run specific types of applications on specific hardware. In some cases, developers can modify the existing RTOS, narrow it down to only provide the functionality required by a specific application, and/or customize its functionality or performance characteristics."),(0,a.kt)("h2",{id:"how-does-rtos-work"},"How does RTOS work"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"kernel")," is the core component in the operating system. Operating systems like Linux use a kernel, allowing users to appear to access the computer at the same time. Each program being executed is a task (or thread) under the control of the operating system. If an operating system can perform multiple tasks in this way, it can be said to be ",(0,a.kt)("strong",{parentName:"p"},"multitasking"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Multitasking"))),(0,a.kt)("p",null,"Traditional processors can only execute ",(0,a.kt)("strong",{parentName:"p"},"one task")," at a time, but a multitasking operating system can make each task appear to be executed simultaneously by quickly switching between tasks. The following figure shows the relationship between the execution mode of three tasks and time."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/FreeRTOS/TaskExecution.gif"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Scheduling"))),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"scheduler")," is the part of the kernel that is responsible for deciding which task to execute at any particular time. The kernel can pause and resume a task multiple times during the life cycle of the task."),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"scheduling strategy"),' is an algorithm used by the scheduler to decide which task to perform at any point in time. A (non-real-time) multi-user system strategy is likely to give each task a "fair" proportion of processor time.'),(0,a.kt)("p",null,"In addition to being involuntarily suspended by the kernel, a task can also choose to suspend itself. If it wants to ",(0,a.kt)("strong",{parentName:"p"},"delay (sleep)")," for a period of time, or ",(0,a.kt)("strong",{parentName:"p"},"wait (block)")," for a resource to be available (such as a serial port) or an event (such as a key press), it will do so."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/FreeRTOS/suspending.gif"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Reference: ",(0,a.kt)("a",{parentName:"em",href:"https://www.freertos.org/implementation/a00002.html"},(0,a.kt)("strong",{parentName:"a"},"FreeRTOS Fundamentals")))),(0,a.kt)("h2",{id:"what-is-freertos"},"What is FreeRTOS"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{400}",src:"https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-logo.png"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.freertos.org/"},(0,a.kt)("strong",{parentName:"a"},"FreeRTOS"))," is a class of RTOS that is designed to be small enough to run on a microcontroller \u2013 although its use is not limited to microcontroller applications. FreeRTOS includes a kernel and a growing set of software libraries suitable for use across industry sectors and applications. With the help of FreeRTOS, you can do multitasking on a microcontroller based hardware!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"For Arduino compatibility"),", we have ported FreeRTOS into the Arduino framework so that you are able to use FreeRTOS with your favorite Arduino boards with ease!"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In 2017, ",(0,a.kt)("a",{parentName:"p",href:"https://aws.amazon.com/freertos/"},"Amazon")," has taken the stewardship of FreeRTOS which makes it reliable and secure to the embedded world.")),(0,a.kt)("h2",{id:"quick-start-with-freertos-for-arduino"},"Quick Start with FreeRTOS For Arduino"),(0,a.kt)("h3",{id:"installing-the-freertos-arduino-libraries"},"Installing the FreeRTOS Arduino Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_FreeRTOS"))," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the Seeed_Arduino_FreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_FreeRTOS")," file that you've have just downloaded."))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This library ports the latest FreeRTOS(10.2.1) and allow you to create FreeRTOS Projects in the in Arduino IDE.")),(0,a.kt)("h3",{id:"supported-boards"},"Supported Boards"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_FreeRTOS"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_FreeRTOS"))," supports all the SAMD boards by Seeed:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Seeeduino XIAO")),(0,a.kt)("li",{parentName:"ul"},"Seeeduino Zero Series:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Cortex-M0-p-4070.html"},"Seeeduino Cortex-M0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-Lotus-Cortex-M0-p-2896.html"},"Seeeduino Lotus Cortex-M0+")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Lite-W600-p-4155.html"},"Wio Lite W600 - ATSAMD21 Cortex-M0 Wireless Development Board")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Lite-MG126-p-4189.html"},"Wio Lite MG126 - ATSAMD21 Cortex-M0 Blue Wireless Development Board")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeeduino-LoRaWAN-p-2780.html"},"Seeeduino LoRaWAN"))),(0,a.kt)("h2",{id:"freertos-arduino-examples"},"FreeRTOS Arduino Examples"),(0,a.kt)("p",null,"The FreeRTOS can be very powerful by providing the microcontroller ",(0,a.kt)("strong",{parentName:"p"},"real time scheduling functionality, inter-task communication, timing and synchronization primitives"),"."),(0,a.kt)("p",null,"To get you started with FreeRTOS easily, here provides some examples for reference. The following examples are built and ran on Wio Terminal."),(0,a.kt)("h3",{id:"hello-world-example"},"Hello World Example"),(0,a.kt)("p",null,"This example simply creates ",(0,a.kt)("strong",{parentName:"p"},"two threads")," that prints different ",(0,a.kt)("inlineCode",{parentName:"p"},"strings")," to the Serial Monitor at a different rate."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/FreeRTOS/helloworld.png"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Seeed_Arduino_FreeRTOS.h>\n\nTaskHandle_t Handle_aTask;\nTaskHandle_t Handle_bTask;\n\nstatic void ThreadA(void* pvParameters) {\n    Serial.println("Thread A: Started");\n\n    while (1) {\n        Serial.println("Hello World!");\n        delay(1000);\n    }\n}\n\nstatic void ThreadB(void* pvParameters) {\n    Serial.println("Thread B: Started");\n\n    for (int i = 0; i < 10; i++) {\n        Serial.println("---This is Thread B---");\n        delay(2000);\n    }\n    Serial.println("Thread B: Deleting");\n    vTaskDelete(NULL);\n}\n\nvoid setup() {\n\n    Serial.begin(115200);\n\n    vNopDelayMS(1000); // prevents usb driver crash on startup, do not omit this\n    while(!Serial);  // Wait for Serial terminal to open port before starting program\n\n    Serial.println("");\n    Serial.println("******************************");\n    Serial.println("        Program start         ");\n    Serial.println("******************************");\n\n    // Create the threads that will be managed by the rtos\n    // Sets the stack size and priority of each task\n    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks\n    xTaskCreate(ThreadA,     "Task A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);\n    xTaskCreate(ThreadB,     "Task B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);\n\n    // Start the RTOS, this function will never return and will schedule the tasks.\n    vTaskStartScheduler();\n}\n\nvoid loop() {\n    // NOTHING\n}\n')),(0,a.kt)("h3",{id:"blink-example"},"Blink Example"),(0,a.kt)("p",null,"This example also creates two threads and output signals to light up LED. One is to simply blink the LED, and the other is to breath LED."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    Make sure that the Breathing LED is on a PWM pin.\n"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/FreeRTOS/Blink.gif"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Seeed_Arduino_FreeRTOS.h>\n\n#define LEDPIN_1 PIN_WIRE_SCL // Left side of Grove Port of Wio Terminal\n#define LEDPIN_2 D0 // Right side of Grove Port of Wio Terminal\n\nTaskHandle_t Handle_aTask;\nTaskHandle_t Handle_bTask;\n\n// Blinking LED\nstatic void LED_1(void* pvParameters) {\n    while (1) {\n        digitalWrite(LEDPIN_1, HIGH);\n        delay(1000);\n        digitalWrite(LEDPIN_1, LOW);\n        delay(1000);\n    }\n}\n\n// Breathing LED\nstatic void LED_2(void* pvParameters) {\n    int cnt = 5;\n    while (1) {\n        for (byte value = 0 ; value < 255; value+=cnt) {\n            analogWrite(LEDPIN_2, value);\n            delay(20);\n        }\n        delay(200);\n        for (byte value = 255 ; value > 0; value-=cnt) {\n            analogWrite(LEDPIN_2, value);\n            delay(20);\n        }\n    }\n}\n\nvoid setup() {\n    Serial.begin(115200);\n\n    vNopDelayMS(1000); // prevents usb driver crash on startup, do not omit this\n//    while(!Serial);  // Wait for serial terminal to open port before starting program\n\n    pinMode(LEDPIN_1, OUTPUT);\n    pinMode(LEDPIN_2, OUTPUT);\n\n    xTaskCreate(LED_1,     "Task A",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_aTask);\n    xTaskCreate(LED_2,     "Task B",       256, NULL, tskIDLE_PRIORITY + 1, &Handle_bTask);\n\n    // Start the RTOS, this function will never return and will schedule the tasks.\n    vTaskStartScheduler();\n}\n\nvoid loop() {\n\n}\n')),(0,a.kt)("h3",{id:"lcd-example"},"LCD Example"),(0,a.kt)("p",null,"This example is a demonstrations of FreeRTOS with other  Arduino libraries such as LCD Sprites in Wio Terminal. This example creates two sprites in two threads to count number in the opposite way. ",(0,a.kt)("inlineCode",{parentName:"p"},"taskMonitor")," is a function used to monitor threads and prints stacks info about each thread."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{600}",src:"https://files.seeedstudio.com/wiki/FreeRTOS/FreeRTOS-LCD.gif"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Seeed_Arduino_FreeRTOS.h>\n#include <TFT_eSPI.h>\n\nTaskHandle_t Handle_aTask;\nTaskHandle_t Handle_bTask;\nTaskHandle_t Handle_monitorTask;\n\nTFT_eSPI tft = TFT_eSPI();\nTFT_eSprite img = TFT_eSprite(&tft);\nTFT_eSprite img2 = TFT_eSprite(&tft);\n\nstatic void LCD_TASK_1 (void* pvParameters) {\n    Serial.println("Thread A: Started");\n    img.createSprite(100, 100);\n    img.fillSprite(tft.color565(229,58,64)); // RED\n    img.setTextSize(8);\n    img.setTextColor(TFT_WHITE);\n    for(int i = 0; i < 100; i++) {\n        img.drawNumber(i, 10, 25);\n        img.pushSprite(30, 70);\n        img.fillSprite(tft.color565(229,58,64));\n        delay(1000);\n        if(i== 99) i = 0;\n    }\n}\n\nstatic void LCD_TASK_2 (void* pvParameters) {\n    Serial.println("Thread B: Started");\n    img2.createSprite(100, 100);\n    img2.fillSprite(tft.color565(48,179,222)); // BLUE\n    img2.setTextSize(8);\n    img2.setTextColor(TFT_WHITE);\n    for(int x = 99; x >= 0; x--) {\n        img2.drawNumber(x, 10, 25);\n        img2.pushSprite(190, 70);\n        img2.fillSprite(tft.color565(48,179,222));\n        delay(500);\n        if(x== 0) x = 99;\n    }\n}\n\nvoid taskMonitor(void* pvParameters) {\n    int x;\n    int measurement;\n\n    Serial.println("Task Monitor: Started");\n\n    // run this task a few times before exiting forever\n    for (x = 0; x < 10; ++x) {\n\n        Serial.println("");\n        Serial.println("******************************");\n        Serial.println("[Stacks Free Bytes Remaining] ");\n\n        measurement = uxTaskGetStackHighWaterMark(Handle_aTask);\n        Serial.print("Thread A: ");\n        Serial.println(measurement);\n\n        measurement = uxTaskGetStackHighWaterMark(Handle_bTask);\n        Serial.print("Thread B: ");\n        Serial.println(measurement);\n\n        measurement = uxTaskGetStackHighWaterMark(Handle_monitorTask);\n        Serial.print("Monitor Stack: ");\n        Serial.println(measurement);\n\n        Serial.println("******************************");\n\n        delay(10000); // print every 10 seconds\n    }\n\n    // delete ourselves.\n    // Have to call this or the system crashes when you reach the end bracket and then get scheduled.\n    Serial.println("Task Monitor: Deleting");\n    vTaskDelete(NULL);\n}\n\nvoid setup() {\n\n    Serial.begin(115200);\n\n    vNopDelayMS(1000); // prevents usb driver crash on startup, do not omit this\n    while (!Serial) ;  // Wait for Serial terminal to open port before starting program\n\n    tft.begin();\n    tft.setRotation(3);\n    tft.fillScreen(tft.color565(9,7,7)); // BLACK background\n    tft.setTextColor(tft.color565(239,220,5)); // YELLOW text\n    tft.setTextSize(2);\n    tft.drawString("Thread A", 30, 50);\n    tft.drawString("Thread B", 190, 50);\n\n    Serial.println("");\n    Serial.println("******************************");\n    Serial.println("        Program start         ");\n    Serial.println("******************************");\n\n    // Create the threads that will be managed by the rtos\n    // Sets the stack size and priority of each task\n    // Also initializes a handler pointer to each task, which are important to communicate with and retrieve info from tasks\n    xTaskCreate(LCD_TASK_1,     "Task A",       256, NULL, tskIDLE_PRIORITY + 3, &Handle_aTask);\n    xTaskCreate(LCD_TASK_2,     "Task B",       256, NULL, tskIDLE_PRIORITY + 2, &Handle_bTask);\n    xTaskCreate(taskMonitor, "Task Monitor",    128, NULL, tskIDLE_PRIORITY + 1, &Handle_monitorTask);\n\n    // Start the RTOS, this function will never return and will schedule the tasks.\n    vTaskStartScheduler();\n}\n\nvoid loop() {\n    //NOTHING\n}\n')),(0,a.kt)("h2",{id:"freertos-in-cpp-for-arduino"},"FreeRTOS in Cpp For Arduino"),(0,a.kt)("p",null,"For more, we also provide ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_ooFreeRTOS")),", which is ",(0,a.kt)("strong",{parentName:"p"},"a collection of C++ wrappers encapsulating the FreeRTOS functionality, and it's working under the framework of Arduino.")),(0,a.kt)("h3",{id:"installing-the-freertos-cpp-arduino-libraries"},"Installing the FreeRTOS Cpp Arduino Libraries"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Visit the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_ooFreeRTOS"},(0,a.kt)("strong",{parentName:"a"},"Seeed_Arduino_ooFreeRTOS"))," repositories and download the entire repo to your local drive.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now, the Seeed_Arduino_ooFreeRTOS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,a.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,a.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,a.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_ooFreeRTOS")," file that you've have just downloaded."))),(0,a.kt)("h3",{id:"blink-example-in-cpp"},"Blink Example in Cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Seeed_Arduino_ooFreeRTOS.h>\n#include "thread.hpp"\n#include "ticks.hpp"\n\nusing namespace cpp_freertos;\n\nclass BlinkThread : public Thread {\n  \npublic:\n  \n  BlinkThread(int i, int delayInSeconds)\n    : Thread( 256, 1), \n      Id (i), \n      DelayInSeconds(delayInSeconds)\n  {\n    Start();\n  };\n  \nprotected:\n\n  virtual void Run() {\n    while (true) {\n      Serial.printf("Blink Therad: %d\\n\\r", Id);\n      digitalWrite(LED_BUILTIN, HIGH);   // turn the LED on (HIGH is the voltage level)\n      Delay(Ticks::SecondsToTicks(DelayInSeconds));\n      digitalWrite(LED_BUILTIN, LOW);    // turn the LED off by making the voltage LOW\n      Delay(Ticks::SecondsToTicks(DelayInSeconds));      \n    }\n  };\n\nprivate:\n  int Id;\n  int DelayInSeconds;\n};\n\n\n\nvoid setup (void)\n{\n  \n  // start up the serial interface\n  Serial.begin(115200);\n  Serial.println("Testing FreeRTOS C++ wrappers");\n  Serial.println("Simple Tasks");\n\n  // initialize digital pin LED_BUILTIN as an output.\n  pinMode(LED_BUILTIN, OUTPUT);\n  \n  static BlinkThread p1(1, 3);\n  static BlinkThread p2(2, 5);\n\n  Thread::StartScheduler();\n  \n  //\n  //  We shouldn\'t ever get here unless someone calls \n  //  Thread::EndScheduler()\n  //  \n  Serial.println("Scheduler ended!");\n\n}\n\nvoid loop()\n{\n  // Empty. Things are done in Tasks.\n}\n\n')),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.freertos.org/FreeRTOS-quick-start-guide.html"},"Official FreeRTOS Getting Started"))))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[19499],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(a),h=n,c=s["".concat(d,".").concat(h)]||s[h]||m[h]||i;return a?r.createElement(c,o(o({ref:t},u),{},{components:a})):r.createElement(c,o({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},67713:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={description:"Grove Shield for Seeed Studio XIAO with embedded battery management chip",title:"Grove Shield for Seeed Studio XIAO with embedded battery management chip",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip",last_update:{date:"1/10/2023",author:"shuxu hu"}},o=void 0,l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip",title:"Grove Shield for Seeed Studio XIAO with embedded battery management chip",description:"Grove Shield for Seeed Studio XIAO with embedded battery management chip",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board",slug:"/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip",permalink:"/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_Expansion_board/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:167328e4,formattedLastUpdatedAt:"Jan 9, 2023",frontMatter:{description:"Grove Shield for Seeed Studio XIAO with embedded battery management chip",title:"Grove Shield for Seeed Studio XIAO with embedded battery management chip",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Shield-for-Seeeduino-XIAO-embedded-battery-management-chip",last_update:{date:"1/10/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Using LVGL and TFT on the Seeed Studio Round Display for XIAO",permalink:"/using_lvgl_and_tft_on_round_display"},next:{title:"Seeed Studio XIAO Expansion board",permalink:"/Seeeduino-XIAO-Expansion-Board"}},d={},p=[{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Materials Required",id:"materials-required",level:3},{value:"Hardware Overview",id:"hardware-overview",level:3},{value:"External headers-pin description for Grove-Shield for Seeed Studio XIAO",id:"external-headers-pin-description-for-grove-shield-for-seeed-studio-xiao",level:4},{value:"External headers-pin description for Grove-Doppler Radar",id:"external-headers-pin-description-for-grove-doppler-radar",level:4},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"Software",id:"software",level:3},{value:"Software Code",id:"software-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Preview-25.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("p",null,"Seeed Studio Grove Base for XIAO is a plug-and-play Grove extension board for ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://wiki.seeedstudio.com/Seeeduino-XIAO/"},"Seeed Studio XIAO")),". With the on-board battery management chip and battery bonding pad, you could easily power your Seeed Studio XIAO with lithium battery and recharge it. 8 Grove connectors onboard includes two Grove I2C and one UART. It acts as a bridge for Seeed Studio XIAO and Seeed's Grove system. Flash SPI bonding pad allows you add Flash to Seeed Studio XIAO to expand its memory space, providing Seeed Studio XIAO with more possibilities."),(0,n.kt)("p",null,"With the on-board battery management chip and battery bonding pad, you could easily power your Seeed Studio XIAO with lithium 3.7V battery and recharge it, making your projects, especially wearables ones, more flexible and in portable. You could even break the board through the onboard PCB stamp holds according to your actual needs of the project (only 25*39mm in dimension after break-off), making it smaller than smaller and the weight would be reduced from 13g to 10g as well!"),(0,n.kt)("p",null,"As an extension board, the Seeed Studio Grove Base for XIAO also pulls all 14 pinout from Seeed Studio XIAO, and its on-board power switch and charging status indicator light makes it more user-friendly. The Shield even reserves the SPI-Flash bonding pad for an advanced developer who may need to add Flash to Seeed Studio XIAO to expand its memory space, providing Seeed Studio XIAO with more possibilities."),(0,n.kt)("p",null,"As Seeed Studio XIAO form factor, all Seeed Studio XIAO boards support both ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},"Grove Shield for XIAO")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Expansion-board-p-4746.html"},"Seeed Studio XIAO Expansion board"),". There is a slight difference between the pins and refer to the Pinout it is easy to manage."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"This product does not include a Seeed Studio XIAO board, please click\xa0",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"here"),"\xa0if you need one.")),(0,n.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,n.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},(0,n.kt)("strong",null,(0,n.kt)("span",null,(0,n.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"On-board\xa0Lithium Battery Charging and Management Function"),(0,n.kt)("li",{parentName:"ul"},"Grove connectors ( Grove IIC x 2, Grove UART x 1 ), all 14 GPIO led out"),(0,n.kt)("li",{parentName:"ul"},"Compact and Breakable\xa0Design"),(0,n.kt)("li",{parentName:"ul"},"Flash SPI Bonding Pad Reserved"),(0,n.kt)("li",{parentName:"ul"},"On-board Power Switch and Charging Status Indicator Light")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 3.7V Lithium Battery")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Load Capacity"),(0,n.kt)("td",{parentName:"tr",align:null},"800mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Charging current"),(0,n.kt)("td",{parentName:"tr",align:null},"400mA (Max)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"- 40\xb0C to 85\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage Temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-55\xb0C to 150\xb0C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grove Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C ",(0,n.kt)("em",{parentName:"td"},"2 / UART")," 1")))),(0,n.kt)("h2",{id:"applications"},"Applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Wearable devices"),(0,n.kt)("li",{parentName:"ul"},"Rapid prototyping"),(0,n.kt)("li",{parentName:"ul"},"Grove modules testing"),(0,n.kt)("li",{parentName:"ul"},"Projects require small size")),(0,n.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"materials-required"},"Materials Required"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Seeed Studio Seeed Studio XIAO"),(0,n.kt)("th",{parentName:"tr",align:null},"Grove-Doppler-Radar"),(0,n.kt)("th",{parentName:"tr",align:null},"Seeed Studio Grove Base for XIAO"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeeduino-XIAO/img/seeeduino-XIAO-thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/small.png",alt:"pir",width:600,height:"auto"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("p",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/img/xiao_-Thumbnail-27.png",alt:"pir",width:600,height:"auto"})))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Doppler-Radar-BGT24LTR11-p-4572.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Shield-for-Seeeduino-XIAO-p-4621.html"},"Get ONE Now"))))),(0,n.kt)("h3",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("p",null,"If you need use the back of the Seeed Studio XIAO Grove Shield provisions pads for a Flash memory in SOIC8 package, please soldering the PIN1."),(0,n.kt)("h4",{id:"external-headers-pin-description-for-grove-shield-for-seeed-studio-xiao"},"External headers-pin description for Grove-Shield for Seeed Studio XIAO"),(0,n.kt)("h4",{id:"external-headers-pin-description-for-grove-doppler-radar"},"External headers-pin description for Grove-Doppler Radar"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/pin-1.png",alt:"pir",width:600,height:"auto"})),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Pin number"),(0,n.kt)("th",{parentName:"tr",align:null},"Signal name"),(0,n.kt)("th",{parentName:"tr",align:null},"Pin description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"1"),(0,n.kt)("td",{parentName:"tr",align:null},"DIV_OUT"),(0,n.kt)("td",{parentName:"tr",align:null},"Frequency divider output from the BGT24LTR11")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"2"),(0,n.kt)("td",{parentName:"tr",align:null},"GND"),(0,n.kt)("td",{parentName:"tr",align:null},"Ground")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"3"),(0,n.kt)("td",{parentName:"tr",align:null},"VCC_5V_EXT"),(0,n.kt)("td",{parentName:"tr",align:null},"External+5.0V input power supply pin(maximum=5.5V)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4"),(0,n.kt)("td",{parentName:"tr",align:null},"VTUNE"),(0,n.kt)("td",{parentName:"tr",align:null},"VCO frequency tuning voltage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"5"),(0,n.kt)("td",{parentName:"tr",align:null},"IFQ_HG"),(0,n.kt)("td",{parentName:"tr",align:null},"BGT24LTR11 Q-channel-analog signal output-second gain stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"6"),(0,n.kt)("td",{parentName:"tr",align:null},"IFI_HG"),(0,n.kt)("td",{parentName:"tr",align:null},"BGT24LTR11 I-channel-analog signal output-second gain stage")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"7"),(0,n.kt)("td",{parentName:"tr",align:null},"PWM_OUT"),(0,n.kt)("td",{parentName:"tr",align:null},"External user-configurable GPIO with CCU4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"8"),(0,n.kt)("td",{parentName:"tr",align:null},"OUT1"),(0,n.kt)("td",{parentName:"tr",align:null},"External GPIO pin (user configurable)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"9"),(0,n.kt)("td",{parentName:"tr",align:null},"OUT2"),(0,n.kt)("td",{parentName:"tr",align:null},"External GPIO pin (user configurable)")))),(0,n.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/hardware_connection.jpg",alt:"pir",width:600,height:"auto"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Please plug the USB cable\uff0c Doppler Radar Interface into Seeed Studio XIAO expansion board Interface gently, otherwise you may damage the port.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Plug Doppler Radar into Seeed Studio XIAO expansion board with a Grove Cable.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Connect Seeed Studio XIAO to PC via a USB cable.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Download the code, please refer to the software part.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Run the code and the outcome will display on the screen of ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," in your Arduino IDE ."))),(0,n.kt)("h3",{id:"software"},"Software"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If this is the first time you work with Arduino, we strongly recommend you to see ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Getting Started with Arduino")," before the start.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.rar"},"Demo code"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 2.")," Copy the whole ",(0,n.kt)("strong",{parentName:"p"},"Seeed_Arduino_DopplerRadar")," file and paste it into your Arduino IDE library file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Open the ",(0,n.kt)("strong",{parentName:"p"},"BGT24LTR11_DETECTION_TARGET")," file with your Arduino IDE.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),"."))),(0,n.kt)("h4",{id:"software-code"},"Software Code"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},'#include "GBT24LTR11.h"\n\n#ifdef __AVR__\n    #include <SoftwareSerial.h>\n    SoftwareSerial SSerial(2, 3); // RX, TX\n    #define COMSerial SSerial\n    #define ShowSerial Serial\n\n    GBT24LTR11<SoftwareSerial> GBT;\n#endif\n\n#ifdef ARDUINO_SAMD_VARIANT_COMPLIANCE\n    #define COMSerial Serial1\n    #define ShowSerial SerialUSB\n\n    GBT24LTR11<Uart> GBT;\n#endif\n\n#ifdef ARDUINO_ARCH_STM32F4\n    #define COMSerial Serial\n    #define ShowSerial SerialUSB\n\n    GBT24LTR11<HardwareSerial> GBT;\n#endif\n\nvoid setup() {\n    // put your setup code here, to run once:\n    ShowSerial.begin(9600);\n    COMSerial.begin(115200);\n    GBT.init(COMSerial);\n    while (!ShowSerial)\n        ;\n    while (!COMSerial)\n        ;\n    /*\n        MODE 0 --\x3edetection target mode\n        MODE 1 --\x3eI/Q ADC mode\n    */\n    while (!GBT.setMode(0))\n        ;\n}\n\nvoid loop() {\n    // put your main code here, to run repeatedly:\n    uint16_t state = 0;\n    ShowSerial.print("target speed:");\n    ShowSerial.println(GBT.getSpeed());\n    state = GBT.getTargetState();\n    //2 --\x3e target approach\n    //1 --\x3e target leave\n    //0 --\x3e Not Found target\n    if (state == 2) {\n        ShowSerial.println("target approach");\n    } else if (state == 1) {\n        ShowSerial.println("target leave");\n    }\n    delay(200);\n}\n')),(0,n.kt)("admonition",{type:"success"},(0,n.kt)("p",{parentName:"admonition"},"  If everything goes well, you can go to ",(0,n.kt)("strong",{parentName:"p"},"Serial Monitor")," to see an outcome as following:")),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome_1.png",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 3"),". ",(0,n.kt)("i",null," No object approaching")))),(0,n.kt)("p",null,"And if there's an object approaching the radar or passing by, the outcome will alter as below:"),(0,n.kt)("div",{align:"center"},(0,n.kt)("figure",null,(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/IMG/outcome2.png",alt:"Grove-Doppler-Radar'' OUTCOME",title:"demo"}),(0,n.kt)("figcaption",null,(0,n.kt)("b",null,"Figure 3"),". ",(0,n.kt)("i",null,"Object approaching")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The minimum speed accuracy that the sensor is capable of detecting is 52cm/s, which equals to 0.52m/s, 3.6km/h and 2.23mph. Additionally, the results returned by function getSpeed() are multiples of 52cm/s and are absolute values accordingly.")),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/Grove_Shield_for_Seeeduino_XIAO_v1.0.zip"},"Attachment of Seeed Studio Grove Base for XIAO")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[ZIP]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Seeed_Arduino_DopplerRadar.zip"},"Demo Code library")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Doppler-Radar/Grove_DopplerRadar(BGT24LTR11)Radar_module_communication_protocol_v1.1.pdf"},"Grove DopplerRadar (BGT24LTR11) Radar module communication protocol v1.1.pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Shield-for-Seeeduino-XIAO/res/ETA3410.pdf"},"ETA 3410 Datasheet"))),(0,n.kt)("h2",{id:"project"},"Project"),(0,n.kt)("p",null,(0,n.kt)("iframe",{src:"https://www.youtube.com/embed/-HMEW2DN6Wg",width:"560",height:"315",frameborder:"0",allowfullscreen:""})),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);
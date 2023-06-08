"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[36344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={description:"Heart Sound Sensor",title:"Heart Sound Sensor",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Heart-Sound_Sensor",last_update:{date:"2/1/2023",author:"hushuxu"}},i=void 0,o={unversionedId:"Sensor/Arch/Heart-Sound_Sensor",id:"Sensor/Arch/Heart-Sound_Sensor",title:"Heart Sound Sensor",description:"Heart Sound Sensor",source:"@site/docs/Sensor/Arch/Heart-Sound_Sensor.md",sourceDirName:"Sensor/Arch",slug:"/Heart-Sound_Sensor",permalink:"/custom/Heart-Sound_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Arch/Heart-Sound_Sensor.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Heart Sound Sensor",title:"Heart Sound Sensor",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Heart-Sound_Sensor",last_update:{date:"2/1/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Arch Max v1.1",permalink:"/custom/Arch_Max_v1.1"},next:{title:"Grove - Starter Kit for mbed",permalink:"/custom/Grove-Starter_Kit_for_mbed"}},p={},u=[{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Pin definition",id:"pin-definition",level:2},{value:"Usage",id:"usage",level:2},{value:"Debug",id:"debug",level:2},{value:"Update or Restore Firmware",id:"update-or-restore-firmware",level:2},{value:"Version",id:"version",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Arch Max is an mbed enabled development board for rapid prototyping.\nIt's based on a STM32F407VET6 microcontroller with an ARM Cortex-M4F core running at 168MHz. It includes an open link to provide SWD debug, drag-n-drop programming and USB serial communication."),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"mbed enabled"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Online development tools"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Easy to use C/C++ SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Lots of published libraries and projects")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"High performance STM32F407VET6"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ARM Cortex-M4 MCU with FPU at 168MHz"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"512 KB Flash, 192 KB RAM"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On-board open link for debug and programming"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Drag-n-drop programming"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"USB serial communication")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SWD debug with GDB+ pyOCD/OpenOCD, Keil or IAR")))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Arduino form factor, compatible with lots of shields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Build-in Ethernet, USB and SD card slot for connectivity and data exchange"))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("table",{cellspacing:"0",width:"80%"},(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"col"}," Item"),(0,a.kt)("th",{scope:"col"}," Typical")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Work Voltage"),(0,a.kt)("td",null," 5V")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Microcontroller"),(0,a.kt)("td",null," STM32F407VET6")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Flash Memory"),(0,a.kt)("td",null," 512kB")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," RAM"),(0,a.kt)("td",null," 192kB")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," UART"),(0,a.kt)("td",null," 4")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," I2C"),(0,a.kt)("td",null," 3")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," SPI"),(0,a.kt)("td",null," 3")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," CAN"),(0,a.kt)("td",null," 2")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," SDIO"),(0,a.kt)("td",null," 1")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Camera interface"),(0,a.kt)("td",null," 1")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Eth"),(0,a.kt)("td",null," 1")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," ADC Channels"),(0,a.kt)("td",null," 8")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," I/O pins"),(0,a.kt)("td",null,"40")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Digital I/O Max Input Voltage"),(0,a.kt)("td",null," 5.0V")),(0,a.kt)("tr",null,(0,a.kt)("th",{scope:"row"}," Diameter"),(0,a.kt)("td",null," 90mm x 44mm"))),(0,a.kt)("h2",{id:"pin-definition"},"Pin definition"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max/img/Arch_Max_Pinout.png",alt:null})),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_Max/img/Get_started_with_mbed.png",alt:null})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-MAX"},"this link")," to ",(0,a.kt)("strong",{parentName:"p"},"login or signup to mbed"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the mbed_blinky program")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click the ",(0,a.kt)("strong",{parentName:"p"},"Compile")," icon of the top toolbar to compile the program, then download a compiled hex file.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drag-n-drop the downloaded bin file into the MBED disk"))),(0,a.kt)("p",null,"You can open ",(0,a.kt)("strong",{parentName:"p"},"main.cpp")," to change the program. For example, use the following code to blink the LED every 0.1s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#include "mbed.h"\n\nDigitalOut led(LED1);           // on-board led is connected to D13\n\nint main()\n{\n    while (true) {\n        led =\xa0!led;\n        wait(0.1);\n    }\n}\n')),(0,a.kt)("h2",{id:"debug"},"Debug"),(0,a.kt)("p",null,"To enable SWD debug or to get debug message through USB Virtual serial, please install ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mbed.org/handbook/Windows-serial-configuration"},"the driver from mbed"),"."),(0,a.kt)("h2",{id:"update-or-restore-firmware"},"Update or Restore Firmware"),(0,a.kt)("p",null,"The latest firmware version for the Arch Max is v0203 built at Oct 8  2014. To check your firmware version and built date, open the MBED.HTM file of your MBED disk in a text editor."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin"},"The firmware v0203 2014-10-08 for Arch Max")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hold the Arch Max's button and power on it")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A CRP DISABLD disk will show"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"On Windows, replace firmware.bin with the above firmware"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On Linux/Mac, use command: ",(0,a.kt)("strong",{parentName:"li"},"dd if={new_firmware.bin} of={firmware.bin} conv=notrunc"))))))),(0,a.kt)("h2",{id:"version"},"Version"),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("th",null," Name "),(0,a.kt)("th",null," Version "),(0,a.kt)("th",null," Note")),(0,a.kt)("tr",null,(0,a.kt)("td",null," Arch Max v1.0 "),(0,a.kt)("td",null," v1.0 "),(0,a.kt)("td",null," 5V power supplier didn't connect to USB power, user should connect to ext-power")),(0,a.kt)("tr",null,(0,a.kt)("td",null," Arch Max v1.1 "),(0,a.kt)("td",null," v1.1 "),(0,a.kt)("td",null," 5V power supplier can connect to USB power"))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Eagle]"),"  ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/ARCH_Max.zip"},"Schematics Eagle file for ARCH Max")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.pdf"},"Arch Max PCB")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/Arch%20Max.sch"},"Arch Max sch")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Datasheet]"),"  ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_Max/res/STM32F407.pdf"},"STM32F407 datasheet"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
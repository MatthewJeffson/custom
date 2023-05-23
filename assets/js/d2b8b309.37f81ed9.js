"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=o,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const i={description:"Mouse",title:"Mouse",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBH-Mouse",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Using USB Mouse on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Mouse",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Mouse",title:"Mouse",description:"Mouse",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Mouse.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host",slug:"/Wio-Terminal-USBH-Mouse",permalink:"/custom/Wio-Terminal-USBH-Mouse",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Mouse.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Mouse",title:"Mouse",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBH-Mouse",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Keyboard",permalink:"/custom/Wio-Terminal-USBH-Keyboard"},next:{title:"Xbox",permalink:"/custom/Wio-Terminal-USBH-Xbox"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Procedures",id:"procedures",level:2},{value:"USB Host Configurations",id:"usb-host-configurations",level:2},{value:"Complete Code",id:"complete-code",level:2}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-usb-mouse-on-wio-terminal"},"Using USB Mouse on Wio Terminal"),(0,o.kt)("p",null,"This repo introduces how to use a USB Mouse on Wio Terminal. You can implement this example to input data from a Mouse to Wio Terminal!"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200108160611.gif"})),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("p",null,"To work with this example, you will need a ",(0,o.kt)("strong",{parentName:"p"},"USB OTG Adaptor")," and a ",(0,o.kt)("strong",{parentName:"p"},"USB to Serial Module"),", where the OTG adaptor is used to connect with Mouse and the USB to Serial module to read the outputs from Wio Terminal."),(0,o.kt)("h2",{id:"procedures"},"Procedures"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal using ",(0,o.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Unplug the USB type-C cable from Wio Terminal that used to upload the code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect your ",(0,o.kt)("strong",{parentName:"p"},"Mouse")," to the ",(0,o.kt)("strong",{parentName:"p"},"OTG adaptor")," then to the USB-C port of Wio Terminal."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Mouse"))," -> ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"OTG Adaptor"))," -> ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"Wio Terminal(Type-C Port)"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the ",(0,o.kt)("strong",{parentName:"p"},"USB to Serial Module")," to the Wio Terminal as follow:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"TXD(USB to Serial Module)"))," -> ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"RXD(Pin 10 on Wio Terminal)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"RXD(USB to Serial Module)"))," -> ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"TXD(Pin 8 on Wio Terminal)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"3.3V(USB to Serial Module)"))," -> ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"3.3V(Pin 1 on Wio Terminal)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GND(USB to Serial Module)"))," -> ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"GND(Pin 6 on Wio Terminal)"))))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Connect the USB to Serial Module to your computer. Depending on what USB to Serial Module used, ",(0,o.kt)("strong",{parentName:"p"},"download the USB driver")," for the module so that your computer can recognize it.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For Windows User, you can open Device Manager to check if it's recognized. A new ",(0,o.kt)("inlineCode",{parentName:"p"},"COM")," should appear."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For Mac user, use ",(0,o.kt)("inlineCode",{parentName:"li"},"ls /dev/cu.*")," in terminal to check the module availability."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To view data from Serial:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Windows:")," Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"PuTTY"),". Select ",(0,o.kt)("inlineCode",{parentName:"p"},"Serial")," and change the ",(0,o.kt)("inlineCode",{parentName:"p"},"COM")," in Serial line to the COM that appeared in the Device Manager, also change the Speed. to ",(0,o.kt)("inlineCode",{parentName:"p"},"115200")," and press Open. A Terminal should appear. Now, if you start pressing and moving the mouse, you should see the serial output!")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Mac:")," Open terminal and install ",(0,o.kt)("inlineCode",{parentName:"p"},"screen")," using ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install screen"),". Once installed, use the command ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"screen /dev/cu.usbserial 115200"))," where ",(0,o.kt)("inlineCode",{parentName:"p"},"/dev/cu.usbserial")," should match from above. You should be see serial output from Wio Terminal!"))))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Important Note:")," Because the USB port of Wio Terminal is being used for USB, to upload another program to Wio Terminal require entering Bootloader mode by pressing the power button twice(the LED will dim), then you should be able see the port again."),(0,o.kt)("h2",{id:"usb-host-configurations"},"USB Host Configurations"),(0,o.kt)("p",null,"To enable USB Host on Wio Terminal, you must configure two pins. Need to set ",(0,o.kt)("inlineCode",{parentName:"p"},"PIN_USB_HOST_ENABLE")," to ",(0,o.kt)("strong",{parentName:"p"},"LOW")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OUTPUT_CTR_5V")," to ",(0,o.kt)("strong",{parentName:"p"},"HIGH"),"."),(0,o.kt)("p",null,"You can do this simply by adding the following code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"void setup()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},"digitalWrite(PIN_USB_HOST_ENABLE, LOW);\ndigitalWrite(OUTPUT_CTR_5V, HIGH);\n")),(0,o.kt)("h2",{id:"complete-code"},"Complete Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <MouseController.h>\n#define SerialDebug Serial1\n\nuint32_t lastUSBstate = 0;\n\n// Initialize USB Controller\nUSBHost usb;\n\n// Attach mouse controller to USB\nMouseController mouse(usb);\n\n// variables for mouse button states\nbool leftButton = false;\nbool middleButton = false;\nbool rightButton = false;\n\n// This function intercepts mouse movements\nvoid mouseMoved() {\n  SerialDebug.print("Move: ");\n  SerialDebug.print(mouse.getXChange());\n  SerialDebug.print(", ");\n  SerialDebug.println(mouse.getYChange());\n}\n\n// This function intercepts mouse movements while a button is pressed\nvoid mouseDragged() {\n  SerialDebug.print("DRAG: ");\n  SerialDebug.print(mouse.getXChange());\n  SerialDebug.print(", ");\n  SerialDebug.println(mouse.getYChange());\n}\n\n// This function intercepts mouse button press\nvoid mousePressed() {\n  SerialDebug.print("Pressed: ");\n  if (mouse.getButton(LEFT_BUTTON)) {\n    SerialDebug.print("L");\n    leftButton = true;\n  }\n  if (mouse.getButton(MIDDLE_BUTTON)) {\n    SerialDebug.print("M");\n    middleButton = true;\n  }\n  if (mouse.getButton(RIGHT_BUTTON)) {\n    SerialDebug.print("R");\n    rightButton = true;\n  }\n  SerialDebug.println();\n}\n\n// This function intercepts mouse button release\nvoid mouseReleased() {\n  SerialDebug.print("Released: ");\n  if (!mouse.getButton(LEFT_BUTTON) && leftButton == true) {\n    SerialDebug.print("L");\n    leftButton = false;\n  }\n  if (!mouse.getButton(MIDDLE_BUTTON) && middleButton == true) {\n    SerialDebug.print("M");\n    middleButton = false;\n  }\n  if (!mouse.getButton(RIGHT_BUTTON) && rightButton == true) {\n    SerialDebug.print("R");\n    rightButton = false;\n  }\n  SerialDebug.println();\n}\n\nvoid setup()\n{\n  SerialDebug.begin( 115200 );\n  SerialDebug.println("Mouse Controller Program started");\n\n  if (usb.Init())\n      SerialDebug.println("USB host did not start.");\n\n  delay( 20 );\n\n  //Coqnfigure pins to enable USB Host on Wio Terminal\n  digitalWrite(PIN_USB_HOST_ENABLE, LOW);\n  digitalWrite(OUTPUT_CTR_5V, HIGH);\n\n}\n\nvoid loop()\n{\n  // Process USB tasks\n  usb.Task();\n\n  uint32_t currentUSBstate = usb.getUsbTaskState();\n  if (lastUSBstate != currentUSBstate) {\n    SerialDebug.print("USB state changed: 0x");\n    SerialDebug.print(lastUSBstate, HEX);\n    SerialDebug.print(" -> 0x");\n    SerialDebug.println(currentUSBstate, HEX);\n    switch (currentUSBstate) {\n      case USB_ATTACHED_SUBSTATE_SETTLE: SerialDebug.println("Device Attached"); break;\n      case USB_DETACHED_SUBSTATE_WAIT_FOR_DEVICE: SerialDebug.println("Detached, waiting for Device"); break;\n      case USB_ATTACHED_SUBSTATE_RESET_DEVICE: SerialDebug.println("Resetting Device"); break;\n      case USB_ATTACHED_SUBSTATE_WAIT_RESET_COMPLETE: SerialDebug.println("Reset complete"); break;\n      case USB_STATE_CONFIGURING: SerialDebug.println("USB Configuring"); break;\n      case USB_STATE_RUNNING: SerialDebug.println("USB Running"); break;\n    }\n    lastUSBstate = currentUSBstate;\n  }\n}\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},g="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(n),d=i,b=g["".concat(p,".").concat(d)]||g[d]||m[d]||r;return n?o.createElement(b,a(a({ref:t},s),{},{components:n})):o.createElement(b,a({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[g]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const r={description:"Xbox",title:"Xbox",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBH-Xbox",last_update:{date:"1/17/2023",author:"jianjing Huang"}},a="Using Xbox ONE Controller on Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Xbox",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Xbox",title:"Xbox",description:"Xbox",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Xbox.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host",slug:"/Wio-Terminal-USBH-Xbox",permalink:"/custom/Wio-Terminal-USBH-Xbox",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Host/Wio-Terminal-USBH-Xbox.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673913600,formattedLastUpdatedAt:"Jan 17, 2023",frontMatter:{description:"Xbox",title:"Xbox",keywords:["Wio_terminal USB_Host"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBH-Xbox",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Mouse",permalink:"/custom/Wio-Terminal-USBH-Mouse"},next:{title:"Overview",permalink:"/custom/Wio-Terminal-USBCLIENT-Overview"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Procedures",id:"procedures",level:2},{value:"USB Host Configurations",id:"usb-host-configurations",level:2},{value:"Complete Code",id:"complete-code",level:2}],s={toc:u},g="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(g,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-xbox-one-controller-on-wio-terminal"},"Using Xbox ONE Controller on Wio Terminal"),(0,i.kt)("p",null,"This repo introduces how to use a Xbox ONE Controller on Wio Terminal. With this example, you can implement to use a Xbox Controller to play games using the Wio Terminal!"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:"{500}",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/20200109132336.gif"})),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"To work with this example, you will need a ",(0,i.kt)("strong",{parentName:"p"},"USB OTG Adaptor")," and a ",(0,i.kt)("strong",{parentName:"p"},"USB to Serial Module"),", where the OTG adaptor is used to connect with Xbox controller and the USB to Serial module to read the outputs from Wio Terminal."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Xbox ONE Controller is used in this example. If using Xbox 360 controller or clone ones, please check ",(0,i.kt)("inlineCode",{parentName:"p"},"XBOXOLD.ino")," in the example."),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal using ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduino IDE"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Unplug the USB type-C cable from Wio Terminal that used to upload the code.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect your ",(0,i.kt)("strong",{parentName:"p"},"Xbox ONE Controller")," to the ",(0,i.kt)("strong",{parentName:"p"},"OTG adaptor")," then to the USB-C port of Wio Terminal."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Xbox ONE Controller"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"OTG Adaptor"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"Wio Terminal(Type-C Port)"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the ",(0,i.kt)("strong",{parentName:"p"},"USB to Serial Module")," to the Wio Terminal as follow:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TXD(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RXD(Pin 10 on Wio Terminal)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RXD(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"TXD(Pin 8 on Wio Terminal)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"3.3V(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"3.3V(Pin 1 on Wio Terminal)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GND(USB to Serial Module)"))," -> ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"GND(Pin 6 on Wio Terminal)"))))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect the USB to Serial Module to your computer. Depending on what USB to Serial Module used, ",(0,i.kt)("strong",{parentName:"p"},"download the USB driver")," for the module so that your computer can recognize it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For Windows User, you can open Device Manager to check if it's recognized. A new ",(0,i.kt)("inlineCode",{parentName:"p"},"COM")," should appear."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"For Mac user, use ",(0,i.kt)("inlineCode",{parentName:"li"},"ls /dev/cu.*")," in terminal to check the module availability."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"To view data from Serial:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Windows:")," Download and install ",(0,i.kt)("a",{parentName:"p",href:"https://www.putty.org/"},"PuTTY"),". Select ",(0,i.kt)("inlineCode",{parentName:"p"},"Serial")," and change the ",(0,i.kt)("inlineCode",{parentName:"p"},"COM")," in Serial line to the COM that appeared in the Device Manager, also change the Speed. to ",(0,i.kt)("inlineCode",{parentName:"p"},"115200")," and press Open. A Terminal should appear. Now, if you start pressing buttons on Xbox ONE controller, you should see the serial output!")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Mac:")," Open terminal and install ",(0,i.kt)("inlineCode",{parentName:"p"},"screen")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"brew install screen"),". Once installed, use the command ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"screen /dev/cu.usbserial 115200"))," where ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/cu.usbserial")," should match from above. You should be see serial output from Wio Terminal!"))))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important Note:")," Because the USB port of Wio Terminal is being used for USB, to upload another program to Wio Terminal require entering Bootloader mode by pressing the power button twice(the LED will dim), then you should be able see the port again."),(0,i.kt)("h2",{id:"usb-host-configurations"},"USB Host Configurations"),(0,i.kt)("p",null,"To enable USB Host on Wio Terminal, you must configure two pins. Need to set ",(0,i.kt)("inlineCode",{parentName:"p"},"PIN_USB_HOST_ENABLE")," to ",(0,i.kt)("strong",{parentName:"p"},"LOW")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"OUTPUT_CTR_5V")," to ",(0,i.kt)("strong",{parentName:"p"},"HIGH"),"."),(0,i.kt)("p",null,"You can do this simply by adding the following code in the ",(0,i.kt)("inlineCode",{parentName:"p"},"void setup()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"digitalWrite(PIN_USB_HOST_ENABLE, LOW);\ndigitalWrite(OUTPUT_CTR_5V, HIGH);\n")),(0,i.kt)("h2",{id:"complete-code"},"Complete Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <XBOXONE.h>\n#define SerialDebug Serial1\n\nUSBHost UsbH;\nXBOXONE Xbox(&UsbH);\n\nvoid setup() {\n  SerialDebug.begin(115200);\n  if (UsbH.Init()) {\n    SerialDebug.print(F("\\r\\nUSB host did not start"));\n    while (1); //halt\n  }\n  SerialDebug.print(F("\\r\\nXBOX USB Library Started"));\n\n  //Coqnfigure pins to enable USB Host on Wio Terminal\n  digitalWrite(PIN_USB_HOST_ENABLE, LOW);\n  digitalWrite(OUTPUT_CTR_5V, HIGH);\n\n}\nvoid loop() {\n  UsbH.Task();\n  if (Xbox.XboxOneConnected) {\n    if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500 || Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500 || Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500 || Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {\n      if (Xbox.getAnalogHat(LeftHatX) > 7500 || Xbox.getAnalogHat(LeftHatX) < -7500) {\n        SerialDebug.print(F("LeftHatX: "));\n        SerialDebug.print(Xbox.getAnalogHat(LeftHatX));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getAnalogHat(LeftHatY) > 7500 || Xbox.getAnalogHat(LeftHatY) < -7500) {\n        SerialDebug.print(F("LeftHatY: "));\n        SerialDebug.print(Xbox.getAnalogHat(LeftHatY));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getAnalogHat(RightHatX) > 7500 || Xbox.getAnalogHat(RightHatX) < -7500) {\n        SerialDebug.print(F("RightHatX: "));\n        SerialDebug.print(Xbox.getAnalogHat(RightHatX));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getAnalogHat(RightHatY) > 7500 || Xbox.getAnalogHat(RightHatY) < -7500) {\n        SerialDebug.print(F("RightHatY: "));\n        SerialDebug.print(Xbox.getAnalogHat(RightHatY));\n      }\n      SerialDebug.println();\n    }\n\n    if (Xbox.getButtonPress(L2) > 0 || Xbox.getButtonPress(R2) > 0) {\n      if (Xbox.getButtonPress(L2) > 0) {\n        SerialDebug.print(F("L2: "));\n        SerialDebug.print(Xbox.getButtonPress(L2));\n        SerialDebug.print("\\t");\n      }\n      if (Xbox.getButtonPress(R2) > 0) {\n        SerialDebug.print(F("R2: "));\n        SerialDebug.print(Xbox.getButtonPress(R2));\n        SerialDebug.print("\\t");\n      }\n      SerialDebug.println();\n    }\n\n    // Set rumble effect\n    static uint16_t oldL2Value, oldR2Value;\n    if (Xbox.getButtonPress(L2) != oldL2Value || Xbox.getButtonPress(R2) != oldR2Value) {\n      oldL2Value = Xbox.getButtonPress(L2);\n      oldR2Value = Xbox.getButtonPress(R2);\n      uint8_t leftRumble = map(oldL2Value, 0, 1023, 0, 255); // Map the trigger values into a byte\n      uint8_t rightRumble = map(oldR2Value, 0, 1023, 0, 255);\n      if (leftRumble > 0 || rightRumble > 0)\n        Xbox.setRumbleOn(leftRumble, rightRumble, leftRumble, rightRumble);\n      else\n        Xbox.setRumbleOff();\n    }\n\n    if (Xbox.getButtonClick(UP))\n      SerialDebug.println(F("Up"));\n    if (Xbox.getButtonClick(DOWN))\n      SerialDebug.println(F("Down"));\n    if (Xbox.getButtonClick(LEFT))\n      SerialDebug.println(F("Left"));\n    if (Xbox.getButtonClick(RIGHT))\n      SerialDebug.println(F("Right"));\n\n    if (Xbox.getButtonClick(START))\n      SerialDebug.println(F("Start"));\n    if (Xbox.getButtonClick(BACK))\n      SerialDebug.println(F("Back"));\n    if (Xbox.getButtonClick(XBOX))\n      SerialDebug.println(F("Xbox"));\n    if (Xbox.getButtonClick(SYNC))\n      SerialDebug.println(F("Sync"));\n\n    if (Xbox.getButtonClick(L1))\n      SerialDebug.println(F("L1"));\n    if (Xbox.getButtonClick(R1))\n      SerialDebug.println(F("R1"));\n    if (Xbox.getButtonClick(L2))\n      SerialDebug.println(F("L2"));\n    if (Xbox.getButtonClick(R2))\n      SerialDebug.println(F("R2"));\n    if (Xbox.getButtonClick(L3))\n      SerialDebug.println(F("L3"));\n    if (Xbox.getButtonClick(R3))\n      SerialDebug.println(F("R3"));\n\n\n    if (Xbox.getButtonClick(A))\n      SerialDebug.println(F("A"));\n    if (Xbox.getButtonClick(B))\n      SerialDebug.println(F("B"));\n    if (Xbox.getButtonClick(X))\n      SerialDebug.println(F("X"));\n    if (Xbox.getButtonClick(Y))\n      SerialDebug.println(F("Y"));\n  }\n  delay(1);\n}\n')))}m.isMDXComponent=!0}}]);
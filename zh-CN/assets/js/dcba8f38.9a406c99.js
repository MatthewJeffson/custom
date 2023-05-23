"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[15906],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(r),u=a,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||n;return r?i.createElement(h,l(l({ref:t},c),{},{components:r})):i.createElement(h,l({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<n;s++)l[s]=r[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},56165:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=r(87462),a=(r(67294),r(3905));const n={description:"Arch BLE",title:"Arch BLE",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arch_BLE",last_update:{date:"2/1/2023",author:"hushuxu"}},l=void 0,o={unversionedId:"Sensor/Arch/Arch_BLE",id:"Sensor/Arch/Arch_BLE",title:"Arch BLE",description:"Arch BLE",source:"@site/docs/Sensor/Arch/Arch_BLE.md",sourceDirName:"Sensor/Arch",slug:"/Arch_BLE",permalink:"/custom/zh-CN/Arch_BLE",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Arch/Arch_BLE.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"Arch BLE",title:"Arch BLE",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arch_BLE",last_update:{date:"2/1/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Arch Pro",permalink:"/custom/zh-CN/Arch_Pro"},next:{title:"Arch Link",permalink:"/custom/zh-CN/Arch_Link"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Applications",id:"applications",level:2},{value:"Update or Restore Firmware",id:"update-or-restore-firmware",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE.jpg",alt:null})),(0,a.kt)("p",null,"Arch BLE is an mbed enabled development board based on Nordic nRF51822. With Arduino form factor and Grove connectors, it is extremely easy to create a Bluetooth Low Energy(BLE) device."),(0,a.kt)("p",null,"The nRF51822 is a powerful multi-protocol single chip solution for ULP wireless applications. It incorporates Nordic\u2019s latest best-in-class performance radio transceiver, an ARM Cortex M0 MCU and 256kB flash + 16kB RAM memory. The nRF51822 supports Bluetooth\xae low energy and 2.4 GHz protocol stacks."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Arch-BLE-p-1998.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mbed enabled",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Online IDE"),(0,a.kt)("li",{parentName:"ul"},"Easy to use C/C++ SDK"),(0,a.kt)("li",{parentName:"ul"},"Handy libraries"))),(0,a.kt)("li",{parentName:"ul"},"CMSIS DAP based on LPC11U35",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Drag-n-drop programming"),(0,a.kt)("li",{parentName:"ul"},"Debug using CMSIS DAP standard"),(0,a.kt)("li",{parentName:"ul"},"USB virtual serial for communication"))),(0,a.kt)("li",{parentName:"ul"},"Arduino form factor with Grove connectors"),(0,a.kt)("li",{parentName:"ul"},"Nordic nRF51822 Multi-protocol Bluetooth\xae 4.0 low energy/2.4GHz RF SoC",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ARM Cortex M0 processor"),(0,a.kt)("li",{parentName:"ul"},"256kB flash/16kB RAM"),(0,a.kt)("li",{parentName:"ul"},"Configurable I/O mapping for digital I/O"))),(0,a.kt)("li",{parentName:"ul"},"USB Micro B connector")),(0,a.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_BLE/img/Arch_BLE_Pinout.png",alt:null})),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_BLE/img/Get_started_with_mbed.png",alt:null})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("a",{parentName:"li",href:"https://developer.mbed.org/compiler/#import:/teams/mbed/code/mbed_blinky/;platform:Seeed-Arch-BLE"},"this link")," to ",(0,a.kt)("strong",{parentName:"li"},"login or signup to mbed")),(0,a.kt)("li",{parentName:"ol"},"Import the mbed","_","blinky program"),(0,a.kt)("li",{parentName:"ol"},"Click the ",(0,a.kt)("strong",{parentName:"li"},"Compile")," icon of the top toolbar to compile the program, then download the compiled hex file."),(0,a.kt)("li",{parentName:"ol"},"Drag-n-drop the downloaded hex file into the MBED disk")),(0,a.kt)("p",null,"You can open ",(0,a.kt)("strong",{parentName:"p"},"main.cpp")," to change the program. For example, use the following code to blink the LED every 0.1s"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'    #include "mbed.h"\n\n    DigitalOut led(p30);           // on-board led is connected to p30\n\n    int main()\n    {\n        while (true) {\n            led =\xa0!led;\n            wait(0.1);\n        }\n    }\n')),(0,a.kt)("div",{className:"admonition note"},(0,a.kt)("p",{className:"admonition-title"},"Note"),"If you are get a compiling error that 'device.h' is not found, try to update the mbed library to the latest revision in your program."),(0,a.kt)("h2",{id:"applications"},"Applications"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Color Pixels, a colorful LED strip, can be controlled by mobile phone."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hardware"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"-  [Arch BLE](https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21)\n-  [Digital RGB LED Strip](https://www.seeedstudio.com/depot/Digital-RGB-LED-FlexiStrip-30-LED-1-Meter-p-1665.html)\n-  Android device with BLE\n")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_BLE/img/Ble_color_pixels_bb.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_BLE/img/Color_pixels_app.png",alt:null})))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"*  Make it run\n\n    1.  Download [BLE\\_Color\\_Pixels\\_Arch\\_BLE.hex](http://tangram.qiniudn.com/BLE_Color_Pixels_ARCH_BLE.hex)\n    2.  Copy the hex file to the MBED disk of your Arch BLE\n    3.  Download [the Color Pixels Android app](http://tangram.qiniudn.com/seeed_ble_color_pixels.apk)\n")),(0,a.kt)("p",null,"If you want to change the program, click ",(0,a.kt)("a",{parentName:"p",href:"https://mbed.org/compiler/#import:/teams/Seeed/code/BLE_Color_Pixels/;platform:Seeed-Arch-BLE"},"this link")," to import the Color Pixels program to mbed online IDE."),(0,a.kt)("p",null,"If the BLE device is disconnecting frequently, we can improve the stability by changing the BLE parameters - Advertising Duration (in main.cpp), Min Interval and Max Interval (in nRF51822/projectconfig.h)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#define CFG_GAP_CONNECTION_MIN_INTERVAL_MS           20                     /**< Minimum acceptable connection interval */\n#define CFG_GAP_CONNECTION_MAX_INTERVAL_MS          200                     /**< Maximum acceptable connection interval */\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A Toy car controlled by mobile phone."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hardware",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/Arch-BLE-p-1998.html?cPath=19_21"},"Arch BLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Shield-Bot-p-1380.html"},"Shield Bot"))))))),(0,a.kt)("h2",{id:"update-or-restore-firmware"},"Update or Restore Firmware"),(0,a.kt)("p",null,"The latest firmware version for the Arch BLE is v0221 built on March 02 2015. To check your firmware version and built date, open the MBED.HTM file of your MBED disk in a text editor."),(0,a.kt)("p",null,"Change log:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2014-06-26: First version"),(0,a.kt)("li",{parentName:"ul"},"2014-08-25: Support to drag-n-drop hex file generated by gcc toolchain and without softdevice"),(0,a.kt)("li",{parentName:"ul"},"2014-10-08: Use USB EJECT INSET instead of reconnecting USB, increase intel hex data line buffer (from 64 bytes to 128 bytes)"),(0,a.kt)("li",{parentName:"ul"},"2015-02-03: Fix Mac OS X 10.10 Yosemite read only file system bug")),(0,a.kt)("p",null,"Known issues:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issues when ",(0,a.kt)("em",{parentName:"li"},"directly")," downloading the hex file into the MBED disk with the Chrome browser. The reason is Chrome creates a temporary file while downloading. If you are using Chrome, please save the hex file to a different location and ",(0,a.kt)("em",{parentName:"li"},"then")," copy it to the MBED disk.")),(0,a.kt)("p",null,"Firmware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mbed.org/media/uploads/yihui/arch_ble_interface_v221_20150203_2.bin"},"The firmware v0221 2015-02-03 for Arch BLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20141008.bin"},"The firmware v0203 2014-10-08 for Arch BLE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mbed.org/media/uploads/yihui/lpc11u35_nrf51822_if_mbed_v203_20140825.bin"},"The firmware v0203 2014-08-25 for Arch BLE"))),(0,a.kt)("p",null,"To flash a new firmware:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hold the Arch BLE's button and power it ON."),(0,a.kt)("li",{parentName:"ul"},"A CRP DISABLD disk will pop up.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"On Windows, replace firmware.bin with the above firmware."),(0,a.kt)("li",{parentName:"ul"},"On Linux/Mac, use command: ",(0,a.kt)("strong",{parentName:"li"},"dd if={new","_","firmware.bin} of={firmware.bin} conv=notrunc"))))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mbed.org/platforms/Seeed-Arch-BLE/"},"Arch BLE mbed developer platform page")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_pdf.pdf"},"Schematic in PDF format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_BLE/res/Arch_BLE_v1.0_Eagle.zip"},"Schematic and board files in EAGLE format")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_BLE/res/Lpc11u35_nrf51822_if_mbed.bin.zip"},"LPC11U35 Firmware")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://tangram.qiniudn.com/seeed_ble_color_pixels.apk"},"Seeed BLE Color Pixels App for Android")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/ble_color_pixels"},"Sources of BLE Color Pixels App"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[63750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(r),d=n,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||l;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},99157:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={description:"Arch GPRS",title:"Arch GPRS",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arch_GPRS",last_update:{date:"2/1/2023",author:"hushuxu"}},i=void 0,o={unversionedId:"Sensor/Arch/Arch_GPRS",id:"Sensor/Arch/Arch_GPRS",title:"Arch GPRS",description:"Arch GPRS",source:"@site/docs/Sensor/Arch/Arch_GPRS.md",sourceDirName:"Sensor/Arch",slug:"/Arch_GPRS",permalink:"/custom/Arch_GPRS",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Arch/Arch_GPRS.md",tags:[],version:"current",lastUpdatedBy:"hushuxu",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"Arch GPRS",title:"Arch GPRS",keywords:["Arch"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Arch_GPRS",last_update:{date:"2/1/2023",author:"hushuxu"}},sidebar:"ProductSidebar",previous:{title:"Arch Link",permalink:"/custom/Arch_Link"},next:{title:"Arch GPRS V2",permalink:"/custom/Arch_GPRS_V2"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Interfaces",id:"interfaces",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"ARCH GPRS With Xively",id:"arch-gprs-with-xively",level:2},{value:"Programming Seeeduino Arch on Windows, Linux or Mac",id:"programming-seeeduino-arch-on-windows-linux-or-mac",level:2},{value:"See Also",id:"see-also",level:2},{value:"Notes",id:"notes",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_03.jpg",alt:null})," ")),(0,n.kt)("p",null,"Arch GPRS is an ",(0,n.kt)("a",{parentName:"p",href:"http://mbed.org/handbook/mbed-SDK"},"mbed")," enabled development board that houses a cellular networking module along with a microcontroller. It is similar to the ",(0,n.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_Arch/"},"Seeeduino Arch"),"  in that it also uses the LPC11U24 Microcontroller. With the Arch GPRS, you can use the mbed C/C++ SDK, libraries and optimizing online development tools to rapidly build your prototype.\nThe cellular networking module on the Arch GPRS is based on the EG-10 ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/General_Packet_Radio_Service"},"GPRS")," modem. With this, data collection functions can be performed easily using the 2G GSM based cellular network."),(0,n.kt)("p",null,"Arch GPRS has a standard ",(0,n.kt)("strong",{parentName:"p"},"Arduino")," interface as well as Grove connectors on board. It\u2019s convenient to connect existing Shields and ",(0,n.kt)("strong",{parentName:"p"},"Grove")," products to Arch GPRS. You can even connect a solar panel directly to the board to allow for the battery to charge from it. A low-power design guarantees easy charging and long hour operations when outdoors."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Arch-GPRS-p-1657.html?cPath=73"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",alt:null})," ")),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"mbed enabled"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"online development tools")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"easy to use C/C++ SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"lots of published libraries, projects")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"NXP LPC11U24 Controller"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Low power ARM Cortex-M0 Core")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"32KB Flash, 8KB RAM, 4KB EEPROM  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"USB Device, 2xSPI, UART, I2C")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"EG-10 Module  "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support wireless upgrade EG-10 firmware  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Support external SIM card\uff1a1.8V/3.3V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Compatible standard AT Command")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Equip with RTC function")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select automatically USB5V or Solar panel to charge a battery"))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Microcontroller"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"LPC11U24")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply Mode"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"USB or Solar Panel")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Charge Current"),(0,n.kt)("td",{parentName:"tr",align:null},"Solar panel"),(0,n.kt)("td",{parentName:"tr",align:null},"100 mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"USB 5V"),(0,n.kt)("td",{parentName:"tr",align:null},"400 mA")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Work Frequency"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"850/900/1800/1900 MHz")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface Type"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"USB Micro B")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SIM Card"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Class B(3V) and Class C(1.8V)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GPRS Characteristics"),(0,n.kt)("td",{parentName:"tr",align:null},"GPRS data transmission"),(0,n.kt)("td",{parentName:"tr",align:null},"downlink85.6kbps(Max);uplink 42.8kbps(Max)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Codes format"),(0,n.kt)("td",{parentName:"tr",align:null},"CS-1,CS-2,CS-3,CS-4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Function Support"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"Support for Data, Voice, SMS, and Fax")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EEPROM Capacity"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null},"256 KB")))),(0,n.kt)("h2",{id:"interfaces"},"Interfaces"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Interface_Function.jpg",alt:null})),(0,n.kt)("p",null,"Yellow Area is very similar in fashion to an Arduino board, and in fact it is used as such with our Shield board. Its pin destribution is almost the same as Seeeduino Arch(D11 and D13 are swaped), so you can click ",(0,n.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Seeeduino_Arch/#Pinout"},"here")," to observe each pin."),(0,n.kt)("p",null,"The above picture is the front view of Arch GPRS, Microcontroller LPC11U24 in back has not been marked out."),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("p",null,"Insert a SIM card into SIM Socket of Arch GPRS, you can dial a phone number or send messages.\nNow let's get started."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step one:")," Sign up a mbed account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"open ",(0,n.kt)("a",{parentName:"li",href:"https://mbed.org"},"https://mbed.org"),", click Login or signup. If you have already registered, please click login directly.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step two:")," Import Program"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the link: ",(0,n.kt)("a",{parentName:"li",href:"https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/"},"https://mbed.org/users/lawliet/code/ARCH_GPRS_Test/"),',  then click "Import this program" in the right corner while you can see the belowing picture. Now click "import" to complete the import of Arch GPRS program.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When the program has been imported into your account, you can see it in online development tool.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/Arch_GPRS_Test1.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step three")," Edit code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'open and change the main.cpp file from Arch GPRS program. Let\'s take calling up for example, you need to change "#define CALL_UP_TEST 0" into "#define CALL_UP_TEST 1", and change the paremeter of the function "gprsTest.callUp("133xxxx5949");".')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step four:")," Add a device"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click \u201dNo device selected\u201d in the right top corner, then click \u201dAdd a device\u201d in buttom left after you see the below picture.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%87.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pop up a page as shown below. Arch GPRS is compatible with mbed LPC11U24 and Seeeduino Arch, so you can  select either \u201dmbed LPC11U24\u201d or Seeeduino Arch. Here we take selecting Seeeduino Arch for example.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%871.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Enter Seeeduino Arch page and  click \u201dAdd to mbed Compiler\u201d, Now you complete successfully adding Seeeduino Arch. Return to mbed compiler and click \u201dNo device selected\u201d. The belowing picture appears after you click Seeeduino Arch in buttom left corner\uff1a")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/%E9%80%89%E6%8B%A9%E8%AE%BE%E5%A4%872.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You can see your selected  board in mbed online compiler after clicking \u201dSelect Platform\u201d.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step five\uff1a")," Compile\u3001download"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Click"Compile", A "Success!" appears while mbed IDE generates a bin. You need to save bin file to your PC.')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step six\uff1a")," Updata firmware"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect Arch GPRS's USB port to your computer using a USB Micro B cable and long press the botton, Arch GPRS will appear as a USB storage named CRP DISABLD.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/A_usb_device.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Go to the CRP DISABLD. Now you need add the bin file you have gotten to CRP DISABLD device. If bin file has exists in USB device, you need to delect it and add the new bin file.")),(0,n.kt)("p",null,"Quick press Arch GPRS's button and wait a moment, you will hear Arch GPRS calling you."),(0,n.kt)("h2",{id:"arch-gprs-with-xively"},"ARCH GPRS With Xively"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Arch_GPRS/img/ARCH_GPRS_With_Xively.png",alt:null})),(0,n.kt)("p",null,"Xively is an on-line database service allowing developers to connect sensor-derived data (e.g. energy and environment data from objects, devices & buildings) to the Web and to build their own applications based on that data. By using ARCH GPRS we can easily realize this."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step one\uff1a")," Sign up a Xively account"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"open ",(0,n.kt)("a",{parentName:"li",href:"https://xively.com/"},"https://xively.com/"),", click Login or signup. If you have already registered, please click login directly.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step two\uff1a")," Add your own device and Channels"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"you can create device and add channels as what you want.If you do not know how to do ,you can visit ",(0,n.kt)("a",{parentName:"li",href:"https://xively.com/get_started/"},"https://xively.com/get_started/"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step three\uff1a")," Import program"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the link: ",(0,n.kt)("a",{parentName:"li",href:"http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/"},"http://mbed.org/users/lawliet/code/ARCH_GPRS_Xively/"),',  then click "Import this program" in the right corner while you can see the belowing picture. Now click "import" to complete the import of Arch GPRS program.')),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step four\uff1a")," Add your own information"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"replace the FEED_ID & SENSOR_ID & XIVELY_KEY with yours,and connect your ARCH GPRS with sensor, then compile and updata firmware.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step five\uff1a")," check your sensor value"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"if successful, you will see your uploaded data in your channel graph.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")),(0,n.kt)("p",null,"If you use Seeeduino Arch on MAC or Linux, please read the application note --- ",(0,n.kt)("a",{parentName:"p",href:"http://www.lpcware.com/content/nxpfile/an11305-usb-system-programming-lpc11u3xlpc11u2x"},"USB ISP programming"),"."),(0,n.kt)("h2",{id:"programming-seeeduino-arch-on-windows-linux-or-mac"},"Programming Seeeduino Arch on Windows, Linux or Mac"),(0,n.kt)("p",null,"Seeeduino Arch doesn't have an mbed interface. It uses USB In-System-Programming(ISP) to upgrade the firmware."),(0,n.kt)("p",null,'To enter the USB ISP mode, connect the Arch with your computer and long press its button, and then a disk named "CRP DISABLD" will appear.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"on windows"),(0,n.kt)("p",{parentName:"li"},'  1.delete firmware.bin in the "CRP DISABLD" disk.'),(0,n.kt)("p",{parentName:"li"},"  2.copy a new firmware into the disk.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"on linux"),(0,n.kt)("p",{parentName:"li"},"  1.if the disk is not mounted, mount the disk at {mnt_dir}"),(0,n.kt)("p",{parentName:"li"},"  2.dd if={new_firmware.bin} of={mnt_dir}/firmware.bin conv=notrunc")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"on mac you'll need to use Terminal to run the following script to copy you're .bin file to your Arch"),(0,n.kt)("p",{parentName:"li"},"  1.dd if={new_firmare.bin} of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc**"),(0,n.kt)("p",{parentName:"li"}," If you're so inclined, you can also create an ",(0,n.kt)("strong",{parentName:"p"},"Automator"),' application to support drag-and-drop of the file to your board.  Just create a "Run Shell Script" with the following command:'),(0,n.kt)("p",{parentName:"li"}," dd if=$* of=/Volumes/CRP\\ DISABLD/firmware.bin conv=notrunc"))),(0,n.kt)("p",null,"Quick press the button to run the new firmware."),(0,n.kt)("h2",{id:"see-also"},"See Also"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://seeeddoc.github.io/Arch_GPRS_V2/"},"Arch GPRS V2"))),(0,n.kt)("h2",{id:"notes"},"Notes"),(0,n.kt)("p",null,"Arch GPRS doesn't come with ",(0,n.kt)("a",{parentName:"p",href:"https://mbed.org/handbook/mbed-HDK"},"an mbed interface"),". To output debug messages, please try ",(0,n.kt)("a",{parentName:"p",href:"https://mbed.org/handbook/USBSerial"},"USBSerial"),"."),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Eagle_File.zip"},"Arch GPRS Eagle File")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.pdf"},"Arch GPRS pdf")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[EAGLE]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch%20GPRS.sch"},"Arch GPRS sch")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[PDF]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS/res/Arch_GPRS_Schematic.pdf"},"Arch GPRS Schematic in PDF format")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Command]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS/res/AT%E6%8C%87%E4%BB%A4%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf"},"AT Command Reference")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Datasheet]"),(0,n.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Arch_GPRS/res/EG10%E7%94%A8%E6%88%B7%E6%89%8B%E5%86%8C.pdf"},"EG10 datasheet")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"[Demo]"),(0,n.kt)("a",{parentName:"li",href:"https://mbed.org/users/loovee/code/ARCH_GPRS_Demo/"},"demo"))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
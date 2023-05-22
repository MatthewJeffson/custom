"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[25362],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>k});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.createContext({}),p=function(e){var t=l.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=n,k=d["".concat(u,".").concat(c)]||d[c]||m[c]||r;return a?l.createElement(k,i(i({ref:t},s),{},{components:a})):l.createElement(k,i({ref:t},s))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<r;p++)i[p]=a[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2009:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var l=a(87462),n=(a(67294),a(3905));const r={title:"DSO Quad",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad/",slug:"/DSO_Quad",last_update:{date:"02/03/2022",author:"gunengyu"}},i=void 0,o={unversionedId:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad",id:"Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad",title:"DSO Quad",description:"DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware.",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Tools",slug:"/DSO_Quad",permalink:"/custom/DSO_Quad",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Tools/DSO_Quad.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"Feb 2, 2022",frontMatter:{title:"DSO Quad",keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DSO_Quad/",slug:"/DSO_Quad",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"DSO Nano/gcc",permalink:"/custom/DSO_Nano-gcc"},next:{title:"DSO Quad Manual (by the community)",permalink:"/custom/DSO_Quad_Manual_by_the_community"}},u={},p=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"User applications",id:"user-applications",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Components",id:"components",level:2},{value:"Caution",id:"caution",level:2},{value:"Upgrading firmware",id:"upgrading-firmware",level:2},{value:"Where to find firmware",id:"where-to-find-firmware",level:3},{value:"Version warning",id:"version-warning",level:3},{value:"Upgrade procedure",id:"upgrade-procedure",level:3},{value:"File Descriptions",id:"file-descriptions",level:3},{value:"Memory layout",id:"memory-layout",level:3},{value:"Related Pages",id:"related-pages",level:2},{value:"External Links",id:"external-links",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],s={toc:p};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad/img/P10308912-1024x684.jpg",alt:null})),(0,n.kt)("p",null,"DSO Quad also known as DSO203 is a pocket size 4 channel digital oscilloscope for common electronic engineering tasks. It's based on ARM cortex M3 (STM32F103VCT6), providing 72MS/s sampling rate with integrated FPGA and high speed ADC. An internal 2MB USB disk can be used to store waveform captures, user applications and to upgrade firmware."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/DSO-Quad-Aluminium-Alloy-Silver-p-1033.html?cPath=63_65"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pocket size and light weight"),(0,n.kt)("li",{parentName:"ul"},"Two 36MS/s analog channels, Upto 72MS/s if configured to single channel.",(0,n.kt)("strong",{parentName:"li"},"(Upgrade to Two 72MS/s analog channels, Upto 144MS/s if configured to single channel from .sys version v1.31)")),(0,n.kt)("li",{parentName:"ul"},"Two digital channels"),(0,n.kt)("li",{parentName:"ul"},"Signal Generator"),(0,n.kt)("li",{parentName:"ul"},"Various Triggering Option"),(0,n.kt)("li",{parentName:"ul"},"Easy waveform storage"),(0,n.kt)("li",{parentName:"ul"},"Firmware upgrade"),(0,n.kt)("li",{parentName:"ul"},"User applications"),(0,n.kt)("li",{parentName:"ul"},"Open source")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Source(s):")," ",(0,n.kt)("a",{parentName:"p",href:"http://www.downloadranking.com/privacypolicy.php"},"Features support")),(0,n.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"user-applications"},"User applications"),(0,n.kt)("p",null,"Ongoing projects:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GCC port with FFT, spectrogram and various fixes ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=2957"},"by pmos69 and marcosin"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Alternative user interface ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=10&t=2362"},"by gabonator1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"GCC port of the default firmware ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=10&t=2274"},"by tmbinc"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Frequency response plotter ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=10&t=2485"},"by jpa"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"FFT example application ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=2098"},"by gabonator1"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Logic analyzer ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=2861"},"by jpa"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Pawn programming environment and various applications ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=3239"},"by jpa"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Port of SYS to gcc: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/neilstockbridge/dsoquad-BIOS"},"[1]"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Tetris ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=2344"},"by LinX")))),(0,n.kt)("big",null,"Idea Collection "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Applications")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'"Simple Mode" - where only the most basic functions are available to help people without experience.')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter"},'"Multimeter mode" - basic multimeter functions (AC/DC VOM, peak/rms/delta would be nice)')),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Detailed at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter"},"https://github.com/PetteriAimonen/QuadPawn/wiki/Advanced-Volt-Meter")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Protocol analysis/data capture - Serial, I2C, SPI, CAN")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"LCR (uH, uF and R) measurement capability - The inbuilt signal generator makes this a natural. Three methods exist, all requiring an external component(s) ",(0,n.kt)("a",{parentName:"p",href:"http://www.edn.com/design/test-and-measurement/4363759/Circuit-measures-capacitance-or-inductance"},"Example"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Semiconductor Analyzer - Use the DAC to test and chart the voltage response of a diode / transistor (and simply identify components, such as transistor pinout and polarity)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"RF spectrum analyzer")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'A 2D X-Y mode that plots the analog channels against each other on two axes with a digital channel optionally functioning as a "beam" enable/disable.'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://forum.seeedstudio.com/"},"Something")," seems to exist? Not in APP2.50 yet."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"A DMX Decoder/Analyser and generator (used in conjunction with an external RS485 IC) would make this a VERY useful gadget for theatre techs.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Television mode (analog TV) : Display frame/field/line (select field A/B) or line number. Display vectorscope diagram. Display content (ie: the TV image).")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Synchronization with a second DSO Quad for a 4 channel analog/digital signal, perhaps similar USBscope50 ","[moved from HARDWARE]"))),(0,n.kt)("p",null,"use 'wave out' to generate a pulse/step when master unit triggers, use C/D as trigger for slave(s)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Create USB remote control software, such that if LCD breaks, you can still use it with PC software. ","[moved from HARDWARE]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Stream data to PC - Use PC as storage buffer, with additional processing power. A PC could decode I2C words and other protocols where the Quad wouldn't. ","[moved from HARDWARE]")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"White noise function - add to the functions generator"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enhancements")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A spectrum analyzer displaying a view from a frequency/time perspective"),(0,n.kt)("li",{parentName:"ul"},"Fast Fourier Transform, would be nice and easy for viewing spectrum data of a single signal.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Hardware/Device-Oriented")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"SDR (Software defined radio) note we only have USB full speed (12Mb/s)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Preamplifier 10x badly needed!!!")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add bezel buttons for easier to access menus.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add 2 more analog channels, Perhaps via USB dongle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Add port for expansion devices, such that and add-on device can offer more capabilities, like RF generation, or a function generator that is capable of larger amplitudes. In particular a +5v and 3.3v output would be useful."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Other")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'Service application for technical support staff. Could split the screen and display instructions like "Check if port 3, pin 5 has a signal, if not xyz might be broken". There could be a next button and for each step the text, the right timescale, trigger values etc. are selected')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"My phone is ARM based, perhaps make a USB version of this and an app for my phone, that allows my phone to be the display / insured touch screen display.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Simple math functions on both analog channels and generated signal.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Two totally ground separated input would enable measureing inputs, which are not the same ground referenced. (like in the Velleman two-channel personal scope)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Input overvoltage protection diode should be added to protect device form HV spikes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Oversampling and its software implementation could decrease noise, and increase effective bit depth")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Special technique equivalent time sampling, could increase bandwidth for repetitive signals")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Non-storage mode which constantly sweeps the visible area instead of storing into a huge offscreen buffer. I set the sample rate to 50ms in the current version (eg. to look at an audio signal) it only updates the screen once every few seconds, it should update continuously.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("em",{parentName:"p"},"Please add more ideas...")))),(0,n.kt)("p",null,"See also information on application development for the DSO Quad"),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("hr",null),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null," Analog channel *2                "),(0,n.kt)("td",null," [CH_A] [CH_B]")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Digital channel* 2               "),(0,n.kt)("td",null," [CH_C] [CH_D]")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Vertical Scale                    "),(0,n.kt)("td",null," 20mV-10V/div (1-2-5 step) on x1 probe / 200mV -100V/div (1-2-5 step) on x10 probe")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Vertical resolution               "),(0,n.kt)("td",null," 8 bit")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Input coupling                    "),(0,n.kt)("td",null," AC/DC")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Max input voltage                 "),(0,n.kt)("td",null," 80Vpp (x1 probe) / 400Vpp (x10 probe)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Storage                           "),(0,n.kt)("td",null," 4K per channel / 8K on single channel")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Software trigger type             "),(0,n.kt)("td",null," edge, pulse, level (to be added)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Hardware trigger type             "),(0,n.kt)("td",null," edge")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Trigger source                    "),(0,n.kt)("td",null," CH1/CH2/EXT")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Trigger mode                      "),(0,n.kt)("td",null," Auto, Normal, Single, SCAN, None")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Test Signal generator             "),(0,n.kt)("td",null," 10Hz to 8MHz 2.8Vpp Square Wave, duty cycle 10~90% adjustable / 10Hz to 20kHz 2.8Vpp Sine, Square, Sawtooth, Triangle wave")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Storage                           "),(0,n.kt)("td",null," internal 2MB USB disk, BMP, DAT file")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Auto measure                      "),(0,n.kt)("td",null," Vmax, Vmin, Vpp, Vavr, Vrms, Freq, Period, Pulse, Duty")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Cursor measurement                "),(0,n.kt)("td",null," Level, Voltage")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Display mode                      "),(0,n.kt)("td",null," CH1, CH2, EXT, CH1+CH2, CH1-CH2")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Sampling mode                     "),(0,n.kt)("td",null," real time")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Sampling rate                     "),(0,n.kt)("td",null," 30S/s - 72MS/s")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Power                             "),(0,n.kt)("td",null," LiPo battery")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Dimension                         "),(0,n.kt)("td",null," 98 *60* 14.5 (mm)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Weight                            "),(0,n.kt)("td",null," 80g (without battery)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Accesories within Pack            "),(0,n.kt)("td",null," 2 mcx osilloscope probe, 2 mcx digital probe"))),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Please add links to core components data-sheets like"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("td",null," CPU                 "),(0,n.kt)("td",null," 72 Mhz - ARM 32-bit Cortex\u2122-M3 CPU - STM32F103VC [[2]](http://www.st.com/internet/mcu/product/164492.jsp)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," FPGA                "),(0,n.kt)("td",null,"ICE65F_VQ100 [[3]](http://www.siliconbluetech.com/media/downloads/iCE65L04DiCEDatasheet.pdf)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," TFT                 "),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null," ADC                 "),(0,n.kt)("td",null," AD9288-40 [[4]](http://www.analog.com/static/imported-files/data_sheets/AD9288.pdf)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," OP-Amps             "),(0,n.kt)("td",null," OPA2354 [[5]](http://www.datasheetcatalog.org/datasheet/texasinstruments/opa354.pdf)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," MOSFET-Switches     "),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null," USB-Storage         "),(0,n.kt)("td",null)),(0,n.kt)("tr",null,(0,n.kt)("td",null," (add more here)     "),(0,n.kt)("td",null))),(0,n.kt)("h2",{id:"caution"},"Caution"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Improper operation of this device could result in physical injury and/or damage to the device. Note all necessary precautions, and be sure to read all documentation before using the device."),(0,n.kt)("h2",{id:"upgrading-firmware"},"Upgrading firmware"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Please note that this procedure currently only works under Windows. ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad#upgrading-firmware",title:"DSO_Quad/#upgrading-firmware"},"Instructions For Linux are here"),". (2011-04-29) If we can get the upgrade disk to work on Linux and Mac, it would be quite easy to write an application to automate this process for less experienced users. It might even be possible to have the upgrade program check the hardware version to prevent uploading the wrong firmware."),(0,n.kt)("h3",{id:"where-to-find-firmware"},"Where to find firmware"),(0,n.kt)("p",null,"Here is the ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Quad/res/PA1_V113.zip"},"latest firmware"),"."),(0,n.kt)("p",null,"You could also ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad-Building_Firmware",title:"DSO Quad:Building Firmware"},"build the firmware from source"),"."),(0,n.kt)("h3",{id:"version-warning"},"Version warning"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"WARNING"),": It is important that you use the firmware for your particular hardware version. The hardware version is shown on the splash screen when you boot the device. Ask for help in the forums if you can't determine your hardware version. If you upload the wrong firmware, you could brick the device."),(0,n.kt)("h3",{id:"upgrade-procedure"},"Upgrade procedure"),(0,n.kt)("p",null,'(Windows only) Connect the DSO Quad to your PC with a mini USB cable. Hold down the "',">",'||" (play/pause) button while turning on the device. Your device is now in firmware upgrade mode, and a USB disk should appear on your system. You copy the firmware files one at a time, and each time you copy a new file, the device will disconnect to prepare the file. When the disk reconnects, the extension of the file you uploaded will change (".rdy" means the upload worked properly).'),(0,n.kt)("p",null,"The order that you upload the files in DOES matter. Start by uploading the .hex files (order unimportant). To upload the .BIN files, you need to first upload the corresponding .ADR file. This tells the device where to put the binary file (e.g. upload CFG_FPGA.ADR first, then upload xxxxFPGA.BIN immediately after). If you make a mistake, delete all the files and start again."),(0,n.kt)("p",null,"When you're finished uploading all the firmware files, turn off the device to complete the upgrade. When you boot the device again, your firmware versions should be updated. If you get an error at the splash screen, try uploading the firmware again, carefully following the instructions above."),(0,n.kt)("p",null,"More details and Linux instructions here: ",(0,n.kt)("a",{parentName:"p",href:"/DSO_Quad#upgrading-firmware",title:"DSO_Quad/#upgrading-firmware"},"DSO_Quad:Upgrading_Firmware")),(0,n.kt)("h3",{id:"file-descriptions"},"File Descriptions"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," File Type "),(0,n.kt)("th",null," Filename Format "),(0,n.kt)("th",null," Description")),(0,n.kt)("tr",null,(0,n.kt)("td",null," FPGA File "),(0,n.kt)("td",null," xxxxFPGA.BIN "),(0,n.kt)("td",null," configuration data for the FPGA")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Logo File "),(0,n.kt)("td",null," logo_xxx.BIN "),(0,n.kt)("td",null," Create any 16 color 64*256 .BMP file (filesize = 46.9KB), and change the extension to .INF. This is the image displayed on the splash screen.")),(0,n.kt)("tr",null,(0,n.kt)("td",null," System File "),(0,n.kt)("td",null," SYS_xxxx.hex "),(0,n.kt)("td",null," ??? (description needed)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Application File "),(0,n.kt)("td",null," APP_xxxx.hex "),(0,n.kt)("td",null," ??? (description needed)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," Address File "),(0,n.kt)("td",null," xxxx.ADR "),(0,n.kt)("td",null," These files tell the device where to put the next .BIN file you upload. There is one for the FPGA file, and one for the LOGO file. The files are named so that you know which goes with which."))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"note:")," as newer versions become available, these filenames may appear slightly different. The x's represent values that could change over time."),(0,n.kt)("h3",{id:"memory-layout"},"Memory layout"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/DSO_Quad/img/DSOQuad-bug-2.jpg",alt:null})),(0,n.kt)("table",{cellpadding:"1",cellspacing:"1"},(0,n.kt)("tr",null,(0,n.kt)("td",null," Begin"),(0,n.kt)("td",null," End"),(0,n.kt)("td",null," Size"),(0,n.kt)("td",null," note")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x00000"),(0,n.kt)("td",null," 0x03fff"),(0,n.kt)("td",null," 16384"),(0,n.kt)("td",null," DFU")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x04000"),(0,n.kt)("td",null," 0x0bfff"),(0,n.kt)("td",null," 32768"),(0,n.kt)("td",null," SYS")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x0c000"),(0,n.kt)("td",null," 0x13fff"),(0,n.kt)("td",null," 32768"),(0,n.kt)("td",null," APP1 (default)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x14000"),(0,n.kt)("td",null," 0x1bfff"),(0,n.kt)("td",null," 32768"),(0,n.kt)("td",null," APP2")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x1c000"),(0,n.kt)("td",null," 0x23fff"),(0,n.kt)("td",null," 32768"),(0,n.kt)("td",null," APP3")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x24000"),(0,n.kt)("td",null," 0x2bfff"),(0,n.kt)("td",null," 32768"),(0,n.kt)("td",null," APP4")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x2c000"),(0,n.kt)("td",null," 0x3d7ff"),(0,n.kt)("td",null," 71680"),(0,n.kt)("td",null," FPGA bitstream (Datasheet says maximum size is 533KBit, so this is a bit large)")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 0x3d800"),(0,n.kt)("td",null," 0x3ffff"),(0,n.kt)("td",null," 10240"),(0,n.kt)("td",null," Logo (bmp, 256x64, 4 bit)"))),(0,n.kt)("p",null," Note: The flash base address is 0x08000000, but is mirrored by the chip at 0x00000000 when BOOT0 is low."),(0,n.kt)("h2",{id:"related-pages"},"Related Pages"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/DSO_Quad-Calibration"},"DSO Quad:Calibration"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/DSO_Quad/#upgrading-firmware"},"DSO Quad:Upgrading Firmware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/DSO_Quad-Beta_HW"},"DSO Quad:Beta HW")))),(0,n.kt)("h2",{id:"external-links"},"External Links"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Seeedstudio Blog ",(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/tag/dso-quad/"},"[6]"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"More photos on flickr ",(0,n.kt)("a",{parentName:"p",href:"http://www.flickr.com/photos/seeedstudio/tags/dsoquad/"},"[7]"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"http://translate.google.gr/translate?js=n&prev=_t&hl=zh-CN&ie=UTF-8&layout=2&eotf=1&sl=zh-CN&tl=en&u=http%3A%2F%2Fwww.minidso.com%2Fforum%2Fviewtopic.php%3Ff%3D4%26t%3D54"},"DS203 application in BMW inspection (Chinese, translated automatically in to english)")," [",(0,n.kt)("a",{parentName:"p",href:"http://www.minidso.com/forum/viewtopic.php?f=4&t=54"},"Original page")," ] - Some guys working for BMW inspected the car with a DSO203, besides the palm size and handy performance, DSO203 operates perfectly in inspecting the BWM bus:FlexRay."))),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/109990015/DS203.V2.72.zip"},"Latest V2.72 firmware"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/DSO_Quad/#upgrading-firmware"},"Schematic and firmware (HW2.2 ~ HW2.72)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=22&t=1929"},"Discussion board with resouces for HW2.6"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Quad/res/DS203_yijian_app_user_manual.rar"},"DS203_yijian_app_user_manual.rar\u200e"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/DSO_Quad/res/DSO203_user_Guide_2.pdf"},"DSO Quad Manual")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
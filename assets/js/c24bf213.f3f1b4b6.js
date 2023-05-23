"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[99960],{3905:(t,l,n)=>{n.d(l,{Zo:()=>i,kt:()=>g});var e=n(67294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function d(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function k(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?d(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function r(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},d=Object.keys(t);for(e=0;e<d.length;e++)n=d[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(e=0;e<d.length;e++)n=d[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var o=e.createContext({}),a=function(t){var l=e.useContext(o),n=l;return t&&(n="function"==typeof t?t(l):k(k({},l),t)),n},i=function(t){var l=a(t.components);return e.createElement(o.Provider,{value:l},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,d=t.originalType,o=t.parentName,i=r(t,["components","mdxType","originalType","parentName"]),s=a(n),p=u,g=s["".concat(o,".").concat(p)]||s[p]||c[p]||d;return n?e.createElement(g,k(k({ref:l},i),{},{components:n})):e.createElement(g,k({ref:l},i))}));function g(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var d=n.length,k=new Array(d);k[0]=p;var r={};for(var o in l)hasOwnProperty.call(l,o)&&(r[o]=l[o]);r.originalType=t,r[s]="string"==typeof t?t:u,k[1]=r;for(var a=2;a<d;a++)k[a]=n[a];return e.createElement.apply(null,k)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5045:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>o,contentTitle:()=>k,default:()=>s,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var e=n(87462),u=(n(67294),n(3905));const d={description:"Xadow IO pin mapping",title:"Xadow IO pin mapping",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IO_pin_mapping",last_update:{date:"1/16/2023",author:"jianjing Huang"}},k=void 0,r={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping",id:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping",title:"Xadow IO pin mapping",description:"Xadow IO pin mapping",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage",slug:"/Xadow_IO_pin_mapping",permalink:"/custom/Xadow_IO_pin_mapping",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Enhanced_Usage/Xadow_IO_pin_mapping.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673827200,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Xadow IO pin mapping",title:"Xadow IO pin mapping",keywords:["Sorftware"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_IO_pin_mapping",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Flashing the Arduino Bootloader using DAP Link",permalink:"/custom/Flashing-Arduino-Bootloader-DAPLink"},next:{title:"IR Remote",permalink:"/custom/IR_Remote"}},o={},a=[{value:"Xadow FFC IO bus and matching Arduino and Atmega information and example Arduino code",id:"xadow-ffc-io-bus-and-matching-arduino-and-atmega-information-and-example-arduino-code",level:2},{value:"Some MORE Xadow IO pins - only on the Main module, NOT on the FFC bus",id:"some-more-xadow-io-pins---only-on-the-main-module-not-on-the-ffc-bus",level:2},{value:"The BIG Table of Xadow modules and the IO bus pin use for each module",id:"the-big-table-of-xadow-modules-and-the-io-bus-pin-use-for-each-module",level:2},{value:"Tech Support",id:"tech-support",level:2}],i={toc:a};function s(t){let{components:l,...n}=t;return(0,u.kt)("wrapper",(0,e.Z)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Single reference page for all pin information including:-"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"How to use each pin in your Arduino code")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"Xadow FFC to Atmega32u4 pin mapping")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"pins that have interrupts and timers")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"the 2 serial ports, IIc and ISP")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"additional on board IO, that might be hacked"))),(0,u.kt)("p",null,"The tables provide different views of the data and are especially useful when you are planning which modules to use and which IO pins for direct use!"),(0,u.kt)("h2",{id:"xadow-ffc-io-bus-and-matching-arduino-and-atmega-information-and-example-arduino-code"},"Xadow FFC IO bus and matching Arduino and Atmega information and example Arduino code"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"4"}," ",(0,u.kt)("strong",null,"Xadow FFC pins")),(0,u.kt)("td",{colspan:"2"}," ",(0,u.kt)("strong",null,"Arduino")),(0,u.kt)("td",{colspan:"2"}," ",(0,u.kt)("strong",null,"Atmega32u4 pins")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Name")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"IO function")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Alternate use")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"#")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"IO Pin")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"code example(s)")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Name (",(0,u.kt)("strong",null,"interrupts in red"),")")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"#")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Notes"))),(0,u.kt)("tr",null,(0,u.kt)("td",null," P1"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," ISP SCK"),(0,u.kt)("td",null," 1"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"15")),(0,u.kt)("td",null," PinMode(15, OUTPUT); digitalWrite(15, HIGH);"),(0,u.kt)("td",null," PB1",(0,u.kt)("strong",null,"(PCINT1"),"/SCLK)"),(0,u.kt)("td",null," 9"),(0,u.kt)("td",null," ISP SMD header pads also on rear of Xado Main board")),(0,u.kt)("tr",null,(0,u.kt)("td",null," P2"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," ISP MOSI"),(0,u.kt)("td",null," 2"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"16")),(0,u.kt)("td",null," PinMode(16, OUTPUT); digitalWrite(16, HIGH);"),(0,u.kt)("td",null," PB2(PDI/",(0,u.kt)("strong",null,"PCINT2"),"/MOSI)"),(0,u.kt)("td",null," 10")),(0,u.kt)("tr",null,(0,u.kt)("td",null," P3"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," ISP MISO"),(0,u.kt)("td",null," 3"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"14")),(0,u.kt)("td",null," PinMode(14, OUTPUT); digitalWrite(14, HIGH);"),(0,u.kt)("td",null," PB3(PDO/",(0,u.kt)("strong",null,"PCINT3"),"/MISO)"),(0,u.kt)("td",null," 11")),(0,u.kt)("tr",null,(0,u.kt)("td",null," P4"),(0,u.kt)("td",null," Analogue Pin"),(0,u.kt)("td",null," Digital pin!"),(0,u.kt)("td",null," 4"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"A5")),(0,u.kt)("td",null," analogWrite(A5, 128); pinMode(A5, OUTPUT); digitalWrite(A5, HIGH);"),(0,u.kt)("td",null," PF0(ADC0)"),(0,u.kt)("td",null," 41"),(0,u.kt)("td",null," Arduino analogue pins can also be used as digital pins!")),(0,u.kt)("tr",null,(0,u.kt)("td",null," P5"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," IIC SCL"),(0,u.kt)("td",null," 9"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"3")),(0,u.kt)("td",null," PinMode(3, OUTPUT); digitalWrite(3, HIGH);"),(0,u.kt)("td",null," PD0(OC0B/SCL/",(0,u.kt)("strong",null,"INT0"),")"),(0,u.kt)("td",null," 18"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," P6"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," IIC SDA"),(0,u.kt)("td",null," 10"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"2")),(0,u.kt)("td",null," PinMode(2, OUTPUT); digitalWrite(2, HIGH);"),(0,u.kt)("td",null," PD1 (SDA/",(0,u.kt)("strong",null,"INT1"),")"),(0,u.kt)("td",null," 19"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," P7"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," Serial Rxd"),(0,u.kt)("td",null," 11"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"0")),(0,u.kt)("td",null," PinMode(0, OUTPUT); digitalWrite(0, HIGH);"),(0,u.kt)("td",null," PD2(RXD/",(0,u.kt)("strong",null,"INT2"),")"),(0,u.kt)("td",null," 20"),(0,u.kt)("td",null," See Xadow BLE/GPS examples for these serial pin usage info.",(0,u.kt)("p",null,"NOT same serial port uploading code\u2013see Red/Green LED below."))),(0,u.kt)("tr",null,(0,u.kt)("td",null," P8"),(0,u.kt)("td",null," Digital Pin"),(0,u.kt)("td",null," Serial Txd"),(0,u.kt)("td",null," 12"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"1")),(0,u.kt)("td",null," PinMode(1, OUTPUT); digitalWrite(1, HIGH);"),(0,u.kt)("td",null," PD3(TXD/",(0,u.kt)("strong",null,"INT3"),")"),(0,u.kt)("td",null," 21"))),(0,u.kt)("h2",{id:"some-more-xadow-io-pins---only-on-the-main-module-not-on-the-ffc-bus"},"Some MORE Xadow IO pins - only on the Main module, NOT on the FFC bus"),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",{colspan:"4"}," ",(0,u.kt)("strong",null,"Xadow pins")),(0,u.kt)("td",{colspan:"2"}," ",(0,u.kt)("strong",null,"Arduino")),(0,u.kt)("td",{colspan:"2"}," ",(0,u.kt)("strong",null,"Atmega32u4 pins")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Name")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"IO function")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Alternate use")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"#")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"IO Pin")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"code example(s)")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Name (",(0,u.kt)("strong",null,"interrupts in red"),")")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"#")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Notes"))),(0,u.kt)("tr",null,(0,u.kt)("td",null," Red LED"),(0,u.kt)("td",null," Rx"),(0,u.kt)("td",null),(0,u.kt)("td",null," -"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"17")),(0,u.kt)("td",null," PinMode(17, OUTPUT); digitalWrite(17, HIGH);"),(0,u.kt)("td",null," PB0(SS/",(0,u.kt)("strong",null,"PCINT0"),")"),(0,u.kt)("td",null," 8"),(0,u.kt)("td",null," Serial port uploading code")),(0,u.kt)("tr",null,(0,u.kt)("td",null," Green LED"),(0,u.kt)("td",null," Tx"),(0,u.kt)("td",null),(0,u.kt)("td",null," -"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"11")),(0,u.kt)("td",null," PinMode(11, OUTPUT); digitalWrite(11, HIGH);"),(0,u.kt)("td",null," PB7(",(0,u.kt)("strong",null,"PCINT7"),"/OC0A/OC1C/!RTS)"),(0,u.kt)("td",null," 12")),(0,u.kt)("tr",null,(0,u.kt)("td",null," Wake"),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," -"),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"10")),(0,u.kt)("td",null," Have not yet connected and validated this!"),(0,u.kt)("td",null," PB^/A10/D10"),(0,u.kt)("td",null," 30"),(0,u.kt)("td",null," On board switch \u2013 you need super soldering skills to access this!"))),(0,u.kt)("p",null,"Note: Reset switch is connected to Atmega32u4 Reset pin 13 via a diode \u2013 so no access to the 32u4 IO pin AT THE RESET SWITCH!"),(0,u.kt)("h2",{id:"the-big-table-of-xadow-modules-and-the-io-bus-pin-use-for-each-module"},"The BIG Table of Xadow modules and the IO bus pin use for each module"),(0,u.kt)("p",null,"Why such a big complicated table? Well it brings together all of the IO information in one place, but more importantly it lets you see which IO pins are still available once you have selected several Xadow modules! Also the schematic has different FFC pin numbers to the rest of the wiki documentation!"),(0,u.kt)("p",null,"Notes:-"),(0,u.kt)("ol",null,(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Remember that IIC devices are daisy chained \u2013 that is they can connect in parallel, so you can have more than one IIC device connected to the same pins!")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Need more IO pins? You may be able to use ONE pin for several different uses, the same way the vibration motor and buzzer are sharing one pin, or in some situations you can use the same pin for different purposes at DIFFERENT TIMES. For example you might set a pin as output to trigger an ultrasonic sensor, then change the pin to input to detect when the signal is received!")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Most IIC modules {except the Main Board module, LED, RTC}, ALSO have IIC breakout pins."))),(0,u.kt)("p",null,"So items in purple in the IIC SCL ","&"," IIC SDA columns do NOT also have breakout pins!"),(0,u.kt)("ol",{start:4},(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"Additional details highlighted in yellow in center of table document the ",(0,u.kt)("strong",{parentName:"p"},"ADDITIONAL")," breakout pins on each Xadow module!")),(0,u.kt)("li",{parentName:"ol"},(0,u.kt)("p",{parentName:"li"},"? = Don't know, or not yet verified!"))),(0,u.kt)("table",null,(0,u.kt)("tr",null,(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCK")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"MOSI")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"MISO")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"A5")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"3")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"2")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"1")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"0")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Arduino Pin name"))),(0,u.kt)("tr",null,(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Interrupts in red--------\x3e")),(0,u.kt)("td",null," PB1(PCINT1/SCLK)"),(0,u.kt)("td",null," PB2(PDI/",(0,u.kt)("strong",null,"PCINT2"),"/MOSI)"),(0,u.kt)("td",null," PB3(PDO/",(0,u.kt)("strong",null,"PCINT3"),"/MISO)"),(0,u.kt)("td",null," PF0(ADC0)"),(0,u.kt)("td",null," PD0(OC0B/SCL/INT0)"),(0,u.kt)("td",null," PD1(SDA/",(0,u.kt)("strong",null,"INT1"),")"),(0,u.kt)("td",null," PD2(RXD/",(0,u.kt)("strong",null,"INT2"),")"),(0,u.kt)("td",null," PD3(TXD/",(0,u.kt)("strong",null,"INT3"),")"),(0,u.kt)("td",null," Atmega32u4 pin Name")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"IIC = I2C"))),(0,u.kt)("td",null),(0,u.kt)("td",null," 9"),(0,u.kt)("td",null," 10"),(0,u.kt)("td",null," 11"),(0,u.kt)("td",null," 41"),(0,u.kt)("td",null," 18"),(0,u.kt)("td",null," 19"),(0,u.kt)("td",null," 20"),(0,u.kt)("td",null," 21"),(0,u.kt)("td",null," Atmega32u4 pin#")),(0,u.kt)("tr",null,(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," P1, 1"),(0,u.kt)("td",null," P2, 2"),(0,u.kt)("td",null," P3, 3"),(0,u.kt)("td",null," P4, 4"),(0,u.kt)("td",null," P5, 9"),(0,u.kt)("td",null," P6, 10"),(0,u.kt)("td",null," P7, 11"),(0,u.kt)("td",null," P8,12"),(0,u.kt)("td",null," FFC pin Name, #")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Xadow Modules ")),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Module Control Mode & Address")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Digital Pin ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Digital Pin ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Digital Pin ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"Analog or "),"Digital Pin ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"IIC SCL"))),(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"IIC SDA"))),(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"Serial Rxd"))),(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"Serial Txd"))),(0,u.kt)("td",null," ",(0,u.kt)("strong",null,"Xadow Pin function"))),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"3-Axis Accelerometer ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x53")),(0,u.kt)("td",null," SCK"),(0,u.kt)("td",null," MOSI"),(0,u.kt)("td",null," MISO"),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"A5")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null," Rxd"),(0,u.kt)("td",null," TxD"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"BaroMeter ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x77")),(0,u.kt)("td",null," SCK"),(0,u.kt)("td",null," MOSI"),(0,u.kt)("td",null," MISO"),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"A5")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null," Rxd"),(0,u.kt)("td",null," TxD"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"BLE Slave ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Serial ")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",{colspan:"2"}," ",(0,u.kt)("center",null,"RX/TX ")),(0,u.kt)("td",null," Plus pads specific to BLE on rear")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Breakout ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"None!")),(0,u.kt)("td",null," SCK"),(0,u.kt)("td",null," MOSI"),(0,u.kt)("td",null," MISO"),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"A5")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null," Rxd"),(0,u.kt)("td",null," TxD"),(0,u.kt)("td",null," + Grove I2C & Serial sockets")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"LED Controller ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x04")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"OLED ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x3C")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Vibration Motor ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Digital Signal ")),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"H ")),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"H ")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," _",(0,u.kt)("strong",null,"Disconnect module BEFORE using ISP"),"_")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"RTC ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x68")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," rear pad connect INTB \u2013 Int0???")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Buzzer ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Digital Signal ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"H ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"H ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," _",(0,u.kt)("strong",null,"Disconnect module BEFORE using ISP"),"_")),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Digital Compass ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x1E")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Motor ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"TBD ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"GPS ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Serial ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",{colspan:"2"}," ",(0,u.kt)("center",null,"RX/TX ")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,"Storage ")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"IIC 0x50 & 0x51")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?")),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null," ",(0,u.kt)("center",null,(0,u.kt)("strong",null,"Main Board"))),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"?IIC master =0x00?")),(0,u.kt)("td",null," ISP \u2013 SCK"),(0,u.kt)("td",null," ISP MOSI"),(0,u.kt)("td",null," ISP MISO"),(0,u.kt)("td",null),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SCL")),(0,u.kt)("td",null," ",(0,u.kt)("center",null,"SDA")),(0,u.kt)("td",null),(0,u.kt)("td",null),(0,u.kt)("td",null," All via SMD pads on rear."))),(0,u.kt)("h2",{id:"tech-support"},"Tech Support"),(0,u.kt)("p",null,"Please submit any technical issue into our ",(0,u.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,u.kt)("br",null)),(0,u.kt)("p",{style:{textAlign:"center"}},(0,u.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,u.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);
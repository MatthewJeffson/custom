"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return r?n.createElement(g,o(o({ref:t},c),{},{components:r})):n.createElement(g,o({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[u]="string"==typeof e?e:a,o[1]=d;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24110:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={description:"Xadow - Storage",title:"Xadow - Storage",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Storage",last_update:{date:"1/13/2023",author:"shuxu hu"}},o=void 0,d={unversionedId:"Seeed_Elderly/Xadow/Xadow_Storage",id:"Seeed_Elderly/Xadow/Xadow_Storage",title:"Xadow - Storage",description:"Xadow - Storage",source:"@site/docs/Seeed_Elderly/Xadow/Xadow_Storage.md",sourceDirName:"Seeed_Elderly/Xadow",slug:"/Xadow_Storage",permalink:"/custom/zh-CN/Xadow_Storage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/Xadow/Xadow_Storage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Xadow - Storage",title:"Xadow - Storage",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Xadow_Storage",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Xadow - RTC (Real Time Clock)",permalink:"/custom/zh-CN/Xadow_RTC"},next:{title:"Xadow - UV Sensor",permalink:"/custom/zh-CN/Xadow_UV_Sensor"}},l={},s=[{value:"Specification",id:"specification",level:2},{value:"I2C Address Setting",id:"i2c-address-setting",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Storage/img/X_Storage_01.jpg",alt:null})),(0,a.kt)("p",null,"Most AVRs have a small EEPROM which can be used to save variables, configuration setting etc. Like Chip Atmega32u4 Xadow Main Board used has 1K Bytes Internal EEPROM.\nIf you want more storage for your Xadow project, this module is designed for you! This module supplies two extra 32K byte for your project. The Xadow Storage can be powered by 3.3V. And it is compatible with Xadow system."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Xadow-Storage-p-1625.html"},(0,a.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Work Voltage: 3.3V")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Control Mode: I2C")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"EEPROM: AT24C256C")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"I2C Address are convertible")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Dimensions: 25.43mm x 20.35mm"))),(0,a.kt)("h2",{id:"i2c-address-setting"},"I2C Address Setting"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Two AT24C256 of Xadow Storage are sharing a common two-wire bus. Each AT24C256 has a eight-bit hardware address which is referred to as a slave address. The slave address is configured by the A2,A1 and A0 address selection inputs. The A2, A1, and A0 pins are device address inputs that are hardwired directly to GND or to VCC. If these pins are left floating, the A2, A1, and A0 pins will be internally pulled down to GND."),(0,a.kt)("center",null,(0,a.kt)("table",{cellspacing:"0",width:"50%"},(0,a.kt)("tr",null,(0,a.kt)("th",{rowspan:"2",scope:"col"},"  Slave Address[A6 - A0]"),(0,a.kt)("th",{colspan:"3",scope:"col"}," A2,A1 and A0 inputs state")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"col"}," A2"),(0,a.kt)("td",{scope:"col"}," A1"),(0,a.kt)("td",{scope:"col"}," A0")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010000(0x50)"),(0,a.kt)("td",null,"GND/Floating"),(0,a.kt)("td",null,"GND/Floating"),(0,a.kt)("td",null,"GND/Floating")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010001(0x51)"),(0,a.kt)("td",null," GND/Floating"),(0,a.kt)("td",null," GND/Floating"),(0,a.kt)("td",null," VCC")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010010(0x52)"),(0,a.kt)("td",null," GND/Floating"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," GND/Floating")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010011(0x53)"),(0,a.kt)("td",null," GND/Floating"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," VCC")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010100(0x54)"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," GND/Floating"),(0,a.kt)("td",null," GND/Floating")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010101(default 0x55)"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," GND/Floating"),(0,a.kt)("td",null," VCC")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010110(0x56)"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," GND/Floating")),(0,a.kt)("tr",null,(0,a.kt)("td",{scope:"row"}," 1010111(0x57)"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," VCC"),(0,a.kt)("td",null," VCC")))),(0,a.kt)("p",null,"In default mode, one AT24C256(U1) I2C Address is 0x50 and another AT24C256(U2) I2C Address is 0x51(see the Xadow Storage)."),(0,a.kt)("h2",{id:"demonstration"},"Demonstration"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Using the Xadow Storage, we can permanently store data even if the power is turned off. Now we show a demo: write data to storage and read it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Hardware Installation:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Xadow_Storage/img/XadowStorage.jpg",alt:null})),(0,a.kt)("p",null,"Note: when connect Xadow Storage to Xadow Main Board, you should concern about the connection direction. The connection method is that the unfilled corner of one Xadow module need to connect to the right angle of another module(see four corners of each Xadow module)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The demo code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#include &lt;Wire.h&gt; //I2C library\nvoid setup()\n{\n    char somedata[] = "this is data from the eeprom"; // data to write\n    Wire.begin(); // initialise the connection\n    Serial.begin(9600);\n    i2c_eeprom_write_page(0x51, 0, (byte *)somedata, sizeof(somedata)); // write to EEPROM\n\n    delay(10); //add a small delay\n\n    Serial.println("Memory written");\n}\nvoid loop()\n{\n    int addr=0; //first address\n    byte b = i2c_eeprom_read_byte(0x51, 0); // access the first address from the memory\n\n    while (b!=0)\n    {\n        Serial.print((char)b); //print content to serial port\n        addr++; //increase address\n        b = i2c_eeprom_read_byte(0x51, addr); //access an address from the memory\n    }\n    Serial.println(" ");\n    delay(2000);\n}\nvoid i2c_eeprom_write_byte( int deviceaddress, unsigned int eeaddress, byte data ) {\n    int rdata = data;\n    Wire.beginTransmission(deviceaddress);\n    Wire.write((int)(eeaddress &gt;&gt; 8)); // MSB\n    Wire.write((int)(eeaddress &amp; 0xFF)); // LSB\n    Wire.write(rdata);\n    Wire.endTransmission();\n}\n\n// WARNING: address is a page address, 6-bit end will wrap around\n// also, data can be maximum of about 30 bytes, because the Wire library has a buffer of 32 bytes\nvoid i2c_eeprom_write_page( int deviceaddress, unsigned int eeaddresspage, byte* data, byte length ) {\n    Wire.beginTransmission(deviceaddress);\n    Wire.write((int)(eeaddresspage &gt;&gt; 8)); // MSB\n    Wire.write((int)(eeaddresspage &amp; 0xFF)); // LSB\n    byte c;\n    for ( c = 0; c &lt; length; c++)\n    Wire.write(data[c]);\n    Wire.endTransmission();\n}\nbyte i2c_eeprom_read_byte( int deviceaddress, unsigned int eeaddress ) {\n    byte rdata = 0xFF;\n    Wire.beginTransmission(deviceaddress);\n    Wire.write((int)(eeaddress &gt;&gt; 8)); // MSB\n    Wire.write((int)(eeaddress &amp; 0xFF)); // LSB\n    Wire.endTransmission();\n    Wire.requestFrom(deviceaddress,1);\n    if (Wire.available()) rdata = Wire.read();\n    return rdata;\n}\n// maybe let\'s not read more than 30 or 32 bytes at a time!\nvoid i2c_eeprom_read_buffer( int deviceaddress, unsigned int eeaddress, byte *buffer, int length ) {\n    Wire.beginTransmission(deviceaddress);\n    Wire.write((int)(eeaddress &gt;&gt; 8)); // MSB\n    Wire.write((int)(eeaddress &amp; 0xFF)); // LSB\n    Wire.endTransmission();\n    Wire.requestFrom(deviceaddress,length);\n    int c = 0;\n    for ( c = 0; c &lt; length; c++ )\n    if (Wire.available()) buffer[c] = Wire.read();\n}\n')),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resources"},"Resources"),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Storage/res/Xadow_Storage_eagle_file.zip"},"Xadow Storage eagle file"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Xadow_Storage/res/AT24C256C-SSHL-T.pdf"},"Serial EEPROM AT24C256C Datasheet")))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
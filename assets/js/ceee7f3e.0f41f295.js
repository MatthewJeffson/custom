"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},76782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={title:"Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",slug:"/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A",last_update:{date:"01/09/2022",author:"gunengyu"}},l=void 0,i={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A",title:"Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)",description:"We've already released the Grove - I2C Hub (4 Port) and the Grove - I2C Hub (6 Port). Wait, still not enough? Well well, we know you are seeking more. Here you are, we present you the Grove - 8 Channel I2C Hub.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A",permalink:"/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641657600,formattedLastUpdatedAt:"Jan 8, 2022",frontMatter:{title:"Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A/",slug:"/Grove-8-Channel-I2C-Multiplexer-I2C-Hub-TCA9548A",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - I2C Hub(6 Port)",permalink:"/Grove-I2C-Hub-6Port"},next:{title:"Grove - AND",permalink:"/Grove-AND"}},s={},u=[{value:"Features",id:"features",level:2},{value:"Platform Supported",id:"platform-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Read the I2C address of devices connecting on the Grove - 8 Channel I2C Hub",id:"read-the-i2c-address-of-devices-connecting-on-the-grove---8-channel-i2c-hub",level:3},{value:"Materials Required",id:"materials-required",level:4},{value:"Hardware connection",id:"hardware-connection",level:4},{value:"Software code",id:"software-code",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-wiki.jpg",alt:null})),(0,a.kt)("p",null,"We've already released the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-I2C-Hub.html"},"Grove - I2C Hub (4 Port)")," and the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-I2C-Hub-6-Port-p-4349.html"},"Grove - I2C Hub (6 Port)"),". Wait, still not enough? Well well, we know you are seeking more. Here you are, we present you the Grove - 8 Channel I2C Hub."),(0,a.kt)("p",null,"More importantly, this is more than just a superposition of port quantities. As we all know, I2C devices must use different addresses in the same bus system, even use the Grove I2C Hub (4 or 6 port), the rule is still the rule. However, with the help of  Grove - 8 Channel I2C Hub, you can plug up to 8 same-address I2C devices to the same Grove I2C system. All thanks to the TCA9548A I2C Multiplexer Chip. It adopts time-division multiplexing technology so that the same controller can control 8 I2C devices with the same address. No more worrying about address conflicts."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/get_one_now_small.png",width:200,height:38,border:0}))),(0,a.kt)("h2",{id:"features"},"Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"8 Grove I2C Port"),(0,a.kt)("li",{parentName:"ul"},"Support multiple devices with the same I2C address"),(0,a.kt)("li",{parentName:"ul"},"Support 3.3V/5V System")),(0,a.kt)("h2",{id:"platform-supported"},"Platform Supported"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,a.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"read-the-i2c-address-of-devices-connecting-on-the-grove---8-channel-i2c-hub"},"Read the I2C address of devices connecting on the Grove - 8 Channel I2C Hub"),(0,a.kt)("h4",{id:"materials-required"},"Materials Required"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Seeeduino XIAO"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove Breadboard"),(0,a.kt)("th",{parentName:"tr",align:null},"Grove - 8 Channel I2C Multiplexer/I2C Hub (TCA9548A)"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/102010328/img/seeeduino-XIAO-thumbnail.jpg",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103020232/img/103020232-thumbnail.png",alt:null})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-TCA9548A-thumbnail.jpg",alt:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Seeeduino-XIAO-Arduino-Microcontroller-SAMD21-Cortex-M0+-p-4426.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Breadboard-p-4034.html"},"Get one now")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-8-Channel-I2C-Hub-TCA9548A-p-4398.html"},"Get one now"))))),(0,a.kt)("p",null,"We also require up to 8 I2C devices, please click ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=i2c"},"here")," to find the Grove I2C devices you like.\nAt these example, we use three I2C devices."),(0,a.kt)("h4",{id:"hardware-connection"},"Hardware connection"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/103020293/img/Grove-8-Channel-I2C-Hub-example.jpg",alt:null})),(0,a.kt)("p",null,"Connect the I2C Hub with Seeeduino XIAO's I2C interface, and connect each I2C device with each hub."),(0,a.kt)("h4",{id:"software-code"},"Software code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-C++"},'#include "TCA9548A.h"\n\n// if you use the software I2C to drive, you can uncommnet the define SOFTWAREWIRE which in TCA9548A.h. \n#ifdef SOFTWAREWIRE\n  #include <SoftwareWIRE.h>\n  SoftwareWire myWIRE(3, 2);\n  TCA9548A<SoftwareWire> TCA;\n  #define WIRE myWIRE\n#else   \n  #include <Wire.h>\n  TCA9548A<TwoWire> TCA;\n  #define WIRE Wire\n#endif\n\n#define SERIAL Serial\n\nvoid setup()\n{\n  SERIAL.begin(115200);\n  while(!SERIAL){};\n\n  //WIRE.begin();\n  TCA.begin(WIRE);\n  //defaut all channel was closed\n  //TCA.openAll();\n  //TCA.closeAll();\n\n  // Select the channels you want to open. You can open as many channels as you want\n  TCA.openChannel(TCA_CHANNEL_0);   //TCA.closeChannel(TCA_CHANNEL_0);\n  TCA.openChannel(TCA_CHANNEL_1); //TCA.closeChannel(TCA_CHANNEL_1);\n  TCA.openChannel(TCA_CHANNEL_2); //TCA.closeChannel(TCA_CHANNEL_2);\n  TCA.openChannel(TCA_CHANNEL_3); //TCA.closeChannel(TCA_CHANNEL_3);\n  TCA.openChannel(TCA_CHANNEL_4); //TCA.closeChannel(TCA_CHANNEL_4);\n  TCA.openChannel(TCA_CHANNEL_5); //TCA.closeChannel(TCA_CHANNEL_5);\n  TCA.openChannel(TCA_CHANNEL_6); //TCA.closeChannel(TCA_CHANNEL_6);\n  TCA.openChannel(TCA_CHANNEL_7); //TCA.closeChannel(TCA_CHANNEL_7); \n\n}\n\nvoid loop()\n{\n\n  uint8_t error, i2cAddress, devCount, unCount;\n\n  SERIAL.println("Scanning...");\n\n  devCount = 0;\n  unCount = 0;\n  for(i2cAddress = 1; i2cAddress < 127; i2cAddress++ )\n  {\n    WIRE.beginTransmission(i2cAddress);\n    error = WIRE.endTransmission();\n\n    if (error == 0)\n    {\n      SERIAL.print("I2C device found at 0x");\n      if (i2cAddress<16) SERIAL.print("0");\n      SERIAL.println(i2cAddress,HEX);\n      devCount++;\n    }\n    else if (error==4)\n    {\n      SERIAL.print("Unknow error at 0x");\n      if (i2cAddress<16) SERIAL.print("0");\n      SERIAL.println(i2cAddress,HEX);\n      unCount++;\n    }    \n  }\n\n  if (devCount + unCount == 0)\n    SERIAL.println("No I2C devices found\\n");\n  else {\n    SERIAL.print(devCount);\n    SERIAL.print(" device(s) found");\n    if (unCount > 0) {\n      SERIAL.print(", and unknown error in ");\n      SERIAL.print(unCount);\n      SERIAL.print(" address");\n    }\n    SERIAL.println();\n  }\n  SERIAL.println();\n  delay(1000); \n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 1"),' Download the library from the resource and add the "zip" library to your Arduino IDE. Please refer to ',(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install an Arduino Library"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2")," Find the example code and upload it to your board. Please refer to ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3")," After uploading the code, you will see the I2C adress of each device from the serial monitor. The adress 0x70 is the I2C adress of I2C Hub.\n",(0,a.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/103020293/img/Grove-8-channel-I2C-Hub-test-result.png",alt:null})))),(0,a.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,a.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-Hardware-Schematic.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,a.kt)("h2",{id:"resource"},"Resource"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/103020293/document/TCA9548A_datasheet.pdf"},"TCA9548A_DATASHEET")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/103020293/document/Grove-8-Channel-I2C-Hub-TCA9548A_v1.0_SCH_190814.pdf"},"Hardware schematic")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[ZiP]")," ",(0,a.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/products/103020293/document/Grove_8Channel_I2C_Hub_test_library.zip"},"Grove 8 Channel I2C Hub Library"))),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,a.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("div",null,(0,a.kt)("br",null),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
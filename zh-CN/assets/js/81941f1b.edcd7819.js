"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[38483],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,k=d["".concat(s,".").concat(c)]||d[c]||m[c]||n;return a?r.createElement(k,o(o({ref:t},u),{},{components:a})):r.createElement(k,o({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,o=new Array(n);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var r=a(87462),i=(a(67294),a(3905));const n={title:"Grove - Serial Camera",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Serial_Camera/",slug:"/Grove-Serial_Camera",last_update:{date:"01/09/2022",author:"gunengyu"}},o=void 0,l={unversionedId:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Serial_Camera",id:"Sensor/Grove/Grove_Accessories/Input_Output/Grove-Serial_Camera",title:"Grove - Serial Camera",description:"The Serial Camera is a JPEG color camera module easy for MCU use.It has integrated image processing DSP to generate 320240 or 640480 JPEG image without thumbnail information, Captured picture will be stored in internal buffer and transferred via UART port.",source:"@site/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-Serial_Camera.md",sourceDirName:"Sensor/Grove/Grove_Accessories/Input_Output",slug:"/Grove-Serial_Camera",permalink:"/zh-CN/Grove-Serial_Camera",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Accessories/Input_Output/Grove-Serial_Camera.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641657600,formattedLastUpdatedAt:"2022\u5e741\u67088\u65e5",frontMatter:{title:"Grove - Serial Camera",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Grove-Serial_Camera/",slug:"/Grove-Serial_Camera",last_update:{date:"01/09/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Mini Camera",permalink:"/zh-CN/Grove-Mini_Camera"},next:{title:"Grove - 4-Channel 16-bit ADC(ADS1115)",permalink:"/zh-CN/Grove-16-bit-ADC-ADS1115"}},s={},p=[{value:"Features",id:"features",level:2},{value:"Specifications",id:"specifications",level:2},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Usage",id:"usage",level:2},{value:"Use Camera on PC",id:"use-camera-on-pc",level:3},{value:"Use Camera with Arduino and SD card",id:"use-camera-with-arduino-and-sd-card",level:3},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_camera.jpg",alt:null})),(0,i.kt)("p",null,"The Serial Camera is a JPEG color camera module easy for MCU use.It has integrated image processing DSP to generate 320",(0,i.kt)("em",{parentName:"p"},"240 or 640"),"480 JPEG image without thumbnail information, Captured picture will be stored in internal buffer and transferred via UART port."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Serial-Camera-p-945.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:null}))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Grove Interface"),(0,i.kt)("li",{parentName:"ul"},"JPEG compressed image without Thumbnail Information"),(0,i.kt)("li",{parentName:"ul"},"5V power supply"),(0,i.kt)("li",{parentName:"ul"},"Small and compact"),(0,i.kt)("li",{parentName:"ul"},"Protocol control")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("table",{border:"1",cellspacing:"0",width:"80%"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Item"),(0,i.kt)("th",{scope:"col"},"Min"),(0,i.kt)("th",{scope:"col"},"Typical"),(0,i.kt)("th",{scope:"col"},"Max"),(0,i.kt)("th",{scope:"col"},"Unit")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Operating Voltage"),(0,i.kt)("td",null,"4,8"),(0,i.kt)("td",null,"5.0"),(0,i.kt)("td",null,"5.3"),(0,i.kt)("td",null,"V")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Resolution (default)"),(0,i.kt)("td",{colspan:"3"},"640x480 / 320x240"),(0,i.kt)("td",null,"/")),(0,i.kt)("tr",{align:"center"},(0,i.kt)("th",{scope:"row"},"Default Baud rate of serial port"),(0,i.kt)("td",{colspan:"3"},"115200"),(0,i.kt)("td",null,"Baud"))),(0,i.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's software or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Digital Cameras with the ",(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/depot/sd-card-shield-p-492.html?cPath=109"},"SD card shield")),(0,i.kt)("li",{parentName:"ul"},"Video monitoring system")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"use-camera-on-pc"},"Use Camera on PC"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),":Download dedicated serial port debugging tool ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar"},"VC0703COMTOOL.rar")," and install it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Connect Serial camera to PC with USB to use serial converter tool UartSBee"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Serial camera"),(0,i.kt)("th",{parentName:"tr",align:null},"Uart","_","SB v3.1"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"GND (black)"),(0,i.kt)("td",{parentName:"tr",align:null},"GND")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"VCC (red)"),(0,i.kt)("td",{parentName:"tr",align:null},"VCC")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"RX (white)"),(0,i.kt)("td",{parentName:"tr",align:null},"TX")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"TX (Yellow)"),(0,i.kt)("td",{parentName:"tr",align:null},"RX")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," Connect the Uart","_","SB v3.1 with Computer and Open the vc0703CommTool software. Choose the correct COM number of the port you link to the camera, default baudrate 115200 ,and then open the port."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:"),' Click the button "Get Version" and it will reset the camera.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:"),' Click the button "Fbuf" to get ready to take a picture.'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "stop CFbuf" to take a picture.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "Sel File" to select the file name to store the picture.')),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "Read" to read the data from the buffer to store in the file selected as shown below:'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/img/Serial_Camera_Picture.jpg",alt:null}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Click "Resume" to resume frame update so you can continue to take another picture.'))),(0,i.kt)("h3",{id:"use-camera-with-arduino-and-sd-card"},"Use Camera with Arduino and SD card"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": Connected Grove - Serial Camera to Arduino board, Hardware parts include Seeeduino V3.0, SD Card Shield, SanDisk microSD\u2122 Card 2GB, Grove - Button."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2"),": Change the serial receive buffer(default 64 bytes) to 128 bytes. Open up hardware/arduino/cores directory, and edit the file named wiring_serial.c or HardwareSerial.cpp near the top is a #define SERIAL_BUFFER_SIZE 64, which means 64 bytes are used for the buffer. You need to change this to 128 .More details, please refer to ",(0,i.kt)("a",{parentName:"p",href:"http://learn.adafruit.com/arduino-tips-tricks-and-techniques/arduino-hacks"},"Arduino Hacks"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3"),": Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip"},"Grove - Serial Camera Library"),", upload it to Seeeduino. If it can't be complied, please confirm if the ",(0,i.kt)("a",{parentName:"p",href:"https://arduino.cc/en/Reference/SD"},"SD Library")," is in your Arduino IDE folder."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4"),": Open the Serial Monitor , press the button to take picture after SD card and Camera initialization."),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/VC0703COMTOOL.rar"},"VC0703 debug tool")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/Manual_for_serial_camera.pdf"},"Manual for serial camera.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-Serial_Camera/res/SerialCameral_DemoCode.zip"},"Grove - Serial Camera Library"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[13043],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var l=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},i=Object.keys(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)a=i[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=l.createContext({}),d=function(e){var t=l.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return l.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=d(a),m=n,h=s["".concat(p,".").concat(m)]||s[m]||c[m]||i;return a?l.createElement(h,r(r({ref:t},u),{},{components:a})):l.createElement(h,r({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:n,r[1]=o;for(var d=2;d<i;d++)r[d]=a[d];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}m.displayName="MDXCreateElement"},61181:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var l=a(87462),n=(a(67294),a(3905));const i={description:"Small e-Paper Shield V2",title:"Small e-Paper Shield V2",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Small_e-Paper_Shield_V2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},r=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Small_e-Paper_Shield_V2",id:"Top_Brand/Arduino/shield/Small_e-Paper_Shield_V2",title:"Small e-Paper Shield V2",description:"Small e-Paper Shield V2",source:"@site/docs/Top_Brand/Arduino/shield/Small_e-Paper_Shield_V2.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Small_e-Paper_Shield_V2",permalink:"/zh-CN/Small_e-Paper_Shield_V2",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Small_e-Paper_Shield_V2.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676476800,formattedLastUpdatedAt:"2023\u5e742\u670815\u65e5",frontMatter:{description:"Small e-Paper Shield V2",title:"Small e-Paper Shield V2",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Small_e-Paper_Shield_V2",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Seeed BLE Shield v1",permalink:"/zh-CN/Seeed_BLE_Shield"},next:{title:"Download Arduino and install Arduino driver",permalink:"/zh-CN/Download-Arduino-and-install-Arduino_Driver"}},p={},d=[{value:"Choose the library",id:"choose-the-library",level:3},{value:"Specifications",id:"specifications",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Demo Showing",id:"demo-showing",level:3},{value:"Demo 1: Display texts",id:"demo-1-display-texts",level:4},{value:"Demo 2: Display graphic",id:"demo-2-display-graphic",level:4},{value:"Demo 3: Display image",id:"demo-3-display-image",level:4},{value:"How to Display an Image",id:"how-to-display-an-image",level:4},{value:"Reference",id:"reference",level:2},{value:"Function Description",id:"function-description",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null," ",(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Small_e-Paper_shield_b.jpg",alt:null})),(0,n.kt)("p",null,"e-paper might be the most comfortable material to read. It reflects light instead of emits light to mimic the experience of conventional paper reading. And in this way much less power is consumed. Small e-paper shield is a driver shield for e-paper of small sizes. It's capable of driving e-papers of 1.44 inch, 2.0 inch and 2.7 inch and supports more than 170 langusges. The upper surface of this shield is left flat and clean to give great support to the e-paper attached to it. If you are considering a lightweight and comfortable to read display, e-paper would be a good choice."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attention:")," Since this driver board supports e-papers of different sizes. e-paper is not included in this product. We have e-paper of 2.0 inch and 2.7 inch on sale simultaneously. Go and add the most suitable one to your cart now!"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Small-e-paper-Shield-V2-p-2462.html"},(0,n.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,n.kt)("h3",{id:"choose-the-library"},"Choose the library"),(0,n.kt)("p",null,"In order to choose the correct library you should know the version of your panel."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Definition_of_Model_Labels.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Pay attention to your panel's label"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"if the model name is 'EG020AS012' or 'EM027AS011',then you should choose the old library, please click here ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Small_ePaper_Shield"},"Small e-Paper Library"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"if the model name is 'EG020BS011' or 'EM027BS013',then you should choose the new library,please click here ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar"},"New Panel Library\u3010EPD_V230\u3011"),"."))),(0,n.kt)("h2",{id:"specifications"},"Specifications"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Compatible board: Arduino Uno/Leonardo/Arduino Mega/Linkit ONE"),(0,n.kt)("p",null,"Operating Voltage: 3.3/5VDC"),(0,n.kt)("p",null,"Operating Current(refresh screen):40mA"),(0,n.kt)("p",null,"Interface Type: SPI"),(0,n.kt)("font",{color:"Green"},"PINs on Arduino"),(0,n.kt)("table",null,(0,n.kt)("tr",null,(0,n.kt)("th",null," Arduino"),(0,n.kt)("th",null," E-paper")),(0,n.kt)("tr",null,(0,n.kt)("td",{width:"150px"}," D2"),(0,n.kt)("td",{width:"250px"}," M_EPD_PANEL_ON")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D3"),(0,n.kt)("td",null," M_EPD_BORDER")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D4"),(0,n.kt)("td",null," M_/SD_CS")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D5"),(0,n.kt)("td",null," M_EPD_PWM")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D6"),(0,n.kt)("td",null," M_EPD_/RESET")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D7"),(0,n.kt)("td",null," M_EPD_BUSY")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D8"),(0,n.kt)("td",null," M_EPD_DISCHARGE")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D9"),(0,n.kt)("td",null," M_/WORD_STOCK_CS")),(0,n.kt)("tr",null,(0,n.kt)("td",null," D10"),(0,n.kt)("td",null," M_/EPD_CS")),(0,n.kt)("tr",null,(0,n.kt)("td",null," ICSP PORT"),(0,n.kt)("td",null," M_MOSI , M_SCK , M_MISO")),(0,n.kt)("tr",null,(0,n.kt)("td",null," A0"),(0,n.kt)("td",null," M_TEMP_SEN")),(0,n.kt)("tr",null,(0,n.kt)("td",null," A1"),(0,n.kt)("td",null," M_OE123\ufeff\ufeff")),(0,n.kt)("tr",null,(0,n.kt)("td",null," A2"),(0,n.kt)("td",null," M_CKV")),(0,n.kt)("tr",null,(0,n.kt)("td",null," A3"),(0,n.kt)("td",null," M_STV_IN")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 3.3V"),(0,n.kt)("td",null," M_VCC_3V3")),(0,n.kt)("tr",null,(0,n.kt)("td",null," 5V"),(0,n.kt)("td",null," M_VCC_5V"))),(0,n.kt)("h2",{id:"demonstration"},"Demonstration"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Small e-Paper Shield can display image, a variety of graphics and texts. There are plenty of examples in library that give you some ideas on how to use the module. Now let us experience the strong library and wide viewing angle of e-Paper."),(0,n.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Connect e-Paper to the FFC interface of Small e-Paper Shield."),(0,n.kt)("li",{parentName:"ul"},"Plug Small e-Paper Shield to Arduino/Seeeduino and connect it to PC using a USB cable.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/E-Paper_Screen.jpg",alt:null})),(0,n.kt)("p",null,"Now it is time to show demos using the library which needs download from ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/ePaper"},"here"),". After downloading, you need put it into the library file of Arduino IDE by the path:...\\arduino-1.0.1\\libraries."),(0,n.kt)("h3",{id:"demo-showing"},"Demo Showing"),(0,n.kt)("p",null,"Here we select the 2.0 inch screen as an example to show its display functions."),(0,n.kt)("h4",{id:"demo-1-display-texts"},"Demo 1: Display texts"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Open the code: File- ",">","Examples- ",">","ePaper-",">","text as show below:")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Text_Code.jpg",alt:null})),(0,n.kt)("dl",null,(0,n.kt)("dd",null,(0,n.kt)("font",{color:"red"},"We need to re-emphasize this note:"))),(0,n.kt)("dl",null,(0,n.kt)("dd",null,"If you use Arduino UNO, Seeeduino 3.0 and any board that uses Atmega 328P or Atmega32U4 as controller, you should insert an SD card using this demo. The SD card is used to store temporary data because of the little storage space of Atmega328p and Atmega32U4."),(0,n.kt)("dd",null,"If you use an Arduino Mega, or any other board that uses Atmega1280 or Atmega2560, you don't need to insert an SD card.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Change the parameter to match your screen size. You need to change 200 to 270 if your screen is 2.7 inch. And you need to do this change when usisng other examples.")),(0,n.kt)("pre",null,"#define SCREEN_SIZE 200 // choose screen size: 144, 200, 270"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Upload the code to your microcontroller. Please click ",(0,n.kt)("a",{parentName:"p",href:"/Upload_Code"},"here")," if you do not know how to.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Now you can see this:"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_text.jpg",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Try to change the display text and display location. You may learn every function usage.")),(0,n.kt)("h4",{id:"demo-2-display-graphic"},"Demo 2: Display graphic"),(0,n.kt)("p",null,"The example: ",(0,n.kt)("em",{parentName:"p"},"draw")," will be a good example to display a variety of graphics. You need to open this code: ",(0,n.kt)("em",{parentName:"p"},"draw")," like demo 1. Remember the note about whether you need a SD card to complete the demo. Please make sure the SD card is needed or not, depending on your microcontroller type. And change the parameter to match your screen size."),(0,n.kt)("p",null,"After completing modifications and uploading the code, a beautiful pattern will display on the screen:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Display_graphic.jpg",alt:null})),(0,n.kt)("p",null,"The picture is created by calling the draw graphic functions. You can make your pattern and try it on the screen. Every draw function has a specific description in the reference."),(0,n.kt)("h4",{id:"demo-3-display-image"},"Demo 3: Display image"),(0,n.kt)("p",null,"Similar to TFT displays and OLED displays, the small e-Paper Shield supports displaying images."),(0,n.kt)("p",null,"Now you need to open the image example: File- ",">","Examples- ",">","ePaper-",">","image."),(0,n.kt)("p",null,"You need to upload the code to see the result."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Dispaly_image.jpg",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},'Note\uff1aAs you can see, the default screen size in this "image" sketch is set as 2.7 inch. Please modify the screen size setting in case of improper display.')),(0,n.kt)("pre",null,"  #define SCREEN_SIZE 200         // choose screen size here: 144, 200, 270 "),(0,n.kt)("p",null,"Of course, you can change the display image by changing the image's lattice data."),(0,n.kt)("p",null,"For example, your e-Paper screen is 2.7 inch, so you need get the lattice data of a 264 X176 pixel and copy the code to \u2018\u2019\u2019static unsigned char image_270[] PROGMEM ={}\u2019\u2019\u2019 in picture.h. You need to copy the code for a lattice data of a 200x96 pixel to \u2018\u2019\u2019static unsigned char image_200[] PROGMEM ={}\u2019\u2019\u2019  when using a 2.0 inch screen."),(0,n.kt)("h4",{id:"how-to-display-an-image"},"How to Display an Image"),(0,n.kt)("p",null,"Thanks to the contribution of Muchiri John, we got a very useful and easy-to-use tool. With this tool, to display an image is no more a difficult thing."),(0,n.kt)("p",null,"You can download the tool ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip"},"here")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/img/Snapshot_epaper_shied_tools.jpg",alt:null})),(0,n.kt)("h2",{id:"reference"},"Reference"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Small e-Paper library provides complete software interfaces to exercise the capabilities of e-Paper display. There are  specific description about functions."),(0,n.kt)("h3",{id:"function-description"},"Function Description"),(0,n.kt)("u",null,"1. void begin(EPD_size sz);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function is setup screen size.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"sz: can be EPD_1_44, EPD_2_0, EPD_2_7.")),(0,n.kt)("u",null,"2. void setDirection(EPD_DIR dir);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function is used to set the display direction.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"dir: can be DIRLEFT,DIRRIGHT,DIRNORMAL,DIRDOWN")),(0,n.kt)("u",null,"3. int drawChar(char c, int x, int y);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display char.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"c: the char you want to display.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"x: the starting X-coordinate of char.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"y: the starting Y-coordinate of char."))),(0,n.kt)("u",null,"4. int drawString(char *string, int poX, int poY);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display char.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"*string: the string you want to display.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of string.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of string."))),(0,n.kt)("u",null,"5. int drawNumber(long long_num,int poX, int poY);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display char.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"long_num: the long integer data you want to display. The max is")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of data")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of data"))),(0,n.kt)("u",null,"6. int drawFloat(float floatNumber,int decimal,int poX, int poY);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display float number. The display float data is rounding according to the setting decimal place.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"floatNumber: the float number you want to display.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"decimal: set the decimal place.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of data.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of data."))),(0,n.kt)("u",null,"7. int drawUnicode(unsigned int uniCode, int x, int y);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display a Character or a Chinese using unicode. See the page 18 to 24 of the ",(0,n.kt)("a",{parentName:"em",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/GT20L16P1Y_Datasheet.pdf"},"GT20L16P1Y datasheet")," to find the Char unicode, the characters include Latin\u3001Hebrew\u3001 Thai\u3001Greek\u3001 Kirill and Arabic. The Chinese unicode  can see ",(0,n.kt)("a",{parentName:"em",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Character_code_table.pdf"},"GB2312 (Simplified Chinese) character code table"),".")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"uniCode:the machine code according to a character or a chinese.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"x: the starting X-coordinate.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"y: the starting Y-coordinate."))),(0,n.kt)("p",null,"Note: the character unicode between 0x0020 to 0x007E can directly input via the keyboard. Such as the display of the character 'G' ,the function can be drawUnicode(0x0047, 3,10) or displayChar ('s',3,10);"),(0,n.kt)("u",null,"8. int drawUnicodeString(unsigned int *uniCode, int len, int x, int y);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display several characters and chinese.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"*uniCode: a unicode array.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"len: string length.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"x: the starting X-coordinate of string.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"y: the starting Y-coordinate of string."))),(0,n.kt)("u",null,"9. void drawLine(int x0, int y0, int x1, int y1);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to display a line.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"x0: the starting X-coordinate of line")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"y0: the starting Y-coordinate of line")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"x1: the end X-coordinate of line")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"y1: the end Y-coordinate of line"))),(0,n.kt)("u",null,"10. void drawCircle(int poX, int poY, int r);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a circle.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the X-coordinate of the center")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the Y-coordinate of the center")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"r: the radius of center"))),(0,n.kt)("u",null,"11. void drawHorizontalLine( int poX, int poY, int len);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a horizontal line.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of the line.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of the line.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"len: the length of the line"))),(0,n.kt)("u",null,"12. void drawVerticalLine( int poX, int poY, int len);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a vertical line.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of the Line.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of the Line.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"len: the length of the line."))),(0,n.kt)("u",null,"13. void drawRectangle(int poX, int poY, int len, int width);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a rectangle.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of the rectangle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of the rectangle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"len: the length of the rectangle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"width: the width of the rectangle."))),(0,n.kt)("u",null,"14. void fillRectangle(int poX, int poY, int len, int width);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a fill rectangle.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the starting X-coordinate of the rectangle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the starting Y-coordinate of the rectangle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"len: the length of the rectangle.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"width: the width of the rectangle."))),(0,n.kt)("u",null,"15. void fillCircle(int poX, int poY, int r);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a fill circle.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX: the X-coordinate of the center.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY: the Y-coordinate of the center.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"r: the radius of center\n",(0,n.kt)("strong",{parentName:"p"},"Example:")))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"    EPAPER.drawRectangle(10, 10, 100, 80);\n    EPAPER.fillCircle(50, 50, 30);\n    EPAPER.fillRectangle(50, 65, 50, 20);\n    EPAPER.drawCircle(150, 50, 10);\n    EPAPER.fillCircle(150, 50, 5);\n    EPAPER.drawHorizontalLine(120, 50, 60);\n    EPAPER.drawVerticalLine(150, 20, 60);\n")),(0,n.kt)("u",null,"16. void drawTraingle( int poX1, int poY1, int poX2, int poY2, int poX3, int poY3);"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The function can be used to draw a triangle. It is formed by three points.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poX1(poX2,poX3): the X-coordinate of the triangle one point.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"poY1(poY2,poY3): the Y-coordinate of the triangle one point."))),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/Small_e-Paper_Shield_v2.2_Eagle_Files.zip"},"Small e-Paper Shield Eagle File"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Small_ePaper_Shield"},"Small e-Paper Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/4P008-00_02_COG_Driver_Interface_Timing_for_smallPlussize.pdf"},"e-Paper panels Datasheet"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdImageKit.zip"},"epdImageKit Tool"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Small_e-Paper_Shield_V2/res/EpdV230.rar"},"New Panel Library\u3010EPD_V230\u3011")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please submit any technical issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,n.kt)("br",null)),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);
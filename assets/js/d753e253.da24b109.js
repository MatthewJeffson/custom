"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,h=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return n?o.createElement(h,r(r({ref:t},c),{},{components:n})):o.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=p;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:i,r[1]=a;for(var u=2;u<s;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var o=n(87462),i=(n(67294),n(3905));const s={description:"Mouse",title:"Mouse",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Mouse",last_update:{date:"1/17/2023",author:"jianjing Huang"}},r="Using Wio Terminal as a Mouse",a={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Mouse",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Mouse",title:"Mouse",description:"Mouse",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Mouse.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-USBCLIENT-Mouse",permalink:"/Wio-Terminal-USBCLIENT-Mouse",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-USBCLIENT-Mouse.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673884800,formattedLastUpdatedAt:"Jan 16, 2023",frontMatter:{description:"Mouse",title:"Mouse",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-USBCLIENT-Mouse",last_update:{date:"1/17/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Keyboard",permalink:"/Wio-Terminal-USBCLIENT-Keyboard"},next:{title:"MIDI",permalink:"/Wio-Terminal-USBCLIENT-MIDI"}},l={},u=[{value:"Installing Libraries",id:"installing-libraries",level:2},{value:"Complete Code",id:"complete-code",level:2}],c={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-wio-terminal-as-a-mouse"},"Using Wio Terminal as a Mouse"),(0,i.kt)("p",null,"This wiki introduces how to use the Wio Terminal as a simple mouse. This can be used to simulate mouse movements such as up,down,left and right. Furthermore left /right mouse button clicks, up/ down rolls can be implemented as well."),(0,i.kt)("h2",{id:"installing-libraries"},"Installing Libraries"),(0,i.kt)("p",null,"This example also requires an additional Arduino mouse library:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/arduino-libraries/Mouse"},"Arduino Mouse Library")," repository and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Mouse-master")," file that you have just downloaded."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.kt)("h2",{id:"complete-code"},"Complete Code"),(0,i.kt)("p",null,"Please check the following code or from github ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/blob/master/examples/WioTerminal_ButtonMouseControl/WioTerminal_ButtonMouseControl.ino"},"here"),". Also, for more functionality, please refer to the official ",(0,i.kt)("a",{parentName:"p",href:"https://www.arduino.cc/reference/en/language/functions/usb/mouse/"},"mouse functions")," from Arduino."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/*    \n * A demo for Wio Terminal to simulate mouse by buttons.\n * Such as Mouse Up, Mouse Down, Mouse Left, Mouse Right,\n * Click the left mouse button, Click the right mouse button, \n * Up roll, Down roll and etc.\n *   \n * Copyright (c) 2020 seeed technology co., ltd.  \n * Author      : weihong.cai (weihong.cai@seeed.cc)  \n * Create Time : July 2020\n * Change Log  : \n *\n * The MIT License (MIT)\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the "Software"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software istm\n * furnished to do so, subject to the following conditions:\n * \n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n * \n * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS INcommInterface\n * THE SOFTWARE.\n * \n * Usage(in Wio Terminal):\n *    Press the WIO_5S_UP    --------------------\x3e Mouse Up\n *    Press the WIO_5S_DOWN  --------------------\x3e Mouse Down\n *    Press the WIO_5S_LEFT  --------------------\x3e Mouse Left\n *    Press the WIO_5S_RIGHT --------------------\x3e Mouse Right\n *    Press the BUTTON_3 ------------------------\x3e Click the left mouse button\n *    Press the BUTTON_2 ------------------------\x3e Click the right mouse button    \n *    Press the WIO_5S_PRESS and WIO_5S_UP   ----\x3e Up roll\n *    Press the WIO_5S_PRESS and WIO_5S_DOWN ----\x3e Down roll\n * \n * Some tips:\n * 1. If your PC unables to recognize USB device leading the Wio Terminal can\u2019t work. \n *    You can solve this problem through updating your ArduinoCore.\n *    Please follow this: https://forum.seeedstudio.com/t/seeeduino-xiao-cant-simulate-keys-pressed/252819/6?u=weihong.cai\n * \n * You can know more about the Wio Terminal from: https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/\n * If you have any questions, you can leave a message on the forum: https://forum.seeedstudio.com\n */\n\n#include "Mouse.h"\n\n/*----------------define the button pins---------------------------*/ \nconst int upButton        = WIO_5S_UP;\nconst int downButton      = WIO_5S_DOWN;\nconst int leftButton      = WIO_5S_LEFT;\nconst int rightButton     = WIO_5S_RIGHT;\nconst int mouseWheel      = WIO_5S_PRESS;\nconst int mouseBttonLeft  = BUTTON_3;\nconst int mouseBttonRight = BUTTON_2;\n\n  // output range of X or Y movement; affects movement speed          \nint range = 2;\n\n  // response delay of the mouse, in ms\nint responseDelay = 5;\n\n  // the time record paramas\nunsigned long _currentMillis;\nunsigned long _previousMillis;\n\nvoid setup() {\n  // initialize the buttons\' inputs:\n  pinMode(upButton,         INPUT);\n  pinMode(downButton,       INPUT);\n  pinMode(leftButton,       INPUT);\n  pinMode(rightButton,      INPUT);\n  pinMode(mouseWheel,       INPUT);\n  pinMode(mouseBttonLeft,   INPUT);\n  pinMode(mouseBttonRight,  INPUT);\n  \n  // initialize mouse control:\n  Mouse.begin();\n}\n\nvoid loop() {\n  // read the button state:\n  int upState                     = digitalRead(upButton);\n  int downState                   = digitalRead(downButton);\n  int rightState                  = digitalRead(rightButton);\n  int leftState                   = digitalRead(leftButton);\n  int clickState_mouseWheel       = digitalRead(mouseWheel);\n  int clickState_mouseButtonLeft  = digitalRead(mouseBttonLeft);\n  int clickState_mouseButtonRight = digitalRead(mouseBttonRight);\n\n  // calculate the movement distance based on the button states:\n  int  xDistance = (leftState - rightState) * range;\n  int  yDistance = (upState   - downState)  * range;\n\n/*------------------Mouse Move--------------------------------------*/\n  // if X or Y is non-zero, move:\n  if ((xDistance != 0) || (yDistance != 0)) {\n    Mouse.move(xDistance, yDistance, 0);\n  }\n  \n/*-------------Mouse Button Left Click------------------------------*/\n  // if the mouse button left is pressed:\n  if (clickState_mouseButtonLeft == LOW) {\n    // if the mouse is not pressed, press it:\n    if (!Mouse.isPressed(MOUSE_LEFT)) {\n      Mouse.press(MOUSE_LEFT);\n      //Mouse.click(MOUSE_LEFT);\n    }\n  }\n  // else the mouse button left is not pressed:\n  else {\n    // if the mouse is pressed, release it:\n    if (Mouse.isPressed(MOUSE_LEFT)) {\n      Mouse.release(MOUSE_LEFT);\n    }\n  }\n  \n/*-------------Mouse Button Right Click-----------------------------*/\n    // if the mouse button right is pressed:\n  if (clickState_mouseButtonRight == LOW) {\n    // if the mouse is not pressed, press it:\n    if (!Mouse.isPressed(MOUSE_RIGHT)) {\n      Mouse.press(MOUSE_RIGHT);\n      //Mouse.click(MOUSE_RIGHT);\n    }\n  }\n  // else the mouse button right is not pressed:\n  else {\n    // if the mouse is pressed, release it:\n    if (Mouse.isPressed(MOUSE_RIGHT)) {\n      Mouse.release(MOUSE_RIGHT);\n    }\n  }\n\n/*------------------Up roll----------------------------------------*/\n  if ((upState == LOW) && (clickState_mouseWheel == LOW)) {\n    Mouse.move(0, 0, 1);\n    My_delay(200);\n  }\n\n/*------------------Down roll--------------------------------------*/\n  if ((downState == LOW) && (clickState_mouseWheel == LOW)) {\n    Mouse.move(0, 0, -1);\n    My_delay(200);\n  }\n    \n/*-----------------------------------------------------------------*/ \n  // a delay so the mouse doesn\'t move too fast:\n  My_delay(responseDelay);\n}\n\n// a delay function uses millis()\nvoid My_delay(int Time)\n{\n  while((_currentMillis - _previousMillis) <= Time)\n  {\n      _currentMillis = millis();\n  }\n  _previousMillis = _currentMillis; \n}\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74902],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(r),h=n,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||o;return r?i.createElement(m,a(a({ref:t},u),{},{components:r})):i.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var d=2;d<o;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},79046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var i=r(87462),n=(r(67294),r(3905));const o={description:"For Seeed nRF52 Boards Library",title:"For Seeed nRF52 Boards Library",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-Bluetooth_Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},a="Bluetooth Usage (Seeed nRF52 Boards Library)",l={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth_Usage",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth_Usage",title:"For Seeed nRF52 Boards Library",description:"For Seeed nRF52 Boards Library",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth_Usage.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries",slug:"/XIAO-BLE-Sense-Bluetooth_Usage",permalink:"/custom/XIAO-BLE-Sense-Bluetooth_Usage",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_nRF52840-Sense/Bluetooth Libraries/XIAO-BLE-Sense-Bluetooth_Usage.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"For Seeed nRF52 Boards Library",title:"For Seeed nRF52 Boards Library",keywords:["xiao"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/XIAO-BLE-Sense-Bluetooth_Usage",last_update:{date:"1/11/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Seeed Studio XIAO nRF52840 with CircuitPython",permalink:"/custom/XIAO-BLE_CircutPython"},next:{title:"For Seeed nRF52 mbed-enabled Boards Boards",permalink:"/custom/XIAO-BLE-Sense-Bluetooth-Usage"}},s={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware Required",id:"hardware-required",level:3},{value:"Software Required",id:"software-required",level:3},{value:"Installation",id:"installation",level:3},{value:"Application examples",id:"application-examples",level:2},{value:"Wireless Connect a PC Keyboard to the Mobile Phone",id:"wireless-connect-a-pc-keyboard-to-the-mobile-phone",level:3},{value:"What&#39;s more?",id:"whats-more",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bluetooth-usage-seeed-nrf52-boards-library"},"Bluetooth Usage (Seeed nRF52 Boards Library)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840")," and ",(0,n.kt)("strong",{parentName:"p"},"Seeed Studio XIAO nRF52840 Sense"),' both support Bluetooth connectivity. This wiki will introduce the basics Bluetooth function used by "Seeed nRF52 Boards Library".'),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"hardware-required"},"Hardware Required"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"1 x ",(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-nRF52840-p-5201.html"},"Seeed Studio XIAO nRF52840")," or ",(0,n.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Seeed-XIAO-BLE-Sense-nRF52840-p-5253.html"},"Seeed Studio XIAO nRF52840 Sense")),(0,n.kt)("li",{parentName:"ul"},"1 x Smartphone with bluetooth connectivity"),(0,n.kt)("li",{parentName:"ul"},"1 x USB Type-C cable")),(0,n.kt)("h3",{id:"software-required"},"Software Required"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp"},"nRF Connect for Mobile (Android)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/lightblue/id557428110"},"LightBlue App (Apple)"))),(0,n.kt)("h3",{id:"installation"},"Installation"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},'Since the function we apply is packing in the "Seeed nRF52 Boards Library", we don\'t have to install another third-party library. You can skip the step.')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Method One")," (This method is available for both of the above code libraries.)")),(0,n.kt)("p",null,"Since you have downloaded the zip Library, open your Arduino IDE, click on ",(0,n.kt)("strong",{parentName:"p"},"Sketch > Include Library > Add .ZIP Library"),". Choose the zip file you just downloaded\uff0cand if the library install correct, you will see ",(0,n.kt)("strong",{parentName:"p"},"Library added to your libraries")," in the notice window. Which means the library is installed successfully."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Get_Started_With_Arduino/img/Add_Zip.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Method Two")," (Only the ArduinoBLE library can be installed.)")),(0,n.kt)("p",null,"The library manager was added starting with Arduino IDE versions 1.5 and greater (1.6.x). It is found in the 'Sketch' menu under 'Include Library', 'Manage Libraries...'"),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/seeed_logo/Library.jpg"})),(0,n.kt)("p",null,"When you open the Library Manager you will find a large list of libraries ready for one-click install. To find a library for your product, search for the product name or a keyword such as 'k type' or 'digitizer', and the library you want should show up. Click on the desired library, and the 'Install' button will appear. Click that button, and the library should install automatically. When installation finishes, close the Library Manager."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/SeeednRF.png"})),(0,n.kt)("h2",{id:"application-examples"},"Application examples"),(0,n.kt)("p",null,"We here will introduce you Bluetooth applications."),(0,n.kt)("h3",{id:"wireless-connect-a-pc-keyboard-to-the-mobile-phone"},"Wireless Connect a PC Keyboard to the Mobile Phone"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 1.")," Launch the Arduino application."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 2."),' Select your development board model and add it to the Arduino IDE. Here we are using "Seeed nRF52 Boards Library".'),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"For the board libraries installation, please refer to ",(0,n.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/XIAO_BLE/#software-setup"},"this tutorial")," to finish installation.")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 3.")," Nevigate to ",(0,n.kt)("strong",{parentName:"p"},'"File -> Examples -> Adafruit Bluefruit nRF52 Libraries -> Peripheral -> blehid_keyboard"'),' and open the "blehid_keyboard" exapmle file.'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new1.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 4."),' Click "Upload" and then open the "monitor" on the upper right corner of the Arduino IDE. The monitor will be shown as:'),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new3.png"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 5."),' Open the "nRF Connect for Mobile" App or "LightBlue" App on your mobile phone, meanwhile make sure your phone is connecting with Bluetooth. After a while, you will find a device named "XIAO nRF52840" listed.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"nRF Connect for Mobile APP")," it should be like:")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new5.jpg"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"For ",(0,n.kt)("strong",{parentName:"li"},"LightBlue APP")," it should be like:")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new4.jpg"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Step 6.")," Simply click the device and the connection will be completed automatically. After that we can type characters into the monitor with PC keyboard, and then see what happens on your mobile phone."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/XIAO-BLE/XIAO_nRF52840_new6.gif"})),(0,n.kt)("h2",{id:"whats-more"},"What's more?"),(0,n.kt)("p",null,"If you want to try out more examples you can navigate to ",(0,n.kt)("inlineCode",{parentName:"p"},"File > Examples > INCOMPATIBLE > ArduinoBLE")," and check all the examples under ",(0,n.kt)("strong",{parentName:"p"},"ArduinoBLE")),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
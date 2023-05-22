"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60932],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),c=i,h=d["".concat(p,".").concat(c)]||d[c]||m[c]||n;return r?a.createElement(h,l(l({ref:t},u),{},{components:r})):a.createElement(h,l({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},29485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(87462),i=(r(67294),r(3905));const n={title:"Lipo Rider V1.1",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DC_framework_solenoid_HCNE1-0630/",slug:"/Lipo_Rider_V1.1",last_update:{date:"02/03/2022",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Sensor/Beyond_Grove/Accessories/Charge/Lipo_Rider_V1.1",id:"Sensor/Beyond_Grove/Accessories/Charge/Lipo_Rider_V1.1",title:"Lipo Rider V1.1",description:"\x3c!-- ---",source:"@site/docs/Sensor/Beyond_Grove/Accessories/Charge/Lipo_Rider_V1.1.md",sourceDirName:"Sensor/Beyond_Grove/Accessories/Charge",slug:"/Lipo_Rider_V1.1",permalink:"/zh-CN/Lipo_Rider_V1.1",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Accessories/Charge/Lipo_Rider_V1.1.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"2022\u5e742\u67082\u65e5",frontMatter:{title:"Lipo Rider V1.1",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/DC_framework_solenoid_HCNE1-0630/",slug:"/Lipo_Rider_V1.1",last_update:{date:"02/03/2022",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Lipo Rider",permalink:"/zh-CN/Lipo_Rider"},next:{title:"5V/3.3V Breadboard Power Supply",permalink:"/zh-CN/5V-3.3V_Breadboard_Power_Supply"}},p={},s=[{value:"Features",id:"features",level:2},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Schematic",id:"schematic",level:2},{value:"Block Diagram",id:"block-diagram",level:3},{value:"Specification",id:"specification",level:2},{value:"Key Specification",id:"key-specification",level:3},{value:"Pin definition and Rating",id:"pin-definition-and-rating",level:2},{value:"Pin Instruction and LED Statement",id:"pin-instruction-and-led-statement",level:3},{value:"Usage",id:"usage",level:2},{value:"Hardware Setup",id:"hardware-setup",level:3},{value:"Hardware Components",id:"hardware-components",level:4},{value:"Power Flow Dierctions under Different connection scenarios",id:"power-flow-dierctions-under-different-connection-scenarios",level:4},{value:"Example",id:"example",level:3},{value:"Outdoor Sensor Device Power Supply",id:"outdoor-sensor-device-power-supply",level:4},{value:"Support",id:"support",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"See Also",id:"see-also",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Liporider-setup.jpg",alt:null})),(0,i.kt)("p",null,"Power your favourite electronic kit with green energy! The Lipo Rider board allows you ride the solar wave to run your favourite 5V device. The Lipo Rider board is the ideal green power solution for your outdoor sensor design. Attach the Lipo Rider board to your sensor board and it can run on solar power forever!"),(0,i.kt)("p",null,"The LipoRider is extremely affordable and easy to use. No programming is required. Plug it in and it works. The internal charger IC handles all the power flow between the various components."),(0,i.kt)("p",null,"In case solar power is not sufficient, the microUSB port allows you to charge your lithium battery through USB. It can also be used to program your kit without detaching the Lipo Rider board."),(0,i.kt)("p",null,"The Lipo Rider can be purchased as a separate board or as a kit (Lipo Rider + Lithium Battery + Solar Panel) from ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/"},"Seeed Studio"),"."),(0,i.kt)("p",null,"Model:POW115D2P"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Jst 2.0 connector")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stable 5V USB power supply regardless of source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Charge/Recharge algorithms built into chip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Charge Lithium Polymer Battery through solar power or USB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Stable supply voltage through either lithium battery or USB")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"2 x USB ports let you program your kit while charging your Lithium battery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"LED indications for battery full or charging states")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Simple design means extremely affordable")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Scalable to multiple lithium batteries and large/multiple solar panels through simple end-user modifications"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Green Power and backup supply for distributed outdoor sensor network")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Charger for Lithium batteries"))),(0,i.kt)("h2",{id:"cautions"},"Cautions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Live exposed electronic components")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The board may get hot when supplying large loads")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Potential short circuit or electric shock, especially if device gets wet when placed outdoors for solar power collection")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Not recommended for charging mobile phones as module may overheat"))),(0,i.kt)("h2",{id:"schematic"},"Schematic"),(0,i.kt)("h3",{id:"block-diagram"},"Block Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-rider-blockdiagram.JPG",alt:null})),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Small Footprint \u2013 Dimensions = L47 \xd7 H37.5 \xd7 D6.6")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"600mA maximum charging current for Lithium battery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"350mA maximum supply current from Lithium battery")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Power diodes to prevent back feed from USB device into Lipo battery"))),(0,i.kt)("h3",{id:"key-specification"},"Key Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Items"),(0,i.kt)("th",{parentName:"tr",align:null},"Min"),(0,i.kt)("th",{parentName:"tr",align:null},"Norm"),(0,i.kt)("th",{parentName:"tr",align:null},"Max"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Iin Solar"),(0,i.kt)("td",{parentName:"tr",align:null},"4.8V"),(0,i.kt)("td",{parentName:"tr",align:null},"5.0V"),(0,i.kt)("td",{parentName:"tr",align:null},"6.5V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Icharge (RIset=3.9k\u03a9)"),(0,i.kt)("td",{parentName:"tr",align:null},"400mA"),(0,i.kt)("td",{parentName:"tr",align:null},"500mA"),(0,i.kt)("td",{parentName:"tr",align:null},"600mA")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Isupply 0mA"),(0,i.kt)("td",{parentName:"tr",align:null},"350mA"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vbatt(Rx=0\u03a9)"),(0,i.kt)("td",{parentName:"tr",align:null},"4.2V"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Vsource USB 5.0V"),(0,i.kt)("td",{parentName:"tr",align:null},"Vdestination USB 5.0V"),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"pin-definition-and-rating"},"Pin definition and Rating"),(0,i.kt)("h3",{id:"pin-instruction-and-led-statement"},"Pin Instruction and LED Statement"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"CH pin level(Red LED state)"),(0,i.kt)("th",{parentName:"tr",align:null},"OK pin level(Green LED state)"),(0,i.kt)("th",{parentName:"tr",align:null},"Statements"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"low level(on)"),(0,i.kt)("td",{parentName:"tr",align:null},"high level(off)"),(0,i.kt)("td",{parentName:"tr",align:null},"Charging")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"high level(off)"),(0,i.kt)("td",{parentName:"tr",align:null},"low level(last on)"),(0,i.kt)("td",{parentName:"tr",align:null},"Complete")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"pulse signal(flash)"),(0,i.kt)("td",{parentName:"tr",align:null},"pulse signal(on)"),(0,i.kt)("td",{parentName:"tr",align:null},"The battery isn't exist")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"high level(off)"),(0,i.kt)("td",{parentName:"tr",align:null},"high level(off)"),(0,i.kt)("td",{parentName:"tr",align:null},"\xa0 Two situations\xa0:- \xa0\xa0\xa0\xa0 Input voltage lower than gate voltage - \xa0\xa0\xa0\xa0 The input voltage lower than battery voltage")))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"The Lipo Rider works as a power module to supply a stable 5VDC power for ",(0,i.kt)("strong",{parentName:"p"},"MCU"),"  projects. Here is an example to drive 300mA output wave for a power supply:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/MAP001.jpg",alt:null})),(0,i.kt)("h3",{id:"hardware-setup"},"Hardware Setup"),(0,i.kt)("h4",{id:"hardware-components"},"Hardware Components"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solar Panel")),(0,i.kt)("p",null,"The solar panel is connectedto the board via the lower JST connector. Please note that the Solar Charger IC only accepts input voltage inside the 4.8-6.5V range. If the charging LED is not on, it is possibly due to:"),(0,i.kt)("p",null,"1.Lithium Battery Full"),(0,i.kt)("p",null,"2.Solar Panel voltage outside of range (most likely due to insufficient solar power)."),(0,i.kt)("p",null,"In the second case, re-position your solar panel to accept more sunlight if possible.\nNone of the above conditions will prevent the Lipo Rider from providing a steady 5V supply to the USB, unless the battery is flat."),(0,i.kt)("p",null,"Solar Panel Equations"),(0,i.kt)("p",null,"Solar Panel Output Power = Output current \xd7 Supply Voltage"),(0,i.kt)("p",null,"e.g. 1W = Iout\xd7 5V"),(0,i.kt)("p",null,"Iout = 200mA"),(0,i.kt)("p",null,"Therefore, charging for 1 hour will give 200mAh, ignoring losses. For a 1000mAH battery, charging from empty to full will take approximately 5 hours under ideal conditions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Lithium Battery")),(0,i.kt)("p",null,"The name Lipo Rider suggest that a Lithium Polymer to be used. However, the chemistry of a lithium polymer and a lithium ion battery is sufficient similar for the two battery types to be interchangeably used.\nIn case more than one battery is to be used, connect them in parallel instead of in series, as the charger IC supplies 4.2V."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Slide switch")),(0,i.kt)("p",null,"The slide switch controls the source of the USB 5V power.\nON \u2013 Charge enabled from lithium battery and/or solar\nOFF \u2013 Charge disabled from lithium battery and/or solar"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Source USB Port")),(0,i.kt)("p",null,"The source USB port is a mini USB port which is used as a normal USB port. The source USB port can be used to charge the lithium battery or connected to destination device via the destination USB port."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destination USB port")),(0,i.kt)("p",null,"The destination USB port is where the destination device is to be connected. Power to the destination device will be supplied by the Lipo Rider board. The supply will be either from solar panel, lithium battery or source USB port."),(0,i.kt)("h4",{id:"power-flow-dierctions-under-different-connection-scenarios"},"Power Flow Dierctions under Different connection scenarios"),(0,i.kt)("p",null,"Due to the huge number of combinations, I have only included only the main scenarios:"),(0,i.kt)("p",null,"Standalone Mode"),(0,i.kt)("p",null,"Solar Power charges lithium battery"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-standalone.JPG",alt:null})),(0,i.kt)("p",null,"USB Mode"),(0,i.kt)("p",null,"Solar Power charges lithium battery. Lithium battery supplies destination USB device"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-usb.JPG",alt:null}),"\nProgram Mode"),(0,i.kt)("p",null,"Source USB will charge lithium battery and power destination USB device. Data connection will be enabled between source and destination USB devices"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-program.JPG",alt:null})),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("h4",{id:"outdoor-sensor-device-power-supply"},"Outdoor Sensor Device Power Supply"),(0,i.kt)("p",null,"One important application of the Lipo Rider board is as an affordable power supply for outdoor sensors. The outdoor sensor device will be powered by the lithium battery supplemented by the solar panel. Please note that it is not recommended to run the outdoor sensor ONLY on solar power, as this may vary during the day and may cause the sensor to reset / power down unexpectedly. In this case, the device is running in \u201cUSB Mode\u201d."),(0,i.kt)("p",null,"If a firmware reprogram for the outdoor sensor device is required, simple connect the mini USB port to your PC which will put the device under \u201cProgram Mode\u201d as explained above."),(0,i.kt)("p",null,"Larger/multiple batteries and/or solar panels can be used, but only with end-user modifications."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/img/Lipo-Rider-v1.2-exam1.JPG",alt:null})),(0,i.kt)("p",null,"Lipo Rider powering an Arduino Duemilanove (not strict an outdoor sensor in this case as I have not connected any sensor and it is not outdoor, but you get the point )"),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"forum")," or ",(0,i.kt)("strong",{parentName:"p"},"wish")," to discuss."),(0,i.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Revision"),(0,i.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Date"),(0,i.kt)("th",{parentName:"tr",align:null},"Editor"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lipo Rider V0.9b"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial public release"),(0,i.kt)("td",{parentName:"tr",align:null},"Nov 2, 2010"),(0,i.kt)("td",{parentName:"tr",align:null},"Lafier")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lipo Rider V1.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Revise release"),(0,i.kt)("td",{parentName:"tr",align:null},"Jan 11, 2011"),(0,i.kt)("td",{parentName:"tr",align:null},"Silas Wan")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Lipo Rider V1.1"),(0,i.kt)("td",{parentName:"tr",align:null},"Change the Jst connector from 2.54 to 2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Nov 2, 2011"),(0,i.kt)("td",{parentName:"tr",align:null},"Mike")))),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Lipo_Rider_V1.1/res/Lipo_rider_v1.1.zip"},"File:Lipo rider v1.1.zip"))),(0,i.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,i.kt)("p",null,"Click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/lipo-rider-p-710.html?cPath=104_107"},"here")," to buy ",(0,i.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Lipo_Rider/"},"Lipo Rider"),"  ,or other ",(0,i.kt)("strong",{parentName:"p"},"products")," you like."),(0,i.kt)("h2",{id:"see-also"},"See Also"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://seeeddoc.github.io/Lipo_Rider_Pro/"},"Lipo Rider Pro")),(0,i.kt)("h2",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"This documentation is licensed under the Creative Commons ",(0,i.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0")," Source code and libraries are licensed under ",(0,i.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl.html"},"GPL/LGPL"),", see source code files for details."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
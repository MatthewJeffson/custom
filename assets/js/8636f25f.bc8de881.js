"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[28697],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),m=i,k=c["".concat(p,".").concat(m)]||c[m]||d[m]||n;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},21473:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var r=a(87462),i=(a(67294),a(3905));const n={description:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/High_Accuracy_Pi_RTC-DS3231",last_update:{date:"1/11/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231",id:"Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231",title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",description:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/High_Accuracy_Pi_RTC-DS3231",permalink:"/custom/High_Accuracy_Pi_RTC-DS3231",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/High_Accuracy_Pi_RTC-DS3231.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",title:"DS3231 High Accuracy RTC (Real Time Clock) for Raspberry Pi",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/High_Accuracy_Pi_RTC-DS3231",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"DS1307 RTC (Real Time Clock) for Raspberry Pi",permalink:"/custom/Pi_RTC-DS1307"},next:{title:"Raspberry Pi RS232 Board v1.0",permalink:"/custom/Raspberry_Pi_R232_Board_v1.0"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Get Started",id:"get-started",level:2},{value:"Platforms Supported",id:"platforms-supported",level:3},{value:"Materials required",id:"materials-required",level:3},{value:"Pin Out",id:"pin-out",level:3},{value:"Install",id:"install",level:3},{value:"Usage",id:"usage",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/main.jpg"})),(0,i.kt)("p",null,"The High Accuracy Pi RTC is based on the clock chip DS3231. The DS3231 is a low-cost, extremely accurate I2C realtime clock (RTC). It provides an RTC for Raspberry Pi via the I2C interface. With the clock source from the TCXO(temperature compensated crystal oscillator), the RTC maintains seconds, minutes, hours, day, date, month, and year information. The date at the end of the month is automatically adjusted for months with fewer than 31 days, including corrections for leap year. The clock operates in either the 24-hour or 12-hour format with an AM/PM indicator. The clock provides two programmable time-of-day alarms and programmable square-wave output. The INT/SQW pin either generates an interrupt due to alarm condition or outputs a square-wave signal and the selection is controlled by the bit INTCN."),(0,i.kt)("p",null,"If you want to retain the time infomation even when the Raspberry Pi is powered off, you need to insert a 3V CR1225 lithium cell into the battery holder. And if you are looking for an RTC for your Arduino project, please also take a look at our blog  Arduino RTC Tutorial: Using DS1307 RTC with Arduino to easily get started."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/High-Accuracy-Pi-RTC-%28DS3231%29-p-3214.html",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/get_one_now.png",border:"0"}))),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,i.kt)("th",{parentName:"tr",align:null},"Changes"),(0,i.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"High Accuracy Pi RTC (DS3231)"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial"),(0,i.kt)("td",{parentName:"tr",align:null},"Sep 2018")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"    The battery is not included.\n"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Support Raspberry Pi 2/ 3 B/B+/4/Zero"),(0,i.kt)("li",{parentName:"ul"},"Suport seconds,minuutes,hours,day of week,month, year"),(0,i.kt)("li",{parentName:"ul"},"Support 24-hour or 12-hour format with AM/PM indicator"),(0,i.kt)("li",{parentName:"ul"},"Low-Power Consumption"),(0,i.kt)("li",{parentName:"ul"},"Two Time-of-Day Alarms"),(0,i.kt)("li",{parentName:"ul"},"Fast (400kHz) I2C Interface")),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Item"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Voltage"),(0,i.kt)("td",{parentName:"tr",align:null},"3.3V")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,i.kt)("td",{parentName:"tr",align:null},"0\u2103 to +70\u2103")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Accuracy"),(0,i.kt)("td",{parentName:"tr",align:null},"\xb12ppm from 0\xb0C to +40\xb0C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Interface"),(0,i.kt)("td",{parentName:"tr",align:null},"I2C")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"I2C Address"),(0,i.kt)("td",{parentName:"tr",align:null},"0x68")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Size"),(0,i.kt)("td",{parentName:"tr",align:null},"L: 25mm W: 25mm H: 8mm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Weight"),(0,i.kt)("td",{parentName:"tr",align:null},"4.2g")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Package size"),(0,i.kt)("td",{parentName:"tr",align:null},"L: 85mm W: 75mm H: 25mm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,i.kt)("td",{parentName:"tr",align:null},"15g")))),(0,i.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,i.kt)("p",null,"Any applications need Real Time on Raspberry."),(0,i.kt)("h2",{id:"get-started"},"Get Started"),(0,i.kt)("h3",{id:"platforms-supported"},"Platforms Supported"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,i.kt)("h3",{id:"materials-required"},"Materials required"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,i.kt)("th",{parentName:"tr",align:null},"High Accuracy Pi RTC(DS3231)"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:null})),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/thumbnail.jpg",alt:null}))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html",target:"_blank"},"Get One Now")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{href:"https://www.seeedstudio.com/High-Accuracy-Pi-RTC-DS3231.html",target:"_blank"},"Get One Now"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html"},"here")," to buy.")),(0,i.kt)("h3",{id:"pin-out"},"Pin Out"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/pin_out.jpg",alt:null})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The chip itself supports the alarm function, we also reserved the relevant hardware interface, but our software library does not include this function(S/INT pin), you need to carry out related software development.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"RX/TX is not used in this module, but the 6x2 header takes up the RX/TX pin of the Raspberry Pi, so we bring the RX/TX out and come with a 2pin header.")))),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("p",null,"The driver we provide only applied for Raspbian Jessie/Stretch."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you do not know how to use a raspberry pi, please check ",(0,i.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/documentation/"},"here")," before start.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1. Driver Installation"))),(0,i.kt)("p",null,"Tap the following command in your terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/Seeed-Studio/pi-hats.git\n")),(0,i.kt)("p",null,"When the download finish, tap the following command in your terminal"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd pi-hats\nsudo ./install.sh -u rtc_ds3231\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2. Power off Raspberry Pi"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo shutdown -h now\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3. Insert the HAT to Raspberry Pi"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/img/connect.jpg",alt:null})),(0,i.kt)("p",null,"Please make sure plug the pin 1 of this hat into the pin 1 of raspberry GPIO, just like the picture above."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4. Power up Raspberry Pi"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Now you can use the command to check whether the driver is installed successfully."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./install.sh -l\n")),(0,i.kt)("p",null,"If you want to uninstall the driver you can use the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo ./install.sh -u\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Now let's see what the RTC module can do:")),(0,i.kt)("p",null,"Read hardware clock and print result"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo hwclock -r\n")),(0,i.kt)("p",null,"Set the system time from the hardware clock"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo hwclock -s\n")),(0,i.kt)("p",null,"Set the hardware clock from the current system time"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo hwclock -w\n")),(0,i.kt)("p",null,"More usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hwclock --help\n")),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/High_Accuracy_Pi_RTC-DS3231.zip"},"High Accuracy Pi RTC(DS3231) Eagle Files"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/High_Accuracy_Pi_RTC-DS3231/res/datasheet.pdf"},"Datasheet DS3231")))),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,"This is the introduction Video of this product"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SKJ9iXhx0mc?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
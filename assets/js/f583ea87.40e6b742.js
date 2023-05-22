"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7292],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(r),m=i,c=p["".concat(s,".").concat(m)]||p[m]||h[m]||n;return r?a.createElement(c,l(l({ref:t},u),{},{components:r})):a.createElement(c,l({ref:t},u))}));function c(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<n;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var a=r(87462),i=(r(67294),r(3905));const n={description:"GPRS Shield V3.0",title:"GPRS Shield V3.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/GPRS_Shield_V3.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},l=void 0,o={unversionedId:"Top_Brand/Arduino/shield/GPRS_Shield_V3.0",id:"Top_Brand/Arduino/shield/GPRS_Shield_V3.0",title:"GPRS Shield V3.0",description:"GPRS Shield V3.0",source:"@site/docs/Top_Brand/Arduino/shield/GPRS_Shield_V3.0.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/GPRS_Shield_V3.0",permalink:"/GPRS_Shield_V3.0",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/GPRS_Shield_V3.0.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676476800,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"GPRS Shield V3.0",title:"GPRS Shield V3.0",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/GPRS_Shield_V3.0",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"GPRS Shield V2.0",permalink:"/GPRS_Shield_V2.0"},next:{title:"Music Shield",permalink:"/Music_Shield"}},s={},d=[{value:"Version",id:"version",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"FAQs",id:"faqs",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/GPRS_Shield_V3.0_p1.jpg",alt:null})),(0,i.kt)("p",null,"This is version 3.0 of GPRS Shield.\nHook your Arduino up to GSM/GPRS cell phone network with GPRS shield! You can use your Arduino/Seeeduino or other main boards to dial a phone number or send a text to your friend via easy to use AT commands now.\nGPRS Shield features a quad-band low power consumption GSM/GPRS module SIM900 as well as a compact PCB antenna.Meanwhile, improvements on interfaces and basic circuit have been taken to make it more concise and reliable.\nAnd there\u2019re two choices for you to communicate GPRS shield with the main board -- UART or SoftwareSerial."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/GPRS-Shield-V3.0-p-2333.html"},(0,i.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,i.kt)("h2",{id:"version"},"Version"),(0,i.kt)("hr",null),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Revision"),(0,i.kt)("th",{parentName:"tr",align:null},"Descriptions"),(0,i.kt)("th",{parentName:"tr",align:null},"Release"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v0.9b"),(0,i.kt)("td",{parentName:"tr",align:null},"Initial public release (beta)"),(0,i.kt)("td",{parentName:"tr",align:null},"Mar 3, 2011")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v1.2"),(0,i.kt)("td",{parentName:"tr",align:null},"Added software port to power on/off of SIM90"),(0,i.kt)("td",{parentName:"tr",align:null},"Dec 2, 2011")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v1.4"),(0,i.kt)("td",{parentName:"tr",align:null},"Re-design the power source circuit, re-lay the PCB layout"),(0,i.kt)("td",{parentName:"tr",align:null},"Aug 30, 2012")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v2.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Quad band support and re-design PCB antenna"),(0,i.kt)("td",{parentName:"tr",align:null},"Feb 3, 2013")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"v3.0"),(0,i.kt)("td",{parentName:"tr",align:null},"Change arduino socket to the latest Arduino Uno standard"),(0,i.kt)("td",{parentName:"tr",align:null},"Mar 20, 2015")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"What's the difference between V3.0 and previous version?")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Change the arduino socket to the latest Arduino Uno standard. Except this, all the features are same with the previous version.")),(0,i.kt)("h2",{id:"cautions"},"Cautions"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure your SIM card is activated."),(0,i.kt)("li",{parentName:"ul"},"GPRS Shield doesn't come with ESD precautions. Take special care when handling it in dry weather.")),(0,i.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/img/Gprs_shield_v3_layout1.png",alt:null})),(0,i.kt)("p",null,"Please link to the documentation of ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/GPRS_Shield_V2.0/"},"GPRS Shield V2.0")," for specifications and application guide."),(0,i.kt)("h2",{id:"faqs"},"FAQs"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q1: How to modify Code for leonardo?")),(0,i.kt)("p",null,"A1: Here is the code."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},"#include <SoftwareSerial.h>\n\nunsigned char buffer[64]; // buffer array for data recieve over serial port\nint count = 0;     // counter for buffer array\n\nvoid setup()\n{\n    Serial1.begin(19200);               // the GPRS baud rate   \n    Serial.begin(19200);             // the Serial port of Arduino baud rate.\n}\n\nvoid loop()\n{\n    if (Serial1.available())              // if date is comming from softwareserial port ==> data is comming from gprs shield\n    {\n        while (Serial1.available())          // reading data into char array\n        {\n            buffer[count++] = Serial1.read();     // writing data into array\n            if (count == 64)\n                break;\n        }\n    \n        for ( int j=0;j<count;j++)\n        {\n          Serial.write(buffer[j]);\n        }\n        clearBufferArray();              // call clearBufferArray function to clear the storaged data from the array\n        count = 0;                       // set counter of while loop to zero\n    }\n    if (Serial.available())            // if data is available on hardwareserial port ==> data is comming from PC or notebook\n        Serial1.write(Serial.read());       // write it to the GPRS shield\n}\n\nvoid clearBufferArray()              // function to clear buffer array\n{\n    for (int i=0; i < count; i++)\n    {\n        buffer[i] = NULL;\n    }                               // clear all index of array with command NULL\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q2: How Update the firmware of SIM900?")),(0,i.kt)("p",null,'Q2: Please download the firmware "SIM_900_AGPS_instructions" from Resource module on the wiki,if you have any problem of software or hardware.And this latest one can support HTTPS ,etc.More information please refer to the introduction within.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q3: What about RTC of GPRS shield?")),(0,i.kt)("p",null,"Q3: The specification of SIM900 says it has a RTC backup,but we have not used it so far. Maybe you can refer to the manual and make a demo yourself or we would make it in the future."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q4: I can't send or receive any SMS with this GPRS shield.")),(0,i.kt)("p",null,"A4: Please follow below instructions."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Please make sure that the SIM card is well inserted"),(0,i.kt)("li",{parentName:"ul"},"Check the card on the phone whether it works."),(0,i.kt)("li",{parentName:"ul"},"Try to upload the test code from our wiki and send AT commands to see whether any good returns."),(0,i.kt)("li",{parentName:"ul"},'Try to change the "#define _SS_MAX_RX_BUFF 64 // RX buffer size" in "libraries\\SoftwareSerial\\SoftwareSeriall.h" to "#define_SS_MAX_RX_BUFF 128 // RX buffer size')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q5: Two alternative ways to help to wake up the GPRS shield")),(0,i.kt)("p",null,"A5: Here are the 2 ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Pull DTR pin low : The serial port will be active after DTR is pulled to low for 20ms"),(0,i.kt)("li",{parentName:"ul"},"RTC alarm expires")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Q6: Which type of SIM cards work with GPRS Shield?")),(0,i.kt)("p",null,"A6: SIM900 used in GPRS Shield supports 850/900/1800/1900MHz GSM bands."),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_V3.0_sch_pcb.zip"},"GPRS Shield v3.0 Schematic and PCB in eagle format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS_Shield_v3.0%20sch.pdf"},"GPRS Shield v3.0 Schematic in PDF format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/GPRS%20Shield%20v3.0%20PCB.pdf"},"GPRS Shield v3.0 PCB in PDF format")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/GPRS_Shield_Suli"},"GPRS_Shield library on gitHub - based on Suli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Library]")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/GPRS_SIM900"},"GPRS_SIM900 library on gitHub - Non Suli")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Document]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/AT_Commands_v1.11.pdf"},"AT Commands v1.11")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Document]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900_HD_V1.05.pdf"},"SIM900 Hardware Design")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"http://www.vishay.com/docs/70415/si5902bd.pdf"},"Si5902BDC")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM900datasheeet.zip"},"SIM900 Datasheeet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Datasheet]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/SIM_900_AGPS_instructions.zip"},"SIM_900_AGPS_instructions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Tools]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B08SIM900M64_ST.zip"},"SIM900 firmware and tool(firmware:1137B08SIM900M64_ST)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Tools]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/GPRS_Shield_V3.0/res/1137B13SIM900M64_ST.zip"},"SIM900 firmware and tool(firmware:1137B13SIM900M64_ST)"))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[12023],{3905:(t,e,l)=>{l.d(e,{Zo:()=>p,kt:()=>k});var r=l(67294);function i(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,r)}return l}function n(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){i(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,r,i=function(t,e){if(null==t)return{};var l,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||(i[l]=t[l]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)l=a[r],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(i[l]=t[l])}return i}var u=r.createContext({}),d=function(t){var e=r.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):n(n({},e),t)),l},p=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var l=t.components,i=t.mdxType,a=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=d(l),h=i,k=s["".concat(u,".").concat(h)]||s[h]||c[h]||a;return l?r.createElement(k,n(n({ref:e},p),{},{components:l})):r.createElement(k,n({ref:e},p))}));function k(t,e){var l=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=l.length,n=new Array(a);n[0]=h;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[s]="string"==typeof t?t:i,n[1]=o;for(var d=2;d<a;d++)n[d]=l[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,l)}h.displayName="MDXCreateElement"},50093:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>u,contentTitle:()=>n,default:()=>s,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=l(87462),i=(l(67294),l(3905));const a={description:"Solar Charger Shield",title:"Solar Charger Shield",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Solar_Charger_Shield",last_update:{date:"2/16/2023",author:"jianjing Huang"}},n=void 0,o={unversionedId:"Top_Brand/Arduino/shield/Solar_Charger_Shield",id:"Top_Brand/Arduino/shield/Solar_Charger_Shield",title:"Solar Charger Shield",description:"Solar Charger Shield",source:"@site/docs/Top_Brand/Arduino/shield/Solar_Charger_Shield.md",sourceDirName:"Top_Brand/Arduino/shield",slug:"/Solar_Charger_Shield",permalink:"/custom/Solar_Charger_Shield",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/shield/Solar_Charger_Shield.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1676476800,formattedLastUpdatedAt:"Feb 15, 2023",frontMatter:{description:"Solar Charger Shield",title:"Solar Charger Shield",keywords:["Arduino shield"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Solar_Charger_Shield",last_update:{date:"2/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Small e-Paper Shield",permalink:"/custom/Small_e-Paper_Shield"},next:{title:"Starter Shield EN",permalink:"/custom/Starter_Shield_EN"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Change",id:"change",level:3},{value:"Supply",id:"supply",level:3},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Cautions",id:"cautions",level:2},{value:"Specification",id:"specification",level:2},{value:"Key Specification",id:"key-specification",level:3},{value:"Charging",id:"charging",level:3},{value:"Power Supplying",id:"power-supplying",level:3},{value:"Charging curve",id:"charging-curve",level:3},{value:"Pin definition and Rating",id:"pin-definition-and-rating",level:2},{value:"Mechanic Dimensions",id:"mechanic-dimensions",level:2},{value:"Usage",id:"usage",level:2},{value:"Hardware Installation",id:"hardware-installation",level:3},{value:"Programming",id:"programming",level:3},{value:"Example",id:"example",level:3},{value:"Bill of Materials (BOM) /parts list",id:"bill-of-materials-bom-parts-list",level:2},{value:"FAQ",id:"faq",level:2},{value:"Support",id:"support",level:2},{value:"Version Tracker",id:"version-tracker",level:2},{value:"Bug Tracker",id:"bug-tracker",level:2},{value:"Additional Idea",id:"additional-idea",level:2},{value:"How to buy",id:"how-to-buy",level:2},{value:"Licensing",id:"licensing",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function s(t){let{components:e,...l}=t;return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solar-charger-shield.jpg",alt:null})),(0,i.kt)("p",null,"The solar charger is a stackable shield to Arduino compatible platforms, enables adaptive battery power and act as energy harvester for in-field charging. You may use various batteries just to shift up for 5V output, or put on Li-ion battery and solar panel to form an autonomous sensor unit."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Model:",(0,i.kt)("a",{parentName:"strong",href:"https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107"},"INT107D3P"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("h3",{id:"change"},"Change"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Auto adjust charging current according to source capability")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Designed for inconstant supply like solar panel")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Optimized charging curve for Li-ion batteries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Charging status indicator"))),(0,i.kt)("h3",{id:"supply"},"Supply"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"0.9-4.2V wide input voltage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"5 VDC regulated output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Max 500mA output")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Max 87% conversion efficiency")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Build-in 1A over current protection"))),(0,i.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Application1"),(0,i.kt)("li",{parentName:"ul"},"Application2"),(0,i.kt)("li",{parentName:"ul"},"Application3")),(0,i.kt)("h2",{id:"cautions"},"Cautions"),(0,i.kt)("p",null,"The warnings and wrong operations possible cause dangerous."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("h3",{id:"key-specification"},"Key Specification"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{width:"400px"}," PCB size"),(0,i.kt)("td",{width:"400px"}," 5.3 x 6.9 x 0.16 cm")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null,"  Indicators"),(0,i.kt)("td",null,"  Charging ,complete")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Power supply"),(0,i.kt)("td",null,"4.4VDV-6VDC")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Power Connector"),(0,i.kt)("td",null," Mini USB / JST")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," RoHS"),(0,i.kt)("td",null," YES")))),(0,i.kt)("h3",{id:"charging"},"Charging"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Specification"),(0,i.kt)("th",null,"Min"),(0,i.kt)("th",null,"Norm"),(0,i.kt)("th",null,"Max"),(0,i.kt)("th",null,"Unit")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",{width:600}," Input voltage"),(0,i.kt)("td",{width:100},"  4.4"),(0,i.kt)("td",{width:100},"  5"),(0,i.kt)("td",{width:100},"  6"),(0,i.kt)("td",{width:100},"  VDC")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Low power threshold"),(0,i.kt)("td",null),(0,i.kt)("td",null,"  3.7"),(0,i.kt)("td",null,"  3.9"),(0,i.kt)("td",null,"  VDC")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Charge voltage"),(0,i.kt)("td",null,"  4.158"),(0,i.kt)("td",null,"  4.2"),(0,i.kt)("td",null,"  4.242"),(0,i.kt)("td",null,"  VDC")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Precharge threshold"),(0,i.kt)("td",null,"  2.9"),(0,i.kt)("td",null,"  3"),(0,i.kt)("td",null,"  3.1"),(0,i.kt)("td",null,"  VDC")))),(0,i.kt)("h3",{id:"power-supplying"},"Power Supplying"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Specification"),(0,i.kt)("th",null,"Min"),(0,i.kt)("th",null,"Norm"),(0,i.kt)("th",null,"Max"),(0,i.kt)("th",null,"Unit")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",{width:600}," Battery voltage"),(0,i.kt)("td",{width:100},"  2.8"),(0,i.kt)("td",{width:100},"  3.7"),(0,i.kt)("td",{width:100},"  4.2"),(0,i.kt)("td",{width:100},"  VDC")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Output voltage"),(0,i.kt)("td",null,"  4.6"),(0,i.kt)("td",null,"  4.8"),(0,i.kt)("td",null,"  5.0"),(0,i.kt)("td",null,"  VDC")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Output current"),(0,i.kt)("td",null,"  200"),(0,i.kt)("td",null,"  4.2"),(0,i.kt)("td",null,"  500"),(0,i.kt)("td",null,"  mA")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",null," Level up efficiency"),(0,i.kt)("td",null,"  70"),(0,i.kt)("td",null,"  80"),(0,i.kt)("td",null,"  87"),(0,i.kt)("td",null," \xa0%")))),(0,i.kt)("h3",{id:"charging-curve"},"Charging curve"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Changing-curve.jpg",alt:null})),(0,i.kt)("h2",{id:"pin-definition-and-rating"},"Pin definition and Rating"),(0,i.kt)("h2",{id:"mechanic-dimensions"},"Mechanic Dimensions"),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"hardware-installation"},"Hardware Installation"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware.jpg",alt:null})),(0,i.kt)("p",null,"1.Stacked setup, put battery between the pin headers, please note the polarity while connecting the wires to the battery jac."),(0,i.kt)("p",null,"(Red to +, black to -)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step1.jpg",alt:null})),(0,i.kt)("p",null,"2.Solar panel or other energy sources should be connected to PWR1, solar panel Jack."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Solar_Charger_Shield/img/Solarchange-hardware-step2.jpg",alt:null})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Energy Source: (4V To 6V output)")),(0,i.kt)("p",null,"5V Solar cell"),(0,i.kt)("p",null,"Regulated Motor output"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Rechargeable battery (3.7V To 4.2V)")),(0,i.kt)("p",null,"Lithium Battery"),(0,i.kt)("p",null,"NiMh Battery"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Regular battery (from 2.8V to 4.2V)")),(0,i.kt)("p",null,"AAA"),(0,i.kt)("p",null,"AA"),(0,i.kt)("h3",{id:"programming"},"Programming"),(0,i.kt)("p",null,"Includes important code snippet.\nDemo code like\xa0:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Demo code\n{\n\n}\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"The projects and application examples."),(0,i.kt)("h2",{id:"bill-of-materials-bom-parts-list"},"Bill of Materials (BOM) /parts list"),(0,i.kt)("p",null,"All the components used to produce the product."),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("p",null,"Please list your question here:"),(0,i.kt)("h2",{id:"support"},"Support"),(0,i.kt)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/forum"},"forum")," or ",(0,i.kt)("strong",{parentName:"p"},"wish")," to discuss."),(0,i.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,i.kt)("table",null,(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Revision"),(0,i.kt)("th",null,"Descriptions"),(0,i.kt)("th",null,"Release Date")),(0,i.kt)("tr",{style:{fontSize:"90%"}},(0,i.kt)("td",{width:300}," Solar Charger Shield v1.0"),(0,i.kt)("td",{width:500}," Initial public release"),(0,i.kt)("td",{width:200}," May 01, 2010")))),(0,i.kt)("h2",{id:"bug-tracker"},"Bug Tracker"),(0,i.kt)("p",null,"Bug Tracker is the place you can publish any bugs you think you might have found during use. Please write down what you have to say, your answers will help us improve our products."),(0,i.kt)("h2",{id:"additional-idea"},"Additional Idea"),(0,i.kt)("p",null,"The Additional Idea is the place to write your project ideas about this product, or other usages you've found. Or you can write them on Projects page."),(0,i.kt)("h2",{id:"how-to-buy"},"How to buy"),(0,i.kt)("p",null,"Here to buy Solar Charger Shield: ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107"},"https://www.seeedstudio.com/depot/solar-charger-shield-p-594.html?cPath=104_107")),(0,i.kt)("h2",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"This documentation is licensed under the Creative Commons ",(0,i.kt)("a",{parentName:"p",href:"http://creativecommons.org/licenses/by-sa/3.0/"},"Attribution-ShareAlike License 3.0")," Source code and libraries are licensed under ",(0,i.kt)("a",{parentName:"p",href:"http://www.gnu.org/licenses/gpl.html"},"GPL/LGPL"),", see source code files for details."),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}s.isMDXComponent=!0}}]);
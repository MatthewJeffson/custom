"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24347],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3295:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={description:"GPS-Modules-Selection-Guide",title:"GPS Modules Selection Guide",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/GPS-Modules-Selection-Guide",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},o=void 0,l={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/GPS-Modules-Selection-Guide",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/GPS-Modules-Selection-Guide",title:"GPS Modules Selection Guide",description:"GPS-Modules-Selection-Guide",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/GPS-Modules-Selection-Guide.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/GPS-Modules-Selection-Guide",permalink:"/custom/GPS-Modules-Selection-Guide",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/GPS-Modules-Selection-Guide.md",tags:[{label:"Tutorial",permalink:"/custom/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"Feb 1, 2023",frontMatter:{description:"GPS-Modules-Selection-Guide",title:"GPS Modules Selection Guide",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/GPS-Modules-Selection-Guide",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"A Comparison of Different Grove Temperature Sensors",permalink:"/custom/A_Comparison_of_Different_Grove_Temperature_Sensors"},next:{title:"How to detect finger touch",permalink:"/custom/How_to_detect_finger_touch"}},s={},u=[{value:"Introduction to GPS and GPS Modules",id:"introduction-to-gps-and-gps-modules",level:2},{value:"Operating Principle",id:"operating-principle",level:2},{value:"Field of Applicaitons",id:"field-of-applicaitons",level:2},{value:"GPS Modules at Seeed",id:"gps-modules-at-seeed",level:2},{value:"Which GPS Module is better",id:"which-gps-module-is-better",level:3},{value:"Better power consumption",id:"better-power-consumption",level:4},{value:"Scalability",id:"scalability",level:4},{value:"Accuracy",id:"accuracy",level:4},{value:"Projects",id:"projects",level:2},{value:"Resource",id:"resource",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We have released various types of GPS Modules in recent years. Let's take a close look at them and figure out which one is best suited for you!"),(0,r.kt)("p",null,"For all the GPS or Communication modules in our bazaar, please click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/"},"Seeed Studio Bazaar")," to check."),(0,r.kt)("h2",{id:"introduction-to-gps-and-gps-modules"},"Introduction to GPS and GPS Modules"),(0,r.kt)("p",null,"One of the global positioning system (GPS) devices ultilizes data from satellites to locate a specific point on the Earth in a process named trilateration. Meanwhile, a GPS receiver measures the distances to satellites using radio signals to trilaterate. And trilateration is similar to triangulation, which measures angles, depicted in this illustration (Tim Gunther, 2020). GPS modules contain tiny processors and antennas that directly receive data sent by satellites through dedicated RF frequencies. From there, it\u2019ll receive timestamp from each visible satellites, along with other pieces of data. If the module\u2019s antenna can spot 4 or more satellites, it\u2019s able to accurately calculate its position and time."),(0,r.kt)("p",null,"The four well-known Global Navigation Satellite System include GPS, BDS(Beidou), GLONASS and GALILEO four satellite navigation systems. The earliest appeared in the United States is GPS (Global Positioning System), which is the most complete technology at this stage. BDS, GLONASS and GALILEO have become the other largest satellite navigation systems in the world and are currently in the process of modernization."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/28251.jpg"}),(0,r.kt)("figcaption",null,(0,r.kt)("b",null,"Figure 1"),". ",(0,r.kt)("i",null," Illustration of globe with three satellites triangulating a precise location. ( Tim Gunther, 2020 ) "))),(0,r.kt)("p",null,"We will introduce and compare these two GPS modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove-GPS/"},"Grove \u2013 GPS Module"),"  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove-GPS-Air530/"},"Grove \u2013 GPS(Air530)"))),(0,r.kt)("p",null,"These GPS modules are compatible with Arduino and Raspberry Pi, making it easy for you to start to try out.The Air 530 Module in ",(0,r.kt)("strong",{parentName:"p"},"Grove - GPS(Air530)")," is a high-performance, highly integrated multi-mode statelite positioning and navigation module. It supports GPS / Beidou / Glonass / Galileo / QZSS / SBAS, which makes it suitable for GNSS positioning applications such as car navigation, smart wear and drone. And Air530 module is also supporting NMEA 0183 V4.1 protocol and compatible with previous versions."),(0,r.kt)("p",null,"Meanwhile, the E-1612-UB module series of ",(0,r.kt)("strong",{parentName:"p"},"Grove - GPS Module")," is a family of stand-alone GPS receivers featuring the high performance u-blox 5 positioning engine. The 50-channel u-blox 5 positioning engine boasts a Time-To-First-Fix ( TTFF ) of under 1 second. The dedicated acquisition engine, with over 1 million correlators, is capable of massive parallel time / frequency space searches, enabling it to find satellites instantly."),(0,r.kt)("h2",{id:"operating-principle"},"Operating Principle"),(0,r.kt)("p",null,"You ought to acknowledge the principles of GPS modules before purchasing and the table below is provding some information."),(0,r.kt)("h2",{id:"field-of-applicaitons"},"Field of Applicaitons"),(0,r.kt)("p",null,"There are a numerous ultilizations of GPS Modules. Particularly, plenty of social activities are able to be developed by applications of these GPS Modules. Therefore, GPS Modules play important roles in various sectors, which are including Environmental Measurement, Transportation, Emergency Rescue, Agriculture, Entertainment and etc."),(0,r.kt)("table",{className:"tg",style:{tableLayout:"fixed",width:792}},(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:201}}),(0,r.kt)("col",{style:{width:591}})),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",{className:"tg-5hs1"},"Field of application"),(0,r.kt)("th",{className:"tg-5hs1"},"Function"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{className:"tg-5z8m"},(0,r.kt)("br",null),(0,r.kt)("br",null),"Measurement",(0,r.kt)("br",null)),(0,r.kt)("td",{className:"tg-ut4k"},"It uses carrier phase differential technology (RTK) to process the carrier phase of two observation stations in real time with an accuracy of centimeter level. Measurement results are unified in WGS84 coordinates, information is automatically received and stored, reducing cumbersome intermediate processing Link.")),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"tg-5z8m"},(0,r.kt)("br",null),(0,r.kt)("br",null),"Transportation",(0,r.kt)("br",null)),(0,r.kt)("td",{className:"tg-ut4k"},"GPS modules can be used for autonomous navigation, port management and entry guidance, route traffic management and tracking and monitoring. Vehicle-mounted equipment uses GPS for precise positioning, combined with electronic maps and real-time traffic conditions, automatically matches the optimal path, and implements autonomous navigation of the vehicle.")),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"tg-5z8m"},(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("br",null),"Emergency Rescue",(0,r.kt)("br",null)),(0,r.kt)("td",{className:"tg-ut4k"},"Using GPS positioning technology, emergency dispatch of fire, ambulance and police can be carried out, and the emergency response department's response efficiency to fire, crime scene, traffic accident, traffic jam and other emergency events can be improved. A fishing boat equipped with a GPS module can quickly locate and alarm when a dangerous situation occurs, so that it can obtain rescue faster and more timely.")),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"tg-5z8m"},(0,r.kt)("br",null),(0,r.kt)("br",null),"Agriculture",(0,r.kt)("br",null),(0,r.kt)("br",null)),(0,r.kt)("td",{className:"tg-ut4k"},"A GPS module is used to locate and acquire farmland information, including yield monitoring, soil sample collection and etc. The computer system determines the management measures of farmland plots by analyzing and processing the data, and loads the yield and soil status information into the GPS equipment. In the spray applicator, it can accurately fertilize and spray the farmland.")),(0,r.kt)("tr",null,(0,r.kt)("td",{className:"tg-5z8m"},(0,r.kt)("br",null),(0,r.kt)("br",null),"Entertainment",(0,r.kt)("br",null)),(0,r.kt)("td",{className:"tg-ut4k"},"Through GPS modules, people can quickly find their destination in an unfamiliar city, and can travel on the optimal path; campers carry GPS receivers to quickly find suitable camping locations without worrying about getting lost; even some high-end video games , GPS simulation technology is also used.")))),(0,r.kt)("h2",{id:"gps-modules-at-seeed"},"GPS Modules at Seeed"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Thumbnail"),(0,r.kt)("th",{parentName:"tr",align:null},"Size"),(0,r.kt)("th",{parentName:"tr",align:null},"Update Rate"),(0,r.kt)("th",{parentName:"tr",align:null},"Baud Rate"),(0,r.kt)("th",{parentName:"tr",align:null},"Navigation Sensitivity"),(0,r.kt)("th",{parentName:"tr",align:null},"Power Requirements"),(0,r.kt)("th",{parentName:"tr",align:null},"Number of Channels"),(0,r.kt)("th",{parentName:"tr",align:null},"Time to first start"),(0,r.kt)("th",{parentName:"tr",align:null},"Antennas"),(0,r.kt)("th",{parentName:"tr",align:null},"Accuracy"),(0,r.kt)("th",{parentName:"tr",align:null},"Click to Buy"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-GPS/"},"Grove \u2013 GPS Module")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/gps-module.jpg"})),(0,r.kt)("td",{parentName:"tr",align:null},"40mm x 20mm x 13mm"),(0,r.kt)("td",{parentName:"tr",align:null},"1Hz, max 10Hz"),(0,r.kt)("td",{parentName:"tr",align:null},"9,600bps \u2013 115,200bps"),(0,r.kt)("td",{parentName:"tr",align:null},"-160dBm"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V - 5V"),(0,r.kt)("td",{parentName:"tr",align:null},"22 tracking, 66 channels"),(0,r.kt)("td",{parentName:"tr",align:null},"Cold start: 13s; Warm start: 1-2s; Hot start: <1s"),(0,r.kt)("td",{parentName:"tr",align:null},"Antenna included"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5m GPS Horizontal Position Accuracy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-GPS-Module.html?utm_source=blog&utm_medium=blog"},"Order Now"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://wiki.seeedstudio.com/Grove-GPS-Air530/"},"Grove \u2013 GPS (Air530)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-GPS/img/03_11.png"})),(0,r.kt)("td",{parentName:"tr",align:null},"40mm x 20mm x 13mm"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"Default 9,600bps"),(0,r.kt)("td",{parentName:"tr",align:null},"-148dB"),(0,r.kt)("td",{parentName:"tr",align:null},"3.3V - 5V"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"Cold start: 27s; Warm start: 4s;"),(0,r.kt)("td",{parentName:"tr",align:null},"Antenna included"),(0,r.kt)("td",{parentName:"tr",align:null},"2.5m Horizontal positioning accuracy"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-GPS-Air530-p-4584.html"},"Order Now"))))),(0,r.kt)("h3",{id:"which-gps-module-is-better"},"Which GPS Module is better"),(0,r.kt)("h4",{id:"better-power-consumption"},"Better power consumption"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Grove \u2013 GPS (Air530)")," has a ultra-low power consumption at only 31uA, low power mode at 0.85 mA, which makes it be the better GPS with lower power consumption."),(0,r.kt)("h4",{id:"scalability"},"Scalability"),(0,r.kt)("p",null,"With a higher maximum update rate, the ",(0,r.kt)("strong",{parentName:"p"},"Grove - GPS")," is able to be used for projects that involve objects that travel at a faster speed. Furthermore, having more channels open up for other applications as well, the ",(0,r.kt)("strong",{parentName:"p"},"Grove- GPS (Air 530)")," has a multi-mode satellite positioning & navigation and supports more than 6 satellites at the same time."),(0,r.kt)("h4",{id:"accuracy"},"Accuracy"),(0,r.kt)("p",null,"Featuring Horizontal positioning accuracy of 2.5m, High positioning accuracy of 3.5m, speed accuracy of 0.1m/s, and a time transfer accuracy of 30ns, the ",(0,r.kt)("strong",{parentName:"p"},"Grove -GPS (Air530)")," is able to position quickly and accurately even under the condition of a bad signal."),(0,r.kt)("h2",{id:"projects"},"Projects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Project of GPS/GPRS Tracker"),": In this new project we will present our GPS Tracker connected using the GPRS technique and MQTT protocol."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/OHAlgerie/project-of-gps-gprs-tracker-36c425/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Vehicle Tracking System"),": Now that you have just picked your GPS module, here are some projects that you can do with your Arduino and GPS module. Visit ",(0,r.kt)("a",{parentName:"p",href:"https://create.arduino.cc/projecthub/muchika/vehicle-tracking-system-based-on-gps-and-gsm-57b814?ref=tag&ref_id=gps&offset=15"},"here")," for detailed information."),(0,r.kt)("iframe",{frameborder:"560",height:"327.5",scrolling:"no",src:"https://hackster.imgix.net/uploads/attachments/1038379/FZNOC7NK0MP38U3.jpg?auto=compress%2Cformat&w=900&h=675&fit=min",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"LED Bike Speedometer"),": Want to find out how fast you are riding? With this DIY bike speedometer, using GPS technology for speed sensing, you can tell how fast you are going! It also features an RGB LED to indicate the speed to the rider. Visit ",(0,r.kt)("a",{parentName:"p",href:"https://create.arduino.cc/projecthub/JeremySCook/gps-led-bike-speedometer-c8f956?ref=tag&ref_id=gps&offset=26"},"here")," for detailed information."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/watch?v=CeStrH-5Llo&feature=emb_rel_end",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Personal GPS Assistant"),": This project is a device that lets you monitor people and things, and tell you continuously their location, and the values of the sensors attached to it. One of the feature allows you to set limit values for the sensors, and when these are exceeded an SMS alert is sent to you. You can also set restrictions from some places, where alerts will be given to you when the device leaves the area. It\u2019s also possible to communicate with the device through SMS, in order to get information about it."),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://create.arduino.cc/projecthub/Momy93/sandro-your-personal-gps-assistant-26dfa3?ref=tag&ref_id=gps&offset=32"},"here")," for detailed information."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://youtu.be/3lcP4YtxlCg",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[Reference]")," ",(0,r.kt)("a",{parentName:"p",href:"https://www.nationalgeographic.org/photo/triangulation-sized/"},"Triangulation from Tim Gunther, National Geographic (2020)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-GPS/res/E-1612-UB_Datasheets_Sheet.pdf"},"E-1612-UB Datasheets")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"[ZIP]")," ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-GPS_Air_530/Air530_GPS_User_Booklet.V1.7.pdf"},"Air530 Datasheets")),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," If you have any technical issue. submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40264],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,c=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},4450:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"Grove-VOC and eCO2 Gas Sensor(SGP30)",title:"Grove-VOC and eCO2 Gas Sensor(SGP30)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-VOC_and_eCO2_Gas_Sensor-SGP30",last_update:{date:"1/4/2023",author:"shuxu hu"}},i=void 0,l={unversionedId:"Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_and_eCO2_Gas_Sensor-SGP30",id:"Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_and_eCO2_Gas_Sensor-SGP30",title:"Grove-VOC and eCO2 Gas Sensor(SGP30)",description:"Grove-VOC and eCO2 Gas Sensor(SGP30)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_and_eCO2_Gas_Sensor-SGP30.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Gas",slug:"/Grove-VOC_and_eCO2_Gas_Sensor-SGP30",permalink:"/custom/Grove-VOC_and_eCO2_Gas_Sensor-SGP30",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Gas/Grove-VOC_and_eCO2_Gas_Sensor-SGP30.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672761600,formattedLastUpdatedAt:"Jan 3, 2023",frontMatter:{description:"Grove-VOC and eCO2 Gas Sensor(SGP30)",title:"Grove-VOC and eCO2 Gas Sensor(SGP30)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-VOC_and_eCO2_Gas_Sensor-SGP30",last_update:{date:"1/4/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove -Smart Air Quality Sensor (SGP41)",permalink:"/custom/grove-smart-air-quality-sensor-sgp41"},next:{title:"Grove - HCHO Sensor",permalink:"/custom/Grove-HCHO_Sensor"}},s={},p=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Features",id:"features",level:2},{value:"Specification",id:"specification",level:2},{value:"Applications",id:"applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Map",id:"pin-map",level:3},{value:"Schematic",id:"schematic",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Play With Arduino",id:"play-with-arduino",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)",id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi",level:3},{value:"Hardware",id:"hardware-1",level:4},{value:"Software",id:"software-1",level:4},{value:"Notice",id:"notice",level:2},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],d={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"The Grove-VOC and eCO2 Gas Sensor(SGP30) is an air quality detection sensor. This grove module is based on SGP30, we provide TVOC(Total Volatile Organic Compounds) and CO2eq output for this module."),(0,r.kt)("p",null,"The SGP30 is a digital multi-pixel gas sensor designed for easy integration into air purifier, demand-controlled ventilation, and IoT applications. Sensirion\u2019s CMOSens\xaetechnology offers a complete sensor system on a single chip featuring a digital I2C interface, a temperature controlled micro hotplate, and two preprocessed indoor air quality signals. As the first metal-oxide gas sensor featuring multiple sensing elements on one chip, the SGP30 provides more detailed information about the air quality."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"We've released the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Sensor_gas/"},"Seeed Gas Sensor Selection Guide"),", it will help you choose the gas sensor that best suits your needs.")),(0,r.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,r.kt)("p",null,"With the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,r.kt)("p",null,"SenseCAP S210x series industrial sensors provide an out-of-box experience for environmental sensing. Please refer to the S2103 Wireless CO2, Temperature, and Humidity Sensor with higher performance and robustness for air quality monitoring. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," for your next successful industrial project."),(0,r.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("font",{size:4},(0,r.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,r.kt)("img",{width:"20%",src:"https://files.seeedstudio.com/wiki/K1100_overview/S21012103.png"}))))),(0,r.kt)("tr",null,(0,r.kt)("td",{align:"center"},(0,r.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,r.kt)("strong",null,"S2103 Air Temp & Humidity & CO2")))))),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Multi-pixel gas sensor for indoor air quality applications"),(0,r.kt)("li",{parentName:"ul"},"Outstanding long-term stability"),(0,r.kt)("li",{parentName:"ul"},"I2C interface with TVOC and CO2eq output signals"),(0,r.kt)("li",{parentName:"ul"},"Low power consumption"),(0,r.kt)("li",{parentName:"ul"},"Chip module tape and reel packaged, reflow solderable")),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("table",{border:"2",colspan:"tg",style:{width:529}},(0,r.kt)("colgroup",null,(0,r.kt)("col",{style:{width:143}}),(0,r.kt)("col",{style:{width:98}}),(0,r.kt)("col",{style:{width:288}})),(0,r.kt)("tr",null,(0,r.kt)("th",{colspan:"tg-xf7g"},"Parameter"),(0,r.kt)("th",{colspan:"tg-xf7g"},"Signal"),(0,r.kt)("th",{colspan:"tg-xf7g"},"Values")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-f5ry"},"Working Voltage"),(0,r.kt)("td",{colspan:"tg-f5ry",colspan:"1"},"                   3.3V/5V")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-f5ry",rowspan:"2"},"Output range"),(0,r.kt)("td",{colspan:"tg-f5ry"},"TVOC"),(0,r.kt)("td",{colspan:"tg-28l8"},"  0 ppb to 60000ppb "),">"),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-eh2d"},"CO\u2082eq"),(0,r.kt)("td",{colspan:"tg-3xi5"},"    400 ppm to 60000 ppm")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-f5ry",rowspan:"2"},"Sampling rate"),(0,r.kt)("td",{colspan:"tg-eh2d"},"TVOC"),(0,r.kt)("td",{colspan:"tg-3xi5"},"1HZ")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-eh2d"},"CO\u2082eq"),(0,r.kt)("td",{colspan:"tg-3xi5"},"1HZ")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-3we0",rowspan:"7"},"Resolution"),(0,r.kt)("td",{colspan:"tg-3we0",rowspan:"3"},"TVOC"),(0,r.kt)("td",{colspan:"tg-i81m"},"0 - 2008 ppb / 1 ppb")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-i81m"},"2008 - 11110 ppb / 6 ppb")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-i81m"},"11110 - 60000 ppb / 32 ppb")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-3we0",rowspan:"4"},"CO\u2082eq"),(0,r.kt)("td",{colspan:"tg-i81m"},"400 - 1479 ppm / 1 ppm")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-i81m"},"1479 -5144 ppm / 3 ppm")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-i81m"},"5144 - 17597 ppm / 9 ppm")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-i81m"},"17597 - 60000 ppm / 31 ppm")),(0,r.kt)("tr",null,(0,r.kt)("td",{colspan:"tg-3we0"},"Default I2C address"),(0,r.kt)("td",{colspan:"tg-i81m",colspan:"1"},"0X58"))),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Air purifier"),(0,r.kt)("li",{parentName:"ul"},"demand-controlled ventilation"),(0,r.kt)("li",{parentName:"ul"},"IoT applications"),(0,r.kt)("li",{parentName:"ul"},"New house air condition monitor")),(0,r.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,r.kt)("h3",{id:"pin-map"},"Pin Map"),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/pin.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h3",{id:"schematic"},"Schematic"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Power")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc2.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"The typical operating voltage SGP30 is 1.8v, we use a power conversion chip ",(0,r.kt)("em",{parentName:"p"},"XC6206P182MR")," to provide a stable 3.3V for the MCP9600."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Bi-directional level shifter circuit")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sc1.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"This is a typical Bi-directional level shifter circuit to connect two different voltage section of an I^2^C bus. The I",(0,r.kt)("sup",null,"2"),"C bus of this sensor use 1.8V, if the I",(0,r.kt)("sup",null,"2"),"C bus of the Arduino use 5V or 3.3V, this circuit will be needed. In the schematic above, ",(0,r.kt)("strong",{parentName:"p"},"Q7")," and ",(0,r.kt)("strong",{parentName:"p"},"Q8")," are N-Channel MOSFET ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf"},"BSS138LT3G"),", which act as a bidirectional switch. In order to better understand this part, you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Grove-I2C_High_Accuracy_Temperature_Sensor-MCP9808/res/AN10441.pdf"},"AN10441")),(0,r.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg",alt:"pir",width:200,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo_n.jpg",alt:"pir",width:200,height:"auto"})))))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"The platforms mentioned above as supported is/are an indication of the module's hardware or theoritical compatibility. We only provide software library or code examples for Arduino platform in most cases. It is not possible to provide software library / demo code for all possible MCU platforms. Hence, users have to write their own software library.\n"))),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"If this is the first time you work with Arduino, we strongly recommend you to see [Getting Started with Arduino](https://wiki.seeedstudio.com/Getting_Started_with_Arduino/) before the start.\n"))),(0,r.kt)("h3",{id:"play-with-arduino"},"Play With Arduino"),(0,r.kt)("h4",{id:"hardware"},"Hardware"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Materials required")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino V4.2"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Shield"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-VOC and eCO2 Gas Sensor(SGP30)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_1.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/images/gs_4.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg",alt:"pir",width:500,height:"auto"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Seeeduino-V4.2-p-2517.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/Base-Shield-V2-p-1378.html",target:"_blank"},"Get One Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{href:"https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html",target:"_blank"},"Get One Now"))))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"**1** Please plug the USB cable gently, otherwise you may damage the port. Please use the USB cable with 4 wires inside, the 2 wires cable can't transfer data. If you are not sure about the wire you have, you can click [here](https://www.seeedstudio.com/Micro-USB-Cable-48cm-p-1475.html) to buy\n\n**2** Each Grove module comes with a Grove cable when you buy. In case you lose the Grove cable, you can click [here](https://www.seeedstudio.com/Grove-Universal-4-Pin-Buckled-20cm-Cable-%285-PCs-pack%29-p-936.html) to buy.\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Connect Grove-VOC and eCO2 Gas Sensor(SGP30) to ",(0,r.kt)("strong",{parentName:"p"},"I2C")," port  of Grove-Base Shield.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Plug Grove - Base Shield into Seeeduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Connect Seeeduino to PC via a USB cable."))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/3.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"If we don't have Grove Base Shield, We also can directly connectGrove-VOC and eCO2 Gas Sensor(SGP30) to Seeeduino as below.\n"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Seeeduino"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-VOC and eCO2 Gas Sensor(SGP30)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5V"),(0,r.kt)("td",{parentName:"tr",align:null},"Red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"GND"),(0,r.kt)("td",{parentName:"tr",align:null},"Black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SDA"),(0,r.kt)("td",{parentName:"tr",align:null},"White")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SCL"),(0,r.kt)("td",{parentName:"tr",align:null},"Yellow")))),(0,r.kt)("h4",{id:"software"},"Software"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 1.")," Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/SGP30_Gas_Sensor"},"Seeed SGP30 library")," from Github.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 2.")," Refer to ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library"},"How to install library")," to install library for Arduino.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 3.")," Extract the ",(0,r.kt)("inlineCode",{parentName:"p"},"SGP30_Gas_Sensor-master.zip")," you've just downloaded, in the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," folder you will see 3 subfolders:"))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/ex.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"absolute_humidity_example")," requires external humidity sensor calibration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"base_example")," is simplely collecting date without any calibration"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"baseline_operation_example")," can save the data base value to flash. The software will automatically collects the base values and stores them."),(0,r.kt)("p",null,"We recommand to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"baseline_operation_example")," , then click the ",(0,r.kt)("inlineCode",{parentName:"p"},"xxx.ino")," file to open the example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 4.")," Upload the demo. If you do not know how to upload the code, please check ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Upload_Code/"},"How to upload code"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Step 5.")," Open the ",(0,r.kt)("strong",{parentName:"p"},"Serial Monitor")," of Arduino IDE by click ",(0,r.kt)("strong",{parentName:"p"},"Tool-> Serial Monitor"),". Or tap the ++ctrl+shift+m++ key at the same time. if every thing goes well, you will get the result."))),(0,r.kt)("p",null,"The result should be like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n318\ntVOC  Concentration:74ppb\nCO2eq Concentration:506ppm\n319\ntVOC  Concentration:80ppb\nCO2eq Concentration:509ppm\n320\ntVOC  Concentration:66ppb\nCO2eq Concentration:500ppm\n321\ntVOC  Concentration:69ppb\nCO2eq Concentration:511ppm\n322\ntVOC  Concentration:70ppb\nCO2eq Concentration:511ppm\n323\ntVOC  Concentration:60ppb\nCO2eq Concentration:493ppm\n324\ntVOC  Concentration:72ppb\nCO2eq Concentration:502ppm\n\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    1- ppm: parts per million. 1 ppm = 1000 ppb (parts per billion)\n    \n    2- The result is based on `baseline_operation_example.ino`\n\n    3- We tested this demo in our office room, according to your test environment, the results may be different\n"))),(0,r.kt)("h3",{id:"play-with-raspberry-pi-with-grove-base-hat-for-raspberry-pi"},"Play With Raspberry Pi (With Grove Base Hat for Raspberry Pi)"),(0,r.kt)("h4",{id:"hardware-1"},"Hardware"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Things used in this project:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove Base Hat for RasPi"),(0,r.kt)("th",{parentName:"tr",align:null},"Grove-VOC and eCO2 Gas Sensor(SGP30)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_Base_Hat_for_Raspberry_Pi/img/thumbnail.jpg",alt:"pir",width:600,height:"auto"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/thumbnail.jpg",alt:"pir",width:500,height:"auto"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Grove-Base-Hat-for-Raspberry-Pi-p-3186.html"},"Get ONE Now")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/-Grove-VOC-and-eCO2-Gas-Sensor-(SGP30)-p-3071.html"},"Get ONE Now"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Plug the Grove Base Hat into Raspberry."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Connect Grove-VOC and eCO2 Gas Sensor(SGP30) to port I2C of the Base Hat."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 4"),". Connect the Raspberry Pi to PC through USB cable.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30.jpg",alt:"pir",width:600,height:"auto"})),(0,r.kt)("h4",{id:"software-1"},"Software"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"}," If you are using **Raspberry Pi with Raspberrypi OS >= Bullseye**, you have to use this command line **only with Python3**.\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 1"),". Follow ",(0,r.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Grove_Base_Hat_for_Raspberry_Pi/#installation"},"Setting Software")," to configure the development environment."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 2"),". Download the source file by cloning the grove.py library. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\ngit clone https://github.com/Seeed-Studio/Seeed_Python_SGP30.git\n\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Step 3"),". Excute below commands to run the code.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd Seeed_Python_SGP30\nsudo python3 setup.py install\ncd examples\npython3 sgp30_simpleread.py\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Error")),(0,r.kt)("p",null,"It might cause some errors but we should not worry about it."),(0,r.kt)("p",null,"We copy the path to the error file."),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_2.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,'Here is the path that is shown as the example :  \u201c/usr/local/lib/python3.7/dist-packages/sgp30-0.1.6-py3.7.egg/sgp30"'),(0,r.kt)("p",null,'Use "cd" command to jump in that path and use your compiler to change the codes of "sgp30.py", for example : \u201csudo nano sgp30.py\u201d.'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_3.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,'We delete "SMBusWrapper" on the second line and then save it.'),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/sgp30_4.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,'Go back to \u201cSeeed_Python_SGP30/examples\u201d folder\uff0capply "python3 sgp30_simpleread.py" and all will be fine\u3002'),(0,r.kt)("p",null,"Following is the sgp30_simpleread.py code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'import seeed_sgp30\nfrom grove.i2c import Bus\n\nsgp30 = seeed_sgp30.grove_sgp30(Bus())\nwhile True:\n  data = sgp30.read_measurements()\n  co2_eq_ppm, tvoc_ppb = data.data\n  print("\\r  tVOC = {} ppb CO2eq = {}  ".format(\n                               tvoc_ppb, co2_eq_ppm))\n')),(0,r.kt)("admonition",{type:"success"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"If everything goes well, you will be able to see the following result.\n"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"\npi@raspberrypi:~/Seeed_Python_SGP30/examples $ python3 sgp30_simpleread.py\n  tVOC = 9 ppb CO2eq = 943  \n  tVOC = 9 ppb CO2eq = 931  \n  tVOC = 10 ppb CO2eq = 920  \n  tVOC = 14 ppb CO2eq = 904  \n  tVOC = 12 ppb CO2eq = 888  \n  tVOC = 13 ppb CO2eq = 873  \n  tVOC = 11 ppb CO2eq = 865  \n  tVOC = 11 ppb CO2eq = 842  \n  tVOC = 9 ppb CO2eq = 828  \n  tVOC = 10 ppb CO2eq = 814  \n  tVOC = 11 ppb CO2eq = 794  \n  tVOC = 14 ppb CO2eq = 786  \n  tVOC = 9 ppb CO2eq = 764  \n  tVOC = 12 ppb CO2eq = 744  \n  tVOC = 11 ppb CO2eq = 739  \n  tVOC = 12 ppb CO2eq = 715  \n  tVOC = 15 ppb CO2eq = 688  \n  tVOC = 13 ppb CO2eq = 669  \n\n")),(0,r.kt)("p",null,"You can quit this program by simply press ++ctrl+c++."),(0,r.kt)("h2",{id:"notice"},"Notice"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The SGP30 uses a dynamic baseline compensation algorithm and on-chip calibration parameters to provide two complementary air quality signals. The baseline should be stored in EEPROM.When there is no baseline value in EEPROM at the first time power-ON or the baseline record is older than seven days.The sensor has to run for 12 hours until the baseline can be stored. You can refer to program flow chart blow.")),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/Get%20baseline%20program%20flow%20chart%20.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The H2_Signal and Ethanol_signal,Both signals can be used to calculate gas concentrations c relative to a reference concentration cref by ln(C/Cref)=(Sref-Sout)/a with a = 512, sref the H2_signal or Ethanol_signal output at the reference concentration, and sout = Sout_H2 or Sout = Sout_EthOH.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For more accurate measurement,You can set the abslute humidity compensation,Defalt value is 11.57g/m3,A little troublesome is that you should get relatively humidity value of environment from another way,Because there is no humidity measurement part integrated in SGP30.."))),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/absolute%20humidity%20with%20the%20formula.png",alt:"pir",width:600,height:"auto"})),(0,r.kt)("p",null,"Luckly, It's not much neccessary in a normal situation"),(0,r.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,r.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[Zip]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Grove-VOC_and_eCO2_Gas_Sensor%20-SGP30.zip"},"Grove-VOC and eCO2 Gas Sensor(SGP30) eagle file")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Datasheet_EN.pdf"},"SGP30 Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/BSS138.pdf"},"BSS138L Datasheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,r.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/res/Sensirion_Gas_Sensors_SGP30_Driver-Integration-Guide_HW_I2C.pdf"},"SGP30 Driver Integration Guide HW I2C"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"If you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."))}u.isMDXComponent=!0}}]);
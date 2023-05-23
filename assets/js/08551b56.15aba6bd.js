"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31271],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||c[h]||r;return n?o.createElement(m,a(a({ref:t},u),{},{components:n})):o.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var d=2;d<r;d++)a[d]=n[d];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},52876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(87462),i=(n(67294),n(3905));const r={description:"Grove VOC and eCO2 Gas Sensor (SGP30)",title:"Grove VOC and eCO2 Gas Sensor (SGP30)",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5",last_update:{date:"1/13/2023",author:"shuxu hu"}},a="Grove VOC and eCO2 Gas Sensor (SGP30)",s={unversionedId:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5",id:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5",title:"Grove VOC and eCO2 Gas Sensor (SGP30)",description:"Grove VOC and eCO2 Gas Sensor (SGP30)",source:"@site/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5.md",sourceDirName:"Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino",slug:"/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5",permalink:"/custom/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Network/SenseCAP_K1100/LoRaWAN-Network_Application/Sensors_Basic_Usage_with_Arduino/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673568e3,formattedLastUpdatedAt:"Jan 13, 2023",frontMatter:{description:"Grove VOC and eCO2 Gas Sensor (SGP30)",title:"Grove VOC and eCO2 Gas Sensor (SGP30)",keywords:["SenseCap"],image:"https://avatars.githubusercontent.com/u/37475446?s=400&u=081e62d37acfd56fd814a8106ae50f5497f6aafe&v=4",slug:"/K1100-VOC-and-eCO2-Gas-Sensor-Grove-LoRa-E5",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove Soil Moisture Sensor",permalink:"/custom/K1100-Soil-Moisture-Sensor-Grove-LoRa-E5"},next:{title:"Grove Temp&Humi Sensor (SHT40)",permalink:"/custom/K1100-Temp-Humi-Sensor-Grove-LoRa-E5"}},l={},d=[{value:"Upgradable to Industrial Sensors",id:"upgradable-to-industrial-sensors",level:2},{value:"Working Principle of Sensors",id:"working-principle-of-sensors",level:2},{value:"Materials Required",id:"materials-required",level:2},{value:"Preliminary Preparation",id:"preliminary-preparation",level:2},{value:"Connection",id:"connection",level:3},{value:"Software preparation",id:"software-preparation",level:3},{value:"Get the value of the Grove VOC and eCO2 Gas Sensor (SGP30)",id:"get-the-value-of-the-grove-voc-and-eco2-gas-sensor-sgp30",level:2},{value:"Send data via Grove - Wio-E5",id:"send-data-via-grove---wio-e5",level:2},{value:"Tech Support",id:"tech-support",level:2},{value:"Statement",id:"statement",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"grove-voc-and-eco2-gas-sensor-sgp30"},"Grove VOC and eCO2 Gas Sensor (SGP30)"),(0,i.kt)("p",null,"In this section, we will detail how the sensors work, how to get sensor data using Wio Terminal and how to send the data out using Wio Terminal & Grove - Wio-E5."),(0,i.kt)("h2",{id:"upgradable-to-industrial-sensors"},"Upgradable to Industrial Sensors"),(0,i.kt)("p",null,"With the SenseCAP ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html"},"S2110 controller")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html"},"S2100 data logger"),", you can easily turn the Grove into a LoRaWAN\xae sensor. Seeed not only helps you with prototyping but also offers you the possibility to expand your project with the SenseCAP series of robust ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=sensecap&categories=SenseCAP&application=Temperature%2FHumidity~Soil~Gas~Light~Weather~Water~Automation~Positioning~Machine%20Learning~Voice%20Recognition&compatibility=SenseCAP"},"industrial sensors"),"."),(0,i.kt)("p",null,"The IP66 housing, Bluetooth configuration, compatibility with the global LoRaWAN\xae network, built-in 19 Ah battery, and powerful support from APP make the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/catalogsearch/result/?q=S21&categories=SenseCAP~LoRaWAN%20Device&product_module=Device"},"SenseCAP S210x")," the best choice for industrial applications. The series includes sensors for soil moisture, air temperature and humidity, light intensity, CO2, EC, and an 8-in-1 weather station. Try the latest SenseCAP S210x for your next successful industrial project."),(0,i.kt)("table",{style:{marginLeft:"auto",marginRight:"auto"}},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{colSpan:4,bgcolor:"#0e3c49",align:"center"},(0,i.kt)("font",{color:"white",size:4},(0,i.kt)("strong",null,"SenseCAP Industrial Sensor")))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2100.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2102.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2101&S2103.png"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2100-LoRaWAN-Data-Logger-p-5361.html",target:"_blank"},(0,i.kt)("strong",null,"S2100 ",(0,i.kt)("br",null)," Data Logger"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2101-LoRaWAN-Air-Temperature-and-Humidity-Sensor-p-5354.html",target:"_blank"},(0,i.kt)("strong",null,"S2101 ",(0,i.kt)("br",null)," Air Temp & Humidity"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2102-LoRaWAN-Light-Intensity-Sensor-p-5355.html",target:"_blank"},(0,i.kt)("strong",null,"S2102 ",(0,i.kt)("br",null)," Light"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2103-LoRaWAN-CO2-Temperature-and-Humidity-Sensor-p-5356.html",target:"_blank"},(0,i.kt)("strong",null,"S2103 ",(0,i.kt)("br",null)," Air Temp & Humidity & CO2")))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2104.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2105.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2110.png"})))),(0,i.kt)("td",{bgcolor:"#0e3c49"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.kt)("img",{width:"100%",src:"https://files.seeedstudio.com/wiki/K1100_overview/2/S2120.png"}))))),(0,i.kt)("tr",null,(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2104-LoRaWAN-Soil-Temperature-and-Moisture-Sensor-p-5357.html",target:"_blank"},(0,i.kt)("strong",null,"S2104 ",(0,i.kt)("br",null)," Soil Moisture & Temp"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-S2105-LoRaWAN-Soil-Temperature-Moisture-and-EC-Sensor-p-5358.html",target:"_blank"},(0,i.kt)("strong",null,"S2105 ",(0,i.kt)("br",null)," Soil Moisture & Temp & EC"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/SenseCAP-XIAO-LoRaWAN-Controller-p-5474.html",target:"_blank"},(0,i.kt)("strong",null,"S2110 ",(0,i.kt)("br",null)," LoRaWAN\xae Controller"))),(0,i.kt)("td",{bgcolor:"#0e3c49",align:"center"},(0,i.kt)("a",{href:"https://www.seeedstudio.com/sensecap-s2120-lorawan-8-in-1-weather-sensor-p-5436.html",target:"_blank"},(0,i.kt)("strong",null,"S2120 ",(0,i.kt)("br",null)," 8-in-1 Weather Station")))))),(0,i.kt)("h2",{id:"working-principle-of-sensors"},"Working Principle of Sensors"),(0,i.kt)("p",null,"The SGP30 is a metal oxide indoor gas sensor with multiple sensing elements on a single core. It incorporates four gas sensing elements and has a fully calibrated air quality output signal, primarily for air quality detection."),(0,i.kt)("p",null,"The sensing part (MEMS) of the SGP30 is based on a heated film of metal oxide (MOx) nanoparticles. The gas-sensitive material reacts the oxygen adsorbed on the metal oxide particles with the target gas, thus releasing electrons. This results in a change in the resistance of the metal oxide layer measured by the sensor."),(0,i.kt)("p",null,"In short, the presence of the reducing gas causes the oxygen concentration on the surface of the gas-sensitive material to decrease, changing the resistance (or conductivity) of the semiconductor. The subsequent detection of the resistance, signal processing and conversion are performed by the circuit (ASIC) section."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/168.png"})),(0,i.kt)("p",null,"For more information on the use of Grove VOC and eCO2 Gas Sensor its reference ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/"},"here"),"."),(0,i.kt)("h2",{id:"materials-required"},"Materials Required"),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:210,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-GROVE.jpeg"}))),(0,i.kt)("td",{align:"center"},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:210,src:"https://files.seeedstudio.com/products/113020091/%E5%AE%98%E7%BD%91/11302009_Preview-34.png"}))),(0,i.kt)("td",{align:"center"},(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:170,src:"https://files.seeedstudio.com/wiki/Grove-VOC_and_eCO2_Gas_Sensor-SGP30/img/IMG_0012a.jpg"})))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},"Wio Terminal"),(0,i.kt)("td",{align:"center"},"Grove - Wio-E5"),(0,i.kt)("td",{align:"center"},"Grove VOC and eCO2 Gas Sensor (SGP30)")))),(0,i.kt)("h2",{id:"preliminary-preparation"},"Preliminary Preparation"),(0,i.kt)("h3",{id:"connection"},"Connection"),(0,i.kt)("p",null,"In this routine, we need to connect to a nearby LoRa\xae gateway with the help of Grove - Wio-E5. We need to configure the Grove port on the right side of the Wio Terminal as a soft serial port to receive AT commands. Grove VOC and eCO2 Gas Sensor (on the left side) according to the diagram below."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/K1100/sgp30.jpg"})),(0,i.kt)("h3",{id:"software-preparation"},"Software preparation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," You need to Install an Arduino Software."),(0,i.kt)("div",null,(0,i.kt)("p",{style:{}},(0,i.kt)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://www.arduino.cc/en/Main/Software",target:"_blank"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Seeeduino_Stalker_V3_1/images/Download_IDE.png"}))),(0,i.kt)("p",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Launch the Arduino application."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/seeed_logo/arduino.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Add Wio Terminal to the Arduino IDE."),(0,i.kt)("p",null,"Open your Arduino IDE, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"File > Preferences"),", and copy below url to Additional Boards Manager URLs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"https://files.seeedstudio.com/arduino/package_seeeduino_boards_index.json\n")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Boardurl.png"})),(0,i.kt)("p",null,"Click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools > Board > Board Manager")," and Search ",(0,i.kt)("strong",{parentName:"p"},"Wio Terminal")," in the Boards Manager."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/addBoard.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4.")," Select your board and port"),(0,i.kt)("p",null,"You'll need to select the entry in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools > Board")," menu that corresponds to your Arduino. Selecting the ",(0,i.kt)("strong",{parentName:"p"},"Wio Terminal"),"."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:800,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/selectBoard.png"})),(0,i.kt)("p",null,"Select the serial device of the Wio Terminal board from the ",(0,i.kt)("inlineCode",{parentName:"p"},"Tools -> Port")," menu. This is likely to be COM3 or higher (COM1 and COM2 are usually reserved for hardware serial ports). To find out, you can disconnect your Wio Terminal board and re-open the menu; the entry that disappears should be the Arduino board. Reconnect the board and select that serial port."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"For Mac User, it will be something like ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/cu.usbmodem141401"),"."),(0,i.kt)("p",{parentName:"admonition"},"If you are not able to upload the sketch, mostly it's because Arduino IDE was not able to put Wio Terminal to bootloader mode. (Because MCU was halted or your program handling USB) Workaround is putting your Wio Terminal to bootloader mode manually.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Wio-Terminal-Bootloader.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5.")," Download Grove - Wio-E5 Library"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/disk91/Disk91_LoRaE5"},"Disk91_LoRaE5")," repositories and download the entire repo to your local drive."),(0,i.kt)("div",null,(0,i.kt)("p",{style:{}},(0,i.kt)("a",{href:"https://github.com/disk91/Disk91_LoRaE5",target:"_blank"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://github.com/disk91/Disk91_LoRaE5",target:"_blank"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,i.kt)("p",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6.")," Adding libraries to the Arduino IDE"),(0,i.kt)("p",null,"Now, the 3-Axis Digital Accelerometer library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch -> Include Library -> Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Disk91_LoRaE5")," file that you've have just downloaded."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg"})),(0,i.kt)("h2",{id:"get-the-value-of-the-grove-voc-and-eco2-gas-sensor-sgp30"},"Get the value of the Grove VOC and eCO2 Gas Sensor (SGP30)"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Download Grove VOC and eCO2 Gas Sensor Code Library"),(0,i.kt)("p",null,"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/SGP30_Gas_Sensor"},"SGP30_Gas_Sensor")," repositories and download the entire repo to your local drive."),(0,i.kt)("div",null,(0,i.kt)("p",{style:{}},(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/SGP30_Gas_Sensor",target:"_blank"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://github.com/Seeed-Studio/SGP30_Gas_Sensor",target:"_blank"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,i.kt)("p",null)),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Adding libraries to the Arduino IDE"),(0,i.kt)("p",null,"Now, the Grove VOC and eCO2 Gas Sensor library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch -> Include Library -> Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"SGP30_Gas_Sensor")," file that you've have just downloaded."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3.")," Obtain VOC and eCO2 data from SGP30"),(0,i.kt)("div",null,(0,i.kt)("p",{style:{}},(0,i.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value",target:"_blank"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/Get-SGP30-value",target:"_blank"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,i.kt)("p",null)),(0,i.kt)("p",null,"This repo shows us the VOC and eCO2 data obtained. In the code, we use the ",(0,i.kt)("inlineCode",{parentName:"p"},"sgp_measure_signals_blocking_read()")," function to get the VOC and eCO2 information, which is positive and integer."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Arduino.h>\n#include "sensirion_common.h"\n#include "sgp30.h"\n\nvoid setup() {\n    s16 err;\n    u32 ah = 0;\n    u16 scaled_ethanol_signal, scaled_h2_signal;\n    Serial.begin(115200);\n    Serial.println("serial start!!");\n\n    /*  Init module,Reset all baseline,The initialization takes up to around 15 seconds, during which\n        all APIs measuring IAQ(Indoor air quality ) output will not change.Default value is 400(ppm) for co2,0(ppb) for tvoc*/\n    while (sgp_probe() != STATUS_OK) {\n        Serial.println("SGP failed");\n        while (1);\n    }\n    /*Read H2 and Ethanol signal in the way of blocking*/\n    err = sgp_measure_signals_blocking_read(&scaled_ethanol_signal,\n                                            &scaled_h2_signal);\n    if (err == STATUS_OK) {\n        Serial.println("get ram signal!");\n    } else {\n        Serial.println("error reading signals");\n    }\n\n    // Set absolute humidity to 13.000 g/m^3\n    //It\'s just a test value\n    sgp_set_absolute_humidity(13000);\n    err = sgp_iaq_init();\n}\n\nvoid loop() {\n    s16 err = 0;\n    u16 tvoc_ppb, co2_eq_ppm;\n    err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);\n    if (err == STATUS_OK) {\n        Serial.print("tVOC  Concentration:");\n        Serial.print(tvoc_ppb);\n        Serial.println("ppb");\n\n        Serial.print("CO2eq Concentration:");\n        Serial.print(co2_eq_ppm);\n        Serial.println("ppm");\n    } else {\n        Serial.println("error reading IAQ values\\n");\n    }\n    delay(1000);\n}\n')),(0,i.kt)("p",null,"Open the serial monitor of Arduino IDE and select the baud rate as 115200 and observe the result."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{width:700,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/171.png"})),(0,i.kt)("h2",{id:"send-data-via-grove---wio-e5"},"Send data via Grove - Wio-E5"),(0,i.kt)("p",null,"We combine the previous code of Grove - Wio-E5 to connect to the LoRa\xae network. Using the AT command it is possible to send the value of the Grove VOC and eCO2 Gas Sensor to the LoRa\xae network."),(0,i.kt)("p",null,"In the code in the previous section, we know that the VOC and eCO2 values are positive integers. And the length of the two integers will not exceed 8 bits."),(0,i.kt)("p",null,"In this way, we determine the content, size and format of the data to be sent via the AT command. We might as well set up a large enough array, store the strings we need to send into the array, and finally use the ",(0,i.kt)("strong",{parentName:"p"},"send_sync()")," function to send the array out."),(0,i.kt)("p",null,"The pseudo-code for the above idea is roughly as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},"  ......\n  s16 err = 0;\n  u16 tvoc_ppb, co2_eq_ppm;\n  err = sgp_measure_iaq_blocking_read(&tvoc_ppb, &co2_eq_ppm);\n  \n  static uint8_t data[4] = { 0x00 };  //Use the data[] to store the values of the sensors\n\n  data_decord(tvoc_ppb, co2_eq_ppm, data);\n\n  if ( lorae5.send_sync(              //Sending the sensor values out\n        8,                            // LoRaWan Port\n        data,                         // data array\n        sizeof(data),                 // size of the data\n        false,                        // we are not expecting a ack\n        7,                            // Spread Factor\n        14                            // Tx Power in dBm\n       ) \n  ) \n  ......\n")),(0,i.kt)("p",null,"The rest of what we need to do is to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"begin()")," function to initialize Grove - Wio-E5 and the ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()")," function to configure the triplet information of Grove - Wio-E5. When we send a data message using the ",(0,i.kt)("inlineCode",{parentName:"p"},"send_sync()")," function, we will try to join the LoRaWAN\xae at the same time, and once it succeeds, the data will be sent and information such as signal strength and address will be returned."),(0,i.kt)("p",null,"The full code example can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data"},"here"),"."),(0,i.kt)("div",null,(0,i.kt)("p",{style:{}},(0,i.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data",target:"_blank"})),(0,i.kt)("div",{align:"center"},(0,i.kt)("a",{href:"https://github.com/limengdu/Seeed-Studio-LoRaWAN-Dev-Kit/tree/main/sensor/SGP30-send-data",target:"_blank"},(0,i.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/seeed_logo/github.png"}))),(0,i.kt)("p",null)),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},'We do not recommend that you upload the code now to see the results, because at this point you have not yet configured Helium/TTN and will get a "Join failed" result. We recommend that you upload this code after you have completed the ',(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connecting-to-Helium/"},"Connecting to Helium")," or ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Connecting-to-TTN/"},"Connecting to TTN")," chapter to complete the complete data sending process.")),(0,i.kt)("p",null,"Once you have experienced and understood how the Grove VOC and eCO2 Gas Sensor works and the data format, please continue with the next step of the tutorial join LoRaWAN\xae."),(0,i.kt)("table",{align:"center"},(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",{colSpan:2,bgcolor:"8FBC8F"},(0,i.kt)("b",null,"Helium Section"))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/178.jpeg",alt:"pir",width:500,height:"auto"}))),(0,i.kt)("td",{align:"left"},(0,i.kt)("strong",null,"Helium Introduction"),(0,i.kt)("br",null),(0,i.kt)("br",null),"In this chapter, we will introduce the Helium console controls that we use to get a first impression of the Helium console.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://wiki.seeedstudio.com/Helium-Introduction"},"Jump to chapter >"))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-helium/helium.png",alt:"pir",width:500,height:"auto"}))),(0,i.kt)("td",{align:"left"},(0,i.kt)("strong",null,"Connecting to Helium"),(0,i.kt)("br",null),(0,i.kt)("br",null),"This section describes how to configure Helium so that sensor data can be successfully uploaded to and displayed in Helium.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://wiki.seeedstudio.com/Connecting-to-Helium"},"Jump to chapter >"))),(0,i.kt)("tr",null,(0,i.kt)("td",{colSpan:2,bgcolor:"8FBC8F"},(0,i.kt)("b",null,"TTN Section"))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Developer-for-TTN/TTN.png",alt:"pir",width:500,height:"auto"}))),(0,i.kt)("td",{align:"left"},(0,i.kt)("strong",null,"TTN Introduction"),(0,i.kt)("br",null),(0,i.kt)("br",null),"In this chapter, we will introduce the TTN console controls that we use to get a first impression of the TTN console.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://wiki.seeedstudio.com/TTN-Introduction"},"Jump to chapter >"))),(0,i.kt)("tr",null,(0,i.kt)("td",{align:"center"},(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/K1100/ttncon.jpg",alt:"pir",width:500,height:"auto"}))),(0,i.kt)("td",{align:"left"},(0,i.kt)("strong",null,"Connecting to TTN"),(0,i.kt)("br",null),(0,i.kt)("br",null),"This section describes how to configure TTN so that sensor data can be successfully uploaded to and displayed in TTN.",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("a",{href:"https://wiki.seeedstudio.com/Connecting-to-TTN"},"Jump to chapter >"))))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))),(0,i.kt)("h2",{id:"statement"},"Statement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The LoRa\xae Mark is a trademark of Semtech Corporation or its subsidiaries."),(0,i.kt)("li",{parentName:"ul"},"LoRaWAN\xae is a mark used under license from the LoRa Alliance\xae.")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[85640],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),c=l,k=p["".concat(i,".").concat(c)]||p[c]||h[c]||o;return n?r.createElement(k,a(a({ref:t},d),{},{components:n})):r.createElement(k,a({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:l,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},57503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const o={title:"G3-4 Water Flow sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/G3-4_Water_Flow_sensor/",slug:"/G3-4_Water_Flow_sensor",last_update:{date:"02/03/2022",author:"gunengyu"}},a=void 0,s={unversionedId:"Sensor/Beyond_Grove/Sensors/G3-4_Water_Flow_sensor",id:"Sensor/Beyond_Grove/Sensors/G3-4_Water_Flow_sensor",title:"G3-4 Water Flow sensor",description:"Water flow sensor consists of a plastic valve body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls. Its speed changes with different rate of flow. The hall-effect sensor outputs the corresponding pulse Signal.",source:"@site/docs/Sensor/Beyond_Grove/Sensors/G3-4_Water_Flow_sensor.md",sourceDirName:"Sensor/Beyond_Grove/Sensors",slug:"/G3-4_Water_Flow_sensor",permalink:"/zh-CN/G3-4_Water_Flow_sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Beyond_Grove/Sensors/G3-4_Water_Flow_sensor.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1643817600,formattedLastUpdatedAt:"2022\u5e742\u67082\u65e5",frontMatter:{title:"G3-4 Water Flow sensor",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/G3-4_Water_Flow_sensor/",slug:"/G3-4_Water_Flow_sensor",last_update:{date:"02/03/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"G1/8 inch Water Flow Sensor",permalink:"/zh-CN/G1-8_Water_Flow_Sensor"},next:{title:"M11 1.25 Water flow Sensor",permalink:"/zh-CN/M11_1.25_Water_flow_Sensor"}},i={},u=[{value:"Specification",id:"specification",level:2},{value:"Mechanic Dimensions",id:"mechanic-dimensions",level:2},{value:"Sensor Components",id:"sensor-components",level:3},{value:"Usage Example",id:"usage-example",level:2},{value:"Reading Water Flow rate with Water Flow Sensor",id:"reading-water-flow-rate-with-water-flow-sensor",level:3},{value:"Wiring Diagram",id:"wiring-diagram",level:2},{value:"Output Table",id:"output-table",level:2},{value:"FAQ",id:"faq",level:2},{value:"Resource",id:"resource",level:2},{value:"Related Projects",id:"related-projects",level:2},{value:"What is Grove - Water Sensor",id:"what-is-grove---water-sensor",level:3},{value:"Arduino Plant Warden",id:"arduino-plant-warden",level:3},{value:"Share Your Awesome Projects with Us",id:"share-your-awesome-projects-with-us",level:3},{value:"Tech Support",id:"tech-support",level:2}],d={toc:u};function p(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/P21408651.jpg",alt:null})),(0,l.kt)("p",null,"Water flow sensor consists of a plastic valve body, a water rotor, and a hall-effect sensor. When water flows through the rotor, rotor rolls. Its speed changes with different rate of flow. The hall-effect sensor outputs the corresponding pulse Signal."),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/g34-water-flow-sensor-p-1083.html?cPath=144_151"},(0,l.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,l.kt)("h2",{id:"specification"},"Specification"),(0,l.kt)("hr",null),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"Mini. Wokring Voltage"),(0,l.kt)("td",null,"DC 4.5V")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Max. Working Current"),(0,l.kt)("td",null,"15mA(DC 5V)")),(0,l.kt)("tr",null,(0,l.kt)("td",{width:"400px"},"Working Voltage"),(0,l.kt)("td",{width:"400px"},"5V\uff5e24V")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Flow Rate Range"),(0,l.kt)("td",null,"1\uff5e60L/min")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Load Capacity"),(0,l.kt)("td",null,"\u226410mA(DC 5V)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Operating Temperature"),(0,l.kt)("td",null,"\u226480\u2103")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Liquid Temperature"),(0,l.kt)("td",null,"\u2264120\u2103")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Operating Humidity"),(0,l.kt)("td",null,"35%\uff5e90%RH")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Water Pressure"),(0,l.kt)("td",null,"\u22642.0MPa")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Storage Temperature"),(0,l.kt)("td",null,"-25\u2103\uff5e+80\u2103")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Storage Humidity"),(0,l.kt)("td",null,"25%\uff5e95%RH")))),(0,l.kt)("h2",{id:"mechanic-dimensions"},"Mechanic Dimensions"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"sensor-components"},"Sensor Components"),(0,l.kt)("table",null,(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"No."),(0,l.kt)("th",null,"Name"),(0,l.kt)("th",null,"Quantity"),(0,l.kt)("th",null,"Material"),(0,l.kt)("th",null,"Note")),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",{width:200}," 1"),(0,l.kt)("td",{width:150},"  Valve body"),(0,l.kt)("td",{width:150},"  1"),(0,l.kt)("td",{width:150},"  PA66+33%glass fiber"),(0,l.kt)("td",{width:150})),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",{width:200}," 2"),(0,l.kt)("td",{width:150},"  Stainless steel bead"),(0,l.kt)("td",{width:150},"  1"),(0,l.kt)("td",{width:150},"  Stainless steel SUS304"),(0,l.kt)("td",{width:150})),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 3"),(0,l.kt)("td",null,"  Axis"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  Stainless steel SUS304"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 4"),(0,l.kt)("td",null,"  Impeller"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  POM"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 5"),(0,l.kt)("td",null,"  Ring magnet"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  Ferrite"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 6"),(0,l.kt)("td",null,"  Middle ring"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  PA66+33%glass fiber"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 7"),(0,l.kt)("td",null,"  O-seal ring"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  Rubber"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 8"),(0,l.kt)("td",null,"  Electronic seal ring"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  Rubber"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 9"),(0,l.kt)("td",null,"  Cover"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  PA66+33%glass fiber"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 10"),(0,l.kt)("td",null,"  Screw"),(0,l.kt)("td",null,"  4"),(0,l.kt)("td",null,"  Stainless steel SUS304"),(0,l.kt)("td",null)),(0,l.kt)("tr",{style:{fontSize:"90%"}},(0,l.kt)("td",null," 11"),(0,l.kt)("td",null,"  Cable"),(0,l.kt)("td",null,"  1"),(0,l.kt)("td",null,"  1007 24AWG"),(0,l.kt)("td",null)))),(0,l.kt)("h2",{id:"usage-example"},"Usage Example"),(0,l.kt)("hr",null),(0,l.kt)("font",null,"Note: This example is abstracted from the forum, which was done by Charles Gantt. Thanks for his contribution.Let's see how it works."),(0,l.kt)("h3",{id:"reading-water-flow-rate-with-water-flow-sensor"},"Reading Water Flow rate with Water Flow Sensor"),(0,l.kt)("p",null,"This is part of a project I have been working on and I thought I would share it here since there have been a few threads on how to read water flow rate in liters per hour using the Water Flow Sensor found in the Seeed Studio Depo. It uses a simple rotating wheel that pulses a hall effect sensor. By reading these pulses and implementing a little math, we can read the liquids flow rate accurate to within 3%. The threads are simple G3/4 so finding barbed ends will not be that hard."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Hardware Installation")),(0,l.kt)("p",null,"You will need  Seeeduino / Arduino ,Water Flow Sensor,10K resistor,a breadboard and some jumper wires."),(0,l.kt)("p",null,"Wiring up the Water Flow Sensor is pretty simple. There are 3 wires: Black, Red, and Yellow.\nBlack to the Seeeduino's ground pin\nRed to Seeeduino's 5v pin\nThe yellow wire will need to be connected to a 10k pull up resistor.and then to pin 2 on the Seeeduino."),(0,l.kt)("p",null,"Here is a fritzing diagram I made to show you how to wire it all up."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Reading_liquid_flow_rate_with_an_Arduino.jpg",alt:null})),(0,l.kt)("p",null,"Once you have it wired up you will need to upload the following code to your Seeeduino. Once it is uploaded and you have some fluid flowing through the Water Flow Sensor, you can open the serial monitor and it will display the flow rate, refreshing every second."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Programming")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'// reading liquid flow rate using Seeeduino and Water Flow Sensor from Seeedstudio.com\n// Code adapted by Charles Gantt from PC Fan RPM code written by Crenn @thebestcasescenario.com\n// http:/themakersworkbench.com http://thebestcasescenario.com https://www.seeedstudio.com\n\nvolatile int NbTopsFan; //measuring the rising edges of the signal\nint Calc;\nint hallsensor = 2;    //The pin location of the sensor\n\nvoid rpm ()     //This is the function that the interupt calls\n{\n    NbTopsFan++;  //This function measures the rising and falling edge of the\n\n    hall effect sensors signal\n}\n// The setup() method runs once, when the sketch starts\nvoid setup() //\n{\n    pinMode(hallsensor, INPUT); //initializes digital pin 2 as an input\n    Serial.begin(9600); //This is the setup function where the serial port is\n\n    initialised,\n    attachInterrupt(0, rpm, RISING); //and the interrupt is attached\n}\n// the loop() method runs over and over again,\n// as long as the Arduino has power\nvoid loop ()\n{\n    NbTopsFan = 0;   //Set NbTops to 0 ready for calculations\n    sei();      //Enables interrupts\n    delay (1000);   //Wait 1 second\n    cli();      //Disable interrupts\n    Calc = (NbTopsFan * 60 / 5.5); //(Pulse frequency x 60) / 5.5Q, = flow rate\n\n    in L/hour\n    Serial.print (Calc, DEC); //Prints the number calculated above\n    Serial.print (" L/hour\\r\\n"); //Prints "L/hour" and returns a  new line\n}\n')),(0,l.kt)("p",null,"You can refer our forum for more details about ",(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=4&t=989&p=3632#p3632"},"Reading Water Flow rate with Water Flow Sensor"),"."),(0,l.kt)("h2",{id:"wiring-diagram"},"Wiring Diagram"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"The external diameter of thread the connections use is 1.4mm."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Wfs-wiring.jpg",alt:null})),(0,l.kt)("h2",{id:"output-table"},"Output Table"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Pulse frequency (Hz) in Horizontal Test= 5.5Q, Q is flow rate in L/min. (Results in +/- 3% range)"),(0,l.kt)("table",null,(0,l.kt)("tr",null,(0,l.kt)("td",{width:"400px"},"Output pulse high level"),(0,l.kt)("td",{width:"400px"},"Signal voltage >4.5 V( input DC 5 V)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Output pulse low level"),(0,l.kt)("td",null,"Signal voltage <0.5V( input DC 5V)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Precision"),(0,l.kt)("td",null,"3% (Flow rate from 1L/min to 10L/min)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"Output signal duty cycle"),(0,l.kt)("td",null,"40%\uff5e60%"))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/G34_Flow_rate_to_frequency.jpg",alt:null})),(0,l.kt)("h2",{id:"faq"},"FAQ"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Here is the Sensors FAQ, people can go here to find questions and answers for this kind of products."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"What materials is water flow sensor made of?")),(0,l.kt)("p",null,"Nylon with fiber, avoiding strong acid and strong base."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Is the water flow sensor safe for drinking water?")),(0,l.kt)("p",null,"Yeah, it has been used on drinking machine."),(0,l.kt)("h2",{id:"resource"},"Resource"),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/viewtopic.php?f=4&t=989&p=3632#p3632"},"Reading Water Flow rate with Water Flow Sensor"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://www.practicalarduino.com/projects/water-flow-gauge"},"Water Flow rate display on LCD"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://garden.seeedstudio.com/images/4/4e/YEE70G30HSLNC..pdf"},"datasheet for the material")))),(0,l.kt)("h2",{id:"related-projects"},"Related Projects"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"It's a pity that we don't have any demo about G3/4 Water Flow Sensor in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe")," yet."),(0,l.kt)("p",null,"Post your awesome project about G3/4 Water Flow Sensor to ",(0,l.kt)("font",{color:"#FF0000"},"win $100 Coupon!"),". Please feel free to contact us: ",(0,l.kt)("a",{parentName:"p",href:"mailto:recipe@seeed.cc"},"recipe@seeed.cc")),(0,l.kt)("p",null,"Here we introduce some projects about ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/Grove-Water-Sensor-p-748.html"},"Grove-Water Sensor"),"."),(0,l.kt)("h3",{id:"what-is-grove---water-sensor"},"What is Grove - Water Sensor"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/Twig-Water_Sensor.jpg",alt:null})),(0,l.kt)("p",null,"This water sensor module is part of the Twig system.You can use it with the analog pins to detect the amount of water induced contact between the grounded and sensor traces."),(0,l.kt)("p",null,"It works by having a series of exposed traces connected to ground and interlaced between the grounded traces are the sens traces."),(0,l.kt)("p",null,"The sensor traces have a weak pull-up resistor of 1 M\u03a9. The resistor will pull the sensor trace value high until a drop of water shorts the sensor trace to the grounded trace."),(0,l.kt)("p",null,"This circuit will work with the digital I/O pins of your Arduino."),(0,l.kt)("h3",{id:"arduino-plant-warden"},"Arduino Plant Warden"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/G3-4_Water_Flow_sensor/img/552c2c4f2e5a8.jpg",alt:null})),(0,l.kt)("p",null,"This project uses Grove - Water Sensor to create a simple but effective solution to watering plants."),(0,l.kt)("p",null,"How it works:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Display readouts of water sensor and temperature sensor on OLED screen")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Send alert and activate a pump driver when water is under threshold.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Supply the variation in color by 10 RGB LEDs."))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/102-arduino-plant-warden.html"},(0,l.kt)("strong",{parentName:"a"},"I want to make it."))),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/index.php?query=water+sensor"},(0,l.kt)("strong",{parentName:"a"},"More Awesome Projects by Water Sensor"))),(0,l.kt)("h3",{id:"share-your-awesome-projects-with-us"},"Share Your Awesome Projects with Us"),(0,l.kt)("p",null,"Born with the spirit of making and sharing, that is what we believe makes a maker."),(0,l.kt)("p",null,"And only because of this, the open source community can be as prosperous as it is today."),(0,l.kt)("p",null,"It does not matter what you are and what you have made, hacker, maker, artist or engineers."),(0,l.kt)("p",null,"As long as you start sharing your works with others, you are being part of the open source community and you are making your contributions."),(0,l.kt)("p",null,"Now share your awesome projects with us on ",(0,l.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/recipe/"},"Recipe"),", and win a chance to become the Core User of Seeed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Core Users, are those who show high interests in Seeed products and make significant contributions on Recipe."),(0,l.kt)("li",{parentName:"ul"},"We cooperate with our Core Users in the development of our new product, this, in another word, the Core Users will have the chance to experience any new products of Seeed before its official launch, and in return we expect valuable feedback from them to help us improve the product performance and user experience. And in most cases when our Core Users have some good ideas of making things, we'll offer hardware pieces, PCBA services as well as technical support. Besides, further commercial cooperation with the Core Users is highly possible.")),(0,l.kt)("font",{color:"#FF0000"},"Get more information about Core User, please email to:")," [recipe@seeed.cc](mailto:recipe@seeed.cc)",(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,l.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),"."),(0,l.kt)("div",null,(0,l.kt)("br",null),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
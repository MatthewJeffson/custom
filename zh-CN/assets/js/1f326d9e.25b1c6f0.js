"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1466],{3905:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>m});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},h=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),d=u(i),g=r,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return i?n.createElement(m,a(a({ref:t},h),{},{components:i})):n.createElement(m,a({ref:t},h))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var u=2;u<o;u++)a[u]=i[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},80066:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=i(87462),r=(i(67294),i(3905));const o={title:"Sensor - Light(introduction)",description:"Sensor - Light(introduction)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sensor_light",last_update:{date:"1/5/2023",author:"jianjing Huang"}},a="Seeed Light Sensor Selection Guide",l={unversionedId:"Sensor/Grove/Grove_Sensors/Light/Sensor_light",id:"Sensor/Grove/Grove_Sensors/Light/Sensor_light",title:"Sensor - Light(introduction)",description:"Sensor - Light(introduction)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Light/Sensor_light.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Light",slug:"/Sensor_light",permalink:"/custom/zh-CN/Sensor_light",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Light/Sensor_light.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"2023\u5e741\u67085\u65e5",frontMatter:{title:"Sensor - Light(introduction)",description:"Sensor - Light(introduction)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Sensor_light",last_update:{date:"1/5/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Grove-Single Axis Analog Gyro",permalink:"/custom/zh-CN/Grove-Single_Axis_Analog_Gyro"},next:{title:"Grove - Digital Light Sensor",permalink:"/custom/zh-CN/Grove-Digital_Light_Sensor"}},s={},u=[{value:"What is Light Sensor",id:"what-is-light-sensor",level:2},{value:"Glossary of terms",id:"glossary-of-terms",level:3},{value:"Candela",id:"candela",level:3},{value:"Lumen",id:"lumen",level:3},{value:"Lux",id:"lux",level:3},{value:"What are the types of light sensor",id:"what-are-the-types-of-light-sensor",level:3},{value:"Light Sensors at Seeed",id:"light-sensors-at-seeed",level:2},{value:"Which One is Best For You",id:"which-one-is-best-for-you",level:3},{value:"Quick Insight",id:"quick-insight",level:3},{value:"Low-cost option: Grove \u2013 Light Sensor v1.2",id:"low-cost-option-grove--light-sensor-v12",level:3},{value:"Digital signal output option: Grove \u2013 Digital Light Sensor",id:"digital-signal-output-option-grove--digital-light-sensor",level:3},{value:"Sunlight detection option: Grove \u2013 Sunlight Sensor",id:"sunlight-detection-option-grove--sunlight-sensor",level:3},{value:"Application Ideas",id:"application-ideas",level:2},{value:"Useful Projects",id:"useful-projects",level:2},{value:"Resource",id:"resource",level:2},{value:"Tutorials on Grove - Light Sensor v1.1",id:"tutorials-on-grove---light-sensor-v11",level:3},{value:"Tech Support",id:"tech-support",level:2}],h={toc:u};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"seeed-light-sensor-selection-guide"},"Seeed Light Sensor Selection Guide"),(0,r.kt)("p",null,"Here at Seeed, we have released different Light Sensors and this may cause problems for some of you where you don't know which one to pick and which one is suitable for your needs. Here comes the solution! Please check the comparison in this site for more reference."),(0,r.kt)("p",null,"For all the Light sensors in our bazaar, please click ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/tag/light.html"},"Bazaar Light tag")," to check."),(0,r.kt)("h2",{id:"what-is-light-sensor"},"What is Light Sensor"),(0,r.kt)("p",null,"A light sensor is a photoelectric device that converts light energy (photons) detected to electrical energy (electrons). Seems simple? There is more to a light sensor then just its definition. It comes in different types, used in various applications and more!"),(0,r.kt)("h3",{id:"glossary-of-terms"},"Glossary of terms"),(0,r.kt)("p",null,"Before we start with today\u2019s\u2019 light sensor guide, we\u2019ll have to understand the following terms that are commonly associated with light. I\u2019ve simplified it for easier understanding:"),(0,r.kt)("h3",{id:"candela"},"Candela"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Originated from the term candles, candela refers to luminous intensity; how strong is the light to a naked eye"),(0,r.kt)("li",{parentName:"ul"},"The higher the luminous intensity, the higher the sensitivity it is to our eyes")),(0,r.kt)("h3",{id:"lumen"},"Lumen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Measures the total amount of visible light from a light source through the relationship between luminous intensity and the angle that a light beam fills"),(0,r.kt)("li",{parentName:"ul"},"Commonly used to rate the brightness of a light bulb"),(0,r.kt)("li",{parentName:"ul"},"To simply put it Lumen = Total amount of light emitted in all directions")),(0,r.kt)("h3",{id:"lux"},"Lux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Used to measure illuminance, the area where the luminous flux is spread"),(0,r.kt)("li",{parentName:"ul"},"It\u2019s similar to Lumen but it takes into account the surface area"),(0,r.kt)("li",{parentName:"ul"},"To simply put it, Lux = total amount of light that falls on a particular surface")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you\u2019re still confused between Lumen and Lux, here\u2019s a graphical representation:")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://blog.seeedstudio.com/wp-content/uploads/2020/01/image-88.png"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Reference: ",(0,r.kt)("a",{parentName:"em",href:"https://www.waveformlighting.com/home-residential/what-is-the-difference-between-lux-and-lumens"},"Lux vs Lumen"))),(0,r.kt)("h3",{id:"what-are-the-types-of-light-sensor"},"What are the types of light sensor"),(0,r.kt)("p",null,"There are different types of light sensors available; mainly Photoresistor, Photodiodes, and Phototransistors. Sounds technical? I\u2019ll break it down with the explanations below!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Photoresistors (LDR)")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Photoresistors_-_three_sizes_-_mm_scale.jpg"})),(0,r.kt)("p",null,"The most common light sensor type that\u2019s used in a light sensor circuit are photoresistors, also known as a light-dependent resistor (LDR). Photoresistors are used to simply detect whether a light is on or off and compare relative light levels throughout a day."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are photoresistors made of?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A high resistance Semiconductor material called cadmium sulfide cells, highly sensitive to visible and near-infrared light")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How photoresistors work?")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://www.edgefx.in/wp-content/uploads/2015/02/Light-Intensity-vs-LDR-Resistance.jpg"})),(0,r.kt)("p",null,"As its name suggests, photoresistors work similarly to your regular resistors, but instead resistance change is dependent on the amount of light it\u2019s exposed to."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High intensity of light causes a lower resistance between the cadmium sulfide cell"),(0,r.kt)("li",{parentName:"ul"},"The low intensity of light results in a higher resistance between the cadmium sulfide cells")),(0,r.kt)("p",null,"This working principle can be seen in applications such as street lamps, wherein the day, the higher light intensity results in lower resistance and no light produced."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Photodiodes")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Fotodio.jpg/220px-Fotodio.jpg"})),(0,r.kt)("p",null,"Photodiodes are another type of light sensor. But instead of using the change in resistance like LDR, it\u2019s more complex to light, easily changing light into a flow of electric currents."),(0,r.kt)("p",null,"Also known as a photodetector, photo sensor."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What are photodiodes made of?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Photodiodes are mainly made from silicon and germanium materials and comprise of optical filters, built-in lenses and surface areas")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How photodiodes work?")),(0,r.kt)("p",null,"Photodiodes work on the working principle called the inner photoelectric effect. To simply put it, when a beam of light hits, electrons are loosened, causing electron-holes which results in electrical current to flow through."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The brighter the light present, the stronger the electrical current will be.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Photodiode light sensor applications")),(0,r.kt)("p",null,"Since current generated by photodiodes are directly proportional to the intensity of light, it makes it favorable for light sensing that requires fast light response changes."),(0,r.kt)("p",null,"Since photodiodes are responsive to infrared light, it\u2019s applicable for more usages as well."),(0,r.kt)("p",null,"Here are some of the applications of photodiode:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consumer electronics ranging from compact disc players to smoke detectors and even remote control devices"),(0,r.kt)("li",{parentName:"ul"},"Medical applications such as equipment/instruments used for measuring and analysis purposes"),(0,r.kt)("li",{parentName:"ul"},"Solar energy systems such as solar panels")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Phototransistors")),(0,r.kt)("p",null,"The last light sensor type we\u2019ll be exploring today is the phototransistor. The phototransistor light sensor can be described as a photodiode + amplifier. With the added amplification, light sensitivity is far better on the phototransistors."),(0,r.kt)("p",null,"However, it doesn\u2019t fair better in low light level detection as compared to photodiodes.\nSince both light sensor types share a similar working principle, do refer to the previous explanation!"),(0,r.kt)("h2",{id:"light-sensors-at-seeed"},"Light Sensors at Seeed"),(0,r.kt)("div",{align:"center"},(0,r.kt)("figure",null,(0,r.kt)("a",{href:"https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Light-Sensor.png",alt:"Seeed Light Sensor Selection Guide",title:"Seeed Light Sensor Selection Guide"}),(0,r.kt)("figcaption",null,(0,r.kt)("b",null,"Figure 2"),". ",(0,r.kt)("i",null,"Light Sensors at Seeed"))))),(0,r.kt)("h3",{id:"which-one-is-best-for-you"},"Which One is Best For You"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Product"),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.seeedstudio.com/Grove-Light-Sensor-P-v1-1.html"},"Grove - Light Sensor v1.1")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html"},"Grove - Light Sensor v1.2")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html"},"Grove - Digital Light Sensor")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html"},"Grove - Sunlight Sensor")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.seeedstudio.com/Grove-I2C-UV-Sensor-VEML6070.html"},"Grove - I2C UV Sensor (VEML6070)")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"th",href:"https://www.seeedstudio.com/Grove-Light-Color-Proximity-Sensor-TMG39931-p-2879.html"},"Grove - Light&Color&Proximity Sensor")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Thumbnail"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove_Light_Sensor/img/light_sensor_s.jpg"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Grove-Digital_Light_Sensor/img/digital%20light%20sensor_small.jpg"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/Light-Sensor-Selection-Guide/Grove_sunlight_sensor_view.jpg"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{100}",src:"https://files.seeedstudio.com/wiki/Grove-I2C_UV_Sensor-VEML6070/img/thumbnail.jpg"}))),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:"{100}",src:"https://files.seeedstudio.com/wiki/Grove-Light-Gesture-Color-Proximity_Sensor-TMG39931/img/thumbnail.jpg"})))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog"),(0,r.kt)("td",{parentName:"tr",align:null},"Analog"),(0,r.kt)("td",{parentName:"tr",align:null},"Digital"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C"),(0,r.kt)("td",{parentName:"tr",align:null},"I2C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Peak Wavelength"),(0,r.kt)("td",{parentName:"tr",align:null},"540nm"),(0,r.kt)("td",{parentName:"tr",align:null},"540nm"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"280-950nm"),(0,r.kt)("td",{parentName:"tr",align:null},"320-410 nm"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operating Temperature"),(0,r.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C"),(0,r.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C"),(0,r.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C"),(0,r.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C"),(0,r.kt)("td",{parentName:"tr",align:null},"-40\xb0C to 85\xb0C"),(0,r.kt)("td",{parentName:"tr",align:null},"-30\uff5e85\xb0C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max. Lux ","[klx]"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"0.1 - 40,000 LUX"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"UVA Sensitivity"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"/"),(0,r.kt)("td",{parentName:"tr",align:null},"5 \u03bcW/cm2/step(typical)"),(0,r.kt)("td",{parentName:"tr",align:null},"60")))),(0,r.kt)("h3",{id:"quick-insight"},"Quick Insight"),(0,r.kt)("h3",{id:"low-cost-option-grove--light-sensor-v12"},"Low-cost option: ",(0,r.kt)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Grove-Light-Sensor-v1-2-LS06-S-phototransistor.html"},"Grove \u2013 Light Sensor v1.2")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedimg2016-10po8b7qd0xnlnchgogziq9g3d.jpg"})),(0,r.kt)("p",null,"Starting off the list of light sensors available right here at Seeed is the Grove \u2013 Light Sensor v1.2! Alongside its low price tag of $2.90, comes a highly sensitive and reliable photodiode for your light-sensing needs!"),(0,r.kt)("p",null,"Easily parable with your Arduino board through our Grove plug and play system, you\u2019ll save yourself some trouble of connecting jumper wires and soldering it on!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Its features include:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dual OpAmp chip LM358 on board"),(0,r.kt)("li",{parentName:"ul"},"Analog module"),(0,r.kt)("li",{parentName:"ul"},"Onboard grove port for easy interfacing"),(0,r.kt)("li",{parentName:"ul"},"Convertable electrical signal output"),(0,r.kt)("li",{parentName:"ul"},"Depends on the ADC on your controller board, E.g. it can output 0-255 for an 8-bit ADC)"),(0,r.kt)("li",{parentName:"ul"},"Small form factor"),(0,r.kt)("li",{parentName:"ul"},"Recognize wider spectrum")),(0,r.kt)("h3",{id:"digital-signal-output-option-grove--digital-light-sensor"},"Digital signal output option: ",(0,r.kt)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Grove-Digital-Light-Sensor-TSL2561.html"},"Grove \u2013 Digital Light Sensor")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://media-cdn.seeedstudio.site/media/catalog/product/cache/9d0ce51a71ce6a79dfa2a98d65a0f0bd/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar881092_3.jpg"})),(0,r.kt)("p",null,"If you\u2019re looking for a digital signal output option alongside a selectable light spectrum range, the Grove \u2013 Digital Light Sensor is the one for you!"),(0,r.kt)("p",null,"Based on the I2C light-to-digital converter TSL2561 that does the digital signal outputting, this light sensor module features dual light-sensitive diodes, where you can switch between 3 modes to take your reading!"),(0,r.kt)("p",null,"These three modes are infrared mode, full-spectrum, and human visible mode\nThe human visible mode gives you reading close to your eye feelings"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Its features include:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wide dynamic range: 0.1 \u2013 40,000 LUX"),(0,r.kt)("li",{parentName:"ul"},"Wide operating temperature range: -40deg to 85deg"),(0,r.kt)("li",{parentName:"ul"},"High-resolution 16-Bit digital output at 400 kHz I2C Fast-Mode"),(0,r.kt)("li",{parentName:"ul"},"Programmable interrupt function with User-Defined Upper and lower threshold settings"),(0,r.kt)("li",{parentName:"ul"},"Selectable detection modes")),(0,r.kt)("h3",{id:"sunlight-detection-option-grove--sunlight-sensor"},"Sunlight detection option: ",(0,r.kt)("a",{parentName:"h3",href:"https://www.seeedstudio.com/Grove-Sunlight-Sensor.html"},"Grove \u2013 Sunlight Sensor")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://media-cdn.seeedstudio.site/media/catalog/product/cache/ab187aaa5f626ad16c8031644cd2de5b/h/t/httpsstatics3.seeedstudio.comseeedfile2018-07bazaar885583_3.jpg"})),(0,r.kt)("p",null,"Though it\u2019s Made for direct sunlight detection with UV, this digital light sensor is suitable for a variety of other light sources as well, including visible and infrared light."),(0,r.kt)("p",null,"Based on the SI1145 sensor from SiLabs, it\u2019s a low-powered, reflectance-based, infrared proximity, UV index and ambient light sensor with an I2C digital interface and programmable-event interrupt output."),(0,r.kt)("p",null,"Since performance is key, this light sensor offers a wide dynamic and spectrum detection range to top it all off!"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Its Features Include:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Digital light sensor"),(0,r.kt)("li",{parentName:"ul"},"Wide spectrum detection range"),(0,r.kt)("li",{parentName:"ul"},"Programmable configuration"),(0,r.kt)("li",{parentName:"ul"},"3.3/5V Supply"),(0,r.kt)("li",{parentName:"ul"},"Detect sunlight directly"),(0,r.kt)("li",{parentName:"ul"},"Grove compatible"),(0,r.kt)("li",{parentName:"ul"},"I2C Interface(7-bit)")),(0,r.kt)("h2",{id:"application-ideas"},"Application Ideas"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Light measurement"),(0,r.kt)("li",{parentName:"ul"},"Light detector"),(0,r.kt)("li",{parentName:"ul"},"Light-controlled switch"),(0,r.kt)("li",{parentName:"ul"},"Smart home device"),(0,r.kt)("li",{parentName:"ul"},"Ambient light sensing"),(0,r.kt)("li",{parentName:"ul"},"Backlight control for display panel"),(0,r.kt)("li",{parentName:"ul"},"Keyboard illumination control")),(0,r.kt)("h2",{id:"useful-projects"},"Useful Projects"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Grove - Introduction in a Light Sensor"),":"),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ingo-lohs/grove-introduction-in-a-light-sensor-a55efd/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Environment Cube! Know the Land Beneath You using Sigfox"),": A cube with all the necessary sensors, suitable for a wide range of applications like agriculture, monitoring, ,etc."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-using-sigfox-952f29/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Seeed LoRa IoTea Solution"),": An automatic information collection system applied to tea plantation. It is part of intelligent agricultural information collection."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/seeed-lora-iotea-solution-b5ee95/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Intel Edison IoT Hydroponic Controller"),": An IoT enabled Hydroponics Controller using the Intel Edison during the Boston IoT Hackathon."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/bltrobotics/intel-edison-iot-hydroponic-controller-d7132d/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"COI - Light Transmission Meter"),": The finished product uses the light sensor provided in the Grove Starter Kit Plus to measure change in light intensity."),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/DigitalFabber/coi-light-transmission-meter-8044fd/embed",width:"350"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Environment Cube! Know the Land Beneath You!")," A cube with all the necessary sensors, suitable for a wide range of applications like agriculture. Know the land beneath you!"),(0,r.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/dhairya-parikh/the-environment-cube-know-the-land-beneath-you-b3c2dd/embed",width:"350"}),(0,r.kt)("h2",{id:"resource"},"Resource"),(0,r.kt)("h3",{id:"tutorials-on-grove---light-sensor-v11"},"Tutorials on Grove - Light Sensor v1.1"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/ZvFswNYY2mU",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:!0}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/blog/2020/01/08/what-is-a-light-sensor-types-uses-arduino-guide/"},"What is a light sensor? Types, Uses, Arduino Guide"))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null,"Please submit any technical issue into our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://github.com/SeeedDocument/Wiki_Banner/raw/master/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41609],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var i=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,i,r=function(e,t){if(null==e)return{};var o,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=i.createContext({}),u=function(e){var t=i.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},p=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(o),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||a;return o?i.createElement(m,n(n({ref:t},p),{},{components:o})):i.createElement(m,n({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,n=new Array(a);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,n[1]=l;for(var u=2;u<a;u++)n[u]=o[u];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}h.displayName="MDXCreateElement"},70637:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=o(87462),r=(o(67294),o(3905));const a={description:"Grove - Toy Kit",title:"Grove - Toy Kit",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Toy_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},n=void 0,l={unversionedId:"Top_Brand/Arduino/Kit with Courses/Grove-Toy_Kit",id:"Top_Brand/Arduino/Kit with Courses/Grove-Toy_Kit",title:"Grove - Toy Kit",description:"Grove - Toy Kit",source:"@site/docs/Top_Brand/Arduino/Kit with Courses/Grove-Toy_Kit.md",sourceDirName:"Top_Brand/Arduino/Kit with Courses",slug:"/Grove-Toy_Kit",permalink:"/zh-CN/Grove-Toy_Kit",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Kit with Courses/Grove-Toy_Kit.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"2023\u5e741\u670812\u65e5",frontMatter:{description:"Grove - Toy Kit",title:"Grove - Toy Kit",keywords:["grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-Toy_Kit",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Grove - Mixer Pack V2",permalink:"/zh-CN/Grove-Mixer_Pack_V2"},next:{title:"Raspberry Pi Introduction",permalink:"/zh-CN/Raspberry_Pi"}},s={},u=[{value:"Version Tracker",id:"version-tracker",level:2},{value:"Make your toy sensitive",id:"make-your-toy-sensitive",level:2},{value:"PIR_Motion_Sensor: Sensitive to human motion",id:"pir_motion_sensor-sensitive-to-human-motion",level:3},{value:"Sound sensor: Listen, there&#39;s sound!",id:"sound-sensor-listen-theres-sound",level:3},{value:"3-axis_Accelerometer: Movement detection",id:"3-axis_accelerometer-movement-detection",level:3},{value:"I2C Touch Sensor: Make your toy touch-sensitive.",id:"i2c-touch-sensor-make-your-toy-touch-sensitive",level:3},{value:"Make your toy interactive",id:"make-your-toy-interactive",level:2},{value:"A cool OLED Display: Grove- OLED Display 128*64",id:"a-cool-oled-display-grove--oled-display-12864",level:3},{value:"Blink with any color you like: Variable Color LED",id:"blink-with-any-color-you-like-variable-color-led",level:3},{value:"Record and replay: Sound Recorder",id:"record-and-replay-sound-recorder",level:3},{value:"Make your own music: Piezo_Buzzer_Grove",id:"make-your-own-music-piezo_buzzer_grove",level:3},{value:"Usage",id:"usage",level:2},{value:"1. Automated train station by Adrian",id:"1-automated-train-station-by-adrian",level:3},{value:"2. Barking Desk Guard Dog by Wendell",id:"2-barking-desk-guard-dog-by-wendell",level:3},{value:"3. IKEA Robot lamp by Javier",id:"3-ikea-robot-lamp-by-javier",level:3},{value:"4. Beckoning cat hack by Severin (XinCheJian)",id:"4-beckoning-cat-hack-by-severin-xinchejian",level:3},{value:"5. gRover Robotics Platform by Matthew",id:"5-grover-robotics-platform-by-matthew",level:3},{value:"6. Eyeclop by Alex",id:"6-eyeclop-by-alex",level:3},{value:"Support",id:"support",level:2},{value:"See Also",id:"see-also",level:2},{value:"Tech Support",id:"tech-support",level:2}],p={toc:u};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Grove Toy Kit provides an easy way for you to hack and upgrade toys to fit with your own personality. It boosts regular toys with many cool functions like sense of human motion, listening ability, movement detection, OLED display, and more. Thanks for the players of Toy hacking contest, there\u2019re six awesome projects listed below that shows you what you can do with the Grove Toy Kit."),(0,r.kt)("p",null,"Grove Toy Kit includes:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Toy-Kit-p-995.html"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png",alt:null}))),(0,r.kt)("h2",{id:"version-tracker"},"Version Tracker"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null," Revision"),(0,r.kt)("th",null," Descriptions"),(0,r.kt)("th",null," Release")),(0,r.kt)("tr",null,(0,r.kt)("td",{width:"300px"}," GROVE - Toy Kit"),(0,r.kt)("td",{width:"500px"}," the V0.9b revision published"),(0,r.kt)("td",{width:"200px"}," Nov 23, 2011"))),(0,r.kt)("h2",{id:"make-your-toy-sensitive"},"Make your toy sensitive"),(0,r.kt)("p",null,"To make your toy sensitive, we have prepared some sensors for you in this Kit."),(0,r.kt)("h3",{id:"pir_motion_sensor-sensitive-to-human-motion"},"PIR_Motion_Sensor: Sensitive to human motion"),(0,r.kt)("p",null,"How about make your toy say \"hello\" when you get close to it? With the PIR sensor, your toy can detect human beings when they move into the sensor's detection range. You can adjust your toy's detection range and hold time by adjusting the two potentiometers."),(0,r.kt)("p",null,"[",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/PIR_motion_sensor.jpg",alt:null}),"]"),(0,r.kt)("h3",{id:"sound-sensor-listen-theres-sound"},"Sound sensor: Listen, there's sound!"),(0,r.kt)("p",null,"With the Sound sensor, your toy can be sensitive to the environment noise. Grove - Sound Sensor is a simple microphone. Based on the power amplifier LM386 and the electret microphone, it can be used to detect the sound strength of the environment. The value of output can be adjusted by the potentiometer."),(0,r.kt)("p",null,"[",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Sound_sensor.jpg",alt:null}),"]"),(0,r.kt)("h3",{id:"3-axis_accelerometer-movement-detection"},"3-axis_Accelerometer: Movement detection"),(0,r.kt)("p",null,'With the I2C 3-axis Accelerometer, your toy can now detect its acceleration; that is, if your kid shakes his/her doll heavily, the doll may say: "Hey, kiddo! You are stronger than the last time you shook me!'),(0,r.kt)("center",null,(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Accelerometer.jpg",alt:null}))),(0,r.kt)("h3",{id:"i2c-touch-sensor-make-your-toy-touch-sensitive"},"I2C Touch Sensor: Make your toy touch-sensitive."),(0,r.kt)("p",null,"An I2C Touch Sensor has been used to make your toy (ie Winnie The Pooh) sensitive to your finger's touch. It includes a controller and 4 feelers, which enables your toy to feel the touch or proximity of human fingers with 4 channels. Besides, up to 4 additional channels can be added if you make or ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/grove-i2c-touch-sensor-p-840.html?cPath=144_195"},"buy the feelers from Seeed Studio"),"."),(0,r.kt)("p",null,"[",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/I2C_Touch_Sensor.jpg",alt:null}),"]"),(0,r.kt)("h2",{id:"make-your-toy-interactive"},"Make your toy interactive"),(0,r.kt)("h3",{id:"a-cool-oled-display-grove--oled-display-12864"},"A cool OLED Display: Grove- OLED Display 128*64"),(0,r.kt)("p",null,"LED 128\xd764 Display module is an OLED monochrome 128\xd764dot matrix display module with Grove 4pin I2C Interface. The characteristics of this display module are high brightness, self-emission, high contrast ratio, slim outline, wide viewing angle, wide temperature range, and low power consumption. It has bigger screen and uses all the columns from the SSD1308 chip so that it can display more contents than the OLED 96\xd716."),(0,r.kt)("p",null,"This very cool OLED Display with Grove 4pin I2C Interface, is high brightness, self-emission, high contrast ratio, slim outline, wide viewing angle, wide temperature range, and low power consumption. It is rather splendid to Integrate it into your toy, or any things you like."),(0,r.kt)("p",null,"[",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Twig-OLED_Display_128x64.jpg",alt:null}),"]"),(0,r.kt)("h3",{id:"blink-with-any-color-you-like-variable-color-led"},"Blink with any color you like: Variable Color LED"),(0,r.kt)("p",null,"This Variable Color LED is consist of one 8mm RGB LED and 3 potentiometers. You can get any color you like through adjusting the 3 potentiometers and control LED on and off. Now, change the color of the eyes of Winnie The Pooh as you like and make them blink like the stars~!"),(0,r.kt)("p",null,"[",(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Variable_Color_LED.jpg",alt:null}),"]"),(0,r.kt)("h3",{id:"record-and-replay-sound-recorder"},"Record and replay: Sound Recorder"),(0,r.kt)("p",null,'The sound recorder can be used to record voice and then replay them. It is possible for your toy to remind you kids in your voice:" hi,sweet,it is time to go bed"'),(0,r.kt)("font",{color:"blue"},"But sorry to tell you that the chip of Sound Recorder has ceased production, so we do NOT put it into Toy Kit's packlist. Seeed RandD Team is trying to find the other chip which can get Sound Recorder back to work, We won't let you wait too long!"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Sound_Recorder.jpg",alt:null}),"]"),(0,r.kt)("h3",{id:"make-your-own-music-piezo_buzzer_grove"},"Make your own music: Piezo_Buzzer_Grove"),(0,r.kt)("p",null,"This Piezo_Buzzer can be connected to an analog pulse-width modulation output to generate various tones and effects."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://garden.seeedstudio.com/index.php?title=GROVE_-_Starter_Kit_V1.0b#Piezo_Buzzer",title:"GROVE_-_Starter_Kit_V1.0b#Piezo_Buzzer"},(0,r.kt)("img",{parentName:"a",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Piezo_Buzzer_Twig.jpg",alt:null}))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The Toy kit work with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/arduino-uno-p-694.html?cPath=132_133"},"Arduino")," or ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/depot/arduino-uno-p-694.html?cPath=132_133"},"Seeeduino"),"board,and the Grove Shield series"),(0,r.kt)("p",null,"Here are some Application Examples designed by Seeed customers."),(0,r.kt)("h3",{id:"1-automated-train-station-by-adrian"},"1. Automated train station by Adrian"),(0,r.kt)("p",null,"This project is about an automated railway system. The basic idea is to use the Grove Toy Kit to determine the time, to play the corresponding sound when a train reaches the station, and to know when the train reaches the crossover."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Toy_Kit_Project_1.jpg",alt:null})),(0,r.kt)("p",null,"If you want to go for this project, you may still need to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Seeeduino or Arduino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - RTC"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A detailed step-by-step instruction ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/document/Automated_train_station.ppt"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More pictures ",(0,r.kt)("a",{parentName:"p",href:"https://picasaweb.google.com/111286480499748956103/SeeedstudioProject?authuser=0&feat=directlink"},"here")))),(0,r.kt)("h3",{id:"2-barking-desk-guard-dog-by-wendell"},"2. Barking Desk Guard Dog by Wendell"),(0,r.kt)("p",null,"The Barking Desk Guard Dog will bark at anyone who will try to move the object in front of it. You can place it on your desktop when you are not around and when someone comes near your place (maybe in your work) then it will alert all your colleagues when that someone tries to take something from your desk."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Barking_Desk_Guard_Dog.png",alt:null})),(0,r.kt)("p",null,"If you want to go for this project, you may still need to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Seeeduino or Arduino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - I2C Touch Sensor"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A detailed step-by-step instruction ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/document/Barking_Desk_Guard_Dog.pdf"},"PDF"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A demo ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=8BghIeelvtY"},"video")," on YouTube."))),(0,r.kt)("h3",{id:"3-ikea-robot-lamp-by-javier"},"3. IKEA Robot lamp by Javier"),(0,r.kt)("p",null,"This project is about modifying an IKEA lamp. The common product turns into a Robot Lamp and has more fun through adding sensors, lights, sound and movement into it."),(0,r.kt)("p",null,"[","[Image:IKEA Robot Lamp.jpg}550px]","]"),(0,r.kt)("p",null,"If you want to go for this project, you may still need to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Seeeduino or Arduino")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check out the project page ",(0,r.kt)("a",{parentName:"p",href:"http://arduinoarts.com/2011/09/the-sm-1-project-part-7-the-first-working-version-of-the-ikea-robot-lamp-with-arduino/"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A detailed step-by-step instruction ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/www.seeedstudio.com/document/seeedStudioAssemblyInstructions.docx"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Tutorial ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=hmSlk4zmhYo"},"videos")," on YouTube."))),(0,r.kt)("h3",{id:"4-beckoning-cat-hack-by-severin-xinchejian"},"4. Beckoning cat hack by Severin (XinCheJian)"),(0,r.kt)("p",null,"When walking through Shanghai, there is one thing you will see in many shops, restaurants and other places: the Maneki Neko, also known as the beckoning cat. Most of them have a mechanism, which lets one of their arms (usually the left one) move back and forth endlessly. This project basically is to modify its moving arm with Grove components."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Beckoing_cat_hack.jpg",alt:null})),(0,r.kt)("p",null,"If you want to go for this project, you may still need to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a Seeeduino or Arduino")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources: ")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A detailed step-by-step instruction ",(0,r.kt)("a",{parentName:"p",href:"http://wiki.xinchejian.com/docs/cat/"},"here"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A demo ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?edit=vd&v=9i7DidiFYts"},"video")," on YouTube."))),(0,r.kt)("h3",{id:"5-grover-robotics-platform-by-matthew"},"5. gRover Robotics Platform by Matthew"),(0,r.kt)("p",null,"This project is to re-purpose a remote control car that you can easily find in a thrift store into an Arduino-controlled robot using Seeed Studio's Grove Toy kit."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/GRover_Robotics_Platform.jpg",alt:null})),(0,r.kt)("p",null,"If you want to go for this project, you may still need to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Seeeduino or Arduino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - I2C Touch Sensor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Battery Pack")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - 80cm Infrared proximity sensor")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - I2C Hub")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - I2C Motor Driver")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - Vibrator"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The detailed step-by-step instruction ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/document/gRover.pdf"},"PDF"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"More pictures ",(0,r.kt)("a",{parentName:"p",href:"http://www.flickr.com/photos/matthewlange/sets/72157627614719221/with/6176558869/"},"here"),"."))),(0,r.kt)("h3",{id:"6-eyeclop-by-alex"},"6. Eyeclop by Alex"),(0,r.kt)("p",null,"The Eyeclop is a project that demonstrates the use of touch sensors to change the shape of the eye as well as blink an RGB LED, play sound melody, and vibrate itself. The Eyeclop is a sensitive one-eye Cyclop, and is shown on a monochrome OLED 128x64 pixel screen. The touch sensors, the RGB LED, and other electronic components are all part of the Grove Toy Kit that is created by Seeed Studio."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Grove-Toy_Kit/img/Eyeclop.png",alt:null})),(0,r.kt)("p",null,"If you want to go for this project, you may still need to have:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Seeeduino or Arduino")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a Grove - I2C Touch Sensor"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resources:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A detailed step-by-step instruction ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/document/Eyeclop%20howto.pdf"},"PDF"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A demo ",(0,r.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=AjtvoA2FFAs"},"video")," on YouTube."))),(0,r.kt)("h2",{id:"support"},"Support"),(0,r.kt)("p",null,"If you have questions or other better design ideas, you can go to our ",(0,r.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com"},"forum")),(0,r.kt)("h2",{id:"see-also"},"See Also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Starter-Kit-p-709.html"},"Grove - Starter Kit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-ADK-Dash-Kit-p-929.html"},"Grove - ADK Dash Kit")))),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("div",null,"Please submit any technical issue into our [forum](https://forum.seeedstudio.com/). ",(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
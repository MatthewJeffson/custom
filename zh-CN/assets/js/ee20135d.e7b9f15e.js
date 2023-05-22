"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[82610],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),h=r,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},c),{},{components:a})):n.createElement(m,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},18317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={description:"SenseCAP ONE Compact Weather Station",title:"SenseCAP ONE Compact Weather Station",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},i="SenseCAP ONE Series Meteorological Sensors",s={unversionedId:"Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors",id:"Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors",title:"SenseCAP ONE Compact Weather Station",description:"SenseCAP ONE Compact Weather Station",source:"@site/docs/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_ONE_Weather_Station",slug:"/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP-One-Series-Meteorological-Sensors.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673798400,formattedLastUpdatedAt:"2023\u5e741\u670815\u65e5",frontMatter:{description:"SenseCAP ONE Compact Weather Station",title:"SenseCAP ONE Compact Weather Station",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"1/16/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"RS485 750cm Ultrasonic Level Sensor",permalink:"/custom/zh-CN/RS485_750cm_Ultrasonic_Sensor-1"},next:{title:"ORCH S4 Weather Station",permalink:"/custom/zh-CN/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/ORCH-S4-Weather-Station"}},l={},p=[{value:"<em>(SenseCAP ONE series compact weather stations)</em>",id:"sensecap-one-series-compact-weather-stations",level:5},{value:"Product Introduction",id:"product-introduction",level:2},{value:"SenseCAP ONE S700 7-in-1 Compact Weather Sensor",id:"sensecap-one-s700-7-in-1-compact-weather-sensor",level:3},{value:"Features",id:"features",level:2},{value:"Measurement Specifications",id:"measurement-specifications",level:2},{value:"General Specifications",id:"general-specifications",level:2},{value:"Demo",id:"demo",level:2},{value:"Why a Weather Station?",id:"why-a-weather-station",level:3},{value:"Required Materials",id:"required-materials",level:3},{value:"Hardware Setup",id:"hardware-setup",level:3},{value:"Software Setup",id:"software-setup",level:3},{value:"Step 1: Configure SenseCAP ONE S700",id:"step-1-configure-sensecap-one-s700",level:4},{value:"Step 2: Configure Raspberry Pi",id:"step-2-configure-raspberry-pi",level:4},{value:"Run the Weather Station",id:"run-the-weather-station",level:3},{value:"DONE",id:"done",level:3},{value:"Summary",id:"summary",level:3},{value:"Applications",id:"applications",level:2}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sensecap-one-series-meteorological-sensors"},"SenseCAP ONE Series Meteorological Sensors"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-1030x754.png",alt:"sensecap one"})),(0,r.kt)("h5",{id:"sensecap-one-series-compact-weather-stations"},(0,r.kt)("em",{parentName:"h5"},"(SenseCAP ONE series compact weather stations)")),(0,r.kt)("h2",{id:"product-introduction"},"Product Introduction"),(0,r.kt)("p",null,"Today, data on localized weather, known as microclimates, is the new frontier for more precise and accurate weather forecasting. As a result, the collection of weather data is becoming increasingly smaller and gridded. In light of this, weather stations, which are the most convenient means of collecting weather data, are seeing a rise in demand."),(0,r.kt)("p",null," SenseCAP ONE compact weather stations consists of several meteorological sensors that measure the following parameters: air temperature & humidity, barometric pressure, light, precipitation, wind speed, wind direction, PM2.5, and PM10. By adopting a modular design, SenseCAP ONE makes it possible for you to conveniently integrate different combinations of sensors into one compact weather station according to actual application needs."),(0,r.kt)("p",null,"The products are designed with industry standards, IP66 rated, featuring high accuracy, high reliability and stability, and strong robustness. SenseCAP ONE series supports RS485/RS422 (Modbus) and SDI-12 interface, enabling easy extension with other sensors of respective interfaces. SenseCAP ONE is easy to deploy, durable for long-term operation in the harsh environment in the outdoor field, making it perfect for applications in the scenarios of smart city, power-grid, power plants, road weather stations, airports, and smart agriculture, etc."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/overall.png",alt:"sensecap one catagories"})),(0,r.kt)("p",null,"There are six total SenseCAP Products with distinctive combination of sensors included. To find the ones matching your particular scenarios, here is a chart clearly demonstrates the appearance of SenseCAP ONEs and the parameters each product can measure."),(0,r.kt)("h3",{id:"sensecap-one-s700-7-in-1-compact-weather-sensor"},"SenseCAP ONE S700 7-in-1 Compact Weather Sensor"),(0,r.kt)("p",null,"SenseCAP ONE S700 7-in-1 Compact Weather Sensor can help you collect and monitor environmental and weather data, which are crucial in different application scenarios such as smart city projects and etc. The SenseCAP ONE S700 is equipped with sensors to measure the seven following parameters: air temperature, relative humidity, barometric pressure, light intensity, rainfall, wind speed, and wind direction."),(0,r.kt)("p",null,"SenseCAP ONE is IP66 certified, and it features strong robustness to withstand even the toughest outdoor environment. The Sensors to measure wind speed and wind direction use ultrasound instead of traditional mechanical 3-cup or vane anemometer. The advantage of using ultrasonic sensors is that reducing the movable parts can make the sensor less likely to be broken and thereby is easier to be maintained without any sacrifices in precision or manpower."),(0,r.kt)("p",null,"The SenseCAP ONE series uses the RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12 communication protocol. Hence, the SenseCAP ONE compact weather sensor can be used with any datalogger that supports RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12."),(0,r.kt)("p",null,"We also provide the SenseCAP ",(0,r.kt)("a",{parentName:"p",href:"https://solution.seeedstudio.com/product/sensor-hub-4g-data-logger/"},"Sensor Hub 4G Data Logger")," (supporting solar power and DC wall power) that can be used with the SenseCAP ONE series weather sensor. The data can be transmitted to the Sensor Hub and then to the SenseCAP server or a private server. If you choose to use the SenseCAP server, we also provide an API for you to easily make your own applications."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://sensecap-solution-upload.cdn.seeed.cn/cc/2020/05/Picture16.png?x-oss-process=image%2Fformat,webp",alt:null})),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"multiple weather parameters to measure in one"),": rain intensity, air temperature, relative humidity, barometric pressure, light intensity, precipitation intensity, wind speed, and wind direction, etc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Embedded with the electronic compass"),": enabling easy installation and you can choose to disable the electronic compass while orienting to the North manually.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"A flange plate and 3m cable")," are included in the package for the pole mount")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IP66 rated"),": waterproof, and dustproof, heaters available, suitable for severe outdoor environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Ultrasonic wind speed & direction sensors without moving parts"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"compact in size, calibrated, easy to install, maintenance free and user-friendly"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Radiation shields")," are equipped to ensure accurate ambient measurement.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Supported interface"),": RS 485 (MODBUS-RTU)  / 232 / 422 (Modbus) / SDI-12")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"CE, FCC certifications are in process"),", coming soon\u2026."))),(0,r.kt)("h2",{id:"measurement-specifications"},"Measurement Specifications"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/measurement%20specification.png",alt:"measurement"})),(0,r.kt)("h2",{id:"general-specifications"},"General Specifications"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/general%20specifications.png",alt:"general"})),(0,r.kt)("h2",{id:"demo"},"Demo"),(0,r.kt)("p",null,"Here we show you how to create your very own weather station with the ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html"},"SenseCAP ONE S700")," and a ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},"Raspberry Pi"),"! With minimal setup and easy-to-use code, this is a great tutorial for beginners who want to get going in no time."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/CFwdaJ3jBZHVROiCzg1Mfu2dF5pNJwH3DAt7dloC4IKyKO_nFwISY_J-3JpZIqiZCazf9Y5DAxB7OxwNwhnwot3BY_I4Wx3CBdWrZNUwJMoDe9bCSzLmS4yxLVz0JYrm9HhjZl7N",alt:null})),(0,r.kt)("h3",{id:"why-a-weather-station"},"Why a Weather Station?"),(0,r.kt)("p",null,"When we think about weather data, it\u2019s a given to recognise its importance in aviation, maritime and construction industries, as well as in predicting extreme climate. To the average individual, however, such information may only be relevant when we need to decide whether to bring an umbrella as we leave our homes."),(0,r.kt)("p",null,"What if I told you that, thanks to new applications, the potential that weather data holds and its relevance will only become greater?"),(0,r.kt)("p",null,"In the clothing industry, about 35% of annual loss in revenue is caused by inaccurate sales forecasts and statistics on the relationship between apparel sales and factors such as time, seasonal and weather changes, holidays, etc."),(0,r.kt)("p",null,"To mitigate this, how about using accurate weather forecasting data to plan the allocation of inventory to a given area? For example, we can estimate how the demand for down jackets will rise or fall given future changes in the weather."),(0,r.kt)("p",null,"In fact, many countries are already using meteorological data to drive business decisions. In Germany, the Beer Index states that beer sales will skyrocket when temperatures exceed 22OC. And for every further 1 degree rise in temperature, 2.3 million more bottles of beer are sold per day. Absolutely brilliant!"),(0,r.kt)("p",null,"In addition to the Beer Index, there is also a car index, ice cream index, swimsuit index, food mold index and more, according to which businesses can develop production and marketing plans in advance. As you can see, the commercialization of meteorological data has a lot of room for imagination."),(0,r.kt)("p",null,"Today, data on localised weather, known as microclimates, is the new frontier for more precise and accurate weather forecasting. As a result, the collection of weather data is becoming increasingly smaller and gridded. In light of this, weather stations, which are the most convenient means of collecting weather data, are seeing a rise in demand. In today\u2019s demo, we\u2019ll show you how you can have your very own weather station up and running in just a few steps using the SenseCAP ONE S700 and Raspberry Pi."),(0,r.kt)("h3",{id:"required-materials"},"Required Materials"),(0,r.kt)("p",null,"To follow along with this tutorial, the following materials are recommended. You can also use an older Raspberry Pi 3 if you have one lying around, but the Pi 4 will give you much more power and versatility if you would also like to use it for other projects."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Raspberry-Pi-4-Computer-Model-B-8GB-p-4595.html"},"Raspberry Pi 4 8GB")," x1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/RS-485-Shield-for-Raspberry-Pi.html"},"RS-485 Shield for Raspberry HAT")," x1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html"},"SenseCAP ONE S700")," x1"))),(0,r.kt)("h3",{id:"hardware-setup"},"Hardware Setup"),(0,r.kt)("p",null,"First, assemble the Seeed RS-485 Shield onto the Raspberry Pi, taking care to align them with Pins 1 to 25 on the Raspberry Pi as shown in the figure below."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh4.googleusercontent.com/h4i69Ct7UV4euxBaw8dLj09gJGfhTm4mo2hXmlq2hDKmANg116M79P_U1P50W8B_1-3h1ckTUjew8NsUALx8-CDoiisaYnyq_fwyekfAffY6ZMf5vVL6WEn02xZoRlw_uSZw2G46",alt:null})),(0,r.kt)("p",null,"Then, connect the SenseCAP ONE S700 to the RS-485 Shield with the RS-485 Connection. That\u2019s it!"),(0,r.kt)("h3",{id:"software-setup"},"Software Setup"),(0,r.kt)("h4",{id:"step-1-configure-sensecap-one-s700"},"Step 1: Configure SenseCAP ONE S700"),(0,r.kt)("p",null,"We will first have to set up the protocol on the SenseCAP ONE S700. First download and install the latest SenseCAP ONE Configuration Tool for your operating system ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases"},"here"),"."),(0,r.kt)("p",null,"Once you have opened the configuration tool, connect your SenseCAP ONE to your PC via USB Type-C and select it under Serial Port. Then, click Connect."),(0,r.kt)("p",null,"Next, select Settings. Under Main Port Protocol, select RS-485 ASCII, like shown below. Then, select Write To Device."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh5.googleusercontent.com/IaVOWjPMua04nLj8I1LP89rZ0JBNxpyEhSfDWupO9cMIYtsV6lsR90k1esRGWLsBgzCHB2Odj5kb3BIPF5kkCyRBwsnf_-a8L9gnQuTM5cEXfHpMA-WzaWt50AqNtHZZEhqXcEgx",alt:null})),(0,r.kt)("h4",{id:"step-2-configure-raspberry-pi"},"Step 2: Configure Raspberry Pi"),(0,r.kt)("p",null,"This tutorial assumes Raspberry Pi OS running on a Raspberry Pi that has internet connectivity set up. If you are new to the Raspberry Pi, you can learn how to get WiFi up and running ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/blog/2021/01/25/three-methods-to-configure-raspberry-pi-wifi/"},"here"),"."),(0,r.kt)("p",null,"First, make sure that Node.JS v10.22.x is installed on your Raspberry Pi. Else, run the script below to install it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -L https://raw.githubusercontent.com/tj/n/master/bin/n -o n\nbash n 10\n")),(0,r.kt)("p",null,"The next step is to enable hardware serial on /dev/ttyS0. In your terminal window, run the Raspi Config tool with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo raspi-config\n")),(0,r.kt)("h3",{id:"run-the-weather-station"},"Run the Weather Station"),(0,r.kt)("p",null,"After the setup, it\u2019s easy to get the weather station up and running. On your Raspberry Pi, execute the following commands to install and run the weather station server & website."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git@github.com:Seeed-Solution/SenseCAP-WeatherStation-Raspberry-Pi-Visualization.git\nmv SenseCAP-WeatherStation-Raspberry-Pi-Visualization /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization\ncd /opt/SenseCAP-WeatherStation-Raspberry-Pi-Visualization\n\ncd server && install --unsafe\ncd website && install --unsafe\n\n# pm2 start\nnpm install -g -y --unsafe pm2 http-server\npm2 start run-server.sh\npm2 start run-website.sh\npm2 save\npm2 ls\n")),(0,r.kt)("p",null,"With your PC and Raspberry Pi under the same local area network, access the weather station data through the following URL in your browser."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://{Raspberry Pi IP}:8080\n")),(0,r.kt)("p",null,"If you are unsure of your Raspberry Pi\u2019s IP address, you can run the command below and take note of the IP next to inet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ifconfig wlan0\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh3.googleusercontent.com/1MviIYqYAIagHWvDDj8BXoRjBWAbqYATtQ4wyTrl4W3Z-XTwa9VcO63zkZ7_qD5mvu88EsJ9Euu8G4GAi8IW7WOy_047ZdO-7BWMGL1Qvz59Sv1n5vTZ6_OzzOY5JSBcAENfNrc5",alt:null})),(0,r.kt)("h3",{id:"done"},"DONE"),(0,r.kt)("p",null,"Once you completed all the setup and visited the URL successfully, you should see the weather data being visualised in real time like shown below. SenseCAP ONE S700 is an all-in-one platform that not only allows us to get basic data like temperature and humidity, we can also view advanced information including wind direction and speed, air pressure, rainfall and even the amount of light."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://lh6.googleusercontent.com/SGQuzJr3kZIRojr79-Iu1-onBBQoCDNH6gFFPTh7eFJy7yYYlO97Y6uvtEgSvMmt68q1LBUlMJSgOUn7kFK3Meu2d1mv6oAovEiKlCwNkJaOmhEwBBeDVNDZMTrggOiZsHh2JHEq",alt:null})),(0,r.kt)("p",null,"With this, we not only have a fully functional weather station in a matter of minutes, we can also extend it to visualise data remotely. Alternatively, we can also store the weather data for powerful data analytics and forecasting."),(0,r.kt)("h3",{id:"summary"},"Summary"),(0,r.kt)("p",null,"We hope you have enjoyed the demonstration of how you can create a weather station in just a few steps with the Raspberry Pi and ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.htmlhttps://www.seeedstudio.com/SenseCAPONE-S700-7in1-Compact-Weather-Sensor.html"},"SenseCAP ONE S700"),"! Although this project is simple, the possibilities it enables are only limited by your imagination."),(0,r.kt)("p",null,"Besides working with Raspberry Pi 4 8GB, SenseCAP ONE series of products can be easily deployed and use with our ",(0,r.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/SenseCAP-Sensor-Hub-4G-Data-Logger-with-builtin-battery-p-4852.html"},"SenseCAP Sensor Hub 4G Data Logger"),". As an easy-to-deploy, industrial-grade 4G cellular station, Sensor Hub uses the MODBUS-RTU RS485 protocol to communicate with sensors and is able to collect various sensor data simultaneously. IP66-rated, waterproof and dustproof, Sensor Hub 4G Data Logger is suitable for long-term, reliable outdoor applications such as in smart agriculture, smart weather stations and smart city, etc."),(0,r.kt)("p",null,"Now, how will you use your very own weather station?"),(0,r.kt)("h2",{id:"applications"},"Applications"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/products/113990896/wiki/sensecap%20one/SenseCAP-ONE-Applications-1030x379.png",alt:"sensecap one applications"})))}u.isMDXComponent=!0}}]);
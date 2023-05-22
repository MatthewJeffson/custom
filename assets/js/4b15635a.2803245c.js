"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[62911],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(a),c=i,f=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34010:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={description:"Grafana for reTerminal",title:"Grafana for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/weather-dashboard-with-Grafana-reTerminal",last_update:{date:"2/1/2023",author:"jianjing Huang"}},l="Build Your Own Weather Dashboard Using Grafana",o={unversionedId:"Edge/reTerminal/Application/weather-dashboard-with-Grafana-reTerminal",id:"Edge/reTerminal/Application/weather-dashboard-with-Grafana-reTerminal",title:"Grafana for reTerminal",description:"Grafana for reTerminal",source:"@site/docs/Edge/reTerminal/Application/weather-dashboard-with-Grafana-reTerminal.md",sourceDirName:"Edge/reTerminal/Application",slug:"/weather-dashboard-with-Grafana-reTerminal",permalink:"/weather-dashboard-with-Grafana-reTerminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/weather-dashboard-with-Grafana-reTerminal.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675180800,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"Grafana for reTerminal",title:"Grafana for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/weather-dashboard-with-Grafana-reTerminal",last_update:{date:"2/1/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"LVGL for reTerminal",permalink:"/reTerminal-build-UI-using-LVGL"},next:{title:"Mender Client on reTerminal",permalink:"/Mender-Client-reTerminal"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Materials Required",id:"materials-required",level:2},{value:"Azure and InflexDB Setup",id:"azure-and-inflexdb-setup",level:2},{value:"ESP32 Setup",id:"esp32-setup",level:2},{value:"Install and Set Up Grafana On The reTerminal",id:"install-and-set-up-grafana-on-the-reterminal",level:2},{value:"Configure Grafana to use Flux",id:"configure-grafana-to-use-flux",level:2}],u={toc:p};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"build-your-own-weather-dashboard-using-grafana"},"Build Your Own Weather Dashboard Using Grafana"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png",alt:"image-20220124151124558"})),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"We here will introduce you how to make your own weather dashboard on your reTerminal using Grafana, which is given credit to ",(0,i.kt)("a",{parentName:"p",href:"https://www.the-diy-life.com/grafana-weather-dashboard-on-the-reterminal-by-seeed-studio/"},"Michaelm Klementsk"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.influxdata.com/"},"InflexDB"),"  is an ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open-source_software"},"open-source")," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time_series_database"},"time-series database")," (TSDB) developed by the company InfluxData. It is written in the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Go_(programming_language)"},"Go programming language")," for storage and retrieval of ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Time_series"},"time series")," data in fields such as operations monitoring, application metrics, ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Internet_of_Things"},"Internet of Things")," sensor data, and real-time analytics. It also has support for processing data from ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Graphite_(software)"},"Graphite"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," is a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multi-platform"},"multi-platform")," ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Open_source"},"open source")," analytics and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Interactive_visualization"},"interactive visualization")," web application. It provides charts, graphs, and alerts for the web when connected to supported data sources. A licensed Grafana Enterprise version with additional capabilities is also available as a self-hosted installation or an account on the Grafana Labs cloud service. It is expandable through a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Plug-in_(computing)"},"plug-in system"),". End users can create complex monitoring dashboards using interactive query builders. Grafana is divided into a ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Front_end_and_back_end"},"front end and back end"),", written in ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/TypeScript"},"TypeScript")," and ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Go_(programming_language)"},"Go"),", respectively."),(0,i.kt)("p",null,"We are going to use an ESP32 to collect temperature, humidity and pressure readings. These will then be posted to a time-series database in ",(0,i.kt)("a",{parentName:"p",href:"https://www.influxdata.com/products/influxdb-cloud/"},"InfluxDB"),". InfluxDB can be run locally on a Raspberry Pi or on their cloud server, we\u2019re going to be using their cloud server. We\u2019re then going to be using an analytics and visualisation application called ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/"},"Grafana")," to display the information that has been stored in the database. Grafana can also be run locally on our Raspberry Pi (or reTerminal in this case) or on their cloud server. We\u2019re going to be installing and running it locally on our reTerminal. You don\u2019t need to use a separate Pi for InfluxDB and Grafana, you could run both locally on your reTerminal if you\u2019d like to \u2013 I just don\u2019t want to have to leave the reTerminal running all the time in order to collect the data."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/Data-Processing-Between-ESP32-and-Grafana-1024x576.jpg",alt:"Data Processing Between ESP32 and Grafana"})),(0,i.kt)("h2",{id:"materials-required"},"Materials Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/ReTerminal-with-CM4-p-4904.html"},"reTerminal")),(0,i.kt)("li",{parentName:"ul"},"Power Supply"),(0,i.kt)("li",{parentName:"ul"},"ESP32"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Arduino-Sensor-Kit-Base-p-4743.html"},"Grove Sensor\u2019s From Beginner Kit")),(0,i.kt)("li",{parentName:"ul"},"Breadboard"),(0,i.kt)("li",{parentName:"ul"},"Breadboard Jumpers")),(0,i.kt)("h2",{id:"azure-and-inflexdb-setup"},"Azure and InflexDB Setup"),(0,i.kt)("p",null,"We need to create a virtual machine first."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Open the following page and log in to your ",(0,i.kt)("a",{parentName:"li",href:"https://portal.azure.com/#home"},"Microsoft Azure")," services. Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Virtual machines")," and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124131855082.png",alt:"image-20220124131855082"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Select Ubuntu 18.04 system as default system in the virtual machine. Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Review + create")," and go to the next page.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132225793.png",alt:"image-20220124132225793"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," All the configurations are selected, click ",(0,i.kt)("inlineCode",{parentName:"li"},"Create"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124132800871.png",alt:"image-20220124132800871"})),(0,i.kt)("p",null,"The progess will take a while, when it is complete, click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Go to resource")," button."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133101855.png",alt:"image-20220124133101855"})),(0,i.kt)("p",null,"Then it will move to the below page. Click the ",(0,i.kt)("inlineCode",{parentName:"p"},"Networking"),", choose ",(0,i.kt)("inlineCode",{parentName:"p"},"Add inbound port rule")," and add ",(0,i.kt)("inlineCode",{parentName:"p"},"8086")," port with any destination."),(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124133706479.png",alt:"image-20220124133706479"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4.")," Copy these commands to install the docker and enable it.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt udpate\nsudo apt install docker docker-compose -y\nsudo systemctl enable --now docker && sudo systemctl start docker\nsudo systemctl status docker\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134313484.png",alt:"image-20220124134313484"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Use the command to pull the InfluxDB image down.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker pull influxdb:2.1.1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124134409253.png",alt:"image-20220124134409253"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 6.")," Apply the command to run the InfluxDB background.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo docker run -d --name influxdb -p 8086:8086 influxdb:2.1.1\n")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135326814.png",alt:"image-20220124135326814"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 7.")," Open your browser and then input ",(0,i.kt)("inlineCode",{parentName:"li"},"http://yourip:8086"),'(Your IP). Click "Get Started" to use it.')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135533274.png",alt:"image-20220124135533274"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 8.")," Record your ",(0,i.kt)("inlineCode",{parentName:"li"},"Organization Name"),"  and ",(0,i.kt)("inlineCode",{parentName:"li"},"Bucket Name"),' and then click "Continue"')),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124135632177.png",alt:"image-20220124135632177"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 9.")," Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Data > API Tokens"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140028985.png",alt:"image-20220124140028985"})),(0,i.kt)("p",null,"Azure and InflexDB now will be set up, next we will move to the ESP32."),(0,i.kt)("h2",{id:"esp32-setup"},"ESP32 Setup"),(0,i.kt)("p",null,"To collect the weather data, we are going to be using an ESP32 with a DHT11 sensor connected to pin 4 and a BMP280 pressure sensor connected to the I2C interface (pins 21 and 22). The example here is using two Grove sensor modules from the ",(0,i.kt)("a",{parentName:"p",href:"https://amzn.to/31my42U"},"beginner kit")," as it already has all of the required electronics built into them (additional resistors etc.)."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/ESP32-Circuit-Diagram-1024x576.jpg",alt:"ESP32 Circuit Diagram"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1.")," Open the ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Getting_Started_with_Arduino/"},"Arduino IDE")," and ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"install the libraries"),". Here we provide two installations.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Use Library Manager")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. Open the Arduino IDE and click to the \"Sketch\" menu and then Include Library > Manage Libraries.\n2. Type 'influxdb' in the search box\n3. Install the 'InfluxDBClient for Arduino' library\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Manual Installation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1. cd <arduino-sketch-location>/library.\n2. git clone https://github.com/tobiasschuerg/InfluxDB-Client-for-Arduino\n3. Restart the Arduino IDE\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2.")," Copy the following codes in the skecth.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c++"},'#include <Wire.h>                                                   //Import the required libraries\n#include "DHT.h"\n#include "Seeed_BMP280.h"\n#include <WiFiMulti.h>\nWiFiMulti wifiMulti;\n#define DEVICE "ESP32"\n\n#include <InfluxDbClient.h>\n#include <InfluxDbCloud.h>\n\n#define WIFI_SSID "xxxxxxxx"                                            //Network Name\n#define WIFI_PASSWORD "xxxxxxxxxx"                                        //Network Password\n#define INFLUXDB_URL "http://xxxxxxxx:8086"                                                 //InfluxDB v2 server url, e.g. https://eu-central-1-1.aws.cloud2.influxdata.com (Use: InfluxDB UI -> Load Data -> Client Libraries)\n#define INFLUXDB_TOKEN "xxxxxxxxx"                                                                                             //InfluxDB v2 server or cloud API token (Use: InfluxDB UI -> Data -> API Tokens -> <select token>)\n#define INFLUXDB_ORG "xxxxxxx"                                                                                               //InfluxDB v2 organization id (Use: InfluxDB UI -> User -> About -> Common Ids )\n#define INFLUXDB_BUCKET "xxxxxxx"                                                                                            //InfluxDB v2 bucket name (Use: InfluxDB UI ->  Data -> Buckets)\n#define TZ_INFO "JST-9"                                                                                                //InfluxDB v2 timezone\n\nDHT dht(4,DHT11);                                                   //DHT and BMP sensor parameters\nBMP280 bmp280;\n\nint temp = 0;                                                       //Variables to store sensor readings\nint humid = 0;\nint pressure = 0;\n\n//InfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN, InfluxDbCloud2CACert);                 //InfluxDB client instance with preconfigured InfluxCloud certificate\nInfluxDBClient client(INFLUXDB_URL, INFLUXDB_ORG, INFLUXDB_BUCKET, INFLUXDB_TOKEN); \n\nPoint sensor("weather");                                            //Data point\n\nvoid setup() \n{\n  Serial.begin(115200);                                             //Start serial communication\n  \n  dht.begin();                                                      //Connect to the DHT Sensor\n  if(!bmp280.init())                                                //Connect to pressure sensor\n    Serial.println("bmp280 init error!");\n\n  WiFi.mode(WIFI_STA);                                              //Setup wifi connection\n  wifiMulti.addAP(WIFI_SSID, WIFI_PASSWORD);\n\n  Serial.print("Connecting to wifi");                               //Connect to WiFi\n  while (wifiMulti.run() != WL_CONNECTED) \n  {\n    Serial.print(".");\n    delay(100);\n  }\n  Serial.println();\n\n  sensor.addTag("device", DEVICE);                                   //Add tag(s) - repeat as required\n  sensor.addTag("SSID", WIFI_SSID);\n\n  timeSync(TZ_INFO, "pool.ntp.org", "time.nis.gov");                 //Accurate time is necessary for certificate validation and writing in batches\n\n  if (client.validateConnection())                                   //Check server connection\n  {\n    Serial.print("Connected to InfluxDB: ");\n    Serial.println(client.getServerUrl());\n  } \n  else \n  {\n    Serial.print("InfluxDB connection failed: ");\n    Serial.println(client.getLastErrorMessage());\n  }\n}\n\nvoid loop()                                                          //Loop function\n{\n  temp = dht.readTemperature();                                      //Record temperature\n  humid = dht.readHumidity();                                        //Record temperature\n  pressure = bmp280.getPressure()/100;                               //Record pressure\n\n  sensor.clearFields();                                              //Clear fields for reusing the point. Tags will remain untouched\n\n  sensor.addField("temperature", temp);                              // Store measured value into point\n  sensor.addField("humidity", humid);                                // Store measured value into point\n  sensor.addField("pressure", pressure);                             // Store measured value into point\n\n    \n  if (wifiMulti.run() != WL_CONNECTED)                               //Check WiFi connection and reconnect if needed\n    Serial.println("Wifi connection lost");\n\n  if (!client.writePoint(sensor))                                    //Write data point\n  {\n    Serial.print("InfluxDB write failed: ");\n    Serial.println(client.getLastErrorMessage());\n  }\n  \n  Serial.print("Temp: ");                                            //Display readings on serial monitor\n  Serial.println(temp);\n  Serial.print("Humidity: ");\n  Serial.println(humid);\n  Serial.print("Pressure: ");\n  Serial.println(pressure);\n  delay(1000);                                                      //Wait 60 seconds\n}\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," The codes are not finished. If you set up your API token and bucket, the generated code on the Arduino interface page accessed from your InfluxDB dashboard will already contain the correct setup information, so you only need to copy it into your code."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/InfluxDB-Arduino-Interface-Instructions-1024x576.jpg",alt:"InfluxDB Arduino Interface Instructions"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3.")," Upload the codes and check the results.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124140133524.png",alt:"image-20220124140133524"})),(0,i.kt)("p",null,"After a while, we can see that the information is now available in our InfluxDB database, so we know that our ESP32 is working correctly. Now we can move on to installing Grafana on our reTerminal and setting it up to display the information in our database."),(0,i.kt)("h2",{id:"install-and-set-up-grafana-on-the-reterminal"},"Install and Set Up Grafana On The reTerminal"),(0,i.kt)("p",null,"Next, we are going to install Grafan by following the terminal instructions outlined on their website for an ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/installation/debian/"},"installation on Debian or Ubuntu"),". Then we just need to start Grafana and set it to re-start on bootup."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/Installing-Grafana-1024x542.jpg",alt:"Installing Grafana"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 1."),"  Access the Grafana web interface by opening up a new tab in the browser, pointing to localhost, port 3000. You can open your browser on your reTerminal and type ",(0,i.kt)("inlineCode",{parentName:"li"},"http://localhost:3000"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://www.the-diy-life.com/wp-content/uploads/2021/12/Grafana-Web-Interface-Localhost3000-1024x534.jpg",alt:"Grafana Web Interface Localhost3000"})),(0,i.kt)("p",null,"We then need to configure it to read in the data from InfluxDB by entering the sever and authentication information. This can all be found through your InfluxDB web interface and is quite similar to the information your ESP32 is publishing data to."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2."),"  Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Setting")," button and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"Data sources"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144300849.png",alt:"image-20220124144300849"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3."),"  Type the ",(0,i.kt)("inlineCode",{parentName:"li"},"InfluxDB")," in the filter and choose ",(0,i.kt)("inlineCode",{parentName:"li"},"InfluxDB"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124144322352.png",alt:"image-20220124144322352"})),(0,i.kt)("p",null,"Now we have installed and set Up Grafana On The reTerminal"),(0,i.kt)("h2",{id:"configure-grafana-to-use-flux"},(0,i.kt)("a",{parentName:"h2",href:"https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#configure-grafana-to-use-flux"},"Configure Grafana to use Flux")),(0,i.kt)("p",null,"With ",(0,i.kt)("strong",{parentName:"p"},"Flux")," selected as the query language in your InfluxDB data source, we will configure the InfluxDB connection:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step 1."),"  Set the ",(0,i.kt)("strong",{parentName:"p"},"Connection")," and click ",(0,i.kt)("strong",{parentName:"p"},"Save & Test"),". The information respectively are:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"URL"),": Your ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/reference/urls/"},"InfluxDB URL"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"http://yourip:8086/\n")),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/tools/grafana/#"},"Change InfluxDB URL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Organization"),": Your InfluxDB ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/organizations/view-orgs/"},"organization name ",(0,i.kt)("strong",{parentName:"a"},"or")," ID"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Token"),": Your InfluxDB ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/security/tokens/"},"API token"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Default Bucket"),": The default ",(0,i.kt)("a",{parentName:"p",href:"https://docs.influxdata.com/influxdb/v2.0/organizations/buckets/"},"bucket")," to use in Flux queries.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Min time interval"),": The ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/features/datasources/influxdb/#min-time-interval"},"Grafana minimum time interval"),"."))))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.influxdata.com/img/influxdb/2-0-tools-grafana.png",alt:"img"})),(0,i.kt)("p",null,"Grafana should connect to the InfluxDB 2.0 datasource and returns the results of the test."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 2."),"  Add panel here.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143542830.png",alt:"image-20220124143542830"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 3."),"  Back to the ",(0,i.kt)("inlineCode",{parentName:"li"},"InfluxDB"),", follow the instrucions below and then create script.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143752559.png",alt:"image-20220124143752559"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 4."),"  Copy the scripts and paste them into the reTerminal.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124143812005.png",alt:"image-20220124143812005"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151052928.png",alt:"image-20220124151052928"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step 5.")," Check the results on the reTerminal and the information should be shown as below.")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124164221791.png",alt:"image-20220124164221791"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ESP32-InfluxDB-Grafana/image-20220124151124558.png",alt:"image-20220124151124558"})))}d.isMDXComponent=!0}}]);
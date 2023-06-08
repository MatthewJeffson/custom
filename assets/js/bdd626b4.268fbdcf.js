"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[23499],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>h});var n=i(67294);function o(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){o(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,o=function(e,t){if(null==e)return{};var i,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||(o[i]=e[i]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)i=s[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(o[i]=e[i])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},m=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(i),u=o,h=d["".concat(a,".").concat(u)]||d[u]||c[u]||s;return i?n.createElement(h,r(r({ref:t},m),{},{components:i})):n.createElement(h,r({ref:t},m))}));function h(e,t){var i=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=i.length,r=new Array(s);r[0]=u;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=i[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},11062:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=i(87462),o=(i(67294),i(3905));const s={title:"Wireless desktop atmosphere lamp",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wireless-desktop-atmosphere-lamp/",slug:"/Wireless-desktop-atmosphere-lamp",last_update:{date:"01/11/2022",author:"gunengyu"}},r="Wireless desktop atmosphere lamp",l={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-desktop-atmosphere-lamp",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-desktop-atmosphere-lamp",title:"Wireless desktop atmosphere lamp",description:"Keeping a healthy mood in a busy workplace is very important, and ordinary people will buy a pot of cactus to put on their desktop for decoration and relaxation. As engineers, we also need items with the same function, and it would be the most wonderful thing to make a small glowing bonsai by ourselves. In this project, we will make a lighted wireless desktop ambient light. We can send commands wirelessly to control it to light up different colors to match our different moods, so let's see how to do it!",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-desktop-atmosphere-lamp.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application",slug:"/Wireless-desktop-atmosphere-lamp",permalink:"/custom/Wireless-desktop-atmosphere-lamp",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-desktop-atmosphere-lamp.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wireless desktop atmosphere lamp",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wireless-desktop-atmosphere-lamp/",slug:"/Wireless-desktop-atmosphere-lamp",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wireless Fall Detection Device",permalink:"/custom/Wireless-Fall-Detection-Device"},next:{title:"Wio Link",permalink:"/custom/Wio_Link"}},a={},p=[{value:"Hardware",id:"hardware",level:2},{value:"Wiring Diagram",id:"wiring-diagram",level:3},{value:"Software",id:"software",level:2},{value:"1. Install Thonny\u200b",id:"1-install-thonny",level:3},{value:"2.Connect Wio RP2040 mini Dev Board",id:"2connect-wio-rp2040-mini-dev-board",level:3},{value:"3.Code",id:"3code",level:3},{value:"4.Setting up MQTT client",id:"4setting-up-mqtt-client",level:3},{value:"Appearance",id:"appearance",level:2},{value:"Tech Support",id:"tech-support",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wireless-desktop-atmosphere-lamp"},"Wireless desktop atmosphere lamp"),(0,o.kt)("p",null,"Keeping a healthy mood in a busy workplace is very important, and ordinary people will buy a pot of cactus to put on their desktop for decoration and relaxation. As engineers, we also need items with the same function, and it would be the most wonderful thing to make a small glowing bonsai by ourselves. In this project, we will make a lighted wireless desktop ambient light. We can send commands wirelessly to control it to light up different colors to match our different moods, so let's see how to do it!"),(0,o.kt)("div",{align:"center"},(0,o.kt)("iframe",{width:560,height:315,src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/display.mp4",frameBorder:0,allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html"},"Wio RP2040 mini Dev Board")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Digital-Full-Color-LED-Strip-with-APP-p-4780.html"},"WS2812")),(0,o.kt)("li",{parentName:"ul"},"Type-C data cable"),(0,o.kt)("li",{parentName:"ul"},"PC"),(0,o.kt)("li",{parentName:"ul"},"WiFi")),(0,o.kt)("h3",{id:"wiring-diagram"},"Wiring Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/wiring.jpg",alt:"image.png"})),(0,o.kt)("h2",{id:"software"},"Software"),(0,o.kt)("h3",{id:"1-install-thonny"},"1. Install Thonny\u200b"),(0,o.kt)("p",null,"Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click ",(0,o.kt)("a",{parentName:"p",href:"https://thonny.org/"},"Thonny.org")," to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download. Double-click the installation package you downloaded to open it, and install it according to the steps."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny1.jpg",alt:null})),(0,o.kt)("p",null,"Now that you have Thonny installed, open the application. You should see the main interface of Thonny:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny2.jpg",alt:null})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Code editor: Thonny's core area, where we will write Python/MicroPython code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select.'))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny3.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny4.jpg",alt:null})),(0,o.kt)("h3",{id:"2connect-wio-rp2040-mini-dev-board"},"2.Connect Wio RP2040 mini Dev Board"),(0,o.kt)("p",null,'Use the data cable to connect the development board to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/thonny5.jpg",alt:null})),(0,o.kt)("h3",{id:"3code"},"3.Code"),(0,o.kt)("p",null,'In order to call WS2812B RGB LED on MicroPython we need to import the library file of this WS2812B into the memory of Wio RP2040.\nThis is done as follows: Copy the following code, paste it into a new thorny editor window, then save it to the development board and rename it to "ws2812.py "'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import array, time\nfrom machine import Pin\nimport rp2\n\n# Configure the number of WS2812 LEDs.\n# brightness = 0.2\n\n@rp2.asm_pio(sideset_init=rp2.PIO.OUT_LOW, out_shiftdir=rp2.PIO.SHIFT_LEFT, autopull=True,pull_thresh=24)\n\ndef ws2812():\n    T1 = 2\n    T2 = 5\n    T3 = 3\n    wrap_target()\n    label("bitloop")\n    out(x, 1) .side(0) [T3 - 1]\n    jmp(not_x, "do_zero") .side(1) [T1 - 1]\n    jmp("bitloop") .side(1) [T2 - 1]\n    label("do_zero")\n    nop() .side(0) [T2 - 1]\n    wrap()\nclass WS2812():        \n    def __init__(self, pin_num, led_count, brightness = 0.5):\n        self.Pin = Pin\n        self.led_count = led_count\n        self.brightness = brightness\n        self.sm = rp2.StateMachine(0, ws2812, freq=8_000_000, sideset_base=Pin(pin_num))\n        self.sm.active(1)\n        self.ar = array.array("I", [0 for _ in range(led_count)])\n        \n    def pixels_show(self):\n        dimmer_ar = array.array("I", [0 for _ in range(self.led_count)])\n        for i,c in enumerate(self.ar):\n            r = int(((c >> 8) & 0xFF) * self.brightness)\n            g = int(((c >> 16) & 0xFF) * self.brightness)\n            b = int((c & 0xFF) * self.brightness)\n            dimmer_ar[i] = (g<<16) + (r<<8) + b\n        self.sm.put(dimmer_ar, 8)\n        time.sleep_ms(10)\n\n    def pixels_set(self, i, color):\n        self.ar[i] = (color[1]<<16) + (color[0]<<8) + color[2]\n\n    def pixels_fill(self, color):\n        for i in range(len(self.ar)):\n            self.pixels_set(i, color)\n\n    def color_chase(self,color, wait):\n        for i in range(self.led_count):\n            self.pixels_set(i, color)\n            time.sleep(wait)\n            self.pixels_show()\n        time.sleep(0.2)\n    def wheel(self, pos):\n    # Input a value 0 to 255 to get a color value.\n    # The colours are a transition r - g - b - back to r.\n        if pos < 0 or pos > 255:\n            return (0, 0, 0)\n        if pos < 85:\n            return (255 - pos * 3, pos * 3, 0)\n        if pos < 170:\n            pos -= 85\n            return (0, 255 - pos * 3, pos * 3)\n        pos -= 170\n        return (pos * 3, 0, 255 - pos * 3)\n\n\n    def rainbow_cycle(self, wait):\n        for j in range(255):\n            for i in range(self.led_count):\n                rc_index = (i * 256 // self.led_count) + j\n                self.pixels_set(i, self.wheel(rc_index & 255))\n            self.pixels_show()\n            time.sleep(wait)\n\n\n\n')),(0,o.kt)("p",null,"Then create a new program window to write the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import network\nimport mqtt\nimport utime\nfrom machine import Pin, I2C, ADC, UART, SPI, PWM\nfrom time import sleep\nfrom ws2812 import WS2812\n\nBLACK = (0, 0, 0)\nRED = (255, 0, 0)\nYELLOW = (255, 150, 0)\nGREEN = (0, 255, 0)\nCYAN = (0, 255, 255)\nBLUE = (0, 0, 255)\nPURPLE = (180, 0, 255)\nWHITE = (255, 255, 255)\nled = WS2812(13,10)#WS2812(pin_num,led_count)\n\nN1 = network.WLAN_SPI(network.STA_IF)\nN1.active(True)\nN1.connect(\"CHCK\",\"depot0510\")\nsleep(1)\n \nSERVER = 'mqtt.p2hp.com'\nCLIENT_ID = 'Wio RP2040_Dev_board'\nTOPIC = 'RGB_LED'\n \ndef mqtt_callback(topic):\n    print('topic: {}'.format(topic[0]))\n    print('msg:{}'.format(topic[1]))\n    if(topic[1] == \"RED\"):\n        print('RED')\n        led.pixels_fill(RED)\n        led.pixels_show()\n        utime.sleep(0.2)\n    if(topic[1] == \"GREEN\"):\n        print('GREEN')\n        led.pixels_fill(GREEN)\n        led.pixels_show()\n        utime.sleep(0.2)\n    if(topic[1] == \"YELLOW\"):\n        print('YELLOW')\n        led.pixels_fill(YELLOW)\n        led.pixels_show()\n        utime.sleep(0.2)\n    if(topic[1] == \"CYAN\"):\n        print('CYAN')\n        led.pixels_fill(CYAN)\n        led.pixels_show()\n        utime.sleep(0.2)\n    if(topic[1] == \"BLUE\"):\n        print('BLUE')\n        led.pixels_fill(BLUE)\n        led.pixels_show()\n        utime.sleep(0.2)\n    if(topic[1] == \"PURPLE\"):\n        print('PURPLE')\n        led.pixels_fill(PURPLE)\n        led.pixels_show()\n        utime.sleep(0.2)\n    if(topic[1] == \"WHITE\"):\n        print('WHITE')\n        led.pixels_fill(WHITE)\n        led.pixels_show()\n        utime.sleep(0.2)\n \ncl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)\ncl.connect()\n \n \ncl.publish(TOPIC,\"start\")\ncl.subscribe(TOPIC)\ncl.set_callback(mqtt_callback)\nprint('ok')\n\nled.pixels_fill(RED)\nled.pixels_show()\nutime.sleep(0.2)\nwhile True:\n    cl.wait_msg()\n    sleep(0.1)\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that on line 20 of the program, change your correct WiFi name and password.")),(0,o.kt)("h3",{id:"4setting-up-mqtt-client"},"4.Setting up MQTT client"),(0,o.kt)("p",null,"MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt1.jpg",alt:null})),(0,o.kt)("p",null,'The publisher can create a topic with messages attached to the topic. For example, I can create a new topic "Today\'s Weather" and the message content is "25 degrees Celsius", and then sent the message to the Server. After receiving the topic message, the publisher distributes the information to any clients that have subscribed to that topic. That is, the subscriber will receive the message of "25 degrees Celsius" only if it subscribes to the topic "Today\'s Weather". If the subscriber does not subscribe to the topic of "Today\'s Weather", no matter what message the publisher sends, the subscriber will not receive the message.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt2.jpg",alt:null})),(0,o.kt)("p",null,"Download the MQTTX server software and install it on the computer, and then configure the MQTT server."),(0,o.kt)("hr",null),(0,o.kt)("p",null,'We will use the free server of "mqtt.p2hp.com" in this project. ',(0,o.kt)("strong",{parentName:"p"},"Online server")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Address: mqtt.p2hp.com"),(0,o.kt)("li",{parentName:"ul"},"Ports: 1883 (TCP), 8083 (WebSocket)"),(0,o.kt)("li",{parentName:"ul"},"Type: EMQ"),(0,o.kt)("li",{parentName:"ul"},"MQTT V3.1.1/V5.0 compatible")),(0,o.kt)("hr",null),(0,o.kt)("p",null,'Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server. '),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt3.jpg",alt:"image.png"})),(0,o.kt)("p",null,"After the connection is successful, there will be a pop-up in the upper right corner of the software."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt4.jpg",alt:null})),(0,o.kt)("p",null,"Then set the topic and message below."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt5.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt6.jpg",alt:"image.png"})),(0,o.kt)("p",null,"When data is received, the number of messages is displayed at the top. If you don't see the message, click on the subscription topic. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt7.jpg",alt:"image.png"})),(0,o.kt)("p",null,'Here, the deployment of the MQTT client is completed. Next, go back to the Thonny editor and run the code. When it says "ok" and the connected WS2812B is lit in red, the program runs successfully.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt8.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/led.jpg",alt:"image.png"})),(0,o.kt)("h2",{id:"appearance"},"Appearance"),(0,o.kt)("p",null,"For the exterior part we use acrylic board + wood board to make, you may need a laser engraving machine or saw."),(0,o.kt)("p",null,"You can just use my finished design for the base and panel and cut it with a laser engraver."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/panel.zip"},"panel.zip"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/base.zip"},"base.zip"))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img1.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img2.jpg",alt:"image.png"})),(0,o.kt)("p",null,"The following parts were then obtained."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img3.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img4.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Next, splice the base part"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img5.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img6.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Then paste WS2812B on the part"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img7.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Debug the program and observe if the hardware is running properly"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img8.jpg",alt:"image.png"})),(0,o.kt)("p",null,"If everything is done, you can use hot melt glue to glue the remaining boards together"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img9.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img10.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img11.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Finally, we send different commands in MQTTX to change its color wirelessly!"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Topic:")," RGB_LED"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"msg:")," RED,BLACK,YELLOW,GREEN,CYAN,BLUE,PURPLE,WHITE"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/mqtt9.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Of course, you can also edit the code to try some different lighting effects. Share your work with me!"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img12.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img13.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-desktop-atmosphere-lamp/img14.jpg",alt:"image.png"})),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
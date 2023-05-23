"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[46994],{3905:(e,t,n)=>{n.d(t,{Zo:()=>_,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},_=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,_=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,m=d["".concat(s,".").concat(u)]||d[u]||p[u]||r;return n?i.createElement(m,a(a({ref:t},_),{},{components:n})):i.createElement(m,a({ref:t},_))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},49184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),o=(n(67294),n(3905));const r={title:"Wireless Fall Detection Device",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wireless-Fall-Detection-Device/",slug:"/Wireless-Fall-Detection-Device",last_update:{date:"01/11/2022",author:"gunengyu"}},a="Wireless Fall Detection Device",l={unversionedId:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-Fall-Detection-Device",id:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-Fall-Detection-Device",title:"Wireless Fall Detection Device",description:"Preface",source:"@site/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-Fall-Detection-Device.md",sourceDirName:"Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application",slug:"/Wireless-Fall-Detection-Device",permalink:"/custom/Wireless-Fall-Detection-Device",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Series/Wio_RP2040/Wio_RP2040_mini_Dev_Board/Application/Wireless-Fall-Detection-Device.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641859200,formattedLastUpdatedAt:"Jan 11, 2022",frontMatter:{title:"Wireless Fall Detection Device",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wireless-Fall-Detection-Device/",slug:"/Wireless-Fall-Detection-Device",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Use Socket to connect to the forum",permalink:"/custom/Use_Socket_to_connect_to_the_forum"},next:{title:"Wireless desktop atmosphere lamp",permalink:"/custom/Wireless-desktop-atmosphere-lamp"}},s={},c=[{value:"Preface",id:"preface",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Wiring Diagram",id:"wiring-diagram",level:3},{value:"Software",id:"software",level:2},{value:"1. Install Thonny",id:"1-install-thonny",level:3},{value:"2.Connect Wio RP2040 mini Dev Board",id:"2connect-wio-rp2040-mini-dev-board",level:3},{value:"3.Code",id:"3code",level:3},{value:"4.Setting up MQTT client",id:"4setting-up-mqtt-client",level:3},{value:"Installation and testing",id:"installation-and-testing",level:2},{value:"Tech Support",id:"tech-support",level:2}],_={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wireless-fall-detection-device"},"Wireless Fall Detection Device"),(0,o.kt)("h2",{id:"preface"},"Preface"),(0,o.kt)("p",null,"As more and more people work hard in their careers, the national economy is beginning to take off. However, the aging of society will also deepen. Without the care of young people, life for the elderly is always difficult and dangerous."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/fall.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Each year, one-third to one-half of all people age 65 and older experience a fall. Falls are the leading cause of injury in older adults and the leading cause of accidental death in those 75 and older. For a person to experience a fall unnoticed can be doubly dangerous. The distinct possibility of an initial injury may further exacerbate the possible consequences if not treated in a short period of time. Statistics show that the most serious consequences are not the direct result of a fall, but rather the result of a delay in assistance and treatment. The consequences of a fall can be greatly reduced if rescuers are alerted in a timely manner."),(0,o.kt)("p",null,"Many seniors live alone in apartments or smaller homes after their children have grown up and left home. After a fall, it is not uncommon for the elderly to be unable to get up on their own or summon help. Therefore, there is a need for an automatic fall detection system that can summon help even if the patient loses consciousness or is unable to get up after a fall."),(0,o.kt)("h2",{id:"hardware"},"Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html"},"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)")," "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html"},"Wio RP2040 mini Dev Board")," to complete this project. ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer-16g.html"},"Grove - 3-Axis Digital Accelerometer (LIS3DHTR)")," can be used as a sensor to detect falls, and ",(0,o.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-RP2040-mini-Dev-Board-p-4933.html"},"Wio RP2040 mini Dev Board")," can be used to process data and send distress information wirelessly. In addition, you need a computer and WiFi.\n\u200b"),(0,o.kt)("h3",{id:"wiring-diagram"},"Wiring Diagram"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/wiring.jpg",alt:"image.png"}),"\n\u200b"),(0,o.kt)("h2",{id:"software"},(0,o.kt)("a",{parentName:"h2",href:"https://wiki.seeedstudio.com/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/#software"},"Software")),(0,o.kt)("h3",{id:"1-install-thonny"},"1. Install Thonny"),(0,o.kt)("p",null,"Easy to get started. Thonny comes with Python 3.7 built-in, so just one simple installer is needed and you're ready to learn to program. First, click ",(0,o.kt)("a",{parentName:"p",href:"https://thonny.org/"},"Thonny.org")," to enter the download page. In the upper right corner of the page, select the Thonny installation package according to your operating system to download.  Double-click the installation package you downloaded to open it, and install it according to the steps."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny1.jpg",alt:null})),(0,o.kt)("p",null,"Now that you have Thonny installed, open the application. You should see the main interface of Thonny:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny2.jpg",alt:null}),"\nThe main interface of Thonny is very simple, divided into the following four parts:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Toolbar: basic common tools, such as new, open, save, run the current script, stop, etc.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Code editor: Thonny's core area, where we will write Python/MicroPython code.  ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Shell: We can run commands here, and the results of the commands will be displayed in the Shell immediately. We also can see outputs of our code in the Shell window.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Interpreter: Here you can select the type of interpreter to compile the program. Click Python 3.7.9, find MicroPython (Raspberry pi Pico) in the pop-up menu, and click OK to switch the interpreter to Pico interpreter. You can also click "Tools>>>Options>>>Interpreter" to select.'))),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny3.jpg",alt:null})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny4.jpg",alt:null})),(0,o.kt)("h3",{id:"2connect-wio-rp2040-mini-dev-board"},"2.Connect Wio RP2040 mini Dev Board"),(0,o.kt)("p",null,'Use the data cable to connect the development board to the computer, and then click the "Restart backend" button on the toolbar. If Wio RP2040 is successfully connected to the computer, you will see the MicroPython version information and device name in the Shell.'),(0,o.kt)("p",null," ",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/thonny5.jpg",alt:null})),(0,o.kt)("h3",{id:"3code"},"3.Code"),(0,o.kt)("p",null,'In order to use 3-Axis Digital Accelerometer, we need to import the library file of the sensor into the memory of Wio RP2040. This is done as follows:\nCopy the following code, paste it into a new thorny editor window, then save it to the development board and rename it to "ACC_ Adxl345.py "'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from machine import I2C\nimport time\n\nADXL345_DEVICE = (0x53)\n\n""" ------- Register names ------- """\nADXL345_DEVID           =0x00\nADXL345_RESERVED1       =0x01\nADXL345_THRESH_TAP      =0x1d\nADXL345_OFSX            =0x1e\nADXL345_OFSY            =0x1f\nADXL345_OFSZ            =0x20\nADXL345_DUR             =0x21\nADXL345_LATENT          =0x22\nADXL345_WINDOW          =0x23\nADXL345_THRESH_ACT      =0x24\nADXL345_THRESH_INACT    =0x25\nADXL345_TIME_INACT      =0x26\nADXL345_ACT_INACT_CTL   =0x27\nADXL345_THRESH_FF       =0x28\nADXL345_TIME_FF         =0x29\nADXL345_TAP_AXES        =0x2a\nADXL345_ACT_TAP_STATUS  =0x2b\nADXL345_BW_RATE         =0x2c\nADXL345_POWER_CTL       =0x2d\nADXL345_INT_ENABLE      =0x2e\nADXL345_INT_MAP         =0x2f\nADXL345_INT_SOURCE      =0x30\nADXL345_DATA_FORMAT     =0x31\nADXL345_DATAX0          =0x32\nADXL345_DATAX1          =0x33\nADXL345_DATAY0          =0x34\nADXL345_DATAY1          =0x35\nADXL345_DATAZ0          =0x36\nADXL345_DATAZ1          =0x37\nADXL345_FIFO_CTL        =0x38\nADXL345_FIFO_STATUS     =0x39\n\nADXL345_BW_1600         =0xF                 #  1111\nADXL345_BW_800          =0xE                 #  1110\nADXL345_BW_400          =0xD                 #  1101\nADXL345_BW_200          =0xC                 #  1100\nADXL345_BW_100          =0xB                 #  1011\nADXL345_BW_50           =0xA                 #  1010\nADXL345_BW_25           =0x9                 #  1001\nADXL345_BW_12           =0x8                 #  1000\nADXL345_BW_6            =0x7                 #  0111\nADXL345_BW_3            =0x6                 #  0110\n\n"""\nInterrupt PINs\nINT1: 0\nINT2: 1\n"""\nADXL345_INT1_PIN            =0x00\nADXL345_INT2_PIN            =0x01\n\n"""Interrupt bit position"""\nADXL345_INT_DATA_READY_BIT  =0x07\nADXL345_INT_SINGLE_TAP_BIT  =0x06\nADXL345_INT_DOUBLE_TAP_BIT  =0x05\nADXL345_INT_ACTIVITY_BIT    =0x04\nADXL345_INT_INACTIVITY_BIT  =0x03\nADXL345_INT_FREE_FALL_BIT   =0x02\nADXL345_INT_WATERMARK_BIT   =0x01\nADXL345_INT_OVERRUNY_BIT    =0x00\n\nADXL345_DATA_READY          =0x07\nADXL345_SINGLE_TAP          =0x06\nADXL345_DOUBLE_TAP          =0x05\nADXL345_ACTIVITY            =0x04\nADXL345_INACTIVITY          =0x03\nADXL345_FREE_FALL           =0x02\nADXL345_WATERMARK           =0x01\nADXL345_OVERRUNY            =0x00\n\nADXL345_OK                  =1                   #  no error\nADXL345_ERROR               =0                   #  indicates error is predent\n\nADXL345_NO_ERROR            =0                   #  initial state\nADXL345_READ_ERROR          =1                   #  problem reading accel\nADXL345_BAD_ARG             =2                   #  bad method argument\n\n\nclass AccelerationAdxl345(object):\n\n    def __init__(self, i2c, addr=ADXL345_DEVICE, drdy=None):\n        self.i2c_device = i2c\n        time.sleep(0.1)\n        #self.rgbMatrixData = [0xFF]*64\n\n    def read(self, reg_base, reg, buf):\n        self.write(reg)\n        time.sleep(.001)\n        self.i2c_device.readfrom_into(59,buf)\n\n    def write(self, buf=None):\n        if buf is not None:\n            self.i2c_device.writeto(ADXL345_DEVICE, buf)\n        # i2c_device.writeto(0x58, bytearray([3,100,100,16,39]))\n\n    def writeTo(self,address, val):\n        dta_send = bytearray([address, val])\n        self.write(dta_send)\n    \n    def readFrom(self, address, num):\n        data_0 = address & 0xff\n        dta_send = bytearray([data_0])\n        self.write(dta_send)\n        time.sleep(.001)\n        result=self.i2c_device.readfrom(ADXL345_DEVICE, num)\n        return result\n\n    def setRegisterBit(self, regAdress,  bitPos,  state):  \n        bytes=self.readFrom(regAdress, 1)\n        for _b in bytes:\n            value = int(_b)\n        if (state):\n            value |= (1 << bitPos)                 \n        else:\n            value &= ~(1 << bitPos)                   \n        self.writeTo(regAdress, value)\n\n    def acc_adxl345_init(self):\n        #Turning on the ADXL345\n        self.writeTo(ADXL345_POWER_CTL, 0)\n        self.writeTo(ADXL345_POWER_CTL, 16)\n        self.writeTo(ADXL345_POWER_CTL, 8)\n\n        self.writeTo(ADXL345_THRESH_ACT, 75)\n        self.writeTo(ADXL345_THRESH_INACT, 75)\n        self.writeTo(ADXL345_TIME_INACT, 10)\n\n        #look of activity movement on this axes - 1 == on; 0 == off\n        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 6, 1)\n        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 5, 1)\n        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 4, 1)\n\n        #look of inactivity movement on this axes - 1 == on; 0 == off\n        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 2, 1)\n        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 1, 1)\n        self.setRegisterBit(ADXL345_ACT_INACT_CTL, 0, 1)\n\n        self.setRegisterBit(ADXL345_TAP_AXES, 2, 0)\n        self.setRegisterBit(ADXL345_TAP_AXES, 1, 0)\n        self.setRegisterBit(ADXL345_TAP_AXES, 0, 0)\n\n        #set values for what is a tap, and what is a double tap (0-255)\n        #setTapThreshold(50); # 62.5mg per increment\n        self.writeTo(ADXL345_THRESH_TAP, 50)\n\n        self.writeTo(ADXL345_DUR, 15)\n\n        self.writeTo(ADXL345_LATENT, 80)\n\n        #setDoubleTapWindow(200); # 1.25ms per increment\n        self.writeTo(ADXL345_WINDOW, 200)\n\n        #set values for what is considered freefall (0-255)\n\n        self.writeTo(ADXL345_THRESH_FF, 7)\n\n        self.writeTo(ADXL345_TIME_FF, 45)\n        #setting all interrupts to take place on int pin 1\n        #I had issues with int pin 2, was unable to reset it\n\n        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_SINGLE_TAP_BIT,   ADXL345_INT1_PIN)\n        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_DOUBLE_TAP_BIT,   ADXL345_INT1_PIN)\n        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_FREE_FALL_BIT,    ADXL345_INT1_PIN)\n        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_ACTIVITY_BIT,     ADXL345_INT1_PIN)\n        self.setRegisterBit(ADXL345_INT_MAP, ADXL345_INT_INACTIVITY_BIT,   ADXL345_INT1_PIN)\n\n        #register interrupt actions - 1 == on; 0 == off\n        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_SINGLE_TAP_BIT, 1)\n        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_DOUBLE_TAP_BIT, 1)\n        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_FREE_FALL_BIT,  1)\n        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_ACTIVITY_BIT,   1)\n        self.setRegisterBit(ADXL345_INT_ENABLE, ADXL345_INT_INACTIVITY_BIT, 1)\n\n    def acc_adxl345_read_xyz(self):\n        ADXL345_TO_READ = (6)\n        _buff = self.readFrom(ADXL345_DATAX0, ADXL345_TO_READ) #read the acceleration data from the ADXL345\n        if _buff[1] <= 0:\n            x=_buff[0]\n        else:\n            x=(_buff[0]-255)\n\n        if _buff[3] <= 0:\n            y=_buff[2]\n        else:\n            y=(_buff[2]-255)\n\n        if _buff[5] <= 0:\n            z=_buff[4]\n        else:\n            z=(_buff[4]-255)\n\n        #x = int(((_buff[1]) << 8) | _buff[0]) \n        #y = int(((_buff[3]) << 8) | _buff[2]) \n        #z = int(((_buff[5]) << 8) | _buff[4]) \n\n        #print("%d, %d, %d\\r\\n", x, y, z) \n        return [x,y,z]\n\n    def acc_adxl345_read_acc(self):\n        __Gains = [0.00376390, 0.00376009, 0.00389265]\n        xyz=self.acc_adxl345_read_xyz()\n\n        ax = xyz[0] * __Gains[0]\n        ay = xyz[1] * __Gains[1]\n        az = xyz[2] * __Gains[2]\n        return [ax,ay,az]\n\n    def get_acc_adxl345_property(self,xyz):\n        axyz=self.acc_adxl345_read_acc()\n        if(xyz == 0):\n            return axyz[0]\n        if(xyz == 1):\n            return axyz[1]\n        if(xyz == 2):\n            return axyz[2]\n\n"""\nacceleration = AccelerationAdxl345()\nacceleration.acc_adxl345_init()\nacceleration.get_acc_adxl345_property(0)\nacceleration.get_acc_adxl345_property(1)\nacceleration.get_acc_adxl345_property(2)\n"""\n\n\n')),(0,o.kt)("p",null,"Then create a new program window to write the following code."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import network\nimport mqtt\nfrom Acc_Adxl345 import AccelerationAdxl345\nfrom machine import Pin,I2C\nfrom time import sleep\ni2c = I2C(0,sda = Pin(4),scl= Pin(5))\nax = AccelerationAdxl345(i2c)\nax.acc_adxl345_init()\n\nN1 = network.WLAN_SPI(network.STA_IF)\nN1.active(True)\nN1.connect(\"CHCK\",\"depot0510\")\nsleep(1)\nprint('network information:', N1.ifconfig())\nled = Pin(13, Pin.OUT)\nbutton = Pin(12,Pin.IN,Pin.PULL_UP)\nled.value(1)\n\nSERVER = 'mqtt.p2hp.com'\nCLIENT_ID = 'Wio_RP2040'\nTOPIC = 'Security_status'\n\ndef mqtt_callback(topic):\n    print('topic: {}'.format(topic[0]))\n    print('msg:{}'.format(topic[1]))\n    \ncl = mqtt.MQTTClient(CLIENT_ID, SERVER, mqtt_port = 1883)\ncl.connect()\ncl.set_callback(mqtt_callback)\n\nval_last = 1\nprint(\"ready\")\ncl.publish(TOPIC,\"ready\")\n\nwhile True:\n    a = ax.acc_adxl345_read_acc()\n    b = ax.acc_adxl345_read_acc()\n    for i in range(0,3):\n        a[0] = a[i] * a[i]\n        b[0] = b[i] * b[i]\n    if a[0] - b[0] > 0.4 or b[0] - a[0] > 0.4:\n        cl.publish(TOPIC,\"help!\")\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note that on line 12 of the program, change your correct WiFi name and password."),"\n",(0,o.kt)("strong",{parentName:"p"},"\u200b")),(0,o.kt)("h3",{id:"4setting-up-mqtt-client"},"4.Setting up MQTT client"),(0,o.kt)("p",null,"MQTT is a Client Server publish/subscribe messaging transport protocol. The client can work as a publisher or subscriber or both."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt1.jpg",alt:null})),(0,o.kt)("p",null,'The publisher can create a topic with messages attached to the topic. For example, I can create a new topic "Today\'s Weather" and the message content is "25 degrees Celsius", and then sent the message to the Server. After receiving the topic message, the publisher distributes the information to any clients that have subscribed to that topic. That is, the subscriber will receive the message of "25 degrees Celsius" only if it subscribes to the topic "Today\'s Weather". If the subscriber does not subscribe to the topic of  "Today\'s Weather", no matter what message the publisher sends, the subscriber will not receive the message.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt2.jpg",alt:null})),(0,o.kt)("p",null,"Download the MQTTX server software and install it on the computer, and then configure the MQTT server."),(0,o.kt)("hr",null),(0,o.kt)("p",null,'We will use the free server of "mqtt.p2hp.com" in this project. ',(0,o.kt)("strong",{parentName:"p"},"Online server")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Address: mqtt.p2hp.com"),(0,o.kt)("li",{parentName:"ul"},"Ports: 1883 (TCP), 8083 (WebSocket)"),(0,o.kt)("li",{parentName:"ul"},"Type: EMQ"),(0,o.kt)("li",{parentName:"ul"},"MQTT V3.1.1/V5.0 compatible")),(0,o.kt)("hr",null),(0,o.kt)("p",null,'Enter the MQTTX software to create a new connection, fill in the name, server, port, subject, and then click "Connect" to connect to the server.\n',(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt3.jpg",alt:"image.png"})),(0,o.kt)("p",null,"After the connection is successful, there will be a pop-up in the upper right corner of the software."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt4.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Then set the topic and message below. "),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt5.jpg",alt:"image.png"})),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt6.jpg",alt:"image.png"})),(0,o.kt)("p",null,"When data is received, the number of messages is displayed at the top. If you don't see the message, click on the subscription topic.\n",(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt7.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Here, the deployment of the MQTT client is completed. Let's go back to the Thorny editor to run the code, and then drop the 3-axis digital accelerator from a high place to observe whether the mqtt client has received the message."),(0,o.kt)("iframe",{width:"560",height:"315",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/show.mp4",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/mqtt8.jpg",alt:"image.png"})),(0,o.kt)("h2",{id:"installation-and-testing"},"Installation and testing"),(0,o.kt)("p",null,"If you get the message successfully, congratulations you have done most of the work. Next, you just need to connect the battery to the development board and fix the device on a 5cm * 5cm cardboard."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/sample.jpg",alt:"image.png"})),(0,o.kt)("p",null,"Finally, put it into a cloth pocket. This simple fall detection device is complete! So far, this project is just a simple experimental prototype. There may be some mistouch in practical application. You can also give me feedback and we will optimize this project together."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio_RP2040_mini_Dev_Board-Onboard_Wifi/Wireless-Fall-Detection-Device/device.jpg",alt:"image.png"})),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,o.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,o.kt)("div",null,(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
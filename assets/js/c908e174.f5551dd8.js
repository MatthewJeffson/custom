"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[61060],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>_});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=i,_=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(_,o(o({ref:t},u),{},{components:r})):n.createElement(_,o({ref:t},u))}));function _(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16733:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={description:"Grove - 3 Axis Digital Accelerometer(\xb116g)",title:"Grove - 3 Axis Digital Accelerometer(\xb116g)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Accelerometer-16g",last_update:{date:"1/5/2023",author:"shuxu hu"}},o=void 0,s={unversionedId:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer-16g",id:"Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer-16g",title:"Grove - 3 Axis Digital Accelerometer(\xb116g)",description:"Grove - 3 Axis Digital Accelerometer(\xb116g)",source:"@site/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer-16g.md",sourceDirName:"Sensor/Grove/Grove_Sensors/Accelerometer",slug:"/Grove-3-Axis_Digital_Accelerometer-16g",permalink:"/custom/Grove-3-Axis_Digital_Accelerometer-16g",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Grove/Grove_Sensors/Accelerometer/Grove-3-Axis_Digital_Accelerometer-16g.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1672876800,formattedLastUpdatedAt:"Jan 5, 2023",frontMatter:{description:"Grove - 3 Axis Digital Accelerometer(\xb116g)",title:"Grove - 3 Axis Digital Accelerometer(\xb116g)",keywords:["Grove"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Grove-3-Axis_Digital_Accelerometer-16g",last_update:{date:"1/5/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Sensor - Accelerometer",permalink:"/custom/Sensor_accelerometer"},next:{title:"Grove - 3-Axis Analog Accelerometer",permalink:"/custom/Grove-3-Axis_Analog_Accelerometer"}},l={},c=[{value:"Specifications",id:"specifications",level:2},{value:"Demonstration",id:"demonstration",level:2},{value:"Play with Codecraft",id:"play-with-codecraft",level:3},{value:"Hardware",id:"hardware",level:4},{value:"Software",id:"software",level:4},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Projects",id:"projects",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("hr",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove-3-Axis_16g_v1.3.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"3-Axis Digital Accelerometer is the key part in projects like orientation detection, gesture detection and Motion detection. This 3-Axis Digital Accelerometer(\xb116g) is based on low power consumption IC ADXL345. It features up to 10,000g high shock survivability and configurable Samples per Second rate. For generous applications that don't require too large measurement range, this is a great choice because it's durable, energy saving and cost-efficient."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-3-Axis-Digital-Accelerometer%28%C2%B116g%29-p-1156.html"},(0,i.kt)("p",null,(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/common/Get_One_Now_Banner.png",alt:"pir",width:600,height:"auto"})))),(0,i.kt)("h2",{id:"specifications"},"Specifications"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Working voltage: 3.0 - 5.5V"),(0,i.kt)("li",{parentName:"ul"},"Test Range: \xb116"),(0,i.kt)("li",{parentName:"ul"},"Sensitivity: 3.9mg / LSB"),(0,i.kt)("li",{parentName:"ul"},"Standby Current: 0.1\u03bcA\uff08Under stand mode Vcc = 2.5 V (typical)\uff09"),(0,i.kt)("li",{parentName:"ul"},"10000 g high shock survivability"),(0,i.kt)("li",{parentName:"ul"},"ECOPACK\xaeRoHS and \u201cGreen\u201d compliant"),(0,i.kt)("li",{parentName:"ul"},"Suli-compatible Library")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"- More details about Grove modules please refer to [Grove System](https://wiki.seeedstudio.com/Grove_System/)\n"))),(0,i.kt)("h2",{id:"demonstration"},"Demonstration"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"With Arduino")),(0,i.kt)("p",null,"Every accelerometer has been individually tested before shipping to you. But in rare cases, you might need to reset the zero-offset by yourself.\nHere below we show you how to read the raw data and obtain data in the unit of g, AKA g-force, from this accelerometer."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Grove_-_3-Axis_Digital_Accelerometer_ADXL345_connect_photo.JPG",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step1:")," Plug it onto the I2C port of your Grove - Base Shield."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step2:")," Download the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Accelerometer_ADXL345"},"Digital Accelerometer(\xb116g) Library")," .zip and unpack it into arduino-1.0\\libraries in your Arduino installation folder. If you don't know how to install library for Arduino, please follow the toturial ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/How_to_install_Arduino_Library/"},"How to install an Arduino library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step3\uff1a")," If you  have the library installed, Open the demo code directly by the path:\n",(0,i.kt)("strong",{parentName:"li"}," File(\u6587\u4ef6) -> Example(\u793a\u4f8b) ->DigitalAccelerometer_ADXL345->ADXL345_demo_code. ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step4\uff1a")," Upload the code and open the serial monitor(usually it is on the right up corner). Please refer to the toturial ",(0,i.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/Upload_Code/"},"Upload code")," if you do not know how to upload."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Step5\uff1a")," The result will be showed as the format in below image, shake the grove and you will find the number changing.")),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/Digital_Accelerometer.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,'The outputs of this sensor consist of two parts: raw data and 3-axis acceleration info converted into the unit of gravity, "g".'),(0,i.kt)("h3",{id:"play-with-codecraft"},"Play with Codecraft"),(0,i.kt)("h4",{id:"hardware"},"Hardware"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Using a Grove cable connect Grove - 3-Axis Digital Accelerometer(\xb116g) to Seeeduino's I2C port. If you are using Arduino, please take advantage of a Base Shield."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Link Seeedino/Arduino to your PC via an USB cable."),(0,i.kt)("h4",{id:"software"},"Software"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1.")," Open ",(0,i.kt)("a",{parentName:"p",href:"https://ide.chmakered.com/"},"Codecraft"),", add Arduino support, and drag a main procedure to working area."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"If this is your first time using Codecraft, see also [Guide for Codecraft using Arduino](https://wiki.seeedstudio.com/Guide_for_Codecraft_using_Arduino/).\n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2.")," Drag blocks as picture below or open the cdc file which can be downloaded at the end of this page."),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/img/cc_3_Axis_Digital_Accelerometer.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",null,"Upload the program to your Arduino/Seeeduino."),(0,i.kt)("admonition",{type:"success"},(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"When the code finishes uploaded, you will see the acceleration displayed in the Serial Monitor. \n"))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"With Raspberry Pi")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step1:")," You should have got a raspberry pi and a grovepi or grovepi+.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step2:")," You should have completed configuring the development enviroment, otherwise follow ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/GrovePi_Plus/#Introducing_the_GrovePi.2B"},"here"),"."))),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9-create-tab.png",alt:"pir",width:600,height:"auto"})),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/images/C9_newfile.jpg",alt:"pir",width:600,height:"auto"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step3:")," Connection"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plug the sensor to grovepi socket i2c-x(1~3) by using a grove cable."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Step4:")," Navigate to the demos' directory:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"cd yourpath/GrovePi/Software/Python/\n")),(0,i.kt)("p",null,"To see the code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  nano grovepi_tilt_switch.py   # "Ctrl+x" to exit #\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import smbus\nfrom time import sleep\n\n# select the correct i2c bus for this revision of Raspberry Pi\nrevision = ([l[12:-1] for l in open(\'/proc/cpuinfo\',\'r\').readlines() if l[:8]=="Revision"]+[\'0000\'])[0]\nbus = smbus.SMBus(1 if int(revision, 16) >= 4 else 0)\n\n# ADXL345 constants\nEARTH_GRAVITY_MS2   = 9.80665\nSCALE_MULTIPLIER    = 0.004\n\nDATA_FORMAT         = 0x31\nBW_RATE             = 0x2C\nPOWER_CTL           = 0x2D\n\nBW_RATE_1600HZ      = 0x0F\nBW_RATE_800HZ       = 0x0E\nBW_RATE_400HZ       = 0x0D\nBW_RATE_200HZ       = 0x0C\nBW_RATE_100HZ       = 0x0B\nBW_RATE_50HZ        = 0x0A\nBW_RATE_25HZ        = 0x09\n\nRANGE_2G            = 0x00\nRANGE_4G            = 0x01\nRANGE_8G            = 0x02\nRANGE_16G           = 0x03\n\nMEASURE             = 0x08\nAXES_DATA           = 0x32\n\nclass ADXL345:\n\n    address = None\n\n    def __init__(self, address = 0x53):\n        self.address = address\n        self.setBandwidthRate(BW_RATE_100HZ)\n        self.setRange(RANGE_2G)\n        self.enableMeasurement()\n\n    def enableMeasurement(self):\n        bus.write_byte_data(self.address, POWER_CTL, MEASURE)\n\n    def setBandwidthRate(self, rate_flag):\n        bus.write_byte_data(self.address, BW_RATE, rate_flag)\n\n    # set the measurement range for 10-bit readings\n    def setRange(self, range_flag):\n        value = bus.read_byte_data(self.address, DATA_FORMAT)\n\n        value &= ~0x0F;\n        value |= range_flag;\n        value |= 0x08;\n\n        bus.write_byte_data(self.address, DATA_FORMAT, value)\n\n    # returns the current reading from the sensor for each axis\n    #\n    # parameter gforce:\n    #    False (default): result is returned in m/s^2\n    #    True           : result is returned in gs\n    def getAxes(self, gforce = False):\n        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)\n\n        x = bytes[0] | (bytes[1] << 8)\n        if(x & (1 << 16 - 1)):\n            x = x - (1<<16)\n\n        y = bytes[2] | (bytes[3] << 8)\n        if(y & (1 << 16 - 1)):\n            y = y - (1<<16)\n\n        z = bytes[4] | (bytes[5] << 8)\n        if(z & (1 << 16 - 1)):\n            z = z - (1<<16)\n\n        x = x * SCALE_MULTIPLIER\n        y = y * SCALE_MULTIPLIER\n        z = z * SCALE_MULTIPLIER\n\n        if gforce == False:\n            x = x * EARTH_GRAVITY_MS2\n            y = y * EARTH_GRAVITY_MS2\n            z = z * EARTH_GRAVITY_MS2\n\n        x = round(x, 4)\n        y = round(y, 4)\n        z = round(z, 4)\n\n        return {"x": x, "y": y, "z": z}\n\nif __name__ == "__main__":\n    # if run directly we\'ll just create an instance of the class and output\n    # the current readings\n    adxl345 = ADXL345()\n\n    axes = adxl345.getAxes(True)\n    print "ADXL345 on address 0x%x:" % (adxl345.address)\n    print "   x = %.3fG" % ( axes[\'x\'] )\n    print "   y = %.3fG" % ( axes[\'y\'] )\n    print "   z = %.3fG" % ( axes[\'z\'] )\n')),(0,i.kt)("p",null,"5.Run the demo."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    sudo python grove_tilt_switch.py\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"With Beaglebone Green")),(0,i.kt)("p",null,"To begin editing programs that live on BBG, you can use the Cloud9 IDE.\nAs a simple exercise to become familiar with Cloud9 IDE, creating a simple application to blink one of the 4 user programmable LEDs on the BeagleBone is a good start."),(0,i.kt)("p",null,"If this is your first time to use Cloud9 IDE, please follow this link."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step1: Set the Grove - UART socket as a Grove - GPIO Socket, just follow this link.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'Step2: Click the "+" in the top-right to create a new file.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step3: Copy and paste the following code into the new tab."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import smbus\nimport time\n\nbus = smbus.SMBus(1)\n\n# ADXL345 device address\nADXL345_DEVICE = 0x53\n\n# ADXL345 constants\nEARTH_GRAVITY_MS2   = 9.80665\nSCALE_MULTIPLIER    = 0.004\n\nDATA_FORMAT         = 0x31\nBW_RATE             = 0x2C\nPOWER_CTL           = 0x2D\n\nBW_RATE_1600HZ      = 0x0F\nBW_RATE_800HZ       = 0x0E\nBW_RATE_400HZ       = 0x0D\nBW_RATE_200HZ       = 0x0C\nBW_RATE_100HZ       = 0x0B\nBW_RATE_50HZ        = 0x0A\nBW_RATE_25HZ        = 0x09\n\nRANGE_2G            = 0x00\nRANGE_4G            = 0x01\nRANGE_8G            = 0x02\nRANGE_16G           = 0x03\n\nMEASURE             = 0x08\nAXES_DATA           = 0x32\n\nclass ADXL345:\n\n    address = None\n\n    def __init__(self, address = ADXL345_DEVICE):\n        self.address = address\n        self.setBandwidthRate(BW_RATE_100HZ)\n        self.setRange(RANGE_2G)\n        self.enableMeasurement()\n\n    def enableMeasurement(self):\n        bus.write_byte_data(self.address, POWER_CTL, MEASURE)\n\n    def setBandwidthRate(self, rate_flag):\n        bus.write_byte_data(self.address, BW_RATE, rate_flag)\n\n    # set the measurement range for 10-bit readings\n    def setRange(self, range_flag):\n        value = bus.read_byte_data(self.address, DATA_FORMAT)\n\n        value &= ~0x0F;\n        value |= range_flag;\n        value |= 0x08;\n\n        bus.write_byte_data(self.address, DATA_FORMAT, value)\n\n    # returns the current reading from the sensor for each axis\n    #\n    # parameter gforce:\n    #    False (default): result is returned in m/s^2\n    #    True           : result is returned in gs\n    def getAxes(self, gforce = False):\n        bytes = bus.read_i2c_block_data(self.address, AXES_DATA, 6)\n\n        x = bytes[0] | (bytes[1] << 8)\n        if(x & (1 << 16 - 1)):\n            x = x - (1<<16)\n\n        y = bytes[2] | (bytes[3] << 8)\n        if(y & (1 << 16 - 1)):\n            y = y - (1<<16)\n\n        z = bytes[4] | (bytes[5] << 8)\n        if(z & (1 << 16 - 1)):\n            z = z - (1<<16)\n\n        x = x * SCALE_MULTIPLIER\n        y = y * SCALE_MULTIPLIER\n        z = z * SCALE_MULTIPLIER\n\n        if gforce == False:\n            x = x * EARTH_GRAVITY_MS2\n            y = y * EARTH_GRAVITY_MS2\n            z = z * EARTH_GRAVITY_MS2\n\n        x = round(x, 4)\n        y = round(y, 4)\n        z = round(z, 4)\n\n        return {"x": x, "y": y, "z": z}\n\nif __name__ == "__main__":\n    # if run directly we\'ll just create an instance of the class and output\n    # the current readings\n    adxl345 = ADXL345()\n\n    while True:\n        axes = adxl345.getAxes(True)\n        print "ADXL345 on address 0x%x:" % (adxl345.address)\n        print "   x = %.3fG" % ( axes[\'x\'] )\n        print "   y = %.3fG" % ( axes[\'y\'] )\n        print "   z = %.3fG" % ( axes[\'z\'] )\n        time.sleep(2)\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step4: Save the file by clicking the disk icon with with the .py extension..")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step5: Connect Grove - 3-Axis Digital Accelerometer(\xb116g) to Grove I2C socket on BBG.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Step6: Run the code. You'll sfind that the terminal outputs Gravity info every 2 seconds."))),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove-3-Axis-Digital-Accelerometer=16g-v1.2.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/202000067_PCBA-Grove%203%20Axis%20Digital%20Accelerometer%C2%B116g%20v1.2.zip"},"Eagle file.zip")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/ACC_Adxl345_Suli"},"Suli-compatible Library")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/ADXL345_datasheet.pdf"},"ADXL345 datasheet.pdf")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/Seeed-Studio/Accelerometer_ADXL345"},"github repository for 3-Axis Digital Accelerometer(\xb116g)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/resources/DigitalAccelerometer_ADXL345.zip"},"Grove - 3-Axis Digital Accelerometer(\xb116g)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/Grove_3_Axis_Digital_Accelerometer_Plus_Minus_16g/res/Grove_3_Axis_Digital_Acceleromete_CDC_File.zip"},"Codecraft CDC File"))),(0,i.kt)("h2",{id:"projects"},"Projects"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Grove - Introduction in 3-Axis Digital Accelerometer"),": How to use a 3-axis digital accelerometer."),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/ingo-lohs/grove-introduction-in-3-axis-digital-accelerometer-ea05c3/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
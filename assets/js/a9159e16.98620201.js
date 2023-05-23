"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[60980],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),l=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},c=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(i),u=a,h=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return i?n.createElement(h,r(r({ref:t},c),{},{components:i})):n.createElement(h,r({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=i[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}u.displayName="MDXCreateElement"},44673:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=i(87462),a=(i(67294),i(3905));const o={description:"Getting Started with SenseCAP ONE Compact Weather Sensor",title:"Getting Started with SenseCAP ONE Compact Weather Sensor",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor",last_update:{date:"4/14/2023",author:"Yvonne"}},r="Getting Started with SenseCAP ONE Compact Weather Sensor",s={unversionedId:"Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/Tutorials-Getting Started with SenseCAP ONE Compact Weather Sensor",id:"Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/Tutorials-Getting Started with SenseCAP ONE Compact Weather Sensor",title:"Getting Started with SenseCAP ONE Compact Weather Sensor",description:"Getting Started with SenseCAP ONE Compact Weather Sensor",source:"@site/docs/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/Tutorials-Getting Started with SenseCAP ONE Compact Weather Sensor.md",sourceDirName:"Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station",slug:"/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor",permalink:"/custom/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SenseCAP/SenseCAP_ONE_Weather_Station/SenseCAP_ONE_Compact_Weather_Station/Tutorials-Getting Started with SenseCAP ONE Compact Weather Sensor.md",tags:[],version:"current",lastUpdatedBy:"Yvonne",lastUpdatedAt:1681430400,formattedLastUpdatedAt:"Apr 14, 2023",frontMatter:{description:"Getting Started with SenseCAP ONE Compact Weather Sensor",title:"Getting Started with SenseCAP ONE Compact Weather Sensor",keywords:["SenseCAP"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Getting_Started_with_SenseCAP_ONE_Compact_Weather_Sensor",last_update:{date:"4/14/2023",author:"Yvonne"}},sidebar:"ProductSidebar",previous:{title:"SenseCAP ONE Compact Weather Station Introduction",permalink:"/custom/SenseCAP-ONE-Compact-Weather-Station-Introduction"},next:{title:"SenseCAP S2100 LoRaWAN Data Logger",permalink:"/custom/Sensor/SenseCAP/SenseCAP_Data_Logger/Data_Logger"}},d={},l=[{value:"Diagram",id:"diagram",level:2},{value:"Device Interface Introduction",id:"device-interface-introduction",level:3},{value:"Connect with USB Cable",id:"connect-with-usb-cable",level:3},{value:"M12 Cable",id:"m12-cable",level:3},{value:"Install the device.",id:"install-the-device",level:3},{value:"Configure the device via USB port",id:"configure-the-device-via-usb-port",level:2},{value:"SenseCAP ONE Configuration Tool",id:"sensecap-one-configuration-tool",level:2},{value:"Serial debug tool",id:"serial-debug-tool",level:2},{value:"Modbus-RTU Protocol",id:"modbus-rtu-protocol",level:2},{value:"Modbus-RTU Protocol Message Format",id:"modbus-rtu-protocol-message-format",level:3},{value:"Register Address Definition",id:"register-address-definition",level:3},{value:"Modbus-RTU Read",id:"modbus-rtu-read",level:3},{value:"Noise sensor",id:"noise-sensor",level:3},{value:"ASCII Protocol",id:"ascii-protocol",level:2},{value:"Command definition",id:"command-definition",level:3},{value:"Query Command Format",id:"query-command-format",level:3},{value:"Setting Command Format",id:"setting-command-format",level:3},{value:"Command List",id:"command-list",level:3},{value:"SDI-12",id:"sdi-12",level:2},{value:"SDI-12 command and response",id:"sdi-12-command-and-response",level:3},{value:"SDI-12 Read",id:"sdi-12-read",level:3},{value:"Modbus error code",id:"modbus-error-code",level:2},{value:"ASCII error code",id:"ascii-error-code",level:2},{value:"SDI-12 error code",id:"sdi-12-error-code",level:2}],c={toc:l},p="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-sensecap-one-compact-weather-sensor"},"Getting Started with SenseCAP ONE Compact Weather Sensor"),(0,a.kt)("h1",{id:"pre-installation"},"Pre-Installation"),(0,a.kt)("h2",{id:"diagram"},"Diagram"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image1.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image2.png"})),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"device-interface-introduction"},"Device Interface Introduction"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image3.png"})),(0,a.kt)("p",null,"There are two connectors at the bottom of the device."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"USB Type-C interface allows you to connect your computer with a normal USB Type-C cable to the device for configuration.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The main data interface can be connected to the M12 8-pin cable, supporting multiple bus protocols"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image4.png"})),(0,a.kt)("h3",{id:"connect-with-usb-cable"},"Connect with USB Cable"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image5.png"})),(0,a.kt)("h3",{id:"m12-cable"},"M12 Cable"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image6.png"})),(0,a.kt)("p",null,"The device adopts an M12 8-pin connector, the different colored pins provide power and data communication (as shown in the above diagram)."),(0,a.kt)("p",null,"When working with the RS-485, you can connect only 4 wires (not using a heating function), and the rest can be individually wrapped with tape to prevent short circuit"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image7.png"})),(0,a.kt)("p",null,"The holes of the cable and the pins of the device connector must be aligned when the cable is plugged in."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image8.png"})),(0,a.kt)("p",null,"Plugin the cable and tighten it clockwise"),(0,a.kt)("p",null,"Note: the cable is aimed at the bottom before inserting it into the bottom. Otherwise, the pins are skewed may cause the communication to be abnormal."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image9.png"})),(0,a.kt)("p",null,"When using the device with a heating function, a separate 24V (24V@1A is recommended) power supply is required. Gray wire 5 is connected to the\nnegative of the power supply, and pink wire 6 is connected to the positive pole of the power supply."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image10.png"})),(0,a.kt)("h3",{id:"install-the-device"},"Install the device."),(0,a.kt)("p",null,"There are two major installation methods, either mounted on a pole with a sleeve or a platform with a flange plate."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image11.png"})),(0,a.kt)("p",null,"The size of the sleeve is shown below."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image12.png"})),(0,a.kt)("p",null,"It is recommended that the diameter of the pole should be less than or equal to 75cm."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image13.png"})),(0,a.kt)("p",null,"The dimension of the flange plate is shown below."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image14.png"})),(0,a.kt)("h1",{id:"devices-operating-mode"},"Device's Operating Mode"),(0,a.kt)("p",null,"After installation, you can power on the device, configure it and collect data from the device."),(0,a.kt)("p",null,"The device has two operating modes, ",(0,a.kt)("strong",{parentName:"p"},"configuration mode, and"),"\n",(0,a.kt)("strong",{parentName:"p"},"working mode.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image15.png"})),(0,a.kt)("h2",{id:"configure-the-device-via-usb-port"},"Configure the device via USB port"),(0,a.kt)("p",null,"There is a waterproof round cover at the bottom of the device. Turn it counterclockwise to remove this cover, and you can see a USB Type-C connector and a configuration button."),(0,a.kt)("p",null,"Connect the device to your computer with a USB Type-C cable. The computer will automatically install the device driver. After the driver\nis successfully installed, you can see a serial port in the device's manager."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image16.png"})),(0,a.kt)("p",null,"If the driver is not installed automatically, click this link to ",(0,a.kt)("a",{parentName:"p",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"manually\ndownload")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"install")," the ",(0,a.kt)("a",{parentName:"p",href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"},"driver"),".\uff08The\nversion is CP210x Windows Drivers\uff09"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image17.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"There are two methods to configure the device:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SenseCAP ONE Configuration Tool")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Serial debug tool"))),(0,a.kt)("h2",{id:"sensecap-one-configuration-tool"},"SenseCAP ONE Configuration Tool"),(0,a.kt)("p",null,"SenseCAP ONE Configuration Tool offers a graphical interface for you to configure the device. And you can download the tool from the GitHub link below:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases"},"https://github.com/Seeed-Solution/SenseCAP-One-Configuration-Tool/releases")),(0,a.kt)("p",null,"Select the software for the respective operating system, Windows, macOS, or Linux based on your needs."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image18.png"})),(0,a.kt)("p",null,"The next image shows the main interface of the SenseCAP ONE Configuration Tool."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image19.png"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the software, click on the pull-down box at the serial port, and select the corresponding serial port of the device.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the Baud rate to 9600.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click connect, if the connection is successful, the sensor data area on the right will show the corresponding measurements."))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image20.png"})),(0,a.kt)("p",null,'Click Settings to enter the device settings, and click"Read From Device" to obtain information about the device.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image21.png"})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select the communication protocol. In the example here we choose the RS-485 Modbus RTU.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image22.png"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},'Modify the Modbus address: write the address in the Modbus address, and then click "Write to Device".')),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image23.png"})),(0,a.kt)("p",null,'On the configuration page, you can modify the following: device name, data type, and data upload interval. After any modification, you will need to click "Write to Device" for the changes to take effect.'),(0,a.kt)("p",null,"In application settings, you can set the cycle for the tool to read sensor data, with the minimum as 2S, and a dot range for the curve."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image24.png"})),(0,a.kt)("p",null,'Click "Firmware Update" to update the device firmware. Please contact sales or technical support at (',(0,a.kt)("a",{parentName:"p",href:"mailto:sensecap@seeed.cc"},"sensecap@seeed.cc"),") to get the firmware."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image25.png"})),(0,a.kt)("p",null,'On the upgrade page, you will need to choose to update the mainboard firmware or the driver board firmware. Select the firmware file at your local repository, and click "Update Now". If there is an unexpected power break during the update process, the update won\'t be executed. You will need to go through the same process to update the firmware.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image26.png"})),(0,a.kt)("h2",{id:"serial-debug-tool"},"Serial debug tool"),(0,a.kt)("p",null,"The communication settings are as follows:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image27.png"})),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image28.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In the Serial Debug Assistant, select the corresponding COM port.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Check the "click Enter to start a new line" check box.')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the baud rate to 9,600.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Send in the send area.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If you receive the corresponding 0XA message in the serial receive window, the configuration is successful. If not, please check the COM port and the baud rate."))),(0,a.kt)("p",null,"Please check the detailed ASIIC command in the next chapter."),(0,a.kt)("h1",{id:"communication-protocols"},"Communication Protocols"),(0,a.kt)("p",null,"The device supports the following communication protocols:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image29.png"})),(0,a.kt)("h2",{id:"modbus-rtu-protocol"},"Modbus-RTU Protocol"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Protocol communication parameters")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:"{800}",src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image31.png"})),(0,a.kt)("h3",{id:"modbus-rtu-protocol-message-format"},"Modbus-RTU Protocol Message Format"),(0,a.kt)("p",null,"Sensor data is stored in the Input Register and is read-only."),(0,a.kt)("p",null,"The device address and the communication baud rate of RS-485 are stored in the Holding Register and can be modified."),(0,a.kt)("p",null,"Each register is 16 bits and takes up 2 bytes."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Read the message from the input register.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image32.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Read and write the holding register.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image33.png"})),(0,a.kt)("h3",{id:"register-address-definition"},"Register Address Definition"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image34.png"})),(0,a.kt)("h3",{id:"modbus-rtu-read"},"Modbus-RTU Read"),(0,a.kt)("p",null,"Here is an example of the ",(0,a.kt)("strong",{parentName:"p"},"Modbus Poll tool")),(0,a.kt)("p",null,"(download from ",(0,a.kt)("a",{parentName:"p",href:"https://www.modbustools.com/download.html"},"https://www.modbustools.com/download.html"),")."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image35.png"})),(0,a.kt)("p",null,"Configuration connection parameters: Baud rate 9600bps, 8 Data bits,\nNone Parity, 1 Stop bits."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image36.png"})),(0,a.kt)("p",null,"Read the air temperature register 0x0000 to 0x0001, click Setup, and select Read/Write Definition"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image37.png"})),(0,a.kt)("p",null,"Set the default slave ID(5-in-1 is 10\uff0c7-in-1 is 20\uff0c9-in-1 is 38), function code 04, starting address 0, quantity (5-in-1 is 6\uff0c7-in-1 is\n28\uff0c9-in-1 is 32);"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image38.png"})),(0,a.kt)("p",null,"Now the computer reads the sensor data every 1 second, and the measurement (line 0 and line 1) is shown below picture, after dividing the measurement by 1000, it is the true temperature value, 28300/1000 = 28.3 \xb0C"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image39.png"})),(0,a.kt)("p",null,"On the right, you can check the raw sent and received data packages."),(0,a.kt)("p",null,"When the temperature is positive:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Host sends 01 04 00 00 00 02 71 CB")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Slave responses 01 04 04 00 00 6E 8C D6 41")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Return temperature data 0x00006E8C (Hex), converted to decimal = 28300, get the corresponding air temperature by dividing it through 1000, air temperature = 28300/1000 = 28.3 \xb0C"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"When the temperature is negative:")),(0,a.kt)("p",null,"The temperature needs to be obtained through a complement calculation."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Host sends 01 04 00 00 00 02 71 CB")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Slave responses 01 04 04 FF FF FC 18 D6 41")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Returned temperature data FFFFFC18H (Hex complement).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The original code is - (FF FF FC 18-1 = FF FF FC 17) = 80 00 03 E8(Hex) = -1000 (Decimal).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then the temperature measurement is -1000/1000 = -1\xb0"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"S500 decode:")),(0,a.kt)("p",null,"Read register 0x0000~0x0005."),(0,a.kt)("p",null,"Send command\uff1a0A 04 00 00 00 06 71 73\uff08Check code\uff09\uff1b"),(0,a.kt)("p",null,"Return\uff1a26 04 40 00 00 70 80\uff08Temperature\uff0900 00 95 10\uff08Humidity\uff09 06 07 94 40\uff08Air pressure\uff0999 09\uff08Check code\uff09\uff1bRead register 0x0008~0x0013. Send commond\uff1a0A 04 00 08 00 0C 70 B6\uff08Check code\uff09\uff1b"),(0,a.kt)("p",null,"Return\uff1a0A 04 0C 00 00 00 00\uff08Min wind direction\uff0900 03 6E 84\uff08Max wind direction\uff0900 03 C8 C0\uff08Avg wind direction\uff0900 00 00 00\uff08Min wind speed\uff0900 00 04 BC\uff08Max wind speed\uff0900 00 02 10\uff08Avg wind speed\uff09BC 78\uff08Check code\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"S700 decode:")),(0,a.kt)("p",null,"Read register 0x0000~0x001F and 0x0030~0x0033."),(0,a.kt)("p",null,"Send command: 14 04 00 00 00 20 F3 06"),(0,a.kt)("p",null,"Return: 14 04 40 00 00 70 80\uff08Temperature\uff09 00 00 95 10\uff08Humidity\uff09 06 07 94 40\uff08Air pressure\uff09 00 00 00 00\uff08Light\uff09 00 00 00 00\uff08Min wind direction\uff09 00 00 00 00\uff08Max wind direction\uff09 00 00 00 00\uff08Avg wind direction\uff09 00 00 00 00 \uff08Min wind speed\uff0900 00 00 00\uff08Max wind speed) 00 00 00 00\uff08Avg wind speed\uff09 00 00 00 00\uff08Accumulated rainfall\uff09 00 00\n00 00\uff08Accumulated rainfall duration\uff09 00 00 00 00\uff08Rain intensity\uff09 00 00 00 00\uff08Maximum rainfall intensity\uff09 00 00 6A 7C\uff08Heating Temperature\uff09 00 00 00 00\uff08The dumping of state\uff09 99 09\uff08Check code\uff09"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"S900 decode:")),(0,a.kt)("p",null,"Read register 0x0000~0x001F and 0x0030~0x0033."),(0,a.kt)("p",null,"Send command: 26 04 00 00 00 20 F7 05"),(0,a.kt)("p",null,"Return: 26 04 40 00 00 70 80 (Temperature) 00 00 95 10(Humidity) 06 07 94 40(Air pressure) 00 00 00 00(Light) 00 00 00 00(Min wind direction)\n00 00 00 00(Max wind direction) 00 00 00 00(Avg wind direction) 00 00 00 00 (Min wind speed) 00 00 00 00(Max wind speed) 00 00 00 00(Avg wind\nspeed) 00 00 00 00(Accumulated rainfall) 00 00 00 00(Accumulated rainfall duration) 00 00 00 00(Rain intensity) 00 00 00 00(Maximum rainfall intensity)00 00 6A 7C(Heating Temperature) 00 00 00 00(The dumping of state) 99 09(Check code)"),(0,a.kt)("p",null,"PM2.5 and PM10 need to be read separately\uff1a"),(0,a.kt)("p",null,"Send command: 26 04 00 30 00 04 F7 11"),(0,a.kt)("p",null,"Return: 26 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Check code)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"S1000 decode:")),(0,a.kt)("p",null,"Read register 0x0000~0x001F and 0x0030~0x0033."),(0,a.kt)("p",null,"Send command: 2B 04 00 00 00 20 F6 18"),(0,a.kt)("p",null,"Return: 2B 04 40 00 00 70 80 (Temperature) 00 00 95 10(Humidity) 06 07 94 40(Air pressure) 00 00 00 00(Light) 00 00 00 00(Min wind direction)\n00 00 00 00(Max wind direction) 00 00 00 00(Avg wind direction) 00 00 00 00 (Min wind speed) 00 00 00 00(Max wind speed) 00 00 00 00(Avg wind\nspeed) 00 00 00 00(Accumulated rainfall) 00 00 00 00(Accumulated rainfall duration) 00 00 00 00(Rain intensity) 00 00 00 00(Maximum rainfall intensity)00 00 6A 7C(Heating Temperature) 00 00 00 00(The dumping of state) 99 09(Check code)"),(0,a.kt)("p",null,"PM2.5, PM10, and CO2 need to be read separately\uff1a"),(0,a.kt)("p",null,"Send command: 2B 04 00 30 00 04 F6 0C"),(0,a.kt)("p",null,"Return: 2B 04 08 00 00 90 88(PM2.5) 00 00 A4 10(PM10) 13 FA(Check code)"),(0,a.kt)("p",null,"Read register 0x0040~0x0041."),(0,a.kt)("p",null,"Send command:2B 04 00 40 00 02 77 D5"),(0,a.kt)("p",null,"Return:2B 04 04 00 0C EC 98 \uff08CO2\uff09 FD 2F \uff08Check code\uff09\uff1b"),(0,a.kt)("h3",{id:"noise-sensor"},"Noise sensor"),(0,a.kt)("p",null,"The noise sensor is used as an independent RS485 sensor, which is\nparallel with other measuring units on the same RS-485 bus, so it needs\nto be read and configured separately."),(0,a.kt)("p",null,"Specification:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image40.png"})),(0,a.kt)("p",null,"Data reading protocol and configuration:"),(0,a.kt)("p",null,"The communication protocol adopts the standard RS485 Modbus-RTU protocol and the protocol communication parameters are as follows:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image41.png"})),(0,a.kt)("p",null,"Querying the data of the noise sensor (address: 40, 0x28) :"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image42.png"})),(0,a.kt)("p",null,"If it is succeeded to query, the following information is returned:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image01.png"})),(0,a.kt)("p",null,"Real DB = register value /100"),(0,a.kt)("p",null,"The noise register value is 0x128E=4750, and the value is =4750/100=47.5dB"),(0,a.kt)("h2",{id:"ascii-protocol"},"ASCII Protocol"),(0,a.kt)("h3",{id:"command-definition"},"Command definition"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image44.png"})),(0,a.kt)("h3",{id:"query-command-format"},"Query Command Format"),(0,a.kt)("p",null,"Commands come in two formats:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," ",(0,a.kt)("strong",{parentName:"p"},"A command without =")," ",(0,a.kt)("strong",{parentName:"p"},"refers to the basic query method.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/11.png"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example: ",(0,a.kt)("inlineCode",{parentName:"em"},"?<CR><LF>")," indicates query the device's address")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," A command ",(0,a.kt)("strong",{parentName:"p"},"with = refers to a query with an argument")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/22.png"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example: 0XA;BD=",(0,a.kt)("inlineCode",{parentName:"em"},"?<CR><LF>")," indicates query the device's baud rate")),(0,a.kt)("h3",{id:"setting-command-format"},"Setting Command Format"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Set a specified parameter, such as setting a baud rate.")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/33.png"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Example: 0XA;BD=96",(0,a.kt)("inlineCode",{parentName:"em"},"<CR><LF>")," indicates query the device's baud rate")),(0,a.kt)("h3",{id:"command-list"},"Command List"),(0,a.kt)("p",null,"Please refer to:\n",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf"},"https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf")),(0,a.kt)("h2",{id:"sdi-12"},"SDI-12"),(0,a.kt)("p",null,"SDI-12 communication adopts three wires, two of which are sensor power supply wires and the other is SDI-12 signal wire."),(0,a.kt)("p",null,"Each sensor on the SDI-12 bus has a unique address, which can be set to '0', '1' ~ '9', 'A' ~ 'Z', 'A' ~ 'Z'. The SDI-12 address of the SenseCAP ONE defaults to '0'. The instructions supported by this sensor are shown in the next chapter, where each instruction conforms to the\nSDI-12 v1.4."),(0,a.kt)("p",null,"The sensor is powered by a DC power supply of 3.6~16V. After the sensor is powered on, it will go into sleep mode immediately and wait for the data acquisition equipment to give instructions. SDI-12 uses a baud rate of 9600bps, 1 start bit (high level), 7 data bits (high 0 and low 1, anti-logic), 1 even parity bit, and 1 stop bit."),(0,a.kt)("p",null,"The sequence of each byte sent is shown in the following figure:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/44.png"})),(0,a.kt)("h3",{id:"sdi-12-command-and-response"},"SDI-12 command and response"),(0,a.kt)("p",null,"Please refer to:\n",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf"},"https://files.seeedstudio.com/products/101990784/SenseCAP%20ONE%20Compact%20Weather%20Sensor%20User%20Guide-v2.0.pdf")),(0,a.kt)("h3",{id:"sdi-12-read"},"SDI-12 Read"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wiring the SDI-12")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image47.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use USB to SDI-12 debugger to communicate with the device")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image48.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"The communication settings:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image49.png"})),(0,a.kt)("p",null,"Connect the green wire (GND Data) and yellow wire (SDI-12 Data) to the\n",(0,a.kt)("strong",{parentName:"p"},"USB to SDI-12")," debugger."),(0,a.kt)("p",null,"And connect the red wire (Vin+ power positive) and brown wire (Vin-power ground) to the 12V power supply."),(0,a.kt)("p",null,"Download the serial port debugging assistant:\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Neutree/COMTool"},"https://github.com/Neutree/COMTool"),", and then open the serial port debugging tool."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Choose the correct port number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the baud rate to the baud rate of the USB to SDI-12 debugger (note that it is not the baud rate of the SDI-12 protocol)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Check the "CRLF"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Click to open the serial port.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},'Send the query device address command "?!", if you can see the response "0", it means the connection is OK.'))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image50.png"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Start Measurement")),(0,a.kt)("p",null,"Read air temperature, air humidity, barometric pressure, light intensity"),(0,a.kt)("p",null,'Send the "start measurement command 0M!", the sensor first responds with "00024", which means that the "0M!" command takes 2 seconds to measure and returns 4 measured values. After 2 seconds, the sensor responds with its own address "0", indicating that the measurement has been completed.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image51.png"})),(0,a.kt)("p",null,'Then send " Read measurement value command 0D0!" to get the 4 measured values \u200b\u200bof this measurement, which are air temperature +27.01\u2103, air humidity 64.74%, barometric pressure 100720Pa, and light intensity 10Lux.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image52.png"})),(0,a.kt)("p",null,'Use extended measurement command 0M1! to read minimum wind direction, maximum wind direction, average wind direction, minimum wind speed,\nmaximum wind speed, and average wind speed. The device responds with "00056", which means that the "0M1!" command takes 5 seconds to measure and returns 6 measured values. After 5 seconds, the device responds with its own address "0", indicating that the measurement has been completed.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image53.png"})),(0,a.kt)("p",null,'Then send "Read measurement value command 0D0!" to get the 6 measured values of this measurement, which are minimum wind direction 345.9 degrees, maximum wind direction 347.5 degrees, average wind direction 346.3 degrees, minimum wind speed 2.8m/s, and maximum wind speed 2.8m/s, average wind speed 2.8m/s.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image54.png"})),(0,a.kt)("p",null,'Then send "continuous measurement command 0R2! the device returns 4 measured values: cumulative rainfall 1.2mm, cumulative rainfall duration 20 seconds, rainfall intensity 1.2mm/h, maximum rainfall intensity 72.0mm/h.'),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image55.png"})),(0,a.kt)("h1",{id:"error-code"},"Error code"),(0,a.kt)("h2",{id:"modbus-error-code"},"Modbus error code"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image56.png"})),(0,a.kt)("h2",{id:"ascii-error-code"},"ASCII error code"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image57.png"})),(0,a.kt)("h2",{id:"sdi-12-error-code"},"SDI-12 error code"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/SenseCAP%20ONE%20Compact%20Weather%20Sensor_/image58.png"})))}m.isMDXComponent=!0}}]);
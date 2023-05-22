"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[18916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},18779:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={description:"Reading Raspberry Pi's Info using Wio Terminal",title:"Reading Raspberry Pi's Info using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Reading-Raspberry-Pi",last_update:{date:"1/31/2023",author:"jianjing Huang"}},o="Reading Raspberry Pi's System Status using Wio Terminal",s={unversionedId:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-Reading-Raspberry-Pi",id:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-Reading-Raspberry-Pi",title:"Reading Raspberry Pi's Info using Wio Terminal",description:"Reading Raspberry Pi's Info using Wio Terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-Reading-Raspberry-Pi.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client",slug:"/Wio-Terminal-Reading-Raspberry-Pi",permalink:"/Wio-Terminal-Reading-Raspberry-Pi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Wio_Terminal_USB_Client/Wio-Terminal-Reading-Raspberry-Pi.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Reading Raspberry Pi's Info using Wio Terminal",title:"Reading Raspberry Pi's Info using Wio Terminal",keywords:["Wio_terminal USB_Client"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Reading-Raspberry-Pi",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Build a DAPLink Device using Wio Terminal",permalink:"/Wio-Terminal-DAPLink"},next:{title:"Wio Terminal Displaying Gyro",permalink:"/Wio-Terminal-Displaying-Gyro"}},l={},p=[{value:"Part List",id:"part-list",level:2},{value:"Features",id:"features",level:2},{value:"Raspberry Pi Host Program",id:"raspberry-pi-host-program",level:2},{value:"Python Code on Raspberry Pi",id:"python-code-on-raspberry-pi",level:3},{value:"Arduino Code",id:"arduino-code",level:2},{value:"Arduino libraries needed",id:"arduino-libraries-needed",level:3},{value:"Complete Code",id:"complete-code",level:3},{value:"Instructions",id:"instructions",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"reading-raspberry-pis-system-status-using-wio-terminal"},"Reading Raspberry Pi's System Status using Wio Terminal"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/WT-rasp.gif",alt:null})),(0,i.kt)("p",null,"This wiki introduces how to read the system status of Raspberry Pi via USB serial communication using Wio Terminal. In this demo, the Raspberry Pi will be the host computer and sends its system information to the serial port via USB. Wio Terminal will be the slave and receives the incoming data and display on its LCD Screen."),(0,i.kt)("h2",{id:"part-list"},"Part List"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Boards-c-17.html"},"Raspberry Pi")," (3B+ used here)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},"Wio Terminal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"USB Type-C cable"))),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Reading Raspberry Pi's System status")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Display on Wio Terminal's Screen"))),(0,i.kt)("h2",{id:"raspberry-pi-host-program"},"Raspberry Pi Host Program"),(0,i.kt)("p",null,"Run the following Python code on Raspberry to send the system information to Wio Terminal via USB Serial."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," Please make sure that the Serial port is correct in the Python code, change it according to your device."),(0,i.kt)("h3",{id:"python-code-on-raspberry-pi"},"Python Code on Raspberry Pi"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-py"},"import os\nimport time \nimport serial\n\n# Settings for reading from Arduino Serial\nserialPort= \"/dev/ttyACM0\" #Change it to your Serial Port, Check in Arudino IDE\nbaudRate = 115200\nser = serial.Serial(serialPort, baudRate, timeout=0.5)\ntime.sleep(2)\n\n# Return CPU temperature as a character string\ndef getCPUtemperature():\n    res = os.popen('vcgencmd measure_temp').readline()\n    return(res.replace(\"temp=\",\"\").replace(\"'C\\n\",\"\"))\n\n# Return RAM information (unit=kb) in a list\n# Index 0: total RAM\n# Index 1: used RAM\n# Index 2: free RAM\ndef getRAMinfo():\n    p = os.popen('free')\n    i = 0\n    while 1:\n        i = i + 1\n        line = p.readline()\n        if i==2:\n            return(line.split()[1:4])\n\n# Return % of CPU used by user as a character string\ndef getCPUuse():\n    return(str(os.popen(\"top -n1 | awk '/Cpu\\(s\\):/ {print $2}'\").readline().strip()))\n\n# Return information about disk space as a list (unit included)\n# Index 0: total disk space\n# Index 1: used disk space\n# Index 2: remaining disk space\n# Index 3: percentage of disk used\ndef getDiskSpace():\n    p = os.popen(\"df -h /\")\n    i = 0\n    while 1:\n        i = i +1\n        line = p.readline()\n        if i==2:\n            return(line.split()[1:5])\n \ndef main():\n    while True:\n        # CPU informatiom\n        CPU_temp = getCPUtemperature()\n        CPU_usage = getCPUuse()\n\n        # RAM information\n        # Output is in kb, here I convert it in Mb for readability\n        RAM_stats = getRAMinfo()\n        RAM_total = str(round(int(RAM_stats[0]) / 1000,1))\n        RAM_used = str(round(int(RAM_stats[1]) / 1000,1))\n        RAM_free = str(round(int(RAM_stats[2]) / 1000,1))\n\n        # Disk information\n        DISK_stats = getDiskSpace()\n        DISK_total = DISK_stats[0]\n        DISK_used = DISK_stats[1]\n        DISK_perc = DISK_stats[3]\n\n        temp=ser.write(str.encode(CPU_temp+' '+CPU_usage))\n\n        data=ser.write(str.encode(CPU_temp+':'+CPU_usage+':'+RAM_total+':'+RAM_used+':'+RAM_free+':'+DISK_total+':'+DISK_used+':'+DISK_perc))\n        ser.flush()\n        time.sleep(2)\n\n        print('')\n        print('CPU Temperature = '+CPU_temp)\n        print('CPU Use = '+CPU_usage)\n        print('')\n        print('RAM Total = '+str(RAM_total)+' MB')\n        print('RAM Used = '+str(RAM_used)+' MB')\n        print('RAM Free = '+str(RAM_free)+' MB')\n        print('')  \n        print('DISK Total Space = '+str(DISK_total)+'B')\n        print('DISK Used Space = '+str(DISK_used)+'B')\n        print('DISK Used Percentage = '+str(DISK_perc)) \n\n\nif __name__ == '__main__':\n    try:    \n        main()\n    except KeyboardInterrupt:    \n        if ser != None:    \n            ser.close()\n")),(0,i.kt)("h2",{id:"arduino-code"},"Arduino Code"),(0,i.kt)("h3",{id:"arduino-libraries-needed"},"Arduino libraries needed"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the LCD screen Library ",(0,i.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD")," for more information.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Download the ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/Free_Fonts.h"},(0,i.kt)("inlineCode",{parentName:"a"},"Free_Fonts.h"))," header file so that can use abbreviations for the free fonts included in the LCD library. Please make sure to put this header file in the same location as the Arduino Sketch."))),(0,i.kt)("h3",{id:"complete-code"},"Complete Code"),(0,i.kt)("p",null,"Download the complete code ",(0,i.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal/res/readRasp.ino"},"here"),"."),(0,i.kt)("h2",{id:"instructions"},"Instructions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Upload the Arduino Code to Wio Terminal. Once uploaded it should be in a starting screen.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect Wio Terminal to the Raspberry Pi via USB Type-C Cable.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the Python code on Raspberry Pi.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, you should be able to see the Raspberry's Pi System info on Wio Terminal's LCD Screen."))),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,i.kt)("br",null)),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
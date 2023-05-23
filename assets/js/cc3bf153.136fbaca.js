"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77145],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),s=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(a),k=n,c=m["".concat(p,".").concat(k)]||m[k]||d[k]||l;return a?r.createElement(c,i(i({ref:t},u),{},{components:a})):r.createElement(c,i({ref:t},u))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},27188:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const l={description:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",title:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115",last_update:{date:"1/11/2023",author:"jianjing Huang"}},i=void 0,o={unversionedId:"Top_Brand/Raspberry_Pi/Pi_HAT/four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115",id:"Top_Brand/Raspberry_Pi/Pi_HAT/four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115",title:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",description:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",source:"@site/docs/Top_Brand/Raspberry_Pi/Pi_HAT/four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115.md",sourceDirName:"Top_Brand/Raspberry_Pi/Pi_HAT",slug:"/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115",permalink:"/custom/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Raspberry_Pi/Pi_HAT/four-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673395200,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",title:"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)",keywords:["Pi_HAT"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115",last_update:{date:"1/11/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"4-Channel SPDT Relay HAT for Raspberry Pi",permalink:"/custom/Raspberry_Pi_Relay_Board_v1.0"},next:{title:"8-Channel 12-Bit ADC for Raspberry Pi (STM32F030)",permalink:"/custom/8-Channel_12-Bit_ADC_for_Raspberry_Pi-STM32F030"}},p={},s=[{value:"Version",id:"version",level:2},{value:"Feature",id:"feature",level:2},{value:"Specification",id:"specification",level:2},{value:"Typical applications",id:"typical-applications",level:2},{value:"Hardware Overview",id:"hardware-overview",level:2},{value:"Pin Out",id:"pin-out",level:3},{value:"Platforms Supported",id:"platforms-supported",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Software",id:"software",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],u={toc:s},m="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(m,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/main.jpg",alt:null})),(0,n.kt)("p",null,"The analog-to-digital converter(ADC) is a common accessory for Raspberry Pi. This is a 4-channel ADC based on Texas Instrument's ADS1115, which is a precision, low-power, 16-bit ADC chip. We make this ADC into a compact Raspberry Pi Zero form factor and integrated an analog Grove connector so that you can also use analog Grove modules with it."),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Seeed-WiKi/docs/images/300px-Get_One_Now_Banner-ragular.png"}))),(0,n.kt)("h2",{id:"version"},"Version"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Product Version"),(0,n.kt)("th",{parentName:"tr",align:null},"Changes"),(0,n.kt)("th",{parentName:"tr",align:null},"Released Date"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115)"),(0,n.kt)("td",{parentName:"tr",align:null},"Initial"),(0,n.kt)("td",{parentName:"tr",align:null},"Sep 2018")))),(0,n.kt)("h2",{id:"feature"},"Feature"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"LOW current consumption:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Continuous Mode: Only 150\u03bcA"),(0,n.kt)("li",{parentName:"ul"},"Single-Shot Mode: Auto Shut-Down"))),(0,n.kt)("li",{parentName:"ul"},"Wide supply voltage range"),(0,n.kt)("li",{parentName:"ul"},"Input multiplexer (MUX) that provides two differential or four single-ended inputs."),(0,n.kt)("li",{parentName:"ul"},"Programmable comparator"),(0,n.kt)("li",{parentName:"ul"},"Internal low-drift voltage reference"),(0,n.kt)("li",{parentName:"ul"},"Internal oscillator"),(0,n.kt)("li",{parentName:"ul"},"Internal PGA"),(0,n.kt)("li",{parentName:"ul"},"Programmable data rate: 8SPS to 860SPS"),(0,n.kt)("li",{parentName:"ul"},"I2C-compatible serial  interface"),(0,n.kt)("li",{parentName:"ul"},"Support Raspberry Pi 3B/3B+/4")),(0,n.kt)("h2",{id:"specification"},"Specification"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Item"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Supply Voltage"),(0,n.kt)("td",{parentName:"tr",align:null},"3.3V / 5V")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Analog input current"),(0,n.kt)("td",{parentName:"tr",align:null},"100mA(momentary)",(0,n.kt)("br",null),"10mA(continuous)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Storage temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"-60\uff5e150\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maximum junction temperature"),(0,n.kt)("td",{parentName:"tr",align:null},"150\u2103")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Interface"),(0,n.kt)("td",{parentName:"tr",align:null},"I2C")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"I2C address"),(0,n.kt)("td",{parentName:"tr",align:null},"0x48(defult)",(0,n.kt)("br",null),"0x49~0x4B(configurable)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 65mm W: 30mm H: 20mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"36.5g")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Package size"),(0,n.kt)("td",{parentName:"tr",align:null},"L: 140mm W: 78mm H: 27mm")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Gross Weight"),(0,n.kt)("td",{parentName:"tr",align:null},"37g")))),(0,n.kt)("p",null,"There are 4 possible I2C addresses of this grove, from 0x48 to 0x4B. The default I2C address is 0x48. You can change the I2C address by doing some soldering."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout1.png",alt:null})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If SDA(corresponding address 0x4A) is used as the device address, hold the SDA line low for at least 100 ns after the SCL line goes low to make sure the device decodes the address correctly during I2C communication.")),(0,n.kt)("h2",{id:"typical-applications"},"Typical applications"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Portable instrumentation"),(0,n.kt)("li",{parentName:"ul"},"Consumer goods"),(0,n.kt)("li",{parentName:"ul"},"Battery monitoring"),(0,n.kt)("li",{parentName:"ul"},"Temperature measurement"),(0,n.kt)("li",{parentName:"ul"},"Factory automation and process controls")),(0,n.kt)("h2",{id:"hardware-overview"},"Hardware Overview"),(0,n.kt)("h3",{id:"pin-out"},"Pin Out"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/pinout.png",alt:null})),(0,n.kt)("h2",{id:"platforms-supported"},"Platforms Supported"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Arduino"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{width:1e3,src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/arduino_logo.jpg"}))),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/raspberry_pi_logo.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/bbg_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/wio_logo_n.jpg",alt:null})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/linkit_logo_n.jpg",alt:null}))))),(0,n.kt)("h2",{id:"getting-started"},"Getting Started"),(0,n.kt)("h3",{id:"hardware"},"Hardware"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Materials required")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry pi"),(0,n.kt)("th",{parentName:"tr",align:null},"4-Channel 16-Bit ADC for Raspberry Pi(ADS1115)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/wiki_english/docs/images/rasp.jpg",alt:"enter image description here"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{parentName:"td",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/thumbnail.jpg",alt:"enter image description here"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/Raspberry-Pi-3-Model-B-p-2625.html"},"Get ONE Now")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://www.seeedstudio.com/4-Channel-16-Bit-ADC-for-Raspberry-Pi-ADS1115.html"},"Get ONE Now"))))),(0,n.kt)("h3",{id:"software"},"Software"),(0,n.kt)("p",null,"In this section, we will introduce you how to install the driver and how to enable I2C."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Enable I2C"),"\nAs I2C is not turned on by default, we need to configure I2C by hand."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 1"),". Power up the Raspberry Pi."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 2"),". Open raspi-config by typing following command in terminal.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-C++"},"\nsudo raspi-config\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 3"),'. Arrow down to 5 interfacing Options and press "enter" to select.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp1.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),'. Arrow down to P5 I2C and press "enter" to select.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp2.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 4"),'. Select "Yes" to enable it.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp3.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 5"),'. Select "Ok".')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp4.png",alt:null})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Step 6"),'. Select "Finish" to save the changes.')),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/rasp5.png",alt:null})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Installation")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To check the I2C is enabled in Raspberry Pi.")),(0,n.kt)("p",null,"Navigate to the ",(0,n.kt)("inlineCode",{parentName:"p"},"config.txt")," file by running the following in the terminal:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd /boot\nsudo nano config.txt\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Make sure there is line stating of ",(0,n.kt)("inlineCode",{parentName:"p"},"dtparam=i2c_arm=on")," in the file.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The default I2C speed is 100 kHz. You can increase it to 400 kHz like by adding the following line to the config file:"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dtparam=i2c_arm_baudrate=400000\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Then to use the ads1115-overlay add the following to ",(0,n.kt)("inlineCode",{parentName:"li"},"config.txt"),":")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dtoverlay=ads1115\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"After that you need to provide parameters to the overlay to configure the driver. To enable all 4 channels of the ADC in single-ended mode, add the following:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"dtparam=cha_enable\ndtparam=chb_enable\ndtparam=chc_enable\ndtparam=chd_enable\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Save the file and reboot your raspberry pi.")),(0,n.kt)("p",null,"If you reboot the system with those changes to ",(0,n.kt)("inlineCode",{parentName:"p"},"config.txt")," you will see the following kernel modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Run the following to check the kernel modules:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"lsmod | grep ads\n")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/1.png"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"}," Note that the ADS1115 uses the same kernel as ADS1015.")),(0,n.kt)("p",null,"We can see that the ADS1115 is already there and can be used by Industrial IO."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Navigate to the Industrial IO folder:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd /sys/bus/iio/devices/iio\\:device0/\n")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/2.png"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Now you may access these hardware config files easily:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cat in_voltage0-voltage1_raw\n")),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/img/3.png"})),(0,n.kt)("p",null,"Channel 0 and 1 using scale of 0.1875mV. Measured potential difference is ",(0,n.kt)("strong",{parentName:"p"},"17670 * 0.1875mv = 3.3V")),(0,n.kt)("p",null,"This adding kernel method allows you to develop your own shell or python script using the ADS1115!"),(0,n.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,n.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/4-Channel%2016-Bit%20ADC%20for%20Raspberry%20Pi(ADS1115).zip"},"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) Eagle Files"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[Zip]")," ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/pi-hats/archive/master.zip"},"4-Channel 16-Bit ADC for Raspberry Pi (ADS1115) Software Library"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"[PDF]")," ",(0,n.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/4-Channel_16-Bit_ADC_for_Raspberry_Pi-ADS1115/res/ADS1115.pdf"},"Datasheet ADS1115")))),(0,n.kt)("h2",{id:"tech-support"},"Tech Support"),(0,n.kt)("p",null,"Please do not hesitate to submit the issue into our ",(0,n.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum")," ."),(0,n.kt)("div",null,(0,n.kt)("br",null),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,n.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}d.isMDXComponent=!0}}]);
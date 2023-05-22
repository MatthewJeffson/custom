"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32567],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>k});var a=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,i=function(e,r){if(null==e)return{};var t,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,i=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=i,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||n;return t?a.createElement(k,o(o({ref:r},c),{},{components:t})):a.createElement(k,o({ref:r},c))}));function k(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var n=t.length,o=new Array(n);o[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<n;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17251:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=t(87462),i=(t(67294),t(3905));const n={description:"ReSpeaker Mic Array",title:"ReSpeaker Mic Array",keywords:["reSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ReSpeaker_Mic_Array",last_update:{date:"1/12/2023",author:"jianjing Huang"}},o=void 0,l={unversionedId:"Seeed_Elderly/reSpeaker/Extension Board/ReSpeaker_Mic_Array",id:"Seeed_Elderly/reSpeaker/Extension Board/ReSpeaker_Mic_Array",title:"ReSpeaker Mic Array",description:"ReSpeaker Mic Array",source:"@site/docs/Seeed_Elderly/reSpeaker/Extension Board/ReSpeaker_Mic_Array.md",sourceDirName:"Seeed_Elderly/reSpeaker/Extension Board",slug:"/ReSpeaker_Mic_Array",permalink:"/custom/ReSpeaker_Mic_Array",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/reSpeaker/Extension Board/ReSpeaker_Mic_Array.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1673452800,formattedLastUpdatedAt:"Jan 11, 2023",frontMatter:{description:"ReSpeaker Mic Array",title:"ReSpeaker Mic Array",keywords:["reSpeaker"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/ReSpeaker_Mic_Array",last_update:{date:"1/12/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"ReSpeaker Mic Array v2.0",permalink:"/custom/ReSpeaker_Mic_Array_v2.0"},next:{title:"Overview",permalink:"/custom/ReSpeaker_2_Mics_Pi_HAT"}},p={},s=[{value:"Description",id:"description",level:2},{value:"Key Features",id:"key-features",level:2},{value:"Technology Specs",id:"technology-specs",level:2},{value:"Driver for ReSpeaker Mic Array",id:"driver-for-respeaker-mic-array",level:2},{value:"Extract voice with ReSpeaker Core",id:"extract-voice-with-respeaker-core",level:2},{value:"Extract voice on PC or Mac or Linux or Raspberry Pi",id:"extract-voice-on-pc-or-mac-or-linux-or-raspberry-pi",level:2},{value:"Firmwares for ReSpeaker Mic Array",id:"firmwares-for-respeaker-mic-array",level:2},{value:"HID for controlling ReSpeaker Mic Array",id:"hid-for-controlling-respeaker-mic-array",level:2},{value:"FAQ",id:"faq",level:2},{value:"Q1: How to get audio source direction from Mic Array with <em>xvsm version</em> firmware?",id:"q1-how-to-get-audio-source-direction-from-mic-array-with-xvsm-version-firmware",level:3},{value:"Q2: How to use audacity to extract the 8 channels raw data on Windows?",id:"q2-how-to-use-audacity-to-extract-the-8-channels-raw-data-on-windows",level:3},{value:"Q3: How does Mic array communicate with Respeaker Core?",id:"q3-how-does-mic-array-communicate-with-respeaker-core",level:3},{value:"Q4: What does ReSpeaker-Microphone-Array-HID-tool VAD stand for?",id:"q4-what-does-respeaker-microphone-array-hid-tool-vad-stand-for",level:3},{value:"Schematic Online Viewer",id:"schematic-online-viewer",level:2},{value:"Resources",id:"resources",level:2},{value:"Project",id:"project",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:s};function u(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg",alt:null})),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ReSpeaker Mic Array can be stacked (connected) right onto the top of ReSpeaker Core to significantly improve the voice interaction experience. It is developed based on the XVSM-2000 Smart Microphone from XMOS. The board integrates 7 PDM microphones to help enhance ReSpeaker's acoustic DSP performance to a much higher level."),(0,i.kt)("h2",{id:"key-features"},"Key Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Far-field Voice Capture"),(0,i.kt)("li",{parentName:"ul"},"Acoustic Source Localization"),(0,i.kt)("li",{parentName:"ul"},"Beamforming"),(0,i.kt)("li",{parentName:"ul"},"Noise Suppression"),(0,i.kt)("li",{parentName:"ul"},"De-reverberation"),(0,i.kt)("li",{parentName:"ul"},"Acoustic Echo Cancellation")),(0,i.kt)("h2",{id:"technology-specs"},"Technology Specs"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/respeaker_mic_array.jpeg",alt:null})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"XVSM-2000 with 16 cores inside:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"16 real-time logical cores on 2 xCore tiles."),(0,i.kt)("li",{parentName:"ul"},"Cores share up to 2000 MIPS in dual issue mode."),(0,i.kt)("li",{parentName:"ul"},"512KB internal single-cycle SRAM and 2MB built-in flash."),(0,i.kt)("li",{parentName:"ul"},"16KB internal OTP (max 8KB per tile),"),(0,i.kt)("li",{parentName:"ul"},"USB PHY, fully compliant with USB 2.0 specification."),(0,i.kt)("li",{parentName:"ul"},"Programmable I/O."),(0,i.kt)("li",{parentName:"ul"},"Supply DFU Mode."))),(0,i.kt)("li",{parentName:"ul"},"7 Digital Microphones:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"far field voice recognition or sound localization usefulness."),(0,i.kt)("li",{parentName:"ul"},"ST MP34DT01-M."),(0,i.kt)("li",{parentName:"ul"},"-26 dBFS sensitivity."),(0,i.kt)("li",{parentName:"ul"},"120 dBSPL acoustic overload point."),(0,i.kt)("li",{parentName:"ul"},"61 dB signal-to-noise ratio."),(0,i.kt)("li",{parentName:"ul"},"Omnidirectional sensitivity."),(0,i.kt)("li",{parentName:"ul"},"PDM output."))),(0,i.kt)("li",{parentName:"ul"},"12 RGB LEDs:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"256 levels brightness."),(0,i.kt)("li",{parentName:"ul"},"800kHz line data transmission."))),(0,i.kt)("li",{parentName:"ul"},"Audio output:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On board 3.5mm Aux output."),(0,i.kt)("li",{parentName:"ul"},"WOLFSON WM8960."),(0,i.kt)("li",{parentName:"ul"},"24 or 16bit 16kHz stereo output."),(0,i.kt)("li",{parentName:"ul"},"40 mW output Power into 16 \u2126 @ 3.3 V."))),(0,i.kt)("li",{parentName:"ul"},"Clock Sync\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"On board PLL."),(0,i.kt)("li",{parentName:"ul"},"Programmable sample clock for DAC,MIC.\n(Disable if DSP is used in XVSM-2000)."))),(0,i.kt)("li",{parentName:"ul"},"Power supply:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"5V supply from Micro USB or expansion header."))),(0,i.kt)("li",{parentName:"ul"},"Size:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Diameter 70mm."))),(0,i.kt)("li",{parentName:"ul"},"Weight:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"15.25g")))),(0,i.kt)("h2",{id:"driver-for-respeaker-mic-array"},"Driver for ReSpeaker Mic Array"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For Windows Users, click ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Driver"},"here")," to install the driver"),(0,i.kt)("li",{parentName:"ul"},"For Linux or Mac Users, don't need to install the driver")),(0,i.kt)("h2",{id:"extract-voice-with-respeaker-core"},"Extract voice with ReSpeaker Core"),(0,i.kt)("p",null,"When Mic Array is stacked on ReSpeaker Core,  it will be detected(check with ",(0,i.kt)("inlineCode",{parentName:"p"},"aplay -l"),") automatically. And we recommand that you could using our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/respeaker/respeaker_python_library"},"respeaker","_","python","_","library")," to develop your speech interaction application so that you don't need to care about if the Mic Array is on or not. Our library will check this and choose Mic Array when it is on."),(0,i.kt)("p",null,"Also, in that library, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py"},(0,i.kt)("em",{parentName:"a"},"class Microphone")),", which is based on ",(0,i.kt)("strong",{parentName:"p"},"Pyaudio"),", has a method named ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/respeaker/respeaker_python_library/blob/master/respeaker/microphone.py#L207"},(0,i.kt)("em",{parentName:"a"},"listen")),", to extract voice. See our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/respeaker/respeaker_python_library/blob/master/examples/SpeechRecognition_translator.py"},"example code")," here for usage."),(0,i.kt)("h2",{id:"extract-voice-on-pc-or-mac-or-linux-or-raspberry-pi"},"Extract voice on PC or Mac or Linux or Raspberry Pi"),(0,i.kt)("p",null,"Here is an example also based on Pyaudio:"),(0,i.kt)("p",null,"First, you need to run the following script to get the device index number of Mic Array:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"import pyaudio\n\np = pyaudio.PyAudio()\ninfo = p.get_host_api_info_by_index(0)\nnumdevices = info.get('deviceCount')\n\nfor i in range(0, numdevices):\n        if (p.get_device_info_by_host_api_device_index(0, i).get('maxInputChannels')) > 0:\n            print \"Input Device id \", i, \" - \", p.get_device_info_by_host_api_device_index(0, i).get('name')\n")),(0,i.kt)("p",null,"Then, change ",(0,i.kt)("inlineCode",{parentName:"p"},"RESPEAKER_INDEX = 1")," to your index number. Run the script to record a speech."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},'import pyaudio\nimport wave\n\nRESPEAKER_RATE = 16000\nRESPEAKER_CHANNELS = 2\nRESPEAKER_WIDTH = 2\n# run getDeviceInfo.py to get index\nRESPEAKER_INDEX = 1\nCHUNK = 1024\nRECORD_SECONDS = 5\nWAVE_OUTPUT_FILENAME = "output.wav"\n\np = pyaudio.PyAudio()\n\nstream = p.open(\n            rate=RESPEAKER_RATE,\n            format=p.get_format_from_width(RESPEAKER_WIDTH),\n            channels=RESPEAKER_CHANNELS,\n            input=True,\n            input_device_index=RESPEAKER_INDEX,)\n\nprint("* recording")\n\nframes = []\n\nfor i in range(0, int(RESPEAKER_RATE / CHUNK * RECORD_SECONDS)):\n    data = stream.read(CHUNK)\n    frames.append(data)\n\nprint("* done recording")\n\nstream.stop_stream()\nstream.close()\np.terminate()\n\nwf = wave.open(WAVE_OUTPUT_FILENAME, \'wb\')\nwf.setnchannels(RESPEAKER_CHANNELS)\nwf.setsampwidth(p.get_sample_size(p.get_format_from_width(RESPEAKER_WIDTH)))\nwf.setframerate(RESPEAKER_RATE)\nwf.writeframes(b\'\'.join(frames))\nwf.close()\n')),(0,i.kt)("h2",{id:"firmwares-for-respeaker-mic-array"},"Firmwares for ReSpeaker Mic Array"),(0,i.kt)("p",null,"You could download ReSpeaker Mic array firmwares for DFU ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Fuhua-Chen/ReSpeaker_Microphone_Array_Firmware"},"here"),". We have provided two versions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"xvsm version")," : initial version, outputs 2 channels data with dsp support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"raw version")," : outputs 8 channels mic raw data, this firmware is without xvsm dsp support, so it does not support some functions such as DOA, AEC and so on.")),(0,i.kt)("p",null,"Please see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/respeaker/mic_array_dfu"},"here")," for ",(0,i.kt)("strong",{parentName:"p"},"updating firmware on Linux"),".\nPlease see ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/jerryyip/respeaker_micarray_dfu_mac_linux"},"here")," for ",(0,i.kt)("strong",{parentName:"p"},"updating firmware on Mac"),"."),(0,i.kt)("h2",{id:"hid-for-controlling-respeaker-mic-array"},"HID for controlling ReSpeaker Mic Array"),(0,i.kt)("p",null,"Users are able to controlling ReSpeaker Mic Array via USB HID. Please see our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool"},"Communication protocol"),"."),(0,i.kt)("p",null,"Note that if you are using the lastest ",(0,i.kt)("em",{parentName:"p"},"raw version"),", you could only control the LEDs."),(0,i.kt)("p",null,"And here is an python example :"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-Python"},"#!/usr/bin/env python\n\nimport respeaker.usb_hid as usb_hid\n\nclass MicArray:\n    def __init__(self):\n        self.hid = usb_hid.get()\n\n    def write(self, address, data):\n        data = self.to_bytearray(data)\n        length = len(data)\n        if self.hid:\n            packet = bytearray([address & 0xFF, (address >> 8) & 0x7F, length & 0xFF, (length >> 8) & 0xFF]) + data\n            packet = list(packet)\n            self.hid.write(packet)\n\n    def read(self, address, length):\n        self.hid.write(list(bytearray([address & 0xFF, (address >> 8) & 0xFF | 0x80, length & 0xFF, (length >> 8) & 0xFF])))\n        for _ in range(6):\n            data = self.hid.read()\n            # print [int(x) for x in data]\n            # skip VAD data\n            if int(data[0]) != 0xFF and int(data[1]) != 0xFF:\n                return data[4:(4 + length)]\n\n    @staticmethod\n    def to_bytearray(data):\n        if type(data) is int:\n            array = bytearray([data & 0xFF])\n        elif type(data) is bytearray:\n            array = data\n        elif type(data) is str:\n            array = bytearray(data)\n        elif type(data) is list:\n            array = bytearray(data)\n        else:\n            raise TypeError('%s is not supported' % type(data))\n        return array\n\ndef main():\n    import sys\n    import struct\n\n    mic = MicArray()\n\n    print(\"Using: %s\" % usb_hid.usb_backend)\n\n    if len(sys.argv) < 3:\n        print('Usage: python {} w 0x0 0x000003'.format(sys.argv[0]))\n        sys.exit(1)\n\n    try:\n        if sys.argv[2].startswith('0x'):\n            address = int(sys.argv[2], 16)\n        else:\n            address = int(sys.argv[2])\n\n        if sys.argv[1] == 'w':\n            if sys.argv[3].startswith('0x'):\n                data = int(sys.argv[3], 16)\n            else:\n                data = int(sys.argv[3])\n\n            if data > 0xFFFF:\n                data = struct.pack('<I', data)\n            elif data > 0xFF:\n                data = struct.pack('<H', data)\n\n            mic.write(address, data)\n        else:\n            print [int(x) for x in mic.read(address, 4)]\n    except Exception as e:\n        print(e.message)\n\nif __name__ == '__main__':\n    main()\n")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"q1-how-to-get-audio-source-direction-from-mic-array-with-xvsm-version-firmware"},"Q1: How to get audio source direction from Mic Array with ",(0,i.kt)("em",{parentName:"h3"},"xvsm version")," firmware?"),(0,i.kt)("p",null,"  When using Windows, follow the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/respeaker/get_started_with_respeaker/wiki/Mic-Array"},"guide")," or use our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool"},"HID tool"),"."),(0,i.kt)("p",null,"  Python & C hidapi examples are ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/elthef/respeaker-xmos-hid"},"here")),(0,i.kt)("h3",{id:"q2-how-to-use-audacity-to-extract-the-8-channels-raw-data-on-windows"},"Q2: How to use audacity to extract the 8 channels raw data on Windows?"),(0,i.kt)("p",null,"  Please select Windows WASA, here is the picture. If you want to switch firmware version from 0x032 to 0x082, before you do that, please uninstall your device in\ndevices managment first. after uninstalling, update the firmware via DFU and reinstall the device."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/audacity.png",alt:null})),(0,i.kt)("h3",{id:"q3-how-does-mic-array-communicate-with-respeaker-core"},"Q3: How does Mic array communicate with Respeaker Core?"),(0,i.kt)("p",null,"  Mic array communicates with Respeaker Core through USB."),(0,i.kt)("h3",{id:"q4-what-does-respeaker-microphone-array-hid-tool-vad-stand-for"},"Q4: What does ",(0,i.kt)("a",{parentName:"h3",href:"https://github.com/Fuhua-Chen/ReSpeaker-Microphone-Array-HID-tool"},"ReSpeaker-Microphone-Array-HID-tool")," VAD stand for?"),(0,i.kt)("p",null,"  ",(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/img/VAD.png",alt:null})),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Data"),(0,i.kt)("th",{parentName:"tr",align:null},"Degree"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"1e, 0"),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"e, 1"),(0,i.kt)("td",{parentName:"tr",align:null},"270")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"d2,0"),(0,i.kt)("td",{parentName:"tr",align:null},"210")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"96,0"),(0,i.kt)("td",{parentName:"tr",align:null},"150")))),(0,i.kt)("h2",{id:"schematic-online-viewer"},"Schematic Online Viewer"),(0,i.kt)("div",{className:"altium-ecad-viewer","data-project-src":"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Eagle%20File.zip",style:{borderRadius:"0px 0px 4px 4px",height:500,borderStyle:"solid",borderWidth:1,borderColor:"rgb(241, 241, 241)",overflow:"hidden",maxWidth:1280,maxHeight:700,boxSizing:"border-box"}}),(0,i.kt)("h2",{id:"resources"},"Resources"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.sch.zip"},"ReSpeaker Microphone Array SCH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[Eagle]"),(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0.brd.zip"},"ReSpeaker Microphone Array BRD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20Sch.pdf"},"ReSpeaker Microphone Array SCH")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"[PDF]")," ",(0,i.kt)("a",{parentName:"li",href:"https://files.seeedstudio.com/wiki/ReSpeaker_Mic_Array/res/Respeaker%20Microphone%20Array%20v1.0%20PCB.pdf"},"ReSpeaker Microphone Array PCB"))),(0,i.kt)("h2",{id:"project"},"Project"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Build Google Assistant on RPi with ReSpeaker Mic Array"),": With ReSpeaker Mic Array, now we can build Google Assistant on Raspberry Pi!"),(0,i.kt)("iframe",{frameborder:"0",height:"327.5",scrolling:"no",src:"https://www.hackster.io/SeeedStudio/build-google-assistant-on-rpi-with-respeaker-mic-array-1030bb/embed",width:"350"}),(0,i.kt)("h2",{id:"tech-support"},"Tech Support"),(0,i.kt)("p",null,"Please submit any technical issue into our ",(0,i.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,i.kt)("div",null,(0,i.kt)("br",null),(0,i.kt)("p",{style:{textAlign:"center"}},(0,i.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}u.isMDXComponent=!0}}]);
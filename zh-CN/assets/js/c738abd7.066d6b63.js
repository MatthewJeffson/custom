"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[48885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},33751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const r={description:"This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.",title:"Usage of Seeed Studio XIAO ESP32S3 microphone",keywords:["Template"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_sense_mic",last_update:{date:"04/14/2023",author:"MengDu"}},o="Usage of Seeed Studio XIAO ESP32S3 microphone",s={unversionedId:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic",id:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic",title:"Usage of Seeed Studio XIAO ESP32S3 microphone",description:"This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.",source:"@site/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic.md",sourceDirName:"Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense",slug:"/xiao_esp32s3_sense_mic",permalink:"/custom/zh-CN/xiao_esp32s3_sense_mic",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/SeeedStudio_XIAO/SeeedStudio_XIAO_ESP32S3_Sense/XIAO_ESP32S3_Sense_mic.md",tags:[],version:"current",lastUpdatedBy:"MengDu",lastUpdatedAt:1681401600,formattedLastUpdatedAt:"2023\u5e744\u670813\u65e5",frontMatter:{description:"This article describes how to use the microphone on the XIAO ESP32S3 Sense expansion board.",title:"Usage of Seeed Studio XIAO ESP32S3 microphone",keywords:["Template"],image:"https://files.seeedstudio.com/wiki/seeed_logo/logo_2023.png",slug:"/xiao_esp32s3_sense_mic",last_update:{date:"04/14/2023",author:"MengDu"}},sidebar:"ProductSidebar",previous:{title:"Pin Multiplexing with Seeed Studio XIAO ESP32S3 (Sense)",permalink:"/custom/zh-CN/xiao_esp32s3_pin_multiplexing"},next:{title:"File System and XIAO ESP32S3 Sense",permalink:"/custom/zh-CN/xiao_esp32s3_sense_filesystem"}},l={},d=[{value:"Getting Started",id:"getting-started",level:2},{value:"Installation of expansion boards (for Sense)",id:"installation-of-expansion-boards-for-sense",level:3},{value:"Prepare the microSD card",id:"prepare-the-microsd-card",level:3},{value:"Detection of sound loudness",id:"detection-of-sound-loudness",level:2},{value:"Program annotation",id:"program-annotation",level:3},{value:"Save recorded sound to microSD card",id:"save-recorded-sound-to-microsd-card",level:2},{value:"Program annotation",id:"program-annotation-1",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Why can&#39;t I play the recorded audio files?",id:"why-cant-i-play-the-recorded-audio-files",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage-of-seeed-studio-xiao-esp32s3-microphone"},"Usage of Seeed Studio XIAO ESP32S3 microphone"),(0,a.kt)("p",null,"In this tutorial, we will bring you how to use the microphone of XIAO ESP32S3 Sense expansion board. First is the very basic use of the I2S pin, we will get the loudness of the current environment by using I2S and the microphone, and display it in the serial waveform graph. Then we will explain how to record sound and save the recorded sound to the SD card."),(0,a.kt)("div",{class:"table-center"},(0,a.kt)("table",{align:"center"},(0,a.kt)("tr",null,(0,a.kt)("th",null,"Seeed Studio XIAO ESP32S3 Sense")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/xiaoesp32s3sense.jpg",style:{width:250,height:"auto"}})))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("div",{class:"get_one_now_container",style:{textAlign:"center"}},(0,a.kt)("a",{class:"get_one_now_item",href:"https://www.seeedstudio.com/XIAO-ESP32S3-Sense-p-5639.html"},(0,a.kt)("strong",null,(0,a.kt)("span",null,(0,a.kt)("font",{color:"FFFFFF",size:"4"}," Get One Now \ud83d\uddb1\ufe0f"))))))))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"All contents of this tutorial are applicable to XIAO ESP32S3 Sense only.")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"Before starting the content of the tutorial, you may need to prepare the following hardware and software in advance."),(0,a.kt)("h3",{id:"installation-of-expansion-boards-for-sense"},"Installation of expansion boards (for Sense)"),(0,a.kt)("p",null,'Installing the expansion board is very simple, you just need to align the connector on the expansion board with the B2B connector on the XIAO ESP32S3, press it hard and hear a "click", the installation is complete.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/61.gif",style:{width:500,height:"auto"}})),(0,a.kt)("h3",{id:"prepare-the-microsd-card"},"Prepare the microSD card"),(0,a.kt)("p",null,"You may need a MicroSD card when working on a project where recordings are saved."),(0,a.kt)("p",null,"XIAO ESP32S3 Sense supports microSD cards up to ",(0,a.kt)("strong",{parentName:"p"},"32GB"),", so if you are ready to buy a microSD card for XIAO, please refer to this specification. And format the microSD card to ",(0,a.kt)("strong",{parentName:"p"},"FAT32")," format before using the microSD card."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/67.png",style:{width:250,height:"auto"}})),(0,a.kt)("p",null,"After formatting, you can insert the microSD card into the microSD card slot. Please note the direction of insertion, the side with the gold finger should face inward."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/66.jpg",style:{width:500,height:"auto"}})),(0,a.kt)("h2",{id:"detection-of-sound-loudness"},"Detection of sound loudness"),(0,a.kt)("p",null,"For the first project case, let's detect the noise in the environment and show the ambient loudness detected by the microphone using the Arduino IDE's serial port waveform graph."),(0,a.kt)("p",null,"The following is the complete sample program."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <I2S.h>\n\nvoid setup() {\n  // Open serial communications and wait for port to open:\n  // A baud rate of 115200 is used instead of 9600 for a faster data rate\n  // on non-native USB ports\n  Serial.begin(115200);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for native USB port only\n  }\n\n  // start I2S at 16 kHz with 16-bits per sample\n  I2S.setAllPins(-1, 42, 41, -1, -1);\n  if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1); // do nothing\n  }\n}\n\nvoid loop() {\n  // read a sample\n  int sample = I2S.read();\n\n  if (sample && sample != -1 && sample != 1) {\n    Serial.println(sample);\n  }\n}\n')),(0,a.kt)("p",null,"Upload this program for XIAO ESP32S3 Sense and open ",(0,a.kt)("strong",{parentName:"p"},"Serial Plotter"),", you will see the loudness change curve of the sound."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/83.png",style:{width:600,height:"auto"}})),(0,a.kt)("h3",{id:"program-annotation"},"Program annotation"),(0,a.kt)("p",null,"At the beginning of the program, we need to first import the I2S library in order to use the microphone pins."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"#include <I2S.h>\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"setAllPins()")," function is called on the I2S object to configure the pins used for the I2S interface. The function takes five integer parameters that represent the GPIO pins connected to the I2S interface's bit clock, word select, data input, data output, and channel select lines, respectively."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"I2S.setAllPins(-1, 42, 41, -1, -1);\n")),(0,a.kt)("p",null,"In this specific code, the ",(0,a.kt)("inlineCode",{parentName:"p"},"-1")," values indicate that the corresponding pins are not used, while the ",(0,a.kt)("inlineCode",{parentName:"p"},"42")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"41")," values represent the GPIO pins connected to the word select and data input lines, respectively. The data output and channel select lines are not used in this configuration and are set to ",(0,a.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'if (!I2S.begin(PDM_MONO_MODE, 16000, 16)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1); // do nothing\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"begin()")," function is called on the I2S object to initialize the I2S interface with the specified parameters: ",(0,a.kt)("inlineCode",{parentName:"p"},"PDM_MONO_MODE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"16000")," Hz sample rate, and ",(0,a.kt)("inlineCode",{parentName:"p"},"16-bit")," resolution."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It should be noted that for the current ESP32-S3 chip, we can only use ",(0,a.kt)("inlineCode",{parentName:"p"},"PDM_MONO_MODE")," and the sampling bit width can only be ",(0,a.kt)("inlineCode",{parentName:"p"},"16bit"),". only the sampling rate can be modified, but after testing, the sampling rate at 16kHz is relatively stable.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"int sample = I2S.read();\n\nif (sample && sample != -1 && sample != 1) {\n    Serial.println(sample);\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"read()")," function is called on the I2S object to read a single audio sample from the I2S interface. The if statement checks the value of the sample variable. If the sample value is not 0, -1, or 1, it is considered a valid audio sample, and the code inside the if block will be executed. In this case, the sample value is printed to the serial console using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Serial.println()")," function."),(0,a.kt)("h2",{id:"save-recorded-sound-to-microsd-card"},"Save recorded sound to microSD card"),(0,a.kt)("p",null,"In this next project, we will guide you how to combine the functions of the microSD card and save the recorded sound to the microSD card. Then for this project, please prepare the microSD card and format it to ",(0,a.kt)("strong",{parentName:"p"},"FAT32")," format in advance."),(0,a.kt)("p",null,"If this is your first time using a microSD card on the XIAO ESP32S3, you can read the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3001/xiao_esp32s3_sense_filesystem#prepare-the-microsd-card"},"file system Wiki")," content to learn about microSD card installation and preparation."),(0,a.kt)("p",null,"The following is the Arduino program for this project."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'/* \n * WAV Recorder for Seeed XIAO ESP32S3 Sense \n*/\n\n#include <I2S.h>\n#include "FS.h"\n#include "SD.h"\n#include "SPI.h"\n\n// make changes as needed\n#define RECORD_TIME   20  // seconds, The maximum value is 240\n#define WAV_FILE_NAME "arduino_rec"\n\n// do not change for best\n#define SAMPLE_RATE 16000U\n#define SAMPLE_BITS 16\n#define WAV_HEADER_SIZE 44\n#define VOLUME_GAIN 2\n\nvoid setup() {\n  Serial.begin(115200);\n  while (!Serial) ;\n  I2S.setAllPins(-1, 42, 41, -1, -1);\n  if (!I2S.begin(PDM_MONO_MODE, SAMPLE_RATE, SAMPLE_BITS)) {\n    Serial.println("Failed to initialize I2S!");\n    while (1) ;\n  }\n  if(!SD.begin(21)){\n    Serial.println("Failed to mount SD Card!");\n    while (1) ;\n  }\n  record_wav();\n}\n\nvoid loop() {\n  delay(1000);\n  Serial.printf(".");\n}\n\nvoid record_wav()\n{\n  uint32_t sample_size = 0;\n  uint32_t record_size = (SAMPLE_RATE * SAMPLE_BITS / 8) * RECORD_TIME;\n  uint8_t *rec_buffer = NULL;\n  Serial.printf("Ready to start recording ...\\n");\n\n  File file = SD.open("/"WAV_FILE_NAME".wav", FILE_WRITE);\n  // Write the header to the WAV file\n  uint8_t wav_header[WAV_HEADER_SIZE];\n  generate_wav_header(wav_header, record_size, SAMPLE_RATE);\n  file.write(wav_header, WAV_HEADER_SIZE);\n\n  // PSRAM malloc for recording\n  rec_buffer = (uint8_t *)ps_malloc(record_size);\n  if (rec_buffer == NULL) {\n    Serial.printf("malloc failed!\\n");\n    while(1) ;\n  }\n  Serial.printf("Buffer: %d bytes\\n", ESP.getPsramSize() - ESP.getFreePsram());\n\n  // Start recording\n  esp_i2s::i2s_read(esp_i2s::I2S_NUM_0, rec_buffer, record_size, &sample_size, portMAX_DELAY);\n  if (sample_size == 0) {\n    Serial.printf("Record Failed!\\n");\n  } else {\n    Serial.printf("Record %d bytes\\n", sample_size);\n  }\n\n  // Increase volume\n  for (uint32_t i = 0; i < sample_size; i += SAMPLE_BITS/8) {\n    (*(uint16_t *)(rec_buffer+i)) <<= VOLUME_GAIN;\n  }\n\n  // Write data to the WAV file\n  Serial.printf("Writing to the file ...\\n");\n  if (file.write(rec_buffer, record_size) != record_size)\n    Serial.printf("Write file Failed!\\n");\n\n  free(rec_buffer);\n  file.close();\n  Serial.printf("The recording is over.\\n");\n}\n\nvoid generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)\n{\n  // See this for reference: http://soundfile.sapp.org/doc/WaveFormat/\n  uint32_t file_size = wav_size + WAV_HEADER_SIZE - 8;\n  uint32_t byte_rate = SAMPLE_RATE * SAMPLE_BITS / 8;\n  const uint8_t set_wav_header[] = {\n    \'R\', \'I\', \'F\', \'F\', // ChunkID\n    file_size, file_size >> 8, file_size >> 16, file_size >> 24, // ChunkSize\n    \'W\', \'A\', \'V\', \'E\', // Format\n    \'f\', \'m\', \'t\', \' \', // Subchunk1ID\n    0x10, 0x00, 0x00, 0x00, // Subchunk1Size (16 for PCM)\n    0x01, 0x00, // AudioFormat (1 for PCM)\n    0x01, 0x00, // NumChannels (1 channel)\n    sample_rate, sample_rate >> 8, sample_rate >> 16, sample_rate >> 24, // SampleRate\n    byte_rate, byte_rate >> 8, byte_rate >> 16, byte_rate >> 24, // ByteRate\n    0x02, 0x00, // BlockAlign\n    0x10, 0x00, // BitsPerSample (16 bits)\n    \'d\', \'a\', \'t\', \'a\', // Subchunk2ID\n    wav_size, wav_size >> 8, wav_size >> 16, wav_size >> 24, // Subchunk2Size\n  };\n  memcpy(wav_header, set_wav_header, sizeof(set_wav_header));\n}\n')),(0,a.kt)("p",null,"To execute this example, we will need to use the PSRAM function of the ESP-32 chip, so please turn it on before uploading."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/94.png",style:{width:700,height:"auto"}})),(0,a.kt)("p",null,"This program is executed only once after the user ",(0,a.kt)("strong",{parentName:"p"},"turns on the serial monitor"),', recording for 20 seconds and saving the recording file to microSD card as "arduino_rec.wav".'),(0,a.kt)("p",null,'When the "." is output every 1 second in the serial monitor, the program execution is finished and you can play the recorded sound file with the help of a card reader.'),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/102.png",style:{width:700,height:"auto"}})),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"To play the recorded audio from XIAO ESP32S3, you may need to use an audio player that supports WAV format.")),(0,a.kt)("h3",{id:"program-annotation-1"},"Program annotation"),(0,a.kt)("p",null,"In this program, we have written two functions for the recording function, one is ",(0,a.kt)("inlineCode",{parentName:"p"},"record_wav()")," and the other is ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_wav_header()"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"record_wav()"),": Recording function. In this function, the program reads audio data from a microphone using the I2S interface, and stores it into an SD card as a WAV audio file."),(0,a.kt)("p",{parentName:"li"},"a. Initialize variables. The program defines a buffer ",(0,a.kt)("inlineCode",{parentName:"p"},"rec_buffer")," for storing the recorded data, and sets the recording time ",(0,a.kt)("inlineCode",{parentName:"p"},"RECORD_TIME"),"."),(0,a.kt)("p",{parentName:"li"},"b. Open the WAV file. The program uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"SD.open()")," function to open a WAV audio file, and defines its filename as ",(0,a.kt)("inlineCode",{parentName:"p"},"WAV_FILE_NAME"),"."),(0,a.kt)("p",{parentName:"li"},"c. Write the WAV file header. The program generates the header information of the WAV audio file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"generate_wav_header()")," function, and writes it into the opened WAV file."),(0,a.kt)("p",{parentName:"li"},"d. Allocate memory and start recording. The program uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"ps_malloc()")," function to allocate a block of memory in the ESP32S3's PSRAM for storing the recorded data, and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"esp_i2s::i2s_read()")," function to read audio data from the microphone. The read data is stored in the rec_buffer buffer."),(0,a.kt)("p",{parentName:"li"},"e. Increase volume. The program increases the volume of the recorded data using a gain value defined by the ",(0,a.kt)("inlineCode",{parentName:"p"},"VOLUME_GAIN")," constant."),(0,a.kt)("p",{parentName:"li"},"f. Write the recorded data into the WAV file. The program uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"file.write()")," function to write the recorded data into the opened WAV file."),(0,a.kt)("p",{parentName:"li"},"g. Free the buffer memory and close the WAV file. The program uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"free()")," function to free the memory of the ",(0,a.kt)("inlineCode",{parentName:"p"},"rec_buffer")," buffer, and uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"file.close()")," function to close the opened WAV file.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"generate_wav_header(uint8_t *wav_header, uint32_t wav_size, uint32_t sample_rate)"),": Function for generating the header information of a WAV file. In this function, the program generates a byte array containing the header information of a WAV file based on the WAV file's specifications."),(0,a.kt)("p",{parentName:"li"},"a. Define the constants for the WAV file header information. The program defines a byte array ",(0,a.kt)("inlineCode",{parentName:"p"},"set_wav_header")," containing the header information of a WAV file, and defines the constants for the WAV file's specifications, including ",(0,a.kt)("inlineCode",{parentName:"p"},"NUM_CHANNELS"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BITS_PER_SAMPLE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"WAV_HEADER_SIZE"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"SUB_CHUNK_SIZE"),"."),(0,a.kt)("p",{parentName:"li"},"b. Set the WAV file header information. The program sets the WAV file header information using the constants defined in step a, and calculates the values of some fields based on the WAV file's specifications, including ",(0,a.kt)("inlineCode",{parentName:"p"},"AUDIO_FORMAT"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BYTE_RATE"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"BLOCK_ALIGN"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"SAMPLES_PER_CHANNEL"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"CHUNK_SIZE"),". The calculated values are stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"set_wav_header")," byte array."),(0,a.kt)("p",{parentName:"li"},"c. Copy the WAV file header information. The program copies the header information stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"set_wav_header")," to the byte array ",(0,a.kt)("inlineCode",{parentName:"p"},"wav_header"),"."))),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("h3",{id:"why-cant-i-play-the-recorded-audio-files"},"Why can't I play the recorded audio files?"),(0,a.kt)("p",null,"If you encounter a situation where you cannot play, please check the debug information printed by the serial monitor for error messages about reading and writing cards. If there is, please replace the microSD card or check if the card and expansion board connection is loose or unstable. If there is no problem with the card, then the audio file should be sized, if there is a problem with the recording, it may show up as a recorded audio file size of only 0KB."),(0,a.kt)("p",null,"For example, in the figure below, there is a problem with the card reading and writing."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/SeeedStudio-XIAO-ESP32S3/img/103.png",style:{width:600,height:"auto"}})),(0,a.kt)("p",null,"If there are no problems with the card and the recording is quite successful. Then you need to check if the software supports audio playback in WAV format. We recommend using special music playing software to play audio, try not to use video player to play. After actual testing, there are many video players (although they support WAV format) that are unable to play it."),(0,a.kt)("h2",{id:"tech-support"},"Tech Support"),(0,a.kt)("p",null,"Please submit any technical issues into our ",(0,a.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}c.isMDXComponent=!0}}]);
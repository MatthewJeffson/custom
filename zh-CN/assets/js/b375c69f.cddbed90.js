"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3121],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?i.createElement(h,a(a({ref:t},d),{},{components:n})):i.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16137:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={description:"Audio scene recognition",title:"Audio scene recognition",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-3",last_update:{date:"1/30/2023",author:"jianjing Huang"}},a="Wio Terminal Edge Impulse Audio Scene Recognition with Built-in Microphone",s={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-3",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-3",title:"Audio scene recognition",description:"Audio scene recognition",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-3.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/Wio-Terminal-TinyML-EI-3",permalink:"/custom/zh-CN/Wio-Terminal-TinyML-EI-3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-3.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"2023\u5e741\u670830\u65e5",frontMatter:{description:"Audio scene recognition",title:"Audio scene recognition",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-3",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Continuous Motion Recognition",permalink:"/custom/zh-CN/Wio-Terminal-TinyML-EI-2"},next:{title:"People counting with Ultrasonic sensor",permalink:"/custom/zh-CN/Wio-Terminal-TinyML-EI-4"}},l={},c=[{value:"Sound processing in computers",id:"sound-processing-in-computers",level:2},{value:"Training data acquisition",id:"training-data-acquisition",level:2},{value:"Building a machine learning model",id:"building-a-machine-learning-model",level:2},{value:"Deploying to Wio Terminal",id:"deploying-to-wio-terminal",level:2},{value:"Blynk integration",id:"blynk-integration",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wio-terminal-edge-impulse-audio-scene-recognition-with-built-in-microphone"},"Wio Terminal Edge Impulse Audio Scene Recognition with Built-in Microphone"),(0,r.kt)("p",null,"In this project we will learn how to train and deploy an audio scene classifier with Wio Terminal and Edge Impulse.\nFor more details and video tutorial, watch the corresponding video!"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/2BISspenUng",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"sound-processing-in-computers"},"Sound processing in computers"),(0,r.kt)("p",null,'Audio scene classification is a task, where machine learning model needs to predict a class for audio segment, for example, "a crying baby", "a cough", "a dog barking", etc.'),(0,r.kt)("p",null,"Sound is an a vibration that propagates (or travels) as an acoustic wave, through a transmission medium such as a gas, liquid or solid."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/G2lY2zl.gif"})),"The source of sound pushes the surrounding medium molecules, they push the molecules next to them and so on and so forth. When they reach other object it also vibrates slightly \u2013 we use that principle in microphone.  The microphone membrane gets pushed inward by the medium molecules and then back to its original position.",(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/mic-working.gif"})),"That generates alternating current in the circuit, where voltage is proportional to sound amplitude \u2013 the louder the sound, the more it pushes membrane, thus generating higher voltage. We then read this voltage with analog-to-digital converter and record at equal intervals \u2013 the number of times we take measurement of sound in one second is called a sampling rate, for example 8000 Hz sampling rate is taking measurement 8000 times per second. Sampling rate obviously matters a lot for quality of the sound \u2013 if we sample too slow we might miss important bits and pieces. The numbers used for recording sound digitally also matter \u2013 the larger range of a number used, the more \u201cnuances\u201d we can preserve from the original sound. That is called audio bit depth \u2013 you might have heard terms like 8-bit sound and 16-bit sound. Well, it is exactly what is says on the tin \u2013 for 8-bit sound an unsigned 8-bit integers are used, which have range from 0 to 255. For 16-bit sound a signed 16-bit integers are used, so that\u2019s -32768 to 32767. Alright, so in the end we have a string of numbers, with larger   numbers corresponding to loud parts of the sound and we can visualize it like this - this is 1 second of gunshot sound recorded at 8000 Hz frequency in 8-bit depth (0-255).",(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture1.PNG"})),(0,r.kt)("p",null,"We can\u2019t do much with this raw  sound representation though \u2013 yes, we can cut and paste the parts or make it quilter or louder, but for analyzing the sound, it is, well, too raw. Here is where Fourier transform, Mel scale, spectrograms and cepstrum coefficients come in.  For purpose of this project, we\u2019ll define Fourier transform as a mathematical  transform, that that allows us to decompose a signal into it\u2019s  individual frequencies and the frequency\u2019s amplitude."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/1 xTYCtcx_7otHVu-uToI9dA.png"})),(0,r.kt)("p",null,"Or, if you'd like to use a metaphor \u2013 given the smoothie, it outputs the recipe."),(0,r.kt)("p",null,"There is a lot of materials on the Internet about Fourier transform, for example ",(0,r.kt)("a",{parentName:"p",href:"https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/"},"this article from betterexplained.com")," and ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/spUNpyF58BY"},"a video from 3Blue1Gray")," \u2013 check them out to find more about FFT."),(0,r.kt)("p",null,"That is how our sound looks like after applying Fourier transform \u2013 the higher bars correspond to larger amplitude frequencies."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture2.PNG"})),(0,r.kt)("p",null,"That\u2019s great! Now we can do  more interesting things with audio signal \u2013  for example eliminate the least important frequencies to compress the audio file or remove the noise or maybe the sound of voice, etc. But it  is still not good enough for audio and speech recognition \u2013  by doing Fourier transform we lose all the time domain information,  which is not good for non-periodic signals, such as human speech. We are smart cookies though and just take Fourier transform multiple times on the signal sample, essentially slicing it and then stitching the data from multiple Fourier transforms back together in form of spectrogram."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/1 tIBRdtG3EfjmSIlraWVIxw.png"})),(0,r.kt)("p",null,"Here x-axis is the time, y-axis is frequency and the amplitude of a frequency is expressed through a color, brighter colors correspond to larger amplitude."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture3.PNG"})),(0,r.kt)("p",null,"Very well! Can we do sound recognition now? No! Yes! Maybe!\nNormal  spectrogram contains too much information if we only care  about  recognizing sounds that human ear can hear. Studies have shown  that humans do not perceive frequencies on a linear scale. We are better at  detecting differences in lower frequencies than higher frequencies. For example, we can easily tell the difference between 500 and 1000 Hz,  but we will hardly be able to tell a difference between 10000 and  10500 Hz, even though the distance between the two pairs are the same.\nIn  1937, Stevens, Volkmann, and Newmann proposed a unit of pitch such that equal distances in pitch sounded equally distant to the listener. This is called the mel scale."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/1 erUKb2-Z-Wi_u8JWel6cDQ.gif"})),(0,r.kt)("p",null,"A mel spectrogram is a spectrogram where the frequencies are converted to the mel scale."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/Capture4.PNG"})),(0,r.kt)("p",null,"There are more steps involved for recognizing speech \u2013 for example cepstrum coefficients, that we mentioned above \u2013 we will discuss them in later projects. It is time to finally start with practical implementation."),(0,r.kt)("h2",{id:"training-data-acquisition"},"Training data acquisition"),(0,r.kt)("p",null,"Audio signal needs to be sampled at very high sampling rate, 8000 Hz or, ideally, 16000 Hz. Edge Impulse Data Forwarder tool is too slow to handle this sampling rate, so we will need to use dedicated data collection firmware to get the data for this project. Download a new version of Wio Terminal Edge Impulse firmware with microphone support and flash it to your device, as described on ",(0,r.kt)("a",{parentName:"p",href:"#"},"Getting started with Edge Impulse")," page. After that create a new project on Edge Impulse platform, launch edge-impulse ingestion service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"edge-impulse-daemon\n")),(0,r.kt)("p",null,"If you used edge-impulse-daemon before, you will need to add --clean to the command above to clean project data."),(0,r.kt)("p",null,"Then log in with your credentials and choose a project you have just created. Go to Data Acquisition tab and you can start getting data samples."),(0,r.kt)("p",null,"We will have three classes of data:"),(0,r.kt)("p",null,"\u2022 background"),(0,r.kt)("p",null,"\u2022 coughing"),(0,r.kt)("p",null,"\u2022 crying"),(0,r.kt)("p",null,"Record 10 samples for each class, 5000 milliseconds duration each. You can recording the sounds played from the computer speakers (except for background class), but if you have the opportunity to record real sounds, that would be even better."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough.png"})),(0,r.kt)("p",null,"For background class record sounds that should not be classified as coughing or crying, e.g. people talking, no sounds, air conditioning/fan and so on and so forth."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_p.png"})),(0,r.kt)("p",null,"30 samples is abysmally small, so we\u2019re also going to upload some more data. Simply download the sounds from the Internet, resample them to 16000 Hz and save them to .wav format with this converter script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import librosa \nimport sys\nimport soundfile as sf\ninput_filename = sys.argv[1]\noutput_filename = sys.argv[2]\n   \ndata, samplerate = librosa.load(input_filename, sr=16000)\nprint(data.shape, samplerate)\nsf.write(output_filename, data, samplerate, subtype='PCM_16')\n")),(0,r.kt)("p",null,"Copy the code and paste it in a text document (use Notepad++, IDLE IDE or other suitable IDE. Do not use Windows default Notepad)."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/path.png"})),(0,r.kt)("p",null,"Save document as ",(0,r.kt)("inlineCode",{parentName:"p"},"converter.py")," and then from Anaconda environment run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python converter.py name-of-the-downloaded-file class_name.number.wav\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/command.png"})),(0,r.kt)("p",null,"You can find example sound files already converted to right format in Github repository for this project.\nThen split all the sound samples to leave only \u201cinteresting\u201d pieces \u2013 do that for every class, except for background."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/data.png"})),(0,r.kt)("p",null,"After the data collection is done, it is time to choose processing blocks and define our neural network model."),(0,r.kt)("h2",{id:"building-a-machine-learning-model"},"Building a machine learning model"),(0,r.kt)("p",null,"Among the processing blocks we see three familiar options \u2013 namely  Raw,  Spectral Analysis, which is essentially Fourier transform of the signal, Spectrogram and MFE (Mel-Frequency Energy banks) \u2013 which correspond to four stages of audio processing we described earlier!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/data_process.jpeg"})),(0,r.kt)("p",null,"If you like experimenting, you can try using all of them on your data,  except for maybe Raw, which will have too much data for our small-ish neural network. For the purpose of this lesson we will just go with the best option for this task, which is MFE or Mel-Frequency Energy banks. After computing the features, go to NN classifier tab and choose a suitable model architecture. The two choices we have are using 1D Conv  and 2D Conv. Both will work, but If possible, we should always go for smaller model, since we will want to deploy it to embedded device. When writing the materials for this course we ran  4 different experiments, 1D Conv/2D Conv with MFE and MFCC features and the results for them are in this table."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/table.PNG"})),(0,r.kt)("p",null,"The best model was 1D Conv network with MFE processing block. By tweaking MFE parameters (namely  increasing stride to 0.02 and decreasing low frequency to 0) we have achieved accuracy of 89.4% on validation dataset."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/accuracy.png"})),(0,r.kt)("p",null,"You can find the trained model ",(0,r.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/25382/latest"},"here")," and test it out yourself. While it is good at distinguishing crying sounds from background, coughing sound detection accuracy is a bit low low and might require obtaining more samples."),(0,r.kt)("h2",{id:"deploying-to-wio-terminal"},"Deploying to Wio Terminal"),(0,r.kt)("p",null,"After we have our model and satisfied with its accuracy in training,  we  can test it on new data in Live classification tab and then Deploy it to Wio terminal. We\u2019ll download it as Arduino library, put it in  Arduino libraries folder and open Examples -> name of your project -> nano_33_ble_sense_microphone_continuous. The demo is based on Arduino Nano 33 BLE and uses PDM library. For Wio Terminal we will rely on DMA or Direct Memory Access controller to obtain samples from ADC (Analog to Digital Converter) and save them to inference buffer without involvement of MCU."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/dma.jpeg"})),(0,r.kt)("p",null,"That will allow us to collect the sound samples and perform inference at the same time. There is quite a few changes we need to make in order to change sound data collection from PDM library to DMA, if you feel a bit lost during the explanation, have a look at the full sample code, which you can find in the course materials.\nDelete PDM library from the sketch"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <PDM.h>\n")),(0,r.kt)("p",null,"Add DMA descriptor structure, and other settings constants right after last include statement"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Settings\n#define DEBUG 1                 // Enable pin pulse during ISR  \nenum {ADC_BUF_LEN = 4096};    // Size of one of the DMA double buffers\nstatic const int debug_pin = 1; // Toggles each DAC ISR (if DEBUG is set to 1)\n\n// DMAC descriptor structure\ntypedef struct {\n  uint16_t btctrl;\n  uint16_t btcnt;\n  uint32_t srcaddr;\n  uint32_t dstaddr;\n  uint32_t descaddr;\n} dmacdescriptor;\n")),(0,r.kt)("p",null,"Then right before setup function create variables for buffer arrays, volatile variables for passing the values between ISR callback and the main code and also High pass Butterworth filter, which we will apply to signal to eliminate most of DC component in microphone signal."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Globals - DMA and ADC\nvolatile uint8_t recording = 0;\nvolatile boolean results0Ready = false;\nvolatile boolean results1Ready = false;\nuint16_t adc_buf_0[ADC_BUF_LEN];    // ADC results array 0\nuint16_t adc_buf_1[ADC_BUF_LEN];    // ADC results array 1\nvolatile dmacdescriptor wrb[DMAC_CH_NUM] __attribute__ ((aligned (16)));          // Write-back DMAC descriptors\ndmacdescriptor descriptor_section[DMAC_CH_NUM] __attribute__ ((aligned (16)));    // DMAC channel descriptors\ndmacdescriptor descriptor __attribute__ ((aligned (16)));                         // Place holder descriptor\n\n//High pass butterworth filter order=1 alpha1=0.0125 \nclass  FilterBuHp1\n{\n  public:\n    FilterBuHp1()\n    {\n      v[0]=0.0;\n    }\n  private:\n    float v[2];\n  public:\n    float step(float x) //class II \n    {\n      v[0] = v[1];\n      v[1] = (9.621952458291035404e-1f * x)\n         + (0.92439049165820696974f * v[0]);\n      return \n         (v[1] - v[0]);\n    }\n};\n\nFilterBuHp1 filter;\n")),(0,r.kt)("p",null,"Add three blocks of code after that - the first one is a callback function, called by ISR (Interrupt Service Routine) every time one of the two buffers filled. Inside that function we read elements from recording buffer (the one that was filled just now), process them and put into an inference buffer."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/*******************************************************************************\n * Interrupt Service Routines (ISRs)\n */\n\n/**\n * @brief      Copy sample data in selected buf and signal ready when buffer is full\n *\n * @param[in]  *buf  Pointer to source buffer\n * @param[in]  buf_len  Number of samples to copy from buffer\n */\nstatic void audio_rec_callback(uint16_t *buf, uint32_t buf_len) {\n\n  static uint32_t idx = 0;\n\n  // Copy samples from DMA buffer to inference buffer\n  if (recording) {\n    for (uint32_t i = 0; i < buf_len; i++) {\n  \n      // Convert 12-bit unsigned ADC value to 16-bit PCM (signed) audio value\n      inference.buffers[inference.buf_select][inference.buf_count++] = filter.step(((int16_t)buf[i] - 1024) * 16);\n      // Swap double buffer if necessary\n      if (inference.buf_count >= inference.n_samples) {\n        inference.buf_select ^= 1;\n        inference.buf_count = 0;\n        inference.buf_ready = 1;\n      }\n    }\n  }\n}\n")),(0,r.kt)("p",null,"Next block contains the ISR itself - it is executed by a timer at certain period of time, inside of that function we check if DMAC channel 1 has been suspended - if it has been suspended it means that one of the buffers for microphone data has filled and we need to copy the data from it, switch to another buffer and restart DMAC ADC."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Interrupt Service Routine (ISR) for DMAC 1\n */\nvoid DMAC_1_Handler() {\n\n  static uint8_t count = 0;\n\n  // Check if DMAC channel 1 has been suspended (SUSP)\n  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {\n\n     // Debug: make pin high before copying buffer\n#if DEBUG\n    digitalWrite(debug_pin, HIGH);\n#endif\n\n    // Restart DMAC on channel 1 and clear SUSP interrupt flag\n    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;\n    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;\n\n    // See which buffer has filled up, and dump results into large buffer\n    if (count) {\n      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);\n    } else {\n      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);\n    }\n\n    // Flip to next buffer\n    count = (count + 1) % 2;\n\n    // Debug: make pin low after copying buffer\n#if DEBUG\n    digitalWrite(debug_pin, LOW);\n#endif\n  }\n}\n")),(0,r.kt)("p",null,"Next block contains configuration data for ADC DMAC and timer controlling ISR (interrupt Service Routine)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"// Configure DMA to sample from ADC at regular interval\nvoid config_dma_adc() {\n  \n  // Configure DMA to sample from ADC at a regular interval (triggered by timer/counter)\n  DMAC->BASEADDR.reg = (uint32_t)descriptor_section;                          // Specify the location of the descriptors\n  DMAC->WRBADDR.reg = (uint32_t)wrb;                                          // Specify the location of the write back descriptors\n  DMAC->CTRL.reg = DMAC_CTRL_DMAENABLE | DMAC_CTRL_LVLEN(0xf);                // Enable the DMAC peripheral\n  DMAC->Channel[1].CHCTRLA.reg = DMAC_CHCTRLA_TRIGSRC(TC5_DMAC_ID_OVF) |      // Set DMAC to trigger on TC5 timer overflow\n                                 DMAC_CHCTRLA_TRIGACT_BURST;                  // DMAC burst transfer\n                                 \n  descriptor.descaddr = (uint32_t)&descriptor_section[1];                     // Set up a circular descriptor\n  descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                           // Take the result from the ADC0 RESULT register\n  descriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_0 array\n  descriptor.btcnt = ADC_BUF_LEN;                                             // Beat count\n  descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |                            // Beat size is HWORD (16-bits)\n                      DMAC_BTCTRL_DSTINC |                                    // Increment the destination address\n                      DMAC_BTCTRL_VALID |                                     // Descriptor is valid\n                      DMAC_BTCTRL_BLOCKACT_SUSPEND;                           // Suspend DMAC channel 0 after block transfer\n  memcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));            // Copy the descriptor to the descriptor section\n  \n  descriptor.descaddr = (uint32_t)&descriptor_section[0];                     // Set up a circular descriptor\n  descriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                           // Take the result from the ADC0 RESULT register\n  descriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_1 array\n  descriptor.btcnt = ADC_BUF_LEN;                                             // Beat count\n  descriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |                            // Beat size is HWORD (16-bits)\n                      DMAC_BTCTRL_DSTINC |                                    // Increment the destination address\n                      DMAC_BTCTRL_VALID |                                     // Descriptor is valid\n                      DMAC_BTCTRL_BLOCKACT_SUSPEND;                           // Suspend DMAC channel 0 after block transfer\n  memcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));            // Copy the descriptor to the descriptor section\n\n  // Configure NVIC\n  NVIC_SetPriority(DMAC_1_IRQn, 0);    // Set the Nested Vector Interrupt Controller (NVIC) priority for DMAC1 to 0 (highest)\n  NVIC_EnableIRQ(DMAC_1_IRQn);         // Connect DMAC1 to Nested Vector Interrupt Controller (NVIC)\n\n  // Activate the suspend (SUSP) interrupt on DMAC channel 1\n  DMAC->Channel[1].CHINTENSET.reg = DMAC_CHINTENSET_SUSP;\n\n  // Configure ADC\n  ADC1->INPUTCTRL.bit.MUXPOS = ADC_INPUTCTRL_MUXPOS_AIN12_Val; // Set the analog input to ADC0/AIN2 (PB08 - A4 on Metro M4)\n  while(ADC1->SYNCBUSY.bit.INPUTCTRL);                // Wait for synchronization\n  ADC1->SAMPCTRL.bit.SAMPLEN = 0x00;                  // Set max Sampling Time Length to half divided ADC clock pulse (2.66us)\n  while(ADC1->SYNCBUSY.bit.SAMPCTRL);                 // Wait for synchronization \n  ADC1->CTRLA.reg = ADC_CTRLA_PRESCALER_DIV128;       // Divide Clock ADC GCLK by 128 (48MHz/128 = 375kHz)\n  ADC1->CTRLB.reg = ADC_CTRLB_RESSEL_12BIT |          // Set ADC resolution to 12 bits\n                    ADC_CTRLB_FREERUN;                // Set ADC to free run mode       \n  while(ADC1->SYNCBUSY.bit.CTRLB);                    // Wait for synchronization\n  ADC1->CTRLA.bit.ENABLE = 1;                         // Enable the ADC\n  while(ADC1->SYNCBUSY.bit.ENABLE);                   // Wait for synchronization\n  ADC1->SWTRIG.bit.START = 1;                         // Initiate a software trigger to start an ADC conversion\n  while(ADC1->SYNCBUSY.bit.SWTRIG);                   // Wait for synchronization\n\n  // Enable DMA channel 1\n  DMAC->Channel[1].CHCTRLA.bit.ENABLE = 1;\n\n  // Configure Timer/Counter 5\n  GCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN |        // Enable perhipheral channel for TC5\n                                   GCLK_PCHCTRL_GEN_GCLK1;    // Connect generic clock 0 at 48MHz\n   \n  TC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;               // Set TC5 to Match Frequency (MFRQ) mode\n  TC5->COUNT16.CC[0].reg = 3000 - 1;                          // Set the trigger to 16 kHz: (4Mhz / 16000) - 1\n  while (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Wait for synchronization\n\n  // Start Timer/Counter 5\n  TC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Enable the TC5 timer\n  while (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Wait for synchronization\n}\n")),(0,r.kt)("p",null,"Add the debug condition on top of the setup function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"  // Configure pin to toggle on DMA interrupt\n#if DEBUG\n  pinMode(debug_pin, OUTPUT);\n#endif\n")),(0,r.kt)("p",null,"Then in the setup function, after  run_classifier_init(); add the following code that creates inference buffers, configures DMA and starts the recording by setting volatile global variable recording to 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'  // Create double buffer for inference\n  inference.buffers[0] = (int16_t *)malloc(EI_CLASSIFIER_SLICE_SIZE * sizeof(int16_t));\n  \n  if (inference.buffers[0] == NULL) {\n    ei_printf("ERROR: Failed to create inference buffer 0");\n    return;\n  }\n  inference.buffers[1] = (int16_t *)malloc(EI_CLASSIFIER_SLICE_SIZE * \n      sizeof(int16_t));\n  if (inference.buffers[1] == NULL) {\n    ei_printf("ERROR: Failed to create inference buffer 1");\n    free(inference.buffers[0]);\n    return;\n  }\n\n  // Set inference parameters\n  inference.buf_select = 0;\n  inference.buf_count = 0;\n  inference.n_samples = EI_CLASSIFIER_SLICE_SIZE;\n  inference.buf_ready = 0;\n\n  // Configure DMA to sample from ADC at 16kHz (start sampling immediately)\n  config_dma_adc();\n\n  // Start recording to inference buffers\n  recording = 1;\n}\n')),(0,r.kt)("p",null,"Delete  ",(0,r.kt)("inlineCode",{parentName:"p"},"PDM.end();")," and  ",(0,r.kt)("inlineCode",{parentName:"p"},"free(sampleBuffer);")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"microphone_inference_end(void)")," function and also  ",(0,r.kt)("inlineCode",{parentName:"p"},"microphone_inference_start(uint32_t n_samples)")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pdm_data_ready_inference_callback(void)")," functions, since we're not using them.\nAfter compiling and uploading the code, open the Serial monitor and you will see probabilities for every classes printed out. Play some sounds or cough at Wio Terminal to check the accuracy!"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_r.png"})),(0,r.kt)("h2",{id:"blynk-integration"},"Blynk integration"),(0,r.kt)("p",null,"Since WioTerminal can connect to the Internet, we can take this simple demo and make it into a real IoT application with ",(0,r.kt)("a",{parentName:"p",href:"https://blynk.io"},"Blynk"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/b641e2030c1c47fbc7161c98a7e5d998.jpg"})),(0,r.kt)("p",null,"Blynk is a platform that allows you to quickly build interfaces for  controlling and monitoring your  hardware projects from your iOS and  Android devices. In this case we will use Blink to push notification to our smartphone if Wio Terminal detects any sounds we should worry about.\nTo get started with Blink,  download the app, register a new account and create a new project. Add a push notification element to it and press play button."),(0,r.kt)("div",null," ",(0,r.kt)("img",{width:"{200}",align:"left",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app1.png"})),(0,r.kt)("img",{width:"{200}",align:"right",src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app2.png"}),(0,r.kt)("p",null," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," ",(0,r.kt)("br",null)," "),(0,r.kt)("p",null,"Then make sure you have setup Wio Terminal WiFi libraries and firmware, according to the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Blynk/"},"guide here"),". Download Blynk library as outlined in that tutorial."),(0,r.kt)("p",null,"Then test your setup by compiling and uploading simple push button example \u2013 make sure you change WiFi SSID, password and your Blynk API token, which you can get in the app."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/app3.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#define BLYNK_PRINT Serial\n#include <rpcWiFi.h>\n#include <WiFiClient.h>\n#include <BlynkSimpleWioTerminal.h>\nchar auth[] = "token";\nchar ssid[] = "ssid";\nchar pass[] = "password";\nvoid checkPin()\n{\n  int isButtonPressed = !digitalRead(WIO_KEY_A);\n  if (isButtonPressed) {\n    Serial.println("Button is pressed.");\n    Blynk.notify("Yaaay... button is pressed!");\n  }\n}\nvoid setup()\n{\n  Serial.begin(115200);\n  Blynk.begin(auth, ssid, pass);\n  pinMode(WIO_KEY_A, INPUT_PULLUP);\n}\nvoid loop()\n{\n  Blynk.run();\n  checkPin();\n}\n')),(0,r.kt)("p",null,"If  code compiles and the test is successful (pressing top left button on Wio Terminal causes a push notification to appear on your phone),  then you can move to the next stage."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:200,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/button.png"})),(0,r.kt)("p",null,"We\u2019re  going to move all the neural network inference code in a  separate  function and call it in the loop() function right after  Blynk.run().  Similar to what we did before, we check the neural network  prediction  probabilities and if they are higher than threshold for a  certain class, we call Blynk.notify() function, which as you might have guessed pushes a notification to your mobile device."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-3/cough_a.png"})),(0,r.kt)("p",null,"Find the full code for NN inference + Blynk notification in Github repository for this project."),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/25382/latest"},"Edge Impulse Public project"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_Sketchbook/tree/master/examples/WioTerminal_TinyML_2_Audio_Scene_Recognition"},"Project Github"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/ShawnHymel/ei-keyword-spotting/blob/master/embedded-demos/arduino/wio-terminal/wio-terminal.ino"},"Original project for using DMA ADC for sound recording with Wio Terminal")))))}u.isMDXComponent=!0}}]);
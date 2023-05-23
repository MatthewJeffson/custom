"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[87349],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(f,a(a({ref:t},p),{},{components:n})):i.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75535:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const o={description:"Speech Recognition and Speech-to-Intent",title:"Speech Recognition and Speech-to-Intent",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-TFLM-3",last_update:{date:"1/30/2023",author:"jianjing Huang"}},a="Wio Terminal Tensorflow Lite Micro Speech recognition on MCU \u2013 Speech-to-Intent",l={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-3",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-3",title:"Speech Recognition and Speech-to-Intent",description:"Speech Recognition and Speech-to-Intent",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-3.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite",slug:"/Wio-Terminal-TinyML-TFLM-3",permalink:"/custom/Wio-Terminal-TinyML-TFLM-3",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_TensorFlow_Lite/Wio-Terminal-TinyML-TFLM-3.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Speech Recognition and Speech-to-Intent",title:"Speech Recognition and Speech-to-Intent",keywords:["Wio_terminal","Embedded_ML","Projects_based_TensorFlow_Lite"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-TFLM-3",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Weather Prediction with BME280",permalink:"/custom/Wio-Terminal-TinyML-TFLM-2"},next:{title:"Gesture Recognition with Wio Terminal",permalink:"/custom/Wio-Terminal-Gesture-Recognition"}},s={},c=[{value:"Audio acquisition",id:"audio-acquisition",level:2},{value:"MFCC calculation",id:"mfcc-calculation",level:2},{value:"Inference on MFCC features",id:"inference-on-mfcc-features",level:2},{value:"Reference",id:"reference",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"wio-terminal-tensorflow-lite-micro-speech-recognition-on-mcu--speech-to-intent"},"Wio Terminal Tensorflow Lite Micro Speech recognition on MCU \u2013 Speech-to-Intent"),(0,r.kt)("p",null,"A traditional approach to using speech for device control/user request fulfillment is first, to transcribe the speech to text and then parse the text to the commands/queries in suitable format. While this approach offers a lot of flexibility in terms of vocabulary and/or applications scenarios, a combination of speech recognition model and dedicated parser is not suitable for constrained resources of micro-controllers."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-6-1024x416.png"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Source: Wio Terminal, Picovoice, Tensorflow Lite\n")),(0,r.kt)("p",null,"In this project we\u2019re going to employ a more efficient method and directly parse user utterances into actionable output in form of intent/slots. We will share techniques to train a specific domain speech-to-intent model and deploy it to Cortex M4F based development board with built-in microphone, Wio Terminal from Seeed Studio."),(0,r.kt)("p",null,"For more details and visuals, watch the corresponding video!"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/CVq4cet5jgI",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"There are different types of speech recognition tasks \u2013 we can roughly divide them into three groups:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Large-vocabulary continuous speech recognition (LVCSR)"),(0,r.kt)("li",{parentName:"ul"},"Keyword spotting"),(0,r.kt)("li",{parentName:"ul"},"Speech-to-Intent")),(0,r.kt)("p",null,"Keyword spotting works well on microcontrollers, fairly easy to train with variety of no-code open-source tools available, e.g. Edge Impulse, but cannot handle large(er) vocabularies well."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-7-768x570.png"})),(0,r.kt)("p",null,"If we\u2019d like to have a device to make a useful action based on speech input, we need to  combine LVCSR model and text-based Natural language parser \u2013 this  approach is robust and somewhat easier to implement, given abundance of publicly available ASR engines, but is not suitable for running even on SBCs, let alone microcontrollers."),(0,r.kt)("p",null,"There is a third way, direct conversion of speech to parsed intent, based on specific domain vocabulary. Let\u2019s take smart washing machine or smart lights as an example. Speech-to-Intent model upon processing utterance \u201cNormal cycle with low-spin\u201d would output parsed intent, for example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{ Intent: washClothes },\n{ Slots: cycle: normal,\n         spin: low,\n         water: default }\n")),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-9-768x621.png"})),(0,r.kt)("p",null,"And this is really all what we need to be able to control said smart washing machine with voice."),(0,r.kt)("p",null,"Speech-to-Intent is well represented in research, but lacking widely available open-source implementations suitable for microcontrollers.\nProduction-ready, not open-source:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Picovoice"),(0,r.kt)("li",{parentName:"ul"},"Fluent.ai")),(0,r.kt)("p",null,"Production-ready, FOSS, not suitable for microcontrollers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Speechbrain.io")),(0,r.kt)("p",null,"For model training you can use either a Jupyter Notebook we prepared or training scripts from Github repository (find them in the ",(0,r.kt)("strong",{parentName:"p"},"Reference")," section in the end pf the article). Jupyter Notebook contains a very basic reference model implementation and also has explanation for each cell."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-10.png"})),(0,r.kt)("p",null,"After model is trained copy it to folder with code for Wio Terminal and change the name of the model in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/886746bb1878971d43e3e39584e0e2a492933491/inference_code/Wio_Terminal/wio_speech_to_intent_150_10/wio_speech_to_intent_150_10.ino#L106"},"line 106")," to your model name. Let\u2019s go over the most important pieces of the code. It can be roughly divided into three parts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"audio acquisition"),(0,r.kt)("li",{parentName:"ul"},"MFCC calculation"),(0,r.kt)("li",{parentName:"ul"},"inference on MFCC features")),(0,r.kt)("h2",{id:"audio-acquisition"},"Audio acquisition"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/DMAPIO.GIF"})),(0,r.kt)("p",null,"In order to record sound for processing with Wio Terminal built-in microphone we use DMA ADC function of Cortex M4F MCU. DMA stands for direct memory access and it is exactly what is says on the tin \u2013 a specific part of MCU called DMAC or Direct Memory Access Control is set up beforehand to \u201cpipe\u201d the data from one location (e.g. internal memory, SPI, I2C, ADC or other interface) to another. This way the transfer can happen without much involvement from MCU, apart from initial setup. We set the source and destination for transfer here"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"descriptor.descaddr = (uint32_t)&descriptor_section[1]; // Set up a circular descriptor\ndescriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg; // Take the result from the ADC0 RESULT register\ndescriptor.dstaddr = (uint32_t)adc_buf_0 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_0 array\ndescriptor.btcnt = ADC_BUF_LEN;  // Beat count\ndescriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |   // Beat size is HWORD (16-bits)\n                      DMAC_BTCTRL_DSTINC |      // Increment the destination address\n                      DMAC_BTCTRL_VALID |       // Descriptor is valid\n                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspend DMAC channel 0 after block transfer\nmemcpy(&descriptor_section[0], &descriptor, sizeof(descriptor));  // Copy the descriptor to the descriptor section\ndescriptor.descaddr = (uint32_t)&descriptor_section[0];           // Set up a circular descriptor\ndescriptor.srcaddr = (uint32_t)&ADC1->RESULT.reg;                 // Take the result from the ADC0 RESULT register\ndescriptor.dstaddr = (uint32_t)adc_buf_1 + sizeof(uint16_t) * ADC_BUF_LEN;  // Place it in the adc_buf_1 array\ndescriptor.btcnt = ADC_BUF_LEN;  // Beat count\ndescriptor.btctrl = DMAC_BTCTRL_BEATSIZE_HWORD |    // Beat size is HWORD (16-bits)\n                      DMAC_BTCTRL_DSTINC |    // Increment the destination address\n                      DMAC_BTCTRL_VALID |      // Descriptor is valid\n                      DMAC_BTCTRL_BLOCKACT_SUSPEND; // Suspend DMAC channel 0 after block transfer\nmemcpy(&descriptor_section[1], &descriptor, sizeof(descriptor));  // Copy the descriptor to the descriptor section\n")),(0,r.kt)("p",null,"As we specify with parameter DMAC_BTCTRL_BLOCKACT_SUSPEND; in DMA descriptor, the DMA Channel should be suspended after a complete block transfer. We then proceed to set up an ISR (Interrupt Service Routine) triggered with the TC5 timer:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"}," // Configure Timer/Counter 5\nGCLK->PCHCTRL[TC5_GCLK_ID].reg = GCLK_PCHCTRL_CHEN | // Enable perhipheral channel for TC5\nGCLK_PCHCTRL_GEN_GCLK1;    // Connect generic clock 0 at 48MHz\nTC5->COUNT16.WAVE.reg = TC_WAVE_WAVEGEN_MFRQ;     // Set TC5 to Match Frequency(MFRQ) mode\nTC5->COUNT16.CC[0].reg = 3000 - 1;                          // Set the trigger to 16 kHz: (4Mhz / 16000) - 1\nwhile (TC5->COUNT16.SYNCBUSY.bit.CC0);                      // Wait for synchronization\n// Start Timer/Counter 5\nTC5->COUNT16.CTRLA.bit.ENABLE = 1;                          // Enable the TC5 timer\nwhile (TC5->COUNT16.SYNCBUSY.bit.ENABLE);                   // Wait for synchronization\n")),(0,r.kt)("p",null,"The ISR will call a specific function at equally spaced intervals of time, controlled by TC5 timer. Let\u2019s have a look at that function."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"/**\n * Interrupt Service Routine (ISR) for DMAC 1\n */\nvoid DMAC_1_Handler() {\n\n  static uint8_t count = 0;\n\n  // Check if DMAC channel 1 has been suspended (SUSP)\n  if (DMAC->Channel[1].CHINTFLAG.bit.SUSP) {\n\n     // Debug: make pin high before copying buffer\n#ifdef DEBUG\n    digitalWrite(debug_pin, HIGH);\n#endif\n\n    // Restart DMAC on channel 1 and clear SUSP interrupt flag\n    DMAC->Channel[1].CHCTRLB.reg = DMAC_CHCTRLB_CMD_RESUME;\n    DMAC->Channel[1].CHINTFLAG.bit.SUSP = 1;\n\n    // See which buffer has filled up, and dump results into large buffer\n    if (count) {\n      audio_rec_callback(adc_buf_0, ADC_BUF_LEN);\n    } else {\n      audio_rec_callback(adc_buf_1, ADC_BUF_LEN);\n    }\n\n    // Flip to next buffer\n    count = (count + 1) % 2;\n\n    // Debug: make pin low after copying buffer\n#ifdef DEBUG\n    digitalWrite(debug_pin, LOW);\n#endif\n  }\n}\n")),(0,r.kt)("p",null,"The ISR function called DMAC1_Handler() checks if DMAC Channel 1 was suspended \u2013 which happens when one block of information has finished recording. If it was, it calls a user-defined function audio_rec_callback(), where we copy the content of the filled DMA ADC buffer into a (possibly)larger buffer used to calculate MFCC features. Optionally we also apply some sound post-processing on this step."),(0,r.kt)("h2",{id:"mfcc-calculation"},"MFCC calculation"),(0,r.kt)("p",null,"MFCC feature extraction to match with TensorFlow MFCC Op code is borrowed from ARM repository for Keyword Search on ARM Microcontrollers. You can find the original code ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ARM-software/ML-KWS-for-MCU"},"here"),"."),(0,r.kt)("p",null,"Most of the work related to MFCC feature calculation happens within method mfcc_compute(const int16_t ",(0,r.kt)("em",{parentName:"p"},"audio_data, float")," mfcc_out) of MFCC class. The method receives a pointer to audio data, in our case 320 sound data points and a pointer to specific position in the array of MFCC output values. For one time slice we do the following operations:"),(0,r.kt)("p",null,"Normalize the data to -1,1 and pad it (in our case the padding does not happen, since the audio data is always the exact size necessary to calculate one slice of MFCC features):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"  //TensorFlow way of normalizing .wav data to (-1,1)\n  for (i = 0; i < frame_len; i++) {\n    frame[i] = (float)audio_data[i]/(1<<15); \n  }\n  //Fill up remaining with zeros\n  memset(&frame[frame_len], 0, sizeof(float) * (frame_len_padded-frame_len));\n")),(0,r.kt)("p",null,"Calculate RFTT or ",(0,r.kt)("a",{parentName:"p",href:"https://www.keil.com/pack/doc/CMSIS/DSP/html/group__RealFFT.html"},"Real Fast Fourier Transform")," with ARM Math library function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"  //Compute FFT\n  arm_rfft_fast_f32(rfft, frame, buffer, 0);\n")),(0,r.kt)("p",null,"Convert the values to power spectrum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"  //frame is stored as [real0, realN/2-1, real1, im1, real2, im2, ...]\n  int32_t half_dim = frame_len_padded/2;\n  float first_energy = buffer[0] * buffer[0],\n        last_energy =  buffer[1] * buffer[1];  // handle this special case\n  for (i = 1; i < half_dim; i++) {\n    float real = buffer[i*2], im = buffer[i*2 + 1];\n    buffer[i] = real*real + im*im;\n  }\n  buffer[0] = first_energy;\n  buffer[half_dim] = last_energy;  \n")),(0,r.kt)("p",null,"Then apply Mel filterbanks to square roots of data saved in buffer in the last step. Mel filterbanks are created when MFCC class in instantiated, inside of create_mel_fbank() method. The number of filterbanks, minimum and maximum frequencies are specified by user beforehand \u2013 and it is very important to keep them consistent between training script and inference code, otherwise there will be a significant accuracy drop."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"  float sqrt_data;\n  //Apply mel filterbanks\n  for (bin = 0; bin < NUM_FBANK_BINS; bin++) {\n    j = 0;\n    float mel_energy = 0;\n    int32_t first_index = fbank_filter_first[bin];\n    int32_t last_index = fbank_filter_last[bin];\n    for (i = first_index; i <= last_index; i++) {\n      arm_sqrt_f32(buffer[i],&sqrt_data);\n      mel_energy += (sqrt_data) * mel_fbank[bin][j++];\n    }\n    mel_energies[bin] = mel_energy;\n\n    //avoid log of zero\n    if (mel_energy == 0.0)\n      mel_energies[bin] = FLT_MIN;\n  }\n")),(0,r.kt)("p",null,"Finally we take the ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Discrete_cosine_transform"},"discrete cosine transform")," of the array of Mel energies and write it to MFCC features output array. In the original script a quantization a performed on this step as well, but I opted to use quantization procedure from Tensorflow Lite for Microcontrollers example instead."),(0,r.kt)("h2",{id:"inference-on-mfcc-features"},"Inference on MFCC features"),(0,r.kt)("p",null,"Once all audio within one sample (3 seconds) is processed and converted to MFCC features we convert the whole MFCC feature array from FLOAT32 to INT8 values and feed it to the neural network. TensorFlow Lite for Microcontrollers initialization and inference process was already described in one of my earlier articles, so I won\u2019t repeat it here."),(0,r.kt)("p",null,"Before you compile the sketch make sure you have all the necessary libraries installed and Seeed SAMD boards definitions are at least 1.8.2 version \u2013 that is very important for TensorFlow Lite library to compile without errors. Compile and upload the sketch \u2013 if you have DEBUG parameter set to false, code will start running immediately and all you need to do is to press C button on top of the Wio Terminal and say on of the sentences from the dataset. The results will be displayed both on the screen and output to Serial monitor if Wio Terminal is connected to computer."),(0,r.kt)("p",null,"While this course is based on Wio Terminal, since it is very suitable for exploring Embedded Machine Learning, it is definitely possible to implement it on other devices. The easiest would be to port the code to other Cortex M4F MCU, such as Nano33 BLE Sense \u2013 that would only require adjusting for a different microphone. Porting to other ARM MCUs should be fairly trivial too."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-TFLM-3/image-13-768x626.png"})),(0,r.kt)("p",null,"Porting to other architectures, e.g. ESP32 or K210 or others would require re-implementing MFCC calculations, since they use ARM specific functions from CMSIS-DSP."),(0,r.kt)("p",null,"There are multiple improvements that can be made to basic neural network architectures in the project. These improvements are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"model pre-training"),(0,r.kt)("li",{parentName:"ul"},"seq2seq, LSTM, attention"),(0,r.kt)("li",{parentName:"ul"},"trainable filters"),(0,r.kt)("li",{parentName:"ul"},"AutoML, synthetic data")),(0,r.kt)("p",null,"Have a look at this TinyML talk on this topic to find out more about this and find links to the papers!"),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/YmJrr1D191k",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("p",null,"We encourage you to fork the code repository, try training on your own dataset and perhaps try implementing more advanced architectures or model training techniques. If you do, don\u2019t hesitate to give me a shout out here or make a PR on Github!"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Speech-to-Intent-Micro/blob/main/jupyter_notebooks/prepare_data.ipynb"},"Jupyter notebook"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Speech-to-Intent-Micro"},"Project Github")))))}d.isMDXComponent=!0}}]);
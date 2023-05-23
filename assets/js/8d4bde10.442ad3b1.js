"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[34466],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>g});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(i),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return i?n.createElement(g,o(o({ref:t},d),{},{components:i})):n.createElement(g,o({ref:t},d))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},76102:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=i(87462),a=(i(67294),i(3905));const r={description:"Distinguishing Beverage",title:"Distinguishing Beverage",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-5",last_update:{date:"1/30/2023",author:"jianjing Huang"}},o="Wio Terminal Edge Impulse Distinguish Beverage with Multi-channel Gas Sensor",s={unversionedId:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-5",id:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-5",title:"Distinguishing Beverage",description:"Distinguishing Beverage",source:"@site/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-5.md",sourceDirName:"Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse",slug:"/Wio-Terminal-TinyML-EI-5",permalink:"/custom/Wio-Terminal-TinyML-EI-5",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Application/Embedded_ML/Projects_based_Edge_Impulse/Wio-Terminal-TinyML-EI-5.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Distinguishing Beverage",title:"Distinguishing Beverage",keywords:["Wio_terminal","Embedded_ML","Projects_based_Edge_Impulse"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-TinyML-EI-5",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"People counting with Ultrasonic sensor",permalink:"/custom/Wio-Terminal-TinyML-EI-4"},next:{title:"Anomaly detection for Predictive Maintenance",permalink:"/custom/Wio-Terminal-TinyML-EI-6"}},l={},p=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Get Started",id:"get-started",level:2},{value:"1. Connecting to Edge Impulse",id:"1-connecting-to-edge-impulse",level:3},{value:"\u2460 Load the latest device firmware to Wio Terminal",id:"-load-the-latest-device-firmware-to-wio-terminal",level:4},{value:"\u2461 Connect using WebUSB",id:"-connect-using-webusb",level:4},{value:"2. Collecting Data",id:"2-collecting-data",level:3},{value:"3. Designing Impulse",id:"3-designing-impulse",level:3},{value:"4. Training Data",id:"4-training-data",level:3},{value:"5. Live Classification",id:"5-live-classification",level:3},{value:"Deploying to Wio Terminal",id:"deploying-to-wio-terminal",level:2},{value:"Complete Code",id:"complete-code",level:2},{value:"Reference",id:"reference",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wio-terminal-edge-impulse-distinguish-beverage-with-multi-channel-gas-sensor"},"Wio Terminal Edge Impulse Distinguish Beverage with Multi-channel Gas Sensor"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/booze.jpg"})),(0,a.kt)("p",null,"In this wiki, we will introduce how to use ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal"))," with ",(0,a.kt)("a",{parentName:"p",href:"http://edgeimpulse.com/"},(0,a.kt)("strong",{parentName:"a"},"Edge Impulse"))," to simply deploy a machine learning project. Wio Terminal with the ",(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/category/Grove-c-1003.html"},(0,a.kt)("strong",{parentName:"a"},"Grove systems"))," can be very powerful, which brings hundreds of sensor data in for analysis and to possibly evaluate different scenarios!"),(0,a.kt)("p",null,"This is a project inspired by ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kartben/status/1258791793073815552"},"Benjamin Cab\xe9's Artificial nose project"),". Through this article, you will get an understanding of the workflow of Edge Impulse using Wio Terminal."),(0,a.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,a.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Grove-Multichannel-Gas-Sensor-v2-p-4569.html"},(0,a.kt)("strong",{parentName:"a"},"Grove - Multichannel Gas Sensor v2")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Some alcohol, coffee, cola"))),(0,a.kt)("h2",{id:"get-started"},"Get Started"),(0,a.kt)("p",null,"Let's work you through the workflow of Edge Impulse with Wio Terminal."),(0,a.kt)("h3",{id:"1-connecting-to-edge-impulse"},"1. Connecting to Edge Impulse"),(0,a.kt)("h4",{id:"-load-the-latest-device-firmware-to-wio-terminal"},"\u2460 Load the latest device firmware to Wio Terminal"),(0,a.kt)("p",null,"Connect Wio Terminal to your computer. Entering the bootloader mode by sliding the power switch twice quickly. For more reference, please also see ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/#faq"},"here"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-CircuitPython/dfu.gif"})),(0,a.kt)("p",null,"An external drive named ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino")," should appear in your PC. Drag the downloaded ",(0,a.kt)("a",{parentName:"p",href:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/edge_impulse_firmware.uf2"},(0,a.kt)("strong",{parentName:"a"},"Edge Impulse uf2 firmware files"))," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Arduino")," drive. Now, Edge Impulse is loaded on Seeeduino Wio Terminal!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Here is the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_edgeimpulse"},"Wio Terminal Edge Impulse source code"),", you can also build the firmware from here."),(0,a.kt)("h4",{id:"-connect-using-webusb"},"\u2461 Connect using WebUSB"),(0,a.kt)("p",null," Go to your Edge Impulse project, and click the Data acquisition tab, then you can see the selection ",(0,a.kt)("inlineCode",{parentName:"p"},"Connect using WebUSB")," on the upper right. Click it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/webusb.jpg"})),'Then, you can see a pop-tip, select the paired serial port and "Connect" as the following picture.',(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/paired.jpg"})),"Now, you have successfully connected the Wio Terminal with the Edge Impulse.",(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:500,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/connected.jpg"})),(0,a.kt)("h3",{id:"2-collecting-data"},"2. Collecting Data"),(0,a.kt)("p",null,"Connect the ",(0,a.kt)("strong",{parentName:"p"},"Grove - Multichannel Gas Sensor v2 to Wio Terminal's Grove I2C port"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:300,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/I2C.jpg"})),(0,a.kt)("p",null,"Place the Grove - Multichannel Gas Sensor v2 onto the beverage that you are going to test, in my case it's cola first. One thing to be pointed here, the ",(0,a.kt)("strong",{parentName:"p"},"Grove - Multichannel Gas Sensor v2 can be affected by the surroundings easily, you may want to use a cover to make sure it's sensing the only test content"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Edge-Impulse/test.jpg"})),(0,a.kt)("p",null,"On the ",(0,a.kt)("strong",{parentName:"p"},"Edge Impulse dashboard"),", navigate to ",(0,a.kt)("strong",{parentName:"p"},"Data acquisition"),", choose your device, and name your ",(0,a.kt)("strong",{parentName:"p"},"Label"),". As it implies, the label should name according to your test content so here will also be ",(0,a.kt)("strong",{parentName:"p"},"cola"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample length (ms.)")," will be the length of your sampling time in ms, ",(0,a.kt)("strong",{parentName:"p"},"Sensor")," choose ",(0,a.kt)("strong",{parentName:"p"},"External multichannel gas")," and ",(0,a.kt)("strong",{parentName:"p"},"Frequency")," choose ",(0,a.kt)("strong",{parentName:"p"},"10Hz"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/cola.jpg"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Start Sampling")," and it will start to collect data."),(0,a.kt)("p",null,"In my test, I have obtained cola data for ",(0,a.kt)("strong",{parentName:"p"},"10s")," for ",(0,a.kt)("strong",{parentName:"p"},"9 times")," and each time they have similar results. You will need to have data sets that are fairly similar to each other."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"If you have data fluctuating a lot and this may be caused by the surrounding.\n"))),(0,a.kt)("p",null,"Once you have enough data for one label you can do the exact same step for other labels! In my test, I have three more datasets air, coffee and alcohol:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"air dataset:"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/air.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"coffee dataset:"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/coffee.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"alcohol dataset:"))),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/alcohol.jpg"})),(0,a.kt)("p",null,"You should see that different beverages will have different gas values which makes it perfect for machine learning! To add more, it is always better to have more data for it to be trained later, and so please feel free to collect more data!"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"Feel free to do more categories of alcohol!\n"))),(0,a.kt)("h3",{id:"3-designing-impulse"},"3. Designing Impulse"),(0,a.kt)("p",null,"Next up, we will need to design the impulse by clicking ",(0,a.kt)("strong",{parentName:"p"},"Impulse Design")," -> ",(0,a.kt)("strong",{parentName:"p"},"Create Impulse"),". An impulse takes raw data, uses signal processing to extract features, and then uses a learning block to classify new data. In this example, I added a processing block of ",(0,a.kt)("strong",{parentName:"p"},"raw data")," with all the input axis and added a ",(0,a.kt)("strong",{parentName:"p"},"Neural Network (Keras)")," learning block as followed:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/impulse.jpg"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Impulse")," and under Impulse design click ",(0,a.kt)("strong",{parentName:"p"},"Raw data")," and you should see the raw features of the data sets:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/rawdata.jpg"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("strong",{parentName:"p"},"Save parameters")," then it will navigate to another page. Click ",(0,a.kt)("strong",{parentName:"p"},"Generate Features"),"."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/feature.jpg"})),(0,a.kt)("p",null,"This will generate features from the previous data sets and you will see a graph on the right. If data sets are separated from each other meaning that the data sets are unique to each other which makes it better for machine learning the differences."),(0,a.kt)("h3",{id:"4-training-data"},"4. Training Data"),(0,a.kt)("p",null,"Under ",(0,a.kt)("strong",{parentName:"p"},"Impulse Design"),", click ",(0,a.kt)("strong",{parentName:"p"},"NN Classifier")," to configure settings for Neural Network, the following are my settings:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:400,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/net.jpg"})),(0,a.kt)("p",null,"You may want to adjust these settings according to your needs and configure your ",(0,a.kt)("strong",{parentName:"p"},"Neural network architecture"),", then click ",(0,a.kt)("strong",{parentName:"p"},"Start training"),"! This will perform the training and may take a while."),(0,a.kt)("p",null,"Once trained, you will see a table of training performance. If your data sets are unique to each other you should get pretty good results! Here is my performance:"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/performance.jpg"})),(0,a.kt)("p",null,"From this, you can see that the accuracy is not bad, this is because there is only 4 cases. You may want to add more cases/tests to this example."),(0,a.kt)("h3",{id:"5-live-classification"},"5. Live Classification"),(0,a.kt)("p",null,"Now we have the model trained, we can test the model with new data. Navigate to ",(0,a.kt)("strong",{parentName:"p"},"Live classification"),", and sample new sets of data for testing."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing Example 1:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test1.jpg"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Testing Example 2:")),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/test2.jpg"})),(0,a.kt)("p",null,"As we can see from the results, this is pretty good results where you are able to distinguish alcohol using the Grove - Multichannel Gas Sensor v2 with the help of Edge Impulse!"),(0,a.kt)("h2",{id:"deploying-to-wio-terminal"},"Deploying to Wio Terminal"),(0,a.kt)("p",null,"The next step is deployment on the device. After clicking on the Deployment tab, choose Arduino library and download it."),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-1/deploy.png"})),(0,a.kt)("p",null,"Extract the archive and place it in your Arduino libraries folder. Open Arduino IDE and choose  static buffer sketch (located in File -> Examples -> name of your project -> static_buffer) , which already has all the boilerplate code for classification with your model in place. Neat!"),(0,a.kt)("div",{align:"center"},(0,a.kt)("img",{width:600,src:"https://files.seeedstudio.com/wiki/Wio-Terminal-TinyML-EI-5/code.jpg"})),(0,a.kt)("p",null,"The only thing for users to fill in is the function raw_feature_get_data(size_t offset, size_t length, float *out_ptr) ."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"int raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {\n    float features[4];\n    features[0]=gas.getGM102B();\n    features[1] = gas.getGM302B();\n    features[2]=gas.getGM502B();\n    features[3]=gas.getGM702B();\n    memcpy(out_ptr, features + offset, length * sizeof(float));\n    return 0;\n}\n")),(0,a.kt)("h2",{id:"complete-code"},"Complete Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <coffee_cola_alcohol_big_inferencing.h>\n#include <Multichannel_Gas_GMXXX.h>\n#include <Wire.h>\nGAS_GMXXX<TwoWire> gas;\n\nint raw_feature_get_data(size_t offset, size_t length, float *out_ptr) {\n    float features[4];\n\n    features[0]=gas.getGM102B();\n    features[1] = gas.getGM302B();\n    features[2]=gas.getGM502B();\n    features[3]=gas.getGM702B();\n    memcpy(out_ptr, features + offset, length * sizeof(float));\n    return 0;\n}\n\nvoid setup()\n{\n    // put your setup code here, to run once:\n    Serial.begin(115200);\n    gas.begin(Wire, 0x08); // use the hardware I2C\n    Serial.println("Edge Impulse Inferencing Demo");\n}\n\nvoid loop()\n{\n    ei_printf("Edge Impulse standalone inferencing (Arduino)\\n");\n\n \n    ei_impulse_result_t result = { 0 };\n\n    // the features are stored into flash, and we don\'t want to load everything into RAM\n    signal_t features_signal;\n    features_signal.total_length = sizeof(features) / sizeof(features[0]);\n    features_signal.get_data = &raw_feature_get_data;\n\n    // invoke the impulse\n    EI_IMPULSE_ERROR res = run_classifier(&features_signal, &result, false /* debug */);\n    ei_printf("run_classifier returned: %d\\n", res);\n\n    if (res != 0) return;\n\n    // print the predictions\n    ei_printf("Predictions ");\n    ei_printf("(DSP: %d ms., Classification: %d ms., Anomaly: %d ms.)",\n        result.timing.dsp, result.timing.classification, result.timing.anomaly);\n    ei_printf(": \\n");\n    ei_printf("[");\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("%.5f", result.classification[ix].value);\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n        ei_printf(", ");\n#else\n        if (ix != EI_CLASSIFIER_LABEL_COUNT - 1) {\n            ei_printf(", ");\n        }\n#endif\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("%.3f", result.anomaly);\n#endif\n    ei_printf("]\\n");\n\n    // human-readable predictions\n    for (size_t ix = 0; ix < EI_CLASSIFIER_LABEL_COUNT; ix++) {\n        ei_printf("    %s: %.5f\\n", result.classification[ix].label, result.classification[ix].value);\n    }\n#if EI_CLASSIFIER_HAS_ANOMALY == 1\n    ei_printf("    anomaly score: %.3f\\n", result.anomaly);\n#endif\n\n    delay(1);\n}\n\n/**\n * @brief      Printf function uses vsnprintf and output using Arduino Serial\n *\n * @param[in]  format     Variable argument list\n */\nvoid ei_printf(const char *format, ...) {\n    static char print_buf[1024] = { 0 };\n\n    va_list args;\n    va_start(args, format);\n    int r = vsnprintf(print_buf, sizeof(print_buf), format, args);\n    va_end(args);\n\n    if (r > 0) {\n        Serial.write(print_buf);\n    }\n}\n')),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/kartben/status/1258791793073815552"},"Benjamin Cab\xe9's Artificial nose project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://studio.edgeimpulse.com/public/37392/latest"},"Edge Impulse Public project"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"http://wiki.seeedstudio.com/Wio-Terminal-Edge-Impulse"},"Project Github")))))}u.isMDXComponent=!0}}]);
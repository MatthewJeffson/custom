"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31988],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},73725:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={description:"Voice Interaction",title:"Voice Interaction",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Voice_Interaction",last_update:{date:"1/13/2023",author:"shuxu hu"}},i=void 0,s={unversionedId:"Seeed_Elderly/reSpeaker/Application/Voice_Interaction",id:"Seeed_Elderly/reSpeaker/Application/Voice_Interaction",title:"Voice Interaction",description:"Voice Interaction",source:"@site/docs/Seeed_Elderly/reSpeaker/Application/Voice_Interaction.md",sourceDirName:"Seeed_Elderly/reSpeaker/Application",slug:"/Voice_Interaction",permalink:"/Voice_Interaction",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Seeed_Elderly/reSpeaker/Application/Voice_Interaction.md",tags:[],version:"current",lastUpdatedBy:"shuxu hu",lastUpdatedAt:1673539200,formattedLastUpdatedAt:"Jan 12, 2023",frontMatter:{description:"Voice Interaction",title:"Voice Interaction",keywords:["Seeed_Elderly"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Voice_Interaction",last_update:{date:"1/13/2023",author:"shuxu hu"}},sidebar:"ProductSidebar",previous:{title:"Google Assistant for reSpeaker",permalink:"/Google_Assistant"},next:{title:"ReSpeaker Core V2 & Wio Link",permalink:"/ReSpeaker_Core_V2_&_Wio_Link"}},l={},c=[{value:"1. Alexa",id:"1-alexa",level:2},{value:"2. Google assistant",id:"2-google-assistant",level:2},{value:"3. Bing Speech",id:"3-bing-speech",level:2},{value:"4. Baidu",id:"4-baidu",level:2},{value:"Voice Interaction tutorial list",id:"voice-interaction-tutorial-list",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Here is the whole picture of the voice interaction services around world. "),(0,r.kt)("h2",{id:"1-alexa"},"1. Alexa"),(0,r.kt)("p",null,"Alexa is Amazon\u2019s cloud-based voice service available on tens of millions of devices from Amazon and third-party device manufacturers. With Alexa, you can build natural voice experiences that offer customers a more intuitive way to interact with the technology they use every day. Our collection of tools, APIs, reference solutions, and documentation make it easy for anyone to build with Alexa."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What You Can Build with Alexa?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Add Capabilities to Alexa"),": Add capabilities, or skills, to Alexa using the Alexa Skills Kit (ASK), a collection of self-service APIs, tools, documentation, and code samples. Skills make Alexa smarter and enable customers to do more with voice. Build natural, voice-first experiences with our toolkit, and help redefine the way your customers interact with technology."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Integrate Alexa into Your Device"),": Integrate Alexa directly into your products with the Alexa Voice Service (AVS), bringing the convenience of hands-free voice control to any connected device. Through AVS, you can add a new intelligent interface to your products and offer customers access to a growing number of Alexa features, smart home integrations, and skills."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Connect Devices to Alexa"),": Connect Alexa to your devices to deliver delightful and intuitive experiences to your customers. Add Alexa to your smart home devices to enable voice control of your smart cameras, lights, entertainment systems, and more. And build your own Alexa Gadgets or create interactive skills that work with Alexa Gadgets such as Echo Buttons.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Developer Resource")),(0,r.kt)("p",null,"-\u3000",(0,r.kt)("a",{parentName:"p",href:"https://developer.amazon.com/zh/alexa-voice-service"},"Alexa Voice Service Get Started"),"\n-\u3000",(0,r.kt)("a",{parentName:"p",href:"https://github.com/alexa/avs-device-sdk/wiki"},"avs-device-sdk")),(0,r.kt)("h2",{id:"2-google-assistant"},"2. Google assistant"),(0,r.kt)("p",null,"The Google Assistant SDK lets you add hotword detection, voice control, natural language understanding and Google\u2019s smarts to your devices. Your device captures an utterance (a spoken audio request, such as What's on my calendar?), sends it to the Google Assistant, and receives a spoken audio response in addition to the raw text of the utterance."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What can it do?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MANAGE TASKS"),"\uff1aSend a text, set reminders, turn on battery saver and instantly look up emails."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"PLAN YOUR DAY"),"\uff1aCheck your flight status, make a dinner reservation, check when your movie starts, and find a coffee stop along your route."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ENJOY ENTERTAINMENT"),"\uff1aControl music on Google Play and YouTube Music. You can also pick up where you left off on your favorite podcasts with your Assistant on Google Home."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MAKE MEMORIES"),"\uff1aYour Assistant makes it incredibly simple to find your photos \u2014 and to take them as well."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"GET ANSWERS"),"\uff1aGet real-time answers including the latest on weather, traffic, finance, or sports. Quickly find translations while you\u2019re traveling."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"CONTROL YOUR HOME"),"\uff1aUse your phone to control your smart home devices. Adjust the temperature, lighting, and more, even when you\u2019re not home.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Developer Resource")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://assistant.google.com/"},"Google Assistant")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developers.google.com/assistant/sdk/overview"},"SDK"))),(0,r.kt)("h2",{id:"3-bing-speech"},"3. Bing Speech"),(0,r.kt)("p",null,"Bing Speech includes Convert audio to text, understand intent, and convert text back to speech for natural responsiveness."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Speech Recognition"),"\nConvert spoken audio to text. The API can be directed to turn on and recognize audio coming from the microphone in real-time, recognize audio coming from a different real-time audio source, or to recognize audio from within a file. In all cases, real-time streaming is available, so as the audio is being sent to the server, partial recognition results are also being returned."),(0,r.kt)("p",null,"The Speech to Text API enables you to build smart apps that are voice triggered. To see how it works select your target language then click on the microphone and start speaking. Or simply click on one of the sample speech phrases to see how speech recognition works. When you use this demo you consent to providing your voice input data to Microsoft for service improvement purpose."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Text to Speech"),"\nConvert text to spoken audio. When applications need to \u201ctalk\u201d back to their users, this API can be used to convert text that is generated by the app into audio that can be played back to the user."),(0,r.kt)("p",null,"The Text-To-Speech API enables you to build smart apps that can speak. You can test it now, simply choose your target language, add your sentences then click on the play button to see how speech synthesis works. When you use this demo you consent to providing your voice input data to Microsoft for service improvement purposes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Developer Resource")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/cognitive-services/speech/home"},"API"))),(0,r.kt)("h2",{id:"4-baidu"},"4. Baidu"),(0,r.kt)("p",null,"Baidu Speech includes STT, TTS, voice interaction, offline wakeup. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Developer Resource")),(0,r.kt)("p",null,"-\u3000",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MyDuerOS/DuerOS-Python-Client"},"SDK"),"\n-\u3000",(0,r.kt)("a",{parentName:"p",href:"http://ai.baidu.com/docs#/ASR-Android-SDK/top"},"API")),(0,r.kt)("h2",{id:"voice-interaction-tutorial-list"},"Voice Interaction tutorial list"),(0,r.kt)("p",null,"Here is voice interaction tutorial list."),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}p.isMDXComponent=!0}}]);
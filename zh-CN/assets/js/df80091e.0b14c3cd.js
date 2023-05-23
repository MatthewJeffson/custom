"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[74251],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,g=d["".concat(s,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(g,i(i({ref:t},l),{},{components:n})):r.createElement(g,i({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const a={description:"How to detect finger touch",title:"How to detect finger touch",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_to_detect_finger_touch",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},i=void 0,c={unversionedId:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch",id:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch",title:"How to detect finger touch",description:"How to detect finger touch",source:"@site/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch.md",sourceDirName:"Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage",slug:"/How_to_detect_finger_touch",permalink:"/custom/zh-CN/How_to_detect_finger_touch",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Top_Brand/Arduino/Tutorials/Arduino_Basic_Usage/How_to_detect_finger_touch.md",tags:[{label:"Tutorial",permalink:"/custom/zh-CN/tags/tutorial"}],version:"current",lastUpdatedBy:"w0x7ce",lastUpdatedAt:1675209600,formattedLastUpdatedAt:"2023\u5e742\u67081\u65e5",frontMatter:{description:"How to detect finger touch",title:"How to detect finger touch",tags:["Tutorial"],keywords:["Tutorial"],image:"https://avatars.githubusercontent.com/u/10758833",slug:"/How_to_detect_finger_touch",last_update:{date:"02/01/2023",author:"w0x7ce"},no_comments:!1},sidebar:"ProductSidebar",previous:{title:"GPS Modules Selection Guide",permalink:"/custom/zh-CN/GPS-Modules-Selection-Guide"},next:{title:"Seeed Relay Selection Guide",permalink:"/custom/zh-CN/Seeed_Relay_Page"}},s={},u=[{value:"How to Measure Capacitance",id:"how-to-measure-capacitance",level:2},{value:"How to Touch Sensing",id:"how-to-touch-sensing",level:2},{value:"Tech Support",id:"tech-support",level:2}],l={toc:u};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"how-to-measure-capacitance"},"How to Measure Capacitance"),(0,o.kt)("p",null,"The complete capacitance measurement system is composed by sensing electrode pads connected to MPR121 sensing inputs, and the MPR121 communicating with the host processor via I2C bus and interrupt output."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-1.jpg",alt:null})),(0,o.kt)("p",null,"The capacitance measured on each sensing channel is the total capacitance to ground which can be the combination of background parasitic capacitance to ground(Cb) and finger touch induced capacitance to ground(Cx). The MPR121 uses a constant DC charge current scheme for capacitance measurement. Each channel is charged and then discharged completely to ground periodically to measure the capacitance. All the channels are measured sequentially, when one channel is in the charge/discharge and measurement period the other channels are shorted to ground."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/500px-2.jpg",alt:null})),(0,o.kt)("p",null,"The amount of charge(Q)applied is programmable by setting the charge current(I), And the charge time(T). Once the electrode is charged, the peak voltage(V)at the end of chage is measured by internal 10 bit ADC. This voltage V is reverse proportional to the capatance(C)on the sensing channel."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," C = Q/V = (I*T)/V\n")),(0,o.kt)("p",null,"That is, If charge the outside cap with a some value of current(I) and time(T), and get the voltage(V), We can get the value of captance, using this way, the C measureble range can be calculated."),(0,o.kt)("h2",{id:"how-to-touch-sensing"},"How to Touch Sensing"),(0,o.kt)("p",null,"The ADC raw data outputs run through 3 levels of digital filtering to filter out the high frequency and low frequency noise encountered. The first level filter is a simple running average filter, the second level filter result is 10bit and stored in the output data registers as the immediate capacitance of each sensing input, the third level filter result is an even lower frequency content of signal change using the second level filter output, mainly used as the baseline value representing the capacitance variation over the long term and slow environment change such as atmospheric moisture and dirt for touch detection."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-3.jpg",alt:null})),(0,o.kt)("p",null,"Touch and release is determined by comparing the immediate capacitance deviation that is the electrode second level filtered output data deviation to the baseline value. If the deviation passed the setting threshold, then a touch or release status is detected and reported in the status register. The touch and release threshold are independent and individually programmable for each electrode, providing hysteresis and electrode independence. Debounce setting can be used for further noise filtering to provide glitch free touch and release detection."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/How_to_detect_finger_touch/img/600px-4.jpg",alt:null})),(0,o.kt)("h2",{id:"tech-support"},"Tech Support"),(0,o.kt)("p",null,"Please submit any technical issue into our ",(0,o.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),"."),(0,o.kt)("br",null),(0,o.kt)("p",{style:{textAlign:"center"}},(0,o.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,o.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}d.isMDXComponent=!0}}]);
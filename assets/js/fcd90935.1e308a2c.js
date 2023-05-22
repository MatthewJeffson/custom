"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57630],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),c=i,f=p["".concat(l,".").concat(c)]||p[c]||m[c]||a;return t?r.createElement(f,s(s({ref:n},u),{},{components:t})):r.createElement(f,s({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[p]="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},41019:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var r=t(87462),i=(t(67294),t(3905));const a={description:"Pressure sensor using the Wio terminal",title:"Pressure sensor using the Wio terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Barometric-Pressure-sensor-using-the-Wio-terminal",last_update:{date:"1/31/2023",author:"jianjing Huang"}},s="High Precision Barometric Pressure sensor using the Wio terminal",o={unversionedId:"Sensor/Wio_Terminal/Tutorial/Barometric-Pressure-sensor-using-the-Wio-terminal",id:"Sensor/Wio_Terminal/Tutorial/Barometric-Pressure-sensor-using-the-Wio-terminal",title:"Pressure sensor using the Wio terminal",description:"Pressure sensor using the Wio terminal",source:"@site/docs/Sensor/Wio_Terminal/Tutorial/Barometric-Pressure-sensor-using-the-Wio-terminal.md",sourceDirName:"Sensor/Wio_Terminal/Tutorial",slug:"/Barometric-Pressure-sensor-using-the-Wio-terminal",permalink:"/Barometric-Pressure-sensor-using-the-Wio-terminal",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Tutorial/Barometric-Pressure-sensor-using-the-Wio-terminal.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675094400,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Pressure sensor using the Wio terminal",title:"Pressure sensor using the Wio terminal",keywords:["Wio_terminal Tutorial"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Barometric-Pressure-sensor-using-the-Wio-terminal",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal Interactive Faces Demo",permalink:"/Wio-Terminal-Interactive-Face"},next:{title:"Reading Coronavirus Live Data using Wio Terminal",permalink:"/Wio-Terminal-Reading-COVID19"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Hardware Connection",id:"hardware-connection",level:3},{value:"software",id:"software",level:2},{value:"Code",id:"code",level:2}],u={toc:d};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"high-precision-barometric-pressure-sensor-using-the-wio-terminal"},"High Precision Barometric Pressure sensor using the Wio terminal"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/pre_temp_222gGIF.gif"})),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The demo shows that the Grove- high precision pressure sensor DPS310 is fully compatible with the Wio terminal, and its measurement has high precision."),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The range of normal atmospheric pressure values can be display by the dial colour"),(0,i.kt)("li",{parentName:"ul"},"with the time to display the temperature degrees"),(0,i.kt)("li",{parentName:"ul"},"High precision barometric pressure and temperature detection")),(0,i.kt)("h2",{id:"hardware"},"Hardware"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.kt)("strong",{parentName:"a"},"Wio terminal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/Grove-High-Precision-Barometer-Sensor-DPS310-p-4397.html"},(0,i.kt)("strong",{parentName:"a"},"Grove- high precision pressure sensor DPS310")))),(0,i.kt)("h3",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Barometric-Pressure-sensor-using-the-Wio-terminal/111111.png"})),(0,i.kt)("h2",{id:"software"},"software"),(0,i.kt)("p",null,"if you do not have The Arduino IDE, please view ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Getting-Started/"},(0,i.kt)("strong",{parentName:"a"},"The Get Started with Wio Terminal"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the LCD screen Library ",(0,i.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_LCD"),", please visit ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-LCD-Overview/"},"Wio Terminal LCD"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the DPS310-Pressure-Sensor Library ",(0,i.kt)("inlineCode",{parentName:"p"},"#include <Dps310.h>"),", please visit ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Grove-High-Precision-Barometric-Pressure-Sensor-DPS310/"},"DPS310-Pressure-Sensor"),"."))),(0,i.kt)("h2",{id:"code"},"Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <Dps310.h>\n#include <SPI.h>\n#include <TFT_eSPI.h>       // Hardware-specific library\nTFT_eSPI tft = TFT_eSPI(); \n\n#define TFT_GREY 0x5AEB\n#define LOOP_PERIOD 35 // Display updates every 35 ms\n\nDps310 Dps310PressureSensor = Dps310();\n\n#define M_SIZE 1.4\n\nTFT_eSprite spr = TFT_eSprite(&tft);  // Sprite\n\nfloat ltx = 0;    // Saved x coord of bottom of needle\nuint16_t osx = M_SIZE * 120, osy = M_SIZE * 120; // Saved x & y coords\nuint32_t updateTime = 0;       // time for next update\n\nint old_analog =  -999; // Value last displayed\n\nint value[6] = {0, 0, 0, 0, 0, 0};\nint d = 0;\n\nvoid setup(void) {\n    tft.begin();\n    tft.init();\n    tft.setRotation(3);\n    Serial.begin(57600); // For debug\n    tft.fillScreen(TFT_WHITE);\n    spr.createSprite(TFT_HEIGHT,TFT_WIDTH);\n    spr.setRotation(3);\n\n    Dps310PressureSensor.begin(Wire);\n    analogMeter(); // Draw analogue meter\n\n    updateTime = millis(); // Next update time\n}\n\n\nvoid loop() {\n  float temperature;\n  float pressure;\n  uint8_t oversampling = 7;\n  int16_t ret;\n\n  ret = Dps310PressureSensor.measureTempOnce(temperature, oversampling);\n  ret = Dps310PressureSensor.measurePressureOnce(pressure, oversampling);\n  Serial.println(pressure);\n\n    if (updateTime <= millis()) {\n        updateTime = millis() + 35; // Update emter every 35 milliseconds\n\n        // Create a Sine wave for testing\n        d += 4;\n        if (d >= 360) {\n            d = 0;\n        }\n        ////////////////////////////////////////////////////////\n        // this is a excmple, you just need to del \'- 100050\'\n        ////////////////////////////////////////////////////////\n        plotNeedle(pressure-100050, 0); // It takes between 2 and 12ms to replot the needle with zero delay\n    }\n\ndelay(100);\n    spr.fillSprite(TFT_WHITE);\n    spr.createSprite(250, 40);\n    spr.fillSprite(TFT_WHITE);\n    spr.setTextColor(TFT_BLACK, TFT_WHITE);\n    spr.setFreeFont(&FreeSansBoldOblique12pt7b);\n    spr.drawNumber(temperature, 0, 0);\n    spr.drawString(" \xb0C", 30, 0);\n    spr.drawNumber(pressure, 120,0);\n    spr.drawString("Pa", 210,0); \n    spr.pushSprite(30, 190); \n    spr.deleteSprite();\n\n}\n\n\n// #########################################################################\n//  Draw the analogue meter on the screen\n// #########################################################################\nvoid analogMeter() {\n\n    // Meter outline\n    tft.fillRect(0, 0, M_SIZE * 239, M_SIZE * 126, TFT_GREY);\n    tft.fillRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_WHITE);\n\n    tft.setTextColor(TFT_BLACK);  // Text colour\n\n    // Draw ticks every 5 degrees from -50 to +50 degrees (100 deg. FSD swing)\n    for (int i = -50; i < 51; i += 5) {\n        // Long scale tick length\n        int tl = 15;\n\n        // Coodinates of tick to draw\n        float sx = cos((i - 90) * 0.0174532925);\n        float sy = sin((i - 90) * 0.0174532925);\n        uint16_t x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;\n        uint16_t y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;\n        uint16_t x1 = sx * M_SIZE * 100 + M_SIZE * 120;\n        uint16_t y1 = sy * M_SIZE * 100 + M_SIZE * 140;\n\n        // Coordinates of next tick for zone fill\n        float sx2 = cos((i + 5 - 90) * 0.0174532925);\n        float sy2 = sin((i + 5 - 90) * 0.0174532925);\n        int x2 = sx2 * (M_SIZE * 100 + tl) + M_SIZE * 120;\n        int y2 = sy2 * (M_SIZE * 100 + tl) + M_SIZE * 140;\n        int x3 = sx2 * M_SIZE * 100 + M_SIZE * 120;\n        int y3 = sy2 * M_SIZE * 100 + M_SIZE * 140;\n\n        // Yellow zone limits\n        if (i >= -50 && i < -25) {\n          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_GREEN);\n          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_GREEN);\n        }\n        \n        if (i >= -25 && i < 0) {\n          tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_YELLOW);\n          tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_YELLOW);\n        }\n\n        // Green zone limits\n        if (i >= 0 && i < 25) {\n            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);\n            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);\n        }\n\n        // Orange zone limits\n        if (i >= 25 && i < 50) {\n            tft.fillTriangle(x0, y0, x1, y1, x2, y2, TFT_RED);\n            tft.fillTriangle(x1, y1, x2, y2, x3, y3, TFT_RED);\n        }\n\n        // Short scale tick length\n        if (i % 25 != 0) {\n            tl = 8;\n        }\n\n        // Recalculate coords incase tick lenght changed\n        x0 = sx * (M_SIZE * 100 + tl) + M_SIZE * 120;\n        y0 = sy * (M_SIZE * 100 + tl) + M_SIZE * 140;\n        x1 = sx * M_SIZE * 100 + M_SIZE * 120;\n        y1 = sy * M_SIZE * 100 + M_SIZE * 140;\n\n        // Draw tick\n        tft.drawLine(x0, y0, x1, y1, TFT_BLACK);\n\n        // Check if labels should be drawn, with position tweaks\n        if (i % 25 == 0) {\n            // Calculate label positions\n            x0 = sx * (M_SIZE * 100 + tl + 10) + M_SIZE * 120;\n            y0 = sy * (M_SIZE * 100 + tl + 10) + M_SIZE * 140;\n\n            ////////////////////////////////////////////////////////////\n            //  In here, you can change the dial plate \n            ////////////////////////////////////////////////////////////\n            switch (i / 25) {\n                case -2: tft.drawCentreString("100000", x0, y0 - 12, 2); break;\n                case -1: tft.drawCentreString("100025", x0, y0 - 9, 2); break;\n                case 0: tft.drawCentreString("100050", x0, y0 - 7, 2); break;\n                case 1: tft.drawCentreString("100075", x0, y0 - 9, 2); break;\n                case 2: tft.drawCentreString("100100", x0, y0 - 12, 2); break;\n            }\n        }\n\n        // Now draw the arc of the scale\n        sx = cos((i + 5 - 90) * 0.0174532925);\n        sy = sin((i + 5 - 90) * 0.0174532925);\n        x0 = sx * M_SIZE * 100 + M_SIZE * 120;\n        y0 = sy * M_SIZE * 100 + M_SIZE * 140;\n        // Draw scale arc, don\'t draw the last part\n        if (i < 50) {\n            tft.drawLine(x0, y0, x1, y1, TFT_BLACK);\n        }\n    }\n\n    //tft.drawString("%RH", M_SIZE * (5 + 230 - 40), M_SIZE * (119 - 20), 2); // Units at bottom right\n    tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // Comment out to avoid font 4\n    tft.drawRect(5, 3, M_SIZE * 230, M_SIZE * 119, TFT_BLACK); // Draw bezel line\n\n    plotNeedle(0, 0); // Put meter needle at 0\n}\n\n// #########################################################################\n// Update needle position\n// This function is blocking while needle moves, time depends on ms_delay\n// 10ms minimises needle flicker if text is drawn within needle sweep area\n// Smaller values OK if text not in sweep area, zero for instant movement but\n// does not look realistic... (note: 100 increments for full scale deflection)\n// #########################################################################\nvoid plotNeedle(int value, byte ms_delay) {\n\n    if (value < -10) {\n        value = -10;    // Limit value to emulate needle end stops\n    }\n    if (value > 110) {\n        value = 110;\n    }\n\n    // Move the needle until new value reached\n    while (!(value == old_analog)) {\n        if (old_analog < value) {\n            old_analog++;\n        } else {\n            old_analog--;\n        }\n\n        if (ms_delay == 0) {\n            old_analog = value;    // Update immediately if delay is 0\n        }\n\n        float sdeg = map(old_analog, -10, 110, -150, -30); // Map value to angle\n        // Calcualte tip of needle coords\n        float sx = cos(sdeg * 0.0174532925);\n        float sy = sin(sdeg * 0.0174532925);\n\n        // Calculate x delta of needle start (does not start at pivot point)\n        float tx = tan((sdeg + 90) * 0.0174532925);\n\n        // Erase old needle image\n        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_WHITE);\n        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_WHITE);\n        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_WHITE);\n\n        // Re-plot text under needle\n        tft.setTextColor(TFT_BLACK);\n        tft.drawCentreString("K/Pa", M_SIZE * 120, M_SIZE * 80, 4); // // Comment out to avoid font 4\n        \n        // Store new needle end coords for next erase\n        ltx = tx;\n        osx = M_SIZE * (sx * 98 + 120);\n        osy = M_SIZE * (sy * 98 + 140);\n\n        // Draw the needle in the new postion, magenta makes needle a bit bolder\n        // draws 3 lines to thicken needle\n        tft.drawLine(M_SIZE * (120 + 20 * ltx - 1), M_SIZE * (140 - 20), osx - 1, osy, TFT_RED);\n        tft.drawLine(M_SIZE * (120 + 20 * ltx), M_SIZE * (140 - 20), osx, osy, TFT_MAGENTA);\n        tft.drawLine(M_SIZE * (120 + 20 * ltx + 1), M_SIZE * (140 - 20), osx + 1, osy, TFT_RED);\n\n        // Slow needle down slightly as it approaches new postion\n        if (abs(old_analog - value) < 10) {\n            ms_delay += ms_delay / 5;\n        }\n\n        // Wait before next update\n        delay(ms_delay);\n    }\n}\n\n')))}p.isMDXComponent=!0}}]);
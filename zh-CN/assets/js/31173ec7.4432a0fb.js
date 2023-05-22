"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[10746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||a;return t?i.createElement(h,o(o({ref:n},p),{},{components:t})):i.createElement(h,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},87160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(87462),r=(t(67294),t(3905));const a={title:"Advanced Wi-Fi Usage",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Advanced-Wi-Fi/",slug:"/Wio-Terminal-Advanced-Wi-Fi",last_update:{date:"01/11/2022",author:"gunengyu"}},o="Advanced Wi-Fi Usage",l={unversionedId:"Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/Wio-Terminal-Advanced-Wi-Fi",id:"Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/Wio-Terminal-Advanced-Wi-Fi",title:"Advanced Wi-Fi Usage",description:"This wiki introduces some of the advanced library usage of the Wi-Fi such as HTTPClient, DNSServer and WebServer Libraries. With these libraries implemented, you are able to develop your IoT projects with simple APIs.",source:"@site/docs/Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/Wio-Terminal-Advanced-Wi-Fi.md",sourceDirName:"Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi",slug:"/Wio-Terminal-Advanced-Wi-Fi",permalink:"/zh-CN/Wio-Terminal-Advanced-Wi-Fi",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Hardware_Overview/Wi-Fi/Wio-Terminal-Advanced-Wi-Fi.md",tags:[],version:"current",lastUpdatedBy:"gunengyu",lastUpdatedAt:1641830400,formattedLastUpdatedAt:"2022\u5e741\u670810\u65e5",frontMatter:{title:"Advanced Wi-Fi Usage",nointro:null,keywords:["docs","docusaurus"],image:"https://wiki.seeedstudio.com/Wio-Terminal-Advanced-Wi-Fi/",slug:"/Wio-Terminal-Advanced-Wi-Fi",last_update:{date:"01/11/2022",author:"gunengyu"}},sidebar:"ProductSidebar",previous:{title:"Wi-Fi",permalink:"/zh-CN/Wio-Terminal-Wi-Fi"},next:{title:"Overview",permalink:"/zh-CN/Wio-Terminal-Bluetooth-Overview"}},s={},d=[{value:"HTTPClient Usage",id:"httpclient-usage",level:2},{value:"HTTP GET Example",id:"http-get-example",level:3},{value:"HTTPs GET Example",id:"https-get-example",level:3},{value:"HTTP POST Example",id:"http-post-example",level:3},{value:"Python Server Code",id:"python-server-code",level:4},{value:"Arduino Code",id:"arduino-code",level:4},{value:"WebServer Usage",id:"webserver-usage",level:2},{value:"Simple HelloServer Example",id:"simple-helloserver-example",level:3},{value:"HTTP Authentication Web Server Example",id:"http-authentication-web-server-example",level:3},{value:"DNSServer Usage",id:"dnsserver-usage",level:2},{value:"mDNS Usage",id:"mdns-usage",level:2},{value:"Install the Seeed_Arduino_rpcmDNS",id:"install-the-seeed_arduino_rpcmdns",level:3},{value:"mDNS Web Server Example",id:"mdns-web-server-example",level:3},{value:"mDNS-SD Example",id:"mdns-sd-example",level:3},{value:"WiFiManager Usage",id:"wifimanager-usage",level:2},{value:"Install the Seeed_Arduino_rpcWiFiManager",id:"install-the-seeed_arduino_rpcwifimanager",level:3},{value:"WiFiManager Auto Connect Example",id:"wifimanager-auto-connect-example",level:3},{value:"Tech Support",id:"tech-support",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"advanced-wi-fi-usage"},"Advanced Wi-Fi Usage"),(0,r.kt)("p",null,"This wiki introduces some of the advanced library usage of the Wi-Fi such as ",(0,r.kt)("strong",{parentName:"p"},"HTTPClient, DNSServer and WebServer")," Libraries. With these libraries implemented, you are able to develop your IoT projects with simple APIs."),(0,r.kt)("p",null,"Please make sure you have followed the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.seeedstudio.com/Wio-Terminal-Network-Overview/"},(0,r.kt)("strong",{parentName:"a"},"Network Overview"))," to update the ",(0,r.kt)("strong",{parentName:"p"},"latest firmware and dependent libraries"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/banner.png"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"Make sure that **the RTL8720 firmware version is >= v2.0.2**\n"))),(0,r.kt)("h2",{id:"httpclient-usage"},"HTTPClient Usage"),(0,r.kt)("p",null,"HTTPClient is used to make ",(0,r.kt)("strong",{parentName:"p"},"HTTP GET, POST and PUT")," requests to a web server very easy. Here are some examples for you to get started!"),(0,r.kt)("h3",{id:"http-get-example"},"HTTP GET Example"),(0,r.kt)("p",null,"This is an example of using HTTPClient for a simple HTTP connection and prints response back to the Serial Monitor."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <HTTPClient.h>\n\nconst char* ssid = "yourNetwork";\nconst char* password =  "yourPassword";\n\nvoid setup() {\n\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) { //Check for the connection\n    delay(500);\n    Serial.println("Connecting..");\n  }\n  Serial.print("Connected to the WiFi network with IP: ");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {\n    // wait for WiFi connection\n    if((WiFi.status() == WL_CONNECTED)) {\n        HTTPClient http;\n        Serial.print("[HTTP] begin...\\n");\n        // configure traged server and url\n        http.begin("http://www.example.com/index.html"); //HTTP\n        Serial.print("[HTTP] GET...\\n");\n        // start connection and send HTTP header\n        int httpCode = http.GET();\n        // httpCode will be negative on error\n        if(httpCode > 0) {\n            // HTTP header has been send and Server response header has been handled\n            Serial.printf("[HTTP] GET... code: %d\\n", httpCode);\n            // file found at server\n            if(httpCode == HTTP_CODE_OK) {\n                String payload = http.getString();\n                Serial.println(payload);\n            }\n        } else {\n            Serial.printf("[HTTP] GET... failed, error: %s\\n", http.errorToString(httpCode).c_str());\n        }\n        http.end();\n    }\n    delay(5000);\n}\n')),(0,r.kt)("h3",{id:"https-get-example"},"HTTPs GET Example"),(0,r.kt)("p",null,"This is the ",(0,r.kt)("strong",{parentName:"p"},"HTTPs connection")," using HTTPClient library. You may refer this to send HTTPs GET request to websites that you want to visit!"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"You can find out website's root CA following [**this**](https://wiki.seeedstudio.com/Wio-Terminal-Wi-Fi/#obtaining-websites-root-ca).\n"))),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTPs.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <HTTPClient.h>\n#include <WiFiClientSecure.h>\n\nconst char* ssid = "yourNetwork";\nconst char* password =  "yourPassword";\n\nconst char* test_root_ca = \\\n                            "-----BEGIN CERTIFICATE-----\\n"\n                            "MIIESjCCAzKgAwIBAgINAeO0mqGNiqmBJWlQuDANBgkqhkiG9w0BAQsFADBMMSAw\\n"\n                            "HgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMjETMBEGA1UEChMKR2xvYmFs\\n"\n                            "U2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0xNzA2MTUwMDAwNDJaFw0yMTEy\\n"\n                            "MTUwMDAwNDJaMEIxCzAJBgNVBAYTAlVTMR4wHAYDVQQKExVHb29nbGUgVHJ1c3Qg\\n"\n                            "U2VydmljZXMxEzARBgNVBAMTCkdUUyBDQSAxTzEwggEiMA0GCSqGSIb3DQEBAQUA\\n"\n                            "A4IBDwAwggEKAoIBAQDQGM9F1IvN05zkQO9+tN1pIRvJzzyOTHW5DzEZhD2ePCnv\\n"\n                            "UA0Qk28FgICfKqC9EksC4T2fWBYk/jCfC3R3VZMdS/dN4ZKCEPZRrAzDsiKUDzRr\\n"\n                            "mBBJ5wudgzndIMYcLe/RGGFl5yODIKgjEv/SJH/UL+dEaltN11BmsK+eQmMF++Ac\\n"\n                            "xGNhr59qM/9il71I2dN8FGfcddwuaej4bXhp0LcQBbjxMcI7JP0aM3T4I+DsaxmK\\n"\n                            "FsbjzaTNC9uzpFlgOIg7rR25xoynUxv8vNmkq7zdPGHXkxWY7oG9j+JkRyBABk7X\\n"\n                            "rJfoucBZEqFJJSPk7XA0LKW0Y3z5oz2D0c1tJKwHAgMBAAGjggEzMIIBLzAOBgNV\\n"\n                            "HQ8BAf8EBAMCAYYwHQYDVR0lBBYwFAYIKwYBBQUHAwEGCCsGAQUFBwMCMBIGA1Ud\\n"\n                            "EwEB/wQIMAYBAf8CAQAwHQYDVR0OBBYEFJjR+G4Q68+b7GCfGJAboOt9Cf0rMB8G\\n"\n                            "A1UdIwQYMBaAFJviB1dnHB7AagbeWbSaLd/cGYYuMDUGCCsGAQUFBwEBBCkwJzAl\\n"\n                            "BggrBgEFBQcwAYYZaHR0cDovL29jc3AucGtpLmdvb2cvZ3NyMjAyBgNVHR8EKzAp\\n"\n                            "MCegJaAjhiFodHRwOi8vY3JsLnBraS5nb29nL2dzcjIvZ3NyMi5jcmwwPwYDVR0g\\n"\n                            "BDgwNjA0BgZngQwBAgIwKjAoBggrBgEFBQcCARYcaHR0cHM6Ly9wa2kuZ29vZy9y\\n"\n                            "ZXBvc2l0b3J5LzANBgkqhkiG9w0BAQsFAAOCAQEAGoA+Nnn78y6pRjd9XlQWNa7H\\n"\n                            "TgiZ/r3RNGkmUmYHPQq6Scti9PEajvwRT2iWTHQr02fesqOqBY2ETUwgZQ+lltoN\\n"\n                            "FvhsO9tvBCOIazpswWC9aJ9xju4tWDQH8NVU6YZZ/XteDSGU9YzJqPjY8q3MDxrz\\n"\n                            "mqepBCf5o8mw/wJ4a2G6xzUr6Fb6T8McDO22PLRL6u3M4Tzs3A2M1j6bykJYi8wW\\n"\n                            "IRdAvKLWZu/axBVbzYmqmwkm5zLSDW5nIAJbELCQCZwMH56t2Dvqofxs6BBcCFIZ\\n"\n                            "USpxu6x6td0V7SvJCCosirSmIatj/9dSSVDQibet8q/7UK4v4ZUN80atnZz1yg==\\n"\n                            "-----END CERTIFICATE-----\\n";\n\nWiFiClientSecure client;\n\nvoid setup() {\n\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) { //Check for the connection\n    delay(500);\n    Serial.println("Connecting..");\n  }\n  Serial.print("Connected to the WiFi network with IP: ");\n  Serial.println(WiFi.localIP());\n  client.setCACert(test_root_ca);\n}\n\nvoid loop() {\n  if(&client) {\n    {\n      // Add a scoping block for HTTPClient https to make sure it is destroyed before WiFiClientSecure *client is \n      HTTPClient https;\n      Serial.print("[HTTPS] begin...\\n");\n      if (https.begin(client, "https://www.google.com/index.html")) {  // HTTPS\n        Serial.print("[HTTPS] GET...\\n");\n        // start connection and send HTTP header\n        int httpCode = https.GET();\n        // httpCode will be negative on error\n        if (httpCode > 0) {\n          // HTTP header has been send and Server response header has been handled\n          Serial.printf("[HTTPS] GET... code: %d\\n", httpCode);\n          // file found at server\n          if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {\n            String payload = https.getString();\n            Serial.println(payload);\n          }\n        } else {\n          Serial.printf("[HTTPS] GET... failed, error: %s\\n", https.errorToString(httpCode).c_str());\n        }\n        https.end();\n      } else {\n        Serial.printf("[HTTPS] Unable to connect\\n");\n      }\n      // End extra scoping block\n    }\n  } else {\n    Serial.println("Unable to create client");\n  }\n  Serial.println();\n  Serial.println("Waiting 10s before the next round...");\n  delay(10000);\n}\n')),(0,r.kt)("h3",{id:"http-post-example"},"HTTP POST Example"),(0,r.kt)("p",null,"This is an example of sending ",(0,r.kt)("strong",{parentName:"p"},"HTTP POST request")," using the HTTPClient from Wio Terminal to a Web Server. For this demonstration, we are using python to set up a simple web server on our PC that can receive and response to HTTP requests."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/HTTP-POST.png"})),(0,r.kt)("h4",{id:"python-server-code"},"Python Server Code"),(0,r.kt)("p",null,"First, we need to use ",(0,r.kt)("inlineCode",{parentName:"p"},"pip")," to install the needed ",(0,r.kt)("strong",{parentName:"p"},"bottle library")," in Python. Run the following in terminal to install bottle:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"pip install bottle\n")),(0,r.kt)("p",null,"Once imported the bottle, copy the following code and save as ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"simple-server.py")),". You may also change the port to something else you prefer but make this matches with the Arduino side."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"from bottle import run, request, post\n\n@post('/')\ndef index():\n    data = request.body.read()\n    print(data)\n\nrun(host='0.0.0.0', port=1880, debug=True)\n")),(0,r.kt)("h4",{id:"arduino-code"},"Arduino Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Check the Terminal and you can see the incoming HTTP request message from Wio Terminal."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <HTTPClient.h>\n\nconst char* ssid = "yourNetwork";\nconst char* password =  "yourPassword";\n\n// Change the following IP to your computer\'s IP running the server, make sure the Port also match\nconst char* yourLocalIp =  "http://10.0.0.233:1880/";\n\nvoid setup() {\n\n  Serial.begin(115200);\n  WiFi.begin(ssid, password);\n\n  while (WiFi.status() != WL_CONNECTED) { //Check for the connection\n    delay(500);\n    Serial.println("Connecting..");\n  }\n  Serial.print("Connected to the WiFi network with IP: ");\n  Serial.println(WiFi.localIP());\n}\n\nvoid loop() {\n\n if(WiFi.status()== WL_CONNECTED){   //Check WiFi connection status\n\n   HTTPClient http;\n\n   http.begin(yourLocalIp);  //Specify destination for HTTP request\n   http.addHeader("Content-Type", "text/plain");             //Specify content-type header\n\n   int httpResponseCode = http.POST("Hello Bottle, from Wio Terminal");   //Send the actual POST request\n\n   if(httpResponseCode>0){\n    Serial.print("HTTP Response Code: ");\n    Serial.println(httpResponseCode);   //Print return code\n   }else{\n    Serial.print("Error on sending request: ");\n    Serial.println(httpResponseCode);\n   }\n\n   http.end();  //Free resources\n\n }else{\n    Serial.println("Error in WiFi connection");\n }\n  delay(5000);  //Send a request every 5 seconds\n}\n')),(0,r.kt)("h2",{id:"webserver-usage"},"WebServer Usage"),(0,r.kt)("p",null,"With the help of ",(0,r.kt)("strong",{parentName:"p"},"WebServer library"),", you can set up Web Server running on the Wio Terminal. By accessing the server with a browser running on any computer connected to the same network as the Wio Terminal, you can ",(0,r.kt)("strong",{parentName:"p"},"control hardware from the webpage, read value of a sensor")," and much more!"),(0,r.kt)("h3",{id:"simple-helloserver-example"},"Simple HelloServer Example"),(0,r.kt)("p",null,"This sets up a simple web server on the connected network using Wio Terminal."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/helloServer.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access the web server by entering Wio Terminal's IP from the same network using browser."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <WiFiClient.h>\n#include <WebServer.h>\n\nconst char *ssid = "yourNetwork";\nconst char *password = "yourPassword";\n\nWebServer server(80);\n\nconst int led = 13;\n\nvoid handleRoot() {\n  digitalWrite(led, 1);\n  server.send(200, "text/plain", "hello from Wio Terminal!");\n  digitalWrite(led, 0);\n}\n\nvoid handleNotFound() {\n  digitalWrite(led, 1);\n  String message = "File Not Found\\n\\n";\n  message += "URI: ";\n  message += server.uri();\n  message += "\\nMethod: ";\n  message += (server.method() == HTTP_GET) ? "GET" : "POST";\n  message += "\\nArguments: ";\n  message += server.args();\n  message += "\\n";\n  for (uint8_t i = 0; i < server.args(); i++) {\n    message += " " + server.argName(i) + ": " + server.arg(i) + "\\n";\n  }\n  server.send(404, "text/plain", message);\n  digitalWrite(led, 0);\n}\n\nvoid setup(void) {\n  pinMode(led, OUTPUT);\n  digitalWrite(led, 0);\n  Serial.begin(115200);\n  WiFi.mode(WIFI_STA);\n  WiFi.begin(ssid, password);\n\n  // Wait for connection\n  while (WiFi.status() != WL_CONNECTED) {\n    delay(500);\n    Serial.print(".");\n  }\n  Serial.print("Connected to ");\n  Serial.println(ssid);\n  Serial.print("IP address: ");\n  Serial.println(WiFi.localIP());\n\n  server.on("/", handleRoot);\n\n  server.on("/inline", []() {\n    server.send(200, "text/plain", "this works as well");\n  });\n\n  server.onNotFound(handleNotFound);\n\n  server.begin();\n  Serial.println("HTTP server started");\n}\n\nvoid loop(void) {\n  server.handleClient();\n}\n')),(0,r.kt)("h3",{id:"http-authentication-web-server-example"},"HTTP Authentication Web Server Example"),(0,r.kt)("p",null,"This examples sets up a web server that requires Authentication process, which can be very useful in some cases for security purposes."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/auth.gif"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access the web server by entering Wio Terminal's IP from the same network using browser, and enter pre-set username and password."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <WebServer.h>\n\nconst char *ssid = "yourNetwork";\nconst char *password = "yourPassword";\n\nWebServer server(80);\n\nconst char* www_username = "admin";\nconst char* www_password = "password";\n\nvoid setup() {\n  Serial.begin(115200);\n  WiFi.mode(WIFI_STA);\n  WiFi.begin(ssid, password);\n  if (WiFi.waitForConnectResult() != WL_CONNECTED) {\n    Serial.println("WiFi Connect Failed! Rebooting...");\n    delay(1000);\n    NVIC_SystemReset(); // Reset Wio Terminal\n  }\n\n  server.on("/", []() {\n    if (!server.authenticate(www_username, www_password)) {\n      return server.requestAuthentication();\n    }\n    server.send(200, "text/plain", "Login OK");\n  });\n  server.begin();\n\n  Serial.print("Open http://");\n  Serial.print(WiFi.localIP());\n  Serial.println("/ in your browser to see it working");\n}\n\nvoid loop() {\n  server.handleClient();\n}\n')),(0,r.kt)("h2",{id:"dnsserver-usage"},"DNSServer Usage"),(0,r.kt)("p",null,"We talked about ",(0,r.kt)("strong",{parentName:"p"},"WebServer"),", that we use ",(0,r.kt)("strong",{parentName:"p"},"IP address")," to access it. But if you want to access it by typing in the domain name (such as ",(0,r.kt)("inlineCode",{parentName:"p"},"www.google.com"),"), then you need to use the ",(0,r.kt)("strong",{parentName:"p"},"DNSServer"),"."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/DNS.gif"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Using DNSServer must be under ",(0,r.kt)("strong",{parentName:"p"},"AP mode"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Introduce the corresponding library ",(0,r.kt)("inlineCode",{parentName:"p"},"#include <DNSServer.h>"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Declare ",(0,r.kt)("inlineCode",{parentName:"p"},"DNSServer")," objects.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Start the DNS server using the ",(0,r.kt)("inlineCode",{parentName:"p"},"start()")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Process requests from clients using the ",(0,r.kt)("inlineCode",{parentName:"p"},"processNextRequest()")," method.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the Code to Wio Terminal and Connect your PC to the ",(0,r.kt)("inlineCode",{parentName:"p"},"DNSServer example")," Wi-Fi.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type ",(0,r.kt)("inlineCode",{parentName:"p"},"www.wioterminal.com")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"www.wioterminal.com/p1"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <DNSServer.h>\n#include <WebServer.h>\n\nIPAddress local_IP(192, 168, 1, 1);\nIPAddress gateway(192, 168, 1, 1);\nIPAddress subnet(255, 255, 255, 0);\n\nconst byte DNS_PORT = 53;\n\nDNSServer dnsServer;\nWebServer webserver(80);\n\nvoid handleRoot()\n{\n  webserver.send(200, "text/plain", "Root page accessed via domain name");\n}\n\nvoid handleP1()\n{\n  webserver.send(200, "text/plain", "Page 1 accessed via domain name");\n}\n\nvoid setup()\n{\n  WiFi.mode(WIFI_AP);\n  WiFi.softAPConfig(local_IP, gateway, subnet);\n  WiFi.softAP("DNSServer example");\n\n  webserver.on("/", handleRoot);\n  webserver.on("/p1", handleP1);\n\n  dnsServer.start(DNS_PORT, "www.wioterminal.com", local_IP); //Start the DNS service, example.com is the registered domain name.\n  webserver.begin();\n}\n\nvoid loop()\n{\n  dnsServer.processNextRequest();\n  webserver.handleClient();\n}\n')),(0,r.kt)("h2",{id:"mdns-usage"},"mDNS Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is Multicast DNS(mDNS)?")),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Multicast_DNS"},"multicast DNS (mDNS)")," protocol resolves hostnames to IP addresses within small networks that do not include a local name server. Multicast DNS is designed for small networks and is intended to increase their user-friendliness. The idea is that users can connect devices in secret LANs without any issues."),(0,r.kt)("h3",{id:"install-the-seeed_arduino_rpcmdns"},"Install the Seeed_Arduino_rpcmDNS"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcmDNS"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcmDNS"))," repositories and download the entire repo to your local drive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, the Seeed_Arduino_rpcmDNS library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_rpcmDNS")," file that you've have just downloaded."))),(0,r.kt)("h3",{id:"mdns-web-server-example"},"mDNS Web Server Example"),(0,r.kt)("p",null,"This is an example that sets up a mDNS web server on the Wio Terminal so that other device connected in the same network can browse the webserver at a defined site."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-webserver.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Access the web server by entering ",(0,r.kt)("a",{parentName:"p",href:"http://WioTerminal.local/"},"http://WioTerminal.local/")," from the same network using browser, and enter pre-set username and password."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <RPCmDNS.h>\n#include <WiFiClient.h>\n\nconst char* ssid     = "yourNetwork";\nconst char* password = "yourPassword";\n\n// TCP server at port 80 will respond to HTTP requests\nWiFiServer server(80);\n\nvoid setup(void)\n{  \n    Serial.begin(115200);\n    while(!Serial){\n        ;\n    }\n    Serial.printf("Setup Start \\r\\n");\n    // Connect to WiFi network\n    WiFi.begin(ssid, password);\n    Serial.println("");\n\n    // Wait for connection\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(500);\n        Serial.print(".");\n    }\n    Serial.println("");\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n    Serial.print("IP address: ");\n    Serial.println(WiFi.localIP());\n\n    // Set up mDNS responder:\n    // - first argument is the domain name, in this example\n    //   the fully-qualified domain name is "esp8266.local"\n    // - second argument is the IP address to advertise\n    //   we send our IP address on the WiFi network\n    if (!MDNS.begin("WioTerminal")) {\n        Serial.println("Error setting up MDNS responder!");\n        while(1) {\n            delay(1000);\n        }\n    }\n    Serial.println("mDNS responder started");\n\n    // Start TCP (HTTP) server\n    server.begin();\n    Serial.println("TCP server started");\n\n    // Add service to MDNS-SD\n    MDNS.addService("http", "tcp", 80);\n\n    Serial.printf("Setup Done \\r\\n");\n}\n\nvoid loop(void)\n{\n    // Check if a client has connected\n    WiFiClient client = server.available();\n    if (!client) {\n        return;\n    }\n    Serial.println("");\n    Serial.println("New client");\n    // Wait for data from client to become available\n    while(client.connected() && !client.available()){\n        delay(1);\n    }\n    // Read the first line of HTTP request\n    String req = client.readStringUntil(\'\\r\');\n    // First line of HTTP request looks like "GET /path HTTP/1.1"\n    // Retrieve the "/path" part by finding the spaces\n    int addr_start = req.indexOf(\' \');\n    int addr_end = req.indexOf(\' \', addr_start + 1);\n    if (addr_start == -1 || addr_end == -1) {\n        Serial.print("Invalid request: ");\n        Serial.println(req);\n        return;\n    }\n    req = req.substring(addr_start + 1, addr_end);\n    Serial.print("Request: ");\n    Serial.println(req);\n\n    String s;\n    if (req == "/")\n    {\n        IPAddress ip = WiFi.localIP();\n        String ipStr = String(ip[0]) + \'.\' + String(ip[1]) + \'.\' + String(ip[2]) + \'.\' + String(ip[3]);\n        s = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<!DOCTYPE HTML>\\r\\n<html>Hello from Wio Terminal at ";\n        s += ipStr;\n        s += "</html>\\r\\n\\r\\n";\n        Serial.println("Sending 200");\n    }\n    else\n    {\n        s = "HTTP/1.1 404 Not Found\\r\\n\\r\\n";\n        Serial.println("Sending 404");\n    }\n    client.print(s);\n\n    client.stop();\n    Serial.println("Done with client");\n}\n')),(0,r.kt)("h3",{id:"mdns-sd-example"},"mDNS-SD Example"),(0,r.kt)("p",null,"This is a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Zero-configuration_networking#DNS-SD"},"mDNS-SD(Service Discovery)")," example which allows you to discover services in the same network."),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/mdns-sd.png"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"yourNetwork")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"yourPassword")," to your WiFi ",(0,r.kt)("strong",{parentName:"p"},"ssid")," and ",(0,r.kt)("strong",{parentName:"p"},"password"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <RPCmDNS.h>\n#include <WiFiClient.h>\n\nconst char* ssid     = "yourNetwork";\nconst char* password = "yourPassword";\n\n// TCP server at port 80 will respond to HTTP requests\nWiFiServer server(80);\n\nvoid setup(void)\n{  \n    Serial.begin(115200);\n    while(!Serial){\n        ;\n    }\n    Serial.printf("Setup Start \\r\\n");\n    // Connect to WiFi network\n    WiFi.begin(ssid, password);\n    Serial.println("");\n\n    // Wait for connection\n    while (WiFi.status() != WL_CONNECTED) {\n        delay(500);\n        Serial.print(".");\n    }\n    Serial.println("");\n    Serial.print("Connected to ");\n    Serial.println(ssid);\n    Serial.print("IP address: ");\n    Serial.println(WiFi.localIP());\n\n    // Set up mDNS responder:\n    // - first argument is the domain name, in this example\n    //   the fully-qualified domain name is "esp8266.local"\n    // - second argument is the IP address to advertise\n    //   we send our IP address on the WiFi network\n    if (!MDNS.begin("WioTerminal")) {\n        Serial.println("Error setting up MDNS responder!");\n        while(1) {\n            delay(1000);\n        }\n    }\n    Serial.println("mDNS responder started");\n\n    // Start TCP (HTTP) server\n    server.begin();\n    Serial.println("TCP server started");\n\n    // Add service to MDNS-SD\n    MDNS.addService("http", "tcp", 80);\n\n    Serial.printf("Setup Done \\r\\n");\n}\n\nvoid loop(void)\n{\n    // Check if a client has connected\n    WiFiClient client = server.available();\n    if (!client) {\n        return;\n    }\n    Serial.println("");\n    Serial.println("New client");\n    // Wait for data from client to become available\n    while(client.connected() && !client.available()){\n        delay(1);\n    }\n    // Read the first line of HTTP request\n    String req = client.readStringUntil(\'\\r\');\n    // First line of HTTP request looks like "GET /path HTTP/1.1"\n    // Retrieve the "/path" part by finding the spaces\n    int addr_start = req.indexOf(\' \');\n    int addr_end = req.indexOf(\' \', addr_start + 1);\n    if (addr_start == -1 || addr_end == -1) {\n        Serial.print("Invalid request: ");\n        Serial.println(req);\n        return;\n    }\n    req = req.substring(addr_start + 1, addr_end);\n    Serial.print("Request: ");\n    Serial.println(req);\n\n    String s;\n    if (req == "/")\n    {\n        IPAddress ip = WiFi.localIP();\n        String ipStr = String(ip[0]) + \'.\' + String(ip[1]) + \'.\' + String(ip[2]) + \'.\' + String(ip[3]);\n        s = "HTTP/1.1 200 OK\\r\\nContent-Type: text/html\\r\\n\\r\\n<!DOCTYPE HTML>\\r\\n<html>Hello from Wio Terminal at ";\n        s += ipStr;\n        s += "</html>\\r\\n\\r\\n";\n        Serial.println("Sending 200");\n    }\n    else\n    {\n        s = "HTTP/1.1 404 Not Found\\r\\n\\r\\n";\n        Serial.println("Sending 404");\n    }\n    client.print(s);\n\n    client.stop();\n    Serial.println("Done with client");\n}\n')),(0,r.kt)("h2",{id:"wifimanager-usage"},"WiFiManager Usage"),(0,r.kt)("p",null,"We have ported the well known WiFi Manager to the Wio Terminal platform so that you may use your phone or other device to configure Wi-Fi settings for your Wio Terminal!"),(0,r.kt)("h3",{id:"install-the-seeed_arduino_rpcwifimanager"},"Install the Seeed_Arduino_rpcWiFiManager"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/Seeed-Studio/Seeed_Arduino_rpcWiFiManager"},(0,r.kt)("strong",{parentName:"a"},"Seeed_Arduino_rpcWiFiManager"))," repositories and download the entire repo to your local drive.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now, the Seeed_Arduino_rpcWiFiManager library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,r.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,r.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,r.kt)("inlineCode",{parentName:"p"},"Seeed_Arduino_rpcWiFiManager")," file that you've have just downloaded."))),(0,r.kt)("h3",{id:"wifimanager-auto-connect-example"},"WiFiManager Auto Connect Example"),(0,r.kt)("div",{align:"center"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Advanced-Wi-Fi/wifimanager.gif"})),(0,r.kt)("p",null,"This example is the demonstration of the auto connect example. You can use the example to set the WiFi settings for Wio Terminal."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the code to Wio Terminal.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If Wio Terminal have connected to WiFi before, it will auto-connect to the same network. If it cannot connect to any WiFi it will go into AP mode and emit a WiFi. Use your phone to connect to this WiFi and input the WiFi settings."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <rpcWiFi.h>\n#include <DNSServer.h>\n#include <WebServer.h>\n#include <WiFiManager.h>\n\nvoid setup() {\n    Serial.begin(115200);\n    while(!Serial); // wait till Serial is opened\n\n    WiFiManager wifiManager;\n    // Uncomment the resetSettings() will wipe out the saved settings\n    //wifiManager.resetSettings();\n\n    //Fetches ssid and pass from RTL8720 and tries to connect\n    //if it does not connect it starts an access point with the specified name\n    //here  "AutoConnectAP"\n    //and goes into a blocking loop awaiting configuration\n    wifiManager.autoConnect("AutoConnectAP");\n    //or use this for auto generated name ESP + ChipID\n    //wifiManager.autoConnect();\n\n    //if you get here you have connected to the WiFi\n    Serial.println("connected...yeey :)");\n    Serial.println(WiFi.localIP());\n}\n\nvoid loop() {\n    // put your main code here, to run repeatedly:\n}\n')),(0,r.kt)("h2",{id:"tech-support"},"Tech Support"),(0,r.kt)("p",null," if you have any technical issue.  submit the issue into our ",(0,r.kt)("a",{parentName:"p",href:"http://forum.seeedstudio.com/"},"forum"),". "),(0,r.kt)("div",null,(0,r.kt)("br",null),(0,r.kt)("p",{style:{textAlign:"center"}},(0,r.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,r.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"})))))}c.isMDXComponent=!0}}]);
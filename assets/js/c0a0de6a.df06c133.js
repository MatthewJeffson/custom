"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[24625],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=i,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||a;return t?r.createElement(m,o(o({ref:n},d),{},{components:t})):r.createElement(m,o({ref:n},d))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),i=(t(67294),t(3905));const a={description:"Ethernet Extension board",title:"Ethernet Extension board",keywords:["Wio_terminal Extension_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Ethernet",last_update:{date:"1/30/2023",author:"jianjing Huang"}},o="Ethernet Connection for Wio Terminal",l={unversionedId:"Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Ethernet",id:"Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Ethernet",title:"Ethernet Extension board",description:"Ethernet Extension board",source:"@site/docs/Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Ethernet.md",sourceDirName:"Sensor/Wio_Terminal/Extension_Board",slug:"/Wio-Terminal-Ethernet",permalink:"/custom/Wio-Terminal-Ethernet",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Sensor/Wio_Terminal/Extension_Board/Wio-Terminal-Ethernet.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675036800,formattedLastUpdatedAt:"Jan 30, 2023",frontMatter:{description:"Ethernet Extension board",title:"Ethernet Extension board",keywords:["Wio_terminal Extension_Board"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Wio-Terminal-Ethernet",last_update:{date:"1/30/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Wio Terminal LoRaWan Chassis with Antenna-built-in LoRa-E5 and GNSS, EU868/US915",permalink:"/custom/Wio_Terminal_LoRaWan_Chassis_with_Antenna-built-in_LoRa-E5_and_GNSS_EU868_US915"},next:{title:"Overview",permalink:"/custom/Wio-Terminal-Audio-Overview"}},s={},p=[{value:"Hardware Required",id:"hardware-required",level:2},{value:"Hardware Connection",id:"hardware-connection",level:2},{value:"Installing the UIPEthernet Arduino Library",id:"installing-the-uipethernet-arduino-library",level:2},{value:"Simple DHCP Example",id:"simple-dhcp-example",level:2},{value:"Example Code",id:"example-code",level:3},{value:"Connecting Network via Static IP",id:"connecting-network-via-static-ip",level:2},{value:"Example Code",id:"example-code-1",level:3},{value:"Simple Web Client",id:"simple-web-client",level:2},{value:"Example Code",id:"example-code-2",level:3},{value:"Web Server Example",id:"web-server-example",level:2},{value:"Example Code",id:"example-code-3",level:3},{value:"Web Server Testing",id:"web-server-testing",level:3},{value:"Using UDP For NTP Time",id:"using-udp-for-ntp-time",level:2},{value:"Example Code",id:"example-code-4",level:3},{value:"Sending Twitter Example",id:"sending-twitter-example",level:2},{value:"Install the Tweet Library for Arduino",id:"install-the-tweet-library-for-arduino",level:3},{value:"Obtain Token",id:"obtain-token",level:3},{value:"Example Code",id:"example-code-5",level:3}],d={toc:p};function c(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"ethernet-connection-for-wio-terminal"},"Ethernet Connection for Wio Terminal"),(0,i.kt)("p",null,"This wiki introduces how to use the ",(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ENC28J60-OVERLAYS-HAT-for-Raspberry-pi-p-3045.html"},(0,i.kt)("strong",{parentName:"a"},"ENC28J60 OVERLAYS HAT for Raspberry Pi"))," on Wio Terminal for stable network connectivity. This is a perfect example of using Raspberry Pi 40 Pi extensions board on Wio Terminal."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/twitter.png"})),(0,i.kt)("h2",{id:"hardware-required"},"Hardware Required"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/Wio-Terminal-p-4509.html"},(0,i.kt)("strong",{parentName:"a"},"Wio Terminal")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.seeedstudio.com/ENC28J60-OVERLAYS-HAT-for-Raspberry-pi-p-3045.html"},(0,i.kt)("strong",{parentName:"a"},"ENC28J60 OVERLAYS HAT for Raspberry Pi")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("em",{parentName:"p"},"40 Pin Pi HAT Adapter board for Wio Terminal (Not released yet)")))),(0,i.kt)("h2",{id:"hardware-connection"},"Hardware Connection"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For now, if you want to test out the software, you will fly out leads.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/enc-wio.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plug in the Ethernet cable to the ENC28J60 Overlays Hat.")),(0,i.kt)("h2",{id:"installing-the-uipethernet-arduino-library"},"Installing the UIPEthernet Arduino Library"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/UIPEthernet/UIPEthernet"},"UIPEthernet")," repositories and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"UIPEthernet")," file that you've have just downloaded."))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://files.seeedstudio.com/wiki/Wio-Terminal/img/Xnip2019-11-21_15-50-13.jpg",alt:"InstallLibrary"})),(0,i.kt)("h2",{id:"simple-dhcp-example"},"Simple DHCP Example"),(0,i.kt)("p",null,"This example simply uses DHCP to automatically obtain network configurations from the network host."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/DHCP.png"})),(0,i.kt)("h3",{id:"example-code"},"Example Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <UIPEthernet.h>\n\nuint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(9600);\n  while(!Serial);\n  Serial.println(F("[testDHCP]"));\n  \n  Serial.print("MAC: ");\n  for (byte i = 0; i < 6; ++i) {\n    Serial.print(mac[i], HEX);\n    if (i < 5)\n      Serial.print(\':\');\n  }\n  Serial.println();\n  \n  if (Ethernet.begin(mac) != 1) {\n     Serial.println("Failed to configure Ethernet using DHCP");\n     while (true) {\n        delay(1); // do nothing, no point running without Ethernet hardware\n     }\n  }\n  \n  Serial.print("My IP: ");\n  Serial.println(Ethernet.localIP());\n  Serial.print("Netmask: ");\n  Serial.println(Ethernet.subnetMask());\n  Serial.print("Gateway IP: ");\n  Serial.println(Ethernet.gatewayIP());\n  Serial.print("DNS: ");\n  Serial.println(Ethernet.dnsServerIP());\n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}\n')),(0,i.kt)("h2",{id:"connecting-network-via-static-ip"},"Connecting Network via Static IP"),(0,i.kt)("p",null,"Instead of DHCP, you may also want to use static IP to connect to the network host for different purposes. In this example, you can configure how to connect to the network manually by setting static IP, Netmask, Gateway, and DNS."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/Static.png"})),(0,i.kt)("h3",{id:"example-code-1"},"Example Code"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This could be very useful when you need to connect the device to the specific Gateway and DNS (i.e. Bypass Mode Router/Gateway)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <UIPEthernet.h>\n\n// Static Set-up, change the following according to your network\nuint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};\nIPAddress myIP = {10,0,0,111};\nIPAddress myMask = {255,255,255,0};\nIPAddress myGatewayIP = {10,0,0,127};\nIPAddress myDNS = {10,0,0,127};\n\nvoid setup() {\n  // put your setup code here, to run once:\n  Serial.begin(9600);\n  while(!Serial);\n  Serial.println(F("[getStaticIP]"));\n  \n  Serial.print("MAC: ");\n  for (byte i = 0; i < 6; ++i) {\n    Serial.print(mac[i], HEX);\n    if (i < 5)\n      Serial.print(\':\');\n  }\n  Serial.println();\n  \n  Ethernet.begin(mac,myIP, myDNS, myGatewayIP, myMask);\n\n  Serial.print("My IP: ");\n  Serial.println(Ethernet.localIP());\n  Serial.print("Netmask: ");\n  Serial.println(Ethernet.subnetMask());\n  Serial.print("Gateway IP: ");\n  Serial.println(Ethernet.gatewayIP());\n  Serial.print("DNS: ");\n  Serial.println(Ethernet.dnsServerIP());  \n}\n\nvoid loop() {\n  // put your main code here, to run repeatedly:\n}\n')),(0,i.kt)("h2",{id:"simple-web-client"},"Simple Web Client"),(0,i.kt)("p",null,"Once we have the network connection through the Ethernet, we can use it for TCP client. For example, obtaining data from the internet (HTTP) or getting from a server in the same network."),(0,i.kt)("p",null,"In this example, it will use DHCP first to setup if fails it will then use static IP to assign. This example connects to the ",(0,i.kt)("inlineCode",{parentName:"p"},"www.bing.com")," and prints to the Serial monitor."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/TCPclient.png"})),(0,i.kt)("h3",{id:"example-code-2"},"Example Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <UIPEthernet.h>\n\n// Enter a MAC address for your controller below.\nbyte mac[] = { 0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED };\n\nchar server[] = "www.bing.com";\n\n// Set the static IP address to use if the DHCP fails to assign\nIPAddress myIP(10, 0, 0, 187);\nIPAddress myMask = {255,255,255,0};\nIPAddress myGatewayIP = {10,0,0,127};\nIPAddress dnsIP(10, 0, 0, 127);\n\n// Initialize the Ethernet client library\n// with the IP address and port of the server\n// that you want to connect to (port 80 is default for HTTP):\nEthernetClient client;\n\n// Variables to measure the speed\nunsigned long beginMicros, endMicros;\nunsigned long byteCount = 0;\nbool printWebData = true;  // set to false for better speed measurement\n\nvoid setup() {\n  // Open serial communications and wait for port to open:\n  Serial.begin(9600);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for native USB port only\n  }\n\n  // start the Ethernet connection:\n  Serial.println("Initialize Ethernet with DHCP:");\n  if (Ethernet.begin(mac) == 0) {\n    Serial.println("Failed to configure Ethernet using DHCP");\n    // Check for Ethernet hardware present\n    if (Ethernet.hardwareStatus() == EthernetNoHardware) {\n      Serial.println("Ethernet shield was not found.  Sorry, can\'t run without hardware. :(");\n      while (true) {\n        delay(1); // do nothing, no point running without Ethernet hardware\n      }\n    }\n    if (Ethernet.linkStatus() == LinkOFF) {\n      Serial.println("Ethernet cable is not connected.");\n    }\n    // try to congifure using IP address instead of DHCP:\n    Ethernet.begin(mac,myIP, dnsIP, myGatewayIP, myMask);\n  } else {\n    Serial.print("  DHCP assigned IP ");\n    Serial.println(Ethernet.localIP());\n  }\n  // give the Ethernet shield a second to initialize:\n  delay(1000);\n  Serial.print("connecting to ");\n  Serial.print(server);\n  Serial.println("...");\n\n  // if you get a connection, report back via serial:\n  if (client.connect(server, 80)) {\n    Serial.print("connected to ");\n    Serial.println(client.remoteIP());\n    // Make a HTTP request:\n    client.println("GET /search?q=WioTerminal HTTP/1.1");\n    client.println("Host: www.bing.com");\n    client.println("Connection: close");\n    client.println();\n  } else {\n    // if you didn\'t get a connection to the server:\n    Serial.println("connection failed");\n  }\n  beginMicros = micros();\n}\n\nvoid loop() {\n  // if there are incoming bytes available\n  // from the server, read them and print them:\n  int len = client.available();\n  if (len > 0) {\n    byte buffer[80];\n    if (len > 80) len = 80;\n    client.read(buffer, len);\n    if (printWebData) {\n      Serial.write(buffer, len); // show in the serial monitor (slows some boards)\n    }\n    byteCount = byteCount + len;\n  }\n\n  // if the server\'s disconnected, stop the client:\n  if (!client.connected()) {\n    endMicros = micros();\n    Serial.println();\n    Serial.println("disconnecting.");\n    client.stop();\n    Serial.print("Received ");\n    Serial.print(byteCount);\n    Serial.print(" bytes in ");\n    float seconds = (float)(endMicros - beginMicros) / 1000000.0;\n    Serial.print(seconds, 4);\n    float rate = (float)byteCount / seconds / 1000.0;\n    Serial.print(", rate = ");\n    Serial.print(rate);\n    Serial.print(" kbytes/second");\n    Serial.println();\n\n    // do nothing forevermore:\n    while (true) {\n      delay(1);\n    }\n  }\n}\n')),(0,i.kt)("h2",{id:"web-server-example"},"Web Server Example"),(0,i.kt)("p",null,"On the other hand, we have also run the set-up as a web server and allow other devices on the same network to connect to it (i.e. Read the sensor values observed on the Wio Terminal). This could be very useful in some cases due to Ethernet's stability is much better than Wi-Fi."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/TCPserver.png"})),(0,i.kt)("h3",{id:"example-code-3"},"Example Code"),(0,i.kt)("p",null,"This example configure itself as Web Server and sets up a simple web page printing out values readings from ",(0,i.kt)("inlineCode",{parentName:"p"},"A0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"A5"),". You may access this from your PC connected in the same network via the IP address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <UIPEthernet.h>\n\n// Enter a MAC address and IP address for your controller below.\n// The IP address will be dependent on your local network:\nbyte mac[] = {\n  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED\n};\nIPAddress ip(10, 0, 0, 123);\n\n// Initialize the Ethernet server library\n// with the IP address and port you want to use\n// (port 80 is default for HTTP):\nEthernetServer server(80);\n\nvoid setup() {\n  // Open serial communications and wait for port to open:\n  Serial.begin(9600);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for native USB port only\n  }\n  Serial.println("Ethernet WebServer Example");\n\n  // start the Ethernet connection and the server:\n  Ethernet.begin(mac, ip);\n\n  // Check for Ethernet hardware present\n  if (Ethernet.hardwareStatus() == EthernetNoHardware) {\n    Serial.println("Ethernet shield was not found.  Sorry, can\'t run without hardware. :(");\n    while (true) {\n      delay(1); // do nothing, no point running without Ethernet hardware\n    }\n  }\n  if (Ethernet.linkStatus() == LinkOFF) {\n    Serial.println("Ethernet cable is not connected.");\n  }\n\n  // start the server\n  server.begin();\n  Serial.print("server is at ");\n  Serial.println(Ethernet.localIP());\n}\n\nvoid loop() {\n  // listen for incoming clients\n  EthernetClient client = server.available();\n  if (client) {\n    Serial.println("new client");\n    // an http request ends with a blank line\n    bool currentLineIsBlank = true;\n    while (client.connected()) {\n      if (client.available()) {\n        char c = client.read();\n        Serial.write(c);\n        // if you\'ve gotten to the end of the line (received a newline\n        // character) and the line is blank, the http request has ended,\n        // so you can send a reply\n        if (c == \'\\n\' && currentLineIsBlank) {\n          // send a standard http response header\n          client.println("HTTP/1.1 200 OK");\n          client.println("Content-Type: text/html");\n          client.println("Connection: close");  // the connection will be closed after completion of the response\n          client.println("Refresh: 5");  // refresh the page automatically every 5 sec\n          client.println();\n          client.println("<!DOCTYPE HTML>");\n          client.println("<html>");\n          // output the value of each analog input pin\n          for (int analogChannel = 0; analogChannel < 6; analogChannel++) {\n            int sensorReading = analogRead(analogChannel);\n            client.print("analog input ");\n            client.print(analogChannel);\n            client.print(" is ");\n            client.print(sensorReading);\n            client.println("<br />");\n          }\n          client.println("</html>");\n          break;\n        }\n        if (c == \'\\n\') {\n          // you\'re starting a new line\n          currentLineIsBlank = true;\n        } else if (c != \'\\r\') {\n          // you\'ve gotten a character on the current line\n          currentLineIsBlank = false;\n        }\n      }\n    }\n    // give the web browser time to receive the data\n    delay(1);\n    // close the connection:\n    client.stop();\n    Serial.println("client disconnected");\n  }\n}\n')),(0,i.kt)("h3",{id:"web-server-testing"},"Web Server Testing"),(0,i.kt)("p",null,"This also provides a simple testing sketch using the set-up."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This is the screenshot of ping-ing the web server over 10 hours.")),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/moretest.png"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Under the same network, use your computer to ping the server's IP:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'#include <UIPEthernet.h>\n\n// Static IP Set-up\nuint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};\nIPAddress myIP = {10,0,0,111};\nEthernetServer server = EthernetServer(80);\n\nvoid setup() {\n  Serial.begin(9600);\n  while(!Serial);\n  Ethernet.begin(mac, myIP);\n  server.begin();\n\n  Serial.print("My IP: ");\n  Serial.println(Ethernet.localIP());\n  Serial.print("Netmask: ");\n  Serial.println(Ethernet.subnetMask());\n  Serial.print("Gateway IP: ");\n  Serial.println(Ethernet.gatewayIP());\n  Serial.print("DNS: ");\n  Serial.println(Ethernet.dnsServerIP());\n}\n\nvoid loop() {\n  // get client\n  EthernetClient client = server.available();\n  if(client && client.connected()) {\n        // do stuff (snipped but basically parses HTTP and responds with no other processing)\n        client.stop();\n  }\n}\n')),(0,i.kt)("h2",{id:"using-udp-for-ntp-time"},"Using UDP For NTP Time"),(0,i.kt)("p",null,"For some situations, UDP is used for network communication. ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_Time_Protocol"},(0,i.kt)("strong",{parentName:"a"},"NTP"))," is the perfect example for this. This example simply obtains time from the ",(0,i.kt)("inlineCode",{parentName:"p"},"time.nist.gov")," NTP server and prints to Serial monitor."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/UDP.png"})),(0,i.kt)("h3",{id:"example-code-4"},"Example Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"#include <UIPEthernet.h>\n\n// Enter a MAC address for your controller below.\n// Newer Ethernet shields have a MAC address printed on a sticker on the shield\nbyte mac[] = {\n  0xDE, 0xAD, 0xBE, 0xEF, 0xFE, 0xED\n};\n\nunsigned int localPort = 8888;       // local port to listen for UDP packets\n\nconst char timeServer[] = \"time.nist.gov\"; // time.nist.gov NTP server\n\nconst int NTP_PACKET_SIZE = 48; // NTP time stamp is in the first 48 bytes of the message\n\nbyte packetBuffer[NTP_PACKET_SIZE]; //buffer to hold incoming and outgoing packets\n\n// A UDP instance to let us send and receive packets over UDP\nEthernetUDP Udp;\n\nvoid setup() {\n  // Open serial communications and wait for port to open:\n  Serial.begin(9600);\n  while (!Serial) {\n    ; // wait for serial port to connect. Needed for native USB port only\n  }\n\n  // start Ethernet and UDP\n  if (Ethernet.begin(mac) == 0) {\n    Serial.println(\"Failed to configure Ethernet using DHCP\");\n    // Check for Ethernet hardware present\n    if (Ethernet.hardwareStatus() == EthernetNoHardware) {\n      Serial.println(\"Ethernet shield was not found.  Sorry, can't run without hardware. :(\");\n    } else if (Ethernet.linkStatus() == LinkOFF) {\n      Serial.println(\"Ethernet cable is not connected.\");\n    }\n    // no point in carrying on, so do nothing forevermore:\n    while (true) {\n      delay(1);\n    }\n  }\n  Udp.begin(localPort);\n}\n\nvoid loop() {\n  sendNTPpacket(timeServer); // send an NTP packet to a time server\n\n  // wait to see if a reply is available\n  delay(1000);\n  if (Udp.parsePacket()) {\n    // We've received a packet, read the data from it\n    Udp.read(packetBuffer, NTP_PACKET_SIZE); // read the packet into the buffer\n\n    // the timestamp starts at byte 40 of the received packet and is four bytes,\n    // or two words, long. First, extract the two words:\n\n    unsigned long highWord = word(packetBuffer[40], packetBuffer[41]);\n    unsigned long lowWord = word(packetBuffer[42], packetBuffer[43]);\n    // combine the four bytes (two words) into a long integer\n    // this is NTP time (seconds since Jan 1 1900):\n    unsigned long secsSince1900 = highWord << 16 | lowWord;\n    Serial.print(\"Seconds since Jan 1 1900 = \");\n    Serial.println(secsSince1900);\n\n    // now convert NTP time into everyday time:\n    Serial.print(\"Unix time = \");\n    // Unix time starts on Jan 1 1970. In seconds, that's 2208988800:\n    const unsigned long seventyYears = 2208988800UL;\n    // subtract seventy years:\n    unsigned long epoch = secsSince1900 - seventyYears;\n    // print Unix time:\n    Serial.println(epoch);\n\n    // print the hour, minute and second:\n    Serial.print(\"The UTC time is \");       // UTC is the time at Greenwich Meridian (GMT)\n    Serial.print((epoch  % 86400L) / 3600); // print the hour (86400 equals secs per day)\n    Serial.print(':');\n    if (((epoch % 3600) / 60) < 10) {\n      // In the first 10 minutes of each hour, we'll want a leading '0'\n      Serial.print('0');\n    }\n    Serial.print((epoch  % 3600) / 60); // print the minute (3600 equals secs per minute)\n    Serial.print(':');\n    if ((epoch % 60) < 10) {\n      // In the first 10 seconds of each minute, we'll want a leading '0'\n      Serial.print('0');\n    }\n    Serial.println(epoch % 60); // print the second\n  }\n  // wait ten seconds before asking for the time again\n  delay(10000);\n  Ethernet.maintain();\n}\n\n// send an NTP request to the time server at the given address\nvoid sendNTPpacket(const char * address) {\n  // set all bytes in the buffer to 0\n  memset(packetBuffer, 0, NTP_PACKET_SIZE);\n  // Initialize values needed to form NTP request\n  // (see URL above for details on the packets)\n  packetBuffer[0] = 0b11100011;   // LI, Version, Mode\n  packetBuffer[1] = 0;     // Stratum, or type of clock\n  packetBuffer[2] = 6;     // Polling Interval\n  packetBuffer[3] = 0xEC;  // Peer Clock Precision\n  // 8 bytes of zero for Root Delay & Root Dispersion\n  packetBuffer[12]  = 49;\n  packetBuffer[13]  = 0x4E;\n  packetBuffer[14]  = 49;\n  packetBuffer[15]  = 52;\n\n  // all NTP fields have been given values, now\n  // you can send a packet requesting a timestamp:\n  Udp.beginPacket(address, 123); // NTP requests are to port 123\n  Udp.write(packetBuffer, NTP_PACKET_SIZE);\n  Udp.endPacket();\n}\n")),(0,i.kt)("h2",{id:"sending-twitter-example"},"Sending Twitter Example"),(0,i.kt)("p",null,"This is a fun example that uses the Wio Terminal to send twitter. This uses the ",(0,i.kt)("a",{parentName:"p",href:"http://arduino-tweet.appspot.com/"},"Tweet Library for Arduino")," to work around the direct connections of the HTTPs."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wio-Terminal-Ethernet/twitter.png"})),(0,i.kt)("h3",{id:"install-the-tweet-library-for-arduino"},"Install the Tweet Library for Arduino"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Visit the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NeoCat/Arduno-Twitter-library"},"Arduno-Twitter-library")," repositories and download the entire repo to your local drive.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, the  library can be installed to the Arduino IDE. Open the Arduino IDE, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"sketch")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Include Library")," -> ",(0,i.kt)("inlineCode",{parentName:"p"},"Add .ZIP Library"),", and choose the ",(0,i.kt)("inlineCode",{parentName:"p"},"Arduno-Twitter-library")," file that you've have just downloaded."))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This the workaround of connecting to twitter, which may not be safe, do it under your own risk.")),(0,i.kt)("h3",{id:"obtain-token"},"Obtain Token"),(0,i.kt)("p",null,"Get a token to post a message using OAuth by clicking ",(0,i.kt)("a",{parentName:"p",href:"http://arduino-tweet.appspot.com/oauth/twitter/login"},(0,i.kt)("strong",{parentName:"a"},"here")),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please visit ",(0,i.kt)("a",{parentName:"p",href:"http://arduino-tweet.appspot.com/"},"http://arduino-tweet.appspot.com/")," for more reference.")),(0,i.kt)("h3",{id:"example-code-5"},"Example Code"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Copy the token you obtained from above, and paste to the Arduino sketch.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},'/*\n *  Check http://arduino-tweet.appspot.com/ for more reference\n */\n \n#include <UIPEthernet.h>\n#include <Twitter.h>\n\nuint8_t mac[6] = {0x74,0x69,0x69,0x2D,0x30,0x31};\n\n// Your Token to Tweet (get it from http://arduino-tweet.appspot.com/)\nTwitter twitter("YOUR-TOKEN-HERE");\n\n// Message to post\nchar msg[] = "Hello, World! I\'m Arduino!";\n\nvoid setup()\n{\n  delay(1000);\n  Ethernet.begin(mac);\n  // or you can use DHCP for autoomatic IP address configuration.\n  // Ethernet.begin(mac);\n  Serial.begin(9600);\n  while(!Serial);\n  \n  Serial.println("connecting ...");\n  if (twitter.post(msg)) {\n    // Specify &Serial to output received response to Serial.\n    // If no output is required, you can just omit the argument, e.g.\n    // int status = twitter.wait();\n    int status = twitter.wait(&Serial);\n    if (status == 200) {\n      Serial.println("OK.");\n    } else {\n      Serial.print("failed : code ");\n      Serial.println(status);\n    }\n  } else {\n    Serial.println("connection failed.");\n  }\n}\n\nvoid loop()\n{\n}\n')))}c.isMDXComponent=!0}}]);
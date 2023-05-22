"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[16776],{3905:(a,s,e)=>{e.d(s,{Zo:()=>m,kt:()=>d});var t=e(67294);function n(a,s,e){return s in a?Object.defineProperty(a,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[s]=e,a}function l(a,s){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(a,s).enumerable}))),e.push.apply(e,t)}return e}function c(a){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?l(Object(e),!0).forEach((function(s){n(a,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(e,s))}))}return a}function p(a,s){if(null==a)return{};var e,t,n=function(a,s){if(null==a)return{};var e,t,n={},l=Object.keys(a);for(t=0;t<l.length;t++)e=l[t],s.indexOf(e)>=0||(n[e]=a[e]);return n}(a,s);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(a);for(t=0;t<l.length;t++)e=l[t],s.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var r=t.createContext({}),i=function(a){var s=t.useContext(r),e=s;return a&&(e="function"==typeof a?a(s):c(c({},s),a)),e},m=function(a){var s=i(a.components);return t.createElement(r.Provider,{value:s},a.children)},o="mdxType",k={inlineCode:"code",wrapper:function(a){var s=a.children;return t.createElement(t.Fragment,{},s)}},u=t.forwardRef((function(a,s){var e=a.components,n=a.mdxType,l=a.originalType,r=a.parentName,m=p(a,["components","mdxType","originalType","parentName"]),o=i(e),u=n,d=o["".concat(r,".").concat(u)]||o[u]||k[u]||l;return e?t.createElement(d,c(c({ref:s},m),{},{components:e})):t.createElement(d,c({ref:s},m))}));function d(a,s){var e=arguments,n=s&&s.mdxType;if("string"==typeof a||n){var l=e.length,c=new Array(l);c[0]=u;var p={};for(var r in s)hasOwnProperty.call(s,r)&&(p[r]=s[r]);p.originalType=a,p[o]="string"==typeof a?a:n,c[1]=p;for(var i=2;i<l;i++)c[i]=e[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,e)}u.displayName="MDXCreateElement"},44103:(a,s,e)=>{e.r(s),e.d(s,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var t=e(87462),n=(e(67294),e(3905));const l={description:"Data_OpenStream_API_Quickstart",title:"Data OpenStream API Quickstart",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},c=void 0,p={unversionedId:"Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart",id:"Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart",title:"Data OpenStream API Quickstart",description:"Data_OpenStream_API_Quickstart",source:"@site/docs/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart.md",sourceDirName:"Cloud_Chain/SenseCAP_API/Data_OpenStream_API",slug:"/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart",permalink:"/custom/zh-CN/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Quickstart.md",tags:[],version:"current",lastUpdatedBy:"Matthew",lastUpdatedAt:1676332800,formattedLastUpdatedAt:"2023\u5e742\u670814\u65e5",frontMatter:{description:"Data_OpenStream_API_Quickstart",title:"Data OpenStream API Quickstart",keywords:["Cloud and Chain"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",last_update:{date:"02/14/2023",author:"Matthew"}},sidebar:"ProductSidebar",previous:{title:"HTTP API Access Guide",permalink:"/custom/zh-CN/Cloud_Chain/SenseCAP_API/HTTP_API/HTTP_API_Access_Guide"},next:{title:"Data OpenStream API Reference",permalink:"/custom/zh-CN/Cloud_Chain/SenseCAP_API/Data_OpenStream_API/Data_OpenStream_API_Reference"}},r={},i=[],m={toc:i};function o(a){let{components:s,...e}=a;return(0,n.kt)("wrapper",(0,t.Z)({},m,e,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("div",{class:"post-content"},(0,n.kt)("div",{class:"summary"},(0,n.kt)("p",null,"This guide will walk you through how to subscribe your devices\u2019 messages as well as how to send a command to a specific device, using Eclipse Mosquitto\u2019s CLIs to subscribe or publish messages.")),(0,n.kt)("div",{id:"toc"}),(0,n.kt)("h2",{id:"setup",class:"clickable-header top-level-header"},"Setup"),(0,n.kt)("i",{class:"icon-arrow-up back-to-top"}),(0,n.kt)("ul",null,(0,n.kt)("li",null,"Install or\xa0",(0,n.kt)("a",{href:"https://mosquitto.org/download/"},"download"),"\xa0Mosquitto.")),(0,n.kt)("h2",{id:"credentials",class:"clickable-header top-level-header"},"Credentials"),(0,n.kt)("i",{class:"icon-arrow-up back-to-top"}),"Browse SenseCAP Portal, navigate to \u201cSecurity/Access API keys\u201d, click the \u201cCreate Access Key\u201d, and you can get the \u201cAccess API keys\u201d, set down it as <Password>, and also \u201cOrganization ID\u201d as <OrgID>.",(0,n.kt)("figure",null,(0,n.kt)("img",{class:"docimage",src:"https://sensecap-docs.seeed.cc/images/open_api/access_key_en.png",alt:""})),(0,n.kt)("figure",null,(0,n.kt)("img",{class:"docimage",src:"https://sensecap-docs.seeed.cc/images/open_api/access_key_en_2.png",alt:""})),(0,n.kt)("figure",null,(0,n.kt)("img",{class:"docimage",src:"https://sensecap-docs.seeed.cc/images/open_api/access_key_en_3.png",alt:""})),(0,n.kt)("h2",{id:"receive-devices-messages",class:"clickable-header top-level-header"},"Receive Devices\u2019 Messages"),(0,n.kt)("i",{class:"icon-arrow-up back-to-top"}),"Let\u2019s listen for all of your devices\u2019 messages.",(0,n.kt)("p",null,"1.Open a terminal window and execute the following command."),(0,n.kt)("ul",null,(0,n.kt)("li",null,"OrgID = Organization ID"),(0,n.kt)("li",null,"Password = Access API keys")),(0,n.kt)("div",{class:"language-ruby highlighter-rouge"},(0,n.kt)("div",{class:"highlight"},(0,n.kt)("pre",{class:"highlight"},(0,n.kt)("code",null,(0,n.kt)("span",{class:"n"},"mosquitto_sub")," ",(0,n.kt)("span",{class:"p"},"\\"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"n"},"h")," ",(0,n.kt)("span",{class:"n"},"sensecap"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"n"},"openstream"),(0,n.kt)("span",{class:"p"},"."),(0,n.kt)("span",{class:"nf"},"seeed"),(0,n.kt)("span",{class:"p"},"."),(0,n.kt)("span",{class:"nf"},"cn")," ",(0,n.kt)("span",{class:"p"},"\\"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"n"},"t")," ",(0,n.kt)("span",{class:"s1"},"'/device_sensor_data/<OrgID>/+/+/+/+'")," ",(0,n.kt)("span",{class:"p"},"\\"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"n"},"u")," ",(0,n.kt)("span",{class:"s1"},"'org-<OrgID>'")," ",(0,n.kt)("span",{class:"p"},"\\"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"no"},"P")," ",(0,n.kt)("span",{class:"s1"},"'<Password>'")," ",(0,n.kt)("span",{class:"p"},"\\"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"no"},"I")," ",(0,n.kt)("span",{class:"s1"},"'org-<OrgID>-quickstart'")," ",(0,n.kt)("span",{class:"p"},"\\"),(0,n.kt)("span",{class:"o"},"-"),(0,n.kt)("span",{class:"n"},"v"))))),"Please replace the Organization ID and Access API Key you just obtained with the <OrgID> and <Password> above.",(0,n.kt)("p",null,"2.Power up devices, while devices keep sending messages, you should receive the data like:"),(0,n.kt)("div",{className:"language-ruby highlighter-rouge"},(0,n.kt)("div",{className:"highlight"},(0,n.kt)("pre",{className:"highlight"},(0,n.kt)("code",null,(0,n.kt)("span",{className:"sr"},"/device_sensor_data/"),(0,n.kt)("span",{className:"mi"},"1234"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"no"},"CF7F12000000001"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"1"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"n"},"vs"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"4105")," ",(0,n.kt)("span",{className:"p"}),(0,n.kt)("span",{className:"s2"},'"value"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"p"},","),(0,n.kt)("span",{className:"s2"},'"timestamp"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"1544151824139"),(0,n.kt)("span",{className:"p"}),"\n",(0,n.kt)("span",{className:"sr"},"/device_sensor_data/xxxx"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"no"},"CF7F12XXXXXXXXX"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"1"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"n"},"vs"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"4097")," ",(0,n.kt)("span",{className:"p"}),(0,n.kt)("span",{className:"s2"},'"value"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"23"),(0,n.kt)("span",{className:"p"},","),(0,n.kt)("span",{className:"s2"},'"timestamp"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"1544151900992"),(0,n.kt)("span",{className:"p"}),"\n",(0,n.kt)("span",{className:"sr"},"/device_sensor_data/xxxx"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"no"},"CF7F12XXXXXXXXX"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"1"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"n"},"vs"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"4101")," ",(0,n.kt)("span",{className:"p"}),(0,n.kt)("span",{className:"s2"},'"value"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"101629"),(0,n.kt)("span",{className:"p"},","),(0,n.kt)("span",{className:"s2"},'"timestamp"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"1544151901112"),(0,n.kt)("span",{className:"p"}),"\n",(0,n.kt)("span",{className:"sr"},"/device_sensor_data/xxxx"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"no"},"CF7F12XXXXXXXXX"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"1"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"n"},"vs"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"4098")," ",(0,n.kt)("span",{className:"p"}),(0,n.kt)("span",{className:"s2"},'"value"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"71"),(0,n.kt)("span",{className:"p"},","),(0,n.kt)("span",{className:"s2"},'"timestamp"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"1544151900992"),(0,n.kt)("span",{className:"p"}),"\n",(0,n.kt)("span",{className:"sr"},"/device_sensor_data/xxxx"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"no"},"CF7F12XXXXXXXXX"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"1"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"n"},"vs"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"4099")," ",(0,n.kt)("span",{className:"p"}),(0,n.kt)("span",{className:"s2"},'"value"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mf"},"69.12"),(0,n.kt)("span",{className:"p"},","),(0,n.kt)("span",{className:"s2"},'"timestamp"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"1544151902224"),(0,n.kt)("span",{className:"p"}),"\n",(0,n.kt)("span",{className:"sr"},"/device_sensor_data/xxxx"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"2"),(0,n.kt)("span",{className:"no"},"CF7F12XXXXXXXXX"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"1"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"n"},"vs"),(0,n.kt)("span",{className:"o"},"/"),(0,n.kt)("span",{className:"mi"},"4100")," ",(0,n.kt)("span",{className:"p"}),(0,n.kt)("span",{className:"s2"},'"value"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"437"),(0,n.kt)("span",{className:"p"},","),(0,n.kt)("span",{className:"s2"},'"timestamp"'),(0,n.kt)("span",{className:"p"},":"),(0,n.kt)("span",{className:"mi"},"1544151922137"),(0,n.kt)("span",{className:"p"}),"\n")))),(0,n.kt)("table",null,(0,n.kt)("thead",null,(0,n.kt)("tr",null,(0,n.kt)("th",null,"example"),(0,n.kt)("th",null,"field"),(0,n.kt)("th",null,"description"))),(0,n.kt)("tbody",null,(0,n.kt)("tr",null,(0,n.kt)("td",null,"1234"),(0,n.kt)("td",null,"OrgId"),(0,n.kt)("td",null,"Organization ID")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"2CF7F12000000001"),(0,n.kt)("td",null,"DeviceEUI"),(0,n.kt)("td",null,"Unique identification of device")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"1"),(0,n.kt)("td",null,"Channel"),(0,n.kt)("td",null,"A physical socket on the device for a sensor to be connected")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"vs"),(0,n.kt)("td",null,"Reserved"),(0,n.kt)("td",null,"The reserved field")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"4105"),(0,n.kt)("td",null,"MeasureID"),(0,n.kt)("td",null,"The type of measurement, 4105 is the Wind Speed")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"2"),(0,n.kt)("td",null,"value"),(0,n.kt)("td",null,"Collected measurements, the Wind Speed is 2m/s")),(0,n.kt)("tr",null,(0,n.kt)("td",null,"1544151824139"),(0,n.kt)("td",null,"timestamp"),(0,n.kt)("td",null,"The collection timestamp of the data")))),(0,n.kt)("h2",{id:"subscribe-a-specific-key",class:"clickable-header top-level-header"},"Subscribe a Specific Key"),(0,n.kt)("i",{class:"icon-arrow-up back-to-top"}),"Specifying a specific key enables you to subscribe to data for a particular device or channel.",(0,n.kt)("p",null,"Example:\nSubscribe to the temperature value collected by the Air Temperature and Humidity Sensor (DeviceEUI: 2CF7F12210400083;Channel: 1;).The temperature measurement ID is 4097.\nReplace ","<","OrgID",">"," as Organization ID, ","<","Password",">"," as Access API Key, execute the command:"),(0,n.kt)("div",{className:"language-ruby highlighter-rouge"},(0,n.kt)("div",{className:"highlight"},(0,n.kt)("pre",{className:"highlight"},(0,n.kt)("code",null,(0,n.kt)("span",{className:"n"},"mosquitto_sub")," ",(0,n.kt)("span",{className:"p"},"\\"),"\n","    ",(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"n"},"h")," ",(0,n.kt)("span",{className:"n"},"sensecap"),(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"n"},"openstream"),(0,n.kt)("span",{className:"p"},"."),(0,n.kt)("span",{className:"nf"},"seeed"),(0,n.kt)("span",{className:"p"},"."),(0,n.kt)("span",{className:"nf"},"cn")," ",(0,n.kt)("span",{className:"p"},"\\"),"\n","    ",(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"n"},"t")," ",(0,n.kt)("span",{className:"s1"},"'/device_sensor_data/<OrgID>/2CF7F12210400083/1/vs/4097'")," ",(0,n.kt)("span",{className:"p"},"\\"),"\n","    ",(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"n"},"u")," ",(0,n.kt)("span",{className:"s1"},"'org-<OrgID>'")," ",(0,n.kt)("span",{className:"p"},"\\"),"\n","    ",(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"no"},"P")," ",(0,n.kt)("span",{className:"s1"},"'<Password>'")," ",(0,n.kt)("span",{className:"p"},"\\"),"\n","    ",(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"no"},"I")," ",(0,n.kt)("span",{className:"s1"},"'org-<OrgID>-quickstart'")," ",(0,n.kt)("span",{className:"p"},"\\"),"\n","    ",(0,n.kt)("span",{className:"o"},"-"),(0,n.kt)("span",{className:"n"},"v"),"\n")))),(0,n.kt)("p",null,"Received the data:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-cpp"},'/device_sensor_data/521853156991/2CF7F12210400083/1/vs/4097 {"value":28,"timestamp":1561373812474}\n')),(0,n.kt)("p",null,"Congratulations! Now you know how to monitor and receive messages via MQTT. Go build something awesome!")))}o.isMDXComponent=!0}}]);
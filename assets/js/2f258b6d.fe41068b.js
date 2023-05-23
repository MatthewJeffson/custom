"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[64446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={description:"Mender Server on ODYSSEY - X86",title:"Mender Server on ODYSSEY - X86",keywords:["Sorftware Mender"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Mender-Server-ODYSSEY-X86",last_update:{date:"03/16/2023",author:"Lakshantha"}},l="Installation of Self-Hosted Mender Server on ODYSSEY - X86",i={unversionedId:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/Mender-Server-ODYSSEY-X86",id:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/Mender-Server-ODYSSEY-X86",title:"Mender Server on ODYSSEY - X86",description:"Mender Server on ODYSSEY - X86",source:"@site/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/Mender-Server-ODYSSEY-X86.md",sourceDirName:"Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY",slug:"/Mender-Server-ODYSSEY-X86",permalink:"/custom/Mender-Server-ODYSSEY-X86",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/ODYSSEY/ODYSSEY_X86J4105/Application/Mender_for_ODYSSEY/Mender-Server-ODYSSEY-X86.md",tags:[],version:"current",lastUpdatedBy:"Lakshantha",lastUpdatedAt:1678924800,formattedLastUpdatedAt:"Mar 16, 2023",frontMatter:{description:"Mender Server on ODYSSEY - X86",title:"Mender Server on ODYSSEY - X86",keywords:["Sorftware Mender"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/Mender-Server-ODYSSEY-X86",last_update:{date:"03/16/2023",author:"Lakshantha"}},sidebar:"ProductSidebar",previous:{title:"Mender Client on ODYSSEY - X86",permalink:"/custom/Mender-Client-ODYSSEY-X86"},next:{title:"Intel OpenVINO Toolkit",permalink:"/custom/ODYSSEY-X86J4105-Intel-OpenVINO"}},s={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Basic Preparation",id:"basic-preparation",level:3},{value:"Certificates and Keys",id:"certificates-and-keys",level:3},{value:"Persistant Storage",id:"persistant-storage",level:3},{value:"Minio",id:"minio",level:3},{value:"Deployments Service",id:"deployments-service",level:3},{value:"Storage Proxy",id:"storage-proxy",level:3},{value:"API Gateway",id:"api-gateway",level:3},{value:"Run the Server",id:"run-the-server",level:2},{value:"Access the Server",id:"access-the-server",level:2},{value:"Public Server",id:"public-server",level:3},{value:"Local Server",id:"local-server",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation-of-self-hosted-mender-server-on-odyssey---x86"},"Installation of Self-Hosted Mender Server on ODYSSEY - X86"),(0,a.kt)("p",null,"We can setup Self-Hosted Mender Server on an ODYSSEY - X86 board and then push OTA updates to other client devices running as Mender clients."),(0,a.kt)("p",null,"This guide focuses on using the ODYSSEY - X86 board running the OpenWrt System by Seeed. Then we run the Self-Hosted Mender Server as a Docker container on OpenWrt."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wiki.seeedstudio.com/OpenWrt-Getting-Started"},"OpenWrt System by Seeed")," installed on ",(0,a.kt)("a",{parentName:"li",href:"https://www.seeedstudio.com/ODYSSEY-X86J4125800-p-4915.html"},"ODYSSEY - X86 board")),(0,a.kt)("li",{parentName:"ul"},"If you want this Self-Hosted Mender Server to be available publically, you need a public IP address with port 443 publicly accessible"),(0,a.kt)("li",{parentName:"ul"},"If using public IP as above, you need to bind the public IP to a DNS name for the Mender Server")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Please not that the below guide is based on the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/3.1/server-installation/installation-with-docker-compose"},"official Mender guide")," for installation with Docker. There are some minor changes from the official guide in this version and therefore, follow this guide step-by-step to successfully setup Self-Hosted Mender Server on ODYSSEY - X86 board."),(0,a.kt)("h3",{id:"basic-preparation"},"Basic Preparation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," After turning on the ODYSSEY - X86 board with OpenWrt System running, connect one Ethernet port to internet and the other Ethernet port to a PC.")),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/OpenWrt/odyssey-ports-2.png",alt:"pir",width:"1000",height:"auto"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Open the OpenWrt Luci Web UI by accessing ",(0,a.kt)("strong",{parentName:"li"},"192.168.2.1"))),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://www.seeedstudio.com/blog/wp-content/uploads/2021/10/openwrt-webui-1030x723.png",alt:"pir",width:"1000",height:"auto"})),(0,a.kt)("p",null,"By default Mender Server is set up on port ",(0,a.kt)("strong",{parentName:"p"},"443 for https")," and port ",(0,a.kt)("strong",{parentName:"p"},"80 for http"),". But OpenWrt uses port 443 to access the Luci web interface via https and port 80 to access the Luci web interface via http. So we need change the port for Luci Web UI first."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Services > Terminal")," and login with your credentials")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Type the following to access the ",(0,a.kt)("strong",{parentName:"p"},"uhttpd configuration file")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"vi /etc/config/uhttpd\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 5.")," Change ",(0,a.kt)("strong",{parentName:"li"},"80")," and ",(0,a.kt)("strong",{parentName:"li"},"443")," to different values. Here 80 is changed to 85 and 443 is changed to 446")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"config uhttpd 'main'\n        list listen_http '0.0.0.0:85'\n        list listen_http '[::]:85'\n        list listen_https '0.0.0.0:446'\n        list listen_https '[::]:446'\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:"),' Press "i" in Vi text editor to enter insert mode'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 6."),' Save and exit from the text editor by pressing "ESC" and typing ":wq"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 7.")," On the terminal, type the following to restart uhttpd service"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"service uhttpd restart\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 8.")," Access Luci web UI again using the newly defined port")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"example:\n192.168.2.1:85\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 9.")," Open terminal again and type the following to update the OpenWrt packages list")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"opkg update\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 10.")," Install Git")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"opkg install git-http\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 11.")," Clone the following repository")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b 3.1.0 https://github.com/mendersoftware/integration mender-server\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 12.")," Enter the following directory:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cd mender-server/production\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 13.")," Copy the production template to its own file")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"cp config/prod.yml.template config/prod.yml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 14.")," List the files in the directory")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"ls -l *\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"-rwxr-xr-x    1 root     root          1489 Nov  8 18:35 run\n\nconfig:\n-rw-r--r--    1 root     root           660 Nov  8 18:35 enterprise.yml.template\n-rw-r--r--    1 root     root          5298 Nov  8 18:36 prod.yml\n-rw-r--r--    1 root     root          5298 Nov  8 18:35 prod.yml.template\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 15.")," Here we delete ",(0,a.kt)("strong",{parentName:"li"},"enterprise.yml.template")," file because we are going to run the Open Source edition of Mender Server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"rm config/enterprise.yml.template\n")),(0,a.kt)("p",null,"However, if you are going to run the Enterprise edition of Mender Server, keep the ",(0,a.kt)("strong",{parentName:"p"},"enterprise.yml.template")," file and please ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/3.1/server-installation/installation-with-docker-compose#enterprise"},"follow here"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 16.")," While the current working directory is still ",(0,a.kt)("strong",{parentName:"li"},"production"),", download the necessary Docker images")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./run pull\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Pulling mender-mongo                  ... done\nPulling mender-deviceconfig           ... done\nPulling mender-useradm                ... done\nPulling mender-workflows-worker       ... done\nPulling mender-create-artifact-worker ... done\nPulling mender-workflows-server       ... done\nPulling mender-device-auth            ... done\nPulling mender-gui                    ... done\nPulling mender-inventory              ... done\nPulling mender-api-gateway            ... done\nPulling minio                         ... done\nPulling mender-deployments            ... done\nPulling mender-nats                   ... done\nPulling mender-deviceconnect          ... done\nPulling mender-mongo (mongo:4.4)...\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Please note that Docker Hub enforced limits on pulls originating from anonymous users to 100 per 6 hours (see: ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/pricing"},"Docker pricing"),"). This means that, for reasons completely independent from Mender, the above step may fail and you may have to retry after some time."),(0,a.kt)("h3",{id:"certificates-and-keys"},"Certificates and Keys"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Set the public domain name of your server")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'API_GATEWAY_DOMAIN_NAME="mender.example.com"  # replace with your server\'s public domain name\nSTORAGE_PROXY_DOMAIN_NAME="${API_GATEWAY_DOMAIN_NAME}"\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you want this Self-Hoster Mender Server to be only available locally, you can can choose a domain name you already have and attach a random subdomain of your preference. For example: ",(0,a.kt)("strong",{parentName:"p"},"mender.seeedstudio.com"),". Make sure not to directly use the IP address of the Mender server here because it will not work."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Prepare certificates using the helper script keygen")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'CERT_CN=$API_GATEWAY_DOMAIN_NAME \\\nCERT_SAN="DNS:${API_GATEWAY_DOMAIN_NAME},DNS:*.${STORAGE_PROXY_DOMAIN_NAME}" \\\n../keygen\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Generating an EC private key\nwriting new private key to 'private.key'\n-----\n................................................................................++++\n...........................................................................................++++\nwriting RSA key\n................................................................................................++++\n...........................++++\nwriting RSA key\nAll Mender Server keys and certificates have been generated in directory /root/mender-server/production/keys-generated.\nPlease include them in your docker compose and device builds.\nFor more information, please refer to https://docs.mender.io/\n\n")),(0,a.kt)("p",null,"Your local directory tree should now look like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 keys-generated\n\u2502   \u251c\u2500\u2500 cert\n\u2502   \u2502   \u251c\u2500\u2500 cert.crt\n\u2502   \u2502   \u2514\u2500\u2500 private.key\n\u2502   \u2514\u2500\u2500 keys\n\u2502       \u251c\u2500\u2500 deviceauth\n\u2502       \u2502   \u2514\u2500\u2500 private.key\n\u2502       \u2514\u2500\u2500 useradm\n\u2502           \u2514\u2500\u2500 private.key\n\u251c\u2500\u2500 config/enterprise.yml.template\n\u251c\u2500\u2500 config/prod.yml\n\u251c\u2500\u2500 config/prod.yml.template\n\u2514\u2500\u2500 run\n")),(0,a.kt)("p",null,"The API Gateway and Storage Proxy certificates generated here need to be made available to the Mender client. Consult the section on ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/3.1/system-updates-yocto-project/build-for-production"},"building for production")," for a description on how to include the certificates in the client builds."),(0,a.kt)("h3",{id:"persistant-storage"},"Persistant Storage"),(0,a.kt)("p",null,"Persistent storage of backend services' data is implemented using named Docker volumes. The template is configured to mount the following volumes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"mender-artifacts - artifact objects storage"),(0,a.kt)("li",{parentName:"ul"},"mender-db - mender services databases data")),(0,a.kt)("p",null,"Create the volumes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"docker volume create --name=mender-artifacts\ndocker volume create --name=mender-db\n")),(0,a.kt)("p",null,"The deployment configuration in ",(0,a.kt)("strong",{parentName:"p"},"config/prod.yml")," now needs to be updated. Let's go through the steps below."),(0,a.kt)("h3",{id:"minio"},"Minio"),(0,a.kt)("p",null,"The keys ",(0,a.kt)("strong",{parentName:"p"},"MINIO_ACCESS_KEY")," and ",(0,a.kt)("strong",{parentName:"p"},"MINIO_SECRET_KEY")," control credentials for uploading artifacts into the object store. Since Minio is a S3 API compatible service, these settings correspond to Amazon's AWS Access Key ID and Secret Access Key respectively"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," We need to generate a secret key with length 16. There are 2 ways to do this")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method 1:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If you have access to a Linux machine, install pwgen utlity first")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt install pwgen\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"After that generate a 16 length random secret key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"pwgen 16 1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Method 2:")),(0,a.kt)("p",null,"Type a random 16-length secret key by yourself. It needs to have ",(0,a.kt)("strong",{parentName:"p"},"numbers, upper and lower case characters")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Replace the above secret key with this command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"MINIO_SECRET_KEY_GENERATED=<secret key-generated>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Insert the access and secret keys into ",(0,a.kt)("strong",{parentName:"li"},"config/prod.yml")," with the following commands")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i.bak "s/MINIO_ACCESS_KEY:.*/MINIO_ACCESS_KEY: mender-deployments/g" config/prod.yml\nsed -i.bak "s/MINIO_SECRET_KEY:.*/MINIO_SECRET_KEY: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml\n')),(0,a.kt)("h3",{id:"deployments-service"},"Deployments Service"),(0,a.kt)("p",null,"The deployments service will upload artifact objects to minio storage via storage-proxy, see the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/3.1/server-installation/overview"},"administration overview")," for more details. For this reason, access credentials ",(0,a.kt)("strong",{parentName:"p"},"DEPLOYMENTS_AWS_AUTH_KEY")," and ",(0,a.kt)("strong",{parentName:"p"},"DEPLOYMENTS_AWS_AUTH_SECRET")," need to be updated and ",(0,a.kt)("strong",{parentName:"p"},"DEPLOYMENTS_AWS_URI")," must point to the domain name of your Storage proxy."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Run the following commands to set ",(0,a.kt)("strong",{parentName:"li"},"DEPLOYMENTS_AWS_AUTH_KEY")," and ",(0,a.kt)("strong",{parentName:"li"},"DEPLOYMENTS_AWS_AUTH_SECRET")," to the values of ",(0,a.kt)("strong",{parentName:"li"},"MINIO_ACCESS_KEY")," and ",(0,a.kt)("strong",{parentName:"li"},"MINIO_SECRET_KEY"),", respectively")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i.bak "s/DEPLOYMENTS_AWS_AUTH_KEY:.*/DEPLOYMENTS_AWS_AUTH_KEY: mender-deployments/g" config/prod.yml\nsed -i.bak "s/DEPLOYMENTS_AWS_AUTH_SECRET:.*/DEPLOYMENTS_AWS_AUTH_SECRET: $MINIO_SECRET_KEY_GENERATED/g" config/prod.yml\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2.")," Run the following command so ",(0,a.kt)("strong",{parentName:"li"},"DEPLOYMENTS_AWS_URI")," points to your Storage proxy")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i.bak "s/https:\\/\\/set-my-alias-here.com/https:\\/\\/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml\n')),(0,a.kt)("h3",{id:"storage-proxy"},"Storage Proxy"),(0,a.kt)("p",null,"In the default setup there is no separate process acting as a proxy to storage service. For this purpose you can use Mender API Gateway, but with an additional domain name. Change the placeholder value set-my-alias-here to a valid domain name to use Mender API Gateway as a proxy to the storage service, by running the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i.bak "s/set-my-alias-here.com/$STORAGE_PROXY_DOMAIN_NAME/g" config/prod.yml\n')),(0,a.kt)("h3",{id:"api-gateway"},"API Gateway"),(0,a.kt)("p",null,"For security purposes, the API Gateway must know precisely the DNS name allocated to it, which you'll configure via the ALLOWED_HOSTS environment variable."),(0,a.kt)("p",null,"Change the placeholder value my-gateway-dns-name to a valid hostname, by running the following command"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'sed -i.bak "s/my-gateway-dns-name/$API_GATEWAY_DOMAIN_NAME/g" config/prod.yml\n')),(0,a.kt)("h2",{id:"run-the-server"},"Run the Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Bring up all services in detached mode with the following command")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./run up -d\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'Creating network "menderproduction_mender" with the default driver\nCreating menderproduction_mender-nats_1                   ... done\nCreating menderproduction_mender-mongo_1 ... done\nCreating menderproduction_minio_1        ... done\nCreating menderproduction_mender-gui_1   ... done\nCreating menderproduction_mender-workflows-worker_1       ... done\nCreating menderproduction_mender-create-artifact-worker_1 ... done\nCreating menderproduction_mender-useradm_1                ... done\nCreating menderproduction_mender-workflows-server_1       ... done\nCreating menderproduction_mender-deviceconfig_1           ... done\nCreating menderproduction_mender-inventory_1              ... done\nCreating menderproduction_mender-deviceconnect_1          ... done\nCreating menderproduction_mender-device-auth_1            ... done\nCreating menderproduction_mender-api-gateway_1            ... done\nCreating menderproduction_mender-deployments_1            ... done\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 2."),' To verify that the services are running, execute the following command and verify that the state of all services is "Up"')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./run ps\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"                      Name                                    Command                  State                  Ports            \n-------------------------------------------------------------------------------------------------------------------------------\nmenderproduction_mender-api-gateway_1              /entrypoint.sh --accesslog ...   Up             0.0.0.0:443->443/tcp, 80/tcp\nmenderproduction_mender-auditlogs_1                /usr/bin/auditlogs --confi ...   Up             8080/tcp                    \nmenderproduction_mender-create-artifact-worker_1   /usr/bin/workflows --confi ...   Up             8080/tcp                    \nmenderproduction_mender-deployments_1              /entrypoint.sh --config /e ...   Up             8080/tcp                    \nmenderproduction_mender-device-auth_1              /usr/bin/deviceauth --conf ...   Up             8080/tcp                    \nmenderproduction_mender-deviceconfig_1             /usr/bin/deviceconfig --co ...   Up             8080/tcp                    \nmenderproduction_mender-deviceconnect_1            /usr/bin/deviceconnect --c ...   Up             8080/tcp                    \nmenderproduction_mender-gui_1                      /entrypoint.sh nginx             Up (healthy)   80/tcp, 8080/tcp            \nmenderproduction_mender-inventory_1                /usr/bin/inventory-enterpr ...   Up             8080/tcp                    \nmenderproduction_mender-mongo_1                    docker-entrypoint.sh mongod      Up             27017/tcp                   \nmenderproduction_mender-nats_1                     docker-entrypoint.sh nats- ...   Up             4222/tcp, 6222/tcp, 8222/tcp\nmenderproduction_mender-tenantadm_1                /usr/bin/tenantadm --confi ...   Up             8080/tcp                    \nmenderproduction_mender-useradm_1                  /usr/bin/useradm-enterpris ...   Up             8080/tcp                    \nmenderproduction_mender-workflows-server_1         /usr/bin/workflows-enterpr ...   Up             8080/tcp                    \nmenderproduction_mender-workflows-worker_1         /entrypoint.sh worker --au ...   Up                                         \nmenderproduction_minio_1                           /usr/bin/docker-entrypoint ...   Up (healthy)   9000/tcp\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 3.")," Since this is a brand new installation we need to create the initial user via the CLI provided by the User Administration Service. The service's binary is embedded in a Docker container, so to execute it you will issue the exec subcommand of docker-compose")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"./run exec mender-useradm /usr/bin/useradm create-user --username=myname@host.com --password=mypassword\n")),(0,a.kt)("h2",{id:"access-the-server"},"Access the Server"),(0,a.kt)("h3",{id:"public-server"},"Public Server"),(0,a.kt)("p",null,"Now you can access the public Mender server with the domain name specified in the previous steps. After that you can enter the above credentials for the first user and login to the server."),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mender/server/login.png",alt:"pir",width:"400",height:"auto"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://files.seeedstudio.com/wiki/Mender/server/after-login.jpg",alt:"pir",width:"1000",height:"auto"})),(0,a.kt)("h3",{id:"local-server"},"Local Server"),(0,a.kt)("p",null,"However, if you are running the Mender Server locally, there are some additional steps."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Step 1.")," Enter the OpenWrt Luci Web UI")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"example:\n192.168.2.1:85\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 2.")," Navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"Network > DHCP and DNS"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 3.")," Under ",(0,a.kt)("strong",{parentName:"p"},"Server Settings")," click ",(0,a.kt)("strong",{parentName:"p"},"General Settings"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 4.")," Inside the space next to ",(0,a.kt)("strong",{parentName:"p"},"Addresses"),", type the previously created subdomain with the domain name and then enter the IP address of X86 as follows"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"/mender.seeedstudio.com/192.168.2.1\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 5.")," Click ",(0,a.kt)("strong",{parentName:"p"},"SAVE & APPLY"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Step 6.")," Now you can access the local Mender server by typing the subdomain and domain name on the browser"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"example:\nhttps://mender.seeedstudio.com\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Rememeber to add ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://"},"https://"))," in the beginning"),(0,a.kt)("p",null,"Now you can push OTA updates to the clients which are connected to this self-hosted Mender Server!"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," If you encounter any issues while starting or running your Mender Server, you can take a look at the section for ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mender.io/3.1/troubleshoot/mender-server"},"troubleshooting Mender Server"),"."))}c.isMDXComponent=!0}}]);
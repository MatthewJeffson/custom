"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},_="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),_=p(n),m=l,u=_["".concat(s,".").concat(m)]||_[m]||d[m]||i;return n?a.createElement(u,r(r({ref:t},c),{},{components:n})):a.createElement(u,r({ref:t},c))}));function u(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[_]="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>_,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={description:"LVGL for reTerminal",title:"LVGL for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-build-UI-using-LVGL",last_update:{date:"1/31/2023",author:"jianjing Huang"}},r=void 0,o={unversionedId:"Edge/reTerminal/Application/reTerminal-build-UI-using-LVGL",id:"Edge/reTerminal/Application/reTerminal-build-UI-using-LVGL",title:"LVGL for reTerminal",description:"LVGL for reTerminal",source:"@site/docs/Edge/reTerminal/Application/reTerminal-build-UI-using-LVGL.md",sourceDirName:"Edge/reTerminal/Application",slug:"/reTerminal-build-UI-using-LVGL",permalink:"/custom/reTerminal-build-UI-using-LVGL",draft:!1,editUrl:"https://github.com/Seeed-Studio/wiki-documents/blob/docusaurus-version/docs/Edge/reTerminal/Application/reTerminal-build-UI-using-LVGL.md",tags:[],version:"current",lastUpdatedBy:"jianjing Huang",lastUpdatedAt:1675123200,formattedLastUpdatedAt:"Jan 31, 2023",frontMatter:{description:"LVGL for reTerminal",title:"LVGL for reTerminal",keywords:["Edge","reTerminal Application"],image:"https://files.seeedstudio.com/wiki/wiki-platform/S-tempor.png",slug:"/reTerminal-build-UI-using-LVGL",last_update:{date:"1/31/2023",author:"jianjing Huang"}},sidebar:"ProductSidebar",previous:{title:"Electron for reTerminal",permalink:"/custom/reTerminal-build-UI-using-Electron"},next:{title:"Grafana for reTerminal",permalink:"/custom/weather-dashboard-with-Grafana-reTerminal"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Features",id:"features",level:4},{value:"Prepare Development Environment",id:"prepare-development-environment",level:2},{value:"On reTerminal",id:"on-reterminal",level:3},{value:"On Host PC",id:"on-host-pc",level:3},{value:"Run demos",id:"run-demos",level:2},{value:"Build your own GUI application",id:"build-your-own-gui-application",level:2},{value:"Resources",id:"resources",level:2},{value:"Tech Support",id:"tech-support",level:2}],c={toc:p};function _(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl_banner.jpg",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"LVGL provides everything you need to create an embedded GUI with easy-to-use graphical elements, beautiful visual effects and a low memory footprint. LVGL is a graphics library targeting microcontrollers with limited resources. However it possible to use it to create embedded GUIs with high-end microprocessors and boards running Linux operation system. There are currently two ways of doing this:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"PC simulator with SDL 2 cross platform library"),(0,l.kt)("li",{parentName:"ul"},"simply using Linux\u2019s frame buffer device (typically /dev/fb0).")),(0,l.kt)("p",null,"In this Wiki article we'll use PC simulator example with SDL2 and modify it slightly to display UI full screen instead of in a window."),(0,l.kt)("h4",{id:"features"},"Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Powerful ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/widgets/index.html"},"building blocks"),": buttons, charts, lists, sliders, images, etc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Advanced graphics engine: animations, anti-aliasing, opacity, smooth scrolling, blending modes, etc")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Supports ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/overview/indev.html"},"various input devices"),": touchscreen, mouse, keyboard, encoder, buttons, etc.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Supports ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/overview/display.html"},"multiple displays"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Hardware independent, can be use with any microcontroller and display")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Scalable to operate with little memory (64 kB Flash, 16 kB RAM)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Multi-language support with UTF-8 handling, CJK, Bidirectional and Arabic script support")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fully customizable graphical elements via ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/overview/style.html"},"CSS-like styles"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Powerfule layouts inspired by CSS: ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/layouts/flex.html"},"Flexbox")," and ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/layouts/grid.html"},"Grid"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"OS, External memory and GPU are supported but not required. (built in support for STM32 DMA2D, and NXP PXP and VGLite)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Smooth rendering even with a ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/porting/display.html"},"single frame buffer"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Written in C and compatibile with C++")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Micropython Binding exposes ",(0,l.kt)("a",{parentName:"p",href:"https://blog.lvgl.io/2019-02-20/micropython-bindings"},"LVGL API in Micropython"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/get-started/pc-simulator.html"},"Simulator")," to develop on PC without embedded hardware")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"100+ simple ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lvgl/lvgl/tree/master/examples"},"Examples"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"http://docs.lvgl.io/"},"Documentation")," and API references online and in PDF"))),(0,l.kt)("h2",{id:"prepare-development-environment"},"Prepare Development Environment"),(0,l.kt)("h3",{id:"on-reterminal"},"On reTerminal"),(0,l.kt)("p",null,"On Rasperry Pi OS you can easily install SDL2 using a terminal:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update && sudo apt-get install build-essential libsdl2-dev cmake  -y\n")),(0,l.kt)("p",null,"Then clone the simulator project and the related sub modules:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --recursive https://github.com/littlevgl/pc_simulator.git\n")),(0,l.kt)("h3",{id:"on-host-pc"},"On Host PC"),(0,l.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/UrSkzbuuGaw",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,l.kt)("p",null,"EdgeLine is WYSIWYG editor for LVGL, that allows users create interface and then export C/Micropython code for using on target device. It is currently in beta stage in limited functionality and available for both Windows and Linux."),(0,l.kt)("p",null,"Windows version: ",(0,l.kt)("a",{parentName:"p",href:"https://lvgl.io/assets/edgeline/EdgeLine_Setup_v0_3_installer.exe"},"LINK"),"\nLinux version: ",(0,l.kt)("a",{parentName:"p",href:"https://lvgl.io/assets/edgeline/EdgeLine_v0_3_linux.zip"},"LINK")),(0,l.kt)("p",null,"Since EdgeLine is at beta stage, check for presense of newer versions at ",(0,l.kt)("a",{parentName:"p",href:"https://forum.lvgl.io/c/edgeline/15"},"LVGL forum EdgeLine subforum")),(0,l.kt)("p",null,"For the linux version be sure Edgeline.x86_64 and server/micropython are executable. (",(0,l.kt)("inlineCode",{parentName:"p"},"chmod +x filename"),")"),(0,l.kt)("p",null,"After that EdgeLine can be run by"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./Edgeline.x86_64\n")),(0,l.kt)("p",null,"The exported code doesn\u2019t load any of the screens by default therefore you need to call lv_scr_load(scr_name) manually on the desired screen."),(0,l.kt)("h2",{id:"run-demos"},"Run demos"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl.gif",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("p",null,"The following steps can be used with CMake on a Raspberry Pi OS."),(0,l.kt)("p",null,"Ensure CMake is installed, i.e. the cmake command works on the terminal."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd pc_simulator/\nmkdir build\ncd build.\ncmake ..\nmake -j4\n")),(0,l.kt)("p",null,"The binary will be in pc_simulator/build/bin/main, and can be run by typing that command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"DISPLAY=:0 ./bin/main\n")),(0,l.kt)("p",null,"That would display widget demo in a windowed mode - to change that to fullscreen, open\n",(0,l.kt)("inlineCode",{parentName:"p"},"pc_simulator/lv_drivers/sdl/sdl.c"),"\nand change #L344 to"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},'static void window_create(monitor_t * m)\n{\n    m->window = SDL_CreateWindow("TFT Simulator",\n                            SDL_WINDOWPOS_UNDEFINED, SDL_WINDOWPOS_UNDEFINED,\n                            1280 , 720 , SDL_WINDOW_FULLSCREEN);       /*last param. SDL_WINDOW_BORDERLESS to hide borders*/\n\n')),(0,l.kt)("p",null,"Additionally, change screen resolution in pc_simulator/lv_drv_conf.h #L90"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-conf"},"/*-------------------\n *  Monitor of PC\n *-------------------*/\n#ifndef USE_MONITOR\n#  define USE_MONITOR         1\n#endif\n\n#if USE_MONITOR\n#  define MONITOR_HOR_RES     1280\n#  define MONITOR_VER_RES     720\n")),(0,l.kt)("p",null,"Recompile and execute the binary to see demo application full screen!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"make -j4\nDISPLAY=:0 ./bin/main\n")),(0,l.kt)("p",null,"If the touch direction is not correct, you need to change ",(0,l.kt)("inlineCode",{parentName:"p"},"/boot/config.txt")," line 89 to ",(0,l.kt)("inlineCode",{parentName:"p"},"dtoverlay=reTerminal,tp_rotate=0")),(0,l.kt)("h2",{id:"build-your-own-gui-application"},"Build your own GUI application"),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl_reterminal.gif",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("p",null,"To see how can you build your own UI application for reTerminal with LVGL 8.0, you can have a look at the example code in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/AIWintermuteAI/Seeed_reTerminal_LVGL_UI_Demo"},"this GitHub repository"),"."),(0,l.kt)("p",null,"All the necessary components are imported and initialized in main.c, after that the main UI function is called. The UI description, callbacks and helper functions are located inside of ",(0,l.kt)("strong",{parentName:"p"},"lv_demo_reterminal_UI/lv_demo_reterminal_UI.c"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},'    tv = lv_tabview_create(lv_scr_act(), LV_DIR_TOP, tab_h);\n\n    lv_obj_set_style_text_font(lv_scr_act(), font_normal, 0);\n\n    lv_obj_t * tab_btns = lv_tabview_get_tab_btns(tv);\n    lv_obj_set_style_pad_left(tab_btns, 0, 0);\n\n    lv_obj_t * t1 = lv_tabview_add_tab(tv, "Assistant");\n    lv_obj_t * t2 = lv_tabview_add_tab(tv, "Debug");\n    lv_obj_t * t3 = lv_tabview_add_tab(tv, "Stats");\n')),(0,l.kt)("p",null,"We create a Tabview widget on the active screen and populate it with three tabs: Assistant, Debug, and Stats."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl-1.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("p",null,"The content of each tab is initialized separately in a corresponding function:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"    assistant_create(t1);\n    debug_create(t2);\n    stats_create(t3);\n\n    color_changer_create(tv);\n\n    evdev_lis3dh_init();\n")),(0,l.kt)("p",null,"Additionally color changer elements are created on the Tabview widget and built-in accelerometer is initialized. After that we create three timer callbacks with dummy input data:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"    static uint32_t user_data = 10;\n    lv_timer_t * time_timer = lv_timer_create(time_timer_cb, 1,  &user_data);\n    lv_timer_t * system_timer = lv_timer_create(system_timer_cb, 500,  &user_data);\n    lv_timer_t * accelerometer_timer = lv_timer_create(accelerometer_timer_cb, 50,  &user_data);\n")),(0,l.kt)("p",null,"These are responsible for getting system time, system status (CPU, Mem, Disk Space, Ethernet current speed, etc) and accelerometer readings respectively. You can find these three callback functions at the bottom of the lv_demo_reterminal_UI.c."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},'void time_timer_cb(lv_timer_t * timer)\n{\n\n    time_t t = time(NULL);\n    struct tm *local = localtime(&t);\n\n    sprintf(timeString, "%02d:%02d:%02d", local->tm_hour, local->tm_min, local->tm_sec);\n    sprintf(dateString, "%s\\n%s %02d %04d", DAY[local->tm_wday], MONTH[local->tm_mon], local->tm_mday, local->tm_year + 1900);\n\n    lv_label_set_text(clock_label, timeString);\n    lv_label_set_text(date_label, dateString);\n\n}\n\nvoid system_timer_cb(lv_timer_t * timer)\n{\n\n    lv_meter_indicator_t *indic1 = timer->user_data;\n    cpu_pct = 100 - lv_timer_get_idle();\n\n    lv_mem_monitor_t mon;\n    lv_mem_monitor(&mon);\n\n    uint32_t used_size = mon.total_size - mon.free_size;;\n    uint32_t used_kb = used_size / 1024;\n    uint32_t used_kb_tenth = (used_size - (used_kb * 1024)) / 102;\n    mem_pct = mon.used_pct;\n\n    dsk_pct = get_available_space();\n    eth0_num = get_current_network_speed();\n    //light_num = get_light_sensor();\n\n}\n\nvoid accelerometer_timer_cb(lv_timer_t * timer)\n{\n\n    evdev_lis3dh_read(&data);\n\n    lv_chart_set_next_value(chart1, x_ser, data.x_val);\n    lv_chart_set_next_value(chart1, y_ser, data.y_val);\n    lv_chart_set_next_value(chart1, z_ser, data.z_val);\n\n}\n')),(0,l.kt)("p",null,"For your particular application it might be more suitable to use other widgets, than Tabview. You can consult full ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/widgets/index.html"},"description of LVGL 8.0 widgets")," for usage and examples."),(0,l.kt)("p",null,"If you decide to follow our demo application closely when creating your first UI application with LVGL for reTerminal, below you can find more detailed information about what happens inside of one of these functions (",(0,l.kt)("strong",{parentName:"p"},"assistant_create()"),"). Your workflow for creating new applications will be similar:"),(0,l.kt)("p",null,"1) Initialize widgets on the screen(s)\n2) Create timer-based or event-based callback to obtain the data from sensors/system\n2) Change the content of widgets based on data - normally that is done using global variables declared at the top of the code"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"assistant_create"),"\nWe create a panel object for the tab and set its height."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"    lv_obj_t * panel1 = lv_obj_create(parent);\n    lv_obj_set_height(panel1, lv_pct(100));\n")),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl-2.png",alt:"pir",width:"800",height:"auto"})),(0,l.kt)("p",null,"Then we create an image button object from C array located in assets folder, obtained with ",(0,l.kt)("a",{parentName:"p",href:"https://lvgl.io/tools/imageconverter"},"LVGL image conversion tool"),". We also initialize and assign button press style transformation to the image button object (button becomes green on press). Additionally an event callback ",(0,l.kt)("strong",{parentName:"p"},"speech_event_cb")," is assigned to button press - since it is just a mock example, that will only print out a text in the terminal. But in real application it can be used to start Intelligent Assistant."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl-3.png",alt:"pir",height:"400",height:"auto"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"    LV_IMG_DECLARE(speech_btn_img);\n\n    /*Create a transition animation on width transformation and recolor.*/\n    static lv_style_prop_t tr_prop[] = {LV_STYLE_IMG_RECOLOR_OPA, 0};\n    static lv_style_transition_dsc_t tr;\n    lv_style_transition_dsc_init(&tr, tr_prop, lv_anim_path_linear, 500, 0, NULL);\n\n    static lv_style_t style_def;\n    lv_style_init(&style_def);\n    lv_style_set_text_color(&style_def, lv_color_white());\n    lv_style_set_transition(&style_def, &tr);\n\n    /*Darken the button when pressed and make it wider*/\n    static lv_style_t style_pr;\n    lv_style_init(&style_pr);\n    lv_style_set_img_recolor_opa(&style_pr, LV_OPA_70);\n    lv_style_set_img_recolor(&style_pr, lv_palette_main(LV_PALETTE_GREEN));\n\n    /*Create an image button*/\n    lv_obj_t * speech_btn = lv_imgbtn_create(panel1);\n    lv_imgbtn_set_src(speech_btn, LV_IMGBTN_STATE_RELEASED, NULL, &speech_btn_img, NULL);\n    //lv_img_set_zoom(speech_btn, 128);\n    lv_obj_set_size(speech_btn, 300, 300);\n    lv_obj_add_event_cb(speech_btn, speech_event_cb, LV_EVENT_ALL, NULL);\n    lv_obj_add_style(speech_btn, &style_def, 0);\n    lv_obj_add_style(speech_btn, &style_pr, LV_STATE_PRESSED);\n")),(0,l.kt)("p",null,"In the next code block we create text labels for time, date, user greeting. These are initialized with default text, which will be changed in time_timer callback every second."),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/ReTerminal/lvgl-4.png",alt:"pir",width:"600",height:"auto"})),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},'    lv_obj_t * name = lv_label_create(panel1);\n    lv_label_set_text(name, "Hi there, Username");\n    lv_obj_add_style(name, &style_large, 0);\n\n    clock_label = lv_label_create(panel1);\n    lv_obj_add_style(clock_label, &style_clock, 0);\n    lv_label_set_text(clock_label, timeString);\n    lv_label_set_long_mode(clock_label, LV_LABEL_LONG_WRAP);\n\n    lv_obj_t * time_icn = lv_label_create(panel1);\n    lv_obj_add_style(time_icn, &style_large, 0);\n    lv_label_set_text(time_icn, LV_SYMBOL_BELL);\n\n    date_label = lv_label_create(panel1);\n    lv_label_set_text(date_label, dateString);\n    lv_obj_add_style(date_label, &style_large, 0);\n')),(0,l.kt)("p",null,"Finally, we structure the widgets we placed in this tab using Grid layout. The Grid layout is a subset of CSS Flexbox."),(0,l.kt)("p",null,'It can arrange items into a 2D "table" that has rows or columns (tracks). The item can span through multiple columns or rows. The track\'s size can be set in pixel, to the largest item (',(0,l.kt)("inlineCode",{parentName:"p"},"LV_GRID_CONTENT"),') or in "Free unit" (FR) to distribute the free space proportionally.'),(0,l.kt)("p",null,"To make an object a grid container call ",(0,l.kt)("inlineCode",{parentName:"p"},"lv_obj_set_layout(obj, LV_LAYOUT_GRID)"),"."),(0,l.kt)("p",null,"Note that the grid layout feature of LVGL needs to be globally enabled with ",(0,l.kt)("inlineCode",{parentName:"p"},"LV_USE_GRID")," in ",(0,l.kt)("inlineCode",{parentName:"p"},"lv_conf.h"),"."),(0,l.kt)("p",null,"You can read about Layouts in LVGL in more detail by following ",(0,l.kt)("a",{parentName:"p",href:"https://docs.lvgl.io/master/layouts/grid.html"},"this link"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-C"},"    static lv_coord_t grid_main_col_dsc[] = {LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};\n    static lv_coord_t grid_main_row_dsc[] = {LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};\n\n    /*Create the top panel*/\n    static lv_coord_t grid_1_col_dsc[] = {400, 50, LV_GRID_CONTENT, LV_GRID_FR(2), LV_GRID_FR(1), LV_GRID_FR(1), LV_GRID_TEMPLATE_LAST};\n    static lv_coord_t grid_1_row_dsc[] = {200, 100, 100, LV_GRID_CONTENT, 10, LV_GRID_CONTENT, LV_GRID_CONTENT, LV_GRID_TEMPLATE_LAST};\n\n    lv_obj_set_grid_dsc_array(parent, grid_main_col_dsc, grid_main_row_dsc);\n\n    lv_obj_set_grid_cell(panel1, LV_GRID_ALIGN_STRETCH, 0, 2, LV_GRID_ALIGN_CENTER, 0, 1);\n\n    lv_obj_set_grid_dsc_array(panel1, grid_1_col_dsc, grid_1_row_dsc);\n    lv_obj_set_grid_cell(speech_btn, LV_GRID_ALIGN_CENTER, 0, 1, LV_GRID_ALIGN_CENTER, 0, 5);\n    lv_obj_set_grid_cell(name, LV_GRID_ALIGN_START, 2, 2, LV_GRID_ALIGN_CENTER, 0, 1);\n    lv_obj_set_grid_cell(clock_label, LV_GRID_ALIGN_STRETCH, 2, 4, LV_GRID_ALIGN_START, 1, 1);\n    lv_obj_set_grid_cell(time_icn, LV_GRID_ALIGN_CENTER, 2, 1, LV_GRID_ALIGN_CENTER, 3, 1);\n    lv_obj_set_grid_cell(date_label, LV_GRID_ALIGN_START, 3, 1, LV_GRID_ALIGN_CENTER, 3, 1);\n")),(0,l.kt)("p",null,"The rest of the tabs have different widgets, but overall workflow is the same. If you need to find more about parameters or usage of a specific widget, consult LVGL documentation."),(0,l.kt)("p",null,"To compile the application, from your project folder (containing main.c source file)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir build\ncd build.\ncmake ..\nmake -j4\n")),(0,l.kt)("p",null,"The binary will be in ../bin/main, and can be run by typing that command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"DISPLAY=:0 ./../bin/main\n")),(0,l.kt)("p",null,"If you add other folders to the project, make sure you change CMakeLists.txt accordingly and re-run cmake .. from build directory, otherwise you'll run into linking errors."),(0,l.kt)("h2",{id:"resources"},"Resources"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,l.kt)("a",{parentName:"li",href:"https://lvgl.io/"},"LVGL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[Webpage]")," ",(0,l.kt)("a",{parentName:"li",href:"https://docs.lvgl.io/master/index.html"},"Official LVGL Documentation")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"[GitHub]")," ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/lvgl/lv_sim_eclipse_sdl"},"PC Simulator Source Code"))),(0,l.kt)("h2",{id:"tech-support"},"Tech Support"),(0,l.kt)("p",null,"Please submit any technical issue into our ",(0,l.kt)("a",{parentName:"p",href:"https://forum.seeedstudio.com/"},"forum"),". ",(0,l.kt)("br",null)),(0,l.kt)("p",{style:{textAlign:"center"}},(0,l.kt)("a",{href:"https://www.seeedstudio.com/act-4.html?utm_source=wiki&utm_medium=wikibanner&utm_campaign=newproducts",target:"_blank"},(0,l.kt)("img",{src:"https://files.seeedstudio.com/wiki/Wiki_Banner/new_product.jpg"}))))}_.isMDXComponent=!0}}]);
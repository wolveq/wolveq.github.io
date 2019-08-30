(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{352:function(a,s,t){"use strict";t.r(s);var r=t(16),e=Object(r.a)({},function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"cordova初探"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova初探","aria-hidden":"true"}},[a._v("#")]),a._v(" Cordova初探")]),a._v(" "),t("p",[a._v("Apache Cordova是一个开源的移动开发框架。允许你用标准的web技术-HTML5,CSS3和JavaScript做跨平台开发。应用在每个平台的具体执行被封装了起来，并依靠符合标准的API绑定去访问每个设备的功能，比如说：传感器、数据、网络状态等。\n")]),a._v(" "),t("h2",{attrs:{id:"cordova适用人群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova适用人群","aria-hidden":"true"}},[a._v("#")]),a._v(" Cordova适用人群")]),a._v(" "),t("ul",[t("li",[a._v("移动应用开发者，想扩展一个应用的使用平台，而不通过每个平台的语言和工具集重新实现。")]),a._v(" "),t("li",[a._v("web开发者，想包装部署自己的web App将其分发到各个应用商店门户。")]),a._v(" "),t("li",[a._v("移动应用开发者，有兴趣混合原生应用组建和一个WebView(一个特别的浏览器窗口) 可以接触设备A级PI，或者你想开发一个原生和WebView组件之间的插件接口。")])]),a._v(" "),t("h2",{attrs:{id:"cordova架构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova架构","aria-hidden":"true"}},[a._v("#")]),a._v(" Cordova架构")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://ww2.sinaimg.cn/large/0060lm7Tly1fjvnvv40vcj30nf0ijgmp.jpg",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"cordova环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cordova环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" Cordova环境搭建")]),a._v(" "),t("ol",[t("li",[a._v("下载和安装Node.js。安装完成后你可以在命令行中使用node和npm。")]),a._v(" "),t("li",[a._v("安装JDK和Android SDK，并配置相关的环境变量。同时添加Android SDK的tools和platform-tools目录到环境变量中。")]),a._v(" "),t("li",[a._v("安装Android Studio，并将其中的Gradle配置到环境变量中。")]),a._v(" "),t("li",[a._v("安装cordova模块使用Nodejs的npm工具。cordova模块会被npm工具自动下载。"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("npm install "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("g cordova\n")])])]),a._v("-g标志是告诉 npm 我们全局安装 cordova。否则我们将会安装在当前工作目录的 node_modules子目录。安装完成后，你应该能够在命令行中运行cordova命令，在没有任何参数的时候会打印一些帮助信息。")]),a._v(" "),t("li",[a._v("创建APP，通过输入以下命令创建App。"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("cordova create "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("MyApp")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("example"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("shuaijie "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v("\n")])])]),a._v("其中后面三个参数分别为：创建项目的目录，项目的包名，项目名称。")]),a._v(" "),t("li",[a._v("添加平台，所有后续命令都需要在项目目录或者项目目录的任何子目录运行。"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("cordova platform add android "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("save "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加android平台")]),a._v("\ncordova platform add ios "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("save "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//添加ios平台")]),a._v("\ncordova platform ls "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//检查当前平台设置状况:")]),a._v("\n")])])])]),a._v(" "),t("li",[a._v("检测是否满足构建平台的要求:"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("cordova requirements\n")])])]),a._v("要构建和运行App，你需要安装每个你需要平台的SDK，此命令查看所需平台的SDK是否安装。")]),a._v(" "),t("li",[a._v("构建APP"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("cordova build "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//此命令是为所有平台构建")]),a._v("\ncordova build android "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//此命令只构建android平台")]),a._v("\n")])])])]),a._v(" "),t("li",[a._v("测试APP\n移动平台的SDK通常会绑定模拟器，它是一个可执行的设备镜像，这样你就可以在主屏幕启动你的App，看看它在多个平台是如何交互的。 在命令行运行下面的命令，会重新构建App并可以在特定平台的模拟器上查看。"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("cordova emulate android\n")])])]),a._v("或者，你可以将你的手机插入电脑，在手机上直接测试App。"),t("div",{staticClass:"language-java extra-class"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v("cordova run android\n")])])])])])])},[],!1,null,null,null);s.default=e.exports}}]);
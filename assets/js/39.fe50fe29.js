(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{337:function(a,t,r){"use strict";r.r(t);var s=r(16),e=Object(s.a)({},function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"如何上传开源库到jcenter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何上传开源库到jcenter","aria-hidden":"true"}},[a._v("#")]),a._v(" 如何上传开源库到jcenter")]),a._v(" "),r("p",[a._v("上段时间写了一篇将开源库上传到github上然后关联到jitpack供开发者使用，但是jitpack相对于jcenter来说，使用的人比较少，所以现在写一篇关于如何快速上传到jcenter的文章。\n")]),a._v(" "),r("h3",{attrs:{id:"_1-账号申请"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-账号申请","aria-hidden":"true"}},[a._v("#")]),a._v(" 1.账号申请")]),a._v(" "),r("p",[a._v("你需要到Bintray网站中申请注册一个个人的账号，这里有一个坑，很多人看博客上写的之后去注册结果都注册了一个组织的账号，然而我们需要注册的是个人的账号，因此在这里附上个人账号申请地址：https://bintray.com/signup/oss。你可以在这个网址中注册，里面有三个三方注册的方式，你可以用github、google、twitter，但是github注册时你的邮箱必须是国外的才行。")]),a._v(" "),r("p",[r("img",{attrs:{src:"http://ww4.sinaimg.cn/large/006HJ39wgy1ffcw8kgo58j30l90fg750.jpg",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_2-获取api-key"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取api-key","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.获取API Key")]),a._v(" "),r("p",[a._v("当你注册完成之后，登录成功了，你到你个人中心中拿到你的API Key。流程是：找到右上角的用户名，鼠标放上去会出现下拉框，点击Edit Profile，跳转到另一个界面中，找到API Key点击后就可以看到了。")]),a._v(" "),r("p",[r("img",{attrs:{src:"http://ww2.sinaimg.cn/large/006HJ39wgy1ffcw8k0obkj307h08o74i.jpg",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"http://ww1.sinaimg.cn/large/006HJ39wgy1ffcw8k16aij30pb08oq38.jpg",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_3-添加版本库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-添加版本库","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.添加版本库")]),a._v(" "),r("p",[a._v("进入到主界面中点击Add new Repository添加一个版本库，其中name写为maven，type为Maven，default licenses为Apache-2.0，点击create创建，创建成功。\n"),r("img",{attrs:{src:"http://ww3.sinaimg.cn/large/006HJ39wgy1ffcwfy7bwaj30g605qq30.jpg",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"http://ww3.sinaimg.cn/large/006HJ39wgy1ffcwfyfqrxj30gp0h0gmf.jpg",alt:""}})]),a._v(" "),r("p",[r("img",{attrs:{src:"http://ww4.sinaimg.cn/large/006HJ39wgy1ffcwfyfpixj30x306s3yv.jpg",alt:""}})]),a._v(" "),r("h3",{attrs:{id:"_4-创建自己的library"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建自己的library","aria-hidden":"true"}},[a._v("#")]),a._v(" 4.创建自己的library")]),a._v(" "),r("p",[a._v("打开android studio，在项目中创建一个android library，然后在项目的根build.gradle中的dependencies中添加classpath 'com.novoda:bintray-release:0.3.4'，然后在你创建的library的build.gradle中添加")]),a._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[a._v("apply plugin"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.novoda.bintray-release'")]),a._v("\npublish "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    userOrg "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'用户名'")]),a._v("\n    groupId "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'com.用户名'")]),a._v("\n    artifactId "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'上传的库名'")]),a._v("\n    publishVersion "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'版本号'")]),a._v("\n    desc "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'描述信息'")]),a._v("\n    website "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),r("span",{pre:!0,attrs:{class:"token string"}},[a._v("'项目地址'")]),a._v("\n"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),r("p",[a._v("上述操作是用到了一个插件，github地址如下：https://github.com/novoda/bintray-release，可以看看，相比其他教程来说简单些。")]),a._v(" "),r("h3",{attrs:{id:"_5-打包上传"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_5-打包上传","aria-hidden":"true"}},[a._v("#")]),a._v(" 5.打包上传")]),a._v(" "),r("p",[a._v("在android studio中打开Terminal，输入命令：gradlew clean build bintrayUpload -PbintrayUser=BINTRAY_USERNAME -PbintrayKey=BINTRAY_KEY -PdryRun=false然后回车，就可以打包上传了，其中BINTRAY_USERNAME代表用户名，BINTRAY_KEY就是之前所找的API Key。当你上传时可能会上传失败，你需要在你创建的library的build.gradle中加上以下内容：")]),a._v(" "),r("div",{staticClass:"language-java extra-class"},[r("pre",{pre:!0,attrs:{class:"language-java"}},[r("code",[a._v("lintOptions"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        abortOnError "),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n        checkReleaseBuilds "),r("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),r("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),r("p",[a._v("然后就可以上传成功，然后打开上传后的项目点击add to jcenter，等待审核后就可以使用了。")])])},[],!1,null,null,null);t.default=e.exports}}]);
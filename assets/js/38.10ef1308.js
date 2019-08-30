(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{336:function(t,a,s){"use strict";s.r(a);var n=s(16),r=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"如何自定义toast控件。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何自定义toast控件。","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何自定义Toast控件。")]),t._v(" "),s("h4",{attrs:{id:"在android中，开发者经常使用toast控件来弹出信息提示用户，但是toast默认弹出的界面默认是黑色的，而且不同的版本，界面不同。为此我们需要为toast自定义一个界面，让界面效果更美观好看。效果如下图所示。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在android中，开发者经常使用toast控件来弹出信息提示用户，但是toast默认弹出的界面默认是黑色的，而且不同的版本，界面不同。为此我们需要为toast自定义一个界面，让界面效果更美观好看。效果如下图所示。","aria-hidden":"true"}},[t._v("#")]),t._v(" 在Android中，开发者经常使用Toast控件来弹出信息提示用户，但是Toast默认弹出的界面默认是黑色的，而且不同的版本，界面不同。为此我们需要为Toast自定义一个界面，让界面效果更美观好看。效果如下图所示。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://ww3.sinaimg.cn/large/006HJ39wgy1fh89y9i538j307m02ga9v.jpg",alt:""}})]),t._v(" "),s("h4",{attrs:{id:"话不多说直接上代码。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#话不多说直接上代码。","aria-hidden":"true"}},[t._v("#")]),t._v(" 话不多说直接上代码。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[t._v("\t\t"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("View")]),t._v(" layoutView "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("LayoutInflater")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("from")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("inflate")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layout_toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),t._v(" tvContent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" layoutView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("findViewById")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("R")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tv_content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        tvContent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),t._v(" toast "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getApplication")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setView")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layoutView"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setDuration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Toast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LENGTH_SHORT"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setGravity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Gravity")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("BOTTOM"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("130")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        toast"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"从如上代码中可以看出，首先你需要获取你自已定义的layout显示布局，然后设置其内容，再new一个toast，通过toast的setview方法将布局设置进去，再设置显示的时间和位置即可以。至于半圆形背景，通过使用shape自定义drawable来实现的。代码如下。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从如上代码中可以看出，首先你需要获取你自已定义的layout显示布局，然后设置其内容，再new一个toast，通过toast的setview方法将布局设置进去，再设置显示的时间和位置即可以。至于半圆形背景，通过使用shape自定义drawable来实现的。代码如下。","aria-hidden":"true"}},[t._v("#")]),t._v(" 从如上代码中可以看出，首先你需要获取你自已定义的layout显示布局，然后设置其内容，再new一个Toast，通过Toast的setView方法将布局设置进去，再设置显示的时间和位置即可以。至于半圆形背景，通过使用Shape自定义Drawable来实现的。代码如下。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("xml version"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1.0"')]),t._v(" encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"utf-8"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("shape xmlns"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://schemas.android.com/apk/res/android"')]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rectangle"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("corners android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("radius"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"60dip"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("stroke\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("width"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"0dp"')]),t._v("\n        android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/colorAccent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("solid android"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("color"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@color/colorAccent"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("shape"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])])},[],!1,null,null,null);a.default=r.exports}}]);
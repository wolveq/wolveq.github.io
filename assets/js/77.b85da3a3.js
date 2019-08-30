(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{283:function(a,t,s){"use strict";s.r(t);var e=s(16),r=Object(e.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"javascript设计模式详解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript设计模式详解","aria-hidden":"true"}},[a._v("#")]),a._v(" Javascript设计模式详解")]),a._v(" "),s("p",[a._v("设计模式是程序员必须掌握的基础知识，无论是前端开发、移动端还是后台，都需要掌握。它是成为一名合格工程师的必要条件。如果你只懂得敲代码，不懂得设计程序，那永远成为不了一名高级工程师。如果你是一名高级工程师，那么你肯定具有一定的设计能力，对于整个项目架构布局有更好的设计。")]),a._v(" "),s("h2",{attrs:{id:"开发环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发环境搭建","aria-hidden":"true"}},[a._v("#")]),a._v(" 开发环境搭建")]),a._v(" "),s("p",[a._v("作为一名前端开发人员，在这里默认安装好node环境。")]),a._v(" "),s("h3",{attrs:{id:"初始化npm环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化npm环境","aria-hidden":"true"}},[a._v("#")]),a._v(" 初始化npm环境")]),a._v(" "),s("p",[a._v("通过npm init命令初始化工程环境，在根目录下创建src文件夹，在文件夹中创建index.js文件。")]),a._v(" "),s("h3",{attrs:{id:"安装webpack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装webpack")]),a._v(" "),s("p",[a._v("在命令行中输入 npm install webpack webpack-cli --save-dev 即可安装。然后在根目录下创建webpack.dev.config.js文件。然后写入以下内容：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    entry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'./src/index.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//入口文件")]),a._v("\n    output"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//输出文件")]),a._v("\n        path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" __dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        filename"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"./release/bundle.js"')]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("在package.json中scripts中添加以下命令：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"dev"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"webpack --config ./webpack.dev.config.js --mode development"')]),a._v("\n")])])]),s("p",[a._v("然后运行npm run dev即可打包。")]),a._v(" "),s("h3",{attrs:{id:"安装webpack-dev-server"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装webpack-dev-server","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装webpack-dev-server")]),a._v(" "),s("p",[a._v("在命令行中输入 npm install webpack-dev-server html-webpack-plugin --save-dev来安装。")]),a._v(" "),s("h3",{attrs:{id:"安装babel"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装babel","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装babel")]),a._v(" "),s("p",[a._v("在命令行中输入npm install babel-core babel-loader babel-polyfill babel-preset-es2015 babel-preset-latest --save-dev安装。然后在根目录创建.babelrc文件。")]),a._v(" "),s("h2",{attrs:{id:"设计原则和设计模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原则和设计模式","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计原则和设计模式")]),a._v(" "),s("h3",{attrs:{id:"设计原则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设计原则","aria-hidden":"true"}},[a._v("#")]),a._v(" 设计原则")])])},[],!1,null,null,null);t.default=r.exports}}]);
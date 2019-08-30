(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{346:function(e,a,n){"use strict";n.r(a);var s=n(16),r=Object(s.a)({},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"mac中编译ffmpeg教程-android版"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#mac中编译ffmpeg教程-android版","aria-hidden":"true"}},[e._v("#")]),e._v(" Mac中编译FFmpeg教程(Android版)")]),e._v(" "),n("p",[e._v("本篇文章主要介绍在Mac环境中，编译FFmpeg生成so库。")]),e._v(" "),n("h2",{attrs:{id:"ffmpeg简介"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#ffmpeg简介","aria-hidden":"true"}},[e._v("#")]),e._v(" FFmpeg简介")]),e._v(" "),n("p",[e._v("FFmpeg既是一款音视频编解码工具，同时也是一组音视频编解码开发套件，作为编解码开发套件，它为开发者提供了丰富的音视频处理的调用接口。\nFFmpeg提供了多种媒体格式的封装和解封装，包括多种音视频编码、多种协议的流媒体、多种色彩格式转换、多种采样率转换、多种码率转换等。FFmpeg框架提供了多种丰富的插件模块，包含封装与解封装的插件、编码与解码的插件等。")]),e._v(" "),n("h2",{attrs:{id:"开发环境"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#开发环境","aria-hidden":"true"}},[e._v("#")]),e._v(" 开发环境")]),e._v(" "),n("p",[e._v("本次编译的环境如下：")]),e._v(" "),n("ul",[n("li",[e._v("macOS High Sierra(10.13.5)")]),e._v(" "),n("li",[e._v("FFmpeg源码(3.3.7)")]),e._v(" "),n("li",[e._v("ndk(android-ndk-r14b)")])]),e._v(" "),n("p",[e._v("首先下载ndk，建议不要使用Android Studio自带的ndk-bundle，然后配置ndk的全局环境，在.bash_profile中添加一下配置：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("export ANDROID_NDK_ROOT=/Users/jiangshuaijie/android-ndk-r14b/build\nexport PATH=${PATH}:${ANDROID_NDK_ROOT}\n")])])]),n("p",[e._v("然后在命令行中输入ndk-build测试环境是否配置成功。")]),e._v(" "),n("h2",{attrs:{id:"下载ffmpeg源码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#下载ffmpeg源码","aria-hidden":"true"}},[e._v("#")]),e._v(" 下载FFmpeg源码")]),e._v(" "),n("p",[e._v("FFmpeg的源码可以在 https://ffmpeg.org/download.html#releases 中下载，也可以使用git clone https://git.ffmpeg.org/ffmpeg.git ffmpeg 克隆到本地。建议下载3.3.x版本的库，最新的库编译的问题比较多，各种路径不正常等问题。")]),e._v(" "),n("h2",{attrs:{id:"修改configure文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#修改configure文件","aria-hidden":"true"}},[e._v("#")]),e._v(" 修改configure文件")]),e._v(" "),n("p",[e._v("下载FFmpeg源代码之后，首先需要对源代码中的configure文件进行修改。由于编译出来的动态库文件名的版本号在.so之后（例如“libavcodec.so.5.100.1”），而android平台不能识别这样文件名，所以需要修改这种文件名。在configure文件中找到下面几行代码：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("SLIBNAME_WITH_MAJOR='$(SLIBNAME).$(LIBMAJOR)'\nLIB_INSTALL_EXTRA_CMD='$$(RANLIB)\"$(LIBDIR)/$(LIBNAME)\"'\nSLIB_INSTALL_NAME='$(SLIBNAME_WITH_VERSION)'\nSLIB_INSTALL_LINKS='$(SLIBNAME_WITH_MAJOR)$(SLIBNAME)'\n")])])]),n("p",[e._v("替换成")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("SLIBNAME_WITH_MAJOR='$(SLIBPREF)$(FULLNAME)-$(LIBMAJOR)$(SLIBSUF)'\nLIB_INSTALL_EXTRA_CMD='$$(RANLIB)\"$(LIBDIR)/$(LIBNAME)\"'\nSLIB_INSTALL_NAME='$(SLIBNAME_WITH_MAJOR)'\nSLIB_INSTALL_LINKS='$(SLIBNAME)'\n")])])]),n("h2",{attrs:{id:"编写脚本生成类库"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编写脚本生成类库","aria-hidden":"true"}},[e._v("#")]),e._v(" 编写脚本生成类库")]),e._v(" "),n("p",[e._v("在ffmpeg中创建一个build_android.sh的脚本，并赋予可执行的权限，脚本内容如下：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("#!/bin/bash\n\nmake clean\n# NDK的路径，根据自己的安装位置进行设置\nexport TMPDIR=/Users/jiangshuaijie/ffmpeg-3.3.7/ffmpeg_install\nexport NDK=/Users/jiangshuaijie/android-ndk-r14b\nexport SYSROOT=$NDK/platforms/android-21/arch-arm/\nexport TOOLCHAIN=$NDK/toolchains/arm-linux-androideabi-4.9/prebuilt/darwin-x86_64\nexport CPU=arm\nexport PREFIX=$(pwd)/android/$CPU\nexport ADDI_CFLAGS=\"-marm\"\nfunction build_one\n{\n./configure \\\n    --prefix=$PREFIX \\\n    --target-os=linux \\\n    --cross-prefix=$TOOLCHAIN/bin/arm-linux-androideabi- \\\n    --arch=arm \\\n    --sysroot=$SYSROOT \\\n    --extra-cflags=\"-Os -fpic $ADDI_CFLAGS\" \\\n    --extra-ldflags=\"$ADDI_LDFLAGS\" \\\n    --cc=$TOOLCHAIN/bin/arm-linux-androideabi-gcc \\\n    --nm=$TOOLCHAIN/bin/arm-linux-androideabi-nm \\\n    --enable-shared \\\n    --enable-runtime-cpudetect \\\n    --enable-gpl \\\n    --enable-small \\\n    --enable-cross-compile \\\n    --disable-debug \\\n    --disable-static \\\n    --disable-doc \\\n    --disable-asm \\\n    --disable-ffmpeg \\\n    --disable-ffplay \\\n    --disable-ffprobe \\\n    --disable-ffserver \\\n    --enable-postproc \\\n    --enable-avdevice \\\n    --disable-symver \\\n    --disable-stripping \\\n$ADDITIONAL_CONFIGURE_FLAG\nsed -i '' 's/HAVE_LRINT 0/HAVE_LRINT 1/g' config.h\nsed -i '' 's/HAVE_LRINTF 0/HAVE_LRINTF 1/g' config.h\nsed -i '' 's/HAVE_ROUND 0/HAVE_ROUND 1/g' config.h\nsed -i '' 's/HAVE_ROUNDF 0/HAVE_ROUNDF 1/g' config.h\nsed -i '' 's/HAVE_TRUNC 0/HAVE_TRUNC 1/g' config.h\nsed -i '' 's/HAVE_TRUNCF 0/HAVE_TRUNCF 1/g' config.h\nsed -i '' 's/HAVE_CBRT 0/HAVE_CBRT 1/g' config.h\nsed -i '' 's/HAVE_RINT 0/HAVE_RINT 1/g' config.h\nmake clean\n# 这里是定义用几个CPU编译，我用4个，一般在5分钟之内编译完成\nmake -j4\nmake install\n}\nbuild_one\n\n")])])]),n("p",[e._v("其中：")]),e._v(" "),n("ul",[n("li",[e._v("TMPDIR为编译生成的临时文件存放的目录")]),e._v(" "),n("li",[e._v("SYSROOT为so文件支持的最低Android版本的平台目录")]),e._v(" "),n("li",[e._v("CPU为指定so文件支持的平台")]),e._v(" "),n("li",[e._v("PREFIX为生成的so文件存放目录")]),e._v(" "),n("li",[e._v("TOOLCHAIN为编译所使用的工具链目录")]),e._v(" "),n("li",[e._v("cross-prefix为编译所使用的工具链文件")]),e._v(" "),n("li",[e._v("enable和disable指定了需要编译的项")]),e._v(" "),n("li",[e._v("target-os为目标操作系统；")])]),e._v(" "),n("h2",{attrs:{id:"编译ffmpeg"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译ffmpeg","aria-hidden":"true"}},[e._v("#")]),e._v(" 编译FFmpeg")]),e._v(" "),n("p",[e._v("在ffmpeg目录中，执行终端命令：")]),e._v(" "),n("div",{staticClass:"language-shell extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("./build_android.sh\n")])])]),n("p",[e._v("即可编译，然后等待生成so文件即可。")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://ws1.sinaimg.cn/large/006tKfTcly1ft8dad6vqwj31dm0gu0zg.jpg",alt:""}})]),e._v(" "),n("h2",{attrs:{id:"相关资料"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#相关资料","aria-hidden":"true"}},[e._v("#")]),e._v(" 相关资料")]),e._v(" "),n("p",[n("a",{attrs:{href:"https://blog.csdn.net/leixiaohua1020/article/details/47008825",target:"_blank",rel:"noopener noreferrer"}},[e._v("雷霄骅的博客"),n("OutboundLink")],1)])])},[],!1,null,null,null);a.default=r.exports}}]);
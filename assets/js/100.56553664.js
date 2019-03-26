(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{225:function(t,e,r){"use strict";r.r(e);var n=r(0),i=Object(n.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),r("p",[t._v("DocFX是.NET的API文档生成器，目前支持C＃和VB。它从源代码中的三重斜杠注释生成API参考文档。它还允许您使用Markdown文件创建其他主题，如教程和操作方法，以及自定义生成的参考文档。 DocFX从源代码和Markdown文件构建静态HTML网站，可以轻松地托管在任何Web服务器上（例如，github.io）。此外，DocFX还可以灵活地通过模板自定义网站的布局和样式。如果您有兴趣使用自己的样式创建自己的网站，可以按照如何创建自定义模板 创建自定义模板。")]),t._v(" "),r("p",[t._v("DocFX还具有以下很酷的功能：")]),t._v(" "),r("ul",[r("li",[t._v("与您的源代码集成。您可以单击API上的“查看源”以导航到GitHub中的源代码（您的源代码必须推送到GitHub）。")]),t._v(" "),r("li",[t._v("跨平台支持。我们有一个在Windows上本机运行的exe版本，在Mono上它也可以在Linux和macOS上运行。")]),t._v(" "),r("li",[t._v("与Visual Studio集成。您可以在Visual Studio中无缝使用DocFX。")]),t._v(" "),r("li",[t._v("降价扩展。我们引入了DocFX Flavored Markdown（DFM）来帮助您编写API文档。DFM 与GitHub Flavored Markdown（GFM）100％兼容，具有一些有用的扩展，如文件包含，代码片段，交叉引用和yaml标头。有关DFM的详细说明，请参阅"),r("a",{attrs:{href:"http://dotnet.github.io/docfx/spec/docfx_flavored_markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("DFM"),r("OutboundLink")],1),t._v("。")])]),t._v(" "),t._m(2),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://dotnet.github.io/docfx/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://blog.csdn.net/lindexi_gd/article/details/78661304",target:"_blank",rel:"noopener noreferrer"}},[t._v("docfx 做一个和微软一样的文档平台"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://github.com/docascode/docfx-seed",target:"_blank",rel:"noopener noreferrer"}},[t._v("种子项目（与AppVeyor集成的示例）"),r("OutboundLink")],1)])]),t._v(" "),t._m(3),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://xxred.gitee.io/docfx/tutorial/docfx_getting_started.html#2-use-docfx-as-a-command-line-tool",target:"_blank",rel:"noopener noreferrer"}},[t._v("安装docfx(官网比较慢我自己克隆了一份教程)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://xxred.gitee.io/docfx/tutorial/docfx.exe_user_manual.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("命令使用"),r("OutboundLink")],1)])]),t._v(" "),t._m(4),t._v(" "),r("ul",[r("li",[t._v("首先在github上创建一个项目，然后克隆到本地，方便后面直接提交，并且也需要用到这个地址")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),r("li",[t._v("顺利的话，访问"),r("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),r("OutboundLink")],1),t._v("就可以看到结果了")])]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),r("ul",[r("li",[t._v("以上"),r("code",[t._v("access_token")]),t._v("那里换成自己的，怎么来的呢？首先"),r("a",{attrs:{href:"https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建一个"),r("OutboundLink")],1),t._v("，"),r("a",{attrs:{href:"https://ci.appveyor.com/tools/encrypt",target:"_blank",rel:"noopener noreferrer"}},[t._v("然后加密"),r("OutboundLink")],1)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("li",[t._v("上面只有两个操作，更多操作请移步"),r("a",{attrs:{href:"https://www.appveyor.com/docs/build-configuration/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),r("OutboundLink")],1),t._v("，了解整个过程")])]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._m(15),t._v(" "),r("ul",[r("li",[t._v("打开"),r("a",{attrs:{href:"https://ci.appveyor.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("appveyor官网"),r("OutboundLink")],1),t._v("，并使用github账号直接登陆")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18)]),t._v(" "),t._m(19),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.appveyor.com/docs/environment-variables/",target:"_blank",rel:"noopener noreferrer"}},[t._v("环境变量"),r("OutboundLink")],1)])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"微软开源的文档工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微软开源的文档工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 微软开源的文档工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"什么是docfx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是docfx","aria-hidden":"true"}},[this._v("#")]),this._v(" 什么是DocFX")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"一些教程资源"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些教程资源","aria-hidden":"true"}},[this._v("#")]),this._v(" 一些教程资源")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"基础搭建，配合appveyor部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基础搭建，配合appveyor部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 基础搭建，配合appveyor部署")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"创建并运行docfx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建并运行docfx","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建并运行docfx")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("命令行执行"),e("code",[this._v("docfx init")]),this._v("，感受一下都有什么配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("最后会产生一个项目"),e("code",[this._v("docfx_project")]),this._v("，然后执行"),e("code",[this._v("docfx docfx_project\\docfx.json --serve")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"appveyor文件配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appveyor文件配置","aria-hidden":"true"}},[this._v("#")]),this._v(" appveyor文件配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("在"),e("code",[this._v("docfx_project")]),this._v("文件夹创建文件"),e("code",[this._v("appveyor.yml")])]),this._v(" "),e("li",[this._v("粘贴以下内容")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-yml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('environment: # 环境变量，在这里声明，下面使用\n  op_build_user: "OpenPublishBuild"\n  op_build_user_email: "vscopbld@microsoft.com"\n  access_token:\n    secure: bCtIcPHYlrOYLppEVAH8R4VZpAWou5dKlDhbEPyXfgmI9wEMvH4MD0fFXYrv5sLS\n\nimage: Visual Studio 2017 # 镜像，也就是所依赖的环境\ninit: # 初始化\n  - git config --global core.aurocrlf true #自动完成标准化与转换（CRLF 与 LF 自动转换）\n  \ninstall: #\n    # 以下通过choco安装docfx\n  - ps: |\n        if(-Not $env:APPVEYOR_PULL_REQUEST_TITLE)\n        {\n            git checkout $env:APPVEYOR_REPO_BRANCH -q\n            choco install docfx -y\n            # choco install nuget.commandline -y\n        }\nbuild_script: # 构建生成\n  - ps: |\n        if(-Not $env:APPVEYOR_PULL_REQUEST_TITLE)\n        {\n            #-----------利用docfx命令生成html-----------------------------------------------------start\n            # & nuget install docfx.console -Version 2.18.4 -Source https://www.myget.org/F/docfx/api/v3/index.json\n            # & docfx.console.2.18.4\\tools\\docfx docfx.json\n            & docfx docfx.json\n            if ($lastexitcode -ne 0){\n              throw [System.Exception] "docfx build failed with exit code $lastexitcode."\n            }\n            #-----------利用docfx命令生成html-------------------------------------------------------end\n        }\n# 编译.net项目，这里暂时用不到，先注释\n#  - msbuild src/SampleClass1/SampleClass1.sln\n\non_success: # 成功构建之后部署\n    # 以下就是配置git账号和token，将最终生成的html部署（提交）到你的站点（仓库），\n  - ps: |\n        if(-Not $env:APPVEYOR_PULL_REQUEST_TITLE)\n        {\n            #-----------配置git账号信息，使用到的就是上面的环境变量----------------------------------start\n            git config --global credential.helper store\n            Add-Content "$env:USERPROFILE\\.git-credentials" "https://$($env:access_token):x-oauth-basic@github.com`n"\n            git config --global user.email $env:op_build_user_email\n            git config --global user.name $env:op_build_user\n            #-----------配置git账号信息，使用到的就是上面的环境变量------------------------------------end\n\n            #-----------这里就是部署的地方，克隆你项目的pages分支，复制生成的html然后提交--------------start\n            git clone https://github.com/xxred/docfx-example.git -b gh-pages origin_site -q\n            Copy-Item origin_site/.git _site -recurse\n            CD _site\n            git add -A 2>&1\n            git commit -m "CI Updates" -q\n            git push origin gh-pages -q\n            #-----------这里就是部署的地方，克隆你项目的pages分支，复制生成的html然后提交----------------end\n        }\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("token这个我有想到，直接提交在源码这里岂不是大家都能拿来用？后面看看原来有个加密，appveyor使用的时候再解密，所以上面"),e("code",[this._v("$($env:access_token)")]),this._v("还有个"),e("code",[this._v("$()")]),this._v("包着，所以可以放心的将一些私密性的字符加密再放上去。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("倒数大概七行这样子，"),e("code",[this._v("git clone")]),this._v("后面的地址换成自己的地址，因为再下面需要提交，没错，利用上面的access_token作为身份证")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提交","aria-hidden":"true"}},[this._v("#")]),this._v(" 提交")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[t._v("将"),r("code",[t._v("docfx_project")]),t._v("项目里面的文件剪切到你克隆下来的项目的根目录，相当于去掉"),r("code",[t._v("docfx_project")]),t._v("文件夹，然后提交")]),t._v(" "),r("li",[t._v("创建一个分支"),r("code",[t._v("gh-pages")]),t._v("用来发布静态文件，避免跟源文件同一个分支")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch gh-pages\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout gh-pages\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin gh-pages\n"),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"appveyor最后配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appveyor最后配置","aria-hidden":"true"}},[this._v("#")]),this._v(" appveyor最后配置")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("找到并点击"),e("code",[this._v("projects")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("接着点击"),e("code",[this._v("NEW PROJECT")]),this._v("，在github那一栏，选择上面创建的项目，鼠标放在上面并点击"),e("code",[this._v("Add")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("然后再选择的这个项目的面板，点击"),e("code",[this._v("NEW BUILD")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"更多"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#更多","aria-hidden":"true"}},[this._v("#")]),this._v(" 更多")])}],!1,null,null,null);e.default=i.exports}}]);
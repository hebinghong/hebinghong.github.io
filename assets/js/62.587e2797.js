(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{363:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"在-windows-的-linux-子系统上使用-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-的-linux-子系统上使用-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" 在 windows 的 linux 子系统上使用 docker")]),t._v(" "),s("ul",[s("li",[t._v("由于不能直接支持，所以需要链接到远程 docker 主机才能使用")]),t._v(" "),s("li",[t._v("wsl 上安装 docker 之后，配置环境环境变量"),s("code",[t._v("export DOCKER_HOST=tcp://0.0.0.0:2375")]),t._v("，使其链接到其它 docker 主机")]),t._v(" "),s("li",[t._v("此时 wsl 上的 docker 就是客户端")])]),t._v(" "),s("h2",{attrs:{id:"wsl2-支持-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wsl2-支持-docker","aria-hidden":"true"}},[t._v("#")]),t._v(" wsl2 支持 docker")]),t._v(" "),s("ul",[s("li",[t._v("但是问题一大堆")])]),t._v(" "),s("h3",{attrs:{id:"gpg-can-t-connect-to-the-agent-ipc-connect-call-failed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gpg-can-t-connect-to-the-agent-ipc-connect-call-failed","aria-hidden":"true"}},[t._v("#")]),t._v(" gpg: can't connect to the agent: IPC connect call failed")]),t._v(" "),s("ul",[s("li",[t._v("添加 docker 官方密钥出错，使用以下命令解决")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" remove gpg\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gnupg1\n")])])]),s("h3",{attrs:{id:"sudo-add-apt-repository-command-not-found"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sudo-add-apt-repository-command-not-found","aria-hidden":"true"}},[t._v("#")]),t._v(" sudo: add-apt-repository: command not found")]),t._v(" "),s("ul",[s("li",[t._v("添加仓库命令不存在")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" software-properties-common\n")])])])])},[],!1,null,null,null);a.default=n.exports}}]);
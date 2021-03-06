# rancher+gitlab+appveyor 实现 CI/CD 流水线

- 本文主要是做一些汇总，将近期接触并弄好的一些工具整合起来，弄一套流水线，减轻一定工作压力

## 工具介绍

- 所有的组件都是使用 docker 跑的，所以一款好用的 docker 的 ui 管理工具很重要，那就是[rancher](https://rancher.com/)。这里只是用来管理一些工具，有点屈才了
- 项目代码托管使用 [gitlab](https://gitlab.com/)，其内置了 CI/CD，成套使用，非常方便
- [appveyor](https://www.appveyor.com/) 也是一个 CI/CD 解决方案，基于`asp.net core`开发。其内置 nuget server，这里只用到 nuget 包管理，CI/CD 的工作交给`gitlab-runner`

## 相关教程

- Docker 入门资料收集 https://www.imooc.com/article/270101
- 企业级容器管理平台 Rancher 介绍入门及如何备份数据 https://www.imooc.com/article/284159
- alpine linux 环境中安装 docker https://www.imooc.com/article/287437
- gitlab 安装、备份与还原及常见设置 https://www.imooc.com/article/288591
- ssh——windows 上使用（免密登陆及相关配置） https://www.imooc.com/article/288622
- appveyor docker 镜像制作 https://www.imooc.com/article/288681
- gitlab-runner 安装使用 https://www.imooc.com/article/289755
- gitlab-runner 的 executors 之 docker https://www.imooc.com/article/290242
- 以后可能还有其他相关工具搭配使用，以及不同类型的项目的配置发布流程。比如 api 文档管理中心、解决需要记住多套系统账号密码的授权中心、前端项目的发布配置，私有 docker 仓库、项目从 linux 服务器发布到 win 服务器

## 感想

- 从今年开始，陆陆续续接触 docker，寻找最佳切入点，幸遇 rancher，一个很好用的 docker 集群管理工具。其实一开始只是想要个管理工具，填写镜像、设置端口、设置数据卷等，操作更加方便，还有备份数据什么的。使用的过程中发现，docker 对于快速部署，还原备份，快速验证一些技术都很给力，无论是生产使用还是个人使用，都很棒
- 公司使用的源码管理是 svn，起初是由于迁就一小部分人，而后来的同事大都会 git，考虑迁移到 git。并且在一次小事故中，由于 svn 不是分布式的，独服务器一份版本记录，与本地的对不上，需要重新提交最后一次的代码，管理不当很容器造成损失。最要紧的是，由于历史原因，所有的项目都是在同一个目录，随着项目越来越多，这个库越来越大，也越来不好管理，迁移到 git 势在必行。既然要迁移，并考虑到以后的发展，与现代技术接轨，最好是 docker 部署，那 gitlab 是很好地选择

## 下一目标

- 下一阶段就是要补齐上面所述实例，真正将这流水线用起来，发挥它应有的作用
- 首先是添加前端项目的自动部署，一个难题是项目需要部署到 win 服务器，将在 linux 打包好的前端项目部署过去
- 然后是授权中心，同一账号管理。新项目开发直接使用授权中心登陆，免去重复登陆麻烦

## 总结

- 一路走来，以工作中可能用到的技术为指导，不断学习使用组合各种工具，尽可能提高工作效率，抽出更多时间学习更深层东西。感觉提高的不仅是学习能力，还有相应的思想提升
- 在如今项目复杂度增加，技术应用越来越复杂的环境中，单单会一点技术是不够的。环境要求我们必须是个多面手，深入研究一门技术，其他作为拓展，横纵一起发展，才能从容应对

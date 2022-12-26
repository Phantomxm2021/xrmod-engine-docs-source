---
sidebar_position: 1
title: Package Tools Editor
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description:  打包工具编辑器教程
---

## What is the Package Tools

包工具是 AR-MOD 框架中不可缺少的内容创建工具。让我们轻松地管理资源、算法、压缩等。使用它们可以将我们的内容发布到所有使用 AR-MOD 框架的应用程序。

## User Interface

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/user-interface.png')} height="100%" padding="0.5rem"/>

| Color  | Description                                                                                                                 |
| ------ | --------------------------------------------------------------------------------------------------------------------------- | --- |
| 黄色   | 项目列表，用于展示本地项目                                                                                                  | 。  |
| 浅紫色 | 配置选项菜单，属性。AR 功能，用于配置各种 AR 算法功能等；内容：用于管理 AR 体验包中的资源；构建：构建一个 AR 创意体验互动包 |
| 浅红色 | 配置工作区，用于配置当前的 AR 体验、内容、包装等                                                                            | 。  |

## 如何使用软件包工具

### 创建一个 XRMOD 项目

首先，通过 `Tools`-> `AR-MOD`-> `Package Tools Editor`打开软件包工具界面。

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} height="100%" padding="0.5rem"/>

将鼠标移到左边的项目区，然后点击右键，在项目工作区选择 `New Project`，弹出一个项目向导，选择一个模板来创建一个新项目。

:::tip

1. 项目名称不允许使用数字或符号，必须以 A-Z/a-z 字符开始。
2. 项目的保存路径必须在 Unity/Assets 文件夹中。
:::

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-tool-create-project.png')} height="100%" padding="0.5rem"/>
<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-select-template.png')} height="100%" padding="0.5rem"/>

### 增加 AR 体验功能

- 设置 AR 算法 am 算法（必填）。
- 设置逻辑脚本和条目 可编程(需要)
  - 域名必须符合项目名称
  - MAIN 条目创建项目名称+MAINENTRY
- 设置所需的功能（按需）。

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/AddFeatures.mp4" className="custom-video-showcase" />

:::tip
**How to add new feature block?**  
编辑您的项目并切换到`Properties`部分，然后在空白区域中`右键单击（鼠标）`。您将看到弹出的菜单。
:::


### 收集 AR 对象

- 转到 Content 部分
- 从 Unity Assets 面板拖动 AR 内容资源到内容；并使用短名称命名。您可以在资源上点击右键，选择短名称

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-collect-objects.png')} height="100%" padding="0.5rem"/>

### Build AR Experience

- 转到构建部分
- 设置需要建立的平台和 gorup
- 设置压缩方法（推荐 LZ4）
- 点击构建按钮，开始构建 AREExperience

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-tool-build-project.png')} height="100%" padding="0.5rem"/>

:::danger

1. 建设平台和平台组必须是相同的!
2. 确保场景已被保存或未被修改，否则将无法打包成功。
:::

至此，AR 创意互动体验资源包已经建成，以后可以部署到[Dashboard](../dev-tools/dashboard.md)。

:::info
AR 创意体验内容包将被输出到您的项目根目录 ServerData/package 平台（如：iOS/项目名称下）。

- 您的项目名称.arexperience
- 您的项目名称.json
  这些文件稍后将被上传到我们的仪表板。
:::

## Summary

使用软件包工具编辑器，快速创建 XR-MOD 体验项目，并为我们的 XR 体验快速设置和构建。此外，您还可以建立自己的模板，并与世界各地的创作者分享这些模板。

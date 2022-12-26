---
sidebar_position: 2
title: 安装开发套件
description: 安装XRMOD Engine的开发工具包，用标准化流程构建XR体验内容。
---


在上一章中，我们已经安装了 Unity 并创建了一个 Unity 项目。接下来，我们需要安装 XRMOD 开发包。在项目开始之前，我们需要使用`Unity Package Manager`来安装 XRMOD 工具包。

## Add Registries

1. 打开 Unity Editor 并创建一个 URP 项目
2. 通过`Edit`->`ProjectSetting`->`Package Manager`来设置`Unity Package Manager`注册
3. 在`Package Manager`->`Scoped Registries`中输入以下表格，勾选`enable Preview Packages`和`Enable Pre-release Packages`，然后点击 Apply 来保存您的设置

| Name       | URL                        | Scope(s)       |
| ---------- | -------------------------- | -------------- |
| PhantomsXR | https://registry.npmjs.org | com.phantomsxr |

![Setup Package Registries](@site/static/static/prepare-for-developer/unity-package-registries-setup.png)

5. 通过顶部菜单栏的 `Window` > `Package Manager`打开`Unity Package Manager`
6. 再次将`registry`切换到`My Registries`您将看到所有的开发包

<coverimg url={require('@site/static/static/prepare-for-developer/unity-swtich-registries.jpg')} height="100%" padding="0.5rem"/>

## Install packages

通过安装`XRMOD Engine Settings`来初始化我们的Unity项目，然后根据您需要开发的平台安装相应的软件包。


<coverimg url={require('@site/static/static/prepare-for-developer/unity-install-packages.png')} height="100%" padding="0.5rem"/>

:::tips
下面是一个handheldAR的例子：
1. 安装 `XRMOD Engine Setgings`
2. 安装 `HandHeldAR` and `XRMOD IL Core`
:::

## 初始化该项目

通过`Edit`->`ProjectSettings`面板打开`ProjectSettings`。然后要找到PhantomsXR标签并展开，切换到`XR-MOD引擎SDK设置`。在SDK设置中选择您要开发的平台，然后点击右上角的`应用`按钮保存您的选择。

<coverimg url={require('@site/static/static/prepare-for-developer/unity-Initialize-xrmod.png')} height="100%" padding="0.5rem"/>

:::caution
如果在环境设置下有一个红色的`X`图标，请使用右边的`修复`按钮来修复。
:::

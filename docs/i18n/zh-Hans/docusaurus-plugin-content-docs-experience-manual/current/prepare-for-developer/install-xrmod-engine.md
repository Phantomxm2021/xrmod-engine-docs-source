---
title: 安装XR-MOD引擎
sidebar_position: 2
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 使用Unity引擎创建我们的XR体验内容。
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<coverimg url={require('@site/static/static/prepare-for-developer/install-dev-environment.jpg')} height="25rem"/>


## 安装

在前一章节中，我们已经安装了Unity并创建了一个Unity项目。接下来，我们需要安装XRMOD开发套件。在项目开始前，我们需要使用[`XRMOD Initializer`](https://github.com/Phantomxm2021/XRMODInitializer)安装XRMOD套件。

Unity提供了两种安装方法。您可以选择以下安装方法之一。

### 通过GitHub URL安装

1. 复制GitHub URL：https://github.com/Phantomxm2021/XRMODInitializer.git?path=com.phantomsxr.xrmodinitializer
2. 返回到您的Unity项目并通过Window->PackageManager打开Unity Package Manager
3. 在PackageManager窗口的左上角点击`+`按钮，选择`Add package from github url`，粘贴URL并点击添加按钮或按`回车键`添加**XRMODInitializer**包

<coverimg url={require('@site/static/static/prepare-for-developer/install-xrmod-initializer.jpg')} label="Add XRMODInitializer Package" />

### 从本地文件安装
1. 前往GitHub页面下载最新版本的发布包
2. 解压发布包并将**com.phantomsxr.xrmodinitializer-x.x.x**文件夹拖放到Unity项目下的**Packages**文件夹中

<coverimg url={require('@site/static/static/prepare-for-developer/install-from-localfile.jpg')} label="Add XRMODInitializer Package" />

:::tip
首次安装**XRMODInitializer**包时，Unity会因为XRMODInitializer会为您的Unity项目添加自定义注册表而弹出一个对话框。我们只需点击**关闭**按钮。

<coverimg url={require('@site/static/static/prepare-for-developer/installed-first-time.jpg')} label="Dailog" />

-----

如何知道它已安装？

打开`Unity Package Manager`窗口并切换到In Project，您将看到包的名称。如下所示。

<coverimg url={require('@site/static/static/prepare-for-developer/install-result.jpg')}/>

:::

安装好XRMODInitializer包后，我们通过菜单栏`Tools`->`XR-MOD`->`Install XRMOD`打开XRMODInitializer窗口，您将看到一个弹出窗口。

<coverimg url={require('@site/static/static/prepare-for-developer/menubar-to-install-xrmod.jpg')} label="Menubar"/>

然后您只需选择需要安装的平台并点击右下角的**Process**按钮。如果您选择了**HandheldAR**，右下角有一个平台切换器，您可以切换到**iOS**或**Android**操作系统。

<coverimg url={require('@site/static/static/prepare-for-developer/xrmod-initializer-window.jpg')} fit="scale-down" height="25rem"/>


:::danger

除了**Vision OS**和**HandheldAR**，其他平台无需安装其他SDK。对于其他平台，您需要前往官网下载SDK并将其安装到您的Unity项目中。点击**Get Help**或**Read More**按钮了解如何安装平台SDK。

<coverimg url={require('@site/static/static/prepare-for-developer/need-to-install-sdk.jpg')}  fit="scale-down" width="600px"/>
:::

安装平台SDK后，继续初始化我们的XRMOD引擎，前往菜单栏`Tools`->`XR-MOD`->`Install XRMOD` 选择一个平台进行安装，然后点击**Process**按钮。

安装过程中可能会出现一些弹窗，我们需要进行一些手动操作。

#### Input System 

Unity项目的默认输入系统是旧输入系统，但由于我们将使用新输入系统进行XRI，Unity会弹出确认窗口让您确认。

如果您选择**Yes**，您的Unity将会**重启**，这里我们必须选择**No**以便稍后**手动重启**。

**不要点击是以重启Unity**，因为这会中断XRMODInitializer处理过程。

<coverimg url={require('@site/static/static/sdk/unity-sdk/inputsystem.png')}/>


#### 过时的方法或旧API

该项目可能包含用于验证XR互动者和互动物之间交互的过时方法。如果这个包是新安装的，请取消此操作。

这里我们选择`Go Ahead`，就这样。

<coverimg url={require('@site/static/static/sdk/unity-sdk/xri-api-upgrade.jpg')} />

## 总结

**XRMODInitliazer** 是 XRMOD 引擎的自动安装程序。它可以帮助开发者快速安装XRMOD引擎，无需复杂的配置。  
如果您在使用过程中有任何疑问或意见，请联系我们（nswell@phantomsxr.com）。  
完成所有配置后，我们就可以开发内容了。单击[此处](../tutorial-basics/how-create-xrmod-project) 了解如何开发您的第一个 XR 体验内容。

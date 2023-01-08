---
title: 安装开发环境
sidebar_position: 3
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 安装并使用开发工具来开发XR体验
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<coverimg url={require('@site/static/static/prepare-for-developer/install-dev-environment.jpg')} height="25rem"/>


## 安装


通过阅读[XR体验内容开发工具包安装文章](./install-xrmod-dev-tools)获得基本的开发环境。由于我们需要将XRMOD引擎与Unity结合起来，开发一个新的APP或XR-Experience内容，我们需要安装一些必要的软件包。

一切准备就绪，我们使用快捷键（**Mac**：*Command+Shift+B*；**Win**：Ctrl+Shift+B）打开构建设置面板，改变为我们需要的平台。

<coverimg url={require('@site/static/static/sdk/unity-sdk/switch-platform.png')} fit="scale-down" height="25rem" label="Switch Platform"/>


<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest",value:"quest"},
    {label:"Pico",value:"pico"},
    {label:"WebXR",value:"webar"},
    {label:"Web3D",value:"web3d"},
    {label:"Classic3D",value:"classic3d"},
]}>

<TabItem value="handheldar">

- com.phantomsxr.xrmodenginesettings
- com.phantomsxr.xrmod.handheldar
- com.phantomsxr.ilcore
- com.phantomsxr.foundation
- com.phantomsxr.armodsimulator

:::tip
如何检查软件包的名称？
<coverimg url={require('@site/static/static/sdk/unity-sdk/package-name.png')} height="25rem"/>
:::

</TabItem>


</Tabs>

:::info
在安装过程中可能会有一些弹出窗口，我们需要做一些手动操作。

<coverimg url={require('@site/static/static/sdk/unity-sdk/inputsystem.png')} width="50%"/>

Unity项目的默认输入系统是旧的输入系统，但由于我们的XRI将使用新的输入系统，Unity将弹出一个确认窗口让你确认。如果你选择`Yes`，你的Unity将被`restarted`，这里我们可以选择`No`，以便以后`manually`重新启动。

<coverimg url={require('@site/static/static/sdk/unity-sdk/xri-api-upgrade.png')} width="50%"/>

该项目可能包含一个过时的方法来验证XR交互器和可交互器之间的交互。只有在更新XR交互工具包的旧项目中才需要进行这一更新。如果该工具包是新安装的，请取消此操作。

在这里，我们选择`Go Ahead`就可以了。

:::

## 初始化

安装完成后，在Unity顶部的菜单栏中打开`Edit`->`Project Settings`->`PhantomsXR`->`XR-MOD Engine SDK Settings`来初始化我们的项目配置，如下图所示。完成这一步后，我们可以开始开发AR-APP或XR-Experience内容。

<coverimg url={require('@site/static/static/sdk/unity-sdk/xrmod-init.png')} height="25rem" />


根据以下平台配置你的项目。

<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest",value:"quest"},
    {label:"Pico",value:"pico"},
    {label:"WebXR",value:"webar"},
    {label:"Web3D",value:"web3d"},
    {label:"Classic3D",value:"classic3d"},
]}>

<TabItem value="handheldar">

现在你可以看到出现了一个新的设置视图；按照以下图片的顺序进行设置。

<coverimg url={require('@site/static/static/sdk/unity-sdk/xrmod-settings.png')}/>

</TabItem>


</Tabs>


:::tip
如果一个❌ <sup>6</sup>出现在[5]区域，你会看到它后面的**Fix**按钮，点击它来修复它。
:::

:::danger
- 不要忘记点击**Apply**按钮来保存你的配置。
- 请确保第5区的所有选项都是✅状态
:::

完成所有配置后，我们就可以开发内容了。点击[这里](../tutorial-advanced/create-first-arexperience)，了解如何开发您的第一个XR体验内容。

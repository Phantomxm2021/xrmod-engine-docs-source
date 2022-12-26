---
title: 如何创建XRMOD项目
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 使用Package Tools Editor来创建一个XRMOD项目。
sidebar_position: 1
---

在此之前，我们已经创建了一个Unity项目并安装了XRMOD开发环境。现在我们将创建我们的第一个XRMOD项目。

:::info
如果你还没有安装Unity，[点击这里](.../prepare-for-developer/install-unityengine)去看看如何安装。 
:::

:::info
如果你还没有安装XRMOD开发环境，请[点击这里](.../prepare-for-developer/install-dev-environment)看看如何安装。
:::

## 创建我们的项目

我们需要通过Unity菜单栏`Tools`->`ARMOD`->`Package Tools Editor`打开**PackageToolsEditor**。

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} height="100%" padding="0.5rem"/>

:::info
如果你想了解更多关于PackageToolsEditor的信息，请[点击这里](.../dev-tools/package-tools)去看看。
:::

将鼠标移到左侧的项目区，右击，在项目工作区选择新项目，弹出一个项目向导，选择一个模板来创建一个新项目。

:::caution
你的项目名称不能以数字或符号开头，只能以A（a）-Z（z）开头。
:::

<center>
<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/packagetoolseditor-create-project-guide.png')} width="80%" padding="0.5rem" label="Create XRMOD Project"/>
</center>

:::danger
项目存储路径必须在**Unity Assets文件夹内（在Unity项目的Project目录下），否则不能被识别和创建。
:::

<center>

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-editor-project-review.png')} width="80%" padding="0.5rem" label="Create XRMOD Project"/>

</center>


## 摘要

现在你的第一个XRMOD项目已经被创建了。你也可以尝试通过选择另一个模板来创建一个项目。

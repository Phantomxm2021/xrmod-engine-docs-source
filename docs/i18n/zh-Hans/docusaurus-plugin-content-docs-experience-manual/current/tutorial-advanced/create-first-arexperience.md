---
title: 创建第一个ARExperience
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 用xrmod引擎创建您的第一个xr（ar/vr/mr）体验案例
sidebar_position: 1
---

## 简介 

本文将介绍宜家家居Place家具摆放在Focus SLAM模式下的AR体验。Focus SLAM是一种聚焦的SLAM算法，将AR虚拟体放在指示器的位置上。

---

## 准备

在开始创建AR体验之前，必须安装以下软件和开发工具包。

<table>
<tr>
    <th>内容开发工具</th>
    <th>XRMOD工具链</th>
</tr>

<tr>

<td>

- [Unity Engine 2021.3f1](https://unity.com/)
- Script code editor
  - [Rider](https://www.jetbrains.com/rider/)
  - [Visual studio code](https://code.visualstudio.com/)
  - [Visual studio](https://visualstudio.microsoft.com/)

</td>

<td>

- XRMOD API
- XRMOD IL code
- XRMOD Simulator
- XRMOD Handheld AR
- XRMOD Package tools
- XRMOD Engine Setgings
- XRMOD Render Assistant
- ARFoundation (ARKit/ARCore/ARKit FaceTracking)

</td>

</tr>

</table>

:::info
####  我如何获得一个开发工具包？
您可以阅读[这篇文章](.../prepare-for-developer/install-xrmod-dev-tools)来安装它!

### How to create a Unity project?
您可以阅读[这篇文章](.../prepare-for-developer/install-unityengine#extras)来创建它!
:::

---

## 创建一个XRMOD项目

在开始创建之前，您需要了解XR-MOD项目的目录结构。当我们使用PackageTools来创建时，其结构如下。

```txt
FocusExample
    ├─Artwork      
    ├─AutomaticGenerated    
    ├─Configures
    └─Scripts
      ├─Editor
      └─Runtime
```

|名称|描述|
|---|---|
|FocusExample|XR-MOD项目的项目名称|
|Artwork|存储和管理艺术资源，您可以创建子文件夹进行分类管理|
|AutomaticGenerated|在构建包体时，如MOD dll、AR函数配置文件等会自动生成，是必要的配置。|
|Configures|在创建项目时自动创建，以缓存AR功能的配置。项目创建后，不能删除，否则将报告错误。|
|Scripts|该项目所有代码的存储位置|
|Editor|它只在Unity编辑器中使用，一般存储辅助资源脚本，如项目的快速配置面板，不参与运行时构建。|
|Runtime|存储AR项目的运行代码，可以创建更多的脚本来实现更有趣的逻辑。|

:::caution
XR-MOD不会自动加载AR体验包中的资源，脚本需要自己加载。
:::

### 开始创作

通过前面的介绍和准备，我们对XRMOD引擎有了清晰的认识，接下来我们将带领大家创建第一个XRMOD引擎项目。首先，我们通过`Tools`->`XRMOD`->`Package Tools Editor`打开XRMOD Engine项目生成器，如下图所示。

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} />

:::tip
如果您不知道如何使用软件包工具编辑器，请[点击这里](.../dev-tools/package-tools)检查。
:::

1. 在 "项目区 "右击并从弹出的菜单中选择 "新建项目 "来创建一个项目。
2. 这时，会弹出另一个界面，如下图所示。
3. 选择要创建的`IKEA STYLE`模板，然后在左边输入项目名称和项目存储位置
4. 点击右下角的 "CREATE "按钮，开始创建项目

<coverimg url={require('@site/static/static/tutorial-basics/tutor-basics-template-select.png')} fit='scale-down' height="30rem"/>

等待项目创建后，我们在创建器的右侧界面点击 "Build"，建立我们的XR项目体验内容包，如下图所示。

:::caution
构建平台和平台组必须一致，否则会出现错误。
:::

<coverimg url={require('@site/static/static/tutorial-basics/tutor-basics-template-build.png')} />

---

## 部署

点击 "Show in file browser "按钮，在XRMOD项目建立后进入XR体验包目录。

|名称|类别|描述|
|---|---|---|
|focusexample.arexperience|arexperience|所有的经验都包括在内，例如3D模型、纹理、脚本。|
|focusexample.json|json|经验文件的细节和所有内容信息|
|buildlogtep.json|json|建设细节|


<coverimg url={require('@site/static/static/tutorial-basics/tutor-basics-template-result.png')} fit="contain" />

我们只需要上传`YOUR_PROJECT_NAME.arexperience`和`YOUR_PROJECT_NAME.json`文件。`build.json`是项目构建日志文件，所以我们不上传它。

现在您可以把您的构建资产上传到XRMOD云端。要了解更多关于XRMOD云端的信息[点击这里](.../dev-tools/dashboard)
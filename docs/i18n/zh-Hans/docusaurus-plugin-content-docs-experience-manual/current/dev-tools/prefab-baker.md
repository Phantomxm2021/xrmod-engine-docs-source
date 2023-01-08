---
sidebar_position: 3
title: Rendering Assistant
---

## What is the Rendering Assistant(Prefab baker)?

Prefab烘焙的想法是允许在游戏过程中向活动场景中添加带有烘烤光影的Prefab。
Credit:https://github.com/nukadelic/Unity-Lightmap-Prefab-Baker

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/baker.jpg')} height="25rem" padding="0.5rem"/>

## How is done?

Unity 将为当前活动场景烘烤光照图，得到的图像文件将被移到目标 prefab 文件夹中。Prefab对象中的Prefab烘焙脚本将把这些光照图的引用相对于Prefab中的每个渲染的组件，与索引、UV 的比例偏移一起存储。一旦Prefab被添加到场景中，它将扫描当前已有的光照图，并添加任何缺少的光照图。

## Notes:

- 确保您的烘烤场景的照明设置与您的关卡场景相匹配（同样的天幕光源和定向灯，如果有的话）。
- 快速烘烤是为了快速制作光影原型，它将使用低质量的快速烘烤预览（使用这个药水不会覆盖当前场景的照明设置）。
- 当烘烤多个预制体时，如果它们之间的距离很近，它们的灯光会影响彼此的光影，建议一次烘烤一个预制体以避免这种结果，或者把预制体放在离对方很远的地方。
- 将脚本添加到不是Prefab的物体上并点击烘烤，将自动把游戏物体转换成Prefab并保存在与当前打开的场景相同的文件夹中。
- 默认情况下，光照图的导出文件夹将位于 Resouces/Lightmaps 中。
- 灯光贴图将被复制到选定的目标文件夹内的一个新文件夹。为了避免光照图的碰撞，请确保所有烘烤的预制体在整个项目中都有唯一的名字。

## How to use Rendering Assistant in XR-MOD?

## Install

首先，您需要从我们的注册表中安装渲染助手。我们可以打开包管理器面板，将注册表切换到我的注册表，然后您就可以在包管理器面板中看到 XRMOD Rendering Assistant。Prefab Bake 已经包含在其中，所以我们需要安装它。点击 "安装 "按钮来安装这个包。

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/installprefabbaker.png')} height="100%" padding="0.5rem"/>

## Use guide

创建一个新场景进行烘烤。选择空（内置）场景模板来创建。

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/newscene.png')} height="100%" padding="0.5rem"/>

创建三个空的 GameObjects 并命名为：Chair（随您喜欢的名字）、Meshes、Lights。然后把 Meshes 和 Lights 放在 Chair 下面，让它们成为 Chair 的子对象。

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/makevirutalobject.png')} height="100%" padding="0.5rem"/>

把我们的 AR 虚拟对象从资产中拖放到层次结构中。并让我们的 AR 虚拟对象成为 Meshes 的子对象。并将所有的灯光放在灯光节点下。

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/hierarchystate.png')} height="100%" padding="0.5rem"/>

确保`Lighting Settings Assets`已经存在，如果没有，您必须通过`New Lighting Settings`按钮创建一个新的。通过 `Window`->`Rendering`->`Lighting`打开 Unity Lighting 面板。

|                                                                                           |                                                                                          |
| ----------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------- |
| <coverimg url={require('@site/static/static/dev-tools/prefabbaker/openlighting.png')} height="100%" padding="0"/> | <coverimg url={require('@site/static/static/dev-tools/prefabbaker/setlighting.png')} height="100%" padding="0"/> |

:::tip
如果您想获得更好的烘烤效果，请在灯光面板上对烘烤值进行详细调整和实验。
:::

在所有的照明设置完成后，我们需要将`PrefabBaker`脚本组件添加到我们的假根节点。如下面的图片所示。

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/addbakerscript.png')} height="100%" padding="0.5rem"/>

让我们去烘烤它。我们可以通过`工具`->`AR-MOD`->`PrefabBaker`打开`PrefabBaker`设置面板。

1. 改变Lightmaps文件夹
2. 设置纹理大小（默认为1024x1024）。
3. 点击烘烤按钮，开始

现在我们已经完成了设置。点击Open Baker按钮，显示烘烤设置面板。我们可以看到窗口中的错误。现在我们需要点击Change按钮来重新设置保存的Lightmaps文件夹路径。

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/prefabbakesettings.png')} height="100%" padding="0.5rem"/>

:::tip

- 我们建议您将保存路径设置为ARMOD项目艺术品文件夹。
- 如果勾选了 `Automatically clean up the scene lightmap`，"Prefab Bake"将清理当前预览中的所有烘烤。但是这并不能清除我们的数据，而只是预览数据。
:::

<coverimg url={require('@site/static/static/dev-tools/prefabbaker/bakeresult.png')} height="100%" padding="0.5rem"/>

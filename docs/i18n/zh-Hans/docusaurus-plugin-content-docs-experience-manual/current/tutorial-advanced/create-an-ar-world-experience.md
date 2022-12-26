---
title: 创建一个AR世界的体验
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 利用AR技术克隆地球
sidebar_position: 9
---

## 简介

在上一篇文章中，我们已经创建了第一个XR-mod体验，在本节中，我们将创建一个从**零到一的AR世界体验**。

### 什么是AR世界？

简而言之，AR世界是一个虚拟世界，或者称之为地球克隆项目。我们使用计算机技术来克隆地球，并将地球上的所有物理物体数字化。然后，数字地球与真实的地球进行一对一的匹配。我们可以通过XR耳机看到数字地球对真实地球的增强。

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/arworld.jpg')} label="The AR World layers"/>

我们正处于变革前的阶段，所以克隆整个地球对我们来说是困难的。虽然我们不能克隆整个地球，但我们可以克隆地球的一小部分，如建筑物、商业区、公园和地标。

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/landmark.png')} label="Copyright @Snapchat, AR World of landmark"/>

---

## 准备

### Tools

在开始创建AR体验之前，必须安装以下软件和开发工具包。   

<table>
<tbody>
<tr>
    <th>Content Dev-Tools</th>
    <th>XRMOD tools chain</th>
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
</tbody>
</table>


import VideoPlayer from '@site/src/components/VideoPlayer'


:::info

#### 我如何获得一个开发工具包？

- 您可以阅读[这篇文章](.../prepare-for-developer/install-xrmod-dev-tools)来安装它!

#### 如何创建一个Unity项目？

- 您可以阅读[这篇文章](.../prepare-for-developer/install-unityengine#extras)来创建它!
:::

### 映射物理世界

:::tip
如果您不知道如何绘制世界地图，您可以点击[这里](./tutorial-basics/how-to-mapping-the-world)阅读更多内容。
:::

---

## 创建一个XRMOD项目

### 简介

在开始创建之前，您需要了解XR-MOD项目的目录结构。当我们使用PackageTools来创建时，其结构如下。

```txt
ARWorldCase
    ├─Artwork
    ├─AutomaticGenerated
    ├─Configures
    └─Scripts
      ├─Editor
      └─Runtime
```

| Name               | Describe                                                                                                                                                                                 |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ARWorldCase        | XR-MOD项目的项目名称                                                                                                                                                      |
| Artwork            | 存储和管理艺术资源，您可以创建子文件夹进行分类管理                                                                                                      |
| AutomaticGenerated | 在构建包体时，如MOD dll、AR函数配置文件等会自动生成，是必要的配置。                                      |
| Configures         | 在创建项目时自动创建，以缓存AR功能的配置。项目创建后，不能删除，否则将报告错误。 |
| Scripts            | 该项目所有代码的存储位置                                                                                                                                 |
| Editor             | 它只在Unity编辑器中使用，一般存储辅助资源脚本，如项目的快速配置面板，不参与运行时构建。  |
| Runtime            | 存储AR项目的运行代码，可以创建更多的脚本来实现更有趣的逻辑。                                                                                  |

:::caution
XR-MOD不会自动加载AR体验包中的资源，脚本需要自己加载。
:::

### 开始创作

通过前面的介绍和准备，我们对XRMOD引擎有了清晰的认识，接下来我们将带领大家创建第一个XRMOD引擎项目。首先，我们通过`Tools`->`XRMOD`->`Package Tools Editor`打开XRMOD Engine项目生成器，如下图所示。

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} label="Open Package Tools Editor"/>

:::tip
如果您不知道如何使用软件包工具编辑器，请[点击这里](.../dev-tools/package-tools)检查。
:::

1. 在 "项目区 "右击并从弹出的菜单中选择 "新建项目 "来创建一个项目。
2. 这时，会弹出另一个界面，如下图所示。
3. 选择要创建的`空白`模板，然后在右边输入`项目名称`和`项目存储位置`。
4. 点击右下角的 "CREATE "按钮，开始创建项目

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-select-template.png')} label="Create Blank Project"/>

### 导入资产

- **Art Assets**  
  导入您自己的艺术资源并将其存储在 "艺术品 "文件夹中。
- **Map Data**  
  从我们的云端下载mapp数据，然后导入到我们的XRMOD项目中；把它放到`艺术品/地图数据'中。

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/tutor-basics-import-assets.png')}/>

:::info
如果您的项目中没有`Mapdata`文件夹，您必须自己创建一个。
:::

### 创建ARMap展示台

:::danger
如果您的操作系统是Apple Slicon版本，您就不能看到ARMap Visualizer。因为我们的框架目前不支持Apple Slicon，我们将在下一季度发布一个支持的版本。
:::


1. 创建一个新的场景。
2. 在`Hierachy`中创建一个新的`Empty GameObject`并重命名为`ARMap`。
3. 通过 "AddComponent "按钮添加一个新的`ARMap`组件的脚本。当脚本被添加时，我们将自动为ARMap创建一个ARSpace，并将ARMap设置为ARSpace的一个子节点。
4. 将我们的地图数据拖入`ARMap`脚本的`MapFile`字段。
5. 将场景中的ARSpace拖到Unity项目面板中XRMOD项目的Artwork/Prefabs文件夹中，使其成为Prefab。

:::tip
我们建议创作者创建一个新的场景来构建ARMap。
:::


<VideoPlayer src="/static/videos/tutorials/arworld/CreateARMap.mp4" className="custom-video-showcase" />

### 对齐虚拟对象


现在我们将虚拟物体与我们的点云数据配对。


1. 将虚拟物体拖放到场景中
2. 展开ARSpace，看到ARMap GameObject；把虚拟对象放在ARMap GameObject里面，它成为ARMap子对象。
3. 调整虚拟对象的位置，使其与我们的点云对准位置（您可以在这里随意对准）。

<VideoPlayer src="/static/videos/tutorials/arworld/AlignVirtualObject.mp4" className="custom-video-showcase" />

现在，虚拟物体与点云对齐，这样，一旦我们认识到收集的空间，我们就可以看到虚拟物体出现在指定的位置。

最后通过选择`ARSpace`->`Inspector`->`Overrider`->`Apply All`保存我们的Prefab编辑结果。

### Localizer 事件


目前，只要ARMap被加载，我们的虚拟对象就会被显示出来，这显然不是我们期望的效果。正确的效果应该是先识别空间，然后再显示虚拟对象。

**我应该怎么做呢？我需要写代码吗？**

我们不需要写代码，我们只需要将ARMap子对象（我们的虚拟对象）的激活状态设置为假。

选择ARMap并在`Inspector`中找到ARMap组件，在ARMap组件中找到Event点击右下角的`+`添加一个引用槽，将`我们的虚拟对象`拖入其中，然后选择`Function`，函数设置为`GameObject/SetActive`并设置其值为`True`。

然后设置 `virtual object`的Active状态为 `False`。

Finally we need to save the results of our Prefab edits, which can be done by **selecting ARSapce GameObject** in the **Inspector** and choosing `Overrider-> Apply All`.

<VideoPlayer src="/static/videos/tutorials/arworld/LocalizerEvent.mp4" className="custom-video-showcase" />

---

## Configuration experience

在上一步中，我们已经创建了所有必要的资源，接下来开始配置，设置XR-MOD项目属性。

1. 将`XR Algorithm`的`Device Type`设置为`Handheld AR`。
2. 将`XR Algorithm` 设置为 `Immersal`。
3. 添加 `Programmable`。
4. 保持所有默认

:::info
要了解更多关于属性特征块的信息，请看以下链接。

- [Version Checker](../../experience-manual/arblock/version-check-block)
- [AR World Scale](../../experience-manual/arblock/features#arworld-scale-block)
- [Immersal](../../experience-manual/arblock/features#immersal-setting)
- [Programmable](../../experience-manual/arblock/programmable-block)

:::

<VideoPlayer src="/static/videos/tutorials/arworld/SetupConfigure.mp4" className="custom-video-showcase" />

---

## 收集对象

所有的配置都已完成。进入`Contents`部分，然后进入`Prefabs`文件夹，将`ARSpace`预制件拖到`Contents`区域。

<VideoPlayer src="/static/videos/tutorials/arworld/DADContents.mp4" className="custom-video-showcase" />

## 在运行时加载资产

通过上面的介绍，我们知道XR-MOD不会自动加载我们的资源；接下来让我们写一个简单的脚本来实现它。

:::tip
XRMOD同时提供了C#和可视化脚本，您可以选择其中一种来实现。
:::

双击`YOUR_PROJECT`->`Scripts`->`Runtime`->`YOUR_PROJECTMainEntry.cs`来打开我们的脚本。

- 然后在脚本的 "OnLoad "函数内添加两行代码。
- 首先注释掉任何您不需要使用的函数。

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/tutor-basics-open-scripting.png')} />

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs defaultValue='cs' values={[
{label:"C#",value:"cs"},
{label:"VisualScripting",value:"vs"},
]}>

<TabItem value="cs">

```cs title="ImmersalTestMainEntry.cs"
using System;
using UnityEngine;
using System.Collections;
using com.Phantoms.ARMODAPI.Runtime;
using com.Phantoms.ActionNotification.Runtime;

namespace ImmersalTest
{
    public class ImmersalTestMainEntry
    {
        //ARMOD API
        internal static API ARMODAPI = new API(nameof(ImmersalTest));

        private GameObject ARSpace;

        public async void OnLoad()
        {
            //Use this for initialization. Please delete the function if it is not used
            // highlight-start
            var tmp_ARSpacec = await ARMODAPI.LoadAssetAsync<GameObject>("AR Space");
            ARSpace = GameObject.Instantiate(tmp_ARSpacec);
            // highlight-end
        }

        // public void OnEvent(BaseNotificationData _data)
        // {
        //     //General event callback. Please delete the function if it is not used
        // }

        // public void OnUpdate()
        // {
        //     //Like Unity Update method. Please delete the function if it is not used
        // }

        // public void ReleaseMemory()
        // {
        //     //Release Memory after AR close. Please delete the function if it is not used
        // }
    }
}
```

</TabItem>

<TabItem value="vs">

:::info
可根据喜好设置名称
:::

在您的项目的`Scripting/Runtime`文件夹中创建一个可视化脚本图（`SciptGraph`），并将其重命名为`ARWorldVS`。


<VideoPlayer src="/static/videos/tutorials/arworld/CreateVS.mp4" className="custom-video-showcase" />

现在我们来实现可视化脚本的逻辑。

- 在视觉画布上添加 `ARMOD API`节点
- 在 `ARMOD API`节点的 `ProjectName`字段中输入您的项目名称。
- 在视觉画布上添加 `Load Assets(Async)`节点。
- 在 `Load Assets(Aysnc)`节点的`Name`字段中输入您想加载的游戏对象的名称。
- 连接 `ARMOD API`到 `Load Assets(Async)`。
- 在视觉画布上添加 `On Start`节点
- 连接 `On Start`到 `ARMOD API`。
- 选择 `On Start`节点，在左侧面板上将 `Coroutine`设置为 `True`。

:::danger
Load Assets(Async)节点必须使用coroutine来启动它。
:::

<VideoPlayer src="/static/videos/tutorials/arworld/WriteVS.mp4" className="custom-video-showcase" />

**Visual Scripting GameObject**

- 然后在 `Hierarchy`中创建一个空的游戏对象，重命名为 `ARWorldVS`。
- 通过 `AddComponent`按钮添加 `Script Machine`组件到您的游戏对象。
- 将您的可视化脚本图形文件拖放到 `Script Machine`组件的 `Graph`区域。
- 将您的可视化脚本游戏对象拖入项目面板，使其成为Prefab。
- 拖动您的可视化脚本游戏对象预制件到`PackageToolsEditor`->`Contents`部分。

**Visual Scripting Entry**

- 打开PackageToolsEditor并编辑您的XRMOD项目
- 将您的VisualScripting游戏对象名称输入 `Main Visual Scripting`字段。
- 切换到 `Properties`部分
- 找到 `Programmable`块
- 将 `Programmable`的 `Programmable Type`块从 `CSharp`设置为 `VisualScripting`。

:::danger
VisualScripting gameobject name must be the same as the name in `Contents` section
:::

<VideoPlayer src="/static/videos/tutorials/arworld/SetVS.mp4" className="custom-video-showcase" />

</TabItem>

</Tabs>

---

## 构建

现在我们已经完成了所有的配置，接下来我们需要将其构建为一个体验包。

- 用快捷键 `Ctrl+N`或 `Command+N`创建新场景，我们不保存当前场景。
- 切换到 `构建`部分
- 根据您想要的平台，设置 `构建平台`、`平台组 `和 `压缩格式`。
- 点击 `构建AR-体验`按钮来触发构建过程

:::danger
构建平台和平台组必须一致，否则会出现错误。
:::

<VideoPlayer src="/static/videos/tutorials/arworld/Build.mp4" className="custom-video-showcase" />

---

## 部署

我们的sdk提供了许多计划。大致分为两类。

- Online plans
- Offline plans

这两种计划的XR体验部署过程是不同的，下面我们将解释两种模式下的不同部署模式。

<Tabs defaultValue='ol' values={[
{label:"Online Plan",value:"ol"},
{label:"Offline Plan",value:"of"},
]}>

<TabItem value="ol">

在线计划相对简单，只需到XRMOD云后台，登录您的账户进行部署。


- 创建一个新的应用程序，如果应用程序不存在的话
- 如果项目不存在，则创建一个新的项目
- 将您的XR-Experience包上传到您想要的平台。
- 点击`Show in file browser`按钮，在XRMOD项目建立后进入XR体验包目录。

|Name|Type|Description|
|---|---|---|
|focusexample.arexperience|arexperience|所有的经验都包括在内，例如3D模型、纹理、脚本。|
|focusexample.json|json|AR文件的细节和所有内容信息|
|buildlogtep.json|json|建设细节|

我们只需要上传`YOUR_PROJECT_NAME.arexperience`和`YOUR_PROJECT_NAME.json`文件。`build.json`是项目构建的日志文件，所以我们不上传。

:::info
`desired platform`是指您在[building](#build)时选择的平台。 
现在您可以把您的构建资产上传到XRMOD云。要了解更多关于XRMOD云的信息，[点击这里](.../dev-tools/dashboard)了解更多信息。
:::

</TabItem>

<TabItem value="of">

顾名思义，离线计划不能使用网络加载，所以我们需要把XR-Experience包放在APP包里面。
这里我们指定了一个特定的目录。

| Platform | Path                                              |
| -------- | ------------------------------------------------- |
| Android  | "jar:file://" + Application.dataPath + "!/assets" |
| iOS      | Application.dataPath + "/Raw"                     |
| Unity    | StreammingAssets/PLATFORM/PROJECT/                |

我们需要将平台文件夹的所有内容复制到上表中的相应路径。

:::tip
**我在哪里可以找到XR-Experience套餐？**
进入`Build`部分，点击`Show in file browser`按钮，您会看到它们。

:::

</TabItem>

</Tabs>

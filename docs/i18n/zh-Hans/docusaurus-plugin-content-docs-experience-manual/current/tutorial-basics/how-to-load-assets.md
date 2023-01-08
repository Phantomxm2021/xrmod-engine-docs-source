---
title: 如何加载资产
keywords:
  [
    ar,
    xr,
    vr,
    apple glasses,
    hololens,
    quest,
    pico,
    easyAR,
    vuforia,
    xrmod,
    mod,
    doc,
    XR,
    facebook,
    meta,
    unity,
  ]
image: img/xrmod-docs-card.png
description: Using ARMODAPI to load your assets
sidebar_position: 2
---

XRMOD引擎允许创作者通过CSharp脚本或可视化脚本加载自定义资产。

**但是，我们应该如何做到这一点?**

:::danger
你必须安装[Unity Engine](../prepare-for-developer/install-unityengine)和[Dev-environment](../prepare-for-developer/install-dev-environment)。
:::

首先，我们需要创建一个XRMOD项目（[如何创建](../tutorial-basics/how-create-xrmod-project)）。

:::info
如何在创建后找到XRMOD项目？ 
[点击这里](../dev-tools/package-tools#project-editing)了解更多信息
:::

## 收集资产

创意者可以导入自己的艺术资产或使用Unity内置资产（[Primitive Objects](https://docs.unity3d.com/Manual/PrimitiveObjects.html)）。

:::info
[点击这里](https://docs.unity3d.com/Manual/ImportingAssets.html)，了解Unity如何导入资产。
:::

跟随步骤:

1. 将你的艺术资产导入`你的项目/Artwork`文件夹中。
2. 创建一个新的文件夹并将其命名为`Prefabs`。这个文件夹将用来存储项目的预制体。
3. 将艺术资产拖放至**Unity Scene**或**Hierarchy**
4. 处理你的艺术资产，例如，模型的渲染、贴图、比例等。
5. 将你的艺术资产从**Unity Scene**或**Hierarch**拖放至`你的项目/Artwork/Prefabs`文件夹，它将成为一个[Prefab](https://docs.unity3d.com/Manual/Prefabs.html)
6. 将你的艺术作品的预制件拖放至 **PackageToolsEditor**->**Contents**

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/MakePrefab.mp4" className="custom-video-showcase" />

## 编辑脚本

进入`PROJECT_PATH`->`PROJECT_NAME`->`Scripts`->`Runtime`并打开`PROJECTNAMEMainEntry.cs`文件（通过双击）。

然后在`OnLoad`方法上写一些代码。

:::danger
**ARMODAPI.LoadAssetAsync<GameObject/>("VirtualObject");**对象名称（`VirtualObject`）必须与`PackageToolsEditor`->Contents`资产名称相同。
:::

```cs title="HowToCreateProjectMainEntry.cs"
using System;
using UnityEngine;
using System.Collections;
using com.Phantoms.ARMODAPI.Runtime;
using com.Phantoms.ActionNotification.Runtime;
// highlight-next-line
using Object = UnityEngine.Object;


namespace HowToCreateProject.Runtime
{
    public class HowToCreateProjectMainEntry
    {
        //ARMOD API
        internal static API ARMODAPI = new API(nameof(HowToCreateProject));

        // highlight-next-line
        public async void OnLoad()
        {
            // highlight-start
            var tmp_ARVirtualObjectPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("VirtualObject");
            Object.Instantiate(tmp_ARVirtualObjectPrefab);
            // highlight-end
        }
    }
}
```

我们使用[`LoadAssetAsync`](../../open-api-pure-csharp/utility-api/LoadAssetAsync)来按资产名称和类型从XR-Experience包中加载我们的虚拟对象。因为`LoadAssetAsync`方法将资产从磁盘加载到内存，它并没有将资产实例化，所以我们需要调用`Instantiate`方法来实例化它。

## 可编程块

1. 转到**PackageToolsEditor**
2. 切换到**Properties**部分
3. 将你的鼠标指向自由区域
4. 右击你的鼠标按钮
5. 选择`Programmable`

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/AddProgrammableBlock.mp4" className="custom-video-showcase" />

## 建立XR-体验

1. 转到**PackageToolsEditor**
2. 切换到**Build**部分
3. 选择你需要构建的平台
4. 点击**Build AR-Experience**按钮，开始构建

:::danger
**Build Platform**和**Platform Group**所选的两个平台必须是相同的。
:::

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/BuildXRExperience.mp4" className="custom-video-showcase" />

## 测试

现在我们已经完成了所有的工作，但我们还不知道内容是否正常加载，所以我们需要进一步测试以验证我们的结果。

**如何测试**?

XRMOD引擎目前提供了在Unity编辑器中加载测试等流程，所以我们可以在Unity编辑器中验证所有的逻辑。在开始测试之前，我们需要通过Unity Package Manager安装XRMOD Engine Simulator插件。

:::info
[点击这里](../prepare-for-developer/install-xrmod-dev-tools)来学习如何安装XRMOD引擎工具链。
:::

在这里，我们需要安装XRMOD引擎模拟器插件。

<center>

<coverimg url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimulatorPlugin.png')} padding="0.5rem" label="Install XRMOD Simulator Plugin"/>

</center>

当你完成安装后，你可以在Unity编辑器的左上角看到一个XR按钮，这主要是用来启动XRMOD引擎模拟器的。

<center>

<coverimg url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimualtorBtn.png')} padding="0.5rem" label="Simulator"/>

</center>

### 启动模拟器

1. 点击左上方的**XR Play**按钮，启动XRMOD引擎模拟器。
2. 切换到**Game**视图
3. 将你的项目名称输入模拟器
4. 点击**Fetch Project**来加载我们的项目

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/Test.mp4" className="custom-video-showcase" />

## 总结

在这一节中，我们学习了如何在XRMOD引擎中加载一个资产。在加载过程中，我们需要注意以下几点。

1. 通过`ARMODAPI.LoadAssetAsync`方法加载资产。
2. `ARMODAPI.LoadAssetAsync`需要传入要加载的类型和要加载的项目名称。
3. `ARMODAPI.LoadAssetAsync`是一个异步方法，需要在函数中标记为异步，并在`ARMODAPI.LoadAssetAsync`方法前添加`await`。
4. 在API中加载的对象的名称必须与`PackageToolsEditor`->`Contents`中的资产名称相同。

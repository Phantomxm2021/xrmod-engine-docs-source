---
title: 如何与用户界面交互
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
description: Uisng Package Tools Editor to create a XRMOD proejct.
sidebar_position: 3
---

import VideoPlayer from '@site/src/components/VideoPlayer'

在[如何加载资产](../how-to-load-assets)部分，我们讲述了如何通过CSharp脚本加载艺术资产。在这部分，我们将继续使用上一节的项目。并讨论如何在XRMOD引擎中使用UGUI。

## 构建界面

1. 右键单击**Hierarchy**面板
2. 选择`UI`->`Button-TextMeshPro`，创建一个新的UGUI界面，并将按钮重命名为`ClickMe`。
3. 将`ClickMe`按钮的父级（--Canvas）重命名为`UICanvas`。
4. 将`ClickMe`按钮的标签从`Button`改为`ClickMe`。

### 自适应屏幕

我们需要选择`UICanvas`游戏对象并找到[`CanvasScaler`](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-CanvasScaler.html)。

1. 将用户界面缩放模式从**Constant Pixel Size**设置为**Scale With Screen Szie**
2. 将**Reference Resolution**从`800x600 `设置为`1080x1920`
3. 设置**Match**从`0`到`1`
4. 调整**ClickMe**按钮的大小，并调整其位置。
5. 设置**ClickMe**按钮的RectTransform锚点为**Bottom**。

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/AdapterScreen.mp4" className="custom-video-showcase" />

## 成为预制构件

将**EventSystem**拖放至`UICanvas`，将**EventSystem**的父节点设置为 `UICanvas`。然后将**UICanvas**从**层次结构中拖放到你的`YOURPROJECT/Artwork/Prefabs`中。

:::info
问：为什么EventSystem要成为UIcanvas的一个子系统？ 
答：因为UGUI需要一个事件系统来接收我们的输入。
:::

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/BecomeAPrefab.mp4" className="custom-video-showcase" />

## 收集资产

1. 打开PackageToolsEditor
2. 切换到**Contents**部分
3. 从`YOURPROJECT/Artwork/Prefabs`拖放**UICanvas**到PackageTools Editor的**Contents**。

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/CollectionAssets.mp4" className="custom-video-showcase" />

## 互動

如[如何加载资产](../how-to-load-assets)部分，双击打开`YOUR PROJECT/Scripts/Runtime/`中的**YOURPROJECTMainEntry.cs**文件。

为它写一些代码。

```cs title="HowToCreateProjectMainEntry.cs" showLineNumbers

using System;
using UnityEngine;
using System.Collections;
using com.Phantoms.ARMODAPI.Runtime;
using com.Phantoms.ActionNotification.Runtime;
using Object = UnityEngine.Object;

namespace HowToCreateProject.Runtime
{
    public class HowToCreateProjectMainEntry
    {
        //ARMOD API
        internal static API ARMODAPI = new API(nameof(HowToCreateProject));

        public async void OnLoad()
        {
            var tmp_ARVirtualObjectPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("VirtualObject");
            Object.Instantiate(tmp_ARVirtualObjectPrefab);

            // highlight-start
            var tmp_UICanvasPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("UICanvas");
            var tmp_UICanvas = Object.Instantiate(tmp_UICanvasPrefab);
            var tmp_ClickMeGo = tmp_UICanvas.transform.Find("ClickMe");
            var tmp_ClickMeBtn = tmp_ClickMeGo.GetComponent<Button>();
            tmp_ClickMeBtn.onClick.AddListener(() => { Debug.Log("Clicked me!!!"); });
            // highlight-end
        }
    }
}
```
**描述** 

1. 第21->22行是加载和实例化我们的UICanvas。
2. 第23行是为了找到我们的**ClickMe**对象。
3. 第24行是为了获得ClickMe游戏对象的**Button**组件。
4. 第25行为按钮的点击添加一个事件回调。

## 建立XR-体验

1. 转到**PackageToolsEditor**。
2. 切换到**Build**部分
3. 选择你需要构建的平台。
4. 点击**Build AR-Experience**按钮，开始构建。

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

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimulatorPlugin.png')} padding="0.5rem" label="Install XRMOD Simulator Plugin"/>

</center>


当你完成安装后，你可以在Unity编辑器的左上角看到一个XR按钮，这主要是用来启动XRMOD引擎模拟器的。

<center>

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimualtorBtn.png')} padding="0.5rem" label="Simulator"/>

</center>

### 启动模拟器

1. 点击左上方的**XR Play**按钮，启动XRMOD引擎模拟器。
2. 切换到**Game**视图
3. 将你的项目名称输入模拟器
4. 点击**Fetch Project**来加载我们的项目

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/Test.mp4" className="custom-video-showcase" />

## 总结

在本节中，我们学习了如何在XRMOD引擎中与UI交互。很明显，这与Unity的工作流程是一致的。但为什么我们没有谈到Unity的另一种工作流程（拖放添加事件）？ 解释如下。


**XRMOD Engien不支持将`自定义MonoBehaviour`拖放至我们的游戏对象中。因此，我们只能通过代码将响应事件添加到按钮中**。

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-interact-with-ui/DonotDragToAddEvent.png')} width="25%" padding="0.5rem" label="Don't do this"/>
</center>

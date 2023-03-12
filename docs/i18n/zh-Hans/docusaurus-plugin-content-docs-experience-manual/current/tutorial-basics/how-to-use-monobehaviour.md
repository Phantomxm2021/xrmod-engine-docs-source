---
title: 如何使用MonoBehaviour
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: Uisng Package Tools Editor to create a XRMOD proejct.
sidebar_position: 4
---
import VideoPlayer from '@site/src/components/VideoPlayer'


我们已经在 **[如何加载资产](../how-to-load-assets)** 和 **[如何与用户界面互动](../how-to-interact-with-ui)**部分学习了如何加载艺术资源和与用户界面互动。接下来我们将使用同一个项目进行创建。

MonoBehaviour是基类，每个Unity脚本都是从它派生出来的。它允许创作者轻松地编写代码来制作互动逻辑。

但是，在XRMOD中，平台（策略）限制导致无法像传统的Unity开发那样将MonoBehaviour拖放到GameObject上。


有一句话说得好：**"物极必反"**，所以我们用另一种方式将MonoBehaviour安装在GameObject上。

这种方法我们称之为[**MonoBinder**](../dev-tools/binding-monobehaviour)。

## 如何做到

首先，我们需要写一个继承自**MonoBehaviour**的类。让我们开始吧!

1. 进入`YOURPROJECT/Script/Runtime`
2. 创建一个**C#Script**类，将其称为`RotateCubeMonoBehaviour`
3. 双击该脚本以打开

```cs title="RotateCubeMonoBehaviour.cs"
using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace HowToCreateProject.Runtime
{
    public class RotateCubeMonobehaviour : MonoBehaviour
    {
        // highlight-start
        private Transform selfTransform;
        private float currentTime;
        // highlight-end

        // highlight-start
        public float timeToDisplay = 5;
        public float RotateSpeed = 5;
        public GameObject ChildGameObject;
        // highlight-end

        private void Start()
        {
            // highlight-next-line
            selfTransform = this.transform;
        }


        private void Update()
        {
            // highlight-start
            if (selfTransform == null) return;

            selfTransform.Rotate(Vector3.up, Time.deltaTime * RotateSpeed);

            currentTime += Time.deltaTime;
            if (currentTime >= timeToDisplay)
            {
                currentTime = 0;
                ChildGameObject.SetActive(true);
            }
            else
            {
                if (ChildGameObject.activeSelf)
                {
                    ChildGameObject.SetActive(false);
                }
            }
            // highlight-end
        }
    }
}
```

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/CreateScript.mp4" className="custom-video-showcase" />

## 原始的物体

当我们完成编辑**RotateCubeMonoBehaviour**后，回到Unity。使用快捷键（Mac: Command+N, Win: Ctrl+N）创建一个新的场景，并在新场景中创建一个[Unity Primitive Objects](https://docs.unity3d.com/Manual/PrimitiveObjects.html)；通过右击`Hierarchy`->`3D Objects`->`Cube`创建一个Cube对象，再次选择Cube，并为其创建一个子对象`Sphere`并调整`scale`和`position`。

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/PrimitiveObjects.mp4" className="custom-video-showcase" />

## 挂载MonoBehaviour

接下来，拖放**RotateCubeMonoBehaviour**来安装**Cube**游戏对象。将**Sphere**的子对象填入**RotateCubeMonoBehaviour**的`Child Game Object`字段。然后将**Sphere**游戏对象的子对象的活动状态设置为`deactivated`。

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/MountAndFilling.mp4" className="custom-video-showcase" />


## 转换并成为预制体

我们已经完成了RotateCubeMonoBehaviour脚本的设置，但是它还没有在XRMOD引擎上运行；所以我们需要进一步配置它。


:::info
转换过程是全自动的，所以创作者不需要手动设置。
:::

1. 选择**Cube**游戏对象
2. 找到**RotateCubeMonoBehaviour**组件。
3. 点击**Convert to MonoBinder**，开始转换过程。
4. 将Cube拖放到`YOURPROJECT`->`Artwork`->`Prefabs`，让它成为一个prefab。

:::caution
目前存在某些限制，[点击这里](.../dev-tools/binding-monobehaviour#limitation)获取更多信息。
:::

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/ConvertAndPrefab.mp4" className="custom-video-showcase" />


## Collection Assets

1. 打开PackageToolsEditor
2. 切换到**Contents**部分
3. 从`YOURPROJECT/Artwork/Prefabs`拖放**Cube**到PackageTools Editor的**Contents**。

<center>

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-use-monobehaviour/CollectionAssets.png')} padding="0.5rem" label="Collection Assets"/>

</center>

## 加载立方体

进入`PROJECT_PATH`->`PROJECT_NAME`->`Scripts`->`Runtime`并打开`PROJECTNAMEMainEntry.cs`文件（通过双击）。

然后在`OnLoad`方法上写一些代码。

:::danger
**ARMODAPI.LoadAssetAsync<GameObject\>("Cube");**对象名称(`Cube`)必须与`PackageToolsEditor`->`Contents`资产名称相同。
:::

```cs title="PROJECTNAMEMainEntry.cs"
using System;
using UnityEngine;
using System.Collections;
using com.Phantoms.ARMODAPI.Runtime;
using com.Phantoms.ActionNotification.Runtime;
using UnityEngine.UI;
using Object = UnityEngine.Object;

namespace HowToCreateProject.Runtime
{
    public class HowToCreateProjectMainEntry
    {
        //XRMOD API        
        internal static API ARMODAPI = new API(nameof(HowToCreateProject));

        public async void OnLoad()
        {
            //Use this for initialization. Please delete the function if it is not used
            var tmp_ARVirtualObjectPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("VirtualObject");
            Object.Instantiate(tmp_ARVirtualObjectPrefab);

            var tmp_UICanvasPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("UICanvas");
            var tmp_UICanvas = Object.Instantiate(tmp_UICanvasPrefab);
            var tmp_ClickMeGo = tmp_UICanvas.transform.Find("ClickMe");
            var tmp_ClickMeBtn = tmp_ClickMeGo.GetComponent<Button>();
            tmp_ClickMeBtn.onClick.AddListener(() => { Debug.Log("Clicked me!!!"); });

            // highlight-start
            var tmp_CubePrefab = await ARMODAPI.LoadAssetAsync<GameObject>("Cube");
            var tmp_Cube = Object.Instantiate(tmp_CubePrefab);
            // highlight-end
        }
    }
}
```


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
[点击这里](.../prepare-for-developer/install-xrmod-dev-tools)来学习如何安装XRMOD引擎工具链。
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

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/Test.mp4" className="custom-video-showcase" />


## 总结

在本节中，我们学习了如何在XRMOD引擎中使用MonoBehaviour。在XRMOD引擎中使用MonoBehaviour只有一个步骤，那就是将MonoBehaviour转换成MonoBinder。

:::danger
众所周知，MonoBinder有一定的局限性，这一点可以在[这里](../dev-tools/binding-monobehaviour#limitation)查阅。
:::
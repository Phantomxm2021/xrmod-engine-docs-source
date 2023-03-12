---
sidebar_position: 3
title: 为XR体验提供新API
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: XRMOD引擎提供了一个在跨平台上实现增强现实功能的解决方案。而且你不需要知道如何用原生代码构建3D内容，当你的应用需要添加新的AR体验时，也不需要重新向应用商店提交。XRMOD引擎有很多AR功能，如寻找平面放置虚拟物体、追踪图像、追踪人脸或多人ar游戏。
---
我们知道，XRMOD引擎分为一个启动器和一个内容包（XR-Experience）。

所以XR-Experience脚本不能直接调用第三方方法或开发者定义的脚本方法。因为这些方法没有提前([AOT](https://docs.unity3d.com/Manual/ScriptingRestrictions.html))生成代码。例如，如果你在应用程序中嵌入了uniwebview，你将无法在XRMOD Experience代码中调用相应的方法来启动浏览器。不过，我们也提供了一种方法。


<center>
<coverimg url={require('@site/static/static/sdk/unity-sdk/custom-method.png')} width="50rem" label="Custom Method" />
</center>


**例子**

```cs
using System;
using UnityEngine;
using System.Collections;
using com.Phantoms.ARMODAPI.Runtime;
using com.Phantoms.ActionNotification.Runtime;
using UnityEngine.Assertions;

namespace APITest.Runtime
{
    public class APITestMainEntry
    {
        //XRMOD API        
        internal static API ARMODAPI = new API(nameof(APITest));

        public async void OnLoad()
        {
            // we can not directly call this method.
            Uniwebview.OpenWebPage("https://phantomsxr.cn");
        }
    }
}
```

## 自定义Bridge

在这里，我们将使用[XRMOD Action Notification](https://www.npmjs.com/package/com.phantomsxr.actionnotification)包来创建一个桥梁。

指南:

1. 将**com.Phantoms.ActionNotification.Runtime**加入你的assembly定义中。

    <center>
    <coverimg url={require('@site/static/static/sdk/unity-sdk/add-reference.png')} width="25rem" label="Add Reference" />
    </center>

    :::caution Add References
    当你使用[Assembly definitions - ASMDEF](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html)时，必须为它添加引用。
    :::

2. 在你的代码中注册该动作。调用**ActionNotificationCenter.DefaultCenter.AddObserver**来创建一个动作

    :::danger
    - 你的脚本必须是**持久的**。你可以为你的类添加**[DontDestroyOnLoad](https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html)**attrbute。
    - **AddObserver**第一个参数是响应动作，第二个参数是动作的键，这个键必须是**全局唯一**。
    :::

    ```cs title=PcxmPage
    namespace Runtime.UI
    {
        using UnityEngine;
        using Runtime.Core;
        using Runtime.Utils;
        using Runtime.Models;
        using Runtime.Config;
        using SDKEntry.Runtime;
        using System.Threading.Tasks;
        using com.phantoms.models.Runtime;
        using UnityEngine.SceneManagement;
        // highlight-next-line
        using com.Phantoms.ActionNotification.Runtime;

        [DontDestroyOnLoad]
        public class PcxmPage : UIBase
        {
            public void OnExitClicked()
            {
                var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
                tmp_SDKEntryPoint.Dispose();
                StartCoroutine(GameEnvironment.Singleton.SceneM.LoadSceneAsync(2));
            }

            private void OnEnable() 
            {
                // highlight-next-line
                ActionNotificationCenter.DefaultCenter.AddObserver(OpenH5Page, "OpenH5");
            }

            // Custom Action for XR-Experience to open webpage using Uniwebview
            // highlight-start
            private void OpenH5Page(BaseNotificationData _data)
            {
                var tmp_data = JsonUtility.FromJson<H5BridgeData>(_data.BaseData);
                Debug.Log(tmp_data.link);
            }
            // highlight-end
        }
    }
    ```

3. XRMOD XR-Experience脚本触发的桥梁。当我们调用PostNotification时必须传递一个[BaseNotificationData](../open-api-pure-csharp/notification-data/BaseNotificationData)。同样**PostNotification**也有两个参数，第一个参数是关键，也就是要执行的动作ID；第二个参数是传送给动作的数据。

    ```cs title=Trigger
    // highlight-start
    ActionNotificationCenter.DefaultCenter.PostNotification("OpenH5", new BaseNotificationData()
    {
        BaseData = "{\"title\":\"PostNotification\", \"link\":\"https://phantomsxr.cn\"}"
    });
    // highlight-end
    ```

    :::caution
    所有已经注册到ActionNotificationCenter的动作将在XRMOD模块关闭后被释放（调用[Dispose](../api-reference/xrmod-api/SdkEntryPoint#dispose)。
    :::

## 总结

虽然我们不能在XR-Experience脚本中直接调用第三方或用户定义的方法，但我们可以通过ActionNotificationCenter来实现。
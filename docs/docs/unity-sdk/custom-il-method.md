---
sidebar_position: 3
title: Custom Methods For XR Experience
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: The XRMOD engine provides a solution for implementing augmented reality functions on the cross platform. And you don't need to know how to build 3D content with native code, and you don't need to resubmit your app to the app store when it needs to add a new AR experience. The XRMOD engine has many AR capabilities, such as finding planes to place virtual objects, tracking images, tracking faces or multiplayer ar games.
---
As we know, XRMOD engine is divided into a launcher and a content package(XR-Experience).

So XR-Experience script cannot directly call third-party methods or developer-defined script methods. Because the methods has no ahead of time ([AOT](https://docs.unity3d.com/Manual/ScriptingRestrictions.html)) code was generated. For example, if you have embedded uniwebview in your application, you will not be able to call the appropriate method in the XRMOD Experience code to launch the browser. However, we also provide a way to do this.


<center>
<coverimg url={require('../../static/static/sdk/unity-sdk/custom-method.png')} width="50rem" label="Custom Method" />
</center>


**Example**

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
        //ARMOD API        
        internal static API ARMODAPI = new API(nameof(APITest));

        public async void OnLoad()
        {
            // we can not directly call this method.
            Uniwebview.OpenWebPage("https://phantomsxr.cn");
        }
    }
}
```

## Custom Bridge

In here we will using [XRMOD Action Notification](https://www.npmjs.com/package/com.phantomsxr.actionnotification) package to create a bridge.

Guides:

1. Add **com.Phantoms.ActionNotification.Runtime** to your ssembly definitions

    <center>
    <coverimg url={require('../../static/static/sdk/unity-sdk/add-reference.png')} width="25rem" label="Add Reference" />
    </center>

    :::caution Add References
    When you use [Assembly definitions - ASMDEF](https://docs.unity3d.com/Manual/ScriptCompilationAssemblyDefinitionFiles.html) must add the references for it.
    :::

2. Register the action in your code. Calling **ActionNotificationCenter.DefaultCenter.AddObserver** to create an action

    :::danger
    - Your script must be **persistent**. You can add **[DontDestroyOnLoad](https://docs.unity3d.com/ScriptReference/Object.DontDestroyOnLoad.html)** attrbute for your class.
    - **AddObserver** the first parameter is the response Action, the second parameter is the key of the Action, the key must be **globally unique**.
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

3. XRMOD XR-Experience scripting trigger the bridge. When we call PostNotification must passing a [BaseNotificationData](../open-api-pure-csharp/notification-data/BaseNotificationData). Similarly **PostNotification** also has two parameters, the first parameter is the key, that is, the action id to be executed; the second parameter is the data transmitted to the action.

    ```cs title=Trigger
    // highlight-start
    ActionNotificationCenter.DefaultCenter.PostNotification("OpenH5", new BaseNotificationData()
    {
        BaseData = "{\"title\":\"PostNotification\", \"link\":\"https://phantomsxr.cn\"}"
    });
    // highlight-end
    ```

    :::caution
    All actions that have been registered to the ActionNotificationCenter will be released after the XRMOD module is closed(Calling [Dispose](./api-reference/xrmod-api/SdkEntryPoint#dispose)).
    :::

## Summary

Although we cannot call third-party or user-defined methods directly in XR-Experience scripts, we can do so through ActionNotificationCenter.
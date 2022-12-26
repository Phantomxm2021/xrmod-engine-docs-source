---
title: How To Interact With UI
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

In [How to load assets](./how-to-load-assets) section, we leaned how to load art assets via CSharp scripting.In this section, we will continue using the project from the previous section. And discuss how to use UGUI in XRMOD Engine.

## Build Interface

1. Right-click on **Hierarchy** panel
2. Select `UI`->`Button-TextMeshPro` to create a new UGUI interface and rename the button to `ClickMe`
3. Rename the `ClickMe` button's parent(--Canvas) to `UICanvas`
4. Set the `ClickMe` button's label from `Button` to `ClickMe`

### Adaptive screen

we need to select the `UICanvas` game object and find [`CanvasScaler`](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/script-CanvasScaler.html).

1. Set UI Scale Mode from **Constant Pixel Size** to **Scale With Screen Szie**
2. Set **Reference Resolution** from `800x600 ` to `1080x1920`
3. Set **Match** from `0` to `1`
4. Resize the **ClickMe** button and and adjust the position
5. Set the **ClickMe** button RectTransform anchor to **Bottom**

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/AdapterScreen.mp4" className="custom-video-showcase" />

## Become A Prefab

Drag-and-drop **EventSystem** to `UICanvas`, set the parent node of **EventSystem** to `UICanvas`. Then drag-and-drop **UICanvas** from **Hierarchy** to your `YOURPROJECT/Artwork/Prefabs`

:::info
Q: Why should EventSystem be a child of UIcanvas?  
A: Because UGUI need an EventSystem to recived our input
:::

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/BecomeAPrefab.mp4" className="custom-video-showcase" />

## Collection Assets

1. Open PackageToolsEditor
2. Switch to **Contents** section
3. Drag-and-drop **UICanvas** from `YOURPROJECT/Artwork/Prefabs` to **Contents** of PackageTools Editor

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/CollectionAssets.mp4" className="custom-video-showcase" />

## Interact

As in the [How to load assets](./how-to-load-assets) section, double-click to open the **YOURPROJECTMainEntry.cs** file in `YOUR PROJECT/Scripts/Runtime/`.

Write some code for it.

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
**Description** 

1. Lines 21->22 of the code above are loading and instantiating our UICanvas, 
2. Line 23 is for finding our **ClickMe** object,
3. Line 24 is to get the **Button** component of our ClickMe game object
4. Line 25 adds an event callback for the button click

## Build XR-Experience

1. Go to **PackageToolsEditor** 
2. Switch to **Build** section
3. Select the platform you need to build.
4. Click the **Build AR-Experience** button to start the build

:::danger
**Build Platform** and **Platform Group** The two selected platforms must be the same.
:::

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/BuildXRExperience.mp4" className="custom-video-showcase" />


## Testing

Now we have done all the work, but we don't know if the content loads properly yet, so we need to test further to verify our results.

**How to testing**?

XRMOD Engine currently provides processes such as loading tests within the Unity Editor, so we can verify all logic from within the Unity Editor. Before we can start testing we need to install the XRMOD Engine Simulator plugin via the Unity Package Manager.

:::info
[Click here](../prepare-for-developer/install-xrmod-dev-tools) to learn how to install the XRMOD engine toolchain.
:::

In here, we need to install XRMOD Engine Simulator plugin. 

<center>

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimulatorPlugin.png')} padding="0.5rem" label="Install XRMOD Simulator Plugin"/>

</center>


When you finish the installation you can see an XR button in the top left corner of the Unity editor, which is mainly used to start the XRMOD Engine emulator.

<center>

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimualtorBtn.png')} padding="0.5rem" label="Simulator"/>

</center>

### Launch Simulator

1. Click left-top **XR Play** button to launch XRMOD Engine simulator
2. Switch to **Game** view
3. Typing your project name into simulator
4. Click **Fetch Project** to loading our project

<VideoPlayer src="/static/tutorial-basics/how-to-interact-with-ui/Test.mp4" className="custom-video-showcase" />

## Summary

In this section we learned how to interact with UI in XRMOD Engine. It is clear that it is consistent with Unity's workflow. But why haven't we talked about a different kind of workflow(Drag and drop to add events) for Unity？The explanation is as follows:



**XRMOD Engien does not support drag and drop of `custom MonoBehaviour` into our game objects. So we can only add response events to the Button by means of code.** 

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-interact-with-ui/DonotDragToAddEvent.png')} width="25%" padding="0.5rem" label="Don't do this"/>
</center>

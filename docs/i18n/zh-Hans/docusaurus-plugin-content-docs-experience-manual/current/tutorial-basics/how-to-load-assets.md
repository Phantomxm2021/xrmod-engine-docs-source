---
title: How To Load Assets
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

The XRMOD engine allows creators to load custom assets via CSharp scripts or visual scripts.

**But, how should we do that?**

:::danger
You must install [Unity Engine](../prepare-for-developer/install-unityengine) and [Dev-environment](../prepare-for-developer/install-dev-environment).
:::

At the first, we need to create a XRMOD project([How to create](../tutorial-basics/how-create-xrmod-project)).

:::info
How to find XRMOD project after created?  
[click here](../dev-tools/package-tools#project-editing) to know more
:::

## Collection Assets

Creative can import their own art assets or use Unity builtin assets([Primitive Objects](https://docs.unity3d.com/Manual/PrimitiveObjects.html)).

:::info
[click here](https://docs.unity3d.com/Manual/ImportingAssets.html) to know about Unity how to import assets.
:::

Follows Steps:

1. Import your art assets into `Your Project/Artwork` folder
2. Create a new folder and name it to `Prefabs`. This folder will be used to store the project's prefabs
3. Drag-and-drop art asset into **Unity Scene** or **Hierarchy**
4. Processing your art assets, e.g. Rendering of models, mapping, scale, etc
5. Drag-and-drop your art asset from **Unity Scene** or **Hierarch** to `Your Project/Artwork/Prefabs` folder, it will become a [prefab](https://docs.unity3d.com/Manual/Prefabs.html)
6. Drag-and-drop your prefab of art work to **PackageToolsEditor**->**Contents**

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/MakePrefab.mp4" className="custom-video-showcase" />

## Editing Script

Go to `PROJECT_PATH`->`PROJECT_NAME`->`Scripts`->`Runtime` and open `PROJECTNAMEMainEntry.cs` file(By double-clicking).

Then write some code on `OnLoad` meethod.

:::danger
**ARMODAPI.LoadAssetAsync<GameObject\>("VirtualObject");** The object name(`VirtualObject`) must be the same as in `PackageToolsEditor`->`Contents` assets name.
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

We use [`LoadAssetAsync`](../../open-api-pure-csharp/utility-api/LoadAssetAsync) to load our virtual objects from the XR-Experience package by asset name and type. Because the `LoadAssetAsync` method loads the asset from disk to memory, it does not instantiate the asset, so we need to call `Instantiate` method to instantiate it.

## Programmable Block

1. Go to **PackageToolsEditor**
2. Switch to **Properties** section
3. Move your mouse point to free area
4. Right click your mouse button
5. Select `Programmable`

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/AddProgrammableBlock.mp4" className="custom-video-showcase" />

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

<coverimg url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimulatorPlugin.png')} padding="0.5rem" label="Install XRMOD Simulator Plugin"/>

</center>

When you finish the installation you can see an XR button in the top left corner of the Unity editor, which is mainly used to start the XRMOD Engine emulator.

<center>

<coverimg url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimualtorBtn.png')} padding="0.5rem" label="Simulator"/>

</center>

### Launch Simulator

1. Click left-top **XR Play** button to launch XRMOD Engine simulator
2. Switch to **Game** view
3. Typing your project name into simulator
4. Click **Fetch Project** to loading our project

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/Test.mp4" className="custom-video-showcase" />

## Summary

In this section we learned how to load an assets in XRMOD Engine. During the loading process we need to pay attention to the following:

1. Loading asset via `ARMODAPI.LoadAssetAsync` methods
2. `ARMODAPI.LoadAssetAsync` needs to pass in the type to be loaded and the name of the item to be loaded
3. `ARMODAPI.LoadAssetAsync` is an asynchronous method that needs to be marked as async in the function and add `await` before the `ARMODAPI.LoadAssetAsync` method
4. The name of the object loaded in the API must be the same as the name of the assets in `PackageToolsEditor`->`Contents`

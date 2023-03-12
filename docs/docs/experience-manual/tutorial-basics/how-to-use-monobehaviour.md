---
title: How To Use MonoBehaviour
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: Uisng Package Tools Editor to create a XRMOD proejct.
sidebar_position: 4
---
import VideoPlayer from '@site/src/components/VideoPlayer'


We have learned how to load art resources and interact with the UI in the **[How To Load Assets](./how-to-load-assets)** and **[How To Interact With UI](./how-to-interact-with-ui)** sections. Next we will use the same project for creation.

MonoBehaviour is the base class from which every Unity script derives. It allows creatives to easily write code for making interactive logic.

But. In XRMOD the platform (policy) restrictions lead to the inability to drag and drop MonoBehaviour onto the GameObject as in traditional Unity development.


There is a sayingIn other words well:**"In the end thing will mend"**, so we use another way to mount MonoBehaviour on GameObject.

This approach we call [**MonoBinder**](../dev-tools/binding-monobehaviour). 

## How To Do

At the first, we need to write a class that inherits from **MonoBehaviour**. Let's do it!

1. Go to `YOURPROJECT/Script/Runtime`
2. Create a **C# Script** class and call it `RotateCubeMonoBehaviour`
3. Double-click on the script to open

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

## Primitive Objects

When we are done editing **RotateCubeMonoBehaviour**, back to Unity. Use the shortcut keys (Mac: Command+N, Win: Ctrl+N) to create a new scene and create an [Unity Primitive Objects](https://docs.unity3d.com/Manual/PrimitiveObjects.html) in the new scene; create a Cube object by right-click `Hierarchy`->`3D Objects`->`Cube` , select the Cube again, and create a child object for it `Sphere` and adjust the `scale` and `position`.

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/PrimitiveObjects.mp4" className="custom-video-showcase" />

## Mounting MonoBehaviour

Next, drag and drop the **RotateCubeMonoBehaviour** to mount the **Cube** game object. Filling the child of **Shpere** into `Child Game Object` field of **RotateCubeMonoBehaviour**. Then set the active state of the child objects of the **Sphere** game object to `deactivated`.

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/MountAndFilling.mp4" className="custom-video-showcase" />


## Convert And Become A Prefab

We have finished setting up the RotateCubeMonoBehaviour script, but it doesn't run on the XRMOD Engine yet; so we need to configure it further.


:::info
The conversion process is fully automatic, so there is no need for the creator to set it up manually.
:::

1. Select **Cube** game object
2. Find **RotateCubeMonoBehaviour** component
3. Click **Convert to MonoBinder** to start the conversion process
4. Drag-and-drop Cube to `YOURPROJECT`->`Artwork`->`Prefabs`, let it become a prefab

:::caution
Certain restrictions currently exist, [click here](../dev-tools/binding-monobehaviour#limitation) for more information.
:::

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/ConvertAndPrefab.mp4" className="custom-video-showcase" />


## Collection Assets

1. Open PackageToolsEditor
2. Switch to **Contents** section
3. Drag-and-drop **Cube** from `YOURPROJECT/Artwork/Prefabs` to **Contents** of PackageTools Editor

<center>

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-use-monobehaviour/CollectionAssets.png')} padding="0.5rem" label="Collection Assets"/>

</center>

## Loading Cube

Go to `PROJECT_PATH`->`PROJECT_NAME`->`Scripts`->`Runtime` and open `PROJECTNAMEMainEntry.cs` file(By double-clicking).

Then write some code on `OnLoad` meethod.

:::danger
**ARMODAPI.LoadAssetAsync<GameObject\>("Cube");** The object name(`Cube`) must be the same as in `PackageToolsEditor`->`Contents` assets name.
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

<VideoPlayer src="/static/tutorial-basics/how-to-use-monobehaviour/Test.mp4" className="custom-video-showcase" />


## Summary

In this section we learned how to use MonoBehaviour in XRMOD Engine. Using MonoBehaviour in XRMOD Engine has only one more step, which is to convert MonoBehaviour to MonoBinder.

:::danger
It is also known that MonoBinder has certain limitations, which can be reviewed [here](../dev-tools/binding-monobehaviour#limitation).
:::
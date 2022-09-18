---
title: Create An AR World Experience
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: Cloning the Earth using AR technology
sidebar_position: 9
---

## Introduction

In the last article we have created the first XR-mod experience, in this section we will create an AR world experience from **zero to one**.

### What is the AR World?

In short, the AR world is a virtual world, or call it the earth Clone Project. We use computer technology to clone the earth and digitize all the physical objects on the earth. Then the digital the earth is matched one-to-one with the real the earth. We can see the enhancement of the digital earth to the real the earth through XR headset.

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/arworld.jpg')} label="The AR World layers"/>

We are in the pre-change phase, so cloning the entire the earth is difficult for us. Although we cannot clone the whole earth, we can clone a small part of it, such as buildings, shopping areas, parks, and landmarks.

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/landmark.png')} label="Copyright @Snapchat, AR World of landmark"/>

---

## Prepare

### Tools

Before starting to create AR experiences, the following software and development kits must be installed:

<table>
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

</table>

:::info

#### How do I get a development kit?

- You can read [this article](../prepare-for-developer/install-xrmod-dev-tools) to install it!

#### How to create a Unity project?

- You can read [this article](../prepare-for-developer/install-unityengine#extras) to create it!
:::

### Mapping Physical World

:::tip
If you don't know how to mapping the world, you can click [here](../tutorial-basics/how-to-mapping-the-world) to read more.
:::

---

## Create An XRMOD Project

### Introduction

Before starting to create, you need to understand the XR-MOD project directory structure. When we use PackageTools to create the structure as follows:

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
| ARWorldCase        | Project name for the XR-MOD project                                                                                                                                                      |
| Artwork            | Store and manage art resources, you can create subfolders for classified management                                                                                                      |
| AutomaticGenerated | When building the package body, such as MOD dll, AR function configuration files, etc. are automatically generated and are necessary configurations                                      |
| Configures         | Automatically created when the project is created to cache the configuration of the AR function. After the project is created, it cannot be deleted, otherwise an error will be reported |
| Scripts            | The location where all the code of the project is stored                                                                                                                                 |
| Editor             | It is only used in the Unity Editor, generally stores auxiliary resource scripts such as the quick configuration panel of the project, and does not participate in runtime construction  |
| Runtime            | Stores the runtime code of AR projects, more scripts can be created to implement more interesting logic                                                                                  |

:::caution
XR-MOD will not automatically load the resources in the AR experience package, and the script needs to load it by itself
:::

### Start Creating

Through the previous introduction and preparation, we have a clear understanding of XRMOD Engine, and then we will lead you to create the first XRMOD Engine project. First, we open the XRMOD Engine project builder through `Tools`->`XRMOD`->`Package Tools Editor`, as shown in the following figure.

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} label="Open Package Tools Editor"/>

:::tip
If you don't know how to use Package Tools Editor, please [click here](../dev-tools/package-tools) to check.
:::

1. Create a project by right-clicking in the `project area` and selecting `New Project` from the popup menu
2. At this point, another interface will pop up, as shown in the following figure.
3. Select the `BLANK` template to create, then typing the `project name` and `project storage location` on the right
4. Click the `CREATE` button in the lower right corner to start creating the project

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-select-template.png')} label="Create Blank Project"/>

### Import Assets

- **Art Assets**  
  Import your own art resources and store them in the `Artwork` folder.
- **Map Data**  
  Download the mapp data from our cloud, then import to our XRMOD project; Put it to `Artwork/Mapdata`.

<coverimg url={require('@site/static/static/tutorial-basics/ar-world/tutor-basics-import-assets.png')}/>

:::info
If you don't have a `Mapdata` folder in your project, you have to create one yourself.
:::

### Create ARMap Visualizer

:::danger
If your compture is Apple Slicon version,you can't saw the ARMap Visualizer. Because our framework does not currently support Apple Slicon, we will release a supported version in the next quarter.
:::

import VideoPlayer from '@site/src/components/VideoPlayer'

1. Create a new scene;
2. In `Hierachy` to create a new `Empty GameObject` and rename to `ARMap`;
3. Script for adding a new `ARMap` component via the `AddComponent` button. When the script is added, we will automatically create an ARSpace for the ARMap and set the ARMap as a child node of the ARSpace;
4. Drag and drop our map data into the `MapFile` field of the `ARMap` script;
5. Drag the ARSpace in the scene to the Artwork/Prefabs folder of the XRMOD Project in the Unity Project Panel to make it a Prefab.

:::tip
We recommend that creatives create a new scene to build the ARMap.
:::

<VideoPlayer src="/static/videos/tutorials/arworld/CreateARMap.mp4" className="custom-video-showcase" />

### Align Virtual Object

:::danger
If your compture is Apple Slicon version,you can't saw the ARMap Visualizer. Because our framework does not currently support Apple Slicon, we will release a supported version in the next quarter.
:::

Now we pair the virtual object with our point cloud data.

1. Drag and drop virtual objects into the Scene
2. Expand ARSpace to see ARMap GameObject; place the virtual object inside ARMap GameObject, which becomes ARMap sub-object.
3. Adjust the position of the virtual object to align with our point cloud for the position (you can align it as you like over here).

<VideoPlayer src="/static/videos/tutorials/arworld/AlignVirtualObject.mp4" className="custom-video-showcase" />

The virtual object is now aligned with the point cloud so that we can see the virtual object appear at the specified location once we recognize the collected space.

Finally save our Prefab edit results by selecting `ARSpace` -> `Inspector` -> `Overrider` -> `Apply All`.

### Localizer Event

:::danger
If your compture is Apple Slicon version,you can't saw the ARMap Visualizer. Because our framework does not currently support Apple Slicon, we will release a supported version in the next quarter.
:::

Currently as soon as the ARMap is loaded, our virtual objects are shown, which is obviously not the effect we expect. The correct effect should be to recognize the space and then show the virtual object.

**And how should I do it? Do I need to write code?**

We don't need to write code, we just need to set the active state of the ARMap sub-object (our virtual object) to False.

Select ARMap and find ARMap component in `Inspector`, find Event in ARMap component click `+` in the lower right corner to add a reference slot, drag and drop `our virtual object` into it, then select `Function`, function set to `GameObject/SetActive` and set its value to `True`.

Then set our `virtual object Active` to `False`.

Finally we need to save the results of our Prefab edits, which can be done by **selecting ARSapce GameObject** in the **Inspector** and choosing `Overrider-> Apply All`.

<VideoPlayer src="/static/videos/tutorials/arworld/LocalizerEvent.mp4" className="custom-video-showcase" />

---

## Configuration experience

In the previous step we have already created all the necessary resources, next start the configuration, set XR-MOD Project Properties:

1. Set the `Device Type` of `XR Algorithm` to `Handheld AR`
2. set `XR Algorithm` to `Immersal`
3. Add `Programmable`
4. Keep all default

:::info
To learn more about attribute feature blocks, please see the following links:

- [Version Checker](../../experience-manual/arblock/version-check-block)
- [AR World Scale](../../experience-manual/arblock/features#arworld-scale-block)
- [Immersal](../../experience-manual/arblock/features#immersal-setting)
- [Programmable](../../experience-manual/arblock/programmable-block)

:::

<VideoPlayer src="/static/videos/tutorials/arworld/SetupConfigure.mp4" className="custom-video-showcase" />

---

## Collection Objects

All configurations have been completed. Go to the `Contents` section, then go to `Prefabs`folder and drag-and-drop `ARSpace`Prefab to `Contents`area.

<VideoPlayer src="/static/videos/tutorials/arworld/DADContents.mp4" className="custom-video-showcase" />

## Loading Asset At Runtime

With the above introduction, we know that XR-MOD will not automatically load our resources; next let's write a simple script to implement it.

:::tip
XRMOD provides both C# and visual scripting, and you can choose either one for implementation.
:::

Double click through `YOUR_PROJECT`->`Scripts`->`Runtime`->`YOUR_PROJECTMainEntry.cs` to open our script.

- Then add two lines of code inside the script's `OnLoad` function.
- Comment out any functions that you don't need to use first.

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
Name can be set according to preference
:::

Create a visual scripting graph(`SciptGraph`) into your project's `Scripting/Runtime` folder and rename it to `ARWorldVS`.

<VideoPlayer src="/static/videos/tutorials/arworld/CreateVS.mp4" className="custom-video-showcase" />

Now let's implement the logic of the visualization script.

- Add `ARMOD API` node to the visual canvas
- Typing your name of project in the `ProjectName` field of the `ARMOD API` node
- Add `Load Assets(Async)` node to the visual canvas
- Typing the name of the game object you want to load to the `Name` field of the `Load Assets(Aysnc)` node
- Connection `ARMOD API` to `Load Assets(Async)`
- Add `On Start` node to the visual canvas
- Connection `On Start` to `ARMOD API`
- Select the `On Start` node and set `Coroutine` to `True` on the left side panel

:::danger
Load Assets(Async) node must use coroutine to start it.
:::

<VideoPlayer src="/static/videos/tutorials/arworld/WriteVS.mp4" className="custom-video-showcase" />

**Visual Scripting GameObject**

- Then create an empty gameobject in the `Hierarchy` and rename to `ARWorldVS`
- Add `Script Machine` component to your gameobject via `AddComponent` button
- Drag-and-drop your visual scripting graph file into `Graph` field of the `Script Machine` component
- Drag your visual scripting gameobject into project panel to make it Prefab
- Drag your visual scripting gameobject prefab to `PackageToolsEditor`->`Contents` section

**Visual Scripting Entry**

- Open PackageToolsEditor and editing your XRMOD project
- Typing your VisualScripting game object name into `Main Visual Scripting` field
- Swtich to `Properties` section
- Find the `Programmable` block
- Set `Programmable Type` block of the `Programmable` from `CSharp` to `VisualScripting`

:::danger
VisualScripting gameobject name must be the same as the name in `Contents` section
:::

<VideoPlayer src="/static/videos/tutorials/arworld/SetVS.mp4" className="custom-video-showcase" />

</TabItem>

</Tabs>

---

## Build

Now that we have all the configuration done, next we need to build it into an experience package.

- Create new scene with short-key `Ctrl+N` or `Command+N`, we don't save the current scene
- Switch to `Build` section
- Set the `build platform` and `platform group` and `compression format` according to your desired platform
- Click `Build AR-Experience` button to trigger build process

:::danger
Build Platform and Platform Group must be consistent, otherwise an error will occur.
:::

<VideoPlayer src="/static/videos/tutorials/arworld/Build.mp4" className="custom-video-showcase" />

---

## Deploy

Our sdk provide many plans. Broadly divided into two categories:

- Online plans
- Offline plans

The process of deploying XR experience for these two plans is different, and we will explain the different deployment modes in the two models below.

<Tabs defaultValue='ol' values={[
{label:"Online Plan",value:"ol"},
{label:"Offline Plan",value:"of"},
]}>

<TabItem value="ol">

The online plan is relatively simple, just go to the XRMOD Cloud back office and login to your account to deploy.

- Create a new App if app don't exist
- Create a new Project if project don't exist
- Upload your XR-Experience package to your desired platform
- Click the `Show in file browser` button to go to the XR experience package directory after your XRMOD project build.You will see the following files:

|Name|Type|Description|
|---|---|---|
|focusexample.arexperience|arexperience|All experience inculded, e.g. 3DModels,Textures,Scripts|
|focusexample.json|json|ARExperience file detail and all contents information|
|buildlogtep.json|json|Build detail|

We just need to upload `YOUR_PROJECT_NAME.arexperience` and `YOUR_PROJECT_NAME.json` files. `build.json` is the project build log file, so we do not upload it.

:::info
`desired platform` means the platform you choose when [building](#build).  
Now you can upload your build assets to the XRMOD cloud.To learn more about XRMOD Cloud [click here](../dev-tools/dashboard) for more information.
:::

</TabItem>

<TabItem value="of">

As the name suggests, the offline plan cannot be loaded using the network, so we need to put the XR-Experience package inside the APP package.
Here we have specified a specific directory:

| Platform | Path                                              |
| -------- | ------------------------------------------------- |
| Android  | "jar:file://" + Application.dataPath + "!/assets" |
| iOS      | Application.dataPath + "/Raw"                     |
| Unity    | StreammingAssets/PLATFORM/PROJECT/                |

We need to copy all the contents of the platform folder to the corresponding path in the table above.

:::tip
**Where can I found the XR-Experience package?**
Go to `Build` Section and click `Show in file browser` button, you will see them.
:::

</TabItem>

</Tabs>

---
title: Create First ARExperience
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,metaverse,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: create your first xr(ar/vr/mr) experience case with xrmod engine
sidebar_position: 1
---

## Introduction 

This article will Introduction  the AR experience of IKEA Place furniture placement in Focus SLAM mode. Focus SLAM is a focused SLAM algorithm that places the AR virtual body on the position of the indicator.

---

## Prepare

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
You can read [this article](../prepare-for-developer/install-xrmod-dev-tools) to install it!

### How to create a Unity project?
You can read [this article](../prepare-for-developer/install-unityengine#extras) to create it!
:::

---

## Create an XRMOD project

Before starting to create, you need to understand the XR-MOD project directory structure. When we use PackageTools to create the structure as follows:

```txt
FocusExample
    ├─Artwork      
    ├─AutomaticGenerated    
    ├─Configures
    └─Scripts
      ├─Editor
      └─Runtime
```

|Name|Describe|
|---|---|
|FocusExample|Project name for the XR-MOD project|
|Artwork|Store and manage art resources, you can create subfolders for classified management|
|AutomaticGenerated|When building the package body, such as MOD dll, AR function configuration files, etc. are automatically generated and are necessary configurations|
|Configures|Automatically created when the project is created to cache the configuration of the AR function. After the project is created, it cannot be deleted, otherwise an error will be reported|
|Scripts|The location where all the code of the project is stored|
|Editor|It is only used in the Unity Editor, generally stores auxiliary resource scripts such as the quick configuration panel of the project, and does not participate in runtime construction|
|Runtime|Stores the runtime code of AR projects, more scripts can be created to implement more interesting logic|

:::caution
XR-MOD will not automatically load the resources in the AR experience package, and the script needs to load it by itself
:::

### Start Creating

Through the previous introduction and preparation, we have a clear understanding of XRMOD Engine, and then we will lead you to create the first XRMOD Engine project. First, we open the XRMOD Engine project builder through `Tools`->`XRMOD`->`Package Tools Editor`, as shown in the following figure.

<coverimg url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} />

:::tip
If you don't know how to use Package Tools Editor, please [click here](../dev-tools/package-tools) to check.
:::

1. Create a project by right-clicking in the `project area` and selecting `New Project` from the popup menu
2. At this point, another interface will pop up, as shown in the following figure.
3. Select the `IKEA STYLE` template to create, then enter the project name and project storage location on the left
4. Click the `CREATE` button in the lower right corner to start creating the project

<coverimg url={require('@site/static/static/tutorial-basics/tutor-basics-template-select.png')} fit='scale-down' height="30rem"/>

After waiting for the project to be created, we click `Build` in the right interface of the creator to build our XR project experience content package, as shown in the following figure.

:::caution
Build Platform and Platform Group must be consistent, otherwise an error will occur.
:::

<coverimg url={require('@site/static/static/tutorial-basics/tutor-basics-template-build.png')} />

---

## Deploy

Click the `Show in file browser` button to go to the XR experience package directory after your XRMOD project build.You will see the following files:

|Name|Type|Description|
|---|---|---|
|focusexample.arexperience|arexperience|All experience inculded, e.g. 3DModels,Textures,Scripts|
|focusexample.json|json|ARExperience file detail and all contents information|
|buildlogtep.json|json|Build detail|


<coverimg url={require('@site/static/static/tutorial-basics/tutor-basics-template-result.png')} fit="contain" />

We just need to upload `YOUR_PROJECT_NAME.arexperience` and `YOUR_PROJECT_NAME.json` files. `build.json` is the project build log file, so we do not upload it.

Now you can upload your build assets to the XRMOD cloud.To learn more about XRMOD Cloud [click here](../dev-tools/dashboard) for more information.
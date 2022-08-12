---
title: Install XR-Dev Environment
sidebar_position: 2
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,metaverse,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: using Unity engine to create our XR Experience contents.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<coverimg url={require('@site/static/static/prepare-for-developer/install-dev-environment.jpg')} height="25rem"/>


## Installation

In the previous chapter, we have installed Unity and created a Unity project. Next, we need to install the XRMOD development kit. Before the project starts, we need to install the XRMOD Kit using the `Unity Package Manager` .


### Add Registries

1. Open Unity Editor and create an URP project
2. Set the `Unity Package Manager` registries through `Edit`->`ProjectSetting`->`Package Manager`
4. Typing inthe form below in `Package Manager`->`Scoped Registries`, checked the `enable Preview Packages` and `Enable Pre-release Packages`, then click Apply to save your setings.

|Name|URL|Scope(s)|
|---|---|---|
|PhantomsXR|	https://registry.npmjs.org	|com.phantomsxr|

<coverimg  url={require('@site/static/static/prepare-for-developer/unity-package-registries-setup.png')}/>



:::tip
Try to install the recommended version.  
**How to get recommened version**?  
Click the small triangle(▶️) on the left to expand it.
:::

5. Open the `Unity Package Manager` via `Window` > `Package Manager` in the top menu bar
6. Switch the `registry` to `My Registries` again and you will see all development packages.


<coverimg  url={require('@site/static/static/prepare-for-developer/unity-swtich-registries.jpg')}/>

### Install packages

Initialize our Unity project by installing `XRMOD Engine Settings`, and then install the corresponding Package according to the platform you need to develop.


<coverimg  url={require('@site/static/static/prepare-for-developer/unity-install-packages.png')}/>


:::tips
Here is an example of handheldAR:
1. Install `XRMOD Engine SEtgings`
2. Install `HandHeldAR` and `XRMOD IL Core`
:::

Everything is ready, we use the shortcut keys (**Mac**: *Command+Shift+B*; **Win**: Ctrl+Shift+B) to open the Build Settings panel and change to the platform we need.

<coverimg url={require('@site/static/static/sdk/unity-sdk/switch-platform.png')} fit="scale-down" height="25rem" label="Switch Platform"/>

Get the basic development environment by reading [the XR Experience Content Development Kit Installation article](./install-xrmod-dev-tools). Since we need to combine XRMOD Engine with Unity to develop a new APP, We need to install some required packages.


<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest2",value:"quest2"},
    {label:"PicoNeo3",value:"piconeo3"},
    {label:"WebXR",value:"webar"},
    {label:"Web3D",value:"web3d"},
    {label:"Classic3D",value:"classic3d"},
]}>

<TabItem value="handheldar">

- com.phantomsxr.xrmodenginesettings
- com.phantomsxr.xrmod.handheldar
- com.phantomsxr.ilcore
- com.phantomsxr.foundation
- com.phantomsxr.armodsimulator

:::tip
How to check the package name?
<coverimg url={require('@site/static/static/sdk/unity-sdk/package-name.png')} height="25rem"/>
:::

</TabItem>


</Tabs>

:::info
There may be some pop-ups during the installation process, and we need to do some manual operations.

<coverimg url={require('@site/static/static/sdk/unity-sdk/inputsystem.png')} width="50%"/>

The default input system for Unity projects is the old input system, but since we will be using the New Input System for our XRI, Unity will pop up a confirmation window for you to confirm.

If you select `Yes` your Unity will be `restarted`, here we can select `No` to restart `manually` later

<coverimg url={require('@site/static/static/sdk/unity-sdk/xri-api-upgrade.png')} width="50%"/>

This proiect may contain an obsolete method to validate interactions between XR Interactors and Interactables. This Update is only required for older projects updating the XR Interaction Toolkit dackage. It this dackage was newly installed please cancel this operation.

Here we select `Go Ahead` and that's it.
:::

## Initialization

After the installation is complete, open the `Edit`->`Project Settings`->`PhantomsXR`->`XR-MOD Engine SDK Settings` in the menu bar at the top of Unity to initialize our project configuration, as shown in the following figure. After completing this step, we can start developing AR-APP.

<coverimg url={require('@site/static/static/sdk/unity-sdk/xrmod-init.png')} height="25rem" />


Configure your project according to the following platform.

<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest2",value:"quest2"},
    {label:"PicoNeo3",value:"piconeo3"},
    {label:"WebXR",value:"webar"},
    {label:"Web3D",value:"web3d"},
    {label:"Classic3D",value:"classic3d"},
]}>

<TabItem value="handheldar">

Now you can see a new settings view appear; Set up according to the order of the pictures below:

<coverimg url={require('@site/static/static/sdk/unity-sdk/xrmod-settings.png')}/>

</TabItem>


</Tabs>


:::tip
If a ❌ appears in the [5] area you will see the **Fix** button behind it, click on it to fix it.
:::

:::danger
- Don't forget to click **Apply** button to save your configuration.
- Make sure that all options in area 5 are ✅ status
:::

Once all the configuration is done, we are ready to develop the content. Click [here](../tutorial-basics/create-first-arexperience) to learn how to develop your first XR Experience content.


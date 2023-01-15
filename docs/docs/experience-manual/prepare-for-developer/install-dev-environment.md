---
title: Install XR-Dev Environment
sidebar_position: 3
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: using Unity engine to create our XR Experience contents.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<coverimg url={require('@site/static/static/prepare-for-developer/install-dev-environment.jpg')} height="25rem"/>


## Installation


Get the basic development environment by reading [the XR Experience Content Development Kit Installation article](./install-xrmod-dev-tools). Since we need to combine XRMOD Engine with Unity to develop a new APP or XR-Experience content, We need to install some required packages.

Everything is ready, we use the shortcut keys (**Mac**: *Command+Shift+B*; **Win**: Ctrl+Shift+B) to open the Build Settings panel and change to the platform we need.

<coverimg url={require('@site/static/static/sdk/unity-sdk/switch-platform.png')} fit="scale-down" height="25rem" label="Switch Platform"/>


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

<coverimg url={require('@site/static/static/sdk/unity-sdk/xri-api-upgrade.jpg')} width="50%"/>

This proiect may contain an obsolete method to validate interactions between XR Interactors and Interactables. This Update is only required for older projects updating the XR Interaction Toolkit dackage. It this dackage was newly installed please cancel this operation.

Here we select `Go Ahead` and that's it.
:::

## Initialization

After the installation is complete, open the `Edit`->`Project Settings`->`PhantomsXR`->`XR-MOD Engine SDK Settings` in the menu bar at the top of Unity to initialize our project configuration, as shown in the following figure. After completing this step, we can start developing AR-APP or XR-Experience content.

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
If a ❌ <sup>6</sup> appears in the [5] area you will see the **Fix** button behind it, click on it to fix it.
:::

:::danger
- Don't forget to click **Apply** button to save your configuration.
- Make sure that all options in area 5 are ✅ status
:::

Once all the configuration is done, we are ready to develop the content. Click [here](../tutorial-advanced/create-first-arexperience) to learn how to develop your first XR Experience content.


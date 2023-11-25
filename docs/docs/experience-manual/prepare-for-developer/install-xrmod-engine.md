---
title: Install XR-MOD Engine
sidebar_position: 2
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: using Unity engine to create our XR Experience contents.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<coverimg url={require('@site/static/static/prepare-for-developer/install-dev-environment.jpg')} height="25rem"/>


## Installation

In the previous chapter, we have installed Unity and created a Unity project. Next, we need to install the XRMOD dev-kit. Before the project starts, we need to install the XRMOD Kit using the [`XRMOD Initializer`](https://github.com/Phantomxm2021/XRMODInitializer).

Unity provides two installation methods. You can choose one of the following installation methods.

### Install from github url

1. Copy github url:`https://github.com/Phantomxm2021/XRMODInitializer.git?path=com.phantomsxr.xrmodinitializer`
2. Back to your unity project and open the `Unity Package Manager` via `Window`->`PackageManager`
3. Click left `+` button  in the upper left corner of the PackageManager window, select `Add package from github url`, paste the url  and click the Add button or press the `Enter(Return)` key to add the `XRMODInitializer` package

<coverimg url={require('@site/static/static/prepare-for-developer/install-xrmod-initializer.jpg')} label="Add XRMODInitializer Package" />

### Install from local file
1. Go to the github page to download the latest version of the release package
2. Extract the release package and drop and drag the folder of **com.phantomsxr.xrmodinitializer-x.x.x**  to **Packages** folder under your unity project

<coverimg url={require('@site/static/static/prepare-for-developer/install-from-localfile.jpg')} label="Add XRMODInitializer Package" />

:::tip
At the first time install the **XRMODInitializer** package, Unity will pop-up a dailog for you because XRMODInitializer will add the custom registry for your unity project. We just click **Close** button.

<coverimg url={require('@site/static/static/prepare-for-developer/installed-first-time.jpg')} label="Dailog" />

-----

How do we know it's installed ?  
Open `Unity Package Manager` window and switch to `In Project`, you will see the name of the package. As shown below.
<coverimg url={require('@site/static/static/prepare-for-developer/install-result.jpg')}/>
:::

Ok, we now have the XRMODInitializer package installed. Next, we open the XRMODInitializer window through menu bar `Tools`->`XR-MOD`->`Install XRMOD`, and you will see a pop-up window. 

<coverimg url={require('@site/static/static/prepare-for-developer/menubar-to-install-xrmod.jpg')} label="Menubar"/>


Then you just chose the platform you need to install and click the **Process** button in the lower right corner. If you chose the **HandheldAR**, there is a platform switcher in the lower right corner, you can switch to **iOS** or **Android** OS.

<coverimg url={require('@site/static/static/prepare-for-developer/xrmod-initializer-window.jpg')} fit="scale-down" height="25rem"/>


:::danger
Except for **Vision OS** and **HandheldAR**, there is no need to install other SDKs. For other platforms, you need to go to the official website to download the SDK and install it into your Unity project. Click the **Get Help**  or **Read More** button to learn how to install the platform sdks.

<coverimg url={require('@site/static/static/prepare-for-developer/need-to-install-sdk.jpg')}  fit="scale-down" width="600px"/>
:::


After installing the platform sdks continue to initialize our XRMOD engine, Go to menu bar `Tools`->`XR-MOD`->`Install XRMOD` and chose a platform to install then click **Process** button.


There may be some pop-ups during the installation process, and we need to do some manual operations.

#### Input System 
The default input system for Unity projects is the old input system, but since we will be using the New Input System for our XRI, Unity will pop up a confirmation window for you to confirm.

If you select **Yes** your Unity will be **restarted**, here we must choose **No** to restart **manually** later.

**DON'T CLICK YES TO RESTART UNITY**  because it will break XRMODInitializer processing.

<coverimg url={require('@site/static/static/sdk/unity-sdk/inputsystem.png')}/>


#### Obsolete Method Or Old API


This proiect may contain an obsolete method to validate interactions between XR Interactors and Interactables. This Update is only required for older projects updating the XR Interaction Toolkit dackage. It this dackage was newly installed please cancel this operation.

Here we select `Go Ahead` and that's it.

<coverimg url={require('@site/static/static/sdk/unity-sdk/xri-api-upgrade.jpg')} />

## Summary

**XRMODInitliazer** is a automatic installer for the XRMOD engine. It can help developers quickly install the XRMOD engine without complex configuration.

And if you have any questions or comments during use, please contact us(nswell@phantomsxr.com).

Once all the configuration is done, we are ready to develop the content. Click [here](../tutorial-advanced/how-create-xrmod-project) to learn how to develop your first XR Experience content.


---
sidebar_position: 2
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,metaverse,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: install the xrmod engine development kit to build xr experience content with a standardized process.
---

# Install Dev-tools

In the previous chapter, we have installed Unity and created a Unity project. Next, we need to install the XRMOD development kit. Before the project starts, we need to install the XRMOD Kit using the `Unity Package Manager` .

## Add Registries

1. Open Unity Editor and create an URP project
2. Set the `Unity Package Manager` registries through `Edit`->`ProjectSetting`->`Package Manager`
4. Typing inthe form below in `Package Manager`->`Scoped Registries`, checked the `enable Preview Packages` and `Enable Pre-release Packages`, then click Apply to save your setings.

|Name|URL|Scope(s)|
|---|---|---|
|PhantomsXR|	https://registry.npmjs.org	|com.phantomsxr|


<coverimg  url={require('@site/static/static/prepare-for-developer/unity-package-registries-setup.png')}/>

5. Open the `Unity Package Manager` via `Window` > `Package Manager` in the top menu bar
6. Switch the `registry` to `My Registries` again and you will see all development packages.


<coverimg  url={require('@site/static/static/prepare-for-developer/unity-swtich-registries.jpg')}/>




## Install packages

Initialize our Unity project by installing `XRMOD Engine Settings`, and then install the corresponding Package according to the platform you need to develop.


<coverimg  url={require('@site/static/static/prepare-for-developer/unity-install-packages.png')}/>


:::tips
Here is an example of handheldAR:
1. Install `XRMOD Engine SEtgings`
2. Install `HandHeldAR` and `XRMOD IL Core`
:::


## Initialize the project

Open the `ProjectSettings` panel via `Edit`->`ProjectSettings`. Then to find the PhantomsXR tab and expand it, switch to the `XR-MOD Engine SDK Settings`. Select the platform you want to develop on in the SDK settings, then click the `Apply` button in the upper right corner to save your choice.

<coverimg  url={require('@site/static/static/prepare-for-developer/unity-Initialize-xrmod.png')}/>

:::caution
If there is a red `X` icon under Environment Settings, please use the `Fix` button on the right to fix it.
:::
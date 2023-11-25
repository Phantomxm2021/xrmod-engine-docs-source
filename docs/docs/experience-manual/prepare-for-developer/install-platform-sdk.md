---
sidebar_position: 3
title: Install Platform SDK
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: install unity and develop xrmod experience case
---
 
## Hololens  

1. Download and install the [MixedRealityToolkit](https://github.com/Microsoft/MixedRealityToolkit-Unity)
2. Import the Mixed Reality Toolkit and OpenXR packages

To learn more about Hololen SDK you can [click here](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/new-openxr-project-with-mrtk) to the hololens documentation.


## Pico


:::danger
Since Pico SDK embeds LitJson, and XRMOD Engine also embeds LitJson, They will cause conflicts. We can go to `Packages`->`PICO Unity Integration SDK`->`Runtime`->`Scripts`->`Utils` to delete **LitJson** in Pico SDK and use XRMOD Engine SDK directly.
:::


1. Download and extract the [Pico SDK](https://developer-global.pico-interactive.com/resources/)
2. Drag and drop the Pico SDK to Packages folder under your Unity project
3. Go to [Pico MRTK3 repository](https://github.com/Phantomxm2021/PicoMRTK3) and download it
4. Extract the **PicoMRTK3.zip** and copy the **MixedReality** folder in the PicoMRTK3 **Packages** to **Packages** folder under your Unity project
5. Open and edit **manifest.json** file(add some references)
6. Go back to your Unity project and open XRMODInitializer to install XRMOD Engine

```json
"com.microsoft.mrtk.graphicstools.unity": "file:MixedReality/com.microsoft.mrtk.graphicstools.unity-0.5.0.tgz",
"org.mixedrealitytoolkit.audio": "file:MixedReality/org.mixedrealitytoolkit.audio-3.0.0.tgz",
"org.mixedrealitytoolkit.core": "file:MixedReality/org.mixedrealitytoolkit.core-3.0.0.tgz",
"org.mixedrealitytoolkit.extendedassets": "file:MixedReality/org.mixedrealitytoolkit.extendedassets-3.0.0.tgz",
"org.mixedrealitytoolkit.input": "file:MixedReality/org.mixedrealitytoolkit.input-3.0.0.tgz",
"org.mixedrealitytoolkit.spatialmanipulation": "file:MixedReality/org.mixedrealitytoolkit.spatialmanipulation-3.0.0.tgz",
"org.mixedrealitytoolkit.standardassets": "file:MixedReality/org.mixedrealitytoolkit.standardassets-3.0.0.tgz",
"org.mixedrealitytoolkit.tools": "file:MixedReality/org.mixedrealitytoolkit.tools-3.0.0.tgz",
"org.mixedrealitytoolkit.uxcomponents": "file:MixedReality/org.mixedrealitytoolkit.uxcomponents-3.0.0.tgz",
"org.mixedrealitytoolkit.uxcomponents.noncanvas": "file:MixedReality/org.mixedrealitytoolkit.uxcomponents.noncanvas-3.0.0.tgz",
"org.mixedrealitytoolkit.uxcore": "file:MixedReality/org.mixedrealitytoolkit.uxcore-3.0.0.tgz",
```

## Quest

Not Ready for currently.

## Rokid
1. Find **Package Manager** in Project Settings
2. Fill in Scoped Registries
3. Dont forgot click **Apply** button to save your setting
4. After the configuration is complete, open `Window`–>`Package Manager`. In the Packages category section, select Packages:` My Registries`
5. Install **Rokid UXR2.0 SDK**,**Rokid MRC**,**Rokid XR XRI Plugin**
6. Go to [MRTK3 github page](https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity/releases) download the MRTK3 plugin and import to **Packages** folder under your unity project
7. Open and edit **manifest.json** file(add some references)

- name：RokidNPM
- URL：https://npm.rokid.com/
- Scope(s)：
    - com.rokid

To learn more about Rokid SDK you can [click here](https://custom.rokid.com/prod/rokid_web/c88be4bcde4c42c0b8b53409e1fa1701/pc/cn/8d684c36da714eadaa23e47b6ab5a3a2.html?documentId=5840f3c7e694486daab04379c58ce248) to the Rokid documentation.


```json
"com.microsoft.mrtk.graphicstools.unity": "file:MixedReality/com.microsoft.mrtk.graphicstools.unity-0.5.0.tgz",
"org.mixedrealitytoolkit.audio": "file:MixedReality/org.mixedrealitytoolkit.audio-3.0.0.tgz",
"org.mixedrealitytoolkit.core": "file:MixedReality/org.mixedrealitytoolkit.core-3.0.0.tgz",
"org.mixedrealitytoolkit.extendedassets": "file:MixedReality/org.mixedrealitytoolkit.extendedassets-3.0.0.tgz",
"org.mixedrealitytoolkit.input": "file:MixedReality/org.mixedrealitytoolkit.input-3.0.0.tgz",
"org.mixedrealitytoolkit.spatialmanipulation": "file:MixedReality/org.mixedrealitytoolkit.spatialmanipulation-3.0.0.tgz",
"org.mixedrealitytoolkit.standardassets": "file:MixedReality/org.mixedrealitytoolkit.standardassets-3.0.0.tgz",
"org.mixedrealitytoolkit.tools": "file:MixedReality/org.mixedrealitytoolkit.tools-3.0.0.tgz",
"org.mixedrealitytoolkit.uxcomponents": "file:MixedReality/org.mixedrealitytoolkit.uxcomponents-3.0.0.tgz",
"org.mixedrealitytoolkit.uxcomponents.noncanvas": "file:MixedReality/org.mixedrealitytoolkit.uxcomponents.noncanvas-3.0.0.tgz",
"org.mixedrealitytoolkit.uxcore": "file:MixedReality/org.mixedrealitytoolkit.uxcore-3.0.0.tgz",
```

## XReal

Not Ready for currently.

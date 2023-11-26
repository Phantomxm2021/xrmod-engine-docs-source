---
sidebar_position: 3
title: Install Platform SDK
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: install unity and develop xrmod experience case
---
 
## Hololens  

1. 下载并安装[MixedRealityToolkit](https://github.com/Microsoft/MixedRealityToolkit-Unity)
2. 导入Mixed Reality Toolkit和OpenXR包

要了解有关 Hololen SDK 的更多信息，您可以[单击此处](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/new-openxr-project-with-mrtk) 访问 Hololens文档。


## Pico


:::danger
由于Pico SDK嵌入了LitJson，并且XRMOD Engine也嵌入了LitJson，因此它们会引起冲突。我们可以进入`Packages`->`PICO Unity Integration SDK`->`Runtime`->`Scripts`->`Utils`删除Pico SDK中的**LitJson**，直接使用XRMOD Engine SDK中的LitJson即可。
:::


1. 下载并解压[Pico SDK](https://developer-global.pico-interactive.com/resources/)
2. 将 Pico SDK 拖放到您Unity项目下的Packages文件夹中
3. 前往[Pico MRTK3存储库](https://github.com/Phantomxm2021/PicoMRTK3)并下载
4. 解压**PicoMRTK3.zip**并将PicoMRTK3**Packages**中的**MixedReality**文件夹复制到您Unity项目下的**Packages**文件夹中
5. 打开并编辑 **manifest.json** 文件（添加一些引用）
6. 返回到您的Unity项目并打开XRMODInitializer以安装XRMOD Engine

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

目前尚未准备好。

## Rokid
1. 在Project Settings中找到**包管理器**
2. 填写Scoped Registries
3. 不要忘记单击**Apply**按钮保存您的设置
4. 配置完成后，打开`Window`–>`Package Manager`。在Packages类别部分中选择`My Registries`
5. 安装 **Rokid UXR2.0 SDK**,**Rokid MRC**,**Rokid XR XRI Plugin**
6. 前往[MRTK3 github 页面](https://github.com/MixedRealityToolkit/MixedRealityToolkit-Unity/releases)下载MRTK3插件并导入到您Unity项目下的**Packages**文件夹中
7. 打开并编辑**manifest.json**文件（添加一些引用）


- name：RokidNPM
- URL：https://npm.rokid.com/
- Scope(s)：
    - com.rokid

要了解有关 Rokid SDK 的更多信息，您可以[点击此处](https://custom.rokid.com/prod/rokid_web/c88be4bcde4c42c0b8b53409e1fa1701/pc/cn/8d684c36da714eadaa23e47b6ab5a3a2.html?documentId=5840f3c7e694486daab0437 9c58ce248）到 Rokid 文档。


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

目前尚未准备好。
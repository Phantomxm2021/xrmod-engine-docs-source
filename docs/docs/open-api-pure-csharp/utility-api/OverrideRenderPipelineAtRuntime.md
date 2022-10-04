---
title: OverrideRenderPipeline
---

<coverimg url={require('../../../static/static/creative-api/urp.jpg')} height="25rem" padding="0"/>

## Description

The URP Asset controls several graphical features and quality settings for the Universal Render Pipeline. It is a scriptable object that inherits from ‘RenderPipelineAsset’. When you assign the asset in the Graphics settings, Unity switches from the built-in render pipeline to the URP. You can then adjust the corresponding settings directly in the URP, instead of looking for them elsewhere.

You can have multiple URP assets and switch between them. For example, you can have one with Shadows on and one with Shadows off. If you switch between the assets to see the effects, you don’t have to manually toggle the corresponding settings for shadows every time. You cannot, however, switch between HDRP/SRP and URP assets, as the render pipelines are incompatible.

## Parameters

| Param           | Type                                                                                                                                      | Description                                                                                                                                                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| \_pipelineAsset | [UniversalRenderPipelineAsset](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.1/manual/universalrp-asset.html) | The Universal Render Pipeline Asset (URP Asset) contains the global rendering and quality settings of your project, and creates the rendering pipeline instance. The rendering pipeline instance contains intermediate resources and the render pipeline implementation. |

## Method

```cs
public void OverrideRenderPipelineAtRuntime(UniversalRenderPipelineAsset _pipelineAsset)
```

## Example

```cs
using System;
using UnityEngine;
using System.Collections;
using com.Phantoms.ARMODAPI.Runtime;
using com.Phantoms.ActionNotification.Runtime;
using Object = UnityEngine.Object;

internal static API api = new API(nameof(TestAPI));
public async void OnLoad(){
    var tmp_UniversalRenderPipelineAsset = await ARMODAPI.LoadAssetAsync<Material>("UniversalRenderPipelineAsset");
    ARMODAPI.OverrideRenderPipelineAtRuntime(tmp_UniversalRenderPipelineAsset);
}

```

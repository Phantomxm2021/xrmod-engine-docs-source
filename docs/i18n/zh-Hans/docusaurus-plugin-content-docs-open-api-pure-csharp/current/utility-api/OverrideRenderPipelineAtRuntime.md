<coverimg url={require('@site/static/static/creative-api/urp.jpg')} height="25rem" padding="0"/>

## 描述

URP 资产控制着通用渲染管道的几个图形特征和质量设置。它是一个继承自 "RenderPipelineAsset "的可脚本对象。当你在图形设置中分配该资产时，Unity 会从内置的渲染管道切换到 URP。然后你可以直接在 URP 中调整相应的设置，而不是在其他地方寻找它们。

你可以有多个 URP 资产并在它们之间切换。例如，你可以有一个开启阴影的资产和一个关闭阴影的资产。如果你在这些资产之间切换以查看效果，你不必每次都手动切换阴影的相应设置。但是，你不能在 HDRP/SRP 和 URP 资产之间切换，因为渲染管道是不兼容的。

## 参数

| Param           | Type                                                                                                                                      | 描述                                                                                                                          |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| \_pipelineAsset | [UniversalRenderPipelineAsset](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@12.1/manual/universalrp-asset.html) | 通用渲染管线资产（URP Asset）包含了项目的全局渲染和质量设置，并创建了渲染管线实例。渲染管线实例包含中间资源和渲染管线的实现。 |

## 方法

```cs
public void OverrideRenderPipelineAtRuntime(UniversalRenderPipelineAsset _pipelineAsset)
```

## 例子

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

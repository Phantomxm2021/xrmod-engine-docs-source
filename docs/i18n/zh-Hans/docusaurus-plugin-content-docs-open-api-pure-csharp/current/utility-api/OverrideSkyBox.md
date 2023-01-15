<coverimg url={require('@site/static/static/creative-api/skybox.jpg')} height="25rem" padding="0"/>

## 描述

天空盒是对整个场景的一种包装，它显示了你的几何体之外的世界的样子。它使三维物体更加逼真。

## 参数

| Param      | Type     | 描述           |
| ---------- | -------- | -------------- |
| \_material | Material | 天空盒的材质球 |

## 方法

```cs
public void OverrideSkyBox(Material _material)
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
    var tmp_Skybox = await ARMODAPI.LoadAssetAsync<Material>("Skybox");
    ARMODAPI.OverrideSkyBox(tmp_Skybox);
}

```

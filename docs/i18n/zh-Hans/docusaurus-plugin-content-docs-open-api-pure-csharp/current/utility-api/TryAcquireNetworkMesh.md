## 描述

从网络中加载三维网格（`Gltf`或`Glb`）模型。

## 参数

| Param    | Type                | Description              |
| -------- | ------------------- | ------------------------ |
| \_url    | string              | 三维网格模型的地址       |
| \_result | Action<GameObject\> | 获得的回调，实例化的文件 |

## 方法

:::tip
这个 api 从网络上加载`Gltf'或`Glb'到内存。它将自动把`Gltf'或`Glb'实例化到游戏场景中。
:::

:::tip recommand  
我们建议你使用二进制类型的 gltf 文件。
:::

```cs
public void TryAcquireNetworkMesh(string _url, Action<GameObject> _result = null)
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
public void OnLoad(){
    var tmp_MeshUrl = "https://assets.cn.weacw.com/ForTest/DamagedHelmet.glb";
    ARMODAPI.TryAcquireNetworkMesh(tmp_MeshUrl, _result =>
    {
        var tmp_Trans = _result.transform;
        tmp_Trans.position = Vector3.one;
    });
}

```

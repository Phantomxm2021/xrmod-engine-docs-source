## 描述

从网址上下载 3D 网格（`Gltf`或`Glb`）模型，并将其缓存在本地。**不会被实例化**。

## 参数

| Param    | Type            | 描述                     |
| -------- | --------------- | ------------------------ |
| \_url    | string          | 模型文件的地址           |
| \_result | Action<string\> | 获取的回调，文件缓存路径 |

## 方法

:::tip
这个 api 是将`Gltf`或`Glb`从网络加载到内存中。它不会被实例化。
:::

:::tip recommand  
我们建议您使用二进制类型的 gltf 文件。
:::

```cs
public void DownloadNetworkMesh(string _url, Action<string> _result = null)
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
    ARMODAPI.DownloadNetworkMesh(tmp_MeshUrl, _result =>
    {
        Debug.Log($"File cache{_result}.");
    });
}

```

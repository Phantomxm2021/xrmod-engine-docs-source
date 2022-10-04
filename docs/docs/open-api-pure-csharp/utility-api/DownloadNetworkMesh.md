---
title: DownloadNetworkMesh
---

## Description

Download the 3D mesh(`Gltf` or `Glb`) model from the url ,and caching it on local. **Will not be instantiated**.

## Parameters

| Param    | Type             | Description                            |
| -------- | ---------------- | -------------------------------------- |
| \_url    | string           | The url of mesh file                   |
| \_result | Action<string\> | Acquired callback, the file cache path |

## Method

:::tip
This api is load `Gltf` or `Glb` from network into memory. It will not be instantiated.
:::

:::tip recommand  
We recommend that you use binary type gltf files.
:::

```cs
public void DownloadNetworkMesh(string _url, Action<string> _result = null)
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
public void OnLoad(){
    var tmp_MeshUrl = "https://assets.cn.weacw.com/ForTest/DamagedHelmet.glb";
    ARMODAPI.DownloadNetworkMesh(tmp_MeshUrl, _result =>
    {
        Debug.Log($"File cache{_result}.");
    });
}

```

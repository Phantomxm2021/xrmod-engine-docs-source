---
title: TryAcquireNetworkMesh
---

## Description

Load the 3D mesh(`Gltf` or `Glb`) model from the network.

## Parameters

| Param    | Type                 | Description                              |
| -------- | -------------------- | ---------------------------------------- |
| \_url    | string               | The url of mesh file                     |
| \_result | Action<GameObject\> | Acquired callback, the instantiated file |

## Method

:::tip
This api is load `Gltf` or `Glb` from network into memory. It will auto instantiating the `Gltf` or `Glb` into the game scene.
:::

:::tip recommand  
We recommend that you use binary type gltf files.
:::

```cs
public void TryAcquireNetworkMesh(string _url, Action<GameObject> _result = null)
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
    ARMODAPI.TryAcquireNetworkMesh(tmp_MeshUrl, _result =>
    {
        var tmp_Trans = _result.transform;
        tmp_Trans.position = Vector3.one;
    });
}

```

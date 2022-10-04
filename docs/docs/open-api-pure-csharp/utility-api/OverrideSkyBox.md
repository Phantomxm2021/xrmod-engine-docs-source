---
title: OverrideSkyBox
---

<coverimg url={require('../../../static/static/creative-api/skybox.jpg')} height="25rem" padding="0"/>

## Description

Skyboxes are a wrapper around your entire scene that shows what the world looks like beyond your geometry. It makes 3D objects more realistic.

## Parameters

| Param      | Type     | Description         |
| ---------- | -------- | ------------------- |
| \_material | Material | The skybox material |

## Method

```cs
public void OverrideSkyBox(Material _material)
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
    var tmp_Skybox = await ARMODAPI.LoadAssetAsync<Material>("Skybox");
    ARMODAPI.OverrideSkyBox(tmp_Skybox);
}

```

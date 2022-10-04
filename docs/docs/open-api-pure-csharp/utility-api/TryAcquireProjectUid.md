---
title: TryAcquireProjectUid
---

## Description

Get current ARExperience project info. For example you want to use for restful api.

## Return

| Type                                          | Description                             |
| --------------------------------------------- | --------------------------------------- |
| <highlight color="#AE6221">String</highlight> | Current XR-Experience project unique Id |

## Method

```cs
public string TryAcquireProjectUid()
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_CurrentProjectUid = ARMODAPI.TryAcquireProjectUid();
    Debug.Log($"Current Project uid:{tmp_CurrentProjectUid}");
}
```

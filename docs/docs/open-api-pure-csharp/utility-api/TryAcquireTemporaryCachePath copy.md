---
title: TryAcquireSdkType
---

## Description

Get current sdk type. Provide multi-platform adaptation for one content.

## Return

| Type                                          | Description      |
| --------------------------------------------- | ---------------- |
| <highlight color="#AE6221">String</highlight> | Current sdk type |

## Method

```cs
public string TryAcquireSdkType()
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_SDKType = ARMODAPI.TryAcquirTryAcquireSdkTypeTemporaryCachePath();
    Debug.Log($"Path:{tmp_SDKType}");
}
```

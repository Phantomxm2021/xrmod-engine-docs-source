---
title: TryAcquireTemporaryCachePath
---

## Description

Get current App temporary cache Path.

## Return

| Type                                          | Description                             |
| --------------------------------------------- | --------------------------------------- |
| <highlight color="#AE6221">String</highlight> | Current app's temporary cache path |

## Method

```cs
public string TryAcquireTemporaryCachePath()
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_TemporaryPath = ARMODAPI.TryAcquireTemporaryCachePath();
    Debug.Log($"Path:{tmp_TemporaryPath}");
}
```

---
title: ResizeARWorldScale
---

## Description

Resize the AR world scale

:::info
The default is 1.0 scale unit, the larger the value, the smaller the AR virtual object, and vice versa
:::


## Parameters

| Param        | Type  | Description  |
| ------------ | ----- | ------------ |
| \_worldScale | float | new world scale |

## Method

```cs
public void ResizeARWorldScale(float _worldScale)
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    ARMODAPI.ResizeARWorldScale(1f);
}
```

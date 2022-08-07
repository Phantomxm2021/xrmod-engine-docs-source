---
title: TryAcquireLightEstimateValue
---

## Description

Get light estimate value.

## Return

| Type                                         | Description      |
| -------------------------------------------- | ---------------- |
| <highlight color="#F8D258">light</highlight> | A light of unity |

:::caution
It maybe null, plz attention
:::

## Method

```cs
public Light TryAcquireLightEstimateValue()
```


### Example

```cs
private void OnUpdate(){
    Debug.Log($"LightEstimate:{ARMODAPI.TryAcquireLightEstimateValue()?.intensity}");
}
```
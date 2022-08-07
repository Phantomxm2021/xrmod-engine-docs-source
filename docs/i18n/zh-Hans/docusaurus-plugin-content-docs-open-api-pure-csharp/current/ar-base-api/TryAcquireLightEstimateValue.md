---
title: TryAcquireLightEstimateValue
---

## Description

获取当前环境的光估值

## Return

| Type                                         | Description      |
| -------------------------------------------- | ---------------- |
| <highlight color="#F8D258">light</highlight> | 一盏 Unity 的灯光 |

:::caution
它可能是空的，请注意
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
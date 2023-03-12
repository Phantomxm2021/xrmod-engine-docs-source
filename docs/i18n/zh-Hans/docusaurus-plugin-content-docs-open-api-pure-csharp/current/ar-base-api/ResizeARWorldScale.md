---
title: ResizeARWorldScale
---

## 描述

调整 AR 世界的尺寸比例

:::info
默认为1.0个比例单位，数值越大AR虚拟物体越小，反之亦然
:::


## 参数

| 参数        | 类别  | 描述  |
| ------------ | ----- | ------------ |
| \_worldScale | float | 要调整的尺寸 |

## 方法

```cs
public string ResizeARWorldScale(float _worldScale)
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    ARMODAPI.ResizeARWorldScale(1f);
}
```

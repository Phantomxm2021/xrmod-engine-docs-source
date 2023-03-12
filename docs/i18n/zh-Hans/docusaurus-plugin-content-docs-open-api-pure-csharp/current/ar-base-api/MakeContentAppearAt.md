---
title: MakeContentAppearAt
---

## 描述

This does not move the content; instead, it moves and orients the ARSessionOrigin such that the content appears to be at the raycast hit position.


## 参数

| 参数          | 类别       | 描述                 |
| -------------- | ---------- | --------------------------- |
| \_contentTrans | Transform  | 对齐对象            |
| \_position     | Vector3    | 内容出现的位置 |
| \_rotation     | Quaternion | 内容出现的角度 |

## 方法

```cs
public void MakeContentAppearAt(Transform _contentTrans, Vector3 _position, Quaternion _rotation)
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_VirtualObjectTransform = GameObject.Find("VirtualObject").transform;
    ARMODAPI.MakeContentAppearAt(tmp_VirtualObjectTransform,tmp_VirtualObjectTransform.position,tmp_VirtualObjectTransform.rotation);
}
```

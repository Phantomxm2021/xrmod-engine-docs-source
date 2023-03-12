---
title: MakeContentAppearAt
---

## Description

This does not move the content; instead, it moves and orients the ARSessionOrigin such that the content appears to be at the raycast hit position.


## Parameters

| Param          | Type       | Description                 |
| -------------- | ---------- | --------------------------- |
| \_contentTrans | Transform  | LookAt transform            |
| \_position     | Vector3    | Position of content appears |
| \_rotation     | Quaternion | Rotation of content appears |

## Method

```cs
public void MakeContentAppearAt(Transform _contentTrans, Vector3 _position, Quaternion _rotation)
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_VirtualObjectTransform = GameObject.Find("VirtualObject").transform;
    ARMODAPI.MakeContentAppearAt(tmp_VirtualObjectTransform,tmp_VirtualObjectTransform.position,tmp_VirtualObjectTransform.rotation);
}
```

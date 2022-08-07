## Description

使内容看起来有相对于相机的方向旋转。

:::info
这并不移动内容；相反，它移动ARCamera并调整其方向，使内容看起来处于光线照射的位置。
:::

## Parameters

| Param      | Type       | Description                         |
| ---------- | ---------- | ----------------------------------- |
| \_api      | API        | XR-MOD SDK API                      |
| \_content  | Transform  | Your content gameObject's transform |
| \_position | Vector3    | Your content position               |
| \_rotation | Quaternion | Your content rotation               |

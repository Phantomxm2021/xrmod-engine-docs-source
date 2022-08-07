## Description

Makes content appear to have orientation rotation relative to the Camera.

:::info
This does not move the content; instead, it moves and orients the ARCamera. such that the content appears to be at the raycast hit position.
:::

## Parameters

| Param      | Type       | Description                         |
| ---------- | ---------- | ----------------------------------- |
| \_api      | API        | XR-MOD SDK API                      |
| \_content  | Transform  | Your content gameObject's transform |
| \_position | Vector3    | Your content position               |
| \_rotation | Quaternion | Your content rotation               |

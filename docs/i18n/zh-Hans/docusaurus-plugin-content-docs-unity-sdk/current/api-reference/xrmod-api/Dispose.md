---
title: Dispose
---

## Description

停止并关闭 XR 模块

## Method

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.Dispose();

//Reload the Main scene for ready
SceneManager.LoadScene("Main");
```
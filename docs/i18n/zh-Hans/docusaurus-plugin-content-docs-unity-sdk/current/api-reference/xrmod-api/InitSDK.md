---
title: InitSDK
---

## Description

用配置信息初始化ARMODSDK。

## Parameters

| Name         | Type   | Description                                     |
| ------------ | ------ | ----------------------------------------------- |
| appconfigure | String | 这是一个 json 字符串。用来启动我们的 SDK 和认证 |

## Method

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(_configuration);
```

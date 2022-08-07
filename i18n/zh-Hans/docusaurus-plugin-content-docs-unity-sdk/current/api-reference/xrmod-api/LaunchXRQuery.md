---
title: LaunchXRQuery
---
## Description

通过项目UID查询ARExperience项目。

## Parameters

| Name         | Type   | Description                                                                            |
| ------------ | ------ | -------------------------------------------------------------------------------------- |
| \_projectUid | String | 项目 uid 是每个 ARexperience 的唯一 id。可用于检索，等等。 |

:::info
当AppModel为Offline时，projectUID为XRMOD-Case的名称（不区分大小写）
:::

## Method

```cs
public void LaunchXRQuery(String _projectUid)
```

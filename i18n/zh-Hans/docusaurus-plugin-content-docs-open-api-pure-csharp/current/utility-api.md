---
sidebar_position: 5
title: Utility API
---

## IsPointerOverUi

###  描述

它用于确定是否触摸了 ugui 对象。在单击 ugui 对象时防止光线投射射线穿透。

###  返回值

Bool  True：触摸UGUI对象，False：不触摸UGUI对象

```cs
public bool IsPointerOverUi()
```

## SaveKeyAndValue

###  描述

在本地存储临时数据

###  入参

| Param         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| \_projectName | Use ProjectName+Key storage to prevent Key from being occupied |
| \_key         | Unique Name                                                    |
| \_value       | Data tha nedds to be saved                                     |

```cs
public void SaveKeyAndValue(string _projectName, string _key, string _value)
```

## GetValueByKey

###  描述

读取设备上临时存储的数据

###  返回值

String 所查询的数据

### Parameters

| Param         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| \_projectName | Use ProjectName+Key storage to prevent Key from being occupied |
| \_key         | Unique name                                                    |

```cs
public string GetValueByKey(string _projectName, string _key)
```

## RemoveKeyAndValue

###  描述

删除临时存储在本地的数据和索引字段

### Parameters

| Param | Description |
| ----- | ----------- |
| \_key | Unique name |

:::caution
\_key should be projectname+key.
:::

```cs
public void RemoveKeyAndValue(string _key)
```

## GetGameObjectByTag

###  描述

通过标签查找游戏对象

### Parameters

| Param        | Type            | Description       |
| ------------ | --------------- | ----------------- |
| \_tag        | String          | Unique name       |
| \_gameObject | GameObject(out) | The search result |

```cs
public void GetGameObjectByTag(string _tag,GameObject _gameObject)
```

## DoCompareTag

###  描述

比较两个标签是否一致

### Parameters

| Param | Type   | Description |
| ----- | ------ | ----------- |
| \_tag | String | Unique name |

```cs
public void DoCompareTag(string _tag)
```

## LoadAsset&lt;T&gt;

###  描述

Load a unity asset from our package by project name and wanna load asset name.

### Parameters

| Param                  | Type            | Description               |
| ---------------------- | --------------- | ------------------------- |
| T                      | T               | UnityObject Type          |
| \_projectName          | String          | your project name         |
| \_wannaLoadedAssetName | String          | you wanna load asset name |
| \_loadedCallback       | Action&lt;T&gt; | call back when loaded     |

```cs
public void LoadAsset<T>(string _projectName, string _wannaLoadedAssetName,Action<T> _loadedCallback)
```

## LoadAssetAsync&lt;T&Gt;

###  描述

Asynchronously load a single asset from our package through the project name, and hope to load the asset name.

###  返回值

Object Your asset of T type

### Parameters

| Param                  | Type   | Description               |
| ---------------------- | ------ | ------------------------- |
| T                      | T      | UnityObject Type          |
| \_projectName          | String | your project name         |
| \_wannaLoadedAssetName | String | you wanna load asset name |

```cs
public async Task<T> LoadAssetAsync<T>(string _projectName, string _wannaLoadedAssetName)
```

## GetDeviceInfo

###  描述

Get the device's info

###  返回值

String devices info-Json

```cs
public string GetDeviceInfo()
```

## GetSystemLanguage

###  描述

Acquire system language

###  返回值

String system language

```cs
public string GetSystemLanguage()
```

## SetScreenOrientation

###  描述

set up the screen orientation

### Parameters

| Param         | Type              | Description        |
| ------------- | ----------------- | ------------------ |
| \_orientation | ScreenOrientation | Screen orientation |

```cs
public void SetScreenOrientation(ScreenOrientation _orientation)
```

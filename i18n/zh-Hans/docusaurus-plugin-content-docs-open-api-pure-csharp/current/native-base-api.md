---
sidebar_position: 3
title: Native Base API
---

## OpenBuiltInBrowser

### 描述

使用应用程序的内置浏览器打开 URL

### 入参

| Param  | Type                              | Description                  |
| ------ | --------------------------------- | ---------------------------- |
| \_data | TryAcquireAppInfoNotificationData | sent to the built-in browser |

```cs
public void OpenBuiltInBrowser(OpenBuiltInNotificationData _data)
```

---

## TryAcquireAppInfo

### 描述

获取应用的基础信息

### 入参

| Param  | Type                              | Description                |
| ------ | --------------------------------- | -------------------------- |
| \_data | TryAcquireAppInfoNotificationData | Try acquire operation type |

```cs
public void TryAcquireAppInfo(TryAcquireAppInfoNotificationData _data)
```

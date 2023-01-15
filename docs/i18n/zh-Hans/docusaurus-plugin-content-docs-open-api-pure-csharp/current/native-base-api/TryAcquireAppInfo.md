## 描述

获取应用的基础信息

:::danger
开发人员需要在相应的平台上实现**TryAcquireInformation**。
:::

## 参数

| Param  | Type                              | 描述              |
| ------ | --------------------------------- | ------------------------ |
| \_data | TryAcquireAppInfoNotificationData | 尝试获取应用信息操作类型 |

```cs
public void TryAcquireAppInfo(TryAcquireAppInfoNotificationData _data)
```

## 关联

当您使用这个 API 时，您需要实现相应平台的`TryAcquireInformation`回调方法。

| Platform                                                                      |
| ----------------------------------------------------------------------------- |
| [iOS](../../ios-sdk/api-reference/protocol-api/TryAcquireInformation)         |
| [Android](../../android-sdk/api-reference/protocol-api/TryAcquireInformation) |
| [Flutter](../../flutter-sdk/api-reference/protocol-api/TryAcquireInformation) |
| [Unity](../../unity-sdk/api-reference/protocol-api/TryAcquireInformation)     |

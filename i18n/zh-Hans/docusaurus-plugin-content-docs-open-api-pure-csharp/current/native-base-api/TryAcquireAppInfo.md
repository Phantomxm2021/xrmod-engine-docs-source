## Description


获取应用的基础信息

:::danger
开发人员需要在相应的平台上实现**TryAcquireInformation**。
:::

## Parameters

| Param  | Type                              | Description                |
| ------ | --------------------------------- | -------------------------- |
| \_data | TryAcquireAppInfoNotificationData | Try acquire operation type |

```cs
public void TryAcquireAppInfo(TryAcquireAppInfoNotificationData _data)
```


## Relation
当你使用这个API时，你需要实现相应平台的`TryAcquireInformation`回调方法。

|Platform|
|---|
|[iOS](../../ios-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
|[Android](../../android-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
|[Flutter](../../flutter-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
|[Unity](../../unity-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
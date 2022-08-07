## Description

Try Acquire App Info

:::danger
Developers need to implement **TryAcquireInformation** on the corresponding platform.
:::

## Parameters

| Param  | Type                              | Description                |
| ------ | --------------------------------- | -------------------------- |
| \_data | TryAcquireAppInfoNotificationData | Try acquire operation type |

```cs
public void TryAcquireAppInfo(TryAcquireAppInfoNotificationData _data)
```


## Relation
When you use this API, you need to implement the `TryAcquireInformation` callback method of the corresponding platform.

|Platform|
|---|
|[iOS](../../ios-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
|[Android](../../android-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
|[Flutter](../../flutter-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
|[Unity](../../unity-sdk/api-reference/xrmod-native-calls-protocol-api#tryacquireinformation)|
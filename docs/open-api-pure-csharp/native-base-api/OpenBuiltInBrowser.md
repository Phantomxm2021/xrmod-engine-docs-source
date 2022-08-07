## Description

Use the built-in browser of the app to open the url

:::danger
Developers need to implement their own in-app browser, XRMOD does not provide in-app browser functionality.
:::

## Parameters

| Param  | Type                              | Description                  |
| ------ | --------------------------------- | ---------------------------- |
| \_data | TryAcquireAppInfoNotificationData | sent to the built-in browser |

```cs
public void OpenBuiltInBrowser(OpenBuiltInNotificationData _data)
```

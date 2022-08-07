## Description

使用应用程序的内置浏览器来打开网址

:::danger
开发人员需要实现自己的应用内浏览器，XRMOD不提供应用内浏览器功能。
:::

## Parameters

| Param  | Type                              | Description                  |
| ------ | --------------------------------- | ---------------------------- |
| \_data | TryAcquireAppInfoNotificationData | sent to the built-in browser |

```cs
public void OpenBuiltInBrowser(OpenBuiltInNotificationData _data)
```

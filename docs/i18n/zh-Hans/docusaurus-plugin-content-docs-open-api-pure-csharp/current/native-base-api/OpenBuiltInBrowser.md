## 描述

使用应用程序的内置浏览器来打开网址

:::danger
开发人员需要实现自己的应用内浏览器，XRMOD 不提供应用内浏览器功能。
:::

## 参数

| Param  | Type                              | 描述                                    |
| ------ | --------------------------------- | --------------------------------------- |
| \_data | TryAcquireAppInfoNotificationData | 打开给内置浏览器(需 App 自行实现浏览器) |

```cs
public void OpenBuiltInBrowser(OpenBuiltInNotificationData _data)
```

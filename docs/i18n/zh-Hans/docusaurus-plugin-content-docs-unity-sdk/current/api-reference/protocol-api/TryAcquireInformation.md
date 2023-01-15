## 描述

从 ARExperience 脚本中获取应用信息

## 参数

| Param    | 描述                             |
| -------- | --------------------------------------- |
| opTag    | 由 AR Experience 发起的操作请求的类型。 |
| callback | 执行回调（异步）。                      |

## 方法

```cs
public static event Action<string, TryAcquireInformationDelegate> TryAcquireInformationEventHandle;
```

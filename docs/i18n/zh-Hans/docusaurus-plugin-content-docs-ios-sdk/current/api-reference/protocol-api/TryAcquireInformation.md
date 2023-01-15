## Description

获取当前应用数据；从ARExperience发起，数据由Native提供。

## Parameters

| Param    | Description                                               |
| -------- | --------------------------------------------------------- |
| opTag    | 由 AR Experience 发起的操作请求的类型。 |
| callback | 执行回调（异步）。                          |

## Method 

```objectivec
- (void )tryAcquireInformation:(NSString*) opTag CallBackFuncP:(TryAcquireInformationCallBackFuncP) callback;
```
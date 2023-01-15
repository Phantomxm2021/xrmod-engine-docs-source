## 描述

获取当前应用数据；从ARExperience发起，数据由Native提供。

## 参数

| Param    | 描述                                               |
| -------- | --------------------------------------------------------- |
| opTag    | 由 AR Experience 发起的操作请求的类型。 |
| callback | 执行回调（异步）。                          |

## 方法 

```objectivec
- (void )tryAcquireInformation:(NSString*) opTag CallBackFuncP:(TryAcquireInformationCallBackFuncP) callback;
```
## 描述

用于连接 SDK.注册一个自定义实现的监控协议之间的通信。用于监控和执行 SDK 发送的消息，例如：。

- 当开始加载 AR 创意互动体验内容时，将执行`addLoadingOverlay`。
- 加载完毕后，将执行`removeLoadingOverlay'。
- 在加载时执行`updateLoadingProgress`。
- 当设备不支持 AR 时执行`notSupportARMOD`。
- SDK 错误，在查询项目时将执行 showAlertConfirmation

在 ARMOD 加载后的任何时候调用它来设置实现 NativeCallsProtocol 方法的对象。

## 参数

| Name | Type                | 描述                       |
| ---- | ------------------- | --------------------------------- |
| api  | NativeCallsProtocol | 自定义监测协议对象 |


## 方法

```objectivec
- (void) registerAPIforNativeCalls:(id<NativeCallsProtocol>) api
```
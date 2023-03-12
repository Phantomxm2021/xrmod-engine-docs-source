## Description

Used to connect the communication between SDK.Register a custom-implemented monitoring protocol. Used to monitor and execute messages sent by the SDK, for example:

- When starting to load AR creative interactive experience content, `addLoadingOverlay` will be executed;
- After loading, it will execute `removeLoadingOverlay`;
- Execute `updateLoadingProgress` while loading;
- Execute `notSupportARMOD` when the device does not support AR;
- SDK error, will execute showAlertConfirmation when the project is inquired

Call it at any time after XRMOD is loaded to set the object that implements the NativeCallsProtocol method.

## Parameters

| Name | Type                | Description                       |
| ---- | ------------------- | --------------------------------- |
| api  | NativeCallsProtocol | Custom monitoring protocol object |


## Method

```objectivec
- (void) registerAPIforNativeCalls:(id<NativeCallsProtocol>) api
```
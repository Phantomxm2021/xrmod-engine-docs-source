## Description

Initialize ARMOD SDK with configuration information. This method will call  automatically.

## Parameters
|Name|Type|Description|
|---|---|---|
|appconfigure|NSString|This is a json string. Use to init our sdk and authentication|

## Method
```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(_configuration);
```

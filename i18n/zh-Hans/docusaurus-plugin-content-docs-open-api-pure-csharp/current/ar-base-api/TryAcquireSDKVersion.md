---
title: TryAcquireSDKVersion
---

## Description

获取当前XRMOD引擎的版本。用于XR内容对特定SDK版本执行不同的操作。例如，弹出框提示用户为低于2.0.0版本的SDK升级应用程序等。

## Return

| Type                                          | Description                           |
| --------------------------------------------- | ------------------------------------- |
| <highlight color='#AD6224'>String</highlight> | XRRMOD Engine 的版本[e.g.0.0.1].|

## Method

```csharp
public string TryAcquireSDKVersion()
```

## Example

```csharp
ARMODAPI API = new ARMODAPI("TEST_PROJECT");
public void OnLoad(){
    //Call to get the sdk version of xrmod engine
    var tmp_CurSDKVersion = API.TryAcquireSDKVersion();

    //Print the result
    Debug.Log(tmp_CurSDKVersion);

    //Compare them
    if(tmp_CurSDKVersion != "2.0.0-pre.1"){
        return;
    }

    Debug.Log($"SDK Version is {tmp_CurSDKVersion}");
}
```

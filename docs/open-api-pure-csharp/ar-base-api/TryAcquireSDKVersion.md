---
title: TryAcquireSDKVersion
---

## Description

Get the current XRMOD Engine version. Used for XR content to perform different actions for specific SDK versions. For example, pop-up boxes prompting the user to upgrade the application for SDKs below version 2.0.0, etc.

## Return

| Type                                          | Description                           |
| --------------------------------------------- | ------------------------------------- |
| <highlight color='#AD6224'>String</highlight> | XRMOD Engine sdk version [e.g.0.0.1]. |

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

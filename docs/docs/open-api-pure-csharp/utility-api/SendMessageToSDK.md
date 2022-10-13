---
title: SendMessageToSDK
---

## Description

Send the message to sdk, the message can be a string or json. When this method is called the [ReceivedMessage](../../unity-sdk/api-reference/protocol-api/OnMessageReceviedHandle) method on the SDK side will receive the sent message.

:::danger
Only support SDK 2.0.0-pre.12
:::

## Method

```cs
 public void SendMessageToSDK(string _data)
```

## Example

```cs title=Received.cs
using SDKEntry.Runtime;

public void Start(){
    NativePlugins.Plugin.NativeAPI.OnMessageReceviedHandle += _str=>{
        Debug.Log(_str);
    };
}
```

```cs title=XRExperience.cs
using SDKEntry.Runtime;

internal static API ARMODAPI = new API(nameof(Examlpe));
private void OnLoad(){
    ARMODAPI.SendMessageToSDK("Hi, This message from XR-Experience!");
}
```

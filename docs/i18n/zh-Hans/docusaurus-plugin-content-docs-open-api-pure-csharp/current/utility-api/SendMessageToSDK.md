## 描述

发送消息给sdk，消息可以是字符串或json。当这个方法被调用时，SDK这边的[ReceivedMessage](././unity-sdk/api-reference/protocol-api/OnMessageReceviedHandle)方法将收到发送的消息。

:::danger
只支持SDK 2.0.0-pre.12
:::

## 方法

```cs
 public void SendMessageToSDK(string _data)
```

## 例子

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

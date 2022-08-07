---
sidebar_position: 3
title: ClientCallback
---

## ClientCallbacks

### Description

注册Client事件接收器以监听Client的网络回调。与Client相同，但在Server上调用时没有警告。

### Events

```cs
public Dictionary<string, Action<string, NetworkIdentity>> ClientCallbackStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> ClientCallbackFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> ClientCallbackIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> ClientCallbackBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> ClientCallbackVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> ClientCallbackQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> ClientCallbackGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> ClientCallbackTransformDataAction;
public Dictionary<string, Action<NetworkIdentity>> ClientCallbackAction;
```

### Methods

#### Description

与Client相同，但在Server上调用时不会产生警告。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

```cs title="Clientcallback Trigger"
public void ClientCallbackSender(string _eventName,  NetworkIdentity _sender);
public void ClientCallbackStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void ClientCallbackFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void ClientCallbackIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void ClientCallbackBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void ClientCallbackVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void ClientCallbackQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void ClientCallbackGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void ClientCallbackTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

### Parameters

| Name        | Type                                                                  | Description                 |
| ----------- | --------------------------------------------------------------------- | --------------------------- |
| \_eventName | string                                                                | Key of event dictnary       |
| \_parameter | Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject | Incomming data              |
| \_sender    | NetworkIdentity                                                       | Who sent this remote action |

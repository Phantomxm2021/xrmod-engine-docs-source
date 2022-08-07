---
sidebar_position: 5
title: ServerCallbacks
---


## ServerCallbacks

### Description

Register a server event receiver to listen for client network callbacks.
Same as the server, but without warning when called by the client.

### Events

```cs
public Dictionary<string, Action<string, NetworkIdentity>> ServerCallbackStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> ServerCallbackFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> ServerCallbackIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> ServerCallbackBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> ServerCallbackVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> ServerCallbackQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> ServerCallbackGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> ServerCallbackTransformDataAction;
public Dictionary<string, Action<NetworkIdentity>> ServerCallbackAction;
```

### Methods

#### Description

Same as Server but does not throw warning when called on client.

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

```cs title="Servercallback Trigger"
public void ServerCallbackSender(string _eventName,  NetworkIdentity _sender);
public void ServerCallbackStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void ServerCallbackFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void ServerCallbackIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void ServerCallbackBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void ServerCallbackVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void ServerCallbackQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void ServerCallbackGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void ServerCallbackTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

### Parameters

| Name        | Type                                                                  | Description                 |
| ----------- | --------------------------------------------------------------------- | --------------------------- |
| \_eventName | string                                                                | Key of event dictnary       |
| \_parameter | Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject | Incomming data              |
| \_sender    | NetworkIdentity                                                       | Who sent this remote action |

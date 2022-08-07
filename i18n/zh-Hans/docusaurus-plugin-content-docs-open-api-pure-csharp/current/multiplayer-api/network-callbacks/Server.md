---
sidebar_position: 4
title: Server
---

## Description

注册一个Server事件接收器来监听客户端的网络回调。
只有Server可以调用这个方法（当客户端调用时，会产生一个警告或错误）。

## Events
```cs
public Dictionary<string, Action<NetworkIdentity>> ServerAction;
public Dictionary<string, Action<string, NetworkIdentity>> ServerStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> ServerFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> ServerIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> ServerBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> ServerVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> ServerQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> ServerGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> ServerTransformDataAction;
```

## Methods

#### Description

只有Server可以调用该方法（在客户端调用时抛出一个警告或错误）。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

```cs title="Server Trigger"
public void ServerSender(string _eventName,  NetworkIdentity _sender);
public void ServerStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void ServerFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void ServerIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void ServerBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void ServerVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void ServerQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void ServerGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void ServerTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

### Parameters

| Name        | Type                                                                  | Description                 |
| ----------- | --------------------------------------------------------------------- | --------------------------- |
| \_eventName | string                                                                | Key of event dictnary       |
| \_parameter | Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject | Incomming data              |
| \_sender    | NetworkIdentity                                                       | Who sent this remote action |

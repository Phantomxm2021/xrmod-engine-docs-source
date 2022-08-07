---
sidebar_position: 2
title: Client
---

## Description

注册Client的事件接收器，以监听Client的网络回调。
只有Client可以调用这个方法（在Server上调用时会产生警告或错误）。

## Events

```cs title="Client event"
public Dictionary<string, Action<string, NetworkIdentity>> ClientStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> ClientFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> ClientIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> ClientBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> ClientVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> ClientQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> ClientGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> ClientTransformDataAction;
public Dictionary<string, Action<NetworkIdentity>> ClientAction;
```

## Methods

#### Description
只有Client可以调用这个方法（如果在Server上调用，将产生一个警告或错误）。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::


```cs title="Client Trigger"
public void ClientSender(string _eventName,  NetworkIdentity _sender);
public void ClientStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void ClientFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void ClientIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void ClientBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void ClientVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void ClientQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void ClientGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void ClientTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

## Parameters

| Name        | Type                                                                  | Description                 |
| ----------- | --------------------------------------------------------------------- | --------------------------- |
| \_eventName | string                                                                | Key of event dictnary       |
| \_parameter | Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject | Incomming data              |
| \_sender    | NetworkIdentity                                                       | Who sent this remote action |

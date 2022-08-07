---
sidebar_position: 2
title: ClientRpc
---


## Description

Register the client remote operation receiver to listen for client rpc events. ClientRpc calls are sent from an object on the server to an object on the client. They can be sent from any server object that has a generated NetworkIdentity. Since the server has permissions, there is no security issue with the server object being able to send these calls.

## Events

```cs
public Dictionary<string, Action<string, NetworkIdentity>> ClientRpcStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> ClientRpcFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> ClientRpcIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> ClientRpcBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> ClientRpcVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> ClientRpcQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> ClientRpcGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> ClientRpcTransformDataAction;
public Dictionary<string, Action<NetworkIdentity>> ClientRpcAction;
```

## Parameters

| Name        | Type                                                                  | Description                 |
| ----------- | --------------------------------------------------------------------- | --------------------------- |
| \_eventName | string                                                                | Key of event dictnary       |
| \_parameter | Int/Float/String/Bool/TransformData/Vector3/Quaternion/NetkGameObject | Incomming data              |
| \_sender    | NetworkIdentity                                                       | Who sent this remote action |



## Methods

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.
:::

```cs title="Client Rpc Trigger"
public void ClientRpcSender(string _eventName,  NetworkIdentity _sender);
public void ClientRpcStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void ClientRpcFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void ClientRpcIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void ClientRpcBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void ClientRpcVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void ClientRpcQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void ClientRpcGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void ClientRpcTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

---
sidebar_position: 4
title: Target Rpc
---

## Description

Register the target remote action receiver to listen for target rpc events. the TargetRpc function is called by the user code on the server and then on the corresponding client object on the client of the specified NetworkConnection.

## Events

```cs
public Dictionary<string, Action<string, NetworkIdentity>> TargetRpcStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> TargetRpcFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> TargetRpcIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> TargetRpcBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> TargetRpcVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> TargetRpcQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> TargetRpcGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> TargetRpcTransformDataAction;
public Dictionary<string, Action<NetworkIdentity>> TargetRpcAction;
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

```cs title="TargetRpc Trigger"
public void TargetRpcSender(string _eventName,  NetworkIdentity _sender);
public void TargetRpcStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void TargetRpcFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void TargetRpcIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void TargetRpcBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void TargetRpcVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void TargetRpcQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void TargetRpcGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void TargetRpcTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

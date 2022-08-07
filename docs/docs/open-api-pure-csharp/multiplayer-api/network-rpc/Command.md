---
sidebar_position: 3
title: Command
---
## Description

Register a command remote operation receiver to listen for command events. Commands are sent from the player object on the client to the player object on the server. By default, for security reasons, commands can only be sent from your player object, so you cannot control other player objects.

## Events

```cs
public Dictionary<string, Action<string, NetworkIdentity>> CmdStringAction;
public Dictionary<string, Action<float, NetworkIdentity>> CmdFloatAction;
public Dictionary<string, Action<int, NetworkIdentity>> CmdIntAction;
public Dictionary<string, Action<bool, NetworkIdentity>> CmdBoolAction;
public Dictionary<string, Action<Vector3, NetworkIdentity>> CmdVector3Action;
public Dictionary<string, Action<Quaternion, NetworkIdentity>> CmdQuaternionAction;
public Dictionary<string, Action<GameObject, NetworkIdentity>> CmdGameObjectAction;
public Dictionary<string, Action<TransformData, NetworkIdentity>> CmdTransformDataAction;
public Dictionary<string, Action<NetworkIdentity>> CmdAction;
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

```cs title="Cmd Trigger"
public void CmdSender(string _eventName,  NetworkIdentity _sender);
public void CmdStringSender(string _eventName, string _parameter, NetworkIdentity _sender);
public void CmdFloatSender(string _eventName, float _parameter, NetworkIdentity _sender);
public void CmdIntSender(string _eventName, int _parameter, NetworkIdentity _sender);
public void CmdBoolSender(string _eventName, bool _parameter, NetworkIdentity _sender);
public void CmdVector3Sender(string _eventName, Vector3 _parameter, NetworkIdentity _sender);
public void CmdQuaternionSender(string _eventName, Quaternion _parameter, NetworkIdentity _sender);
public void CmdGameObjectSender(string _eventName, GameObject _parameter, NetworkIdentity _sender);
public void CmdTransformDataSender(string _eventName, TransformData _parameter, NetworkIdentity _sender);
```

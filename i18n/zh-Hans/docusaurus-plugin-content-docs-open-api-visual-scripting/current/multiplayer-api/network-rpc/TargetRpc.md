---
title: Target Rpc Unit
---

## Description

注册目标远程行动接收器以监听目标rpc事件。TargetRpc函数由服务器上的用户代码调用，然后在指定NetworkConnection的客户端上的相应客户端对象上调用。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),TransformData.
:::

## Parameters

| Connection    | Type                | Description                  |
| ------------- | ------------------- | ---------------------------- |
| Event Target  | GameObject          | Where is the EventName event |
| Parameter     | object(System)      | Incomming Data               |
| EventName     | String              | Name for response event      |
| Remote Action | NetworkRemoteAction | Remote action component      |
| Sender        | NetworkIdentity     | Who sent this remote action  |

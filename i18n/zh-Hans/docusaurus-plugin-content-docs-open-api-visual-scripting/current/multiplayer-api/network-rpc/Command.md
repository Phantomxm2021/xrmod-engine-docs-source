---
title: Command Unit
---

## Description

注册一个命令远程操作接收器来监听命令事件。命令从客户端的玩家对象发送至服务器上的玩家对象。默认情况下，出于安全考虑，命令只能从你的玩家对象发送，所以你不能控制其他玩家对象。

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

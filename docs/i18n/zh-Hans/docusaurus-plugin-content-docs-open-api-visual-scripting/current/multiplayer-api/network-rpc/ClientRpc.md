---
title: ClientRpc Unit
---

## Description

注册客户端远程操作接收器以监听客户端rpc事件。ClientRpc调用从服务器上的一个对象发送到客户端的一个对象。它们可以从任何具有生成的NetworkIdentity的服务器对象发送。因为服务器有权限，所以服务器对象能够发送这些调用没有安全问题。

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

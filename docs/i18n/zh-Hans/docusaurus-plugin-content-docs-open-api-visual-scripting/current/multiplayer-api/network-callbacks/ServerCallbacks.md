---
title: ServerCallbacks Unit
---

## Description

注册一个Server事件接收器来监听客户端的网络回调。
与Server相同，但在被客户端调用时没有警告。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

:::caution
与Server相同，但在客户端调用时不抛出警告。

:::

## Parameters

| Connection   | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| EventTarget  | GameObject          | Where is the EventName event  |
| Parameter    | object(System)      | Incomming data                |
| EventName    | String              | Name for response event       |
| RemoteAction | NetworkRemoteAction | NetworkRemoteAction component |
| Sender       | NetworkIdentity     | Who sent this remote action   |

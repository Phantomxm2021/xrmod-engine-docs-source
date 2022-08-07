---
title: ClientCallback Unit
---

## Description

注册Client事件接收器以监听Client的网络回调。
与Client相同，但在服务器上调用时没有警告。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

:::caution
与Client相同，但在服务器上调用时不会产生警告。
:::

## Parameters

| Connection   | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| EventTarget  | GameObject          | Where is the EventName event  |
| Parameter    | object(System)      | Incomming data                |
| EventName    | String              | Name for response event       |
| RemoteAction | NetworkRemoteAction | NetworkRemoteAction component |
| Sender       | NetworkIdentity     | Who sent this remote action   |

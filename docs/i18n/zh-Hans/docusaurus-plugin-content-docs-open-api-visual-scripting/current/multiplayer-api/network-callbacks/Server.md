---
title: Server Unit
---

## Description

注册一个Server事件接收器来监听客户端的网络回调。
只有Server可以调用这个方法（当客户端调用时，会产生一个警告或错误）。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

:::caution
只有Server可以调用该方法（在客户端调用时抛出一个警告或错误）。
:::

## Parameters

| Connection   | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| EventTarget  | GameObject          | Where is the EventName event  |
| Parameter    | object(System)      | Incomming data                |
| EventName    | String              | Name for response event       |
| RemoteAction | NetworkRemoteAction | NetworkRemoteAction component |
| Sender       | NetworkIdentity     | Who sent this remote action   |

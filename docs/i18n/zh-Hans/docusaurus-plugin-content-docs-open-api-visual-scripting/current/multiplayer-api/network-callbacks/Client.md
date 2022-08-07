---
title: Client Unit
---

## Description

注册Client的事件接收器，以监听Client的网络回调。
只有Client可以调用这个方法（在服务器上调用时会产生警告或错误）。

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

:::caution
只有Client可以调用该方法（在服务器上调用时抛出一个警告或一个错误）。
:::

## Parameters

| Connection   | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| EventTarget  | GameObject          | Where is the EventName event  |
| Parameter    | object(System)      | Incomming data                |
| EventName    | String              | Name for response event       |
| RemoteAction | NetworkRemoteAction | NetworkRemoteAction component |
| Sender       | NetworkIdentity     | Who sent this remote action   |

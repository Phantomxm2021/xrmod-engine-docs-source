---
sidebar_position: 2
title: Client Unit
---

## Description

Register client-side event receivers to listen for client-side network callbacks.
Only the client can call this Method (a warning or error is raised when called on the server).

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

:::caution
Only a Client can call the method (throws a warning or an error when called on the server).
:::

## Parameters

| Connection   | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| EventTarget  | GameObject          | Where is the EventName event  |
| Parameter    | object(System)      | Incomming data                |
| EventName    | String              | Name for response event       |
| RemoteAction | NetworkRemoteAction | NetworkRemoteAction component |
| Sender       | NetworkIdentity     | Who sent this remote action   |

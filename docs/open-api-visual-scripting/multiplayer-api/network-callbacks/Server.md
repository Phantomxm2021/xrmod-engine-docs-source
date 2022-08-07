---
sidebar_position: 4
title: Server Unit
---

## Description

Register a server event receiver to listen for client network callbacks.
Only the server can call this Method (a warning or error is raised when called by the client).

:::info
There have None,Int,Float,String,Vector3,Quaternion,GameObject(NetworkGameObject),
TransformData.
:::

:::caution
Only a server can call the method (throws a warning or an error when called on a client).
:::

## Parameters

| Connection   | Type                | Description                   |
| ------------ | ------------------- | ----------------------------- |
| EventTarget  | GameObject          | Where is the EventName event  |
| Parameter    | object(System)      | Incomming data                |
| EventName    | String              | Name for response event       |
| RemoteAction | NetworkRemoteAction | NetworkRemoteAction component |
| Sender       | NetworkIdentity     | Who sent this remote action   |

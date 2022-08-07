---
sidebar_position: 2
title: ClientRpc Unit
---

## Description

Register the client remote operation receiver to listen for client rpc events. ClientRpc calls are sent from an object on the server to an object on the client. They can be sent from any server object that has a generated NetworkIdentity. Since the server has permissions, there is no security issue with the server object being able to send these calls.

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

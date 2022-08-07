---
sidebar_position: 4
title: Target Rpc Unit
---

## Description

Register the target remote action receiver to listen for target rpc events. the TargetRpc function is called by the user code on the server and then on the corresponding client object on the client of the specified NetworkConnection.

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

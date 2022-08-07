---
sidebar_position: 3
title: Command Unit
---

## Description

Register a command remote operation receiver to listen for command events. Commands are sent from the player object on the client to the player object on the server. By default, for security reasons, commands can only be sent from your player object, so you cannot control other player objects.

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

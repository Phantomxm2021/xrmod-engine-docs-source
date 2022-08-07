---
title: Assign Client Authority
---

## Description

Assign control of an object to a client via the client's NetworkConnection.This causes hasAuthority to be set on the client that owns the object,and NetworkBehaviour.OnStartAuthority will be called on that client.This object then will be in the NetworkConnection.clientOwnedObjects list for the connection. Authority can be removed with RemoveClientAuthority. Only one client can own an object at any time. This does not need to be called for player objects, as their authority is setup automatically.

## Method
```cs
public void AssignClientAuthority(NetworkIdentity _assignedObject, NetworkIdentity _connection)
```

## Parameters

| Connection       | Type            | Description                                       |
| ---------------- | --------------- | ------------------------------------------------- |
| \_assignedObject | NetworkIdentity | The network object of the owner to be transferred |
| \_connection     | NetworkIdentity | Transferred to                                    |

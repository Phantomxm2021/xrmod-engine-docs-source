---
title: Assign Client Authority
---

## Description

通过客户端的NetworkConnection将一个对象的控制权分配给客户端。这将导致拥有该对象的客户端设置hasAuthority，并且NetworkBehaviour.OnStartAuthority将在该客户端上被调用。然后该对象将在NetworkConnection.clientOwnedObjects列表中的连接。权限可以通过RemoveClientAuthority删除。在任何时候，只有一个客户端可以拥有一个对象。对于玩家对象不需要调用这个，因为他们的权限是自动设置的。

## Method
```cs
public void AssignClientAuthority(NetworkIdentity _assignedObject, NetworkIdentity _connection)
```

## Parameters

| Connection       | Type            | Description                                       |
| ---------------- | --------------- | ------------------------------------------------- |
| \_assignedObject | NetworkIdentity | The network object of the owner to be transferred |
| \_connection     | NetworkIdentity | Transferred to                                    |

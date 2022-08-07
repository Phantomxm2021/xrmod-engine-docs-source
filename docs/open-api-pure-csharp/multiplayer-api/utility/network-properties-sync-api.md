---
title: Network Properties Sync
---

## Description

The NetworkPropertiesSync component will provide properties for the NetworkGameObject. Such as the object's health, level, name, etc.

## Properties

| Name                | Type        | Description                            |
| ------------------- | ----------- | -------------------------------------- |
| GetHealth           | Int Current | entity health value                    |
| GetObjectLevel      | Int         | Current entity level value             |
| GetObjectName       | String      | Current entity name value              |
| GetCustomProperties | String      | Current entity custom properties value |

## Events

Register a callback event for listen the value change.

```cs
public Action<float, NetworkIdentity> HealthSyncedCallback;
public Action<int, NetworkIdentity> ObjectLevelSyncedCallback;
public Action<string, NetworkIdentity> ObjectNameSyncedCallback;
public Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;
```

## Methods

### CmdSubtractHealth

#### Description

Change entity health value. You can register for Health value change events to listen for value changes.

```cs
public void CmdSubtractHealth(int _newValue,NetworkIdentity _sender)
```

#### Parameters

| Connection | Type            | Description                                                                    |
| ---------- | --------------- | ------------------------------------------------------------------------------ |
| \_newValue | Int             | The value of health to be subtracted                                           |
| \_sender   | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

---

### CmdAddHealth

```cs
public void CmdAddHealth(int _newValue,NetworkIdentity _sender)
```

#### Description

Change entity health value and sync to all user.

#### Parameters

| Connection | Type            | Description                                                                    |
| ---------- | --------------- | ------------------------------------------------------------------------------ |
| \_newValue | Int             | The value of health to be subtracted                                           |
| \_sender   | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

#### Event

Developer can register for Health value change event to listen for value changes.

```cs
public Action<float, NetworkIdentity> HealthSyncedCallback;
```

#### Example

```cs
Getcomponent<NetworkPropertiesSync>().HealthSyncedCallback += (_health,_sender)=>{
    //TODO: YOUR Logic code here
}
```

---

### CmdLevelUp

```cs
public void CmdLevelUp(int _additionLevel,NetworkIdentity _sender)
```

#### Description

Change entity level value and sync to all user.

#### Parameters

| Connection      | Type            | Description                                                                    |
| --------------- | --------------- | ------------------------------------------------------------------------------ |
| \_additionLevel | Int             | The value of level to be up                                                    |
| \_sender        | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

#### Event

Developer can register for Level value change event to listen for value changes.

```cs
public Action<float, NetworkIdentity> ObjectLevelSyncedCallback;
```

#### Example

```cs
Getcomponent<NetworkPropertiesSync>().ObjectLevelSyncedCallback += (_level_,_sender)=>{
    //TODO: YOUR Logic code here
}
```

---

### CmdDegradeLevel

```cs
public void CmdDegradeLevel(int _level, NetworkIdentity _sender)
```

#### Description

Change the entity level value. You can register Level value change events to listen for value changes.

#### Parameters

| Connection | Type            | Description                                                                    |
| ---------- | --------------- | ------------------------------------------------------------------------------ |
| \_level    | Int             | The value of level to be degrade                                               |
| \_sender   | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

#### Event

Developer can register for Level value change event to listen for value changes.

```cs
public Action<float, NetworkIdentity> ObjectLevelSyncedCallback;
```

#### Example

```cs
Getcomponent<NetworkPropertiesSync>().ObjectLevelSyncedCallback += (_level_,_sender)=>{
    //TODO: YOUR Logic code here
}
```

---

### CmdSetObjectName

```cs
public void CmdSetObjectName(string _name,NetworkIdentity _sender)
```

#### Description

Name your gameobject and sync to all user.

#### Parameters

| Connection | Type            | Description                                                                    |
| ---------- | --------------- | ------------------------------------------------------------------------------ |
| \_name     | string          | The value of name to set.                                                      |
| \_sender   | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

#### Event

Developer can register for name value change event to listen for value changes.

```cs
public Action<float, NetworkIdentity> ObjectNameSyncedCallback;
```

#### Example

```cs
Getcomponent<NetworkPropertiesSync>().ObjectNameSyncedCallback += (_name_,_sender)=>{
    //TODO: YOUR Logic code here
}
```

---

### CmdUpdateCustomProperties

```cs
public void CmdUpdateCustomProperties(string _customProperties,NetworkIdentity _sender)
```

#### Description

In addition to the above Properties, additional Properties can be added and sync to all user.

#### Parameters

| Connection         | Type            | Description                      |
| ------------------ | --------------- | -------------------------------- |
| \_customProperties | Int             | Incoming custom properties value |
| \_sender           | NetworkIdentity | The sender of the operation      |

#### Event

Developer can register for custom data change event to listen for value changes.

```cs
public Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;
```

#### Example

```cs
Getcomponent<NetworkPropertiesSync>().CustomPropertiesSyncedCallback += (_customdata,_sender)=>{
    //TODO: YOUR Logic code here
}
```

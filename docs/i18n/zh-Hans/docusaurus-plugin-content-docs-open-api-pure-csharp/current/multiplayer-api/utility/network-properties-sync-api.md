---
title: Network Properties Sync
---

## Description

NetworkPropertiesSync 组件将为 NetworkGameObject 提供属性。如对象的健康状况、等级、名称等。

## Properties

| Name                | Type        | Description                            |
| ------------------- | ----------- | -------------------------------------- |
| GetHealth           | Int Current | entity health value                    |
| GetObjectLevel      | Int         | Current entity level value             |
| GetObjectName       | String      | Current entity name value              |
| GetCustomProperties | String      | Current entity custom properties value |

## Events

注册一个回调事件来监听数值的变化。

```cs
public Action<float, NetworkIdentity> HealthSyncedCallback;
public Action<int, NetworkIdentity> ObjectLevelSyncedCallback;
public Action<string, NetworkIdentity> ObjectNameSyncedCallback;
public Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;
```

## Methods

### CmdSubtractHealth

#### Description

改变实体健康值。你可以注册健康值变化事件来监听值的变化。

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

改变实体健康值并同步到所有用户。

#### Parameters

| Connection | Type            | Description                                                                    |
| ---------- | --------------- | ------------------------------------------------------------------------------ |
| \_newValue | Int             | The value of health to be subtracted                                           |
| \_sender   | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

#### Event

开发者可以注册健康值变化事件来监听值的变化。

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

改变实体级别的值并同步到所有用户。

#### Parameters

| Connection      | Type            | Description                                                                    |
| --------------- | --------------- | ------------------------------------------------------------------------------ |
| \_additionLevel | Int             | The value of level to be up                                                    |
| \_sender        | NetworkIdentity | The sender of the operation. e.g. Player attack to enemy, the sender is player |

#### Event

开发者可以注册Level值变化事件来监听值的变化。

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

改变实体的级别值。你可以注册级别值变化事件来监听值的变化。

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

命名你的游戏对象并同步到所有用户。

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

开发者可以注册自定义数据变化事件来监听值的变化。

```cs
public Action<string, NetworkIdentity> CustomPropertiesSyncedCallback;
```

#### Example

```cs
Getcomponent<NetworkPropertiesSync>().CustomPropertiesSyncedCallback += (_customdata,_sender)=>{
    //TODO: YOUR Logic code here
}
```

---
sidebar_position: 1
title: Intruduce
---

在一个正常的多人游戏过程中，有许多与网络行为有关的事件可能发生。这些事件包括主机启动、玩家加入或玩家离开等。每一个可能的事件都有一个相关的回调，你可以在你自己的代码中实现，当事件发生时采取行动。

当你把NetworkingCallbacks添加到你的游戏对象中时，你可以访问所有的Networking回调事件，并注册你自己的方法，当这些事件发生时应该发生什么。要做到这一点，你要用NetworkingCallbacks组件的相应Callbacks事件注册实现自定义逻辑，即当一个给定的事件发生时应该发生什么。

事件汇使用委托设计模型。其目的是响应网络框架中的RPC和Attribute同步。XR-MOD分为两部分：`事件实现`和`事件触发`。

:::caution
All event callbacks registered must be in OnEnable or Awake.
:::

### Example

In this example we have two parts:

1. We register `ClientStringAction` on OnEnable or Awake Method and implement event logic
2. Call `ClientStringSender` (execute logic on the client side)

```cs title="Register event"
private void Awake()
{
    networkCallbacks.ClientStringAction ??= new Dictionary<string, Action<string, NetworkIdentity>>();
    networkCallbacks.ClientStringAction.TryAdd(CONST_SHOOTING_EVENT, (_data, _sender) =>
    {
        //TODO: Game Logic will to sync
        Debug.Log($"The Traffica Light color is {_data}");
    });
}
```

```cs title="Trigger event"
internal void SendTrafficLightCommand()
{
    //Trigger event
    networkCallbacks.ClientStringSender(CONST_SHOOTING_EVENT, "Red Light", this.NetworkIdentity);
}
```

:::caution
在执行`ClientStringSender`方法时，应该注意该方法触发的事件名称必须与`注册的事件名称`相同，否则不能执行。
:::

---

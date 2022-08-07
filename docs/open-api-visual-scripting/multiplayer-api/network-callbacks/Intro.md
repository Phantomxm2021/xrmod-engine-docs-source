---
sidebar_position: 1
title: Intruduce
---

There are a number of events relating to network behaviours that can occur over the course of a normal multiplayer game. These include events such as the host starting up, a player joining, or a player leaving. Each of these possible events has an associated callback that you can implement in your own code to take action when the event occurs.

When you add NetworkingCallbacks to your game object, you can access all the Networking callbacks events and register your own methods for what should happen when those events occur. To do this, you register to implement custom logic with the corresponding Callbacks events of the NetworkingCallbacks component, i.e. what should happen when a given event occurs.

Event sinks use the delegation design model. The purpose is to respond to RPC and Attribute synchronization in the network framework.XR-MOD is divided into two parts: `event implementation` and `event triggering`.

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
When executing the `ClientStringSender` method, it should be noted that the name of the event triggered by the method must be the same as the `registered event name`, otherwise it cannot be executed.
:::

---

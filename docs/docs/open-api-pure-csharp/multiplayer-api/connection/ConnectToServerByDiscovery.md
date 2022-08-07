---
sidebar_position: 1
title: Connect To ServerByDiscovery
---

```cs
publi cvoid ConnectToServerByDiscovery()
```

### Description

Suppose you are next to a friend. He starts the game in moderator mode and you want to join him. How will your phone locate him? Finding out his IP address isn't very intuitive, and it's not something kids can do. To fix this, you can use network discovery. When your game starts, it will send a message in your current network asking "Are there any servers available?". Any server within the same network will reply with information on how to connect to it.
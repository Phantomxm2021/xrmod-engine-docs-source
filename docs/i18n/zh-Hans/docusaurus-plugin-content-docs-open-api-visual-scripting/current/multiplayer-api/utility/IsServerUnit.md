---
title: Is Server Unit
---

## Description

判断当前对象是否由Server管理的

## Return

| Type | Description                                                                               |
| ---- | ----------------------------------------------------------------------------------------- |
| Bool | True if this game object is running on the server, and has been spawned. False otherwise. |

## Parameters

| Connection | Type            | Description                                    |
| ---------- | --------------- | ---------------------------------------------- |
| Target     | NetworkIdentity | Need to check of authority network game object |

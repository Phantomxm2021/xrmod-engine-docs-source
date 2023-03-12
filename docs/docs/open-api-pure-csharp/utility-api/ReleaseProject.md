---
title: ReleaseProject
---

## Description

Release the specified runtime project.

## Parameters

| Param         | Type   | Description                       |
| ------------- | ------ | --------------------------------- |
| \_projectName | string | Will release runtime project name |

## Method

```cs
public string ReleaseProject(string _projectName)
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    ARMODAPI.ReleaseProject("SolarSystem");
}
```

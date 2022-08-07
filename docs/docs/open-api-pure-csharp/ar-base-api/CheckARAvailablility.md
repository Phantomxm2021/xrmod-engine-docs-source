---
title: CheckARAvailablility
---

## Description

Check whether the current device supports ARKit or ARCore

## Return

| Type                                        | Description                   |
| ------------------------------------------- | ----------------------------- |
| <highlight color="#6F5DF6">Bool</highlight> | True:Supports,False:otherwise |

## Method

```cs
public bool CheckARAvailability()
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad()
{
    if(ARMODAPI.CheckARAvailability()){
        Debug.Log("AR Availability");
    }
}
```

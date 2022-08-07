---
title: CheckARAvailablility
---

## Description

检测当前设备是否支持 ARKit 或者 ARCore

## Return

| Type                                        | Description                   |
| ------------------------------------------- | ----------------------------- |
| <highlight color="#6F5DF6">Bool</highlight> | True 支持,False:不支持 |

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

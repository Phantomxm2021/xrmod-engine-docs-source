---
title: SaveKeyAndValue
---

## Description

Store temporary data locally. `SaveKeyAndValue` is a method that stores Experience case preferences between project sessions. It can store string into the user’s platform registry.

Sets a single string value for the preference identified by the given key and project. You can use `ARMODAPI.GetValueByKey` to retrieve this value.

## Parmaters

| Param         | Description                                                    |
| ------------- | -------------------------------------------------------------- |
| \_projectName | Use ProjectName+Key storage to prevent Key from being occupied |
| \_key         | Unique Name                                                    |
| \_value       | Data tha nedds to be saved                                     |

## Method

```cs
public void SaveKeyAndValue(string _projectName, string _key, string _value)
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    ARMODAPI.SaveKeyAndValue(nameof(APITest),"StoreKey","StoreValue");
    Debug.Log(ARMODAPI.GetValueByKey(nameof(APITest),"StoreKey"));
}
```

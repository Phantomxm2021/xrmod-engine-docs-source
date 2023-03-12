## 描述

获取当前 ARexperience 项目信息。例如，你想用于 restful api。

## 返回值

| Type                                          | 描述                              |
| --------------------------------------------- | --------------------------------- |
| <highlight color="#AE6221">String</highlight> | 当前 XR-Experience 项目的唯一标识 |

## 方法

```cs
public string TryAcquireProjectInfo()
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_CurrentProjectUid = ARMODAPI.TryAcquireProjectInfo();
    Debug.Log($"Current Project uid:{tmp_CurrentProjectUid}");
}
```

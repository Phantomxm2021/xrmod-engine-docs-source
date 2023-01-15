## 描述

获取当前的App临时缓存路径

## 返回值

| Type                                          | 描述                             |
| --------------------------------------------- | --------------------------------------- |
| <highlight color="#AE6221">String</highlight> | 当前应用程序的临时缓存路径 |

## 方法

```cs
public string TryAcquireTemporaryCachePath()
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_TemporaryPath = ARMODAPI.TryAcquireTemporaryCachePath();
    Debug.Log($"Path:{tmp_TemporaryPath}");
}
```

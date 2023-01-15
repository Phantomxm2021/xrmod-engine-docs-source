## 描述

获取当前 sdk 类型。为一个内容提供多平台适应性。

## 返回值

| Type                                          | 描述          |
| --------------------------------------------- | ------------- |
| <highlight color="#AE6221">String</highlight> | 当前 SDK 平台 |

## 方法

```cs
public string TryAcquireSdkType()
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    var tmp_SDKType = ARMODAPI.TryAcquirTryAcquireSdkTypeTemporaryCachePath();
    Debug.Log($"Path:{tmp_SDKType}");
}
```

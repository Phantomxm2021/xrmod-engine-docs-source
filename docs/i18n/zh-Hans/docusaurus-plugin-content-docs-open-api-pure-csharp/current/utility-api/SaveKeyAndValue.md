## 描述

本地存储临时数据。`SaveKeyAndValue`是一个在项目会话之间存储经验案例偏好的方法。它可以将字符串存储到用户的平台注册表中。

为由给定的键和项目确定的偏好设置一个单一的字符串值。你可以使用`ARMODAPI.GetValueByKey`来检索这个值。

## 参数

| Param         | 描述                                  |
| ------------- | ------------------------------------- |
| \_projectName | 使用项目名称+密钥存储，防止密钥被占用 |
| \_key         | 独一无二的名字                        |
| \_value       | 需要保存的数据                        |

## 方法

```cs
public void SaveKeyAndValue(string _projectName, string _key, string _value)
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    ARMODAPI.SaveKeyAndValue(nameof(APITest),"StoreKey","StoreValue");
    Debug.Log(ARMODAPI.GetValueByKey(nameof(APITest),"StoreKey"));
}
```

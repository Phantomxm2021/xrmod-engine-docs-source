## 描述

如果发生异常，该方法将被执行

## 参数

| Param   | 描述      |
| ------- | ---------------- |
| message | SDK error string |
| code    | SDK error code   |

## 方法
```cs
public static event Action<string, int> ThrowExceptionEventHandle;
```

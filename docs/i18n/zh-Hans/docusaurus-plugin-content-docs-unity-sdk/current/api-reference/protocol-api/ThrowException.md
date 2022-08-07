## Description

如果发生异常，该方法将被执行

## Parameters

| Param   | Description      |
| ------- | ---------------- |
| message | SDK error string |
| code    | SDK error code   |

## Method
```cs
public static event Action<string, int> ThrowExceptionEventHandle;
```

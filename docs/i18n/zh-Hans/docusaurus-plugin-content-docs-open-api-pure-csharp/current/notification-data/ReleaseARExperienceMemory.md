
## 描述

退出AR时调用的方法。它通常用于管理对象，通过调用 Unity API 创建。

## 例子

```cs
public void ReleaseARExperienceMemory()
{
    Destory(new GameObject("Unity API's Created"));
}
```

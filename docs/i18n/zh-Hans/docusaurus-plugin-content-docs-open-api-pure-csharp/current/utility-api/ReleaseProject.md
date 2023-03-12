---
title: ReleaseProject
---

## 描述

释放指定的运行时项目。

## 参数

| 参数          | 类别   | 描述                 |
| ------------- | ------ | -------------------- |
| \_projectName | string | 将要被释放的项目名称 |

## 方法

```cs
public string ReleaseProject(string _projectName)
```

## 例子

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad(){
    ARMODAPI.ReleaseProject("SolarSystem");
}
```

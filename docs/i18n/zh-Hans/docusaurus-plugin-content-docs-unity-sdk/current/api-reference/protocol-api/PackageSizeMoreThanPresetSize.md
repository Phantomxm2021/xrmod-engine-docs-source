## 描述

检测到 ARExperience 软件包太大

## 参数

| Param       | 描述               |
| ----------- | ------------------------- |
| currentSize | 当前包体大小（M）         |
| presetSize  | 当前允许下载包体大小（M） |

## 方法

```cs
public static event Action<float, float> PackageSizeMoreThanPresetSizeEventHandle;

```

## 描述

BaseNotificationData 的子类。使用 Immersal 时，这种类型的数据。

## 参数

| Param         | Type          | 描述        |
| ------------- | ------------- | ----------- |
| MapId         | int           | 当前地图 ID |
| LocalizerPose | LocalizerPose | 配准信息    |

```cs
public struct LocalizerPose
{
    public bool valid;
    public double[] mapToEcef;
    public Matrix4x4 matrix;
    public Pose lastUpdatedPose;
    public double vLatitude;
    public double vLongitude;
    public double vAltitude;
}
```

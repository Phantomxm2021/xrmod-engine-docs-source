
## Description

Subclass of BaseNotificationData. When using image tracking, the OnEvent function will receive this type of data.

## Parameters

| Param         | Type          | Description                                                    |
| ------------- | ------------- | -------------------------------------------------------------- |
| MapId         | int           | Current map id                                                 |
| LocalizerPose | LocalizerPose | registration information |

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

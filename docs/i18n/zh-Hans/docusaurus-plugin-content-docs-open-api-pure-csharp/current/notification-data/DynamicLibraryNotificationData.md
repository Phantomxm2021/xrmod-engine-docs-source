## 描述

BaseNotificationData的子类。当您调用 [AddNewImageForTracking](../ar-base-api/AddNewImageForTracking) 方法时，需要将此数据传递给XRMOD。

## 参数

| 参数   | 类别      | 描述                 |
| ------- | --------- | --------------------------- |
| name    | String    | 跟踪图像名称（唯一） |
| texture | Texture2D | 需要跟踪图像              |
| width   | Float     | 跟踪图像物理尺寸   |

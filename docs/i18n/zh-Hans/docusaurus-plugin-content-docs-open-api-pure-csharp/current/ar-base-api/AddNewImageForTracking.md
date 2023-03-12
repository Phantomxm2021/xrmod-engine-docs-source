---
title: AddNewImageForTracking
---

## 描述

将来自URL的图像添加到XRMOD，将用于跟踪（**仅 ImageTracking**）。

### 参数

| 参数               | 类型              | 介绍          |
| ------------------- | ----------------- | -------------------- |
| \_imageTrackingData | ImageTrackingData | 要添加的图像详细信息 |

## 方法

```csharp
public void AddNewImageForTracking()
```

## Example

```csharp
ARMODAPI API = new ARMODAPI("TEST_PROJECT");
public void OnLoad(){
    if (!Application.isEditor)
    {
        var tmp_ImageData = new List<DynamicLibraryNotificationData.ImageData>();
        foreach (ImageTrackingData tmp_TrackingData in tmp_ProjectData.image_tracking_list)
        {
            tmp_ImageData.Add(new DynamicLibraryNotificationData.ImageData()
            {
                name = tmp_TrackingData.image_name,
                texture = await Utils.GetTextureFromUrl(tmp_TrackingData.image_url),
                width = tmp_TrackingData.image_scale.x
            });
        }

        ARMODAPI.AddNewImageForTracking(tmp_ImageData);
    }
}
```

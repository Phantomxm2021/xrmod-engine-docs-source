---
title: AddNewImageForTracking
---

## Description

Adds an image from URL to XRMOD that will be used for tracking(**Only ImageTracking**).

:::danger
Only support SDK 2.0.0-pre.16
:::

### Parameters

| Param               | Type              | Description          |
| ------------------- | ----------------- | -------------------- |
| \_imageTrackingData | ImageTrackingData | Image details to add |

## Method

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

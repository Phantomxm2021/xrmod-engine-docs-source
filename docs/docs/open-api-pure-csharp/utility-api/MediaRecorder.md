---
title: MediaRecorder
---

## Description

Call the method to record a video or taking photo.

## Parameters

| Param           | Type | Description               |
| --------------- | ---- | ------------------------- |
| \_stop          | bool | Stop video recording      |
| \_takePhotoMode | bool | Switch to take photo mode |

## Method

```cs
public void MediaRecorder(bool _stop, bool _takePhotoMode)
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private async void OnLoad(){
    // Start a video recording
    ARMODAPI.MediaRecorder(false,false);

    // Record a 2-second video
    await Task.Delay(2000);

    // Stop video recording and save it
    ARMODAPI.MediaRecorder(true,false);

}
```

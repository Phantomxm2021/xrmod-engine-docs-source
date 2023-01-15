## 描述

调用该方法来录制视频或拍摄照片。

## 参数

| Param           | Type | 描述           |
| --------------- | ---- | -------------- |
| \_stop          | bool | 停止视频录制   |
| \_takePhotoMode | bool | 切换到拍照模式 |

## 方法

```cs
public void MediaRecorder(bool _stop, bool _takePhotoMode)
```

## 例子

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

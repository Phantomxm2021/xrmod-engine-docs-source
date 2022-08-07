---
title: ARRaycast
---

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/ARRaycast.mp4" className="custom-video-showcase" />

## Description

从屏幕空间中的一个点向可跟踪对象投射光线，即检测到的特征，例如平面。

### Parameters

| Param           | Type               | Description                          |
| --------------- | ------------------ | ------------------------------------ |
| \_screenPoint   | Vector3            | 以设备屏幕像素为单位进行投射的点。   |
| \_trackableType | TrackableTypeEnum  | 要投射的可追踪对象的类型。           |
| \_callback      | Action&lt;Pose&gt; | 如果成功，内容将替换为光线投射结果。 |

### Method

```cs
public void ARRaycast(Vector3 _screenPoint,TrackableTypeEnum _trackableType,Action<Pose\>_callback)
```

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private GameObject cubePrefab;
public async void OnLoad()
{
    cubePrefab = await ARMODAPI.LoadAssetAsync<GameObject>("Cube");
}
public void OnUpdate()
{
    if (!Input.GetMouseButtonDown(0)) return;
    ARMODAPI.ARRaycast(Input.mousePosition, TrackableTypeEnum.AllTypes, _pose =>
    {
        var tmp_CubeClone = GameObject.Instantiate(cubePrefab);
        tmp_CubeClone.SetActive(false);
        var tmp_CubeCloneTrans = tmp_CubeClone.transform;
        tmp_CubeCloneTrans.SetPositionAndRotation(_pose.position, _pose.rotation);
        tmp_CubeClone.SetActive(true);
    });
}
```
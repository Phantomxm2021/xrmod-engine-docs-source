---
title: ARRaycast
---


import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/ARRaycast.mp4" className="custom-video-showcase" />

## Description

Cast a ray from a point in screen space against trackables, i.e., detected features such as planes.

### Parameters

| Param           | Type               | Description                                                    |
| --------------- | ------------------ | -------------------------------------------------------------- |
| \_screenPoint   | Vector3            | The point, in device screen pixels, from which to cast.        |
| \_trackableType | TrackableTypeEnum  | The types of trackables to cast against.                       |
| \_callback      | Action&lt;Pose&gt; | Contents are replaced with the raycast results, if successful. |

### Method

```cs
public void ARRaycast(Vector3 _screenPoint,TrackableTypeEnum _trackableType,Action%<%Pose%>% _callback)
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
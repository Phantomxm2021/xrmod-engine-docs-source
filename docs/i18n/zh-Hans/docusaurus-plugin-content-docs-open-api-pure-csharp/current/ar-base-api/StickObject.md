---
title: StickObject
---

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src={require('@site/static/static/videos/place-anchor.mp4')} className="custom-video-showcase" />

## Description

将一个虚拟物体贴到现实世界。

:::caution
这个方法将自动创建Anchor进行定位，所以如果您用这个方法生成多个锚，会影响您的性能。
:::

## Parameters

| Param                | Type                   | Description            |
| -------------------- | ---------------------- | ---------------------- |
| \_anchorNotification | AnchorNotificationData | 用于设置虚拟物体的数据 |

## Method

```cs
public void StickObject(AnchorNotificationData _anchorNotification)
```

## Example

```cs
internal static API ARMODAPI = new API(nameof(AnchorTest));
private GameObject virtualObjectPrefab;
public async void OnLoad()
{
    //Use this for initialization. Please delete the function if it is not used

    Object.Instantiate(await ARMODAPI.LoadAssetAsync<GameObject>("EventSystem"));

    virtualObjectPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("VirtualObject");
}

public void OnUpdate()
{
    //Like Unity Update method. Please delete the function if it is not used
    if (!Input.GetMouseButtonDown(0)) return;
    var tmp_StickData = new AnchorNotificationData
    {
        NotificationAct = () =>
        {
            Debug.Log("Notification Act executed");
        },
        NotificationActWithData = (_r) => { Debug.Log("Notification Act"); },
        StickType = AnchorNotificationData.StickTypeEnum.ByTrackableType,
        TrackableType = TrackableTypeEnum.PlaneWithinPolygon,
        Position = Input.mousePosition,
        AnchorPrefab = virtualObjectPrefab
    };

    ARMODAPI.StickObject(tmp_StickData);
}
```


## Relation

在这个API（`StickObject`）中，我们使用`AnchorNotificationData`来存储我们想要发送的数据；[点击这里](../notification-data/AnchorNotificationData) 了解更多关于`AnchorNotificationData`。


---
title: StickObject
---

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/place-anchor.mp4" className="custom-video-showcase" />

## Description

Stick a virtual object to real world.

:::caution
This method will automatically create Anchor for positioning, so if you use this method to generate multiple anchors it will affect your performance.
:::

## Parameters

| Param                | Type                   | Description                     |
| -------------------- | ---------------------- | ------------------------------- |
| \_anchorNotification | AnchorNotificationData | Data sent to the anchor manager |

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

In this API (`StickObject`), we use `AnchorNotificationData` to store the data we want to send; [click here](#) to learn more about `AnchorNotificationData`.


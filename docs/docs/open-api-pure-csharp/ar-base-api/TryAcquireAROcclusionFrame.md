---
title: TryAcquireAROcclusionFrame
---

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/AROcclusionFrame.mp4" className="custom-video-showcase" />

## Description

Get AR Occlusion frame texture.

:::tip
Without virtual object.
:::


## Return

| Type                                           | Description        |
| ---------------------------------------------- | ------------------ |
| <highlight color="#AADAFB">Texture</highlight> | A texture of Unity |

## Method

```cs
public Texture2D TryAcquireAROcclusionFrame(AROcclusionNotificationData _data)
```


## Exapmle

```cs
//ARMOD API        
internal static API ARMODAPI = new API(nameof(TryAcquireFrameTest));
private TryAcquireCurrentFrameNotificationData tryAcquireCurrentFrame;
private AROcclusionNotificationData humanStencil;
private AROcclusionNotificationData humanDepth;
private AROcclusionNotificationData environment;
private AROcclusionNotificationData environmentConfidence;
private AROcclusionNotificationData rawEnvironmentDepth;
private AROcclusionNotificationData smoothedEnvironmentDepth;

public async void OnLoad()
{
    //Use this for initialization. Please delete the function if it is not used
    tryAcquireCurrentFrame = new TryAcquireCurrentFrameNotificationData
    {
        AcquiredTextureFormat = TextureFormat.RGB24,
        ConversionType = ConversionType.Synchronous
    };
    humanStencil = new AROcclusionNotificationData
    {
        OcclusionDataType = OcclusionDataType.HumanStencil
    };

    humanDepth = new AROcclusionNotificationData
    {
        OcclusionDataType = OcclusionDataType.HumanDepth
    };
    
    environment = new AROcclusionNotificationData
    {
        OcclusionDataType = OcclusionDataType.Environment
    };

    environmentConfidence = new AROcclusionNotificationData
    {
        OcclusionDataType = OcclusionDataType.EnvironmentConfidence
    };

    rawEnvironmentDepth = new AROcclusionNotificationData
    {
        OcclusionDataType = OcclusionDataType.RawEnvironmentDepth
    };

    smoothedEnvironmentDepth = new AROcclusionNotificationData
    {
        OcclusionDataType = OcclusionDataType.SmoothedEnvironmentDepth
    };

    var tmp_FrameCanvasPrefab = await ARMODAPI.LoadAssetAsync<GameObject>("FrameCanvas");
    var tmp_FrameCanvas = Object.Instantiate(tmp_FrameCanvasPrefab);
    uiManager = tmp_FrameCanvas.GetComponent<UIManager>();
    Assert.IsNotNull(uiManager);
}

public void OnUpdate()
{
    //Like Unity Update method. Please delete the function if it is not used
    if (uiManager == null) return;
    var tmp_FrameT2d = ARMODAPI.TryAcquireCurrentFrame(tryAcquireCurrentFrame);
    if (tmp_FrameT2d && uiManager.FrameTex != null)
        uiManager.FrameTex.texture = tmp_FrameT2d;
    var tmp_HumanT2d = ARMODAPI.TryAcquireAROcclusionFrame(humanStencil);
    if (tmp_HumanT2d)
        uiManager.HumanTex.texture = tmp_HumanT2d;
    
    var tmp_HumanDepthT2d = ARMODAPI.TryAcquireAROcclusionFrame(humanDepth);
    if (tmp_HumanDepthT2d)
        uiManager.HumanDepthTex.texture = tmp_HumanDepthT2d;
    
    var tmp_EnvT2d = ARMODAPI.TryAcquireAROcclusionFrame(environment);
    if (tmp_EnvT2d)
        uiManager.EnvTex.texture = tmp_EnvT2d;
    
    var tmp_EnvConfidenceT2d = ARMODAPI.TryAcquireAROcclusionFrame(environmentConfidence);
    if (tmp_EnvConfidenceT2d)
        uiManager.EnvConfidenceTex.texture = tmp_EnvConfidenceT2d;
    
    var tmp_EnvRawT2d = ARMODAPI.TryAcquireAROcclusionFrame(rawEnvironmentDepth);
    if (tmp_EnvRawT2d)
        uiManager.EnvRawTex.texture = tmp_EnvRawT2d;
    
    var tmp_EnvSmoothT2d = ARMODAPI.TryAcquireAROcclusionFrame(smoothedEnvironmentDepth);
    if (tmp_EnvSmoothT2d)
        uiManager.EnvSmoothTex.texture = tmp_EnvSmoothT2d;
}
```
---
title: TryAcquireCurrentFrame
---

## Description

Get current AR frame texture

:::tip
Without virtual object.
:::

## Return

| Type                                           | Description                 |
| ---------------------------------------------- | --------------------------- |
| <highlight color="#AADAFB">Texture</highlight> | A texture of current frame. |

## Method

```cs
public Texture2D TryAcquireCurrentFrame()
```

## Example

```cs
//XRMOD API
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
}
```

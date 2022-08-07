---
title: CheckFeatureAvailability
---

## Description

Check AR features are support on current device

## Return

| Type                                        | Description                   |
| ------------------------------------------- | ----------------------------- |
| <highlight color="#6F5DF6">Bool</highlight> | True:Supports,False:otherwise |

## Method

```cs
public bool CheckFeatureAvailability(string _featureName)
```

| FeatureName                |
| -------------------------- |
| SimpleAR                   |
| ImageTracking              |
| Anchors                    |
| CpuImages                  |
| EnvironmentProbes          |
| ARCollaborationData        |
| ARKitCoachingOverlay       |
| ObjectTracking             |
| FaceTracking               |
| BodyTracking               |
| BasicLightEstimation       |
| HDRLightEstimation         |
| PlaneClassification        |
| Meshing                    |
| Depth                      |
| ThermalState               |
| TryAcquireAROcclusionFrame |

## Example

```cs
internal static API ARMODAPI = new API(nameof(APITest));
private void OnLoad()
{
    if(ARMODAPI.CheckFeatureAvailability("SimpleAR")){
        Debug.Log("SimpleAR Availability");
    }
}
```

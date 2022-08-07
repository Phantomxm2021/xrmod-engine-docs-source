---
title: OnLoad
---

## Description

OnLoad method called when the ARExperience package is loaded. OnLoad method is generally used to load resources and prepare resources.

## Example

```cs
private const string CONST_CANVAS = "Canvas";
private const string CONST_PROJECT_NAME = "PortalExample";
public static readonly API API = new API();
private GameObject canvas;
private GameObject tipsUI;
private GameObject augmentedRealityVirtualObject;
private Transform augmentedRealityVisualizerTransform;
private Transform mainCameraTrans;
​
//Please delete the function if it is not used
public void OnLoad()
{
    //Loading the UGUI
    API.LoadGameObject(CONST_PROJECT_NAME, CONST_CANVAS,
        _canvas =>
        {
            canvas = API.InstanceGameObject(_canvas, "", null);
            tipsUI = API.FindGameObjectByName("Tips");
            tipsUI.SetActive(true);
        });

    //Get MainCamera(ARCamera)
    mainCameraTrans = GameObject.FindWithTag("MainCamera").transform;

    //Loding AR virutal object
    API.LoadGameObject(CONST_PROJECT_NAME, CONST_PROJECT_NAME, _augmentedRealityVirutalObject =>
    {
        augmentedRealityVirtualObject = API.InstanceGameObject(_augmentedRealityVirutalObject, "", null);
        augmentedRealityVisualizerTransform = augmentedRealityVirtualObject.transform;
        augmentedRealityVirtualObject.SetActive(false);
    });
}
```

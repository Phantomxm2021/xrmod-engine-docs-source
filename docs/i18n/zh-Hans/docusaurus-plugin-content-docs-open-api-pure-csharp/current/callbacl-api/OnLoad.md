---
title: OnLoad
---

## Description

加载 ARExperience 包时调用的方法，以加载资源并准备资源。

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

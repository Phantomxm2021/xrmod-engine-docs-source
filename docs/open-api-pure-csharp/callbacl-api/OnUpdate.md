---
title: OnUpdate
---

## Description

OnUpdate method running every frame when ARExperience package is loaded. OnUpdate is the same as Update in Unity.OnUpdate is executed after ​Since OnUpdate is running every frame it is quite performance intensive.

## Example

```cs
private bool placed;
private Vector3 position;
private Quaternion rotation;
​
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
​
//Please delete the function if it is not used
public void OnUpdate()
{
    if (placed) return;
    if (!Input.GetMouseButtonDown(0)) return;
    tipsAlphaAnimation.StartFade(0);
    AnchorNotificationData tmp_AnchorData = new AnchorNotificationData
    {
        Offset = mainCameraTrans.forward * 2.5f,
        Position = Input.mousePosition,
        StickType = AnchorNotificationData.StickTypeEnum.ByScreen,
        TrackableType = AnchorNotificationData.TrackableTypeEnum.All,
        ControllerTargetNode = augmentedRealityVirtualObject,
        ActionName = "AnchorPlace",
        NotificationAct = () =>
        {
            API.FindGameObjectByName("PortalMesh").AddComponent<PortalInteractor>();
            API.FindGameObjectByName(CONST_PROJECT_NAME).GetComponentInChildren<Animator>().SetTrigger("Open");
            augmentedRealityVirtualObject.SetActive(true);
            placed = true;
        }
    };
    API.StickObject(tmp_AnchorData);
}
```
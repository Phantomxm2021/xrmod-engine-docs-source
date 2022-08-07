---
title: OnUpdate
---

## Description

当ARExperience包被加载时，OnUpdate方法每帧运行一次。OnUpdate和Unity中的Update是一样的。OnUpdate是在每一帧运行后执行的，因为OnUpdate是每一帧运行的，所以对性能要求很高。

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
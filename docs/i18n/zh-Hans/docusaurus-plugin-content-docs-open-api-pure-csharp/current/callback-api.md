---
sidebar_position: 2
title: Life Cycle API
---

## What is XRMOD Events?

ARMODE 事件是一个脚本（类），它也是任何 AR 体验的交互式逻辑的入口点；它通常由包工具在创建项目时创建。

:::caution
它们仅在 Programmalbe 配置条目中填写的类中执行。 一个ARExperience 只有一个入口。
:::

## OnLoad

### 描述

加载 ARExperience 包时调用的方法，以加载资源并准备资源。

###  示例

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

---

## OnUpdate

### 描述

加载 ARExperience 包时每帧运行的 OnUpdate 方法。 OnUpdate 与 Unity 中的 Update 相同。OnUpdate 在 OnLoad 之后执行

:::caution
由于 OnUpdate 在每一帧都运行，因此性能非常密集。
:::

###  示例

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

---

## OnEvent

### 描述

OnEvent 是一个 AR 算法回调方法。来自 AR 算法的所有反馈都将通知给该方法。例如当图像跟踪状态改变时执行。

###  示例

```cs
//Please delete the function if it is not used
public void OnEvent(BaseNotificationData _data)
{
    if (placed) return;
    if (focusGroup == null) return;
    if (focusFinding == null) return;
    if (focusFound == null) return;
    if (placeButtonGameObject == null) return;
​
    if (_data is FocusResultNotificationData _FocusResult)
    {
        switch (_FocusResult.FocusState)
        {
            case FindingType.Finding:
                focusGroup.SetActive(true);
                focusFound.SetActive(false);
                focusFinding.SetActive(true);
                placeButtonGameObject.SetActive(false);
                break;
            case FindingType.Found:
                focusGroup.SetActive(true);
                focusFound.SetActive(true);
                focusFinding.SetActive(false);
                placeButtonGameObject.SetActive(true);
                break;
            case FindingType.Limit:
                focusGroup.SetActive(false);
                break;
        }
​
        worldPosition = _FocusResult.FocusPos;
        worldRotation = _FocusResult.FocusRot;
​
        //Move Focus Group
        focusGroupTrans.position = worldPosition;
        focusGroupTrans.rotation = worldRotation;
    }
}
```

---

## BaseNotificationData

### 描述

顾名思义，它是所有通知数据的基类。

###  入参

| Param           | Type   | Description                         |
| --------------- | ------ | ----------------------------------- |
| NotificationAct | Action | Callback                            |
| ActionName      | String | Current notification name           |
| BaseData        | String | Additional data, generally not used |

---

## MarkerNotificationData

### 描述

BaseNotificationData 的子类。使用图像跟踪时，这种类型的数据。

###  入参

| TrackingState | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| None          | The image is not being tracked. Note that this may be the initial state when the image is first detected.                                                                                                                                                                                                                                                                                                        |
| ​​ Limited    | The image is being tracked, but not as effectively. The situations in which an image is considered Limited instead of Tracking depend on the underlying AR framework. Examples that could cause Limited tracking include: 1.Obscuring the image so that it is not visible to the camera. 2.The image is not tracked as a moving image. This can happen, for example, if the maxNumberOfMovingImages is exceeded. |
| Tracking      | The underlying AR SDK reports that it is actively tracking the image.                                                                                                                                                                                                                                                                                                                                            |

| Param           | Type                | Description                                                                                 |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------- | --- |
| MarkerName      | String              | Current tracking or lost image's name                                                       |
| MarkerState     | MarkerTrackingState | Current tracking state                                                                      |
| BaseData        | String              | Additional data, generally not used                                                         |
| MarkerTrackable | Transform           | To track the transform of the image, you can set the parent of our AR virtual object to it. |     |

---

## AnchorNotificationData

### 描述

BaseNotificationData 的子类。当您调用时将此数据传递给 ARMODSDK。

###  入参

| Param         | Type              | Description                                                    |
| ------------- | ----------------- | -------------------------------------------------------------- |
| StickType     | StickTypeEnum     | Interactor type                                                |
| TrackableType | TrackableTypeEnum | You should set trackabletype when stick type is ByTackableTYpe |
| Position      | Vector3           | Anchor position(local position)                                |
| Rotation      | Quaternion        | Anchor rotation(local rotation)                                |
| Offset        | Vector            | Anchor offset position(local position)                         |

---

## ImmersalNotificationData

### 描述

BaseNotificationData 的子类。使用Immersal时，这种类型的数据。

###  入参

| Param         | Type          | Description                                                    |
| ------------- | ------------- | -------------------------------------------------------------- |
| MapId         | int           | Current map id                                                 |
| LocalizerPose | LocalizerPose | You should set trackabletype when stick type is ByTackableTYpe |

---

## FaceMeshNotificationData

### 描述

BaseNotificationData 的子类。使用Face Mesh时，这种类型的数据。

###  入参

| Param             | Type                       | Description                                                    |
| ----------------- | -------------------------- | -------------------------------------------------------------- |
| TrackingId        | String                     | Current map id                                                 |
| FaceGameObject    | GameObject                 | You should set trackabletype when stick type is ByTackableTYpe |
| FaceTrackingState | FaceTrackingState          | Current face tracking state                                    |
| vertices          | NativeArray&lt;Vector3&gt; | face mesh vertices                                             |
| indices           | NativeArray&lt;int&gt;     | face mesh indices                                              |
| normals           | NativeArray&lt;Vector3&gt; | face mesh normals                                              |
| uvs               | NativeArray&lt;Vector2&gt; | face mesh uvs                                                  |

---

## OpenBuiltInNotificationData

### 描述

BaseNotificationData 的子类。当您调用 OpenBuiltInBrowser 方法时，将需要将此数据传递给 ARMODSDK。

###  入参

| Param | Type   | Description                         |
| ----- | ------ | ----------------------------------- |
| Url   | String | URL of the webpage you want to open |
| Data  | String | Additional data                     |

## FocusResultNotificationData

### 描述

BaseNotificationData 的子类。使用图像跟踪时，这种类型的数据。

###  入参

| Param      | Type        | Description             |
| ---------- | ----------- | ----------------------- |
| FocusPos   | Vector3     | Focus's position        |
| FocusRot   | Vector3     | Focus's rotation        |
| FocusState | FindingType | Current tracking status |

---

## ARAlgorithmNotificationData

### 描述

BaseNotificationData 的子类。当您调用 ChangeARAlgorithmLife 方法时，将需要将此数据传递给 ARMODSDK。

###  入参
| Param               | Type                | Description                   |
| ------------------- | ------------------- | ----------------------------- |
| ARAlgorithmType     | ARAlgorithmType     | AR algorithm type             |
| ARAlgorithmOperator | ARAlgorithmOperator | AR life cycle operation types |
| Mixed               | bool                | Enable hybrid algorithm       |

---

## TryAcquireAppInfoNotificationData

### 描述

BaseNotificationData 的子类。当您调用 TryAcquireAppInfo 方法时，需要将此数据传递给 ARMODSDK。

###  入参

| Param       | Type   | Description            |
| ----------- | ------ | ---------------------- |
| GetInfoType | String | Opcode to get app info |

---

## AROcclusionNotificationData

### 描述

BaseNotificationData 的子类。当您调用 TryAcquireAROcclusionFrame 方法时，将需要将此数据传递给 ARMODSDK。

###  入参

| Param             | Type              | Description            |
| ----------------- | ----------------- | ---------------------- |
| OcclusionDataType | OcclusionDataType | AR occlusion data type |

---

## TryAcquireCurrentFrameNotificationData

### 描述

BaseNotificationData 的子类。当您调用 TryAcquireCurrentFrame 方法时，将需要将此数据传递给 ARMODSDK。

###  入参

| Param                 | Type           | Description               |
| --------------------- | -------------- | ------------------------- |
| AcquiredTextureFormat | TextureFormat  | Texture format            |
| ConversionType        | ConversionType | Synchronous, Asynchronous |

---

## ReleaseARExperienceMemory

### 描述

退出AR时调用的方法。它通常用于管理对象，通过调用 Unity API 创建。

###  示例

```cs
public void ReleaseARExperienceMemory()
{
Destory(new GameObject("Unity API's Created"),5)
}
```

​

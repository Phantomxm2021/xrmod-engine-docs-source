---
title: ChangeARAlgorithmLife
---

## Description

操作算法状态或启动其他算法，允许多种算法混合使用。

## Parameters

| Param  | Type                        | Description |
| ------ | --------------------------- | ----------- |
| \_data | ARAlgorithmNotificationData | 操作数据    |

## Method

```cs
public void ChangeARAlgorithmLife(ARAlgorithmNotificationData _data)
```

## Example

```cs
//XRMOD API
internal static API ARMODAPI = new API(nameof(APITest));
private GameObject cubePrefab;
private bool enabledAlgorithm;

public async void OnLoad()
{
    var tmp_UICanvas = Object.Instantiate(await ARMODAPI.LoadAssetAsync<GameObject>("UICanvas"));
    RuntimeTagManager.GetRuntimeTagManager.GetGameObjectByTag("LaunchAlgorithm",out var tmp_LaunchAlgorithmBtn);
    if (tmp_LaunchAlgorithmBtn)
    {
        tmp_LaunchAlgorithmBtn.GetComponent<Button>().onClick.AddListener(() =>
        {
            ARMODAPI.ChangeARAlgorithmLife(new ARAlgorithmNotificationData
            {
                NotificationAct = () =>
                {
                    enabledAlgorithm = true;
                    Debug.Log("NotificationAct");
                },
                ARAlgorithmType = ARAlgorithmType.Anchor,
                ARAlgorithmOperator = ARAlgorithmOperator.StartAlgorithm,
                Mixed = false
            });
        });
    }
}
```


## Relation
在这个API（ChangeARAlgorithmLife）中，我们使用`ARAlgorithmNotificationData`来存储我们想要发送的数据；点击[这里](../notification-data/ARAlgorithmNotificationData) 了解更多关于`ARAlgorithmNotificationData`。

### Switching Stereo or Monocular

```csharp
internal static readonly API ARMODAPI = new API(nameof(YOUR_PROJECT_NAME_HERE));
private bool isMRMode = false;
ARMODAPI.ChangeARAlgorithmLife(new ARAlgorithmNotificationData
{
    BaseData = isMRMode ? "0" : "1",
    ARAlgorithmType = ARAlgorithmType.Stereo,
    ARAlgorithmOperator = ARAlgorithmOperator.StartAlgorithm,
    Mixed = false
});
```
:::danger
在这里，我们需要传递**BaseData**数据。0代表单眼模式，1代表立体模式。
:::
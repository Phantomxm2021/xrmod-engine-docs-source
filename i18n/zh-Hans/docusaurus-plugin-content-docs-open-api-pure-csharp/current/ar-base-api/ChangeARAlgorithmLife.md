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
//ARMOD API
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
In this API (ChangeARAlgorithmLife), we use `ARAlgorithmNotificationData` to store the data we want to send; click [here](#) to learn more about `ARAlgorithmNotificationData`.
---
title: ChangeARAlgorithmLife
---

## Description

Call this function to control the AR algorithm state, It also allows a mix of algorithms to be used.

## Parameters

| Param  | Type                        | Description                 |
| ------ | --------------------------- | --------------------------- |
| \_data | ARAlgorithmNotificationData | The AR life controller data |

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
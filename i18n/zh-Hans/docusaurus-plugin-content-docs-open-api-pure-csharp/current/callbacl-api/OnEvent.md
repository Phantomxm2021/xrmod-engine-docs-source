---
title: OnEvent
---

## Description

OnEvent 是一个 AR 算法回调方法。来自 AR 算法的所有反馈都将通知给该方法。例如当图像跟踪状态改变时执行。

:::info E.g. 
当平面检测状态改变时，它将被执行。
:::

## Parameters

| Type                 | Description      |
| -------------------- | ---------------- |
| BaseNotificationData | The event result |

## Example

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

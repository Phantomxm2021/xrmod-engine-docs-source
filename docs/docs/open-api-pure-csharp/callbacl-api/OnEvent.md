---
title: OnEvent
---

## Description

OnEvent is a AR algorithm callback method. All feedback from the AR algorithm will be notified to the method. 

:::info E.g. 
It will be executed when the plane detect status changes.
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

## Description

Subclass of BaseNotificationData. When you are call the StickObject method will be need pass this data to ARMOD SDK.

## Return

| Type          | Description                         |
| ------------- | ----------------------------------- |
| ​​Anchor Data | The data of create anchor operation |

## Parameters

| Connection             | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| TrackableType          | You should set trackabletype when stick type is ByTackableTYpe  |
| Position               | Anchor position(world position)                                 |
| Rotation               | Anchor rotation(worldrotation)                                  |
| Offset                 | Anchor offset position(local position)                          |
| Virtual Object         | You want to placed object                                       |
| Event Target           | Objects stored in response to events                            |
| Action Name            | Current action name                                             |
| Base data              | Addition string data                                            |
| Event Name             | The name of callback to trigger graph custom event              |
| Event Name With Result | The name of callback to trigger graph custom event inculde data |

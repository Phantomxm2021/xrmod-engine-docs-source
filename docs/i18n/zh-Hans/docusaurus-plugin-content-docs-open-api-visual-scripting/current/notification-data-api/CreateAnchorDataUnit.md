## Description

BaseNotificationData的子类。当你调用StickObject方法时，将需要把这些数据传递给ARMOD SDK。


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

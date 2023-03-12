## Description

Subclass of BaseNotificationData. When using image tracking, the XRMOD SDK Event Receiver function will receive this type of data.

## Parameters

| Param             | Type                   | Description                                                    |
| ----------------- | ---------------------- | -------------------------------------------------------------- |
| TrackingId        | String                 | Current map id                                                 |
| FaceGameObject    | GameObject             | You should set trackabletype when stick type is ByTackableTYpe |
| FaceTrackingState | FaceTrackingState      | Current face tracking state                                    |
| vertices          | NativeArray<Vector3\>  | face mesh vertices                                             |
| indices           | NativeArray<int\>      | face mesh indices                                              |
| normals           | NativeArray<Vector3\>  | face mesh normals                                              |
| uvs               | NaativeArray<Vector2\> | face mesh uvs                                                  |

​

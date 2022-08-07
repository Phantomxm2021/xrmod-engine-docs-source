## Description

BaseNotificationData的子类。当使用图像跟踪时，ARMOD SDK事件接收器函数将接收这种类型的数据。


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

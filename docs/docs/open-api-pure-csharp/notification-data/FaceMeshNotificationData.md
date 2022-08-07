
## Description

Subclass of BaseNotificationData. When using image tracking, the OnEvent function will receive this type of data.

## Parameters

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

## 描述

BaseNotificationData 的子类。使用 Face Mesh 时，这种类型的数据。

## 参数

| Param             | Type                       | 描述                   |
| ----------------- | -------------------------- | ---------------------- |
| TrackingId        | String                     | 追踪 Anchor 的 ID      |
| FaceGameObject    | GameObject                 | 当前脸部特效的物体     |
| FaceTrackingState | FaceTrackingState          | 当前的面部追踪状态     |
| vertices          | NativeArray&lt;Vector3&gt; | 面部网格顶点           |
| indices           | NativeArray&lt;int&gt;     | 定义面网格三角形的索引 |
| normals           | NativeArray&lt;Vector3&gt; | 面部网格法线           |
| uvs               | NativeArray&lt;Vector2&gt; | 脸部网格的 uvs         |

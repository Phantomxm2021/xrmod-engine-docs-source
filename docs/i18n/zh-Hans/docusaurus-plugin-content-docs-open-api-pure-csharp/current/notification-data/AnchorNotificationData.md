## 描述

BaseNotificationData 的子类。当您调用时将此数据传递给 ARMODSDK。

## 参数

| Param         | Type              | 描述                                                   |
| ------------- | ----------------- | ------------------------------------------------------------- |
| StickType     | StickTypeEnum     | 交互类型                                                      |
| TrackableType | TrackableTypeEnum | 当 Stick 类型为 ByTackableTYpe 时，你应该设置 trackabletype。 |
| Position      | Vector3           | 锚点位置(自身位置)                                            |
| Rotation      | Quaternion        | 锚定旋转（自身旋转）。                                        |
| Offset        | Vector            | 锚定偏移位置(自身位置)                                        |

## Description

也被称为命中测试，射线投射允许您确定一个（由原点和方向定义）与一个.的相交位置。 目前的射线投射接口只针对点云中的平面和点进行测试。射线投射接口类似于Unity物理模块中的接口，但是由于AR追踪器不一定在物理世界中存在，AR MOD提供了一个单独的接口。

## Parameters

| Connection     | Description                                            |
| -------------- | ------------------------------------------------------ |
| Input Trigger  | Start invoke this unit logic                           |
| Out Trigger    | Logical execution ends will perform the next operation |
| API            | Help creator to accessing the XR-MOD SDK features      |
| EventName      | Called after raycast hit                               |
| Trackable Type | Which type will be raycast hit                         |

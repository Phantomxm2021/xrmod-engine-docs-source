## Description

Also known as hit testing, ray casting allows you to determine where a (defined by an origin and direction) intersects with a . The current ray cast interface only tests against planes and points in the point cloud. The ray cast interface is similar to the one in the Unity Physics module, but since AR trackables don't necessarily have a presence in the physics world, AR MOD provides a separate interface.

## Parameters

| Connection     | Description                                            |
| -------------- | ------------------------------------------------------ |
| Input Trigger  | Start invoke this unit logic                           |
| Out Trigger    | Logical execution ends will perform the next operation |
| API            | Help creator to accessing the XR-MOD SDK features      |
| EventName      | Called after raycast hit                               |
| Trackable Type | Which type will be raycast hit                         |

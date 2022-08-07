
## Description

Subclass of BaseNotificationData. When using image tracking, the ARMOD SDK Event Receiver function will receive this type of data.

## Parameters
| Param           | Type                | Description                                                                                 |
| --------------- | ------------------- | ------------------------------------------------------------------------------------------- |
| MarkerName      | String              | Current tracking or lost image's name                                                       |
| MarkerState     | MarkerTrackingState | Current tracking state                                                                      |
| BaseData        | String              | Additional data, generally not used                                                         |
| MarkerTrackable | Transform           | To track the transform of the image, you can set the parent of our AR virtual object to it. |




| TrackingState | Description                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| None          | The image is not being tracked. Note that this may be the initial state when the image is first detected.                                                                                                                                                                                                                                                                                                        |
| ​​ Limited    | The image is being tracked, but not as effectively. The situations in which an image is considered Limited instead of Tracking depend on the underlying AR framework. Examples that could cause Limited tracking include:1.Obscuring the image so that it is not visible to the camera.2.The image is not tracked as a moving image. This can happen, for example, if the maxNumberOfMovingImages is exceeded.​​ |
| Tracking      | The underlying AR SDK reports that it is actively tracking the image.                                                                                                                                                                                                                                                                                                                                            |




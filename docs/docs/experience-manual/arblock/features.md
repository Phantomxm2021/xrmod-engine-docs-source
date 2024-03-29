---
sidebar_position: 5
title: Features
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: feature description of xrmod in package tools editor.
---

## Coaching Overlay

[This view](https://developer.apple.com/documentation/arkit/arcoachingoverlayview) provides a standardized installation procedure for your users. You can configure this view to automatically display during session initialization and limited tracking, while giving users specific instructions to best facilitate ARKit's world tracking.

<coverimg  url={require('@site/static/static/blocks/features-block/coachingoverlayblock.jpg')} height="25rem" padding="0"/>


## Environment Probe
Environmental detection is a technology that captures real-world images from a camera and organizes this information into environmental textures, such as a cube map, which contains views in all directions from a specific point in the scene. Using this environment texture to render 3D objects can reflect real-world images in the rendered objects. The result is usually real reflections and lighting of virtual objects, influenced by perceptions of the real world.

<coverimg  url={require('@site/static/static/blocks/features-block/environment-probe.jpg')} height="25rem" padding="0"/>


## Light Estimation

[Light Estimation](https://developer.apple.com/documentation/arkit/camera_lighting_and_effects/adding_realistic_reflections_to_an_ar_experience) is discrete visual cues for a given image and provide detailed information about the lighting in a given scene. You can then use this information when rendering virtual objects to illuminate them under the same conditions as the placed scene, so that these objects feel more realistic and enhance the user's immersive experience.


<coverimg  url={require('@site/static/static/blocks/features-block/lightestimation.jpg')} height="25rem" padding="0"/>


## Post Processing

[Post-processing](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html) is the process of applying full-screen filters and effects before the camera's image buffer is displayed on the screen. It can greatly improve the visual effect of your product with very little setup time.
You can use post-processing effects to simulate physical camera and film propertie

<coverimg  url={require('@site/static/static/blocks/features-block/postprocessing.jpg')} height="25rem" padding="0"/>

## AR Interaction 
AR Interaction is an advanced, component-based interaction system. It also contains auxiliary components, you can use these components to extend the function of drawing visual effects and hooking your own interactive events.

- AR gesture system maps screen touches to gesture events
- AR gesture interactor and interactive conversion gestures, such as position, selection, conversion, rotation and zoom to object operations
- AR annotations inform users about AR objects placed in the real world


import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/arinteraction.mp4" className="custom-video-showcase" />

## Immersal Setting

Cre­ate AR expe­ri­ences that merge dig­i­tal and phys­i­cal real­i­ties for con­sumers, indus­tri­al use, ad cam­paigns and more. 

<coverimg  url={require('@site/static/static/blocks/features-block/immersalsdk.jpg')} height="25rem" padding="0"/>


### Use Server Localizer
The environment where the current user is located is located through the data stored on the cloud server to load the grid map of the current environment.

### Turn Off Server Localized
When the map is located through the cloud, stop using the cloud location to prevent excessive API calls from increasing costs.

### Localization Interval
Cloud positioning/device positioning interval frequency

### Render Mode
Mode of rendering point cloud data.


|Render Mode|Description|
|---|---|
|Do Not Render|Do not render scene point cloud data|
|Editor Only|Only render in Unity Editor (not in Play mode)|
|Editor And Runtime|Always render, whether it is Editor-Play or when it is running on the device|



## Face Mesh

The face mesh is a 3D model of a face. It works in combination with the face tracker in XRMOD Engine to create a surface that reconstructs someone's expressions.

<coverimg  url={require('@site/static/static/blocks/features-block/facemesh.jpg')} height="25rem" padding="0"/>


### Maximum Face Count
Maximum number of faces that can be tracked

## Occlusion

Occlusion: Allows the virtual content to be occluded by the detected environment depth (environmental occlusion) or the detected human body depth (human occlusion). Some devices provide in-depth information about the real world. For example, there is a feature called person occlusion. iOS devices with A12 bionic chip (newer) can detect the depth information of the human body in the frame of the augmented reality camera. Newer Android phones and iOS devices are equipped with lidar scanners that can provide depth images of the environment, and each pixel contains a depth estimate between the device and the physical environment.

<coverimg  url={require('@site/static/static/blocks/features-block/occlusion.jpg')} height="25rem" padding="0"/>

### Enable AR Occlusion
Enable AR Occlusion, it will turn on the Occlusion algorithm.

:::caution
This feature is quite costly in performance and memory, please use it with caution
:::


### Environment Depth Mode

Environment segmentation depth algorithm mode

|Mode|Description|
|---|---|
|Disabled|Environment depth is disabled and will not be generated|
|Fastest|Environment depth is enabled and will be generated at the fastest resolution|
|Medium|Ambient depth is enabled and will be generated at medium resolution|
|Best|Ambient depth is enabled and will be generated at the best resolution|


### Human Segmentation Depth Mode

Human body segmentation depth algorithm mode

|Mode|Description|
|---|---|
|Disabled|Segmentation depth is disabled and will not be generated|
|Fastest|Segmentation depth is enabled and will be generated without additional image filtering|
|Best|Segmentation depth is enabled and will produce additional image filtering|



### Human Segmentation Stencil Mode
Human body segmentation template algorithm mode

|Mode|Description|
|---|---|
|Disabled|The split template is disabled and will not be generated|
|Fastest|The split template is enabled and will be generated in the fastest resolution|
|Medium|The split template is enabled and will be generated in moderate resolution|
|Best|The split template is enabled and will be generated with the best resolution|


### Occlusion Preference Mode
AR blocking algorithm preference mode
|Mode|Description|
|---|---|
|Prefer Environment Occlusion|The preferred is the use of the environment depth occlusion|
|Prefer Human Occlusion|Priority use human split templates and depth to block|


## ARWorld Scale Block
AR World Scale scales the size of the current AR experience scene according to the size value set by the developer to get a better visual effect and experience.

|Name|Type|Description|
|---|---|---|
|AR World Scale|Float|The size value of the AR experience scene world at runtime.  Unity 1 unit is equal to 1 meter in the real world. Default scale size is 1.|


## Multiplayer Block
Multiplayer Block is a system for building multiplayer capabilities for AR experiences.


<coverimg  url={require('@site/static/static/blocks/features-block/multiplayerblock.jpg')} height="25rem" padding="0"/>

## Work Space Block

<coverimg  url={require('@site/static/static/blocks/features-block/work-space-block.png')} height="25rem" padding="0"/>


:::info
By default, XR-Experience launch into the Fully Space. And It's work only **Headset platform** not work with **HandheldAR**.
:::

## Shared Space

where they exist side by side — much like multiple apps on a Mac desktop. Apps can use windows and volumes to show content, and the user can reposition these elements wherever they like. 

## Fully Space

 For a more immersive experience, an app can open a dedicated Full Space where only that app’s content will appear. Inside a Full Space, an app can use windows and volumes, create unbounded 3D content, open a portal to a different world, or even fully immerse people in an environment.


---
sidebar_position: 5
title: Features
---

## Coaching Overlay

[此视图](https://developer.apple.com/documentation/arkit/arcoachingoverlayview)为您的用户提供一个标准化的安装程序。您可以将此视图配置为在会话初始化和有限跟踪期间自动显示，同时给用户提供具体的指示，以最好地促进 ARKit 的世界跟踪。

<coverimg
  url={require("@site/static/static/blocks/features-block/coachingoverlayblock.jpg")}
  height="25rem"
  padding="0"
/>

## Environment Probe

环境检测是一种技术，它从摄像机中捕捉真实世界的图像，并将这些信息组织成环境纹理，如立方体地图，它包含了从场景中某一特定点的各个方向的视图。使用这种环境纹理来渲染三维物体可以在渲染的物体中反映出真实世界的图像。其结果通常是虚拟物体的真实反射和照明，受到现实世界感知的影响。

<coverimg
  url={require("@site/static/static/blocks/features-block/environment-probe.jpg")}
  height="25rem"
  padding="0"
/>

## Light Estimation

[光线估计](https://developer.apple.com/documentation/arkit/camera_lighting_and_effects/adding_realistic_reflections_to_an_ar_experience)是给定图像的离散视觉线索，并提供关于给定场景中的照明的详细信息。然后，您可以在渲染虚拟物体时使用这些信息，在与放置的场景相同的条件下对它们进行照明，这样这些物体就会有更真实的感觉，增强用户的沉浸式体验。

<coverimg
  url={require("@site/static/static/blocks/features-block/lightestimation.jpg")}
  height="25rem"
  padding="0"
/>

## Post Processing

[后期处理](https://docs.unity3d.com/Packages/com.unity.render-pipelines.universal@7.1/manual/integration-with-post-processing.html)是在摄像机的图像缓冲区显示在屏幕上之前应用全屏滤镜和效果的过程。它可以用很少的设置时间大大改善您的产品的视觉效果。
您可以使用后期处理效果来模拟物理相机和胶片的特性。

<coverimg
  url={require("@site/static/static/blocks/features-block/postprocessing.jpg")}
  height="25rem"
  padding="0"
/>

## AR Interaction

AR 互动是一个先进的、基于组件的互动系统。它还包含辅助组件，您可以使用这些组件来扩展绘制视觉效果和钩住您自己的互动事件的功能。

- AR 手势系统将屏幕触摸映射为手势事件
- AR 手势互动器和互动转换手势，如位置、选择、转换、旋转和缩放到对象的操作
- AR 注释告知用户放置在现实世界中的 AR 对象的情况

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/arinteraction.mp4" className="custom-video-showcase" />

## Immersal Setting

为消费者、工业用途、广告活动等创造融合数字和物理现实的 AR 体验。

<coverimg
  url={require("@site/static/static/blocks/features-block/immersalsdk.jpg")}
  height="25rem"
  padding="0"
/>

### Use Server Localizer

通过存储在云服务器上的数据定位当前用户所处的环境，加载当前环境的网格图。

### Turn Off Server Localized

当地图通过云端定位时，停止使用云端定位，以防止过多的 API 调用增加成本。

### Localization Interval

云定位/设备定位的间隔频率

### Render Mode

渲染点云数据的模式。

## Face Mesh

脸部网格是一个脸部的 3D 模型。它与 XRMOD 引擎中的脸部追踪器结合使用，可以创建一个重建某人表情的表面。

<coverimg
  url={require("@site/static/static/blocks/features-block/facemesh.jpg")}
  height="25rem"
  padding="0"
/>

### Maximum Face Count

可追踪的最大人脸数

## Occlusion

遮挡。允许虚拟内容被检测到的环境深度（环境遮挡）或检测到的人体深度（人体遮挡）所遮挡。一些设备提供关于真实世界的深入信息。例如，有一个功能叫人的闭塞。带有 A12 仿生芯片的 iOS 设备（较新）可以在增强现实相机的框架内检测人体的深度信息。较新的安卓手机和 iOS 设备都配备了激光雷达扫描仪，可以提供环境的深度图像，每个像素都包含设备和物理环境之间的深度估计。

<coverimg
  url={require("@site/static/static/blocks/features-block/occlusion.jpg")}
  height="25rem"
  padding="0"
/>

### Enable AR Occlusion

启用 AR Occlusion，它将打开 Occlusion 算法。

:::caution
该功能在性能和内存方面的成本相当高，请慎重使用。
:::

### Environment Depth Mode

环境分割深度算法模式

| Mode     | Description                              |
| -------- | ---------------------------------------- |
| Disabled | 环境深度被禁用，将不会产生               |
| Fastest  | 环境深度已启用，并将以最快的分辨率生成。 |
| Medium   | 环境深度已启用，并将以中等分辨率生成。   |
| Best     | 环境深度已启用，并将以最佳分辨率生成。   |

### Human Segmentation Depth Mode

人体分割深度算法模式

| Mode     | Description                                  |
| -------- | -------------------------------------------- |
| Disabled | 分割深度已被禁用，不会生成。                 |
| Fastest  | 分割深度已启用，无需额外的图像过滤就能生成。 |
| Best     | 分割深度被启用，将产生额外的图像过滤。       |

### Human Segmentation Stencil Mode

人体分割模板算法模式

| Mode     | Description                              |
| -------- | ---------------------------------------- |
| Disabled | 分割模板被禁用，将不会被生成             |
| Fastest  | 分割模板已启用，并将以最快的分辨率生成。 |
| Medium   | 分割模板已启用，将以中等分辨率生成       |
| Best     | 分割模板已启用，将以最佳分辨率生成       |

### Occlusion Preference Mode

AR 遮挡算法的偏好模式

| Mode                         | Description                        |
| ---------------------------- | ---------------------------------- |
| Prefer Environment Occlusion | 首选的是使用环境深度闭塞的方法     |
| Prefer Human Occlusion       | 优先使用人类分割的模板和深度来阻止 |

## ARWorld Scale Block

AR World Scale 根据开发者设定的尺寸值来缩放当前 AR 体验场景的大小，以获得更好的视觉效果和体验。

| Name           | Type  | Description                                                                             |
| -------------- | ----- | --------------------------------------------------------------------------------------- |
| AR World Scale | Float | AR 体验场景世界在运行时的尺寸值。Unity 1 个单位等于现实世界中的 1 米。默认比例大小为 1。 |

## Multiplayer Block

多人块是一个为 AR 体验建立多人游戏能力的系统。

<coverimg
  url={require("@site/static/static/blocks/features-block/multiplayerblock.jpg")}
  height="25rem"
  padding="0"
/>

## Work Space Block

<coverimg  url={require('@site/static/static/blocks/features-block/work-space-block.png')} height="25rem" padding="0"/>


:::info
默认情况下，XR-Experience 会进入全空间。它仅适用于 **Headset platform**，不适用于 **HandheldAR**。
:::

## Shared Space

它们并排存在——就像 Mac 桌面上的多个应用程序一样。应用程序可以使用窗口和体积来显示内容，并且用户可以将这些元素重新定位到任何他们喜欢的位置。

## Fully Space

为了获得更加身临其境的体验，应用程序可以打开一个专用的完整空间，其中只会显示该应用程序的内容。在完整空间内，应用程序可以使用窗口和体积，创建无限的3D内容，打开通往不同世界的门户，甚至使人们完全沉浸在环境中。


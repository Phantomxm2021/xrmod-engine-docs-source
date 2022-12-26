---
sidebar_position: 8
title: World Mapper App
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 为消费者、工业用途、广告活动等创造融合数字和物理现实的AR体验。
---

## User Interface
### SignIn

该应用程序需要一个许可证。你可以通过发送电子邮件给我们（info@phantomsxr.com）来申请免费的商业许可。电子邮件的内容格式如下。

:::danger Email format
主题。[请求] XRMOD WorldMapper许可证  
内容。申请人的公司或个人名称，以及要使用的行业部门。
:::


### Workspace Mode

#### Default View

在屏幕的顶部有一个信息面板。它显示了有多少拍摄的图像已经上传到云服务的工作区，以及有多少图像还在等待从你的设备上传。 

如果你已经启用了GPS，你应该充分利用Immersal的所有功能，信息面板还显示设备当前的纬度、经度和高度，以及以米为单位的估计水平和垂直精度。  

在工作区模式下有三个按钮。 
- **切换模式**在工作区和可视化模式之间切换。 
- **抓取图像**抓取图像并自动将其添加到上传队列中
- **选项**打开工作区模式设置和附加功能的对话框。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/workspace_default.jpg')} width="15rem" padding="0"/>
</center>

#### Workspace Options

在工作区模式中，有两个设置。

- **捕获GPS坐标**将设备的GPS位置与捕获的图像一起上传。这些用于标记并将构建的地图与全球WGS84坐标对齐。
- **捕获RGB图像**可以将彩色图像（而不是灰度图像）上传到云服务。文件大小较大，但地图构建后输出的网格会有彩色纹理。**视觉定位性能不受影响**。
- **使用跟踪器姿势（测试版）**使用来自本地跟踪器（ARKit/ARCore）的跟踪姿势数据来加快地图构建速度。也允许将未连接的区域包含在同一地图中。缺点是如果追踪器在制图过程中发生漂移，则地图的精确度较低。

在工作区模式中还有三个附加功能。

- **删除图像**清除工作区。在开始绘制一个新的位置之前，你应该先清除工作区。你可以选择保留一个锚定图像（如果有的话）。这在更新一个地点的地图时很有用。
- **添加锚定图像**上传一个锚定图像或更新一个现有的锚定图像。
- **提交地图构建**提交工作区的图像集以构建地图。提交后，所有的数据都被备份了，你可以安全地重置工作区。构建的地图的数据可以随时在以后恢复。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/Screenshot_20201111-152704.jpg')} width="15rem" padding="0"/>
</center>


#### Capturing Images

当你按下捕获按钮时，会发生两件事。

- 一幅图像被捕获，并与之前的图像进行比较（如果有的话）。
- 该图像和其他捕获的数据被添加到上传队列中。只要队列中有项目，它们就会被自动上传，每个项目的上传进度条会出现在屏幕的顶部。

当将捕捉到的图像与之前的图像进行比较时，该应用程序试图在视觉上进行匹配。图像需要有视觉上的重合才能匹配。如果成功的话，就会出现 "图像与前一张相连 "的通知。

比较和通知是绘图时的有用指南，但将所有图像按顺序连接起来并不是一个要求。图像也可以不按顺序相互连接。只要记住，每张图片至少需要与另外两张图片进行视觉上的连接/匹配，才能在地图构建中使用。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/capture_connected.jpg')} width="25rem" padding="0"/>
</center>

### Visualize Mode

#### Default View

在屏幕的顶部有一个信息面板。它告诉你在所有的尝试中，有多少次定位尝试是成功的。

如果你定位到一张有GPS坐标的地图，信息面板也会显示来自Immersal的视觉GPS位置。这个位置来自于地图的坐标，但它每一帧都会更新，以配合摄像机的视角。

在可视化模式下有四个按钮。
- **下载地图**打开地图列表，在那里你可以管理以前构建的地图
- **切换模式**在可视化和工作区模式之间切换。
- **本地化**试图将当前的相机视图定位到所有下载的地图上。
- **选项**打开一个可视化模式设置的对话框

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/visualize_default.jpg')} width="15rem" padding="0"/>
</center>

#### Visualize Options

可视化模式有三个选项

- **显示点云**切换下载地图的点云的可见性。
- **On-server Localization**切换本地化是在设备上还是在Immersal的云服务中进行。
- **只列出附近的地图**激活地图列表的过滤功能。只有半径为500米的地图才会显示在列表中。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/visualize_options.jpg')} width="15rem" padding="0"/>
</center>

#### The Map List
所有可用地图的列表。你可以点击切换键，将地图下载到设备上进行本地化。可以下载多个地图，并在应用中显示为不同颜色的点云。

在地图列表中显示有四种不同的状态。

- **Queued*地图数据正在排队等待处理和构建地图
- **处理中**地图目前正在建设中
- **完成**地图已准备好供下载
- **失败**地图构建过程失败。很可能是上传的图像没有重合。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/visualize_map_list.jpg')} width="15rem" padding="0"/>
</center>

#### Map Options
点击每张地图右边的按钮，打开选项。您可以永久地删除地图及其数据，也可以将地图还原到工作区。还原会取代当前工作区中的任何数据。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/visualize_map_list_options.jpg')} width="15rem" padding="0"/>
</center>


#### Localization
在下载了一张或多张地图后，您可以测试本地化。
在成功定位之前，地图没有与摄像机视图对齐。定位将尝试将地图（地图空间坐标）与相机视图（跟踪器空间坐标）对齐。

<center>
<coverimg  url={require('@site/static/static/dev-tools/worldmapper/visualize_localized.gif')} width="25rem" padding="0"/>
</center>
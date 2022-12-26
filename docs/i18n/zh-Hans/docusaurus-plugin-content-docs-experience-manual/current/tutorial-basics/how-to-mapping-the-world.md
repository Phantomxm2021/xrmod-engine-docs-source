---
title: 如何测绘世界
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 绘制地球地图和收集数据
---
import ImageWithText from '@site/src/components/ImageWithText'
import VideoPlayer from '@site/src/components/VideoPlayer'

:::tip
**特征点**是图像中一个明显的、高对比度的视觉特征。墙上海报的一角，木地板上的纹理或建筑物外墙的一个细节。
:::

地图构建的工作原理是在不同视角的多张图像中找到相同的**特征点**，并通过三角测量这些特征点来估计场景的三维结构。

:::caution
该应用程序需要一个许可证。你可以通过发送电子邮件给我们（info@phantomsxr.com）来申请免费的商业许可。电子邮件的内容格式如下。 
- 主题。[请求] XRMOD WorldMapper许可证  
- 内容。申请人的公司或个人名称，以及要使用的行业部门。 
:::

重要的是要尝试从多个视角覆盖目标环境，如果有必要的话，可能还有不同的距离。

:::caution
你应该争取在你想要匹配的图像之间有多达50%的重叠。 为了获得最佳效果，同一特征点应至少在3个不同的图像中进行匹配。
:::

绘图时，我们的**绘图应用程序**会通知你，如果后续的图像可以通过匹配的**特征点进行连接。

下面是9幅捕获的图像以及它们如何相互连接的图示。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/map_connectivity.jpg')}/>

:::info
请记住，并不是所有的连续图像都需要连接起来!  
上述图像是按顺序拍摄的，而图像3和4并没有相互连接。这并不重要，例如，在构建地图时，图像3将与1、2和9连接。
:::

---

## 空间要求

不是所有的空间都可以被映射。

例如，高度反射的表面没有静态的视觉特征来构建地图。

另一个问题是具有统一颜色的大面积区域，完全没有可探测的视觉特征。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/bad_no_features.jpg')}/>

:::danger
没有足够的视觉特征，而且大部分都在一个可能会移动的物体上。
:::

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/good_enough_features.jpg')}/>

:::tip
大量的视觉特征。其中一些是在移动的物体上，但还有许多是在静态的表面上。这种场景可以很容易地被映射。
:::

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/bad_reflective.jpg')}/>

:::danger
反射的表面会使相机看到错误的视觉特征。这些反射的特征会根据视角的不同而在视觉上移动，不能用于建造。
:::

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/bad_low_light.jpg')}/>

:::danger
低光照场景将很难被摄像机看到。任何视觉特征都可能是模糊的、嘈杂的，即使被检测到也会造成问题。
:::

---

## 绘图说明
为了构建一个好的地图，捕获的图像需要从不同角度覆盖相同的区域。

当对照地图进行定位时，地图应该包含来自具有类似视角的捕获图像的数据。

捕获的图像不需要完全相同，但应该有一个大致相似的角度和与目标的距离。

一个特征点出现在越多的图像中，其准确性就越高。系统要求一个特征点在两张图片中被发现，但越多越好。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/bad_no_overlap_between_sets.jpg')}/>


:::danger

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/no_overlap.png')} width="50%"/>

No overlap between captured images as all the images are viewing different directions. Matching features can't be found between them and the images will not connect.
:::

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/bad_no_parallax_between_sets.jpg')}/>


:::danger
<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/not_as_a_panorama.png')} width="50%"/>

各组图像之间没有视差，所有的图像都是从一个视点拍摄的。 
匹配的特征点被找到了，但是所得到的地图要么是失败的，要么是不准确的，因为捕获的图像之间没有距离。 
为了获得更好的结果，如果你已经有了一些制图的经验，可以在更远的地方捕捉图像，或者捕捉许多 "全景图"。
:::

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/good_coverage.jpg')}/>

:::tip
<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/outside_in_mapping.png')} width="50%"/>

捕捉到的成像之间的特征点有很好的重叠，它们之间有很多视差。由此产生的地图将是非常准确的。
:::

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/good_overlap_example.jpg')}/>


:::tip
<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/overlap_with_images.jpg')} width="50%"/>

这张图片说明了连续拍摄的图像之间的重叠特征点。 
为了在图像之间建立良好的联系，你应该争取让图像在三分之一到一半的图像区域内重叠。这可以确保在不同的图像之间找到足够多的相同特征。
:::


为了确保一个地区或一个物体被纳入地图，你需要对该物体至少有3个不同但相似的观点。

:::tip
<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/enough_coverage.png')} width="50%"/>

至少有3个不同但足够相似的视角来观察物体及其视觉特征。

:::


:::danger
<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/not_enough_coverage.png')} width="50%"/>

至少有3个不同但足够相似的视角来观察物体及其视觉特征。
:::

---

## Examples
### "AR Hotspot"

小到中等的特定地点，在观看时，会有增强现实的内容。  
这些地点不需要映射用户周围的一切，只需要映射出感兴趣的点。 

热点的例子是雕像、壁画和其他街头艺术。还有店面、弹出式商店和展览服装以及电影营销活动的装置。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/ar_hotspots.jpg')} label='Examples of AR Hotspots'/>


在绘制此类热点地图时，尽量从尽可能多的角度覆盖更多的区域。拍摄一系列相互重合的图片。如果你需要用额外的细节来覆盖热点的某个特定部分，你可以对该区域进行特写。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/ar_hotspots_mapping.jpg')} label='Mapping an AR hotspot'/>

如果你需要绘制一个非常长的区域，难以用一个弧线覆盖，你可以尝试用多个 "迷你弧线 "覆盖，如下图所示。

你还可以从更远的地方拍摄更多的图像。这些将有助于我们的SDK从更远的地方对场景进行定位，也有助于将所有的东西连接在一起。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/ar_hotspots_mapping2.jpg')} label='Mapping a very long area, like a mural'/>


<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/ar_hotspots_statue.jpg')} label='A statue in Helsinki'/>


像雕像这样的地标性建筑是一个很好的例子，它的热点位置可以从四周进行测绘。要绘制这样的雕像，只需在它周围一整圈拍摄一系列的图像。


尽量将所有重要的视觉特征纳入图像中。你可以在横向或纵向模式下绘图。如果你想用特写镜头覆盖某些部分，你也可以混合方向。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/ar_hotspots_mapping3.jpg')} label='Mapping a landmark from every angle'/>

### Indoor spaces

大的室内空间可以划分为每个区域或房间的独立地图。这使得更新任何可能随时间变化的区域变得很容易。这也使绘制单个部分的地图更加容易。

要绘制一个房间的地图，可以使用 "由外而内 "的方法。在房间周围移动时，拍摄一系列的图像，看整个空间的情况。

记住，你可以使用横向或纵向模式。在较小的房间里，横向模式通常效果很好。

只需尝试从尽可能多的角度覆盖整个区域。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/mapping_a_room.jpg')}/>
<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/mapping_a_room_outside_in.jpg')} label="Mapping a single indoor space"/>

你可以在Unity中用我们的**多地图功能**将多个地图对齐。
并非所有的区域都需要在一张地图上连接。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/mapping_multiple_rooms.jpg')} label="A map for each different space"/>


<VideoPlayer src="/static/tutorial-basics/how-to-mapping//pointclouds.mp4" className="custom-video-showcase" />


如果你想在一张地图上把许多独立的区域连接在一起，你需要确保这些区域能够在视觉上连接起来。一种方法是创建一条从一个空间到另一个空间的 "图像路径"。

<coverimg url={require('@site/static/static/tutorial-basics/how-to-mapping/mapping_multiple_rooms_image_path.jpg')} label="Make sure you can see the both spaces at once at some points"/>

如果你要绘制一个小公寓或一个购物中心的地图，这并不重要。绘图技术与空间的比例是一致的。


---

## 锚定图像

:::caution
默认情况下，构建的地图是没有特定方向的
:::

地图的Y轴可能正确地指向上方，但围绕Y轴的旋转不受约束，如果你重新映射同一空间，在不同的结构之间会有变化。

仅仅使用GPS或设备的罗盘来确定地图的方向是不够可靠的。

这使得维护AR内容变得很困难，所以我们提供了一种准确定义地图方向的方法。 
通过**锚定图像**，你可以确保在重新映射一个空间时保留地图的方向。

:::info
在构建地图时，只使用最新的锚定图像。
:::

### 使用锚定图像

当使用**映射应用程序**时，在工作区模式下打开**工具菜单**，点击**添加锚点图像**。

当**锚定图像**被捕获时，应出现一个通知。

当添加**锚定图像**时，图像被捕获，设备方向被记录。
记录的方向会在构建地图时使用。

:::info
捕捉锚点图像时，设备摄像头的方向被用来确定地图的Z轴。 
地图Y轴是根据设备传感器和 "向上"方向自动计算的。
:::

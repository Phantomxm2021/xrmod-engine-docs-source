---
title: 如何在Prefab上烘焙灯光
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: 烘焙灯光让你体验到更少的消耗和更多的电力节约。
---
照明是游戏中最重要的元素之一。它可以用来营造气氛，引导玩家，标记威胁或目标，以及更多。灯光可以决定游戏的视觉效果。例如，好的照明可以改善游戏中差的模型的视觉效果，而差的照明可以使一个原本好的模型看起来很糟糕。

本指南将提供关于如何改善手机游戏中的照明性能的信息。你决定如何使用照明将影响你的手机游戏的性能。因此，有效地使用灯光以确保游戏尽可能顺利地运行是很重要的。

在为互动、XR、游戏等开发内容时，必须使其在尽可能多的设备上顺利运行。

## 灯光模式

不同的灯光模式是根据灯光在场景中的移动或使用方式而使用的。灯光模式类型有不同的性能特点。当你实施灯光时，请考虑以下几点。

- 对静态照明使用烘烤。这对那些在运行期间不改变其光照的对象来说是最好的。烘烤灯光是预先计算并将灯光数据存储在被称为[lightmaps](https://docs.unity3d.com/Manual/Lightmapping.html)的纹理图中的过程。
    - 烘烤灯光在运行时不能被修改。光照图中的光线和阴影是静态的。因为所有的光照都是在Unity中预处理的，所以没有任何影响性能的运行时光照计算。   
    - 动态阴影不能用烘烤的灯光来创建。这对于动态或移动的物体来说可能看起来很奇怪。

- 对于你打算与移动物体互动的静止的灯光，请使用混合灯光。例如，一个火炬将光线投射到玩家身上，当玩家移动时产生阴影。

    - 混合光照可以产生动态的直射光和阴影。
    - 你可以在静态物体的光照图计算中包含混合照明。
    - 你可以在运行时改变强度。只有直射光会被更新。
    - 昂贵的。
    
- 对动态或可移动的灯光使用实时性，例如从地面升起并爆炸的火球所投射的光线。
    - 动态灯光和阴影属性可以在运行时修改。
    - 实时灯光不会被烘烤到光照图中。
    - 非常昂贵。

欲了解更多信息，请阅读[Unity的灯光管道](https://docs.unity3d.com/Manual/BestPracticeLightingPipelines.html)。

## 在可能的情况下，使用静态光，避免动态光

动态或实时照明是每一帧计算和更新的。这对移动物体、互动性和创造情感来说是非常好的。

与此相反，静态光照信息被烘烤成光照图。光照图纹理的使用使物体能够避免昂贵的每顶点或每像素照明计算。光照图纹理的渲染成本总是比动态光照便宜得多。我们建议，在手机游戏中实施烘烤光照是你的第一选择。

## 光照图的烘烤

对光的效果的预先计算被称为光图烘烤。光的效果被储存在一个单独的纹理中，称为光图。光照图可以用来增强物体的外观。光照图的烘焙只需要在你的场景的每次迭代中进行一次。如果你改变了你的场景的几何形状，或者改变了烘焙的灯光的参数，你将需要重新烘焙光照图。除了光影贴图的开销，在运行时没有任何额外的性能成本。这是在移动平台上进行照明的最佳初始方法。


烘烤光照不会受到你的场景中任何动态或移动方面的影响。烘烤光照确实包括所有静态元素的[Baked Global Illumination](https://docs.unity3d.com/560/Documentation/Manual/GIIntro.html)。这意味着光照图的计算包括从其他静态物体上反弹下来的间接光线，以及直接照射到物体上的烘烤光线。

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/baked-light-example.jpg')} padding="0.5rem" label="Figure 1. The all-baked lighting setup used in the Armies tech demo."/>

### 第1步：将灯光设置为混合型或烘烤型

设置灯光的**模式**为混合或烘烤。对于移动标题，最好使用烘烤灯光而不是混合灯光。烘烤是渲染灯光的最便宜的方式。

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/light-component.jpg')} width="50%" padding="0.5rem" label="Figure 2. The light’s Mode setting in Unity."/>
</center>

### 第2步。使对象静态化

使任何受烘烤灯光影响的对象成为**Static**。对于被标记为静态的对象有很多优化，但通常最好在**静态**的下拉列表中选择**Everything**当对象被标记为**Static**时，Unity知道要把它包括在灯光烘烤中。

:::tip
注意：如果你启用了**Batching Static**，你就不能移动或动画标记为**Static**的对象。尽可能地保留这项优化。
:::

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/static-light-menu.jpg')} width="50%" padding="0.5rem" label="Figure 3. An example static menu."/>
</center>

### 第三步。烘烤你的灯

你可以通过**Window**>**Rendering**>**Lighting Settings**中的**Lighting**菜单来烘烤你的灯光。

当你烘烤灯光时，保存的数据是基于你开始烘烤时活动的任何场景。一个与烘烤的场景同名的文件夹被生成。这个文件夹存储了灯光数据的所有组件。如果你的项目同时加载多个场景，你必须为每个场景烘烤灯光。如果你调整你的场景，你必须重新烘烤灯光。

<center>
<coverimg  url={require('@site/static/static/tutorial-basics/how-to-bake-light/scene-maps.jpg')} width="50%" padding="0.5rem" label="Figure 4. An example of baked lightmaps."/>
</center>

## 在XRMOD中烘烤灯光图

由于Unity Lightmap功能需要与场景信息相关联，而场景在XRMOD中是不可用的，所以不能使用场景烘烤的数据。

尽管如此，我们也可以将灯光信息烘烤到Prefab。我们可以使用**nukadelic的Prefab-Baker**来完成对Prefab的灯光烘烤。

1. 创建一个新的场景并将我们的3D模型放入其中。
2. 创建一个空的游戏对象来容纳你的3D模型和衬垫。
3. 照亮你的3D模型（必须将灯光放入你的预制件中）。
4. 设置灯光，如[Lightmap baking](#lightmap-baking)一样设置。
5. 通过**Window**->**Rendering**->**Lighting**创建一个新的**LightingSettings**文件。
6. 将**PrefabBaker**组件添加到你的prefab中。
7. 将游戏对象拖放到**我们的项目**->**prefabs**文件夹中，让它成为一个预制件。
8. 点击**Open Baker**按钮进行设置，更多信息[点击这里](./dev-tools/refab-baker)阅读

## 总结

将灯光烘烤到Prefab中可以用非常简单的步骤完成。烘焙后，我们只需将Prefab拖放到PackagetToolsEditor的Contents部分。
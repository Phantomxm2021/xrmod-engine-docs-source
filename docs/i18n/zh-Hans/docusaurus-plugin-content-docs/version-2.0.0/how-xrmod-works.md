---
sidebar_position: 2
title: XRMOD工作原理
---

XRMOD 引擎是一个基于 OpenXR 协议开发的元空间建设系统。而 XR-Experience 内容由 Unity Editor 创建。

XRMOD 引擎可以嵌入到本地应用程序中，也可以用 Unity Editor 建立一个独立的应用程序。

<coverimg url={require("@site/static/static/home/xrmodworks.png")} />

上面的图片展示了您的应用程序如何与 XRMOD 引擎和 XRMOD 云进行交互。允许您在`YOUR APP`<->`XRMOD`之间发生的事件中添加自己的逻辑；XRMOD 内部的逻辑，如如何获得 XR-Experience 并显示或执行自定义代码等，`YOUR APP`不需要操作，XRMOD 引擎接管。

为了减少应用程序安装包的大小，我们设计了分离`YOUR APP`和`XR-Experience`的内容，此外还使我们的 XR-Experience 更加灵活。

如上所述，XR-Experience 不包括在安装包中。这样做的目的是为了让我们的应用程序能够承载更多的 XR-Experience。
在调整 XR-Experience 的内容时，您不需要改变原应用程序的逻辑代码。您只需要针对您的特定 XR-Experience 进行调整。

XR-Experience 可以使用 Unity 编辑器来构建，我们还提供了一些用于 Unity 创意的工具链。
如果您想了解如何构建 XR 体验，[点击这里](../experience-manual/tutorial-advanced/create-first-arexperience)阅读文章。

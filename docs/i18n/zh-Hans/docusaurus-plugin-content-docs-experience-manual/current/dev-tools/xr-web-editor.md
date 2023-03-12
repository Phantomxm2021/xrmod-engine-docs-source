---
sidebar_position: 6
title: XR Web编辑器
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: XR Web Editor是一款轻量级的XR创作编辑器，被称为是Lite版的Unity。该编辑器可以创建多种XR模式，而且非常适合面向零代码零基础的用户。相比于其他的XR编辑器，使用XR Web Editor无需具备Unity的基础，因此更加方便易用。
---
## 什么是XR Web编辑器 

XR Web Editor是一款轻量级的XR创作编辑器，被称为是Lite版的Unity。该编辑器可以创建多种XR模式，而且非常适合面向零代码零基础的用户。相比于其他的XR编辑器，使用XR Web Editor无需具备Unity的基础，因此更加方便易用。

XR Web Editor内置了大量的工具和资源，可以帮助用户快速创建出各种类型的XR应用程序，如AR，VR，MR等。它具有友好的用户界面和简单易懂的操作步骤，使得用户可以轻松地进行设计和修改。

XR Web Editor的优势在于它不需要用户具备Unity的基础，无需下载和安装复杂的软件。用户可以直接通过浏览器访问并开始使用，这使得XR应用程序的创建变得更加便捷。此外，XR Web Editor还支持多人协作，可以让多个用户同时编辑同一个XR项目，进一步提高了工作效率。

总之，XR Web Editor是一款功能强大且易于使用的XR创作编辑器，适合所有想要创建XR应用程序的零代码零基础用户。

<coverimg  url={require('@site/static/static/dev-tools/udmsystem/hololen_udm.jpg')} height="100%" padding="0.5rem"/>

## XR Web编辑器项目

在您开始之前，您必须阅读[XRMOD Cloud](./dashboard)手册。现在让我们开始通过XRMOD Cloud控制台创建我们的第一个XR Web编辑器项目。

1. 注册一个XRMOD Cloud账户并进行验证。
<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/dashboard_en.jpg')} height="100%" padding="0.5rem"/>

2. 登录并创建您的第一个应用程序
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_first_app.jpg')} height="100%" padding="0.5rem"/>

3. 点击应用程序列表中的应用程序（即您刚刚创建的那个）进入。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/inside_the_app.jpg')} height="100%" padding="0.5rem"/>

4. 点击**创建项目**按钮或右上方的菜单，创建我们的第一个XR-项目。您会看到以下屏幕，此时我们必须选择要创建的XR Web编辑器类别。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_1.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_2.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_3.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/create_udm_project_4.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/udm_project_detail.jpg')} height="100%" padding="0.5rem"/>

5. 现在我们的XR Web编辑器项目已经被创建了。但是它还没有准备好使用，需要进一步设置。首先，我们需要点击**XR编辑器**标签项，进入XRMOD云端编辑器。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/udm_further_setip.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/empty_project.jpg')} height="100%" padding="0.5rem"/>

6. 一个新创建的XR Web编辑器项目会提示您上传您自己的3D模型，因为它最初没有设置3D模型。当然我们也考虑到创作者可能没有3D模型，所以我们提供了超过一百万的3D模型供您使用。如果您使用公共图书馆的模型，在这里您点击**取消**，就可以进入编辑器主页。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/empty_project.jpg')} height="100%" padding="0.5rem"/>

7. 通过编辑器顶部的**图书馆**菜单栏打开我们的资源面板。默认打开的面板选择您的私人三维模型页面，您可以点击私人和公共来切换。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/open_library.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/library.jpg')} height="100%" padding="0.5rem"/>

8. 找到一个您喜欢的3D模型，用鼠标右键将其添加到编辑器中进行进一步编辑。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/download_finished.jpg')} height="100%" padding="0.5rem"/>

9. 接下来我们需要为物体设置一个包围盒，以便告诉XR我们的三维模型的尺寸。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/bound_object_1.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/bound_object_2.jpg')} height="100%" padding="0.5rem"/>

10. 由于XR中1个单位的大小在现实中是1米，如果3D模型过大就不符合实际要求，而场景中每个小方块是1米，所以我们还需要调整模型的比例。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/resize_object.jpg')} height="100%" padding="0.5rem"/>

11. 一切编辑完毕后，我们需要保存该项目，否则数据将无法存储。
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/save_project.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/saved.jpg')} height="100%" padding="0.5rem"/>

## 在应用程序中审查

进入您的XR项目，将其状态设置为**发布**（选中发布框），然后通过右上方的菜单保存您的项目。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/project_state.jpg')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/udmsystem/online_project.jpg')} height="100%" padding="0.5rem"/>


如果您还没有自己的XR应用程序，您可以扫描二维码下载ARMOD应用程序，查看您的XR体验。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/ARMODApp.png')} height="100%" padding="0.5rem"/>

好的，如果您使用我们的ARMOD APP，您可以打开您的项目的分享功能；这样您就可以在ARMOD APP的社区页面中看到您的XR体验。如果您不想打开分享，您也可以在ARMOD APP的第三页输入您的XR-体验ID来体验。

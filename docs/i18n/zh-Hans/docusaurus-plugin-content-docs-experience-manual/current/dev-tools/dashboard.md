---
sidebar_position: 5
title: XR-MOD Cloud
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: xrmod case with XR-MOD Cloud.
---

## XRMOD Cloud是什么？

Dashboard是AR内容管理系统。它帮助我们的AR体验和展示变得更加灵活和方便。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/dashboard_cn.jpg')} height="100%" padding="0.5rem"/>

## 如何使用XRMOD Cloud？

首先，XR-Creatives需要到XR-MOD Cloud（https://phantomsxr.com）注册一个账户。注册完成后，XR-MOD Cloud会向XR-Creatives的邮箱发送一封邮件，请到邮箱中验证XR-Creatives的账户。

验证账户后，请使用刚刚注册的账户和密码进行登录。


### Create App

由于XR-Creatives是新用户，所以XR-Creatives需要创建一个应用来绑定XRMOD应用客户端。
1. 通过右上方的绿色按钮开始创建一个新的应用程序
    <coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/create_app.jpg')} height="100%" padding="0.5rem" label="Create a new app"/>
2. 按照提示填写你的申请信息。
    <coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/create_app_2.jpg')} height="100%" padding="0.5rem" label="Create a new app"/>

:::danger Bundle Id
它将与你的应用程序相关联，以便使用OpenAPI。
:::

:::caution Bundle Id
BundleID或Bundle标识符在XR-MOD云的生态系统中唯一地识别一个应用程序。这意味着，没有两个应用程序可以拥有相同的Bundle标识符。为了避免冲突，PhantomXR鼓励开发者使用反向域名符号来选择一个应用程序的Bundle标识符。
:::

### 创建XRExperience项目
进入我们刚刚创建的应用程序；同时通过右上方的菜单创建你的阴。你会看到一个创建项目的bootstrap屏幕，如下图所示。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/create_project.jpg')} height="100%" padding="0.5rem" label="Create a new project"/>

- **Custom**: 用于托管您自己撰写的XR体验内容。
- **UDM**: UDM是一个定制系统，允许用户通过XR组装自己的产品。这项功能不需要你写一行代码，只需从控制台上传一个3D模型或使用公共资源库来创造XR体验。
- **Other**: 从不同的角度看世界，一些有趣的经验正在被开发和构思。

### 托管您的XR-Experience

<Tabs
  groupId="project-type"
  defaultValue="custom"
  values={[
    { label: "Custom", value: "custom" },
    { label: "UDM", value: "udm" },
  ]}
>
<TabItem value="custom">


创建项目后，您的项目还不能访问；您仍然需要上传XR资源。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/project_detail.jpg')} height="100%" padding="0.5rem" label="Create a new project"/>

:::caution
XR资源一经上传就会被保存，其他项目领域需要通过右上方的菜单进行保存。
:::

</TabItem>

<TabItem value="udm">

UDM项目被创建后，一样无法使用。你需要在XRCloud编辑器中上传你的模型才行，如下图所示。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/project_detail_udm.jpg')} height="100%" padding="0.5rem" label="UDM project"/>

在上传并设置好你的UDM模型后，你还需要通过XRMOD Cloud左上角FIle菜单中的Save菜单来保存项目，否则数据将不会被保存。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/save_udm.jpg')} height="100%" padding="0.5rem" label="Save UDM"/>

</TabItem>

</Tabs>

### Review XR-Experience

进入你的XR项目，将其状态设置为**发布**（选中发布框），然后通过右上方的菜单保存你的项目。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/project_state.jpg')} height="100%" padding="0.5rem"/>

如果你还没有自己的XR应用程序，你可以扫描二维码下载ARMOD应用程序，查看你的XR体验。

<coverimg  url={require('@site/static/static/dev-tools/cmsdashboard/ARMODApp.png')} height="100%" padding="0.5rem"/>

好的，如果您使用我们的ARMOD APP，您可以打开您的项目的分享功能；这样您就可以在ARMOD APP的社区页面中看到您的XR体验。如果您不想打开分享，您也可以在ARMOD APP的第三页输入您的XR-体验ID来体验。

## Summary

本文介绍了如何使用XRMOD云来配置和管理我们的ARExperience，并将XRExperience与XRShowcase联系起来。关于具体的API使用，请参考Restful API。
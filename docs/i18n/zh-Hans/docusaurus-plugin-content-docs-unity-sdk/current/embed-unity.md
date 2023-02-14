---
sidebar_position: 2
title: 在Unity内使用
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

<coverimg url={require("@site/static/static/sdk/unity-sdk/unity-showcase.jpg")} height="25rem" />

## XRMOD 引擎开发环境

通过阅读[XR体验内容开发工具包安装文章](../experience-manual/prepare-for-developer/install-xrmod-dev-tools)获得基本的开发环境。由于我们需要将 XRMOD 引擎和 Unity 结合起来开发一个新的 APP，我们需要安装一些必要的软件包。

<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest2",value:"quest2"},
    {label:"Pico",value:"pico"},
    {label:"WebXR",value:"webar"},
    {label:"Web3D",value:"web3d"},
    {label:"Classic3D",value:"classic3d"},
]}>

<TabItem value="handheldar">

- com.phantomsxr.xrmodenginesettings
- com.phantomsxr.xrmod.handheldar
- com.phantomsxr.ilcore
- com.phantomsxr.foundation

:::tip
如何检查软件包的名称？

<coverimg url={require("@site/static/static/sdk/unity-sdk/package-name.png")} height="25rem" />
:::

</TabItem>

</Tabs>

安装完成后，在Unity顶部的菜单栏中打开`Edit`->`Project Settings`->`PhantomsXR`->`XR-MOD Engine SDK Settings`来初始化我们的项目配置，如下图所示。完成这一步骤后，我们就可以开始开发AR-APP了。

<coverimg url={require("@site/static/static/sdk/unity-sdk/xrmod-settings.png")} height="25rem" />

## 启动 XRMOD 引擎

我们创建一个新的 Unity Scene 并保存(在保存过程中需要改变 Unity Scene 的名字，用 App 代替，可以根据自己的喜好来命名。)，然后将 Unity Scene 添加到`Build Settings`中并设置其顺序。对于第一个位置，索引是`0`。

<coverimg url={require("@site/static/static/sdk/unity-sdk/scene-list.png")} height="10rem" />

在 Assets 面板中创建一个名为 Scripts 的新文件夹（用于存储项目脚本--个人习惯），在该文件夹的内容中创建一个新的 C# Script，并将其命名为 App。

在等待 Unity 编译后，我们双击刚刚创建的 Script，打开它进行编辑。思路的流程大致如下。

1. 获取 SDK EntryPoint
2. 建立和配置 SDKConfiguration，并通过 SDK EntryPoint.Init 传入 SDK 初始化。
3. 调用 SDKEntryPoint.LaunchARQuery 来启动 XR 并加载内容。要使用这个方法，您需要传入项目 ID 或项目名称。

了解了大致的思路过程后，我们就可以开始工作了。首先，我们可以使用`FindObjectOfType<SDKEntryPoint>()`来获取我们的 SDKEntryPoint 对象，这样我们就可以使用 SDKEntryPoint 中的方法。这段代码看起来像这样。

```csharp
public void ARModuleStart(){
    SDKEntryPoint tmp_Entry = FindObjectOfType<SDKEntryPoint>();
    SDKConfiguration tmp_Configs = new SDKConfiguration
    {
        engineType = EngineType.Unity,
        dashboardConfig = new DashboardConfig {token = "", dashboardGateway = $"http://localhost:8084"},
        customConfig = new CustomConfig(),
        imageCloudRecognizerConfig = new ImageCloudRecognizerConfig(),
        AppModel = AppModel.Online
     };
    tmp_Entry.InitSDK(JsonUtility.ToJson(tmp_Configs));
    tmp_Entry.LaunchARQuery("项目ID");
}
```

| Name                | Type   | Description                                                                                                                             |
| ------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| dashboardConfig     | String | 配置                                                                                                                                    |
| token               | String | 用户认证                                                                                                                                |
| dashboardGateway    | String | API 网关                                                                                                                                |
| timeout             | Int    | http 请求的超时                                                                                                                         |
| maximumDownloadSize | Float  | AR 体验包的最大下载尺寸。如果超过这个值，(void)packageSizeMoreThanPresetSize:(float)currentSize preset:(float)presetSize 方法将被响应到 |
| EngineType          | String | 它是用来告诉大家 AR MOD SDK 目前是在什么环境下运行的。如果是基于 Unity 的二次开发，需要填写 Unity。                                     |
| AppModel            | String | 用来区分当前应用程序的模式分为三种情况。在线--与 Dashboard 连接，离线--通过加载本地内容不与互联网连接，模拟器--用于 Unity 编辑器 。     |

## 总结

从那时起，我们的AR-APP已经完成了。使用XRMOD引擎为我们节省了大量的时间，也为我们节省了如何与XR SDK互动的逻辑和知识。下一步是为它创建一个漂亮的UI/UX和XR体验。内容。如果您不知道如何制作内容，您可以[点击这里](../experience-manual/tutorial-basics/how-create-xrmod-project)来阅读。

---
sidebar_position: 2
title: Embed SDK Unity
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: embed xrmod into unity
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<coverimg url={require('@site/static/static/sdk/unity-sdk/unity-showcase.png')} height="25rem"/>


## Installation

Once our Unity project has been created, we need to convert the platform to the one you need to develop on.

<coverimg url={require('@site/static/static/sdk/unity-sdk/switch-platform.png')} fit="scale-down" height="25rem" label="Switch Platform"/>


Get the basic development environment by reading [the XR Experience Content Development Kit Installation article](../experience-manual/prepare-for-developer/install-xrmod-dev-tools). Since we need to combine XRMOD Engine with Unity to develop a new APP, We need to install some required packages.


<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest2",value:"quest2"},
    {label:"PicoNeo3",value:"piconeo3"},
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
How to check the package name?
<coverimg url={require('@site/static/static/sdk/unity-sdk/package-name.png')} height="25rem"/>
:::

</TabItem>


</Tabs>

:::info
There may be some pop-ups during the installation process, and we need to do some manual operations.

<coverimg url={require('@site/static/static/sdk/unity-sdk/inputsystem.png')} width="50%"/>

The default input system for Unity projects is the old input system, but since we will be using the New Input System for our XRI, Unity will pop up a confirmation window for you to confirm.

If you select `Yes` your Unity will be `restarted`, here we can select `No` to restart `manually` later

<coverimg url={require('@site/static/static/sdk/unity-sdk/xri-api-upgrade.png')} width="50%"/>

This proiect may contain an obsolete method to validate interactions between XR Interactors and Interactables. This Update is only required for older projects updating the XR Interaction Toolkit dackage. It this dackage was newly installed please cancel this operation.

Here we select `Go Ahead` and that's it.
:::

## Initialization

After the installation is complete, open the `Edit`->`Project Settings`->`PhantomsXR`->`XR-MOD Engine SDK Settings` in the menu bar at the top of Unity to initialize our project configuration, as shown in the following figure. After completing this step, we can start developing AR-APP.

<coverimg url={require('@site/static/static/sdk/unity-sdk/xrmod-init.png')} height="25rem" />


Configure your project according to the following platform.

<Tabs defaultValue='handheldar' values={[
    {label:"Apple",value:"appleglasses"},
    {label:"HandheldAR",value:"handheldar"},
    {label:"Hololens2",value:"hololens2"},
    {label:"Quest2",value:"quest2"},
    {label:"PicoNeo3",value:"piconeo3"},
    {label:"WebXR",value:"webar"},
    {label:"Web3D",value:"web3d"},
    {label:"Classic3D",value:"classic3d"},
]}>

<TabItem value="handheldar">

Now you can see a new settings view appear; Set up according to the order of the pictures below:

<coverimg url={require('@site/static/static/sdk/unity-sdk/xrmod-settings.png')}/>

**Universal RP**

Because we are using URP rendering tube so we need to configure again for RenderFeature, the configuration is as follows.
1. Go to the **Settings** folder and find Features
2. Add **ARBackgroundRenderFeature** to all the Features
3. **Remove** the redundant Features

<coverimg url={require('@site/static/static/sdk/unity-sdk/urp-setting.png')} height="25rem" />

import VideoPlayer from '@site/src/components/VideoPlayer'

:::danger


<VideoPlayer src="/static/sdk/unity-sdk//ablurredscreen.mp4" className="custom-video-showcase" />

If you don't add **ARBackgroundRenderFeature**, your device will not display the screen properly (blue screen).
:::

</TabItem>


</Tabs>


:::tip
If a ❌ appears in the [5] area you will see the **Fix** button behind it, click on it to fix it.
:::

:::danger
- Don't forget to click **Apply** button to save your configuration.
- Make sure that all options in area 5 are ✅ status
:::




## Launch XRMOD

We create a **new Unity Scene** and save it (the name of the Unity Scene needs to be changed during the saving process, which is replaced by App, which can be named according to your own preferences.), then add the Unity Scene to the `Build Settings` and set its order. For the first position, the index is `0`.

<coverimg url={require('@site/static/static/sdk/unity-sdk/scene-list.png')} height="10rem" />

:::danger
- Don't remove `Initilizer`,`Main` and `Clear` scenes, otherwise it will not working.
- Please make sure the name of the newly created scene is not the same as the above three scene names (make sure it is unique)
:::

Create a new folder in the Assets panel named **Scripts** (used to store project scripts - personal habits), create a **new C# Script** in the contents of the folder and name it **App**.

After waiting for Unity to compile, we double-click the Script we just created to open it for editing. The idea flow is roughly as follows:

1. Calling [SDKInitialization.Initialize](./api-reference/xrmod-api/SDKInitialization) to initialize XRMOD sdk and delay 125ms 
2. After 125ms we calling [FindObjectOfType](https://docs.unity3d.com/ScriptReference/Object.FindObjectsOfType.html) to get [SDKEntryPoint](./api-reference/xrmod-api/SdkEntryPoint)
2. Build and configure [SDKConfiguration](./api-reference/xrmod-api/SdkConfigure/Sdkconfiguration) and pass in by SDK EntryPoint.
3. Calling [SDKEntryPoint.Init](./api-reference/xrmod-api/SdkEntryPoint#initsdk) and [SDKEntryPoint.LaunchXRQuery](./api-reference/xrmod-api/SdkEntryPoint#launchxrquery) to start XR and load the content.

:::caution
To use **SDKEntryPoint.LaunchXRQuery**, you need to pass in the **project id** or **project name**
:::



```csharp
using SDKEntry.Runtime;

public async void ARModuleStart(){
    
    // Reinitialization
    // highlight-next-line
    SDKInitialization.Initialize();
    
    // highlight-next-line
    await Task.Delay(125);
    
    // Init and launch
    SDKEntryPoint tmp_Entry = FindObjectOfType<SDKEntryPoint>();
    SDKConfiguration tmp_Configs = new SDKConfiguration
    {
        engineType = EngineType.Unity,
        dashboardConfig = new DashboardConfig {token = "", dashboardGateway = $"GATEWAY"},
        customConfig = new CustomConfig(),
        imageCloudRecognizerConfig = new ImageCloudRecognizerConfig(),
        AppModel = AppModel.Online
     };
    tmp_Entry.InitSDK(JsonUtility.ToJson(tmp_Configs));
    tmp_Entry.LaunchXRQuery("PROJECT UID");
}
```
:::tip
If you chose our XRMOD cloud, you can typing `https://phantomsxr.cn/api/v2/getarresource` for the [dashboardGateway](./api-reference/xrmod-api/SdkConfigure/DashboardConfig) field.
:::


| Name                  | Type     | Description                                                                                                     |
|---------------------|--------|--------------------------------------------------------------------------------------------------------|
| dashboardConfig     | String | Configure                                                               |
| token               | String | User authenticate
| dashboardGateway    | String | Dashboard gateway                                                                                           |
| timeout             | Int    | Timeout for http request                                                                              |
| maximumDownloadSize | Float  | The maximum download size of the AR experience pack. If this value is exceeded, the (void)packageSizeMoreThanPresetSize:(float)currentSize preset:(float)presetSize method will be responded to |
| EngineType          | String | It is used to tell what environment the AR MOD SDK is currently running in. If it is based on Unity secondary development, you need to fill in Unity.                                                     |
| AppModel            | String | The mode used to distinguish the current App is divided into three cases: Online-interconnection with Dashboard, Offline-not connected to the Internet by loading local content, Simulator--for Unity Editor                 |



## Close XRMOD

Since it can be turned on and off on demand, xrmod allows you to call [Dispose](./api-reference/xrmod-api/SdkEntryPoint#dispose) to turn off XR.

```cs
public void DisableAR(){
    var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
    tmp_SDKEntryPoint.Dispose();
    
    // Reload the Main scene for ready
    // highlight-next-line
    SceneManager.LoadScene("Main");
}
```
## Managed code stripping

During the build process, Unity removes unused or unreachable code through a process called [managed code stripping](https://docs.unity3d.com/Manual/ManagedCodeStripping.html), which can significantly decrease your application’s final size. Managed code stripping removes code from managed assemblies, including assemblies built from the C# scripts
 in your project, assemblies that are part of packages and plugins, and assemblies in .NET Framework.

Unity uses a tool called the Unity linker to perform a static analysis of the code in your project’s assemblies. The static analysis identifies any classes, portions of classes, functions, or portions of functions that can’t be reached during execution. This analysis only includes code that exists at build time because runtime generated code doesn’t exist when Unity performs the static analysis.

You can configure the level of code stripping Unity performs for your project using the **Managed Stripping Level** setting. To prevent Unity removing specific parts of your code, use annotations to indicate which parts of your code base the Unity linker should preserve. For more information, see Unity [linker](https://docs.unity3d.com/Manual/unity-linker.html).

**Example**:
```log
Could not produce class with ID 91.  
This could be caused by a class being stripped from the build even though it is needed. Try disabling 'Strip Engine Code' in Player Settings.
```

So we can copy the xml on the below into our project. 

:::tip
**HandheldARModule.Runtime** is a customized dependency library for handhelds(Mobile:Android device or iPhone), you need to choose according to your platform 
:::
 
```xml title="link.xml"
<linker>
    <!-- Chose your platform -->
    <assembly fullname="HandheldARModule.Runtime" preserve="all"/>
    <!-- Chose your platform -->

    <assembly fullname="GLTFExtension.Runtime" preserve="all"/>
    <assembly fullname="SDKEntry.Runtime" preserve="all"/>
    <assembly fullname="BaseFeaturesModule.Runtime" preserve="all"/>
    <assembly fullname="BaseFeaturesModule.Runtime" preserve="all"/>
    <assembly fullname="Phantoms.Models.Runtime" preserve="all"/>
    <assembly fullname="XRMODEngineCore.Runtime" preserve="all"/>
    <assembly fullname="Recorders.Libs" preserve="all"/>

    <assembly fullname="com.Phantoms.ARMODRenderingAssistant.Runtime" preserve="all"/>
    <assembly fullname="com.Phantoms.ARMODAPI.Runtime" preserve="all"/>
    <assembly fullname="com.Phantoms.UIExtension.Runtime" preserve="all"/>
    <assembly fullname="ILRuntime.Adapter.Runtime" preserve="all"/>Ï
    <assembly fullname="com.Phantoms.ILRuntime" preserve="all"/>
    <assembly fullname="ILRuntime.Runtime.CLR" preserve="all"/>
    <assembly fullname="ILRuntime.Runtime.CLRBingding.CLR.ILRT" preserve="all"/>
    <assembly fullname="ILRuntime.Runtime.CLRBingding.CLR.Phantoms" preserve="all"/>
    <assembly fullname="ILRuntime.Runtime.CLRBingding.CLR.System" preserve="all"/>
    <assembly fullname="ILRuntime.Runtime.CLRBingding.CLR.UnityEngine" preserve="all"/>
    <assembly fullname="ILRuntime.Runtime.CodeHook" preserve="all"/>
    <assembly fullname="ILRuntime.ValueBinder" preserve="all"/>
    <assembly fullname="com.PhantomsXR.VisualScriptingExtension.Runtime" preserve="all"/>
    <assembly fullname="com.Phantoms.WebrequestExtension.Runtime" preserve="all"/>
    <assembly fullname="com.PhantomsXR.MirrorExtension.Runtime" preserve="all"/>
    <assembly fullname="com.Phantoms.Immersal.Runtime" preserve="all"/>
    <assembly fullname="com.Phantoms.ActionNotification.Runtime" preserve="all"/>
    <assembly fullname="Unity.Timeline" preserve="all"/>
    <assembly fullname="com.unity.visualscripting" preserve="all"/>
    <assembly fullname="Unity.XR.Interaction" preserve="all"/>
    <assembly fullname="Unity.InputSystem" preserve="all"/>
    <assembly fullname="NavMeshComponents" preserve="all"/>
    <assembly fullname="UnityEngine" preserve="all"/>
</linker>

```

## Build app

Now you can open **BuildSetting** window to build your app via `File`->`BuildSettings`. 

:::danger
XRMOD experience scripts cannot directly call third-party methods or developer-defined script methods.  However, we also provide a way to do this, [click here to ready more](./custom-il-method).
:::

## Summary

Since then, our AR-APP has been completed. Using the XRMOD Engine has saved us a lot of time, and saved us the logic and knowledge of how to interact with the XR SDK. The next step is to create a beautiful UI/UX and XR experience for it. content. If you don't know how to make content, you can [click here](../experience-manual/tutorial-advanced/create-first-arexperience) to read it.

Unity ClassIDReference: https://docs.unity3d.com/Manual/ClassIDReference.html
Unity Assemblies: https://docs.unity3d.com/ScriptReference/UnityEngine.AIModule.html
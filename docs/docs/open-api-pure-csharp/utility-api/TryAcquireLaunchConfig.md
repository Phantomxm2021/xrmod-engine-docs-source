---
title: TryAcquireLaunchConfig
---


## Description

 Get the custom config data from SDK. You can customize your configuration parameters at startup via [custom config](../../unity-sdk/api-reference/xrmod-api/SdkConfigure/CustomConfig) in [configure](../../unity-sdk/api-reference/xrmod-api/SdkConfigure/Sdkconfiguration).Write your custom configuration to the **custom config**, and then the config is sent to XR-Experience via the [InitSDK](../../unity-sdk/api-reference/xrmod-api/SdkEntryPoint#initsdk) function.

:::danger
Only support SDK 2.0.0-pre.12
:::

## Method

```cs
public string TryAcquireLaunchConfig();
```

## Example

```cs title=InitSDK.cs
using SDKEntry.Runtime;

public async void ARModuleStart(){
    
    // Reinitialization
    SDKInitialization.Initialize();
    
    await Task.Delay(125);
    
    // Init and launch
    SDKEntryPoint tmp_Entry = FindObjectOfType<SDKEntryPoint>();
    SDKConfiguration tmp_Configs = new SDKConfiguration
    {
        engineType = EngineType.Unity,
        dashboardConfig = new DashboardConfig {token = "", dashboardGateway = $"GATEWAY"},
        customConfig = new CustomConfig(){config="Hi,this message is from custom config."},
        imageCloudRecognizerConfig = new ImageCloudRecognizerConfig(),
        AppModel = AppModel.Online
     };
    tmp_Entry.InitSDK(JsonUtility.ToJson(tmp_Configs));
    tmp_Entry.LaunchXRQuery("PROJECT UID");
}
```


```cs title=XRExperience.cs
internal static API ARMODAPI = new API(nameof(Examlpe));
private void OnLoad(){
    Debug.Log(ARMODAPI.TryAcquireLaunchConfig());
}
```



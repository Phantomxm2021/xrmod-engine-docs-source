
## 描述

 从SDK获取自定义配置数据。您可以在启动时通过[configure](.../.../unity-sdk/api-reference/xrmod-api/SdkConfigure/CustomConfig)自定义配置参数。 将你的自定义配置写入**自定义配置，然后通过[InitSDK](././unity-sdk/api-reference/xrmod-api/SdkEntryPoint#initsdk)函数将该配置发送给XR-Experience。

:::danger
只支持SDK 2.0.0-pre.12
:::

## 方法

```cs
public string TryAcquireLaunchConfig();
```

## 例子

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



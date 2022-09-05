SDKEntryPoint is the entrance to XRMOD. It is used to launch and shut down the XRMOD module.

## InitSDK
### Description

Initialize ARMOD SDK with configuration information. This method will call  automatically.

### Parameters
|Name|Type|Description|
|---|---|---|
|appconfigure|NSString|This is a json string. Use to init our sdk and authentication|

### Method
```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(_configuration);
```

---

## LaunchXRQuery

### Description

Query the ARExperience projecct by project uid.

:::tip
Call **SDKEntryPoint.LaunchXRQuery** method when you need to use XR to turn it on.
:::

### Parameters

| Name         | Type   | Description                                                                            |
| ------------ | ------ | -------------------------------------------------------------------------------------- |
| \_projectUid | String | The project uid is the unique id of each ARExperience. Can be used for retrieval, etc. |

:::tip
If the configuration AppModel is Offline, the Id is the name of the project you created with `PackageToolsEditor` (not case sensitive).
:::

### Method

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(JsonUtility.ToJson(_configuration));
tmp_SDKEntryPoint.LaunchXRQuery(_arExperienceId);
```

---

## Dispose

### Description

Unload current ARMOD Window

:::danger
When xrmod is closed, all content will be released. This includes **ActionNotifications** as well as art resources.
:::


### Method

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.Dispose();

//Reload the Main scene for ready
SceneManager.LoadScene("Main");
```

---
## CleanCache
### Description

Clean ARExperiences cache in the device

### Method

```dart
Future<void>? cleanCache()
```

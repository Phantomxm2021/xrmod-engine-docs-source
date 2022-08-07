## Description

Query the ARExperience projecct by project uid.

## Parameters

| Name         | Type   | Description                                                                            |
| ------------ | ------ | -------------------------------------------------------------------------------------- |
| \_projectUid | String | The project uid is the unique id of each ARExperience. Can be used for retrieval, etc. |

:::tip
If the configuration AppModel is Offline, the Id is the name of the project you created with `PackageToolsEditor` (not case sensitive).
:::

## Method

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(JsonUtility.ToJson(_configuration));
tmp_SDKEntryPoint.LaunchXRQuery(_arExperienceId);
```

## Description

Unload current ARMOD Window

## Method

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.Dispose();

//Reload the Main scene for ready
SceneManager.LoadScene("Main");
```
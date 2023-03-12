SDKEntryPoint 是 XRMOD 的入口。它被用来启动和关闭 XRMOD 模块。

## InitSDK

### 描述

用配置信息初始化 XRMOD SDK。此方法将自动调用。

### 参数

| Name         | Type     | 描述                                            |
| ------------ | -------- | ----------------------------------------------- |
| appconfigure | NSString | 这是一个 json 字符串。用来启动我们的 SDK 和认证 |

### 方法

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(_configuration);
```

---

## LaunchXRQuery

### 描述

通过项目 UID 查询 ARExperience 项目。

:::tip
当你需要使用 XR 来打开它时，调用**SDKEntryPoint.LaunchXRQuery**方法。
:::

### 参数

| Name         | Type   | 描述                                                       |
| ------------ | ------ | ---------------------------------------------------------- |
| \_projectUid | String | 项目 uid 是每个 ARexperience 的唯一 id。可用于检索，等等。 |

:::tip
如果配置 AppModel 是离线的，Id 是你用`PackageToolsEditor`创建的项目名称（不区分大小写）。
:::

### 方法

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.InitSDK(JsonUtility.ToJson(_configuration));
tmp_SDKEntryPoint.LaunchXRQuery(_arExperienceId);
```

---

## Dispose

### 描述

卸载当前 XRMOD 窗口

:::danger
当 xrmod 关闭时，所有内容将被释放。这包括**ActionNotifications**以及艺术资源。
:::

### 方法

```cs
var tmp_SDKEntryPoint = UnityEngine.Object.FindObjectOfType<SDKEntryPoint>();
tmp_SDKEntryPoint.Dispose();

//Reload the Main scene for ready
SceneManager.LoadScene("Main");
```

---

## CleanCache

### 描述

清理设备中的 ARExperiences 缓存

### 方法

```cs
void CleanCache()
```

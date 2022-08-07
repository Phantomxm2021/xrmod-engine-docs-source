## Description

将一个布局的 XML 文件实例化为其相应的 android.view.View 对象。它从不被直接使用。相反，使用 android.app.Activity#getLayoutInflater()或 Context#getSystemService 来检索一个标准的 LayoutInflater 实例，该实例已经与当前上下文挂钩，并为你所运行的设备正确配置。要为自己的视图创建一个带有额外工厂的新 LayoutInflater，可以使用 cloneInContext 来克隆一个现有的 ViewFactory，然后对其调用 setFactory 以包含你的工厂。由于性能原因，视图膨胀在很大程度上依赖于在构建时对 XML 文件的预处理。因此，目前不可能在运行时将 LayoutInflater 与 XmlPullParser 一起使用在一个普通的 XML 文件上；它只适用于从编译的资源中返回的 XmlPullParser


## Return

| Type           | Description          |
| -------------- | -------------------- |
| LayoutInflater | android view objects |

## Method

```java
public LayoutInflater getLayoutInflater()
```

## Description

Instantiates a layout XML file into its corresponding android view objects. It is never used directly. Instead, useandroid.app.Activity#getLayoutInflater() or Context#getSystemService to retrieve a standard LayoutInflater instance that is already hooked up to the current context and correctly configured for the device you are running on. To create a new LayoutInflater with an additional Factory for your own views, you can use cloneInContext to clone an existing ViewFactory, and then call setFactory on it to include your Factory. For performance reasons, view inflation relies heavily on pre-processing of XML files that is done at build time. Therefore, it is not currently possible to use LayoutInflater with an XmlPullParser over a plain XML file at runtime; it only works with an XmlPullParser returned from a compiled resource

## Return

| Type           | Description          |
| -------------- | -------------------- |
| LayoutInflater | android view objects |

## Method

```java
public LayoutInflater getLayoutInflater()
```

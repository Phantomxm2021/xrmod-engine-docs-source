---
sidebar_position: 1
title: 安装Unity Engine
description: 安装并结合Unity Engine来制作独一无二的XR体验。
---

## 安装

到[Unity 官方网站](https://unity3d.com/get-unity/download/archive)下载 Unity Hub。Unity Hub 安装好后，可以通过 Unity Hub 安装 Unity。

:::tip
XRMOD SDK 是使用 Unity 2021.3f1 开发的。 因此，所有 AR 体验内容都需要在 2021.3f1 之后开发。
:::

<coverimg url={require('@site/static/static/prepare-for-developer/unity-editor-preview.png')} height="100%" padding="0.5rem"/>

## 额外

### 创建一个 Unity 的项目

安装完 Unity 后，我们需要创建一个 Unity 项目。如下所示。

:::tip
XRMOD 只支持 URP`v.12+`渲染管线，所以我们需要创建一个 URP Unity 项目。我们可以通过 Universal Render Pipeline 模板来创建它。
:::

<coverimg url={require('@site/static/static/prepare-for-developer/unity-hub-create-project.png')} height="100%" padding="0.5rem"/>

### 优化项目结构（选择）

如果你想通过 URP 模板创建一个项目，你必须优化项目结构。项目结构可以根据个人的喜好来组织。

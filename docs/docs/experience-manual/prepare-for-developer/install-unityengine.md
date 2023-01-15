---
sidebar_position: 1
title: Install Unity Engine
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: install unity and develop xrmod experience case
---

## Install

Go to the official [Unity website](https://unity3d.com/get-unity/download/archive) to download Unity Hub. After Unity Hub is installed, you can install Unity through Unity Hub.

:::tip
The XRMOD SDK was developed using Unity 2021.3f1. Therefore, all AR experience content needs to be developed beyond 2021.3f1.
:::


<coverimg  url={require('@site/static/static/prepare-for-developer/unity-editor-preview.jpg')}/>

## Extras

### Create an unity project

After installing Unity, we need to create a Unity project. As follows:

:::tip
XRMOD only supports the URP `v.12+` rendering pipeline, so we need to create a URP Unity project. We can create it through the Universal Render Pipeline template.
:::

<coverimg  url={require("@site/static/static/prepare-for-developer/unity-hub-create-project.png")}/>

### Optimize project structure (option)

If you want to create a project via URP template, you have to optimize the project structure. The project structure can be organized according to personal preferences.

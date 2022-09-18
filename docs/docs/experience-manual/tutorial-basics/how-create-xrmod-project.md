---
title: How To Create XRMOD Project
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: Uisng Package Tools Editor to create a XRMOD proejct.
sidebar_position: 1
---

Previously, we have created a Unity project and installed the XRMOD development environment. Now we will create our first XRMOD project.

:::info
If you don't have Unity installed yet, [click here](../prepare-for-developer/install-unityengine) to go to see how to install it.  
:::

:::info
If you haven't installed the XRMOD development environment, please [click here](../prepare-for-developer/install-dev-environment) to see how to do so.
:::

## Create Our Project

We need to open **PackageToolsEditor** tool via `Unity Menu Bar`->`Tools`->`ARMOD`->`Package Tools Editor`.

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} height="100%" padding="0.5rem"/>

:::info
If you want to learn more about PackageToolsEditor, please [click here](../dev-tools/package-tools) to go to check it out.
:::

Move mouse to left side's project area and right click, Select New Project in the project workspace. to popup a project waizard and select a template to create a new project.

:::caution
Your project name can not start with a number or symbol, only A(a)-Z(z).
:::

<center>
<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/packagetoolseditor-create-project-guide.png')} width="80%" padding="0.5rem" label="Create XRMOD Project"/>
</center>

:::danger
The project storage path must be within the **Unity Assets folder** (within the Project directory of the Unity project), otherwise it cannot be recognized and created.
:::

<center>

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-editor-project-review.png')} width="80%" padding="0.5rem" label="Create XRMOD Project"/>

</center>


## Summary

Now your first XRMOD project has been created. You can also try to create a project by selecting another template.
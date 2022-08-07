---
sidebar_position: 1
title: Package Tools Editor
---

## What is the Package Tools

Package Tools is an indispensable content creation tool in the Ar-MOD framework. Let us easily manage resources, algorithms, compression, etc. Use them to release our content to all applications using the AR-MOD framework.

## User Interface

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/user-interface.png')} height="100%" padding="0.5rem"/>


|Color|Description|
|-----|-----------|
|Yellow|Project list, used to present local projects|
|Light purple|Configuration options menu, Property: AR features, used to configure various AR algorithm features, etc.; Contents: used to manage the resources in the AR experience package; Build: build an AR creative experience interactive package|
|Light Red|Configuration workspace, used to configure the current AR experience, content, packaging, etc.|


## How to use Package Tools

### Create A XRMOD Project

At first, open the packageTools tool interface by `Tools`-> `AR-MOD`-> `Package Tools Editor`

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-editor.png')} height="100%" padding="0.5rem"/>

Move mouse to left side's project area and right click, Select `New Project` in the project workspace. to popup a project waizard and select a template to create a new project.

:::tip
1. Project name is not allowed to use numbers or symbol, must start with A-Z/a-z characters.
2. The project save path must be in the Unity/Assets folder
:::



<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tool-create-project.png')} height="100%" padding="0.5rem"/>
<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-select-template.png')} height="100%" padding="0.5rem"/>


### Add AR Experience Features
- Set the AR algorithm am Algorithm (required)
- Set logical scripts and entry Programmable (required)
    - Domain Name must match the project name
    - MAIN Entry Create Project Name + MAINENTRY
- Set the required features (on-demand)

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-xr-project-detail.png')} height="100%" padding="0.5rem"/>

### Collect AR Objects
- Go to Content Section
- Drag the AR content resource from the Unity Assets panel to Content; and use short name naming. You can right click on the resource to select Short Name

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tools-collect-objects.png')} height="100%" padding="0.5rem"/>


### Build AR Experience
- Go to build Section
- Settings need to build a platform and gorup
- Set compression method  (recommended LZ4)
- Clilck build button to start build ARExperience

<coverimg  url={require('@site/static/static/dev-tools/packagetoolseditor/package-tool-build-project.png')} height="100%" padding="0.5rem"/>

:::danger
1. Build Platform and Platform Group must be the same!
2. Make sure the scene has been saved or not modified, otherwise it will not be packaged successfully.
:::

So far, the AR creative interactive experience resource package has been built, and it can be deployed to the [Dashboard](/)  later.

:::info
The AR creative experience content package will be output to your project root directory ServerData/package platform (such as: iOS)/project name under
- Your Project Name.arexperience
- Your Project Name.json
These  files will be upload to our dashboard later.
:::

## Summary

Use the Package Tools Editor to quickly create an XR-MOD experience project, and quickly set up and build for our XR experience. In addition, you can build your own templates and share them with creators all over the world.
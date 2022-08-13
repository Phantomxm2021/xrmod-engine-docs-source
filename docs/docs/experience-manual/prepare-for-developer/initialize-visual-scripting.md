---
sidebar_position: 4
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,metaverse,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: using visual scripting in unity to develop xrmod experience case
---

# Initialize Visual Scripting

## About Visual Scripting

Unity's visual scripting allows you to create logic for your Unity project without writing actual code. Traditional scripting in Unity is done using the C# programming language, while Visual Scripting is a visual "language" that allows you to draw a graph of instructions. For example, these two scripts do the same thing - they're just written in two different languages.

## Why use visual programming?

Visual Scripting brings the power of Unity scripting to non-coders and future coders. For the visually oriented, it makes it easier to learn and understand scripting concepts and even watch your script run in real time. It enables non-coders to extend or modify C# scripts and gives coders a way to collaborate better with artists and designers. Coders can also use Visual Scripting to create extensions, templates, and tools for other Unity users, so that everyone can customize their Unity projects, whether they know C# or not.

## What is the Unity Scripting API?

Visual Scripting also provides non-coders with access to the entire Unity scripting API - a fully defined set of classes, events, methods (behaviors) and properties (settings) that you can manipulate in Unity scripts. For example, the API includes the MonoBehaviours class, which has Start and Update methods available for each GameObject. While the API is large, you can do a lot in scripts with just a few basics. In Visual Scripting, you can find any class, event, method, and property in the API through a series of menus, making it easier to find and discover what you need. The best way to learn more about the API is to look it up (in the Unity Scripting API reference, or even in Visual Scripting) and experiment as you create your own scripts.

## Interested in programming?

If you're particularly interested in Unity programming, try the Beginner Programming Pathway (if you haven't already). You'll have a solid foundation in Unity programming - Visual Scripting can be another tool in your toolbox.


## Install

:::info
If you have already installed the XR-MOD dev-tools, you can skip this step.
:::

Reading the [how to install the dev-tools article](install-xrmod-dev-tools) to install the XR-MOD Vislau Scripting wrapper.

<coverimg  url={require('@site/static/static/prepare-for-developer/unity-visualscripting-install.png')} height="100%" padding="0.5rem"/>


# Initialization

Go to Menu bar and select the `Tools`->`VisualScripting`->`Init XR-MOD`. The initialization process will take place automatically.

<coverimg  url={require('@site/static/static/prepare-for-developer/unity-initialize-vswrapper.png')} height="100%" padding="0.5rem"/>

Well done. Here you have finished the visual scripting setup and initialization, Now you can enjoy creating to your heart's content.

# Validation

In Unity Editor Project Panel Right-Click to create a new file of Bolt graph by `Create` > `Bolt`/`VisualScripting` > `Script Graph`. Selete the Graph and Double Click or click the Edit Graph in Inspector ,  you will see the graph window is appears.

:::info
**Why are there bolt folders and keywords?**  
Because Bolt was acquired by Unity and renamed Visualscripting.
:::

import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="/static/videos/CreateVisualScripting.mp4" className="custom-video-showcase" />


Now we need to add new unit to our graph. Right-Click  in the graph view you will see the pop-up menu. If you see AR-MOID in the menu, it proves that our configuration has been successful. Then you can use your imagination and creativity to build an unparalleled AR experience.

<coverimg  url={require('@site/static/static/prepare-for-developer/unity-xrmod-menu-test.jpg')}/>
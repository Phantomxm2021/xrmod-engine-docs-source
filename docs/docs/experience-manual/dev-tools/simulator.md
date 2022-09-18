---
sidebar_position: 6
title: Simulator
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: ar simulator in unity editor with xrmod
---
import VideoPlayer from '@site/src/components/VideoPlayer'

As we know, that developing with Unity is a relatively enjoyable process, mainly because it's WYSIWYG and doesn't require tedious building and retesting, etc.

But for now, developing an XR experience requires repeated builds and tests, which wastes too much of our time.

Because running XR requires hardware devices, Unity can't help us with the environment simulation.

XRMOD Engine does not escape this fate either. Although XRMOD Engine can be used for debugging content after **only one build**, it occasionally fails to locate errors during the debugging process.

So we provide a simple tool to validate most of the errors within the Unity editor, although we call it an emulator but it's not the same as an actual emulator.

## Get Started

### Installation

XRMOD Engine currently provides processes such as loading tests within the Unity Editor, so we can verify all logic from within the Unity Editor. Before we can start testing we need to install the XRMOD Engine Simulator plugin via the Unity Package Manager.

:::info
[Click here](../prepare-for-developer/install-xrmod-dev-tools) to learn how to install the XRMOD engine toolchain.
:::

In here, we need to install XRMOD Engine Simulator plugin.

<center>

<coverimg url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimulatorPlugin.png')} padding="0.5rem" label="Install XRMOD Simulator Plugin"/>

</center>

When you finish the installation you can see an XR button in the top left corner of the Unity editor, which is mainly used to start the XRMOD Engine emulator.

<center>

<coverimg url={require('@site/static/static/tutorial-basics/how-to-load-assets/SimualtorBtn.png')} padding="0.5rem" label="Simulator"/>

</center>

### Launch Simulator

1. Click left-top **XR Play** button to launch XRMOD Engine simulator
2. Switch to **Game** view
3. Typing your project name into simulator
4. Click **Fetch Project** to loading our project

<VideoPlayer src="/static/tutorial-basics/how-to-load-assets/Test.mp4" className="custom-video-showcase" />

## Summary

The XRMOD Engine simulator helps us verify our code for bugs and gives us a WYSIWYG development state inside Unity. Although the XRMOD Engine simulator is still very rudimentary, we are constantly iterating on it, and in the next version we will add support for SLAM, planar, image tracking and other algorithms; so that we can truly get what we see is what we get.

<center>

<coverimg url={require('@site/static/static/dev-tools/simulator/simulator-next-version.png')} height="25rem" padding="0.5rem" label="Simulator"/>

</center>

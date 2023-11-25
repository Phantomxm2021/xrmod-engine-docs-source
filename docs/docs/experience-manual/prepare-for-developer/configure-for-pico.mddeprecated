---
title: Configure For Pico
keywords:
  [
    ar,
    xr,
    vr,
    apple glasses,
    hololens,
    quest,
    pico,
    easyAR,
    vuforia,
    xrmod,
    mod,
    doc,
    XR,
    facebook,
    meta,
    unity,
  ]
image: img/xrmod-docs-card.png
description: setup your pico device with XRMOD
---

<!-- <coverimg url={require('@site/static/static/prepare-for-developer/pico/pico.jpg')} height="25rem"/> -->


import VideoPlayer from '@site/src/components/VideoPlayer'

<VideoPlayer src="https://user-images.githubusercontent.com/82647748/209443143-1da3b52a-ff5f-40ef-8b58-613346bd81bd.mp4" className="custom-video-showcase" />



XRMOD was born to be cross-platform, to achieve one-time development and multi-platform deployment. Now we start to configure the Pico device.

:::danger
You must complete all the necessary operations in this chapter of [Install XR-Dev Environment](install-dev-environment).
:::


:::danger PICO SDK

XRMOD does not provide the Pico SDK, you need to go to the [PICO developer center](https://developer-global.pico-interactive.com/) to download the SDK.

:::

## MRTK3

<coverimg url={require('@site/static/static/prepare-for-developer/mrtk3/mrtk3.jpg')} height="25rem"/>

### Introduction

MRTK3 is the third generation of Microsoft Mixed Reality Toolkit for Unity. It's a Microsoft-driven open source project to accelerate cross-platform mixed reality development in Unity. This new version is built on top of Unity's XR Management system and XR Interaction Toolkit. Here are some of its functions:

- Provides the cross-platform input system and building blocks for spatial interactions and UI.
- Enables rapid prototyping via in-editor simulation that allows you to see changes immediately.
- Operates as an extensible framework that allows developers the ability to swap out core components.
  Supports a wide range of platforms:

| Platform              | Supported Devices                                                                                                                                                                                                       |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| OpenXR XR devices     | Microsoft HoloLens 2 Meta Quest (experimental) Windows Mixed Reality (experimental) SteamVR (experimental) Oculus Rift on OpenXR (experimental) Lenovo ThinkReality A3 (with Qualcomm Snapdragon Spaces - experimental) |
| Windows               | Traditional flat-screen desktop (experimental)                                                                                                                                                                          |
| And more coming soon! ||

:::tip MRTK3 Pico Support
MRTK3-Pico is not an official (Microsoft) support, which we adapted to XRMOD Pico based on the MRTK3 source code.
:::


### Install MRTK3-Pico

At first, go to our [Pico MRTK3](https://github.com/Phantomxm2021/PicoMRTK3) github repostiory and download it. Copy all MRTK3 Packages to your XRMOD Project:

- com.microsoft.mxiedreality.openxr
- com.microsoft.mrtk.accessibility
- com.microsoft.mrtk.audio
- com.microsoft.mrtk.core
- com.microsoft.mrtk.data
- com.microsoft.mrtk.diagnostics
- com.microsoft.mrtk.extendedassets
- com.microsoft.mrtk.input
- com.microsoft.mrtk.spatialmanipulation
- com.microsoft.mrtk.standardassets
- com.microsoft.mrtk.tools
- com.microsoft.mrtk.uxcomponents.noncanvas
- com.microsoft.mrtk.uxcomponents
- com.microsoft.mrtk.uxcore
- com.microsoft.mrtk.windowsspeech


### Configure MRTK3-Pico

All packages after importing the project, we need further setup. Open project settings panel via `Edit`->`ProjectSettings`->`MRTK3`.

:::tip
The necessity to set it for all platforms.
::::


<coverimg url={require('@site/static/static/prepare-for-developer/pico/SetupMRTK3.jpg')} height="25rem"/>

:::danger
Donot forget setup `Configuration Asset` for the `Pico MRTK Hands Aggregator Subsystem`.

<coverimg url={require('@site/static/static/prepare-for-developer/pico/Configuration.jpg')} height="25rem"/>


**How to setup?**

<coverimg url={require('@site/static/static/prepare-for-developer/pico/FindMRTKConfigurationFile.jpg')} />

:::


## Summary

MRTK3 can provide Pico with powerful natural gesture interaction and high-quality human-computer interaction experience.



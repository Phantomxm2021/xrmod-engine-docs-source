---
sidebar_position: 2
title: How XRMOD works
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,metaverse,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: Introducing how xrmod works, so you can understand more about xrmod.
---

XRMOD Engine is a metaverse construction system developed based on the OpenXR protocol. And XR-Experience content create by Unity Editor.  

XRMOD Engine can embed to a native App or build a standalone app with Unity Editor.

<coverimg url={require('../../static/static/home/xrmodworks.png')} />

The image above demonstrates how your app interacts with the XRMOD Engine and with the XRMOD Cloud. Allows you to add your own logic to the events that occur between `YOUR APP` <-> `XRMOD`; logic inside XRMOD such as how to obtain XR-Experience and display it or execute custom code, etc, `YOUR APP` No action is required and the XRMOD Engine takes over.

In order to reduce the size of the application installation package, we designed to separate `YOUR APP` and `XR-Experience` content, in addition to making our XR-Experience more flexible.

As mentioned above, XR-Experience is not included in the installation package. The purpose of this is to allow our application to carry more XR-Experience.
You do not need to change the logic code of the original app when adjusting the content of XR-Experience. You just need to make adjustments for your specific XR-Experience.

XR-Experience can be built using the Unity Editor, and we also offer a number of toolchains for Unity ideas. 
If you want to learn how to build an XR experience, [click here](../experience-manual/tutorial-advanced/create-first-arexperience) to read the article.
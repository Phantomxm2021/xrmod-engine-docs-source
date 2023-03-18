---
title: How To Holokit
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
description: Switch to Holokit mode
---

## Introduction

XR technology is a collective term for technologies such as extended reality (AR), virtual reality (VR), and mixed reality (MR), all of which are capable of creating virtual worlds or superimposing virtual elements onto the real world for users. These technologies are implemented primarily through sensors, computer vision and other perception technologies.

The trend of XR technology in the market is growing rapidly. With the advancement of technology and the expansion of application scenarios, XR technology is widely used in education, gaming, entertainment, medical, industrial and other fields. According to market research firm IDC, the global AR/VR market size will reach $162 billion in 2023.

The advantages of XR glasses, an important application form of XR technology, include

- The ability to provide an immersive experience, making users feel like they are in a virtual world.
- The ability to improve work efficiency, which is widely used in industry, healthcare and other fields.
- The ability to provide a more realistic experience in areas such as gaming and entertainment.
However, XR glasses also have some drawbacks, such as

- Head-mounted devices tend to cause discomfort such as vertigo and headaches.
- The potential for eye damage from prolonged use.
- The current XR glasses still have room for improvement in terms of resolution and field of view.

As for the price, the price of XR glasses varies depending on the brand, model, configuration, etc. Some consumer-grade products are priced between hundreds of dollars to thousands of dollars, while some professional-grade products are priced higher.

## XRMOD Cloud

XRMOD Cloud is an XR open platform system solution of Phantom (Xiamen) Technology Co., Ltd. which provides enterprises and customers with the latest, low-cost XR technology and open platform and deployment.
The services and platforms provided by XRMOD Cloud include

Zero-Code Authoring Cloud: This is a visual XR content authoring platform that helps users easily create and publish XR experience content without writing code. Users can use the platform to create customized XR experiences that can be deployed and published on multiple platforms.

Open Platform: XRMOD Cloud's open platform is built on the open OpenXR architecture and runtime interpreter to meet the needs of different industries and enterprises. The open platform helps users quickly build and distribute XR applications, and also supports a variety of XR devices, such as AR glasses, VR headsets, cell phones, etc. In addition, the open platform provides a series of APIs and tools that allow users to customize and extend their XR applications or experience content.

Through these services and platforms, XRMOD Cloud is dedicated to providing enterprises and customers with the latest XR technologies and open platforms to help them better apply XR technologies across their organizations or to their customers.
XRMOD Cloud is an easy-to-use XR creation platform with multiple features and scenarios to meet different needs of users. Whether it's a business application or a personal idea, XRMOD Cloud can help you achieve it quickly.
It allows you to easily create your own XR experience without coding experience, allowing your creativity to run freely in the AR world.

### HoloKit X

HoloKit X is an iPhone accessory product from Holo Interactive that turns your phone into a sixty-degree optical see-through stereo augmented reality headset. Explore holograms in mixed reality through a direct view of the real world. The future is yours to see and imagine. You won't need to spend up to thousands of RMB or even $3000+ to purchase XR glasses or worry about eating dust!

<coverimg  url={require('@site/static/static/tutorial-basics/how-to-holokit/holokit.jpeg')} padding="0.5rem" label="Figure 1. HoloKit X."/>

## Creativity

### Introduction
In the past, when we bought XR devices, we could only install content developed by professionals from the store, leaving us with no way to implement our ideas because we were not developers!

On the contrary, we pursue the idea that everyone is a creator and can fully sketch and realize their own ideas or creativity in the XR world and share them with your family and friends.

XRMOD Cloud and HoloKit give you an unprecedented experience and creative journey. You can be a novice programmer, a newbie who knows nothing about 3D, or a creative developer, you can use XRMOD Cloud to realize all your wonderful and fantastic ideas and thoughts, and experience a hands-on XR experience!

### Creation

- You will need to go to phantomsxr.com to register an account
- After logging into your account, you will need to create an application that will house the XR Experience project
- After entering the application, create an XR project and select the UDM (horizontal placement) or vertical placement category of the project
- Follow the prompts step by step to complete. Once created, view the project details and click and launch the XR editor to edit our 3D model
- Upload your own models, or skip setting them up later if you don't have them, or create them using the 1,000,000+ 3D models provided by XRMOD Cloud
- Finally, download our ARMOD application from [TestFlight](https://testflight.apple.com/join/glgDQIsw) and log in to your account, if you have a long beta app, please stop testing first.
- Fixed orientation of the unlock screen
- Scan your dashboard's QR code via Swipe in the Account Center
- Play the content and place it out first, then scroll to the left and click the button in the upper right corner to enter Holokit mode
- Insert the phone into the Holokit accessory and adjust the phone position, you can put it on to experience!

### Extras

We can call [ChangeARAlgorithmLife](../../open-api-pure-csharp/ar-base-api/ChangeARAlgorithmLife) API to enable the Holokit mode.

For Example:
```csharp
internal static readonly API ARMODAPI = new API(nameof(YOUR_PROJECT_NAME_HERE));
private bool isMRMode = false;
ARMODAPI.ChangeARAlgorithmLife(new ARAlgorithmNotificationData
{
    BaseData = isMRMode ? "0" : "1",
    ARAlgorithmType = ARAlgorithmType.Stereo,
    ARAlgorithmOperator = ARAlgorithmOperator.StartAlgorithm,
    Mixed = false
});
```
:::danger
Here we need to passing the **BaseData** data. 0 for monocular mode and 1 for stereo mode.
:::
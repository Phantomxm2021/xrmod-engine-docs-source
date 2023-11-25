---
title: Configure For Hololens
keywords: [ar,xr,vr,apple glasses,hololens,quest,pico,easyAR,vuforia,xrmod,mod,doc,XR,facebook,meta,unity]
image: img/xrmod-docs-card.png
description: setup your hololens device with XRMOD
---

<coverimg  url={require('@site/static/static/prepare-for-developer/hololens/hololens.jpg')} height="25rem"/>

XRMOD was born to be cross-platform, to achieve one-time development and multi-platform deployment. Now we start to configure the Hololens device.

:::danger
You must complete all the necessary operations in this chapter of [Install XR-Dev Environment](install-dev-environment).
:::


:::danger MRTK SDK

XRMOD does not provide the Pico SDK, you need to go to the [Mixed Reality Feature Tool for Unity download page](https://www.microsoft.com/en-us/download/details.aspx?id=102778) to download the SDK.

:::


## Import Required Packages

There are a handful of packages that MRTK3 uses that aren't part of this preview. To obtain these packages, use the Mixed Reality Feature Tool and select the latest versions of the following in the Discover Features step.

Since MRTK3 is in early preview release, you need to check 'Show preview releases' under Settings > Feature tab.


<coverimg  url={require('@site/static/static/prepare-for-developer/mrtk3/mrtk3-featuretool-settings.jpg')} height="25rem"/>

- Platform Support → Mixed Reality OpenXR Plugin
- Spatial Audio → Microsoft Spatializer (Optional)

For MRTK3 packages, we highly recommend the following two packages to help you get started quickly:

- MRTK3 → MRTK Input (Required for this setup)
- MRTK3 → MRTK UX Components

These two packages, along with their dependencies (automatically added by the Feature Tool), will enable you to explore most of our UX offerings and create projects ready to be deployed to various XR devices. You can always come back to the Feature Tool and add more packages to your project later.

:::info

For more information on MRTK3 packages, [see the package overview page](https://learn.microsoft.com/en-us/windows/mixed-reality/mrtk-unity/mrtk3-overview/packages/packages-overview).

:::

When you're finished selecting packages, click Get features, and then follow the instructions in the Mixed Reality Feature Tool to import the selected packages into your Unity project.

## Configure MRTK profile

Once imported, MRTK3 requires a profile to be set for the standalone target platform and each additional target platform.

1. Navigate to `Edit` > `Project Settings`.

2. Under **Project Settings**, navigate to MRTK3 and then switch to the standalone tab. Note that the profile is initially unspecified.

3. Populate the field with the default MRTK profile that ships wih the core package. You can type in the keyword "MRTKprofile" in the search bar of the project window; make sure you search in **All**. Alternatively, you can find the profile under `Packages/com.microsoft.mrtk.core/Configuration/Default Profiles/MRTKProfile.asset`.


:::info
Not all of the MRTK subsystems are shown in the screenshot below. The MRTK subsystems that you see may be different depending on the MRTK3 packages you've added to your project.
:::

<coverimg  url={require('@site/static/static/prepare-for-developer/mrtk3/mrtk-profile.jpg')} height="25rem"/>

4. Switch to the tabs of other build target(s) you want to use (for example, UWP, Android) and check to see if the profile is assigned. If not, repeat the previous step on the current tab.


## Configure OpenXR-related settings

Once imported, MRTK3 requires some configuration on OpenXR if you're targeting an XR device such as HoloLens 2 or Quest.

1. Navigate to Edit > Project Settings.

2. Under Project Settings, navigate to XR Plug-in Management and enable OpenXR under both the Standalone and UWP tabs. Under each tab, ensure that Initialize XR on Startup is selected and that the Windows Mixed Reality feature group under Standalone and the Microsoft HoloLens feature group under UWP are enabled.

:::info

A yellow warning icon may appear after checking the OpenXR option. Click that icon to open the OpenXR Project Validation tool. Click Fix all and ignore the interaction profile issue that can't be auto-fixed. The profiles will be added in the step below.

:::

For standalone:

<coverimg  url={require('@site/static/static/prepare-for-developer/mrtk3/standalone-xr-plug-in-management.jpg')} height="25rem"/>


For UWP:


<coverimg  url={require('@site/static/static/prepare-for-developer/mrtk3/uwp-xr-plug-in-management.jpg')} height="25rem"/>

3. Under Project Settings, navigate to XR Plug-in Management > OpenXR > Interaction Profiles and add the following three profiles for UWP and Standalone:

- Eye Gaze Interaction Profile
- Microsoft Hand Interaction Profile
- Microsoft Motion Controller Profile

:::info  

You might need to use the OpenXR Project Validation tool to eliminate the yellow triangle. Some of the warnings may be resolved manually:
1. Under Project Settings, navigate to Player > Resolution and Presentation. Ensure that Run in Background is unchecked.
2. For UWP, under Player > Publishing Settings > Capabilities, ensure that WebCam, Microphone, SpatialPerception, and GazeInput are checked if these features are needed by the application. For more information about Window's App Capabilities see [App capability declarations](https://learn.microsoft.com/en-us/windows/uwp/packaging/app-capability-declarations).

:::

For standalone:
<coverimg  url={require('@site/static/static/prepare-for-developer/mrtk3/standalone-openxr.jpg')} height="25rem"/>

For UWP:
    <coverimg  url={require('@site/static/static/prepare-for-developer/mrtk3/uwp-xr-plug-in-management.jpg')} height="25rem"/>

4. For HoloLens 2, we recommend that you set Depth Submission Mode to 16-bit in the settings above. For immersive headsets, you can use 24-bit depth submission. See the [Microsoft development docs for Unity](https://learn.microsoft.com/en-us/windows/mixed-reality/develop/unity/recommended-settings-for-unity#enable-depth-buffer-sharing) for more info.

